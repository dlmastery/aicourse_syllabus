---
name: ml-portfolio-risk-evaluation
description: Evaluate whether an ML-driven portfolio or ranking output has acceptable practical risk by checking concentration, exposure drift, drawdown behavior, turnover, liquidity assumptions, and mismatch between predictive metrics and portfolio outcomes. Use when a model result is being turned into a portfolio or trading decision.
---

# ML Portfolio Risk Evaluation

Use this skill when a model score is one step away from capital allocation and the real question is portfolio risk, not only predictive accuracy.

## What This Skill Does

This skill evaluates:

- concentration risk
- exposure drift
- drawdown profile
- turnover and liquidity pressure
- predictive-metric versus portfolio-metric mismatch
- rollout or paper-trading readiness

## Workflow

1. Restate how scores become positions.
2. Review concentration and exposure constraints.
3. Check turnover and liquidity assumptions.
4. Compare predictive metrics with portfolio outcomes.
5. Inspect drawdowns and bad periods.
6. Decide whether the result is safe enough for paper trading or only research.

## Output Format

- `Portfolio Construction Rule`
- `Concentration Risk`
- `Exposure Drift`
- `Turnover / Liquidity Risk`
- `Predictive vs Portfolio Metric Gap`
- `Drawdown Notes`
- `Readiness Verdict`
- `Required Guardrails`

## Quality Bar

- Do not treat ranking accuracy as portfolio quality by default.
- Do not ignore drawdowns because average return looks fine.
- Do not ignore turnover and liquidity.
- Keep the final verdict at the level of risk evidence, not excitement.
