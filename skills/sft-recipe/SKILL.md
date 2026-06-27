---
name: sft-recipe
description: Produces a reproducible SFT recipe — chat template + loss mask + sequence packing + LoRA config + a held-out instruction eval delta. Use when fine-tuning a base model and you must show a measured before/after improvement, not just a checkpoint.
---

# SFT Recipe

A harness skill that turns "fine-tune this model" into a fixed, re-runnable recipe whose result is a checkpoint plus a documented eval delta. It encodes the judgment that an SFT run is only finished when the improvement is measured on held-out instructions.

## When to use
- You are about to instruction-tune a base model and want a config you can re-run.
- You need to prove the tune helped (held-out eval delta), not just that it ran.
- You want to standardize template/mask/packing/LoRA choices across experiments.

## Inputs
- A base model checkpoint.
- Instruction data (ideally produced by `sft-data-prep`).
- A held-out instruction eval set.

## Workflow
1. Fix the chat template and verify the loss mask covers only completion tokens.
2. Configure sequence packing; confirm no cross-example attention leakage.
3. Set the LoRA config (rank, alpha, target modules, dropout) and record it.
4. Train; log the loss curve and checkpoint hash.
5. Run the held-out instruction eval before and after; compute the delta.
6. Write the recipe (all configs + eval delta) so a peer can reproduce it.

## Outputs & evidence artifact
- `evidence/week08-sft/` — the tuned checkpoint reference, the config, the loss curve, and the eval-delta report.

## Acceptance checks
- [ ] Held-out eval delta is reported with the eval set named.
- [ ] LoRA config and template are fully specified (re-runnable).
- [ ] Loss-mask and packing leakage checks both pass.

## Worked example
`Use sft-recipe to instruction-tune Qwen2.5-7B on the cleaned set` → LoRA r=16 config, loss curve, and `+6.1 pts` on the held-out instruction eval recorded in `evidence/week08-sft/`.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — canonical SFTTrainer + LoRA/PEFT recipes.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/finetuning` and `/evaluation` recipes.
- [volcengine/verl](https://github.com/volcengine/verl) — post-training stack (SFT → RL) reference.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 8 — Supervised Fine-Tuning & Instruction Tuning
