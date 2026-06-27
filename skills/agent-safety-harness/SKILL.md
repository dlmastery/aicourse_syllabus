---
name: agent-safety-harness
description: authorization + sandbox + monitoring wrapper for tool-using agents. **Inputs:** agent, tool set, risk policy. **Outputs:** gated agent, unsafe-action rate, utility delta, audit trail. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Agent Safety Harness

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** authorization + sandbox + monitoring wrapper for tool-using agents. **Inputs:** agent, tool set, risk policy. **Outputs:** gated agent, unsafe-action rate, utility delta, audit trail.
- **Evidence artifact:** `evidence/week11-agent/`.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 11 — Agent Safety: Autonomy, Permissions & Multi-Agent Risk

## How to invoke

In a Codex-style environment: `Use $agent-safety-harness to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
