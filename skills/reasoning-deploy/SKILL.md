---
name: reasoning-deploy
description: Deploys reasoning under a compute budget with adaptive effort, a faithfulness check, and a measured SLA. Use when putting a reasoning model in production and you must trade accuracy against latency and cost-per-query with hard numbers.
---

# Reasoning Deploy

A harness skill for shipping a reasoning model that thinks harder only when it needs to: difficulty-aware effort, a faithfulness guard, and an SLA backed by p95 latency and cost. It encodes the judgment that flat max-effort reasoning wastes money and that a deploy decision must rest on accuracy-per-token, not raw accuracy.

## When to use
- You are putting a reasoning model behind an SLA and need to bound latency and cost.
- Some queries are easy and some hard, and uniform max-effort is too slow or expensive.
- You need proof that adaptive effort beats flat effort on accuracy-per-token.
- A stakeholder needs a go/no-go deploy decision with p95 latency and cost/query.

## Inputs
- A reasoning model.
- A difficulty signal (router, classifier, or heuristic) to set effort.
- A target SLA (latency and/or cost-per-query budget).

## Workflow
1. Define the SLA: p95 latency ceiling and cost/query budget.
2. Wire the difficulty signal to set reasoning effort (e.g., low/med/high token budgets).
3. Run an adaptive-effort policy and a flat-effort baseline on the same traffic.
4. Compute accuracy-per-token for both; confirm adaptive wins or explain why not.
5. Run a faithfulness probe to ensure shortened reasoning still drives correct answers.
6. Measure p95 latency and cost/query under the chosen policy.
7. Write the adaptive-vs-flat result, faithfulness probe, SLA numbers, and a deploy decision.

## Outputs & evidence artifact
- `evidence/week09-deploy/sla.md` — adaptive-vs-flat accuracy-per-token, faithfulness-probe result, p95 latency + cost/query, and the deploy decision.

## Acceptance checks
- [ ] Adaptive effort is compared to a flat-effort baseline on accuracy-per-token.
- [ ] A faithfulness probe confirms reduced effort does not silently break reasoning.
- [ ] p95 latency and cost/query are measured against the stated SLA.
- [ ] `evidence/week09-deploy/sla.md` records an explicit deploy / no-deploy decision.

## Worked example
`Use $reasoning-deploy to ship a math-tutor model under a 4s p95 / $0.01-per-query SLA.` Good output: adaptive routing hits 73% accuracy at 1.9k mean tokens vs flat-high at 75% / 6.1k tokens (2.7x cheaper for 2 pts), p95 3.4s, $0.008/query, faithfulness intact — decision: deploy adaptive.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal agent library for building the routing/effort harness around a model.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP servers for tools the deployed reasoner may call.
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — role-based multi-agent framework for production-style orchestration.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official observability and evaluation recipes for production reasoning.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment
