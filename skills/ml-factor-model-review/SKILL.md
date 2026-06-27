---
name: ml-factor-model-review
description: Review a cross-sectional factor or ranking model by checking feature lagging, economic interpretation, cross-sectional neutrality assumptions, concentration risk, stability by era, and whether the model adds signal beyond simple baselines. Use when a quant model claims alpha or stock-selection skill.
---

# ML Factor Model Review

Use this skill when a ranking or factor model should be judged as a structured selection system rather than a mystery score.

## What This Skill Does

This skill reviews:

- feature lagging discipline
- factor interpretation
- baseline comparisons
- concentration and neutrality concerns
- era-by-era stability
- whether the signal adds anything believable

## Workflow

1. Restate the ranking target and rebalance cadence.
2. Audit feature lagging and point-in-time availability.
3. Group features by economic or behavioral story.
4. Compare against simple baselines.
5. Check concentration and era stability.
6. Decide whether the model has believable incremental signal.

## Output Format

- `Task`
- `Signal Definition`
- `Feature Lagging Audit`
- `Factor Story`
- `Baseline Comparison`
- `Concentration / Neutrality Risk`
- `Era Stability`
- `Believability Verdict`
- `Next Improvement`

## Quality Bar

- Do not call a score meaningful if its lagging is unclear.
- Do not let feature count substitute for factor story.
- Ask whether the signal survives simple baselines.
- Make instability visible across eras, not only in aggregate.
