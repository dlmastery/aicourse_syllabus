---
name: threat-modeler
description: Turns an AI system into a structured threat model — assets, actors, attack vectors, impact ratings, controls, and top-3 priority risks — before any mitigation work. Use when you need to reason about what can go wrong with an AI system before deciding what to fix.
---

# Threat Modeler

A harness skill that converts a system description into a prioritized threat model so mitigation effort goes to the risks that matter. It encodes the judgment that you cannot mitigate what you haven't enumerated, scored, and ranked.

## When to use
- A new AI system needs a security/safety review before deployment.
- You are about to spend mitigation effort and need to prioritize.
- A regulator or reviewer asks for a documented risk analysis.

## Inputs
- A system description (components, data flows, model, integrations).
- The deployment context (users, exposure, stakes).

## Workflow
1. List assets (data, model, credentials, user trust, availability).
2. List actors/threat sources (external attacker, malicious user, insider, supply chain).
3. Enumerate attack vectors per asset (prompt injection, data exfil, jailbreak, poisoning).
4. Rate impact and likelihood for each vector.
5. Inventory existing controls.
6. Rank the top-3 priority risks.

## Outputs & evidence artifact
- `evidence/week01-threat-model.yaml` — assets, actors, vectors, impact ratings, existing controls, and top-3 priority risks.

## Acceptance checks
- [ ] Assets, actors, and vectors are each enumerated.
- [ ] Every vector has an impact (and likelihood) rating.
- [ ] Exactly a top-3 priority list is produced, with reasons.

## Worked example
`Use threat-modeler on a customer-facing RAG assistant` → assets incl. KB + API keys; vectors incl. prompt-injection-via-document; top-3 led by indirect prompt injection exfiltrating tool credentials.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — AISI framework for safety/red-team evaluation.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — red-team/safety evals to test modeled vectors.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic methodology for structured analysis.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 1 — The AI Risk Landscape & How to Reason About It
