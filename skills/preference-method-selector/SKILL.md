---
name: preference-method-selector
description: choose a preference-optimization objective from data shape, reference-model availability, and observed pathologies. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Preference Method Selector

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** choose a preference-optimization objective from data shape, reference-model availability, and observed pathologies.
- **Inputs:** the preference data (paired/unpaired, size) + compute budget + observed failures (length, drift).
- **Required outputs:** a comparison across ≥2 methods, a decision matrix, and the chosen objective with rationale.
- **Evidence artifact:** `evidence/week06-pref-compare/decision.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective

## How to invoke

In a Codex-style environment: `Use $preference-method-selector to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
