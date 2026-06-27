---
name: rag-ablation
description: add advanced-RAG techniques as toggles and keep only those that beat the eval, with the regressions named. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rag Ablation

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** add advanced-RAG techniques as toggles and keep only those that beat the eval, with the regressions named.
- **Inputs:** baseline pipeline + the `$rag-eval` harness + a list of candidate techniques.
- **Required outputs:** ablation table (each technique on/off), per-technique rescues and regressions, and a keep/cut decision per technique with the mechanism.
- **Evidence artifact:** `evidence/week07-advanced.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 7 — Advanced RAG I: HyDE, CRAG & Self-RAG

## How to invoke

In a Codex-style environment: `Use $rag-ablation to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
