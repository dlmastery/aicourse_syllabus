---
name: uncertainty-reader
description: Translates a probabilistic model output into plain-English meaning plus one base-rate caution and one failure case. Use when a model emits a probability/confidence and someone is about to act on it without understanding what it actually claims.
---

# Uncertainty Reader

A harness skill that converts a raw probability into what it does and doesn't mean, with the base-rate trap spelled out. It encodes the judgment that a probability is only actionable once you state its reference class and what it ignores.

## When to use
- A classifier/model outputs a probability someone wants to treat as truth.
- A "95% confident" number is about to drive a decision.
- You're teaching how to read calibration and base rates.

## Inputs
- A predicted probability (or confidence/score).
- The decision context (base rate, cost of errors).

## Workflow
1. State the interpretation in plain English ("of cases like this, ~X% are positive").
2. Name the reference class and the base rate it depends on.
3. State what the number ignores (calibration, distribution shift, conditioning).
4. Give one concrete failure case where acting on it goes wrong.
5. Offer the one caution a decision-maker most needs.

## Outputs & evidence artifact
- A short interpretation note: plain-English meaning, what it ignores, and one failure case.

## Acceptance checks
- [ ] The interpretation names the reference class / base rate.
- [ ] At least one thing the number ignores is stated.
- [ ] One concrete failure case is given.

## Worked example
`Use uncertainty-reader on "0.92 spam"` → "~92% of emails scored like this are spam if the model is calibrated; ignores that this sender is new (shift); failure case: an important first-contact email auto-deleted."

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example skills.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scoring framework incl. calibration.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable apps surfacing model confidence.
- [obra/superpowers](https://github.com/obra/superpowers) — structured-reasoning methodology.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 4 — Probability & Statistics: The Language of Uncertainty
