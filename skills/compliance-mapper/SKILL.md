---
name: compliance-mapper
description: Map a system's technical controls to EU AI Act + NIST AI RMF + OWASP LLM requirements and find the gaps. Use when classifying an AI system's risk tier and producing an obligation-to-control matrix and model/system card.
---

# Compliance Mapper

A harness for turning regulatory text into an auditable control matrix. It encodes the judgment that compliance is not prose — it is a traceable mapping from each obligation to a concrete control, with the unmet ones surfaced as gaps.

## When to use
- You must classify a system's risk tier under the EU AI Act and prove obligations are met.
- A reviewer asks "which control satisfies this requirement?" and you need a table, not a paragraph.
- You are assembling a model/system card for a high-stakes deployment.

## Inputs
- A system description (purpose, users, data, autonomy).
- A control inventory: technical and process controls already in place.
- The target frameworks: EU AI Act, NIST AI RMF, OWASP LLM Top 10.

## Workflow
1. Classify the EU AI Act risk tier (prohibited / high-risk / limited / minimal) and justify it.
2. Enumerate obligations for that tier across the three frameworks.
3. Map each obligation → the control that satisfies it (or mark "no control").
4. Extract the gap list: every obligation with no control or a weak one.
5. Draft a model/system card summarizing intended use, limits, and residual risk.
6. Commit everything under `evidence/week12-governance/`.

## Outputs & evidence artifact
- `evidence/week12-governance/`: tier classification, obligation-to-control matrix, gap list, and the model/system card.

## Acceptance checks
- [ ] The risk tier is stated with a written justification tied to the system's use.
- [ ] Every listed obligation maps to a named control or an explicit gap.
- [ ] The gap list is prioritized and feeds at least one remediation action.

## Worked example
`Use $compliance-mapper on this hiring-screening model`. Good output: tier = high-risk; matrix mapping Art. 10 data-governance → the data-contract control; gap "no post-market monitoring"; a system card naming the residual bias risk.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework underpinning evidence behind safety controls.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt safety/red-team evals to back specific obligations.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability and evaluation recipes that produce auditable evidence.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog for governance/compliance skill patterns.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 12 — Governance: EU AI Act, NIST AI RMF, OWASP & Standards
