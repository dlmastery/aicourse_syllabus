---
name: repro-image
description: turn any model into a reproducible, slim, non-root container with a health check. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Repro Image

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn any model into a reproducible, slim, non-root container with a health check.
- **Inputs:** a trained model artifact + an inference function. **Required outputs:** multi-stage `Dockerfile`, pinned lockfile, `/healthz`, a recorded image-size + cold-start line.
- **Minimal workflow:** pin deps → stage build → drop privileges → add healthcheck → measure. **Evidence artifact:** `evidence/week01-image.md` (size, layers, cold start, repro hash).

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 1 — The Production Mindset & Containerizing a Model

## How to invoke

In a Codex-style environment: `Use $repro-image to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
