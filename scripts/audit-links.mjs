import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const files = [];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory()&&!entry.name.startsWith('.'))walk(p);else if(/\.(tsx?|css)$/.test(entry.name))files.push(p);}}
walk(path.join(root,'app')); walk(path.join(root,'components')); walk(path.join(root,'lib'));
const source=files.map(f=>fs.readFileSync(f,'utf8')).join('\n');
const hrefs=[...source.matchAll(/href="(\/[^"]*)"/g)].map(m=>m[1].split('#')[0]).filter(Boolean);
const unique=[...new Set(hrefs)];
const routes=new Set(['/']);
for(const file of walkRoutes(path.join(root,'app'))){routes.add(file)}
const missing=unique.filter(h=>!routes.has(h));
if(missing.length){console.error('Missing internal routes:',missing);process.exit(1)}
console.log('Internal link audit: PASS');
console.log(`Internal hrefs: ${unique.length} checked`);

function walkRoutes(dir, prefix=''){
  const out=[];
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    if(entry.name.startsWith('.')) continue;
    const p=path.join(dir,entry.name);
    if(entry.isDirectory()){
      if(entry.name==='api'||entry.name.startsWith('[')) continue;
      out.push(...walkRoutes(p, `${prefix}/${entry.name}`));
    } else if(entry.name==='page.tsx') out.push(prefix || '/');
  }
  return out;
}
