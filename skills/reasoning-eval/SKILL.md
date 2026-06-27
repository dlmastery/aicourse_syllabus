---
name: reasoning-eval
description: measure reasoning accuracy with objective verification, token cost, and contamination awareness — the baseline everything is judged against. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Reasoning Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** measure reasoning accuracy with objective verification, token cost, and contamination awareness — the baseline everything is judged against.
- **Inputs:** a model + a math/reasoning set + an answer verifier.
- **Required outputs:** accuracy, tokens/problem, extraction-validation note, and a contamination flag.
- **Minimal workflow:** prompt → generate → extract → verify → tabulate → flag contamination.
- **Evidence artifact:** `evidence/week01-baseline.md`.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference

## How to invoke

In a Codex-style environment: `Use $reasoning-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
