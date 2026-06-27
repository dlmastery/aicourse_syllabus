# Detailed Table of Contents — Subject 06 — Reasoning Models & Test-Time Compute

_Source: `06-reasoning-and-test-time-compute.md` · **1 academic quarter · 3 lecture-hours/week · 10 weekly lectures (~30 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference
_3-hour block · 🔧 skill: `$reasoning-eval` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its evaluation notebooks to build the GSM8K/MATH direct-vs-CoT baseline with token cost and a contamination note._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chain-of-thought |
| 00:30–01:00 | M2 | Test-time compute |
| 01:00–01:30 | M3 | Verifiable eval |
| 01:30–02:00 | M4 | Contamination |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its evaluation notebooks to build the GSM8K/MATH direct-vs-CoT baseline with token cost and a contamination note. |

### Lecture 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve
_3-hour block · 🔧 skill: `$test-time-scaler` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — extend the eval loop with self-consistency + best-of-N and plot the test-time scaling curve (accuracy vs N and tokens)._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Self-consistency |
| 00:30–01:00 | M2 | Best-of-N |
| 01:00–01:30 | M3 | Test-time scaling curve |
| 01:30–02:00 | M4 | Parallel vs sequential compute |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — extend the eval loop with self-consistency + best-of-N and plot the test-time scaling curve (accuracy vs N and tokens). |

### Lecture 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome
_3-hour block · 🔧 skill: `$verifier-suite` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build an outcome verifier + PRM and compare majority-vote / ORM / PRM selection on MATH._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Outcome reward (ORM / verifier) |
| 00:30–01:00 | M2 | Process reward (PRM) |
| 01:00–01:30 | M3 | Verifier-guided selection |
| 01:30–02:00 | M4 | Verifiable vs learned reward |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build an outcome verifier + PRM and compare majority-vote / ORM / PRM selection on MATH. |

### Lecture 4 — ReAct, Tool Use & Search: Reasoning That Acts
_3-hour block · 🔧 skill: `$reasoning-agent` · ▶ project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build a bounded ReAct + code/search agent and beat CoT-only on computation-heavy and fresh-facts questions._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ReAct |
| 00:30–01:00 | M2 | Tool-augmented computation |
| 01:00–01:30 | M3 | Deep research |
| 01:30–02:00 | M4 | Reasoning + retrieval boundary |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build a bounded ReAct + code/search agent and beat CoT-only on computation-heavy and fresh-facts questions. |

### Lecture 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch
_3-hour block · 🔧 skill: `$grpo-trainer` · ▶ project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — run its hands-on GRPO loop with a verifiable reward and co-plot reward vs held-out GSM8K/MATH accuracy._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLVR |
| 00:30–01:00 | M2 | GRPO |
| 01:00–01:30 | M3 | Why no critic |
| 01:30–02:00 | M4 | R1-Zero vs R1 |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — run its hands-on GRPO loop with a verifiable reward and co-plot reward vs held-out GSM8K/MATH accuracy. |

### Lecture 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run
_3-hour block · 🔧 skill: `$grpo-stabilizer` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — add DAPO / Dr.GRPO options to your loop and ablate against vanilla GRPO on eval-per-compute._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Length bias |
| 00:30–01:00 | M2 | Entropy collapse |
| 01:00–01:30 | M3 | DAPO |
| 01:30–02:00 | M4 | Dr.GRPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — add DAPO / Dr.GRPO options to your loop and ablate against vanilla GRPO on eval-per-compute. |

### Lecture 7 — Long-Horizon Reasoning & Self-Improving Agents
_3-hour block · 🔧 skill: `$self-improve-loop` · ▶ project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement a verify→filter→SFT self-improvement loop and track per-iteration held-out gains with a diversity check._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-horizon credit assignment |
| 00:30–01:00 | M2 | Self-improvement (STaR / ReST / rejection sampling) |
| 01:00–01:30 | M3 | Agentic RL |
| 01:30–02:00 | M4 | Honest long-horizon eval |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement a verify→filter→SFT self-improvement loop and track per-iteration held-out gains with a diversity check. |

### Lecture 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination
_3-hour block · 🔧 skill: `$reasoning-audit` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — assemble AIME / GPQA / ARC-AGI-style runners with bootstrap error bars and a GSM-Symbolic perturbation audit._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AIME / MATH |
| 00:30–01:00 | M2 | GPQA |
| 01:00–01:30 | M3 | ARC-AGI |
| 01:30–02:00 | M4 | Contamination & faithfulness |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — assemble AIME / GPQA / ARC-AGI-style runners with bootstrap error bars and a GSM-Symbolic perturbation audit. |

### Lecture 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment
_3-hour block · 🔧 skill: `$reasoning-deploy` · ▶ project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — serve reasoning with budget caps + KV-cache tricks and measure adaptive-vs-flat accuracy-per-token._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Adaptive test-time compute; CoT faithfulness |
| 00:30–01:00 | M2 | Reasoning-model serving |
| 01:00–01:30 | M3 | Effort/budget controls |
| 01:30–02:00 | M4 | Contextual drag |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — serve reasoning with budget caps + KV-cache tricks and measure adaptive-vs-flat accuracy-per-token. |

### Lecture 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math
_3-hour block · 🔧 skill: `$reasoning-evidence-packet` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — run the full baseline → verifier → GRPO → hard-eval pipeline as your reproduction-audit capstone._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — run the full baseline → verifier → GRPO → hard-eval pipeline as your reproduction-audit capstone. |

