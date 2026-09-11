import type { Metadata } from "next";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import EnquiryActions from "@/components/EnquiryActions";
import { journeys } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stay",
  description: "A peaceful place to stay: accommodation, stay types and practical enquiry guidance for Gold Mountain Wellness Resort.",
  alternates: { canonical: "/stay" },

};

export default function StayPage() {
  return (
    <>
      <section className="image-hero">
        <Image src="/images/resort-room.webp" alt="Peaceful resort room surrounded by nature" fill sizes="100vw" priority />
        <div className="container image-hero-content">
          <div className="kicker">Stay</div>
          <h1 className="display">A peaceful place to stay.</h1>
          <p className="lede" style={{ marginTop: 18 }}>Comfortable spaces surrounded by nature, created for rest and reconnection.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">Stay types</div><h2 className="display">Keep the choices clear.</h2></div><p className="lede">Accommodation options and structured wellness programmes are separate products. Details below are intentionally limited to what the source package confirms.</p></div>
          <div className="journey-grid" style={{ marginTop: 40 }}>
            {journeys.map((j) => <article className="journey-item" key={j.title}><div className="journey-item-media"><Image src={j.image} alt={j.alt} width={900} height={700}/></div><div className="journey-item-body"><div className="kicker">Accommodation</div><h3 className="display">{j.title}</h3><p>{j.text}</p><SmartLink href="/book-enquire" className="btn secondary">Enquire About This Stay</SmartLink></div></article>)}
          </div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "rgba(247,243,234,.28)" }}>
        <div className="container editorial-split reverse">
          <div className="editorial-copy"><div className="section-label">Practical information</div><h2 className="display">Stay a little longer.</h2><p className="lede" style={{ marginTop: 18 }}>Monthly stays are intended for longer accommodation. Final terms, room inventory and pricing remain to be confirmed by the client.</p><div className="placeholder" style={{ marginTop: 24 }}><strong>Details to be provided</strong><span>Room categories, amenities, capacities, monthly rates and policies.</span></div></div>
          <div className="editorial-media"><Image src="/images/resort-courtyard.webp" alt="Resort courtyard with greenery" fill sizes="(min-width: 1060px) 50vw, 100vw"/></div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">International guest guidance</div><h2 className="display">Know what to expect.</h2></div><div className="prose"><p>Make the enquiry process, getting here, what information to provide and what happens before arrival easy to find. Do not invent travel times or transport arrangements.</p><p className="small-note">The address in the source package is subject to final client/official verification before production publication.</p></div></div>
        </div>
      </section>

      <section className="cta-band"><div className="container cta-layout"><div><h2 className="display">Plan your stay at Gold Mountain.</h2></div><EnquiryActions /></div></section>
    </>
  );
}
