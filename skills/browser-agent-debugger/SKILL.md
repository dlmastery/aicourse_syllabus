---
name: browser-agent-debugger
description: diagnose why a GUI agent step failed (stale view, wrong grounding, missing wait, bad verification). Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Browser Agent Debugger

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** diagnose why a GUI agent step failed (stale view, wrong grounding, missing wait, bad verification).
- **Inputs:** a failing run trace + screenshots. **Outputs:** the failure category, the fix, and whether the step
  should be replaced by an API/MCP tool. **Evidence artifact:** `evidence/week08-browser-debug.md`.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 8 — Computer-Use and Browser Agents

## How to invoke

In a Codex-style environment: `Use $browser-agent-debugger to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
