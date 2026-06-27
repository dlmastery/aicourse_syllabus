# Detailed Table of Contents — Subject 03 — Large Language Models: Pretraining → Post-Training

_Source: `03-llm-pretraining-to-posttraining.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run)
_3-hour block · 🔧 skill: `$lifecycle-map` · ▶ project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — stand up a tiny gpt-oss pretraining run and annotate where each later week plugs into the lifecycle._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Pretraining objective |
| 00:30–01:00 | M2 | The lifecycle as stages with different objectives |
| 01:00–01:30 | M3 | Compute/throughput accounting |
| 01:30–02:00 | M4 | Reproducibility at scale |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — stand up a tiny gpt-oss pretraining run and annotate where each later week plugs into the lifecycle. |

### Lecture 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID
_3-hour block · 🔧 skill: `$data-funnel` · ▶ project: [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its data-prep stage (extraction/filtering) and emit a retention funnel with sampled drops._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Extraction |
| 00:30–01:00 | M2 | Quality filtering |
| 01:00–01:30 | M3 | Language identification |
| 01:30–02:00 | M4 | Provenance & licensing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its data-prep stage (extraction/filtering) and emit a retention funnel with sampled drops. |

### Lecture 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training
_3-hour block · 🔧 skill: `$dedup-decontam` · ▶ project: [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its tokenizer-training stage, then layer in MinHash dedup + n-gram decontamination and measure the duplicate rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Exact dedup |
| 00:30–01:00 | M2 | Near-dup (MinHash + LSH) |
| 01:00–01:30 | M3 | Decontamination |
| 01:30–02:00 | M4 | Tokenizer quality |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its tokenizer-training stage, then layer in MinHash dedup + n-gram decontamination and measure the duplicate rate. |

### Lecture 4 — Architecture, Hyperparameters, and Scaling Laws
_3-hour block · 🔧 skill: `$scaling-fit` · ▶ project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — build the modern decoder (RoPE/RMSNorm/SwiGLU/MoE) and fit a small scaling law across sizes._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RoPE |
| 00:30–01:00 | M2 | RMSNorm + SwiGLU |
| 01:00–01:30 | M3 | GQA (grouped-query attention) |
| 01:30–02:00 | M4 | Scaling laws / Chinchilla |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — build the modern decoder (RoPE/RMSNorm/SwiGLU/MoE) and fit a small scaling law across sizes. |

### Lecture 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO
_3-hour block · 🔧 skill: `$distributed-profiler` · ▶ project: [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/FSDP across GPUs and measure scaling efficiency + MFU._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data parallel (DDP) |
| 00:30–01:00 | M2 | ZeRO / FSDP sharding |
| 01:00–01:30 | M3 | Tensor & pipeline parallel |
| 01:30–02:00 | M4 | MFU & scaling efficiency |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/FSDP across GPUs and measure scaling efficiency + MFU. |

### Lecture 6 — Mixture-of-Experts and Long-Context Pretraining
_3-hour block · 🔧 skill: `$moe-router-monitor` · ▶ project: [`VizuaraAI/Mixture_of_Experts`](https://github.com/VizuaraAI/Mixture_of_Experts) — implement a top-k MoE FFN + load-balancing loss and track expert utilization._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | MoE FFN |
| 00:30–01:00 | M2 | Load-balancing loss |
| 01:00–01:30 | M3 | Capacity factor |
| 01:30–02:00 | M4 | Long context |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/Mixture_of_Experts`](https://github.com/VizuaraAI/Mixture_of_Experts) — implement a top-k MoE FFN + load-balancing loss and track expert utilization. |

### Lecture 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint
_3-hour block · 🔧 skill: `$benchmark-runner` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its evaluation notebooks (lm-eval-harness) on your base model and reproduce a published number with CIs._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Perplexity vs capability |
| 00:30–01:00 | M2 | Benchmark formats |
| 01:00–01:30 | M3 | Contamination & emergence |
| 01:30–02:00 | M4 | Reproduction discipline |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its evaluation notebooks (lm-eval-harness) on your base model and reproduce a published number with CIs. |

### Lecture 8 — Supervised Fine-Tuning & Instruction Tuning
_3-hour block · 🔧 skill: `$sft-recipe` · ▶ project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run SFT + LoRA/QLoRA on an instruction set with proper chat templating and loss masking._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | SFT objective |
| 00:30–01:00 | M2 | Chat templating |
| 01:00–01:30 | M3 | LoRA / QLoRA |
| 01:30–02:00 | M4 | Data quality > quantity |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run SFT + LoRA/QLoRA on an instruction set with proper chat templating and loss masking. |

### Lecture 9 — Reward Modeling & RLHF (PPO)
_3-hour block · 🔧 skill: `$rlhf-monitor` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — train a Bradley-Terry reward model and run PPO RLHF from its post-training notebooks, watching reward/KL._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Bradley-Terry reward model |
| 00:30–01:00 | M2 | RLHF/PPO objective |
| 01:00–01:30 | M3 | Value function / advantage |
| 01:30–02:00 | M4 | Reward hacking |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — train a Bradley-Terry reward model and run PPO RLHF from its post-training notebooks, watching reward/KL. |

### Lecture 10 — Direct Preference Optimization: DPO, ORPO, KTO
_3-hour block · 🔧 skill: `$preference-align-bench` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — align your SFT model with DPO (and contrast ORPO/KTO) using its preference-optimization notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | DPO |
| 00:30–01:00 | M2 | ORPO |
| 01:00–01:30 | M3 | KTO |
| 01:30–02:00 | M4 | DPO vs RLHF |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — align your SFT model with DPO (and contrast ORPO/KTO) using its preference-optimization notebook. |

### Lecture 11 — RL for Reasoning: GRPO and Verifiable Rewards
_3-hour block · 🔧 skill: `$verifiable-reward` · ▶ project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement GRPO with verifiable rewards on a math task, adding format + correctness rewards._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | GRPO |
| 00:30–01:00 | M2 | Verifiable reward (RLVR) |
| 01:00–01:30 | M3 | Test-time compute |
| 01:30–02:00 | M4 | Format + correctness rewards |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement GRPO with verifiable rewards on a math task, adding format + correctness rewards. |

### Lecture 12 — Long-Context, Safety Fine-Tuning, and Serving
_3-hour block · 🔧 skill: `$safety-serving-audit` · ▶ project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your model with vLLM + KV-cache, measure latency, and add input/output guardrails._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-context extension |
| 00:30–01:00 | M2 | Safety fine-tuning |
| 01:00–01:30 | M3 | Red-teaming |
| 01:30–02:00 | M4 | Efficient serving |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your model with vLLM + KV-cache, measure latency, and add input/output guardrails. |

### Lecture 13 — Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet
_3-hour block · 🔧 skill: `$lifecycle-evidence-packet` · ▶ project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — use its full ~350M domain-SLM pipeline as the capstone template for your pretrain → post-train evidence packet._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — use its full ~350M domain-SLM pipeline as the capstone template for your pretrain → post-train evidence packet. |

