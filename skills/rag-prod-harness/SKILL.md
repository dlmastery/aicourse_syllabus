---
name: rag-prod-harness
description: make a RAG system production-safe and cost-bounded with measured SLA, caching, and guardrails. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Rag Prod Harness

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** make a RAG system production-safe and cost-bounded with measured SLA, caching, and guardrails.
- **Inputs:** a working retriever+generator + traffic samples + an SLA target.
- **Required outputs:** p95 latency + cost/query, cache hit-rate, guardrail pass rates (injection blocked, citation enforced, PII redacted), and a deploy/no-deploy call.
- **Evidence artifact:** `evidence/week09-production/sla-and-safety.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails

## How to invoke

In a Codex-style environment: `Use $rag-prod-harness to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
