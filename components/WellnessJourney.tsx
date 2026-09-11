"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { pillars } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WellnessJourney() {
  const root = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useGSAP(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 1061) return;
    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray<HTMLElement>(".stage-visual");
      gsap.set(scenes, { autoAlpha: 0 });
      gsap.set(scenes[0], { autoAlpha: 1 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "+=2500",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setActive(Math.min(pillars.length - 1, Math.floor(self.progress * pillars.length))),
        },
      });
      scenes.slice(1).forEach((scene, index) => {
        tl.to(scenes[index], { autoAlpha: 0, duration: 0.45, ease: "none" }, index + 0.55)
          .to(scene, { autoAlpha: 1, duration: 0.45, ease: "none" }, "<");
      });
    }, root);
    return () => ctx.revert();
  }, { scope: root });

  return (
    <section ref={root} className="wellness-wrap" aria-labelledby="wellness-journey-title">
      <div className="container wellness-sticky">
        <div className="wellness-copy">
          <div className="kicker">02 / Wellness</div>
          <h2 id="wellness-journey-title" className="display">Wellness, in its own time.</h2>
          <p className="muted lede">The five-part story — body, mind, food, lifestyle and environment — frames the Gold Mountain experience without promising a medical outcome.</p>
          <div className="stage-progress" aria-label={`Wellness pillar ${active + 1} of ${pillars.length}`}>
            {pillars.map((p, i) => <span key={p.name} className={i === active ? "active" : ""} aria-hidden="true" />)}
          </div>
          <div className="wellness-mobile-list">
            {pillars.map((p) => <article className="mobile-pillar" key={p.name}><div className="mobile-pillar-media"><Image src={p.image} alt={p.alt} fill sizes="(max-width:760px) 100vw, 50vw" /></div><div><span className="kicker">{p.name}</span><h3 className="display">{p.title}</h3><p>{p.text}</p></div></article>)}
          </div>
        </div>
        <div className="pillar-stage">
          {pillars.map((p, i) => <article className="stage-visual" key={p.name}><Image src={p.image} alt="" fill sizes="(min-width: 1060px) 55vw, 100vw" /><div className="stage-caption"><div className="kicker">{p.name}</div><h3>{p.title}</h3><p>{p.text}</p></div></article>)}
        </div>
      </div>
    </section>
  );
}
