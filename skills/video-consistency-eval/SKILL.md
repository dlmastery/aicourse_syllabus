---
name: video-consistency-eval
description: evaluate generated video for temporal coherence, not just single-frame quality. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Video Consistency Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate generated video for temporal coherence, not just single-frame quality.
- **Inputs:** generated clips. **Required outputs:** frame-quality proxy, temporal-consistency score, text alignment, and a flicker/identity-drift catalog. **Evidence artifact:** `video-eval.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 7 — Video Generation: Spatiotemporal Diffusion & World Consistency

## How to invoke

In a Codex-style environment: `Use $video-consistency-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
