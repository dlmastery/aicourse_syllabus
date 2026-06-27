---
name: sim-fidelity-eval
description: Assesses whether a learned world model is faithful enough to plan or train a policy inside it, and reports the trustworthy planning horizon. Use when you have a learned simulator and need to know how far ahead it can be trusted before it gets exploited.
---

# Sim Fidelity Eval

A harness skill that measures how a learned simulator degrades with rollout horizon and whether a policy is exploiting model error. It encodes the judgment that a world model is only useful up to the horizon where imagined return tracks real return.

## When to use
- You trained a world model and want to plan or do model-based RL inside it.
- A policy looks great in imagination but you suspect it's gaming simulator flaws.
- You need a defensible "trust up to H steps" number for model-based rollouts.

## Inputs
- A learned world model / simulator.
- A policy to evaluate inside it.

## Workflow
1. Roll out from held-out start states; measure prediction error vs horizon (1, 2, 5, 10, ...).
2. Compare imagined return to real-environment return for the same policy (the exploitation gap).
3. Identify the horizon where error or the return gap crosses a tolerance.
4. Recommend a trustworthy planning horizon and flag any exploited failure modes.

## Outputs & evidence artifact
- `sim-fidelity.md` — rollout fidelity vs horizon, the imagined-vs-real return gap, and a trustworthy-horizon recommendation.

## Acceptance checks
- [ ] Fidelity is reported as a curve over horizon, not a single number.
- [ ] The imagined-vs-real return gap is measured on held-out states.
- [ ] A specific trustworthy horizon (with tolerance) is recommended.

## Worked example
`Use sim-fidelity-eval on the Dreamer world model + PPO policy` → error stays low to H=6 then diverges; imagined return overstates real by 40% at H=12; recommend planning horizon ≤ 5.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scorer framework for structured fidelity reports.
- [volcengine/verl](https://github.com/volcengine/verl) — RL post-training stack (model-based + policy eval reference).
- [huggingface/trl](https://github.com/huggingface/trl) — policy training/eval loops.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` patterns for horizon/rollout reporting.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 9 — World Models & Simulation for Reasoning and Control
