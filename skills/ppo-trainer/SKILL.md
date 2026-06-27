---
name: ppo-trainer
description: a reusable, instrumented PPO trainer (the backbone for Weeks 8–10 RLHF/GRPO). Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Ppo Trainer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a reusable, instrumented PPO trainer (the backbone for Weeks 8–10 RLHF/GRPO).
- **Inputs:** env/rollout fn, policy+value nets, PPO config. **Outputs:** trained policy, KL/clip-fraction/entropy logs, and a "healthy training" checklist result.
- **Evidence artifact:** `evidence/week05-ppo/` with the KL/clip-fraction trace (the canonical PPO health signals).

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL

## How to invoke

In a Codex-style environment: `Use $ppo-trainer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
