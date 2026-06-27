---
name: attention-inspector
description: for any attention layer, dump and visualize the score matrix, verify the causal mask, and. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Attention Inspector

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** for any attention layer, dump and visualize the score matrix, verify the causal mask, and
  flag degenerate patterns (all-uniform or all-on-one-token).
- **Inputs:** a model + an input sequence. **Outputs:** heatmap(s), mask-correctness check, a degeneracy
  flag. **Evidence artifact:** `evidence/week07-attention/` (heatmaps + notes).

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 7 — Attention From Scratch: Why It Replaced Recurrence

## How to invoke

In a Codex-style environment: `Use $attention-inspector to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
