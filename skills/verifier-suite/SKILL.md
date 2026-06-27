---
name: verifier-suite
description: Builds and validates the reward signal (outcome and/or process) that RL and best-of-N depend on, measuring its accuracy vs humans, its selection lift over majority vote, and its hacking surface. Use when standing up PRMs/ORMs and you need proof the verifier actually helps.
---

# Verifier Suite

A harness skill that constructs an outcome and/or process reward model and validates it three ways: agreement with humans, selection lift over a majority-vote baseline, and a documented reward-hacking probe. It encodes the judgment that a verifier is infrastructure — it must be measured before anything is built on it.

## When to use
- You're choosing between process (PRM) and outcome (ORM) reward models.
- A verifier will gate best-of-N selection or RL and must be trustworthy.
- You need evidence the verifier beats simple majority voting.

## Inputs
- A task with checkable or step-labeled correctness.
- A candidate verifier (PRM/ORM) and a human-labeled reference.

## Workflow
1. Measure verifier accuracy against human labels (outcome and, for PRMs, per-step).
2. Use the verifier to select among samples; compare to majority vote (selection lift).
3. Run a reward-hacking probe (adversarial high-scoring-but-wrong cases).
4. Compare PRM vs ORM where relevant on the same data.
5. Recommend the verifier and document its failure surface.

## Outputs & evidence artifact
- `evidence/week03-verifiers/report.md` — verifier accuracy vs human, selection lift over majority vote, and the documented reward-hacking probe.

## Acceptance checks
- [ ] Verifier accuracy vs human labels is reported.
- [ ] Selection lift over majority vote is measured.
- [ ] A reward-hacking probe is documented.

## Worked example
`Use verifier-suite on a math ORM vs PRM` → ORM 88% vs human; PRM gives +4 pts selection lift over majority vote; probe shows PRM fooled by confident wrong intermediate steps, flagged.

## Related skills in the wild
- [volcengine/verl](https://github.com/volcengine/verl) — RL stack with PRM/ORM reward models.
- [huggingface/trl](https://github.com/huggingface/trl) — reward-model training reference.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorers for verifier validation.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for selection/voting.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome
