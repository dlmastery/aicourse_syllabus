---
name: offline-data-auditor
description: assess whether a logged dataset can support offline RL. **Inputs:** trajectory dataset. **Outputs:** state/action coverage, return distribution, behavior-policy entropy, and an imitation-vs-offline-RL recommendation. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Offline Data Auditor

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** assess whether a logged dataset can support offline RL. **Inputs:** trajectory dataset. **Outputs:** state/action coverage, return distribution, behavior-policy entropy, and an imitation-vs-offline-RL recommendation.
- **Evidence artifact:** `evidence/week06-data-audit.md`.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 6 — Offline RL & Imitation Learning

## How to invoke

In a Codex-style environment: `Use $offline-data-auditor to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
