import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/lib/content";

export default function SiteFooter() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_ENQUIRY_EMAIL;
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const maps = "https://www.google.com/maps/search/?api=1&query=No.97%2C%20Kotangal%20Road%2C%20Adiannamalai%2C%20Tiruvannamalai%2C%20Tamil%20Nadu%20606604%2C%20India";

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image src="/images/gold-mountain-logo-mono.webp" alt="Gold Mountain Wellness Resort" width={160} height={81} />
          <p style={{ marginTop: 18 }}>A peaceful wellness resort in the presence of Arunachala, bringing together nature, wellbeing, nourishment and a meaningful stay.</p>
        </div>
        <div>
          <h3>Explore</h3>
          {navItems.slice(1, 7).map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}
          <Link href="/book-enquire">Book / Enquire</Link>
        </div>
        <div>
          <h3>Location</h3>
          <p>No.97, Kotangal Road,<br/>Adiannamalai,<br/>Tiruvannamalai, Tamil Nadu 606604, India</p>
          <a href={maps} target="_blank" rel="noreferrer">Open in Google Maps</a>
          <p className="small-note" style={{ marginTop: 8 }}>Address requires final client/official verification before production publication.</p>
        </div>
        <div>
          <h3>Contact</h3>
          {whatsapp ? <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">WhatsApp</a> : <span className="small-note">WhatsApp number to be provided</span>}
          {email ? <a href={`mailto:${email}`}>Email: {email}</a> : <span className="small-note">Email address to be provided</span>}
          {phone ? <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>Phone: {phone}</a> : <span className="small-note">Phone number to be provided</span>}
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Gold Mountain Wellness Resort. All rights reserved.</span>
        <span>Built with an enquiry-first model; no live availability or payment flow is assumed.</span>
      </div>
    </footer>
  );
}
