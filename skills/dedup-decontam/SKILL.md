---
name: dedup-decontam
description: Quantify duplication and benchmark contamination in a corpus and emit a clean shard set. Use when preparing pretraining data and you need a dup-rate, a contamination count against held-out benchmarks, and decontaminated shards.
---

# Dedup Decontam

A harness for the unglamorous but decisive step of removing duplicates and benchmark leakage. It encodes the judgment that inflated eval scores often trace to train/test overlap, so contamination must be measured and removed, not assumed absent.

## When to use
- You are finalizing a pretraining corpus and want trustworthy eval numbers.
- You need to prove benchmark data did not leak into training.
- You want a quantified duplication rate to justify dedup effort.

## Inputs
- A corpus (or shards) to clean.
- The benchmark/eval sets you must decontaminate against.

## Workflow
1. Compute near-duplicate rate (e.g., MinHash/LSH) across the corpus.
2. Match corpus documents against benchmark items; count contaminated hits.
3. Remove duplicates and contaminated spans; emit a cleaned shard set.
4. Re-measure dup-rate and contamination on the cleaned shards to confirm reduction.
5. Commit `evidence/week03-dedup.md` with before/after numbers and the clean shard manifest.

## Outputs & evidence artifact
- `evidence/week03-dedup.md`: the duplication rate, contamination count, and the cleaned shard set (with manifest).

## Acceptance checks
- [ ] Dup-rate is reported with the method used (e.g., MinHash threshold).
- [ ] Contamination is counted against the actual benchmark sets, before and after.
- [ ] The cleaned shards measurably reduce both numbers.

## Worked example
`Use $dedup-decontam on these shards vs MMLU/GSM8K`. Good output: 14% near-dup rate, 312 contaminated docs found, cleaned shards dropping contamination to 0 and dup-rate to 2%.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ingestion/indexing tooling adaptable to dedup pipelines.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — the benchmark suites you decontaminate against.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation recipes for trustworthy, leak-free scoring.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF dataset tooling reference for shard handling.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training
