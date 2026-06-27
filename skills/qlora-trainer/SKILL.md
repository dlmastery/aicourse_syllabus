---
name: qlora-trainer
description: train under a memory budget with 4-bit base + LoRA, and report the exact memory/quality tradeoff. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Qlora Trainer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** train under a memory budget with 4-bit base + LoRA, and report the exact memory/quality tradeoff.
- **Inputs:** base model + dataset + a GPU memory budget.
- **Required outputs:** memory footprint, throughput, eval vs full-precision LoRA, and a budget-aware recommendation.
- **Evidence artifact:** `evidence/week04-qlora/report.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU

## How to invoke

In a Codex-style environment: `Use $qlora-trainer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
