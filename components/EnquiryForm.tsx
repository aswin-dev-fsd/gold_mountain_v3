"use client";

import { FormEvent, useId, useState } from "react";

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const arrival = String(formData.get("arrival") || "");
    const departure = String(formData.get("departure") || "");
    if (arrival && departure && departure < arrival) {
      setStatus("error");
      setMessage("Please choose a departure date after the arrival date.");
      return;
    }
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(Object.fromEntries(formData.entries())) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The enquiry could not be submitted.");
      setStatus("success");
      setMessage(data.message || "Thank you. Your enquiry has been received. The Gold Mountain team will get back to you with availability and pricing.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The enquiry could not be submitted. Please use WhatsApp or email below.");
    }
  }

  const errorId = `${formId}-error`;
  const successId = `${formId}-success`;

  return (
    <div className="form-card">
      <form onSubmit={handleSubmit} aria-busy={status === "submitting"}>
        <div className="grid two">
          <div className="field"><label htmlFor={`${formId}-name`}>Name *</label><input id={`${formId}-name`} name="name" required autoComplete="name" /></div>
          <div className="field"><label htmlFor={`${formId}-email`}>Email *</label><input id={`${formId}-email`} name="email" type="email" required autoComplete="email" /></div>
        </div>
        <div className="grid two">
          <div className="field"><label htmlFor={`${formId}-phone`}>WhatsApp / Phone</label><input id={`${formId}-phone`} name="phone" type="tel" autoComplete="tel" /></div>
          <div className="field"><label htmlFor={`${formId}-guests`}>Number of guests</label><input id={`${formId}-guests`} name="guests" type="number" min="1" inputMode="numeric" /></div>
        </div>
        <div className="grid two">
          <div className="field"><label htmlFor={`${formId}-arrival`}>Preferred arrival date</label><input id={`${formId}-arrival`} name="arrival" type="date" /></div>
          <div className="field"><label htmlFor={`${formId}-departure`}>Preferred departure date</label><input id={`${formId}-departure`} name="departure" type="date" /></div>
        </div>
        <div className="field"><label htmlFor={`${formId}-type`}>Enquiry type</label><select id={`${formId}-type`} name="type" defaultValue="General Enquiry"><option>Stay</option><option>Wellness</option><option>Ayurveda</option><option>Monthly Stay</option><option>General Enquiry</option></select></div>
        <div className="field"><label htmlFor={`${formId}-message`}>Message</label><textarea id={`${formId}-message`} name="message" rows={6} /></div>
        <div className="honeypot" aria-hidden="true"><label htmlFor={`${formId}-website`}>Website</label><input id={`${formId}-website`} name="website" tabIndex={-1} autoComplete="off" /></div>

        {status === "success" && <div id={successId} className="notice success" role="status" aria-live="polite">{message}</div>}
        {status === "error" && <div id={errorId} className="notice error" role="alert">{message}</div>}

        <button className="btn" type="submit" disabled={status === "submitting"} aria-describedby={status === "error" ? errorId : status === "success" ? successId : undefined}>
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
        </button>
        <p className="form-help">Submitting an enquiry does not confirm a booking. Availability and pricing are confirmed directly by the Gold Mountain team.</p>
      </form>
    </div>
  );
}
