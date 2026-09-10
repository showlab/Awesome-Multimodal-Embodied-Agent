"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { capabilities } from "./survey-content";
import { comparisons, type Flow } from "./capability-comparison-data";

export default function SimilarityDifference() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const item = capabilities[active];
  const diagram = comparisons[active];

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, { threshold: 0.12 });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

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
            aria-controls="capability-comparison"
            onClick={() => setActive(index)}
            style={{ "--capability": entry.color } as CSSProperties}
          >
            {entry.name}
          </button>
        ))}
      </div>
      <div
        ref={stageRef}
        id="capability-comparison"
        className={`comparison-content${visible ? " comparison-in-view" : ""}`}
        style={{ "--capability": item.color } as CSSProperties}
      >
        <h3 className="capability-summary" aria-live="polite">
          {item.name}: {item.question}
        </h3>
        <div className="capability-triptych" key={item.name}>
          <ComparisonColumn label="MMA & MMEA" flows={diagram.left} side="left" />
          <article className="capability-shared">
            <header>Shared capability</header>
            <div className="capability-shared-art">
              <img src={diagram.shared.image} alt="" width="240" height="180" />
            </div>
            <h4>{item.shared}</h4>
          </article>
          <ComparisonColumn label="MMEA & RS" flows={diagram.right} side="right" />
        </div>
        <div className="comparison-source">
          <a href="paper-figures/sec3-capabilities.pdf" target="_blank" rel="noopener noreferrer">
            Full comparison ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({ label, flows, side }: {
  label: string;
  flows: [Flow, Flow];
  side: "left" | "right";
}) {
  return (
    <div className={`capability-boundary capability-boundary-${side}`}>
      <header>{label}</header>
      <div className="capability-paired-flows">
        {flows.map((flow) => <FlowCard key={flow.code} flow={flow} />)}
      </div>
    </div>
  );
}

function FlowCard({ flow }: { flow: Flow }) {
  return (
    <article className="capability-flow">
      <h4 className={`capability-family capability-family-${flow.code.toLowerCase()}`}>{flow.code}</h4>
      <div className="capability-flow-sequence">
        <div>
          <img src={flow.input[0]} alt="" width="96" height="96" />
          <span>{flow.input[1]}</span>
        </div>
        <span className="capability-flow-arrow" aria-hidden="true">→</span>
        <div>
          <img src={flow.output[0]} alt="" width="96" height="96" />
          <span>{flow.output[1]}</span>
        </div>
      </div>
      <p>{flow.caption}</p>
    </article>
  );
}
