---
name: compress-verify
description: compress a model (prune/distill) and verify both a *hardware-real* speedup and an in-budget quality delta. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Compress Verify

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** compress a model (prune/distill) and verify both a *hardware-real* speedup and an in-budget quality delta.
- **Inputs:** a model (+ teacher) + a latency target. **Outputs:** a compressed model + measured speedup + quality delta + a note on theoretical-vs-real gain.
- **Evidence artifact:** `evidence/week05-compress/compression-report.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 5 — Pruning, Sparsity, Distillation & NAS

## How to invoke

In a Codex-style environment: `Use $compress-verify to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
