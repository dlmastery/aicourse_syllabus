---
name: preference-tuner
description: run a preference-optimization step and prove it improves judged quality without reward-hacking (length, drift). Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Preference Tuner

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** run a preference-optimization step and prove it improves judged quality without reward-hacking (length, drift).
- **Inputs:** an SFT checkpoint + a preference dataset + the frozen eval/judge.
- **Required outputs:** win-rate vs SFT, length/verbosity deltas, `β` choice rationale, and a degeneration check.
- **Evidence artifact:** `evidence/week05-dpo/report.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 5 — Preference Optimization I: DPO and the RLHF Lineage
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO

## How to invoke

In a Codex-style environment: `Use $preference-tuner to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
