---
name: vectordb-selector
description: Chooses and configures a vector store from measured recall, latency, filtering, and ops needs rather than hype. Use when picking a vector database for a RAG system and you need a justified choice backed by your own benchmarks.
---

# VectorDB Selector

A harness skill that benchmarks candidate vector stores on your corpus and constraints, then justifies a pick on recall, latency, filtering, and operations. It encodes the judgment that "best vector DB" is workload-specific and must be measured, not chosen by popularity.

## When to use
- You're standing up a RAG system and must pick a vector store.
- A current store is too slow, too costly, or filters poorly.
- A reviewer wants the reasoning behind the database choice.

## Inputs
- Corpus size and growth.
- Filtering needs (metadata, hybrid search).
- Scale and ops constraints (managed vs self-host, budget, team).

## Workflow
1. Shortlist candidates that fit the deployment model.
2. Build a representative index per candidate (same embeddings, same data).
3. Measure recall@k against a ground-truth set and p95 query latency.
4. Test filtering behavior (metadata filters, hybrid) under load.
5. Note ops cost (managed vs self-host, scaling, backups) and make a justified pick.

## Outputs & evidence artifact
- `evidence/week03-vectordb.md` — recall@k and p95 latency per candidate, filtering behavior, ops notes, and the justified pick.

## Acceptance checks
- [ ] Recall@k and p95 latency are measured per candidate on the same data.
- [ ] Filtering/hybrid behavior is tested, not assumed.
- [ ] The pick cites ops/scale trade-offs, not just speed.

## Worked example
`Use vectordb-selector for a 5M-chunk corpus needing metadata filters` → pgvector vs a managed store; managed wins p95 (28ms vs 70ms) but pgvector is cheaper and filters fine; pick pgvector given the scale and team.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — vector-store integrations and RAG plumbing.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG apps across stores.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official RAG recipes.
- [appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers) — vector-DB MCP servers to wire in.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 3 — Vector Databases: Indexes, ANN, and Choosing Your Store
