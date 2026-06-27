---
name: regularization-ablation
description: quantify each regularizer's effect on the train–test gap with everything else fixed. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Regularization Ablation

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** quantify each regularizer's effect on the train–test gap with everything else fixed.
- **Inputs:** a model + a set of regularizers to toggle. **Outputs:** an ablation table (train acc, test
  acc, gap) + a recommendation. **Evidence artifact:** `evidence/week04-ablation.md`.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)

## How to invoke

In a Codex-style environment: `Use $regularization-ablation to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
