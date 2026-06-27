---
name: sequence-sanity
description: validate any sequence model with three cheap checks: grad-check on a short sequence,. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Sequence Sanity

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** validate any sequence model with three cheap checks: grad-check on a short sequence,
  overfit-a-single-batch, and a samples-look-reasonable read.
- **Inputs:** a sequence model + a tiny batch. **Outputs:** grad-check result, single-batch loss→~0 curve,
  a generated sample. **Evidence artifact:** `evidence/week06-seq-sanity.md`.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)

## How to invoke

In a Codex-style environment: `Use $sequence-sanity to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
