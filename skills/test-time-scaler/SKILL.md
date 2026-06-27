---
name: test-time-scaler
description: Finds the accuracy-per-compute operating point by comparing parallel sampling (vote/best-of-N) against longer chains. Use when deciding how much test-time compute to spend and how to spend it (width vs depth).
---

# Test Time Scaler

A harness skill that maps accuracy against test-time compute for two strategies — sampling more answers vs reasoning longer — and finds the knee. It encodes the judgment that test-time compute has diminishing returns and the cheapest good budget is an empirical question.

## When to use
- You must choose between best-of-N sampling and longer chains-of-thought.
- You need a compute budget that maximizes accuracy per dollar/token.
- A reasoning deployment is over- or under-spending compute.

## Inputs
- A model.
- An eval set with checkable answers.
- An aggregation method (majority vote / best-of-N with a verifier).

## Workflow
1. Sweep N (parallel samples) and plot accuracy vs N and vs total tokens.
2. Sweep chain length / max-tokens and plot the same axes.
3. Overlay both curves on a shared compute axis.
4. Locate the knee where marginal accuracy per token flattens.
5. Recommend a budget (width and depth) with its cost.

## Outputs & evidence artifact
- `evidence/week02-scaling/curve.md` — accuracy-vs-N (and vs tokens) curves, the knee, and a recommended budget with cost.

## Acceptance checks
- [ ] Both parallel and longer-chain strategies are plotted on a shared compute axis.
- [ ] The knee is identified explicitly.
- [ ] A recommended budget with its cost is stated.

## Worked example
`Use test-time-scaler on GSM8K with majority vote` → accuracy saturates at N=16; longer chains add little beyond 1k tokens; recommend N=8 majority vote.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for scaling curves.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — reasoning benchmarks to scale on.
- [volcengine/verl](https://github.com/volcengine/verl) — RL/reasoning post-training reference.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for compute budgeting.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve
