---
name: adapter-serving
description: Serve quantized LoRA adapters under an SLA and verify the served artifact still passes eval and beats the baseline on cost. Use when moving a tuned checkpoint into inference and you must prove quantization didn't break quality.
---

# Adapter Serving

A serving-verification harness for quantized, multi-LoRA inference. The judgment it encodes: the model you *serve* is not the model you *trained* — quantization and batching can silently degrade quality, so you must re-run eval on the served artifact and prove the cost win is real.

## When to use
- Promoting a tuned checkpoint/adapters from training to a served endpoint.
- Choosing a quantization level and needing the quality/latency trade-off measured.
- Serving multiple LoRAs and needing throughput and per-answer cost numbers.

## Inputs
- The tuned checkpoint plus adapters.
- A serving SLA (latency p95, throughput, cost target).
- The regression suite used during training.

## Workflow
1. Quantize the adapter/base at the candidate levels (e.g. fp16, int8, int4).
2. Measure quality and latency at each level; tabulate the trade-off.
3. Load multiple LoRAs and measure multi-adapter throughput.
4. Compute $/1k answers and compare to the prompted baseline's cost.
5. Re-run the regression suite on the *served* model — record pass/fail.

## Outputs & evidence artifact
- `evidence/week09-serving/sla.md`: quant quality/latency table, multi-LoRA throughput, $/1k answers, and a served-model regression pass/fail.

## Acceptance checks
- [ ] Quality is measured on the served (quantized) artifact, not the training checkpoint.
- [ ] The served model passes the regression suite at the chosen quant level.
- [ ] $/1k answers beats the baseline and meets the SLA.

## Worked example
`Use $adapter-serving to validate our int4 LoRA endpoint.` → A table: int4 keeps 99% of fp16 quality at 2.1x throughput, multi-LoRA serves 6 adapters at 180 req/s, $0.22/1k, regression PASS.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — produces the LoRA adapters and checkpoints this harness serves.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — cost, latency, and observability recipes for served LLM endpoints.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable serving/inference apps to compare cost and throughput against.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost
