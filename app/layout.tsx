import type { Metadata } from "next";
import "./globals.css";
import "../styles/site.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: "Gold Mountain Wellness Resort", template: "%s | Gold Mountain Wellness Resort" },
  description: "A peaceful wellness resort in the presence of Arunachala, bringing together traditional wellness, nature, nourishment and a meaningful stay.",
  applicationName: "Gold Mountain Wellness Resort",
  referrer: "strict-origin-when-cross-origin",
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: "Gold Mountain Wellness Resort", title: "Gold Mountain Wellness Resort", description: "Traditional wellness, nourishing food and nature in the presence of Arunachala.", images: [{ url: "/images/hero-arunachala.webp", width: 1472, height: 720, alt: "Arunachala landscape" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}
