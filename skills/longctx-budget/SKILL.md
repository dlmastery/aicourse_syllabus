---
name: longctx-budget
description: find the cheapest way to hit a target context length under a quality floor (KV-quant/eviction/window/RAG). Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Longctx Budget

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** find the cheapest way to hit a target context length under a quality floor (KV-quant/eviction/window/RAG).
- **Inputs:** a model + target context + quality floor + a long-doc task. **Outputs:** max-context-per-GB curve, quality deltas per lever, an LC-vs-RAG recommendation.
- **Evidence artifact:** `evidence/week10-longctx/longctx-report.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 10 — Long-Context Efficiency

## How to invoke

In a Codex-style environment: `Use $longctx-budget to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
