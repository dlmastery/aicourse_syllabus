---
name: verifiable-rft
description: Improves a verifiable skill via reinforcement fine-tuning with a programmatic reward, then proves the gain over SFT and inspects for reward hacking. Use when RFT should beat a fine-tuned baseline on a checkable task and you must show the delta and the anti-gaming checks.
---

# Verifiable RFT

A harness skill that runs reinforcement fine-tuning on a task with a checkable reward and reports the improvement over the SFT checkpoint alongside a reward-hacking inspection. It encodes the judgment that an RFT run is only successful if it beats SFT on held-out eval without gaming the reward.

## When to use
- You have an SFT checkpoint and a checkable reward and want more capability.
- You need to justify RFT cost with a measured delta over SFT.
- You must show the policy isn't exploiting the reward.

## Inputs
- A task with a checkable/programmatic reward (ideally from `verifiable-reward`).
- An SFT checkpoint as the starting point and baseline.

## Workflow
1. Define/confirm the reward and freeze the held-out eval.
2. Run RFT (e.g., GRPO); log the training/reward curve.
3. Evaluate the RFT checkpoint vs SFT on the held-out set; compute the delta.
4. Inspect generations for reward hacking (format gaming, degenerate strategies).
5. Report the delta, curve, and reward-hacking findings.

## Outputs & evidence artifact
- `evidence/week07-rft-distill/report.md` — reward definition, training curve, eval delta vs SFT, and the reward-hacking inspection.

## Acceptance checks
- [ ] Eval delta vs SFT is reported on a frozen held-out set.
- [ ] The training/reward curve is included.
- [ ] A reward-hacking inspection of generations is documented.

## Worked example
`Use verifiable-rft on the code task from the SFT checkpoint` → GRPO adds +7 pts pass@1 over SFT; reward curve rises smoothly; inspection finds no test-gaming after hidden-test holdout.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — GRPO/RFT trainers and reward integration.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RLVR/RFT post-training stack.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — held-out eval scorers.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences
