---
name: trace-debug
description: make any LLM/agent request fully traceable and explainable from a single span tree. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Trace Debug

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** make any LLM/agent request fully traceable and explainable from a single span tree.
- **Inputs:** an instrumented app + a failing request id. **Outputs:** the trace, the identified failing span, a one-line root cause.
- **Evidence artifact:** `evidence/week08-obs/root-cause-from-trace.md`.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry

## How to invoke

In a Codex-style environment: `Use $trace-debug to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
