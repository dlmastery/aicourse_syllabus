---
name: vectordb-selector
description: choose and configure a vector store from measured recall/latency/ops needs, not hype. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Vectordb Selector

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** choose and configure a vector store from measured recall/latency/ops needs, not hype.
- **Inputs:** corpus size, filter needs, scale/ops constraints.
- **Required outputs:** recall@k and p95 latency per candidate, filtering behavior, ops notes (managed vs self-host), and a justified pick.
- **Evidence artifact:** `evidence/week03-vectordb.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 3 — Vector Databases: Indexes, ANN, and Choosing Your Store

## How to invoke

In a Codex-style environment: `Use $vectordb-selector to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
