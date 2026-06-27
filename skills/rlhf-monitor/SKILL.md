---
name: rlhf-monitor
description: monitor an RLHF run for reward/KL trajectories and reward-hacking signatures (length inflation, repetition, sycophancy). Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rlhf Monitor

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** monitor an RLHF run for reward/KL trajectories and reward-hacking signatures (length inflation, repetition, sycophancy).
- **Inputs:** a PPO run's logs + samples. **Outputs:** reward/KL plots, a hacking-signature checklist, a stop/continue call. **Evidence artifact:** `evidence/week09-rlhf/`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 9 — Reward Modeling & RLHF (PPO)

## How to invoke

In a Codex-style environment: `Use $rlhf-monitor to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
