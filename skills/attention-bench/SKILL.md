---
name: attention-bench
description: quantify attention/KV-cache cost across context lengths and prove the win from FlashAttention + paged KV. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Attention Bench

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** quantify attention/KV-cache cost across context lengths and prove the win from FlashAttention + paged KV.
- **Inputs:** a model + context lengths + batch sizes. **Outputs:** a latency/memory/throughput curve, a KV-cache budget, a paged-vs-naive batch-size comparison.
- **Evidence artifact:** `evidence/week06-attention/attention-scaling.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention

## How to invoke

In a Codex-style environment: `Use $attention-bench to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
