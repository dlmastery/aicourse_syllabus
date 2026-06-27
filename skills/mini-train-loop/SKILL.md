---
name: mini-train-loop
description: a reusable, instrumented training loop: seedable, checkpointing, eval-every-N, early-stop,. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Mini Train Loop

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a reusable, instrumented training loop: seedable, checkpointing, eval-every-N, early-stop,
  metric logging — the backbone for every later course.
- **Inputs:** model, dataset, config. **Outputs:** checkpoints, a metrics CSV/`wandb` run, a samples file.
  **Evidence artifact:** `evidence/week10-train/` (curves, config, samples).

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 10 — Training a Small GPT: nanoGPT From Scratch

## How to invoke

In a Codex-style environment: `Use $mini-train-loop to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
