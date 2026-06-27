---
name: gradient-variance-meter
description: quantify policy-gradient variance and the effect of variance-reduction tricks. **Inputs:** logp, returns/advantages. **Outputs:** gradient-norm variance over a batch + a recommended next reduction (baseline → GAE → normalization). Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Gradient Variance Meter

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** quantify policy-gradient variance and the effect of variance-reduction tricks. **Inputs:** logp, returns/advantages. **Outputs:** gradient-norm variance over a batch + a recommended next reduction (baseline → GAE → normalization).
- **Evidence artifact:** `evidence/week04-variance.md`.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C

## How to invoke

In a Codex-style environment: `Use $gradient-variance-meter to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
