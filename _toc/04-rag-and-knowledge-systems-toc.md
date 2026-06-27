# Detailed Table of Contents — Subject 04 — Retrieval-Augmented Generation & Knowledge Systems

_Source: `04-rag-and-knowledge-systems.md` · **1 academic quarter · 3 lecture-hours/week · 10 weekly lectures (~30 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline
_3-hour block · 🔧 skill: `$rag-baseline` · ▶ project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — clone the intro RAG notebook and rebuild it as your load→chunk→embed→retrieve→generate baseline over the AcmeCorp wiki._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The RAG loop |
| 00:30–01:00 | M2 | Embedding |
| 01:00–01:30 | M3 | Cosine similarity |
| 01:30–02:00 | M4 | Top-k retrieval & context stuffing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — clone the intro RAG notebook and rebuild it as your load→chunk→embed→retrieve→generate baseline over the AcmeCorp wiki. |

### Lecture 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality
_3-hour block · 🔧 skill: `$chunk-strategist` · ▶ project: [`krishnaik06/Updated-Langchain`](https://github.com/krishnaik06/Updated-Langchain) — use its document-loader and text-splitter modules to implement and compare fixed/recursive/semantic chunkers on the PDF policy pack._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chunk |
| 00:30–01:00 | M2 | Recursive splitting |
| 01:00–01:30 | M3 | Semantic chunking |
| 01:30–02:00 | M4 | Structure-aware & parent/child |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Updated-Langchain`](https://github.com/krishnaik06/Updated-Langchain) — use its document-loader and text-splitter modules to implement and compare fixed/recursive/semantic chunkers on the PDF policy pack. |

### Lecture 3 — Vector Databases: Indexes, ANN, and Choosing Your Store
_3-hour block · 🔧 skill: `$vectordb-selector` · ▶ project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — port one of its RAG apps across Chroma/Qdrant/pgvector and benchmark recall@10 vs p95 latency._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ANN vs exact search |
| 00:30–01:00 | M2 | HNSW |
| 01:00–01:30 | M3 | Metadata filtering |
| 01:30–02:00 | M4 | Distance metric must match training |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — port one of its RAG apps across Chroma/Qdrant/pgvector and benchmark recall@10 vs p95 latency. |

### Lecture 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top
_3-hour block · 🔧 skill: `$retriever-stack` · ▶ project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — run its fusion-retrieval and reranking notebooks (BM25+dense+RRF → Cohere/BGE rerank) on your corpus and measure the per-stage lift._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | BM25 |
| 00:30–01:00 | M2 | Dense vs sparse failure modes |
| 01:00–01:30 | M3 | Reciprocal Rank Fusion |
| 01:30–02:00 | M4 | Cross-encoder reranker |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — run its fusion-retrieval and reranking notebooks (BM25+dense+RRF → Cohere/BGE rerank) on your corpus and measure the per-stage lift. |

### Lecture 5 — Late Interaction & ColBERT: Token-Level Retrieval
_3-hour block · 🔧 skill: `$late-interaction-eval` · ▶ project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — adapt its late-interaction/ColBERT recipe and compare nDCG@10 and index size to your Week-4 hybrid+rerank stack._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Single-vector bottleneck |
| 00:30–01:00 | M2 | Late interaction (ColBERT) |
| 01:00–01:30 | M3 | PLAID / compression |
| 01:30–02:00 | M4 | When to use it |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — adapt its late-interaction/ColBERT recipe and compare nDCG@10 and index size to your Week-4 hybrid+rerank stack. |

### Lecture 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness
_3-hour block · 🔧 skill: `$rag-eval` · ▶ project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — wire its evaluation notebooks to RAGAS and compute faithfulness + context precision/recall on the frozen gold set._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Retrieval metrics |
| 00:30–01:00 | M2 | Context precision/recall (Ragas) |
| 01:00–01:30 | M3 | Faithfulness / groundedness |
| 01:30–02:00 | M4 | LLM-as-judge validity |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — wire its evaluation notebooks to RAGAS and compute faithfulness + context precision/recall on the frozen gold set. |

### Lecture 7 — Advanced RAG I: HyDE, CRAG & Self-RAG
_3-hour block · 🔧 skill: `$rag-ablation` · ▶ project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build HyDE/CRAG/Self-RAG as LangGraph nodes and ablate each against the Week-6 eval._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | HyDE |
| 00:30–01:00 | M2 | CRAG |
| 01:00–01:30 | M3 | Self-RAG |
| 01:30–02:00 | M4 | Adaptive retrieval |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build HyDE/CRAG/Self-RAG as LangGraph nodes and ablate each against the Week-6 eval. |

### Lecture 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL
_3-hour block · 🔧 skill: `$knowledge-router` · ▶ project: [`run-llama/llama_index`](https://github.com/run-llama/llama_index) — use its GraphRAG, query-router, and Text2SQL modules to route multi-hop / global / analytical queries to the right backend._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Agentic RAG |
| 00:30–01:00 | M2 | GraphRAG |
| 01:00–01:30 | M3 | Text2SQL |
| 01:30–02:00 | M4 | Query routing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`run-llama/llama_index`](https://github.com/run-llama/llama_index) — use its GraphRAG, query-router, and Text2SQL modules to route multi-hop / global / analytical queries to the right backend. |

### Lecture 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails
_3-hour block · 🔧 skill: `$rag-prod-harness` · ▶ project: [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production RAG service to add semantic caching, injection guardrails, and a measured p95/cost SLA._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-context vs RAG; Semantic caching |
| 00:30–01:00 | M2 | Prompt injection via retrieved content |
| 01:00–01:30 | M3 | Grounding/citation guardrail |
| 01:30–02:00 | M4 | RAG lifecycle & retrieval drift |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production RAG service to add semantic caching, injection guardrails, and a measured p95/cost SLA. |

### Lecture 10 — Capstone: A Production Document-QA / Knowledge Portal
_3-hour block · 🔧 skill: `$rag-evidence-packet` · ▶ project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — fork a full RAG app and extend it into your routed, guarded, eval-gated knowledge portal._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — fork a full RAG app and extend it into your routed, guarded, eval-gated knowledge portal. |

