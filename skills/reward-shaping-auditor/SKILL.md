---
name: reward-shaping-auditor
description: detect reward-shaping exploits in continuous control. **Inputs:** reward components, trajectory rollouts. **Outputs:** per-term contribution, exploit flags (e.g., reward high but task failed), and a shaping fix. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Reward Shaping Auditor

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** detect reward-shaping exploits in continuous control. **Inputs:** reward components, trajectory rollouts. **Outputs:** per-term contribution, exploit flags (e.g., reward high but task failed), and a shaping fix.
- **Evidence artifact:** `evidence/week12-locomotion/` with the reward-term breakdown.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 12 — Humanoid Locomotion & Multi-Agent RL

## How to invoke

In a Codex-style environment: `Use $reward-shaping-auditor to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
