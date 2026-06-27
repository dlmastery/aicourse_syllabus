---
name: conv-shape-planner
description: given an input size and a stack of conv/pool layers, compute every intermediate shape *before* coding. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Conv Shape Planner

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** given an input size and a stack of conv/pool layers, compute every intermediate shape *before* coding.
- **Inputs:** input `(C,H,W)` + layer specs. **Outputs:** a per-layer shape table + total param count + one
  predicted bottleneck. **Evidence artifact:** `evidence/week05-shape-table.md`.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST

## How to invoke

In a Codex-style environment: `Use $conv-shape-planner to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
