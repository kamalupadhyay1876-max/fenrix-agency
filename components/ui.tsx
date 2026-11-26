import type { ReactNode } from "react";

export function Logo() {
  return <a className="logo" href="#top" aria-label="Fenrix home"><span className="logo-mark"><i /><i /></span><span>fenrix<span className="logo-dot">.</span></span></a>;
}

export function Arrow({ direction = "↗" }: { direction?: string }) {
  return <span className="arrow" aria-hidden="true">{direction}</span>;
}

export function SectionHeading({ eyebrow, title, children, align = "left" }: { eyebrow: string; title: string; children?: ReactNode; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{children && <p className="section-copy">{children}</p>}</div>;
}

export function Button({ href, children, secondary = false }: { href: string; children: ReactNode; secondary?: boolean }) {
  return <a className={`button ${secondary ? "button-secondary" : ""}`} href={href}>{children}<Arrow /></a>;
}
