---
name: cot-monitor
description: Build a reusable reasoning-trace monitor and faithfulness tester for agents — flag bad traces and verify the stated reasoning is causal. Use when monitoring chain-of-thought for safety and you need precision/recall plus a faithfulness rate.
---

# CoT Monitor

A harness for monitoring agent reasoning traces and testing whether they are *faithful* (the stated reasoning actually drove the answer). It encodes the judgment that a monitor is only trustworthy if you measure its flag precision/recall and probe the CoT with perturbations rather than reading it at face value.

## When to use
- You are running CoT monitoring for oversight and need to quantify monitor quality.
- You suspect a model's stated reasoning is post-hoc rather than causal.
- You need an escalation pipeline for flagged traces.

## Inputs
- A set of agent traces (prompt, chain-of-thought, action/answer).
- A monitor model that classifies traces as safe/unsafe.
- A perturbation suite (inject/remove reasoning steps) for faithfulness testing.

## Workflow
1. Label a trace set (safe/unsafe) to score the monitor.
2. Run the monitor; compute flag precision and recall against the labels.
3. Faithfulness test: perturb the CoT and check whether the answer changes as the stated reasoning implies.
4. Compute a faithfulness rate; flag traces where reasoning is decorative (answer unchanged when key step removed).
5. Route flagged traces to an escalation log with severity.
6. Commit metrics and logs under `evidence/week08-cot/`.

## Outputs & evidence artifact
- `evidence/week08-cot/`: monitor flag precision/recall, the faithfulness rate, and the escalation log.

## Acceptance checks
- [ ] Monitor precision and recall are reported against a labeled set.
- [ ] Faithfulness is measured by perturbation, not by reading the CoT.
- [ ] Every escalated trace has a severity and a reason.

## Worked example
`Use $cot-monitor on these agent traces`. Good output: monitor precision 0.82 / recall 0.74; faithfulness rate 0.6 with examples where removing the "key" step left the answer unchanged; 12 traces escalated.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for scoring monitors and faithfulness probes.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — red-team/safety evals including reasoning-faithfulness tasks.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability recipes for capturing and grading traces.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog for monitoring/guardrail skills.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 8 — Mechanistic Interpretability II: CoT Monitoring & Faithfulness
