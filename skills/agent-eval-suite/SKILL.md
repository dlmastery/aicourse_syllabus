---
name: agent-eval-suite
description: turn "seems to work" into a reproducible, gating eval. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Agent Eval Suite

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn "seems to work" into a reproducible, gating eval.
- **Inputs:** task domain + success criteria. **Outputs:** a task set with programmatic checks, a simulated-user
  spec, a pass^k report, a failure taxonomy, and a CI threshold. **Evidence artifact:** `evidence/week09-eval/`.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k

## How to invoke

In a Codex-style environment: `Use $agent-eval-suite to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
