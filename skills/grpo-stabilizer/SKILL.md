---
name: grpo-stabilizer
description: diagnose and fix GRPO instabilities (length, entropy, bias) with the right targeted technique. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Grpo Stabilizer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** diagnose and fix GRPO instabilities (length, entropy, bias) with the right targeted technique.
- **Inputs:** a GRPO run + its dynamics (reward, eval, length, entropy).
- **Required outputs:** a diagnosis per pathology, the fix applied, and the ablation showing the fix worked on held-out eval.
- **Evidence artifact:** `evidence/week06-grpo-fixes/report.md`.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run

## How to invoke

In a Codex-style environment: `Use $grpo-stabilizer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
