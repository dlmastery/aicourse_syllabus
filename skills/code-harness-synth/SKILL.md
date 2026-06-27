---
name: code-harness-synth
description: Auto-build a test/eval harness for a coding task so a self-improving agent's gains are grounded in execution, not vibes. Use when a self-evolving coding agent needs an objective, executable scoreboard before it iterates.
---

# Code Harness Synth

A bootstrapping harness for self-evolving coding agents. The judgment it encodes: a self-improving agent without an executable scoreboard optimizes its own delusions — so the first step is to synthesize a real test/eval harness that scores every candidate by running it.

## When to use
- Building a self-evolving / recursive-self-improvement coding agent.
- An agent claims improvement but nothing executes the claim.
- You need an objective fitness signal for candidate solutions.

## Inputs
- A coding task (spec, repo, or problem statement).

## Workflow
1. Derive an executable spec from the task (inputs → expected outputs).
2. Synthesize tests/checks that run candidate code.
3. Wrap them in a harness that produces a numeric score per candidate.
4. Validate the harness rejects known-bad and accepts known-good solutions.
5. Hand the scored harness to the improvement loop.

## Outputs & evidence artifact
- The synthesized harness plus the scores it produces for candidate solutions.

## Acceptance checks
- [ ] The harness scores candidates by actually executing them.
- [ ] It accepts a known-good and rejects a known-bad solution.
- [ ] Scores are numeric and comparable across iterations.

## Worked example
`Use $code-harness-synth for a string-parsing task.` → Generated 30 I/O tests + a runner returning pass-rate; validated it scores the reference solution 1.0 and a broken one 0.4; loop now iterates against the score.

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI for generating and running test harnesses in-loop.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — SWE-bench-style coding evals to model executable scoring on.
- [obra/superpowers](https://github.com/obra/superpowers) — TDD and verification methodology that grounds improvement in execution.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 6 — Self-Evolving Coding Agents
