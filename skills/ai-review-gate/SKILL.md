---
name: ai-review-gate
description: a calibrated AI review gate that complements (not replaces) human review. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Ai Review Gate

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a calibrated AI review gate that complements (not replaces) human review.
- **Inputs:** a repo + conventions + PR. **Outputs:** a grounded reviewer config, a checklist, a severity→gate
  mapping, and an effectiveness report (caught/missed/FP). **Evidence artifact:** `evidence/week09-review/`.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 9 — AI Code Review Gates

## How to invoke

In a Codex-style environment: `Use $ai-review-gate to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
