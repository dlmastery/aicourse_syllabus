---
name: chunk-strategist
description: pick and justify a chunking strategy for a given corpus by measuring, not guessing. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Chunk Strategist

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** pick and justify a chunking strategy for a given corpus by measuring, not guessing.
- **Inputs:** a document set + the frozen eval.
- **Required outputs:** comparison table across ≥3 strategies, the failure examples each fixes/causes, and a final pick with the mechanism named.
- **Minimal workflow:** parse → chunk (≥3 ways) → embed → eval → tabulate → decide.
- **Evidence artifact:** `evidence/week02-chunking.md`.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality

## How to invoke

In a Codex-style environment: `Use $chunk-strategist to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
