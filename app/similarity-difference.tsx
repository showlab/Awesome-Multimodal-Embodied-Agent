"use client";

import { useState, type CSSProperties } from "react";
import { capabilities } from "./survey-content";

function CapabilityTransition({ text }: { text: string }) {
  const [source, target] = text.split(" → ");
  return (
    <p className="comparison-takeaway comparison-transition">
      <span>{source}</span>
      <span>→ {target}</span>
    </p>
  );
}

export default function SimilarityDifference() {
  const [active, setActive] = useState(0);
  const item = capabilities[active];
  return (
    <section
      className="paper-section wide-column"
      id="comparison"
      aria-labelledby="comparison-title"
    >
      <div className="section-intro">
        <h2 id="comparison-title">Capabilities: similarities & differences</h2>
      </div>
      <div className="comparison-tabs" aria-label="Select a PAPAV capability">
        {capabilities.map((entry, index) => (
          <button
            key={entry.name}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            style={{ "--capability": entry.color } as CSSProperties}
          >
            {entry.name}
          </button>
        ))}
      </div>
      <div
        className="comparison-content"
        aria-live="polite"
        style={{ "--capability": item.color } as CSSProperties}
      >
        <h3 className="capability-summary">
          {item.name}: {item.question}
        </h3>
        <div className="comparison-grid">
          <article>
            <p className="comparison-label">MMA → MMEA</p>
            <CapabilityTransition text={item.digital} />
          </article>
          <article>
            <p className="comparison-label">Shared capability</p>
            <p className="comparison-takeaway">{item.shared}</p>
          </article>
          <article>
            <p className="comparison-label">RS → MMEA</p>
            <CapabilityTransition text={item.robotics} />
          </article>
        </div>
        <figure className="paper-figure capability-figure">
          <a
            href={`paper-figures/${item.name.toLowerCase()}.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open the ${item.name} comparison figure`}
          >
            <img
              src={`paper-figures/${item.name.toLowerCase()}.webp`}
              alt={`${item.name}: shared capability, MMEA versus MMA, and MMEA versus robotic systems`}
              loading="lazy"
            />
          </a>
          <figcaption>
            Left: MMA–MMEA differences. Center: shared capability. Right:
            MMEA–RS differences.{" "}
            <a
              href="paper-figures/sec3-capabilities.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full comparison ↗
            </a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
