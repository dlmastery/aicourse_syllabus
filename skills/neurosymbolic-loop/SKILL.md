---
name: neurosymbolic-loop
description: wrap any reasoning task in a generate→execute→verify→repair loop. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Neurosymbolic Loop

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** wrap any reasoning task in a generate→execute→verify→repair loop.
- **Inputs:** a task + a symbolic executor. **Required outputs:** the hybrid's accuracy, the verification pass-rate, the repair count, and a comparison to pure-neural. **Evidence artifact:** `neurosymbolic-eval.md`.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning

## How to invoke

In a Codex-style environment: `Use $neurosymbolic-loop to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
