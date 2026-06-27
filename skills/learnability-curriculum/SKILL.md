---
name: learnability-curriculum
description: Order self-generated tasks by estimated learnability (tasks at the frontier of current ability) and adapt the ordering online as the agent improves, with learning curves as evidence. Use when building a self-improving agent that proposes its own training tasks.
---

# Learnability Curriculum

A harness skill for self-improving reasoning: instead of training on random or fixed-difficulty tasks, it scores self-generated tasks by *learnability* — those neither trivially solved nor impossible — and re-orders the curriculum as competence grows.

## When to use
- An agent proposes its own tasks/problems and you must decide their training order.
- Training stalls because tasks are too easy (no signal) or too hard (no progress).
- You want evidence that curriculum ordering, not just more compute, drives improvement.

## Inputs
- A generator of candidate tasks and a way to estimate solve probability (e.g., pass rate over k samples).
- The current policy/model and a held-out progress measure.

## Workflow
1. Sample candidate self-generated tasks.
2. Estimate learnability for each (e.g., success probability near 0.5 = frontier).
3. Select/order tasks by the learnability score; train on the frontier batch.
4. Re-estimate after each round and adapt the ordering online.
5. Plot the learning curves (capability vs round) and compare against a fixed-curriculum baseline.

## Outputs & evidence artifact
- `evidence/week09-learnability/` — the learnability scores, the adaptive ordering, and the learning curves vs a baseline ordering.

## Acceptance checks
- [ ] Learnability is estimated quantitatively (not assumed by hand-set difficulty).
- [ ] The curriculum adapts online as the model improves.
- [ ] Learning curves are plotted against a non-adaptive baseline.
- [ ] The frontier selection criterion is stated explicitly.

## Worked example
`Use $learnability-curriculum on my self-proposed math tasks` → frontier batch (p≈0.4–0.6) trains faster than random ordering; curves show +2× sample efficiency over 5 rounds.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — post-training loops to host the curriculum.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RL for self-improvement experiments.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — held-out evals to measure capability over rounds.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 9 — Self-Improving Reasoning: Curricula at the Edge of Learnability
