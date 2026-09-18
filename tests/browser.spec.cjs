const {test,expect}=require('@playwright/test');
const questions=require('../questions.js');
const key='drive-ready-v1';
const getState=page=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
async function choose(page,correct=true){const state=await getState(page);const q=questions.find(q=>q.id===state.session.items[state.session.index].id);await page.locator(`[data-action="select"][data-choice="${correct?q.answer:(q.answer+1)%4}"]`).click();await page.locator('[data-action="check"]').click();return q;}
test('Complete practice, bookmark, read source, reload and repair a mistake',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');await page.locator('[data-action="quick"]').click();
 await page.getByRole('button',{name:'Save question',exact:true}).click();
 const q=await choose(page,false);
 await expect(page.locator('.answer-feedback')).toContainText(q.explanation);
 await page.locator('[data-action="source"]').click();await expect(page.locator('#source-dialog')).toBeVisible();
 await expect(page.locator('#source-image')).toHaveAttribute('src',`assets/book/page-${String(q.page+1).padStart(2,'0')}.jpg`);
 await page.keyboard.press('Escape');await page.reload();await expect(page.locator('.answer-feedback')).toBeVisible();
 expect((await getState(page)).xp).toBe(2);
 await page.locator('[data-action="next"]').click();
 for(let i=1;i<10;i++){await choose(page,true);await page.locator('[data-action="next"]').click();}
 await expect(page.locator('h2').first()).toContainText('9 out of 10');
 expect((await getState(page)).xp).toBe(92);
 await page.locator('[data-nav="mistakes"]').click();await expect(page.locator('.saved-card')).toHaveCount(1);
 await page.locator('[data-action="review"]').click();await choose(page,true);await page.locator('[data-action="next"]').click();
 await page.locator('[data-nav="mistakes"]').click();await expect(page.locator('.empty-state')).toBeVisible();
 await page.locator('[data-nav="saved"]').click();await expect(page.locator('.saved-card')).toHaveCount(1);
 await page.locator('[data-action="remove-saved"]').click();await expect(page.locator('.empty-state')).toBeVisible();
 expect(errors).toEqual([]);
});
test('Timed round withholds explanations and grades once at completion',async({page})=>{
 await page.goto('/#challenge');await page.locator('[data-action="timed"]').click();
 const start=await getState(page);expect(new Set(start.session.items.map(i=>questions.find(q=>q.id===i.id).topic)).size).toBe(6);
 for(let i=0;i<20;i++){await choose(page,i<15);if(i<19){await expect(page.locator('.answer-feedback')).toHaveCount(0);expect((await getState(page)).xp).toBe(0);}}
 await expect(page.locator('h2').first()).toContainText('15 out of 20');expect((await getState(page)).xp).toBe(160);
 await page.reload();expect((await getState(page)).xp).toBe(160);
});
test('Expired timer counts unanswered questions and preserves submitted answers',async({page})=>{
 await page.goto('/#challenge');await page.locator('[data-action="timed"]').click();await choose(page,true);
 await page.evaluate(k=>{const s=JSON.parse(localStorage.getItem(k));s.session.deadline=Date.now()-1000;localStorage.setItem(k,JSON.stringify(s));},key);await page.reload();
 await expect(page.locator('h2').first()).toContainText('1 out of 20');await expect(page.locator('.result-card')).toContainText('19 unanswered');expect((await getState(page)).session).toBeNull();
});
test('Daily bonus is awarded only once and daily questions remain consistent',async({page})=>{
 await page.goto('/');await page.locator('[data-action="daily"]').click();const first=(await getState(page)).session.items.map(i=>i.id);
 for(let i=0;i<5;i++){await choose(page,true);await page.locator('[data-action="next"]').click();}expect((await getState(page)).xp).toBe(70);
 await page.locator('[data-nav="home"]').click();await page.locator('[data-action="daily"]').click();expect((await getState(page)).session.items.map(i=>i.id)).toEqual(first);
 for(let i=0;i<5;i++){await choose(page,true);await page.locator('[data-action="next"]').click();}expect((await getState(page)).xp).toBe(120);
});
test('Desktop and mobile render without overflow; all book pages load',async({page})=>{
 await page.setViewportSize({width:1440,height:1100});await page.goto('/');await page.screenshot({path:'test-results/desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/mobile.png',fullPage:true});
 for(const route of ['home','topics','challenge','book','progress','mistakes','saved']){await page.goto('/#'+route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();}
 await page.goto('/#book');await expect(page.locator('.book-page')).toHaveCount(21);await page.locator('.book-page').last().click();await expect(page.locator('#source-title')).toHaveText('Stopping distances');
 await expect(page.locator('#source-image')).toBeVisible();await expect.poll(()=>page.locator('#source-image').evaluate(img=>img.complete&&img.naturalWidth>0)).toBeTruthy();
 await page.keyboard.press('Escape');await page.goto('/');await page.locator('[data-action="quick"]').click();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 await page.screenshot({path:'test-results/mobile-quiz.png',fullPage:true});
});
test('A new round offers to preserve the current session',async({page})=>{
 await page.goto('/');await page.locator('[data-action="quick"]').click();await choose(page,true);await page.locator('[data-action="leave"]').click();
 await page.locator('[data-action="daily"]').click();await expect(page.locator('h1')).toHaveText('You have a practice in progress.');await page.locator('[data-action="resume"]').click();await expect(page.locator('.answer-feedback')).toBeVisible();
});
