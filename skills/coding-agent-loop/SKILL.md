---
name: coding-agent-loop
description: Build and run a minimal, debuggable coding-agent loop you understand end-to-end (the thing IDEs hide). Use when implementing a from-scratch coding agent and you need a repeatable localize → patch → test → stop procedure that leaves evidence.
---

# Coding Agent Loop

A minimal harness for the read-edit-run loop that powers coding agents. It encodes the judgment that a coding agent is just a controlled loop — localize, make the smallest patch, run the test, decide whether to stop — and that every run should leave a reproducible trail.

## When to use
- You are building a coding agent from scratch and want the loop visible, not hidden behind an IDE.
- You have a repo plus a failing test or bug and want a disciplined fix procedure.
- You need to compare your agent's behavior across runs with consistent evidence.

## Inputs
- A repository at a known commit.
- A failing test, stack trace, or bug report that defines "done."
- Tool access: read files, edit files, run the test command.

## Workflow
1. Reproduce: run the failing test and capture the red output verbatim.
2. Localize: search the repo to the smallest set of files implicated by the failure.
3. Patch: write the minimal diff that could plausibly fix it — no drive-by refactors.
4. Run: execute the test; record red→green (or still-red) with the command and output.
5. Stop reason: state why the loop ended (test passes / budget exhausted / stuck) — never loop silently.
6. Commit `evidence/week03-fixlog.md` with the localization, the diff, and the transition.

## Outputs & evidence artifact
- `evidence/week03-fixlog.md`: implicated files, the minimal patch, the red→green test output, and an explicit stop reason.

## Acceptance checks
- [ ] The fixlog shows the test failing before and passing after, with real command output.
- [ ] The patch is minimal — only files needed for the fix are touched.
- [ ] A stop reason is recorded (not just "done").

## Worked example
`Use $coding-agent-loop to fix the failing test in payments/`. Good output: a fixlog naming `payments/charge.py`, a 4-line diff, `pytest -k charge` going from 1 failed to 1 passed, and stop reason "target test green."

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — the agentic CLI whose edit/run/test loop this skill mirrors and demystifies.
- [anthropics/skills](https://github.com/anthropics/skills) — format authority for SKILL.md and the example skills (webapp-testing) that wrap dev loops.
- [obra/superpowers](https://github.com/obra/superpowers) — methodology skills (systematic-debugging, TDD) that pair with this loop.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — reference Filesystem/Git servers for the agent's read/edit/run tools.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable coding-agent examples to compare loop designs.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 3 — Building a Coding Agent From Scratch
