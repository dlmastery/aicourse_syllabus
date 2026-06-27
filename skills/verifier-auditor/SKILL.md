---
name: verifier-auditor
description: Stress-tests a reward model or judge for gaming, reporting concrete exploits and their held-out impact in an incident report. Use when a reward/judge drives training or selection and you need to know how it can be fooled before it is.
---

# Verifier Auditor

A harness skill that red-teams a verifier — a reward model, LLM judge, or scorer — to find inputs that score high while being wrong, and quantifies the damage on held-out data. It encodes the judgment that any verifier optimized against will eventually be gamed, so its exploits must be found deliberately.

## When to use
- A reward model or LLM-judge will be optimized against (RL or best-of-N).
- You suspect a judge is fooled by length, formatting, or confident tone.
- A postmortem needs an incident report on a reward-hacking failure.

## Inputs
- A reward/judge under test.
- A held-out set with trusted labels.

## Workflow
1. Probe with adversarial inputs (length padding, format tricks, sycophancy, fake citations).
2. Catalog exploits that score high but are actually wrong.
3. Quantify each exploit's impact on the held-out trusted labels.
4. Rank exploits by severity and ease.
5. Write the incident report with reproductions and suggested hardening.

## Outputs & evidence artifact
- The incident report — discovered exploits, reproductions, and held-out impact.

## Acceptance checks
- [ ] At least one concrete, reproducible exploit is documented.
- [ ] Each exploit's impact is measured on held-out trusted labels.
- [ ] Exploits are ranked and paired with hardening suggestions.

## Worked example
`Use verifier-auditor on the helpfulness reward model` → discovers it favors longer answers regardless of correctness; on held-out data, padding flips 12% of rankings; report recommends length-debiasing.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scorer framework for adversarial probing.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — red-team/safety evals.
- [huggingface/trl](https://github.com/huggingface/trl) — reward-model training to audit.
- [volcengine/verl](https://github.com/volcengine/verl) — RL stack where reward hacking surfaces.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 5 — Verifiers, Rewards & the Reward-Hacking Problem
