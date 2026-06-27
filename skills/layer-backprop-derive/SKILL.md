---
name: layer-backprop-derive
description: for any layer, produce the forward formula, the backward formula, the shapes, and a. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Layer Backprop Derive

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** for any layer, produce the forward formula, the backward formula, the shapes, and a
  finite-difference check before trusting it.
- **Inputs:** a layer's forward expression. **Outputs:** `dInput`, `dParams` formulas + a numeric pass/fail.
- **Evidence artifact:** `evidence/week02-backprop-derivation.md`.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 2 — Backpropagation Through an MLP, By Hand (NumPy)

## How to invoke

In a Codex-style environment: `Use $layer-backprop-derive to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
