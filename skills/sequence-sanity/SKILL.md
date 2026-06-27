---
name: sequence-sanity
description: Validate any sequence model with three cheap checks — gradient check on a short sequence, overfit-a-single-batch, and a samples-look-reasonable read. Use when building an RNN/LSTM/char-LM from scratch and you need to catch bugs before a long training run.
---

# Sequence Sanity

A fast pre-flight harness for sequence models. It encodes the judgment that most sequence-model bugs are caught by three cheap checks long before an expensive training run — so you run them first, every time.

## When to use
- You just implemented an RNN/LSTM/char-LM from scratch.
- A training run is about to start and you want bugs caught cheaply first.
- Loss isn't moving and you need to localize the fault.

## Inputs
- A sequence model and a tiny batch (a few short sequences).

## Workflow
1. **Grad-check:** compare analytic vs numerical gradients on a short sequence.
2. **Overfit one batch:** train on a single tiny batch; loss should approach ~0.
3. **Sample read:** generate from the overfit model; samples should be coherent for that batch.
4. If any check fails, localize (grad-check → backprop bug; no overfit → capacity/optimizer bug).
5. Commit the three results.

## Outputs & evidence artifact
- `evidence/week06-seq-sanity.md` — grad-check result, the single-batch loss→~0 curve, and a generated sample.

## Acceptance checks
- [ ] Grad-check passes within numerical tolerance.
- [ ] The model overfits a single batch to near-zero loss.
- [ ] A generated sample is shown and looks reasonable for that batch.

## Worked example
`Use $sequence-sanity on my char-LSTM.` → "grad-check rel-error 2e-7 (pass); single batch loss 3.4→0.02 in 200 steps; sample reproduces the training string. Safe to start the full run."

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology for localizing model bugs.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` recipes and training sanity patterns.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)
