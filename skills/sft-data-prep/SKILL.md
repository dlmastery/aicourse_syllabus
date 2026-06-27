---
name: sft-data-prep
description: turn raw domain data into a clean, decontaminated, correctly-templated SFT set with a defensible card. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Sft Data Prep

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn raw domain data into a clean, decontaminated, correctly-templated SFT set with a defensible card.
- **Inputs:** raw examples + the frozen eval + a target chat template.
- **Required outputs:** formatted JSONL, dedup/decontam report, quality-filter stats, loss-mask verification, and a dataset card.
- **Evidence artifact:** `evidence/week02-data/dataset-card.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 2 — Data Preparation & Formatting: The 80% That Decides the Outcome

## How to invoke

In a Codex-style environment: `Use $sft-data-prep to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
