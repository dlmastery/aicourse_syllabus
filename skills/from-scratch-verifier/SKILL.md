---
name: from-scratch-verifier
description: prove a from-scratch module matches a reference implementation. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# From Scratch Verifier

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** prove a from-scratch module matches a reference implementation.
- **Inputs:** your module + a reference (`timm`/`transformers`). **Required outputs:** shape checks at every stage, output-parity test on a fixed input, and a parameter-count comparison. **Evidence artifact:** `verify.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 1 — Vision Transformers From Scratch: Images as Sequences of Patches

## How to invoke

In a Codex-style environment: `Use $from-scratch-verifier to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
