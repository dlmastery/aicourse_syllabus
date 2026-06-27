---
name: gpu-profile
description: Profile a model or kernel to name the bottleneck (compute-bound vs memory-bound) and the top time-sinks via a kernel table, roofline classification, and memory breakdown. Use when an op/model is slower than expected and you need evidence before optimizing.
---

# GPU Profile

A harness skill that converts a vague "it's slow" into a precise diagnosis: which kernels dominate, whether you are compute- or memory-bound, and where the memory goes — so optimization effort lands on the real constraint.

## When to use
- A forward/backward pass or a single op is slower than your back-of-envelope estimate.
- You must choose between a compute optimization (better kernels) and a memory optimization (fusion, quantization).
- Before/after an optimization, to prove the speedup is real.

## Inputs
- A model (or isolated op) and a representative input shape / batch size.
- The target device and its peak FLOP/s and memory bandwidth (for the roofline).

## Workflow
1. Warm up, then capture a profiler trace (torch profiler / Nsight) over a steady-state window.
2. Build a kernel-time table: top kernels by total time, with call counts.
3. Compute arithmetic intensity and place the op on a roofline → classify compute- vs memory-bound.
4. Break down memory: weights, activations, KV/optimizer state, fragmentation.
5. Name the single bottleneck and the highest-leverage next action.

## Outputs & evidence artifact
- `evidence/week01-profile/bottleneck-report.md` — kernel-time table, roofline classification, memory breakdown, and the recommended optimization.

## Acceptance checks
- [ ] Kernel table covers ≥90% of measured step time.
- [ ] Roofline classification (compute vs memory bound) is stated with the arithmetic intensity used.
- [ ] Memory breakdown sums to the observed peak (within a stated margin).
- [ ] One concrete next optimization is named and justified by the data.

## Worked example
`Use $gpu-profile to profile my attention block at batch 8, seq 2048` → report shows softmax+matmul memory-bound (AI 12 vs ridge 40), KV cache is 60% of memory; recommendation: fuse / use FlashAttention. Verdict: memory-bound, fuse first.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability and performance recipes for model workloads.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal, profilable code paths; reference for instrumenting tight loops.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence-artifact conventions.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 1 — The GPU Execution & Memory Model (and How to Profile It)
