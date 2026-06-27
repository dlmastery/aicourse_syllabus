---
name: precision-sweep
description: for any model, compare precisions on speed/memory/quality with a fixed eval, and recommend one. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Precision Sweep

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** for any model, compare precisions on speed/memory/quality with a fixed eval, and recommend one.
- **Inputs:** a model + an eval set. **Outputs:** a tradeoff table + a recommendation + the failure cases each precision introduced.
- **Evidence artifact:** `evidence/week02-precision/tradeoff-table.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter

## How to invoke

In a Codex-style environment: `Use $precision-sweep to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
