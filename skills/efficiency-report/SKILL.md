---
name: efficiency-report
description: Assemble quantization/serving/compression results into one reproducible Pareto-frontier efficiency report with a defended deployment recommendation. Use as the efficiency capstone where the report itself is the deliverable.
---

# Efficiency Report

A capstone harness that fuses every efficiency technique into one defensible decision. It encodes the judgment that scattered speedup numbers are worthless until plotted on a quality-vs-cost Pareto frontier and turned into a recommendation you can defend against an SLO and a budget.

## When to use
- You are concluding an efficiency track and must ship one served, benchmarked endpoint.
- You have multiple compressed/quantized variants and need to pick one.
- A stakeholder needs a defended deployment recommendation, not a pile of benchmarks.

## Inputs
- A model with several efficiency variants (FP16, quantized, pruned, distilled).
- A quality eval set.
- A target SLO / cost budget.

## Workflow
1. Benchmark each variant: quality, latency, throughput, and cost, with a fixed method.
2. Plot the quality-vs-cost (or quality-vs-latency) Pareto frontier.
3. Build a cost table normalizing to $/1k requests (or equivalent).
4. Pick the variant on the frontier that meets the SLO at lowest cost; defend it.
5. Document the full benchmarking method so the report reproduces.
6. Commit `capstone/efficiency-report.md` (this is the deliverable).

## Outputs & evidence artifact
- `capstone/efficiency-report.md`: the Pareto chart, the cost table, the defended recommendation, and the full reproducible benchmarking method.

## Acceptance checks
- [ ] Every variant is benchmarked with the same documented method.
- [ ] The recommendation sits on the Pareto frontier and meets the SLO.
- [ ] The method section is complete enough to reproduce the numbers.

## Worked example
`Use $efficiency-report on these GPT variants`. Good output: a frontier with INT8 dominating FP16 at equal quality, a cost table showing 2.3x cheaper $/1k tokens, and a recommendation defending INT8 under the 80ms SLO.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — training/distillation reference for producing the variants.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal stack illustrating efficient serving choices.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for the quality axis of the frontier.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable served-app examples for end-to-end benchmarking.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint
