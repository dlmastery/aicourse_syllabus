---
name: moe-analyze
description: profile an MoE model's active/total params, serving cost, and routing balance to inform a deploy decision. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Moe Analyze

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** profile an MoE model's active/total params, serving cost, and routing balance to inform a deploy decision.
- **Inputs:** an MoE model + a batch. **Outputs:** active-vs-total param accounting, throughput/memory, an expert-load histogram.
- **Evidence artifact:** `evidence/week09-moe/moe-analysis.md`.
- **Design review #2 (8%-component):** an ADR for the serving stack + (if used) parallelism/MoE plan for the capstone.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 9 — Mixture-of-Experts: Sparse Models at Scale

## How to invoke

In a Codex-style environment: `Use $moe-analyze to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
