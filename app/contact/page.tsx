import type { Metadata } from "next";
import { ContactForm } from "@/components/interactive";
import { CopyButton } from "@/components/upgrade";
import { PageHero, PageShell } from "@/components/site-frame";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact | Fenrix", description: "Start a conversation with Fenrix about AI automation, digital growth, or a premium website." };

export default function ContactPage() {
  return <PageShell><PageHero eyebrow="Start a project" title="Bring us the messy version." body="Tell us what is stuck, what is changing, or what you want to build. We&apos;ll make the first conversation useful." /><section className="section-pad contact-page-section"><div className="container contact-grid"><div className="contact-copy"><p className="eyebrow">Direct line</p><h2>Good work starts with a useful question.</h2><p>Prefer email? Send the context directly and we&apos;ll reply from the Fenrix team.</p><div className="contact-details"><a href={`mailto:${site.email}`}>{site.email}<span>↗</span></a><a href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}<span>↗</span></a></div><CopyButton value={site.email} /></div><ContactForm /></div></section></PageShell>;
}
