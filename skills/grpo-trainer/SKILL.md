---
name: grpo-trainer
description: run a verifiable-reward GRPO loop where the reward curve is validated against a held-out eval and audited for hacking. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Grpo Trainer

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** run a verifiable-reward GRPO loop where the reward curve is validated against a held-out eval and audited for hacking.
- **Inputs:** a base/SFT model + a verifier + prompts.
- **Required outputs:** reward + held-out-eval co-plot, KL/length traces, group-size/`β` choices, and a reward-hacking audit.
- **Evidence artifact:** `evidence/week05-grpo/report.md`.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch

## How to invoke

In a Codex-style environment: `Use $grpo-trainer to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
