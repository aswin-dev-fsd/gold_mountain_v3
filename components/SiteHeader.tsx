"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/content";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === "Tab" && open && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    if (open) requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>("a")?.focus());
  }, [open]);

  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
  const imageHeroRoute = pathname === "/" || ["/wellness", "/stay", "/experience", "/about"].includes(pathname);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${!imageHeroRoute ? "solid" : ""}`}>
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Gold Mountain Wellness Resort home">
          <Image src="/images/gold-mountain-logo.webp" alt="Gold Mountain Wellness Resort" width={155} height={67} />
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link className="btn header-cta" href="/book-enquire">Book / Enquire</Link>
          <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
            <span aria-hidden="true">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && <div className="mobile-nav-backdrop" onClick={() => { setOpen(false); menuButtonRef.current?.focus(); }} />}
      <aside ref={panelRef} className={`mobile-panel ${open ? "is-open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!open}>
        {navItems.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
        <Link className="btn" href="/book-enquire" onClick={() => setOpen(false)}>Book / Enquire</Link>
      </aside>
    </header>
  );
}
