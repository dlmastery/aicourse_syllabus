# Modern AI Mastery — Updated Program (June 2026)

> A ground-up refresh of the *Elite Modern AI* graduate program (`Syllabus.pdf`, 2025 baseline),
> reconciled against the latest 2025–2026 university courses (Stanford, MIT, Princeton, Cornell,
> Harvard, CMU, UC Berkeley), industry curricula (Krish Naik, Vizuara), and the mid-2026 frontier
> tool/model landscape — all rewritten in the hands-on, harness-engineering teaching style of
> *Harnessing LLM Skills to Master Machine Learning*.

Read **[`00-teaching-rubric.md`](00-teaching-rubric.md)** first — it defines the per-week chapter
template every course below follows. Raw research notes live in **[`_research/`](_research/)**.

📑 **[`TABLE-OF-CONTENTS.md`](TABLE-OF-CONTENTS.md)** — the very detailed, lecture-by-lecture topic outline for
all 17 subjects. **The course has many subjects; each subject = one academic quarter at 3 lecture-hours/week**
(~10–14 weekly lectures, ~30–42 contact hours). Per-subject detail lives in **[`_toc/`](_toc/)**.

## What changed vs. the 2025 syllabus

The old program had 6 courses heavily weighted toward coding-agents and "emerging topics" survey
content. The 2026 landscape forced four structural moves:

1. **Foundations made first-principles.** Added a Vizuara-style *build-from-scratch* spine
   (math → neural net → transformer → LLM, no high-level libraries early) so depth precedes tooling.
2. **The LLM lifecycle is now its own track.** Pretraining, post-training (SFT/RLHF/DPO),
   **reasoning & test-time compute** (o1/R1/GRPO-style), RAG, and fine-tuning are split into focused
   subjects — reflecting Stanford CS336/CS329A, CMU 11-711, Princeton COS597R.
3. **Agents elevated from "patterns" to a full track** with **MCP + A2A protocols, AgentOps, and
   agent evaluation** — reflecting Berkeley's Agentic-AI series and Krish Naik's AgentOps cohort.
   (MCP is still absent from university syllabi — we teach it as an original module.)
4. **Safety/alignment/interpretability promoted to a standalone subject** (Harvard CS2881R model):
   SAEs, CoT monitoring, responsible scaling, evals/red-teaming.

## The 17 subjects

| # | Subject | Altitude | Maps from old → enriched by |
|---|---------|----------|------------------------------|
| 01 | [Math & ML Foundations From Scratch](01-foundations-math-ml-from-scratch.md) | Learner | new · Vizuara math+NN, CS229, CS181 |
| 02 | [Deep Learning & the Transformer, Built by Hand](02-deep-learning-transformers-from-scratch.md) | Learner→Builder | new · 6.7960, CS224N, Vizuara Build-NN/LLM, Cornell 4782 |
| 03 | [Large Language Models: Pretraining → Post-Training](03-llm-pretraining-to-posttraining.md) | Builder→Engineer | Emerging Topics · CS336, CS224N, COS597R, 11-711 |
| 04 | [Retrieval-Augmented Generation & Knowledge Systems](04-rag-and-knowledge-systems.md) | Builder→Engineer | new · CMU RAG, Krish Naik RAG, Vizuara RAG |
| 05 | [Fine-Tuning & Model Adaptation](05-finetuning-and-adaptation.md) | Engineer | new · LoRA/QLoRA/DPO, Vizuara FT, CS329H |
| 06 | [Reasoning Models & Test-Time Compute](06-reasoning-and-test-time-compute.md) | Engineer→Specialist | new · CS329A, CS224N Reasoning, Berkeley Adv LLM Agents |
| 07 | [AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)](07-ai-agent-engineering.md) | Engineer | Agent Engineering · Berkeley Agentic AI, CS329A, Krish Naik AgentOps |
| 08 | [AI-First Software Development](08-ai-first-software-development.md) | Builder→Engineer | AI-First SWE · 2026 coding-agent stack |
| 09 | [Full-Stack AI: MLOps, LLMOps & AgentOps to Production](09-mlops-llmops-agentops-production.md) | Engineer | Full-Stack AI · Harvard AC215, Krish Naik LLMOps |
| 10 | [Efficient AI: Quantization, Serving & Systems](10-efficient-ai-systems-serving.md) | Engineer→Specialist | new · MIT 6.5940, CMU 11-868, CS336 systems |
| 11 | [Domain-Specific Applied AI](11-domain-specific-applied-ai.md) | Builder→Engineer | Domain-Specific AI · refreshed verticals |
| 12 | [Multimodal & Generative AI](12-multimodal-and-generative-ai.md) | Builder→Engineer | Generative AI Systems · CS25, 11-777, diffusion/VLM |
| 13 | [Reinforcement Learning, Robotics & Embodied AI](13-rl-robotics-embodied-ai.md) | Engineer→Specialist | new · CS234, Vizuara RL/VLA, 6.S890 |
| 14 | [AI Safety, Alignment & Governance](14-ai-safety-alignment-governance.md) | Specialist | new · Harvard CS2881R, interpretability |
| 15 | [Emerging Topics & AI for Science](15-emerging-topics-ai-for-science.md) | Specialist | Emerging Topics · 6.S191 AI4Science, world models, neuro-symbolic |
| 16 | [Capstone: Build & Ship an Agentic AI System](16-capstone-agentic-system.md) | All | Agentic Capstone · end-to-end |
| 17 | [Recursive Self-Improvement: Self-Evolving Agents, Models & Systems](17-recursive-self-improvement.md) | Specialist | new · ICLR 2026 RSI Workshop (110 papers) |

## How to use this program

- **Beginners** run 01 → 02 → 03 → 04 → 07, building one artifact per week.
- **Builders/engineers** can enter at 03 and branch into 04–10 by need.
- **Specialists** focus 06, 10, 13, 14, 15 plus the capstone.
- Every subject ends by leaving behind **reusable skills** and an **evidence packet**, not just notes —
  the core bet of the source book.

## Provenance

Built from: `Downloads/Syllabus.pdf.pdf` (2025 baseline) + parallel research agents (see `_research/`)
covering Stanford/MIT, Princeton/Cornell/Harvard/CMU/Berkeley, Krish Naik + Vizuara, and the mid-2026
frontier landscape. Generated June 2026.
