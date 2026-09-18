const {test,expect}=require('@playwright/test');
const questions=require('../questions.js');
const engine=require('../study-engine.js');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const key='drive-ready-v1';
const getState=page=>page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);
async function seed(page,s){await page.goto('/');await page.evaluate(({key,s})=>localStorage.setItem(key,JSON.stringify(s)),{key,s});await page.reload();}
function sampleState(){
 const s=engine.blank();const now=new Date().toISOString();
 questions.forEach((q,i)=>{if(i%5!==0)s.attempts[q.id]={total:2,correct:i%3?2:1,last:i%3!==0,lastAt:now};});
 for(let i=0;i<2;i++){const items=questions.slice(0,20).map(q=>({id:q.id,order:[0,1,2,3]}));const answers=items.map((item,n)=>({id:item.id,selected:n<17-i?0:1,correct:n<17-i}));s.history.push({mode:'timed',label:'Timed challenge',items,answers,correct:17-i,total:20,date:new Date(Date.now()-i*86400000).toISOString()});}
 s.xp=820;return s;
}
test('Readiness handles fresh, established and legacy progress and saves an exam date',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/#readiness');await expect(page.locator('.readiness-score')).toContainText('Building your baseline');await expect(page.locator('.readiness-score strong')).toHaveText('0');
 await page.locator('#exam-date').fill('2027-03-12');await page.getByRole('button',{name:'Save date',exact:true}).click();await page.reload();await expect(page.locator('#exam-date')).toHaveValue('2027-03-12');expect((await getState(page)).examDate).toBe('2027-03-12');
 await page.locator('[data-action="clear-date"]').click();await expect(page.locator('#exam-date')).toHaveValue('');
 await seed(page,sampleState());await page.goto('/#readiness');await expect(page.locator('.topic-readiness-row')).toHaveCount(6);await expect(page.locator('.timed-result')).toHaveCount(2);await expect(page.locator('.readiness-score strong')).not.toHaveText('0');
 await page.locator('.next-step [data-action="smart"]').click();await expect(page.locator('.quiz-card')).toBeVisible();expect(new Set((await getState(page)).session.items.map(i=>i.id)).size).toBe((await getState(page)).session.items.length);
 expect(errors).toEqual([]);
});
test('Mobile bottom navigation, full menu and keyboard focus work',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 await page.locator('[data-mobile-nav="readiness"]').click();await expect(page.locator('h1')).toHaveText('Your exam readiness.');await expect(page.locator('[data-mobile-nav="readiness"]')).toHaveAttribute('aria-current','page');
 await page.getByRole('button',{name:'More navigation options'}).click();await expect(page.locator('#navigation-dialog')).toBeVisible();
 await page.locator('#navigation-dialog').getByRole('link',{name:'Saved questions',exact:true}).click();await expect(page.locator('#navigation-dialog')).not.toBeVisible();await expect(page.locator('h1')).toHaveText('Your saved questions.');
 await page.getByRole('button',{name:'Open navigation menu'}).click();await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'Open navigation menu'})).toBeFocused();
});
test('All views fit small phones through large desktops, with readable answers',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await seed(page,sampleState());
 for(const width of [320,390,600,768,900,1024,1440]){
   await page.setViewportSize({width,height:900});
   for(const route of ['home','readiness','topics','challenge','book','progress','mistakes','saved','about']){
     await page.goto('/#'+route);
     expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${width}px ${route}`).toBeTruthy();
   }
 }
 await page.setViewportSize({width:1440,height:1050});await page.goto('/#readiness');await page.screenshot({path:'test-results/readiness-desktop.png',fullPage:true});
 await page.goto('/');await page.screenshot({path:'test-results/upgraded-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.goto('/#readiness');await page.screenshot({path:'test-results/readiness-mobile.png',fullPage:true});
 await page.goto('/');await page.locator('[data-action="quick"]').click();await expect(page.locator('.mobile-bottom-nav')).toBeHidden();
 expect(await page.locator('.answer').first().evaluate(el=>parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(15);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 await page.screenshot({path:'test-results/upgraded-mobile-quiz.png',fullPage:true});expect(errors).toEqual([]);
});
test('Progress backups can be downloaded and restored only after confirmation',async({page})=>{
 await seed(page,sampleState());await page.goto('/#about');const downloadPromise=page.waitForEvent('download');await page.locator('[data-action="export"]').click();const download=await downloadPromise;const file=await download.path();expect(download.suggestedFilename()).toMatch(/^driveready-progress-.*\.json$/);
 await page.evaluate(k=>localStorage.removeItem(k),key);await page.reload();await page.locator('#progress-file').setInputFiles(file);await expect(page.locator('#restore-dialog')).toBeVisible();expect(await getState(page)).toBeNull();
 await page.locator('[data-action="cancel-restore"]').click();expect(await getState(page)).toBeNull();
 await page.locator('#progress-file').setInputFiles(file);await page.locator('[data-action="confirm-restore"]').click();expect((await getState(page)).xp).toBe(820);await page.reload();expect((await getState(page)).history.length).toBe(2);
 await page.locator('#progress-file').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from('{no')});await expect(page.locator('#toast')).toContainText('not valid JSON');expect((await getState(page)).xp).toBe(820);
});
test('Assisted timed practice is excluded and unanswered questions enter review',async({page})=>{
 await page.goto('/#challenge');await page.locator('[data-action="timed"]').click();await page.goto('/#book');await page.locator('.book-page').first().click();await page.keyboard.press('Escape');
 await page.evaluate(k=>{const s=JSON.parse(localStorage.getItem(k));s.session.deadline=Date.now()-1000;localStorage.setItem(k,JSON.stringify(s));},key);await page.goto('/#quiz');await page.reload();
 await expect(page.locator('h1')).toHaveText('Every round is a chance to learn.');const s=await getState(page);expect(s.needsReview.length).toBe(20);expect(s.history[0].assisted).toBe(true);
 await page.goto('/#readiness');await expect(page.locator('.recent-timed')).toContainText('No recent timed rounds');await page.goto('/#mistakes');await expect(page.locator('.saved-card')).toHaveCount(20);
});
test('Malformed stored data recovers without breaking navigation',async({page})=>{
 await seed(page,{attempts:{oops:null},saved:['missing'],xp:'NaN',days:5,history:[{items:null}],session:{mode:'quick',index:-1}});await page.goto('/#readiness');await expect(page.locator('.readiness-score strong')).toHaveText('0');await page.locator('.next-step button').click();await expect(page.locator('.quiz-card')).toBeVisible();
});
test('Source reader zoom is usable on a narrow phone',async({page})=>{
 await page.setViewportSize({width:320,height:680});await page.goto('/#book');await page.locator('.book-page').nth(2).click();await page.locator('[data-action="zoom-page"]').click();await expect(page.locator('[data-action="zoom-page"]')).toHaveAttribute('aria-pressed','true');
 expect(await page.locator('.reader-image-wrap').evaluate(el=>el.scrollWidth>el.clientWidth)).toBeTruthy();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();await page.keyboard.press('Escape');
});
test('All four mobile answers remain selectable and skip link retains the current route',async({page})=>{
 await page.setViewportSize({width:320,height:680});await page.goto('/#readiness');await page.locator('.skip-link').focus();await page.keyboard.press('Enter');await expect(page.locator('h1')).toHaveText('Your exam readiness.');await expect(page.locator('#main')).toBeFocused();
 await page.goto('/');await page.locator('[data-action="quick"]').click();await page.locator('.answer').nth(3).click();await expect(page.locator('.answer').nth(3)).toHaveAttribute('aria-pressed','true');await page.locator('[data-action="check"]').click();await expect(page.locator('.answer-feedback')).toBeVisible();
});
test('Publish build also runs directly from disk without runtime dependencies',async({page})=>{
 await page.goto(pathToFileURL(path.resolve(__dirname,'../dist/index.html')).href+'#readiness');await expect(page.locator('h1')).toHaveText('Your exam readiness.');await page.locator('.next-step button').click();await expect(page.locator('.quiz-card')).toBeVisible();
});
