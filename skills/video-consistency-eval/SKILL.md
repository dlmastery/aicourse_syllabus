---
name: video-consistency-eval
description: Evaluates generated video for temporal coherence — flicker, identity drift, and text alignment — not just single-frame quality. Use when assessing a video-generation model and per-frame metrics hide the temporal artifacts that matter.
---

# Video Consistency Eval

A harness skill that scores generated video on coherence over time, catching the flicker and identity drift that frame-level quality metrics miss. It encodes the judgment that a video can have beautiful frames and still be unusable because it isn't temporally consistent.

## When to use
- You're comparing video-generation models or settings.
- Clips look fine frozen but jitter, flicker, or morph in motion.
- You need a temporal-consistency number, not just a frame-quality score.

## Inputs
- Generated clips (with their prompts).

## Workflow
1. Compute a frame-quality proxy per frame (e.g., aesthetic/realism score).
2. Compute a temporal-consistency score across frames (feature/flow stability).
3. Measure text alignment of the clip to its prompt.
4. Catalog flicker and identity-drift incidents with timestamps.
5. Summarize the realism-vs-coherence trade-off and recommend settings.

## Outputs & evidence artifact
- `video-eval.md` — frame-quality proxy, temporal-consistency score, text alignment, and a flicker/identity-drift catalog.

## Acceptance checks
- [ ] A temporal-consistency score is reported, separate from frame quality.
- [ ] Text alignment to the prompt is measured.
- [ ] A flicker/identity-drift catalog with timestamps is included.

## Worked example
`Use video-consistency-eval on the spatiotemporal-diffusion clips` → frames score high but consistency drops on fast motion; identity drift at 0:03 (face morphs); recommend lower motion bucket.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer/eval framework for structured reports.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals incl. multimodal.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal/`/evaluation` recipes.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable generative/video apps.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 7 — Video Generation: Spatiotemporal Diffusion & World Consistency
