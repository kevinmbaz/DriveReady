const {chromium}=require('@playwright/test');
const {pathToFileURL}=require('node:url');
const path=require('node:path');
(async()=>{
const browser=await chromium.launch({executablePath:'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1100}});
await page.goto(pathToFileURL(path.resolve(__dirname,'../index.html')).href);
await page.locator('[data-action="quick"]').click();
await page.locator('[data-action="select"]').first().click();
await page.locator('[data-action="check"]').click();
await page.reload();
if(!await page.locator('.answer-feedback').isVisible())throw Error('File-mode persistence failed');
await page.locator('[data-action="leave"]').click();
await page.screenshot({path:'test-results/file-mode-desktop.png',fullPage:true});
console.log('File-mode launch, quiz and reload persistence passed.');
await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1;});
