---
name: reward-shaping-auditor
description: Detect reward-shaping exploits in continuous control — break reward into per-term contributions, flag terms that rise while the task fails, and propose a shaping fix. Use when a locomotion/control agent earns reward but doesn't do the task.
---

# Reward Shaping Auditor

A decomposition harness for shaped rewards in continuous control. It encodes the judgment that a shaped reward can be maximized by gaming its terms — so you must attribute reward to terms and catch "reward up, task down" patterns.

## When to use
- A humanoid/locomotion agent has high reward but visibly fails the task.
- A multi-term shaped reward needs per-term attribution.
- You suspect a shaping term (e.g., alive bonus) is being farmed.

## Inputs
- The reward components/terms and a set of trajectory rollouts.
- A task-success signal independent of the shaped reward.

## Workflow
1. Decompose total reward into per-term contributions per rollout.
2. Correlate each term with task success.
3. Flag terms that rise while task success falls (exploit signature).
4. Inspect the offending rollouts to confirm the exploit behavior.
5. Propose a shaping fix (reweight, cap, replace with sparse signal).
6. Commit the reward-term breakdown.

## Outputs & evidence artifact
- `evidence/week12-locomotion/` — per-term reward contribution, exploit flags (reward high but task failed), and a shaping fix.

## Acceptance checks
- [ ] Reward is broken into per-term contributions, not just totals.
- [ ] At least one "reward high, task failed" case is flagged with its rollout.
- [ ] A concrete shaping fix is proposed.

## Worked example
`Use $reward-shaping-auditor on the humanoid run.` → "alive-bonus contributes 70% of reward; agent learns to stand still and farm it; forward-progress term near zero. Fix: cap alive bonus, increase progress weight 3×."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — RL post-training stacks for reward design.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for objective-vs-proxy scoring.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt safety/red-team evals.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 12 — Humanoid Locomotion & Multi-Agent RL
