---
name: safety-case-builder
description: Assemble threat model + red-team + mitigations + evals + governance into one auditable safety case (safety card + report). Use when closing a full red-team → mitigation → eval cycle and the safety case is the deliverable.
---

# Safety Case Builder

A safety-case assembly harness. It encodes the judgment that safety is an argument backed by evidence, not a vibe: the deliverable is a card + report tying each threat to a mitigation and an eval that tests it.

## When to use
- You are closing a red-team → mitigation → eval capstone.
- A model/system needs an auditable safety argument for release.
- Governance requires a single safety card reviewers can check.

## Inputs
- A threat model, red-team findings, applied mitigations, eval results, and governance requirements.

## Workflow
1. Document the threat model (who/what/how).
2. Summarize red-team findings with severity.
3. Map each threat to a mitigation.
4. Attach evals that test whether mitigations hold.
5. Add governance (sign-off, monitoring, escalation).
6. Assemble the safety card + report; commit it.

## Outputs & evidence artifact
- `evidence/safety-case/` — the safety card + report: threat model, red-team, mitigations, evals, and governance (this *is* the deliverable).

## Acceptance checks
- [ ] Every threat maps to a mitigation and a test.
- [ ] Red-team findings carry severity and residual-risk notes.
- [ ] Governance (sign-off + monitoring) is specified.

## Worked example
`Use $safety-case-builder for the chatbot capstone.` → "threats: jailbreak, PII leak; red-team found 3 jailbreaks; mitigations: input filter + system-prompt hardening; evals show jailbreak rate 14%→2%; governance: weekly red-team + on-call escalation."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for the eval layer.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ prebuilt evals incl. red-team/safety.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability and `/evaluation` recipes for governance evidence.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 13 — Capstone: A Full Red-Team → Mitigation → Eval Cycle
