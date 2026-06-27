---
name: reasoning-deploy
description: deploy reasoning under a compute budget with adaptive effort, a faithfulness check, and a measured SLA. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Reasoning Deploy

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** deploy reasoning under a compute budget with adaptive effort, a faithfulness check, and a measured SLA.
- **Inputs:** a reasoning model + a difficulty signal + an SLA.
- **Required outputs:** adaptive-vs-flat accuracy-per-token, faithfulness-probe result, p95 latency + cost/query, and a deploy decision.
- **Evidence artifact:** `evidence/week09-deploy/sla.md`.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment

## How to invoke

In a Codex-style environment: `Use $reasoning-deploy to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
