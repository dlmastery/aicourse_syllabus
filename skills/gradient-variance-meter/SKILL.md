---
name: gradient-variance-meter
description: Quantify policy-gradient variance and the effect of variance-reduction tricks (baseline, GAE, advantage normalization), then recommend the next reduction to apply. Use when a REINFORCE/A2C run is noisy and you need evidence for which fix to add next.
---

# Gradient Variance Meter

A harness skill for policy-gradient RL: it measures how noisy your gradient estimator is and shows, empirically, how much each variance-reduction technique buys you — so you add complexity only when the data justifies it.

## When to use
- A REINFORCE/A2C run learns slowly or unstably and you suspect estimator variance.
- You want to justify adding a baseline / GAE / normalization rather than cargo-culting it.
- You are comparing variance-reduction options under a fixed budget.

## Inputs
- Per-step log-probs (`logp`) and returns or advantages from a batch of rollouts.
- The current estimator configuration (baseline on/off, GAE lambda, normalization on/off).

## Workflow
1. Collect a batch of trajectories under the current policy.
2. Compute the policy-gradient estimate per trajectory; measure the variance of the gradient norm across the batch.
3. Toggle each variance-reduction lever (no-baseline → value baseline → GAE → advantage normalization) and re-measure.
4. Tabulate variance per configuration and the sample-efficiency implication.
5. Recommend the single next reduction with the best variance-per-complexity payoff.

## Outputs & evidence artifact
- `evidence/week04-variance.md` — gradient-norm variance per configuration, a short table, and the recommended next reduction.

## Acceptance checks
- [ ] Variance is measured over a fixed, stated batch size and seed.
- [ ] At least two variance-reduction settings are compared head-to-head.
- [ ] The recommendation follows from the numbers, not intuition.
- [ ] The estimator/config differences are documented (so the comparison is fair).

## Worked example
`Use $gradient-variance-meter on my CartPole REINFORCE batch` → variance 12.3 (no baseline) → 4.1 (value baseline) → 1.7 (GAE). Recommendation: adopt GAE; normalization adds little here.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — production policy-gradient/RLHF implementations to compare variance behavior against.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RL post-training; reference for advantage estimation at scale.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — evaluation harness patterns for measuring agent/policy behavior.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C
