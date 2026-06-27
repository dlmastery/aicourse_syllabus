---
name: retriever-stack
description: assemble and measure a dense→hybrid→reranked retriever, adding each stage only if it earns its latency. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Retriever Stack

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** assemble and measure a dense→hybrid→reranked retriever, adding each stage only if it earns its latency.
- **Inputs:** corpus + labeled queries.
- **Required outputs:** nDCG/recall per stage, per-query rescue examples, latency cost per stage, and a kept-or-cut decision for each.
- **Evidence artifact:** `evidence/week04-hybrid.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top

## How to invoke

In a Codex-style environment: `Use $retriever-stack to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
