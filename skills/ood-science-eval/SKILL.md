---
name: ood-science-eval
description: Evaluates a scientific ML model on extrapolation and physical validity rather than in-distribution fit alone. Use when a surrogate or property-prediction model reports strong test metrics but will be deployed on new scaffolds, compositions, or out-of-range conditions.
---

# OOD Science Eval

A harness for scientific ML that refuses to trust a single random-split number. It encodes the judgment that a surrogate is only trustworthy if it extrapolates, respects physical constraints, and knows where its applicability domain ends.

## When to use
- A surrogate or property-prediction model shows high R2 on a random split and you suspect leakage from near-duplicate samples.
- You need a scaffold-split or structure-split to estimate real generalization to unseen chemistry/geometry.
- A model will be queried outside the training range (temperature, composition, size) and you must bound the risk.
- A reviewer asks "does it obey physics?" and "where does it fail?" before deployment.

## Inputs
- A trained scientific model (callable / checkpoint).
- The scientific dataset with a meaningful grouping key (scaffold, structure, composition, time).
- Known physical constraints or invariants for the target (bounds, monotonicity, conservation).

## Workflow
1. Re-split the data by scaffold/structure (not random) so train and eval groups are disjoint; record group counts.
2. Compute in-distribution metrics on the structure-split as the baseline.
3. Construct an explicit OOD slice (held-out scaffolds or out-of-range conditions) and report metrics on it separately.
4. Run a physical-constraint check: flag predictions that violate bounds, signs, or conservation laws.
5. Estimate uncertainty (ensemble/dropout/quantile) and write an applicability-domain note: where predictions are trustworthy vs extrapolative.
6. Record the gap between in-distribution and OOD performance as the headline finding.

## Outputs & evidence artifact
- `science-eval.md` containing: structure-split metrics, OOD-slice metrics, the physical-constraint check result, and the uncertainty / applicability-domain note.

## Acceptance checks
- [ ] Train and OOD eval groups share no scaffold/structure (verified disjoint).
- [ ] Both in-distribution and OOD metrics are reported, with the gap stated explicitly.
- [ ] At least one physical-constraint check is run and its pass/fail recorded.
- [ ] The note states the applicability domain and flags extrapolative queries.

## Worked example
Invocation: `Use $ood-science-eval to evaluate the band-gap GNN before screening 50k novel crystals.`
Good output: `science-eval.md` shows random-split MAE 0.18 eV but scaffold-split OOD MAE 0.41 eV (2.3x worse); 6% of predictions violate the non-negativity constraint; ensemble variance is high for >2-element systems — flagged as out-of-domain. Recommendation: do not screen multi-element systems without active-learning labels.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — datasets/scorers pattern for repeatable, sliced model evaluation.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — examples of held-out and stress-test eval design.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/evaluation` recipes for structuring eval reports and rubrics.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and evidence-producing skill design.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 11 — AI for Science: Surrogates, Property Prediction & Inverse Design
