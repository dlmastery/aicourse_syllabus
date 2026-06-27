# Modern AI Mastery — Updated Program (June 2026)

> A ground-up refresh of the *Elite Modern AI* graduate program, reconciled against the latest
> 2025–2026 university courses (Stanford, MIT, Princeton, Cornell, Harvard, CMU, UC Berkeley),
> industry curricula (Krish Naik, Vizuara), and the mid-2026 frontier landscape — written in the
> hands-on, harness-engineering teaching style of *Harnessing LLM Skills to Master Machine Learning*.

**Live site:** https://dlmastery.github.io/aicourse_syllabus/

Read **[`00-teaching-rubric.md`](00-teaching-rubric.md)** first, then the
**[`TABLE-OF-CONTENTS.md`](TABLE-OF-CONTENTS.md)** for the full lecture-by-lecture outline.
See **[`CHANGELOG.md`](CHANGELOG.md)** for *why this is current*. Raw research is in **[`_research/`](_research/)**.

## The 6 subjects

The program is organized as **6 subjects**, each a quarter-track at **3 lecture-hours/week**. Each subject
groups several closely related modules as **Parts** — nothing was dropped when the original 17 modules were
consolidated; related material now lives together.

| # | Subject | Parts (modules merged in) | Lectures |
|---|---------|---------------------------|----------|
| 01 | [Foundations & Deep Learning From Scratch](01-foundations-and-deep-learning.md) | Math & ML Foundations · Deep Learning & Transformers | 22 |
| 02 | [LLMs: Pretraining, RAG, Fine-Tuning & Reasoning](02-llms-rag-finetuning-reasoning.md) | Pretraining→Post-training · RAG · Fine-Tuning · Reasoning & Test-Time Compute | 43 |
| 03 | [AI Agents & AI-First Software Engineering](03-ai-agents-and-ai-first-software.md) | Agent Engineering (MCP/A2A/AgentOps) · AI-First SWE | 24 |
| 04 | [Production AI: MLOps, LLMOps, AgentOps & Efficient Serving](04-production-mlops-llmops-and-efficient-serving.md) | MLOps/LLMOps/AgentOps · Efficient AI & Serving | 24 |
| 05 | [Applied, Multimodal, Reinforcement & Frontier AI](05-applied-multimodal-rl-and-frontier-ai.md) | Domain-Specific · Multimodal & Generative · RL/Robotics · Emerging & AI-for-Science | 52 |
| 06 | [AI Safety, Alignment, Recursive Self-Improvement & Capstone](06-safety-rsi-and-capstone.md) | Safety/Alignment/Governance · Recursive Self-Improvement (ICLR 2026) · Capstone | 32 |

**Total: 197 lectures · ~590 lecture-hours.** Every lecture carries: learning goals → concept map →
a step-by-step **AI-builder lab** → a **▶ practical project** (real GitHub repo, Krish Naik prioritized) →
a **State of the Art (June 2026)** note with **hyperlinked references** (papers + repos) → graded rubric.

## What's in this repo

- **Subjects** `01`–`06` — the full syllabi (each opens with a detailed, part-grouped table of contents).
- **[`_toc/`](_toc/)** — per-subject **time-boxed** (30-minute-module) lecture plans.
- **[`TABLE-OF-CONTENTS.md`](TABLE-OF-CONTENTS.md)** — master lecture-by-lecture outline.
- **[`CHAPTER-PROJECT-MAP.md`](CHAPTER-PROJECT-MAP.md)** — every chapter → its practical project.
- **[`KRISHNAIK-PROJECTS-MAP.md`](KRISHNAIK-PROJECTS-MAP.md)** — each Krish Naik repo → the lectures it powers.
- **[`PROJECTS.md`](PROJECTS.md)** — clone-and-run repo catalog + build studios (Krish Naik, Vizuara, popular).
- **[`skills/`](skills/)** — every skill referenced in the syllabi as a proper `skills/<name>/SKILL.md`
  (YAML frontmatter + definition): the **23 book reader-skills** (`$ml-*`, from the source book) +
  **195 program harness-skills** (one per lecture's "Harness / reusable skill"). See [`skills/README.md`](skills/README.md).
- **[`00-teaching-rubric.md`](00-teaching-rubric.md)**, **[`CHANGELOG.md`](CHANGELOG.md)**, **[`_research/`](_research/)**.

## Pedagogy

Inherited from the source book: `prompt → workflow → skill → harness`; the
`concept → code → critique → reflection → rebuild` loop; evidence over vibes (every week leaves an
inspectable artifact); baselines and failure modes before fancy methods. Each subject leaves behind a set
of reusable `$skills`.

## Provenance

Built from the prior program syllabus + parallel research agents (Stanford/MIT, Princeton/Cornell/Harvard/
CMU/Berkeley, Krish Naik + Vizuara, the mid-2026 frontier landscape) and the ICLR 2026 Recursive
Self-Improvement workshop (110 papers). Generated June 2026. Re-verify frontier specifics and repo links
before each cohort.
