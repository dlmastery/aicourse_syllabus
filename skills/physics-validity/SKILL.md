---
name: physics-validity
description: validate a learned PDE solution against physics and a numerical reference. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Physics Validity

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** validate a learned PDE solution against physics and a numerical reference.
- **Inputs:** a learned solution. **Required outputs:** PDE-residual magnitude, error vs the solver, a conservation/boundary check, and the failure regime. **Evidence artifact:** `physics-validity.md`.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates

## How to invoke

In a Codex-style environment: `Use $physics-validity to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
