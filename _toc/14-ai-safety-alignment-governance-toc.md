# Detailed Table of Contents — Subject 14 — AI Safety, Alignment & Governance

_Source: `14-ai-safety-alignment-governance.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — The AI Risk Landscape & How to Reason About It
_3-hour block · 🔧 skill: `$threat-modeler` · ▶ project: [`anthropics/courses`](https://github.com/anthropics/courses) — work the red-teaming/eval notebooks to build a threat model + baseline harm-rate table for the support assistant._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Risk taxonomy |
| 00:30–01:00 | M2 | Threat model |
| 01:00–01:30 | M3 | Capability vs propensity |
| 01:30–02:00 | M4 | Defense in depth |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — work the red-teaming/eval notebooks to build a threat model + baseline harm-rate table for the support assistant. |

### Lecture 2 — Where Safety Enters Modern LLM Training (RLHF, RLVR, Safety Fine-Tuning)
_3-hour block · 🔧 skill: `$alignment-tax-meter` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt a fine-tuning/classification recipe to run a refusal fine-tune and quantify the alignment tax + over-refusal rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Pipeline & injection points |
| 00:30–01:00 | M2 | Safety fine-tuning |
| 01:00–01:30 | M3 | Alignment tax |
| 01:30–02:00 | M4 | Over-refusal |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt a fine-tuning/classification recipe to run a refusal fine-tune and quantify the alignment tax + over-refusal rate. |

### Lecture 3 — Adversarial Robustness I: Jailbreaks
_3-hour block · 🔧 skill: `$jailbreak-suite` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the cookbook’s prompting/eval patterns to run manual + automated jailbreaks and report calibrated ASR with transcripts._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Jailbreak |
| 00:30–01:00 | M2 | GCG (greedy coordinate gradient) |
| 01:00–01:30 | M3 | PAIR / TAP |
| 01:30–02:00 | M4 | Transferability |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the cookbook’s prompting/eval patterns to run manual + automated jailbreaks and report calibrated ASR with transcripts. |

### Lecture 4 — Adversarial Robustness II: Prompt Injection, Agent Hijacking & Weight Protection
_3-hour block · 🔧 skill: `$injection-redteam` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — extend a tool-use recipe to demo indirect injection + a spotlighting/quarantine defense, measuring residual ASR._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prompt injection |
| 00:30–01:00 | M2 | Indirect injection |
| 01:00–01:30 | M3 | Confused deputy / exfiltration |
| 01:30–02:00 | M4 | Defenses |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — extend a tool-use recipe to demo indirect injection + a spotlighting/quarantine defense, measuring residual ASR. |

### Lecture 5 — Model Specs, Content Policies & Moderation (Llama Guard, NeMo Guardrails)
_3-hour block · 🔧 skill: `$policy-enforcer` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the moderation/classification recipe to enforce a model spec with a guard model and tune the operating point on a labeled set._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Model spec |
| 00:30–01:00 | M2 | Guard model |
| 01:00–01:30 | M3 | Programmable guardrails |
| 01:30–02:00 | M4 | Operating point |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the moderation/classification recipe to enforce a model spec with a guard model and tune the operating point on a labeled set. |

### Lecture 6 — Scheming, Deception & Situational Awareness
_3-hour block · 🔧 skill: `$deception-probe` · ▶ project: [`anthropics/courses`](https://github.com/anthropics/courses) — reproduce an alignment-faking-style matched-pair probe and interpret the observed-vs-unobserved behavior delta honestly._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Deceptive alignment / scheming |
| 00:30–01:00 | M2 | Situational awareness |
| 01:00–01:30 | M3 | Sandbagging / eval-gaming |
| 01:30–02:00 | M4 | Detection |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — reproduce an alignment-faking-style matched-pair probe and interpret the observed-vs-unobserved behavior delta honestly. |

### Lecture 7 — Mechanistic Interpretability I: Sparse Autoencoders (SAEs)
_3-hour block · 🔧 skill: `$sae-feature-lab` · ▶ project: [`anthropics/courses`](https://github.com/anthropics/courses) — follow the interpretability material to train a small SAE on a layer and validate ≥10 features with an ablation/steering test._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Superposition |
| 00:30–01:00 | M2 | Sparse autoencoder |
| 01:00–01:30 | M3 | Feature validation |
| 01:30–02:00 | M4 | Limits |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — follow the interpretability material to train a small SAE on a layer and validate ≥10 features with an ablation/steering test. |

### Lecture 8 — Mechanistic Interpretability II: CoT Monitoring & Faithfulness
_3-hour block · 🔧 skill: `$cot-monitor` · ▶ project: [`anthropics/courses`](https://github.com/anthropics/courses) — build a CoT monitor + faithfulness test and report monitor PR plus the model’s CoT unfaithfulness rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | CoT monitoring |
| 00:30–01:00 | M2 | Faithfulness |
| 01:00–01:30 | M3 | Optimization pressure erodes monitorability |
| 01:30–02:00 | M4 | Monitor design |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — build a CoT monitor + faithfulness test and report monitor PR plus the model’s CoT unfaithfulness rate. |

### Lecture 9 — Scalable Oversight, Constitutional AI & RLAIF
_3-hour block · 🔧 skill: `$constitutional-aligner` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — implement a critique→revise constitutional loop, build an AI-preference set, and compare RLAIF vs human-data harm-rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scalable oversight |
| 00:30–01:00 | M2 | Constitutional AI |
| 01:00–01:30 | M3 | RLAIF vs RLHF |
| 01:30–02:00 | M4 | Debate / weak-to-strong |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — implement a critique→revise constitutional loop, build an AI-preference set, and compare RLAIF vs human-data harm-rate. |

### Lecture 10 — Dangerous Capabilities, Responsible Scaling & Takeoff
_3-hour block · 🔧 skill: `$capability-eval` · ▶ project: [`anthropics/courses`](https://github.com/anthropics/courses) — run a strongly-elicited dangerous-capability proxy eval with Inspect AI and draft an RSP go/no-go memo tying a number to a safeguard._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Dangerous-capability eval; Responsible scaling policy |
| 00:30–01:00 | M2 | Recursive self-improvement / takeoff |
| 01:00–01:30 | M3 | Elicitation |
| 01:30–02:00 | M4 | Machine unlearning (capability removal) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — run a strongly-elicited dangerous-capability proxy eval with Inspect AI and draft an RSP go/no-go memo tying a number to a safeguard. |

### Lecture 11 — Agent Safety: Autonomy, Permissions & Multi-Agent Risk
_3-hour block · 🔧 skill: `$agent-safety-harness` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — wrap a tool-using agent recipe with an authorization layer + human-gate and measure unsafe-action rate vs utility on AgentDojo/τ-bench._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Autonomy risk |
| 00:30–01:00 | M2 | Authorization layer |
| 01:00–01:30 | M3 | Containment / sandboxing |
| 01:30–02:00 | M4 | Multi-agent risk |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — wrap a tool-using agent recipe with an authorization layer + human-gate and measure unsafe-action rate vs utility on AgentDojo/τ-bench. |

### Lecture 12 — Governance: EU AI Act, NIST AI RMF, OWASP & Standards
_3-hour block · 🔧 skill: `$compliance-mapper` · ▶ project: [`anthropics/courses`](https://github.com/anthropics/courses) — map the support assistant to EU-AI-Act/NIST-RMF obligations and produce an auditable compliance dossier._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | EU AI Act risk tiers |
| 00:30–01:00 | M2 | NIST AI RMF |
| 01:00–01:30 | M3 | OWASP LLM Top-10 / ISO 42001 |
| 01:30–02:00 | M4 | Documentation artifacts |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/courses`](https://github.com/anthropics/courses) — map the support assistant to EU-AI-Act/NIST-RMF obligations and produce an auditable compliance dossier. |

### Lecture 13 — Capstone: A Full Red-Team → Mitigation → Eval Cycle
_3-hour block · 🔧 skill: `$safety-case-builder` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — assemble a full red-team→mitigation→eval safety case for one system with an artifact-linked safety card._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — assemble a full red-team→mitigation→eval safety case for one system with an artifact-linked safety card. |

