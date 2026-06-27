---
name: reward-hacking-redteam
description: systematically probe an RL agent/reward for exploits. **Inputs:** agent, reward fn, true-objective metric. **Outputs:** ranked exploit hypotheses, a demonstrated hack, a mitigation, and a re-eval. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Reward Hacking Redteam

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** systematically probe an RL agent/reward for exploits. **Inputs:** agent, reward fn, true-objective metric. **Outputs:** ranked exploit hypotheses, a demonstrated hack, a mitigation, and a re-eval.
- **Evidence artifact:** `evidence/week13-safety/` red-team report (carried into Subject 14).

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL

## How to invoke

In a Codex-style environment: `Use $reward-hacking-redteam to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
