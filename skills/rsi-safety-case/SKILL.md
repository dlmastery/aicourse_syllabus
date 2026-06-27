---
name: rsi-safety-case
description: Assemble a safety case for a self-improving system — threats, tests, mitigations, residual risk, and a kill-switch — into one auditable document. Use when governing an RSI system that must be shown safe before it runs unattended.
---

# RSI Safety Case

A safety-case harness for self-improving systems. It encodes the judgment that a system allowed to modify itself must carry an explicit, auditable argument that its risks are bounded and interruptible.

## When to use
- A self-improving system will run with reduced human oversight.
- Governance or review requires a documented safety argument.
- You need to show threats are tested and a kill-switch exists.

## Inputs
- The RSI system description, its improvement mechanism, and its deployment context.

## Workflow
1. Enumerate threats (capability jumps, goal drift, unlearning failures).
2. Define tests that would surface each threat.
3. Specify mitigations (sandboxing, rate limits, unlearning, review gates).
4. State residual risk after mitigations honestly.
5. Define a kill-switch and verify it actually halts self-modification.
6. Assemble into one auditable safety case; commit it.

## Outputs & evidence artifact
- `evidence/rsi-safety-case.md` — the safety case: threats, tests, mitigations, residual risk, and a verified kill-switch.

## Acceptance checks
- [ ] Each named threat has a test and a mitigation.
- [ ] Residual risk is stated, not hidden.
- [ ] The kill-switch is verified to actually stop self-modification.

## Worked example
`Use $rsi-safety-case on the self-evolving coding agent.` → "threat: goal drift via reward edits → test: weekly objective audit → mitigation: reward function frozen + review gate; residual: slow capability creep; kill-switch halts the evolve loop and reverts to last reviewed checkpoint, verified."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for safety testing.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt safety/red-team evals to source threat tests.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability/eval recipes for governance evidence.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 13 — Safety, Unlearning & Governance of Self-Improving Systems
