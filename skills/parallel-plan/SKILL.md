---
name: parallel-plan
description: Chooses and validates a parallelism strategy (DP / FSDP-ZeRO / TP / PP) for a target model, hardware budget, and latency goal, then proves it with measured memory and throughput. Use when you must fit or serve a model that does not comfortably run on one GPU and need a defensible plan, not a guess.
---

# Parallel Plan

A harness skill that turns "how do I shard this model?" into a repeatable decision: pick a parallelism strategy for a given model + GPU topology + objective, then back it with measurements and a named bottleneck. It encodes the judgment that a parallelism choice is only credible once memory and throughput are measured, not assumed.

## When to use
- A model will not fit in a single GPU's memory and you must decide between FSDP/ZeRO sharding, tensor parallelism, or pipeline parallelism.
- You are serving for latency vs. training for throughput and the right partition differs between the two.
- You have a fixed GPU count and interconnect (NVLink vs. PCIe vs. multi-node) and need to know which strategy the interconnect actually supports.
- A learner is working through the Week 11 distributed build and needs evidence, not a hunch.

## Inputs
- Model size (parameters / activation footprint) and precision.
- GPU count, per-GPU memory, and interconnect (NVLink / PCIe / multi-node fabric).
- Objective: train vs. serve, and latency-bound vs. throughput-bound.

## Workflow
1. State the objective and the binding constraint (memory ceiling or latency target).
2. Estimate per-GPU memory for the naive single-device case; confirm it overflows (or not).
3. Choose a candidate strategy: DP/FSDP-ZeRO for memory sharding, TP for intra-layer splits over fast interconnect, PP for deep models across slower links; combine if needed.
4. Run the candidate and measure peak memory per GPU and throughput (tokens/s or samples/s).
5. Name the bottleneck (memory, compute, interconnect bandwidth, or pipeline bubble) and state whether the objective is met.
6. Record the recommended plan plus the measured numbers; commit the evidence artifact.

## Outputs & evidence artifact
- A recommended plan + measured memory/throughput + the named bottleneck, written to `evidence/week11-distributed/parallel-plan.md`.

## Acceptance checks
- [ ] The artifact names a single recommended strategy and why the alternatives were rejected.
- [ ] Peak per-GPU memory and throughput are measured numbers, not estimates.
- [ ] The binding bottleneck is explicitly named.
- [ ] The plan states whether the latency/throughput objective is met.

## Worked example
Invocation: `Use $parallel-plan for a 13B model on 8×A100 (NVLink), goal: train, throughput-bound.` Good output: "Naive fp16 needs ~52 GB/GPU > 40 GB → overflow. FSDP full-shard fits at 22 GB/GPU peak, 41k tok/s; TP=8 fits but interconnect-bound at 18k tok/s. Recommend FSDP. Bottleneck: all-gather bandwidth at layer boundaries." plus the measured table.

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — writing-plans / subagent-driven-dev methodology for turning a goal into a checked plan
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and skill-creator authority
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated orchestrators and slash-commands for multi-step engineering workflows

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism
