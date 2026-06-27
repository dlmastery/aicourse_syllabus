---
name: production-readiness-review
description: Runs a deployed model+agent platform through a single checklist-scored go/no-go review, surfacing the top three risks and their mitigations. Use when a system is "done" and you need an explicit ship / don't-ship decision backed by a scored report, not vibes.
---

# Production Readiness Review

A harness skill that consolidates every prior readiness skill into one go/no-go gate for a deployed platform. It encodes the judgment that a launch decision must be a scored checklist with named, mitigated risks — so "no-go" is actionable and "go" is defensible.

## When to use
- A model + agent platform has reached the end of its build and someone must decide whether to ship.
- You need a single readiness report that a reviewer or instructor can score and sign.
- The system passed individual checks in isolation and you now need a holistic, cross-cutting review.

## Inputs
- The deployed platform (model + agent, with its monitoring, evals, and ops surface).
- The outputs of the upstream readiness skills feeding this review.

## Workflow
1. Pull together all eight upstream skills/artifacts covering the deployed platform.
2. Score each readiness dimension against the checklist (pass / partial / fail).
3. Identify the top three risks across all dimensions.
4. Write a concrete mitigation for each of the top three risks.
5. Render an explicit go / no-go decision based on the scored checklist.
6. Commit the readiness report as the deliverable.

## Outputs & evidence artifact
- A checklist-scored readiness report + the top 3 risks + their mitigations, written to `capstone/readiness-report.md` (this *is* the deliverable).

## Acceptance checks
- [ ] Every checklist dimension has an explicit pass/partial/fail score.
- [ ] Exactly the top three risks are named, each with a mitigation.
- [ ] The report ends in a single, unambiguous go / no-go verdict.
- [ ] The verdict follows from the scores (no green light over an unmitigated fail).

## Worked example
Invocation: `Use $production-readiness-review on the Week 12 capstone platform.` Good output: a scored table (Evals: pass, Monitoring: pass, Rollback: partial, Security: fail …) followed by "Top risks: 1) no auth on the inference endpoint — mitigation: gateway + key; 2) …" and a closing "Verdict: NO-GO until risk 1 is closed."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official evaluation and observability recipes that supply review evidence
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the quantitative readiness evidence
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI whose hooks and monitoring back the ops checks

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 12 — Capstone: One Model + One Agent, Notebook → Monitored Production
