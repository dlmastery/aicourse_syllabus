---
name: lifecycle-evidence-packet
description: Assemble a full pretrain→post-train pipeline's artifacts (data funnel, tokenizer report, training curves, SFT/alignment comparisons, eval table, safety report, serving benchmark) into one reviewable bundle with a model card. Use as the capstone deliverable for an end-to-end LLM build.
---

# Lifecycle Evidence Packet

A harness skill whose output *is* the deliverable: a single reviewable bundle that lets someone audit an entire LLM lifecycle — what data went in, how it was tokenized, how it trained, how post-training changed it, how it evals, how safe it is, and how it serves.

## When to use
- You finished an end-to-end pretrain→post-train pipeline and must present it for review.
- A reviewer needs to verify each lifecycle stage from artifacts, not narration.
- You are producing the capstone bundle for the LLM track.

## Inputs
- All stage artifacts: data-funnel stats, tokenizer report, training curves, SFT/alignment eval comparisons, the eval table, the safety report, the serving benchmark.

## Workflow
1. Collect each stage's artifact and confirm it is current and reproducible.
2. Write the data funnel (raw → filtered → deduped counts) and the tokenizer report.
3. Add training curves and the SFT/alignment before-vs-after comparison.
4. Add the eval table and the safety report.
5. Add the serving benchmark (latency/throughput/cost).
6. Write the model card tying it together (intended use, data, evals, limitations).

## Outputs & evidence artifact
- `capstone/` — the assembled packet: data funnel, tokenizer report, curves, SFT/alignment comparison, eval table, safety report, serving benchmark, and the model card.

## Acceptance checks
- [ ] Every lifecycle stage has a corresponding artifact in the bundle.
- [ ] The model card states intended use, data provenance, evals, and limitations.
- [ ] SFT/alignment is shown as a before-vs-after comparison.
- [ ] The bundle is self-contained and reviewable without the author present.

## Worked example
`Use $lifecycle-evidence-packet to assemble my tiny-LLM capstone` → `capstone/` with a 4-stage data funnel, tokenizer coverage, loss curves, SFT eval +8 pts, safety report, 120 tok/s serving benchmark, and a one-page model card.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes for the stage artifacts.
- [huggingface/trl](https://github.com/huggingface/trl) — SFT/alignment training to produce the comparison.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence-packet conventions.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 13 — Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet
