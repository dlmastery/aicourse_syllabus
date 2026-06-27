# Frontier Brief — Mid-2026 AI Landscape (shared reference for all course writers)

_Synthesized from research agents + current platform knowledge. Use these concrete names so every course is current._
_**Authoritative detail (late June 2026): see [`frontier-tools-full.md`](frontier-tools-full.md).** Anchor on named techniques/protocols/benchmarks; model versions are swappable examples._

## Frontier models (mid-2026)
- **Anthropic Claude Opus 4.8** (May 2026, ~#1 blended; 1M ctx, 128K out, effort/adaptive thinking); **Fable 5** "Mythos" tier.
- **OpenAI GPT-5.5** (Apr 2026) — unified system with a real-time **router** over fast + thinking models; ~1M ctx; coding leader.
- **Google Gemini 3.1 Pro** (Feb 2026) — native multimodal, 1M ctx, Low/Med/High thinking dial; GPQA 94.3%, ARC-AGI-2 77.1%.
- **Open weights (Apache-2.0/MIT now frontier-competitive):** DeepSeek V4 (1.6T/49B MoE, 1M ctx), Qwen 3.5 (397B/17B MoE), Llama 4 Scout (~10M ctx)/Maverick, Mistral Large 3, Gemma 4.
- Defaults to assume: **1M context = table stakes · sparse MoE dominant · tunable "thinking effort" a standard control.**

## Reasoning & test-time compute
- o1/o3/R1-style reasoning; chain-of-thought, self-consistency, **test-time compute scaling**, verifier/reward models,
  **RLVR (RL from verifiable rewards)**, extended thinking budgets, speculative/parallel sampling, deep-research agents.

## Agents & orchestration
- **MCP (Model Context Protocol, Anthropic)** — de-facto standard to expose tools/resources/prompts; GA in VS Code/Copilot;
  teach explicitly (still absent from most university syllabi). **A2A (agent-to-agent)** protocol for inter-agent comms.
- Frameworks: **LangGraph, CrewAI, OpenAI Agents SDK, Claude Agent SDK, AutoGen, Pydantic AI, Google ADK, AWS Strands, LlamaIndex**.
- Patterns: planner/solver/critic, orchestrator + specialists, multi-agent debate; **computer-use / browser agents**;
  agent memory (**Mem0, LangMem**); AgentOps lifecycle.

## RAG & retrieval (2026)
- **Agentic RAG**, **GraphRAG** (Neo4j), **late-interaction / ColBERT**, hybrid (BM25 + dense), **rerankers** (Cohere Rerank, BGE),
  HyDE, CRAG, Self-RAG, Text2SQL; long-context vs RAG tradeoff; vector DBs: **Pinecone, Weaviate, Qdrant, pgvector, Chroma**.

## Fine-tuning & post-training
- **LoRA / QLoRA**, **DPO / ORPO / KTO / SimPO / IPO**, RLHF / RLAIF, **GRPO (DeepSeek-R1)** + DAPO / Dr.GRPO,
  distillation, **RFT (reinforcement fine-tuning)**, synthetic data; libraries **TRL, veRL, OpenRLHF, Unsloth, Axolotl**.

## Evaluation & observability
- **LLM-as-judge**; frameworks **OpenAI Evals, LangSmith, Braintrust, Inspect AI (UK AISI), DeepEval, Ragas**;
  agent evals **tau-bench**; benchmarks **SWE-bench / SWE-bench Verified, GPQA, MMLU-Pro, AIME, ARC-AGI, LMArena, MMMU**;
  red-teaming, prompt-injection/jailbreak testing.

## Efficiency & serving
- Quantization (**AWQ, GPTQ, SmoothQuant, FP8**), **vLLM, SGLang, TensorRT-LLM**, **speculative decoding**, **FlashAttention-3**,
  **MoE**, **PagedAttention / KV-cache** management, distributed training (**FSDP, DeepSpeed ZeRO, Megatron**), serverless GPU (**Modal, Replicate, Baseten, RunPod**).

## Multimodal & generative
- **Diffusion + flow matching**; VLMs (**Qwen-VL, LLaVA, Llama-Vision, Gemini**); image/video generation (current SOTA);
  audio/speech (**Whisper-v3**, modern TTS); **world models** (e.g., IRIS, Genie-style); native any-to-any models.

## Safety / alignment / governance
- **Constitutional AI**, RLHF/RLAIF; **mechanistic interpretability + sparse autoencoders (SAEs)**; **CoT monitoring**;
  guardrails (**Llama Guard, NeMo Guardrails, Guardrails AI**); **responsible scaling policies**; **scheming/deception & eval-gaming**;
  **EU AI Act** (phased obligations through 2026), NIST AI RMF, OWASP LLM Top 10; jailbreak / prompt-injection defenses.

## MLOps / LLMOps / AgentOps (production 2026)
- Prompt & version management, **semantic caching**, cost/latency control, **LLM gateways**, observability (**Langfuse, LangSmith, Arize Phoenix**),
  CI/CD for prompts + evals (eval-gated deploys), shadow mode, canary/rolling releases, human-in-the-loop gates;
  infra: Docker, Kubernetes, Terraform, AWS/GCP/Azure, Vertex AI, Bedrock, W&B, MLflow.
