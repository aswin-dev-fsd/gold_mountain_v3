import Image from "next/image";
import SmartLink from "@/components/SmartLink";
import StoryRail from "@/components/StoryRail";
import ScrollReveal from "@/components/ScrollReveal";
import WellnessJourney from "@/components/WellnessJourney";
import { HeroMotion, LandscapeMotion } from "@/components/SignatureMotion";
import EnquiryActions from "@/components/EnquiryActions";
import { diningJourney, experienceGroups, journeys } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media"><Image src="/images/hero-arunachala.webp" alt="Arunachala landscape in soft natural light" fill sizes="100vw" preload /></div>
        <div className="hero-overlay" />
        <HeroMotion />
        <div className="container hero-content">
          <div className="kicker">01 / Hero · Gold Mountain Wellness Resort</div>
          <h1 id="hero-title" className="hero-title display"><span className="line"><span>A Wellness Stay</span></span><span className="line"><span>in the Presence of Arunachala.</span></span></h1>
          <div className="divider hero-divider" />
          <p className="lede hero-lede">A peaceful resort where traditional wellness, healthy food and nature come together.</p>
          <div className="btn-row hero-actions"><SmartLink href="/wellness">Explore Wellness</SmartLink><SmartLink href="/stay" className="btn secondary">Plan Your Stay</SmartLink></div>
        </div>
      </section>

      <WellnessJourney />

      <section className="section" aria-labelledby="location-title">
        <div className="landscape">
          <Image src="/images/arunachala-landscape.webp" alt="Arunachala and surrounding green landscape" fill sizes="100vw" />
          <LandscapeMotion />
          <div className="container landscape-inner">
            <div><div className="kicker">03 / Location</div><h2 id="location-title" className="display">In the presence of Arunachala.</h2><p className="body-lg">The surrounding landscape is part of the sense of place. The site should explain only verified geography and arrival information.</p></div>
            <div><div className="landscape-meta"><div><strong>East</strong><span>Arunachala</span></div><div><strong>West</strong><span>Parvati Malai</span></div><div><strong>Setting</strong><span>Farm · Nature · Resort</span></div></div><div className="btn-row" style={{ marginTop: 28 }}><SmartLink href="/contact" className="btn secondary">Plan Your Journey</SmartLink></div></div>
          </div>
        </div>
      </section>

      <section className="section dining-section" aria-labelledby="dining-title">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">04 / Dining</div><h2 id="dining-title" className="display">Food that nourishes.</h2></div><p className="lede">Food is part of the wider wellness experience. Keep every farming, menu and nourishment claim grounded in verified property information.</p></div>
          <div style={{ marginTop: 42 }}><StoryRail items={diningJourney.map((step) => ({ title: step.title, text: step.text, image: step.image, alt: step.alt }))} ariaLabel="Farm to table journey" className="dining-rail" /></div>
          <SmartLink href="/wellness#food" className="btn secondary" style={{ marginTop: 30 }}>Discover Dining</SmartLink>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="resort-title">
        <div className="container editorial-split">
          <div className="editorial-copy"><div className="section-label">05 / The Resort</div><h2 id="resort-title" className="display">Stay close to nature. Stay close to yourself.</h2><p className="lede">Accommodation is part of the environment in which the wellness experience takes place. Publish only verified rooms, facilities and service details.</p><SmartLink href="/stay" className="btn secondary" style={{ marginTop: 28 }}>Explore the Resort</SmartLink></div>
          <div className="editorial-media"><Image src="/images/resort-exterior.webp" alt="Resort exterior reference image surrounded by greenery" fill sizes="(min-width: 1060px) 50vw, 100vw" /></div>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="container">
          <div className="section-intro"><div><div className="section-label">06 / Experience</div><h2 id="experience-title" className="display">More than a stay.</h2></div><p className="lede">Explore the character of the place through sacred traditions, farm life and the healing environment.</p></div>
          <div className="experience-groups" style={{ marginTop: 44 }}>{experienceGroups.map((group, index) => (<ScrollReveal key={group.title}><section className="experience-group"><div className="experience-group-head"><span className="kicker">{String(index + 1).padStart(2, "0")}</span><h3 className="display">{group.title}</h3><p>{group.intro}</p></div><div className="experience-mini-grid">{group.items.slice(0, 2).map((item) => (<article className="mini-experience" key={item.title}><Image src={item.image} alt={item.alt} width={900} height={900} /><div><h4>{item.title}</h4><p>{item.text}</p></div></article>))}</div></section></ScrollReveal>))}</div>
          <SmartLink href="/experience" className="btn secondary" style={{ marginTop: 34 }}>Explore the Experience</SmartLink>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="stay-title">
        <div className="container"><div className="section-intro"><div><div className="section-label">07 / Stay</div><h2 id="stay-title" className="display">Choose the kind of stay that suits you.</h2></div><p className="lede">Short Stay, Wellness Stay and Monthly Stay are distinct from structured Wellness Packages.</p></div><div className="journey-grid" style={{ marginTop: 40 }}>{journeys.map((j, i) => <ScrollReveal key={j.title} y={i * 5}><article className="journey-item"><div className="journey-item-media"><Image src={j.image} alt={j.alt} width={900} height={700} /></div><div className="journey-item-body"><div className="kicker">Stay type</div><h3 className="display">{j.title}</h3><p>{j.text}</p><SmartLink href="/stay" className="btn secondary">View Stay</SmartLink></div></article></ScrollReveal>)}</div></div>
      </section>

      <section className="section" aria-labelledby="trust-title">
        <div className="container editorial-split reverse">
          <div className="editorial-media"><Image src="/images/resort-courtyard.webp" alt="Resort courtyard reference image" fill sizes="(min-width: 1060px) 50vw, 100vw" /></div>
          <div className="editorial-copy"><div className="section-label">08 / Trust</div><h2 id="trust-title" className="display">A place you can trust.</h2><p className="lede">Use verified founder and practitioner profiles, genuine guest feedback, real photography and other confirmed trust signals here.</p><div className="placeholder"><strong>Client content required</strong><span>Founder, practitioner, guest-story and verified trust content to be supplied.</span></div></div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="blog-title">
        <div className="container"><div className="section-intro"><div><div className="section-label">09 / Blog</div><h2 id="blog-title" className="display">Stories from Gold Mountain.</h2></div><p className="lede">A strategic journal answers pre-booking questions and helps international visitors understand wellness, food, nature and Arunachala.</p></div><div className="blog-placeholder-grid" style={{ marginTop: 40 }}>{["Wellness", "Arunachala", "Food"].map((topic) => <article className="blog-placeholder" key={topic}><div className="blog-placeholder-media"><span className="display">{topic}</span></div><div className="blog-placeholder-copy"><span className="kicker">Article to be provided</span><h3>[ARTICLE TITLE TO BE PROVIDED]</h3><p>Replace this slot with a verified editorial article before publishing.</p></div></article>)}</div><SmartLink href="/blog" className="btn secondary" style={{ marginTop: 28 }}>Explore the Journal</SmartLink></div>
      </section>

      <section className="cta-band" aria-labelledby="cta-title"><div className="container cta-layout"><div><div className="kicker">10 / Book or enquire</div><h2 id="cta-title" className="display">Your time at Gold Mountain begins here.</h2><p className="lede">Plan your stay, explore our wellness offerings or simply speak with us.</p></div><EnquiryActions /></div></section>
    </>
  );
}
