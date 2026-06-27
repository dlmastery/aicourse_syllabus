---
name: rag-baseline
description: for any new corpus, stand up the simplest honest RAG pipeline and its eval before any optimization. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rag Baseline

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** for any new corpus, stand up the simplest honest RAG pipeline and its eval before any optimization.
- **Inputs:** a document folder + a handful of Q/A pairs.
- **Required outputs:** ingest script, ask script, baseline accuracy, and a split of errors into *retrieval miss* (right chunk never retrieved) vs *generation miss* (right chunk retrieved, wrong answer).
- **Minimal workflow:** chunk → embed → store → retrieve → generate → label errors.
- **Evidence artifact:** `evidence/week01-baseline.md` with the accuracy line and the retrieval/generation error split.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline

## How to invoke

In a Codex-style environment: `Use $rag-baseline to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
