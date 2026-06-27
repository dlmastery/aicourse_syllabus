---
name: verifiable-reward
description: Builds and validates a programmatic reward (answer-checking + format) and audits it for gameability with unit tests. Use when setting up RL with verifiable rewards (e.g., GRPO) and you need a reward that can't be trivially hacked.
---

# Verifiable Reward

A harness skill that turns a checkable task into a reward function and then attacks that function to find how a policy could game it. It encodes the judgment that a reward you didn't try to break is a reward that will be broken in training.

## When to use
- You're doing RL for reasoning (GRPO/RLVR) and need a programmatic reward.
- A reward function exists but you haven't checked its exploit surface.
- You want unit-tested reward logic before burning compute.

## Inputs
- A task with checkable answers (math, code, format-constrained outputs).

## Workflow
1. Implement answer-checking (exact / normalized / executable) plus format reward.
2. Write unit tests for correct, incorrect, and malformed outputs.
3. Run a gameability audit: list shortcuts that score high without being correct.
4. Patch the reward to close the top exploits; re-test.
5. Document residual gaming risk and how training would surface it.

## Outputs & evidence artifact
- `evidence/week11-grpo/` — the reward function, its unit tests, and the gameability audit.

## Acceptance checks
- [ ] Reward unit tests cover correct, incorrect, and malformed cases.
- [ ] A gameability audit lists concrete exploits and their status.
- [ ] At least one identified exploit is closed and re-tested.

## Worked example
`Use verifiable-reward for a math task` → exact-match on normalized answer + boxed-format check; audit finds "emit many guesses" exploit; patched to reward only the final boxed answer; tests green.

## Related skills in the wild
- [volcengine/verl](https://github.com/volcengine/verl) — RLVR/GRPO post-training with verifiable rewards.
- [huggingface/trl](https://github.com/huggingface/trl) — GRPO/reward-model training reference.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorers/checkers for reward validation.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for checkable tasks.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 11 — RL for Reasoning: GRPO and Verifiable Rewards
