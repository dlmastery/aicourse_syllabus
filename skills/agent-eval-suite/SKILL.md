---
name: agent-eval-suite
description: Turn "seems to work" into a reproducible, gating eval for an agent — task set, simulated user, pass^k, failure taxonomy, CI threshold. Use when an agent passes manual demos but has no automated bar to gate releases.
---

# Agent Eval Suite

A harness that converts ad-hoc agent testing into a repeatable, evidence-producing eval. The judgment it encodes: agents are stochastic and long-horizon, so a single pass means nothing — you need pass^k across runs and a failure taxonomy before you can gate a release.

## When to use
- An agent works in demos but you can't say how often it succeeds.
- You need a CI gate that blocks regressions in agent behavior.
- You're comparing two agent designs and need apples-to-apples numbers.

## Inputs
- The task domain and explicit success criteria.
- The agent under test and its tools.

## Workflow
1. Build a task set with programmatic checks (each task verifiable without a human).
2. Write a simulated-user spec for multi-turn tasks.
3. Run each task k times; compute pass^k (all-k-must-pass) and pass@k.
4. Cluster failures into a taxonomy (tool error, wrong plan, loop, hallucination…).
5. Set a CI threshold that gates merges on the pass^k score.

## Outputs & evidence artifact
- `evidence/week09-eval/`: the task set + checks, simulated-user spec, a pass^k report, the failure taxonomy, and the CI threshold.

## Acceptance checks
- [ ] Every task has a programmatic check (no manual grading).
- [ ] pass^k is reported across k≥3 runs with the failure taxonomy.
- [ ] A CI threshold is wired to gate the pipeline.

## Worked example
`Use $agent-eval-suite to gate our booking agent.` → 40 tasks with API-state checks, simulated user, pass^5 = 0.82, failures dominated by "missing confirmation wait," CI gate at pass^5 ≥ 0.80.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework with datasets, agents, tools, and scorers; the reference for agent evals.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ pre-built evals including agentic tasks to model your task set on.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/evaluation` recipes for scoring and pass@k.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k
