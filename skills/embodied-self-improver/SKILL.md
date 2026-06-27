---
name: embodied-self-improver
description: Run a policy↔world-model co-improvement loop with safety logging and an honest caveat note. Use when building an embodied self-improvement loop and you need an improvement curve plus a statement of what could be going wrong.
---

# Embodied Self Improver

A harness for embodied self-improvement loops where a policy and a learned world model bootstrap each other. It encodes the judgment that an improvement curve is not proof — you must log safety events and write the caveats (reward hacking, sim exploitation) that could explain the gains away.

## When to use
- You are co-training a policy and a world model in a self-improvement loop.
- You see improvement and need to check it is real, not exploitation of the world model.
- You need a safety-logged, reproducible record of the loop.

## Inputs
- An initial policy and a world model (or the means to learn one).
- An environment and a reward/success signal.
- A safety-logging hook for the loop.

## Workflow
1. Run the loop: policy collects experience → world model updates → policy improves against it.
2. Track real-environment success per round (not just world-model-predicted success).
3. Log safety events: out-of-distribution actions, reward spikes, world-model disagreement.
4. Plot the improvement curve; compare model-predicted vs real-environment gains.
5. Write a caveat note (where the gain might be world-model exploitation).
6. Commit the curve, safety log, and caveat note as evidence.

## Outputs & evidence artifact
- `evidence/embodied-self-improve/`: the improvement curve, the safety log, and the caveat note.

## Acceptance checks
- [ ] Real-environment success is tracked separately from world-model-predicted success.
- [ ] Safety events are logged per round.
- [ ] The caveat note names at least one way the curve could be misleading.

## Worked example
`Use $embodied-self-improver on this nav policy`. Good output: a rising real-env success curve, a safety log flagging two reward-spike rounds, and a caveat that the world model over-predicts success in cluttered scenes.

## Related skills in the wild
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RL stack for policy-improvement loops.
- [huggingface/trl](https://github.com/huggingface/trl) — RL/post-training reference for reward optimization and its pitfalls.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for verifying improvement on held-out tasks.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF tooling reference for embodied/agent loops.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 11 — Multimodal, World-Model & Embodied Self-Improvement
