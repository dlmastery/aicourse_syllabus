---
name: capability-eval
description: run elicitation-strong capability evals and map them to scaling decisions. **Inputs:** model, capability task suite, elicitation methods. **Outputs:** capability score with CI, elicitation log, threshold/safeguard recommendation. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Capability Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** run elicitation-strong capability evals and map them to scaling decisions. **Inputs:** model, capability task suite, elicitation methods. **Outputs:** capability score with CI, elicitation log, threshold/safeguard recommendation.
- **Evidence artifact:** `evidence/week10-capability/`.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 10 — Dangerous Capabilities, Responsible Scaling & Takeoff

## How to invoke

In a Codex-style environment: `Use $capability-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
