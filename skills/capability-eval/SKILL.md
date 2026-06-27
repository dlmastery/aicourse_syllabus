---
name: capability-eval
description: Run elicitation-strong capability evals and map them to scaling/safeguard decisions. Use when assessing whether a model has a dangerous capability and a weak prompt would falsely conclude it's safe.
---

# Capability Eval

An elicitation harness for dangerous-capability evaluation. The judgment it encodes: absence of evidence isn't evidence of absence — a weak prompt can hide a real capability, so you must elicit hard before concluding a model lacks it, and tie the result to a scaling decision.

## When to use
- Assessing whether a model has a potentially dangerous capability.
- A responsible-scaling policy requires a capability threshold check.
- A weak eval suggests "safe" and you need to rule out under-elicitation.

## Inputs
- The model, a capability task suite, and elicitation methods (prompting, tools, fine-tuning).

## Workflow
1. Define the capability and a task suite that measures it.
2. Apply elicitation methods to maximize measured capability.
3. Log every elicitation attempt (so under-elicitation is auditable).
4. Score the capability with a confidence interval.
5. Map the score to a threshold/safeguard recommendation.

## Outputs & evidence artifact
- `evidence/week10-capability/`: the capability score with CI, the elicitation log, and a threshold/safeguard recommendation.

## Acceptance checks
- [ ] Multiple elicitation methods were applied and logged.
- [ ] The score is reported with a confidence interval.
- [ ] A threshold/safeguard recommendation is tied to the result.

## Worked example
`Use $capability-eval on a model's cyber-offense capability.` → Suite of 25 tasks, elicitation via tools + few-shot, score 0.34 ± 0.06, elicitation log attached, recommendation: below threshold, re-test next scale-up.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI framework purpose-built for capability and safety evals.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built dangerous-capability and red-team evals.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for elicitation and scoring.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 10 — Dangerous Capabilities, Responsible Scaling & Takeoff
