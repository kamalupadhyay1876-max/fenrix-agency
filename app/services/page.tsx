import type { Metadata } from "next";
import { Arrow } from "@/components/ui";
import { ContactStrip, DetailSection, PageHero, PageShell } from "@/components/site-frame";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Services | Fenrix", description: "AI automation, digital growth, SEO, lead generation, and premium web design from Fenrix." };

export default function ServicesPage() {
  return <PageShell><PageHero eyebrow="Capabilities" title="The pieces of growth, connected." body="Fenrix helps ambitious teams replace scattered tactics with one operating system for demand, delivery, and momentum." /><DetailSection eyebrow="What we build" title="Choose the pressure point. We&apos;ll connect the system."><div className="detail-cards">{services.map((service) => <article className="detail-card" key={service.number}><span className="card-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><a href="/contact">Explore this capability <Arrow /></a></article>)}</div></DetailSection><section className="dark-callout"><div className="container split-callout"><div><p className="eyebrow">The Fenrix difference</p><h2>One partner from first question to measurable signal.</h2></div><p>We keep strategy, creative, technology, and optimisation close together so you get fewer handoffs and faster learning.</p></div></section><ContactStrip /></PageShell>;
}
