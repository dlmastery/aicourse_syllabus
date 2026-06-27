# Project Catalog & Build Studios — Real Repos, Mapped to Subjects

Every subject in this program is project-based. This file gives each subject **real, clone-and-run
GitHub repositories** plus **buildable project studios** (capstone-grade builds). It merges the
verified repo catalog and project ideas gathered across the research streams.

> **Honesty note.** Repos below were verified on GitHub at fetch time (June 2026). Star counts and
> contents change — **re-verify before assigning to a cohort.** Krish Naik's `krishnaik.in/projects`
> and Vizuara's site block automated fetch; the entries here are their **public GitHub repos**
> (which mirror the site). Anchor on the *technique*; treat exact repos as swappable.

Subject tags map each item to this program's subjects (`S01`–`S17`); see [`README.md`](README.md).

---

## Part A — Clone-and-run repository catalog

### A1. Build-from-scratch (first principles) → S01, S02, S03, S10, S12, S13
- `rasbt/LLMs-from-scratch` (~98k★) — build a ChatGPT-like LLM in PyTorch step by step → **S02, S03**
- `VizuaraAI/visual-ai-book` — visual guide NN→LLM→DeepSeek→RAG→agents → **S02, S03, S04, S07**
- `VizuaraAILabs/DeepSeek-From-Scratch` — MLA / MoE / MTP from scratch → **S03, S10**
- `VizuaraAILabs/nano-gpt-oss`, `VizuaraAILabs/truly-open-gpt-oss` — build & pretrain gpt-oss from scratch → **S03**
- `VizuaraAI/dna-of-a-transformer` — transformer internals → **S02**
- `VizuaraAI/Mixture_of_Experts` — MoE from scratch → **S03, S10**
- `VizuaraAILabs/Principles-of-Diffusion-Models` — diffusion from principles → **S12**
- `VizuaraAI/Transformers-for-vision-BOOK` — vision transformers → **S12**
- `VizuaraAI/nano-kimi`, `VizuaraAILabs/Tiny-Stories-Regional` — small-LM training → **S03**

### A2. Courses-with-code (structured, runnable) → all subjects
- `mlabonne/llm-course` (~80k★) — LLM roadmap + Colabs → **S03, S05, S06**
- `microsoft/generative-ai-for-beginners` (~112k★) — 21 GenAI lessons → **S03, S04, S08**
- `microsoft/ai-agents-for-beginners` (~68k★) — 12 agent lessons → **S07**
- `huggingface/agents-course` (~29k★) — HF agents course → **S07**
- `microsoft/ML-For-Beginners` (~87k★), `microsoft/AI-For-Beginners` (~48k★) — classical ML/AI → **S01**
- `HandsOnLLM/Hands-On-Large-Language-Models` (~27k★) — O'Reilly book code → **S03, S04**
- `anthropics/courses` (~22k★), `anthropics/anthropic-cookbook` (~46k★), `openai/openai-cookbook` (~74k★) → **S04–S08**

### A3. Production ML / MLOps / LLMOps → S09, S10
- `GokuMohandas/Made-With-ML` (~48k★) — develop/deploy/iterate production ML → **S09**
- `DataTalksClub/mlops-zoomcamp` (~15k★), `DataTalksClub/machine-learning-zoomcamp` (~13k★) → **S09**
- `decodingml/llm-twin-course` (~4k★) — end-to-end production LLM + RAG system → **S09, S04**
- `krishnaik06/mlproject` — canonical end-to-end ML template (CI, pipelines, deploy) → **S01, S09**
- `krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project` — end-to-end CV + DVC MLOps → **S09, S11, S12**
- `VizuaraAI/llm-inference-tutorial`, `VizuaraAI/kv-cache-token-reduction-walkthrough` — inference internals/KV-cache → **S10**
- `VizuaraAI/vizuara-5d-parallelism-workshop` (+ `-assignments`) — DP/TP/PP/CP/EP on 8 GPUs → **S10**
- `VizuaraAI/infertutor-arena-capstone` — Modal + vLLM + Qwen-VL serving → **S09, S10, S12**

### A4. RAG / agents / app collections → S04, S07
- `Shubhamsaboo/awesome-llm-apps` (~116k★) — 100+ runnable Agent & RAG apps → **S04, S07**
- `NirDiamant/RAG_Techniques` (~28k★) — advanced RAG techniques, runnable → **S04**
- `NirDiamant/GenAI_Agents` (~23k★) — 50+ agent implementations → **S07**
- `e2b-dev/awesome-ai-agents` (~29k★), `kyrolabs/awesome-langchain` (~9k★) — curated lists → **S07**
- `The-Pocket/PocketFlow` (~11k★) — 100-line LLM/agent framework (great for teaching internals) → **S07**
- `krishnaik06/RAG-Tutorials`, `krishnaik06/Updated-Langchain`, `krishnaik06/Agentic-LanggraphCrash-course` → **S04, S07**

### A5. Frameworks & reference → S07, S04, S08
- `langchain-ai/langchain` (~140k★), `run-llama/llama_index` (~50k★) → **S04, S07**
- `krishnaik06/Finetuning-LLM` — SFT / LoRA / QLoRA → **S05**
- `VizuaraAILabs/OpenClaw-RL-Tutorial`, `VizuaraAI/RL-in-Production-Bootcamp-Resources` → **S13, S06**

### A6. Robotics / embodied / world models → S13
- `VizuaraAILabs/Modern-Robot-Learning`, `VizuaraAILabs/ACT-Maniskill`, `VizuaraAI/vla-driving-simulation` → **S13**

### A7. Domain & classical project banks → S01, S11
- `ashishpatel26/500-AI-...-Projects-with-code` (~35k★) — 500 projects → **S01, S11**
- Krish Naik domain repos: `Credit-Card-Fraudlent` (fraud → **S11**), `Malaria-Detection` / `Tomato-Leaf-Disease-Prediction` (medical/ag CV → **S11, S12**), `Stock-MArket-Forecasting` / `ARIMA-And-Seasonal-ARIMA` (time series → **S11**), `Movie-Recommender-in-python` (recsys → **S11**), `Text-Summarization-NLP-Project` (NLP → **S03**), `AQI-Project` (env regression → **S11**).
- `VizuaraAI/pharma-slm` — ~350M domain small LM, full pipeline → **S05, S11**
- `VizuaraAI/modern-software-developer-bootcamp` — coding-agent / AI-SWE bootcamp → **S08**
- `VizuaraAI/paper-to-notebook` — PDF paper → runnable notebook → **S15, S17**

### A8. Roadmaps (project sources, not single builds)
- `krishnaik06/Roadmap-To-Learn-Generative-AI-In-2025`, `krishnaik06/Roadmap-To-Learn-Agentic-AI`,
  `krishnaik06/The-Grand-Complete-Data-Science-Materials`, `krishnaik06/Data-Science-Projects-For-Resumes`.

---

## Part B — Build studios (capstone-grade projects), mapped to subjects

Each studio ships an **evidence packet** (the program's discipline): a working artifact + an eval
harness + a safety/risk note. Tags show the home subject(s).

| Studio | What you build | Subjects |
|---|---|---|
| **Secure MCP agent** | An MCP tool server with auth, scopes, audit logs; an agent that consumes it | S07, S08 |
| **Agentic RAG with abstention** | Hybrid + graph + table retrieval, reranking, citations, "no-answer" path | S04, S07, S16 |
| **AI PR reviewer** | Static / security / architecture / style reviewers with a human merge gate | S08, S07 |
| **Coding-agent self-repair** | Unit-test generation + hidden tests + a **reward-hacking audit** | S08, S17 |
| **AI SRE incident bot** | RCA draft, telemetry correlation, human-approved rollback | S08, S09 |
| **Domain RAG (regulated)** | Medical/legal/finance assistant with citations, abstention, and audit trail | S11, S16 |
| **SLM local assistant** | Quantized/distilled **on-device** RAG assistant with latency/cost eval | S10, S05 |
| **Self-evolving rubric lab** | Rubric generation, judge agreement, bias / reward-hacking tests | S07, S17 |
| **Synthetic-data audit** | Real+synthetic vs real-only; artifact / model-collapse check | S05, S15 |
| **Automated research mini-agent** | Hypothesis → experiment → report → uncertainty statement | S15, S17 |
| **VLA / world-model reading lab** | Robotics policy / world-model evaluation + safety analysis | S13, S17 |

### Public-good / low-resource track (social-impact projects) → S11, S16
A first-class option for the capstone, merged in to make the program more than enterprise builds:
- **AI tutor for underserved learners** — hint-first tutoring, multilingual support, learning-gain eval.
- **Public-health / agriculture assistant** — pest/disease ID, low-bandwidth + on-device (ties to SLM studio).
- **Civic / accessibility assistant** — plain-language gov-services help with citation + escalation.
Each must include a **human-review UX** (show evidence, uncertainty, correction, and escalation paths)
and an equity/limitations note — treated as graded engineering, not an afterthought.

---

## Part C — Gap-coverage check (where the program already covers the "missing topics")

A cross-program audit flagged 14 must-have 2026 topics. Mapping to where each already lives here:

| Topic | Covered in |
|---|---|
| Agent-protocol security / prompt injection | S07 (security wk), S08, S14 |
| Tool provenance / contaminated benchmarks | S07, S17 (evidence audit) |
| Contextual drag / context quality | S06, S17 (L3, L4) |
| Self-evolving rubrics / verifiers | S07, S17 (L5) |
| Reward hacking in coding agents | S08, S17 (L5, L6) |
| RAG lifecycle / drift | S04, S09 (monitoring) |
| Table / document (PDF) retrieval (ColPali) | S04, S11 |
| Multimodal + VLA + robotics | S12, S13, S17 (L11) |
| SLM / edge / private deployment | S05, S10 |
| Machine unlearning / memory control | S14, S17 (L13) |
| AI-for-science / causal discovery | S15, S17 (L7) |
| Observability for agents | S07 (AgentOps), S09 |
| Human-review UX | **newly emphasized** — S09, S11, S16 (Part B above) |
| Public-good / low-resource AI | **newly emphasized** — S11, S16 (Part B above) |

The only items not already first-class were **human-review UX** and **public-good/low-resource AI**;
both are now added as project tracks in Part B.

---

*Merged June 2026 from the program's research streams plus two parallel project catalogs. Re-verify
repo links and frontier specifics before each cohort.*
