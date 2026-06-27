---
name: finetune-regression
description: Gate a fine-tune on target gain AND no-significant-regression across general capability and safety. Use when deciding to ship a fine-tuned checkpoint and you must rule out silent forgetting before release.
---

# Finetune Regression

A harness for shipping fine-tunes without silent forgetting. It encodes the judgment that a target-task win is only half the test — you must prove the checkpoint did not quietly regress general capability or safety before you call it shippable.

## When to use
- You fine-tuned a model and a target metric improved.
- You need to rule out capability/safety regressions (catastrophic forgetting).
- A ship/no-ship decision needs evidence, not optimism.

## Inputs
- Candidate checkpoints.
- A target eval set plus a general-capability suite and a safety suite.
- An LLM-judge (if used) to validate.

## Workflow
1. Score each checkpoint on target, general, and safety suites — before and after.
2. If using a judge, validate it (κ vs human labels) before trusting its scores.
3. Build a per-axis before/after matrix; run significance tests on deltas.
4. Flag any axis with a significant regression.
5. Make a ship/no-ship call tied to the matrix.
6. Commit `evidence/week08-regression/matrix.md`.

## Outputs & evidence artifact
- `evidence/week08-regression/matrix.md`: a per-axis before/after matrix, the validated judge κ, flagged regressions, and a ship/no-ship call.

## Acceptance checks
- [ ] All three axes (target, general, safety) are measured before and after.
- [ ] Any LLM-judge is validated (κ reported) before its scores are used.
- [ ] The ship/no-ship call is justified by significant deltas, not point estimates.

## Worked example
`Use $finetune-regression on these SFT checkpoints`. Good output: target +9 pts, general −0.3 (n.s.), safety −4 pts (significant) → no-ship, with the safety regression flagged for mitigation.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — fine-tuning/post-training library producing the checkpoints under test.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the general + safety suites.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt capability/safety evals to gate against.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes for regression testing.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)
