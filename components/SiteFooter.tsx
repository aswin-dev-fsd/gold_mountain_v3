import Image from "next/image";
import Link from "next/link";
import { navItems, site } from "@/lib/content";

export default function SiteFooter() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const email = process.env.NEXT_PUBLIC_ENQUIRY_EMAIL;
  const phone = process.env.NEXT_PUBLIC_PHONE;
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL;
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL;
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Image src="/images/gold-mountain-logo-mono.webp" alt="Gold Mountain Wellness Resort" width={160} height={81} />
          <p style={{ marginTop: 18 }}>{site.description}</p>
        </div>
        <div>
          <h3>Explore</h3>
          {navItems.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/book-enquire">Book / Enquire</Link>
        </div>
        <div>
          <h3>Location</h3>
          <address>
            {site.address.lines.map((line) => <span key={line}>{line}<br /></span>)}
          </address>
          <a href={maps} target="_blank" rel="noreferrer">Open in Google Maps ↗</a>
          <p className="small-note" style={{ marginTop: 8 }}>{site.address.verificationNote}</p>
        </div>
        <div>
          <h3>Contact</h3>
          {whatsapp ? <a href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">WhatsApp</a> : <span className="small-note">WhatsApp number to be provided</span>}
          {email ? <a href={`mailto:${email}`}>Email: {email}</a> : <span className="small-note">Email address to be provided</span>}
          {phone ? <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>Phone: {phone}</a> : null}
          {instagram ? <a href={instagram} target="_blank" rel="noreferrer">Instagram</a> : null}
          {facebook ? <a href={facebook} target="_blank" rel="noreferrer">Facebook</a> : null}
          {!instagram && !facebook ? <span className="small-note">Social links to be provided</span> : null}
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms &amp; Conditions</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Gold Mountain Wellness Resort. All rights reserved.</span>
        <span>Enquiry-first website · availability and pricing are confirmed directly.</span>
      </div>
    </footer>
  );
}
