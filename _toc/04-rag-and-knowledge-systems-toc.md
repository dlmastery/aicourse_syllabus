# Detailed Table of Contents — Subject 04 — Retrieval-Augmented Generation & Knowledge Systems

_Source: `04-rag-and-knowledge-systems.md` · **1 academic quarter · 3 lecture-hours/week · 10 weekly lectures (~30 contact hours)**_

### Lecture 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline
_3-hour block · 🔧 reusable skill: `$rag-baseline`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The RAG loop |
| 00:30–01:00 | M2 | Embedding |
| 01:00–01:30 | M3 | Cosine similarity |
| 01:30–02:00 | M4 | Top-k retrieval & context stuffing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ingest.py: load 200 wiki pages, fixed 512-token chunks, embed with bge-m3, store vectors + text in a |

### Lecture 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality
_3-hour block · 🔧 reusable skill: `$chunk-strategist`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Chunk |
| 00:30–01:00 | M2 | Recursive splitting |
| 01:00–01:30 | M3 | Semantic chunking |
| 01:30–02:00 | M4 | Structure-aware & parent/child |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | chunkers.py: implement/compare fixed, recursive, and semantic chunkers; parse PDFs with unstructured |

### Lecture 3 — Vector Databases: Indexes, ANN, and Choosing Your Store
_3-hour block · 🔧 reusable skill: `$vectordb-selector`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ANN vs exact search |
| 00:30–01:00 | M2 | HNSW |
| 01:00–01:30 | M3 | Metadata filtering |
| 01:30–02:00 | M4 | Distance metric must match training |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | vectordb_bench.py: load 1M chunks (AcmeCorp + synthetic padding) into Chroma, pgvector, and Qdrant;  |

### Lecture 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top
_3-hour block · 🔧 reusable skill: `$retriever-stack`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | BM25 |
| 00:30–01:00 | M2 | Dense vs sparse failure modes |
| 01:00–01:30 | M3 | Reciprocal Rank Fusion |
| 01:30–02:00 | M4 | Cross-encoder reranker |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | hybrid.py: BM25 (rank_bm25 or OpenSearch) + dense, fuse with RRF; rerank.py: re-score fused top-50 w |

### Lecture 5 — Late Interaction & ColBERT: Token-Level Retrieval
_3-hour block · 🔧 reusable skill: `$late-interaction-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Single-vector bottleneck |
| 00:30–01:00 | M2 | Late interaction (ColBERT) |
| 01:00–01:30 | M3 | PLAID / compression |
| 01:30–02:00 | M4 | When to use it |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | colbert_lab.py: index AcmeCorp + a BEIR set with ColBERTv2 via RAGatouille; compare nDCG@10 and inde |

### Lecture 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness
_3-hour block · 🔧 reusable skill: `$rag-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Retrieval metrics |
| 00:30–01:00 | M2 | Context precision/recall (Ragas) |
| 01:00–01:30 | M3 | Faithfulness / groundedness |
| 01:30–02:00 | M4 | LLM-as-judge validity |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ragas_eval.py: assemble a 100-question gold set (HotpotQA + 50 AcmeCorp) with reference answers + re |

### Lecture 7 — Advanced RAG I: HyDE, CRAG & Self-RAG
_3-hour block · 🔧 reusable skill: `$rag-ablation`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | HyDE |
| 00:30–01:00 | M2 | CRAG |
| 01:00–01:30 | M3 | Self-RAG |
| 01:30–02:00 | M4 | Adaptive retrieval |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | hyde.py, crag.py, self_rag.py as LangGraph nodes over the Week 6 pipeline; each is an ablation toggl |

### Lecture 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL
_3-hour block · 🔧 reusable skill: `$knowledge-router`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Agentic RAG |
| 00:30–01:00 | M2 | GraphRAG |
| 01:00–01:30 | M3 | Text2SQL |
| 01:30–02:00 | M4 | Query routing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | agentic_rag.py (LangGraph): planner + retriever + reflector with a step budget |

### Lecture 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails
_3-hour block · 🔧 reusable skill: `$rag-prod-harness`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Long-context vs RAG |
| 00:30–01:00 | M2 | Semantic caching |
| 01:00–01:30 | M3 | Prompt injection via retrieved content |
| 01:30–02:00 | M4 | Grounding/citation guardrail |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | serve.py: FastAPI portal with an LLM gateway, semantic cache, and streaming; measure p95 latency and |

### Lecture 10 — Capstone: A Production Document-QA / Knowledge Portal
_3-hour block · 🔧 reusable skill: `$rag-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick a real corpus (your own org's docs, a public dataset like a Wikipedia subset, or extend AcmeCor |

