# Detailed Table of Contents — Subject 03 — Large Language Models: Pretraining → Post-Training

_Source: `03-llm-pretraining-to-posttraining.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**_

### Lecture 1 — The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run)
_3-hour block · 🔧 reusable skill: `$lifecycle-map`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Pretraining objective |
| 00:30–01:00 | M2 | The lifecycle as stages with different objectives |
| 01:00–01:30 | M3 | Compute/throughput accounting |
| 01:30–02:00 | M4 | Reproducibility at scale |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Initialize llm-lifecycle/ with configs/, data/, src/, evidence/, an accelerate config, and a seed he |

### Lecture 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID
_3-hour block · 🔧 reusable skill: `$data-funnel`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Extraction |
| 00:30–01:00 | M2 | Quality filtering |
| 01:00–01:30 | M3 | Language identification |
| 01:30–02:00 | M4 | Provenance & licensing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | curate.py using datatrove: read a small Common Crawl / FineWeb WARC sample → trafilatura extraction  |

### Lecture 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training
_3-hour block · 🔧 reusable skill: `$dedup-decontam`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Exact dedup |
| 00:30–01:00 | M2 | Near-dup (MinHash + LSH) |
| 01:00–01:30 | M3 | Decontamination |
| 01:30–02:00 | M4 | Tokenizer quality |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | dedup.py: exact hash dedup + datasketch MinHashLSH near-dup removal; report duplicate rate and size  |

### Lecture 4 — Architecture, Hyperparameters, and Scaling Laws
_3-hour block · 🔧 reusable skill: `$scaling-fit`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RoPE |
| 00:30–01:00 | M2 | RMSNorm + SwiGLU |
| 01:00–01:30 | M3 | GQA (grouped-query attention) |
| 01:30–02:00 | M4 | Scaling laws / Chinchilla |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | arch.py: a configurable modern decoder (RoPE + RMSNorm + SwiGLU + GQA); verify a forward pass + KV-c |

### Lecture 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO
_3-hour block · 🔧 reusable skill: `$distributed-profiler`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data parallel (DDP) |
| 00:30–01:00 | M2 | ZeRO / FSDP sharding |
| 01:00–01:30 | M3 | Tensor & pipeline parallel |
| 01:30–02:00 | M4 | MFU & scaling efficiency |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | train_fsdp.py: wrap the Week-4 model in FSDP2 (or DeepSpeed ZeRO-3) + activation checkpointing + bf1 |

### Lecture 6 — Mixture-of-Experts and Long-Context Pretraining
_3-hour block · 🔧 reusable skill: `$moe-router-monitor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | MoE FFN |
| 00:30–01:00 | M2 | Load-balancing loss |
| 01:00–01:30 | M3 | Capacity factor |
| 01:30–02:00 | M4 | Long context |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | moe.py: replace a dense MLP with a top-2 MoE (8 experts) + a load-balancing aux loss; verify routing |

### Lecture 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint
_3-hour block · 🔧 reusable skill: `$benchmark-runner`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Perplexity vs capability |
| 00:30–01:00 | M2 | Benchmark formats |
| 01:00–01:30 | M3 | Contamination & emergence |
| 01:30–02:00 | M4 | Reproduction discipline |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | eval_base.py: run lm-eval-harness on HellaSwag, ARC-easy, MMLU (subset), and GSM8K for your base + y |

### Lecture 8 — Supervised Fine-Tuning & Instruction Tuning
_3-hour block · 🔧 reusable skill: `$sft-recipe`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | SFT objective |
| 00:30–01:00 | M2 | Chat templating |
| 01:00–01:30 | M3 | LoRA / QLoRA |
| 01:30–02:00 | M4 | Data quality > quantity |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | sft.py using TRL SFTTrainer: chat-template a dataset, mask prompt tokens, pack sequences; run full-F |

### Lecture 9 — Reward Modeling & RLHF (PPO)
_3-hour block · 🔧 reusable skill: `$rlhf-monitor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Bradley-Terry reward model |
| 00:30–01:00 | M2 | RLHF/PPO objective |
| 01:00–01:30 | M3 | Value function / advantage |
| 01:30–02:00 | M4 | Reward hacking |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | reward_model.py: train a BT reward model on a preference dataset; report pairwise accuracy on held-o |

### Lecture 10 — Direct Preference Optimization: DPO, ORPO, KTO
_3-hour block · 🔧 reusable skill: `$preference-align-bench`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | DPO |
| 00:30–01:00 | M2 | ORPO |
| 01:00–01:30 | M3 | KTO |
| 01:30–02:00 | M4 | DPO vs RLHF |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | dpo.py, orpo.py, kto.py via TRL on the same preferences (KTO uses a binarized variant); train all th |

### Lecture 11 — RL for Reasoning: GRPO and Verifiable Rewards
_3-hour block · 🔧 reusable skill: `$verifiable-reward`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | GRPO |
| 00:30–01:00 | M2 | Verifiable reward (RLVR) |
| 01:00–01:30 | M3 | Test-time compute |
| 01:30–02:00 | M4 | Format + correctness rewards |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | grpo.py via TRL GRPOTrainer: a verifiable reward function (parse \boxed{} / final number, compare to |

### Lecture 12 — Long-Context, Safety Fine-Tuning, and Serving
_3-hour block · 🔧 reusable skill: `$safety-serving-audit`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-context extension |
| 00:30–01:00 | M2 | Safety fine-tuning |
| 01:00–01:30 | M3 | Red-teaming |
| 01:30–02:00 | M4 | Efficient serving |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | longctx.py: RoPE-scale + briefly continue-train; run a needle-in-a-haystack eval across context leng |

### Lecture 13 — Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet
_3-hour block · 🔧 reusable skill: `$lifecycle-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick a domain assistant (support, coding helper, math tutor). Assemble: a curated+decontaminated dat |

