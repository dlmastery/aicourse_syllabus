---
name: recsys-slice-eval
description: evaluate a recommender beyond a single averaged metric. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Recsys Slice Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a recommender beyond a single averaged metric.
- **Inputs:** a ranked-list model + log. **Required outputs:** Recall/NDCG@k, cold-start vs warm split, catalog coverage, long-tail exposure, and one online-lift caveat. **Evidence artifact:** `recsys-eval.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 7 — Retail & E-commerce I: Recommendation Systems at Scale

## How to invoke

In a Codex-style environment: `Use $recsys-slice-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
