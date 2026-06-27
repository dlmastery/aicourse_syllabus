---
name: pit-leakage-audit
description: prove a tabular/time-series pipeline has no target/temporal leakage. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Pit Leakage Audit

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** prove a tabular/time-series pipeline has no target/temporal leakage.
- **Inputs:** feature pipeline + split. **Required outputs:** a list of each feature's earliest valid timestamp, any feature whose value depends on future rows, and a pass/fail. **Evidence artifact:** `pit-audit.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 5 — Finance I: Fraud Detection & Point-in-Time Correctness

## How to invoke

In a Codex-style environment: `Use $pit-leakage-audit to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
