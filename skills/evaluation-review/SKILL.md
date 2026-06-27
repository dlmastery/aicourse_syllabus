---
name: evaluation-review
description: Review any result for what the headline metric hides — threshold/calibration issues, critical slices, and whether the evidence supports the claim. Use when sanity-checking an experiment before believing or shipping it.
---

# Evaluation Review

A critique harness for results. It encodes the judgment that most overclaims survive because nobody asked what the main metric hides — so this skill forces a checklist over thresholds, calibration, slices, and the claim-to-evidence link.

## When to use
- You (or a teammate) report a result and want a second-pair-of-eyes review before acting.
- A single aggregate metric looks great and you are suspicious.
- You are teaching error analysis and experiment design.

## Inputs
- A result: the metric(s), the threshold/decision rule, and the underlying predictions.
- The claim being made from the result.

## Workflow
1. Ask what the headline metric hides (class imbalance, base rates, averaging).
2. Check the threshold and calibration: is the operating point justified and calibrated?
3. Slice the data: find the critical slice where performance collapses.
4. Test the claim-to-evidence link: does the evidence actually support the stated claim?
5. Write the review note with the weakest point and the cheapest follow-up check.

## Outputs & evidence artifact
- `evidence/evaluation-review-note.md`: the review note covering metric blind spots, threshold/calibration, the worst slice, and the claim-evidence verdict.

## Acceptance checks
- [ ] At least one thing the main metric hides is named.
- [ ] A critical slice is identified (not just the aggregate).
- [ ] The note states whether the evidence supports the claim, with the gap if not.

## Worked example
`Use $evaluation-review on this 94%-accuracy classifier`. Good output: a note flagging 88% base-rate (so 94% is weak), an uncalibrated 0.5 threshold, a minority slice at 61%, and verdict "claim of 'production-ready' unsupported."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for slice analysis and calibration.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for re-scoring and slicing results.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology that pairs with result critique.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog including review/critique skills.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 8 — Evaluation, Error Analysis & Experiment Design
