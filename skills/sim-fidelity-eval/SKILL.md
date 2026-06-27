---
name: sim-fidelity-eval
description: assess whether a learned simulator is good enough to plan/train inside. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Sim Fidelity Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** assess whether a learned simulator is good enough to plan/train inside.
- **Inputs:** a world model + a policy. **Required outputs:** rollout fidelity vs horizon, an exploitation check (imagined vs real return gap), and a trustworthy-horizon recommendation. **Evidence artifact:** `sim-fidelity.md`.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 9 — World Models & Simulation for Reasoning and Control

## How to invoke

In a Codex-style environment: `Use $sim-fidelity-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
