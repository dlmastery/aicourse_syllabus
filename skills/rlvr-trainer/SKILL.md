---
name: rlvr-trainer
description: a verifiable-reward RL harness (verifier + group sampler + GRPO/DAPO objective). **Inputs:** base model, prompt set, verifier fn, variant. **Outputs:** trained model, pass@k, length/format metrics, verifier-gaming report. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rlvr Trainer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a verifiable-reward RL harness (verifier + group sampler + GRPO/DAPO objective). **Inputs:** base model, prompt set, verifier fn, variant. **Outputs:** trained model, pass@k, length/format metrics, verifier-gaming report.
- **Evidence artifact:** `evidence/week09-rlvr/` with the variant ablation.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO

## How to invoke

In a Codex-style environment: `Use $rlvr-trainer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
