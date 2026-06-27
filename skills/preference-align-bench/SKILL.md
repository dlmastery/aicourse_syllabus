---
name: preference-align-bench
description: fairly compare preference-optimization methods on fixed data/compute with a judge + a benchmark. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Preference Align Bench

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** fairly compare preference-optimization methods on fixed data/compute with a judge + a benchmark.
- **Inputs:** SFT model + preferences + method list. **Outputs:** win-rate table, KL drift, cost, recommendation. **Evidence artifact:** `evidence/week10-align/`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 10 — Direct Preference Optimization: DPO, ORPO, KTO

## How to invoke

In a Codex-style environment: `Use $preference-align-bench to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
