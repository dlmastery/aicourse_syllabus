---
name: retriever-stack
description: Assemble and measure a dense→hybrid→reranked retriever, adding each stage only if it earns its latency, with per-stage nDCG/recall and rescue examples. Use when building a RAG retriever and you need evidence that each stage pays for itself.
---

# Retriever Stack

A staged-build harness for retrieval. It encodes the judgment that retriever complexity must be earned: each stage (hybrid, reranker) is kept only if it measurably improves nDCG/recall enough to justify its added latency.

## When to use
- You are building a RAG retriever and tempted to add a reranker by default.
- A retrieval stage's value is unclear and you need a kept/cut decision.
- You must justify latency spent on retrieval to a reviewer.

## Inputs
- A document corpus and a set of labeled queries (relevance judgments).
- Candidate stages: dense embeddings, BM25/hybrid, a reranker (Cohere/BGE).

## Workflow
1. Build the dense baseline; record nDCG/recall and latency.
2. Add hybrid (BM25 + dense fusion); record the delta and latency cost.
3. Add a reranker on top; record the delta and latency cost.
4. Pull per-query rescue examples each stage fixes.
5. For each stage, make a kept-or-cut decision on the metric/latency tradeoff.
6. Commit the staged comparison.

## Outputs & evidence artifact
- `evidence/week04-hybrid.md` — per-stage nDCG/recall, per-query rescue examples, latency cost per stage, and a kept-or-cut decision for each.

## Acceptance checks
- [ ] Each stage reports both a quality delta and a latency cost.
- [ ] Rescue examples show what each stage actually fixed.
- [ ] Every stage has an explicit kept/cut decision.

## Worked example
`Use $retriever-stack on the support-docs corpus.` → "dense nDCG@10 0.52 (8ms); +hybrid 0.61 (+12ms) kept; +BGE rerank 0.63 (+90ms) cut — 2pts isn't worth 90ms for this SLA."

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — retrievers, hybrid fusion, rerankers, and llama-packs.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official RAG and `/evaluation` recipes.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 100+ runnable RAG app examples.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top
