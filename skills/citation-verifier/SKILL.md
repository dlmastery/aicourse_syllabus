---
name: citation-verifier
description: Guarantee every cited source in a generated answer exists in the retrieved evidence and actually supports the claim. Use when a RAG system must not fabricate citations (legal, medical, compliance) and you need a blocking integrity gate.
---

# Citation Verifier

An integrity gate for cited RAG answers. The judgment it encodes: a plausible-looking citation is worse than none — in high-stakes domains, every citation must be checked for both existence and support, and unsupported answers must be blocked.

## When to use
- A RAG system produces answers with source citations in a high-stakes domain.
- You need to block answers that cite non-existent or non-supporting sources.
- You're measuring a system's fabrication rate.

## Inputs
- A generated answer with citations and the retrieval set it drew from.

## Workflow
1. Parse the answer's citations and link each to a claim.
2. Check existence: the cited source is actually in the retrieval set.
3. Check support: the source's text supports the claim (entailment).
4. Compute the fabrication rate across the answer.
5. Emit a blocked/allowed verdict per answer.

## Outputs & evidence artifact
- `citation-integrity.md`: per-citation exists/supports flags, a fabrication rate, and a blocked/allowed verdict.

## Acceptance checks
- [ ] Each citation has both an exists and a supports flag.
- [ ] A fabrication rate is computed for the answer.
- [ ] A blocked/allowed verdict is emitted and enforced.

## Worked example
`Use $citation-verifier on a contract-analysis answer.` → 5 citations, 5/5 exist, 4/5 support the claim, fabrication rate 20% on the support axis → verdict BLOCKED, flagged the unsupported clause.

## Related skills in the wild
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG apps with grounding/citation patterns.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — retrieval framework with source-node tracking for verification.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — RAG and `/evaluation` recipes for grounding and faithfulness checks.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)
