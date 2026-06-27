---
name: safety-serving-audit
description: audit a deployed model on three axes — long-context fidelity, safety (with over-refusal control), and serving latency/throughput. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Safety Serving Audit

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** audit a deployed model on three axes — long-context fidelity, safety (with over-refusal control), and serving latency/throughput.
- **Inputs:** a served model + probes. **Outputs:** a long-context curve, a safety/over-refusal table, a latency/throughput table. **Evidence artifact:** `evidence/week12-audit/`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 12 — Long-Context, Safety Fine-Tuning, and Serving

## How to invoke

In a Codex-style environment: `Use $safety-serving-audit to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
