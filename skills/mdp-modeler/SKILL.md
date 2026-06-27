---
name: mdp-modeler
description: turn any informal control problem into an explicit MDP spec before coding. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Mdp Modeler

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** turn any informal control problem into an explicit MDP spec before coding.
- **Inputs:** a task description. **Required outputs:** state space, action space, transition assumptions, reward function, discount choice + justification, and one stated Markov-violation risk.
- **Minimal workflow:** name S → name A → write R → pick γ → flag the non-Markov risk. **Evidence artifact:** `evidence/week01-mdp-spec.md`.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch

## How to invoke

In a Codex-style environment: `Use $mdp-modeler to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
