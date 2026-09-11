import fs from "node:fs";
import path from "node:path";
const root = path.resolve("public/images");
const files = fs.readdirSync(root).filter((x) => /\.(png|jpe?g|webp|avif|ttf|woff2)$/i.test(x));
console.log(`Assets: ${files.length}`);
for (const file of files) {
  const stat = fs.statSync(path.join(root,file));
  if (stat.size === 0) throw new Error(`Empty asset: ${file}`);
}
console.log("Asset audit passed.");
