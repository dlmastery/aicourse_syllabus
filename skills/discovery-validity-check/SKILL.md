---
name: discovery-validity-check
description: Separate plausible-looking generated candidates from validated discoveries via validity, novelty, and synthesizability filters. Use when generative design proposes molecules/materials and you must report how many survive each filter.
---

# Discovery Validity Check

A harness for AI-for-science generation that resists hype. It encodes the judgment that a generative model proposing thousands of "novel" candidates means nothing until you measure how many are chemically valid, genuinely novel, and actually makeable.

## When to use
- A generative model proposes molecules/materials and you need to triage them.
- You must distinguish novelty-from-training-set from memorized recombination.
- A reviewer asks "how many of these are real discoveries?"

## Inputs
- A set of generated candidates.
- A validity checker, the training/reference set (for novelty), and a synthesizability/applicability heuristic.

## Workflow
1. Validity filter: discard chemically/physically invalid candidates; record the rate.
2. Novelty filter: compare survivors against the training set; flag true novelty.
3. Synthesizability/applicability filter: keep candidates that could plausibly be made/used.
4. Report the count surviving each filter (the funnel) and inspect a few survivors.
5. Commit `validity-check.md` with rates, the funnel, and example survivors.

## Outputs & evidence artifact
- `validity-check.md`: chemical-validity rate, novelty vs training set, synthesizability/applicability flag, and the count surviving each filter.

## Acceptance checks
- [ ] Validity rate is computed, not assumed.
- [ ] Novelty is measured against the actual training/reference set.
- [ ] A per-filter survival count (funnel) is reported end to end.

## Worked example
`Use $discovery-validity-check on 5,000 generated molecules`. Good output: 71% valid, 1,100 novel vs training set, 240 synthesizable, funnel 5000→3550→1100→240, with three example survivors.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF tooling reference for wiring validity/novelty checks as agent tools.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for funnel-style candidate scoring.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for custom scorers over generated candidate sets.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable generative/agent apps for science workflows.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 4 — AI for Science II: Molecules, Materials & Generative Design
