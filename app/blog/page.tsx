import type { Metadata } from "next";
import SmartLink from "@/components/SmartLink";

export const metadata: Metadata = {
  title: "Blog / Journal",
  description: "Journal topics around wellness, Ayurveda, food, nature, Arunachala and life at Gold Mountain.",
  alternates: { canonical: "/blog" },

};

const categories = ["Wellness","Ayurveda","Food","Nature","Arunachala","Life at Gold Mountain"];

export default function BlogPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 160 }}>
        <div className="container section-intro"><div><div className="section-label">Blog / Journal</div><h1 className="display">Stories from Gold Mountain.</h1></div><p className="lede">A strategic journal can educate, build familiarity, support search visibility and answer the questions international guests ask before booking.</p></div>
      </section>
      <section className="section-tight"><div className="container"><div className="story-rail">{categories.map((c,i)=><article className="story-card" key={c}><div style={{ aspectRatio: "1/1", background: "rgba(196,154,58,.08)", display:"grid", placeItems:"center", padding:24 }}><span className="display" style={{ fontSize: 30, textAlign:"center" }}>{c}</span></div><div className="story-card-body"><div className="kicker">Content placeholder</div><h3>[ARTICLE TO BE PROVIDED]</h3><p>No fictional article is presented as live content.</p></div></article>)}</div></div></section>
      <section className="section"><div className="container placeholder"><strong>Editorial system</strong><p>When live articles are added, use descriptive URLs, canonical metadata, useful internal links, accurate publication data and structured data only where supported.</p></div></section>
      <section className="cta-band"><div className="container cta-layout"><div><h2 className="display">Explore Gold Mountain beyond the stay.</h2></div><SmartLink href="/book-enquire">Plan Your Stay</SmartLink></div></section>
    </>
  );
}
