---
name: chunk-strategist
description: Pick and justify a chunking strategy for a corpus by measuring against a frozen eval, not by guessing. Use when RAG retrieval quality is mediocre and you must prove which chunking approach actually helps.
---

# Chunk Strategist

A measurement harness for the unglamorous half of RAG. The judgment it encodes: chunking choices dominate retrieval quality but are usually picked by vibes — so you compare ≥3 strategies on a frozen eval and name the mechanism behind the winner.

## When to use
- RAG answers miss information that's clearly in the corpus.
- You're choosing between fixed, semantic, or structural chunking.
- A reviewer wants the chunking decision justified by numbers.

## Inputs
- A document set and a frozen retrieval/answer eval.

## Workflow
1. Parse the documents into a normalized form.
2. Chunk ≥3 ways (e.g. fixed-size, recursive, semantic/structural).
3. Embed each chunking and index it.
4. Run the frozen eval against each.
5. Tabulate results, show failure examples each strategy fixes/causes, and pick one — naming the mechanism.

## Outputs & evidence artifact
- `evidence/week02-chunking.md`: a comparison table across ≥3 strategies, the failure examples each fixes/causes, and the final pick with the mechanism named.

## Acceptance checks
- [ ] At least three strategies are compared on the same frozen eval.
- [ ] Failure examples are shown, not just aggregate scores.
- [ ] The final pick names the mechanism that makes it win.

## Worked example
`Use $chunk-strategist on our policy-docs corpus.` → Fixed-512 vs recursive vs section-aware; section-aware wins recall@5 0.81 vs 0.66 because it keeps a clause with its heading; fixed-size split clauses mid-sentence.

## Related skills in the wild
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — 100+ runnable RAG apps demonstrating chunking and retrieval choices.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — node parsers / chunkers and retrieval primitives to benchmark.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official RAG recipes for retrieval evaluation.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality
