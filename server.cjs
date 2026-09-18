const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = process.argv.includes('--dist') ? path.join(__dirname,'dist') : __dirname;
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.jpg':'image/jpeg','.png':'image/png','.webmanifest':'application/manifest+json'};
http.createServer((req,res)=>{
  if(!['GET','HEAD'].includes(req.method)){res.writeHead(405,{'Allow':'GET, HEAD'}).end();return;}
  let name;
  try { name=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400).end();return;}
  if(name==='/') name='/index.html';
  const allowed=['/index.html','/styles.css','/responsive.css','/app.js','/questions.js','/study-engine.js','/readiness-ui.js','/manifest.webmanifest'];
  const file=path.resolve(root,'.'+name);
  const isAsset=file.startsWith(path.join(root,'assets')+path.sep)&&['.svg','.jpg','.png'].includes(path.extname(file));
  if(!file.startsWith(root+path.sep)||(!allowed.includes(name)&&!isAsset)){res.writeHead(404).end('Not found');return;}
  fs.readFile(file,(err,data)=>{if(err){res.writeHead(404).end('Not found');return;}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});res.end(req.method==='HEAD'?undefined:data);});
}).listen(Number(process.env.PORT)||4173,'127.0.0.1',()=>console.log('DriveReady is running at http://localhost:'+(Number(process.env.PORT)||4173)));
