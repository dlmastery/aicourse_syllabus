---
name: offline-data-auditor
description: Audits a logged trajectory dataset to decide whether it can actually support offline RL, or whether imitation learning is the safer bet. Use before training any offline-RL agent on logged data, to avoid optimizing against gaps the data can't cover.
---

# Offline Data Auditor

A data-readiness harness for offline RL. It encodes the judgment that offline RL only works when the logged data covers the states and actions the policy will need — otherwise the value function extrapolates into fantasy and imitation is the honest choice.

## When to use
- You have a logged trajectory dataset and must choose between offline RL and behavior cloning.
- An offline-RL agent is exploiting out-of-distribution actions and you suspect thin coverage.
- You need evidence about behavior-policy diversity before committing compute to CQL/IQL-style training.

## Inputs
- A trajectory dataset (states, actions, rewards, terminals — logged transitions).
- The intended action space and, if known, the target task's reward.

## Workflow
1. Measure state coverage and action coverage: how much of the relevant space the data actually visits.
2. Plot the return distribution: are there enough high-return trajectories to learn from, or is it all mediocre?
3. Compute behavior-policy entropy: is the logging policy diverse (explores) or near-deterministic (narrow)?
4. Flag coverage gaps where a learned policy would query unsupported actions (OOD-action risk).
5. Recommend imitation vs offline RL based on coverage, return spread, and entropy — with the reasoning.

## Outputs & evidence artifact
- `evidence/week06-data-audit.md` containing: state/action coverage, the return distribution, behavior-policy entropy, and an imitation-vs-offline-RL recommendation.

## Acceptance checks
- [ ] State and action coverage are quantified, not described qualitatively.
- [ ] The return distribution is reported (spread, not just mean).
- [ ] Behavior-policy entropy is computed.
- [ ] A clear imitation-vs-offline-RL recommendation is given with justification.

## Worked example
Invocation: `Use $offline-data-auditor to audit the warehouse-robot logs before training IQL.`
Good output: `evidence/week06-data-audit.md` — state coverage 62% of reachable cells, action coverage missing 3/8 actions entirely; return distribution bimodal with only 9% high-return; behavior entropy 0.4 (near-deterministic logger). Recommendation: data too narrow for value-based offline RL on the missing actions; start with filtered behavior cloning on high-return trajectories, collect targeted data for the gaps.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — data loaders/connectors for ingesting and profiling logged datasets.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for data inspection, classification, and reporting.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — dataset/scorer framework for repeatable, evidence-producing audits.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and evidence-artifact convention.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 6 — Offline RL & Imitation Learning
