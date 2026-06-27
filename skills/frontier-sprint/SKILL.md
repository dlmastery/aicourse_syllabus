---
name: frontier-sprint
description: Execute a time-boxed frontier build without dropping evidence discipline — minimal scope, one result vs baseline, a limitations note. Use during a hackathon or sprint when pressure tempts you to skip the proof.
---

# Frontier Sprint

A harness for building fast without lying to yourself. It encodes the judgment that time pressure is exactly when evidence discipline collapses — so a sprint must still ship a scoped build, one honest result against a baseline, and a note on what it can't yet claim.

## When to use
- You are in a hackathon or time-boxed build at the frontier.
- You are tempted to demo something impressive without a baseline or caveats.
- You need a repeatable structure to stay honest under pressure.

## Inputs
- An idea / hypothesis.
- A hard time budget.
- A baseline to beat (even a trivial one).

## Workflow
1. Scope ruthlessly: the minimal build that could test the idea inside the budget.
2. Build it; resist scope creep.
3. Run one comparison against the baseline on a fixed task.
4. Write a limitations note: what's unproven, what would break at scale.
5. Commit `hackathon/result.md` with the build, the one result, and the limitations.

## Outputs & evidence artifact
- `hackathon/result.md`: the minimal scoped build, one result vs baseline, and a limitations note.

## Acceptance checks
- [ ] The build stayed within the time budget and minimal scope.
- [ ] Exactly one result is reported against an explicit baseline.
- [ ] A limitations note states what the result does not establish.

## Worked example
`Use $frontier-sprint for a 4-hour retrieval-rerank idea`. Good output: a minimal rerank prototype, +6% nDCG over the no-rerank baseline on a fixed query set, and a note "tested on 50 queries only; latency not measured."

## Related skills in the wild
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable apps to fork as a sprint starting point.
- [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) — curated agents to prototype against quickly.
- [obra/superpowers](https://github.com/obra/superpowers) — brainstorming → writing-plans methodology for fast scoping.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — recipes to bootstrap a baseline comparison quickly.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 12 — In-Class Hackathon: Build at the Frontier Under Pressure
