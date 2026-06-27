---
name: t2i-eval
description: Evaluates a text-to-image model on both realism and prompt alignment, including a CFG-scale curve and a failure-prompt set. Use when comparing or tuning a text-to-image model and you need evidence beyond cherry-picked samples.
---

# T2I Eval

A harness skill that scores a text-to-image model on two independent axes — does it look real, and does it match the prompt — and finds where it breaks. It encodes the judgment that realism and alignment trade off, so a single "quality" number hides the real behavior.

## When to use
- You are choosing between text-to-image checkpoints or guidance settings.
- A model looks great on demos but you suspect prompt-following gaps.
- You need a CFG-scale operating point backed by data.

## Inputs
- A prompt set (with compositional/attribute-binding cases).
- Generations from the model (across CFG scales if available).

## Workflow
1. Score realism (FID against a reference set, or a documented realism proxy).
2. Score alignment per prompt (CLIPScore or equivalent).
3. Sweep CFG scale and plot realism vs alignment to find the knee.
4. Collect a failure-prompt set (counting, spatial relations, attribute binding).
5. Recommend an operating CFG and note known failure categories.

## Outputs & evidence artifact
- `t2i-eval.md` — realism note, per-prompt CLIPScore, the CFG-scale curve, and the failure-prompt set.

## Acceptance checks
- [ ] Both realism and alignment are reported (not one number).
- [ ] A CFG-scale curve identifies a recommended operating point.
- [ ] A failure-prompt set with categories is included.

## Worked example
`Use t2i-eval on SDXL across CFG 3–12` → CLIPScore peaks at CFG 7 where realism is still acceptable; failure set shows consistent counting errors above 4 objects.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer/eval framework for structured multimodal reports.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals incl. multimodal tasks.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal and `/evaluation` recipes.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable generative/multimodal apps.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image
