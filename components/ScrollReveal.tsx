"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = { children: React.ReactNode; className?: string; y?: number; delay?: number; };

export default function ScrollReveal({ children, className, y = 20, delay = 0 }: Props) {
  const root = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !root.current) return;
    gsap.fromTo(root.current, { autoAlpha: 0, y }, {
      autoAlpha: 1, y: 0, duration: 0.65, delay,
      ease: "power2.out",
      scrollTrigger: { trigger: root.current, start: "top 88%", once: true },
    });
  }, { scope: root });
  return <div ref={root} className={className}>{children}</div>;
}
