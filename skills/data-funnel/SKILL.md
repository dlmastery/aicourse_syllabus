---
name: data-funnel
description: For any corpus, produce a stage-by-stage retention funnel with sampled drops and a bias note. Use when curating pretraining data and you need to show how much each filter removed and what it might have biased.
---

# Data Funnel

A harness for making data curation auditable. It encodes the judgment that every filter both cleans and biases — so you must report what fraction each stage dropped, eyeball samples of the rejects, and name at least one bias the funnel introduces.

## When to use
- You are filtering a web-scale corpus (Common Crawl extraction, language ID, quality filters).
- A reviewer asks "how much did each stage remove and what did it throw away?"
- You need to surface filtering bias before it silently shapes the model.

## Inputs
- A raw corpus (or shard sample).
- The filter stack in order (extraction, dedup-lite, language ID, quality/heuristic filters).

## Workflow
1. Count documents/tokens entering and leaving each filter stage.
2. Build the retention funnel: per-stage and cumulative survival.
3. Sample rejected docs at each stage and inspect what was dropped.
4. Name at least one bias risk the funnel introduces (e.g., dialect, domain).
5. Commit `evidence/week02-funnel.md` with the table, samples, and bias note.

## Outputs & evidence artifact
- `evidence/week02-funnel.md`: the retention funnel table, sampled rejected docs, and one bias risk.

## Acceptance checks
- [ ] Per-stage and cumulative retention are both reported.
- [ ] Rejected-doc samples are shown for at least two stages.
- [ ] One concrete bias risk is named, tied to a specific filter.

## Worked example
`Use $data-funnel on this Common Crawl shard`. Good output: a funnel showing language ID cutting 38% and quality filters another 22%, sampled rejects, and a note "perplexity filter disproportionately drops code-switched text."

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ingestion/extraction tooling for building corpus pipelines.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF-ecosystem reference for dataset handling.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation recipes for auditing data quality and bias.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG/data apps demonstrating ingestion funnels.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID
