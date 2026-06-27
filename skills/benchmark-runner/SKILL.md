---
name: benchmark-runner
description: run a standard eval suite reproducibly, with format/contamination caveats and confidence intervals. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Benchmark Runner

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** run a standard eval suite reproducibly, with format/contamination caveats and confidence intervals.
- **Inputs:** a model + a benchmark list. **Outputs:** a scored table + caveats + a reproduction delta. **Evidence artifact:** `evidence/week07-eval/`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint

## How to invoke

In a Codex-style environment: `Use $benchmark-runner to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
