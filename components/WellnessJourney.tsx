"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pillars } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WellnessJourney() {
  const root = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  useGSAP(() => {
    if (!root.current) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1061px)", () => {
      const ctx = gsap.context(() => {
        const imgs = gsap.utils.toArray<HTMLElement>(".stage-visual");
        gsap.set(imgs, { autoAlpha: 0 });
        if (imgs[0]) gsap.set(imgs[0], { autoAlpha: 1 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=2600",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const next = Math.min(pillars.length - 1, Math.floor(self.progress * pillars.length));
              if (next !== activeRef.current) {
                activeRef.current = next;
                setActive(next);
              }
            },
          }
        });
        for (let i = 1; i < imgs.length; i++) {
          tl.to(imgs[i - 1], { autoAlpha: 0, duration: 0.42, ease: "none" }, i - 0.42);
          tl.to(imgs[i], { autoAlpha: 1, duration: 0.42, ease: "none" }, i - 0.42);
        }
        return () => ctx.revert();
      }, root);
    });
    return () => mm.revert();
  }, { scope: root });

  return (
    <section ref={root} className="wellness-wrap" aria-labelledby="wellness-journey-title">
      <div className="container wellness-sticky">
        <div className="wellness-copy">
          <div className="kicker">The wellness journey</div>
          <h2 id="wellness-journey-title" className="display" style={{ marginTop: 14 }}>Body, mind, food, lifestyle, environment.</h2>
          <p className="muted lede" style={{ marginTop: 22, color: "rgba(247,243,234,.78)" }}>
            The five-part story is a guide to the Gold Mountain experience, not a promise of a medical outcome.
          </p>
          <div className="stage-progress" aria-label="Wellness pillars">
            {pillars.map((p, i) => <span key={p.name} className={i <= active ? "active" : ""} />)}
          </div>
          <div className="small-note" style={{ color: "rgba(247,243,234,.58)", marginTop: 18 }}>
            On smaller screens this becomes a straightforward vertical sequence.
          </div>
        </div>
        <div className="pillar-stage">
          {pillars.map((p, i) => (
            <article key={p.name} className="stage-visual">
              <img src={p.image} alt={p.alt} />
              <div className="stage-caption">
                <div className="kicker">{p.name}</div>
                <h3>{p.title}</h3>
                <p style={{ maxWidth: 620, marginTop: 8 }}>{p.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
