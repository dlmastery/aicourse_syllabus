---
name: adaptation-decision
description: decide prompt vs RAG vs fine-tune from evidence, not instinct, before spending GPU hours. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Adaptation Decision

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** decide prompt vs RAG vs fine-tune from evidence, not instinct, before spending GPU hours.
- **Inputs:** a task + a prompted baseline + the failure analysis.
- **Required outputs:** the dominant failure class (knowledge gap → RAG; behavior/format gap → SFT; preference/quality gap → DPO), a cost comparison, and a recommended path with a falsifiable success bar.
- **Minimal workflow:** prompt hard → measure → classify the gap → estimate cost → recommend.
- **Evidence artifact:** `evidence/week01-decision.md`.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)

## How to invoke

In a Codex-style environment: `Use $adaptation-decision to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
