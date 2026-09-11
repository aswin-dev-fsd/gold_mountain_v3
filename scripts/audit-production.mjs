import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (p) => fs.readFileSync(path.isAbsolute(p) ? p : path.join(root,p), 'utf8');
const home = read('app/page.tsx') + read('components/WellnessJourney.tsx');
const requiredHomeLabels = ['01 / Hero', '02 / Wellness', '03 / Location', '04 / Dining', '05 / The Resort', '06 / Experience', '07 / Stay', '08 / Trust', '09 / Blog', '10 / Book or enquire'];
const missingHome = requiredHomeLabels.filter((x) => !home.includes(x));
if (missingHome.length) throw new Error(`Homepage hierarchy missing: ${missingHome.join(', ')}`);

const requiredRoutes = ['app/page.tsx','app/wellness/page.tsx','app/stay/page.tsx','app/experience/page.tsx','app/about/page.tsx','app/blog/page.tsx','app/blog/[slug]/page.tsx','app/contact/page.tsx','app/book-enquire/page.tsx','app/api/enquiry/route.ts'];
for (const route of requiredRoutes) if (!fs.existsSync(path.join(root,route))) throw new Error(`Missing implementation route: ${route}`);

const publicSource = path.join(root,'public/source');
if (fs.existsSync(publicSource)) throw new Error('Source documents remain publicly exposed under public/source');

const all = [];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()&&!e.name.startsWith('.'))walk(p);else if(/\.(tsx?|css)$/.test(e.name))all.push(p);}}
walk(path.join(root,'app'));walk(path.join(root,'components'));walk(path.join(root,'lib'));walk(path.join(root,'styles'));
const source = all.map(read).join('\n');
for (const legacy of ['Garet Sans','Aileron','-60%']) if (source.toLowerCase().includes(legacy.toLowerCase())) throw new Error(`Legacy design term found: ${legacy}`);
if (/\bpriority\s*\/>/.test(source)) throw new Error('Deprecated next/image priority prop remains in source');
if (!source.includes('prefers-reduced-motion')) throw new Error('Reduced motion not found');
if (!source.includes('ENQUIRY_WEBHOOK_URL')) throw new Error('Server enquiry integration is not present');

console.log('Production structure audit: PASS');
console.log(`Homepage sections checked: ${requiredHomeLabels.length}`);
console.log(`Routes checked: ${requiredRoutes.length}`);
console.log('Source PDFs public exposure: PASS');
console.log('Legacy typography / deprecated Image priority checks: PASS');
console.log('Reduced motion + server enquiry path: PASS');
