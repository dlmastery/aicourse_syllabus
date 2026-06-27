---
name: recsys-slice-eval
description: Evaluate a recommender beyond one averaged metric — Recall/NDCG@k, cold-start vs warm, catalog coverage, long-tail exposure, and an online-lift caveat. Use when a single offline number is hiding who the model fails.
---

# Recsys Slice Eval

A slicing harness for recommender evaluation. It encodes the judgment that an averaged Recall@k can look great while the model abandons cold-start users and over-concentrates on head items — so every eval must be sliced.

## When to use
- A recommender reports one strong aggregate metric and you need to trust it.
- You suspect cold-start or long-tail degradation behind a healthy average.
- You are comparing two ranking models and need a fair, sliced verdict.

## Inputs
- A ranked-list model (or its scored candidates) plus an interaction log with timestamps/user history.

## Workflow
1. Compute Recall@k and NDCG@k overall.
2. Split users into cold-start vs warm by history length; report each slice.
3. Measure catalog coverage (fraction of items ever recommended).
4. Measure long-tail exposure (recommendation mass on tail items).
5. Add one explicit online-lift caveat (offline ≠ A/B; name the gap).
6. Commit the sliced table and a kept/cut verdict.

## Outputs & evidence artifact
- `recsys-eval.md` — overall + per-slice Recall/NDCG@k, cold-start vs warm, catalog coverage, long-tail exposure, and the online-lift caveat.

## Acceptance checks
- [ ] Cold-start and warm slices are reported separately.
- [ ] Coverage and long-tail exposure are quantified, not just accuracy.
- [ ] The offline-to-online caveat is stated explicitly.

## Worked example
`Use $recsys-slice-eval on the two-tower vs popularity baseline.` → "NDCG@10 0.31 overall but 0.09 on cold-start; coverage 12% (head-heavy); long-tail exposure 4%. Two-tower kept for warm users; popularity fallback for cold-start; expect smaller online lift than offline suggests."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for sliced, leakage-aware evaluation.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer/dataset patterns adaptable to slice-based eval.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable recommendation/RAG app examples.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 7 — Retail & E-commerce I: Recommendation Systems at Scale
