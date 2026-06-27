---
name: lifecycle-map
description: For any LLM project, lay out the stages with the objective, data, and eval at each, and the explicit decision that gates moving to the next stage. Use at the start of an LLM build to plan the pipeline before writing training code.
---

# Lifecycle Map

A harness skill that front-loads the thinking: before any pretraining run, it forces a stage-by-stage plan where each stage has a clear objective, its data, its eval, and a written gate — the condition that must hold before you proceed.

## When to use
- You are kicking off an LLM project and need a pipeline plan, not ad-hoc steps.
- You want explicit go/no-go gates between stages instead of drifting forward.
- You need a shared map the rest of a team (or future you) can follow.

## Inputs
- The target model or use-case and its high-level goal.
- Known constraints (compute budget, data availability, latency/quality targets).

## Workflow
1. Enumerate the stages (data → tokenizer → pretrain → SFT → alignment → eval → serve).
2. For each stage, write its objective, the data it consumes, and the eval that measures it.
3. For each stage, write the gate: the measurable condition required to advance.
4. Note the key risk at each stage and its mitigation.
5. Assemble the stage table.

## Outputs & evidence artifact
- `evidence/week01-lifecycle-map.md` — a stage table (objective / data / eval / gate) for the full pipeline.

## Acceptance checks
- [ ] Every stage has an objective, data, eval, and a gate.
- [ ] Gates are measurable conditions, not vague intentions.
- [ ] The map covers data through serving, not just training.
- [ ] Each stage names its main risk.

## Worked example
`Use $lifecycle-map for a 100M-param domain model` → table: pretrain gate = val loss < X; SFT gate = held-out task +5 pts; alignment gate = safety eval pass with ≤2% quality regression; serve gate = p95 < 200ms.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — end-to-end recipes spanning finetuning, evaluation, and serving.
- [huggingface/trl](https://github.com/huggingface/trl) — reference implementations for the post-training stages.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for defining the per-stage gates.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 1 — The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run)
