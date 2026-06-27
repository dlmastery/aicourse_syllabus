---
name: reasoning-audit
description: Evaluates reasoning on hard, contamination-resistant sets with error bars, compute accounting, and a memorization/faithfulness audit. Use when a headline reasoning score looks too good and you must rule out contamination, lucky guesses, and unfaithful chains.
---

# Reasoning Audit

A harness skill that stress-tests a reasoning model instead of trusting its leaderboard number: hard benchmarks, perturbations to defeat memorization, and an explicit faithfulness check. It encodes the judgment that an accuracy figure without error bars, compute, and a contamination audit is not yet evidence.

## When to use
- A model posts a strong score on AIME/GPQA/ARC-AGI-style sets and you suspect contamination.
- You need accuracy reported with error bars and compute, not a bare percentage.
- You want to know whether the chain-of-thought actually drove the answer (faithfulness) or was post-hoc.
- You need to separate genuine reasoning from lucky guesses on multiple-choice items.

## Inputs
- A model (or models) to audit.
- Hard, contamination-resistant benchmarks.
- A perturbation generator (renames, number swaps, distractors) to probe memorization.

## Workflow
1. Run the model on the hard benchmark; log accuracy with error bars and compute (tokens/$).
2. Generate perturbed variants of items and re-run; measure the accuracy drop.
3. Flag large memorization gaps where original >> perturbed performance.
4. Inspect a sample for lucky guesses (right answer, wrong/absent reasoning).
5. Run a faithfulness probe: does perturbing the stated reasoning change the answer as it should?
6. Record the scorecard, perturbation-drop result, and faithfulness inspection in the report.

## Outputs & evidence artifact
- `evidence/week08-hard-eval/report.md` — scorecard with error bars and compute, the perturbation-drop result, and the lucky-guess/faithfulness inspection.

## Acceptance checks
- [ ] Accuracy is reported with error bars and a compute figure, not a single number.
- [ ] A perturbation set is run and the original-vs-perturbed drop is quantified.
- [ ] At least one faithfulness/lucky-guess inspection is documented with examples.
- [ ] `evidence/week08-hard-eval/report.md` is committed with a contamination verdict.

## Worked example
`Use $reasoning-audit to audit a model's GPQA-Diamond claim with number-swap perturbations.` Good output: 62% ± 4 on original vs 47% ± 4 on perturbed (15-pt memorization gap), compute 11k tokens/item, and 3 sampled "correct but unfaithful" chains flagged — verdict: score partially contaminated, treat as ~47% effective.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework (scorers, solvers) ideal for contamination-aware reasoning audits.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ pre-built evals including hard reasoning sets to audit against.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official /evaluation recipes for scoring and error analysis.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination
