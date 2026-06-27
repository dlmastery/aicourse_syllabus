---
name: model-trust-auditor
description: measure how far into the future a learned model can be trusted. **Inputs:** model, real rollouts. **Outputs:** per-horizon reconstruction/return error and a "max safe imagination horizon.". Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Model Trust Auditor

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** measure how far into the future a learned model can be trusted. **Inputs:** model, real rollouts. **Outputs:** per-horizon reconstruction/return error and a "max safe imagination horizon."
- **Evidence artifact:** `evidence/week07-model-trust.md`.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 7 — Model-Based RL, MCTS & World Models (IRIS)

## How to invoke

In a Codex-style environment: `Use $model-trust-auditor to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
