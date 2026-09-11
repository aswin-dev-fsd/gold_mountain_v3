import type { Metadata } from "next";
import SmartLink from "@/components/SmartLink";
import EnquiryForm from "@/components/EnquiryForm";
import EnquiryActions from "@/components/EnquiryActions";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Gold Mountain Wellness Resort to plan a stay, wellness programme or enquiry.",
  alternates: { canonical: "/contact" },

};

export default function ContactPage() {
  const maps = "https://www.google.com/maps/search/?api=1&query=No.97%2C%20Kotangal%20Road%2C%20Adiannamalai%2C%20Tiruvannamalai%2C%20Tamil%20Nadu%20606604%2C%20India";
  return (
    <section className="section" style={{ paddingTop: 150 }}>
      <div className="container form-wrap">
        <div>
          <div className="section-label">Contact</div>
          <h1 className="display">Let's plan your stay.</h1>
          <p className="lede" style={{ marginTop: 20 }}>Have a question about staying, wellness programmes or availability? Speak with us directly.</p>
          <div style={{ marginTop: 32 }}><EnquiryActions label="Chat with us" /></div>
          <div className="contact-ways">
            <div className="contact-way"><div><strong>Location</strong><span> No.97, Kotangal Road, Adiannamalai, Tiruvannamalai, Tamil Nadu 606604, India</span></div><a href={maps} target="_blank" rel="noreferrer">Maps →</a></div>
            <div className="contact-way"><div><strong>Address</strong><span className="small-note">Client/official verification still required before production publication.</span></div></div>
            <div className="contact-way"><div><strong>Booking model</strong><span>Enquiry-first, not live booking.</span></div></div>
          </div>
        </div>
        <div><EnquiryForm /></div>
      </div>
    </section>
  );
}
