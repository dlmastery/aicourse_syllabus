---
name: parallel-plan
description: choose and validate a parallelism strategy (DP/FSDP-ZeRO/TP/PP) for a target model + hardware + latency goal. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Parallel Plan

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** choose and validate a parallelism strategy (DP/FSDP-ZeRO/TP/PP) for a target model + hardware + latency goal.
- **Inputs:** model size + GPU count/interconnect + objective (train vs serve, latency vs throughput). **Outputs:** a recommended plan + measured memory/throughput + the bottleneck named.
- **Evidence artifact:** `evidence/week11-distributed/parallel-plan.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism

## How to invoke

In a Codex-style environment: `Use $parallel-plan to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
