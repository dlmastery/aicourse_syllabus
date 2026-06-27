---
name: project-evidence-packet
description: Assembles a framing memo, baseline, comparison, eval note, and generalization note into one reviewable bundle that proves a from-scratch ML project actually works. Use to close out an ML capstone when scattered notebooks need to become a single defensible deliverable.
---

# Project Evidence Packet

A harness skill that binds the artifacts of a from-scratch ML project into one reviewable packet. It encodes the judgment that a result is only credible when framing, baseline, comparison, evaluation, and a generalization check sit together — the packet *is* the deliverable.

## When to use
- Wrapping up a from-scratch ML project and you need one bundle a reviewer can judge end to end.
- You have notebooks and metrics scattered around and must show baseline-vs-method honestly.
- A grader or peer needs to see not just the score but whether it generalizes.

## Inputs
- A framing memo, a baseline result, a comparison (method vs. baseline), an eval note, and a generalization note.

## Workflow
1. Write the framing memo: the problem, the data, and what "good" means.
2. Establish a baseline and record its number.
3. Compare your method against the baseline on the same eval.
4. Write the eval note: metric, protocol, and what the numbers mean.
5. Write the generalization note: held-out / out-of-distribution behavior and limits.
6. Assemble the five parts into one bundle and commit it as the deliverable.

## Outputs & evidence artifact
- The assembled packet — framing memo + baseline + comparison + eval note + generalization note in one reviewable bundle. This *is* the deliverable.

## Acceptance checks
- [ ] All five parts are present in a single bundle.
- [ ] The comparison evaluates method and baseline on the same protocol.
- [ ] The eval note states the metric and how it was measured.
- [ ] The generalization note reports held-out behavior and stated limits.

## Worked example
Invocation: `Use $project-evidence-packet to close out the from-scratch classifier project.` Good output: a bundle whose index reads "Framing: predict churn from usage logs · Baseline: majority class 0.62 acc · Method: hand-built logistic regression 0.79 acc / 0.74 F1 · Eval: 5-fold CV, F1 chosen for class imbalance · Generalization: holds at 0.71 F1 on a later month; degrades if signup cohort shifts."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official evaluation recipes for structuring eval notes and scorecards
- [obra/superpowers](https://github.com/obra/superpowers) — writing-plans / TDD methodology for evidence-producing project work
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and skill-creator authority
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable end-to-end app examples to model packet structure on

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 10 — Capstone: A From-Scratch ML Project With an Evidence Packet
