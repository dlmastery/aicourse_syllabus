# Detailed Table of Contents — Subject 10 — Efficient AI: Quantization, Serving & Systems

_Source: `10-efficient-ai-systems-serving.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**_

### Lecture 1 — The GPU Execution & Memory Model (and How to Profile It)
_3-hour block · 🔧 reusable skill: `$gpu-profile`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Memory-bound vs compute-bound |
| 00:30–01:00 | M2 | GPU memory hierarchy |
| 01:00–01:30 | M3 | Roofline model |
| 01:30–02:00 | M4 | The memory budget of an LLM |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | profile_forward.py: load the 8B in FP16, run a profiled forward pass, export a Chrome trace; identif |

### Lecture 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter
_3-hour block · 🔧 reusable skill: `$precision-sweep`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Range vs precision |
| 00:30–01:00 | M2 | Mixed precision |
| 01:00–01:30 | M3 | FP8 (E4M3/E5M2) |
| 01:30–02:00 | M4 | Dynamic range & scaling |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | precision_sweep.py: run the same generation in FP16/BF16/FP8 (via torchao/Transformer Engine); recor |

### Lecture 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant
_3-hour block · 🔧 reusable skill: `$quantize-and-verify`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PTQ vs QAT; Quantization granularity |
| 00:30–01:00 | M2 | AWQ |
| 01:00–01:30 | M3 | SmoothQuant |
| 01:30–02:00 | M4 | Calibration set |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Quantize the 8B with **AutoAWQ** (INT4, group 128) and **llm-compressor** (GPTQ INT4 and SmoothQuant |

### Lecture 4 — QAT, Low-Bit Frontiers & Serving Quantized Models
_3-hour block · 🔧 reusable skill: `$lowbit-serve`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | QAT & the straight-through estimator |
| 00:30–01:00 | M2 | NF4 + QLoRA |
| 01:00–01:30 | M3 | Served vs offline speedup |
| 01:30–02:00 | M4 | Low-bit cliff |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | QLoRA-fine-tune the 8B (NF4) on a small instruction set; merge/serve; compare quality to the base |

### Lecture 5 — Pruning, Sparsity, Distillation & NAS
_3-hour block · 🔧 reusable skill: `$compress-verify`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Unstructured vs structured pruning; 2:4 sparsity |
| 00:30–01:00 | M2 | Distillation |
| 01:00–01:30 | M3 | SparseGPT / Wanda |
| 01:30–02:00 | M4 | NAS / once-for-all |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Distill tiny-on-edge from a larger teacher; report the accuracy gap vs a same-size from-scratch mode |

### Lecture 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention
_3-hour block · 🔧 reusable skill: `$attention-bench`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Naive attention is IO-bound |
| 00:30–01:00 | M2 | FlashAttention (tiling + online softmax) |
| 01:00–01:30 | M3 | KV-cache |
| 01:30–02:00 | M4 | PagedAttention |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Benchmark generation with eager attention vs **FlashAttention-3** (or FA-2 if HW-limited) at 1k/8k/3 |

### Lecture 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM
_3-hour block · 🔧 reusable skill: `$serving-engine-bench`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prefill vs decode |
| 00:30–01:00 | M2 | Continuous batching |
| 01:00–01:30 | M3 | TTFT vs ITL vs throughput |
| 01:30–02:00 | M4 | Prefix caching / RadixAttention |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Serve the same quantized checkpoint on **vLLM**, **SGLang**, and **TensorRT-LLM**; run benchmark_ser |

### Lecture 8 — Speculative & Parallel Decoding
_3-hour block · 🔧 reusable skill: `$spec-decode`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why decode is slow |
| 00:30–01:00 | M2 | Speculative decoding (verify-in-parallel) |
| 01:00–01:30 | M3 | Acceptance rate |
| 01:30–02:00 | M4 | Medusa / EAGLE |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Configure vLLM speculative decoding with (a) a 1B draft model and (b) **EAGLE-3** or **n-gram**; ben |

### Lecture 9 — Mixture-of-Experts: Sparse Models at Scale
_3-hour block · 🔧 reusable skill: `$moe-analyze`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Sparse activation |
| 00:30–01:00 | M2 | Router + top-k gating |
| 01:00–01:30 | M3 | Load balancing |
| 01:30–02:00 | M4 | Expert parallelism |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Serve an MoE model on vLLM/SGLang; measure tokens/s and memory; compare *active* vs *total* params a |

### Lecture 10 — Long-Context Efficiency
_3-hour block · 🔧 reusable skill: `$longctx-budget`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | KV-cache dominates long context; KV-cache quantization & eviction |
| 00:30–01:00 | M2 | Sliding-window / sparse attention |
| 01:00–01:30 | M3 | RoPE scaling / YaRN |
| 01:30–02:00 | M4 | Long-context vs RAG |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Serve the 8B with **quantized KV-cache** (FP8) and **StreamingLLM/sliding-window**; measure max cont |

### Lecture 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism
_3-hour block · 🔧 reusable skill: `$parallel-plan`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data parallelism; ZeRO / FSDP sharding |
| 00:30–01:00 | M2 | Tensor parallelism |
| 01:00–01:30 | M3 | Pipeline parallelism |
| 01:30–02:00 | M4 | Choosing a plan |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Train/fine-tune the 8B with **FSDP2** (or DeepSpeed ZeRO-3) across 2+ GPUs; record peak memory per G |

### Lecture 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint
_3-hour block · 🔧 reusable skill: `$efficiency-report`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build the weekly artifact + evidence log |

