import fs from "node:fs";
import path from "node:path";
const root = process.cwd();
const read = (p) => fs.readFileSync(path.join(root,p), "utf8");
const home = read("app/page.tsx") + read("components/WellnessJourney.tsx");
const experience = read("app/experience/page.tsx");
const stay = read("app/stay/page.tsx") + read("lib/content.ts");
const blog = read("app/blog/page.tsx") + read("lib/content.ts");
const form = read("components/EnquiryForm.tsx");
const pageChecks = [
  [home, ["01 / Hero","02 / Wellness","03 / Location","04 / Dining","05 / The Resort","06 / Experience","07 / Stay","08 / Trust","09 / Blog","10 / Book or enquire"], "Homepage hierarchy"],
  [experience, ["Shiva Shakthi Darshanam","The Cow Shelter","The Fish Pond","Five Element Philosophy","From Our Land"], "Experience page five specified areas"],
  [stay, ["Short Stay","Wellness Stay","Monthly Stay","Wellness Packages","7 Days","14 Days","21 Days","Ask About Monthly Stay"], "Stay taxonomy/package coverage"],
  [blog, ["Wellness","Ayurveda","Food","Nature","Arunachala","Life at Gold Mountain","Preview Article Template"], "Blog taxonomy/template"],
  [form, ["name","email","phone","arrival","departure","guests","type","message","/api/enquiry"], "Enquiry form contract"],
];
for (const [source, terms, label] of pageChecks) {
  const missing = terms.filter((term) => !source.includes(term));
  if (missing.length) throw new Error(`${label} missing: ${missing.join(", ")}`);
}
if (!fs.existsSync(path.join(root,"app/blog/[slug]/page.tsx"))) throw new Error("Blog article route missing");
if (fs.existsSync(path.join(root,"public/source"))) throw new Error("public/source must not exist");
if (fs.existsSync(path.join(root,"public/fonts/TheSeasons-Bold-subset.woff2"))) throw new Error("Unused incomplete bold font subset still shipped");
console.log("Source alignment audit: PASS");
