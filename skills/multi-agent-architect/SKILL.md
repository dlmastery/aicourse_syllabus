---
name: multi-agent-architect
description: decide the agent topology and hand-off contracts before coding. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Multi Agent Architect

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** decide the agent topology and hand-off contracts before coding.
- **Inputs:** the task's sub-skills, parallelism, need for independent verification. **Outputs:** a topology
  (single / orchestrator-workers / debate), each agent's role + tools + I/O contract, the merge/verify step, and a
  cost estimate. **Evidence artifact:** `evidence/week07-topology.md`.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate

## How to invoke

In a Codex-style environment: `Use $multi-agent-architect to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
