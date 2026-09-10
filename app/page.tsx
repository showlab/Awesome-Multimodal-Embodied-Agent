import BenchmarkExplorer from "./benchmark-explorer";
import SimilarityDifference from "./similarity-difference";
import EvolutionTree from "./evolution-tree";
import PapavFramework from "./papav-framework";
import { benchmarks } from "./benchmark-data";
import {
  authors,
  authorHomepages,
  capabilities,
  challenges,
} from "./survey-content";

const authorRows = [
  authors.slice(0, 6),
  authors.slice(6, 12),
  authors.slice(12),
];

const total = benchmarks.length;
const explicit = (index: number) =>
  benchmarks.filter((row) => row.coverage[index] === "direct").length;

function PapavName() {
  return (
    <strong className="keep-together">
      {capabilities.map((item) => (
        <span key={item.name} style={{ color: item.color }}>
          {item.name[0]}
        </span>
      ))}
    </strong>
  );
}

function CapabilityName({ index }: { index: number }) {
  const item = capabilities[index];
  return (
    <span className="keep-together">
      <span style={{ color: item.color, fontWeight: 700 }}>{item.name[0]}</span>
      {item.name.slice(1)}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#abstract">
        Skip to content
      </a>
      <header className="hero" id="top">
        <div className="hero-inner">
          <p className="wordmark" aria-label="PAPAV">
            {capabilities.map((item) => (
              <span key={item.name} style={{ color: item.color }}>
                {item.name[0]}
              </span>
            ))}
          </p>
          <h1>
            <span>Survey on Multimodal Embodied Agents:</span>
            <span>
              A Unified Capability-centric Perspective from Computer-Use to
              Robot-Use
            </span>
          </h1>
          <p className="hero-subtitle">
            Perceive · Anticipate · Plan · Act · Verify
          </p>
          <div
            className="authors"
            id="citation"
            aria-label="Paper authors in manuscript order"
          >
            {authorRows.map((row) => (
              <div className="author-row" key={row[0]}>
                {row.map((name) => (
                  <span className="author" key={name}>
                    <a
                      href={authorHomepages[name]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {name}
                    </a>
                    {name === "Mike Zheng Shou" && <sup>†</sup>}
                  </span>
                ))}
              </div>
            ))}
          </div>
          <p className="affiliation">
            Show Lab, National University of Singapore
          </p>
          <p className="author-note">† Corresponding author</p>
          <div className="hero-actions" id="paper">
            <a
              className="pill"
              href="https://github.com/showlab/Awesome-Multimodal-Embodied-Agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="pill"
              href="https://raw.githubusercontent.com/showlab/Awesome-Multimodal-Embodied-Agent/main/assets/SURVEY_Multimodal_Embodied_Agent.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paper
            </a>
          </div>
        </div>
      </header>
      <nav className="section-nav" aria-label="Page sections">
        <a href="#abstract">Abstract</a>
        <a href="#framework">Framework</a>
        <a href="#landscape">Research landscape</a>
        <a href="#comparison">Capabilities</a>
        <a href="#benchmarks">Benchmarks</a>
        <a href="#challenges">Open challenges</a>
      </nav>
      <main>
        <section
          className="paper-section prose-column"
          id="abstract"
          aria-labelledby="abstract-title"
        >
          <h2 id="abstract-title">Abstract</h2>
          <p className="abstract-copy">
            Multimodal agents (MMAs) sustain interaction through reasoning,
            memory, tools, and feedback, most visibly as computer-use agents,
            while robotic systems (RSs) couple sensing and actuation under
            physical dynamics. We define <em>multimodal embodied agents</em>{" "}
            (MMEAs) as goal-directed systems that couple multimodal task
            reasoning with physical action and revise decisions from the
            resulting feedback. This raises a central question:{" "}
            <em>
              what changes when a multimodal agent moves from computer-use to
              robot-use?
            </em>{" "}
            We introduce <PapavName />, a unified capability-centric framework
            of five recurring functions:{" "}
            <strong>
              <CapabilityName index={0} />
            </strong>{" "}
            the current state,{" "}
            <strong>
              <CapabilityName index={1} />
            </strong>{" "}
            action effects,{" "}
            <strong>
              <CapabilityName index={2} />
            </strong>{" "}
            a feasible course,{" "}
            <strong>
              <CapabilityName index={3} />
            </strong>{" "}
            through an interface or body, and{" "}
            <strong>
              <CapabilityName index={4} />
            </strong>{" "}
            the outcome. Defined by function rather than architecture, these
            capabilities let PAPAV identify what all three share and then
            compare MMEAs with MMAs and with RSs. Five physical constraints,
            from partial observability to unverifiable outcomes, leave fewer
            choices fixed in advance and less room to reverse errors. Across{" "}
            {total} benchmarks, explicit evaluation centers on Act; only{" "}
            {explicit(1)} assess Anticipate and {explicit(4)} assess Verify,
            leaving both largely hidden behind task success. These constraints
            also frame the open challenges we identify. PAPAV therefore provides
            a common basis for designing reliable physical agents and measuring
            progress across all five capabilities rather than task success
            alone.
          </p>
        </section>

        <section
          className="paper-section wide-column"
          id="framework"
          aria-labelledby="framework-title"
        >
          <div className="section-intro">
            <h2 id="framework-title">The PAPAV framework</h2>
          </div>
          <PapavFramework />
          <div className="capability-list">
            {capabilities.map((item) => (
              <div key={item.name}>
                <h3 style={{ borderColor: item.color }}>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="paper-section wide-column"
          id="landscape"
          aria-labelledby="landscape-title"
        >
          <div className="section-intro">
            <h2 id="landscape-title">Research landscape</h2>
          </div>
          <EvolutionTree />
        </section>

        <SimilarityDifference />

        <section
          className="paper-section wide-column"
          id="benchmarks"
          aria-labelledby="benchmarks-title"
        >
          <div className="section-intro">
            <h2 id="benchmarks-title">Benchmarks & evaluation</h2>
          </div>
          <BenchmarkExplorer />
        </section>

        <section
          className="paper-section prose-column"
          id="challenges"
          aria-labelledby="challenges-title"
        >
          <h2 id="challenges-title">Open challenges</h2>
          <div className="challenge-list">
            {challenges.map(([title, question], index) => (
              <article key={title}>
                <h3>
                  <span
                    className="challenge-index"
                    style={{ backgroundColor: capabilities[index].color }}
                  >
                    OC{index + 1}.
                  </span>{" "}
                  {title}
                </h3>
                <p className="challenge-question">{question}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer>
        <a
          href="https://sites.google.com/view/showlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="assets/showlab-logo.png"
            alt="Show Lab"
            width="110"
            height="42"
          />
        </a>
        <p>Show Lab, National University of Singapore · 2026</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
