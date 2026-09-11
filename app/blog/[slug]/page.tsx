import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogDrafts } from "@/lib/content";
import SmartLink from "@/components/SmartLink";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = blogDrafts.find((item) => item.slug === slug);
  if (!article) return { title: "Article" };
  return { title: article.title, description: article.excerpt, robots: { index: false, follow: true }, alternates: { canonical: `/blog/${article.slug}` } };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const foundArticle = blogDrafts.find((item) => item.slug === slug);
  if (!foundArticle) return notFound();
  const article = foundArticle;
  return (
    <>
      <Breadcrumbs current={article.category} />
    <article className="article-page">
      <header className="article-header"><div className="container narrow"><span className="section-label">{article.category} · Draft</span><h1 className="display">{article.title}</h1><p className="lede">{article.excerpt}</p></div></header>
      <div className="container narrow"><div className="article-hero"><Image src={article.image} alt="" fill sizes="(min-width:900px) 780px, 100vw" /></div><div className="placeholder article-placeholder"><strong>Article content to be provided</strong><span>Replace this draft template with client-approved article content, accurate publication date, author information and real photography before publishing.</span></div><div className="article-cta"><SmartLink href="/book-enquire">Plan Your Stay</SmartLink><SmartLink href="/blog" className="btn secondary">Back to Journal</SmartLink></div></div>
    </article>
    </>
  );
}
