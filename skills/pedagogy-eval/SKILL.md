---
name: pedagogy-eval
description: score a tutoring interaction on teaching quality, not just final-answer correctness. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Pedagogy Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** score a tutoring interaction on teaching quality, not just final-answer correctness.
- **Inputs:** tutoring transcripts. **Required outputs:** scaffolding score, answer-leakage flag, factual-correctness check, and an adversarial-student stress result. **Evidence artifact:** `pedagogy-eval.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)

## How to invoke

In a Codex-style environment: `Use $pedagogy-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
