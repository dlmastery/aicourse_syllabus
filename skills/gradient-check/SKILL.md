---
name: gradient-check
description: never trust a hand-derived gradient without a numerical check. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Gradient Check

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** never trust a hand-derived gradient without a numerical check.
- **Inputs:** a loss function + analytic gradient. **Outputs:** pass/fail + the worst-offending parameter.
- **Evidence artifact:** `evidence/week03-gradcheck.md`.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 3 — Derivatives, Gradients & the Seed of Backpropagation

## How to invoke

In a Codex-style environment: `Use $gradient-check to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
