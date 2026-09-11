import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = ["/","/wellness","/stay","/experience","/about","/blog","/contact","/book-enquire"];
  return paths.map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === "/blog" ? "weekly" : "monthly", priority: path === "/" ? 1 : 0.7 }));
}
