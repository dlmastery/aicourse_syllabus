---
name: gpu-profile
description: turn any model/op into a profile that names the bottleneck (compute vs memory) and the top time-sinks. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Gpu Profile

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn any model/op into a profile that names the bottleneck (compute vs memory) and the top time-sinks.
- **Inputs:** a model + input shape. **Outputs:** a kernel-time table, a roofline classification, a memory breakdown.
- **Evidence artifact:** `evidence/week01-profile/bottleneck-report.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 1 — The GPU Execution & Memory Model (and How to Profile It)

## How to invoke

In a Codex-style environment: `Use $gpu-profile to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
