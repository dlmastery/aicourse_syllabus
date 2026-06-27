---
name: rag-evaluator
description: Measures and tunes a retrieval/RAG layer end-to-end, producing retrieval metrics, groundedness, hallucination rate, and a concrete tuning recommendation. Use when a capstone prototype's RAG layer needs to be evaluated and improved with evidence.
---

# RAG Evaluator

An end-to-end measure-and-tune loop for a capstone RAG layer: score it, find the weakest link, and hand back one concrete knob to turn. The judgment it encodes is that evaluation is only useful if it ends in an actionable tuning recommendation, not just a wall of metrics.

## When to use
- Your capstone Milestone-2 prototype has a working RAG layer that needs grading.
- Hallucinations or low groundedness are showing up and you need to localize the cause.
- You must justify a chunking / reranking / hybrid-weight change with numbers.

## Inputs
- The corpus backing the RAG layer.
- A query set with reference answers.

## Workflow
1. Run the query set through the retrieval/RAG layer, capturing retrieved chunks and answers.
2. Compute retrieval metrics: recall@k and nDCG against the references.
3. Compute generation quality: groundedness/faithfulness and the hallucination rate.
4. Identify the binding constraint (retrieval coverage vs generation grounding).
5. Produce a single tuning recommendation — chunking, reranking, or hybrid-search weights.
6. Save metrics and the recommendation to the evidence directory.

## Outputs & evidence artifact
- `M2/rag-eval/` containing retrieval metrics (recall@k, nDCG), groundedness/faithfulness, hallucination rate, and the tuning recommendation.

## Acceptance checks
- [ ] Retrieval and generation metrics are both reported.
- [ ] Hallucination rate is quantified against the reference set.
- [ ] Exactly one prioritized tuning recommendation is given.
- [ ] The recommendation names the specific knob (chunk size, reranker, or hybrid weight).

## Worked example
`Use $rag-evaluator on the M2 corpus with eval_queries.jsonl`. Good output: "recall@5 0.62, nDCG 0.58, groundedness 0.71, hallucination 14%. Binding constraint: retrieval — half of hallucinations had no gold chunk in context. Recommendation: drop chunk size 1000 to 400 and add a cross-encoder reranker."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorers for groundedness and hallucination-style checks.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — chunking, reranking, and hybrid-retrieval knobs to tune against.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official RAG + evaluation recipes for the measure-tune loop.

## Used in
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 2 — Data, RAG & Prototype
