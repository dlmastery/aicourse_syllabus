---
name: tokenizer-probe
description: stress-test any tokenizer: round-trip fidelity, compression ratio, and behavior on edge cases. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Tokenizer Probe

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** stress-test any tokenizer: round-trip fidelity, compression ratio, and behavior on edge cases
  (numbers, emojis, code, non-English).
- **Inputs:** a tokenizer + a probe set. **Outputs:** round-trip pass/fail, tokens-per-byte, a table of
  surprising tokenizations. **Evidence artifact:** `evidence/week09-tokenizer-probe.md`.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 9 — Tokenization and Byte-Pair Encoding From Scratch

## How to invoke

In a Codex-style environment: `Use $tokenizer-probe to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
