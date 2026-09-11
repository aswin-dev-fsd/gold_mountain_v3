import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const textDirs = ['app','components','lib','styles'];
const files = textDirs.flatMap((dir) => walk(path.join(root, dir)));
const source = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

const requiredColors = ['#F7F3EA','#214D33','#C49A3A','#8F2D24'];
const unexpectedHex = [...source.matchAll(/#[0-9A-Fa-f]{6}/g)].map(m=>m[0].toUpperCase()).filter(x=>!requiredColors.includes(x));
const forbiddenText = ['Garet Sans','Aileron','-60%','BOOK NOW'];
const violations = forbiddenText.filter(x => source.toLowerCase().includes(x.toLowerCase()));

for (const dir of ['app']) {
  if (!fs.existsSync(path.join(root, dir))) throw new Error(`Missing ${dir}`);
}
const routes = ['page.tsx','wellness/page.tsx','stay/page.tsx','experience/page.tsx','about/page.tsx','blog/page.tsx','contact/page.tsx','book-enquire/page.tsx','privacy/page.tsx','terms/page.tsx'];
for (const r of routes) if (!fs.existsSync(path.join(root,'app',r))) throw new Error(`Missing route source app/${r}`);

const assetMatches = [...source.matchAll(/(?:src=|url\()\s*["'`]?(\/images\/[^"'`)\s]+)["'`]?/g)].map(m=>m[1]);
const uniqueAssets=[...new Set(assetMatches)];
for (const a of uniqueAssets) if (!fs.existsSync(path.join(root,'public',a.slice(1)))) throw new Error(`Missing referenced asset ${a}`);

const fonts = ['Outfit-Regular.woff2','TheSeasons-Regular.woff2','TheSeasons-Bold-subset.woff2'];
for (const f of fonts) if (!fs.existsSync(path.join(root,'public/fonts',f))) throw new Error(`Missing font ${f}`);
if (!source.includes('prefers-reduced-motion')) throw new Error('Reduced-motion support missing');
if (!source.includes('gsap.registerPlugin(ScrollTrigger, useGSAP)')) throw new Error('GSAP React registration missing');

if (unexpectedHex.length) throw new Error(`Unexpected 6-digit colors: ${[...new Set(unexpectedHex)].join(', ')}`);
if (violations.length) throw new Error(`Forbidden/legacy text found: ${violations.join(', ')}`);

console.log('Static source audit: PASS');
console.log(`Routes: ${routes.length} checked`);
console.log(`Referenced local image assets: ${uniqueAssets.length} checked`);
console.log(`Fonts: ${fonts.length} checked`);
console.log('Brand palette: PASS (only approved six-digit brand colors in app/components/lib/styles)');
console.log('Reduced motion + GSAP React registration: PASS');

function walk(dir){
  if(!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]).filter(f=>/\.(tsx|ts|css)$/.test(f));
}
