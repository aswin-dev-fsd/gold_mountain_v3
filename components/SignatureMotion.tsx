"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroMotion() {
  const root = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const el = document.querySelector(".hero");
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const image = el.querySelector(".hero-media img");
      const titleLines = el.querySelectorAll(".hero-title .line span");
      const divider = el.querySelector(".hero-divider");
      const actions = el.querySelector(".hero-actions");
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      if (image) tl.fromTo(image, { scale: 1.04, clipPath: "inset(5% 3% 5% 3%)" }, { scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.25 }, 0);
      if (titleLines.length) tl.fromTo(titleLines, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.72, stagger: 0.08 }, 0.5);
      if (divider) tl.fromTo(divider, { scaleX: 0 }, { scaleX: 1, duration: 0.45 }, "-=0.18");
      if (actions) tl.fromTo(actions, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.08");
      if (image) gsap.to(image, { scale: 1.012, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1.6 });
    }, root);
    return () => ctx.revert();
  }, { scope: root });
  return <span ref={root} className="motion-anchor" aria-hidden="true" />;
}

export function LandscapeMotion({ target = "img" }: { target?: string }) {
  useGSAP(() => {
    const root = document.querySelector(".landscape");
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 761) return;
    const img = root.querySelector(target);
    if (!img) return;
    const ctx = gsap.context(() => {
      gsap.to(img, { yPercent: -2, scale: 1.015, ease: "none", scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 } });
    }, root);
    return () => ctx.revert();
  });
  return null;
}

export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!ref.current || reduce || window.innerWidth < 761) return;
    const ctx = gsap.context(() => {
      const image = ref.current?.querySelector("img");
      if (!image) return;
      gsap.fromTo(image, { yPercent: 2, scale: 1.02 }, { yPercent: -2, scale: 1.015, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1 } });
    }, ref);
    return () => ctx.revert();
  }, { scope: ref });
  return <div className="parallax-media" ref={ref}><Image src={src} alt={alt} fill sizes="(min-width: 900px) 25vw, 80vw" /></div>;
}
