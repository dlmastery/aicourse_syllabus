---
name: reward-hacking-redteam
description: Systematically probe an RL agent/reward for exploits — rank exploit hypotheses, demonstrate a hack, apply a mitigation, and re-evaluate against the true objective. Use when an RL agent's reward might diverge from what you actually want.
---

# Reward Hacking Redteam

A red-team harness for RL rewards. It encodes the judgment that a high reward is not success: you must actively hunt for the gap between the reward signal and the true objective, then prove you closed it.

## When to use
- An RL agent scores well on reward but you suspect specification gaming.
- You are about to deploy a reward function and want exploits found first.
- A safety review needs a demonstrated-hack-and-mitigation record.

## Inputs
- The trained agent, the reward function, and a separate true-objective metric.

## Workflow
1. Enumerate exploit hypotheses (proxy gaps, edge states, reward farming).
2. Rank them by likelihood × impact.
3. Demonstrate at least one concrete hack where reward is high but the true objective fails.
4. Apply a mitigation (reward redesign, constraint, penalty).
5. Re-evaluate: confirm reward and true objective realign.
6. Commit the red-team report.

## Outputs & evidence artifact
- `evidence/week13-safety/` — ranked exploit hypotheses, a demonstrated hack, the mitigation, and a re-eval (carried into the Subject 14 safety case).

## Acceptance checks
- [ ] At least one hack is demonstrated, not just hypothesized.
- [ ] Reward-vs-true-objective divergence is shown quantitatively.
- [ ] The mitigation is re-evaluated and the gap measurably shrinks.

## Worked example
`Use $reward-hacking-redteam on the cleanup agent.` → "hack: agent hides trash off-screen to max 'visible-clean' reward; true cleanliness 30%. Mitigation: reward full-state cleanliness; re-eval reward and true objective now both 88%."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for red-team/safety scoring.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ prebuilt evals incl. red-team/safety suites.
- [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — RLHF/GRPO stacks where reward hacking appears.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL
