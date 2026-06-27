---
name: alignment-tax-meter
description: Quantify the safety/capability trade-off of an intervention — capability vs safety vs over-refusal, before/after — into a ship/no-ship call. Use after RLHF/safety fine-tuning when you must prove safety gains didn't gut capability.
---

# Alignment Tax Meter

A measurement harness for the cost of safety interventions. The judgment it encodes: every safety intervention has a tax — lost capability or new over-refusals — and you can't make a ship decision without measuring all three axes before and after.

## When to use
- After RLHF, RLVR, or safety fine-tuning changed model behavior.
- A safety gain is claimed but capability impact is unmeasured.
- Over-refusal complaints suggest the model became too cautious.

## Inputs
- The model before and after the intervention.
- Capability, safety, and over-refusal eval sets.

## Workflow
1. Run capability evals on before and after models.
2. Run safety evals on both.
3. Run over-refusal (false-refusal) evals on both.
4. Tabulate the three axes as a before/after trade-off table.
5. Make a ship/no-ship recommendation against the agreed thresholds.

## Outputs & evidence artifact
- `evidence/week02-tax.md`: the capability/safety/over-refusal trade-off table and a ship/no-ship recommendation.

## Acceptance checks
- [ ] All three axes (capability, safety, over-refusal) are measured before and after.
- [ ] The trade-off is shown as a single comparable table.
- [ ] A ship/no-ship call is made against explicit thresholds.

## Worked example
`Use $alignment-tax-meter on our safety-tuned checkpoint.` → Safety +18%, capability −2%, over-refusal +6% (above the 5% bar) → recommendation: no-ship until over-refusal is reduced.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework to score the capability and safety axes reproducibly.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built safety and capability evals for the before/after table.
- [huggingface/trl](https://github.com/huggingface/trl) — RLHF/DPO library that produces the interventions being taxed.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 2 — Where Safety Enters Modern LLM Training (RLHF, RLVR, Safety Fine-Tuning)
