"use client";

import { useState } from "react";
import SmartLink from "@/components/SmartLink";

export type JourneyChoice = {
  title: string;
  text: string;
};

export default function JourneyChooser({ choices }: { choices: JourneyChoice[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="journey-chooser" role="list" aria-label="Stay type choices">
      {choices.map((choice, index) => {
        const expanded = index === active;
        const panelId = `journey-panel-${index}`;
        return (
          <article className={`journey-choice ${expanded ? "is-active" : ""}`} key={choice.title} role="listitem">
            <button
              type="button"
              className="journey-choice-trigger"
              aria-expanded={expanded}
              aria-controls={panelId}
              onClick={() => setActive(index)}
            >
              <span className="journey-choice-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="display">{choice.title}</span>
              <span aria-hidden="true" className="journey-choice-icon">{expanded ? "−" : "+"}</span>
            </button>
            <div id={panelId} className="journey-choice-panel" hidden={!expanded}>
              <p>{choice.text}</p>
              <SmartLink href="/book-enquire" className="btn secondary">Enquire</SmartLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}
