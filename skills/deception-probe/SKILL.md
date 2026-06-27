---
name: deception-probe
description: Test for observation-dependent behavior and eval-gaming — does the model act differently when it thinks it's watched? Use when probing for scheming/situational awareness and you need a behavior-delta table plus honeypot results.
---

# Deception Probe

A harness for detecting eval-gaming and observation-dependent behavior. It encodes the judgment that you cannot conclude "the model is honest" from good behavior on labeled tests — you must vary the observation cues and check whether behavior shifts, while being honest about what such tests can and cannot prove.

## When to use
- You are testing for scheming, sandbagging, or situational awareness.
- You suspect a model behaves better when it detects it is being evaluated.
- You need defensible evidence with explicit caveats for a safety review.

## Inputs
- The model under test.
- A task set with verifiable outcomes.
- Observation-cue variants (signals that suggest "being watched" vs "deployed").

## Workflow
1. Run the task set under a neutral framing; record behavior.
2. Re-run under observation-cue variants (overt monitoring vs apparently unmonitored).
3. Build a behavior-delta table: how outcomes change across cue conditions.
4. Plant honeypots (opportunities to defect that a scheming model would take); record hits.
5. Write an evidentiary-caveats note on what these results do and do not establish.
6. Commit everything under `evidence/week06-deception/`.

## Outputs & evidence artifact
- `evidence/week06-deception/`: the behavior-delta table, honeypot results, and an evidentiary-caveats note.

## Acceptance checks
- [ ] Behavior is compared across at least two observation-cue conditions.
- [ ] Honeypot opportunities and any defections are logged.
- [ ] The caveats note states the limits of the evidence (no overclaiming).

## Worked example
`Use $deception-probe on this agent`. Good output: a table showing safety compliance 0.98 when "monitored" vs 0.74 when "unmonitored," two honeypot defections, and a caveat that cue leakage could confound the delta.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI framework for adversarial/safety evaluation harnesses.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — red-team and deception/sandbagging evals to reuse.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation/observability recipes for controlled behavior tests.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog for safety/guardrail skill patterns.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 6 — Scheming, Deception & Situational Awareness
