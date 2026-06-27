---
name: lowbit-serve
description: select a low-bit format your serving stack accelerates, fine-tune if needed (QLoRA), and verify the *served* gain. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Lowbit Serve

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** select a low-bit format your serving stack accelerates, fine-tune if needed (QLoRA), and verify the *served* gain.
- **Inputs:** a model + serving stack + quality budget. **Outputs:** a served variant + a benchmark proving real speedup + quality delta.
- **Evidence artifact:** `evidence/week04-lowbit/served-speedup.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 4 — QAT, Low-Bit Frontiers & Serving Quantized Models

## How to invoke

In a Codex-style environment: `Use $lowbit-serve to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
