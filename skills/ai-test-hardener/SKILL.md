---
name: ai-test-hardener
description: turn AI-generated tests into tests that actually constrain behavior. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Ai Test Hardener

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn AI-generated tests into tests that actually constrain behavior.
- **Inputs:** code + AI-generated tests. **Outputs:** a coverage + mutation report, added asserts, ≥1 validated
  property test, and a list of tautological tests removed/fixed. **Evidence artifact:** `evidence/week07-tests/`.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 7 — AI-Generated Tests and Test Quality

## How to invoke

In a Codex-style environment: `Use $ai-test-hardener to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
