---
name: training-diagnostics
description: read a loss curve and rank the likely causes of bad training. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Training Diagnostics

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** read a loss curve and rank the likely causes of bad training.
- **Inputs:** a loss log. **Outputs:** diagnosis (LR too high/low, bug, data issue) + the cheapest next experiment.
- **Evidence artifact:** annotated stable-vs-unstable logs.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 5 — The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch

## How to invoke

In a Codex-style environment: `Use $training-diagnostics to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
