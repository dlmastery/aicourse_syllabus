---
name: ml-lookahead-bias-audit
description: Audit whether a time-aware ML or quantitative-investment setup leaks future information by reviewing timestamps, revision timing, filing delays, feature publication lags, and train-test boundaries. Use when a forecasting, ranking, or backtest result may be inflated by look-ahead bias.
---

# ML Look-Ahead Bias Audit

Use this skill when a forecasting result feels too good and the real question is whether the system accidentally knew the future.

## What This Skill Does

This skill audits:

- prediction timestamp
- feature availability timestamp
- publication or revision lag
- label horizon
- train / validation / test boundary integrity
- likely leakage channels

## Workflow

1. Restate the decision time and label horizon.
2. List each feature and when it becomes knowable.
3. Check whether revised data replaced point-in-time data.
4. Check whether filings or market events were lagged correctly.
5. Review split logic for temporal contamination.
6. Name the most dangerous leakage channel.

## Output Format

- `Task`
- `Prediction Time`
- `Label Horizon`
- `Feature Availability Audit`
- `Revision / Vintage Risk`
- `Split Integrity Risk`
- `Main Leakage Channels`
- `Trust Level`
- `Required Fixes`

## Quality Bar

- Do not say a feature is valid unless you can say when it was knowable.
- Treat revised macro data as risky by default.
- Treat financial filings as delayed unless explicitly lagged.
- Prefer uncomfortable timing clarity over optimistic backtests.
