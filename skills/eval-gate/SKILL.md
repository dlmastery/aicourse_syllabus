---
name: eval-gate
description: turn any eval suite into a CI gate that blocks regressions in quality, latency, or cost. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Eval Gate

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn any eval suite into a CI gate that blocks regressions in quality, latency, or cost.
- **Inputs:** an eval set + thresholds. **Outputs:** a CI job, a pass/fail report, a blocked-PR example.
- **Evidence artifact:** `evidence/week06-eval-gate/blocked-pr.md` (the diff + the failing eval report).

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 4 — Evaluation Harness & Safety Review

## How to invoke

In a Codex-style environment: `Use $eval-gate to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
