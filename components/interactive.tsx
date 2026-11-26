"use client";

import { useState } from "react";
import { ArrowDown, Check, Menu, X } from "lucide-react";
import { faqs, site } from "@/data/site";
import { Button, Logo } from "@/components/ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Services", "#services"], ["Work", "#work"], ["Process", "#process"], ["About", "#about"]];
  return <header className="navbar"><div className="nav-inner"><Logo /><nav className="desktop-nav">{links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav><div className="nav-actions"><a className="nav-email" href={`mailto:${site.email}`}>Let&apos;s talk</a><Button href="#contact">Start a project</Button></div><button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button></div>{open && <div className="mobile-menu">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<span>↗</span></a>)}<a className="mobile-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></a></div>}</header>;
}

export function FAQ() {
  const [active, setActive] = useState(0);
  return <div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${active === index ? "active" : ""}`} key={question}><button onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span>{question}</span><ArrowDown /></button>{active === index && <p>{answer}</p>}</div>)}</div>;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  return <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true); }} aria-live="polite">{sent ? <div className="success-state"><span className="success-icon"><Check /></span><h3>Message received.</h3><p>Thanks{name ? `, ${name}` : ""}. We&apos;ll get back to you shortly.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Send another message ↗</button></div> : <><div className="form-row"><label>Name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>What do you need?<select defaultValue=""><option value="" disabled>Select a service</option><option>AI automation</option><option>Web design</option><option>Marketing & SEO</option><option>Something else</option></select></label><label>Budget<select defaultValue=""><option value="" disabled>Choose a range</option><option>₹50k – ₹1L</option><option>₹1L – ₹3L</option><option>₹3L+</option></select></label></div><label>Tell us about the project<textarea required placeholder="A little context helps us make the first conversation useful." rows={4} /></label><button className="button form-submit" type="submit">Send enquiry <span>↗</span></button></>}</form>;
}
