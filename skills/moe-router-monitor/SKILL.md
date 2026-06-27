---
name: moe-router-monitor
description: Monitor MoE routing health during training/pretraining — per-expert load, token-drop rate, balance loss — and flag expert collapse early. Use when pretraining a Mixture-of-Experts model and you need to catch routing pathologies before they waste compute.
---

# MoE Router Monitor

A harness skill that watches the part of MoE training most likely to silently fail: the router. It tracks expert utilization, drop rate, and balance loss over a batch stream and raises a collapse flag before a few experts monopolize routing.

## When to use
- You are pretraining an MoE model and need live routing-health signals.
- Loss looks fine but you suspect experts are collapsing or being dropped.
- You want an automatic flag rather than eyeballing histograms.

## Inputs
- An MoE model and a batch stream from the training run.

## Workflow
1. For each batch, record the per-expert token-assignment counts.
2. Compute the utilization histogram and an imbalance metric.
3. Track the token-drop rate (tokens exceeding expert capacity).
4. Track the auxiliary balance loss over training.
5. Raise a collapse flag when utilization concentration or drop rate crosses a threshold.

## Outputs & evidence artifact
- `evidence/week06-moe.md` — the utilization histogram, drop rate, balance-loss trace, and the collapse flag (with the threshold used).

## Acceptance checks
- [ ] Per-expert utilization is tracked over the batch stream, not once.
- [ ] Token-drop rate is reported.
- [ ] A collapse flag with an explicit threshold is implemented.
- [ ] The balance loss is traced alongside utilization.

## Worked example
`Use $moe-router-monitor on my pretraining run` → at step 3k, 2 of 8 experts handle 60% of tokens, drop rate climbing to 8%; collapse flag raised → increase balance-loss weight.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — training loops to instrument for routing metrics.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable training framework for large MoE runs.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability recipes for training monitoring.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 6 — Mixture-of-Experts and Long-Context Pretraining
