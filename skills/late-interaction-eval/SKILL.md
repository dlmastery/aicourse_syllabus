---
name: late-interaction-eval
description: Evaluate whether late-interaction retrieval (ColBERT) earns its storage cost on a given corpus by comparing nDCG and index size against a reranked baseline, with a cost-aware verdict. Use when deciding if token-level retrieval is worth the disk/latency on your data.
---

# Late Interaction Eval

A harness skill that answers a deployment question, not a research one: does ColBERT-style late interaction retrieve better *enough* on this corpus to justify its larger index? It characterizes which queries it rescues and returns a cost-aware go/no-go.

## When to use
- You are considering ColBERT/late interaction over a bi-encoder + reranker pipeline.
- Index size or serving cost is a real constraint and you need the tradeoff quantified.
- You want to know *which* queries late interaction actually helps, not just an average.

## Inputs
- A corpus, a set of labeled queries (relevance judgments), and the Week-4 reranked baseline.
- The ColBERT index and its on-disk size.

## Workflow
1. Build/load the ColBERT index; record its size vs the baseline index.
2. Evaluate both systems on the labeled queries → nDCG (and recall@k).
3. Identify rescued queries: those ColBERT gets right that the baseline misses; characterize them.
4. Weigh quality gain against the index-size/latency cost.
5. Write the cost-aware verdict (adopt / adopt for a subset / skip).

## Outputs & evidence artifact
- `evidence/week05-colbert.md` — nDCG and index-size comparison, rescued-query characterization, and the cost-aware verdict.

## Acceptance checks
- [ ] nDCG is compared head-to-head with the reranked baseline.
- [ ] Index size (and ideally latency) is reported for both.
- [ ] Rescued queries are characterized, not just counted.
- [ ] The verdict explicitly weighs quality against cost.

## Worked example
`Use $late-interaction-eval on my technical-docs corpus` → ColBERT nDCG +6 pts but index 4.8× larger; rescued queries are long, multi-term technical questions. Verdict: adopt only for the long-query segment.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — retrievers and ColBERT integrations for building the comparison.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — RAG and evaluation recipes.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer scaffolding for retrieval eval.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 5 — Late Interaction & ColBERT: Token-Level Retrieval
