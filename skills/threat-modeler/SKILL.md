---
name: threat-modeler
description: turn any AI system into a structured threat model before mitigation. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Threat Modeler

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn any AI system into a structured threat model before mitigation.
- **Inputs:** system description, deployment context. **Required outputs:** asset list, actor list, attack vectors, impact ratings, existing controls, top-3 priority risks.
- **Minimal workflow:** assets → actors → vectors → score → prioritize. **Evidence artifact:** `evidence/week01-threat-model.yaml`.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 1 — The AI Risk Landscape & How to Reason About It

## How to invoke

In a Codex-style environment: `Use $threat-modeler to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
