import { NextResponse } from "next/server";

const allowedTypes = new Set(["Stay", "Wellness", "Ayurveda", "Monthly Stay", "General Enquiry"]);
const requestLog = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;

function clean(value: unknown, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) return NextResponse.json({ error: "Unsupported request format." }, { status: 415 });
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (contentLength > 20000) return NextResponse.json({ error: "The enquiry is too large." }, { status: 413 });

    const ip = (request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown").split(",")[0].trim();
    const now = Date.now();
    const recent = (requestLog.get(ip) || []).filter((time) => now - time < WINDOW_MS);
    if (recent.length >= MAX_REQUESTS) return NextResponse.json({ error: "Too many enquiries from this connection. Please try again later or use WhatsApp/email." }, { status: 429 });
    recent.push(now);
    requestLog.set(ip, recent);

    const bodyText = JSON.stringify(await request.json());
    if (new TextEncoder().encode(bodyText).byteLength > 20000) return NextResponse.json({ error: "The enquiry is too large." }, { status: 413 });
    const body = JSON.parse(bodyText) as Record<string, unknown>;
    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 80);
    const guests = clean(body.guests, 10);
    const arrival = clean(body.arrival, 20);
    const departure = clean(body.departure, 20);
    const type = allowedTypes.has(clean(body.type, 40)) ? clean(body.type, 40) : "General Enquiry";
    const message = clean(body.message, 4000);
    const website = clean(body.website, 100);

    if (website) return NextResponse.json({ ok: true, message: "Thank you. Your enquiry has been received." });
    if (!name || !email) return NextResponse.json({ error: "Please provide your name and email address." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (arrival && departure && departure < arrival) return NextResponse.json({ error: "Departure date must be after arrival date." }, { status: 400 });
    if (guests && (!/^\d+$/.test(guests) || Number(guests) < 1 || Number(guests) > 50)) return NextResponse.json({ error: "Please enter a valid number of guests." }, { status: 400 });

    const webhook = process.env.ENQUIRY_WEBHOOK_URL;
    if (!webhook) return NextResponse.json({ error: "The enquiry service is not connected yet. Please use WhatsApp or email to contact the Gold Mountain team." }, { status: 503 });

    const upstream = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ source: "gold-mountain-website", submittedAt: new Date().toISOString(), name, email, phone, guests, arrival, departure, type, message }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!upstream.ok) return NextResponse.json({ error: "The enquiry service could not accept the submission. Please use WhatsApp or email instead." }, { status: 502 });

    return NextResponse.json({ ok: true, message: "Thank you. Your enquiry has been received. The Gold Mountain team will get back to you with availability and pricing." });
  } catch {
    return NextResponse.json({ error: "The enquiry could not be submitted. Please use WhatsApp or email instead." }, { status: 400 });
  }
}
