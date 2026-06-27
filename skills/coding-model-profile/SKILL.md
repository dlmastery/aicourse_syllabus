---
name: coding-model-profile
description: Profile a coding model's failure shape on a codebase before trusting it — capability vs grounding vs context. Use when deciding what to delegate to a model and you need a pass/fail map and per-task failure-cause labels.
---

# Coding Model Profile

A harness for learning a model's failure modes on a real codebase *before* relying on it. It encodes the judgment that "the model is bad at this repo" is not actionable — you need to know *why* it fails (missing capability, missing grounding, or blown context) to decide what to delegate.

## When to use
- You are about to delegate coding tasks to a model and want a calibrated trust map.
- A model fails on your repo and you need to separate capability gaps from context/grounding gaps.
- You want a reusable difficulty ladder to re-profile new model versions.

## Inputs
- A repository at a known commit.
- A difficulty ladder of tasks (trivial → frontier) with checkable outcomes.
- The candidate model(s) and a fixed prompt scaffold.

## Workflow
1. Build the ladder: 5–10 tasks of rising difficulty, each with a pass/fail check.
2. Run each task once under a fixed scaffold; record pass/fail.
3. For every failure, label the cause: capability, grounding (couldn't find/use repo facts), or context (ran out / lost the thread).
4. Cluster the labels into a delegation map: delegate / delegate-with-guardrails / do-not-delegate.
5. Commit `evidence/week01-profile.md` with the table, labels, and delegation map.

## Outputs & evidence artifact
- `evidence/week01-profile.md`: a pass/fail table, a failure-cause label per failed task, and a delegation map.

## Acceptance checks
- [ ] Every failed task carries exactly one cause label (capability / grounding / context).
- [ ] The ladder spans at least trivial → hard so the failure boundary is visible.
- [ ] The delegation map ties each recommendation back to evidence in the table.

## Worked example
`Use $coding-model-profile to map a model on this service repo`. Good output: a 8-row table, failures labeled (e.g., "rename: pass; cross-module refactor: fail/context"), and a map saying "delegate single-file edits, supervise cross-module work."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/evaluation` recipes for scoring model behavior on task sets.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — the agent harness whose delegation boundaries this profile informs.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for running a task ladder with scorers.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ prebuilt coding/agentic evals to seed the ladder.
- [obra/superpowers](https://github.com/obra/superpowers) — debugging/TDD skills for diagnosing the failures you label.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 1 — How Coding LLMs Actually Work (a usable mental model)
