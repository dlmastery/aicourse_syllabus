---
name: reasoning-audit
description: evaluate reasoning on hard, contamination-resistant sets with error bars, compute, and a memorization/faithfulness audit. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Reasoning Audit

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate reasoning on hard, contamination-resistant sets with error bars, compute, and a memorization/faithfulness audit.
- **Inputs:** a model + hard benchmarks + a perturbation generator.
- **Required outputs:** scorecard with error bars and compute, perturbation-drop result, and a lucky-guess/faithfulness inspection.
- **Evidence artifact:** `evidence/week08-hard-eval/report.md`.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination

## How to invoke

In a Codex-style environment: `Use $reasoning-audit to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
