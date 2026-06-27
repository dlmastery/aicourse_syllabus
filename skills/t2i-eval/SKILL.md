---
name: t2i-eval
description: evaluate a text-to-image model on realism *and* alignment. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# T2i Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a text-to-image model on realism *and* alignment.
- **Inputs:** prompts + generations. **Required outputs:** FID-or-realism note, CLIPScore per prompt, a CFG-scale curve, and a failure-prompt set. **Evidence artifact:** `t2i-eval.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image

## How to invoke

In a Codex-style environment: `Use $t2i-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
