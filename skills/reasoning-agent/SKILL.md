---
name: reasoning-agent
description: build a bounded ReAct/deep-research loop and prove tools beat pure CoT where computation/freshness matters. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Reasoning Agent

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** build a bounded ReAct/deep-research loop and prove tools beat pure CoT where computation/freshness matters.
- **Inputs:** a task + a tool set + a step/cost budget.
- **Required outputs:** tool-vs-CoT eval, budget adherence, a trace gallery, and a failure-mode fix.
- **Evidence artifact:** `evidence/week04-react/report.md`.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 4 — ReAct, Tool Use & Search: Reasoning That Acts

## How to invoke

In a Codex-style environment: `Use $reasoning-agent to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
