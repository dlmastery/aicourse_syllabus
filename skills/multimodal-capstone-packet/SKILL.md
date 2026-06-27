---
name: multimodal-capstone-packet
description: Assemble generation and understanding evidence (sample grids + FID/CLIPScore, capability + grounding tables, failure catalog, demo) into one reviewable capstone bundle. Use as the deliverable for a multimodal app + small diffusion model capstone.
---

# Multimodal Capstone Packet

A harness skill whose output *is* the deliverable: a single bundle proving both sides of a multimodal project — that the generator produces good, measured samples and that the understanding side is grounded and capable — plus an honest failure catalog and a working demo.

## When to use
- You finished a multimodal capstone (a generation model + an understanding/app component).
- A reviewer must verify both generation and understanding from artifacts.
- You need a demo plus quantitative evidence in one place.

## Inputs
- The generation artifacts (samples + FID/CLIPScore) and the understanding artifacts (capability + grounding evals).
- A runnable demo.

## Workflow
1. Assemble sample grids with FID and (for conditional) CLIPScore.
2. Build the understanding-side capability table and the grounding table.
3. Compile a failure catalog (where each component breaks, with examples).
4. Package the demo and document how to run it.
5. Write the short bundle README tying generation + understanding together.

## Outputs & evidence artifact
- `capstone/report.md` (plus assets) — sample grids + FID/CLIPScore, capability + grounding tables, the failure catalog, and the demo.

## Acceptance checks
- [ ] Generation evidence includes both a sample grid and FID/CLIPScore.
- [ ] Understanding evidence includes capability and grounding tables.
- [ ] A failure catalog with concrete examples is present.
- [ ] A runnable demo is included with run instructions.

## Worked example
`Use $multimodal-capstone-packet for my diffusion + VQA app` → `capstone/report.md` with a 4×4 sample grid (FID 31), VQA capability table, grounding rate 84%, a 6-case failure catalog, and a Gradio demo link.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal and `/evaluation` recipes.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — multimodal retrieval/understanding components.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for the capability/grounding tables.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence-packet conventions.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 12 — Capstone: A Multimodal App + a Small Diffusion Model
