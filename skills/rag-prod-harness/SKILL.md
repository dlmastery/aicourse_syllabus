---
name: rag-prod-harness
description: Makes a RAG system production-safe and cost-bounded by measuring SLA latency/cost, caching, and guardrails, then issuing a deploy/no-deploy call. Use when taking a working RAG prototype toward production serving.
---

# RAG Prod Harness

The gate between a demo and a deployed service: measure what it costs and how fast it answers under real traffic, prove the guardrails actually fire, and make an explicit deploy/no-deploy call. The judgment it encodes is that production-readiness is a measured claim — p95, cost/query, and guardrail pass rates — not a feeling.

## When to use
- A retriever+generator works and you need to decide if it can be served for real.
- You have an SLA target (latency and/or cost) that must be verified before launch.
- Security review demands evidence that injection, citation, and PII guardrails work.

## Inputs
- A working retriever + generator.
- Traffic samples representative of real queries.
- An SLA target (p95 latency and/or cost per query).

## Workflow
1. Replay the traffic samples through the system under realistic conditions.
2. Measure p95 latency and cost per query against the SLA target.
3. Enable caching and measure the cache hit-rate.
4. Run guardrail probes and record pass rates: prompt-injection blocked, citation enforced, PII redacted.
5. Compare results to the SLA and guardrail thresholds.
6. Issue an explicit deploy / no-deploy call with the numbers that justify it.

## Outputs & evidence artifact
- `evidence/week09-production/sla-and-safety.md` with p95 latency, cost/query, cache hit-rate, guardrail pass rates (injection blocked, citation enforced, PII redacted), and the deploy/no-deploy call.

## Acceptance checks
- [ ] p95 latency and cost/query measured against the stated SLA.
- [ ] Cache hit-rate reported.
- [ ] All three guardrail pass rates measured with real probes.
- [ ] A clear deploy/no-deploy decision is recorded with its justification.

## Worked example
`Use $rag-prod-harness with traffic_sample.jsonl and SLA p95<2s, cost<$0.01`. Good output: "p95 1.6s, cost $0.007/q, cache hit 41%. Guardrails: injection blocked 100%, citation enforced 98%, PII redacted 100%. Decision: DEPLOY — within SLA, citation gap is logged-only and non-blocking."

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official Fetch/Filesystem servers as bounded, auditable retrieval tools.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — production-shaped RAG apps with caching and serving patterns.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for guardrails and observability.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails
