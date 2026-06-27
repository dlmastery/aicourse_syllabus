---
name: preference-align-bench
description: Benchmarks several preference-optimization methods (DPO, ORPO, KTO, ...) on fixed data and compute with a shared judge, producing a win-rate table, KL drift, cost, and a recommendation. Use when you must fairly compare alignment objectives instead of trusting one method's reported numbers.
---

# Preference Align Bench

A reusable harness skill that holds data and compute constant so a head-to-head comparison of preference-optimization methods is actually fair. It encodes the judgment that "better win-rate" only counts alongside KL drift and cost.

## When to use
- You are choosing between DPO/ORPO/KTO (or similar) and need a controlled bake-off, not anecdotes.
- You suspect a method's quality gains come from KL blow-up or extra compute, and want those costs surfaced.
- You need a defensible recommendation with a table to back it before committing to one alignment objective.

## Inputs
- An SFT base model (the common starting checkpoint for every method).
- A preference dataset (paired or unpaired as the methods require).
- A list of methods to compare and a shared judge + benchmark prompt set.

## Workflow
1. Fix the data split, compute budget, and judge; record them so every method runs under identical conditions.
2. Train each method from the same SFT checkpoint, logging steps, wall-clock, and GPU cost.
3. Evaluate every resulting model on the shared benchmark with the same judge; compute win-rate vs SFT and head-to-head.
4. Measure KL drift from the reference for each method.
5. Assemble a single table: win-rate, KL drift, and cost per method.
6. Write the recommendation, naming the winner and the tradeoff that justifies it.

## Outputs & evidence artifact
- A win-rate table, KL-drift column, cost column, and a written recommendation.
- Leave the artifact at `evidence/week10-align/`.

## Acceptance checks
- [ ] Every method starts from the same SFT checkpoint on the same data and compute.
- [ ] `evidence/week10-align/` contains the win-rate table with KL-drift and cost columns.
- [ ] The judge and benchmark are identical across methods and named in the artifact.
- [ ] A recommendation states the winner and the tradeoff behind it.

## Worked example
Invocation: "Use $preference-align-bench to compare DPO, ORPO, and KTO on my SFT model with a fixed 2k-prompt judge."
Good output: `evidence/week10-align/results.md` with a table like "DPO: 61% win, KL 8.2, $4.10 | ORPO: 58%, KL 5.1, $3.40 | KTO: 55%, KL 4.0, $3.10" and a recommendation choosing ORPO for the best quality-per-KL tradeoff.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — implementations of the DPO/ORPO/KTO trainers being benchmarked.
- [volcengine/verl](https://github.com/volcengine/verl) — scale-out RLHF/GRPO for running the bake-off across larger models.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for the judge/benchmark harness.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official evaluation recipes (LLM-as-judge, win-rate scoring).

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 10 — Direct Preference Optimization: DPO, ORPO, KTO
