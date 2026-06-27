---
name: mm-grounding-eval
description: Verify that multimodal answers are grounded in the retrieved visual evidence — measuring grounding rate, hallucination rate, abstention correctness, and surfacing the worst ungrounded case. Use when evaluating a multimodal RAG/agent that answers over retrieved images or regions.
---

# MM Grounding Eval

A harness skill for multimodal RAG: it checks not just whether answers are correct but whether they are *supported* by the images/regions actually retrieved — catching confident hallucinations that text-only evals miss.

## When to use
- A multimodal system answers questions over retrieved images/charts/regions.
- You suspect the model is answering from priors, not the retrieved visual evidence.
- You need to verify the system abstains when evidence is insufficient.

## Inputs
- Model answers paired with the retrieved images/regions that should support them.
- Ground-truth grounding labels (which evidence supports the answer) and a set of unanswerable cases.

## Workflow
1. For each answer, check whether the cited/retrieved visual evidence actually supports it → grounding rate.
2. Measure hallucination rate (answers asserted without supporting evidence).
3. On unanswerable cases, measure abstention correctness (does it decline appropriately?).
4. Surface the single worst ungrounded case for inspection.
5. Summarize with a verdict on deployability.

## Outputs & evidence artifact
- `mm-grounding.md` — grounding rate, hallucination rate, abstention correctness, and the worst ungrounded case.

## Acceptance checks
- [ ] Grounding is judged against the actual retrieved evidence, not just answer correctness.
- [ ] Hallucination rate is reported.
- [ ] Abstention on unanswerable cases is measured.
- [ ] The worst ungrounded case is shown concretely.

## Worked example
`Use $mm-grounding-eval on my chart-QA agent` → grounding rate 81%, hallucination 12% (asserts trends not in the chart), abstention 70% on unanswerable; worst case: invented a Q4 spike absent from the figure.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — multimodal retrieval and evaluation tooling.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal and evaluation recipes.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer framework for grounding/abstention metrics.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems
