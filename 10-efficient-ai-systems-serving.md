# Subject 10 — Efficient AI: Quantization, Serving & Systems

**Track:** Systems & Efficiency · **Altitude:** Engineer → Specialist · **Length:** 12 weeks (2 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subjects 01–02 (math + DL from scratch, backprop, attention), Subject 09 (you can already containerize and serve a model), comfort with PyTorch and the shell, and access to at least one NVIDIA GPU (a single 24 GB consumer card — RTX 4090/L4 — is enough; A100/H100 via Modal/RunPod for the big labs).
**Pedagogy:** the *build-and-measure* spine of **MIT 6.5940 (TinyML & Efficient DL)**, **CMU 11-868 (LLM Systems)**, and **Stanford CS336 (LM from Scratch: Triton kernels, parallelism)**, run through the source book's `concept → code → critique → reflection → rebuild` loop. The non-negotiable discipline here is **measure-before-you-claim**: every optimization must be justified by a profile and a benchmark, with a quality check, not by reputation.

**Course anchor case (carried all 12 weeks):** **`shrink-an-8B`** — take one open model (default **Qwen3-8B**, with **Llama-3.1-8B** as an alternate) from a vanilla FP16 checkpoint to a quantized, kernel-optimized, continuously-batched, **served endpoint**, and at every step record **latency (p50/p95), throughput (tokens/s), memory (GB), cost ($/1M tokens), and quality (a fixed eval)**. A second mini-anchor, **`tiny-on-edge`** — a small vision/speech model deployed on-device — recurs in the pruning/distillation/edge weeks so efficiency lessons land on both server and edge.

**What you leave with:** an `efficient-ai/` repo with a reproducible **efficiency report** (one Pareto chart: quality vs latency vs cost across every technique), a hand-written Triton kernel, quantized model variants (INT4/FP8), a speculative-decoding setup, an MoE experiment, and nine reusable harness skills — not a folder of one-off notebooks.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 12 lectures (~36 contact hrs). Full time-boxed lecture plan: [`_toc/10-efficient-ai-systems-serving-toc.md`](_toc/10-efficient-ai-systems-serving-toc.md)._

1. **Lecture 1 — The GPU Execution & Memory Model (and How to Profile It)** — Memory-bound vs compute-bound · GPU memory hierarchy · Roofline model · The memory budget of an LLM  ·  🔧 `$gpu-profile`
2. **Lecture 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter** — Range vs precision · Mixed precision · FP8 (E4M3/E5M2) · Dynamic range & scaling  ·  🔧 `$precision-sweep`
3. **Lecture 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant** — PTQ vs QAT · Quantization granularity · AWQ · SmoothQuant · Calibration set  ·  🔧 `$quantize-and-verify`
4. **Lecture 4 — QAT, Low-Bit Frontiers & Serving Quantized Models** — QAT & the straight-through estimator · NF4 + QLoRA · Served vs offline speedup · Low-bit cliff  ·  🔧 `$lowbit-serve`
5. **Lecture 5 — Pruning, Sparsity, Distillation & NAS** — Unstructured vs structured pruning · 2:4 sparsity · Distillation · SparseGPT / Wanda · NAS / once-for-all  ·  🔧 `$compress-verify`
6. **Lecture 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention** — Naive attention is IO-bound · FlashAttention (tiling + online softmax) · KV-cache · PagedAttention  ·  🔧 `$attention-bench`
7. **Lecture 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM** — Prefill vs decode · Continuous batching · TTFT vs ITL vs throughput · Prefix caching / RadixAttention  ·  🔧 `$serving-engine-bench`
8. **Lecture 8 — Speculative & Parallel Decoding** — Why decode is slow · Speculative decoding (verify-in-parallel) · Acceptance rate · Medusa / EAGLE  ·  🔧 `$spec-decode`
9. **Lecture 9 — Mixture-of-Experts: Sparse Models at Scale** — Sparse activation · Router + top-k gating · Load balancing · Expert parallelism  ·  🔧 `$moe-analyze`
10. **Lecture 10 — Long-Context Efficiency** — KV-cache dominates long context · KV-cache quantization & eviction · Sliding-window / sparse attention · RoPE scaling / YaRN · Long-context vs RAG  ·  🔧 `$longctx-budget`
11. **Lecture 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism** — Data parallelism · ZeRO / FSDP sharding · Tensor parallelism · Pipeline parallelism · Choosing a plan  ·  🔧 `$parallel-plan`
12. **Lecture 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint**  ·  🔧 `$efficiency-report`

---

## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|---|---|---|
| Weekly labs (Weeks 1–11, graded individually below) | 58% | The running efficiency report: each week adds a measured technique with a quality check. |
| Two systems design reviews (after Week 4 and Week 9) | 8% | ADRs: quantization recipe choice; serving-stack + parallelism plan. |
| Capstone (Week 12) — FP16 → served quantized endpoint, benchmarked | 28% | The full Pareto frontier + a defended deployment recommendation. |
| Reproducibility & benchmarking hygiene | 6% | Pinned env, warmup/repeats, error bars, hardware disclosed on every number. |

Per-week weights below are the share of the 58% lab bucket, expressed as **% of total course grade** (they sum to 58).

## Tooling & environment (pinned, June 2026)

- **Core:** Python 3.12, PyTorch 2.6 (CUDA 12.4), `uv` 0.7, CUDA Toolkit 12.4, NVIDIA driver ≥ 550.
- **Profiling:** PyTorch Profiler + `torch.cuda` events, NVIDIA **Nsight Systems/Compute**, `nvidia-smi`/`nvtop`, `gpustat`.
- **Kernels:** **Triton** 3.2 (`pip install triton`), `torch.compile`, CUTLASS (read-only reference).
- **Quantization:** **llm-compressor** 0.4 (vLLM/Neural Magic, GPTQ+SmoothQuant+FP8), **AutoAWQ** 0.2.x, **AutoGPTQ**/GPTQModel, `bitsandbytes` 0.45 (NF4/QLoRA), `torchao` 0.8 (INT4/FP8, `quantize_`).
- **Serving:** **vLLM** 0.8.x, **SGLang** 0.4.x, **TensorRT-LLM** 0.18 + Triton Inference Server 25.0x.
- **Speculative/parallel decoding:** vLLM speculative (draft model / **EAGLE-3** / n-gram / **Medusa**) configs.
- **Distributed:** PyTorch **FSDP2**, **DeepSpeed** 0.16 (ZeRO-1/2/3), **Megatron-LM** (tensor/pipeline parallel), `accelerate` 1.3.
- **Edge/on-device:** **llama.cpp** (GGUF, Q4_K_M), **MLC-LLM**, ONNX Runtime 1.20, ExecuTorch, **MLX** (Apple) optional.
- **Benchmarking:** vLLM `benchmark_serving.py`, **GuideLLM** (Neural Magic), `lm-eval-harness` 0.4.x for quality, `genai-perf` (Triton).
- **Models/data:** Qwen3-8B / Llama-3.1-8B (FP16), a 1B draft model for speculation, WikiText-2 (calibration), MMLU/GSM8K (quality).

---

## Week 1 — The GPU Execution & Memory Model (and How to Profile It)

**Altitude:** Engineer · **Format:** 2h lecture + 4h lab
**Anchor case:** profile a single forward pass of `shrink-an-8B` (FP16) and find out where the time and memory actually go.

### Learning goals
- Explain the GPU memory hierarchy (HBM ↔ L2 ↔ shared/SRAM ↔ registers) and the **roofline** idea (compute-bound vs memory-bound).
- Distinguish **arithmetic intensity** and predict, for a given op, whether it's bottlenecked by FLOPs or by HBM bandwidth.
- Profile a model with PyTorch Profiler + Nsight and read a kernel timeline.
- Account for where the ~16 GB of an 8B FP16 model + activations + KV-cache actually live.

### Concept map
- **Memory-bound vs compute-bound.** *Formula:* arithmetic intensity `I = FLOPs / bytes_moved`; compare to the GPU's FLOP:bandwidth ratio. *Plain English:* if you move more bytes than you compute, you're waiting on memory. *Code mapping:* matmul = compute-bound; attention/elementwise/decode = often memory-bound. Common mistake: optimizing FLOPs on a memory-bound op (no speedup).
- **GPU memory hierarchy.** HBM (big, slow) → SRAM/shared (tiny, fast). Where it matters: FlashAttention's whole trick is staying in SRAM. Common mistake: assuming all "GPU memory" is equally fast.
- **Roofline model.** Plain English: max achievable performance is the lower of (peak FLOPs) and (bandwidth × intensity). Common mistake: chasing the compute roof while pinned to the memory roof.
- **The memory budget of an LLM.** weights + optimizer (train) / weights + KV-cache (infer) + activations. Common mistake: forgetting the KV-cache grows with batch×sequence and dominates at long context.

### Hands-on build (the lab)
- `profile_forward.py`: load the 8B in FP16, run a profiled forward pass, export a Chrome trace; identify the top-5 kernels by time.
- Compute a back-of-envelope **memory budget** (weights/activations/KV) and compare to `nvidia-smi` reality.
- Build a tiny **roofline** plot for `matmul` vs `softmax` vs `layernorm` at a few sizes; label each compute- or memory-bound.
- **Deliverable:** a profiling report + roofline plot. **Acceptance:** you correctly classify each of three ops as compute- or memory-bound *and* your predicted memory budget is within 15% of measured.

### Harness / reusable skill — `$gpu-profile`
- **Purpose:** turn any model/op into a profile that names the bottleneck (compute vs memory) and the top time-sinks.
- **Inputs:** a model + input shape. **Outputs:** a kernel-time table, a roofline classification, a memory breakdown.
- **Evidence artifact:** `evidence/week01-profile/bottleneck-report.md`.

### Common failure modes
- **Optimizing without profiling** → speeding up a 2% kernel. *Fix:* profile first, optimize the top sink.
- **Ignoring warmup** → measuring CUDA init/compile, not the op. *Fix:* warmup iters + `torch.cuda.synchronize()`.
- **Mean-only timing** → noisy GPU numbers. *Fix:* repeats + median + spread.
- **KV-cache amnesia** → "why did memory explode at long context?" *Fix:* include KV in the budget.

### Evidence artifact
`evidence/week01-profile/` (Chrome trace + roofline plot + memory budget vs measured).

### Skill sink-in
Predict whether the 8B forward pass is compute- or memory-bound at batch 1. Profile it. Record what the timeline said and what surprised you.

### Dataset(s)
**WikiText-2** (`huggingface.co/datasets/wikitext`, ~2M tokens, CC-BY-SA) as a fixed input corpus for consistent profiling; model weights from `huggingface.co/Qwen/Qwen3-8B` (Apache-2.0).

### Code stub
```python
# profile_forward.py — profile + classify the bottleneck
import torch, time
from torch.profiler import profile, ProfilerActivity
from transformers import AutoModelForCausalLM, AutoTokenizer
m = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-8B", torch_dtype=torch.float16).cuda().eval()
tok = AutoTokenizer.from_pretrained("Qwen/Qwen3-8B")
x = tok("The roofline model says", return_tensors="pt").input_ids.cuda()
for _ in range(3): m(x)                       # warmup
torch.cuda.synchronize()
with profile(activities=[ProfilerActivity.CUDA], record_shapes=True) as p:
    with torch.no_grad(): m(x)
    torch.cuda.synchronize()
print(p.key_averages().table(sort_by="cuda_time_total", row_limit=5))
print("alloc GB:", torch.cuda.max_memory_allocated()/1e9)   # compare to your budget
```

### Graded rubric
| Criterion | Excellent (full) | Adequate (half) | Failing (0) |
|---|---|---|---|
| Bottleneck analysis | All 3 ops correctly classified w/ roofline reasoning | 1–2 correct | Guesses, no roofline |
| Memory accounting | Predicted budget within 15% of measured | Within 40% | No budget |
| Method hygiene | Warmup + sync + repeats | One missing | Single cold run |

**Assessment weight:** 4% of course grade.

### Readings & sources (2025–2026)
- Williams, Waterman, Patterson, *Roofline: an insightful visual performance model*, CACM 2009.
- Stanford **CS336** "PyTorch & resource accounting" + "GPUs" lectures (2025).
- Horace He, *Making Deep Learning Go Brrrr From First Principles* (2023).
- NVIDIA, *Nsight Systems/Compute* docs + *GPU Performance Background* (2025).

---

## Week 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter

**Altitude:** Engineer · **Anchor case:** run `shrink-an-8B` in FP16, BF16, and FP8 and measure the speed/memory/quality tradeoffs of each.

### Learning goals
- Explain floating-point layouts (FP32/FP16/BF16/FP8 E4M3 & E5M2): range vs precision and where each breaks.
- Use automatic mixed precision correctly (loss scaling, master weights) and explain why BF16 eased it.
- Reason about **FP8** inference/training on Hopper/Blackwell and the role of per-tensor/per-channel scales.
- Detect numeric failure (overflow→NaN, underflow→dead gradients) and tie it to the format's range.

### Concept map
- **Range vs precision.** *Plain English:* exponent bits buy range, mantissa bits buy precision. *Tiny example:* FP16 overflows past 65504; BF16 has FP32's range but coarse precision. Common mistake: training in FP16 without loss scaling → silent NaNs.
- **Mixed precision.** *Formula:* compute in low precision, keep an FP32 master copy + scaled loss. Where it matters: ~2× speed/memory at ~no quality loss. Common mistake: storing the master weights in FP16 too.
- **FP8 (E4M3/E5M2).** Plain English: 8-bit floats for matmuls with per-tensor scales; E4M3 for weights/activations, E5M2 for gradients. Common mistake: a single global scale → clipping or underflow; you need calibrated scales.
- **Dynamic range & scaling.** Plain English: pick a scale that maps your tensor's values into the format's sweet spot. Common mistake: ignoring outlier channels (the SmoothQuant problem, Week 3).

### Hands-on build
- `precision_sweep.py`: run the same generation in FP16/BF16/FP8 (via `torchao`/Transformer Engine); record latency, peak memory, and MMLU/GSM8K delta.
- Reproduce an FP16 overflow→NaN and fix it with BF16 or loss scaling; explain via the format's max value.
- **Deliverable:** a precision-tradeoff table (speed/mem/quality) + a one-paragraph "when to use which." **Acceptance:** FP8 shows a real memory/throughput win with quality drop quantified on a fixed eval (not "looks fine").

### Harness / reusable skill — `$precision-sweep`
- **Purpose:** for any model, compare precisions on speed/memory/quality with a fixed eval, and recommend one.
- **Inputs:** a model + an eval set. **Outputs:** a tradeoff table + a recommendation + the failure cases each precision introduced.
- **Evidence artifact:** `evidence/week02-precision/tradeoff-table.md`.

### Common failure modes
- **FP16 training without loss scaling** → NaNs. *Fix:* BF16 or dynamic loss scaling.
- **Quality claimed from one prompt** → unmeasured regression. *Fix:* fixed eval (MMLU/GSM8K subset) with a number.
- **Global FP8 scale** → clipped outliers. *Fix:* per-tensor/per-channel calibrated scales.
- **Mixing up E4M3/E5M2 roles** → range/precision mismatch. *Fix:* E4M3 fwd, E5M2 grads.

### Evidence artifact
`evidence/week02-precision/` (tradeoff table + the NaN repro+fix note).

### Skill sink-in
Predict the FP8 quality drop on GSM8K before running. Measure it. Record whether outlier channels (not the format itself) were the real culprit.

### Dataset(s)
**MMLU** (`huggingface.co/datasets/cais/mmlu`, MIT) + **GSM8K** (`huggingface.co/datasets/openai/gsm8k`, MIT), small fixed subsets for fast, comparable quality deltas.

### Code stub
```python
# precision_sweep.py — compare dtypes on one eval
import torch
from torchao.quantization import quantize_, Float8DynamicActivationFloat8WeightConfig
results = {}
for name, setup in {
    "bf16": lambda m: m.to(torch.bfloat16),
    "fp16": lambda m: m.to(torch.float16),
    "fp8":  lambda m: (quantize_(m, Float8DynamicActivationFloat8WeightConfig()), m)[1],
}.items():
    m = load_model(); m = setup(m)
    lat, mem = time_generate(m); acc = eval_gsm8k(m, n=200)   # fixed subset
    results[name] = dict(latency_ms=lat, mem_gb=mem, gsm8k=acc)
print(results)        # -> tradeoff-table.md
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Precision understanding | Explains each format's range/precision + failure | Partial | Confuses formats |
| Measured tradeoffs | Speed+mem+quality for all 3, with numbers | Missing one axis | Anecdotal |
| Failure repro | Reproduces + fixes a numeric failure | Repro only | None |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Micikevicius et al., *Mixed Precision Training*, ICLR 2018; Micikevicius et al., *FP8 Formats for Deep Learning*, 2022 (NVIDIA/Arm/Intel).
- NVIDIA, *Transformer Engine & FP8 on Hopper/Blackwell* docs (2025).
- MIT **6.5940** "Quantization Part I" (numeric formats), 2024.
- `torchao` docs, *float8 & low-precision training/inference* (0.8, 2025).

---

## Week 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant

**Altitude:** Engineer · **Anchor case:** quantize `shrink-an-8B` to INT4 (AWQ and GPTQ) and W8A8 (SmoothQuant), and find which keeps quality at the best speed/memory.

### Learning goals
- Explain weight-only vs weight+activation quantization, and per-tensor/per-channel/group-wise granularity.
- Apply **GPTQ** (error-compensating, second-order), **AWQ** (activation-aware, protect salient channels), and **SmoothQuant** (migrate activation outliers into weights) — and say *when* each wins.
- Run calibration correctly (representative data, enough samples) and measure the quality/speed/memory tradeoff.
- Diagnose the **activation-outlier** problem that makes naive INT8 activation quantization fail.

### Concept map
- **PTQ vs QAT.** Plain English: quantize a trained model (cheap, slight loss) vs train with quantization (costly, best quality). This week is PTQ. Common mistake: reaching for QAT when AWQ already suffices.
- **Quantization granularity.** *Formula:* `x_q = round(x/s) + z`, scale `s`/zero-point `z` per-tensor, per-channel, or per-group (e.g., group size 128). Where it matters: finer granularity = better quality, slightly more overhead. Common mistake: per-tensor weights for a model with channel outliers.
- **AWQ.** Plain English: a few weight channels matter much more (tied to large activations); scale to protect them. Common mistake: ignoring which channels are salient.
- **SmoothQuant.** *Plain English:* activations have outliers that wreck INT8; mathematically "smooth" them into the weights so both quantize well. Common mistake: W8A8 without smoothing → big accuracy cliff.
- **Calibration set.** Plain English: a small representative corpus to estimate ranges. Common mistake: calibrating on data unlike production → bad scales.

### Hands-on build
- Quantize the 8B with **AutoAWQ** (INT4, group 128) and **llm-compressor** (GPTQ INT4 and SmoothQuant W8A8) using a WikiText calibration set.
- Evaluate each on the fixed MMLU/GSM8K subset; measure tokens/s and memory served on vLLM.
- **Deliverable:** a quantization comparison table (method × {quality, tokens/s, GB}) + a recommendation. **Acceptance:** at least one INT4 variant holds ≥98% of FP16 quality on the eval while cutting memory ≥3×, demonstrated with numbers.
- **Design review #1 (8%-component):** an ADR recommending a quantization recipe for the capstone.

### Harness / reusable skill — `$quantize-and-verify`
- **Purpose:** quantize any model with a chosen method + verify quality on a fixed eval before it ships.
- **Inputs:** a model + calibration data + an eval. **Outputs:** quantized weights, a quality/speed/memory delta, a go/no-go.
- **Evidence artifact:** `evidence/week03-quant/quant-comparison.md`.

### Common failure modes
- **No quality eval after quantizing** → shipped a degraded model. *Fix:* always re-eval on the fixed set.
- **Bad calibration data** → wrong scales, quality cliff. *Fix:* representative, sufficient calibration samples.
- **W8A8 without outlier handling** → accuracy collapse. *Fix:* SmoothQuant before INT8 activations.
- **Per-tensor everything** → avoidable quality loss. *Fix:* per-channel/group-wise where it counts.

### Evidence artifact
`evidence/week03-quant/` (comparison table + calibration notes + ADR-001 quant recipe).

### Skill sink-in
Predict which method (AWQ vs GPTQ vs SmoothQuant) best preserves GSM8K. Run all three. Record the winner and *why* (granularity? outliers? second-order?).

### Dataset(s)
**WikiText-2** (calibration, CC-BY-SA) + **C4** sample (`huggingface.co/datasets/allenai/c4`, ODC-BY) for calibration robustness; **MMLU/GSM8K** subsets for quality.

### Code stub
```python
# AWQ INT4 quantize + vLLM-ready export (AutoAWQ)
from awq import AutoAWQForCausalLM
from transformers import AutoTokenizer
model = AutoAWQForCausalLM.from_pretrained("Qwen/Qwen3-8B")
tok = AutoTokenizer.from_pretrained("Qwen/Qwen3-8B")
quant_cfg = {"w_bit": 4, "q_group_size": 128, "zero_point": True, "version": "GEMM"}
model.quantize(tok, quant_config=quant_cfg,
               calib_data="wikitext")          # representative calibration
model.save_quantized("Qwen3-8B-awq-int4")
# then: vllm serve Qwen3-8B-awq-int4 --quantization awq  ; eval with lm-eval-harness
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Method understanding | Explains AWQ/GPTQ/SmoothQuant + when each wins | Two of three | Names only |
| Quality verification | All variants eval'd; ≥98% INT4 variant found | Eval'd, no clear winner | No eval |
| Tradeoff reporting | quality×tokens/s×GB table + pick | Missing an axis | Anecdotal |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Frantar et al., *GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers*, ICLR 2023.
- Lin et al., *AWQ: Activation-aware Weight Quantization for LLM Compression*, MLSys 2024.
- Xiao et al., *SmoothQuant: Accurate and Efficient PTQ for LLMs*, ICML 2023.
- Dettmers et al., *LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale*, NeurIPS 2022 (the outlier story).

---

## Week 4 — QAT, Low-Bit Frontiers & Serving Quantized Models

**Altitude:** Engineer · **Anchor case:** push `shrink-an-8B` further — QLoRA-style NF4, FP8 serving on vLLM, and a peek at sub-4-bit — then serve the best variant and re-measure end to end.

### Learning goals
- Explain quantization-aware training/fine-tuning (straight-through estimator) and when it beats PTQ.
- Use **NF4 + QLoRA** to fine-tune a quantized model on a single GPU, and explain double quantization.
- Serve quantized checkpoints (INT4/FP8) on vLLM/TensorRT-LLM and confirm the *served* (not just offline) speedup.
- Reason about the low-bit frontier (W4A8, FP8, 2–3 bit, and where quality falls off a cliff).

### Concept map
- **QAT & the straight-through estimator.** *Plain English:* simulate quantization in the forward pass, pass gradients straight through the non-differentiable round. Where it matters: recovers quality at very low bits. Common mistake: expecting PTQ-level cost from QAT.
- **NF4 + QLoRA.** Plain English: store frozen weights in 4-bit NormalFloat, train small LoRA adapters in BF16; double-quantize the quant constants to save more. Common mistake: thinking QLoRA quantizes the *adapters* (it doesn't).
- **Served vs offline speedup.** Plain English: a smaller model isn't automatically faster to serve — kernels must support the format. Common mistake: quantizing to a format your serving stack lacks fast kernels for.
- **Low-bit cliff.** Plain English: quality degrades gracefully to ~4-bit, then often sharply below. Common mistake: chasing 2-bit without a quality budget.

### Hands-on build
- QLoRA-fine-tune the 8B (NF4) on a small instruction set; merge/serve; compare quality to the base.
- Produce an **FP8** checkpoint (llm-compressor) and serve on vLLM; benchmark served tokens/s vs the INT4 and FP16 baselines.
- **Deliverable:** an updated efficiency table with QLoRA + FP8 rows + a "served speedup vs offline" note. **Acceptance:** the served FP8/INT4 variant shows a real end-to-end throughput gain on vLLM (measured with `benchmark_serving.py`), with quality within budget.

### Harness / reusable skill — `$lowbit-serve`
- **Purpose:** select a low-bit format your serving stack accelerates, fine-tune if needed (QLoRA), and verify the *served* gain.
- **Inputs:** a model + serving stack + quality budget. **Outputs:** a served variant + a benchmark proving real speedup + quality delta.
- **Evidence artifact:** `evidence/week04-lowbit/served-speedup.md`.

### Common failure modes
- **Offline-only speedup** → no real serving gain. *Fix:* benchmark the actual server, not just `model.generate`.
- **Format without kernels** → quantized but slow. *Fix:* match format to stack (AWQ/FP8 kernels in vLLM).
- **QLoRA quality assumptions** → unverified adapters. *Fix:* eval merged model on the fixed set.
- **Chasing 2-bit** → quality cliff. *Fix:* set a quality floor first.

### Evidence artifact
`evidence/week04-lowbit/` (served benchmark + quality delta + format/kernel notes).

### Skill sink-in
Predict whether your INT4 model is faster *served* than FP16 at batch 1 vs batch 32. Benchmark both. Record where (and why) the served gain appears.

### Dataset(s)
**Alpaca/OpenHermes** instruction sample (`huggingface.co/datasets/teknium/OpenHermes-2.5`, permissive) for QLoRA fine-tuning; **MMLU/GSM8K** subsets for quality; vLLM ShareGPT trace for serving load.

### Code stub
```python
# QLoRA fine-tune on a 4-bit base (bitsandbytes NF4)
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
from peft import LoraConfig, get_peft_model
bnb = BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_quant_type="nf4",
                         bnb_4bit_use_double_quant=True, bnb_4bit_compute_dtype="bfloat16")
m = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-8B", quantization_config=bnb, device_map="auto")
m = get_peft_model(m, LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj","v_proj"], task_type="CAUSAL_LM"))
# train adapters in bf16 over frozen 4-bit weights ... then merge + serve + eval
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| QAT/QLoRA grasp | Explains STE + NF4/double-quant correctly | Partial | Misconceptions |
| Served gain | Real end-to-end throughput win, measured | Offline-only gain | No benchmark |
| Quality budget | Within stated floor, verified | Eval'd, no floor set | No eval |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Dettmers et al., *QLoRA: Efficient Finetuning of Quantized LLMs*, NeurIPS 2023.
- Bengio et al., *Estimating or Propagating Gradients Through Stochastic Neurons* (STE), 2013.
- Frantar et al., *Marlin / Machete: fast low-bit GPU kernels for LLM serving*, 2024–25 (why kernels matter).
- llm-compressor & vLLM docs, *FP8 / INT4 serving recipes* (2025).

---

## Week 5 — Pruning, Sparsity, Distillation & NAS

**Altitude:** Engineer · **Anchor case:** `tiny-on-edge` — compress a small model with structured pruning + distillation; on the server, try 2:4 sparsity on the 8B.

### Learning goals
- Distinguish unstructured vs structured pruning and magnitude vs second-order (OBD/SparseGPT) criteria.
- Use **2:4 semi-structured sparsity** that NVIDIA tensor cores actually accelerate, and measure the real speedup.
- Apply **knowledge distillation** (logit/feature) to shrink a model while keeping accuracy.
- Explain Neural Architecture Search / once-for-all as automated efficiency, and its cost tradeoff.

### Concept map
- **Unstructured vs structured pruning.** *Plain English:* zero out scattered weights (great compression, no speed without special kernels) vs remove whole channels/heads (real speedup, harder to keep accuracy). Common mistake: unstructured sparsity expecting wall-clock gains on dense hardware.
- **2:4 sparsity.** Plain English: 2 of every 4 weights zero, in a pattern Ampere+ tensor cores accelerate ~2×. Common mistake: arbitrary sparsity patterns the hardware can't use.
- **Distillation.** *Formula:* student minimizes `α·CE(y) + (1−α)·KL(softmax(z_t/T) ‖ softmax(z_s/T))`. *Plain English:* learn from the teacher's soft probabilities, not just the hard label. Common mistake: temperature `T=1` (throws away the dark knowledge).
- **SparseGPT / Wanda.** Plain English: one-shot prune an LLM with calibration, like GPTQ for sparsity. Common mistake: pruning then never re-evaluating.
- **NAS / once-for-all.** Plain English: search architectures under a latency budget; train once, specialize many. Common mistake: ignoring NAS's large search cost vs the win.

### Hands-on build
- Distill `tiny-on-edge` from a larger teacher; report the accuracy gap vs a same-size from-scratch model.
- Apply **2:4 sparsity** (SparseGPT/`torchao`) to the 8B; measure served speedup on a sparsity-aware kernel + quality delta.
- **Deliverable:** a compression report (pruning + distillation rows, real speedup vs theoretical). **Acceptance:** 2:4 sparsity shows a measured wall-clock speedup (not just a parameter-count reduction) and the distilled student beats its from-scratch twin.

### Harness / reusable skill — `$compress-verify`
- **Purpose:** compress a model (prune/distill) and verify both a *hardware-real* speedup and an in-budget quality delta.
- **Inputs:** a model (+ teacher) + a latency target. **Outputs:** a compressed model + measured speedup + quality delta + a note on theoretical-vs-real gain.
- **Evidence artifact:** `evidence/week05-compress/compression-report.md`.

### Common failure modes
- **Unstructured sparsity, no speedup** → fewer params, same latency. *Fix:* structured / 2:4 with supporting kernels.
- **No re-eval after pruning** → silent accuracy loss. *Fix:* eval on the fixed set post-prune.
- **Distillation with T=1** → loses soft-label signal. *Fix:* tune temperature, use teacher logits.
- **NAS over-engineering** → search cost > the win. *Fix:* compare NAS cost to a hand-tuned baseline.

### Evidence artifact
`evidence/week05-compress/` (compression report + theoretical-vs-real speedup note).

### Skill sink-in
Predict the wall-clock speedup of 2:4 sparsity vs its theoretical 2×. Measure it. Record the gap and which layers didn't speed up.

### Dataset(s)
**CIFAR-100 / Tiny-ImageNet** (`huggingface.co/datasets/zh-plus/tiny-imagenet`, research) for the edge distillation case; **WikiText-2** calibration + **MMLU** for the 8B sparsity quality check.

### Code stub
```python
# 2:4 semi-structured sparsity with torchao + measure real speedup
import torch
from torchao.sparsity import sparsify_, semi_sparse_weight
m = load_8b().half().cuda().eval()
sparsify_(m, semi_sparse_weight())            # 2:4 pattern on Linear weights
def bench(model):
    x = sample_batch(); torch.cuda.synchronize(); t=time.time()
    for _ in range(20): model.generate(x, max_new_tokens=64)
    torch.cuda.synchronize(); return (time.time()-t)/20
print("dense vs 2:4:", bench(dense), bench(m), "  MMLU delta:", eval_mmlu(m)-base_mmlu)
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Hardware-real speedup | 2:4 wall-clock gain measured + explained | Param reduction only | None |
| Distillation | Student beats from-scratch twin | Trained, no comparison | No distillation |
| Quality check | All compressed variants re-eval'd | Partial | None |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Hinton, Vinyals, Dean, *Distilling the Knowledge in a Neural Network*, NeurIPS-W 2015.
- Frantar & Alistarh, *SparseGPT: Massive LMs Can Be Accurately Pruned in One-Shot*, ICML 2023; Sun et al., *Wanda*, ICLR 2024.
- Mishra et al., *Accelerating Sparse DNNs with 2:4 Sparsity* (NVIDIA), 2021.
- Cai et al., *Once-for-All: Train One Network and Specialize for Efficient Deployment*, ICLR 2020 (MIT 6.5940 NAS).

---

## Week 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention

**Altitude:** Engineer → Specialist · **Anchor case:** make `shrink-an-8B` cheaper at long context — quantify FlashAttention-3 and KV-cache management on memory and throughput.

### Learning goals
- Explain why naive attention is memory-bound and O(n²) memory, and how **FlashAttention** makes it IO-aware (tiling, no materialized N×N matrix).
- Describe **FlashAttention-3** improvements (Hopper async/warp-specialization, FP8) and when they help.
- Explain the **KV-cache**: what it stores, why it dominates long-context memory, and how to size it.
- Explain **PagedAttention** (vLLM): KV-cache as paged memory to kill fragmentation and raise batch size.

### Concept map
- **Naive attention is IO-bound.** *Plain English:* it writes/reads a huge N×N score matrix to HBM. Where it matters: that traffic, not the FLOPs, is the cost. Common mistake: thinking attention is compute-bound.
- **FlashAttention (tiling + online softmax).** *Plain English:* compute attention block-by-block in SRAM, never materializing the full matrix, using a running (online) softmax. Common mistake: assuming it changes results (it's exact, not approximate).
- **KV-cache.** *Formula:* memory ≈ `2 · layers · heads · head_dim · seq_len · batch · bytes`. *Plain English:* cache past keys/values so each new token doesn't recompute the whole prefix. Common mistake: forgetting it grows linearly with context and batch → OOM.
- **PagedAttention.** *Plain English:* store the KV-cache in fixed-size pages (like OS virtual memory) so you avoid fragmentation and pack more sequences. Common mistake: pre-allocating max-length contiguous KV per request → wasted memory, small batch.

### Hands-on build
- Benchmark generation with eager attention vs **FlashAttention-3** (or FA-2 if HW-limited) at 1k/8k/32k context; record latency, memory, tokens/s.
- Compute the KV-cache memory formula and verify against measured memory as context grows; then show how vLLM **PagedAttention** lets you raise concurrent sequences at the same memory.
- **Deliverable:** an attention-scaling report (latency/memory vs context, FA on/off, paged vs naive). **Acceptance:** FA-3 shows a measured memory + throughput win at long context, and your KV-cache prediction matches measurement within 15%.

### Harness / reusable skill — `$attention-bench`
- **Purpose:** quantify attention/KV-cache cost across context lengths and prove the win from FlashAttention + paged KV.
- **Inputs:** a model + context lengths + batch sizes. **Outputs:** a latency/memory/throughput curve, a KV-cache budget, a paged-vs-naive batch-size comparison.
- **Evidence artifact:** `evidence/week06-attention/attention-scaling.md`.

### Common failure modes
- **Treating attention as compute-bound** → wrong optimization. *Fix:* it's memory/IO-bound; reduce traffic.
- **KV-cache OOM at long context** → crashes. *Fix:* size KV from the formula; use paged KV + quantized KV.
- **FA assumed approximate** → distrust. *Fix:* show outputs match eager within numeric tolerance.
- **Contiguous KV allocation** → tiny batch. *Fix:* PagedAttention to pack sequences.

### Evidence artifact
`evidence/week06-attention/` (scaling curves + KV-cache prediction vs measured + paged batch-size gain).

### Skill sink-in
Predict the KV-cache size for batch 16 at 32k context. Measure it. Record the error and whether KV-cache quantization would change your serving plan.

### Dataset(s)
**LongBench / RULER** long-context prompts (`huggingface.co/datasets/THUDM/LongBench`, MIT) to drive realistic long-context load; WikiText for short-context baselines.

### Code stub
```python
# compare attention backends + verify KV-cache memory formula
import torch, time
def kv_bytes(layers, heads, hdim, seq, batch, dtype_bytes=2):
    return 2*layers*heads*hdim*seq*batch*dtype_bytes      # keys + values
for attn in ["eager", "flash_attention_3"]:
    m = load_8b(attn_implementation=attn).half().cuda().eval()
    for seq in [1024, 8192, 32768]:
        torch.cuda.reset_peak_memory_stats()
        out = m.generate(make_input(seq), max_new_tokens=64)
        print(attn, seq, "GB:", torch.cuda.max_memory_allocated()/1e9,
              "predicted KV GB:", kv_bytes(32,32,128,seq,1)/1e9)
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Attention mechanics | Explains IO-awareness + online softmax + paging | Partial | Hand-wave |
| Measured scaling | FA on/off × context, with memory + tokens/s | One axis | Anecdotal |
| KV prediction | Formula matches measured within 15% | Within 40% | No prediction |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Dao et al., *FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness*, NeurIPS 2022; Dao, *FlashAttention-2*, 2023.
- Shah et al., *FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision*, NeurIPS 2024.
- Kwon et al., *Efficient Memory Management for LLM Serving with PagedAttention (vLLM)*, SOSP 2023.
- Stanford **CS336** FlashAttention/Triton assignment (2025); CMU **11-868** "inference serving" (2025).

---

## Week 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM

**Altitude:** Engineer → Specialist · **Anchor case:** serve the quantized 8B on vLLM, SGLang, and TensorRT-LLM; benchmark continuous batching and pick a stack on evidence.

### Learning goals
- Explain **continuous (in-flight) batching** and why it dominates static batching for LLM serving.
- Compare the three major engines (vLLM, SGLang, TensorRT-LLM) on throughput, latency, features, and ops cost.
- Use **prefix caching / RadixAttention** (SGLang) for shared-prefix workloads (RAG, system prompts).
- Benchmark *serving* properly: separate prefill vs decode, report TTFT and ITL, sweep concurrency.

### Concept map
- **Prefill vs decode.** *Plain English:* prefill processes the whole prompt in parallel (compute-bound); decode generates one token at a time (memory-bound). Where it matters: they have totally different bottlenecks; serving must balance both. Common mistake: one batching policy for both phases.
- **Continuous batching.** Plain English: add/remove requests from the running batch every step instead of waiting for the slowest. Common mistake: comparing engines at static batch and missing the real win.
- **TTFT vs ITL vs throughput.** Time-to-first-token, inter-token latency, total tokens/s — different SLOs for chat vs batch. Common mistake: reporting only aggregate throughput for an interactive product.
- **Prefix caching / RadixAttention.** Plain English: reuse KV for shared prefixes (same system prompt, same RAG context). Common mistake: recomputing identical prefixes thousands of times.

### Hands-on build
- Serve the same quantized checkpoint on **vLLM**, **SGLang**, and **TensorRT-LLM**; run `benchmark_serving.py`/GuideLLM at concurrency 1/8/32/64.
- Produce a serving-engine comparison: TTFT, ITL, throughput, max concurrency, and a feature/ops-cost note; demonstrate SGLang prefix caching on a shared-system-prompt workload.
- **Deliverable:** an engine comparison table + a recommendation for the capstone. **Acceptance:** continuous batching shown to beat static batching by a measured margin, and prefix caching gives a measured TTFT win on shared prefixes.

### Harness / reusable skill — `$serving-engine-bench`
- **Purpose:** benchmark and choose an inference engine for a given workload (chat vs batch vs RAG) on real metrics.
- **Inputs:** a model + workload profile + SLOs. **Outputs:** TTFT/ITL/throughput table, max concurrency, a justified engine pick.
- **Evidence artifact:** `evidence/week07-serving/engine-comparison.md`.

### Common failure modes
- **Static-batch comparisons** → understates modern engines. *Fix:* benchmark continuous batching at varied concurrency.
- **Throughput-only reporting** → bad for interactive SLOs. *Fix:* report TTFT + ITL too.
- **No prefix caching for RAG** → wasted prefill. *Fix:* enable prefix/Radix caching, measure.
- **Single concurrency point** → misleading. *Fix:* sweep concurrency, show the curve.

### Evidence artifact
`evidence/week07-serving/` (engine table + concurrency sweep + prefix-cache TTFT win + ADR-002 serving stack).

### Skill sink-in
Predict which engine wins at concurrency 64 for your workload. Benchmark all three. Record the winner and which metric (TTFT vs throughput) decided it.

### Dataset(s)
**ShareGPT** / **LMSYS-Chat-1M** (`huggingface.co/datasets/lmsys/lmsys-chat-1m`) for chat-shaped load + a synthetic **shared-system-prompt RAG** trace (course-authored) to exercise prefix caching.

### Code stub
```bash
# Benchmark continuous batching on vLLM, sweep concurrency, capture TTFT/ITL/throughput
vllm serve Qwen3-8B-awq-int4 --quantization awq --max-num-seqs 256 --enable-prefix-caching &
python -m vllm.entrypoints.benchmark_serving \
  --backend vllm --model Qwen3-8B-awq-int4 \
  --dataset-name sharegpt --num-prompts 1000 \
  --request-rate 8 --metric-percentiles 50,95,99 \
  --save-result --result-filename evidence/week07-serving/vllm_c8.json
# repeat with --request-rate 32,64 ; repeat on SGLang (sglang.launch_server) and TensorRT-LLM
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Batching understanding | Explains continuous batching + prefill/decode split | Partial | Conflates with static |
| Benchmark rigor | TTFT+ITL+throughput swept over concurrency, 3 engines | One engine / one metric | Single point |
| Decision | Evidence-backed engine pick for the workload | Pick, weak evidence | "vLLM because popular" |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Yu et al., *Orca: A Distributed Serving System for Transformer-Based Generative Models* (continuous batching), OSDI 2022.
- Zheng et al., *SGLang: Efficient Execution of Structured LM Programs (RadixAttention)*, NeurIPS 2024.
- vLLM & TensorRT-LLM docs (2025); Neural Magic **GuideLLM** benchmarking guide (2025).
- Stanford **CS25** "production inference/serving (Modal)" guest lecture (2026).

---

## Week 8 — Speculative & Parallel Decoding

**Altitude:** Specialist · **Anchor case:** cut `shrink-an-8B` decode latency with speculative decoding (draft model, EAGLE-3, Medusa) without changing outputs.

### Learning goals
- Explain why autoregressive decode is latency-bound (one token per forward pass, memory-bound) and how speculation breaks the serialization.
- Describe **speculative decoding**: a cheap draft proposes k tokens, the target verifies them in one pass; accepted tokens are *exactly* what the target would produce.
- Compare draft-model, **Medusa** (extra heads), **EAGLE-3** (feature-level drafting), and n-gram/lookahead approaches.
- Measure the real speedup and its dependence on the **acceptance rate** and batch size.

### Concept map
- **Why decode is slow.** *Plain English:* each token needs a full forward pass that's memory-bound (you reload all weights to make one token). Where it matters: speculation amortizes weight loads over many candidate tokens. Common mistake: thinking a faster GPU alone fixes per-token latency.
- **Speculative decoding (verify-in-parallel).** *Plain English:* guess k tokens cheaply, check them all at once with the big model, keep the longest correct prefix. *Key property:* output distribution is provably unchanged. Common mistake: assuming it changes quality (it doesn't, with correct rejection sampling).
- **Acceptance rate.** *Formula:* speedup ≈ function of expected accepted length per target step. Where it matters: a poorly-matched draft → low acceptance → little or negative gain. Common mistake: a draft model too different from the target.
- **Medusa / EAGLE.** Plain English: instead of a separate draft model, train extra heads / draft on hidden features. Common mistake: ignoring the small training cost they require.

### Hands-on build
- Configure vLLM speculative decoding with (a) a 1B draft model and (b) **EAGLE-3** or **n-gram**; benchmark decode latency + acceptance rate vs the baseline.
- Show outputs are unchanged (greedy match) and measure how speedup varies with batch size.
- **Deliverable:** a speculative-decoding report (speedup vs acceptance vs batch) + a recommendation. **Acceptance:** a measured decode-latency reduction at batch 1 with *identical greedy outputs*, and an explanation of why the gain shrinks at high batch.

### Harness / reusable skill — `$spec-decode`
- **Purpose:** add speculative decoding to a served model and verify a real, output-preserving latency win.
- **Inputs:** a target model + a draft/method. **Outputs:** acceptance rate, latency delta vs batch, an output-equivalence check.
- **Evidence artifact:** `evidence/week08-spec/spec-decode-report.md`.

### Common failure modes
- **Mismatched draft** → low acceptance, no gain. *Fix:* choose/distill a well-aligned draft; measure acceptance.
- **Claiming speedup at high batch** → speculation helps least when batching already saturates the GPU. *Fix:* report across batch sizes.
- **Unverified equivalence** → silent quality change. *Fix:* greedy output match against baseline.
- **Ignoring draft cost** → net slower. *Fix:* account for draft forward passes in the budget.

### Evidence artifact
`evidence/week08-spec/` (acceptance + latency-vs-batch + greedy-equivalence proof).

### Skill sink-in
Predict the acceptance rate of your draft model. Measure it. Record how acceptance rate, not raw draft speed, determined the actual gain.

### Dataset(s)
**MT-Bench / ShareGPT** prompts (`huggingface.co/datasets/lmsys/mt_bench_human_judgments`, CC) for decode benchmarking; GSM8K for an equivalence check on structured outputs.

### Code stub
```python
# vLLM speculative decoding (draft model) + acceptance measurement
from vllm import LLM, SamplingParams
llm = LLM(model="Qwen3-8B-awq-int4", quantization="awq",
          speculative_config={"model": "Qwen/Qwen3-1.7B", "num_speculative_tokens": 5})
sp = SamplingParams(temperature=0, max_tokens=128)        # greedy -> exact-match check
out = llm.generate(prompts, sp)
# compare out.text to the non-speculative baseline (must be identical);
# read acceptance rate + per-step accepted length from llm metrics / Prometheus
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Mechanism grasp | Explains verify-in-parallel + acceptance + invariance | Partial | Treats as approximate |
| Measured gain | Latency↓ at batch 1, swept over batch | Single batch | No measurement |
| Equivalence | Greedy outputs proven identical | Claimed not shown | Outputs differ |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Leviathan, Kalman, Matias, *Fast Inference from Transformers via Speculative Decoding*, ICML 2023; Chen et al., *Accelerating LLM Decoding with Speculative Sampling* (DeepMind), 2023.
- Cai et al., *Medusa: Simple LLM Inference Acceleration with Multiple Decoding Heads*, ICML 2024.
- Li et al., *EAGLE-3: Scaling Inference Acceleration via Training-Time Test*, 2024–25.
- vLLM docs, *Speculative decoding configs* (0.8.x, 2025).

---

## Week 9 — Mixture-of-Experts: Sparse Models at Scale

**Altitude:** Specialist · **Anchor case:** run and serve an MoE model (e.g., Qwen3-MoE / Mixtral-style) and measure the active-vs-total parameter tradeoff and its serving implications.

### Learning goals
- Explain MoE: many expert FFNs, a router selecting top-k per token, so *active* params ≪ *total* params.
- Reason about the compute/memory tradeoff: cheap FLOPs per token, but all experts must fit in memory.
- Describe routing problems (load imbalance, token dropping) and the auxiliary load-balancing loss.
- Understand **expert parallelism** and why MoE serving is a memory-capacity and communication problem.

### Concept map
- **Sparse activation.** *Plain English:* each token uses only k of N experts, so you get a big model's capacity at a small model's per-token compute. *Formula:* active params ≈ `(k/N) · expert_params + shared`. Common mistake: assuming MoE is cheap to *serve* — you still must hold all experts in memory.
- **Router + top-k gating.** *Plain English:* a small network picks which experts handle each token. Common mistake: ignoring routing instability between training and inference.
- **Load balancing.** *Plain English:* without a balancing loss, a few experts get all tokens (others starve). Common mistake: dropping the aux loss → collapsed routing.
- **Expert parallelism.** Plain English: shard experts across GPUs; tokens are all-to-all routed. Where it matters: communication, not FLOPs, often bounds MoE serving. Common mistake: treating MoE like a dense model for capacity planning.

### Hands-on build
- Serve an MoE model on vLLM/SGLang; measure tokens/s and memory; compare *active* vs *total* params and the throughput vs a dense model of similar quality.
- Inspect router behavior on a batch: per-expert token counts (load balance) and the effect of top-k.
- **Deliverable:** an MoE analysis (active/total params, throughput, memory, routing-balance plot). **Acceptance:** you can explain, with measured numbers, why the MoE needs more memory but less compute per token than a dense peer, and show its expert load distribution.

### Harness / reusable skill — `$moe-analyze`
- **Purpose:** profile an MoE model's active/total params, serving cost, and routing balance to inform a deploy decision.
- **Inputs:** an MoE model + a batch. **Outputs:** active-vs-total param accounting, throughput/memory, an expert-load histogram.
- **Evidence artifact:** `evidence/week09-moe/moe-analysis.md`.
- **Design review #2 (8%-component):** an ADR for the serving stack + (if used) parallelism/MoE plan for the capstone.

### Common failure modes
- **"MoE is just cheaper"** → forgets memory capacity cost. *Fix:* account for total params in VRAM.
- **Ignoring load imbalance** → wasted experts, latency spikes. *Fix:* measure per-expert token counts.
- **Dense capacity planning for MoE** → undersized GPUs. *Fix:* plan for all experts + expert-parallel comms.
- **Top-k mis-set** → quality/cost imbalance. *Fix:* sweep k, measure quality vs throughput.

### Evidence artifact
`evidence/week09-moe/` (param accounting + throughput/memory + expert-load histogram + ADR-003).

### Skill sink-in
Predict the active-vs-total parameter ratio and the expert-load skew. Measure both. Record whether routing was as balanced as you assumed.

### Dataset(s)
**WikiText-2 / C4** sample for routing inspection; **MMLU** for the dense-vs-MoE quality-at-equal-throughput comparison. Model: `huggingface.co/Qwen/Qwen3-30B-A3B` (MoE) or `mistralai/Mixtral-8x7B` (Apache-2.0).

### Code stub
```python
# inspect MoE routing balance from a forward pass with output_router_logits
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
m = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-30B-A3B", torch_dtype=torch.bfloat16,
                                         device_map="auto", output_router_logits=True)
tok = AutoTokenizer.from_pretrained("Qwen/Qwen3-30B-A3B")
out = m(**tok(batch_texts, return_tensors="pt", padding=True).to(m.device))
# router_logits: tuple per layer -> [tokens, n_experts]; top-k argmax -> per-expert counts
counts = torch.zeros(n_experts)
for layer_logits in out.router_logits:
    top = layer_logits.topk(k=2, dim=-1).indices
    counts += torch.bincount(top.flatten().cpu(), minlength=n_experts)
print("expert load (should be roughly flat):", counts)
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| MoE understanding | Explains active/total + memory/comms tradeoff | Partial | "Just a big model" |
| Measurement | Throughput+memory+param accounting + routing | Missing one | None |
| Serving insight | Correct capacity/parallelism implication | Vague | Wrong |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Shazeer et al., *Outrageously Large Neural Networks: The Sparsely-Gated MoE Layer*, ICLR 2017.
- Fedus, Zoph, Shazeer, *Switch Transformers: Scaling to Trillion Parameter Models*, JMLR 2022.
- Jiang et al., *Mixtral of Experts*, 2024; DeepSeek-AI, *DeepSeek-V3 / DeepSeekMoE* technical reports, 2024–25.
- Stanford **CS336** "Mixture of Experts" lecture (2025); CMU **11-711** "MoE" (2025).

---

## Week 10 — Long-Context Efficiency

**Altitude:** Specialist · **Anchor case:** make `shrink-an-8B` viable at 128k context — KV-cache quantization, sliding-window/sparse attention, and the long-context-vs-RAG decision.

### Learning goals
- Explain why long context is dominated by KV-cache memory and attention cost, and enumerate the levers.
- Apply KV-cache compression: quantized KV (INT8/FP8), eviction (H2O/StreamingLLM), and sliding-window attention.
- Reason about position methods (RoPE scaling, YaRN) for extending context and their quality cost.
- Decide, with numbers, when long-context beats RAG and vice versa (cost, latency, accuracy).

### Concept map
- **KV-cache dominates long context.** *Plain English:* at 128k tokens the KV-cache can exceed the weights in memory. Common mistake: extending context length without budgeting KV memory.
- **KV-cache quantization & eviction.** *Plain English:* store KV in INT8/FP8, or drop low-attention tokens (StreamingLLM keeps sink + recent; H2O keeps heavy hitters). Common mistake: uniform eviction that drops tokens the model still attends to.
- **Sliding-window / sparse attention.** Plain English: attend only to a local window (+ a few global tokens) to cut O(n²). Common mistake: applying it to tasks that need full global attention.
- **RoPE scaling / YaRN.** Plain English: rescale rotary positions to generalize beyond the trained length. Common mistake: naive extrapolation → quality collapse past the training length.
- **Long-context vs RAG.** Plain English: stuff everything in context (simple, expensive, "lost-in-the-middle") vs retrieve the few relevant chunks (cheap, needs a retriever). Common mistake: paying 128k-context cost when 4k of retrieval suffices.

### Hands-on build
- Serve the 8B with **quantized KV-cache** (FP8) and **StreamingLLM/sliding-window**; measure max context per GB and throughput vs full-precision KV.
- Run a **lost-in-the-middle** probe and a long-context-vs-RAG cost/accuracy comparison on a long-doc QA task.
- **Deliverable:** a long-context efficiency report (max context/GB, quality vs KV-precision, LC-vs-RAG tradeoff). **Acceptance:** KV-cache quantization shown to raise max context per GB with a quantified quality delta, and a defended LC-vs-RAG recommendation backed by cost+accuracy numbers.

### Harness / reusable skill — `$longctx-budget`
- **Purpose:** find the cheapest way to hit a target context length under a quality floor (KV-quant/eviction/window/RAG).
- **Inputs:** a model + target context + quality floor + a long-doc task. **Outputs:** max-context-per-GB curve, quality deltas per lever, an LC-vs-RAG recommendation.
- **Evidence artifact:** `evidence/week10-longctx/longctx-report.md`.

### Common failure modes
- **Extending context, ignoring KV memory** → OOM. *Fix:* budget + quantize/evict KV.
- **Aggressive eviction** → drops needed tokens. *Fix:* keep attention sinks + heavy hitters, measure quality.
- **Naive RoPE extrapolation** → collapse past trained length. *Fix:* YaRN/position-interpolation, eval at target length.
- **Long-context when RAG is cheaper** → 10× cost. *Fix:* compare cost+accuracy before choosing.

### Evidence artifact
`evidence/week10-longctx/` (max-context/GB curve + KV-precision quality deltas + LC-vs-RAG decision).

### Skill sink-in
Predict whether long-context or RAG wins on cost *and* accuracy for your task. Run both. Record where the lines crossed.

### Dataset(s)
**LongBench v2** (`huggingface.co/datasets/THUDM/LongBench`, MIT) + **RULER** (`huggingface.co/datasets/nvidia/ruler` style) + **NarrativeQA** for lost-in-the-middle probing.

### Code stub
```python
# serve with FP8 KV-cache + sliding window; measure max context per GB
from vllm import LLM
llm = LLM(model="Qwen3-8B-awq-int4", quantization="awq",
          kv_cache_dtype="fp8",                 # quantized KV-cache
          max_model_len=131072, enable_chunked_prefill=True)
for seq in [16384, 65536, 131072]:
    try:
        out = llm.generate(make_long_prompt(seq), max_tokens=64)
        print(seq, "OK  peak GB:", gpu_peak_gb(), " quality:", eval_longqa(out))
    except RuntimeError as e:
        print(seq, "OOM -> need more KV compression"); break
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Lever understanding | Explains KV-quant/eviction/window/RoPE + tradeoffs | Two levers | One / vague |
| Measurement | Max-ctx/GB + quality per lever measured | Partial | None |
| LC-vs-RAG | Defended pick with cost+accuracy numbers | Pick, weak data | Assertion |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Xiao et al., *Efficient Streaming Language Models with Attention Sinks (StreamingLLM)*, ICLR 2024; Zhang et al., *H2O: Heavy-Hitter Oracle for KV-cache*, NeurIPS 2023.
- Peng et al., *YaRN: Efficient Context Window Extension of LLMs*, ICLR 2024.
- Liu et al., *Lost in the Middle: How Language Models Use Long Contexts*, TACL 2024.
- MIT **6.5940** "long-context / efficient LLM serving"; Hooper et al., *KVQuant*, NeurIPS 2024.

---

## Week 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism

**Altitude:** Specialist · **Anchor case:** scale `shrink-an-8B` beyond a single GPU — shard it with FSDP/ZeRO for training and split it with tensor/pipeline parallelism for serving a bigger model.

### Learning goals
- Explain the four parallelism axes — **data, tensor, pipeline, (expert)** — and what each shards and communicates.
- Use **FSDP2 / DeepSpeed ZeRO** (stages 1/2/3) to fit a model that doesn't fit on one GPU, and read the memory/comms tradeoff.
- Explain **tensor parallelism** (split each layer) and **pipeline parallelism** (split by layers + microbatching) for inference of large models.
- Diagnose distributed bottlenecks (communication overlap, bubble time, OOM) and pick a parallelism plan for a target model + hardware.

### Concept map
- **Data parallelism.** *Plain English:* replicate the model, split the batch, all-reduce gradients. Common mistake: using DP when the model itself doesn't fit (you need sharding).
- **ZeRO / FSDP sharding.** *Plain English:* shard optimizer state (Z1), gradients (Z2), and parameters (Z3) across GPUs, gathering on demand. *Tradeoff:* less memory, more communication. Common mistake: ZeRO-3 on a fast-enough setup where ZeRO-2 would avoid the comms cost.
- **Tensor parallelism.** *Plain English:* split each matmul across GPUs (column/row parallel), all-reduce within a layer. Where it matters: low-latency serving of models too big for one GPU. Common mistake: TP across slow interconnect (NVLink vs PCIe matters a lot).
- **Pipeline parallelism.** *Plain English:* place different layers on different GPUs, stream microbatches to fill the pipeline. *Bubble:* idle time at fill/drain. Common mistake: too-few microbatches → big bubble.
- **Choosing a plan.** Plain English: TP within a node (fast links), PP/DP across nodes; pick by model size, latency target, and interconnect. Common mistake: one-size-fits-all parallelism.

### Hands-on build
- Train/fine-tune the 8B with **FSDP2** (or DeepSpeed ZeRO-3) across 2+ GPUs; record peak memory per GPU and throughput vs single-GPU (where it even fits).
- Serve a larger model (e.g., 70B quantized) with **tensor parallelism** on vLLM (`--tensor-parallel-size`); measure latency vs TP degree and explain the comms cost.
- **Deliverable:** a parallelism report (memory/throughput vs strategy) + a "which plan for which model+hardware" decision table. **Acceptance:** you demonstrate fitting a model that does *not* fit on one GPU via sharding, and show how serving latency changes with TP degree, explaining the interconnect role.

### Harness / reusable skill — `$parallel-plan`
- **Purpose:** choose and validate a parallelism strategy (DP/FSDP-ZeRO/TP/PP) for a target model + hardware + latency goal.
- **Inputs:** model size + GPU count/interconnect + objective (train vs serve, latency vs throughput). **Outputs:** a recommended plan + measured memory/throughput + the bottleneck named.
- **Evidence artifact:** `evidence/week11-distributed/parallel-plan.md`.

### Common failure modes
- **DP when the model doesn't fit** → OOM. *Fix:* shard (ZeRO-3/FSDP) or TP.
- **ZeRO-3 everywhere** → comms-bound. *Fix:* lowest stage that fits; overlap comms with compute.
- **TP over slow links** → latency worse than a smaller model. *Fix:* TP within NVLink node, PP/DP across.
- **Too-few pipeline microbatches** → huge bubble. *Fix:* increase microbatches; balance stages.

### Evidence artifact
`evidence/week11-distributed/` (memory/throughput vs strategy + TP-degree latency curve + decision table).

### Skill sink-in
Predict the per-GPU memory savings of ZeRO-3 vs ZeRO-2 for the 8B. Measure both. Record the savings and the communication cost you paid for it.

### Dataset(s)
**OpenHermes-2.5 / Tulu-3** instruction data (`huggingface.co/datasets/allenai/tulu-3-sft-mixture`, ODC-BY) for the FSDP fine-tune; serving load from ShareGPT for the TP latency sweep.

### Code stub
```python
# FSDP2 sharded fine-tune (accelerate config) + TP serving (vLLM) — skeletons
# 1) Training: accelerate launch --config_file fsdp.yaml train.py
#    fsdp.yaml: fsdp_sharding_strategy: FULL_SHARD (ZeRO-3 equiv), fsdp_offload_params: false
from accelerate import Accelerator
acc = Accelerator()                      # picks up FSDP from the launch config
model, opt, dl = acc.prepare(model, opt, dataloader)
for batch in dl:
    loss = model(**batch).loss; acc.backward(loss); opt.step(); opt.zero_grad()
# 2) Serving a 70B across 4 GPUs with tensor parallelism:
#    vllm serve meta-llama/Llama-3.1-70B-Instruct --tensor-parallel-size 4 --quantization fp8
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Parallelism understanding | Explains all 4 axes + when to use each | 2–3 axes | One axis |
| Demonstrated scaling | Fits an un-fittable model; TP latency curve shown | One of the two | Neither |
| Plan quality | Decision table matches model+hardware+goal | Generic plan | Wrong/absent |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Rajbhandari et al., *ZeRO: Memory Optimizations Toward Training Trillion Parameter Models*, SC 2020.
- Zhao et al., *PyTorch FSDP: Experiences on Scaling Fully Sharded Data Parallel*, VLDB 2023.
- Shoeybi et al., *Megatron-LM: Training Multi-Billion Parameter LMs Using Model Parallelism*, 2019/2021 (tensor parallel); Narayanan et al., *PipeDream / pipeline parallelism*, SOSP 2019.
- Stanford **CS336** "parallelism (data/tensor/pipeline)"; HuggingFace *Ultra-Scale Playbook* (2025).

---

## Week 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint

**Altitude:** Specialist · **Anchor case:** your own model, taken the full efficiency distance, with a defended deployment recommendation.

### Learning goals
- Integrate the course into one end-to-end efficiency pipeline: profile → quantize → kernel/attention optimize → serve → speculate → benchmark.
- Produce a single **Pareto frontier** (quality vs latency vs cost) across every technique and defend one operating point.
- Make a deployment recommendation grounded entirely in measured numbers with hardware disclosed and error bars.

### Capstone spec
Take one open model from a vanilla **FP16** checkpoint to a **quantized, optimized, served** endpoint and produce the efficiency report. Required:
1. **Profile** the FP16 baseline (bottleneck + memory budget) and record baseline latency/throughput/cost/quality.
2. **Quantize** (≥2 methods, e.g., AWQ INT4 + FP8) with a verified quality eval (fixed MMLU/GSM8K subset).
3. **Attention/KV** optimization (FlashAttention + paged/quantized KV) with a long-context measurement.
4. **Serve** on a chosen engine (vLLM/SGLang/TensorRT-LLM) with continuous batching; benchmark TTFT/ITL/throughput across concurrency.
5. **Speculative decoding** with an output-equivalence check and a measured decode-latency win.
6. **(Choose one) MoE analysis OR a distributed/parallel serving demo** appropriate to your model size.
7. **Pareto report:** one chart of quality vs latency vs cost for every variant, plus a $/1M-tokens table.

### Milestones
- **M1:** baseline profiled + memory budget + fixed eval harness wired (`lm-eval-harness`).
- **M2:** quantized variants produced + quality-verified + served on the chosen engine.
- **M3:** attention/KV + speculative decoding + concurrency benchmark complete.
- **M4 (demo):** Pareto frontier + cost table + a one-page deployment recommendation defended against the numbers.

### Acceptance checklist
- [ ] Every number lists **hardware, precision, batch/concurrency, warmup, repeats, and spread** (no naked numbers).
- [ ] At least one variant hits **≥98% of FP16 quality** at a **measured** latency/cost win.
- [ ] The **served** speedup (not offline) is demonstrated with `benchmark_serving.py`/GuideLLM.
- [ ] Speculative decoding output equivalence is **proven** (greedy match), with the acceptance rate reported.
- [ ] The **Pareto chart** makes the chosen operating point obviously defensible.
- [ ] A **$/1M-tokens** figure is computed for the recommended deployment.

### Harness / reusable skill — `$efficiency-report`
- **Purpose:** assemble all nine skills into one reproducible Pareto-frontier efficiency report + deployment recommendation.
- **Inputs:** a model + a quality eval + a target SLO/budget. **Outputs:** the Pareto chart, the cost table, the defended recommendation, and the full benchmarking method.
- **Evidence artifact:** `capstone/efficiency-report.md` (this *is* the deliverable).

### Common failure modes
- **Naked numbers** (no hardware/warmup/repeats). *Fix:* a benchmarking method section + error bars on every figure.
- **Offline-only "speedups."** *Fix:* prove it on the actual server under load.
- **Quality unverified after optimizing.** *Fix:* re-eval every variant on the fixed set; show the deltas.
- **A recommendation that ignores cost.** *Fix:* the pick must be defended on the Pareto frontier *and* $/1M tokens.

### Evidence artifact
`capstone/` — the pipeline repo + `efficiency-report.md` (Pareto chart, cost table, method, recommendation).

### Skill sink-in
Before the final benchmark, write down the operating point (quality/latency/cost) you expect to recommend. Run the full sweep. The distance between your guess and the Pareto frontier is the capstone's real lesson — record it.

### Dataset(s)
**MMLU + GSM8K** (quality, fixed subsets), **ShareGPT/LMSYS-Chat-1M** (serving load), **LongBench** (long-context) — all reused from earlier weeks for a consistent, comparable report. Model: student-chosen open weights with a stated license.

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Coverage | All 7 capstone components, measured | 5–6 components | ≤4 |
| Benchmark rigor | Hardware/warmup/repeats/spread on every number | Mostly disclosed | Naked numbers |
| Quality verification | Every variant eval'd; ≥98% point found | Some eval'd | Unverified |
| Served reality | End-to-end served speedup proven | Offline-only | None |
| Decision quality | Pareto + $/1M-tokens-defended recommendation | Pick, partial evidence | Assertion |

**Assessment weight:** 28% of course grade (capstone bucket; weekly labs sum to 58%, design reviews 8%, benchmarking hygiene 6%).

### Readings & sources
- Dao et al. (FlashAttention 1–3), Kwon et al. (PagedAttention/vLLM), Lin et al. (AWQ), Leviathan et al. (speculative decoding) — the capstone's primary toolbox, re-read as an integrated system.
- MIT **6.5940** efficient-serving capstone framing (2024); CMU **11-868** end-to-end LLM-systems project (2025); Stanford **CS336** resource-accounting discipline (2025).
- Neural Magic **GuideLLM** + vLLM `benchmark_serving` docs (2025) — the benchmarking method reference.

---

## Course-level outcomes

By the end you can take a model from an FP16 checkpoint to a **quantized, kernel-aware, continuously-batched, speculatively-decoded, served** endpoint — and **prove** every gain with a profile, a benchmark, a quality eval, and a cost figure, on disclosed hardware. You leave with a reusable efficiency harness:

`$gpu-profile` · `$precision-sweep` · `$quantize-and-verify` · `$lowbit-serve` · `$compress-verify` · `$attention-bench` · `$serving-engine-bench` · `$spec-decode` · `$moe-analyze` · `$longctx-budget` · `$parallel-plan` · `$efficiency-report`

These compose directly with Subject 09's production harness: the endpoints you containerized, gated, and monitored there are now the ones you quantize, batch, and benchmark here — efficiency and operations as two halves of shipping real AI systems.
