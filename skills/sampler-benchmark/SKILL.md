---
name: sampler-benchmark
description: Compare generative samplers on the quality–compute frontier — FID (and CLIPScore if conditional) vs number-of-function-evaluations — and pick the operating point. Use when choosing a sampler for a diffusion/flow model under a compute budget.
---

# Sampler Benchmark

A frontier-mapping harness for generative samplers. It encodes the judgment that sampler choice is a quality-vs-compute tradeoff: you pick the operating point on the Pareto curve, not the fanciest sampler.

## When to use
- You have a trained diffusion/flow model and several samplers to choose from.
- You need to set the number of sampling steps under a latency budget.
- A sampler claim needs a quality-vs-compute curve to back it.

## Inputs
- Trained generators and a set of samplers/step-counts to compare.
- A quality metric (FID; CLIPScore if conditional).

## Workflow
1. Fix the generator; vary sampler and NFE (function evaluations).
2. Generate samples at each setting.
3. Compute FID (and CLIPScore for conditional generation).
4. Plot quality vs NFE for each sampler.
5. Identify the Pareto frontier and recommend an operating point.
6. Commit the benchmark.

## Outputs & evidence artifact
- `sampler-benchmark.md` — the FID (and CLIPScore) vs NFE curve and the recommended operating point.

## Acceptance checks
- [ ] Quality is plotted against compute (NFE), not reported at one point.
- [ ] Multiple samplers are on the same axis.
- [ ] A specific operating point is recommended with its tradeoff.

## Worked example
`Use $sampler-benchmark on the rectified-flow model.` → "FID plateaus at NFE 8 for the rectified-flow sampler vs NFE 25 for ancestral; pick rectified flow at 8 steps — same FID, 3× cheaper."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal and `/evaluation` recipes for generative metrics.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable generative/multimodal app examples.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval-harness patterns for scored comparisons.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone
