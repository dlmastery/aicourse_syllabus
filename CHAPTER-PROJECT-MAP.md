# Every Chapter → Its Practical Project

One hands-on GitHub project per lecture across all 6 subjects (Krish Naik prioritized; full catalog in [`PROJECTS.md`](PROJECTS.md)).

## 01 — Foundations & Deep Learning From Scratch

### Part A — Math & ML Foundations From Scratch

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | Why Math Is the Operating Language of ML (and Python/NumPy From Scratch) | [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — clone and run the end-to-end ML template; adopt its modular `src/`, config, and one-command run as the reproducible-repo blueprint for `ml-foundations/`. |
| Week 2 | Linear Algebra as Shapes You Can Reason About | [`microsoft/ML-For-Beginners`](https://github.com/microsoft/ML-For-Beginners) — work the regression-module NumPy/pandas notebooks to drill vectorized prediction, broadcasting, and shape reasoning. |
| Week 3 | Derivatives, Gradients & the Seed of Backpropagation | [`ashishpatel26/500-AI-Machine-Learning-Projects-with-code`](https://github.com/ashishpatel26/500-AI-Machine-Learning-Projects-with-code) — take a linear-regression / gradient-descent-from-scratch project and add a finite-difference gradient check. |
| Week 4 | Probability & Statistics: The Language of Uncertainty | [`microsoft/AI-For-Beginners`](https://github.com/microsoft/AI-For-Beginners) — run its probability / Naive-Bayes notebooks and connect the likelihood to the cross-entropy loss you derived. |
| Week 5 | The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch | [`krishnaik06/AQI-Project`](https://github.com/krishnaik06/AQI-Project) — train the AQI regression with your own gradient-descent loop, logging loss curves and beating the mean baseline. |
| Week 6 | First Models I: Linear & Logistic Regression (Now With, Then Without, scikit-learn) | [`microsoft/ML-For-Beginners`](https://github.com/microsoft/ML-For-Beginners) — reproduce its logistic-regression lesson, then match coefficients against your from-scratch `logreg.py`. |
| Week 7 | First Models II: Trees, Ensembles & Strong Baselines | [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — compare tree / random-forest / boosted models on the fraud split and audit for leakage. |
| Week 8 | Evaluation, Error Analysis & Experiment Design | [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — run a threshold sweep + per-slice error table on the fraud model and write the evaluation-review note. |
| Week 9 | Bias, Variance, Regularization & Generalization (Learning-Theory Intuition) | [`ashishpatel26/500-AI-Machine-Learning-Projects-with-code`](https://github.com/ashishpatel26/500-AI-Machine-Learning-Projects-with-code) — take an overfitting/regularization project; plot train-vs-validation and close the gap with L2. |
| Week 10 | Capstone: A From-Scratch ML Project With an Evidence Packet | [`krishnaik06/Data-Science-Projects-For-Resumes`](https://github.com/krishnaik06/Data-Science-Projects-For-Resumes) — pick one end-to-end project and ship it as your capstone evidence packet (framing → baseline → compare → eval). |

### Part B — Deep Learning & the Transformer, Built by Hand

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | The Neuron, the Forward Pass, and Scalar Autodiff From Scratch | [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — follow its NN-from-scratch track to build a neuron, a forward pass, and a scalar-autodiff engine. |
| Week 2 | Backpropagation Through an MLP, By Hand (NumPy) | [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — use its Appendix-A autograd intro to cross-check your hand-derived NumPy MLP backward pass. |
| Week 3 | Optimizers: SGD, Momentum, RMSProp, Adam From Scratch | [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — adapt its training loop to implement and compare SGD / Momentum / RMSProp / Adam on one model. |
| Week 4 | From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay) | [`microsoft/AI-For-Beginners`](https://github.com/microsoft/AI-For-Beginners) — port your MLP to its PyTorch neural-network notebooks and ablate dropout / batchnorm / weight decay. |
| Week 5 | Convolutional Networks: Built, Then Trained on Fashion-MNIST | [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — build and train a small CNN end-to-end on an image dataset, visualize filters, and read the confusion matrix. |
| Week 6 | Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM) | [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — follow its sequence-models chapter to build an RNN/LSTM char-LM and report bits-per-character. |
| Week 7 | Attention From Scratch: Why It Replaced Recurrence | [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — implement scaled-dot-product + causal self-attention (Ch.3) and visualize the attention matrix. |
| Week 8 | The Transformer Block, Built End to End | [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — assemble multi-head attention + the full pre-norm decoder block (Ch.3–4) and overfit a single batch. |
| Week 9 | Tokenization and Byte-Pair Encoding From Scratch | [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — build/train a BPE tokenizer (Ch.2) and compare round-trip + fertility against tiktoken. |
| Week 10 | Training a Small GPT: nanoGPT From Scratch | [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — pretrain the GPT end-to-end (Ch.5) on TinyShakespeare and track perplexity + sampling. |
| Week 11 | Scaling, Efficiency, and Honest Evaluation of Your Small GPT | [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — profile KV-cache + inference efficiency on your small GPT and measure the latency effect. |
| Week 12 | Capstone: A Built-From-Scratch GPT With an Evidence Packet | [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — use its from-scratch gpt-oss pretraining as the reference to extend your capstone GPT + model card. |

## 02 — Large Language Models: Pretraining, RAG, Fine-Tuning & Reasoning

### Part A — Large Language Models: Pretraining → Post-Training

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run) | [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — stand up a tiny gpt-oss pretraining run and annotate where each later week plugs into the lifecycle. |
| Week 2 | Data Curation I: Common Crawl, Extraction, Filtering, Language ID | [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its data-prep stage (extraction/filtering) and emit a retention funnel with sampled drops. |
| Week 3 | Data Curation II: Deduplication, Decontamination, and Tokenizer Training | [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss) — run its tokenizer-training stage, then layer in MinHash dedup + n-gram decontamination and measure the duplicate rate. |
| Week 4 | Architecture, Hyperparameters, and Scaling Laws | [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — build the modern decoder (RoPE/RMSNorm/SwiGLU/MoE) and fit a small scaling law across sizes. |
| Week 5 | Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO | [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/FSDP across GPUs and measure scaling efficiency + MFU. |
| Week 6 | Mixture-of-Experts and Long-Context Pretraining | [`VizuaraAI/Mixture_of_Experts`](https://github.com/VizuaraAI/Mixture_of_Experts) — implement a top-k MoE FFN + load-balancing loss and track expert utilization. |
| Week 7 | Pretraining Evaluation & a Paper-Reproduction Checkpoint | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its evaluation notebooks (lm-eval-harness) on your base model and reproduce a published number with CIs. |
| Week 8 | Supervised Fine-Tuning & Instruction Tuning | [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run SFT + LoRA/QLoRA on an instruction set with proper chat templating and loss masking. |
| Week 9 | Reward Modeling & RLHF (PPO) | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — train a Bradley-Terry reward model and run PPO RLHF from its post-training notebooks, watching reward/KL. |
| Week 10 | Direct Preference Optimization: DPO, ORPO, KTO | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — align your SFT model with DPO (and contrast ORPO/KTO) using its preference-optimization notebook. |
| Week 11 | RL for Reasoning: GRPO and Verifiable Rewards | [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement GRPO with verifiable rewards on a math task, adding format + correctness rewards. |
| Week 12 | Long-Context, Safety Fine-Tuning, and Serving | [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your model with vLLM + KV-cache, measure latency, and add input/output guardrails. |
| Week 13 | Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet | [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — use its full ~350M domain-SLM pipeline as the capstone template for your pretrain → post-train evidence packet. |

### Part B — Retrieval-Augmented Generation & Knowledge Systems

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline | [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — clone the intro RAG notebook and rebuild it as your load→chunk→embed→retrieve→generate baseline over the AcmeCorp wiki. |
| Week 2 | Chunking & Document Processing: The Unsexy Half of Retrieval Quality | [`krishnaik06/Updated-Langchain`](https://github.com/krishnaik06/Updated-Langchain) — use its document-loader and text-splitter modules to implement and compare fixed/recursive/semantic chunkers on the PDF policy pack. |
| Week 3 | Vector Databases: Indexes, ANN, and Choosing Your Store | [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — port one of its RAG apps across Chroma/Qdrant/pgvector and benchmark recall@10 vs p95 latency. |
| Week 4 | Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top | [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — run its fusion-retrieval and reranking notebooks (BM25+dense+RRF → Cohere/BGE rerank) on your corpus and measure the per-stage lift. |
| Week 5 | Late Interaction & ColBERT: Token-Level Retrieval | [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — adapt its late-interaction/ColBERT recipe and compare nDCG@10 and index size to your Week-4 hybrid+rerank stack. |
| Week 6 | RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness | [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — wire its evaluation notebooks to RAGAS and compute faithfulness + context precision/recall on the frozen gold set. |
| Week 7 | Advanced RAG I: HyDE, CRAG & Self-RAG | [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build HyDE/CRAG/Self-RAG as LangGraph nodes and ablate each against the Week-6 eval. |
| Week 8 | Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL | [`run-llama/llama_index`](https://github.com/run-llama/llama_index) — use its GraphRAG, query-router, and Text2SQL modules to route multi-hop / global / analytical queries to the right backend. |
| Week 9 | Long-Context vs RAG, Production Serving, Caching & Guardrails | [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production RAG service to add semantic caching, injection guardrails, and a measured p95/cost SLA. |
| Week 10 | Capstone: A Production Document-QA / Knowledge Portal | [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — fork a full RAG app and extend it into your routed, guarded, eval-gated knowledge portal. |

### Part C — Fine-Tuning & Model Adaptation

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat) | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its prompt-vs-RAG-vs-fine-tune material to build the strong prompted baseline + cost model before any GPU time. |
| Week 2 | Data Preparation & Formatting: The 80% That Decides the Outcome | [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — follow its data pipeline to format, dedup, and decontaminate your domain SFT set with a defensible dataset card. |
| Week 3 | PEFT I: LoRA From the Math Up | [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — run its LoRA SFT notebook on an 8B base and beat the Week-1 prompted baseline on format compliance. |
| Week 4 | PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU | [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — switch its config to 4-bit QLoRA and measure the memory / throughput / quality tradeoff vs Week-3 full-precision LoRA. |
| Week 5 | Preference Optimization I: DPO and the RLHF Lineage | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — run its DPO notebook on your SFT checkpoint and report length-controlled win-rate over the SFT model. |
| Week 6 | Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its preference-alignment notebooks to run ORPO + KTO and pick an objective by your actual data shape. |
| Week 7 | RLHF, RFT & Distillation: When You Need More Than Offline Preferences | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — adapt its RLHF→GRPO walkthrough into a verifiable-reward RFT loop on the function-call task. |
| Week 8 | Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting) | [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — reuse its eval pipeline to build a multi-axis target + general + safety regression matrix across your checkpoints. |
| Week 9 | Serving Adapters: Quantization for Inference, Multi-LoRA & Cost | [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serve your quantized multi-LoRA model with vLLM and load-test p95 / throughput / $-per-1k-answers. |
| Week 10 | Capstone: A Fine-Tuned Model That Provably Beats Prompting | [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — assemble the full decide → data → LoRA/QLoRA → DPO → serve pipeline into your capstone repo. |

### Part D — Reasoning Models & Test-Time Compute

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | What Reasoning Buys You: CoT, and Spending Compute at Inference | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its evaluation notebooks to build the GSM8K/MATH direct-vs-CoT baseline with token cost and a contamination note. |
| Week 2 | Self-Consistency, Best-of-N & the Test-Time Scaling Curve | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — extend the eval loop with self-consistency + best-of-N and plot the test-time scaling curve (accuracy vs N and tokens). |
| Week 3 | Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build an outcome verifier + PRM and compare majority-vote / ORM / PRM selection on MATH. |
| Week 4 | ReAct, Tool Use & Search: Reasoning That Acts | [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build a bounded ReAct + code/search agent and beat CoT-only on computation-heavy and fresh-facts questions. |
| Week 5 | RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch | [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — run its hands-on GRPO loop with a verifiable reward and co-plot reward vs held-out GSM8K/MATH accuracy. |
| Week 6 | GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — add DAPO / Dr.GRPO options to your loop and ablate against vanilla GRPO on eval-per-compute. |
| Week 7 | Long-Horizon Reasoning & Self-Improving Agents | [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement a verify→filter→SFT self-improvement loop and track per-iteration held-out gains with a diversity check. |
| Week 8 | Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — assemble AIME / GPQA / ARC-AGI-style runners with bootstrap error bars and a GSM-Symbolic perturbation audit. |
| Week 9 | Reasoning at Inference: Budgets, Faithfulness & Deployment | [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — serve reasoning with budget caps + KV-cache tricks and measure adaptive-vs-flat accuracy-per-token. |
| Week 10 | Capstone: A Small Reasoning-RL Run That Provably Improves Math | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — run the full baseline → verifier → GRPO → hard-eval pipeline as your reproduction-audit capstone. |

## 03 — AI Agents & AI-First Software Engineering

### Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | Agent Anatomy and the Agent Loop | [`The-Pocket/PocketFlow`](https://github.com/The-Pocket/PocketFlow) — study and extend a ~100-line agent framework to internalize the bare observe→think→act loop before any heavyweight framework. |
| Week 2 | Function Calling, Tool Schemas, and Structured Outputs | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its tool-use / structured-output recipes to build Atlas's typed, constrained-decoding tool belt. |
| Week 3 | MCP: Build a Model Context Protocol Server (original module) | [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — clone the official example servers (filesystem/git/fetch), mirror their structure, and build your own Atlas MCP server. |
| Week 4 | Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion | [`NirDiamant/GenAI_Agents`](https://github.com/NirDiamant/GenAI_Agents) — adapt its ReAct / plan-and-execute / reflection implementations and benchmark them on the Atlas booking tasks. |
| Week 5 | Agent Memory: Short-Term, Long-Term, Mem0 and LangMem | [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — reuse its embed→store→retrieve stack as the raw long-term-memory baseline, then A/B it against Mem0/LangMem. |
| Week 6 | Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK | [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to rebuild Atlas as a checkpointed LangGraph graph with a human-approval node. |
| Week 7 | Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate | [`microsoft/ai-agents-for-beginners`](https://github.com/microsoft/ai-agents-for-beginners) — use its multi-agent / orchestration lessons as the pattern base for the Atlas orchestrator + A2A specialists. |
| Week 8 | Computer-Use and Browser Agents | [`web-arena-x/webarena`](https://github.com/web-arena-x/webarena) — self-host its realistic sites and run your Playwright browser agent against a task subset. |
| Week 9 | Agent Evaluation: tau-bench, Long-Horizon, and pass^k | [`sierra-research/tau-bench`](https://github.com/sierra-research/tau-bench) — run the official τ-bench/τ²-bench harness on `airline`, then mirror its structure for the ≥40-task Atlas pass^k suite. |
| Week 10 | AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop | [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument Atlas so every LLM/tool/sub-agent call is a span with cost and latency. |
| Week 11 | Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10 | [`ethz-spylab/agentdojo`](https://github.com/ethz-spylab/agentdojo) — run its prompt-injection attack/defense harness against hardened Atlas and report attack-success-rate before vs after. |
| Week 12 | Capstone: Deploy a Multi-Agent System with an MCP Server | [`langchain-ai/langchain`](https://github.com/langchain-ai/langchain) — ship the capstone Atlas on production LangGraph (durable checkpointing, streaming, HITL) wired to your MCP server and pass^k gate. |

### Part B — AI-First Software Development

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | How Coding LLMs Actually Work (a usable mental model) | [`microsoft/generative-ai-for-beginners`](https://github.com/microsoft/generative-ai-for-beginners) — use its code-generation lessons to profile a model's capability-vs-grounding failure shape on Quill. |
| Week 2 | Prompt Engineering for Developers: Specs, Context, and PRDs | [`VizuaraAI/modern-software-developer-bootcamp`](https://github.com/VizuaraAI/modern-software-developer-bootcamp) — follow its spec→PRD→plan workflow to turn the Quill sharing request into an agent-ready PRD. |
| Week 3 | Building a Coding Agent From Scratch | [`Aider-AI/aider`](https://github.com/Aider-AI/aider) — clone it and benchmark your from-scratch `minicoder` against this production agent on the same seeded bugs. |
| Week 4 | The AI IDE: Context, Embeddings, and PRDs as MCP Resources | [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — follow its resource examples to expose Quill's PRDs and DB schema as `prd://` / `schema://` MCP resources to the IDE. |
| Week 5 | Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its agent/plan-mode patterns to build the plan-gate → diff-gate → irreversible-action-gate workflow. |
| Week 6 | The Modern AI Terminal and Sandboxing | [`krishnaik06/Dockers`](https://github.com/krishnaik06/Dockers) — use it to build the repo-scoped, no-host-creds, network-off dev container the agent executes inside. |
| Week 7 | AI-Generated Tests and Test Quality | [`evalplus/evalplus`](https://github.com/evalplus/evalplus) — run its augmented test suites to expose weak AI tests, then harden Quill's suite to a mutation-score bar. |
| Week 8 | AI Security and Secure "Vibe Coding" | [`juice-shop/juice-shop`](https://github.com/juice-shop/juice-shop) — point your SAST/secret/deps/DAST gate at this deliberately-vulnerable app to prove it catches real vulns. |
| Week 9 | AI Code Review Gates | [`openai/openai-cookbook`](https://github.com/openai/openai-cookbook) — adapt its evaluation/review recipes to build the grounded AI PR reviewer wired as a branch-protection gate. |
| Week 10 | Automated UI and App Building | [`shadcn-ui/ui`](https://github.com/shadcn-ui/ui) — reconcile generated Quill UI into its component conventions, wired to the real share API with error/empty states. |
| Week 11 | Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation | [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — reuse its CI/deploy template as the monitored-deploy base for the shipped feature and the incident drill. |
| Week 12 | Capstone: Ship a Real Feature End-to-End with a Coding Agent | [`krishnaik06/Deployment-flask`](https://github.com/krishnaik06/Deployment-flask) — package and deploy the capstone Quill feature behind a real endpoint with flag/canary/rollback. |

## 04 — Production AI: MLOps, LLMOps, AgentOps & Efficient Serving

### Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | The Production Mindset & Containerizing a Model | [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use its containerized end-to-end template as the base for the `fullstack-ai-platform` monorepo and the slim `eta-model` image. |
| Week 2 | Orchestration: Kubernetes & Serverless GPU | [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/scale modules to take the `eta-model` image to a probed, autoscaled Deployment and a serverless-GPU comparison. |
| Week 3 | Data Pipelines & Versioning: Airflow, DVC, Feature Stores | [`krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project`](https://github.com/krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project) — mirror its DVC pipeline as the data/model-versioning reference for the `delivery-eta` features. |
| Week 4 | Experiment Tracking, Model Registry & Reproducible Training | [`DataTalksClub/mlops-zoomcamp`](https://github.com/DataTalksClub/mlops-zoomcamp) — follow its experiment-tracking module (W&B/MLflow) to log the `delivery-eta` sweep and promote a registry version with lineage. |
| Week 5 | Model Serving I: FastAPI, vLLM & Triton | [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — study its Modal + vLLM serving stack to stand up and benchmark the `support-copilot` LLM endpoint. |
| Week 6 | CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys) | [`promptfoo/promptfoo`](https://github.com/promptfoo/promptfoo) — build the offline eval suite and wire it as the CI gate that blocks a regressing copilot prompt PR. |
| Week 7 | LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control | [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production LLMOps patterns (gateway, caching, cost control) to route the copilot through LiteLLM with budgets. |
| Week 8 | Observability: Tracing, Metrics & LLM/Agent Telemetry | [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument the copilot with OTel spans (retrieve / tools / LLM) carrying token and cost attributes. |
| Week 9 | Monitoring, Drift Detection & Alerting in Production | [`evidentlyai/evidently`](https://github.com/evidentlyai/evidently) — use its drift detectors and reference datasets to monitor `delivery-eta` feature drift and fire one actionable alert. |
| Week 10 | Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates | [`argoproj/argo-rollouts`](https://github.com/argoproj/argo-rollouts) — configure a canary with an AnalysisTemplate so a deliberately-bad version auto-rolls-back on SLO/eval breach. |
| Week 11 | AgentOps: Operating Multi-Step Agent Systems in Production | [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to refactor the copilot into a traced LangGraph agent with budget/loop/injection guardrails. |
| Week 12 | Capstone: One Model + One Agent, Notebook → Monitored Production | [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its end-to-end structure as the integration reference for taking your model + agent to monitored production. |

### Part B — Efficient AI: Quantization, Serving & Systems

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | The GPU Execution & Memory Model (and How to Profile It) | [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — instrument and profile a served model's forward pass to classify the memory- vs compute-bound bottleneck. |
| Week 2 | Numerics: Mixed Precision, FP8 & Why Bits Matter | [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — run BF16/FP16 mixed-precision training and reproduce (then fix) an FP16-overflow→NaN. |
| Week 3 | Post-Training Quantization: GPTQ, AWQ, SmoothQuant | [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — use its quantization notebooks (GPTQ/AWQ/GGUF) to quantize the 8B and re-eval quality. |
| Week 4 | QAT, Low-Bit Frontiers & Serving Quantized Models | [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — QLoRA-fine-tune a 4-bit base on one GPU, then merge and serve the result. |
| Week 5 | Pruning, Sparsity, Distillation & NAS | [`VizuaraAILabs/Tiny-Stories-Regional`](https://github.com/VizuaraAILabs/Tiny-Stories-Regional) — train a small distilled-scale LM and compare it against a from-scratch same-size twin. |
| Week 6 | Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention | [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — measure KV-cache growth and the FlashAttention/paged-KV win across 1k/8k/32k context. |
| Week 7 | Inference Serving Engines: vLLM, SGLang & TensorRT-LLM | [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — serve on Modal + vLLM and benchmark continuous batching / TTFT / ITL across concurrency. |
| Week 8 | Speculative & Parallel Decoding | [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — configure speculative decoding (draft / EAGLE) and measure acceptance rate + decode-latency win. |
| Week 9 | Mixture-of-Experts: Sparse Models at Scale | [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — inspect MLA/MoE routing and per-expert load on a from-scratch MoE. |
| Week 10 | Long-Context Efficiency | [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — push toward 128k with FP8 KV + eviction and run a long-context-vs-RAG cost comparison. |
| Week 11 | Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism | [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop) — run DP/TP/PP/CP/EP sharding on multi-GPU and read the memory/comms tradeoff. |
| Week 12 | Capstone: FP16 → Quantized, Served, Benchmarked Endpoint | [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — take a model FP16 → quantized → served → benchmarked end-to-end as the capstone reference. |

## 05 — Applied, Multimodal, Reinforcement & Frontier AI

### Part A — Domain-Specific Applied AI

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor | [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use the canonical end-to-end ML template (CI, pipelines, deploy) to scaffold your anchor-vertical solution. |
| Week 2 | Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD) | [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — train the medical-image classifier with a patient-level split and a Grad-CAM shortcut audit. |
| Week 3 | Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety) | [`krishnaik06/Text-Summarization-NLP-Project`](https://github.com/krishnaik06/Text-Summarization-NLP-Project) — adapt it to clinical-note summarization with a retrieval-grounding + faithfulness check. |
| Week 4 | Legal: Contract Analysis & RAG over Case Law (Citation Integrity) | [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — build citation-grounded RAG over contracts/case-law with a citation-verifier gate that blocks fabricated cites. |
| Week 5 | Finance I: Fraud Detection & Point-in-Time Correctness | [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — build the fraud scorer with PIT-correct features and a fixed alerts-per-day operating point. |
| Week 6 | Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA) | [`krishnaik06/ARIMA-And-Seasonal-ARIMA`](https://github.com/krishnaik06/ARIMA-And-Seasonal-ARIMA) — build the probabilistic forecast half with calibrated prediction intervals (pair with a PD scorecard + reason codes). |
| Week 7 | Retail & E-commerce I: Recommendation Systems at Scale | [`krishnaik06/Movie-Recommender-in-python`](https://github.com/krishnaik06/Movie-Recommender-in-python) — build retrieval + ranking with explicit cold-start and popularity-bias slices. |
| Week 8 | Retail & E-commerce II: Demand Forecasting & Inventory Decisions | [`krishnaik06/Stock-MArket-Forecasting`](https://github.com/krishnaik06/Stock-MArket-Forecasting) — build SKU-style forecasts and convert them to a newsvendor reorder decision with a cost simulation. |
| Week 9 | Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC | [`krishnaik06/Tomato-Leaf-Disease-Prediction`](https://github.com/krishnaik06/Tomato-Leaf-Disease-Prediction) — train a visual defect/disease detector and report localization + a false-alarm operating threshold. |
| Week 10 | Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety) | [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build the Socratic tutoring agent with a hint-ladder + CAS verifier and an answer-leakage probe. |
| Week 11 | AI for Science: Surrogates, Property Prediction & Inverse Design | [`krishnaik06/AQI-Project`](https://github.com/krishnaik06/AQI-Project) — build a scientific regression surrogate and report an OOD/extrapolation slice with an uncertainty estimate. |
| Week 12 | Capstone Build & Deployment-Risk Dossier | [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — wrap your anchor solution in the end-to-end template (pipelines, CI, deploy) and bolt on the drift monitor + dossier. |
| Week 13 | Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis | [`krishnaik06/Data-Science-Projects-For-Resumes`](https://github.com/krishnaik06/Data-Science-Projects-For-Resumes) — package and present your shipped solution for the stakeholder + regulator panel. |

### Part B — Multimodal & Generative AI

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | Vision Transformers From Scratch: Images as Sequences of Patches | [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — implement the ViT (patch-embed → attention → class head) from scratch and verify it against a reference. |
| Week 2 | Contrastive Learning & CLIP: Aligning Images and Text | [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — train a dual-encoder with the symmetric InfoNCE loss and measure both-direction retrieval. |
| Week 3 | Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning | [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — run/serve a Qwen-VL VLM for VQA and LoRA-fine-tune it on a target slice. |
| Week 4 | Diffusion From Scratch I: DDPM (the Forward & Reverse Process) | [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — implement the DDPM forward/reverse + time-conditioned U-Net and report FID. |
| Week 5 | Diffusion II: Latent Diffusion, Conditioning & Text-to-Image | [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — extend to latent diffusion + CFG and LoRA/DreamBooth fine-tune with a CLIPScore eval. |
| Week 6 | Flow Matching & Rectified Flow: The Modern Generative Backbone | [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — retrain with a conditional flow-matching objective and plot FID-vs-NFE against DDPM/DDIM. |
| Week 7 | Video Generation: Spatiotemporal Diffusion & World Consistency | [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — generate action-conditioned frames and measure a temporal-consistency proxy + flicker catalog. |
| Week 8 | Audio & Speech: ASR (Whisper), TTS & Audio Representations | [`VizuaraAI/audio-llm`](https://github.com/VizuaraAI/audio-llm) — build the Whisper ASR→WER + TTS pipeline and evaluate a noisy/accented slice. |
| Week 9 | Any-to-Any & Unified Multimodal Models | [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — assemble a speech→VLM→speech any-to-any pipeline and compare it head-to-head with a native multimodal model. |
| Week 10 | World Models: Learning Simulators (IRIS, Genie-style) | [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — train/run an action-conditioned world model and plot rollout error vs horizon. |
| Week 11 | Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems | [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — build multimodal/agentic RAG with ColPali-style retrieval + a grounding/abstention guardrail. |
| Week 12 | Capstone: A Multimodal App + a Small Diffusion Model | [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — ship the coupled diffusion-model + served VLM app with honest evals as the capstone. |

### Part C — Reinforcement Learning, Robotics & Embodied AI

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | MDPs, Bellman Equations & Dynamic Programming From Scratch | [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement value & policy iteration on the tutorial gridworld and assert both converge to the same V*. |
| Week 2 | Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA | [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — code tabular Q-learning vs SARSA on CliffWalking and reproduce the safe-vs-optimal path split over ≥5 seeds. |
| Week 3 | Deep Q-Networks: DQN → Double → Dueling → Rainbow | [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — build DQN→Double→Dueling→PER on LunarLander and attribute each ablation’s sample-efficiency gain. |
| Week 4 | Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — implement REINFORCE + value baseline + A2C and quantify the baseline’s gradient-variance reduction. |
| Week 5 | Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train PPO+GAE on MuJoCo HalfCheetah/MetaDrive and sweep λ and clip ε with a KL health trace. |
| Week 6 | Offline RL & Imitation Learning | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train IQL vs BC on a Minari dataset and show DAgger fixes compounding error. |
| Week 7 | Model-Based RL, MCTS & World Models (IRIS) | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build UCT MCTS on Connect-Four + a tiny IRIS-style world model and measure the safe imagination horizon. |
| Week 8 | RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — SFT→DPO on UltraFeedback with TRL, then swap SimPO/KTO/ORPO and compare length-controlled win-rate. |
| Week 9 | RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO | [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — train GRPO on GSM8K with an exact-match verifier and ablate GRPO→Dr.GRPO→DAPO on pass@1 and response length. |
| Week 10 | Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — wrap a repo+pytest as a Gymnasium env and train an agent with veRL+Ray+vLLM; report resolved-rate + the infra bottleneck. |
| Week 11 | Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real | [`VizuaraAILabs/ACT-Maniskill`](https://github.com/VizuaraAILabs/ACT-Maniskill) — fine-tune an action-chunking (ACT) policy on ManiSkill and evaluate sim success-rate with an embodied-eval harness. |
| Week 12 | Humanoid Locomotion & Multi-Agent RL | [`VizuaraAILabs/Modern-Robot-Learning`](https://github.com/VizuaraAILabs/Modern-Robot-Learning) — train a massively-parallel locomotion policy and a 2-agent CTDE task; audit the locomotion reward for shaping exploits. |
| Week 13 | RL Safety: Reward Hacking, Specification Gaming & Safe RL | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — red-team a trained policy’s reward for hacking and demonstrate a constrained-MDP/penalty mitigation. |
| Week 14 | Capstone: An Agentic-RL System With a Safety Audit | [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — ship one agentic-RL system end-to-end (train → held-out eval → reward-hacking audit → evidence packet). |

### Part D — Emerging Topics & AI for Science

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — triage 3 thread papers and turn the chosen one into a running baseline notebook. |
| Week 2 | Autonomous Research Agents: The "AI Scientist" | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an AI-Scientist-style claim into a notebook and independently re-run it to find an over-claim. |
| Week 3 | AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an ESMFold inference notebook, compare to PDB (TM-score/RMSD), and analyze pLDDT-vs-error calibration. |
| Week 4 | AI for Science II: Molecules, Materials & Generative Design | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce a generator/screen on QM9 / Materials Project as a validity-funnel notebook (generated→valid→novel→synthesizable). |
| Week 5 | Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a Burgers PINN + an FNO in one notebook, validate vs a solver, and compare generalization across instances. |
| Week 6 | Emergence, Scaling & In-Context Learning | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce grokking on modular arithmetic and test whether ‘emergence’ survives a continuous metric. |
| Week 7 | Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an induction-head activation-patching result and interpret ≥5 SAE features in one notebook. |
| Week 8 | Neuro-Symbolic Methods: Combining Learning and Reasoning | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an LLM+solver generate-execute-repair loop on ARC/GSM8K and beat a pure-LLM baseline on a generalization slice. |
| Week 9 | World Models & Simulation for Reasoning and Control | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — run a Dreamer/IRIS-style world model and quantify the imagined-vs-real exploitation gap in a notebook. |
| Week 10 | Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier | [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — reproduce an SSM/efficiency comparison (or a verified self-improvement loop) as a trade-off-curve notebook. |
| Week 11 | Theorem Proving, Autoformalization & the Societal-Impact Panel | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a Lean 4 + LeanDojo proof-search notebook on a small theorem set and report verified-rate. |
| Week 12 | In-Class Hackathon: Build at the Frontier Under Pressure | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — under time pressure, convert one frontier result into a runnable, ablated notebook with seeds pinned. |
| Week 13 | Final Talks: Conference-Style Presentations & Defense | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — package your reproduction as a clean, one-command notebook to accompany the short paper + talk. |

## 06 — AI Safety, Alignment, Recursive Self-Improvement & Capstone

### Part A — AI Safety, Alignment & Governance

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | The AI Risk Landscape & How to Reason About It | [`anthropics/courses`](https://github.com/anthropics/courses) — work the red-teaming/eval notebooks to build a threat model + baseline harm-rate table for the support assistant. |
| Week 2 | Where Safety Enters Modern LLM Training (RLHF, RLVR, Safety Fine-Tuning) | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt a fine-tuning/classification recipe to run a refusal fine-tune and quantify the alignment tax + over-refusal rate. |
| Week 3 | Adversarial Robustness I: Jailbreaks | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the cookbook’s prompting/eval patterns to run manual + automated jailbreaks and report calibrated ASR with transcripts. |
| Week 4 | Adversarial Robustness II: Prompt Injection, Agent Hijacking & Weight Protection | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — extend a tool-use recipe to demo indirect injection + a spotlighting/quarantine defense, measuring residual ASR. |
| Week 5 | Model Specs, Content Policies & Moderation (Llama Guard, NeMo Guardrails) | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — use the moderation/classification recipe to enforce a model spec with a guard model and tune the operating point on a labeled set. |
| Week 6 | Scheming, Deception & Situational Awareness | [`anthropics/courses`](https://github.com/anthropics/courses) — reproduce an alignment-faking-style matched-pair probe and interpret the observed-vs-unobserved behavior delta honestly. |
| Week 7 | Mechanistic Interpretability I: Sparse Autoencoders (SAEs) | [`anthropics/courses`](https://github.com/anthropics/courses) — follow the interpretability material to train a small SAE on a layer and validate ≥10 features with an ablation/steering test. |
| Week 8 | Mechanistic Interpretability II: CoT Monitoring & Faithfulness | [`anthropics/courses`](https://github.com/anthropics/courses) — build a CoT monitor + faithfulness test and report monitor PR plus the model’s CoT unfaithfulness rate. |
| Week 9 | Scalable Oversight, Constitutional AI & RLAIF | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — implement a critique→revise constitutional loop, build an AI-preference set, and compare RLAIF vs human-data harm-rate. |
| Week 10 | Dangerous Capabilities, Responsible Scaling & Takeoff | [`anthropics/courses`](https://github.com/anthropics/courses) — run a strongly-elicited dangerous-capability proxy eval with Inspect AI and draft an RSP go/no-go memo tying a number to a safeguard. |
| Week 11 | Agent Safety: Autonomy, Permissions & Multi-Agent Risk | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — wrap a tool-using agent recipe with an authorization layer + human-gate and measure unsafe-action rate vs utility on AgentDojo/τ-bench. |
| Week 12 | Governance: EU AI Act, NIST AI RMF, OWASP & Standards | [`anthropics/courses`](https://github.com/anthropics/courses) — map the support assistant to EU-AI-Act/NIST-RMF obligations and produce an auditable compliance dossier. |
| Week 13 | Capstone: A Full Red-Team → Mitigation → Eval Cycle | [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — assemble a full red-team→mitigation→eval safety case for one system with an artifact-linked safety card. |

### Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems

| Lecture | Topic | Practical project |
|---|---|---|
| Week 1 | Foundations: The Five Lenses, Taxonomy & Theory of RSI | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — turn a chosen RSI-workshop paper into a runnable notebook and five-lens-classify 5 papers. |
| Week 2 | Self-Generated Data & Self-Play (and the Collapse Problem) | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce a self-play loop notebook showing collapse with vs without a diversity/verification filter. |
| Week 3 | Test-Time Self-Improvement & Inference-Time Scaling | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a verify-then-self-distill test-time loop and plot held-out pass@1 vs inference compute. |
| Week 4 | Agentic Memory & Lifelong/Continual Learning | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — implement a self-improving skill-memory notebook and measure forward transfer vs forgetting across a task stream. |
| Week 5 | Verifiers, Rewards & the Reward-Hacking Problem | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — train a verifier, red-team it for gaming, and harden it with execution grounding in a notebook. |
| Week 6 | Self-Evolving Coding Agents | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an ACE/AUTOHARNESS-style code-self-improvement loop on SWE-bench Verified vs a simple ReAct baseline. |
| Week 7 | Automated AI Research & Scientific Discovery ("AI Scientists") | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an execution-grounded propose→run→read research-loop notebook and write an honest ‘did it discover?’ verdict. |
| Week 8 | Open-Ended Discovery & Evolutionary Self-Improvement | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — implement a pairwise-comparison evolutionary loop (prompts/programs) and plot novelty vs quality. |
| Week 9 | Self-Improving Reasoning: Curricula at the Edge of Learnability | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — add a learnability-estimating curriculum + a GRPO controller and show frontier-vs-random learning-speed in a notebook. |
| Week 10 | Tiny Recursive Models & Iterative Architectures | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — train a tiny looped/recursive model vs a same-compute deep transformer on an algorithmic task in a notebook. |
| Week 11 | Multimodal, World-Model & Embodied Self-Improvement | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a policy↔world-model co-improvement loop in sim and track success-rate + a safety caveat note. |
| Week 12 | Benchmarks & Evidence: Proving a System Actually Self-Improved | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a frozen-held-out + leakage-audit + loop-off-ablation harness and re-score which weekly gains survive. |
| Week 13 | Safety, Unlearning & Governance of Self-Improving Systems | [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — run a tamper/reward-hack/unlearning safety battery on your loop and write a 2-page safety case. |

### Part C — Capstone: Build & Ship an Agentic AI System

| Lecture | Topic | Practical project |
|---|---|---|
| Milestone 1 | Proposal & Problem Framing | [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its project-scoping/metrics structure to write the charter + `metrics.yaml` and run the feasibility spike. |
| Milestone 2 | Data, RAG & Prototype | [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its end-to-end RAG pipeline (ingestion→hybrid retrieval→rerank) and measure recall@k + Ragas faithfulness. |
| Milestone 3 | Multi-Agent System with MCP + Fine-Tuning | [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — template a multi-agent app, expose tools via MCP, and add a justified fine-tune-or-not decision record. |
| Milestone 4 | Evaluation Harness & Safety Review | [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — reuse its testing/CI patterns to make evals a merge gate, then add a HarmBench/AgentDojo red-team + system card. |
| Milestone 5 | LLMOps/AgentOps Production Deployment | [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/CI-CD path to ship the system with an eval-gated pipeline, dashboard, and rehearsed rollback. |
| Milestone 6 | Monitored Production, Final Report & Showcase | [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its monitoring/iteration guidance to run a drift-sampling window and ship one closed-loop fix with a postmortem. |

