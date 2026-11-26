import type { ReactNode } from "react";
import { Arrow, Button, Logo, SectionHeading } from "@/components/ui";
import { Navbar } from "@/components/interactive";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="footer"><div className="container footer-top"><div className="footer-brand"><Logo /><p>AI automation and digital growth<br />for teams building what&apos;s next.</p></div><div className="footer-links"><div><span>Explore</span><a href="/services">Services</a><a href="/portfolio">Work</a><a href="/about">About Fenrix</a></div><div><span>Connect</span><a href={`mailto:${site.email}`}>Email us</a><a href={`tel:${site.phone.replaceAll(" ", "")}`}>Call Fenrix</a><a href="/contact">Start a project</a></div><div><span>Legal</span><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div></div><div className="container footer-bottom"><span>© 2026 Fenrix Agency</span><span>Built with intent <b>✦</b></span></div></footer>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><Navbar /><main className="subpage">{children}</main><Footer /></>;
}

export function PageHero({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return <section className="subpage-hero"><div className="container"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="subpage-lede">{body}</p><Button href="/contact">Start a conversation</Button></div></section>;
}

export function BackLink({ href = "/" }: { href?: string }) {
  return <a className="text-link back-link" href={href}><span>←</span> Back to Fenrix</a>;
}

export function DetailSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="section-pad detail-section"><div className="container"><SectionHeading eyebrow={eyebrow} title={title} />{children}</div></section>;
}

export function ContactStrip() {
  return <section className="contact-strip"><div className="container"><div><p className="eyebrow">Have a challenge?</p><h2>Let&apos;s make the next move obvious.</h2></div><Button href="/contact">Talk to Fenrix <Arrow /></Button></div></section>;
}
