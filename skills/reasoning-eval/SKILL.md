---
name: reasoning-eval
description: Measures reasoning accuracy with objective answer verification, token cost, and contamination awareness — the baseline everything else is judged against. Use when you need a trustworthy first number for a reasoning model before comparing methods or spending more compute.
---

# Reasoning Eval

A harness skill that establishes the honest baseline: accuracy via objective verification (not vibes), the token cost to get it, and a contamination flag. It encodes the judgment that every later claim about reasoning must be measured against a clean, reproducible starting number.

## When to use
- You need a first, trustworthy accuracy number for a reasoning/math model.
- You are about to compare prompting or test-time-compute methods and need a baseline.
- Answers must be checked by an objective verifier, not eyeballed.
- You want token-cost-per-problem alongside accuracy so later trade-offs are visible.

## Inputs
- A model.
- A math/reasoning set with checkable answers.
- An answer verifier (exact-match, symbolic, or unit-test style).

## Workflow
1. Prompt the model on the set.
2. Generate completions.
3. Extract the final answer (and validate the extraction is robust).
4. Verify each answer objectively against the gold key.
5. Tabulate accuracy and tokens/problem.
6. Flag contamination risk (known-public set, suspicious memorization).
7. Commit the baseline report.

## Outputs & evidence artifact
- `evidence/week01-baseline.md` — accuracy, tokens/problem, an extraction-validation note, and a contamination flag.

## Acceptance checks
- [ ] Accuracy comes from an objective verifier, with the extraction step validated.
- [ ] Tokens/problem (cost) is reported alongside accuracy.
- [ ] A contamination flag is set (and justified) for the chosen set.
- [ ] `evidence/week01-baseline.md` is committed as the reference baseline.

## Worked example
`Use $reasoning-eval to baseline a model on 200 GSM8K-style problems with a symbolic verifier.` Good output: 84% accuracy, 512 tokens/problem mean, a note that 3% of answers needed regex-fallback extraction (validated), and a contamination flag = "public set, treat as upper bound."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework with scorers/solvers for objective verification.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ ready-made evals including math/reasoning baselines.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official /evaluation recipes for scoring and answer extraction.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference
