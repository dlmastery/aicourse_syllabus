---
name: faithfulness-judge
description: decide, claim-by-claim, whether generated text is supported by sources. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Faithfulness Judge

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** decide, claim-by-claim, whether generated text is supported by sources.
- **Inputs:** generated summary + retrieved spans. **Required outputs:** per-claim supported/unsupported labels, an aggregate faithfulness rate, and the worst hallucination. **Evidence artifact:** `faithfulness-report.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)

## How to invoke

In a Codex-style environment: `Use $faithfulness-judge to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
