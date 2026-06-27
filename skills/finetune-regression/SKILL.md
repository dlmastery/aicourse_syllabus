---
name: finetune-regression
description: gate a fine-tune on target gain AND no-significant-regression across general capability and safety. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Finetune Regression

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** gate a fine-tune on target gain AND no-significant-regression across general capability and safety.
- **Inputs:** candidate checkpoints + target eval + a general/safety suite.
- **Required outputs:** per-axis before/after matrix, validated judge κ, flagged regressions, and a ship/no-ship call.
- **Evidence artifact:** `evidence/week08-regression/matrix.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)

## How to invoke

In a Codex-style environment: `Use $finetune-regression to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
