---
name: test-time-improver
description: Wraps a model with a verify-then-self-distill loop at inference and reports held-out lift per unit of compute. Use when you want to trade extra inference compute for accuracy and must prove the gain is real and worth the cost.
---

# Test Time Improver

A harness skill that adds a verify-then-self-improve loop around a model at inference time and measures the accuracy gained per compute unit spent. It encodes the judgment that test-time self-improvement only counts if the lift is measured on held-out data against its compute price.

## When to use
- You can spend more inference compute and want to know what accuracy it buys.
- You are comparing self-improvement strategies (self-consistency, verify-and-revise, self-distill).
- You need a defensible compute budget for a reasoning deployment.

## Inputs
- A base model.
- An eval set with checkable correctness.
- A verifier or self-critique mechanism.

## Workflow
1. Establish the single-sample baseline accuracy and its compute cost.
2. Add the verify-then-revise (or self-distill) loop; sweep the compute budget.
3. Plot held-out lift vs compute (tokens / samples / wall-clock).
4. Identify the knee and check for over-thinking regressions.
5. Recommend an operating budget with its measured lift and cost.

## Outputs & evidence artifact
- The lift-vs-compute curve plus a recommended budget and its held-out delta.

## Acceptance checks
- [ ] Lift is measured on held-out data, not the tuning set.
- [ ] The curve plots accuracy against an explicit compute axis.
- [ ] A recommended budget with cost is stated.

## Worked example
`Use test-time-improver on the math model with a unit-test verifier` → +9 pts at 4x compute, knee at 2x (+6 pts), recommend 2x budget.

## Related skills in the wild
- [volcengine/verl](https://github.com/volcengine/verl) — RL / verifier-driven post-training and inference loops.
- [huggingface/trl](https://github.com/huggingface/trl) — reward/verifier-in-the-loop training reference.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorers for held-out lift measurement.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` patterns for compute-vs-accuracy curves.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 3 — Test-Time Self-Improvement & Inference-Time Scaling
