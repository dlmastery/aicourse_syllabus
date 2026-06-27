---
name: precision-sweep
description: Sweeps a model across numeric precisions (fp32, bf16, fp16, fp8, ...) on a fixed eval, tabulates the speed/memory/quality tradeoff, names the failure cases each precision introduces, and recommends one. Use when you need to pick a serving/training precision with evidence instead of folklore.
---

# Precision Sweep

A reusable harness skill that turns "which precision should we run?" into a measured tradeoff table plus a recommendation. It encodes the judgment that each precision buys speed/memory at a quality and stability cost that must be observed, including the specific cases it breaks.

## When to use
- You are doing the Week 2 numerics build and need to compare mixed precision / fp8 against a baseline.
- You must choose a serving or training precision and want data, not "bf16 is usually fine."
- You suspect a precision is introducing instability (overflow, NaNs, degenerate outputs) and need the failure cases surfaced.

## Inputs
- A model.
- An evaluation set held fixed across every precision.

## Workflow
1. Fix the eval and a baseline precision (typically fp32 or bf16).
2. For each candidate precision, run the same eval and measure quality, latency/throughput, and peak memory.
3. Capture the failure cases each precision introduces (overflow/underflow, NaNs, low-precision degeneration).
4. Assemble the tradeoff table: quality / speed / memory per precision, plus a failures column.
5. Recommend one precision and justify it against the table and the observed failures.

## Outputs & evidence artifact
- A tradeoff table, a recommendation, and the failure cases each precision introduced.
- Leave the artifact at `evidence/week02-precision/tradeoff-table.md`.

## Acceptance checks
- [ ] `evidence/week02-precision/tradeoff-table.md` covers each precision on the same fixed eval.
- [ ] Quality, speed, and memory are reported for every precision.
- [ ] Failure cases introduced by each precision are documented.
- [ ] A single precision is recommended with a rationale tied to the table.

## Worked example
Invocation: "Use $precision-sweep to compare bf16, fp16, and fp8 on my eval and recommend one for serving."
Good output: `evidence/week02-precision/tradeoff-table.md` showing "bf16 72.0 / 1.0x / 1.0x / no failures; fp16 71.9 / 1.0x / 1.0x / 2 overflow cases; fp8 71.1 / 1.7x / 0.55x / minor degeneration on long prompts -> recommend fp8 for serving given the 1.7x speedup and bounded quality loss."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — training stacks where mixed-precision/fp8 choices directly affect stability.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official /evaluation recipes for the fixed eval driving the sweep.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework to make per-precision quality measurement repeatable.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals to expose precision-specific failure cases.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter
