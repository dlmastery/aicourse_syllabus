---
name: sae-feature-lab
description: Train and interpret sparse-autoencoder features on a model layer — produce a feature dictionary with max-activating examples and ablation-validated interpretations. Use when doing mechanistic interpretability via SAEs and claims about features must be tested, not asserted.
---

# SAE Feature Lab

A mechanistic-interpretability harness for sparse autoencoders. It encodes the judgment that a feature interpretation is a hypothesis until an ablation confirms the feature causally does what its max-activating examples suggest.

## When to use
- You are training an SAE on a layer to find interpretable features.
- A feature's meaning is guessed from examples and needs causal validation.
- You want a feature dictionary backed by evidence.

## Inputs
- A model, a target layer, and an activation corpus to train the SAE on.

## Workflow
1. Collect activations from the chosen layer over the corpus.
2. Train the SAE (sparsity + reconstruction objective).
3. For each feature, gather max-activating examples.
4. Form an interpretation hypothesis per notable feature.
5. Ablate/steer the feature and confirm the predicted behavior change.
6. Keep ablation-validated interpretations; commit the dictionary.

## Outputs & evidence artifact
- `evidence/week07-sae/` — trained SAE, a feature dictionary with max-activating examples, and ablation-validated interpretations.

## Acceptance checks
- [ ] Features have max-activating examples, not just labels.
- [ ] Each kept interpretation is ablation- or steering-validated.
- [ ] Reconstruction and sparsity of the SAE are reported.

## Worked example
`Use $sae-feature-lab on layer 8 of the model.` → "feature 412 fires on Python error-handling tokens; ablating it degrades try/except completion specifically; interpretation kept. Feature 77 looked like 'dates' but ablation had no effect — dropped."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for behavior-change scoring after ablation.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes incl. interpretability-adjacent observability.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 7 — Mechanistic Interpretability I: Sparse Autoencoders (SAEs)
