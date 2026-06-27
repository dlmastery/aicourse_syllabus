---
name: transformer-block-validator
description: verify a Transformer block by shape-checking every sublayer, confirming residual/Norm. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Transformer Block Validator

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** verify a Transformer block by shape-checking every sublayer, confirming residual/Norm
  placement, and overfitting a single batch to near-zero loss.
- **Inputs:** a block module + a tiny batch. **Outputs:** shape table, pre/post-norm confirmation, single-batch
  overfit curve. **Evidence artifact:** `evidence/week08-block-validate.md`.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 8 — The Transformer Block, Built End to End

## How to invoke

In a Codex-style environment: `Use $transformer-block-validator to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
