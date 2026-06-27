---
name: rlhf-monitor
description: Monitor an RLHF/PPO run for reward and KL trajectories and reward-hacking signatures (length inflation, repetition, sycophancy), then call stop or continue. Use when training a reward model + PPO policy and you need to catch collapse early.
---

# RLHF Monitor

A run-monitoring harness for RLHF. It encodes the judgment that PPO can climb reward while degrading the policy — so you watch reward *and* KL together and screen for hacking signatures before they bake in.

## When to use
- You are running PPO against a reward model and need a stop/continue call.
- Reward is rising but you suspect length inflation or sycophancy.
- A run is drifting from the reference and you need a KL read.

## Inputs
- A PPO run's logs (reward, KL to reference) and sampled generations over time.

## Workflow
1. Plot reward and KL-to-reference over training steps.
2. Sample generations at checkpoints and scan for hacking signatures.
3. Score length inflation, repetition, and sycophancy on a fixed probe set.
4. Compare against the reference policy on held-out prompts.
5. Make an explicit stop/continue call with the reason.
6. Commit plots and the checklist.

## Outputs & evidence artifact
- `evidence/week09-rlhf/` — reward/KL plots, a hacking-signature checklist, and a documented stop/continue call.

## Acceptance checks
- [ ] Reward and KL are tracked together, not reward alone.
- [ ] Length/repetition/sycophancy are screened on a fixed probe set.
- [ ] A stop/continue decision is recorded with its justification.

## Worked example
`Use $rlhf-monitor on step 1.2k.` → "reward +0.4 but KL spiking to 18 and mean length +60%; sycophancy probe up. Call: stop — reward gain is length-driven; add KL penalty and length normalization before resuming."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — canonical PPO/RLHF implementation and logging.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RLHF/GRPO post-training.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and observability recipes.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for sycophancy/hacking probes.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 9 — Reward Modeling & RLHF (PPO)
