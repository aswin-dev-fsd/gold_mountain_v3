import Image from "next/image";
import Link from "next/link";
import { experiences, journeys, pillars } from "@/lib/content";
import SmartLink from "@/components/SmartLink";
import ScrollReveal from "@/components/ScrollReveal";
import WellnessJourney from "@/components/WellnessJourney";
import { HeroMotion, LandscapeMotion } from "@/components/SignatureMotion";
import EnquiryActions from "@/components/EnquiryActions";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media"><Image src="/images/hero-arunachala.webp" alt="Arunachala landscape in the surroundings of Gold Mountain" fill sizes="100vw" priority /></div>
        <div className="hero-overlay" />
        <HeroMotion />
        <div className="container hero-content">
          <div className="kicker">Gold Mountain Wellness Resort</div>
          <h1 id="hero-title" className="hero-title display">
            <span className="line"><span>A Wellness Stay</span></span>
            <span className="line"><span>in the Presence of Arunachala.</span></span>
          </h1>
          <div className="divider hero-divider" style={{ width: 90, background: "var(--gold)", marginTop: 24 }} />
          <p className="lede" style={{ marginTop: 22 }}>A peaceful resort where traditional wellness, healthy food and nature come together.</p>
          <div className="btn-row hero-actions">
            <SmartLink href="/wellness">Explore Wellness</SmartLink>
            <SmartLink href="/stay" className="btn secondary">Plan Your Stay</SmartLink>
          </div>
          <div className="hero-note">Come for the place. Discover wellness. Stay for the experience.</div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <div className="pillars">
            {[
              ["Wellness","Traditional practices and quiet spaces"],
              ["Nourishment","Food as part of the wider stay"],
              ["Sacred location","Arunachala to the east; Parvati Malai to the west"],
              ["Meaningful experiences","A place shaped by nature and tradition"],
            ].map(([title,text]) => (
              <div className="pillar" key={title}>
                <div className="pillar-number">●</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WellnessJourney />

      <section className="section" aria-labelledby="location-title">
        <div className="landscape">
          <Image src="/images/arunachala-landscape.webp" alt="Mountain and green landscape around Arunachala" fill sizes="100vw" />
          <LandscapeMotion />
          <div className="container landscape-inner">
            <div>
              <div className="kicker">03 / Location</div>
              <h2 id="location-title" className="display" style={{ marginTop: 12, maxWidth: 650 }}>In the presence of Arunachala.</h2>
              <p className="body-lg" style={{ marginTop: 18 }}>The surrounding landscape is part of what makes a stay at Gold Mountain distinctive. Use only confirmed geography in the final production copy.</p>
            </div>
            <div>
              <div className="landscape-meta">
                <div><strong>East</strong><span>Arunachala</span></div>
                <div><strong>West</strong><span>Parvati Malai</span></div>
                <div><strong>Surroundings</strong><span>Farm · Nature · Resort</span></div>
              </div>
              <div className="btn-row" style={{ marginTop: 28 }}><SmartLink href="/book-enquire">Plan Your Journey</SmartLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <div className="container">
          <div className="section-intro">
            <div><div className="section-label">05 / Experience</div><h2 id="experience-title" className="display">More than a stay.</h2></div>
            <p className="lede">Explore the place through nature, traditional practices, farm life and the surrounding landscape — using only experiences confirmed for Gold Mountain.</p>
          </div>
          <div className="story-rail" style={{ marginTop: 40 }}>
            {experiences.map((x, i) => (
              <ScrollReveal key={x.title} y={i % 2 ? 12 : 20}>
                <article className="story-card">
                  <Image src={x.image} alt={x.alt} width={600} height={600} />
                  <div className="story-card-body"><div className="kicker">{String(i + 1).padStart(2,"0")}</div><h3>{x.title}</h3><p>{x.text}</p></div>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: 28 }}><SmartLink href="/experience" className="btn secondary">Explore the Experience</SmartLink></div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="stay-title">
        <div className="container">
          <div className="section-intro">
            <div><div className="section-label">06 / Stay</div><h2 id="stay-title" className="display">Choose the kind of stay that suits you.</h2></div>
            <p className="lede">Keep accommodation options distinct from structured wellness programmes. Details remain subject to client confirmation.</p>
          </div>
          <div className="journey-grid" style={{ marginTop: 40 }}>
            {journeys.map((j, i) => (
              <ScrollReveal key={j.title} y={i * 6}>
                <article className="journey-item">
                  <div className="journey-item-media"><Image src={j.image} alt={j.alt} width={900} height={700} /></div>
                  <div className="journey-item-body"><div className="kicker">Stay type</div><h3 className="display" style={{ marginTop: 7 }}>{j.title}</h3><p>{j.text}</p><SmartLink href="/stay" className="btn secondary">View Stay</SmartLink></div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight" aria-labelledby="trust-title">
        <div className="container editorial-split reverse" style={{ background: "rgba(247,243,234,.25)" }}>
          <div className="editorial-copy">
            <div className="section-label">08 / Trust</div>
            <h2 id="trust-title" className="display">A place you can trust.</h2>
            <p className="lede" style={{ marginTop: 20 }}>International visitors need clear information about who is behind the experience. Genuine founder, practitioner, guest-story and photography content belongs here once client-approved.</p>
            <div className="placeholder" style={{ marginTop: 28 }}><strong>Client content required</strong><span>[Founder, practitioner profiles, verified guest stories and approved trust signals to be provided.]</span></div>
          </div>
          <div className="editorial-media"><Image src="/images/resort-courtyard.webp" alt="Gold Mountain resort courtyard surrounded by greenery" fill sizes="(min-width: 1060px) 50vw, 100vw" /></div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container section-intro">
          <div><div className="section-label">09 / Journal</div><h2 className="display">Stories from Gold Mountain.</h2></div>
          <div>
            <p className="lede">A strategic journal can answer pre-booking questions around wellness, Ayurveda, food, nature, Arunachala and life at Gold Mountain.</p>
            <div className="placeholder" style={{ marginTop: 22 }}><strong>Articles to be provided</strong><span>No fictional articles are presented as live content in this build.</span></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-layout">
          <div><div className="kicker">10 / Book or enquire</div><h2 className="display" style={{ marginTop: 10 }}>Your time at Gold Mountain begins here.</h2><p className="lede" style={{ marginTop: 16 }}>Plan your stay, explore wellness or simply speak with the team.</p></div>
          <EnquiryActions />
        </div>
      </section>
    </>
  );
}
