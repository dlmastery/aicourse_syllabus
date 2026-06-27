---
name: ui-reconcile
description: Turns AI-generated UI into production code that fits the real codebase — rewired to actual APIs/types, with loading/error/empty states and tests. Use when you've generated a UI and need to integrate it without it being a throwaway mock.
---

# UI Reconcile

A harness skill that reconciles generated UI with the real application: replacing fake data with real APIs, adding the states a demo skips, and deciding what to keep vs rebuild. It encodes the judgment that generated UI is a starting sketch, and the engineering is in making it fit conventions and fail gracefully.

## When to use
- An AI tool produced a component/page and you need to ship it for real.
- Generated UI uses mock data and lacks loading/error/empty handling.
- You must decide which generated pieces to keep and which to rewrite.

## Inputs
- The generated UI (components/markup).
- The real API/types and the codebase conventions.

## Workflow
1. Map generated components to real API calls and types; rewire data flow.
2. Add the missing states: loading, error, and empty.
3. Conform to codebase conventions (styling system, state management, file layout).
4. Write a component test and one end-to-end test.
5. Record a "kept vs rebuilt" decision note per component.

## Outputs & evidence artifact
- `evidence/week10-ui/` — rewired components, added states, the component + E2E tests, and the kept-vs-rebuilt note.

## Acceptance checks
- [ ] All mock data is replaced with real API/types.
- [ ] Loading, error, and empty states exist.
- [ ] A component test and an E2E test pass.
- [ ] A kept-vs-rebuilt decision is recorded.

## Worked example
`Use ui-reconcile on the generated dashboard` → wired to `/api/metrics`, added skeleton + error toast + empty state, kept the layout but rebuilt the data table, E2E test green.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — `example-skills` incl. webapp-testing; SKILL.md format authority.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI for codebase-aware UI work.
- [obra/superpowers](https://github.com/obra/superpowers) — TDD + verification methodology.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth of UI/frontend agent skills (Vercel, Figma).

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 10 — Automated UI and App Building
