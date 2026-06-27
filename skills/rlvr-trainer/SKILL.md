---
name: rlvr-trainer
description: A verifiable-reward RL harness (verifier + group sampler + GRPO/DAPO objective) that trains a model and reports pass@k, length/format metrics, and a verifier-gaming report. Use when post-training a reasoning model with RLVR and comparing objective variants.
---

# RLVR Trainer

A training harness for RL with verifiable rewards. It encodes the judgment that a verifier-driven objective only works if you also watch for verifier gaming and compare objective variants at matched compute.

## When to use
- You are post-training a reasoning model with GRPO/DAPO/Dr.GRPO.
- You need pass@k plus format/length diagnostics, not just reward.
- You must pick an objective variant on evidence.

## Inputs
- A base model, a prompt set, a verifier function, and the objective variant(s) to compare.

## Workflow
1. Wire the verifier as the reward signal.
2. Set up group sampling (multiple completions per prompt).
3. Train under the chosen objective (GRPO/DAPO/Dr.GRPO).
4. Evaluate pass@k plus length and format-compliance metrics.
5. Run a verifier-gaming probe (does it satisfy the checker without solving?).
6. Ablate variants at matched compute; commit the comparison.

## Outputs & evidence artifact
- `evidence/week09-rlvr/` — trained model, pass@k, length/format metrics, a verifier-gaming report, and the variant ablation.

## Acceptance checks
- [ ] pass@k is reported alongside length/format metrics.
- [ ] A verifier-gaming probe is run and its result recorded.
- [ ] Objective variants are compared at matched compute.

## Worked example
`Use $rlvr-trainer to compare GRPO vs Dr.GRPO on math.` → "GRPO pass@1 38%→52%, length stable; Dr.GRPO 38%→50% with shorter outputs; no verifier gaming found. Pick Dr.GRPO for tighter outputs at equal accuracy."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — GRPO/PPO trainers and verifiable-reward recipes.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable GRPO/DAPO post-training (DeepSeek-R1 lineage).
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for pass@k scoring.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` recipes.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO
