---
name: reasoning-agent
description: Builds a bounded ReAct/deep-research loop and proves tools beat pure chain-of-thought where computation or freshness matters. Use when building a tool-using agent and you must show, with evidence, that the loop earns its step/cost budget.
---

# Reasoning Agent

A harness skill that turns "wire up an agent" into a repeatable, evidence-producing build: a bounded ReAct/deep-research loop whose value over plain CoT is measured, not assumed. It encodes the judgment that tools are only justified when they beat pure reasoning on tasks needing live data or exact computation.

## When to use
- You are building a ReAct or deep-research loop and need to justify tools over pure CoT.
- A task depends on fresh facts (search) or exact computation (calculator/code) that a model guesses at.
- An agent runs unbounded and you need a step/cost budget it provably respects.
- You need a reproducible trace gallery and a documented failure-mode fix for review.

## Inputs
- A concrete task (or task set).
- A tool set (search, code execution, calculator, retrieval, etc.).
- A step and cost budget (max iterations, max tokens/$ per task).

## Workflow
1. Define the task and pick a tool set; fix the step/cost budget up front.
2. Implement the bounded ReAct loop (think → act → observe), enforcing the budget as a hard stop.
3. Build a CoT-only baseline on the same tasks for an apples-to-apples comparison.
4. Run both; record accuracy, steps, and cost per task.
5. Capture a trace gallery (representative good and bad traces).
6. Identify one recurring failure mode, apply a fix, and re-measure.
7. Write the tool-vs-CoT result, budget adherence, and the failure-mode fix into the report.

## Outputs & evidence artifact
- `evidence/week04-react/report.md` — tool-vs-CoT eval, budget-adherence numbers, the trace gallery, and the documented failure-mode fix.

## Acceptance checks
- [ ] Tool-augmented loop is compared head-to-head with a pure-CoT baseline on identical tasks.
- [ ] Every run respects the declared step/cost budget (no silent overruns).
- [ ] Trace gallery includes at least one failure trace plus the fix applied to it.
- [ ] `evidence/week04-react/report.md` is committed and states a clear verdict.

## Worked example
`Use $reasoning-agent to build a search+calculator ReAct loop for multi-hop numeric QA, budget 6 steps / 8k tokens.` Good output: a report table showing CoT 41% vs tools 78% accuracy, mean 3.2 steps (max 6 respected), a gallery of 5 traces, and a note that "tool-call JSON drift" was fixed by constrained decoding, lifting pass rate 9 points.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent library; canonical ReAct/tool-use loop to model the harness on.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP reference servers for wiring real tools into the loop.
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — role-based multi-agent framework for scaling the loop to multiple agents.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official agents/tool_use recipes and observability patterns.

## Used in
- Subject 02 · Part D — Reasoning Models & Test-Time Compute · Week 4 — ReAct, Tool Use & Search: Reasoning That Acts
