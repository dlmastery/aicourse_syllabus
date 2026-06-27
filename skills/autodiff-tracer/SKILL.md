---
name: autodiff-tracer
description: for any small expression, draw/print the computation graph and verify each local gradient. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Autodiff Tracer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** for any small expression, draw/print the computation graph and verify each local gradient.
- **Inputs:** an expression built from `Value` ops. **Outputs:** the topo-ordered node list, each node's
  local derivative, and a finite-difference pass/fail per leaf.
- **Minimal workflow:** build expr → `.backward()` → numerically perturb each leaf → diff. **Evidence
  artifact:** `evidence/week01-autodiff-check.md`.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 1 — The Neuron, the Forward Pass, and Scalar Autodiff From Scratch

## How to invoke

In a Codex-style environment: `Use $autodiff-tracer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
