---
name: optimizer-bench
description: Fairly compares optimizers on one model/dataset with matched seeds and per-optimizer learning-rate sweeps. Use when choosing between SGD/Momentum/RMSProp/Adam (or variants) and you need an apples-to-apples convergence comparison, not a single lucky run.
---

# Optimizer Bench

A harness skill that benchmarks optimizers honestly: same model, same data, matched seeds, and a real learning-rate sweep so each optimizer is shown at its own best. It encodes the judgment that optimizer comparisons are meaningless without per-optimizer LR tuning and controlled seeds.

## When to use
- You must pick an optimizer for a model and want defensible evidence, not folklore.
- You are comparing SGD, Momentum, RMSProp, Adam, or variants built from scratch.
- A single run looks good but you need matched-seed, swept-LR confirmation.
- You want a convergence table and a one-paragraph recommendation for a report.

## Inputs
- A model.
- A dataset.
- A list of optimizers plus a learning-rate grid to sweep.

## Workflow
1. Fix the model, data, and a shared set of random seeds.
2. For each optimizer, sweep the LR grid (everything else held constant).
3. Train under matched budgets (epochs/steps) and log loss/accuracy curves.
4. Pick the best LR per optimizer from the sweep.
5. Build a convergence table comparing optimizers at their best LR.
6. Save loss/convergence plots.
7. Write a one-paragraph recommendation grounded in the table.

## Outputs & evidence artifact
- `evidence/week03-optim/` — convergence table, best-LR per optimizer, plots, and a one-paragraph recommendation.

## Acceptance checks
- [ ] Each optimizer is tuned over the LR grid (best LR reported per optimizer).
- [ ] Runs use matched seeds and a shared training budget.
- [ ] A convergence table plus plots compare optimizers at their best settings.
- [ ] `evidence/week03-optim/` contains the table, plots, and recommendation.

## Worked example
`Use $optimizer-bench to compare SGD, Momentum, RMSProp, Adam on a small MLP / Fashion-MNIST, LR grid 1e-4..1e-1.` Good output: a table showing Adam best at LR 1e-3 reaching 90% val in 8 epochs vs SGD best at 1e-1 needing 20+, matched across 3 seeds, plots saved, and a recommendation to default to Adam with a tuned-SGD fallback for final squeeze.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — disciplined, reproducible eval harness patterns to mirror for fair benchmarking.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal library showing clean, scriptable experiment loops.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official /evaluation recipes for structured comparison and reporting.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch
