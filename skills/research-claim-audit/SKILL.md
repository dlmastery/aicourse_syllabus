---
name: research-claim-audit
description: Independently verify a claim from an autonomous (or human) research process — reproduce it, render a validity verdict, and name the exact claim-vs-evidence gap. Use when an AI-Scientist-style result needs to be trusted before it is cited.
---

# Research Claim Audit

A verification harness for research outputs. It encodes the judgment that a claim is not a result until someone other than the producer reproduces it and pins the gap between what was claimed and what the evidence shows.

## When to use
- An autonomous research agent reports a finding you must validate.
- A paper/result's headline number needs an independent reproduction.
- You need a written verdict on whether a claim is supported.

## Inputs
- A claimed result plus its code and logs (or enough to re-run it).
- The original claim text and any reported metric.

## Workflow
1. Restate the claim precisely (metric, dataset, condition).
2. Attempt a reproduction from the provided code/logs.
3. Compare reproduced number vs claimed number; compute the delta.
4. Check for leakage, cherry-picked seeds, or missing baselines.
5. Render a verdict (supported / partially / not) and name the specific gap.
6. Commit the audit.

## Outputs & evidence artifact
- `claim-audit.md` — the reproduction attempt, reproduced vs claimed numbers, a validity verdict, and the specific claim-to-evidence gap.

## Acceptance checks
- [ ] A reproduction was actually attempted (not just a code read).
- [ ] The verdict is explicit and tied to the delta.
- [ ] Any leakage/baseline gap is named concretely.

## Worked example
`Use $research-claim-audit on the agent's "12% lift" claim.` → "reproduced 4% on the held-out split vs 12% claimed; gap traced to eval on a contaminated subset. Verdict: not supported as stated; supported as ~4% on clean data."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for independent, scorer-based reproduction.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ prebuilt evals to cross-check claims.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for leakage-aware verification.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology for tracing claim-vs-evidence gaps.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 2 — Autonomous Research Agents: The "AI Scientist"
