---
name: rsi-classifier
description: Classify any recursive-self-improvement method by five lenses (change target, temporal regime, mechanism, context, evidence) and name its collapse risk. Use when triaging an RSI paper/system into the course taxonomy.
---

# RSI Classifier

A taxonomy harness for recursive self-improvement. It encodes the judgment that RSI methods are best understood through fixed lenses, and that naming a method's collapse risk is part of classifying it.

## When to use
- You are reading an RSI paper/system and need to place it in the taxonomy.
- You want a consistent five-lens summary across many methods.
- A method's failure mode needs to be named, not assumed.

## Inputs
- A paper or system describing a self-improvement method.

## Workflow
1. Identify the **change target** (weights, prompts, code, memory).
2. Identify the **temporal regime** (in-context, per-episode, across-runs).
3. Identify the **mechanism** (verify-filter-SFT, search, evolution).
4. Identify the **context** (single agent, population, environment).
5. Identify the **evidence** (what proof of improvement is offered).
6. Name the most likely **collapse risk**; commit the five-lens entry.

## Outputs & evidence artifact
- `evidence/w01-five-lens.md` — the {change target, temporal regime, mechanism, context, evidence} classification plus one named failure mode.

## Acceptance checks
- [ ] All five lenses are filled, not just some.
- [ ] A specific collapse/failure mode is named.
- [ ] The classification cites the source method's claims.

## Worked example
`Use $rsi-classifier on STaR.` → "change target: weights; regime: across-runs; mechanism: verify-filter-SFT on self-generated rationales; context: single agent; evidence: held-out accuracy lift. Collapse risk: diversity collapse from self-distillation."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the evidence lens.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt evals incl. agentic/reasoning suites.
- [huggingface/trl](https://github.com/huggingface/trl) — self-training/post-training mechanisms referenced by RSI methods.
- [obra/superpowers](https://github.com/obra/superpowers) — self-improving agentic methodology as a reference system.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 1 — Foundations: The Five Lenses, Taxonomy & Theory of RSI
