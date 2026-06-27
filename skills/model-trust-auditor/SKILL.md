---
name: model-trust-auditor
description: Measure how far into the future a learned world model can be trusted by reporting per-horizon reconstruction/return error and a "max safe imagination horizon." Use when doing model-based RL (Dreamer/IRIS/MCTS) and you must bound how many imagined steps are reliable.
---

# Model Trust Auditor

A harness skill for model-based RL: a learned world model is only useful as far as its rollouts stay accurate. This skill measures error as a function of imagination horizon and returns the horizon beyond which planning on the model is unsafe.

## When to use
- You train a world model and plan/imagine rollouts on it (Dreamer, IRIS, MCTS).
- Long imagined rollouts drift and you need a principled cutoff.
- You must justify the planning horizon used by the agent.

## Inputs
- The learned world model and a set of real environment rollouts for comparison.

## Workflow
1. From matched start states, roll out both the real environment and the model.
2. At each horizon h, measure reconstruction error (state/observation) and return error.
3. Plot error vs horizon.
4. Pick the max safe imagination horizon: the largest h where error stays under a stated threshold.
5. Recommend the planning horizon accordingly.

## Outputs & evidence artifact
- `evidence/week07-model-trust.md` — per-horizon reconstruction/return error curves and the "max safe imagination horizon" with its threshold.

## Acceptance checks
- [ ] Error is reported per horizon, not just averaged.
- [ ] Both reconstruction and return error are measured.
- [ ] A max safe horizon is derived from a stated threshold.
- [ ] The recommended planning horizon follows from the data.

## Worked example
`Use $model-trust-auditor on my IRIS world model` → return error stays <5% to horizon 12, then diverges; max safe imagination horizon = 12 steps. Recommend planning ≤12.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — RL training infrastructure for the policy that uses the model.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RL for larger model-based experiments.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval scaffolding for horizon-wise error measurement.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 7 — Model-Based RL, MCTS & World Models (IRIS)
