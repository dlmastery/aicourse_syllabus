---
name: recursion-profiler
description: Compare looped/recursive vs deep feed-forward models at matched compute and parameters on reasoning tasks, and produce the accuracy-vs-depth plot. Use when deciding whether iterative recurrence actually buys reasoning ability.
---

# Recursion Profiler

A controlled-comparison harness for tiny recursive models. It encodes the judgment that "recurrence helps reasoning" must be shown at *matched* compute and parameters, otherwise you are just measuring more FLOPs.

## When to use
- You are evaluating a looped/iterative architecture against a depth-matched baseline.
- A recursion claim needs evidence that isn't confounded by extra compute or params.
- You want a single plot that settles whether iteration earns its cost.

## Inputs
- A recursive/looped model and a depth-equivalent feed-forward model, plus a reasoning task set.
- A fixed compute/parameter budget to hold constant.

## Workflow
1. Match the two models on parameter count and per-token compute.
2. Pick reasoning tasks with a clean accuracy signal.
3. Sweep recurrence steps (or depth) and record accuracy at each.
4. Plot accuracy vs effective depth/compute for both models on one axis.
5. Read off whether recurrence beats depth at matched budget; commit the plot.

## Outputs & evidence artifact
- `evidence/recursion-profile.md` — the matched-budget accuracy-vs-depth plot plus the kept/cut verdict.

## Acceptance checks
- [ ] Params and compute are matched and the matching is documented.
- [ ] The plot shows both architectures on the same axis.
- [ ] A verdict states whether recurrence wins at fixed budget.

## Worked example
`Use $recursion-profiler on a 6-step looped TRM vs a 6-layer baseline.` → a plot showing the looped model matching the deep model at half the params on ARC-style tasks, with the verdict "recurrence earns its compute up to 6 steps, then plateaus."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — reasoning post-training stacks for the reasoning-task evaluations.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval harness for matched-budget reasoning benchmarks.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for fair comparisons.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 10 — Tiny Recursive Models & Iterative Architectures
