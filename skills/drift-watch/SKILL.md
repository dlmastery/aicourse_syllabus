---
name: drift-watch
description: Monitor a model or LLM app for drift and quality decay with low-noise, actionable alerts tied to runbooks. Use when running a model in production and you need a drift report, alert rules, and a runbook entry per alert.
---

# Drift Watch

A harness for production monitoring that earns its alerts. It encodes the judgment that a monitor that cries wolf gets muted — so every alert must be tied to an SLO and to a runbook action, not just a red line on a chart.

## When to use
- A model or LLM app is live and you need to catch quality decay before users do.
- Your existing alerts are noisy and nobody acts on them.
- You need an on-call story: alert → what to do.

## Inputs
- A reference window (the "known-good" distribution/quality baseline).
- Live data / production traffic.
- SLOs defining acceptable quality, latency, and error rates.

## Workflow
1. Pick drift signals: input distribution (PSI/KS), output quality proxy, and SLO breaches.
2. Set thresholds from the reference window to keep false alarms low.
3. Wire alerts; for each, write a runbook entry (diagnosis + action).
4. Replay or simulate a drift event to confirm the alert fires and the runbook applies.
5. Commit `evidence/week09-monitoring/alert-and-runbook.md`.

## Outputs & evidence artifact
- `evidence/week09-monitoring/alert-and-runbook.md`: the drift report, alert rules, and a runbook entry per alert.

## Acceptance checks
- [ ] Each alert is tied to an SLO and a threshold derived from the reference window.
- [ ] Every alert has a runbook entry with a concrete action.
- [ ] A simulated drift event demonstrates the alert firing.

## Worked example
`Use $drift-watch on this classifier endpoint`. Good output: PSI-based input-drift alert at 0.2, an output-confidence-drop alert, and runbook entries ("retrain trigger," "roll back to vN") each demonstrated on a replayed drift day.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability recipes for monitoring LLM apps in production.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the quality-proxy signal behind alerts.
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) — vetted plugins for ops/monitoring workflows.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog including monitoring/ops skills.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 9 — Monitoring, Drift Detection & Alerting in Production
