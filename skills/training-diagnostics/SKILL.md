---
name: training-diagnostics
description: Reads a loss curve and ranks the likely causes of bad training, then names the cheapest next experiment. Use when a training run looks wrong (diverging, flat, spiky) and you need a prioritized diagnosis instead of random knob-twiddling.
---

# Training Diagnostics

A harness skill that turns a loss log into a ranked list of probable causes and a single cheapest next experiment. It encodes the judgment that loss-curve shape is diagnostic, and the right next step is the cheapest one that discriminates between hypotheses.

## When to use
- A loss curve is diverging, flat, spiky, or plateauing early.
- You're tempted to change five things at once.
- You need to explain to a teammate what's wrong and what to try first.

## Inputs
- A loss log / curve (train and ideally val).

## Workflow
1. Classify the curve shape (diverge / flat / spike / slow / overfit gap).
2. List candidate causes ranked by likelihood (LR too high/low, bug, data issue, bad init).
3. For the top cause, name the cheapest discriminating experiment.
4. Annotate the log marking stable vs unstable regions and the suspected onset.
5. State the expected outcome that would confirm/refute the top hypothesis.

## Outputs & evidence artifact
- Annotated stable-vs-unstable loss logs with a ranked diagnosis and the cheapest next experiment.

## Acceptance checks
- [ ] The curve shape is classified explicitly.
- [ ] Causes are ranked by likelihood, not listed flat.
- [ ] The recommended next experiment is the cheapest discriminating one.

## Worked example
`Use training-diagnostics on the diverging run` → spike at step 800 after LR warmup ends; top cause LR too high; cheapest test: rerun 200 steps at 1/3 LR; expect smooth descent.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — training loops and logging to diagnose.
- [volcengine/verl](https://github.com/volcengine/verl) — post-training stack with training diagnostics.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` recipes for reference curves.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 5 — The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch
