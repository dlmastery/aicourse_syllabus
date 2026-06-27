---
name: constitutional-aligner
description: Align a model from a written constitution via critique→revise→RLAIF and compare it against RLHF. Use when post-training with AI feedback and you need an aligned model plus an honest RLHF-vs-RLAIF tradeoff report.
---

# Constitutional Aligner

A harness for Constitutional AI / RLAIF. It encodes the judgment that alignment from written principles is only credible if you can show the critique→revise loop changed behavior and can state where AI feedback is cheaper but weaker than human feedback.

## When to use
- You are implementing Constitutional AI or RLAIF on a base model.
- You need to compare AI-generated preferences against human preferences honestly.
- You want a reproducible aligned checkpoint plus a defensible tradeoff writeup.

## Inputs
- A base (or SFT) model to align.
- A written constitution: the principles the model should follow.
- A prompt set covering the behaviors the constitution targets.

## Workflow
1. Generate responses, then have the model critique each against a constitutional principle.
2. Revise responses per the critique to build a self-improved response set.
3. Form AI preference pairs from revisions and train a preference/reward signal (RLAIF).
4. Fine-tune the policy against that signal; produce the aligned checkpoint.
5. Compare RLAIF vs an RLHF baseline on the same prompts: where it matches, where it lags.
6. Commit the model, preference set, and tradeoff report under `evidence/week09-cai/`.

## Outputs & evidence artifact
- `evidence/week09-cai/`: the aligned model, the AI-preference set, and the RLHF-vs-RLAIF tradeoff report.

## Acceptance checks
- [ ] The critique→revise loop is shown changing at least a sample of responses.
- [ ] Preference pairs trace back to specific constitutional principles.
- [ ] The tradeoff report names a concrete case where AI feedback under-performs human feedback.

## Worked example
`Use $constitutional-aligner with this harmlessness constitution`. Good output: an aligned checkpoint, 500 AI preference pairs tagged by principle, and a report showing RLAIF matches RLHF on harmlessness but trails on nuanced helpfulness.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — DPO/PPO/reward-model training for the RLAIF/RLHF steps.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RL post-training for preference optimization.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for alignment-style critique/evaluation prompts.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — evals to verify the aligned model on safety axes.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 9 — Scalable Oversight, Constitutional AI & RLAIF
