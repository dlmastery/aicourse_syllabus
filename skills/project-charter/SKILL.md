---
name: project-charter
description: Turns a vague product idea into a scoped, measurable agentic-system charter with success metrics, a riskiest-assumption test, an out-of-scope list, and a kill criterion. Use at the start of a project when "let's build an AI thing" needs to become a decision you can be held to.
---

# Project Charter

A harness skill that converts a fuzzy idea into a one-page charter a team can commit to. It encodes the judgment that scope is a decision: you frame the call, set measurable targets, name the riskiest assumption, and pre-commit a kill criterion before writing code.

## When to use
- Kicking off an agentic-system project from a one-line idea or stakeholder ask.
- A proposal is hand-wavy and needs success metrics, targets, and explicit non-goals before work starts.
- You need to pre-commit a kill criterion so a doomed project gets stopped on evidence, not sunk cost.

## Inputs
- The problem idea, the intended users, and the known constraints (budget, latency, data, compliance).

## Workflow
1. Frame the decision the system exists to support (what changes if it works).
2. Name the baseline — what users do today without it.
3. Set success metrics with concrete targets, captured in `metrics.yaml`.
4. Sketch the architecture at a high level (data in, model/agent, surface out).
5. Flag the single riskiest assumption and write a feasibility-spike test for it.
6. List what is explicitly out of scope and state the kill criterion.
7. Commit the charter and run the spike.

## Outputs & evidence artifact
- Decision-framing, success metrics + targets, architecture sketch, riskiest assumption + test plan, out-of-scope list, and kill criterion — written to `M1/charter.md` + `metrics.yaml`, with a feasibility-spike log.

## Acceptance checks
- [ ] Every success metric has a numeric target and a named baseline.
- [ ] The riskiest assumption is stated with a concrete test plan.
- [ ] An out-of-scope list and a kill criterion both exist.
- [ ] The feasibility spike was run and logged.

## Worked example
Invocation: `Use $project-charter for "an agent that answers support tickets from our docs."` Good output: charter.md framing the deflection decision, metrics.yaml (`deflection_rate: target 0.40, baseline 0.0`; `faithfulness: target 0.90`), architecture sketch, "riskiest assumption: docs are complete enough — spike: answer 50 real tickets, measure faithfulness," out-of-scope ("no billing actions"), kill criterion ("abort if spike faithfulness < 0.7").

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — brainstorming → writing-plans methodology for scoping before building
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and skill-creator authority
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated slash-commands and orchestrators for project kickoff

## Used in
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 1 — Proposal & Problem Framing
