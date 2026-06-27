---
name: collapse-monitor
description: Detect self-training (model) collapse early via diversity, verifier pass-rate, and eval-drift signals. Use when running a self-play or synthetic-data loop and you need an alert before quality silently degrades.
---

# Collapse Monitor

A dashboard-building harness for self-improvement loops. It encodes the judgment that model collapse is gradual and invisible on the training loss — you only catch it by watching diversity, verifier pass-rate, and held-out eval drift together.

## When to use
- You run a self-play or self-generated-data loop and fear quality is silently eroding.
- You need an early-warning signal, not a post-mortem after the model has degraded.
- You want a reusable collapse dashboard to attach to any self-training run.

## Inputs
- A self-training / self-play loop emitting generations per round.
- A diversity metric (e.g., distinct-n, embedding spread) over generations.
- A verifier or grader producing a pass-rate, plus a fixed held-out eval set.

## Workflow
1. Instrument each round: log generation diversity, verifier pass-rate, and held-out eval score.
2. Plot all three over rounds on one dashboard with the first-round baseline marked.
3. Define collapse triggers: diversity falling, pass-rate inflating while held-out eval drops (the tell-tale gap).
4. Fire an alert the first round a trigger crosses threshold; record the round and signal.
5. Commit the collapse dashboard plus the trigger log as evidence.

## Outputs & evidence artifact
- `evidence/collapse-dashboard.md` (or `.png` + note): the three-signal dashboard and the round-by-round trigger log.

## Acceptance checks
- [ ] All three signals (diversity, verifier pass-rate, held-out eval) are tracked over rounds.
- [ ] At least one explicit collapse trigger with a threshold is defined.
- [ ] The dashboard distinguishes verifier inflation from real held-out improvement.

## Worked example
`Use $collapse-monitor on this self-play run`. Good output: a dashboard where verifier pass-rate climbs to 0.9 while held-out eval falls after round 4, with an alert "round 4: diversity↓ + eval-gap↑ → collapse onset."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — RLHF/self-training library where collapse and reward-hacking arise.
- [volcengine/verl](https://github.com/volcengine/verl) — GRPO/RL post-training stack to instrument for diversity and pass-rate.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the held-out drift signal.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for tracking quality across iterations.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 2 — Self-Generated Data & Self-Play (and the Collapse Problem)
