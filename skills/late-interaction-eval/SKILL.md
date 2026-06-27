---
name: late-interaction-eval
description: evaluate whether late interaction earns its storage cost on a given corpus. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Late Interaction Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate whether late interaction earns its storage cost on a given corpus.
- **Inputs:** corpus + labeled queries + the Week 4 reranked baseline.
- **Required outputs:** nDCG and index-size comparison, rescued-query characterization, and a cost-aware verdict.
- **Evidence artifact:** `evidence/week05-colbert.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 5 — Late Interaction & ColBERT: Token-Level Retrieval

## How to invoke

In a Codex-style environment: `Use $late-interaction-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
