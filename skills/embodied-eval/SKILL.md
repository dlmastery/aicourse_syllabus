---
name: embodied-eval
description: Run standardized closed-loop evaluation for embodied policies — success rate, robustness under randomization, and a failure-mode taxonomy. Use when evaluating a VLA/robotics policy in sim and you need robustness curves, not a single number.
---

# Embodied Eval

A harness for evaluating embodied (VLA/robotics) policies honestly. It encodes the judgment that a single sim success rate hides brittleness — you must sweep domain randomization to get a robustness curve and taxonomize how the policy fails.

## When to use
- You trained a VLA or control policy and need a standardized eval.
- A policy looks good at nominal settings but you suspect it is fragile.
- You need a failure taxonomy to guide the next iteration.

## Inputs
- The policy under test.
- A simulation environment with controllable parameters.
- A perturbation/domain-randomization suite.

## Workflow
1. Measure success rate at nominal settings over enough episodes for a stable estimate.
2. Sweep domain randomization (lighting, friction, object pose); record success vs perturbation.
3. Plot the robustness curve and note where success collapses.
4. Cluster failures into a taxonomy (perception, grasp, planning, recovery).
5. Commit `evidence/week11-vla/` with success rate, robustness curves, and the taxonomy.

## Outputs & evidence artifact
- `evidence/week11-vla/`: success rate, a robustness curve under randomization, and a failure-mode taxonomy.

## Acceptance checks
- [ ] Success rate is reported over enough episodes to be stable.
- [ ] A robustness curve sweeps at least one randomization axis.
- [ ] Failures are grouped into a named taxonomy, not just counted.

## Worked example
`Use $embodied-eval on this SmolVLA pick policy`. Good output: 0.82 nominal success, a curve dropping to 0.4 under high pose noise, and a taxonomy showing grasp failures dominate under perturbation.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF agent/tooling reference relevant to VLA/embodied stacks.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for building custom scorers and eval loops.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — agentic eval suites adaptable to closed-loop tasks.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation recipes for robustness-style reporting.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real
