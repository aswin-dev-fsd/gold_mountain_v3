import type { Metadata } from "next";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogCategories, blogDrafts } from "@/lib/content";

export const metadata: Metadata = { title: "Blog / Journal", description: "Stories and guidance around wellness, Ayurveda, food, nature, Arunachala and life at Gold Mountain.", alternates: { canonical: "/blog" } };

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs current="Blog / Journal" />
      <section className="section blog-hero"><div className="container section-intro"><div><div className="section-label">Blog / Journal</div><h1 className="display">Stories from Gold Mountain.</h1></div><p className="lede">Thoughts on wellness, nature, food, Ayurveda and life around Arunachala — created to answer the questions guests have before they arrive.</p></div></section>
      <section className="section-tight"><div className="container"><div className="category-list" aria-label="Blog categories">{blogCategories.map((c) => <span key={c}>{c}</span>)}</div><div className="featured-blog-grid" style={{ marginTop: 34 }}>{blogDrafts.map((article) => <article className="featured-blog-card" key={article.slug}><div className="featured-blog-media"><Image src={article.image} alt="" fill sizes="(min-width:900px) 33vw, 100vw" /></div><div className="featured-blog-copy"><span className="kicker">{article.category} · Draft</span><h2 className="display">{article.title}</h2><p>{article.excerpt}</p><span className="small-note">Article template ready; publish after client-approved copy is supplied.</span><SmartLink href={`/blog/${article.slug}`} className="btn secondary" style={{ marginTop: 18 }}>Preview Article Template</SmartLink></div></article>)}</div></div></section>
      <section className="section"><div className="container placeholder"><strong>Editorial system ready</strong><span>Article routes support descriptive slugs, canonical metadata and structured article markup once real content, authorship and publication dates are available.</span></div></section>
      <section className="cta-band"><div className="container cta-layout"><div><h2 className="display">Explore Gold Mountain beyond the stay.</h2></div><SmartLink href="/book-enquire">Plan Your Stay</SmartLink></div></section>
    </>
  );
}
