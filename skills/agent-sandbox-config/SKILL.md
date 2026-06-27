---
name: agent-sandbox-config
description: make it safe for an agent to *execute* code and commands. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Agent Sandbox Config

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** make it safe for an agent to *execute* code and commands.
- **Inputs:** a repo + the commands the agent needs. **Outputs:** a container/sandbox spec (fs/network/cred/time
  scopes), a command allow-list, and the approval path for the rest. **Evidence artifact:** `evidence/week06-sandbox/`.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 6 — The Modern AI Terminal and Sandboxing

## How to invoke

In a Codex-style environment: `Use $agent-sandbox-config to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
