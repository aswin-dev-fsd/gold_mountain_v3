import type { Metadata } from "next";
import SmartLink from "@/components/SmartLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import EnquiryActions from "@/components/EnquiryActions";
import FaqAccordion from "@/components/FaqAccordion";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact", description: "Contact Gold Mountain Wellness Resort to plan a stay, wellness programme or enquiry.", alternates: { canonical: "/contact" } };

export default function ContactPage() {
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;
  return (
    <>
      <Breadcrumbs current="Contact" />
      <section className="section contact-top"><div className="container form-wrap"><div><div className="section-label">Contact</div><h1 className="display">Let's plan your stay.</h1><p className="lede">Have a question about staying, wellness programmes or availability? Speak with us directly.</p><div style={{ marginTop: 32 }}><EnquiryActions /></div><div className="contact-ways"><div className="contact-way"><div><strong>WhatsApp</strong><span>Primary direct contact when a verified number is configured.</span></div></div><div className="contact-way"><div><strong>Email</strong><span>Secondary direct contact when a verified address is configured.</span></div></div><div className="contact-way"><div><strong>Phone</strong><span>Shown only when a verified client number is configured.</span></div></div></div></div><EnquiryForm /></div></section>
      <section className="section-tight" aria-labelledby="location-title"><div className="container location-block"><div><div className="section-label">Location</div><h2 id="location-title" className="display">Near Arunachala.</h2><address>{site.address.lines.map((line) => <span key={line}>{line}<br /></span>)}</address><p className="small-note" style={{ marginTop: 14 }}>{site.address.verificationNote}</p><a className="btn secondary" href={maps} target="_blank" rel="noreferrer" style={{ marginTop: 24 }}>Open in Google Maps ↗</a></div><div className="location-note"><h3>For international guests</h3><p>The site should make the enquiry process, confirmed access guidance, what to bring and what to expect easy to understand. Do not publish unverified transport times or arrangements.</p></div></div><div className="container process-grid" style={{ marginTop: 48 }}><article><span className="kicker">01 / Enquire</span><h3>Tell us what you need.</h3><p>Share preferred dates, guests and the kind of stay you are considering.</p></article><article><span className="kicker">02 / Confirm</span><h3>We respond directly.</h3><p>Availability and pricing are confirmed by the Gold Mountain team.</p></article><article><span className="kicker">03 / Prepare</span><h3>Plan your arrival.</h3><p>Use official arrival information once it has been confirmed and published.</p></article></div></section>
      <section className="section"><div className="container"><div className="section-intro"><div><div className="section-label">Questions</div><h2 className="display">Before you enquire.</h2></div><p className="lede">Clear answers reduce uncertainty before asking a guest to commit to a stay.</p></div><div style={{ marginTop: 40 }}><FaqAccordion /></div></div></section>
    </>
  );
}
