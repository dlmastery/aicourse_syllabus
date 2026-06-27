---
name: grpo-trainer
description: Run a verifiable-reward GRPO loop (DeepSeek-R1 style) where the reward curve is co-plotted against a held-out eval and audited for reward hacking. Use when post-training a base/SFT model with RLVR and you need trustworthy, hack-checked evidence of improvement.
---

# GRPO Trainer

A harness skill for RL with verifiable rewards: it runs the GRPO loop, but the deliverable is the *evidence* that the reward gain is real — co-plotted held-out eval, KL/length traces, and an explicit reward-hacking audit.

## When to use
- You are reproducing the R1/RLVR recipe on a base or SFT model with a verifier.
- A rising reward curve needs to be checked against true held-out capability.
- You must document the group-size / `β` choices behind a run.

## Inputs
- A base or SFT model, a verifier (programmatic reward), and a prompt set.
- A held-out eval set the verifier never sees.
- A config: group size, KL coefficient `β`, sampling temperature, max length.

## Workflow
1. Define the verifier and confirm it is hard to game on a few hand-built adversarial cases.
2. Run GRPO, logging reward, held-out eval, KL, and response length each step.
3. Co-plot reward vs held-out eval — divergence between them is the reward-hacking signal.
4. Record group-size and `β` choices and their effect.
5. Run a reward-hacking audit: inspect top-reward samples for verifier exploits; report findings.

## Outputs & evidence artifact
- `evidence/week05-grpo/report.md` — reward + held-out-eval co-plot, KL/length traces, group-size/`β` rationale, and the reward-hacking audit.

## Acceptance checks
- [ ] Held-out eval is plotted alongside reward (not reward alone).
- [ ] KL and length traces are present and discussed.
- [ ] The reward-hacking audit inspects actual high-reward samples.
- [ ] Group size and `β` are recorded with their observed effect.

## Worked example
`Use $grpo-trainer to post-train my SFT math model with a checker verifier` → reward ↑ and held-out accuracy ↑ together (no divergence), KL stable, audit finds no verifier exploit. Verdict: real gain, ship.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — reference GRPOTrainer / RLVR implementation.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RLVR post-training used for R1-style recipes.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built reasoning evals for the held-out check.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch
