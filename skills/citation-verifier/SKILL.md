---
name: citation-verifier
description: guarantee every cited source in a generated answer actually exists in the retrieved evidence and supports the claim. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Citation Verifier

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** guarantee every cited source in a generated answer actually exists in the retrieved evidence and supports the claim.
- **Inputs:** an answer with citations + the retrieval set. **Required outputs:** per-citation exists/supports flags, a fabrication rate, and a blocked/allowed verdict. **Evidence artifact:** `citation-integrity.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)

## How to invoke

In a Codex-style environment: `Use $citation-verifier to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
