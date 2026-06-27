---
name: xai-audit
description: Interrogates whether a vision model is right for the right reasons using saliency over TP/FP/FN cases, names suspected shortcuts, and issues a trust/don't-trust production verdict. Use when a vision model's accuracy looks good but you must rule out shortcut learning before deployment.
---

# XAI Audit

A harness skill that uses explainability (saliency) on correct and incorrect predictions to expose shortcut features, then issues an evidence-backed deployment verdict. It encodes the judgment that high accuracy can hide a model keying on artifacts (rulers, scanner tags), which is dangerous in high-stakes domains.

## When to use
- A vision model (esp. medical/safety-critical) is about to ship.
- Accuracy is high but you suspect dataset shortcuts or spurious cues.
- A regulator/clinician asks why the model made a decision.

## Inputs
- A trained vision model.
- A held-out batch including true positives, false positives, and false negatives.

## Workflow
1. Sample TP/FP/FN cases from the held-out batch.
2. Overlay saliency maps (Grad-CAM or equivalent) on each.
3. Name suspected shortcuts (off-object focus, acquisition artifacts).
4. Propose a data/augmentation fix for each shortcut.
5. Issue a "trust / don't trust in production" verdict with the evidence.

## Outputs & evidence artifact
- `xai-audit.md` — saliency maps for TP/FP/FN, the suspected-shortcut list, and the production trust verdict.

## Acceptance checks
- [ ] Saliency is shown for TP, FP, and FN cases.
- [ ] At least one suspected shortcut is named with a proposed fix.
- [ ] A trust/don't-trust verdict is given with supporting evidence.

## Worked example
`Use xai-audit on the pneumonia classifier` → saliency for several positives lands on the scanner laterality marker, not the lung; shortcut flagged; fix: crop/augment markers; verdict: don't trust until retrained.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scorer framework for structured audits.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — safety/robustness evals for shortcut testing.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.
- [obra/superpowers](https://github.com/obra/superpowers) — verification-before-completion methodology.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)
