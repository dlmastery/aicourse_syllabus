---
name: longctx-budget
description: Find the cheapest way to hit a target context length under a quality floor by comparing KV-quantization, eviction, sliding window, and RAG, with a max-context-per-GB curve and an LC-vs-RAG recommendation. Use when long context is too expensive and you must choose a lever with evidence.
---

# Long-Context Budget

A harness skill that treats long context as an optimization problem: given a target length and a quality floor, it measures how far each efficiency lever stretches memory and what it costs in quality — then recommends long-context vs RAG.

## When to use
- A long-document task blows the KV-cache memory budget.
- You must choose among KV-quant, eviction, sliding window, and RAG with data.
- You need to decide whether long context is even the right approach vs retrieval.

## Inputs
- A model, a target context length, a quality floor (minimum acceptable metric), and a long-doc task.
- The GPU memory budget.

## Workflow
1. Establish the baseline: max context that fits and its quality.
2. Apply each lever (KV quantization, KV eviction, sliding window, RAG-over-chunks) and measure context-per-GB and quality.
3. Plot the max-context-per-GB curve across levers.
4. Record quality delta per lever against the floor.
5. Recommend the cheapest lever that clears the floor, including an explicit long-context-vs-RAG call.

## Outputs & evidence artifact
- `evidence/week10-longctx/longctx-report.md` — max-context-per-GB curve, per-lever quality deltas, and the LC-vs-RAG recommendation.

## Acceptance checks
- [ ] At least three levers are compared (incl. RAG).
- [ ] Each lever's quality is checked against the stated floor.
- [ ] The context-per-GB curve is produced.
- [ ] The recommendation names a single lever and justifies LC vs RAG.

## Worked example
`Use $longctx-budget for 64k context under 0.85 quality on an A100` → KV 4-bit quant gives 2.3× context within floor; eviction drops below floor; RAG matches quality at 1/5 the memory. Recommendation: RAG for this task.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — long-context and RAG recipes for the comparison.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG vs long-context reference apps.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval harness for the quality-floor measurement.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 10 — Long-Context Efficiency
