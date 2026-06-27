---
name: agent-red-team
description: systematically attack an agent and verify defenses before shipping. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Agent Red Team

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** systematically attack an agent and verify defenses before shipping.
- **Inputs:** the agent + its tools + the content it ingests. **Outputs:** an attack set mapped to OWASP LLM Top 10,
  a before/after success table, the defense layers added, and the regression test. **Evidence artifact:** `evidence/week11-redteam/`.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10

## How to invoke

In a Codex-style environment: `Use $agent-red-team to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
