---
name: ood-science-eval
description: evaluate a scientific model on extrapolation and physical validity, not just in-distribution fit. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Ood Science Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a scientific model on extrapolation and physical validity, not just in-distribution fit.
- **Inputs:** model + scientific dataset. **Required outputs:** scaffold/structure-split metrics, an OOD slice, a physical-constraint check, and an uncertainty/applicability-domain note. **Evidence artifact:** `science-eval.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 11 — AI for Science: Surrogates, Property Prediction & Inverse Design

## How to invoke

In a Codex-style environment: `Use $ood-science-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
