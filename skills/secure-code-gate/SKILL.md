---
name: secure-code-gate
description: stop insecure AI code from shipping. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Secure Code Gate

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** stop insecure AI code from shipping.
- **Inputs:** a repo + its CI. **Outputs:** SAST/secret/deps/DAST jobs wired as a blocking gate, a triage note for
  findings, and an AI security-review prompt for PRs. **Evidence artifact:** `evidence/week08-security/`.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 8 — AI Security and Secure "Vibe Coding"

## How to invoke

In a Codex-style environment: `Use $secure-code-gate to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
