import type { Metadata } from "next";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import EnquiryActions from "@/components/EnquiryActions";
import { pillars, diningJourney } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Wellness",
  description: "Explore Gold Mountain's wellness philosophy, traditional practices, nourishment, nature and slower daily rhythm.",
  alternates: { canonical: "/wellness" },

};

export default function WellnessPage() {
  return (
    <>
      <section className="image-hero">
        <Image src="/images/wellness-lifestyle.webp" alt="Quiet wellness moment in the natural surroundings of Gold Mountain" fill sizes="100vw" preload />
        <div className="container image-hero-content">
          <div className="kicker">Wellness</div>
          <h1 className="display" style={{ maxWidth: 800, marginTop: 14 }}>A slower way back to yourself.</h1>
          <p className="lede" style={{ marginTop: 18 }}>Explore traditional wellness practices, nourishing food and quiet spaces designed to support a more intentional stay.</p>
          <div className="btn-row" style={{ marginTop: 26 }}><SmartLink href="#approach">Explore Our Wellness</SmartLink><SmartLink href="#approach" className="btn secondary">Our Approach</SmartLink></div>
        </div>
      </section>

      <section className="section" id="approach">
        <div className="container">
          <div className="section-intro">
            <div><div className="section-label">Our wellness philosophy</div><h2 className="display">Wellness beyond treatment.</h2></div>
            <p className="lede">Gold Mountain brings together traditional wellness practices and the restorative qualities of nature. The emphasis is on experience, daily rhythm and context — not clinical promises.</p>
          </div>
          <div className="pillars" style={{ marginTop: 42 }}>
            {pillars.map((p, i) => <div className="pillar" key={p.name}><div className="pillar-number">0{i+1}</div><h3>{p.name}</h3><p>{p.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-tight" id="ayurveda" style={{ background: "rgba(247,243,234,.28)" }}>
        <div className="container editorial-split">
          <div className="editorial-media"><Image src="/images/wellness-lifestyle.webp" alt="Wellness and nature at Gold Mountain" fill sizes="(min-width: 1060px) 50vw, 100vw" /></div>
          <div className="editorial-copy">
            <div className="section-label">Ayurveda</div>
            <h2 className="display">Traditional wisdom, thoughtfully experienced.</h2>
            <p className="lede" style={{ marginTop: 18 }}>Ayurveda is one important part of the wider wellness experience. Explain practices simply and accurately; specific therapies, practitioners and programme details require client confirmation.</p>
            <SmartLink href="#ayurveda" style={{ marginTop: 26 }} className="btn secondary">Explore Ayurveda</SmartLink>
          </div>
        </div>
      </section>

      <section className="section-tight" id="food" aria-labelledby="food-title">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">Nourishment</div><h2 id="food-title" className="display">Food that nourishes.</h2></div><p className="lede">Food is part of the wider wellness story. Farm, garden, kitchen and meal details should be replaced with confirmed property information before launch.</p></div>
          <div className="dining-story" style={{ marginTop: 42 }}>{diningJourney.map((step) => <div className="dining-step" key={step.title}><div className="dining-step-media"><img src={step.image} alt="" /></div><div className="dining-step-copy"><span className="kicker">{step.title}</span><p>{step.text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section" aria-labelledby="programme-title">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">Programmes</div><h2 id="programme-title" className="display">Choose your journey.</h2></div><p className="lede">Structured programme details are not published until the client confirms duration, inclusions and price.</p></div>
          <div className="placeholder" style={{ marginTop: 38 }}>
            <strong>Client confirmation required</strong>
            <p>Wellness Packages: 7 days · 14 days · 21 days are referenced in the strategy materials, but final names, inclusions and pricing remain to be confirmed.</p>
            <p className="small-note" style={{ marginTop: 8 }}>Do not present provisional package information as a live offer.</p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-layout">
          <div><div className="kicker">Begin your wellness journey</div><h2 className="display" style={{ marginTop: 10 }}>Find the kind of wellness that suits your stay.</h2></div>
          <EnquiryActions />
        </div>
      </section>
    </>
  );
}
