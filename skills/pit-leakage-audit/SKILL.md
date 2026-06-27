---
name: pit-leakage-audit
description: Proves a tabular/time-series pipeline has no target or temporal (point-in-time) leakage by tracing each feature's earliest valid timestamp. Use before trusting any backtest or cross-validated metric on time-ordered data, especially in fraud/finance.
---

# PIT Leakage Audit

A point-in-time correctness audit. It encodes the judgment that a backtest score is meaningless until every feature is provably computable from information available at prediction time — no future rows, no target bleed.

## When to use
- A fraud/finance model's offline metrics look "too good" and you suspect leakage.
- You added rolling/aggregate features and need to prove none of them peek at future rows.
- A backtest must pass a point-in-time correctness gate before it informs a go/no-go decision.

## Inputs
- The feature pipeline (transforms producing the model's features).
- The train/test split and the timestamp column defining prediction time.

## Workflow
1. Enumerate every feature and determine its earliest valid timestamp — when its value is actually knowable.
2. For each feature, check whether its value depends on any row at or after the prediction time (future dependence).
3. Inspect the target: confirm no feature is a transform/proxy of the label.
4. Verify the split is time-respecting (no test rows precede train rows in time).
5. Emit a per-feature table and an overall pass/fail; any future-dependent feature is an automatic fail.

## Outputs & evidence artifact
- `pit-audit.md` containing: a list of each feature's earliest valid timestamp, any feature whose value depends on future rows, and an overall pass/fail.

## Acceptance checks
- [ ] Every feature has a stated earliest-valid timestamp.
- [ ] Future-row dependence is checked per feature and any offender is listed.
- [ ] Target/label leakage is explicitly ruled out.
- [ ] An overall pass/fail is recorded (fail if any leakage found).

## Worked example
Invocation: `Use $pit-leakage-audit to audit the card-fraud feature pipeline before the backtest.`
Good output: `pit-audit.md` — 23 features audited; `acct_30d_chargeback_rate` uses a window that includes the transaction's own future chargebacks (future dependence) → FAIL; `merchant_lifetime_fraud_ct` is computed from the full dataset including post-split rows → FAIL. Two leaks explain the inflated AUC. Recommendation: recompute both as as-of-time windows and re-backtest.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — data loaders/connectors for ingesting and tracing tabular/time-series sources.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for structured data inspection and reporting.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — dataset/scorer framework for repeatable pass/fail audits.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and evidence-artifact convention.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 5 — Finance I: Fraud Detection & Point-in-Time Correctness
