# Detailed Table of Contents — Subject 10 — Efficient AI: Quantization, Serving & Systems

_Source: `10-efficient-ai-systems-serving.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — The GPU Execution & Memory Model (and How to Profile It)
_3-hour block · 🔧 skill: `$gpu-profile` · ▶ project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — instrument and profile a served model's forward pass to classify the memory- vs compute-bound bottleneck._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Memory-bound vs compute-bound |
| 00:30–01:00 | M2 | GPU memory hierarchy |
| 01:00–01:30 | M3 | Roofline model |
| 01:30–02:00 | M4 | The memory budget of an LLM |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — instrument and profile a served model's forward pass to classify the memory- vs compute-bound bottleneck. |

### Lecture 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter
_3-hour block · 🔧 skill: `$precision-sweep` · ▶ project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — run BF16/FP16 mixed-precision training and reproduce (then fix) an FP16-overflow→NaN._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Range vs precision |
| 00:30–01:00 | M2 | Mixed precision |
| 01:00–01:30 | M3 | FP8 (E4M3/E5M2) |
| 01:30–02:00 | M4 | Dynamic range & scaling |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — run BF16/FP16 mixed-precision training and reproduce (then fix) an FP16-overflow→NaN. |

### Lecture 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant
_3-hour block · 🔧 skill: `$quantize-and-verify` · ▶ project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its quantization notebooks (GPTQ/AWQ/GGUF) to quantize the 8B and re-eval quality._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PTQ vs QAT; Quantization granularity |
| 00:30–01:00 | M2 | AWQ |
| 01:00–01:30 | M3 | SmoothQuant |
| 01:30–02:00 | M4 | Calibration set |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its quantization notebooks (GPTQ/AWQ/GGUF) to quantize the 8B and re-eval quality. |

### Lecture 4 — QAT, Low-Bit Frontiers & Serving Quantized Models
_3-hour block · 🔧 skill: `$lowbit-serve` · ▶ project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — QLoRA-fine-tune a 4-bit base on one GPU, then merge and serve the result._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | QAT & the straight-through estimator; NF4 + QLoRA |
| 00:30–01:00 | M2 | Served vs offline speedup |
| 01:00–01:30 | M3 | Low-bit cliff |
| 01:30–02:00 | M4 | On-device / private SLM deployment |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — QLoRA-fine-tune a 4-bit base on one GPU, then merge and serve the result. |

### Lecture 5 — Pruning, Sparsity, Distillation & NAS
_3-hour block · 🔧 skill: `$compress-verify` · ▶ project: [`VizuaraAILabs/Tiny-Stories-Regional`](https://github.com/VizuaraAILabs/Tiny-Stories-Regional) — train a small distilled-scale LM and compare it against a from-scratch same-size twin._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Unstructured vs structured pruning; 2:4 sparsity |
| 00:30–01:00 | M2 | Distillation |
| 01:00–01:30 | M3 | SparseGPT / Wanda |
| 01:30–02:00 | M4 | NAS / once-for-all |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/Tiny-Stories-Regional`](https://github.com/VizuaraAILabs/Tiny-Stories-Regional) — train a small distilled-scale LM and compare it against a from-scratch same-size twin. |

### Lecture 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention
_3-hour block · 🔧 skill: `$attention-bench` · ▶ project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — measure KV-cache growth and the FlashAttention/paged-KV win across 1k/8k/32k context._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Naive attention is IO-bound |
| 00:30–01:00 | M2 | FlashAttention (tiling + online softmax) |
| 01:00–01:30 | M3 | KV-cache |
| 01:30–02:00 | M4 | PagedAttention |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — measure KV-cache growth and the FlashAttention/paged-KV win across 1k/8k/32k context. |

### Lecture 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM
_3-hour block · 🔧 skill: `$serving-engine-bench` · ▶ project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — serve on Modal + vLLM and benchmark continuous batching / TTFT / ITL across concurrency._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prefill vs decode |
| 00:30–01:00 | M2 | Continuous batching |
| 01:00–01:30 | M3 | TTFT vs ITL vs throughput |
| 01:30–02:00 | M4 | Prefix caching / RadixAttention |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — serve on Modal + vLLM and benchmark continuous batching / TTFT / ITL across concurrency. |

### Lecture 8 — Speculative & Parallel Decoding
_3-hour block · 🔧 skill: `$spec-decode` · ▶ project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — configure speculative decoding (draft / EAGLE) and measure acceptance rate + decode-latency win._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why decode is slow |
| 00:30–01:00 | M2 | Speculative decoding (verify-in-parallel) |
| 01:00–01:30 | M3 | Acceptance rate |
| 01:30–02:00 | M4 | Medusa / EAGLE |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — configure speculative decoding (draft / EAGLE) and measure acceptance rate + decode-latency win. |

### Lecture 9 — Mixture-of-Experts: Sparse Models at Scale
_3-hour block · 🔧 skill: `$moe-analyze` · ▶ project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — inspect MLA/MoE routing and per-expert load on a from-scratch MoE._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Sparse activation |
| 00:30–01:00 | M2 | Router + top-k gating |
| 01:00–01:30 | M3 | Load balancing |
| 01:30–02:00 | M4 | Expert parallelism |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — inspect MLA/MoE routing and per-expert load on a from-scratch MoE. |

### Lecture 10 — Long-Context Efficiency
_3-hour block · 🔧 skill: `$longctx-budget` · ▶ project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — push toward 128k with FP8 KV + eviction and run a long-context-vs-RAG cost comparison._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | KV-cache dominates long context; KV-cache quantization & eviction |
| 00:30–01:00 | M2 | Sliding-window / sparse attention |
| 01:00–01:30 | M3 | RoPE scaling / YaRN |
| 01:30–02:00 | M4 | Long-context vs RAG |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — push toward 128k with FP8 KV + eviction and run a long-context-vs-RAG cost comparison. |

### Lecture 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism
_3-hour block · 🔧 skill: `$parallel-plan` · ▶ project: [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/CP/EP sharding on multi-GPU and read the memory/comms tradeoff._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data parallelism; ZeRO / FSDP sharding |
| 00:30–01:00 | M2 | Tensor parallelism |
| 01:00–01:30 | M3 | Pipeline parallelism |
| 01:30–02:00 | M4 | Choosing a plan |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/CP/EP sharding on multi-GPU and read the memory/comms tradeoff. |

### Lecture 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint
_3-hour block · 🔧 skill: `$efficiency-report` · ▶ project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — take a model FP16 → quantized → served → benchmarked end-to-end as the capstone reference._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — take a model FP16 → quantized → served → benchmarked end-to-end as the capstone reference. |

