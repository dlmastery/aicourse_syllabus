---
name: vlm-probe
description: characterize a VLM's strengths/failures before deploying it. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Vlm Probe

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** characterize a VLM's strengths/failures before deploying it.
- **Inputs:** a VLM + a probe set (objects, counting, text-in-image, spatial). **Required outputs:** per-capability accuracy, a hallucination rate, and a resolution-sensitivity note. **Evidence artifact:** `vlm-probe.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning

## How to invoke

In a Codex-style environment: `Use $vlm-probe to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
