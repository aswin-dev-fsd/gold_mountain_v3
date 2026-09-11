import type { Metadata } from "next";
import SmartLink from "@/components/SmartLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import EnquiryForm from "@/components/EnquiryForm";
import EnquiryActions from "@/components/EnquiryActions";

export const metadata: Metadata = { title: "Book / Enquire", description: "Plan your Gold Mountain stay through an enquiry-first experience. No live availability or payment is assumed.", alternates: { canonical: "/book-enquire" } };

export default function BookEnquirePage() {
  return (
    <>
      <Breadcrumbs current="Book / Enquire" />
      <section className="section book-page"><div className="container form-wrap"><div><div className="section-label">Book / Enquire</div><h1 className="display">Your stay begins with a conversation.</h1><p className="lede">Tell us when you'd like to visit, what you're looking for and how we can make your stay meaningful.</p><div className="prose" style={{ marginTop: 30 }}><p>Ask about stays, wellness programmes, Ayurveda, monthly stays, availability or anything else you need to know.</p><div className="placeholder"><strong>Enquiry-first model</strong><span>The Gold Mountain team confirms availability and pricing directly. This website does not create live inventory, payments or booking confirmations.</span></div></div><div style={{ marginTop: 30 }}><EnquiryActions /></div><div style={{ marginTop: 28 }}><SmartLink href="/stay" className="btn secondary">Review Stay Options</SmartLink></div></div><EnquiryForm /></div></section>
    </>
  );
}
