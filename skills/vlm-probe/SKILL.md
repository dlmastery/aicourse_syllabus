---
name: vlm-probe
description: Characterizes a vision-language model's strengths and failures before deployment — per-capability accuracy, hallucination rate, and resolution sensitivity. Use when adopting a VLM and you need a capability profile instead of trusting demo screenshots.
---

# VLM Probe

A harness skill that runs a structured probe set through a VLM to map where it's reliable and where it confabulates. It encodes the judgment that VLMs fail unevenly across capabilities (counting, OCR, spatial), so a single accuracy number is misleading.

## When to use
- You're choosing or deploying a VLM (LLaVA, Qwen-VL, Llama-Vision, etc.).
- A VLM looks impressive but you don't know its blind spots.
- You need a hallucination rate before putting it in front of users.

## Inputs
- A VLM.
- A probe set covering objects, counting, text-in-image (OCR), and spatial relations.

## Workflow
1. Run each capability category and score accuracy per category.
2. Measure hallucination rate (confident answers about absent content).
3. Vary input resolution and record sensitivity.
4. Identify the weakest capabilities and typical failure modes.
5. Recommend safe-use boundaries for deployment.

## Outputs & evidence artifact
- `vlm-probe.md` — per-capability accuracy, a hallucination rate, and a resolution-sensitivity note.

## Acceptance checks
- [ ] Accuracy is reported per capability, not as one aggregate.
- [ ] A hallucination rate is measured.
- [ ] Resolution sensitivity is documented.

## Worked example
`Use vlm-probe on Qwen-VL` → strong OCR (94%), weak counting (61% beyond 4 objects), 8% hallucination on absent-object questions; degrades sharply below 448px; avoid counting-critical use.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scorer framework for capability probes.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built multimodal/vision evals.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal recipes and eval patterns.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable multimodal apps.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning
