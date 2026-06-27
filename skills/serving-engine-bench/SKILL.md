---
name: serving-engine-bench
description: benchmark and choose an inference engine for a given workload (chat vs batch vs RAG) on real metrics. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Serving Engine Bench

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** benchmark and choose an inference engine for a given workload (chat vs batch vs RAG) on real metrics.
- **Inputs:** a model + workload profile + SLOs. **Outputs:** TTFT/ITL/throughput table, max concurrency, a justified engine pick.
- **Evidence artifact:** `evidence/week07-serving/engine-comparison.md`.

## Used in
- Subject 04 · Part B — Efficient AI: Quantization, Serving & Systems · Week 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM

## How to invoke

In a Codex-style environment: `Use $serving-engine-bench to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
