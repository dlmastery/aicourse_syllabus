---
name: rollout-eval
description: Evaluate a world model's predictive fidelity over time — per-step and cumulative error, an error-vs-horizon curve, and a "trustworthy horizon" estimate. Use when judging how far a learned simulator can be rolled out before it drifts.
---

# Rollout Eval

A fidelity harness for learned world models. It encodes the judgment that a simulator's value is bounded by its trustworthy horizon — the point where compounding error makes its rollouts unreliable.

## When to use
- You trained an IRIS/Genie-style world model and need to know how far to trust it.
- A model-based planner needs a safe rollout length.
- You are comparing world models on long-horizon stability.

## Inputs
- A trained world model and a set of real reference trajectories.

## Workflow
1. Roll the model forward from real initial states.
2. Compute per-step prediction error against the real trajectory.
3. Accumulate error over the horizon (cumulative drift).
4. Plot error vs horizon length.
5. Estimate the trustworthy horizon (where error crosses a usable threshold).
6. Commit the curve and the horizon estimate.

## Outputs & evidence artifact
- `rollout-eval.md` — per-step and cumulative prediction error, the error-vs-horizon curve, and a trustworthy-horizon estimate.

## Acceptance checks
- [ ] Both per-step and cumulative error are reported.
- [ ] The error-vs-horizon curve is present.
- [ ] A trustworthy horizon is stated with its threshold.

## Worked example
`Use $rollout-eval on the Genie-style model.` → "per-step MSE flat to step 12, then compounding; cumulative error crosses the usable threshold at ~15 steps. Trustworthy horizon ≈ 15 steps — plan within it, replan after."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework adaptable to horizon-based scoring.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal and `/evaluation` recipes.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable generative/multimodal app examples.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 10 — World Models: Learning Simulators (IRIS, Genie-style)
