---
name: verifier-suite
description: build and validate the reward signal (outcome and/or process) that RL and best-of-N depend on, including its hacking surface. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Verifier Suite

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** build and validate the reward signal (outcome and/or process) that RL and best-of-N depend on, including its hacking surface.
- **Inputs:** a task with checkable or step-labeled correctness.
- **Required outputs:** verifier accuracy (vs human), selection lift over majority vote, and a documented reward-hacking probe.
- **Evidence artifact:** `evidence/week03-verifiers/report.md`.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome

## How to invoke

In a Codex-style environment: `Use $verifier-suite to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
