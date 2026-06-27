---
name: contrastive-eval
description: evaluate any image–text model on retrieval and zero-shot, both directions. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Contrastive Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate any image–text model on retrieval and zero-shot, both directions.
- **Inputs:** image/text encoders + a paired set. **Required outputs:** R@1/5/10 (i→t and t→i), zero-shot accuracy, and a prompt-template sensitivity note. **Evidence artifact:** `clip-eval.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 2 — Contrastive Learning & CLIP: Aligning Images and Text

## How to invoke

In a Codex-style environment: `Use $contrastive-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
