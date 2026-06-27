---
name: value-debugger
description: Diagnoses value-based RL divergence by identifying which deadly-triad symptom is firing (exploding Q, overestimation, replay staleness) and naming the cheapest fix. Use when a DQN-family agent's Q-values or returns blow up and you need a targeted fix.
---

# Value Debugger

A harness skill that reads Q-value, loss, and return logs to pin which deadly-triad failure (function approximation + bootstrapping + off-policy data) is causing divergence. It encodes the judgment that value-based RL fails in a few characteristic ways, each with a known cheapest remedy.

## When to use
- A DQN/Double/Dueling/Rainbow agent diverges or stalls.
- Q-values explode or returns collapse mid-training.
- You need to choose one fix instead of changing everything.

## Inputs
- Q-value logs, the loss curve, and the return curve.

## Workflow
1. Plot Q-values, loss, and return on aligned time axes.
2. Match the pattern to a symptom: exploding Q, systematic overestimation, or replay staleness.
3. Confirm with a quick check (target-network update rate, replay age, max-Q bias).
4. Recommend the cheapest fix (target net sync, Double-DQN, smaller LR, fresher replay).
5. Annotate a diverging-vs-stable Q-value plot with the call.

## Outputs & evidence artifact
- An annotated diverging-vs-stable Q-value plot with the firing symptom and the recommended cheapest fix.

## Acceptance checks
- [ ] The specific deadly-triad symptom is named, not just "diverged."
- [ ] The diagnosis is supported by aligned Q/loss/return evidence.
- [ ] A single cheapest fix is recommended.

## Worked example
`Use value-debugger on the diverging DQN` → Q grows unbounded while return flat; symptom: overestimation + stale target net; fix: switch to Double-DQN and sync target every 1k steps.

## Related skills in the wild
- [volcengine/verl](https://github.com/volcengine/verl) — RL training stack and debugging reference.
- [huggingface/trl](https://github.com/huggingface/trl) — RL/policy-optimization training loops.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/logging patterns for agent runs.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow
