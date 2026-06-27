---
name: injection-redteam
description: systematically test an agent for direct/indirect injection and exfiltration. **Inputs:** agent + tools + data channels. **Outputs:** injection ASR per channel, exfiltration test results, defense recommendations mapped to OWASP LLM Top-10. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Injection Redteam

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** systematically test an agent for direct/indirect injection and exfiltration. **Inputs:** agent + tools + data channels. **Outputs:** injection ASR per channel, exfiltration test results, defense recommendations mapped to OWASP LLM Top-10.
- **Evidence artifact:** `evidence/week04-injection/`.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 4 — Adversarial Robustness II: Prompt Injection, Agent Hijacking & Weight Protection

## How to invoke

In a Codex-style environment: `Use $injection-redteam to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
