---
name: emergence-probe
description: Test whether a claimed emergent capability jump is real or a metric artifact by re-plotting under a continuous metric. Use when someone reports a sharp capability-vs-scale jump and you need a verdict on whether emergence survives.
---

# Emergence Probe

A harness for stress-testing emergence claims. It encodes the judgment that many "sharp jumps" in capability-vs-scale are artifacts of discontinuous metrics (exact-match, thresholded accuracy) and vanish under a smooth metric.

## When to use
- A paper or run reports an abrupt capability jump with scale or training steps.
- You need to know whether the jump is real before building on it.
- You want to teach/demonstrate the metric-artifact critique of emergence.

## Inputs
- A capability-vs-scale (or vs-step) result, ideally with per-example outputs.
- Both a discontinuous metric (e.g., exact-match) and a continuous one (e.g., token edit distance / log-prob).

## Workflow
1. Reproduce the curve under the original discontinuous metric.
2. Re-score the same outputs under a continuous metric.
3. Overlay both curves on the same axes.
4. Decide a verdict: does the jump survive the continuous metric or smooth out?
5. Commit `emergence-probe.md` with both curves and the verdict.

## Outputs & evidence artifact
- `emergence-probe.md`: the curve under a discontinuous and a continuous metric, and a verdict on whether emergence survives.

## Acceptance checks
- [ ] The same outputs are scored under both metric types.
- [ ] Both curves are shown on comparable axes.
- [ ] A clear verdict (real / artifact) is stated with the reasoning.

## Worked example
`Use $emergence-probe on this arithmetic-vs-scale result`. Good output: exact-match shows a sharp jump at 7B; token-edit-distance rises smoothly; verdict "metric artifact — capability improves continuously."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for re-scoring outputs under alternative metrics.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — benchmark suites to reproduce scaling curves.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for careful metric design.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF tooling reference for running scaled evaluations.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 6 — Emergence, Scaling & In-Context Learning
