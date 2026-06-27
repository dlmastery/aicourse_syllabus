---
name: constitutional-aligner
description: align a model from a written constitution via critique→revise→RLAIF. **Inputs:** base model, constitution, prompt set. **Outputs:** aligned model, AI-preference set, RLHF-vs-RLAIF tradeoff report. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Constitutional Aligner

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** align a model from a written constitution via critique→revise→RLAIF. **Inputs:** base model, constitution, prompt set. **Outputs:** aligned model, AI-preference set, RLHF-vs-RLAIF tradeoff report.
- **Evidence artifact:** `evidence/week09-cai/`.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 9 — Scalable Oversight, Constitutional AI & RLAIF

## How to invoke

In a Codex-style environment: `Use $constitutional-aligner to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
