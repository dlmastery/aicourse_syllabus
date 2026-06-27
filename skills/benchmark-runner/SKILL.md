---
name: benchmark-runner
description: Run a standard LLM eval suite reproducibly, with format/contamination caveats and confidence intervals. Use when reporting benchmark numbers and a bare leaderboard score would mislead without reproduction deltas and caveats.
---

# Benchmark Runner

A reproducibility harness for LLM benchmarks. The judgment it encodes: a benchmark score without a confidence interval, a contamination caveat, and a reproduction delta is marketing, not measurement.

## When to use
- Reporting model results on standard benchmarks (MMLU, GSM8K, etc.).
- Reproducing a paper's numbers as a checkpoint.
- Comparing models where small differences might be noise.

## Inputs
- A model and a list of benchmarks to run.

## Workflow
1. Fix the prompt format and decoding parameters; document them.
2. Run each benchmark; compute scores with confidence intervals.
3. Note contamination risk and format sensitivity per benchmark.
4. Compare to published numbers and record the reproduction delta.
5. Tabulate scores + caveats together.

## Outputs & evidence artifact
- `evidence/week07-eval/`: a scored table with confidence intervals, caveats (format/contamination), and a reproduction delta vs published numbers.

## Acceptance checks
- [ ] Scores include confidence intervals.
- [ ] Format and contamination caveats are recorded per benchmark.
- [ ] A reproduction delta vs published numbers is reported.

## Worked example
`Use $benchmark-runner to reproduce a model's GSM8K claim.` → GSM8K 71.2% ± 1.8 (8-shot), contamination flagged, reproduction delta −2.1 pts vs the paper traced to a prompt-format difference.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for reproducible, scored benchmark runs.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ pre-built evals (coding, reasoning) to run as the suite.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/evaluation` recipes for scoring and CIs.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint
