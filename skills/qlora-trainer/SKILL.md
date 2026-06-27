---
name: qlora-trainer
description: Fine-tunes a model under a fixed GPU memory budget using a 4-bit quantized base plus LoRA adapters, and reports the exact memory/quality/throughput tradeoff vs full-precision LoRA. Use when you must fit training on one GPU and need evidence the quantization cost was acceptable.
---

# QLoRA Trainer

A reusable harness skill for training "as big as fits" — a 4-bit (NF4) base with LoRA adapters — while measuring what the memory savings cost in quality and speed. It encodes the judgment that a memory budget is a hard constraint and the quality tradeoff must be quantified, not assumed.

## When to use
- You are doing the Week 4 PEFT-II / QLoRA build and want to push a bigger model onto one GPU.
- A full-precision LoRA run OOMs and you need a budget-aware alternative with proof it still works.
- You need to justify 4-bit base training by showing the eval gap vs full-precision LoRA is small enough.

## Inputs
- A base model to fine-tune.
- A training dataset.
- A GPU memory budget (the hard ceiling the run must fit under).

## Workflow
1. Load the base in 4-bit (NF4, double quantization) and attach LoRA adapters; confirm the run fits under the budget.
2. Train, logging peak memory footprint and throughput (tokens/sec or steps/sec).
3. Run the same eval on the QLoRA model and on a full-precision LoRA baseline (or cite a recorded one).
4. Compute the deltas: memory saved, throughput change, and eval gap.
5. Write a budget-aware recommendation: when this tradeoff is worth it and when to spend more memory.

## Outputs & evidence artifact
- Memory footprint, throughput, eval vs full-precision LoRA, and a budget-aware recommendation.
- Leave the artifact at `evidence/week04-qlora/report.md`.

## Acceptance checks
- [ ] `evidence/week04-qlora/report.md` records peak memory and confirms it is under the stated budget.
- [ ] Throughput is reported.
- [ ] Eval is compared against a full-precision LoRA baseline with the gap quantified.
- [ ] A recommendation states when this memory/quality tradeoff is justified.

## Worked example
Invocation: "Use $qlora-trainer to fine-tune a 13B model under 16GB with 4-bit base + LoRA and compare to fp16 LoRA."
Good output: `evidence/week04-qlora/report.md` showing "peak 14.2GB (fits 16GB budget), 1.8k tok/s, eval 71.2 vs fp16-LoRA 72.0 (-0.8) -> recommended: QLoRA worth it at this scale; revisit if the 0.8 gap matters."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — SFT/LoRA trainers that pair with bitsandbytes 4-bit bases for QLoRA.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official /finetuning and /evaluation recipes for the eval side.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework to measure the QLoRA-vs-full-precision quality gap.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable fine-tuning apps for reference end-to-end setups.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU
