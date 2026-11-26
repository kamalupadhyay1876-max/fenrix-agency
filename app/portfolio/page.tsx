import type { Metadata } from "next";
import { Arrow } from "@/components/ui";
import { ContactStrip, DetailSection, PageHero, PageShell } from "@/components/site-frame";
import { work } from "@/data/site";

export const metadata: Metadata = { title: "Work | Fenrix", description: "Selected Fenrix growth systems, automation builds, and digital launches." };

export default function PortfolioPage() {
  return <PageShell><PageHero eyebrow="Selected work" title="Proof that the system can move." body="Every project starts with a real bottleneck and ends with a clearer way to create, capture, or convert demand." /><DetailSection eyebrow="Case studies" title="Small teams. Serious momentum."><div className="portfolio-list">{work.map((item, index) => <article className={`portfolio-row ${item.color}`} key={item.title}><div className="portfolio-number">0{index + 1}</div><div className="portfolio-art"><div className="art-grid" /><div className="art-ui"><span /><span /><span /><b>{item.result}</b></div></div><div className="portfolio-copy"><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.text}</p><a href="/contact">Discuss a similar challenge <Arrow /></a></div></article>)}</div></DetailSection><ContactStrip /></PageShell>;
}
