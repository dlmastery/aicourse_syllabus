---
name: modality-router-eval
description: Evaluate a multimodal system's routing/fusion choices — per-modality quality, end-to-end latency, failure cases at modality boundaries — and recommend native-unified vs pipeline. Use when assessing an any-to-any or unified multimodal model against a modular pipeline.
---

# Modality Router Eval

A harness skill that probes where a multimodal system actually breaks: at the seams between modalities. It measures per-modality quality and latency, finds boundary failures, and returns a native-vs-pipeline recommendation grounded in the data.

## When to use
- You are comparing a unified any-to-any model against a modular per-modality pipeline.
- You need to know whether fusion helps or whether modality boundaries are the failure point.
- Latency across modalities matters for the deployment decision.

## Inputs
- A multimodal system (or two: unified and pipeline) and a task set spanning modalities.

## Workflow
1. Define tasks covering each modality and cross-modality transitions.
2. Measure per-modality quality (how good is it on text-only, image-only, etc.).
3. Measure end-to-end latency, including modality conversion/fusion overhead.
4. Catalog failure cases that occur specifically at modality boundaries.
5. Recommend native-unified vs pipeline based on quality/latency/failure tradeoffs.

## Outputs & evidence artifact
- `any2any-eval.md` — per-modality quality, end-to-end latency, modality-boundary failure cases, and the native-vs-pipeline recommendation.

## Acceptance checks
- [ ] Quality is reported per modality, not just aggregate.
- [ ] End-to-end latency includes fusion/conversion overhead.
- [ ] Boundary failure cases are catalogued with examples.
- [ ] A native-vs-pipeline recommendation is justified by the metrics.

## Worked example
`Use $modality-router-eval on my unified model vs a CLIP+LLM pipeline` → unified wins image→text quality (+7) and latency (−40%) but fails on audio boundaries; recommend unified for vision, pipeline for audio.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal recipes for building the task set.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — multimodal pipelines to use as the comparison baseline.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for per-modality scoring.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 9 — Any-to-Any & Unified Multimodal Models
