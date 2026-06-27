---
name: deployment-risk-dossier
description: Assemble the production-readiness and accountability package for a high-stakes model — drift plan, failure catalog, HITL design, audit story, residual-risk statement. Use when shipping a capstone model and you must prove it is safe to deploy.
---

# Deployment Risk Dossier

A harness for the accountability package a high-stakes model needs before launch. It encodes the judgment that "it works in the notebook" is not deployment-ready — you owe a written account of how it fails, how you'll catch it, who intervenes, and what risk remains.

## When to use
- You are shipping a capstone or production model in a regulated/high-stakes domain.
- A reviewer or sign-off requires evidence of operational readiness.
- You need a single document that survives an audit.

## Inputs
- The shipped solution (model + serving + monitoring hooks).
- Known failure modes, the intended decision context, and SLOs.

## Workflow
1. Drift plan: what you monitor, thresholds, and the response when drift fires.
2. Failure catalog: each failure mode with its detection signal and fallback.
3. Human-in-the-loop design: where a human reviews/overrides, and the trigger.
4. Audit/logging story: what is logged, retained, and how a decision is reconstructed.
5. Residual-risk statement: the risk that remains after all mitigations, stated plainly.
6. Commit `capstone/dossier.md`.

## Outputs & evidence artifact
- `capstone/dossier.md`: drift plan, failure catalog (detections + fallbacks), HITL design, audit/logging story, and residual-risk statement.

## Acceptance checks
- [ ] Every cataloged failure has both a detection and a fallback.
- [ ] The HITL design names concrete intervention triggers, not "a human checks."
- [ ] The residual-risk statement is explicit and signed off, not hand-waved.

## Worked example
`Use $deployment-risk-dossier for the loan-triage capstone`. Good output: a dossier with PSI-based drift alerts, a failure table (e.g., OCR miss → manual queue), reviewer override on low-confidence cases, immutable decision logs, and a stated residual bias risk.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the safety evidence inside the dossier.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability/evaluation recipes for monitoring and audit trails.
- [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) — vetted plugins for ops/monitoring workflows.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog including deployment/ops skills.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 12 — Capstone Build & Deployment-Risk Dossier
