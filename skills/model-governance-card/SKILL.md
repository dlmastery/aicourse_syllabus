---
name: model-governance-card
description: Assemble the regulator-facing dossier for a high-risk model — intended use, development/validation summary, calibration, fairness test, reason-code method, monitoring plan, and known limitations. Use when a model falls under SR 11-7 / ECOA / FCRA-style governance and needs an auditable card.
---

# Model Governance Card

A harness skill for regulated ML (e.g., credit risk): it produces the dossier a model-risk reviewer or regulator expects, with the parts that are legally load-bearing — calibration, a fairness test, and the reason-code (adverse-action) method.

## When to use
- A model is high-risk/regulated (lending, insurance, hiring) and needs documented governance.
- You must show calibration, fairness, and explainability evidence, not just accuracy.
- A model-risk function (SR 11-7 style) will review the model before deployment.

## Inputs
- A trained model and its data card (data sources, features, target definition).
- Protected-attribute information for the fairness test and a validation dataset.

## Workflow
1. State intended use and scope (and out-of-scope uses).
2. Summarize development and validation (methodology, performance on the validation set).
3. Report calibration (reliability curve / calibration error).
4. Run a fairness test across protected groups; report disparities.
5. Document the reason-code / adverse-action explanation method.
6. Write the monitoring plan and the known limitations.

## Outputs & evidence artifact
- `governance-card.md` — intended use, development/validation summary, calibration, fairness test, reason-code method, monitoring plan, and known limitations.

## Acceptance checks
- [ ] Calibration is reported, not just discrimination/AUC.
- [ ] A fairness test across protected groups is included with results.
- [ ] The reason-code/adverse-action method is documented.
- [ ] A monitoring plan and explicit limitations are present.

## Worked example
`Use $model-governance-card for my credit-risk model` → card with intended use, validation AUC 0.78, ECE 0.03, fairness gap within threshold, SHAP-based reason codes, drift-monitoring plan, and limitations on thin-file applicants.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — evaluation framework for the validation/fairness evidence.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals adaptable to governance testing.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation recipes for calibration/fairness checks.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)
