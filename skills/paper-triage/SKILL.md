---
name: paper-triage
description: rapidly assess a frontier paper's claim, evidence, reproducibility, and the one experiment that would confirm/refute it. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Paper Triage

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** rapidly assess a frontier paper's claim, evidence, reproducibility, and the one experiment that would confirm/refute it.
- **Inputs:** a paper. **Required outputs:** the central claim, the strongest and weakest evidence, reproducibility tier, contamination risk, and the cheapest disconfirming test. **Evidence artifact:** `triage/<paper>.md`.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype

## How to invoke

In a Codex-style environment: `Use $paper-triage to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
