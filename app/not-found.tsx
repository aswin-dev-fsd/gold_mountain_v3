import Link from "next/link";
export default function NotFound() {
  return <section className="section" style={{ paddingTop: 160 }}><div className="container narrow"><div className="section-label">404</div><h1 className="display">This page could not be found.</h1><p className="lede" style={{ marginTop: 20 }}>Return to Gold Mountain and continue exploring.</p><Link className="btn" style={{ marginTop: 24 }} href="/">Back to home</Link></div></section>;
}
