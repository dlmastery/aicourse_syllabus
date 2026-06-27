---
name: generative-eval
description: evaluate a generator beyond eyeballing. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Generative Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a generator beyond eyeballing.
- **Inputs:** generated + real samples. **Required outputs:** FID (and/or CLIPScore for conditional), a diversity check (mode-coverage / nearest-neighbor to training set to catch memorization), and a sample grid. **Evidence artifact:** `gen-eval.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)

## How to invoke

In a Codex-style environment: `Use $generative-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
