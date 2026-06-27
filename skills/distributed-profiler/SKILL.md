---
name: distributed-profiler
description: Profile a distributed training run's throughput, MFU, memory, and communication overhead, then recommend a parallelism strategy. Use when scaling pretraining across GPUs and you need a scaling table and bottleneck diagnosis.
---

# Distributed Profiler

A harness for diagnosing where a distributed training run actually spends time. It encodes the judgment that "add more GPUs" is not a strategy — you profile MFU, memory, and communication to find the real bottleneck before choosing data/tensor/pipeline/FSDP parallelism.

## When to use
- You are scaling pretraining and throughput is sublinear in GPU count.
- You need to choose between DP/TP/PP/FSDP/ZeRO with evidence.
- A run OOMs or stalls and you must locate the cause.

## Inputs
- A training job you can instrument.
- The GPU count / topology and the model+batch configuration.

## Workflow
1. Measure baseline throughput (tokens/s) and compute MFU (model FLOP utilization).
2. Break down time: compute vs communication vs idle; capture peak memory.
3. Sweep GPU counts to build a scaling table; note where efficiency drops.
4. Diagnose the bottleneck (memory-bound, comm-bound, or pipeline-bubble).
5. Recommend a parallelism strategy tied to the diagnosis.
6. Commit `evidence/week05-scaling-eff.md`.

## Outputs & evidence artifact
- `evidence/week05-scaling-eff.md`: a scaling table (throughput/efficiency vs GPUs), MFU, and a bottleneck diagnosis with a strategy recommendation.

## Acceptance checks
- [ ] MFU is reported, not just raw tokens/s.
- [ ] The scaling table shows efficiency, exposing where it degrades.
- [ ] The recommended strategy is justified by the measured bottleneck.

## Worked example
`Use $distributed-profiler on this 8→32 GPU run`. Good output: MFU 41%, a table showing efficiency falling from 0.92 to 0.61 by 32 GPUs, diagnosis "all-reduce comm-bound," recommendation "switch to FSDP + gradient bucketing."

## Related skills in the wild
- [volcengine/verl](https://github.com/volcengine/verl) — scalable distributed RL/training stack with parallelism configs.
- [huggingface/trl](https://github.com/huggingface/trl) — training library with FSDP/DeepSpeed integration to profile.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF-ecosystem reference for training/runtime tooling.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability recipes for capturing run metrics.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO
