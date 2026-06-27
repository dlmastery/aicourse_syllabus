---
name: open-ended-evolver
description: Runs population-based, novelty-driven optimization in language/program space, keeping the search trajectory as the evidence. Use when there is no single fixed objective and you want diverse, improving candidates discovered by mutation and selection over generations.
---

# Open Ended Evolver

A harness skill for open-ended discovery: maintain a population of language/program candidates, mutate and select for novelty and quality, and let the search wander toward improvements rather than a single optimum. It encodes the judgment that in open-ended problems the trajectory of discovery — not a final scalar — is the result worth keeping.

## When to use
- The objective is open-ended or shifting and a single fitness number is too narrow.
- You want diverse, novel candidates (programs, prompts, designs), not one greedy answer.
- You are demonstrating evolutionary / quality-diversity self-improvement over generations.
- You need an auditable record of how candidates improved across the run.

## Inputs
- A candidate representation in language/program space (prompt, code, or config).
- A mutation/variation operator (LLM-driven edits, crossover).
- A novelty/quality scoring signal and a population/generation budget.

## Workflow
1. Seed an initial population of candidates.
2. Score each for quality and novelty.
3. Select parents (favoring novelty as well as fitness).
4. Mutate/recombine to produce offspring.
5. Evaluate offspring and update the population/archive.
6. Repeat for the generation budget, logging the full trajectory.
7. Report the trajectory: best candidates, novelty spread, and improvement over time.

## Outputs & evidence artifact
- `evidence/open-ended-evolver/trajectory.md` — the search trajectory: per-generation best/novel candidates, scores over time, and the final archive.

## Acceptance checks
- [ ] A population evolves over multiple generations (not a single-shot search).
- [ ] Selection rewards novelty/diversity, not fitness alone.
- [ ] The trajectory (scores and candidates per generation) is logged and shows improvement.
- [ ] `evidence/open-ended-evolver/trajectory.md` is committed with the archive.

## Worked example
`Use $open-ended-evolver to evolve prompt programs for a puzzle, 20 generations, population 30.` Good output: a trajectory table where best score climbs 0.42 → 0.81, an archive of 12 distinct high-novelty solutions, and a plot description showing diversity preserved rather than collapsing to one lineage.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals to score evolving candidates consistently.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — code-agent library for LLM-driven mutation of program candidates.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for generation and evaluation loops.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 8 — Open-Ended Discovery & Evolutionary Self-Improvement
