# Detailed Table of Contents — Subject 05 — Fine-Tuning & Model Adaptation

_Source: `05-finetuning-and-adaptation.md` · **1 academic quarter · 3 lecture-hours/week · 10 weekly lectures (~30 contact hours)**_

### Lecture 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)
_3-hour block · 🔧 reusable skill: `$adaptation-decision`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | What fine-tuning is for |
| 00:30–01:00 | M2 | The decision ladder |
| 01:00–01:30 | M3 | Catastrophic forgetting |
| 01:30–02:00 | M4 | Baseline economics |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | baseline_prompt.py: best-effort prompted SupportGenie on a frontier model (few-shot + format instruc |

### Lecture 2 — Data Preparation & Formatting: The 80% That Decides the Outcome
_3-hour block · 🔧 reusable skill: `$sft-data-prep`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chat template & loss masking |
| 00:30–01:00 | M2 | Decontamination |
| 01:00–01:30 | M3 | Data quality > quantity |
| 01:30–02:00 | M4 | Packing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | prep.py: format AcmeCorp tickets into chat-template SFT JSONL; dedup (MinHash), decontaminate agains |

### Lecture 3 — PEFT I: LoRA From the Math Up
_3-hour block · 🔧 reusable skill: `$lora-trainer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | LoRA |
| 00:30–01:00 | M2 | Rank r and alpha |
| 01:00–01:30 | M3 | Why it works |
| 01:30–02:00 | M4 | Merging vs keeping separate |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | train_lora.py: LoRA SFT of an 8B base on the small-clean set; log loss to W&B; eval on the frozen se |

### Lecture 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU
_3-hour block · 🔧 reusable skill: `$qlora-trainer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Quantization (training-time) |
| 00:30–01:00 | M2 | Double quantization & paged optimizers |
| 01:00–01:30 | M3 | Quality tax |
| 01:30–02:00 | M4 | NF4 vs other 4-bit |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | train_qlora.py: QLoRA SFT of the same (or a larger) base on the small-clean set; compare memory, thr |

### Lecture 5 — Preference Optimization I: DPO and the RLHF Lineage
_3-hour block · 🔧 reusable skill: `$preference-tuner`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLHF (for context) |
| 00:30–01:00 | M2 | DPO |
| 01:00–01:30 | M3 | β / KL anchor |
| 01:30–02:00 | M4 | Preference data quality |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | prep_prefs.py: build chosen/rejected support pairs (from edits, human ranking, or stronger-model vs  |

### Lecture 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective
_3-hour block · 🔧 reusable skill: `$preference-method-selector`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Bradley-Terry backbone |
| 00:30–01:00 | M2 | ORPO |
| 01:00–01:30 | M3 | KTO |
| 01:30–02:00 | M4 | SimPO / IPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | compare_prefs.py: run ORPO and KTO (and re-use Week 5 DPO) on matched data where possible; tabulate  |

### Lecture 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences
_3-hour block · 🔧 reusable skill: `$verifiable-rft`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLHF vs RLAIF vs RFT |
| 00:30–01:00 | M2 | Verifiable reward |
| 01:00–01:30 | M3 | Distillation |
| 01:30–02:00 | M4 | RFT vs more SFT |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | rft_format.py: a minimal policy-gradient/GRPO-style loop (TRL) on the function-call case with reward |

### Lecture 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)
_3-hour block · 🔧 reusable skill: `$finetune-regression`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Target vs general eval |
| 00:30–01:00 | M2 | Catastrophic forgetting check |
| 01:00–01:30 | M3 | Alignment tax |
| 01:30–02:00 | M4 | Regression gate |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | regression_suite.py: assemble target eval + general suite (MMLU-Pro slice, GSM8K, IFEval, a refusal/ |

### Lecture 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost
_3-hour block · 🔧 reusable skill: `$adapter-serving`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Inference quantization |
| 00:30–01:00 | M2 | Multi-LoRA serving |
| 01:00–01:30 | M3 | Merge vs keep-separate |
| 01:30–02:00 | M4 | Cost/latency |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | serve_vllm.py: serve the quantized SupportGenie base + ≥2 LoRA adapters via vLLM multi-LoRA; load-te |

### Lecture 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting
_3-hour block · 🔧 reusable skill: `$adaptation-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick the target task (SupportGenie or your own: a domain classifier, a strict-format generator, a st |

