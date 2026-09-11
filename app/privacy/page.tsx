import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
export const metadata: Metadata = { title: "Privacy Policy", robots: { index: false, follow: true } };
export default function PrivacyPage() { return <><Breadcrumbs current="Privacy Policy" /><section className="section legal-page"><div className="container narrow"><div className="section-label">Privacy Policy</div><h1 className="display">Privacy information to be approved.</h1><div className="placeholder"><strong>Client legal copy required</strong><span>Replace this draft with the approved privacy policy before launch. Do not treat this placeholder as legal advice or as the final policy.</span></div></div></section></>; }
