---
name: agentops-instrumenter
description: Make any agent observable, budgeted, and gated — tracing, cost/latency budgets, guardrails, and HITL triggers. Use when an agent runs unsupervised and you have no visibility into its calls, cost, or guardrail breaches.
---

# AgentOps Instrumenter

An instrumentation harness that adds the AgentOps essentials to an existing agent. The judgment it encodes: you can't operate what you can't see — tracing, a per-run budget, guardrails, and human-in-the-loop triggers are the minimum before an agent runs without a babysitter.

## When to use
- An agent runs in the background with no tracing or cost ceiling.
- You need guardrails and an allow-list around tool calls.
- You must decide which conditions trigger human-in-the-loop.

## Inputs
- The agent and its risk profile (what failures cost).

## Workflow
1. Add tracing to every model and tool call.
2. Set a per-run cost/latency budget with hard stops.
3. Configure guardrails and a tool allow-list.
4. Define HITL triggers (high-cost, low-confidence, irreversible actions).
5. Choose the dashboard panels to watch in production.

## Outputs & evidence artifact
- `evidence/week10-agentops/`: tracing on all calls, the per-run cost/latency budget, guardrail + allow-list config, HITL triggers, and the dashboard panels.

## Acceptance checks
- [ ] Every model/tool call is traced.
- [ ] A per-run budget with a hard stop is enforced.
- [ ] HITL triggers and dashboard panels are specified.

## Worked example
`Use $agentops-instrumenter to instrument a data-cleanup agent.` → Traces on all calls, $0.40/run cap, allow-list of 4 tools, HITL on any delete >100 rows, dashboard panels for cost, latency, and guardrail hits.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability, cost, and guardrail recipes for LLM/agent ops.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scoring framework for the gating side of instrumentation.
- [anthropics/skills](https://github.com/anthropics/skills) — Agent Skills guardrail and structured-tool patterns.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop
