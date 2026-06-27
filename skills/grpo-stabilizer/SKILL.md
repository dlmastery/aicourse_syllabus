---
name: grpo-stabilizer
description: Diagnose GRPO training pathologies (length blow-up, entropy collapse, length/format bias) and apply the right targeted fix (DAPO, Dr.GRPO, clipping), proven with a held-out ablation. Use when a GRPO run's dynamics look wrong and you need a per-pathology remedy with evidence.
---

# GRPO Stabilizer

A harness skill that maps GRPO failure signatures to specific, named remedies and forces an ablation so you know the fix actually helped on held-out eval — not just on the reward curve it was tuned against.

## When to use
- Response length is exploding or entropy is collapsing during a GRPO run.
- The model is exploiting length/format bias instead of getting more correct.
- You applied a stabilization trick and need to prove it worked.

## Inputs
- A GRPO run with logged dynamics: reward, held-out eval, mean response length, entropy, KL.
- The current GRPO config (group size, `β`/KL coefficient, clipping, advantage normalization).

## Workflow
1. Inspect the dynamics and classify each pathology (length blow-up, entropy collapse, length/format bias, reward-hacking).
2. For each pathology, select the targeted fix (e.g., Dr.GRPO length normalization, DAPO clip-higher / dynamic sampling, entropy bonus, KL adjustment).
3. Apply one fix at a time.
4. Run an ablation: re-train (or continue) and compare held-out eval before vs after.
5. Record the diagnosis → fix → ablation result for each pathology.

## Outputs & evidence artifact
- `evidence/week06-grpo-fixes/report.md` — per-pathology diagnosis, the fix applied, and the held-out-eval ablation showing it worked.

## Acceptance checks
- [ ] Each claimed pathology is backed by a logged dynamic (curve/number).
- [ ] Each fix is tied to a specific named technique, not a vague tweak.
- [ ] Improvement is shown on held-out eval, not just training reward.
- [ ] Fixes are isolated (one change per ablation).

## Worked example
`Use $grpo-stabilizer on my run where length doubled and eval dropped` → diagnosis: length bias inflating reward; fix: Dr.GRPO length normalization + clip-higher; ablation: held-out accuracy +4.2 pts, mean length back to baseline.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — GRPOTrainer and the stabilization knobs referenced here.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable GRPO/RLVR post-training (DAPO-style recipes).
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — held-out reasoning evals to validate fixes against.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run
