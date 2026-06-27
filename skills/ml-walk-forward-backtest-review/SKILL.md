---
name: ml-walk-forward-backtest-review
description: Review whether a time-series or quantitative-investment backtest is decision-relevant by checking walk-forward splits, rebalance logic, benchmark choice, turnover, transaction-cost assumptions, regime sensitivity, and metric credibility. Use when a forecast or ranking result is presented as if it were a deployable strategy.
---

# ML Walk-Forward Backtest Review

Use this skill when a backtest should be judged like an engineering experiment instead of a chart to admire.

## What This Skill Does

This skill reviews:

- walk-forward protocol
- benchmark quality
- rebalance cadence
- turnover and transaction cost assumptions
- metric stack
- regime sensitivity
- whether the backtest supports a real claim

## Workflow

1. Restate the prediction target and decision rule.
2. Check walk-forward or expanding-window design.
3. Identify the benchmark and whether it is honest.
4. Review turnover, slippage, and cost assumptions.
5. Check stability across time segments or regimes.
6. Decide what the backtest actually proves.

## Output Format

- `Task / Strategy`
- `Walk-Forward Design`
- `Benchmark`
- `Turnover / Cost Notes`
- `Metric Credibility`
- `Regime Stability`
- `Main Weakness`
- `What The Backtest Actually Supports`
- `Next Fix`

## Quality Bar

- Do not accept random train-test splits for temporal tasks.
- Do not praise Sharpe-like results without cost assumptions.
- Do not ignore regime concentration.
- Make the benchmark earn respect, not convenience.
