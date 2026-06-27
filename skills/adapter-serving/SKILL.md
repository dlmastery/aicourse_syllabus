---
name: adapter-serving
description: serve quantized adapters under an SLA and verify the *served* artifact still passes eval and beats the baseline on cost. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Adapter Serving

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** serve quantized adapters under an SLA and verify the *served* artifact still passes eval and beats the baseline on cost.
- **Inputs:** tuned checkpoint + adapters + an SLA + the regression suite.
- **Required outputs:** quant quality/latency table, multi-LoRA throughput, $/1k-answers, and a served-model regression pass/fail.
- **Evidence artifact:** `evidence/week09-serving/sla.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost

## How to invoke

In a Codex-style environment: `Use $adapter-serving to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
