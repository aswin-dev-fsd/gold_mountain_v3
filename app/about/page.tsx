import type { Metadata } from "next";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";

export const metadata: Metadata = {
  title: "About",
  description: "The place, philosophy and people behind Gold Mountain Wellness Resort.",
  alternates: { canonical: "/about" },

};

export default function AboutPage() {
  return (
    <>
      <section className="image-hero"><Image src="/images/resort-courtyard.webp" alt="Gold Mountain resort surrounded by greenery" fill sizes="100vw" priority/><div className="container image-hero-content"><div className="kicker">About</div><h1 className="display">A place created with purpose.</h1><p className="lede" style={{ marginTop: 18 }}>Gold Mountain is positioned as a wellness resort rooted in nature, hospitality, food and the presence of Arunachala.</p></div></section>
      <section className="section"><div className="container section-intro"><div><div className="section-label">About Gold Mountain</div><h2 className="display">Resort first. Wellness-led.</h2></div><div className="prose"><p>Gold Mountain is intended to feel like a peaceful and meaningful stay — not an Ayurveda clinic, not only a retreat, and not simply a hotel.</p><p className="small-note">Do not invent the founding history or credentials. Add client-approved story content here.</p></div></div></section>
      <section className="section-tight" style={{ background: "rgba(247,243,234,.25)" }}><div className="container editorial-split reverse"><div className="editorial-copy"><div className="section-label">Founder</div><h2 className="display">The people behind the experience.</h2><div className="placeholder" style={{ marginTop: 22 }}><strong>Founder profile to be provided</strong><span>Name, biography, vision and why Gold Mountain exists.</span></div><div className="placeholder" style={{ marginTop: 12 }}><strong>Practitioner profiles to be provided</strong><span>Names, credentials and approved descriptions.</span></div></div><div className="editorial-media"><Image src="/images/wellness-lifestyle.webp" alt="Wellness setting at Gold Mountain" fill sizes="(min-width: 1060px) 50vw, 100vw"/></div></div></section>
      <section className="section"><div className="container"><div className="section-intro"><div><div className="section-label">Philosophy</div><h2 className="display">Nature · Wellness · Food · Traditional knowledge · Hospitality · Arunachala</h2></div><p className="lede">The final copy should explain these themes in simple international English and keep experiential language distinct from medical promises.</p></div></div></section>
      <section className="cta-band"><div className="container cta-layout"><div><h2 className="display">Come experience Gold Mountain.</h2></div><SmartLink href="/experience">Explore the Resort</SmartLink></div></section>
    </>
  );
}
