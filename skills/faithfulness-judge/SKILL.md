---
name: faithfulness-judge
description: Decide claim-by-claim whether generated text is supported by its sources and report an aggregate faithfulness rate. Use when checking RAG/summary outputs for hallucination, especially in high-stakes clinical NLP.
---

# Faithfulness Judge

A harness for grounding-checking generated text. It encodes the judgment that "looks right" is not "is supported" — every claim must be checked against the retrieved spans, and the worst hallucination must be surfaced, not averaged away.

## When to use
- You are evaluating RAG or summarization output for hallucination.
- A high-stakes setting (clinical, legal) requires per-claim source attribution.
- You need an aggregate faithfulness rate plus the single worst failure.

## Inputs
- A generated summary/answer.
- The retrieved source spans it was supposed to be grounded in.

## Workflow
1. Decompose the generation into atomic claims.
2. For each claim, label supported / unsupported against the retrieved spans.
3. Compute the aggregate faithfulness rate (supported / total).
4. Identify and quote the worst hallucination (most consequential unsupported claim).
5. Commit `faithfulness-report.md` with labels, rate, and the worst case.

## Outputs & evidence artifact
- `faithfulness-report.md`: per-claim supported/unsupported labels, an aggregate faithfulness rate, and the worst hallucination.

## Acceptance checks
- [ ] Claims are decomposed to atomic units, each labeled against sources.
- [ ] The aggregate faithfulness rate is reported.
- [ ] The single worst hallucination is quoted and explained.

## Worked example
`Use $faithfulness-judge on this discharge-summary draft`. Good output: 14/17 claims supported (0.82), with the worst hallucination an invented medication dose absent from the notes — flagged as a safety-critical failure.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — RAG and `/evaluation` recipes for grounding/faithfulness checks.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — RAG framework with retrieval/faithfulness evaluation tooling.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for building a claim-level faithfulness scorer.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG apps to evaluate for hallucination.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)
