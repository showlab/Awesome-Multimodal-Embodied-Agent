# Contributing

Thanks for helping keep this list useful. We welcome relevant papers and official technical posts,
title or link corrections, better categorization, and dead-link fixes.

This repository follows the survey's capability-centric scope. PAPAV compares how multimodal agents,
robotic systems, and multimodal embodied agents realize the same recurring task loop: **Perceive**
constructs current-state evidence, **Anticipate** models action-conditioned futures, **Plan** selects a
feasible course, **Act** realizes an intervention, and **Verify** judges the outcome. It is a functional
view, not a requirement for a particular architecture, model family, task, or embodiment.

There are two ways to contribute.

**1. Open an issue (easiest).** Use the
[Add a paper](https://github.com/showlab/Awesome-Multimodal-Embodied-Agent/issues/new/choose) template.
Maintainers will review the suggestion and help format and add it if it fits the collection.
Author, venue, and release-date information in an issue supports review and ordering; it does not
appear in the README entry.

**2. Send a pull request.** Edit `README.md` directly and follow the format below.

---

## Entry format

Each entry is a compact two-line block. Copy this and swap every value for the real one. Entries
do not include author, affiliation, venue, date, PAPAV stage labels, or topic tags.

```markdown
- **Paper Title Goes Here**  
  [![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat-square)](#b-multimodal-embodied-agents) [![Paper](https://img.shields.io/badge/-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/0000.00000) [![Code](https://img.shields.io/github/stars/org/repo?style=flat-square&logo=github&label=Code&color=B7CADB)](https://github.com/org/repo) [![Project](https://img.shields.io/badge/-Project-9AC7E8?logo=googlechrome&logoColor=white&style=flat-square)](https://org.github.io/project)
```

An entry from the README using the required badge style:

```markdown
- **π₀: A Vision-Language-Action Flow Model for General Robot Control**  
  [![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat-square)](#b-multimodal-embodied-agents) [![Paper](https://img.shields.io/badge/-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.24164) [![Code](https://img.shields.io/github/stars/Physical-Intelligence/openpi?style=flat-square&logo=github&label=Code&color=B7CADB)](https://github.com/Physical-Intelligence/openpi) [![Project](https://img.shields.io/badge/-Project-9AC7E8?logo=googlechrome&logoColor=white&style=flat-square)](https://www.pi.website/blog/pi0)
```

Line by line:

| Line | Contents |
| :-- | :-- |
| 1 | `- ` + **bold title**, then **two trailing spaces** |
| 2 | two spaces of indent + section badge + resource badge link group |

What to put in each slot:

| Slot | Replace with | Notes |
| :-- | :-- | :-- |
| `Paper Title Goes Here` | The title as printed | Lead with the short name if it has one: `π₀: A Vision-Language-Action Flow Model...` |
| `MMEA` section badge | The badge for the selected section | Use `Survey`, `MMEA`, `MMA`, `RS`, or `Bench` from the table below; it always comes first |
| `https://arxiv.org/abs/0000.00000` | Primary source: arXiv **abs**, DOI / publisher page, official research / benchmark page, or official technical post | **Required.** Prefer a paper when available. Use the source badges below; link the abstract or landing page, not a direct PDF |
| `https://github.com/org/repo` | Official code repo | Use the dynamic `Code` badge shown above so its right side displays the live star count; delete the whole badge if there is no official repository |
| `https://org.github.io/project` | Project page | Delete the whole `Project` badge if there is none |

### Badge reference

Our Shields.io badge examples follow the
[GitHub Badge Collection](https://github.com/pudding0503/github-badge-collection).
Use `style=flat-square` for new or updated badges. The labels, colors, and anchors below follow the
README; existing category badges in the README may still use `flat`.
Copy the Markdown, preserving the label, color, icon, and style. Replace each resource URL and
both `org/repo` values in the Code badge.

**Section badges.** Use exactly one, matching the entry's top-level section. Benchmark entries always
use `Bench`, including those under MMEA, MMA, and RS. The copied anchors are relative to `README.md`;
the previews below link to that file explicitly.

| Section | Preview | Markdown to copy |
| :-- | :-- | :-- |
| A. Related Surveys | [![Survey](https://img.shields.io/badge/-Survey-F29A8F?style=flat-square)](./README.md#a-related-surveys) | `[![Survey](https://img.shields.io/badge/-Survey-F29A8F?style=flat-square)](#a-related-surveys)` |
| B. Multimodal Embodied Agents | [![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat-square)](./README.md#b-multimodal-embodied-agents) | `[![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat-square)](#b-multimodal-embodied-agents)` |
| C. Multimodal Agents | [![MMA](https://img.shields.io/badge/-MMA-A9D6F5?style=flat-square)](./README.md#c-multimodal-agents) | `[![MMA](https://img.shields.io/badge/-MMA-A9D6F5?style=flat-square)](#c-multimodal-agents)` |
| D. Robotic Systems | [![RS](https://img.shields.io/badge/-RS-F6C58D?style=flat-square)](./README.md#d-robotic-systems) | `[![RS](https://img.shields.io/badge/-RS-F6C58D?style=flat-square)](#d-robotic-systems)` |
| E. Benchmarks | [![Bench](https://img.shields.io/badge/-Bench-B9A3E3?style=flat-square)](./README.md#e-benchmarks) | `[![Bench](https://img.shields.io/badge/-Bench-B9A3E3?style=flat-square)](#e-benchmarks)` |

**Source and resource badges.** Put `Paper` or `Blog` immediately after the section badge.
A paper may include both its arXiv and publisher links, in that order, using the two `Paper` variants
below, as in the CoFineLLM entry. Then add `Code`, the Hugging Face benchmark badge when applicable,
and `Project`. Omit unavailable resources.
The Hugging Face badge below reproduces the benchmark resource badge used by GAIA in the README.

| Use | Preview | Markdown to copy |
| :-- | :-- | :-- |
| arXiv abstract | ![Paper](https://img.shields.io/badge/-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white) | `[![Paper](https://img.shields.io/badge/-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/0000.00000)` |
| DOI, publisher, or official research / benchmark page | ![Paper](https://img.shields.io/badge/-Paper-7FAFD4?style=flat-square) | `[![Paper](https://img.shields.io/badge/-Paper-7FAFD4?style=flat-square)](https://example.org/REPLACE_WITH_PRIMARY_SOURCE)` |
| Official technical post | ![Blog](https://img.shields.io/badge/-Blog-FF4FA3?style=flat-square) | `[![Blog](https://img.shields.io/badge/-Blog-FF4FA3?style=flat-square)](https://example.org/REPLACE_WITH_OFFICIAL_POST)` |
| Official code repository with live star count | ![Code](https://img.shields.io/github/stars/Physical-Intelligence/openpi?style=flat-square&logo=github&label=Code&color=B7CADB) | `[![Code](https://img.shields.io/github/stars/org/repo?style=flat-square&logo=github&label=Code&color=B7CADB)](https://github.com/org/repo)` |
| Benchmark resource on Hugging Face | ![Hugging Face](https://img.shields.io/badge/Hugging_Face-Benchmark-FFD21E?style=flat-square&logo=huggingface&logoColor=black) | `[![Hugging Face](https://img.shields.io/badge/Hugging_Face-Benchmark-FFD21E?style=flat-square&logo=huggingface&logoColor=black)](https://huggingface.co/REPLACE_WITH_BENCHMARK)` |
| Official project page | ![Project](https://img.shields.io/badge/-Project-9AC7E8?logo=googlechrome&logoColor=white&style=flat-square) | `[![Project](https://img.shields.io/badge/-Project-9AC7E8?logo=googlechrome&logoColor=white&style=flat-square)](https://org.github.io/project)` |

The Code preview uses `Physical-Intelligence/openpi` as a working example. Its Markdown template
requires the owner and repository of the submitted work.

Prefer a paper as the primary source. If no paper is available, an official research or benchmark
page may use the light-blue `Paper` badge, as in the current README. Use `Blog` for an official
technical post. These sources must provide enough methodological or evaluation detail to assess
the contribution; promotional announcements are not sufficient.

**Never leave a template value in a real entry.** Before opening a PR:

```bash
grep -nE "Paper Title Goes Here|0000[.]00000|REPLACE_WITH_|github[.]com/org/repo|org[.]github[.]io/project|github/stars/org/repo" README.md
```

The command should return no matches in `README.md`.

The two trailing spaces on line 1 produce the line break between the title and badges.

## Collection scope and placement

1. **One section per paper.** If a paper fits two sections, put it in the one matching its main
   contribution and system boundary. Do not duplicate entries — cross-reference in the PR description
   instead.
2. **Newest first.** Order entries within the relevant subsection by the date of the first public
   release, newest first. Insert older works at their chronological position. Later revisions do not
   change an entry's position. Include the date in the issue or PR description; do not add it to the
   README entry.
3. **Section semantics:**
   - **A. Related Surveys (`Survey`)** — surveys covering digital multimodal agents, robotic systems,
     multimodal embodied agents, unified digital-physical frameworks, or gaps in agent evaluation.
   - **B. Multimodal Embodied Agents (`MMEA`)** — general multimodal task reasoning closed around
     physical execution. The system should support physical state change, maintain a task goal or belief
     across interventions, invoke body-specific execution through semantic commands or skills, and feed
     physical evidence back into later task decisions. Physical interaction may occur on a real robot
     or through an embodied agent in simulation. Multimodal input alone is not sufficient.
   - **C. Multimodal Agents (`MMA`)** — goal-directed agents that repeatedly observe and change a
     primarily digital environment, then use feedback in later decisions. Typical actions include GUI
     operations, API or tool calls, code execution, and language acts.
   - **D. Robotic Systems (`RS`)** — systems that sense and act through a physical body, including
     state estimation, mapping, task and motion planning, control, learned policies, robot datasets, and
     enabling methods whose main contribution is robotic rather than task-level multimodal agency.
   - **E. Benchmarks (`Bench`)** — benchmarks with well-defined tasks or interaction environments, a
     publicly identifiable evaluation protocol, at least one quantitative metric, and tasks or metrics
     related to one or more PAPAV capabilities. Classify by the primary evaluation target: MMEA, MMA,
     or RS; multimodal input alone does not make a robotics benchmark an MMEA benchmark.
4. **Update Contents** if you add or rename a section.
5. **News is for milestones.** Add a News line only for a verified project milestone or a substantial
   collection update. Routine additions and corrections do not need a News entry.

B–D include both complete systems and supporting methods. A paper does not need to implement all five
PAPAV capabilities. For a supporting method, explain its role in the target system in the issue or PR
description. Place methods that support general multimodal task reasoning and closed-loop physical
interaction in B, digital agent methods in C, and methods focused on robot perception, control, or
learning in D. A VLA or world-model label alone does not determine placement.

### Benchmark subsections

Within E, first select the primary evaluation target (MMEA, MMA, or RS), then the relevant subsection:

- **MMEA and RS:** use `Sim` for evaluation in simulation, `Real` for evaluation on physical robots,
  and `Hybrid` for protocols that combine or explicitly connect simulated and real-world evaluation.
  Classify the benchmark protocol itself; additional experiments in a paper do not determine its class.
- **MMA:** use `Understanding` for perception, comprehension, or reasoning assessments; `Interaction`
  for agents taking actions and using environment feedback; and `Generation` for generated content,
  artifacts, or predicted scenes. Choose the primary evaluation objective when tasks overlap.

Benchmarks of individual capabilities are eligible when their relevance to PAPAV is explained in the
issue or PR description. Inclusion does not imply evaluation of a complete agent loop. All benchmark
entries use the `Bench` badge, including entries in the MMEA, MMA, and RS subsections.

For benchmarks, consolidate multiple papers describing the same release and use the most complete
primary source. Treat a successor release as a separate entry only when it introduces substantively new
tasks, environments, datasets, or evaluation protocols.

## Checklist before opening a PR

- [ ] Entry follows the two-line format, including the two trailing spaces after the title.
- [ ] The correct section badge appears first in the badge group.
- [ ] Entry contains no author, affiliation, venue, date, PAPAV stage label, or topic tag.
- [ ] No template values remain; the placeholder check above returns no matches.
- [ ] Paper is not already listed (search the title in `README.md`).
- [ ] The Paper or Blog link is a primary source, and any Code, Hugging Face, or Project link is official.
- [ ] All links resolve; Code points to the repository root so its live star count remains valid.
- [ ] Placed in exactly one section or subsection, ordered by first public release date.
- [ ] Release date and placement rationale are included in the issue or PR description.
- [ ] For benchmarks: tasks, protocol, metric, PAPAV relevance, and subsection are identified.
- [ ] Contents updated if sections changed.

## Style

- Keep prose lines wrapped at ~100 characters. Entry lines may run long; do not wrap them.
- Use plain ASCII punctuation in entries so the list stays greppable.
- No promotional language. The list is descriptive.
