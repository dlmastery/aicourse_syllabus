---
name: rag-evaluator
description: measure and tune a retrieval/RAG layer end-to-end. **Inputs:** corpus, query set with references. **Outputs:** retrieval metrics (recall@k, nDCG), groundedness/faithfulness, hallucination rate, a tuning recommendation (chunking/rerank/hy.... Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rag Evaluator

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** measure and tune a retrieval/RAG layer end-to-end. **Inputs:** corpus, query set with references. **Outputs:** retrieval metrics (recall@k, nDCG), groundedness/faithfulness, hallucination rate, a tuning recommendation (chunking/rerank/hybrid weights).
- **Evidence artifact:** `M2/rag-eval/`.

## Used in
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 2 — Data, RAG & Prototype

## How to invoke

In a Codex-style environment: `Use $rag-evaluator to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
