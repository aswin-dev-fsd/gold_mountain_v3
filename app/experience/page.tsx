import type { Metadata } from "next";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import { experiences } from "@/lib/content";

export const metadata: Metadata = {
  title: "Experience",
  description: "Discover nature, farm life, traditional practices and the character of Gold Mountain Wellness Resort.",
  alternates: { canonical: "/experience" },

};

export default function ExperiencePage() {
  return (
    <>
      <section className="image-hero">
        <Image src="/images/resort-walk.webp" alt="Path through the green surroundings of Gold Mountain" fill sizes="100vw" priority />
        <div className="container image-hero-content"><div className="kicker">Experience</div><h1 className="display">Experience the place beyond the stay.</h1><p className="lede" style={{ marginTop: 18 }}>Nature, traditional practices, farm life and the surrounding landscape give the stay its character.</p></div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">Discover</div><h2 className="display">There is more to discover here.</h2></div><p className="lede">These themes come from the source strategy; descriptions must be replaced with client-approved details before launch.</p></div>
          <div className="story-rail" style={{ marginTop: 40 }}>{experiences.map((x,i)=><article className="story-card" key={x.title}><Image src={x.image} alt={x.alt} width={600} height={600}/><div className="story-card-body"><div className="kicker">Experience {String(i+1).padStart(2,"0")}</div><h3>{x.title}</h3><p>{x.text}</p></div></article>)}</div>
        </div>
      </section>
      <section className="section-tight" style={{ background: "rgba(247,243,234,.25)" }}>
        <div className="container editorial-split">
          <div className="editorial-media"><Image src="/images/experience-sacred.webp" alt="Sacred and spiritual place imagery from the source reference" fill sizes="(min-width: 1060px) 50vw, 100vw"/></div>
          <div className="editorial-copy"><div className="section-label">Spatial storytelling</div><h2 className="display">Walk the resort.</h2><p className="lede" style={{ marginTop: 18 }}>The intended journey is entrance → garden → room → wellness area → landscape. Use real approved photographs only; this prototype uses the supplied source-reference imagery.</p><SmartLink href="/stay" className="btn secondary" style={{ marginTop: 26 }}>Explore the Resort</SmartLink></div>
        </div>
      </section>
      <section className="cta-band"><div className="container cta-layout"><div><h2 className="display">Plan your stay around the experience.</h2></div><SmartLink href="/book-enquire">Plan Your Stay</SmartLink></div></section>
    </>
  );
}
