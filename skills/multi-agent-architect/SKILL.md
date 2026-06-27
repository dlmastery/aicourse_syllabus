---
name: multi-agent-architect
description: Decide the agent topology (single / orchestrator-workers / debate) and the hand-off contracts before coding — each agent's role, tools, I/O contract, the merge/verify step, and a cost estimate. Use when designing a multi-agent system and you want the architecture justified before implementation.
---

# Multi-Agent Architect

A harness skill that resists the urge to start wiring agents: it forces a topology decision and explicit hand-off contracts up front, so the system has defined roles, interfaces, a verification step, and a cost estimate before any code exists.

## When to use
- A task has separable sub-skills or needs independent verification.
- You are choosing between a single agent, orchestrator-workers, or a debate setup.
- You need to estimate cost/latency of a multi-agent design before building it.

## Inputs
- The task broken into sub-skills, the parallelism available, and whether independent verification is needed.
- The candidate tools each role would use.

## Workflow
1. Decompose the task into sub-skills and note dependencies/parallelism.
2. Choose a topology (single / orchestrator-workers / debate) and justify it.
3. For each agent, specify role, tools, and the I/O contract (inputs, outputs, schema).
4. Define the merge/verify step (how outputs are combined and checked).
5. Estimate cost (tokens/calls) and latency for the design.

## Outputs & evidence artifact
- `evidence/week07-topology.md` — the chosen topology, each agent's role + tools + I/O contract, the merge/verify step, and a cost estimate.

## Acceptance checks
- [ ] A topology is chosen and justified against alternatives.
- [ ] Each agent has an explicit I/O contract, not just a role label.
- [ ] A merge/verify step is defined.
- [ ] A cost/latency estimate is included.

## Worked example
`Use $multi-agent-architect for a research-and-write task` → orchestrator + 3 parallel researcher workers + 1 writer; contracts specify JSON findings; verify = orchestrator cross-checks citations; est. ~40k tokens, ~30s.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md authority and `example-skills` for agent patterns.
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — role-based multi-agent framework (orchestrator/workers).
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent library; tool/topology reference.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — tools-as-MCP for the agents' I/O contracts.
- [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) — curated multi-agent systems for design reference.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate
