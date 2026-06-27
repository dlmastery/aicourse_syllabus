---
name: spec-to-prd
description: Converts a feature request into an agent-ready PRD plus a curated, ordered context bundle and in-repo few-shot examples. Use when handing a coding task to an AI agent and you want it to have the right spec and context instead of guessing.
---

# Spec To PRD

A harness skill that turns a vague request into a precise PRD and the minimal, ordered set of files an agent needs to do the work. It encodes the judgment that agent quality is mostly a context-engineering problem, not a model problem.

## When to use
- A stakeholder gives a one-line feature request and you must brief an agent.
- An agent keeps going off-track because it lacks the right files/conventions.
- You want a reusable spec + context manifest others can review before any code is written.

## Inputs
- A feature request (any fidelity).
- The target repository.

## Workflow
1. Write the PRD: problem, users, requirements, acceptance criteria, non-goals, security notes.
2. Identify the files the agent must read; order them by relevance (entry points first).
3. Pull 1–2 in-repo few-shot examples that show the conventions to imitate.
4. Assemble the context manifest (file list + why each is included).
5. Sanity-check: could a new engineer implement from the PRD + bundle alone?

## Outputs & evidence artifact
- `prd/<feature>.md` plus the curated context manifest (ordered file list + rationale).

## Acceptance checks
- [ ] PRD includes acceptance criteria, non-goals, and security considerations.
- [ ] Context manifest is ordered and each entry has a reason.
- [ ] At least one in-repo few-shot example is cited.

## Worked example
`Use spec-to-prd on "add CSV export to the reports page"` → `prd/csv-export.md` with 5 acceptance criteria, non-goals, and a 7-file ordered manifest pointing at the existing PDF-export handler as the pattern.

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — brainstorming → writing-plans methodology this skill mirrors.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — the agentic CLI that consumes PRDs/context bundles.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated planning/spec workflows.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 2 — Prompt Engineering for Developers: Specs, Context, and PRDs
