---
name: contrastive-eval
description: Evaluate any image–text model on retrieval and zero-shot in both directions, with a prompt-template sensitivity note. Use when benchmarking a CLIP-style model and you need R@K, zero-shot accuracy, and an honest sensitivity caveat.
---

# Contrastive Eval

A harness for evaluating contrastive image–text models. It encodes the judgment that a CLIP-style score is incomplete without both retrieval directions and a note on how much the prompt template moved zero-shot accuracy.

## When to use
- You trained or are comparing an image–text model (CLIP-style) and need standard metrics.
- You need retrieval evaluated both image→text and text→image, not just one.
- You suspect zero-shot numbers depend heavily on prompt wording.

## Inputs
- Image and text encoders (or a joint model).
- A paired evaluation set (images with matching captions).
- A small set of prompt templates for the zero-shot task.

## Workflow
1. Embed the paired set; build the similarity matrix.
2. Compute retrieval R@1/5/10 for image→text and text→image.
3. Run zero-shot classification with a default prompt template; record accuracy.
4. Re-run zero-shot under 2–3 alternate templates; report the spread as a sensitivity note.
5. Commit `clip-eval.md` with all numbers and the sensitivity caveat.

## Outputs & evidence artifact
- `clip-eval.md`: R@1/5/10 (i→t and t→i), zero-shot accuracy, and a prompt-template sensitivity note.

## Acceptance checks
- [ ] Retrieval is reported in both directions at K = 1, 5, 10.
- [ ] Zero-shot accuracy is reported with the exact prompt template used.
- [ ] The sensitivity note quantifies how much template choice changed accuracy.

## Worked example
`Use $contrastive-eval on this fine-tuned CLIP`. Good output: i→t R@1 0.41 / t→i R@1 0.38, zero-shot 0.62 with "a photo of a {}", and a note that a bare-label template dropped it to 0.55.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF ecosystem reference for loading vision-language encoders and datasets.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal and `/evaluation` recipes for paired image–text scoring.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt evals including multimodal tasks to compare against.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable multimodal RAG/search apps using CLIP-style retrieval.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 2 — Contrastive Learning & CLIP: Aligning Images and Text
