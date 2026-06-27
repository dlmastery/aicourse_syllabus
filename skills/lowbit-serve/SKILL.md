---
name: lowbit-serve
description: Select a low-bit quantization format your serving stack actually accelerates, fine-tune if needed (QLoRA), and verify the speedup on the *served* path with a quality delta. Use when quantizing for deployment and you must prove a real, served win, not a theoretical one.
---

# Low-Bit Serve

A harness skill that avoids the classic quantization trap — picking a format your runtime doesn't accelerate. It chooses a format the serving stack supports, recovers quality with QLoRA if needed, and benchmarks the *deployed* path to confirm the gain is real.

## When to use
- You want to quantize a model for cheaper/faster serving.
- You are unsure which low-bit format your runtime (vLLM/TensorRT-LLM/etc.) actually speeds up.
- You need served (not just theoretical) latency/throughput numbers plus a quality check.

## Inputs
- A model, the serving stack/runtime, and a quality budget (max acceptable degradation).
- A representative request load for benchmarking.

## Workflow
1. List which low-bit formats your serving stack hardware-accelerates; pick a candidate.
2. Quantize to that format; if quality drops below budget, recover with QLoRA fine-tuning.
3. Deploy the served variant on the real runtime.
4. Benchmark served latency/throughput vs the FP baseline under the same load.
5. Measure the quality delta and confirm it is within budget.

## Outputs & evidence artifact
- `evidence/week04-lowbit/served-speedup.md` — the served variant, a benchmark proving real speedup, and the quality delta vs budget.

## Acceptance checks
- [ ] The chosen format is confirmed to be accelerated by the actual serving stack.
- [ ] Speedup is measured on the served path, not in a notebook.
- [ ] Quality delta is reported against the stated budget.
- [ ] If quality recovery was needed, the QLoRA step is documented.

## Worked example
`Use $lowbit-serve to quantize my 7B model for vLLM` → AWQ 4-bit is accelerated; served throughput +2.1×, p95 −38%, quality −0.6 pts (within 1-pt budget). Verdict: ship the AWQ variant.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — QLoRA fine-tuning to recover quantization quality.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — serving/deployment reference apps.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — evaluation recipes for the quality-delta check.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 4 — QAT, Low-Bit Frontiers & Serving Quantized Models
