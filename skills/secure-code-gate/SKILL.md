---
name: secure-code-gate
description: Stop insecure AI-generated code from shipping by wiring SAST/secret/deps/DAST scans as a blocking CI gate, plus a triage note and an AI security-review prompt for PRs. Use when "vibe-coded" changes need a security gate before merge.
---

# Secure Code Gate

A CI-gating harness for AI-generated code. It encodes the judgment that fast AI coding needs a blocking security gate, because the speed that ships features also ships secrets, vulnerable deps, and injection bugs.

## When to use
- AI-assisted code is merging fast and needs a security checkpoint.
- A repo lacks blocking SAST/secret/deps scanning in CI.
- PRs need a consistent AI security-review step.

## Inputs
- A repository and its CI configuration.

## Workflow
1. Add SAST (static analysis) as a CI job.
2. Add secret scanning (block on detected credentials).
3. Add dependency/vulnerability scanning (block on criticals).
4. Add DAST against a running build where feasible.
5. Make these jobs **blocking** (fail the merge, not just warn).
6. Write a triage note for findings and an AI security-review prompt for PRs; commit evidence.

## Outputs & evidence artifact
- `evidence/week08-security/` — SAST/secret/deps/DAST jobs wired as a blocking gate, a triage note, and an AI security-review prompt for PRs.

## Acceptance checks
- [ ] Scans block the merge on criticals, not merely warn.
- [ ] Secret and dependency scanning are both present.
- [ ] A triage process and a PR security-review prompt exist.

## Worked example
`Use $secure-code-gate on the API repo.` → "added Semgrep SAST + gitleaks + dependency audit as required checks; a hardcoded key now fails the PR; triage note routes findings to owners; PR template includes the security-review prompt."

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI (hooks, slash-commands) for wiring CI gates and PR review.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP servers (Git/Filesystem) for repo automation.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — security/red-team evals to test the gate.
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated hooks/commands incl. security workflows.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 8 — AI Security and Secure "Vibe Coding"
