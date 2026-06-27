---
name: knowledge-router
description: Route each query to the right retrieval backend (vector / graph / SQL) and justify the choice per query class with an end-to-end routed eval. Use when building agentic RAG over heterogeneous stores and you must prove the router beats any single backend.
---

# Knowledge Router

A harness skill for advanced RAG: it builds and evaluates a query router that sends each query class to the backend that serves it best (semantic → vector, relational/multi-hop → graph, aggregations → SQL), and proves the routing earns its complexity.

## When to use
- Your knowledge lives in more than one store (embeddings, a graph, a relational DB).
- Different query types clearly favor different backends and a single one underperforms.
- You need evidence that routing, not just one good index, drives the result.

## Inputs
- A labeled set of queries tagged by type (semantic, multi-hop, aggregation).
- The three backends (vector, graph, SQL) and their connection/config.

## Workflow
1. Define query classes and the backend each should win on.
2. Build the router (classifier or LLM-based) that picks a backend per query.
3. Measure routing accuracy against the labels.
4. Measure per-backend win-rate on its intended class (does graph actually win multi-hop?).
5. Define and test fallback behavior when routing is uncertain.
6. Run the end-to-end routed eval vs each single-backend baseline.

## Outputs & evidence artifact
- `evidence/week08-agentic-graph-sql/router-eval.md` — routing accuracy, per-backend win on its class, fallback behavior, and the end-to-end routed eval vs baselines.

## Acceptance checks
- [ ] Routing accuracy is reported against labeled query types.
- [ ] Each backend is shown to win on its intended class.
- [ ] Fallback behavior on low-confidence routing is defined and tested.
- [ ] The routed system is compared to each single-backend baseline.

## Worked example
`Use $knowledge-router on my docs+graph+SQL store` → routing accuracy 88%; graph wins multi-hop (+19 nDCG), SQL wins aggregations; routed system beats best single backend by 11 points end-to-end.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — routers, query engines, and graph/SQL tools for exactly this pattern.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — RAG and tool_use recipes for routed retrieval.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG/agentic-RAG reference apps.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL
