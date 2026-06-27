---
name: reasoning-evidence-packet
description: Assemble baselines, verifier, GRPO curves, hard-eval audit, and SLA into one bundle where every claim links to the run that justifies it. Use when packaging a reasoning-RL capstone so it survives a reproduction audit.
---

# Reasoning Evidence Packet

A capstone-assembly harness for reasoning-RL work: it turns a pile of weekly runs into a single reviewable bundle where each claim is traceable to the evidence that earns it. The judgment it encodes is that a reasoning result is only as strong as its weakest unaudited claim.

## When to use
- You are closing out a small reasoning-RL run (verifier + GRPO/DAPO) and must hand it to a reviewer.
- A claimed math/reasoning improvement needs to be defensible against contamination and reward-hacking objections.
- You want a reproducible bundle that a third party can re-run and confirm.

## Inputs
- The capstone artifacts (base model, verifier, trained checkpoint).
- All weekly evidence: baselines, GRPO/training curves, hard-eval results, SLA/latency numbers.

## Workflow
1. List every claim the capstone makes (accuracy lift, pass@k, latency).
2. For each claim, link the exact run/log/commit that justifies it.
3. Add the baseline comparison and the hard-eval audit (held-out, decontaminated).
4. Add a reward-hacking / verifier-gaming check and record what it found.
5. Document what was *cut* and why (negative results count).
6. Bundle into one packet and commit the evidence artifact.

## Outputs & evidence artifact
- `evidence/capstone-packet.md` — the packet itself: claim → run map, baseline + hard-eval audit, reward-hacking and contamination checks, and a "what we cut" section.

## Acceptance checks
- [ ] Every headline claim links to a re-runnable run or log.
- [ ] Contamination and reward-hacking audits are present with verdicts.
- [ ] A reviewer can reproduce at least one headline number from the packet alone.

## Worked example
`Use $reasoning-evidence-packet to bundle my GRPO math run.` → a packet that says "pass@1 36%→48% (run 0xA3, held-out GSM-hard, decontaminated); reward-hacking probe found length inflation, mitigated by length penalty; cut the DAPO variant — no lift at fixed compute."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/evaluation` and `/finetuning` recipes for building defensible eval bundles.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework (datasets/scorers) for the hard-eval audit.
- [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — GRPO/PPO post-training references behind the runs.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math
