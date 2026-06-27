---
name: rag-eval
description: turn "looks good" into a reproducible scorecard separating retrieval from generation quality. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rag Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn "looks good" into a reproducible scorecard separating retrieval from generation quality.
- **Inputs:** a retriever+generator + a frozen gold set (questions, reference answers, relevant chunk ids).
- **Required outputs:** nDCG/MAP/recall (retrieval), faithfulness/answer-relevance/context-precision (generation), judge–human agreement, and a one-line verdict.
- **Minimal workflow:** freeze gold → run system → score retrieval + generation → validate judge → tabulate.
- **Evidence artifact:** `evidence/week06-eval/dashboard.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness

## How to invoke

In a Codex-style environment: `Use $rag-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
