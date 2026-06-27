# Detailed Table of Contents — Subject 05 — Fine-Tuning & Model Adaptation

_Source: `05-finetuning-and-adaptation.md` · **1 academic quarter · 3 lecture-hours/week · 10 weekly lectures (~30 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)
_3-hour block · 🔧 skill: `$adaptation-decision` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its prompt-vs-RAG-vs-fine-tune material to build the strong prompted baseline + cost model before any GPU time._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | What fine-tuning is for |
| 00:30–01:00 | M2 | The decision ladder |
| 01:00–01:30 | M3 | Catastrophic forgetting |
| 01:30–02:00 | M4 | Baseline economics |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its prompt-vs-RAG-vs-fine-tune material to build the strong prompted baseline + cost model before any GPU time. |

### Lecture 2 — Data Preparation & Formatting: The 80% That Decides the Outcome
_3-hour block · 🔧 skill: `$sft-data-prep` · ▶ project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — follow its data pipeline to format, dedup, and decontaminate your domain SFT set with a defensible dataset card._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chat template & loss masking |
| 00:30–01:00 | M2 | Decontamination |
| 01:00–01:30 | M3 | Data quality > quantity |
| 01:30–02:00 | M4 | Packing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — follow its data pipeline to format, dedup, and decontaminate your domain SFT set with a defensible dataset card. |

### Lecture 3 — PEFT I: LoRA From the Math Up
_3-hour block · 🔧 skill: `$lora-trainer` · ▶ project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run its LoRA SFT notebook on an 8B base and beat the Week-1 prompted baseline on format compliance._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | LoRA |
| 00:30–01:00 | M2 | Rank r and alpha |
| 01:00–01:30 | M3 | Why it works |
| 01:30–02:00 | M4 | Merging vs keeping separate |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run its LoRA SFT notebook on an 8B base and beat the Week-1 prompted baseline on format compliance. |

### Lecture 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU
_3-hour block · 🔧 skill: `$qlora-trainer` · ▶ project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — switch its config to 4-bit QLoRA and measure the memory / throughput / quality tradeoff vs Week-3 full-precision LoRA._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Quantization (training-time) |
| 00:30–01:00 | M2 | Double quantization & paged optimizers |
| 01:00–01:30 | M3 | Quality tax |
| 01:30–02:00 | M4 | NF4 vs other 4-bit |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — switch its config to 4-bit QLoRA and measure the memory / throughput / quality tradeoff vs Week-3 full-precision LoRA. |

### Lecture 5 — Preference Optimization I: DPO and the RLHF Lineage
_3-hour block · 🔧 skill: `$preference-tuner` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its DPO notebook on your SFT checkpoint and report length-controlled win-rate over the SFT model._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLHF (for context) |
| 00:30–01:00 | M2 | DPO |
| 01:00–01:30 | M3 | β / KL anchor |
| 01:30–02:00 | M4 | Preference data quality |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its DPO notebook on your SFT checkpoint and report length-controlled win-rate over the SFT model. |

### Lecture 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective
_3-hour block · 🔧 skill: `$preference-method-selector` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its preference-alignment notebooks to run ORPO + KTO and pick an objective by your actual data shape._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Bradley-Terry backbone |
| 00:30–01:00 | M2 | ORPO |
| 01:00–01:30 | M3 | KTO |
| 01:30–02:00 | M4 | SimPO / IPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its preference-alignment notebooks to run ORPO + KTO and pick an objective by your actual data shape. |

### Lecture 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences
_3-hour block · 🔧 skill: `$verifiable-rft` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — adapt its RLHF→GRPO walkthrough into a verifiable-reward RFT loop on the function-call task._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLHF vs RLAIF vs RFT |
| 00:30–01:00 | M2 | Verifiable reward |
| 01:00–01:30 | M3 | Distillation |
| 01:30–02:00 | M4 | RFT vs more SFT |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — adapt its RLHF→GRPO walkthrough into a verifiable-reward RFT loop on the function-call task. |

### Lecture 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)
_3-hour block · 🔧 skill: `$finetune-regression` · ▶ project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — reuse its eval pipeline to build a multi-axis target + general + safety regression matrix across your checkpoints._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Target vs general eval |
| 00:30–01:00 | M2 | Catastrophic forgetting check |
| 01:00–01:30 | M3 | Alignment tax |
| 01:30–02:00 | M4 | Regression gate |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — reuse its eval pipeline to build a multi-axis target + general + safety regression matrix across your checkpoints. |

### Lecture 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost
_3-hour block · 🔧 skill: `$adapter-serving` · ▶ project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your quantized multi-LoRA model with vLLM and load-test p95 / throughput / $-per-1k-answers._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Inference quantization |
| 00:30–01:00 | M2 | Multi-LoRA serving |
| 01:00–01:30 | M3 | Merge vs keep-separate |
| 01:30–02:00 | M4 | Cost/latency |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your quantized multi-LoRA model with vLLM and load-test p95 / throughput / $-per-1k-answers. |

### Lecture 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting
_3-hour block · 🔧 skill: `$adaptation-evidence-packet` · ▶ project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — assemble the full decide → data → LoRA/QLoRA → DPO → serve pipeline into your capstone repo._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — assemble the full decide → data → LoRA/QLoRA → DPO → serve pipeline into your capstone repo. |

