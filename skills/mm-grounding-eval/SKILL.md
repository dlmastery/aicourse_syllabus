---
name: mm-grounding-eval
description: verify multimodal answers are grounded in retrieved visual evidence. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Mm Grounding Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** verify multimodal answers are grounded in retrieved visual evidence.
- **Inputs:** answers + retrieved images/regions. **Required outputs:** grounding rate, hallucination rate, abstention correctness, and the worst ungrounded case. **Evidence artifact:** `mm-grounding.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems

## How to invoke

In a Codex-style environment: `Use $mm-grounding-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
