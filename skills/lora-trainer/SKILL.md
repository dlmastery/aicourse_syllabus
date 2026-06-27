---
name: lora-trainer
description: Run a reproducible LoRA SFT and report whether it beats the prompted baseline, isolating the 1–2 hyperparameters that actually moved the metric. Use when fine-tuning with LoRA/PEFT and you need evidence the adapter is worth it.
---

# LoRA Trainer

A harness skill that keeps PEFT honest: it runs a seedable LoRA fine-tune, compares it against the prompted (no-finetune) baseline on a frozen eval, and identifies which hyperparameters mattered — so the result is reproducible and explainable, not lucky.

## When to use
- You are fine-tuning a base model with LoRA and must justify it over prompting.
- You need to know whether rank/alpha/learning-rate or target-modules drove the gain.
- A reviewer wants a reproducible config and a clean baseline comparison.

## Inputs
- A base model, a prepped dataset, and a frozen eval (fixed before training).
- A LoRA search space (rank, alpha, learning rate, target modules).

## Workflow
1. Lock the eval set and measure the prompted baseline.
2. Run LoRA SFT with a fixed seed; log the loss curve and config.
3. Evaluate the adapter on the frozen eval; compute the delta vs baseline.
4. Ablate the 1–2 suspected key hyperparameters to confirm which moved the metric.
5. Report config, curve, eval delta, and the decisive hyperparameters.

## Outputs & evidence artifact
- `evidence/week03-lora/report.md` — training config, loss curve, eval delta vs baseline, and the 1–2 hyperparameters that actually moved the metric.

## Acceptance checks
- [ ] The prompted baseline is measured on the same frozen eval.
- [ ] The run is seeded and the config is recorded for reproducibility.
- [ ] The eval delta vs baseline is reported (positive or not).
- [ ] The decisive hyperparameter(s) are isolated via ablation.

## Worked example
`Use $lora-trainer to fine-tune for SQL generation` → adapter +12 pts over prompting on the frozen eval; ablation shows rank (8→16) and targeting all attention projections drove the gain; learning rate was secondary.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — SFTTrainer + PEFT/LoRA reference implementation.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable fine-tuning reference apps.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 3 — PEFT I: LoRA From the Math Up
