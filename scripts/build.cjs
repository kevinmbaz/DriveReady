const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname,'..');
const output = path.join(root,'dist');
// This generated directory is the only recursive removal target.
if (path.dirname(output)!==root || path.basename(output)!=='dist') throw Error('Invalid build destination');
fs.rmSync(output,{recursive:true,force:true});
fs.mkdirSync(output,{recursive:true});
const files=['index.html','styles.css','responsive.css','questions.js','study-engine.js','readiness-ui.js','app.js','manifest.webmanifest','robots.txt','_headers'];
for(const file of files)fs.copyFileSync(path.join(root,file),path.join(output,file));
fs.cpSync(path.join(root,'assets'),path.join(output,'assets'),{recursive:true});
const html=fs.readFileSync(path.join(output,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
  if(/^[a-z][a-z0-9+.-]*:/i.test(match[1]))continue;
  if(!fs.existsSync(path.join(output,match[1])))throw Error('Missing build asset: '+match[1]);
}
console.log('Built dist/: static website, local assets and hosting headers. No development files or learner progress included.');
