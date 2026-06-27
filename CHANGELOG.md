# Changelog & "Why This Is Current (June 2026)"

This file explains **why this syllabus is up to date as of June 2026** and **how it applies the
AI-native, hands-on teaching method** of the sample book *Harnessing LLM Skills to Master Machine
Learning*. It also records what changed versus the 2025 baseline program.

---

## 1. The teaching method (AI-native, from the sample book)

Every subject in this program is written in the sample book's method, not as a normal topic list.
Concretely, that means each weekly lecture carries **all** of these:

- **The harness-engineering ladder** — `prompt → workflow → skill → harness`. Students don't just
  use AI; they build reusable **skills** (e.g., `$rag-eval`, `$grpo-trainer`, `$rsi-safety-case`)
  and harnesses. Every subject ends by leaving behind a named skill set, not just notes.
- **The learning loop** — `concept → code → critique → reflection → rebuild`. Each lecture pairs a
  concept with a build, a critique, and a reflection ("Skill sink-in": predict → run → revise).
- **Evidence over vibes** — every week produces an inspectable **evidence artifact** (a memo, a
  metric table, a run log, an eval sheet), and every result must come with metric + comparison +
  limitation. Baselines and failure modes are taught *before* the fancy method.
- **The micro-template for every equation** — Formula → Symbols → Shapes → Plain English → Tiny
  example → Code mapping → Common mistake (so there is no "symbol panic").
- **Graded as engineering** — each lecture has a rubric table; reliability, evaluation, and safety
  are graded, not optional.

This is the "new-generation, hands-on" format requested: project-based, first-principles-before-
orchestration, evaluation-disciplined, and safety-as-engineering. See
[`00-teaching-rubric.md`](00-teaching-rubric.md) for the full codified template.

## 2. Why it is current to June 2026 (the frontier facts baked in)

The program was reconciled against the **mid-2026 frontier landscape** (gathered via live web
research; see [`_research/`](_research/)). Concretely, it teaches — by name — the things that did
**not** exist or were not standard in 2024/2025 syllabi:

- **Models:** Claude Opus 4.8 / Fable 5, GPT-5.5 (router), Gemini 3.1 Pro, plus open-weight MoE
  (DeepSeek V4, Qwen 3.5, Llama 4) — with **1M-token context, sparse MoE, and tunable "thinking
  effort"** treated as default assumptions.
- **Agents:** **MCP (Model Context Protocol) — now donated to the Linux Foundation** — taught from
  scratch (still absent from most university syllabi), plus **A2A**, and the 2026 agent-SDK wave
  (LangGraph, OpenAI Agents SDK, Claude Agent SDK, Google ADK, Microsoft Agent Framework).
- **Reasoning:** **RLVR** (RL with verifiable rewards), verifier models, test-time compute scaling,
  and the **GRPO / DeepSeek-R1** recipe (+ DAPO, Dr.GRPO) — replacing the old "CoT prompting" framing.
- **RAG:** agentic RAG, **GraphRAG**, **ColBERT/ColPali late-interaction**, rerankers — RAG as a
  control loop, not retrieve-then-read.
- **Efficiency/serving:** **FP8 KV-cache**, **FlashAttention-4**, speculative decoding, vLLM/SGLang,
  MoE serving.
- **Safety/governance:** mechanistic interpretability + **sparse autoencoders (SAEs)**, CoT
  monitoring, responsible scaling, and the **EU AI Act** dated facts — Aug 2, 2026 enforcement **and
  the Digital Omnibus deferral of Annex III high-risk obligations to Dec 2, 2027** (dates that
  literally changed in 2026 and break older syllabi).
- **A brand-new Subject 17 — Recursive Self-Improvement**, built directly on the **ICLR 2026
  Workshop on AI with Recursive Self-Improvement** (Rio, Apr 26 2026; all 110 accepted papers
  mapped into 13 lectures).

## 3. What changed vs. the 2025 program

The 2025 baseline was 6 courses weighted toward coding-agents and an "emerging topics" survey.
This refresh restructures it into **17 quarter-length subjects**:

1. **Foundations made first-principles** — added a Vizuara-style *build-from-scratch* spine
   (math → neural net → transformer → LLM, no high-level libraries early).
2. **The LLM lifecycle became its own track** — pretraining, post-training (SFT/RLHF/DPO),
   reasoning/test-time compute, RAG, and fine-tuning split into focused subjects.
3. **Agents elevated from "patterns" to a full track** with MCP + A2A + AgentOps + agent evaluation.
4. **Safety/alignment/interpretability promoted to a standalone subject** (Harvard CS2881R model).
5. **Efficiency & serving** pulled into their own systems subject (MIT 6.5940, CMU 11-868, CS336).

Old → new mapping is in [`README.md`](README.md).

## 4. Sources & provenance (honest)

- **University courses (2025–2026), fetched live:** Stanford (CS224N W26, CS336, CS25 V6, CS329A/H,
  CS234), MIT (6.S191 2026, 6.7960, 6.5940), Princeton (COS597R, COS484), Cornell (CS4782/4740),
  Harvard (CS2881R AI-Safety, AC215 MLOps), CMU (11-711, 11-777, 11-868), UC Berkeley (Agentic-AI /
  Adv-LLM-Agents). Notes in [`_research/`](_research/).
- **Industry curricula:** Krish Naik (79 production projects, AgentOps) and Vizuara (from-scratch
  series). See [`PROJECTS.md`](PROJECTS.md) for the real, clone-and-run repos.
- **Frontier landscape:** live web research (mid-2026) — `_research/frontier-tools-full.md`.
- **Teaching method:** the sample book *Harnessing LLM Skills to Master Machine Learning*.

## 5. Honest limitations (re-verify before teaching)

- Frontier model/tool **version numbers churn every ~6–8 weeks** — anchor on the named *techniques*
  and *protocols* (which are stable); treat specific model versions as swappable examples.
- The MCP spec, serving/eval tooling, and the **EU AI Act** implementation timeline should be
  re-checked against primary sources before each cohort.
- Repo links in `PROJECTS.md` were verified at fetch time (June 2026) but **stars and contents
  change** — re-verify before assigning.

---

## Release history

### v1.0 — 2026-06-27
- Initial publication: 17-subject program, each subject = one academic quarter (3 lecture-hrs/week).
- Full per-week syllabi with datasets, code stubs, graded rubrics, assessment weights, and named papers.
- Detailed, **time-boxed** (30-minute-module) Tables of Contents per subject (`_toc/`) + master TOC.
- Added **Subject 17 — Recursive Self-Improvement** from the ICLR 2026 RSI Workshop (110 papers).
- Merged a **real, verified GitHub project catalog** ([`PROJECTS.md`](PROJECTS.md)) — Krish Naik,
  Vizuara, and popular practical repos — mapped to each subject.
- Published as an mdBook site via GitHub Pages.
