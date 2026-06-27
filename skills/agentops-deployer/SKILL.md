---
name: agentops-deployer
description: Deploy an agentic system with a CI/CD eval gate, observability, load testing, and a rollback runbook. Use at a production-deployment milestone when an agent system must ship behind SLOs with safe-release controls.
---

# AgentOps Deployer

A deploy-and-observe harness for shipping agentic systems safely. The judgment it encodes: an agent reaches production only behind an eval gate and a rollback path — deployment without a tested rollback is a one-way door.

## When to use
- Taking an agent system to a production deployment milestone.
- You need CI/CD that blocks releases failing the eval gate.
- SLOs and a load-test budget must be proven before launch.

## Inputs
- The agent system, infra config (IaC), and target SLOs.

## Workflow
1. Author IaC to provision the service.
2. Build CI/CD with an eval gate that blocks regressions.
3. Stand up an observability dashboard (latency, cost, errors, traces).
4. Run a load test against the SLOs; capture the report.
5. Write and rehearse a rollback runbook (flag/canary revert).

## Outputs & evidence artifact
- `M5/`: IaC, CI/CD config, dashboard screenshots, a load-test + cost report, and a rollback runbook.

## Acceptance checks
- [ ] CI/CD blocks a release that fails the eval gate.
- [ ] A load test demonstrates the system meets its SLOs.
- [ ] A rollback runbook exists and has been rehearsed.

## Worked example
`Use $agentops-deployer to ship our support-agent service.` → Terraform IaC, GitHub Actions with a pass^k gate, Grafana dashboard, load test at 50 rps within SLO, canary + one-command rollback runbook.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability and evaluation recipes for the CI eval gate and dashboards.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI with hooks usable in CI/CD release automation.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework to power the release-blocking gate.

## Used in
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 5 — LLMOps/AgentOps Production Deployment
