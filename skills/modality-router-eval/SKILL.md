---
name: modality-router-eval
description: evaluate a multimodal system's routing/fusion choices. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Modality Router Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a multimodal system's routing/fusion choices.
- **Inputs:** a multimodal system + task set. **Required outputs:** per-modality quality, end-to-end latency, failure cases at modality boundaries, and a native-vs-pipeline recommendation. **Evidence artifact:** `any2any-eval.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 9 — Any-to-Any & Unified Multimodal Models

## How to invoke

In a Codex-style environment: `Use $modality-router-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
