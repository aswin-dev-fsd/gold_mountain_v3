import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = { title: "Terms & Conditions", robots: { index: false, follow: true } };
export default function TermsPage() { return <><Breadcrumbs current="Terms & Conditions" /><section className="section legal-page"><div className="container narrow"><div className="section-label">Terms & Conditions</div><h1 className="display">Terms to be approved.</h1><div className="placeholder"><strong>Client legal copy required</strong><span>Replace this draft with the approved terms before launch. This placeholder does not create contractual terms.</span></div></div></section></>; }
