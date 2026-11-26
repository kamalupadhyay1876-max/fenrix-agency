import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fenrix — AI automation & digital growth",
  description: "Fenrix builds AI-powered systems, premium websites, and measurable growth engines for ambitious businesses.",
  metadataBase: new URL("https://fenrixagency.com"),
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { title: "Fenrix — Build a growth system that keeps working.", description: "AI automation, digital marketing, and premium web experiences.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
