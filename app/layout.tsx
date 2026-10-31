import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://foundrycodeworks.com";
const title = "Foundry Codeworks | Web & Software Development in Burlington, ON";
const description =
  "Custom websites and software for growing businesses in Burlington, Oakville, Milton and the Halton region — designed and coded in-house, not resold from a template shop.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "web developer Burlington",
    "software developer Burlington Ontario",
    "custom website development Halton",
    "web development Oakville",
    "web development Milton",
    "custom software development Ontario",
  ],
  authors: [{ name: "Foundry Codeworks" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Foundry Codeworks",
    title,
    description,
    locale: "en_CA",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=IBM+Plex+Mono:wght@500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
