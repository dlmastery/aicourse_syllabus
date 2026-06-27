---
name: scaling-fit
description: Fit and validate a scaling law from a handful of runs, then recommend a compute-optimal config — fitted exponents plus a held-out prediction. Use when planning a larger training run and you need an evidence-based size/token budget.
---

# Scaling Fit

A scaling-law harness. It encodes the judgment that a compute budget should be allocated from a *validated* scaling fit — exponents that predict a held-out run — not from a single extrapolated guess.

## When to use
- You have a few small runs and must plan a larger, compute-optimal one.
- A scaling claim needs a held-out check before you trust the extrapolation.
- You must choose params-vs-tokens allocation for a budget.

## Inputs
- A set of `(params, tokens, loss)` triples from pilot runs.

## Workflow
1. Collect `(params, tokens, loss)` triples across small runs.
2. Fit a scaling law (loss as a power law in params and tokens).
3. Hold out one run; predict its loss from the fit; check the error.
4. From the fit, derive the compute-optimal params/tokens for the target budget.
5. Commit fitted exponents, the held-out check, and the config recommendation.

## Outputs & evidence artifact
- `evidence/week04-scaling.md` — fitted exponents, a held-out loss prediction (with error), and a compute-optimal config recommendation.

## Acceptance checks
- [ ] The fit is validated on a held-out run, not just fitted.
- [ ] Fitted exponents are reported with the held-out error.
- [ ] A compute-optimal params/tokens config is recommended.

## Worked example
`Use $scaling-fit on my 5 pilot runs.` → "fit predicts the held-out 200M run within 3% loss; for a 1e20 FLOP budget the compute-optimal point is ~410M params / 8.2B tokens — recommend that over the larger-model guess."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — training/post-training stack for the pilot runs.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 4 — Architecture, Hyperparameters, and Scaling Laws
