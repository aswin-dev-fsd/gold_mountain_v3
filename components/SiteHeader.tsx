/* Client-only header state is isolated to this component. */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Gold Mountain Wellness Resort home">
          <Image src="/images/gold-mountain-logo.webp" alt="Gold Mountain Wellness Resort" width={155} height={67} priority />
        </Link>

        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="btn-row">
          <Link className="btn header-cta" href="/book-enquire">Book / Enquire</Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      <div className="mobile-nav" id="mobile-navigation">
        {open && (
          <nav className="mobile-panel" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
            <Link className="btn" href="/book-enquire" onClick={() => setOpen(false)}>Book / Enquire</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
