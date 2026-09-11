"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HeroMotion() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const root = document.querySelector(".hero");
      if (!root) return;
      const image = root.querySelector(".hero-media img");
      const titleLines = root.querySelectorAll(".hero-title .line span");
      const divider = root.querySelector(".hero-divider");
      const actions = root.querySelector(".hero-actions");
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      if (image) tl.fromTo(image, { scale: 1.04, clipPath: "inset(6% 4% 6% 4%)" }, { scale: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.6 }, 0);
      if (titleLines?.length) tl.fromTo(titleLines, { yPercent: 105, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.75, stagger: 0.08 }, 0.7);
      if (divider) tl.fromTo(divider, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 0.55 }, "-=0.25");
      if (actions) tl.fromTo(actions, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.1");
      return () => tl.kill();
    });
    return () => mm.revert();
  });
  return null;
}

export function LandscapeMotion({ target = "img" }: { target?: string }) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 761px)", () => {
      const root = document.querySelector(".landscape");
      const img = root?.querySelector(target);
      if (!root || !img) return;
      const tween = gsap.to(img, {
        yPercent: -2,
        scale: 1.015,
        ease: "none",
        scrollTrigger: { trigger: root, start: "top bottom", end: "bottom top", scrub: 1 },
      });
      return () => tween.scrollTrigger?.kill();
    });
    return () => mm.revert();
  });
  return null;
}
