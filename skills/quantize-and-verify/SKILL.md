---
name: quantize-and-verify
description: quantize any model with a chosen method + verify quality on a fixed eval before it ships. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Quantize And Verify

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** quantize any model with a chosen method + verify quality on a fixed eval before it ships.
- **Inputs:** a model + calibration data + an eval. **Outputs:** quantized weights, a quality/speed/memory delta, a go/no-go.
- **Evidence artifact:** `evidence/week03-quant/quant-comparison.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant

## How to invoke

In a Codex-style environment: `Use $quantize-and-verify to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
