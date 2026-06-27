---
name: policy-enforcer
description: compile a model spec into an enforceable, measurable guardrail layer. **Inputs:** model spec, guard model, labeled eval set. **Outputs:** input/output filters, precision/recall, operating point, residual-gap list. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Policy Enforcer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** compile a model spec into an enforceable, measurable guardrail layer. **Inputs:** model spec, guard model, labeled eval set. **Outputs:** input/output filters, precision/recall, operating point, residual-gap list.
- **Evidence artifact:** `evidence/week05-moderation/`.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 5 — Model Specs, Content Policies & Moderation (Llama Guard, NeMo Guardrails)

## How to invoke

In a Codex-style environment: `Use $policy-enforcer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
