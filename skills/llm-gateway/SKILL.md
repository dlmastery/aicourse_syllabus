---
name: llm-gateway
description: Front an LLM application with routing, fallback, budgets, and semantic caching, with cost and latency metered before/after. Use when building LLMOps infrastructure and you need a measured savings report, not just a proxy.
---

# LLM Gateway

A harness skill that puts a control plane in front of model calls: it routes by policy, falls back on failure, enforces budgets, caches semantically, and — critically — proves the cost/latency win with before-vs-after numbers.

## When to use
- An LLM app calls one or more providers directly and you need routing/fallback/budget control.
- Cost or latency is a problem and you must show caching/routing actually helped.
- You need a dashboard and a savings report for stakeholders.

## Inputs
- Provider API keys and a routing/budget policy (which model for which request class, spend caps).
- A representative request trace to measure against.

## Workflow
1. Stand up the gateway with provider routing and a fallback chain.
2. Add budget enforcement (per-key/per-route spend caps).
3. Add semantic caching (embedding-similarity cache for repeated/near-duplicate queries).
4. Instrument cost and latency per request.
5. Replay the request trace before and after; compute the savings.

## Outputs & evidence artifact
- `evidence/week07-llmops/cost-before-after.md` — the gateway config, cache policy, the cost/latency dashboard, and the savings report.

## Acceptance checks
- [ ] Routing and a fallback path are both configured and tested.
- [ ] Semantic caching is in place with a measured hit rate.
- [ ] Budget enforcement is demonstrated (a capped request is blocked/downgraded).
- [ ] Cost/latency are reported before vs after on the same trace.

## Worked example
`Use $llm-gateway to front my support bot` → cheap model for FAQ, premium for escalations; cache hit rate 32%; replay shows 41% cost reduction and p95 latency −22% with no quality regression.

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — reference servers/patterns for tool and provider integration.
- [ComposioHQ/composio](https://github.com/ComposioHQ/composio) — managed authenticated tool/provider layer for agents.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability and cost/caching recipes.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 7 — LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control
