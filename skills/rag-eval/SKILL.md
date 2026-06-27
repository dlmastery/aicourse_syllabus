---
name: rag-eval
description: Turns "looks good" into a reproducible scorecard that separates retrieval quality from generation quality and validates the LLM judge against humans. Use when you need a defensible RAG eval before claiming any change is an improvement.
---

# RAG Eval

A measurement harness that scores retrieval and generation as two independent axes against a frozen gold set, and checks that the automated judge actually agrees with human labels. The judgment it encodes: a single "accuracy" number hides whether your retriever or your generator is the bottleneck, and an unvalidated LLM judge is just vibes.

## When to use
- You are about to compare two RAG configurations and need an honest scorecard.
- Retrieval and generation failures are getting blamed on each other.
- You are introducing an LLM-as-judge and must prove it tracks human judgment.

## Inputs
- A retriever + generator system to score.
- A frozen gold set: questions, reference answers, and relevant chunk ids.

## Workflow
1. Freeze the gold set so every run scores against identical questions and references.
2. Run the system to capture retrieved chunk ids and generated answers per question.
3. Score retrieval with nDCG, MAP, and recall against the relevant chunk ids.
4. Score generation with faithfulness, answer-relevance, and context-precision.
5. Validate the judge by measuring judge–human agreement on a labeled subset.
6. Tabulate all metrics into one dashboard and write a one-line verdict.

## Outputs & evidence artifact
- `evidence/week06-eval/dashboard.md` with the retrieval metrics, generation metrics, judge–human agreement, and the one-line verdict.

## Acceptance checks
- [ ] Gold set is frozen and versioned.
- [ ] Retrieval (nDCG/MAP/recall) and generation (faithfulness/relevance/precision) reported separately.
- [ ] Judge–human agreement is reported, not assumed.
- [ ] A single one-line verdict states whether the system passes.

## Worked example
`Use $rag-eval to score the week-5 retriever+generator on gold_v1.jsonl`. Good output: "Retrieval: recall@5 0.78, nDCG 0.71. Generation: faithfulness 0.83, answer-relevance 0.80, context-precision 0.74. Judge–human agreement 0.88 (n=40). Verdict: retrieval-bound, recall@5 is the ceiling."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework; scorers and judge plumbing for RAG metrics.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ pre-built evals to borrow scorer patterns from.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official /evaluation recipes incl. LLM-as-judge validation.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness
