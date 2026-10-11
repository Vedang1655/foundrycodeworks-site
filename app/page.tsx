"use client";

import { useState } from "react";

function Logo() {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true">
      <path
        d="M60 3 C57 9 51 15 51 22 A9 9 0 0 0 69 22 C69 15 63 9 60 3 Z"
        fill="var(--accent)"
      />
      <path d="M30 38 H90 L108 106 H12 Z" fill="var(--accent)" />
      <text
        x="60"
        y="92"
        textAnchor="middle"
        fontFamily="Archivo, sans-serif"
        fontWeight="900"
        fontSize="46"
        fill="var(--bg)"
      >
        FC
      </text>
    </svg>
  );
}

const services = [
  {
    num: "01",
    title: "Websites",
    body: "Marketing sites, landing pages and storefronts that load fast, read well on mobile, and are built to actually convert visitors.",
  },
  {
    num: "02",
    title: "Custom software",
    body: "Internal tools, billing systems, and SaaS platforms built around how your business actually works — not around a generic template.",
  },
  {
    num: "03",
    title: "Maintenance & support",
    body: "Bug fixes, new features, and ongoing upkeep after launch, so the thing we built keeps working as your business grows.",
  },
];

const work = [
  {
    title: "MealHQ",
    status: "Live",
    domain: "mealhq.ca",
    desc: "A SaaS platform built for Canadian tiffin delivery businesses to manage vendors, subscriptions and customers in one place.",
    stack: ["SaaS", "Vendor management", "Subscriptions"],
    metric: "3",
    label: "Vendors live",
  },
  {
    title: "Viszlyn",
    status: "Live",
    domain: "viszlyn.io",
    desc: "A data-visualization site publishing ranked, chart-driven articles on earnings, companies and global stats. Built from scratch for full design control — custom article engine, SEO and a semi-automated publishing pipeline.",
    stack: ["Next.js", "React", "Vercel", "SEO"],
    metric: "12+",
    label: "Articles published",
  },
  {
    title: "Sainath Billing Software",
    status: "In use",
    domain: "Custom desktop application",
    desc: "A desktop billing application built for a vegetable wholesale business, handling day-to-day invoicing and record-keeping the way the business actually operates.",
    stack: ["Desktop app", "Billing", "Client project"],
    metric: "100%",
    label: "Custom-built",
  },
];

export default function Page() {
  const [copied, setCopied] = useState(false);
  const email = "khamarvedang04@gmail.com";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — selectable text still works
    }
  }

  return (
    <>
      <header>
        <a className="brand" href="#top">
          <Logo />
          <span className="brand-name">FOUNDRY CODEWORKS</span>
        </a>
        <nav>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div id="top" />
      <section className="hero" style={{ borderTop: "none", paddingTop: 64 }}>
        <p className="eyebrow">Web &amp; software development</p>
        <h1>We build the software your business actually runs on.</h1>
        <p className="lede">
          Foundry Codeworks designs and codes websites and custom software
          for growing businesses — built in-house by a developer, not
          resold from a template shop.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#contact">
            Get a free quote
          </a>
          <a className="btn btn-ghost" href="#work">
            See the work
          </a>
        </div>
        <div className="meta">
          <span>
            <b>Based in</b> Burlington, ON
          </span>
          <span>
            <b>Working with</b> clients anywhere
          </span>
          <span>
            <b>Stack</b> React · Node.js · PHP · SQL
          </span>
        </div>
      </section>

      <section id="services">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h2>Three ways we help you ship</h2>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service" key={s.title}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work">
        <div className="section-head">
          <p className="eyebrow">Selected work</p>
          <h2>Real products, shipped and running</h2>
        </div>
        <div className="work-list">
          {work.map((w) => (
            <div className="work-item" key={w.title}>
              <div className="work-main">
                <div className="work-top">
                  <span className="work-title">{w.title}</span>
                  <span className="work-status">{w.status}</span>
                </div>
                <div className="work-domain">{w.domain}</div>
                <p className="work-desc">{w.desc}</p>
                <div className="work-stack">
                  {w.stack.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="work-metric">
                <div className="n">{w.metric}</div>
                <div className="l">{w.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2>Built by someone who writes the code</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              Foundry Codeworks is run by a Computer Engineering graduate
              with a Post-Degree Certificate in Web Development, plus
              hands-on time as an IT support technician and WordPress
              developer before going independent.
            </p>
            <p>
              Every project here is designed and coded in-house — MealHQ,
              Viszlyn and the Sainath billing system above are all
              products we personally built and still maintain, not
              portfolio mockups.
            </p>
          </div>
          <div>
            <div className="skill-group">
              <p className="eyebrow">Languages</p>
              <div className="skill-list">
                {["JavaScript", "TypeScript", "Java", "PHP", "SQL"].map(
                  (s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="skill-group">
              <p className="eyebrow">Frameworks &amp; platforms</p>
              <div className="skill-list">
                {["React", "Node.js", "Spring Boot", "WordPress", "GCP"].map(
                  (s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ paddingBottom: 40 }}>
        <div className="contact-box">
          <div>
            <h2>Have a project in mind?</h2>
            <p className="sub">
              Tell us what you&apos;re building — we&apos;ll reply with a
              free quote.
            </p>
            <div className="email-row">
              <span className="email-text">{email}</span>
              <button
                className="copy-btn"
                type="button"
                onClick={copyEmail}
                data-copied={copied || undefined}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <a className="btn btn-primary" href={`mailto:${email}`}>
            Email us
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Foundry Codeworks</span>
        <span>Burlington, ON · foundrycodeworks.com</span>
      </footer>
    </>
  );
}
