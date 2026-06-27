---
name: scientific-repro
description: reproduce a scientific-ML result with full provenance and an honest delta. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Scientific Repro

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** reproduce a scientific-ML result with full provenance and an honest delta.
- **Inputs:** a released model + a ground-truth set. **Required outputs:** the reproduced metric, the paper's number, the delta, seeds/hardware, and a "matches / does-not-match" verdict. **Evidence artifact:** `repro.md`.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL

## How to invoke

In a Codex-style environment: `Use $scientific-repro to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
