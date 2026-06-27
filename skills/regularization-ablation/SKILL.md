---
name: regularization-ablation
description: Quantify each regularizer's effect on the train–test gap with everything else fixed, producing an ablation table and a recommendation. Use when toggling dropout/BatchNorm/weight-decay and you need to know which one actually closes the gap.
---

# Regularization Ablation

A controlled-toggle harness for regularization. It encodes the judgment that regularizers must be evaluated one-at-a-time against a fixed baseline, so improvements are attributable rather than entangled.

## When to use
- You added dropout, BatchNorm, and weight decay together and don't know which helped.
- A model overfits and you need an evidence-based choice of regularizer.
- You want a clean, repeatable ablation rather than a lucky run.

## Inputs
- A trained model and a set of regularizers to toggle (dropout rate, weight decay, BatchNorm on/off, augmentation).
- A fixed train/test split and fixed everything-else (optimizer, seed, epochs).

## Workflow
1. Establish a no-regularization baseline: record train acc, test acc, and the gap.
2. Toggle exactly one regularizer; keep all else fixed; re-train.
3. Record train acc, test acc, and the train–test gap per setting.
4. Repeat for each regularizer (and one combined setting).
5. Rank by gap reduction without test-acc loss; commit the table + recommendation.

## Outputs & evidence artifact
- `evidence/week04-ablation.md` — the ablation table (train acc, test acc, gap per setting) and a one-line recommendation.

## Acceptance checks
- [ ] Each row changes exactly one regularizer vs the baseline.
- [ ] The train–test gap is reported, not just test accuracy.
- [ ] The recommendation cites the table rows that justify it.

## Worked example
`Use $regularization-ablation on the CIFAR CNN.` → "baseline gap 18pts; +dropout 0.3 → gap 9pts (test +2); +weight-decay 5e-4 → gap 12pts; BatchNorm alone → gap 14pts. Recommend dropout 0.3 + weight-decay; BatchNorm kept for stability not generalization."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes for controlled training experiments.
- [huggingface/trl](https://github.com/huggingface/trl) — training-stack reference for reproducible runs.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)
