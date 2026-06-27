---
name: sft-data-prep
description: Turns raw domain data into a clean, decontaminated, correctly-templated SFT dataset with a defensible dataset card. Use when preparing data for supervised fine-tuning and you need a repeatable, evidence-producing pipeline (dedup, decontam, loss-mask checks).
---

# SFT Data Prep

A harness skill that converts raw examples into a fine-tuning-ready JSONL set whose every transformation is logged and auditable. It encodes the judgment that data quality — not the trainer — decides the outcome.

## When to use
- You have raw domain examples and need an SFT set that won't silently leak the eval.
- You are about to fine-tune and need to confirm the chat template and loss mask are correct.
- A reviewer asks "where did this training data come from and what was filtered?"

## Inputs
- Raw examples (any format).
- The frozen evaluation set (for decontamination).
- The target chat template / tokenizer.

## Workflow
1. Normalize raw examples into a single schema; record source per row.
2. Apply the target chat template; render 5 samples and eyeball role boundaries.
3. Dedup (exact + near-dup/minhash) and decontaminate against the frozen eval; log counts removed.
4. Quality-filter (length, language, toxicity, malformed) and record per-filter stats.
5. Verify the loss mask: confirm only completion tokens contribute to loss on 3 samples.
6. Emit formatted JSONL + write the dataset card (sources, sizes, filters, decontam method, known gaps).

## Outputs & evidence artifact
- `evidence/week02-data/dataset-card.md` plus the formatted JSONL, dedup/decontam report, and filter stats.

## Acceptance checks
- [ ] Decontamination report shows 0 eval-set overlaps after removal.
- [ ] Loss-mask verification passes on sampled rows (prompt tokens masked).
- [ ] Dataset card lists every source, filter, and row-count delta.
- [ ] Rendered template samples have correct role/turn boundaries.

## Worked example
`Use sft-data-prep on raw_support_logs.jsonl against eval_frozen.jsonl with the Llama-3 chat template` → JSONL of 18,402 rows, decontam removed 37 overlaps, 3 filters logged, mask verified, and a `dataset-card.md` a regulator could read.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example skills.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/finetuning` recipes for data prep and templating.
- [huggingface/trl](https://github.com/huggingface/trl) — SFTTrainer + dataset formatting/packing reference.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable fine-tuning + data pipelines.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 2 — Data Preparation & Formatting: The 80% That Decides the Outcome
