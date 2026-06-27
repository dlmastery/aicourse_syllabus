---
name: quantize-and-verify
description: Quantizes a model with a chosen method (GPTQ, AWQ, SmoothQuant, ...) and verifies quality on a fixed eval before it ships, producing a quality/speed/memory delta and a go/no-go. Use when you are about to deploy a quantized model and need proof it did not silently regress.
---

# Quantize And Verify

A reusable harness skill that treats quantization as a change that must pass verification, not a free win. It encodes the judgment that no quantized model ships without a fixed eval, a measured delta, and an explicit go/no-go.

## When to use
- You are doing the Week 3 post-training-quantization build and need a repeatable quantize-then-verify loop.
- You picked GPTQ/AWQ/SmoothQuant and must confirm the accuracy loss is within tolerance before deploy.
- You need a shippable artifact documenting the quality/speed/memory tradeoff for a release decision.

## Inputs
- A model to quantize.
- Calibration data (for the chosen PTQ method).
- A fixed evaluation set defining "good enough."

## Workflow
1. Record the full-precision baseline on the fixed eval plus its latency and memory.
2. Quantize with the chosen method, using the calibration data as the method requires.
3. Re-run the same fixed eval on the quantized weights; measure latency and memory too.
4. Compute the deltas: quality drop, speedup, and memory reduction.
5. Apply the go/no-go threshold and record the decision with the numbers behind it.

## Outputs & evidence artifact
- Quantized weights, a quality/speed/memory delta, and a go/no-go.
- Leave the artifact at `evidence/week03-quant/quant-comparison.md`.

## Acceptance checks
- [ ] `evidence/week03-quant/quant-comparison.md` shows baseline vs quantized on the same fixed eval.
- [ ] Quality, speed, and memory deltas are all reported.
- [ ] The quantization method and calibration data are named.
- [ ] An explicit go/no-go decision is recorded with its threshold.

## Worked example
Invocation: "Use $quantize-and-verify to AWQ-quantize my model with 512 calibration samples and verify on the eval set."
Good output: `evidence/week03-quant/quant-comparison.md` showing "fp16 72.0 -> AWQ-int4 71.4 (-0.6), 2.3x faster, 3.8x less memory; threshold was -1.0 -> GO."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — pairs with quantized bases for downstream training/eval workflows.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official /evaluation recipes for the verification step.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework to make the fixed verification eval rigorous and repeatable.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ pre-built evals to catch quantization regressions.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant
