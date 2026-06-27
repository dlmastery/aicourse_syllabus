---
name: embodied-eval
description: standardized closed-loop evaluation for embodied policies. **Inputs:** policy, sim env, perturbation suite. **Outputs:** success-rate, robustness curve under randomization, failure-mode taxonomy. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Embodied Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** standardized closed-loop evaluation for embodied policies. **Inputs:** policy, sim env, perturbation suite. **Outputs:** success-rate, robustness curve under randomization, failure-mode taxonomy.
- **Evidence artifact:** `evidence/week11-vla/` with success-rate + robustness curves.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real

## How to invoke

In a Codex-style environment: `Use $embodied-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
