---
name: agent-ops
description: Make a multi-step agent observable, budgeted, safety-gated, and trajectory-evaluated before production. Use when an agent works in dev but lacks tracing, loop guards, injection defenses, or a trajectory eval to gate deployment.
---

# Agent Ops

An operations harness that wraps a working agent with the production essentials: per-step tracing, budget/loop guards, a prompt-injection test, and a trajectory eval. The judgment it encodes: agent behavior in production is invisible and unbounded unless you instrument it — and a single-turn eval can't catch trajectory failures.

## When to use
- Promoting a multi-step agent from dev toward production.
- An agent occasionally loops, overspends, or follows injected instructions.
- You need a trajectory-level score, not just final-answer accuracy.

## Inputs
- The agent graph, its tool list, and a risk policy.

## Workflow
1. Add per-step traces capturing inputs, tool calls, and decisions.
2. Set budget and loop guards (max steps, max cost, repetition detection).
3. Run an injection test set against the agent's ingested content.
4. Score full trajectories (not just outputs) against expected behavior.
5. Wire the trajectory score as a deployment gate.

## Outputs & evidence artifact
- `evidence/week11-agentops/trajectory-eval-and-redteam.md`: per-step traces, budget/loop guard config, an injection test report, and a trajectory eval score.

## Acceptance checks
- [ ] Every tool call is traced and inspectable.
- [ ] Budget and loop guards demonstrably stop a runaway run.
- [ ] An injection test report and a trajectory score both exist.

## Worked example
`Use $agent-ops to production-harden our research agent.` → Tracing on all calls, 20-step/$0.50 budget cap, injection suite (3/30 succeed → 0/30 after defenses), trajectory eval 0.88, gate at 0.85.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — agent eval framework for scoring trajectories and tool use.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability and agent recipes for tracing and budgeting.
- [anthropics/skills](https://github.com/anthropics/skills) — Agent Skills patterns for guardrails and structured tool use.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 11 — AgentOps: Operating Multi-Step Agent Systems in Production
