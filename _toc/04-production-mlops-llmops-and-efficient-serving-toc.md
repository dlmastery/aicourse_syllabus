# Detailed Table of Contents — Production AI: MLOps, LLMOps, AgentOps & Efficient Serving

_`04-production-mlops-llmops-and-efficient-serving.md` · **1 quarter-track · 3 lecture-hrs/week · 24 lectures across 2 parts (~72 contact hrs)**. Every lecture has a ▶ practical project + State-of-the-Art with links._

## Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production

### Week 1 — The Production Mindset & Containerizing a Model
_3-hour block · 🔧 `$repro-image` · ▶ [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use its containerized end-to-end template as the base for the `fullstack-ai-platform` monorepo and the slim `eta-model` image._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Reproducible artifact |
| 00:30–01:00 | M2 | Image layers & build cache |
| 01:00–01:30 | M3 | Twelve-factor for ML |
| 01:30–02:00 | M4 | MLOps maturity (Google's levels 0/1/2) |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use its containerized end-to-end template as the base for the `fullstack-ai-platform` monorepo and the slim `eta-model` image. |

### Week 2 — Orchestration: Kubernetes & Serverless GPU
_3-hour block · 🔧 `$k8s-deploy` · ▶ [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/scale modules to take the `eta-model` image to a probed, autoscaled Deployment and a serverless-GPU comparison._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Desired-state reconciliation |
| 00:30–01:00 | M2 | Liveness vs readiness |
| 01:00–01:30 | M3 | Requests vs limits |
| 01:30–02:00 | M4 | Scale-to-zero |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/scale modules to take the `eta-model` image to a probed, autoscaled Deployment and a serverless-GPU comparison. |

### Week 3 — Data Pipelines & Versioning: Airflow, DVC, Feature Stores
_3-hour block · 🔧 `$data-contract` · ▶ [`krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project`](https://github.com/krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project) — mirror its DVC pipeline as the data/model-versioning reference for the `delivery-eta` features._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | DAG idempotency |
| 00:30–01:00 | M2 | Data versioning (DVC) |
| 01:00–01:30 | M3 | Train/serve skew |
| 01:30–02:00 | M4 | Data contract |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project`](https://github.com/krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project) — mirror its DVC pipeline as the data/model-versioning reference for the `delivery-eta` features. |

### Week 4 — Experiment Tracking, Model Registry & Reproducible Training
_3-hour block · 🔧 `$run-ledger` · ▶ [`DataTalksClub/mlops-zoomcamp`](https://github.com/DataTalksClub/mlops-zoomcamp) — follow its experiment-tracking module (W&B/MLflow) to log the `delivery-eta` sweep and promote a registry version with lineage._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Experiment vs run vs artifact |
| 00:30–01:00 | M2 | Model registry & stages |
| 01:00–01:30 | M3 | Lineage |
| 01:30–02:00 | M4 | Sweep/HPO |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`DataTalksClub/mlops-zoomcamp`](https://github.com/DataTalksClub/mlops-zoomcamp) — follow its experiment-tracking module (W&B/MLflow) to log the `delivery-eta` sweep and promote a registry version with lineage. |

### Week 5 — Model Serving I: FastAPI, vLLM & Triton
_3-hour block · 🔧 `$serve-bench` · ▶ [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — study its Modal + vLLM serving stack to stand up and benchmark the `support-copilot` LLM endpoint._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Online vs offline/batch inference |
| 00:30–01:00 | M2 | Continuous batching (vLLM) |
| 01:00–01:30 | M3 | Throughput vs latency tradeoff |
| 01:30–02:00 | M4 | Backpressure |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — study its Modal + vLLM serving stack to stand up and benchmark the `support-copilot` LLM endpoint. |

### Week 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)
_3-hour block · 🔧 `$eval-gate` · ▶ [`promptfoo/promptfoo`](https://github.com/promptfoo/promptfoo) — build the offline eval suite and wire it as the CI gate that blocks a regressing copilot prompt PR._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | CI vs CD vs CT |
| 00:30–01:00 | M2 | Eval-gated deploy |
| 01:00–01:30 | M3 | Prompt as code |
| 01:30–02:00 | M4 | Golden/regression set |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`promptfoo/promptfoo`](https://github.com/promptfoo/promptfoo) — build the offline eval suite and wire it as the CI gate that blocks a regressing copilot prompt PR. |

### Week 7 — LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control
_3-hour block · 🔧 `$llm-gateway` · ▶ [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production LLMOps patterns (gateway, caching, cost control) to route the copilot through LiteLLM with budgets._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | LLM gateway |
| 00:30–01:00 | M2 | Semantic cache |
| 01:00–01:30 | M3 | Model routing / escalation |
| 01:30–02:00 | M4 | Cost as a first-class SLO |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production LLMOps patterns (gateway, caching, cost control) to route the copilot through LiteLLM with budgets. |

### Week 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry
_3-hour block · 🔧 `$trace-debug` · ▶ [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument the copilot with OTel spans (retrieve / tools / LLM) carrying token and cost attributes._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Traces vs metrics vs logs |
| 00:30–01:00 | M2 | Span & attributes |
| 01:00–01:30 | M3 | RED + LLM metrics |
| 01:30–02:00 | M4 | Trace-linked eval |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument the copilot with OTel spans (retrieve / tools / LLM) carrying token and cost attributes. |

### Week 9 — Monitoring, Drift Detection & Alerting in Production
_3-hour block · 🔧 `$drift-watch` · ▶ [`evidentlyai/evidently`](https://github.com/evidentlyai/evidently) — use its drift detectors and reference datasets to monitor `delivery-eta` feature drift and fire one actionable alert._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data vs concept drift; Proxy quality signals for LLMs |
| 00:30–01:00 | M2 | SLI/SLO/error budget |
| 01:00–01:30 | M3 | Delayed labels |
| 01:30–02:00 | M4 | RAG-lifecycle drift |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`evidentlyai/evidently`](https://github.com/evidentlyai/evidently) — use its drift detectors and reference datasets to monitor `delivery-eta` feature drift and fire one actionable alert. |

### Week 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates
_3-hour block · 🔧 `$safe-release` · ▶ [`argoproj/argo-rollouts`](https://github.com/argoproj/argo-rollouts) — configure a canary with an AnalysisTemplate so a deliberately-bad version auto-rolls-back on SLO/eval breach._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Shadow mode |
| 00:30–01:00 | M2 | Canary + automated analysis |
| 01:00–01:30 | M3 | Blue-green vs rolling |
| 01:30–02:00 | M4 | HITL gate |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`argoproj/argo-rollouts`](https://github.com/argoproj/argo-rollouts) — configure a canary with an AnalysisTemplate so a deliberately-bad version auto-rolls-back on SLO/eval breach. |

### Week 11 — AgentOps: Operating Multi-Step Agent Systems in Production
_3-hour block · 🔧 `$agent-ops` · ▶ [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to refactor the copilot into a traced LangGraph agent with budget/loop/injection guardrails._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Trajectory non-determinism; Tool side-effects & blast radius |
| 00:30–01:00 | M2 | Loop/cost runaway |
| 01:00–01:30 | M3 | Prompt injection / tool poisoning |
| 01:30–02:00 | M4 | Agent memory |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to refactor the copilot into a traced LangGraph agent with budget/loop/injection guardrails. |

### Week 12 — Capstone: One Model + One Agent, Notebook → Monitored Production
_3-hour block · 🔧 `$production-readiness-review` · ▶ [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its end-to-end structure as the integration reference for taking your model + agent to monitored production._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its end-to-end structure as the integration reference for taking your model + agent to monitored production. |

## Part B — Efficient AI: Quantization, Serving & Systems

### Week 1 — The GPU Execution & Memory Model (and How to Profile It)
_3-hour block · 🔧 `$gpu-profile` · ▶ [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — instrument and profile a served model's forward pass to classify the memory- vs compute-bound bottleneck._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Memory-bound vs compute-bound |
| 00:30–01:00 | M2 | GPU memory hierarchy |
| 01:00–01:30 | M3 | Roofline model |
| 01:30–02:00 | M4 | The memory budget of an LLM |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — instrument and profile a served model's forward pass to classify the memory- vs compute-bound bottleneck. |

### Week 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter
_3-hour block · 🔧 `$precision-sweep` · ▶ [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — run BF16/FP16 mixed-precision training and reproduce (then fix) an FP16-overflow→NaN._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Range vs precision |
| 00:30–01:00 | M2 | Mixed precision |
| 01:00–01:30 | M3 | FP8 (E4M3/E5M2) |
| 01:30–02:00 | M4 | Dynamic range & scaling |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — run BF16/FP16 mixed-precision training and reproduce (then fix) an FP16-overflow→NaN. |

### Week 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant
_3-hour block · 🔧 `$quantize-and-verify` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its quantization notebooks (GPTQ/AWQ/GGUF) to quantize the 8B and re-eval quality._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PTQ vs QAT; Quantization granularity |
| 00:30–01:00 | M2 | AWQ |
| 01:00–01:30 | M3 | SmoothQuant |
| 01:30–02:00 | M4 | Calibration set |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its quantization notebooks (GPTQ/AWQ/GGUF) to quantize the 8B and re-eval quality. |

### Week 4 — QAT, Low-Bit Frontiers & Serving Quantized Models
_3-hour block · 🔧 `$lowbit-serve` · ▶ [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — QLoRA-fine-tune a 4-bit base on one GPU, then merge and serve the result._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | QAT & the straight-through estimator; NF4 + QLoRA |
| 00:30–01:00 | M2 | Served vs offline speedup |
| 01:00–01:30 | M3 | Low-bit cliff |
| 01:30–02:00 | M4 | On-device / private SLM deployment |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — QLoRA-fine-tune a 4-bit base on one GPU, then merge and serve the result. |

### Week 5 — Pruning, Sparsity, Distillation & NAS
_3-hour block · 🔧 `$compress-verify` · ▶ [`VizuaraAILabs/Tiny-Stories-Regional`](https://github.com/VizuaraAILabs/Tiny-Stories-Regional) — train a small distilled-scale LM and compare it against a from-scratch same-size twin._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Unstructured vs structured pruning; 2:4 sparsity |
| 00:30–01:00 | M2 | Distillation |
| 01:00–01:30 | M3 | SparseGPT / Wanda |
| 01:30–02:00 | M4 | NAS / once-for-all |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/Tiny-Stories-Regional`](https://github.com/VizuaraAILabs/Tiny-Stories-Regional) — train a small distilled-scale LM and compare it against a from-scratch same-size twin. |

### Week 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention
_3-hour block · 🔧 `$attention-bench` · ▶ [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — measure KV-cache growth and the FlashAttention/paged-KV win across 1k/8k/32k context._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Naive attention is IO-bound |
| 00:30–01:00 | M2 | FlashAttention (tiling + online softmax) |
| 01:00–01:30 | M3 | KV-cache |
| 01:30–02:00 | M4 | PagedAttention |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — measure KV-cache growth and the FlashAttention/paged-KV win across 1k/8k/32k context. |

### Week 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM
_3-hour block · 🔧 `$serving-engine-bench` · ▶ [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — serve on Modal + vLLM and benchmark continuous batching / TTFT / ITL across concurrency._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prefill vs decode |
| 00:30–01:00 | M2 | Continuous batching |
| 01:00–01:30 | M3 | TTFT vs ITL vs throughput |
| 01:30–02:00 | M4 | Prefix caching / RadixAttention |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — serve on Modal + vLLM and benchmark continuous batching / TTFT / ITL across concurrency. |

### Week 8 — Speculative & Parallel Decoding
_3-hour block · 🔧 `$spec-decode` · ▶ [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — configure speculative decoding (draft / EAGLE) and measure acceptance rate + decode-latency win._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why decode is slow |
| 00:30–01:00 | M2 | Speculative decoding (verify-in-parallel) |
| 01:00–01:30 | M3 | Acceptance rate |
| 01:30–02:00 | M4 | Medusa / EAGLE |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — configure speculative decoding (draft / EAGLE) and measure acceptance rate + decode-latency win. |

### Week 9 — Mixture-of-Experts: Sparse Models at Scale
_3-hour block · 🔧 `$moe-analyze` · ▶ [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — inspect MLA/MoE routing and per-expert load on a from-scratch MoE._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Sparse activation |
| 00:30–01:00 | M2 | Router + top-k gating |
| 01:00–01:30 | M3 | Load balancing |
| 01:30–02:00 | M4 | Expert parallelism |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — inspect MLA/MoE routing and per-expert load on a from-scratch MoE. |

### Week 10 — Long-Context Efficiency
_3-hour block · 🔧 `$longctx-budget` · ▶ [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — push toward 128k with FP8 KV + eviction and run a long-context-vs-RAG cost comparison._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | KV-cache dominates long context; KV-cache quantization & eviction |
| 00:30–01:00 | M2 | Sliding-window / sparse attention |
| 01:00–01:30 | M3 | RoPE scaling / YaRN |
| 01:30–02:00 | M4 | Long-context vs RAG |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — push toward 128k with FP8 KV + eviction and run a long-context-vs-RAG cost comparison. |

### Week 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism
_3-hour block · 🔧 `$parallel-plan` · ▶ [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/CP/EP sharding on multi-GPU and read the memory/comms tradeoff._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data parallelism; ZeRO / FSDP sharding |
| 00:30–01:00 | M2 | Tensor parallelism |
| 01:00–01:30 | M3 | Pipeline parallelism |
| 01:30–02:00 | M4 | Choosing a plan |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/CP/EP sharding on multi-GPU and read the memory/comms tradeoff. |

### Week 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint
_3-hour block · 🔧 `$efficiency-report` · ▶ [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — take a model FP16 → quantized → served → benchmarked end-to-end as the capstone reference._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — take a model FP16 → quantized → served → benchmarked end-to-end as the capstone reference. |

