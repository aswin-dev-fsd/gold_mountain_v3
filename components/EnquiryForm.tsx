"use client";

import { FormEvent, useMemo, useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle"|"ready"|"error">("idle");
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_ENQUIRY_EMAIL;

  const directHref = useMemo(() => {
    if (whatsapp) return `https://wa.me/${whatsapp.replace(/\D/g, "")}`;
    if (email) return `mailto:${email}`;
    return undefined;
  }, [whatsapp, email]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("ready");
  }

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit}>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="field">
            <label htmlFor="name">Name *</label>
            <input id="name" name="name" required autoComplete="name" />
          </div>
          <div className="field">
            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="field">
            <label htmlFor="phone">WhatsApp / Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
          <div className="field">
            <label htmlFor="guests">Number of guests</label>
            <input id="guests" name="guests" type="number" min="1" inputMode="numeric" />
          </div>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="field">
            <label htmlFor="arrival">Preferred arrival date</label>
            <input id="arrival" name="arrival" type="date" />
          </div>
          <div className="field">
            <label htmlFor="departure">Preferred departure date</label>
            <input id="departure" name="departure" type="date" />
          </div>
        </div>
        <div className="field">
          <label htmlFor="type">Interested in</label>
          <select id="type" name="type" defaultValue="General Enquiry">
            <option>Stay</option>
            <option>Wellness</option>
            <option>Ayurveda</option>
            <option>Monthly Stay</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>

        {status === "ready" && (
          <div className="notice" role="status" aria-live="polite" style={{ marginBottom: 16 }}>
            The form is ready for live enquiry integration. No backend endpoint or verified contact destination was supplied in the source package, so this build does not pretend the enquiry has been received. Use the direct contact options below.
          </div>
        )}

        <button className="btn" type="submit">Prepare Enquiry</button>
        <p className="form-help">
          A real production submission endpoint can be connected later. No booking, availability or payment is confirmed by this form.
        </p>
        {directHref && (
          <a className="btn secondary" href={directHref} target={directHref.startsWith("http") ? "_blank" : undefined} rel={directHref.startsWith("http") ? "noreferrer" : undefined} style={{ marginTop: 12 }}>
            Continue via {whatsapp ? "WhatsApp" : "Email"}
          </a>
        )}
      </form>
    </div>
  );
}
