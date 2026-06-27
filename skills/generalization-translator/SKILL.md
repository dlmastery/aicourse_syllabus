---
name: generalization-translator
description: Translate learning-theory language (capacity, uniform convergence, VC dimension) into one practical lesson plus one misuse to avoid. Use when a theory result needs to become an actionable modeling rule, not just a bound.
---

# Generalization Translator

A harness for turning learning theory into practice. It encodes the judgment that bounds are rarely tight enough to use directly — their value is the *intuition* they license, and the danger is over-applying that intuition past where it holds.

## When to use
- You just learned a generalization result (VC, uniform convergence, bias-variance) and ask "so what?"
- A theory claim is being misused to justify a modeling choice.
- You are teaching/learning and want the one practical takeaway plus the trap.

## Inputs
- A learning-theory concept or result (capacity, uniform convergence, VC dimension, regularization).

## Workflow
1. State the result plainly: what it actually claims and under what assumptions.
2. Extract one practical lesson it licenses (e.g., "more capacity needs more data or regularization").
3. Name one common misuse — where the intuition is applied past its assumptions.
4. Give a concrete example of each (the lesson applied; the misuse avoided).
5. Commit the theory note.

## Outputs & evidence artifact
- `evidence/generalization-note.md`: the practical lesson, the misuse to avoid, and a worked example of each.

## Acceptance checks
- [ ] The result's assumptions are stated, not just its conclusion.
- [ ] Exactly one practical lesson and one misuse are given.
- [ ] Both are illustrated with a concrete example.

## Worked example
`Use $generalization-translator on VC dimension`. Good output: lesson "richer hypothesis class → need more data/regularization to generalize"; misuse "reading the loose VC bound as a real sample-size requirement"; each with a small example.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example skills for explainer-style procedures.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — recipes for grounded, example-driven technical explanation.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — curated skills including teaching/explanation helpers.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog spanning educational skills.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 9 — Bias, Variance, Regularization & Generalization (Learning-Theory Intuition)
