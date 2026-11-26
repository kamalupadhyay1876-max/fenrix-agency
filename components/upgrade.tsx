"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Check, Copy, Gauge, Sparkles } from "lucide-react";
import { Button } from "@/components/ui";

export function ROICalculator() {
  const [hours, setHours] = useState(20);
  const [rate, setRate] = useState(900);
  const result = useMemo(() => hours * rate * 4, [hours, rate]);
  return <div className="roi-card"><div className="roi-intro"><span className="icon-badge"><Gauge /></span><p className="eyebrow">Momentum calculator</p><h3>See what repetitive work costs you.</h3><p>Move the sliders to estimate a monthly opportunity for automation.</p></div><div className="roi-controls"><label>Hours lost every week <strong>{hours} hrs</strong><input aria-label="Hours lost every week" type="range" min="1" max="60" value={hours} onChange={(event) => setHours(Number(event.target.value))} /></label><label>Blended hourly value <strong>₹{rate}</strong><input aria-label="Blended hourly value" type="range" min="300" max="3000" step="100" value={rate} onChange={(event) => setRate(Number(event.target.value))} /></label></div><div className="roi-result"><span>Estimated monthly opportunity</span><strong>₹{result.toLocaleString("en-IN")}</strong><small>This is a planning estimate, not a promise. We&apos;ll validate the real number together.</small></div><Button href="/contact">Find your real opportunity <ArrowRight /></Button></div>;
}

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  return <button className="copy-button" onClick={() => { navigator.clipboard?.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1600); }}><Copy /> {copied ? "Copied" : "Copy email"}</button>;
}

export function FeatureRail() {
  return <div className="feature-rail"><div><Sparkles /><span>Clarity first</span></div><div><Check /><span>Built around your stack</span></div><div><Gauge /><span>Measured by outcomes</span></div></div>;
}
