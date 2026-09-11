import type { Metadata } from "next";
import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import ScrollReveal from "@/components/ScrollReveal";
import StoryRail from "@/components/StoryRail";
import ResortWalk from "@/components/ResortWalk";

export const metadata: Metadata = {
  title: "Experience",
  description: "Discover the character of Gold Mountain through sacred traditions, nature, farm life and the surrounding landscape.",
  alternates: { canonical: "/experience" },
};

const experiences = [
  { title: "Shiva Shakthi Darshanam", category: "Sacred & Spiritual", text: "Client-approved description to be provided.", image: "/images/experience-sacred.webp", alt: "Sacred architectural setting used as a visual reference" },
  { title: "The Cow Shelter", category: "Nature & Farm Life", text: "Client-approved description to be provided.", image: "/images/experience-resort.webp", alt: "Green garden setting used as a visual reference" },
  { title: "The Fish Pond", category: "Nature & Farm Life", text: "Client-approved description to be provided.", image: "/images/experience-farm.webp", alt: "Cultivated garden used as a visual reference" },
  { title: "Five Element Philosophy", category: "Sacred & Spiritual", text: "Explain the experience simply; avoid unsupported scientific claims.", image: "/images/arunachala-landscape.webp", alt: "Arunachala landscape used as a visual reference" },
  { title: "From Our Land", category: "Nature & Farm Life", text: "Farm-grown vegetables and herbal-garden stories, subject to client confirmation.", image: "/images/experience-farm.webp", alt: "Lush cultivated garden greenery" },
];

const discoveryRail = experiences.map((item) => ({ title: item.title, text: item.text, image: item.image, alt: item.alt, eyebrow: item.category }));

export default function ExperiencePage() {
  return (
    <>
      <section className="image-hero">
        <Image src="/images/resort-walk.webp" alt="Path through lush green surroundings, reference image" fill sizes="100vw" preload />
        <div className="container image-hero-content"><div className="kicker">Experience</div><h1 className="display">Experience the place beyond the stay.</h1><p className="lede">Nature, traditional practices, farm life and the surrounding landscape give the stay its character.</p></div>
      </section>

      <section className="section" aria-labelledby="experience-discovery-title">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">Discovery</div><h2 id="experience-discovery-title" className="display">There is more to discover here.</h2></div><p className="lede">These are the five experience areas specified for this page. Descriptions and operational details remain client-controlled until approved.</p></div>
          <div style={{ marginTop: 42 }}><StoryRail items={discoveryRail} ariaLabel="Gold Mountain experiences" /></div>
          <div className="experience-proof-grid" style={{ marginTop: 46 }}>
            {experiences.map((item, index) => (
              <ScrollReveal key={`proof-${item.title}`} y={index * 3}>
                <article className="experience-proof-item">
                  <span className="kicker">{String(index + 1).padStart(2, "0")} · {item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="walk-title">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">Walk the resort</div><h2 id="walk-title" className="display">From arrival to landscape.</h2></div><p className="lede">A slow visual journey can make the visitor feel the progression through the property. Use approved property photography when it is available.</p></div>
          <div style={{ marginTop: 42 }}><ResortWalk /></div>
        </div>
      </section>

      <section className="section-tight" style={{ background: "rgba(247,243,234,.35)" }} aria-labelledby="experience-note-title">
        <div className="container editorial-split"><div className="editorial-media"><Image src="/images/arunachala-landscape.webp" alt="Arunachala landscape, reference image" fill sizes="(min-width:1060px) 50vw, 100vw" /></div><div className="editorial-copy"><div className="section-label">The environment</div><h2 id="experience-note-title" className="display">The place is part of the experience.</h2><p className="lede">Connect the activities to the landscape, daily rhythm and presence of Arunachala without exaggerating what guests can see or do.</p><SmartLink href="/stay" className="btn secondary" style={{ marginTop: 26 }}>Explore the Resort</SmartLink></div></div>
      </section>
      <section className="cta-band"><div className="container cta-layout"><div><h2 className="display">There is more to discover here.</h2></div><SmartLink href="/book-enquire">Plan Your Stay</SmartLink></div></section>
    </>
  );
}
