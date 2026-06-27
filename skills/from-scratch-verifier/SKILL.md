---
name: from-scratch-verifier
description: Prove a from-scratch module matches a reference implementation via shape checks, output-parity on a fixed input, and a param-count comparison. Use when you built a layer/model by hand (e.g., a ViT) and must verify it before trusting it.
---

# From Scratch Verifier

A harness for trusting hand-built modules. It encodes the judgment that "it runs" is not "it's correct" — a from-scratch implementation is only verified when its shapes, outputs, and parameter count match a known-good reference on a fixed input.

## When to use
- You implemented a module from scratch (ViT, attention, a block) and need to verify it.
- You want to catch subtle off-by-one or transpose bugs before training.
- You are teaching/learning and want the parity test as proof of understanding.

## Inputs
- Your module.
- A reference implementation (`timm` / `transformers`) of the same architecture.
- A fixed input tensor for deterministic comparison.

## Workflow
1. Shape checks: assert intermediate shapes match the reference at every stage.
2. Output parity: run both on the same fixed input; compare outputs within tolerance.
3. Param-count comparison: confirm total (and per-block) parameter counts match.
4. Investigate any mismatch to a root cause (transpose, init, missing term).
5. Commit `verify.md` with the three checks and their results.

## Outputs & evidence artifact
- `verify.md`: shape checks at every stage, an output-parity test on a fixed input, and a parameter-count comparison.

## Acceptance checks
- [ ] Intermediate shapes are asserted against the reference, not eyeballed.
- [ ] Output parity is within a stated numerical tolerance.
- [ ] Parameter counts match (or the difference is explained).

## Worked example
`Use $from-scratch-verifier on my ViT vs timm`. Good output: per-stage shapes equal, max output diff 3e-6 (within tol), and matching 86.4M params — module verified.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF ecosystem reference for loading `transformers`/`timm` baselines.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and verification-style example skills.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — curated skills including testing/verification helpers.
- [obra/superpowers](https://github.com/obra/superpowers) — TDD/verification-before-completion methodology.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 1 — Vision Transformers From Scratch: Images as Sequences of Patches
