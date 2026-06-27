---
name: eval-gate
description: Turn an eval suite into a CI gate that blocks PRs regressing quality, latency, or cost. Use when adding eval-gated deploys for models/prompts and you need a CI job that fails the build on regression.
---

# Eval Gate

A harness for making evals enforceable. It encodes the judgment that an eval nobody is forced to pass is decoration — quality, latency, and cost regressions should block the merge the same way a failing unit test does.

## When to use
- You are setting up CI/CD for models, prompts, or agents.
- Quality silently regresses between deploys and you want a hard stop.
- A capstone/milestone requires an evaluation harness wired into the pipeline.

## Inputs
- An eval set with scored metrics (quality, latency, cost).
- Thresholds defining acceptable regression per metric.

## Workflow
1. Wrap the eval suite so it emits a machine-readable pass/fail per metric.
2. Set thresholds (absolute floors and/or max regression vs baseline).
3. Add a CI job that runs the suite on each PR and fails on breach.
4. Open a PR that intentionally regresses a metric to capture a blocked example.
5. Commit `evidence/week06-eval-gate/blocked-pr.md` (the diff + failing report).

## Outputs & evidence artifact
- `evidence/week06-eval-gate/blocked-pr.md`: the CI job, a pass/fail report, and a blocked-PR example (the diff plus the failing eval report).

## Acceptance checks
- [ ] The gate covers quality and at least one of latency/cost.
- [ ] The CI job actually fails the build on regression (demonstrated).
- [ ] A real blocked-PR example is captured, not just a passing run.

## Worked example
`Use $eval-gate on this prompt repo`. Good output: a GitHub Action running the eval set, thresholds at −2% quality / +20ms latency, and a blocked PR whose report shows quality fell 4%.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework that emits scorable pass/fail for CI gating.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt evals to wire into the gate.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for building the suite behind the gate.
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated hooks/CI patterns for Claude Code workflows.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 4 — Evaluation Harness & Safety Review
