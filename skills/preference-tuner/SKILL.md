---
name: preference-tuner
description: Runs one preference-optimization step (e.g. DPO) from an SFT checkpoint and proves it raised judged quality without reward-hacking via length or reference drift. Use when you want to align a model and need evidence the gain is real, not verbosity gaming.
---

# Preference Tuner

A reusable harness skill for executing a single preference-optimization pass and discharging the burden of proof: judged quality went up, and it did not come from longer outputs or drifting off the reference. It encodes the judgment that an alignment win must survive a degeneration check.

## When to use
- You have an SFT checkpoint and a preference dataset and want to run DPO (or a sibling objective) once, carefully.
- You need to show the tuned model beats SFT on a frozen judge — and that the win is not just verbosity.
- You are sweeping `beta` and need a recorded rationale for the value you picked.

## Inputs
- An SFT checkpoint to start from.
- A preference dataset (chosen/rejected pairs or equivalent).
- A frozen evaluation set + judge held constant across before/after.

## Workflow
1. Snapshot the SFT model's baseline win-rate and average output length on the frozen judge.
2. Run the preference-optimization step at a chosen `beta`, logging loss and reward margins.
3. Re-evaluate the tuned model on the same frozen judge; compute win-rate vs SFT.
4. Compute length/verbosity deltas to check the gain is not driven by longer answers.
5. Run a degeneration check: repetition, reference/KL drift, and obvious reward-hacking.
6. Record the `beta` rationale and write the report only if the win survives the checks.

## Outputs & evidence artifact
- Win-rate vs SFT, length/verbosity deltas, the `beta` choice rationale, and a degeneration check.
- Leave the artifact at `evidence/week05-dpo/report.md`.

## Acceptance checks
- [ ] `evidence/week05-dpo/report.md` reports win-rate vs SFT on a frozen judge.
- [ ] Length/verbosity deltas are reported and the win is not attributable to length alone.
- [ ] The chosen `beta` is justified.
- [ ] A degeneration/reward-hacking check is run and its result recorded.

## Worked example
Invocation: "Use $preference-tuner to DPO my SFT checkpoint on the pairs dataset at beta=0.1 and prove it beats SFT."
Good output: `evidence/week05-dpo/report.md` showing "win-rate 57% vs SFT, avg length +6% (within tolerance), beta=0.1 chosen for stable reward margin, no repetition/drift detected -> accept."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — the DPO/IPO/KTO trainers this step wraps, including beta and reference handling.
- [volcengine/verl](https://github.com/volcengine/verl) — scale-out RLHF/preference optimization when one GPU is not enough.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official fine-tuning and LLM-as-judge evaluation recipes.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals to harden the frozen judge against gaming.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 5 — Preference Optimization I: DPO and the RLHF Lineage
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO
