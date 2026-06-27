---
name: generative-eval
description: Evaluate a generative model with quantitative metrics (FID, CLIPScore) plus diversity/memorization checks instead of eyeballing samples. Use when building or critiquing a DDPM/diffusion/GAN generator and you need a repeatable, evidence-producing quality verdict.
---

# Generative Eval

A harness skill that turns "the samples look good" into a defensible, reproducible measurement: distributional quality, conditional alignment, diversity, and a memorization guard.

## When to use
- You trained a diffusion/GAN/VAE generator and need a number, not a vibe.
- You must compare two generators (e.g., before/after a schedule change) on equal footing.
- A reviewer asks "are these samples just memorized training images?"

## Inputs
- A set of generated samples and a matched set of real samples.
- (Conditional models) the prompts/conditions used to generate.
- The training set (or an index of it) for the nearest-neighbor memorization check.

## Workflow
1. Fix the sample count and resolution for both real and generated sets (state them).
2. Compute FID (unconditional quality) and, for conditional models, CLIPScore for prompt alignment.
3. Run a diversity / mode-coverage check (e.g., recall or cluster coverage).
4. Run a memorization guard: nearest-neighbor distance from generated samples to the training set; flag suspiciously close matches.
5. Assemble a labeled sample grid (best, median, worst).
6. Write the verdict: pass/fail against the target, with the weakest axis named.

## Outputs & evidence artifact
- `gen-eval.md` — FID (+CLIPScore if conditional), diversity metric, memorization findings, the sample grid, and a one-line verdict.

## Acceptance checks
- [ ] FID computed on a stated, equal sample count for both sets.
- [ ] A memorization/nearest-neighbor check is present and interpreted.
- [ ] A diversity metric is reported (not just fidelity).
- [ ] The artifact names the single weakest axis and a next step.

## Worked example
`Use $generative-eval to score my DDPM CIFAR-10 samples vs the test set` → `gen-eval.md` with FID 28.4 (target <30 ✓), recall 0.41 (low → mild mode-drop), NN check shows no train leakage, and a 3×3 grid. Verdict: ship, but diversity is the axis to improve.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval-harness patterns (datasets/scorers) transferable to generative scoring.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` and multimodal recipes for building rigorous eval loops.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence-producing skill patterns.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)
