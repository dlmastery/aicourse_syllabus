---
name: scaling-fit
description: fit and validate a scaling law from a handful of runs, then recommend a compute-optimal config. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Scaling Fit

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** fit and validate a scaling law from a handful of runs, then recommend a compute-optimal config.
- **Inputs:** (params, tokens, loss) triples. **Outputs:** fitted exponents + a held-out prediction + a config rec. **Evidence artifact:** `evidence/week04-scaling.md`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 4 — Architecture, Hyperparameters, and Scaling Laws

## How to invoke

In a Codex-style environment: `Use $scaling-fit to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
