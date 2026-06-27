# Detailed Table of Contents — Subject 06 — Reasoning Models & Test-Time Compute

_Source: `06-reasoning-and-test-time-compute.md` · **1 academic quarter · 3 lecture-hours/week · 10 weekly lectures (~30 contact hours)**_

### Lecture 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference
_3-hour block · 🔧 reusable skill: `$reasoning-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chain-of-thought |
| 00:30–01:00 | M2 | Test-time compute |
| 01:00–01:30 | M3 | Verifiable eval |
| 01:30–02:00 | M4 | Contamination |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | eval_math.py: GSM8K + a 500-problem MATH subset; direct-answer vs CoT prompting; robust answer extra |

### Lecture 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve
_3-hour block · 🔧 reusable skill: `$test-time-scaler`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Self-consistency |
| 00:30–01:00 | M2 | Best-of-N |
| 01:00–01:30 | M3 | Test-time scaling curve |
| 01:30–02:00 | M4 | Parallel vs sequential compute |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | self_consistency.py: sample N∈{1,2,4,8,16,32} chains, majority-vote; best_of_n.py: score with a simp |

### Lecture 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome
_3-hour block · 🔧 reusable skill: `$verifier-suite`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Outcome reward (ORM / verifier) |
| 00:30–01:00 | M2 | Process reward (PRM) |
| 01:00–01:30 | M3 | Verifier-guided selection |
| 01:30–02:00 | M4 | Verifiable vs learned reward |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | verifier.py: a robust math outcome verifier; prm.py: use an off-the-shelf PRM (e.g., a Math-Shepherd |

### Lecture 4 — ReAct, Tool Use & Search: Reasoning That Acts
_3-hour block · 🔧 reusable skill: `$reasoning-agent`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ReAct |
| 00:30–01:00 | M2 | Tool-augmented computation |
| 01:00–01:30 | M3 | Deep research |
| 01:30–02:00 | M4 | Reasoning + retrieval boundary |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | react_agent.py (LangGraph/Agents SDK): Thought/Action/Observation loop with a code tool and a search |

### Lecture 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch
_3-hour block · 🔧 reusable skill: `$grpo-trainer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLVR |
| 00:30–01:00 | M2 | GRPO |
| 01:00–01:30 | M3 | Why no critic |
| 01:30–02:00 | M4 | R1-Zero vs R1 |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | train_grpo.py: GRPO on an 8B base/SFT checkpoint with outcome_reward (+ a light format reward); vLLM |

### Lecture 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run
_3-hour block · 🔧 reusable skill: `$grpo-stabilizer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Length bias |
| 00:30–01:00 | M2 | Entropy collapse |
| 01:00–01:30 | M3 | DAPO |
| 01:30–02:00 | M4 | Dr.GRPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | train_grpo_v2.py: add DAPO/Dr.GRPO options to the Week-5 loop; run an ablation (vanilla GRPO vs +Dr. |

### Lecture 7 — Long-Horizon Reasoning & Self-Improving Agents
_3-hour block · 🔧 reusable skill: `$self-improve-loop`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-horizon credit assignment |
| 00:30–01:00 | M2 | Self-improvement (STaR / ReST / rejection sampling) |
| 01:00–01:30 | M3 | Agentic RL |
| 01:30–02:00 | M4 | Honest long-horizon eval |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | self_improve.py: rejection-sampling / STaR loop on MATH (sample → verify → SFT on correct) for ≥2 it |

### Lecture 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination
_3-hour block · 🔧 reusable skill: `$reasoning-audit`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AIME / MATH |
| 00:30–01:00 | M2 | GPQA |
| 01:00–01:30 | M3 | ARC-AGI |
| 01:30–02:00 | M4 | Contamination & faithfulness |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | eval_hard.py: runners for AIME (with bootstrap error bars), a GPQA-Diamond subset, and an ARC-AGI-st |

### Lecture 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment
_3-hour block · 🔧 reusable skill: `$reasoning-deploy`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Adaptive test-time compute |
| 00:30–01:00 | M2 | CoT faithfulness |
| 01:00–01:30 | M3 | Reasoning-model serving |
| 01:30–02:00 | M4 | Effort/budget controls |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | adaptive_compute.py: a difficulty router that sets thinking budget / sample count per query; compare |

### Lecture 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math
_3-hour block · 🔧 reusable skill: `$reasoning-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick the task: math (GSM8K/MATH, recommended) or another verifiable-reward domain (code with unit te |

