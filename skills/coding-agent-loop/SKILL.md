---
name: coding-agent-loop
description: a minimal, debuggable coding-agent loop you understand end-to-end (the thing IDEs hide). Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Coding Agent Loop

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a minimal, debuggable coding-agent loop you understand end-to-end (the thing IDEs hide).
- **Inputs:** a repo + a failing test or bug. **Outputs:** localized files, a minimal patch, the test red→green
  transition, and a stop reason. **Evidence artifact:** `evidence/week03-fixlog.md`.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 3 — Building a Coding Agent From Scratch

## How to invoke

In a Codex-style environment: `Use $coding-agent-loop to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
