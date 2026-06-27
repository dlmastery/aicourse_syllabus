---
name: xai-audit
description: systematically interrogate whether a vision model is right for the right reasons. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Xai Audit

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** systematically interrogate whether a vision model is right for the right reasons.
- **Inputs:** a trained model + a held-out batch. **Required outputs:** saliency maps for TP/FP/FN, a list of suspected shortcuts, and a "trust / don't trust this in production" verdict with evidence.
- **Minimal workflow:** sample errors → overlay saliency → name the shortcut → propose a data/aug fix. **Evidence artifact:** `xai-audit.md`.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)

## How to invoke

In a Codex-style environment: `Use $xai-audit to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
