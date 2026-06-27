---
name: shape-checker
description: annotate every line of model code with the shape of its result. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Shape Checker

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** annotate every line of model code with the shape of its result.
- **Inputs:** a code snippet. **Outputs:** the same snippet with `# (n, d)` shape comments and one predicted failure.
- **Evidence artifact:** a shape-annotated version of `linalg.py`.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 2 — Linear Algebra as Shapes You Can Reason About

## How to invoke

In a Codex-style environment: `Use $shape-checker to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
