const { defineConfig } = require('@playwright/test');
const fs = require('node:fs');
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const executablePath = process.env.BROWSER_PATH || (fs.existsSync(chrome) ? chrome : undefined);
module.exports=defineConfig({testDir:'tests',testMatch:'*.spec.cjs',fullyParallel:false,workers:1,reporter:'list',use:{baseURL:'http://127.0.0.1:4180',launchOptions:{executablePath},headless:true},webServer:{command:'node server.cjs',env:{PORT:'4180'},url:'http://127.0.0.1:4180',reuseExistingServer:true},outputDir:'test-artifacts'});
