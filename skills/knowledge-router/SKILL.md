---
name: knowledge-router
description: route a query to vector / graph / SQL retrieval and justify the choice per query class with evidence. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Knowledge Router

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** route a query to vector / graph / SQL retrieval and justify the choice per query class with evidence.
- **Inputs:** a query + the three backends + a labeled set of query types.
- **Required outputs:** routing accuracy, per-backend win on its class, fallback behavior, and the end-to-end routed eval.
- **Evidence artifact:** `evidence/week08-agentic-graph-sql/router-eval.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL

## How to invoke

In a Codex-style environment: `Use $knowledge-router to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
