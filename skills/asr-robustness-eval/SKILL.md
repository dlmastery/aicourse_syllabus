---
name: asr-robustness-eval
description: evaluate a speech system beyond clean-set WER. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Asr Robustness Eval

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** evaluate a speech system beyond clean-set WER.
- **Inputs:** an ASR model + audio sets. **Required outputs:** overall WER, noise/accent-sliced WER, and a normalization note. **Evidence artifact:** `asr-eval.md`.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations

## How to invoke

In a Codex-style environment: `Use $asr-robustness-eval to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
