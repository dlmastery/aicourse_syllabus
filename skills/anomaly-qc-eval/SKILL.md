---
name: anomaly-qc-eval
description: evaluate a rare-defect / unseen-failure system against operational costs. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Anomaly Qc Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a rare-defect / unseen-failure system against operational costs.
- **Inputs:** an anomaly model + test set. **Required outputs:** image- & pixel-level AUROC, false-alarm rate at the chosen threshold, localization samples, and the cost trade-off at that operating point. **Evidence artifact:** `qc-eval.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC

## How to invoke

In a Codex-style environment: `Use $anomaly-qc-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
