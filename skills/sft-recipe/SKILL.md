---
name: sft-recipe
description: a reproducible SFT recipe: template + mask + pack + LoRA config + held-out instruction eval. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Sft Recipe

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a reproducible SFT recipe: template + mask + pack + LoRA config + held-out instruction eval.
- **Inputs:** base model + instruction data. **Outputs:** a tuned checkpoint + an eval delta + a config. **Evidence artifact:** `evidence/week08-sft/`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 8 — Supervised Fine-Tuning & Instruction Tuning

## How to invoke

In a Codex-style environment: `Use $sft-recipe to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
