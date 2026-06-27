---
name: compress-verify
description: Compress a model (prune/distill) and verify both a hardware-real speedup and an in-budget quality delta. Use when shrinking a model for latency and you must prove the gain is real on hardware, not just theoretical FLOPs.
---

# Compress Verify

A harness for model compression that refuses to trust theoretical numbers. It encodes the judgment that a "2x smaller" model means nothing until you measure wall-clock latency on real hardware and confirm the quality drop stays inside budget.

## When to use
- You are pruning, distilling, or applying NAS to hit a latency target.
- You need to separate theoretical FLOP reduction from actual measured speedup.
- A stakeholder asks "did we lose quality?" and you need a number, not a vibe.

## Inputs
- A baseline model (and a teacher, if distilling).
- A latency/throughput target on a named hardware setup.
- A quality eval set and an acceptable quality-delta budget.

## Workflow
1. Record the baseline: latency on target hardware and quality on the eval set.
2. Apply compression (prune / distill / NAS) to a candidate.
3. Measure the candidate's wall-clock latency on the *same* hardware.
4. Measure quality; compute the delta vs baseline against the budget.
5. Note theoretical-vs-real gap (e.g., 4x fewer params but only 1.6x faster) and why.
6. Commit `evidence/week05-compress/compression-report.md`.

## Outputs & evidence artifact
- `evidence/week05-compress/compression-report.md`: the compressed model, measured speedup, quality delta, and a theoretical-vs-real note.

## Acceptance checks
- [ ] Speedup is wall-clock on real hardware, not FLOP-derived.
- [ ] Quality delta is reported against the stated budget (pass/fail).
- [ ] The report explains any gap between theoretical and measured gain.

## Worked example
`Use $compress-verify to hit 50ms p50`. Good output: a distilled model at 48ms (1.9x faster) with −0.4 pts accuracy inside a 1-pt budget, and a note that memory-bandwidth limits kept it below the theoretical 3x.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — distillation/post-training reference for the teacher→student step.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal stack illustrating small-model deployment tradeoffs.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for the before/after quality delta.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable apps showing served-model latency in context.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 5 — Pruning, Sparsity, Distillation & NAS
