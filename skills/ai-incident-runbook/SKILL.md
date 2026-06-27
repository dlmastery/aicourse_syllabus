---
name: ai-incident-runbook
description: Operate an AI-built feature in production with a practiced incident loop — SLOs, alerts, flags/canary/rollback, AI-assisted triage, and a postmortem template. Use when an AI-built feature goes live and needs an on-call playbook.
---

# AI Incident Runbook

An operations harness for running an AI-built feature in production. The judgment it encodes: the time to design the incident loop is *before* the incident — monitoring, a rollback path, and a triage prompt must exist on day one.

## When to use
- Deploying an AI-built feature that will page someone when it breaks.
- You lack alerts, a rollback mechanism, or a triage procedure.
- A team needs a repeatable postmortem format.

## Inputs
- A deployed feature and its expected behavior/SLOs.

## Workflow
1. Define SLOs and configure monitoring + alerts against them.
2. Set up flags, canary, and a rollback mechanism.
3. Write an AI-assisted triage prompt (logs + symptoms → likely cause).
4. Run a game-day: trigger a failure and walk the loop.
5. Capture learnings in a postmortem template.

## Outputs & evidence artifact
- `evidence/week11-ops/`: monitoring + SLO + alert config, the flag/canary/rollback setup, the AI-assisted triage prompt, and a postmortem template.

## Acceptance checks
- [ ] SLOs, alerts, and a rollback path are all configured.
- [ ] An AI-assisted triage prompt is written and tested on a real failure.
- [ ] A postmortem template exists and was used in a game-day.

## Worked example
`Use $ai-incident-runbook to operate our new search feature.` → p99 SLO + alert, feature flag + 5% canary + one-click rollback, triage prompt that surfaced a cache bug in a game-day, filled postmortem.

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI usable for AI-assisted log triage and runbook automation.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability recipes for monitoring and triage prompts.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology that informs the triage loop.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation
