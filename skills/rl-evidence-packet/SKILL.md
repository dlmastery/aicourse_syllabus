---
name: rl-evidence-packet
description: Assemble MDP spec, training logs, eval, ablation, and safety audit into one reviewable bundle where each claim links to its run. Use when packaging an agentic-RL capstone with a safety audit as the deliverable.
---

# RL Evidence Packet

A capstone-assembly harness for RL systems. It encodes the judgment that an RL result is only credible when its MDP definition, training trail, evaluation, ablations, and safety audit are bundled so a reviewer can trace every claim.

## When to use
- You are closing an agentic-RL capstone and must hand it to a reviewer.
- An RL claim needs to be defensible against gaming and instability objections.
- You want one bundle a third party can reproduce from.

## Inputs
- The MDP spec (states, actions, reward, transitions).
- Training logs, eval results, ablation runs, and a reward-hacking/safety audit.

## Workflow
1. Document the MDP spec precisely.
2. Attach training logs (curves, seeds, configs).
3. Add evaluation results vs a baseline policy.
4. Add ablations isolating the components that mattered.
5. Add the safety audit (reward-hacking probe, failure modes).
6. Map each claim to its justifying run; commit the packet.

## Outputs & evidence artifact
- `evidence/rl-capstone-packet.md` — the packet: MDP spec, training logs, eval, ablation, and safety audit, with a claim→run map.

## Acceptance checks
- [ ] Every headline claim links to a re-runnable run/log.
- [ ] An ablation isolates what actually drove the result.
- [ ] A safety/reward-hacking audit is included with a verdict.

## Worked example
`Use $rl-evidence-packet for my GRPO tool-use agent.` → a bundle: "MDP defined; success 41%→67% vs baseline (run 0xC1); ablation shows verifier reward, not curriculum, drove gains; safety audit found no reward farming."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) · [volcengine/verl](https://github.com/volcengine/verl) — RL post-training stacks behind the runs.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the evaluation and safety audit.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for defensible bundles.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 14 — Capstone: An Agentic-RL System With a Safety Audit
