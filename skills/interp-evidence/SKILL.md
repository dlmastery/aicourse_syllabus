---
name: interp-evidence
description: Hold an interpretability claim (a circuit or SAE feature) to a causal standard using max-activating examples plus an activation-patching/ablation test of necessity, with calibrated confidence. Use when you want to assert "this component does X" and need evidence beyond correlation.
---

# Interp Evidence

A harness skill that stops interpretability from being storytelling: a feature or circuit claim is only accepted once an intervention (patching/ablation) shows it is *causally necessary*, and the conclusion is stated with calibrated confidence.

## When to use
- You found a neuron/feature/circuit that "looks like" it encodes something.
- You want to claim a CoT or attention head is doing a specific computation.
- A reviewer asks whether your interpretability result is causal or just correlational.

## Inputs
- A specific circuit/feature claim and the model + layer/site it lives in.
- A dataset of inputs that vary the hypothesized concept.

## Workflow
1. Gather max-activating examples for the feature/component and state the hypothesized role.
2. Design a necessity test: activation patching (swap activations from a contrast input) or ablation (zero/mean-ablate the component).
3. Measure the behavioral effect of the intervention on the target task.
4. Check specificity: does ablating it leave unrelated behavior intact?
5. Write a confidence-calibrated interpretation (claim, strength of evidence, what would falsify it).

## Outputs & evidence artifact
- `interp-evidence.md` — max-activating examples, the patching/ablation result, the specificity check, and a calibrated conclusion.

## Acceptance checks
- [ ] At least one causal intervention (patch or ablation) is run, not just activation inspection.
- [ ] Necessity is quantified (effect size on the target behavior).
- [ ] Specificity is addressed (does it spare unrelated behavior?).
- [ ] The interpretation states confidence and a falsifier.

## Worked example
`Use $interp-evidence on the "induction head" claim in layer 5` → max-activating examples are repeated bigrams; ablating the head drops copy accuracy 71%→9% while leaving unrelated tasks intact. Conclusion: strong evidence it is causally necessary for induction.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scorer scaffolding for measuring intervention effects.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability and evaluation recipes useful for interpretability experiments.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence-artifact conventions.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 7 — Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring
