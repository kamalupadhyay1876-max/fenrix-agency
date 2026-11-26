import type { Metadata } from "next";
import { FeatureRail } from "@/components/upgrade";
import { ContactStrip, DetailSection, PageHero, PageShell } from "@/components/site-frame";

export const metadata: Metadata = { title: "About | Fenrix", description: "Meet Fenrix, a close-to-the-work partner for AI automation and digital growth." };

export default function AboutPage() {
  return <PageShell><PageHero eyebrow="About Fenrix" title="Close to the work. Serious about the signal." body="Fenrix is a small, focused growth partner for teams that want better systems without losing the human judgment behind them." /><DetailSection eyebrow="How we work" title="A better kind of agency relationship."><div className="principles-grid"><article><span>01</span><h3>Make it obvious</h3><p>Good strategy reduces noise. We make the next useful decision easier to see.</p></article><article><span>02</span><h3>Build for learning</h3><p>Every launch is a chance to collect better signal, not a finish line.</p></article><article><span>03</span><h3>Keep it human</h3><p>Automation should give your team more room for judgment, not less of it.</p></article></div><FeatureRail /></DetailSection><ContactStrip /></PageShell>;
}
