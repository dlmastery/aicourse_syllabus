---
name: moe-analyze
description: Profile a Mixture-of-Experts model's active-vs-total parameters, serving cost (throughput/memory), and expert-load balance to inform a deploy decision. Use when deciding whether/how to serve an MoE model and you need an evidence-backed serving ADR.
---

# MoE Analyze

A harness skill that makes the MoE deploy decision concrete: it separates active from total parameters, measures real serving cost, and checks routing balance — the three facts that determine whether sparsity actually pays off in production.

## When to use
- You are deciding whether to deploy an MoE model and how to serve it.
- You need active-vs-total param accounting to reason about memory vs compute.
- You suspect expert-load imbalance is hurting efficiency.

## Inputs
- An MoE model and a representative batch/request load.
- The serving stack and its expert-parallelism capabilities.

## Workflow
1. Account for active vs total parameters (what's resident vs what's computed per token).
2. Measure serving throughput and memory under the representative load.
3. Build an expert-load histogram; quantify imbalance.
4. Relate the findings to the serving stack's parallelism options.
5. Write the serving ADR (deploy decision + parallelism/MoE plan).

## Outputs & evidence artifact
- `evidence/week09-moe/moe-analysis.md` — active-vs-total param accounting, throughput/memory, the expert-load histogram, and the serving ADR (the Design Review #2 8%-component).

## Acceptance checks
- [ ] Active and total parameter counts are both reported.
- [ ] Throughput and memory are measured under a stated load.
- [ ] An expert-load histogram quantifies routing balance.
- [ ] The ADR states a concrete serving/parallelism decision.

## Worked example
`Use $moe-analyze on my 8×7B MoE` → 13B active / 47B total; throughput 1.8× a dense 13B at 2.4× memory; one expert handles 31% of tokens (imbalanced). ADR: deploy with expert parallelism + add balance loss.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — training infra for MoE post-training/balance experiments.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — serving/deployment reference apps.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation recipes for the quality side of the deploy decision.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 9 — Mixture-of-Experts: Sparse Models at Scale
