---
name: research-loop
description: Run propose→execute→read→iterate research cycles with a logged, reproducible experiment trail. Use when driving an automated/AI-scientist research process and every iteration must leave reproducible evidence.
---

# Research Loop

A cycle harness for automated research. It encodes the judgment that scientific progress comes from disciplined, logged iteration — propose a hypothesis, run it, read the result, decide the next move — never from undocumented one-off runs.

## When to use
- You are building or driving an AI-scientist loop over many experiments.
- A research process needs a reproducible trail, not a pile of ad-hoc runs.
- You want each iteration's decision to be auditable later.

## Inputs
- A research goal, a hypothesis space, and an executable experiment harness.
- A logging target (experiment log / tracker).

## Workflow
1. **Propose:** state the next hypothesis and the metric that would confirm it.
2. **Execute:** run the experiment with a fixed seed and recorded config.
3. **Read:** record the result and whether it confirmed the hypothesis.
4. **Iterate:** decide the next hypothesis from the evidence; log the rationale.
5. Repeat; keep every cycle's config, result, and decision in the log.

## Outputs & evidence artifact
- `evidence/research-log.md` — the experiment log: per-cycle hypothesis, config, result, confirm/deny, and the decision that followed.

## Acceptance checks
- [ ] Every cycle logs hypothesis → config → result → decision.
- [ ] Runs are reproducible (seed + config recorded).
- [ ] The log shows why each next step was chosen.

## Worked example
`Use $research-loop to tune a data-augmentation policy.` → a log: "cycle 3: hypothesize mixup>cutout; ran seed 7; mixup +1.2% val, confirmed; next: stack mixup+randaug — rationale logged."

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent library for building research loops.
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — role-based multi-agent framework for propose/execute/critique roles.
- [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) — curated autonomous research agents.
- [obra/superpowers](https://github.com/obra/superpowers) — agentic-skills methodology for disciplined iteration.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 7 — Automated AI Research & Scientific Discovery ("AI Scientists")
