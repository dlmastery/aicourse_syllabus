---
name: attention-bench
description: Quantify attention/KV-cache cost across context lengths and prove the win from FlashAttention + PagedAttention. Use when serving long-context models and you must justify a kernel/cache choice with latency, memory, and throughput curves.
---

# Attention Bench

A benchmarking harness for attention at scale. The judgment it encodes: attention and KV-cache cost dominate long-context serving, so kernel and cache decisions must be made from measured curves — not from a blog post's headline speedup.

## When to use
- Serving long-context models and deciding on attention kernels/caching.
- Justifying FlashAttention or PagedAttention to a cost-conscious reviewer.
- Sizing a KV-cache budget for a target context length and batch size.

## Inputs
- A model, a set of context lengths, and batch sizes to sweep.

## Workflow
1. Sweep context lengths and batch sizes; record latency, memory, throughput.
2. Plot the scaling curves.
3. Compute the KV-cache budget at the target context length.
4. Compare paged vs naive KV-cache at the largest feasible batch size.
5. Recommend the kernel/cache config with the measured win.

## Outputs & evidence artifact
- `evidence/week06-attention/attention-scaling.md`: latency/memory/throughput curves, a KV-cache budget, and a paged-vs-naive batch-size comparison.

## Acceptance checks
- [ ] Latency, memory, and throughput are measured across context lengths.
- [ ] A KV-cache budget is computed for the target context length.
- [ ] Paged vs naive is compared at matched conditions.

## Worked example
`Use $attention-bench on our 32k-context serving setup.` → Curves to 32k, KV budget 9.4 GB at batch 16, PagedAttention enables batch 40 vs 16 naive (2.5x throughput), recommend FlashAttention-3 + paged KV.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — cost/latency and observability recipes for serving benchmarks.
- [huggingface/trl](https://github.com/huggingface/trl) — training/serving stack exercising attention kernels at scale.
- [volcengine/verl](https://github.com/volcengine/verl) — distributed RL infra that stresses long-context attention and KV-cache.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention
