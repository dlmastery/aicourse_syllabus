---
name: moe-router-monitor
description: monitor MoE routing health (per-expert load, drop rate, balance loss) and flag collapse. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Moe Router Monitor

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** monitor MoE routing health (per-expert load, drop rate, balance loss) and flag collapse.
- **Inputs:** an MoE model + a batch stream. **Outputs:** utilization histogram, drop rate, collapse flag. **Evidence artifact:** `evidence/week06-moe.md`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 6 — Mixture-of-Experts and Long-Context Pretraining

## How to invoke

In a Codex-style environment: `Use $moe-router-monitor to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
