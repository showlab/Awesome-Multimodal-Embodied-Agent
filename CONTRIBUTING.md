# Contributing

Help us add relevant work, correct titles or links, and improve categorization.
Submit changes through a pull request (PR). You can do this entirely on GitHub;
no terminal or local setup is needed.

## Add a paper in 5 steps

1. **Open [README.md](./README.md).** Search for the title or paper link to check
   that the work is not already listed.
2. **Click the pencil icon to edit.** If GitHub asks you to fork the repository,
   follow the prompt to create your own copy.
3. **Copy a nearby entry in the right section.** Use the section guide below.
   Replace the title and links, and place the entry by its **first public release
   date, newest first**. Later revisions do not change its position.
4. **Preview your edit.** The title should appear on one line and the badges on
   the next. Open each link to check it. Leave a blank line between entries.
5. **Save to a new branch and open a PR.** Click **Commit changes** (or
   **Propose changes**), then follow GitHub's prompt to open a pull request against
   this repository's `main` branch. Use a title such as `Add OpenETA`. In the PR
   description, give the first public release date, a source for that date, and
   one sentence explaining your section choice.

For a title or link correction, edit the existing entry and briefly explain the
fix in your PR. The paper-specific checks below apply only when adding an entry.

## Choose one section

| Main contribution | Section |
| :-- | :-- |
| A survey of agents, robotics, or their evaluation | [A. Related Surveys](./README.md#-a-related-surveys) |
| Multimodal task reasoning that directs physical actions and uses the results to decide what to do next, in simulation or on a real robot | [B. Multimodal Embodied Agents](./README.md#-b-multimodal-embodied-agents) |
| An agent that acts in a digital environment, such as a browser, desktop, or API, and uses feedback in later decisions | [C. Multimodal Agents](./README.md#-c-multimodal-agents) |
| Robot perception, mapping, planning, control, policies, datasets, or other robotics methods | [D. Robotic Systems](./README.md#-d-robotic-systems) |
| A benchmark with defined tasks, an evaluation protocol, and quantitative metrics | [E. Benchmarks](./README.md#-e-benchmarks) |

Choose by the work's main contribution. Multimodal input, a VLA label, or a
world-model label alone does not determine the section. List each work once.
If placement is unclear, explain your choice in the PR so maintainers can help.

## Copy and edit an entry

Each entry has **two lines**: a bold title, then its badges and links.
Here is a complete example for section B:

```markdown
- **ETA: A New Agentic Paradigm for Embodied Tasks**  
  [![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat-square)](#-b-multimodal-embodied-agents) [![Paper](https://img.shields.io/badge/-Paper-E58A8F?style=flat-square&logo=arxiv&logoColor=white)](https://arxiv.org/abs/2608.03924) [![Code](https://img.shields.io/github/stars/OpenMOSS/OpenETA?style=flat-square&logo=github&label=Code&color=B7CADB)](https://github.com/OpenMOSS/OpenETA) [![Project](https://img.shields.io/badge/-Project-9AC7E8?logo=googlechrome&logoColor=white&style=flat-square)](https://openmoss.ai/OpenETA/)
```

Change these parts when adding your work:

- **Title:** use the published title. Keep **two spaces after the closing `**`**
  on line 1; these make the line break. Line 2 starts with two spaces.
- **Section badge:** keep it first. Copy the matching badge from the reference below.
- **Paper:** replace the paper link. Prefer an arXiv abstract page or a publisher
  landing page, not a direct PDF. At least one primary source is required.
- **Code:** replace `OpenMOSS/OpenETA` in **both** the badge image URL and the
  repository link. Link to the official repository root to show its live star count.
  Delete the entire Code badge if no official code is available.
- **Project:** replace the project URL, or delete the entire badge if unavailable.

Keep the entry to the title and links. Put authors, affiliations, venue, release
date, and classification explanations in the PR description if needed, not in
the README entry. Do not add PAPAV stage labels, topic tags, or promotional text.
Use plain ASCII punctuation and keep each entry line unwrapped.

<details>
<summary><strong>Badge reference: other sections and resource types</strong></summary>

Copy the full Markdown badge. Keep its label, color, and icon, and use
`style=flat-square` for new or updated badges. Older entries may still use `flat`.
These section links work when pasted into `README.md`.

| Section | Badge to copy |
| :-- | :-- |
| A. Related Surveys | `[![Survey](https://img.shields.io/badge/-Survey-F29A8F?style=flat-square)](#-a-related-surveys)` |
| B. Multimodal Embodied Agents | `[![MMEA](https://img.shields.io/badge/-MMEA-A8DDA8?style=flat-square)](#-b-multimodal-embodied-agents)` |
| C. Multimodal Agents | `[![MMA](https://img.shields.io/badge/-MMA-A9D6F5?style=flat-square)](#-c-multimodal-agents)` |
| D. Robotic Systems | `[![RS](https://img.shields.io/badge/-RS-F6C58D?style=flat-square)](#-d-robotic-systems)` |
| E. Benchmarks | `[![Bench](https://img.shields.io/badge/-Bench-B9A3E3?style=flat-square)](#-e-benchmarks)` |

Use the following badges for resources not covered by the example. Replace every
`REPLACE_WITH_...` URL before submitting.

| Resource | Badge to copy |
| :-- | :-- |
| DOI, publisher, or official research / benchmark page | `[![Paper](https://img.shields.io/badge/-Paper-7FAFD4?style=flat-square)](https://example.org/REPLACE_WITH_PRIMARY_SOURCE)` |
| Official technical post | `[![Blog](https://img.shields.io/badge/-Blog-FF4FA3?style=flat-square)](https://example.org/REPLACE_WITH_OFFICIAL_POST)` |
| Official benchmark resource on Hugging Face | `[![Hugging Face](https://img.shields.io/badge/Hugging_Face-Benchmark-FFD21E?style=flat-square&logo=huggingface&logoColor=black)](https://huggingface.co/REPLACE_WITH_BENCHMARK)` |

Badge order: **section → Paper or Blog → Code → Hugging Face → Project**.
Omit unavailable resources. If both arXiv and publisher links are included, put
arXiv first. Prefer a paper when available. An official research page or technical
post must explain the method or evaluation; a promotional announcement is not enough.

</details>

<details>
<summary><strong>Scope details: supporting methods and benchmarks</strong></summary>

The collection follows PAPAV: **Perceive, Anticipate, Plan, Act, Verify**.
These describe capabilities in a task loop, not a required architecture. A work
can address one capability or a complete system.

Sections B-D accept both systems and supporting methods. Explain the supported
capability in your PR. Section B concerns multimodal task reasoning that maintains
a goal or belief across physical actions, invokes robot commands or skills, and
uses physical evidence in later decisions. Methods supporting digital agents go
in C; methods focused on robot perception, control, or learning go in D.

For a benchmark, choose its primary evaluation target (**MMEA, MMA, or RS**) and
then its subsection:

| Target | Subsection |
| :-- | :-- |
| MMEA or RS | **Sim** for simulation; **Real** for physical robots; **Hybrid** for a protocol combining or connecting both |
| MMA | **Understanding** for perception or reasoning; **Interaction** for actions with feedback; **Generation** for generated content or predicted scenes |

Classify the benchmark's protocol, not additional experiments in its paper.
Multimodal input alone does not make a robotics benchmark an MMEA benchmark.
All benchmark entries use the **Bench** badge.

In the PR, identify the benchmark's tasks, protocol, metric, PAPAV relevance, and
subsection. Single-capability benchmarks are welcome. Group papers about the same
release into one entry with the most complete primary source. Add a successor
separately only if it introduces substantively new tasks, environments, datasets,
or evaluation protocols.

</details>

## Before submitting

- [ ] The work appears once, in the right section and first-release date order.
- [ ] The entry has two lines, with two trailing spaces after the title.
- [ ] The section badge comes first; all example values have been replaced.
- [ ] Links open correctly and point to primary sources or official resources.
- [ ] The PR gives the first release date with a source and explains the placement.
- [ ] For a benchmark, the PR also describes the tasks, protocol, metric, and PAPAV relevance.

Routine additions do not need a News entry. Update Contents only if a section is
added or renamed. Keep explanatory prose concise and wrap it at about 100 characters.
