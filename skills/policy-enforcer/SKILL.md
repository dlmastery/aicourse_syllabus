---
name: policy-enforcer
description: Compiles a written model spec / content policy into an enforceable, measurable guardrail layer with input/output filters and a measured operating point. Use when turning a moderation policy into real guardrails (Llama Guard, NeMo Guardrails) that must be tested, not just declared.
---

# Policy Enforcer

A harness that turns prose policy into measured enforcement. It encodes the judgment that a guardrail is only real when it has a precision/recall number, a chosen operating point, and a written list of the gaps it still misses.

## When to use
- You have a model spec / content policy and need to turn it into actual input and output filters.
- A guard model (Llama Guard, NeMo Guardrails) is deployed but its precision/recall on your policy is unknown.
- You must pick and justify an operating point (block-rate vs false-positive trade-off) and document residual risk.

## Inputs
- The model spec / content policy (the rules to enforce).
- A guard model or classifier to enforce them.
- A labeled eval set of allowed and disallowed examples.

## Workflow
1. Translate each policy clause into concrete input filters and output filters.
2. Run the guard model over the labeled eval set; score precision and recall per category.
3. Choose an operating point (threshold) that meets the policy's risk tolerance; record the block/allow trade-off.
4. Build the residual-gap list: categories or phrasings the guardrail still misses or over-blocks.
5. Package filters, metrics, operating point, and gaps as the deployable enforcement layer.

## Outputs & evidence artifact
- `evidence/week05-moderation/` containing: the input/output filters, per-category precision/recall, the chosen operating point, and the residual-gap list.

## Acceptance checks
- [ ] Every policy clause maps to a concrete input or output filter.
- [ ] Precision and recall are measured on a labeled eval set.
- [ ] An operating point is chosen and its trade-off is justified.
- [ ] A residual-gap list documents what the guardrail still misses.

## Worked example
Invocation: `Use $policy-enforcer to compile the self-harm + PII policy into Llama Guard filters.`
Good output: `evidence/week05-moderation/` — input filter blocks 4 prompt categories, output filter redacts PII; Llama Guard at threshold 0.6 gives self-harm recall 0.94 / precision 0.81, PII recall 0.88; operating point chosen to favor recall (safety-critical). Residual gaps: indirect self-harm phrasing and non-US ID formats under-caught. Recommendation: add regex backstop for ID formats, escalate ambiguous self-harm to human review.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer/dataset framework for measuring guardrail precision/recall.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — red-team and safety eval suites to stress-test the policy layer.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official classification and moderation recipes for filter design and grading.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and evidence-producing skill design.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 5 — Model Specs, Content Policies & Moderation (Llama Guard, NeMo Guardrails)
