---
name: agentic-rl-env
description: Build a verifiable agentic RL environment — tool sandbox, reward, trajectory logger — for training agents with RL. Use when post-training an agent on a task (e.g. SWE-RL) and you need a Gymnasium-compatible env with a real verifier.
---

# Agentic RL Env

A harness for constructing a verifiable environment to train agents with RL. The judgment it encodes: agentic RL lives or dies on reward verifiability and reward density — a sparse, gameable reward produces a useless policy, so you measure sparsity and log every trajectory.

## When to use
- Post-training an agent with RL (SWE-RL, DeepSWE, tool-use RL).
- You need a Gymnasium-compatible env wrapping real tools and a verifier.
- Rewards are sparse and you must quantify how often the agent gets signal.

## Inputs
- A task spec, the tools the agent may call, and a programmatic verifier.

## Workflow
1. Define the action/observation space and wrap the tools in a sandbox.
2. Implement the verifier as the reward function (pass/fail or shaped).
3. Make it Gymnasium-compatible (`reset`/`step`).
4. Add a trajectory logger capturing states, actions, and rewards.
5. Run rollouts; report reward-sparsity stats and resolved-rate.

## Outputs & evidence artifact
- `evidence/week10-agentic/`: the Gymnasium-compatible env, trajectory logs, reward-sparsity stats, and the resolved-rate log.

## Acceptance checks
- [ ] The env is Gymnasium-compatible (`reset`/`step` work).
- [ ] Reward comes from a real verifier, not a heuristic proxy.
- [ ] Reward-sparsity stats and a resolved-rate are logged.

## Worked example
`Use $agentic-rl-env to build a SWE-RL env for bug-fix tasks.` → A Gym env wrapping a repo sandbox + test runner as verifier, trajectory logs, reward sparsity 8% positive, resolved-rate 0.31 at baseline.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — RLHF/GRPO post-training library that consumes the env and trajectories.
- [volcengine/verl](https://github.com/volcengine/verl) — distributed RL infrastructure for scaling agentic RL training.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — agent task/tool/scorer framework useful for building the verifier.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure
