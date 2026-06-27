---
name: safe-release
description: release any model/prompt/agent change via shadow→canary with metric-driven auto-rollback + HITL gates for risky actions. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Safe Release

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** release any model/prompt/agent change via shadow→canary with metric-driven auto-rollback + HITL gates for risky actions.
- **Inputs:** a new version + promotion/rollback metrics + a list of irreversible actions. **Outputs:** a rollout manifest, an analysis template, an HITL gate, a rollback proof.
- **Evidence artifact:** `evidence/week10-release/auto-rollback.md`.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates

## How to invoke

In a Codex-style environment: `Use $safe-release to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
