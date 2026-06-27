---
name: decision-forecast-eval
description: Evaluate a forecast by the decision it drives and its business cost, not just point error. Use when forecasting demand/inventory and you need scale-free accuracy, quantile/pinball at the service level, and simulated decision cost vs baseline.
---

# Decision Forecast Eval

A harness for evaluating forecasts the way the business experiences them. It encodes the judgment that MAE alone is misleading — what matters is the cost of the decisions the forecast drives, evaluated at the relevant service level.

## When to use
- You are forecasting demand and downstream inventory/ordering decisions.
- A low-error model still produces costly stockouts or overstock and you need to show why.
- You must compare forecasts at a chosen service level, not just on average.

## Inputs
- Forecasts (point and, ideally, quantiles) with actuals.
- The cost structure: holding cost, stockout/penalty cost, target service level.

## Workflow
1. Compute scale-free accuracy (e.g., MASE/WAPE) so series are comparable.
2. Compute quantile/pinball loss at the target service level.
3. Simulate the decision policy (e.g., order-up-to) the forecast drives.
4. Compute realized decision cost vs a naive/seasonal baseline.
5. Commit `forecast-decision-eval.md` with metrics and the cost comparison.

## Outputs & evidence artifact
- `forecast-decision-eval.md`: scale-free accuracy, quantile/pinball at the service level, and simulated decision cost vs baseline.

## Acceptance checks
- [ ] Accuracy is scale-free (comparable across series).
- [ ] Pinball/quantile loss is reported at the stated service level.
- [ ] Decision cost is simulated and compared against an explicit baseline.

## Worked example
`Use $decision-forecast-eval on this demand model`. Good output: WAPE 0.18, pinball at 95% service level, and a simulation showing 12% lower total holding+stockout cost than seasonal-naive despite similar MAE.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for decision-aware, cost-weighted scoring.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for building custom scorers like pinball/decision cost.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable applied-AI apps to wrap a forecasting decision loop.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — data tooling for assembling forecast/actual/cost tables.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions
