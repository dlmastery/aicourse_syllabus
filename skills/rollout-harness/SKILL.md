---
name: rollout-harness
description: a seeded, vectorizable environment-interaction loop reused all course. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rollout Harness

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a seeded, vectorizable environment-interaction loop reused all course.
- **Inputs:** env id, policy fn, n_episodes, seed. **Outputs:** trajectories `(s,a,r,s',done)`, return stats, and a deterministic-replay check.
- **Evidence artifact:** `evidence/week02-rollout/` with a seed-stability table (same seed → same return).

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA

## How to invoke

In a Codex-style environment: `Use $rollout-harness to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
