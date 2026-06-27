---
name: tabular-model-review
description: Runs an honest structured-data model comparison with a defensible split, slice analysis, leakage check, and calibration note before picking a model. Use when choosing between models on tabular data and you must justify the pick beyond a single aggregate metric.
---

# Tabular Model Review

A harness skill that compares candidate models on structured data the way a careful practitioner would — checking the split, slices, leakage, and calibration before declaring a winner. It encodes the judgment that aggregate accuracy hides leakage and slice failures that decide real-world value.

## When to use
- You have several models on a tabular dataset and need to pick one.
- A model's headline metric looks suspiciously good (possible leakage).
- A stakeholder needs the reasoning behind the chosen model.

## Inputs
- A dataset (with features and target).
- Candidate models / pipelines.

## Workflow
1. Choose and justify the split strategy (temporal/grouped to avoid leakage).
2. Compare candidates on aggregate metrics and on meaningful slices.
3. Audit for leakage (target-derived features, train/test contamination).
4. Note calibration concerns (does predicted probability mean what it says?).
5. Make a justified pick, with the runner-up and the trade-off stated.

## Outputs & evidence artifact
- A model-review note: split strategy, slice comparison, leakage findings, calibration concern, and the justified pick.

## Acceptance checks
- [ ] Split strategy is stated and defended against leakage.
- [ ] Slice comparison (not just aggregate) is included.
- [ ] A leakage check and a calibration note are recorded.

## Worked example
`Use tabular-model-review on the churn dataset with XGBoost vs logistic regression` → grouped split by customer, XGBoost wins overall but underperforms on new-customer slice; one leaked feature removed; pick XGBoost with calibration caveat.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example skills.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable ML/data app references.
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated review/analysis workflows.
- [obra/superpowers](https://github.com/obra/superpowers) — verification-before-completion methodology.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 7 — First Models II: Trees, Ensembles & Strong Baselines
