"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <section className="section" style={{ paddingTop: 160 }}><div className="container narrow"><div className="section-label">Something went wrong</div><h1 className="display">We could not load this page.</h1><p className="lede" style={{ marginTop: 20 }}>Please try again. No internal error details are shown to visitors.</p><button className="btn" style={{ marginTop: 24 }} onClick={() => reset()}>Try again</button></div></section>;
}
