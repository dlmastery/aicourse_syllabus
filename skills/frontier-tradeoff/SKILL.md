---
name: frontier-tradeoff
description: Characterize a quality–cost (or quality–diversity) tradeoff rigorously, with a curve, the failure mode each regime hits, and a recommendation by regime. Use when comparing two methods/configs that trade one axis for another.
---

# Frontier Tradeoff

A harness for studying tradeoffs instead of declaring winners. It encodes the judgment that "method A beats B" is usually false — A wins in one regime and B in another, and the useful output is the curve plus a per-regime recommendation.

## When to use
- You are comparing two methods/configs that trade quality against cost, length, or diversity.
- A single "winner" claim hides regime-dependent behavior.
- You need guidance like "use A under tight budgets, B otherwise."

## Inputs
- Two methods or configurations.
- A way to vary the cost axis (samples, length, iterations) and measure quality.

## Workflow
1. Sweep the cost axis for each method; measure quality at each point.
2. Plot the tradeoff curve (quality vs cost/length/iteration) for both.
3. Identify the failure mode each method hits at its limit.
4. Recommend by regime: which method wins where, and why.
5. Commit `frontier-tradeoff.md` with the curve, failure modes, and recommendation.

## Outputs & evidence artifact
- `frontier-tradeoff.md`: a tradeoff curve, the failure mode each method hits, and a recommendation by regime.

## Acceptance checks
- [ ] The curve sweeps the cost axis for both methods (not single points).
- [ ] Each method's failure mode at its limit is named.
- [ ] The recommendation is regime-specific, not a blanket winner.

## Worked example
`Use $frontier-tradeoff on self-consistency vs single-pass`. Good output: a quality-vs-samples curve, failure modes (single-pass plateaus low; self-consistency saturates and wastes tokens), and "single-pass under 1k-token budgets, self-consistency above."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for sweeping configs and scoring quality.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for running parameter sweeps with scorers.
- [huggingface/trl](https://github.com/huggingface/trl) — post-training reference for quality-vs-compute tradeoffs.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable apps to instrument for cost/quality curves.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 10 — Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier
