---
name: rag-ablation
description: Adds advanced-RAG techniques as independent toggles, keeps only the ones that beat the eval, and names every regression with its mechanism. Use when layering HyDE, CRAG, Self-RAG, or reranking onto a measured baseline.
---

# RAG Ablation

A disciplined way to add fancy retrieval tricks without fooling yourself: each technique is a switch, each switch is judged by the eval, and nothing stays unless it earns its place. The judgment it encodes is that advanced RAG techniques help on some queries and hurt on others, so you must measure per-technique rescues *and* regressions, not just the net average.

## When to use
- You have a measured baseline plus the `$rag-eval` harness and a list of candidate techniques.
- You are tempted to ship HyDE / CRAG / Self-RAG / reranking because a paper said so.
- A change improved the average but you suspect it quietly broke a query class.

## Inputs
- The baseline pipeline.
- The `$rag-eval` harness (frozen gold set + scorecard).
- A list of candidate advanced techniques to ablate.

## Workflow
1. Wire each candidate technique as an independent on/off toggle.
2. Run the eval with all toggles off to confirm the baseline number.
3. For each technique, run eval with it on (others off) and record the delta.
4. List the queries it rescues and the queries it regresses, not just the net.
5. Make a keep/cut decision per technique and state the mechanism for why it helped or hurt.
6. Assemble the ablation table and commit the evidence artifact.

## Outputs & evidence artifact
- `evidence/week07-advanced.md` with the ablation table (each technique on/off), per-technique rescues and regressions, and a keep/cut decision with mechanism for each.

## Acceptance checks
- [ ] Every technique is an isolatable toggle.
- [ ] Each technique has both rescues and regressions recorded.
- [ ] Each keep/cut decision names a mechanism, not just a number.
- [ ] Kept techniques beat the baseline on the frozen eval.

## Worked example
`Use $rag-ablation to test HyDE, CRAG, and a cross-encoder reranker`. Good output: "Reranker: +0.09 nDCG, rescues 7 long-doc queries, regresses 1 short-fact query — KEEP (surfaces deep chunks). HyDE: +0.01, rescues 2, regresses 4 acronym queries — CUT (hallucinated hypothetical drifts from corpus terms)."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — run each toggle as a scored task to get clean per-technique deltas.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ready implementations of HyDE, rerankers, and query transforms to toggle.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official RAG/evaluation recipes for structuring the comparison.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 7 — Advanced RAG I: HyDE, CRAG & Self-RAG
