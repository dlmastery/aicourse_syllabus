---
name: tool-schema-designer
description: turn a capability into a safe, model-friendly tool contract. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Tool Schema Designer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn a capability into a safe, model-friendly tool contract.
- **Inputs:** a desired capability + its backend signature. **Outputs:** a Pydantic schema (enums/ranges/units),
  a one-paragraph model-facing description, three "must-fail" inputs and the error string each returns.
- **Minimal workflow:** name → type-constrain → describe for the model → enumerate failure inputs → test.
  **Evidence artifact:** `evidence/week02-tools.md` (schemas + the must-fail table).

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 2 — Function Calling, Tool Schemas, and Structured Outputs

## How to invoke

In a Codex-style environment: `Use $tool-schema-designer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
