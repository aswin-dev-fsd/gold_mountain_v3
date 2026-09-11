"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div className="faq-item" key={item.q}>
            <button type="button" className="faq-trigger" aria-expanded={expanded} onClick={() => setOpen(expanded ? null : index)}>
              <span>{item.q}</span><span aria-hidden="true">{expanded ? "−" : "+"}</span>
            </button>
            <div className={`faq-panel ${expanded ? "is-open" : ""}`} hidden={!expanded}><p>{item.a}</p></div>
          </div>
        );
      })}
    </div>
  );
}
