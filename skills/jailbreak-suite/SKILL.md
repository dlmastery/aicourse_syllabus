---
name: jailbreak-suite
description: Run a reusable jailbreak attack battery (manual templates + GCG + PAIR) against a target model with a consistent judge, reporting per-attack ASR, transcripts, and a transferability matrix. Use to benchmark a model's robustness and to re-test it after every defense.
---

# Jailbreak Suite

A harness skill that standardizes adversarial robustness testing: the same behavior set, the same judge, and three attack families, so results are comparable across models and across defense iterations.

## When to use
- You need a baseline jailbreak robustness number for a model.
- You added a defense (system prompt, filter, fine-tune) and must re-measure with the same battery.
- You want to know whether attacks transfer between models.

## Inputs
- The target model(s) and a defined behavior set (harmful behaviors to attempt to elicit).
- A consistent judge (model or rubric) that scores success identically across attacks.

## Workflow
1. Fix the behavior set and the judge; document both so runs are comparable.
2. Run manual template attacks (known jailbreak prompts) and record per-behavior success.
3. Run GCG (gradient-based suffix) attacks where weights/logits are available.
4. Run PAIR (automated red-team LLM) attacks.
5. Compute ASR per attack family; build a transferability matrix (attacks found on model A applied to model B).
6. Save transcripts for every successful attack.

## Outputs & evidence artifact
- `evidence/week03-jailbreak/` — per-attack ASR, full transcripts, and the transferability matrix. This suite is reused for every later defense week.

## Acceptance checks
- [ ] The same judge and behavior set are used across all attacks.
- [ ] ASR is reported per attack family, not just aggregated.
- [ ] A transferability matrix is produced when ≥2 models are tested.
- [ ] Transcripts are saved for reproducibility.

## Worked example
`Use $jailbreak-suite against model-v1 on the 20-behavior set` → manual 35% ASR, PAIR 55%, GCG 60%; transfer to model-v2 drops to 20%. Baseline saved for the defense week re-test.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built red-team/safety evals to anchor the behavior set.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for consistent scorers/judges across attacks.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation recipes for building reproducible judges.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 3 — Adversarial Robustness I: Jailbreaks
