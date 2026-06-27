---
name: spec-to-prd
description: convert any feature request into an agent-ready PRD + curated context bundle. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Spec To Prd

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** convert any feature request into an agent-ready PRD + curated context bundle.
- **Inputs:** a request + the repo. **Outputs:** a PRD (problem/users/requirements/acceptance/non-goals/security),
  a curated file list (ordered), and 1–2 in-repo few-shot examples. **Evidence artifact:** `prd/<feature>.md` + the context manifest.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 2 — Prompt Engineering for Developers: Specs, Context, and PRDs

## How to invoke

In a Codex-style environment: `Use $spec-to-prd to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
