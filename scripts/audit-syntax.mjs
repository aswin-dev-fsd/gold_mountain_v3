import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
const roots=["app","components","lib"];
const files=[];
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(/\.(tsx?|mts|cts)$/.test(e.name))files.push(p);}}
roots.forEach((r)=>walk(r));
const failures=[];
for(const file of files){
  const result=ts.transpileModule(fs.readFileSync(file,"utf8"),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext},fileName:file,reportDiagnostics:true});
  const errors=(result.diagnostics||[]).filter((d)=>d.category===ts.DiagnosticCategory.Error);
  if(errors.length) failures.push(`${file}: ${errors.map((d)=>ts.flattenDiagnosticMessageText(d.messageText," ")).join(" | ")}`);
}
if(failures.length){console.error(failures.join("\n"));process.exit(1)}
console.log(`Syntax transpilation audit: PASS (${files.length} TypeScript/TSX files)`);
