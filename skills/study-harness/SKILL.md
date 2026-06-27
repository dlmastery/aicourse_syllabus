---
name: study-harness
description: Turns any new concept into a reusable 7-step study loop that ends in a built artifact and a logged mistake. Use when learning a new technical topic and you want durable understanding instead of passive reading.
---

# Study Harness

A harness skill that runs a fixed loop — explain, formalize, break, rebuild, log — on any concept so that "I studied it" becomes "I have an artifact and a recorded mistake." It encodes the judgment that you don't understand something until you can rebuild it and name where your intuition failed.

## When to use
- You hit a new concept (math, ML, systems) and want to actually retain it.
- You keep "understanding" things you then can't reproduce.
- You want a consistent learning record across an entire course.

## Inputs
- One topic (e.g., "matrix multiplication").

## Workflow
1. Explain it in plain language as if to a beginner.
2. Write the formal statement / definition.
3. Produce one counterexample or edge case.
4. Restate it in your own words.
5. Rebuild a tiny version in code.
6. Record one mistake you actually made.
7. Write one open question to chase next.

## Outputs & evidence artifact
- `evidence/study-log.md` with three columns — prediction / result / revision — plus the tiny built artifact.

## Acceptance checks
- [ ] All 7 steps are present for the topic.
- [ ] A runnable tiny artifact exists.
- [ ] At least one real mistake is logged with its revision.

## Worked example
`Use study-harness on "softmax"` → plain explanation, the formula, the overflow counterexample, a 6-line NumPy reimplementation, logged mistake ("forgot the max-subtraction trick"), open question on temperature.

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — flagship learning/methodology skill framework.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example skills.
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated workflows and learning loops.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified practical skills.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 1 — Why Math Is the Operating Language of ML (and Python/NumPy From Scratch)
