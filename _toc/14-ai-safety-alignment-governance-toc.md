# Detailed Table of Contents — Subject 14 — AI Safety, Alignment & Governance

_Source: `14-ai-safety-alignment-governance.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**_

### Lecture 1 — The AI Risk Landscape & How to Reason About It
_3-hour block · 🔧 reusable skill: `$threat-modeler`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Risk taxonomy |
| 00:30–01:00 | M2 | Threat model |
| 01:00–01:30 | M3 | Capability vs propensity |
| 01:30–02:00 | M4 | Defense in depth |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Write threat_model.yaml for the support assistant: assets, actors, vectors, impact, current controls |

### Lecture 2 — Where Safety Enters Modern LLM Training (RLHF, RLVR, Safety Fine-Tuning)
_3-hour block · 🔧 reusable skill: `$alignment-tax-meter`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Pipeline & injection points |
| 00:30–01:00 | M2 | Safety fine-tuning |
| 01:00–01:30 | M3 | Alignment tax |
| 01:30–02:00 | M4 | Over-refusal |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | safety_ft.py with TRL: fine-tune the small model on a refusal dataset; evaluate harm-rate (down) and |

### Lecture 3 — Adversarial Robustness I: Jailbreaks
_3-hour block · 🔧 reusable skill: `$jailbreak-suite`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Jailbreak |
| 00:30–01:00 | M2 | GCG (greedy coordinate gradient) |
| 01:00–01:30 | M3 | PAIR / TAP |
| 01:30–02:00 | M4 | Transferability |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | gcg_attack.py with **nanoGCG**: find a suffix that jailbreaks the local model on a HarmBench behavio |

### Lecture 4 — Adversarial Robustness II: Prompt Injection, Agent Hijacking & Weight Protection
_3-hour block · 🔧 reusable skill: `$injection-redteam`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prompt injection |
| 00:30–01:00 | M2 | Indirect injection |
| 01:00–01:30 | M3 | Confused deputy / exfiltration |
| 01:30–02:00 | M4 | Defenses |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | injection_demo.py: plant an instruction in a RAG doc that makes the assistant exfiltrate a secret; c |

### Lecture 5 — Model Specs, Content Policies & Moderation (Llama Guard, NeMo Guardrails)
_3-hour block · 🔧 reusable skill: `$policy-enforcer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Model spec |
| 00:30–01:00 | M2 | Guard model |
| 01:00–01:30 | M3 | Programmable guardrails |
| 01:30–02:00 | M4 | Operating point |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | model_spec.md: a testable spec for the assistant (allowed/refused/deferred behaviors + examples) |

### Lecture 6 — Scheming, Deception & Situational Awareness
_3-hour block · 🔧 reusable skill: `$deception-probe`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Deceptive alignment / scheming |
| 00:30–01:00 | M2 | Situational awareness |
| 01:00–01:30 | M3 | Sandbagging / eval-gaming |
| 01:30–02:00 | M4 | Detection |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | eval_gaming_probe.py: present the model the same task with/without explicit "this is a test" framing |

### Lecture 7 — Mechanistic Interpretability I: Sparse Autoencoders (SAEs)
_3-hour block · 🔧 reusable skill: `$sae-feature-lab`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Superposition |
| 00:30–01:00 | M2 | Sparse autoencoder |
| 01:00–01:30 | M3 | Feature validation |
| 01:30–02:00 | M4 | Limits |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | train_sae.py: hook a layer's residual stream (via TransformerLens/SAELens), collect activations, tra |

### Lecture 8 — Mechanistic Interpretability II: CoT Monitoring & Faithfulness
_3-hour block · 🔧 reusable skill: `$cot-monitor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | CoT monitoring |
| 00:30–01:00 | M2 | Faithfulness |
| 01:00–01:30 | M3 | Optimization pressure erodes monitorability |
| 01:30–02:00 | M4 | Monitor design |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | cot_monitor.py: a monitor LLM that scores each reasoning step of an agent for unsafe intent; gate th |

### Lecture 9 — Scalable Oversight, Constitutional AI & RLAIF
_3-hour block · 🔧 reusable skill: `$constitutional-aligner`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scalable oversight |
| 00:30–01:00 | M2 | Constitutional AI |
| 01:00–01:30 | M3 | RLAIF vs RLHF |
| 01:30–02:00 | M4 | Debate / weak-to-strong |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | constitutional_ai.py: a critique→revise pipeline using a written constitution on harmful prompts; bu |

### Lecture 10 — Dangerous Capabilities, Responsible Scaling & Takeoff
_3-hour block · 🔧 reusable skill: `$capability-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Dangerous-capability eval |
| 00:30–01:00 | M2 | Responsible scaling policy |
| 01:00–01:30 | M3 | Recursive self-improvement / takeoff |
| 01:30–02:00 | M4 | Elicitation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | capability_eval.py with **Inspect AI** (UK AISI): run a dangerous-capability proxy eval with strong  |

### Lecture 11 — Agent Safety: Autonomy, Permissions & Multi-Agent Risk
_3-hour block · 🔧 reusable skill: `$agent-safety-harness`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Autonomy risk |
| 00:30–01:00 | M2 | Authorization layer |
| 01:00–01:30 | M3 | Containment / sandboxing |
| 01:30–02:00 | M4 | Multi-agent risk |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | agent_authz.py: wrap the assistant's tools with a least-privilege policy + human-gate for irreversib |

### Lecture 12 — Governance: EU AI Act, NIST AI RMF, OWASP & Standards
_3-hour block · 🔧 reusable skill: `$compliance-mapper`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | EU AI Act risk tiers |
| 00:30–01:00 | M2 | NIST AI RMF |
| 01:00–01:30 | M3 | OWASP LLM Top-10 / ISO 42001 |
| 01:30–02:00 | M4 | Documentation artifacts |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | compliance_dossier/: EU AI Act tier classification + obligations checklist; NIST RMF mapping of the  |

### Lecture 13 — Capstone: A Full Red-Team → Mitigation → Eval Cycle
_3-hour block · 🔧 reusable skill: `$safety-case-builder`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick a system. Run: (1) threat model, (2) a multi-family red-team with measured ASR, (3) ≥2 mitigati |

