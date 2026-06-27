# Detailed Table of Contents — AI Safety, Alignment, Recursive Self-Improvement & Capstone

_`06-safety-rsi-and-capstone.md` · **1 quarter-track · 3 lecture-hrs/week · 32 lectures across 3 parts (~96 contact hrs)**. Every lecture has a ▶ practical project + State-of-the-Art with links._

## Part A — AI Safety, Alignment & Governance

### Week 1 — The AI Risk Landscape & How to Reason About It
_3-hour block · 🔧 `$threat-modeler` · ▶ [`anthropics/courses`](https://github.com/anthropics/courses) — work the red-teaming/eval notebooks to build a threat model + baseline harm-rate table for the support assistant._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Risk taxonomy |
| 00:30–01:00 | M2 | Threat model |
| 01:00–01:30 | M3 | Capability vs propensity |
| 01:30–02:00 | M4 | Defense in depth |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — work the red-teaming/eval notebooks to build a threat model + baseline harm-rate table for the support assistant. |

### Week 2 — Where Safety Enters Modern LLM Training (RLHF, RLVR, Safety Fine-Tuning)
_3-hour block · 🔧 `$alignment-tax-meter` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt a fine-tuning/classification recipe to run a refusal fine-tune and quantify the alignment tax + over-refusal rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Pipeline & injection points |
| 00:30–01:00 | M2 | Safety fine-tuning |
| 01:00–01:30 | M3 | Alignment tax |
| 01:30–02:00 | M4 | Over-refusal |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt a fine-tuning/classification recipe to run a refusal fine-tune and quantify the alignment tax + over-refusal rate. |

### Week 3 — Adversarial Robustness I: Jailbreaks
_3-hour block · 🔧 `$jailbreak-suite` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the cookbook’s prompting/eval patterns to run manual + automated jailbreaks and report calibrated ASR with transcripts._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Jailbreak |
| 00:30–01:00 | M2 | GCG (greedy coordinate gradient) |
| 01:00–01:30 | M3 | PAIR / TAP |
| 01:30–02:00 | M4 | Transferability |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the cookbook’s prompting/eval patterns to run manual + automated jailbreaks and report calibrated ASR with transcripts. |

### Week 4 — Adversarial Robustness II: Prompt Injection, Agent Hijacking & Weight Protection
_3-hour block · 🔧 `$injection-redteam` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — extend a tool-use recipe to demo indirect injection + a spotlighting/quarantine defense, measuring residual ASR._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prompt injection |
| 00:30–01:00 | M2 | Indirect injection |
| 01:00–01:30 | M3 | Confused deputy / exfiltration |
| 01:30–02:00 | M4 | Defenses |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — extend a tool-use recipe to demo indirect injection + a spotlighting/quarantine defense, measuring residual ASR. |

### Week 5 — Model Specs, Content Policies & Moderation (Llama Guard, NeMo Guardrails)
_3-hour block · 🔧 `$policy-enforcer` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the moderation/classification recipe to enforce a model spec with a guard model and tune the operating point on a labeled set._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Model spec |
| 00:30–01:00 | M2 | Guard model |
| 01:00–01:30 | M3 | Programmable guardrails |
| 01:30–02:00 | M4 | Operating point |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the moderation/classification recipe to enforce a model spec with a guard model and tune the operating point on a labeled set. |

### Week 6 — Scheming, Deception & Situational Awareness
_3-hour block · 🔧 `$deception-probe` · ▶ [`anthropics/courses`](https://github.com/anthropics/courses) — reproduce an alignment-faking-style matched-pair probe and interpret the observed-vs-unobserved behavior delta honestly._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Deceptive alignment / scheming |
| 00:30–01:00 | M2 | Situational awareness |
| 01:00–01:30 | M3 | Sandbagging / eval-gaming |
| 01:30–02:00 | M4 | Detection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — reproduce an alignment-faking-style matched-pair probe and interpret the observed-vs-unobserved behavior delta honestly. |

### Week 7 — Mechanistic Interpretability I: Sparse Autoencoders (SAEs)
_3-hour block · 🔧 `$sae-feature-lab` · ▶ [`anthropics/courses`](https://github.com/anthropics/courses) — follow the interpretability material to train a small SAE on a layer and validate ≥10 features with an ablation/steering test._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Superposition |
| 00:30–01:00 | M2 | Sparse autoencoder |
| 01:00–01:30 | M3 | Feature validation |
| 01:30–02:00 | M4 | Limits |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — follow the interpretability material to train a small SAE on a layer and validate ≥10 features with an ablation/steering test. |

### Week 8 — Mechanistic Interpretability II: CoT Monitoring & Faithfulness
_3-hour block · 🔧 `$cot-monitor` · ▶ [`anthropics/courses`](https://github.com/anthropics/courses) — build a CoT monitor + faithfulness test and report monitor PR plus the model’s CoT unfaithfulness rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | CoT monitoring |
| 00:30–01:00 | M2 | Faithfulness |
| 01:00–01:30 | M3 | Optimization pressure erodes monitorability |
| 01:30–02:00 | M4 | Monitor design |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — build a CoT monitor + faithfulness test and report monitor PR plus the model’s CoT unfaithfulness rate. |

### Week 9 — Scalable Oversight, Constitutional AI & RLAIF
_3-hour block · 🔧 `$constitutional-aligner` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — implement a critique→revise constitutional loop, build an AI-preference set, and compare RLAIF vs human-data harm-rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scalable oversight |
| 00:30–01:00 | M2 | Constitutional AI |
| 01:00–01:30 | M3 | RLAIF vs RLHF |
| 01:30–02:00 | M4 | Debate / weak-to-strong |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — implement a critique→revise constitutional loop, build an AI-preference set, and compare RLAIF vs human-data harm-rate. |

### Week 10 — Dangerous Capabilities, Responsible Scaling & Takeoff
_3-hour block · 🔧 `$capability-eval` · ▶ [`anthropics/courses`](https://github.com/anthropics/courses) — run a strongly-elicited dangerous-capability proxy eval with Inspect AI and draft an RSP go/no-go memo tying a number to a safeguard._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Dangerous-capability eval; Responsible scaling policy |
| 00:30–01:00 | M2 | Recursive self-improvement / takeoff |
| 01:00–01:30 | M3 | Elicitation |
| 01:30–02:00 | M4 | Machine unlearning (capability removal) |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — run a strongly-elicited dangerous-capability proxy eval with Inspect AI and draft an RSP go/no-go memo tying a number to a safeguard. |

### Week 11 — Agent Safety: Autonomy, Permissions & Multi-Agent Risk
_3-hour block · 🔧 `$agent-safety-harness` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — wrap a tool-using agent recipe with an authorization layer + human-gate and measure unsafe-action rate vs utility on AgentDojo/τ-bench._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Autonomy risk |
| 00:30–01:00 | M2 | Authorization layer |
| 01:00–01:30 | M3 | Containment / sandboxing |
| 01:30–02:00 | M4 | Multi-agent risk |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — wrap a tool-using agent recipe with an authorization layer + human-gate and measure unsafe-action rate vs utility on AgentDojo/τ-bench. |

### Week 12 — Governance: EU AI Act, NIST AI RMF, OWASP & Standards
_3-hour block · 🔧 `$compliance-mapper` · ▶ [`anthropics/courses`](https://github.com/anthropics/courses) — map the support assistant to EU-AI-Act/NIST-RMF obligations and produce an auditable compliance dossier._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | EU AI Act risk tiers |
| 00:30–01:00 | M2 | NIST AI RMF |
| 01:00–01:30 | M3 | OWASP LLM Top-10 / ISO 42001 |
| 01:30–02:00 | M4 | Documentation artifacts |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — map the support assistant to EU-AI-Act/NIST-RMF obligations and produce an auditable compliance dossier. |

### Week 13 — Capstone: A Full Red-Team → Mitigation → Eval Cycle
_3-hour block · 🔧 `$safety-case-builder` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — assemble a full red-team→mitigation→eval safety case for one system with an artifact-linked safety card._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — assemble a full red-team→mitigation→eval safety case for one system with an artifact-linked safety card. |

## Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems

### Week 1 — Foundations: The Five Lenses, Taxonomy & Theory of RSI
_3-hour block · 🔧 `$rsi-classifier` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — turn a chosen RSI-workshop paper into a runnable notebook and five-lens-classify 5 papers._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The self-improvement loop |
| 00:30–01:00 | M2 | Iterative computation as a unifying view |
| 01:00–01:30 | M3 | A task-centric theory |
| 01:30–02:00 | M4 | Interestingness / novelty |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — turn a chosen RSI-workshop paper into a runnable notebook and five-lens-classify 5 papers. |

### Week 2 — Self-Generated Data & Self-Play (and the Collapse Problem)
_3-hour block · 🔧 `$collapse-monitor` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce a self-play loop notebook showing collapse with vs without a diversity/verification filter._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Self-play loop |
| 00:30–01:00 | M2 | Model collapse |
| 01:00–01:30 | M3 | Self-play ≈ adversarial imitation |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce a self-play loop notebook showing collapse with vs without a diversity/verification filter. |

### Week 3 — Test-Time Self-Improvement & Inference-Time Scaling
_3-hour block · 🔧 `$test-time-improver` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a verify-then-self-distill test-time loop and plot held-out pass@1 vs inference compute._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Compute-as-teacher |
| 00:30–01:00 | M2 | Test-time self-distillation |
| 01:00–01:30 | M3 | Reusable test-time computation |
| 01:30–02:00 | M4 | Fast tree-search self-improvement |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a verify-then-self-distill test-time loop and plot held-out pass@1 vs inference compute. |

### Week 4 — Agentic Memory & Lifelong/Continual Learning
_3-hour block · 🔧 `$memory-evolver` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — implement a self-improving skill-memory notebook and measure forward transfer vs forgetting across a task stream._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Meta-learned memory designs |
| 00:30–01:00 | M2 | Agentic context engineering |
| 01:00–01:30 | M3 | Continual learning without forgetting |
| 01:30–02:00 | M4 | Real-time procedural learning from experience |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — implement a self-improving skill-memory notebook and measure forward transfer vs forgetting across a task stream. |

### Week 5 — Verifiers, Rewards & the Reward-Hacking Problem
_3-hour block · 🔧 `$verifier-auditor` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — train a verifier, red-team it for gaming, and harden it with execution grounding in a notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Verifiers > solvers as a bottleneck |
| 00:30–01:00 | M2 | Self-evolving, interpretable rubrics |
| 01:00–01:30 | M3 | Reward hacking in self-improving code agents |
| 01:30–02:00 | M4 | Self-improving VLM judges without human labels |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — train a verifier, red-team it for gaming, and harden it with execution grounding in a notebook. |

### Week 6 — Self-Evolving Coding Agents
_3-hour block · 🔧 `$code-harness-synth` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an ACE/AUTOHARNESS-style code-self-improvement loop on SWE-bench Verified vs a simple ReAct baseline._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Adversarial self-generated unit tests + preference optimization |
| 00:30–01:00 | M2 | Repository context files (AGENTS.md) |
| 01:00–01:30 | M3 | Sobering baseline: |
| 01:30–02:00 | M4 | Deep agentic reasoning systems |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an ACE/AUTOHARNESS-style code-self-improvement loop on SWE-bench Verified vs a simple ReAct baseline. |

### Week 7 — Automated AI Research & Scientific Discovery ("AI Scientists")
_3-hour block · 🔧 `$research-loop` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an execution-grounded propose→run→read research-loop notebook and write an honest ‘did it discover?’ verdict._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Can agents automate post-training? |
| 00:30–01:00 | M2 | Discovery limits: |
| 01:00–01:30 | M3 | Evolutionary optimization by LLMs |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an execution-grounded propose→run→read research-loop notebook and write an honest ‘did it discover?’ verdict. |

### Week 8 — Open-Ended Discovery & Evolutionary Self-Improvement
_3-hour block · 🔧 `$open-ended-evolver` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — implement a pairwise-comparison evolutionary loop (prompts/programs) and plot novelty vs quality._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Learning to evolve / relative-progress RL |
| 00:30–01:00 | M2 | Feedback Descent |
| 01:00–01:30 | M3 | Prompt optimization & translation across foundation models |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — implement a pairwise-comparison evolutionary loop (prompts/programs) and plot novelty vs quality. |

### Week 9 — Self-Improving Reasoning: Curricula at the Edge of Learnability
_3-hour block · 🔧 `$learnability-curriculum` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — add a learnability-estimating curriculum + a GRPO controller and show frontier-vs-random learning-speed in a notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Teaching models to teach themselves |
| 00:30–01:00 | M2 | Process rewards & multi-agent scaling |
| 01:00–01:30 | M3 | Shared decision pivots |
| 01:30–02:00 | M4 | GRPO-guided controllers for hyperparameter sweeps |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — add a learnability-estimating curriculum + a GRPO controller and show frontier-vs-random learning-speed in a notebook. |

### Week 10 — Tiny Recursive Models & Iterative Architectures
_3-hour block · 🔧 `$recursion-profiler` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — train a tiny looped/recursive model vs a same-compute deep transformer on an algorithmic task in a notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tiny autoregressive recursive models |
| 00:30–01:00 | M2 | Generative recursive reasoning models |
| 01:00–01:30 | M3 | Depth vs recursion |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — train a tiny looped/recursive model vs a same-compute deep transformer on an algorithmic task in a notebook. |

### Week 11 — Multimodal, World-Model & Embodied Self-Improvement
_3-hour block · 🔧 `$embodied-self-improver` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a policy↔world-model co-improvement loop in sim and track success-rate + a safety caveat note._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Self-improving world models |
| 00:30–01:00 | M2 | Self-improving VLA with data generation via residual RL |
| 01:00–01:30 | M3 | Residual off-policy RL |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a policy↔world-model co-improvement loop in sim and track success-rate + a safety caveat note. |

### Week 12 — Benchmarks & Evidence: Proving a System Actually Self-Improved
_3-hour block · 🔧 `$rsi-evidence-audit` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a frozen-held-out + leakage-audit + loop-off-ablation harness and re-score which weekly gains survive._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PostTrainBench |
| 00:30–01:00 | M2 | Verifying the verifiers |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a frozen-held-out + leakage-audit + loop-off-ablation harness and re-score which weekly gains survive. |

### Week 13 — Safety, Unlearning & Governance of Self-Improving Systems
_3-hour block · 🔧 `$rsi-safety-case` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — run a tamper/reward-hack/unlearning safety battery on your loop and write a 2-page safety case._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tamper / fine-tuning robustness |
| 00:30–01:00 | M2 | Reward hacking |
| 01:00–01:30 | M3 | Machine unlearning |
| 01:30–02:00 | M4 | Bias amplification |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — run a tamper/reward-hack/unlearning safety battery on your loop and write a 2-page safety case. |

## Part C — Capstone: Build & Ship an Agentic AI System

### Milestone 1 — Proposal & Problem Framing
_3-hour block · 🔧 `$project-charter` · ▶ [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its project-scoping/metrics structure to write the charter + `metrics.yaml` and run the feasibility spike._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its project-scoping/metrics structure to write the charter + `metrics.yaml` and run the feasibility spike. |

### Milestone 2 — Data, RAG & Prototype
_3-hour block · 🔧 `$rag-evaluator` · ▶ [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its end-to-end RAG pipeline (ingestion→hybrid retrieval→rerank) and measure recall@k + Ragas faithfulness._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its end-to-end RAG pipeline (ingestion→hybrid retrieval→rerank) and measure recall@k + Ragas faithfulness. |

### Milestone 3 — Multi-Agent System with MCP + Fine-Tuning
_3-hour block · 🔧 `$agent-orchestrator` · ▶ [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — template a multi-agent app, expose tools via MCP, and add a justified fine-tune-or-not decision record._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — template a multi-agent app, expose tools via MCP, and add a justified fine-tune-or-not decision record. |

### Milestone 4 — Evaluation Harness & Safety Review
_3-hour block · 🔧 `$eval-gate` · ▶ [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — reuse its testing/CI patterns to make evals a merge gate, then add a HarmBench/AgentDojo red-team + system card._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — reuse its testing/CI patterns to make evals a merge gate, then add a HarmBench/AgentDojo red-team + system card. |

### Milestone 5 — LLMOps/AgentOps Production Deployment
_3-hour block · 🔧 `$agentops-deployer` · ▶ [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/CI-CD path to ship the system with an eval-gated pipeline, dashboard, and rehearsed rollback._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/CI-CD path to ship the system with an eval-gated pipeline, dashboard, and rehearsed rollback. |

### Milestone 6 — Monitored Production, Final Report & Showcase
_3-hour block · 🔧 `$production-evidence-packet` · ▶ [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its monitoring/iteration guidance to run a drift-sampling window and ship one closed-loop fix with a postmortem._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its monitoring/iteration guidance to run a drift-sampling window and ship one closed-loop fix with a postmortem. |

