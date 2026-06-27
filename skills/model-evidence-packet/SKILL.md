---
name: model-evidence-packet
description: Assemble a trained-from-scratch model's artifacts (model card, training curves, samples, eval note, critique) into one reviewable capstone bundle. Use as the deliverable for a built-from-scratch GPT/transformer capstone.
---

# Model Evidence Packet

A harness skill whose output *is* the deliverable: a self-contained bundle that lets a reviewer judge a from-scratch model build from artifacts — the model card, the curves, real samples, an eval note, and an honest critique of what's weak.

## When to use
- You finished a from-scratch model build and need to present it for review.
- A reviewer must verify the result from artifacts, not from your narration.
- You are producing the capstone bundle for the deep-learning track.

## Inputs
- A trained run's artifacts: checkpoints, training curves, generated samples, eval results.

## Workflow
1. Write the model card (architecture, data, training config, intended use, limitations).
2. Add the training curves (loss/eval over steps).
3. Add a representative samples file (best/median/worst).
4. Add the eval note (what was measured and the numbers).
5. Add an honest critique: the model's main weakness and what you'd do next.

## Outputs & evidence artifact
- `capstone/` — model card, training curves, samples, eval note, and critique, assembled into one reviewable bundle.

## Acceptance checks
- [ ] The model card covers architecture, data, config, and limitations.
- [ ] Training curves and samples are both included.
- [ ] The eval note states what was measured and the result.
- [ ] A critique names the weakest aspect honestly.

## Worked example
`Use $model-evidence-packet for my from-scratch GPT` → `capstone/` with a 1-page model card, loss curve (1.9 final), 10 samples, eval note (BPC 1.1), and a critique noting repetition at long generations.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence-packet conventions.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for the eval note.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for reproducible model scoring.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 12 — Capstone: A Built-From-Scratch GPT With an Evidence Packet
