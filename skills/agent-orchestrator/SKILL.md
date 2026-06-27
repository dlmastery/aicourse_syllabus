---
name: agent-orchestrator
description: Stand up a multi-agent orchestration plus MCP-tooling scaffold with tracing and failure isolation. Use when a single agent isn't enough and you must coordinate specialized roles over shared MCP tool servers.
---

# Agent Orchestrator

A scaffolding harness for multi-agent systems built on MCP tool servers. The judgment it encodes: orchestration value comes from clear role boundaries and traceable hand-offs — without per-agent traces and failure isolation, a multi-agent system is just a harder-to-debug single agent.

## When to use
- A task decomposes into distinct roles (planner, researcher, coder, critic).
- You're integrating MCP tool servers shared across agents.
- A multi-agent run fails and you can't tell which agent caused it.

## Inputs
- A task spec and the agent roles.
- The MCP tool servers each role may call.

## Workflow
1. Define the agent graph: roles, hand-offs, and shared state.
2. Wire each role to its MCP tool servers with scoped permissions.
3. Add per-agent tracing so each hand-off is inspectable.
4. Run the system and isolate failures to a specific agent/tool.
5. Record a fine-tune decision: which role (if any) should be specialized.

## Outputs & evidence artifact
- `M3/`: the agent graph, MCP server specs, per-agent traces, and a fine-tune decision record.

## Acceptance checks
- [ ] Each agent role and its MCP tool scope is documented.
- [ ] Per-agent traces let you attribute any failure to one agent.
- [ ] A fine-tune decision record is written (even if "none needed").

## Worked example
`Use $agent-orchestrator to build a planner+coder+reviewer system.` → A graph with three roles over a filesystem+git MCP server, traces isolating a reviewer false-positive, and a memo deciding to fine-tune only the reviewer.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — canonical Agent Skills and the SKILL.md spec underpinning role definitions.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP reference servers (Fetch, Filesystem, Git) for the tool layer.
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — role-based multi-agent framework to model orchestration patterns on.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official multi-agent and tool_use recipes.

## Used in
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 3 — Multi-Agent System with MCP + Fine-Tuning
