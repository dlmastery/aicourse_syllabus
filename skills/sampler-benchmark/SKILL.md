---
name: sampler-benchmark
description: compare generative samplers on the quality–compute frontier. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Sampler Benchmark

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** compare generative samplers on the quality–compute frontier.
- **Inputs:** trained generators + samplers. **Required outputs:** FID (and CLIPScore if conditional) vs NFE (number of function evaluations) curve, and the recommended operating point. **Evidence artifact:** `sampler-benchmark.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone

## How to invoke

In a Codex-style environment: `Use $sampler-benchmark to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
