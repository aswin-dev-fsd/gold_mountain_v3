"use client";

import { useRef } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export type StoryRailItem = {
  title: string;
  text: string;
  image: string;
  alt: string;
  eyebrow?: string;
};

export default function StoryRail({
  items,
  ariaLabel,
  className = "",
}: {
  items: StoryRailItem[];
  ariaLabel: string;
  className?: string;
}) {
  const railRef = useRef<HTMLDivElement | null>(null);

  const move = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * Math.min(520, railRef.current.clientWidth * 0.72), behavior: "smooth" });
  };

  return (
    <section className={`story-rail-shell ${className}`} aria-label={ariaLabel}>
      <div className="story-rail-controls">
        <p className="small-note">Scroll to explore</p>
        <div className="rail-buttons">
          <button type="button" className="rail-button" onClick={() => move(-1)} aria-label="Previous story">←</button>
          <button type="button" className="rail-button" onClick={() => move(1)} aria-label="Next story">→</button>
        </div>
      </div>
      <div
        ref={railRef}
        className="story-rail"
        tabIndex={0}
        role="region"
        aria-label={`${ariaLabel} stories`}
        onKeyDown={(event) => { if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } if (event.key === "ArrowRight") { event.preventDefault(); move(1); } }}
      >
        {items.map((item, index) => (
          <ScrollReveal key={`${item.title}-${index}`}>
            <article className="story-card">
              <div className="story-card-media">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1100px) 31vw, (min-width: 700px) 58vw, 84vw" />
              </div>
              <div className="story-card-body">
                <span className="kicker">{item.eyebrow ?? String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
