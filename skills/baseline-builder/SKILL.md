---
name: baseline-builder
description: For any new dataset, propose the simplest reasonable baseline and an evaluation plan before any complex model. Use at the start of an ML task to set a bar a fancy model must beat and to name why complexity isn't yet justified.
---

# Baseline Builder

A discipline harness for the start of any ML task. The judgment it encodes: you can't know a complex model is worth it until a dumb baseline has been beaten — and the baseline must come with the metric and critical slices that define "better."

## When to use
- Starting modeling on a fresh dataset.
- Someone wants to jump straight to deep learning.
- You need a defensible bar before investing in a complex model.

## Inputs
- The dataset and the prediction target.

## Workflow
1. Build a naive baseline (majority class, mean, or simple heuristic).
2. Fit a first interpretable model (linear/logistic regression).
3. Choose the evaluation metric appropriate to the task.
4. Identify the critical slices where errors matter most.
5. State one concrete reason a complex model is *not yet* justified.

## Outputs & evidence artifact
- A baseline memo: the naive baseline, the first interpretable model, the metric, the critical slices, and one reason complexity isn't yet justified.

## Acceptance checks
- [ ] Both a naive baseline and an interpretable model are scored.
- [ ] The metric and critical slices are named.
- [ ] A concrete reason against premature complexity is stated.

## Worked example
`Use $baseline-builder on the churn dataset.` → Majority-class 0.62 accuracy, logistic regression 0.78 AUC, metric = AUC, slices = new vs tenured customers, "no complex model until logistic plateaus on the new-customer slice."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for defining metrics and baselines.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for reproducible scoring and slicing.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable apps to compare a simple baseline against fancier approaches.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 6 — First Models I: Linear & Logistic Regression (Now With, Then Without, scikit-learn)
