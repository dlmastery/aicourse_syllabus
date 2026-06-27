---
name: agentic-rl-env
description: a reusable verifiable agentic environment (tool sandbox + reward + trajectory logger). **Inputs:** task spec, tools, verifier. **Outputs:** Gymnasium-compatible env, trajectory logs, reward-sparsity stats. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Agentic Rl Env

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** a reusable verifiable agentic environment (tool sandbox + reward + trajectory logger). **Inputs:** task spec, tools, verifier. **Outputs:** Gymnasium-compatible env, trajectory logs, reward-sparsity stats.
- **Evidence artifact:** `evidence/week10-agentic/` with the env + resolved-rate log.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure

## How to invoke

In a Codex-style environment: `Use $agentic-rl-env to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
