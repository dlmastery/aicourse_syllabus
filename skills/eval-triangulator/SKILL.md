---
name: eval-triangulator
description: Evaluate a generative model along three axes — quantitative metric, qualitative samples, and a downstream probe — then force a "what this hides" statement. Use when a single metric would overstate a small GPT's quality.
---

# Eval Triangulator

A harness for honest evaluation of generative models. It encodes the judgment that no single number captures a generator — you triangulate a metric, a sample sheet, and a downstream probe, and you must write down what the headline number conceals.

## When to use
- You are evaluating a small GPT (or any generator) and a single metric would mislead.
- A good perplexity hides bad samples, or good samples hide a useless representation.
- You need a defensible, multi-angle evaluation with stated limitations.

## Inputs
- The generative model.
- Eval data (held-out text) and a downstream probe task.

## Workflow
1. Quantitative: compute the headline metric (e.g., perplexity) and a comparison baseline.
2. Qualitative: generate a sample sheet and read it for failure patterns.
3. Downstream probe: use the model/representation on a small task and score it.
4. Reconcile the three; write a "what this hides" limitation statement.
5. Commit `evidence/week11-eval/` with metric, sample sheet, probe result, and the limitation note.

## Outputs & evidence artifact
- `evidence/week11-eval/`: a metric + comparison, a sample sheet, a probe result, and a "what this hides" statement.

## Acceptance checks
- [ ] All three axes (metric, samples, probe) are reported.
- [ ] The metric is shown against a baseline, not in isolation.
- [ ] A concrete limitation ("what this hides") is written.

## Worked example
`Use $eval-triangulator on this small GPT`. Good output: perplexity 28 vs 31 baseline, a sample sheet showing repetition loops, a probe showing weak long-range coherence, and a note "perplexity hides degeneration under greedy decoding."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes combining quantitative and qualitative scoring.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for metric + probe scorers over generations.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt evals to serve as comparison baselines.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF tooling reference for running generation evals.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 11 — Scaling, Efficiency, and Honest Evaluation of Your Small GPT
