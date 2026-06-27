---
name: rollout-eval
description: evaluate a world model's predictive fidelity over time. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rollout Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a world model's predictive fidelity over time.
- **Inputs:** a world model + real trajectories. **Required outputs:** per-step and cumulative prediction error, an error-vs-horizon curve, and a "trustworthy horizon" estimate. **Evidence artifact:** `rollout-eval.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 10 — World Models: Learning Simulators (IRIS, Genie-style)

## How to invoke

In a Codex-style environment: `Use $rollout-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
