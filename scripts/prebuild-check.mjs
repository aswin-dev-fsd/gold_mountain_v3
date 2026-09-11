const requiredNode = [20, 9];
const [major, minor] = process.versions.node.split(".").map(Number);
if (major < requiredNode[0] || (major === requiredNode[0] && minor < requiredNode[1])) {
  throw new Error(`Node ${requiredNode[0]}.${requiredNode[1]}+ is required; found ${process.versions.node}.`);
}
if (process.env.NODE_ENV === "production") {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) throw new Error("NEXT_PUBLIC_SITE_URL must be configured for production builds so canonical URLs, sitemap and robots metadata are correct.");
  let parsed;
  try { parsed = new URL(raw); } catch { throw new Error("NEXT_PUBLIC_SITE_URL must be a valid absolute URL."); }
  if (parsed.protocol !== "https:") throw new Error("NEXT_PUBLIC_SITE_URL must use https in production.");
  if (parsed.hostname === "example.com") throw new Error("Replace the example.com placeholder in NEXT_PUBLIC_SITE_URL before a production build.");
}
console.log("Prebuild environment check: PASS");
