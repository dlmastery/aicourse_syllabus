# Detailed Table of Contents — Subject 17 — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems

_Source: `17-recursive-self-improvement.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**_

### Lecture 1 — Foundations: The Five Lenses, Taxonomy & Theory of RSI
_3-hour block · 🔧 reusable skill: `$rsi-classifier`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The self-improvement loop |
| 00:30–01:00 | M2 | Iterative computation as a unifying view |
| 01:00–01:30 | M3 | A task-centric theory |
| 01:30–02:00 | M4 | Interestingness / novelty |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Stand up Agent0-Loop skeleton: generate_tasks → solve(tool-integrated) → verify → select → update, a |

### Lecture 2 — Self-Generated Data & Self-Play (and the Collapse Problem)
_3-hour block · 🔧 reusable skill: `$collapse-monitor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Self-play loop |
| 00:30–01:00 | M2 | Model collapse |
| 01:00–01:30 | M3 | Self-play ≈ adversarial imitation |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement a proposer/solver self-play loop on a small reasoning task; add a diversity/verification f |

### Lecture 3 — Test-Time Self-Improvement & Inference-Time Scaling
_3-hour block · 🔧 reusable skill: `$test-time-improver`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Compute-as-teacher |
| 00:30–01:00 | M2 | Test-time self-distillation |
| 01:00–01:30 | M3 | Reusable test-time computation |
| 01:30–02:00 | M4 | Fast tree-search self-improvement |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Add a test-time loop: sample-many → verify → self-distill the best trace into the model's context/sh |

### Lecture 4 — Agentic Memory & Lifelong/Continual Learning
_3-hour block · 🔧 reusable skill: `$memory-evolver`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Meta-learned memory designs |
| 00:30–01:00 | M2 | Agentic context engineering |
| 01:00–01:30 | M3 | Continual learning without forgetting |
| 01:30–02:00 | M4 | Real-time procedural learning from experience |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Add a memory module that writes verified solution "skills," retrieves them, and periodically self-di |

### Lecture 5 — Verifiers, Rewards & the Reward-Hacking Problem
_3-hour block · 🔧 reusable skill: `$verifier-auditor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Verifiers > solvers as a bottleneck |
| 00:30–01:00 | M2 | Self-evolving, interpretable rubrics |
| 01:00–01:30 | M3 | Reward hacking in self-improving code agents |
| 01:30–02:00 | M4 | Self-improving VLM judges without human labels |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Train a small verifier; run the loop; then *red-team* it — find inputs where the agent inflates its  |

### Lecture 6 — Self-Evolving Coding Agents
_3-hour block · 🔧 reusable skill: `$code-harness-synth`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Adversarial self-generated unit tests + preference optimization |
| 00:30–01:00 | M2 | Repository context files (AGENTS.md) |
| 01:00–01:30 | M3 | Sobering baseline: |
| 01:30–02:00 | M4 | Deep agentic reasoning systems |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Code agent loop: generate feature → synthesize tests/harness → self-improve via pass/fail preference |

### Lecture 7 — Automated AI Research & Scientific Discovery ("AI Scientists")
_3-hour block · 🔧 reusable skill: `$research-loop`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Can agents automate post-training? |
| 00:30–01:00 | M2 | Discovery limits: |
| 01:00–01:30 | M3 | Evolutionary optimization by LLMs |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | An agent that proposes + runs small training-config experiments, reads results, and iterates (execut |

### Lecture 8 — Open-Ended Discovery & Evolutionary Self-Improvement
_3-hour block · 🔧 reusable skill: `$open-ended-evolver`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Learning to evolve / relative-progress RL |
| 00:30–01:00 | M2 | Feedback Descent |
| 01:00–01:30 | M3 | Prompt optimization & translation across foundation models |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | An evolutionary loop over prompts/programs driven by pairwise "which is more interesting/better" fee |

### Lecture 9 — Self-Improving Reasoning: Curricula at the Edge of Learnability
_3-hour block · 🔧 reusable skill: `$learnability-curriculum`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Teaching models to teach themselves |
| 00:30–01:00 | M2 | Process rewards & multi-agent scaling |
| 01:00–01:30 | M3 | Shared decision pivots |
| 01:30–02:00 | M4 | GRPO-guided controllers for hyperparameter sweeps |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Add a curriculum scheduler that estimates per-task learnability and samples near the frontier; compa |

### Lecture 10 — Tiny Recursive Models & Iterative Architectures
_3-hour block · 🔧 reusable skill: `$recursion-profiler`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tiny autoregressive recursive models |
| 00:30–01:00 | M2 | Generative recursive reasoning models |
| 01:00–01:30 | M3 | Depth vs recursion |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Train a small looped/recursive model on an algorithmic task (e.g., jigsaw/sorting); compare to a sam |

### Lecture 11 — Multimodal, World-Model & Embodied Self-Improvement
_3-hour block · 🔧 reusable skill: `$embodied-self-improver`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Self-improving world models |
| 00:30–01:00 | M2 | Self-improving VLA with data generation via residual RL |
| 01:00–01:30 | M3 | Residual off-policy RL |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | In a sim environment, run a loop where the policy generates trajectories, a learned world model scor |

### Lecture 12 — Benchmarks & Evidence: Proving a System Actually Self-Improved
_3-hour block · 🔧 reusable skill: `$rsi-evidence-audit`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PostTrainBench |
| 00:30–01:00 | M2 | Verifying the verifiers |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build an evaluation harness with: a frozen held-out set, a leakage audit, an independent verifier, a |

### Lecture 13 — Safety, Unlearning & Governance of Self-Improving Systems
_3-hour block · 🔧 reusable skill: `$rsi-safety-case`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tamper / fine-tuning robustness |
| 00:30–01:00 | M2 | Reward hacking |
| 01:00–01:30 | M3 | Machine unlearning |
| 01:30–02:00 | M4 | Bias amplification |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run a safety battery on your system: attempt a tamper/jailbreak (TamperBench-style), attempt reward- |

