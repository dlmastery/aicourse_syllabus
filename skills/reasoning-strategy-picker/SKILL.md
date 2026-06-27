---
name: reasoning-strategy-picker
description: Choose a reasoning/planning strategy (ReAct, Plan-and-Execute, Reflexion) from a task's structure — horizon, step-independence, checkable signal, budget — not from fashion. Use when deciding how an agent should think before building it.
---

# Reasoning Strategy Picker

A decision harness that maps a task's structure to the right agent reasoning loop and a concrete budget. It encodes the judgment that strategy should follow task shape: long horizon vs short, independent steps vs dependent, a checkable signal vs none.

## When to use
- You are about to build an agent and must pick ReAct vs Plan-and-Execute vs Reflexion.
- A loop is burning tokens with no stop condition and you need to right-size it.
- You want a defensible, written rationale for a planning choice.

## Inputs
- Task horizon (single-shot vs multi-step), step-independence, availability of a checkable signal (verifier/test), latency and cost budget.

## Workflow
1. Classify the task on four axes: horizon, step-independence, checkable signal, budget.
2. Map to a candidate strategy (e.g., checkable + iterative → Reflexion; independent subtasks → Plan-and-Execute; tight tool loop → ReAct).
3. Set the step/reflection budget and the explicit stop condition.
4. Build a small comparison table of 2–3 candidates with expected cost.
5. Commit the recommendation and rationale.

## Outputs & evidence artifact
- `evidence/week04-strategy.md` — comparison table, the chosen strategy, its step/reflection budget, and the stop condition.

## Acceptance checks
- [ ] The choice is justified by task structure, not popularity.
- [ ] A concrete budget and stop condition are stated.
- [ ] At least two alternatives are compared.

## Worked example
`Use $reasoning-strategy-picker for a multi-file refactor with a test suite.` → "checkable signal present + iterative → Reflexion, 3 reflection rounds max, stop when tests pass or budget hit; ReAct rejected (no global plan), Plan-and-Execute rejected (steps depend on test feedback)."

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — Agent Skills spec + example-skills; canonical agent-skill format.
- [obra/superpowers](https://github.com/obra/superpowers) — methodology framework (brainstorming → plans → subagent-driven dev) for structuring agent reasoning.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent library; reference for ReAct-style tool loops.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable multi-agent and planning app patterns.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion
