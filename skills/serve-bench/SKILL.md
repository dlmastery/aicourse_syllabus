---
name: serve-bench
description: Benchmark any serving stack for latency, throughput, and cost (p50/p95/p99, tokens/sec, $/1k requests) and recommend a topology. Use when standing up FastAPI/vLLM/Triton serving and you need numbers to size and choose it.
---

# Serve Bench

A serving-benchmark harness. It encodes the judgment that a serving topology is chosen on measured latency/throughput/cost under a realistic load profile — not on defaults or vibes.

## When to use
- You are serving a model with FastAPI/vLLM/Triton and need sizing numbers.
- A latency or cost target must be verified before launch.
- You are choosing between serving topologies.

## Inputs
- A model endpoint and a representative load profile (concurrency, request shape).

## Workflow
1. Define the load profile (concurrency, input/output sizes, arrival pattern).
2. Drive load and record p50/p95/p99 latency.
3. Record throughput (tokens/sec for LLMs; requests/sec otherwise).
4. Compute cost ($/1k requests) from instance price and throughput.
5. Compare topologies and recommend one against the SLO/budget.
6. Commit the benchmark table.

## Outputs & evidence artifact
- `evidence/week05-serving/bench-table.md` — p50/p95/p99, tokens/sec (LLM), $/1k requests, and a topology recommendation.

## Acceptance checks
- [ ] Tail latency (p95/p99) is reported, not just mean.
- [ ] Throughput and cost-per-1k are both computed.
- [ ] A topology recommendation is tied to the SLO/budget.

## Worked example
`Use $serve-bench on the vLLM endpoint.` → "at 32 concurrency: p95 620ms, 4.1k tok/s, $0.18/1k req; FastAPI-only baseline was 3× slower. Recommend vLLM with continuous batching for this SLO."

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP servers; clean service patterns for load harnesses.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable serving/app templates.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI for automating benchmark runs.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 5 — Model Serving I: FastAPI, vLLM & Triton
