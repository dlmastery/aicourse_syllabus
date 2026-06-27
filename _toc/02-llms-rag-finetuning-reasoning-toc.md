# Detailed Table of Contents — Large Language Models: Pretraining, RAG, Fine-Tuning & Reasoning

_`02-llms-rag-finetuning-reasoning.md` · **1 quarter-track · 3 lecture-hrs/week · 43 lectures across 4 parts (~129 contact hrs)**. Every lecture has a ▶ practical project + State-of-the-Art with links._

## Part A — Large Language Models: Pretraining → Post-Training

### Week 1 — The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run)
_3-hour block · 🔧 `$lifecycle-map` · ▶ [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — stand up a tiny gpt-oss pretraining run and annotate where each later week plugs into the lifecycle._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Pretraining objective |
| 00:30–01:00 | M2 | The lifecycle as stages with different objectives |
| 01:00–01:30 | M3 | Compute/throughput accounting |
| 01:30–02:00 | M4 | Reproducibility at scale |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — stand up a tiny gpt-oss pretraining run and annotate where each later week plugs into the lifecycle. |

### Week 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID
_3-hour block · 🔧 `$data-funnel` · ▶ [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its data-prep stage (extraction/filtering) and emit a retention funnel with sampled drops._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Extraction |
| 00:30–01:00 | M2 | Quality filtering |
| 01:00–01:30 | M3 | Language identification |
| 01:30–02:00 | M4 | Provenance & licensing |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its data-prep stage (extraction/filtering) and emit a retention funnel with sampled drops. |

### Week 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training
_3-hour block · 🔧 `$dedup-decontam` · ▶ [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its tokenizer-training stage, then layer in MinHash dedup + n-gram decontamination and measure the duplicate rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Exact dedup |
| 00:30–01:00 | M2 | Near-dup (MinHash + LSH) |
| 01:00–01:30 | M3 | Decontamination |
| 01:30–02:00 | M4 | Tokenizer quality |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its tokenizer-training stage, then layer in MinHash dedup + n-gram decontamination and measure the duplicate rate. |

### Week 4 — Architecture, Hyperparameters, and Scaling Laws
_3-hour block · 🔧 `$scaling-fit` · ▶ [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — build the modern decoder (RoPE/RMSNorm/SwiGLU/MoE) and fit a small scaling law across sizes._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RoPE |
| 00:30–01:00 | M2 | RMSNorm + SwiGLU |
| 01:00–01:30 | M3 | GQA (grouped-query attention) |
| 01:30–02:00 | M4 | Scaling laws / Chinchilla |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — build the modern decoder (RoPE/RMSNorm/SwiGLU/MoE) and fit a small scaling law across sizes. |

### Week 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO
_3-hour block · 🔧 `$distributed-profiler` · ▶ [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/FSDP across GPUs and measure scaling efficiency + MFU._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data parallel (DDP) |
| 00:30–01:00 | M2 | ZeRO / FSDP sharding |
| 01:00–01:30 | M3 | Tensor & pipeline parallel |
| 01:30–02:00 | M4 | MFU & scaling efficiency |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/FSDP across GPUs and measure scaling efficiency + MFU. |

### Week 6 — Mixture-of-Experts and Long-Context Pretraining
_3-hour block · 🔧 `$moe-router-monitor` · ▶ [`VizuaraAI/Mixture_of_Experts`](https://github.com/VizuaraAI/Mixture_of_Experts) — implement a top-k MoE FFN + load-balancing loss and track expert utilization._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | MoE FFN |
| 00:30–01:00 | M2 | Load-balancing loss |
| 01:00–01:30 | M3 | Capacity factor |
| 01:30–02:00 | M4 | Long context |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/Mixture_of_Experts`](https://github.com/VizuaraAI/Mixture_of_Experts) — implement a top-k MoE FFN + load-balancing loss and track expert utilization. |

### Week 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint
_3-hour block · 🔧 `$benchmark-runner` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its evaluation notebooks (lm-eval-harness) on your base model and reproduce a published number with CIs._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Perplexity vs capability |
| 00:30–01:00 | M2 | Benchmark formats |
| 01:00–01:30 | M3 | Contamination & emergence |
| 01:30–02:00 | M4 | Reproduction discipline |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its evaluation notebooks (lm-eval-harness) on your base model and reproduce a published number with CIs. |

### Week 8 — Supervised Fine-Tuning & Instruction Tuning
_3-hour block · 🔧 `$sft-recipe` · ▶ [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run SFT + LoRA/QLoRA on an instruction set with proper chat templating and loss masking._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | SFT objective |
| 00:30–01:00 | M2 | Chat templating |
| 01:00–01:30 | M3 | LoRA / QLoRA |
| 01:30–02:00 | M4 | Data quality > quantity |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run SFT + LoRA/QLoRA on an instruction set with proper chat templating and loss masking. |

### Week 9 — Reward Modeling & RLHF (PPO)
_3-hour block · 🔧 `$rlhf-monitor` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — train a Bradley-Terry reward model and run PPO RLHF from its post-training notebooks, watching reward/KL._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Bradley-Terry reward model |
| 00:30–01:00 | M2 | RLHF/PPO objective |
| 01:00–01:30 | M3 | Value function / advantage |
| 01:30–02:00 | M4 | Reward hacking |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — train a Bradley-Terry reward model and run PPO RLHF from its post-training notebooks, watching reward/KL. |

### Week 10 — Direct Preference Optimization: DPO, ORPO, KTO
_3-hour block · 🔧 `$preference-align-bench` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — align your SFT model with DPO (and contrast ORPO/KTO) using its preference-optimization notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | DPO |
| 00:30–01:00 | M2 | ORPO |
| 01:00–01:30 | M3 | KTO |
| 01:30–02:00 | M4 | DPO vs RLHF |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — align your SFT model with DPO (and contrast ORPO/KTO) using its preference-optimization notebook. |

### Week 11 — RL for Reasoning: GRPO and Verifiable Rewards
_3-hour block · 🔧 `$verifiable-reward` · ▶ [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement GRPO with verifiable rewards on a math task, adding format + correctness rewards._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | GRPO |
| 00:30–01:00 | M2 | Verifiable reward (RLVR) |
| 01:00–01:30 | M3 | Test-time compute |
| 01:30–02:00 | M4 | Format + correctness rewards |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement GRPO with verifiable rewards on a math task, adding format + correctness rewards. |

### Week 12 — Long-Context, Safety Fine-Tuning, and Serving
_3-hour block · 🔧 `$safety-serving-audit` · ▶ [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your model with vLLM + KV-cache, measure latency, and add input/output guardrails._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-context extension |
| 00:30–01:00 | M2 | Safety fine-tuning |
| 01:00–01:30 | M3 | Red-teaming |
| 01:30–02:00 | M4 | Efficient serving |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your model with vLLM + KV-cache, measure latency, and add input/output guardrails. |

### Week 13 — Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet
_3-hour block · 🔧 `$lifecycle-evidence-packet` · ▶ [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — use its full ~350M domain-SLM pipeline as the capstone template for your pretrain → post-train evidence packet._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — use its full ~350M domain-SLM pipeline as the capstone template for your pretrain → post-train evidence packet. |

## Part B — Retrieval-Augmented Generation & Knowledge Systems

### Week 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline
_3-hour block · 🔧 `$rag-baseline` · ▶ [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — clone the intro RAG notebook and rebuild it as your load→chunk→embed→retrieve→generate baseline over the AcmeCorp wiki._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The RAG loop |
| 00:30–01:00 | M2 | Embedding |
| 01:00–01:30 | M3 | Cosine similarity |
| 01:30–02:00 | M4 | Top-k retrieval & context stuffing |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — clone the intro RAG notebook and rebuild it as your load→chunk→embed→retrieve→generate baseline over the AcmeCorp wiki. |

### Week 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality
_3-hour block · 🔧 `$chunk-strategist` · ▶ [`krishnaik06/Updated-Langchain`](https://github.com/krishnaik06/Updated-Langchain) — use its document-loader and text-splitter modules to implement and compare fixed/recursive/semantic chunkers on the PDF policy pack._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chunk |
| 00:30–01:00 | M2 | Recursive splitting |
| 01:00–01:30 | M3 | Semantic chunking |
| 01:30–02:00 | M4 | Structure-aware & parent/child |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Updated-Langchain`](https://github.com/krishnaik06/Updated-Langchain) — use its document-loader and text-splitter modules to implement and compare fixed/recursive/semantic chunkers on the PDF policy pack. |

### Week 3 — Vector Databases: Indexes, ANN, and Choosing Your Store
_3-hour block · 🔧 `$vectordb-selector` · ▶ [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — port one of its RAG apps across Chroma/Qdrant/pgvector and benchmark recall@10 vs p95 latency._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ANN vs exact search |
| 00:30–01:00 | M2 | HNSW |
| 01:00–01:30 | M3 | Metadata filtering |
| 01:30–02:00 | M4 | Distance metric must match training |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — port one of its RAG apps across Chroma/Qdrant/pgvector and benchmark recall@10 vs p95 latency. |

### Week 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top
_3-hour block · 🔧 `$retriever-stack` · ▶ [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — run its fusion-retrieval and reranking notebooks (BM25+dense+RRF → Cohere/BGE rerank) on your corpus and measure the per-stage lift._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | BM25 |
| 00:30–01:00 | M2 | Dense vs sparse failure modes |
| 01:00–01:30 | M3 | Reciprocal Rank Fusion |
| 01:30–02:00 | M4 | Cross-encoder reranker |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — run its fusion-retrieval and reranking notebooks (BM25+dense+RRF → Cohere/BGE rerank) on your corpus and measure the per-stage lift. |

### Week 5 — Late Interaction & ColBERT: Token-Level Retrieval
_3-hour block · 🔧 `$late-interaction-eval` · ▶ [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — adapt its late-interaction/ColBERT recipe and compare nDCG@10 and index size to your Week-4 hybrid+rerank stack._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Single-vector bottleneck |
| 00:30–01:00 | M2 | Late interaction (ColBERT) |
| 01:00–01:30 | M3 | PLAID / compression |
| 01:30–02:00 | M4 | When to use it |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — adapt its late-interaction/ColBERT recipe and compare nDCG@10 and index size to your Week-4 hybrid+rerank stack. |

### Week 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness
_3-hour block · 🔧 `$rag-eval` · ▶ [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — wire its evaluation notebooks to RAGAS and compute faithfulness + context precision/recall on the frozen gold set._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Retrieval metrics |
| 00:30–01:00 | M2 | Context precision/recall (Ragas) |
| 01:00–01:30 | M3 | Faithfulness / groundedness |
| 01:30–02:00 | M4 | LLM-as-judge validity |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — wire its evaluation notebooks to RAGAS and compute faithfulness + context precision/recall on the frozen gold set. |

### Week 7 — Advanced RAG I: HyDE, CRAG & Self-RAG
_3-hour block · 🔧 `$rag-ablation` · ▶ [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build HyDE/CRAG/Self-RAG as LangGraph nodes and ablate each against the Week-6 eval._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | HyDE |
| 00:30–01:00 | M2 | CRAG |
| 01:00–01:30 | M3 | Self-RAG |
| 01:30–02:00 | M4 | Adaptive retrieval |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build HyDE/CRAG/Self-RAG as LangGraph nodes and ablate each against the Week-6 eval. |

### Week 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL
_3-hour block · 🔧 `$knowledge-router` · ▶ [`run-llama/llama_index`](https://github.com/run-llama/llama_index) — use its GraphRAG, query-router, and Text2SQL modules to route multi-hop / global / analytical queries to the right backend._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Agentic RAG |
| 00:30–01:00 | M2 | GraphRAG |
| 01:00–01:30 | M3 | Text2SQL |
| 01:30–02:00 | M4 | Query routing |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`run-llama/llama_index`](https://github.com/run-llama/llama_index) — use its GraphRAG, query-router, and Text2SQL modules to route multi-hop / global / analytical queries to the right backend. |

### Week 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails
_3-hour block · 🔧 `$rag-prod-harness` · ▶ [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production RAG service to add semantic caching, injection guardrails, and a measured p95/cost SLA._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-context vs RAG; Semantic caching |
| 00:30–01:00 | M2 | Prompt injection via retrieved content |
| 01:00–01:30 | M3 | Grounding/citation guardrail |
| 01:30–02:00 | M4 | RAG lifecycle & retrieval drift |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production RAG service to add semantic caching, injection guardrails, and a measured p95/cost SLA. |

### Week 10 — Capstone: A Production Document-QA / Knowledge Portal
_3-hour block · 🔧 `$rag-evidence-packet` · ▶ [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — fork a full RAG app and extend it into your routed, guarded, eval-gated knowledge portal._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — fork a full RAG app and extend it into your routed, guarded, eval-gated knowledge portal. |

## Part C — Fine-Tuning & Model Adaptation

### Week 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)
_3-hour block · 🔧 `$adaptation-decision` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its prompt-vs-RAG-vs-fine-tune material to build the strong prompted baseline + cost model before any GPU time._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | What fine-tuning is for |
| 00:30–01:00 | M2 | The decision ladder |
| 01:00–01:30 | M3 | Catastrophic forgetting |
| 01:30–02:00 | M4 | Baseline economics |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its prompt-vs-RAG-vs-fine-tune material to build the strong prompted baseline + cost model before any GPU time. |

### Week 2 — Data Preparation & Formatting: The 80% That Decides the Outcome
_3-hour block · 🔧 `$sft-data-prep` · ▶ [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — follow its data pipeline to format, dedup, and decontaminate your domain SFT set with a defensible dataset card._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chat template & loss masking |
| 00:30–01:00 | M2 | Decontamination |
| 01:00–01:30 | M3 | Data quality > quantity |
| 01:30–02:00 | M4 | Packing |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — follow its data pipeline to format, dedup, and decontaminate your domain SFT set with a defensible dataset card. |

### Week 3 — PEFT I: LoRA From the Math Up
_3-hour block · 🔧 `$lora-trainer` · ▶ [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run its LoRA SFT notebook on an 8B base and beat the Week-1 prompted baseline on format compliance._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | LoRA |
| 00:30–01:00 | M2 | Rank r and alpha |
| 01:00–01:30 | M3 | Why it works |
| 01:30–02:00 | M4 | Merging vs keeping separate |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run its LoRA SFT notebook on an 8B base and beat the Week-1 prompted baseline on format compliance. |

### Week 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU
_3-hour block · 🔧 `$qlora-trainer` · ▶ [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — switch its config to 4-bit QLoRA and measure the memory / throughput / quality tradeoff vs Week-3 full-precision LoRA._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Quantization (training-time) |
| 00:30–01:00 | M2 | Double quantization & paged optimizers |
| 01:00–01:30 | M3 | Quality tax |
| 01:30–02:00 | M4 | NF4 vs other 4-bit |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — switch its config to 4-bit QLoRA and measure the memory / throughput / quality tradeoff vs Week-3 full-precision LoRA. |

### Week 5 — Preference Optimization I: DPO and the RLHF Lineage
_3-hour block · 🔧 `$preference-tuner` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its DPO notebook on your SFT checkpoint and report length-controlled win-rate over the SFT model._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLHF (for context) |
| 00:30–01:00 | M2 | DPO |
| 01:00–01:30 | M3 | β / KL anchor |
| 01:30–02:00 | M4 | Preference data quality |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its DPO notebook on your SFT checkpoint and report length-controlled win-rate over the SFT model. |

### Week 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective
_3-hour block · 🔧 `$preference-method-selector` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its preference-alignment notebooks to run ORPO + KTO and pick an objective by your actual data shape._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Bradley-Terry backbone |
| 00:30–01:00 | M2 | ORPO |
| 01:00–01:30 | M3 | KTO |
| 01:30–02:00 | M4 | SimPO / IPO |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its preference-alignment notebooks to run ORPO + KTO and pick an objective by your actual data shape. |

### Week 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences
_3-hour block · 🔧 `$verifiable-rft` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — adapt its RLHF→GRPO walkthrough into a verifiable-reward RFT loop on the function-call task._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLHF vs RLAIF vs RFT |
| 00:30–01:00 | M2 | Verifiable reward |
| 01:00–01:30 | M3 | Distillation |
| 01:30–02:00 | M4 | RFT vs more SFT |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — adapt its RLHF→GRPO walkthrough into a verifiable-reward RFT loop on the function-call task. |

### Week 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)
_3-hour block · 🔧 `$finetune-regression` · ▶ [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — reuse its eval pipeline to build a multi-axis target + general + safety regression matrix across your checkpoints._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Target vs general eval |
| 00:30–01:00 | M2 | Catastrophic forgetting check |
| 01:00–01:30 | M3 | Alignment tax |
| 01:30–02:00 | M4 | Regression gate |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — reuse its eval pipeline to build a multi-axis target + general + safety regression matrix across your checkpoints. |

### Week 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost
_3-hour block · 🔧 `$adapter-serving` · ▶ [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your quantized multi-LoRA model with vLLM and load-test p95 / throughput / $-per-1k-answers._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Inference quantization |
| 00:30–01:00 | M2 | Multi-LoRA serving |
| 01:00–01:30 | M3 | Merge vs keep-separate |
| 01:30–02:00 | M4 | Cost/latency |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your quantized multi-LoRA model with vLLM and load-test p95 / throughput / $-per-1k-answers. |

### Week 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting
_3-hour block · 🔧 `$adaptation-evidence-packet` · ▶ [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — assemble the full decide → data → LoRA/QLoRA → DPO → serve pipeline into your capstone repo._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — assemble the full decide → data → LoRA/QLoRA → DPO → serve pipeline into your capstone repo. |

## Part D — Reasoning Models & Test-Time Compute

### Week 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference
_3-hour block · 🔧 `$reasoning-eval` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its evaluation notebooks to build the GSM8K/MATH direct-vs-CoT baseline with token cost and a contamination note._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chain-of-thought |
| 00:30–01:00 | M2 | Test-time compute |
| 01:00–01:30 | M3 | Verifiable eval |
| 01:30–02:00 | M4 | Contamination |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its evaluation notebooks to build the GSM8K/MATH direct-vs-CoT baseline with token cost and a contamination note. |

### Week 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve
_3-hour block · 🔧 `$test-time-scaler` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — extend the eval loop with self-consistency + best-of-N and plot the test-time scaling curve (accuracy vs N and tokens)._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Self-consistency |
| 00:30–01:00 | M2 | Best-of-N |
| 01:00–01:30 | M3 | Test-time scaling curve |
| 01:30–02:00 | M4 | Parallel vs sequential compute |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — extend the eval loop with self-consistency + best-of-N and plot the test-time scaling curve (accuracy vs N and tokens). |

### Week 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome
_3-hour block · 🔧 `$verifier-suite` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build an outcome verifier + PRM and compare majority-vote / ORM / PRM selection on MATH._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Outcome reward (ORM / verifier) |
| 00:30–01:00 | M2 | Process reward (PRM) |
| 01:00–01:30 | M3 | Verifier-guided selection |
| 01:30–02:00 | M4 | Verifiable vs learned reward |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build an outcome verifier + PRM and compare majority-vote / ORM / PRM selection on MATH. |

### Week 4 — ReAct, Tool Use & Search: Reasoning That Acts
_3-hour block · 🔧 `$reasoning-agent` · ▶ [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build a bounded ReAct + code/search agent and beat CoT-only on computation-heavy and fresh-facts questions._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ReAct |
| 00:30–01:00 | M2 | Tool-augmented computation |
| 01:00–01:30 | M3 | Deep research |
| 01:30–02:00 | M4 | Reasoning + retrieval boundary |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build a bounded ReAct + code/search agent and beat CoT-only on computation-heavy and fresh-facts questions. |

### Week 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch
_3-hour block · 🔧 `$grpo-trainer` · ▶ [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — run its hands-on GRPO loop with a verifiable reward and co-plot reward vs held-out GSM8K/MATH accuracy._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLVR |
| 00:30–01:00 | M2 | GRPO |
| 01:00–01:30 | M3 | Why no critic |
| 01:30–02:00 | M4 | R1-Zero vs R1 |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — run its hands-on GRPO loop with a verifiable reward and co-plot reward vs held-out GSM8K/MATH accuracy. |

### Week 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run
_3-hour block · 🔧 `$grpo-stabilizer` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — add DAPO / Dr.GRPO options to your loop and ablate against vanilla GRPO on eval-per-compute._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Length bias |
| 00:30–01:00 | M2 | Entropy collapse |
| 01:00–01:30 | M3 | DAPO |
| 01:30–02:00 | M4 | Dr.GRPO |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — add DAPO / Dr.GRPO options to your loop and ablate against vanilla GRPO on eval-per-compute. |

### Week 7 — Long-Horizon Reasoning & Self-Improving Agents
_3-hour block · 🔧 `$self-improve-loop` · ▶ [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement a verify→filter→SFT self-improvement loop and track per-iteration held-out gains with a diversity check._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-horizon credit assignment |
| 00:30–01:00 | M2 | Self-improvement (STaR / ReST / rejection sampling) |
| 01:00–01:30 | M3 | Agentic RL |
| 01:30–02:00 | M4 | Honest long-horizon eval |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement a verify→filter→SFT self-improvement loop and track per-iteration held-out gains with a diversity check. |

### Week 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination
_3-hour block · 🔧 `$reasoning-audit` · ▶ [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — assemble AIME / GPQA / ARC-AGI-style runners with bootstrap error bars and a GSM-Symbolic perturbation audit._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AIME / MATH |
| 00:30–01:00 | M2 | GPQA |
| 01:00–01:30 | M3 | ARC-AGI |
| 01:30–02:00 | M4 | Contamination & faithfulness |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — assemble AIME / GPQA / ARC-AGI-style runners with bootstrap error bars and a GSM-Symbolic perturbation audit. |

### Week 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment
_3-hour block · 🔧 `$reasoning-deploy` · ▶ [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — serve reasoning with budget caps + KV-cache tricks and measure adaptive-vs-flat accuracy-per-token._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Adaptive test-time compute; CoT faithfulness |
| 00:30–01:00 | M2 | Reasoning-model serving |
| 01:00–01:30 | M3 | Effort/budget controls |
| 01:30–02:00 | M4 | Contextual drag |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — serve reasoning with budget caps + KV-cache tricks and measure adaptive-vs-flat accuracy-per-token. |

### Week 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math
_3-hour block · 🔧 `$reasoning-evidence-packet` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — run the full baseline → verifier → GRPO → hard-eval pipeline as your reproduction-audit capstone._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — run the full baseline → verifier → GRPO → hard-eval pipeline as your reproduction-audit capstone. |

