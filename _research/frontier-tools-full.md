# Research: Frontier AI Landscape — Full Report (late June 2026)

_Source: research-frontier-tools agent. Anchor syllabi on named techniques/protocols/benchmarks; treat model versions as swappable._

## 1) Frontier models (mid-2026)
- **Anthropic Claude Opus 4.8** (May 28 2026): ~#1 Artificial Analysis blended (~61%); 1M context, 128K output, effort controls, adaptive thinking. **Claude Fable 5** (Jun 9 2026) "Mythos" tier (always-on adaptive thinking).
- **OpenAI GPT-5.5** (Apr 23 2026): unified system with real-time **router** across fast model + "GPT-5 thinking"; ~1M context; leads strict coding (~59% SWE).
- **Google Gemini 3.1 Pro** (Feb 19 2026): native multimodal in 1M context; three-tier thinking dial (Low/Med/High); GPQA Diamond 94.3%, ARC-AGI-2 77.1%.
- **Open weights:** DeepSeek V4 (1.6T/49B MoE, MIT, 1M ctx), Qwen 3.5 (397B/17B MoE, Apache 2.0), Llama 4 Scout/Maverick (Scout ~10M ctx), Mistral Large 3/Small 4, Gemma 4.
- Cross-cutting: **1M context = table stakes; sparse MoE dominant; tunable "thinking effort" a standard control.**

## 2) Reasoning & test-time compute
- **RLVR (RL with Verifiable Rewards)** dominant for reasoning post-training; displacing pure RLHF for reasoning.
- Test-time scaling: parallel sampling + sequential deliberation; **verifier models** (RL-trained critics) score/aggregate (RL^V ~1.2–1.6×).
- Tunable extended/deliberate thinking as a product control. Failure mode: **reward hacking / verifier gaming** (active ICLR 2026 thread).

## 3) Agents & orchestration
- **MCP** de-facto standard; adopted by Anthropic/OpenAI/Google/Microsoft/AWS; 10,000+ public servers; **donated to Linux Foundation's Agentic AI Foundation (Dec 2025)**; new 2026-07-28 spec (stateless core, Extensions, Tasks, MCP Apps, auth hardening).
- **A2A** (Agent-to-Agent) discovery/delegation via Agent Cards; ACP merged into A2A under Linux Foundation.
- Frameworks (2026 GA): **LangGraph** (durable checkpointing, crash recovery, time-travel debug), **OpenAI Agents SDK** (handoffs; successor to Swarm), **Claude Agent SDK** (query() primitive, subagents, hooks, computer-use), **Google ADK** (multi-language, native A2A), **Microsoft Agent Framework 1.0** (AutoGen+Semantic Kernel, GA Apr 2026), **Pydantic AI**, CrewAI, smolagents.
- **Computer-use/browser agents:** Claude Computer Use, OpenAI Operator/CUA, Gemini computer use.
- **Agent memory** is the production differentiator; orchestrator-led multi-agent replacing monolithic agents.

## 4) RAG & retrieval (2026)
- **Agentic RAG** (iterative query rewriting, retrieval agents, LLM-judge loops). **GraphRAG** for multi-hop. **Late interaction/ColBERT → PLAID → ColPali/ColQwen3** for visual/PDF retrieval without OCR (major shift).
- Standard stack: BM25/dense → **reranker (Cohere Rerank 3.5, Voyage rerank-2.5, BGE-reranker-v2)** → synthesis; HyDE for vocab mismatch.
- Embeddings: Voyage voyage-3-large/multimodal-3, Cohere embed-v4, OpenAI text-embedding-3-large, BGE-M3, nomic-embed.
- Vector DBs: Qdrant, Weaviate, Pinecone, pgvector. Long-context reshapes but doesn't kill RAG.

## 5) Fine-tuning & post-training
- Default stack: **SFT → LoRA/QLoRA/DoRA → DPO or GRPO → optional model merging**. QLoRA tunes 8B on one A100 (~$12).
- Preference optimization: **DPO, ORPO, KTO**; **RFT/RLVR** for verifiable rewards. Ordering: Prompt → RAG → Fine-tune → Distill. Synthetic data standard.
- Tooling: HF **trl, peft, axolotl, unsloth** (2–5× faster QLoRA).

## 6) Evaluation & observability
- Execution-based benchmarks: **SWE-bench (+Pro/Verified)**, **τ-bench/τ²-bench (Sierra) dual-control + pass^k reliability**, **ARC-AGI-2/3**, GPQA Diamond, MMLU-Pro, AIME, Humanity's Last Exam.
- **LLM-as-judge** default + documented biases (TrustJudge).
- Frameworks: **LangSmith, Braintrust, Arize Phoenix, DeepEval, RAGAS, UK AISI Inspect AI**. Agent evals capture full trajectory; red-teaming/prompt-injection regression standard.

## 7) Efficiency & serving
- **vLLM** reference engine; **FP8 KV-cache** (`--kv-cache-dtype fp8`, ~halves KV memory, ~2× decode-latency-slope) + FP8 attention.
- **FlashAttention-3** (Hopper), **FlashAttention-4** (Blackwell default, vLLM v0.20+). **Speculative decoding** (2–5× low concurrency; incompatible w/ some KV-quant — teachable gotcha). MoE serving, tensor-parallel, KV-cache compression (EvicPress, QuantSpec), quantization (FP8/INT4/NF4).

## 8) Multimodal & generative
- **Video (native 4K + audio + multi-shot):** Sora 2, Veo 3.1, Kling 3.0, Seedance 2.0, Runway Gen-4.5, Wan 2.6. Architecture: **DiT (Diffusion Transformer) over spatiotemporal latent patches** — the standard to teach.
- Image: **FLUX** (open-weights leader); Nano Banana Pro / GPT Image / Midjourney (closed). Audio: ElevenLabs Eleven v3.
- VLMs/multimodal embeddings: Qwen3-VL-Embedding, voyage-multimodal-3, ColPali. **World models** via video-diffusion framing.

## 9) Safety / alignment / governance
- **Constitutional AI with dynamic constitutions** + automated red-teaming.
- **Mechanistic interpretability** (MIT 2026 breakthrough); **sparse autoencoders (SAEs)** for monosemantic features; activation atlases for deceptive-alignment detection. Fastest-moving alignment area — must be a module.
- **Runtime guardrails** (input/output validators; prompt-injection focus).
- **EU AI Act:** unacceptable-risk bans + AI-literacy (Feb 2025) → GPAI obligations (Aug 2025) → most rules apply **Aug 2, 2026**; **Digital Omnibus (provisional May 7 2026) defers Annex III high-risk obligations to Dec 2, 2027.** Fines up to €35M or 7% turnover. (Dates changed in 2026 — old syllabi are wrong.)

## 10) MLOps / LLMOps in production
- **Prompt caching** = highest-leverage cost lever (up to 90% off static prefixes). **Serverless GPU** (Modal, RunPod FlashBoot, Baseten) pay-per-second. Cost trio: **semantic caching + model routing + batching**.
- Observability: trace retrieval quality + prompt perf + latency; manage four assets — weights, data, prompts, eval metrics. **Prompt management as versioned, evaluated artifacts.**

## TOP "MUST-ADD vs 2024/2025" DELTAS
1. **MCP + A2A** (Linux Foundation standards) — biggest gap.
2. **RLVR + verifier models + test-time compute** (replaces "CoT prompting" framing).
3. **Agent SDKs by name** (LangGraph durability; OpenAI/Claude/Google/Microsoft) + computer-use + agent memory.
4. **Agentic RAG, GraphRAG, ColPali/late-interaction, rerankers** (RAG-as-control-loop).
5. **Execution-based agent evals** (SWE-bench, τ²-bench pass^k, ARC-AGI-2/3) + LLM-judge biases.
6. **FP8 KV-cache / FlashAttention-4 / speculative decoding** serving layer.
7. **Mechanistic interpretability + SAEs** alignment module.
8. **EU AI Act Aug-2026 enforcement + Digital Omnibus deferral** (dated facts).
9. **Prompt caching + serverless GPU + model routing** LLMOps cost core.
10. **1M context + MoE + tunable thinking-effort** as default model assumptions.
