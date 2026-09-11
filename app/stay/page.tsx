import type { Metadata } from "next";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import EnquiryActions from "@/components/EnquiryActions";
import ScrollReveal from "@/components/ScrollReveal";
import { journeys, roomPlaceholders, wellnessPackageDurations } from "@/lib/content";
import FaqAccordion from "@/components/FaqAccordion";
import JourneyChooser from "@/components/JourneyChooser";

export const metadata: Metadata = { title: "Stay", description: "A peaceful place to stay: accommodation, stay types, wellness packages and practical enquiry guidance.", alternates: { canonical: "/stay" } };

export default function StayPage() {
  return (
    <>
      <section className="image-hero">
        <Image src="/images/resort-room.webp" alt="Quiet room setting with a landscape view" fill sizes="100vw" preload />
        <div className="container image-hero-content"><div className="kicker">Stay</div><h1 className="display">A peaceful place to stay.</h1><p className="lede">Comfortable spaces surrounded by nature, created for rest and reconnection.</p></div>
      </section>

      <section className="section" aria-labelledby="rooms-title">
        <div className="container"><div className="section-intro"><div><div className="section-label">Rooms</div><h2 id="rooms-title" className="display">Stay in a space designed for rest.</h2></div><p className="lede">Only verified room categories, amenities, capacity and pricing should be published. The current package contains reference imagery rather than confirmed room photography.</p></div><div className="journey-grid room-grid" style={{ marginTop: 42 }}>{roomPlaceholders.map((room) => <ScrollReveal key={room.title}><article className="journey-item"><div className="journey-item-media"><Image src={room.image} alt={room.alt} width={900} height={700} /></div><div className="journey-item-body"><span className="kicker">Room details to be confirmed</span><h3 className="display">{room.title}</h3><p>{room.text}</p><ul className="plain-list"><li>Capacity — to be confirmed</li><li>Amenities — to be confirmed</li><li>Price — to be confirmed</li></ul><SmartLink href="/book-enquire" className="btn secondary">Enquire About This Room</SmartLink></div></article></ScrollReveal>)}</div></div>
      </section>

      <section className="section-tight" style={{ background: "var(--green)", color: "var(--ivory)" }} aria-labelledby="stay-types-title">
        <div className="container"><div className="section-intro inverse"><div><div className="section-label inverse-label">Stay types</div><h2 id="stay-types-title" className="display">Choose your journey.</h2></div><p className="lede">Keep flexible accommodation distinct from structured wellness programmes.</p></div><JourneyChooser choices={journeys} /></div>
      </section>

      <section className="section" aria-labelledby="packages-title">
        <div className="container"><div className="section-intro"><div><div className="section-label">Wellness Packages</div><h2 id="packages-title" className="display">Structured journeys, when confirmed.</h2></div><p className="lede">The strategy references 7-, 14- and 21-day programmes. Final names, inclusions, prices and availability remain client-controlled.</p></div><div className="package-grid" style={{ marginTop: 42 }}>{wellnessPackageDurations.map((duration) => <article className="package-item" key={duration}><span className="kicker">Wellness Package</span><h3 className="display">{duration}</h3><p>Programme details to be confirmed.</p><SmartLink href="/book-enquire" className="btn secondary">Ask About This Package</SmartLink></article>)}</div></div>
      </section>

      <section className="section-tight" aria-labelledby="monthly-title">
        <div className="container editorial-split reverse"><div className="editorial-media"><Image src="/images/resort-courtyard.webp" alt="Resort courtyard reference image" fill sizes="(min-width:1060px) 50vw, 100vw" /></div><div className="editorial-copy"><div className="section-label">Monthly stays</div><h2 id="monthly-title" className="display">Stay a little longer.</h2><p className="lede">Monthly Stay is a longer accommodation option. Use actual inventory and pricing only after confirmation.</p><SmartLink href="/book-enquire" className="btn secondary" style={{ marginTop: 28 }}>Ask About Monthly Stay</SmartLink></div></div>
      </section>

      <section className="section" aria-labelledby="amenities-title"><div className="container"><div className="section-intro"><div><div className="section-label">Amenities</div><h2 id="amenities-title" className="display">Everything you need for a comfortable stay.</h2></div><p className="lede">The earlier specification listed example amenities, but none are treated as confirmed until the property approves the final list.</p></div><div className="placeholder" style={{ marginTop: 36 }}><strong>Client confirmation required</strong><span>Room service · Dining area · Free parking · Air conditioning · High-speed Wi-Fi · CCTV · 24-hour front desk — examples only, not published as confirmed facts.</span></div></div></section>

      <section className="section-tight" style={{ background: "rgba(247,243,234,.4)" }} aria-labelledby="practical-title"><div className="container"><div className="section-intro"><div><div className="section-label">Before arrival</div><h2 id="practical-title" className="display">Know what to expect.</h2></div><div className="prose"><p>Start with the dates you prefer and the kind of stay or wellness experience you are considering. The team confirms availability and pricing directly.</p><p className="small-note">Official getting-here details, what to bring and any access guidance should be added after client confirmation.</p></div></div><div className="process-grid" style={{ marginTop: 42 }}><article><span className="kicker">01 / Tell us</span><h3>Share your dates and needs.</h3><p>Use the enquiry form or direct WhatsApp/email contact.</p></article><article><span className="kicker">02 / We review</span><h3>The team checks the request.</h3><p>Availability, stay options and pricing are confirmed directly.</p></article><article><span className="kicker">03 / Plan</span><h3>Continue the conversation.</h3><p>Receive confirmed arrival guidance before you travel.</p></article></div><div style={{ marginTop: 44 }}><FaqAccordion /></div></div></section>

      <section className="cta-band"><div className="container cta-layout"><div><h2 className="display">Plan your stay at Gold Mountain.</h2></div><EnquiryActions /></div></section>
    </>
  );
}
