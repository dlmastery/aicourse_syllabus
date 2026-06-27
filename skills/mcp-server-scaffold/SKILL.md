---
name: mcp-server-scaffold
description: stand up a correct, documented MCP server for any backend in under an hour. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Mcp Server Scaffold

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** stand up a correct, documented MCP server for any backend in under an hour.
- **Inputs:** a backend (functions + data). **Outputs:** a server exposing tools/resources/prompts, a capability
  manifest, a `README` with the client config snippet, and a 3-line "trust boundary" note (what it can read/do).
- **Minimal workflow:** classify each capability (tool/resource/prompt) → implement → declare capabilities →
  test from a second host → document scopes. **Evidence artifact:** `evidence/week03-mcp/` (server + manifest + README).

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 3 — MCP: Build a Model Context Protocol Server (original module)

## How to invoke

In a Codex-style environment: `Use $mcp-server-scaffold to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
