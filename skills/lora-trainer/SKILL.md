---
name: lora-trainer
description: run a reproducible LoRA SFT and report whether it beats the prompted baseline, with the hyperparameters that mattered isolated. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Lora Trainer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** run a reproducible LoRA SFT and report whether it beats the prompted baseline, with the hyperparameters that mattered isolated.
- **Inputs:** a base model + a prepped dataset + the frozen eval.
- **Required outputs:** training config, loss curve, eval delta vs baseline, and the 1–2 hyperparameters that actually moved the metric.
- **Evidence artifact:** `evidence/week03-lora/report.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 3 — PEFT I: LoRA From the Math Up

## How to invoke

In a Codex-style environment: `Use $lora-trainer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
