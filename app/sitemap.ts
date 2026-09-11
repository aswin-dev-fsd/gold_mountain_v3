import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  if (!base) return [];
  const paths = ["/", "/wellness", "/stay", "/experience", "/about", "/blog", "/contact", "/book-enquire"];
  return paths.map((path) => ({ url: `${base}${path}`, changeFrequency: path === "/blog" ? "weekly" : "monthly", priority: path === "/" ? 1 : 0.7 }));
}
