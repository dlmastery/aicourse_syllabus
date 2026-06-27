---
name: spec-decode
description: add speculative decoding to a served model and verify a real, output-preserving latency win. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Spec Decode

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** add speculative decoding to a served model and verify a real, output-preserving latency win.
- **Inputs:** a target model + a draft/method. **Outputs:** acceptance rate, latency delta vs batch, an output-equivalence check.
- **Evidence artifact:** `evidence/week08-spec/spec-decode-report.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 8 — Speculative & Parallel Decoding

## How to invoke

In a Codex-style environment: `Use $spec-decode to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
