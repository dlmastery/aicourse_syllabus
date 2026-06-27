---
name: scientific-repro
description: Reproduce a scientific-ML result with full provenance and an honest delta — reproduced metric, paper number, the gap, seeds/hardware, and a matches/does-not-match verdict. Use when validating an AlphaFold-style or geometric-DL result before building on it.
---

# Scientific Repro

A reproduction harness for scientific ML. It encodes the judgment that a published number is a target, not a fact, until you reproduce it with recorded provenance and report the honest delta.

## When to use
- You must reproduce a released scientific-ML model's headline metric.
- A result will be built upon and needs an independent confirmation.
- You need a provenance-complete repro record.

## Inputs
- A released model (or its code/weights) and a ground-truth evaluation set.
- The paper's reported metric for that setting.

## Workflow
1. Pin the environment, seeds, and hardware.
2. Run the released model on the ground-truth set.
3. Record the reproduced metric and the paper's reported number.
4. Compute the delta and check it against reported variance.
5. Render a matches / does-not-match verdict with provenance.
6. Commit the repro record.

## Outputs & evidence artifact
- `repro.md` — reproduced metric, the paper's number, the delta, seeds/hardware, and a matches/does-not-match verdict.

## Acceptance checks
- [ ] Seeds and hardware are recorded for the reproduction.
- [ ] The delta vs the paper number is stated honestly.
- [ ] A clear matches/does-not-match verdict is given.

## Worked example
`Use $scientific-repro on the structure-prediction model.` → "reproduced TM-score 0.87 vs paper 0.89, delta -0.02 within reported seed variance; seeds + A100 recorded. Verdict: matches."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for provenance-complete scoring.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for honest deltas.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology for chasing reproduction gaps.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL
