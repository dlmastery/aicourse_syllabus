---
name: ship-review
description: Runs a structured pre-deployment review of an AI system through multiple stakeholder lenses and ends in a go/no-go decision with conditions. Use before shipping any domain AI system when you need a defensible ship/hold record.
---

# Ship Review

A harness skill that simulates a stakeholder + regulator panel reviewing a candidate system, lens by lens, and forces an explicit go/no-go. It encodes the judgment that "looks done" is not "safe to ship," and that the decision and its conditions must be written down.

## When to use
- A domain AI system is "feature complete" and someone has to decide whether to deploy.
- You need a cross-vertical review (safety, legal/regulatory, UX, ops, business).
- A regulator or exec asks for the reasoning behind a ship/hold decision.

## Inputs
- A candidate system (description, demo, metrics, known limitations).
- Its deployment context (users, jurisdiction, stakes).

## Workflow
1. Enumerate review lenses (safety, fairness, regulatory, reliability, privacy, UX, ops, cost).
2. For each lens, record findings and the worst plausible failure.
3. Rank the top-3 unmitigated risks across all lenses.
4. Decide go / no-go / conditional-go; for conditional, list the gating conditions.
5. Write the review so the decision is reproducible.

## Outputs & evidence artifact
- `ship-review.md` — lens-by-lens findings, top-3 unmitigated risks, and the go/no-go with conditions.

## Acceptance checks
- [ ] Every lens has at least one finding (or an explicit "N/A, because").
- [ ] Top-3 risks are ranked and tied to specific lenses.
- [ ] The decision is one of go / no-go / conditional, with conditions if conditional.

## Worked example
`Use ship-review on the clinical triage assistant` → 8 lenses reviewed, top-3 risks (calibration on minority slice, audit-log gap, unclear FDA pathway), verdict: conditional-go pending two fixes.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — AISI eval framework for the safety/reliability lenses.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built safety/red-team evals to cite as evidence.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.
- [obra/superpowers](https://github.com/obra/superpowers) — verification-before-completion methodology.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis
