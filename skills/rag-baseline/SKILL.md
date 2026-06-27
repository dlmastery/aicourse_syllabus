---
name: rag-baseline
description: Stands up the simplest honest RAG pipeline plus its eval for a new corpus, then splits errors into retrieval vs generation misses. Use when you have a fresh document set and need a measured baseline before any optimization.
---

# RAG Baseline

The first move on any new corpus: build the dumbest pipeline that could possibly work, measure it, and label why it fails. The judgment it encodes is that you cannot improve what you have not first measured honestly, and that "retrieval miss" and "generation miss" are different bugs with different fixes.

## When to use
- You have a new document folder and no RAG system yet.
- Someone proposes reranking, HyDE, or hybrid search before any baseline number exists.
- You need a reference point to judge whether later changes actually help.

## Inputs
- A document folder (the corpus to index).
- A handful of Q/A pairs (questions plus reference answers) to score against.

## Workflow
1. Chunk the documents with a simple fixed strategy and record the chunk size.
2. Embed each chunk and store vectors in the simplest store available.
3. Write an `ingest` script (folder to index) and an `ask` script (question to answer).
4. Retrieve top-k chunks per question, then generate an answer from them.
5. Score answers against the reference set to get a baseline accuracy line.
6. Label every error as a **retrieval miss** (right chunk never retrieved) or a **generation miss** (right chunk retrieved, wrong answer).
7. Commit the evidence artifact with the accuracy line and the error split.

## Outputs & evidence artifact
- `evidence/week01-baseline.md` containing the baseline accuracy line and the retrieval/generation error split, plus pointers to the `ingest` and `ask` scripts.

## Acceptance checks
- [ ] `ingest` and `ask` scripts run end-to-end on the corpus.
- [ ] A single baseline accuracy number is recorded.
- [ ] Every failing question is tagged retrieval miss vs generation miss.
- [ ] No optimization (rerank/hybrid/HyDE) was added before the baseline.

## Worked example
`Use $rag-baseline to index ./policy-docs against qa.jsonl`. Good output: "Baseline 11/20 (55%). Misses: 6 retrieval (gold chunk outside top-5), 3 generation (chunk retrieved, answer contradicts it). Scripts: ingest.py, ask.py." That split immediately tells you whether to tune chunking/retrieval or the prompt.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — minimal ingest/query loaders to stand up a first pipeline fast.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable naive-RAG starters to copy a baseline from.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official RAG recipes for the retrieve-then-generate skeleton.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline
