---
name: cot-monitor
description: reusable reasoning-trace monitor + faithfulness tester for agents. **Inputs:** agent traces, monitor model, perturbation suite. **Outputs:** flag precision/recall, faithfulness rate, escalation log. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Cot Monitor

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** reusable reasoning-trace monitor + faithfulness tester for agents. **Inputs:** agent traces, monitor model, perturbation suite. **Outputs:** flag precision/recall, faithfulness rate, escalation log.
- **Evidence artifact:** `evidence/week08-cot/`.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 8 — Mechanistic Interpretability II: CoT Monitoring & Faithfulness

## How to invoke

In a Codex-style environment: `Use $cot-monitor to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
