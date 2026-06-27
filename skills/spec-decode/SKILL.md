---
name: spec-decode
description: Adds speculative decoding to a served model and verifies a real, output-preserving latency win across batch sizes. Use when optimizing inference latency and you must prove the speedup didn't change outputs.
---

# Spec Decode

A harness skill that wires a draft/target speculative-decoding setup into a served model and measures whether it actually speeds things up without changing the generated text. It encodes the judgment that a "faster" decoder is only valid if outputs are provably equivalent.

## When to use
- You are serving a model and want lower latency via speculative decoding.
- You need to confirm the speedup holds at your real batch sizes, not just batch=1.
- A reviewer asks whether outputs changed after the optimization.

## Inputs
- A target (large) model being served.
- A draft model or speculative method (e.g., n-gram, Medusa, EAGLE-style).

## Workflow
1. Integrate the draft/method behind the target model's decode loop.
2. Measure token acceptance rate on a representative prompt set.
3. Benchmark latency (and throughput) vs the baseline across batch sizes.
4. Run an output-equivalence check (greedy outputs identical; sampled within tolerance).
5. Report the operating regime where the win is real.

## Outputs & evidence artifact
- `evidence/week08-spec/spec-decode-report.md` — acceptance rate, latency delta vs batch, and the output-equivalence result.

## Acceptance checks
- [ ] Latency delta is reported across at least 3 batch sizes.
- [ ] Output equivalence (greedy) is verified, not assumed.
- [ ] Acceptance rate is measured on a representative set.

## Worked example
`Use spec-decode with an n-gram draft on the 70B target` → 62% acceptance, 1.9x latency win at batch=1 shrinking to 1.2x at batch=16, greedy outputs identical.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability/serving recipes for measuring latency.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable serving/inference apps.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — lightweight model-serving/integration reference.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 8 — Speculative & Parallel Decoding
