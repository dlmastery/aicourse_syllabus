---
name: self-improve-loop
description: Run a verify-filter-SFT self-improvement loop and prove (or honestly disprove) per-iteration gains without diversity collapse. Use when training a model on its own verified outputs and you must show iteration helps rather than degenerates.
---

# Self Improve Loop

A self-training harness with guardrails. It encodes the judgment that verify-filter-SFT loops can either improve a model or quietly collapse it — so each iteration must be checked on held-out data and for diversity loss.

## When to use
- You are training a model on its own verifier-passed outputs.
- A self-improvement loop might be plateauing or collapsing.
- You need honest per-iteration evidence, including negative results.

## Inputs
- A base model, a verifier, and a prompt set to generate over.

## Workflow
1. Generate candidates; keep only verifier-passing ones.
2. SFT the model on the filtered set.
3. Evaluate on a held-out set per iteration.
4. Run a diversity/decontamination check (is output collapsing or leaking?).
5. Diagnose plateau or collapse explicitly.
6. Repeat; commit the per-iteration report.

## Outputs & evidence artifact
- `evidence/week07-longhorizon/report.md` — per-iteration held-out eval, a diversity/decontamination check, and a plateau/collapse diagnosis.

## Acceptance checks
- [ ] Each iteration is evaluated on a held-out set.
- [ ] A diversity/decontamination check is run each round.
- [ ] Plateau or collapse is diagnosed honestly (no silent stop at the best point).

## Worked example
`Use $self-improve-loop on math word problems.` → "iter1 +3%, iter2 +1%, iter3 -2% with output diversity dropping 40%. Diagnosis: collapse onto a narrow solution style — stop at iter2, add diversity sampling before retrying."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — SFT/RL stacks for the filter-and-train step.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for held-out, leakage-aware scoring.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 7 — Long-Horizon Reasoning & Self-Improving Agents
