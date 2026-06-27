---
name: optimizer-bench
description: fairly compare optimizers on one model/data with matched seeds and LR sweeps. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Optimizer Bench

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** fairly compare optimizers on one model/data with matched seeds and LR sweeps.
- **Inputs:** model, data, list of optimizers + LR grid. **Outputs:** convergence table, best-LR per
  optimizer, one-paragraph recommendation. **Evidence artifact:** `evidence/week03-optim/` (plots + table).

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch

## How to invoke

In a Codex-style environment: `Use $optimizer-bench to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
