---
name: value-debugger
description: diagnose value-based divergence. **Inputs:** Q-value logs, loss, return. **Outputs:** which deadly-triad symptom is firing (exploding Q, overestimation, replay staleness) + cheapest fix. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Value Debugger

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** diagnose value-based divergence. **Inputs:** Q-value logs, loss, return. **Outputs:** which deadly-triad symptom is firing (exploding Q, overestimation, replay staleness) + cheapest fix.
- **Evidence artifact:** an annotated diverging-vs-stable Q-value plot.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow

## How to invoke

In a Codex-style environment: `Use $value-debugger to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
