---
name: tokenizer-probe
description: Stress-tests a tokenizer for round-trip fidelity, compression ratio, and behavior on edge cases (numbers, emojis, code, non-English). Use when choosing or debugging a tokenizer and you need evidence of where it silently corrupts or bloats text.
---

# Tokenizer Probe

A harness skill that runs a tokenizer through a probe set and surfaces where it loses information or wastes tokens. It encodes the judgment that tokenizer behavior on edge cases quietly shapes model cost and correctness.

## When to use
- You are selecting a tokenizer for a domain (code, multilingual, math).
- A model mangles numbers/emojis/non-English and you suspect tokenization.
- You need tokens-per-byte numbers to estimate cost.

## Inputs
- A tokenizer.
- A probe set (numbers, emojis, code, non-English, whitespace-heavy text).

## Workflow
1. Round-trip each probe string (encode → decode) and check exact equality.
2. Compute tokens-per-byte (compression ratio) per category.
3. Inspect surprising tokenizations (number splitting, byte-fallback, merged tokens).
4. Build a table of the worst/most-surprising cases.
5. Note implications for cost and downstream correctness.

## Outputs & evidence artifact
- `evidence/week09-tokenizer-probe.md` — round-trip pass/fail, tokens-per-byte, and a table of surprising tokenizations.

## Acceptance checks
- [ ] Round-trip fidelity is reported per category (pass/fail).
- [ ] Tokens-per-byte is measured across categories.
- [ ] A table of surprising tokenizations is included.

## Worked example
`Use tokenizer-probe on the BPE tokenizer` → round-trip passes except for some emoji ZWJ sequences; code is 0.31 tokens/byte; numbers split digit-by-digit, flagged as a math-accuracy risk.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — HF tooling/ecosystem reference for tokenizers.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — token-counting and prompt-engineering recipes.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example skills.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified practical/dev skills.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 9 — Tokenization and Byte-Pair Encoding From Scratch
