---
name: rollout-harness
description: A seeded, vectorizable environment-interaction loop that yields trajectories, return stats, and a deterministic-replay check. Use when you need reproducible RL rollouts reused across the whole course's RL work.
---

# Rollout Harness

A reusable RL interaction loop. It encodes the judgment that RL experiments are only comparable when rollouts are seeded and deterministically replayable — same seed must give the same return.

## When to use
- You are starting any RL experiment (MC, TD, Q-learning, SARSA) and need a clean loop.
- Results aren't reproducible and you need seed-stable rollouts.
- You want one harness to reuse across weeks instead of re-implementing.

## Inputs
- An environment id, a policy function, the number of episodes, and a seed.

## Workflow
1. Seed the environment, policy, and any RNGs.
2. Run `n_episodes`, collecting `(s, a, r, s', done)` transitions.
3. Aggregate return statistics (mean/std/min/max).
4. Re-run with the same seed and confirm identical returns (replay check).
5. Support vectorized envs for throughput.
6. Commit the seed-stability table.

## Outputs & evidence artifact
- `evidence/week02-rollout/` — trajectories `(s,a,r,s',done)`, return stats, and a seed-stability table (same seed → same return).

## Acceptance checks
- [ ] Same seed reproduces identical returns (replay check passes).
- [ ] Trajectories include all of `(s,a,r,s',done)`.
- [ ] Return statistics are reported across episodes.

## Worked example
`Use $rollout-harness on CartPole with a random policy.` → "100 episodes, mean return 22.3±9.1; seed 0 re-run returns byte-identical; vectorized 16 envs at 12k steps/s."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — RL stacks with rollout/sampling loops.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — agent/eval harness with reproducible runs.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA
