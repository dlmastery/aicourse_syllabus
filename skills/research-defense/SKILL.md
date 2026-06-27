---
name: research-defense
description: Stress-test a research claim before and during presentation — surface the three hardest questions, the baseline/ablation gaps, and the most challengeable over-claim, each with a prepared answer. Use when prepping a conference-style talk or defense.
---

# Research Defense

An adversarial-prep harness for talks. It encodes the judgment that the questions you fear are the ones you must answer first — so you red-team your own claim before the audience does.

## When to use
- You are about to present a paper/result and want to survive Q&A.
- A reviewer or committee will probe baselines, ablations, and over-claims.
- You need a written defense brief tied to your evidence.

## Inputs
- The paper, talk, or result being presented (claims, baselines, ablations).

## Workflow
1. Extract the central claim and its supporting evidence.
2. List the three hardest questions an expert would ask.
3. Identify missing or weak baselines and ablations.
4. Name the single over-claim most likely to be challenged.
5. Draft a prepared, evidence-backed answer for each item.
6. Commit the defense brief.

## Outputs & evidence artifact
- `final/defense-prep.md` — the three hardest questions, the baseline/ablation gaps, the most challengeable over-claim, and prepared answers for each.

## Acceptance checks
- [ ] Each hard question has a concrete, evidence-backed answer.
- [ ] Baseline/ablation gaps are named, not hand-waved.
- [ ] The riskiest over-claim is identified and softened or defended.

## Worked example
`Use $research-defense on my world-model talk.` → "Q1: why no Genie baseline? — A: compute-bound, but we match IRIS at 1/3 params (Table 2). Riskiest over-claim: 'general' simulator — soften to 'within-distribution'; ablation gap: no action-conditioning ablation — flag as future work."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework to back up defense answers with reproducible numbers.
- [obra/superpowers](https://github.com/obra/superpowers) — brainstorming and systematic-debugging methodology for adversarial self-review.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for baseline/ablation rigor.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 13 — Final Talks: Conference-Style Presentations & Defense
