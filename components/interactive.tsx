"use client";

import { useState, type FormEvent } from "react";
import { ArrowDown, Check, Menu, X } from "lucide-react";
import { faqs, site } from "@/data/site";
import { Button, Logo } from "@/components/ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Services", "/services"], ["Work", "/portfolio"], ["Process", "/#process"], ["About", "/about"]];
  return <header className="navbar"><div className="nav-inner"><Logo /><nav className="desktop-nav">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="nav-actions"><a className="nav-email" href={`mailto:${site.email}`}>Let&apos;s talk</a><Button href="#contact">Start a project</Button></div><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-menu">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}<a className="mobile-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></a></div>}</header>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${active === index ? "active" : ""}`} key={question}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>{question}</span><ArrowDown /></button>{active === index && <p>{answer}</p>}</div>)}</div>;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form.entries())) });
    const result = await response.json() as { ok: boolean; message?: string };
    setBusy(false);
    if (!result.ok) { setError(result.message ?? "Please try again."); return; }
    setSent(true);
  }
  return <form className="contact-form" onSubmit={submit} aria-live="polite">{sent ? <div className="success-state"><span className="success-icon"><Check /></span><h3>Message received.</h3><p>Thanks{name ? `, ${name}` : ""}. We&apos;ll get back to you shortly.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Send another message ↗</button></div> : <><div className="form-row"><label>Name<input name="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>AI automation</option><option>Web design</option><option>Marketing & SEO</option><option>Something else</option></select></label><label>Budget<select name="budget" defaultValue=""><option value="" disabled>Choose a range</option><option>₹50k – ₹1L</option><option>₹1L – ₹3L</option><option>₹3L+</option></select></label></div><label>Tell us about the project<textarea name="message" required placeholder="A little context helps us make the first conversation useful." rows={4} /></label>{error && <p className="form-error">{error}</p>}<button className="button form-submit" type="submit" disabled={busy}>{busy ? "Sending…" : "Send enquiry ↗"}</button></>}</form>;
}
