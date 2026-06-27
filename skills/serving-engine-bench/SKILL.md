---
name: serving-engine-bench
description: Benchmark and choose an inference engine (vLLM/SGLang/TensorRT-LLM) for a given workload (chat vs batch vs RAG) on TTFT/ITL/throughput and max concurrency. Use when the engine choice must match the workload's real SLOs.
---

# Serving Engine Bench

An engine-selection harness. It encodes the judgment that there is no universally best inference engine — the right pick depends on the workload (chat latency vs batch throughput vs RAG) and its SLOs.

## When to use
- You must choose between vLLM, SGLang, and TensorRT-LLM for a workload.
- A workload's SLOs (TTFT/ITL) need to drive the engine decision.
- You need max-concurrency numbers before sizing.

## Inputs
- A model, a workload profile (chat/batch/RAG), and the SLOs to meet.

## Workflow
1. Characterize the workload (prompt/output lengths, concurrency, streaming or not).
2. Benchmark each engine: TTFT (time-to-first-token), ITL (inter-token latency), throughput.
3. Find max concurrency before SLO breach for each engine.
4. Weigh against the workload's SLOs.
5. Pick the engine with a justification; commit the comparison.

## Outputs & evidence artifact
- `evidence/week07-serving/engine-comparison.md` — TTFT/ITL/throughput table, max concurrency, and a justified engine pick.

## Acceptance checks
- [ ] TTFT and ITL are reported (not just aggregate throughput).
- [ ] Max concurrency before SLO breach is measured per engine.
- [ ] The pick is justified against the specific workload's SLOs.

## Worked example
`Use $serving-engine-bench for a chat workload.` → "vLLM TTFT 180ms / ITL 22ms; SGLang TTFT 150ms with prefix caching wins on RAG-style repeated prefixes; TensorRT-LLM best batch throughput but higher TTFT. Pick SGLang for this RAG-chat workload."

## Related skills in the wild
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable serving/RAG app examples across engines.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP servers for service/load tooling.
- [huggingface/trl](https://github.com/huggingface/trl) — model stack feeding the served checkpoints.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for benchmarking discipline.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM
