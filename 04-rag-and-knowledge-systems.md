# Subject 04 — Retrieval-Augmented Generation & Knowledge Systems

**Track:** Applications · **Altitude:** Builder → Engineer · **Length:** 10 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 02 (transformers/embeddings) and Subject 03 (LLM app basics) or equivalent: you can call an LLM API, write Python, and read a PyTorch tensor shape. Subject 01's evidence discipline is assumed.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop, applied to retrieval systems. You will build a naive RAG baseline in Week 1 and spend nine weeks earning every piece of added complexity against a measured eval — never adding a reranker, a graph, or an agent until the numbers say the simpler system fails.

**Course anchor case (carried all 10 weeks):** *AcmeCorp Knowledge Portal* — a document-QA assistant over a messy enterprise corpus (product docs, PDFs of policies, Confluence-style wiki exports, a `tickets` SQL table, and an org/product knowledge graph). A second public case, *HotpotQA multi-hop questions*, is used wherever we need labeled relevance/answers to compute honest metrics. Every technique lands on these two corpora so improvements are comparable week to week.

**What you leave with:** a `rag-portal/` repo containing an ingestion pipeline, a swappable retriever stack (dense / hybrid / reranked / late-interaction / graph / SQL), a Ragas-based eval harness with a frozen gold set, seven reusable skills, and an evidence log proving each upgrade beat the previous baseline — not a folder of demo notebooks.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 10 lectures (~30 contact hrs). Full time-boxed lecture plan: [`_toc/04-rag-and-knowledge-systems-toc.md`](_toc/04-rag-and-knowledge-systems-toc.md)._

1. **Lecture 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline** — The RAG loop · Embedding · Cosine similarity · Top-k retrieval & context stuffing  ·  🔧 `$rag-baseline`
2. **Lecture 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality** — Chunk · Recursive splitting · Semantic chunking · Structure-aware & parent/child  ·  🔧 `$chunk-strategist`
3. **Lecture 3 — Vector Databases: Indexes, ANN, and Choosing Your Store** — ANN vs exact search · HNSW · Metadata filtering · Distance metric must match training  ·  🔧 `$vectordb-selector`
4. **Lecture 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top** — BM25 · Dense vs sparse failure modes · Reciprocal Rank Fusion · Cross-encoder reranker  ·  🔧 `$retriever-stack`
5. **Lecture 5 — Late Interaction & ColBERT: Token-Level Retrieval** — Single-vector bottleneck · Late interaction (ColBERT) · PLAID / compression · When to use it  ·  🔧 `$late-interaction-eval`
6. **Lecture 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness** — Retrieval metrics · Context precision/recall (Ragas) · Faithfulness / groundedness · LLM-as-judge validity  ·  🔧 `$rag-eval`
7. **Lecture 7 — Advanced RAG I: HyDE, CRAG & Self-RAG** — HyDE · CRAG · Self-RAG · Adaptive retrieval  ·  🔧 `$rag-ablation`
8. **Lecture 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL** — Agentic RAG · GraphRAG · Text2SQL · Query routing  ·  🔧 `$knowledge-router`
9. **Lecture 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails** — Long-context vs RAG · Semantic caching · Prompt injection via retrieved content · Grounding/citation guardrail  ·  🔧 `$rag-prod-harness`
10. **Lecture 10 — Capstone: A Production Document-QA / Knowledge Portal**  ·  🔧 `$rag-evidence-packet`

---

## Course-level Assessment & grading (weights sum to 100%)

| Component | Weight | What it covers |
|-----------|-------:|----------------|
| Weekly labs (Weeks 1–9, deliverable each week) | 55% | The per-week build + evidence artifact (weights listed per week below) |
| Midterm eval audit (after Week 6) | 10% | A written audit of your own retriever using the Week 6 eval harness: claims must trace to metric files |
| Capstone knowledge portal (Week 10) | 25% | End-to-end production document-QA system + evidence packet |
| Reading responses & critique (continuous) | 10% | 1 short response per week on an assigned paper; one peer eval-review |

Per-week lab weights (the 55%): W1 5 · W2 5 · W3 6 · W4 7 · W5 6 · W6 8 · W7 6 · W8 7 · W9 5 = **55%**.

## Tooling & environment (June 2026)

- **Python** 3.12, `uv` for envs, pinned deps, seeded everything.
- **Orchestration:** LangChain 0.3.x / LangGraph 0.3.x and LlamaIndex 0.12.x (you will use both and compare; LangGraph for the agentic weeks).
- **Embeddings:** OpenAI `text-embedding-3-large`, Cohere `embed-v4`, and open `BAAI/bge-m3` / `nomic-embed-text-v1.5` via `sentence-transformers` 3.x.
- **Vector DBs:** Chroma (local dev), pgvector 0.7+ on Postgres 16, Qdrant 1.12, Weaviate 1.28, Pinecone (serverless) — one per Week-3 lab section.
- **Rerankers:** Cohere `rerank-v3.5`, `BAAI/bge-reranker-v2-m3`, and ColBERT via `RAGatouille` / `colbert-ai`.
- **Lexical:** Elasticsearch/OpenSearch BM25 or `rank_bm25` for the small corpus.
- **Eval:** Ragas 0.2.x, `trec_eval` / `pytrec_eval` for MAP/nDCG, BEIR harness, LangSmith or Arize Phoenix for traces.
- **Graph/SQL:** Neo4j 5.x + `neo4j-graphrag`, Microsoft GraphRAG; DuckDB/Postgres for Text2SQL.
- **Models:** Claude Opus 4.x / Sonnet 4.x and GPT-5.x for generation; a local 7–8B (Llama 4 scout-class / Qwen 3) via vLLM for cost-controlled eval loops.

---

## Week 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline

### State of the Art (June 2026)
- Embedding frontier: Voyage `voyage-3-large`, Cohere `embed-v4`, OpenAI `text-embedding-3-large`, open `BGE-M3` / `nomic-embed` — choose by retrieval eval, not leaderboard rank.
- 1M-context models (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro) make "just stuff everything" tempting, but cost, latency, and lost-in-the-middle keep retrieval essential.
- Consensus is **retrieve-then-read**: long context reshapes RAG but doesn't kill it — RAG still owns freshness, citations, and cost control.
- The durable 2026 lesson is unchanged: instrument the retrieval-miss vs generation-miss split on a frozen baseline *before* adding any machinery.

**Altitude:** Builder · **Format:** 3h lecture + 4h lab
**Anchor case:** ingest 200 AcmeCorp wiki pages, answer 20 hand-written questions with a "stuff-the-top-3-chunks" pipeline, and measure how often it's right.

### Learning goals
- Explain *why* RAG exists: ground an LLM in a private/fresh corpus to cut hallucination and stale-knowledge errors, without retraining.
- Implement a minimal end-to-end RAG pipeline (load → chunk → embed → store → retrieve → stuff → generate) and read its failures.
- Compute and interpret cosine similarity between query and chunk embeddings, by hand and with a library.
- State the naive-RAG baseline number that every later week must beat.

### Concept map
- **The RAG loop.** Plain English: instead of asking the model from memory, fetch relevant text first and put it in the prompt. Where it matters: private docs, freshness, citations. Common mistake: treating RAG as a model upgrade rather than a *retrieval* problem — most failures are retrieval failures, not generation failures.
- **Embedding.** *Formula:* `e = f_θ(text) ∈ ℝ^D`. *Symbols:* `f_θ` the embedding model, `D` the dimension (e.g., 1024 for bge-m3, 3072 for text-embedding-3-large). *Shapes:* one chunk → one `D`-vector; a corpus of `N` chunks → matrix `E ∈ ℝ^{N×D}`. *Plain English:* a learned coordinate for meaning, where nearby = similar. *Tiny example:* "reset password" and "forgot my login" land close; "refund policy" lands far. *Code mapping:* `E = model.encode(chunks)`. *Common mistake:* embedding query and documents with *different* models or with/without the required instruction prefix.
- **Cosine similarity.** *Formula:* `cos(q, e) = (q·e)/(‖q‖‖e‖)`. *Shapes:* `(D)·(D) → scalar` in `[-1,1]`. *Plain English:* angle between two meaning-vectors; 1 = same direction. *Code mapping:* `sims = (Eq @ E.T) / (norm...)`. *Common mistake:* comparing raw dot products across un-normalized vectors and calling it "similarity."
- **Top-k retrieval & context stuffing.** Why it matters: you can only afford a few chunks in context; the retriever's job is to make those few the right ones. Common mistake: cranking k until the answer is *somewhere* in context but the model can't find it ("lost in the middle").

### Hands-on build (the lab)
- `ingest.py`: load 200 wiki pages, fixed 512-token chunks, embed with `bge-m3`, store vectors + text in a local Chroma collection.
- `ask.py`: embed the question, cosine top-3, stuff into a Claude/GPT prompt with a "answer only from context, else say you don't know" instruction, print answer + cited chunk ids.
- `eval_manual.py`: 20 hand-written Q/A pairs; mark each answer correct/incorrect/refused by hand; record accuracy in `evidence/week01-baseline.md`.
- **Deliverable:** a runnable naive-RAG pipeline + the baseline accuracy number with units.
  **Acceptance:** pipeline answers all 20 questions; baseline accuracy reported with the count of retrieval-misses vs generation-misses separated.

▶ **Practical project:** `krishnaik06/RAG-Tutorials` — clone the intro RAG notebook and rebuild it as your load→chunk→embed→retrieve→generate baseline over the AcmeCorp wiki.

### Harness / reusable skill — `$rag-baseline`
- **Purpose:** for any new corpus, stand up the simplest honest RAG pipeline and its eval before any optimization.
- **Inputs:** a document folder + a handful of Q/A pairs.
- **Required outputs:** ingest script, ask script, baseline accuracy, and a split of errors into *retrieval miss* (right chunk never retrieved) vs *generation miss* (right chunk retrieved, wrong answer).
- **Minimal workflow:** chunk → embed → store → retrieve → generate → label errors.
- **Evidence artifact:** `evidence/week01-baseline.md` with the accuracy line and the retrieval/generation error split.

### Common failure modes
- **Query/doc embedding mismatch** → silently bad retrieval. *Fix:* one model, correct prefixes, asserted in code.
- **No baseline** → later "improvements" are unfalsifiable. *Fix:* freeze the 20-question set and its number on day one.
- **Blaming the LLM for a retrieval bug** → tuning prompts when the right chunk was never fetched. *Fix:* always separate retrieval-miss from generation-miss.
- **Un-normalized similarity** → nonsense neighbors. *Fix:* normalize or use a cosine index explicitly.

### Evidence artifact
`evidence/week01-baseline.md`: baseline accuracy, retrieval-vs-generation error split, and the frozen 20-question gold file committed to git.

### Skill sink-in
Before running eval, **predict** what fraction of the 20 failures will be retrieval misses vs generation misses. Run it. Record the **result** and what **changed** in your belief about where RAG breaks.

### Dataset(s)
- **AcmeCorp wiki subset** (provided in `data/acme/`, ~200 markdown pages, ~3 MB, course-internal synthetic license — free to use/modify).
- **HotpotQA** (distractor dev subset, 500 questions) — `huggingface.co/datasets/hotpotqa/hotpot_qa`, ~550 MB full / use 500-row slice, CC BY-SA 4.0. Used from Week 6 for labeled relevance.

### Code stub
```python
import chromadb
from sentence_transformers import SentenceTransformer

emb = SentenceTransformer("BAAI/bge-m3")
client = chromadb.PersistentClient(path="data/chroma")
col = client.get_or_create_collection("acme", metadata={"hnsw:space": "cosine"})

def ingest(chunks: list[str], ids: list[str]) -> None:
    vecs = emb.encode(chunks, normalize_embeddings=True)   # (N, 1024)
    col.add(ids=ids, embeddings=vecs.tolist(), documents=chunks)

def retrieve(question: str, k: int = 3) -> list[str]:
    qv = emb.encode([question], normalize_embeddings=True)  # (1, 1024)
    res = col.query(query_embeddings=qv.tolist(), n_results=k)
    return res["documents"][0]                              # top-k chunk texts
# TODO: feed retrieve(q) into your LLM prompt; label each answer correct/miss-type
```

### Graded rubric (Week 1 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Pipeline runs end-to-end; baseline number reproducible from seed | Crashes or non-deterministic |
| Evidence | Errors split into retrieval vs generation with counts | Single accuracy number, no breakdown |
| Reasoning | Names which error class dominates and why | "It mostly works" |
| Reproducibility | Frozen gold set + pinned models committed | Gold set editable / models unpinned |

### Assessment weight
**5%** of course grade.

### Reading list
- Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," NeurIPS 2020 (the original RAG paper).
- Reimers & Gurevych, "Sentence-BERT," EMNLP 2019 (why we embed sentences, not pool tokens naively).
- Liu et al., "Lost in the Middle: How Language Models Use Long Contexts," TACL 2024.
- BGE-M3: Chen et al., "BGE M3-Embedding: Multi-Lingual, Multi-Functionality, Multi-Granularity," 2024.
- Source book Ch. 10–11 (retrieval & grounding); CMU 11-711 "RAG" lecture (Akari Asai).

---

## Week 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality

### State of the Art (June 2026)
- **Visual/layout-aware retrieval (ColPali / ColQwen3)** lets you retrieve PDFs and tables without brittle OCR — a major 2026 shift in document processing.
- Parsing stack: `unstructured`, LlamaParse, `docling` for tables/figures; structure-aware and parent/child chunking are now the default over fixed-size.
- 1M-context models tolerate larger chunks, but precision still rewards semantic / proposition-level splitting measured on your eval.
- Agentic chunking (an LLM picks boundaries) is emerging but only cost-justified when it beats a recursive baseline on the frozen set.

**Altitude:** Builder · **Anchor case:** the AcmeCorp PDFs (policy docs with tables, headers, multi-column layout) that Week 1's naive splitter mangled.

### Learning goals
- Explain why chunk boundaries determine retrieval ceiling: a fact split across two chunks can never be retrieved whole.
- Compare fixed-size, recursive, semantic, and structure-aware (Markdown/HTML/table) chunking and pick deliberately.
- Handle real document parsing (PDF, tables, code) and metadata enrichment for filtering.
- Measure chunking's effect on the Week 1 baseline.

### Concept map
- **Chunk.** Plain English: the atomic unit you retrieve and stuff. Where it matters: too big = diluted relevance + wasted context; too small = facts get severed. Common mistake: one global chunk size for heterogeneous docs.
- **Recursive splitting.** *Idea:* split on a priority list of separators (`\n\n` → `\n` → sentence → token) until under a size cap. *Code mapping:* `RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=64)`. *Common mistake:* zero overlap, so a sentence straddling a boundary loses context.
- **Semantic chunking.** *Idea:* start a new chunk where adjacent-sentence embedding similarity drops below a threshold. *Formula:* break at `i` where `cos(s_i, s_{i+1}) < τ`. *Plain English:* cut at topic shifts, not arbitrary lengths. *Common mistake:* cost — embedding every sentence; and instability of `τ` across doc types.
- **Structure-aware & parent/child.** Why it matters: retrieve a small precise child chunk but feed the model its larger parent section (context expansion). Common mistake: ignoring tables/headers, turning a 2-D table into unparseable text soup.

### Hands-on build
- `chunkers.py`: implement/compare fixed, recursive, and semantic chunkers; parse PDFs with `unstructured`/`pymupdf`; preserve `source`, `section`, `page` metadata.
- Re-embed AcmeCorp under each strategy; re-run the Week 1 eval; build `evidence/week02-chunking.md` table: strategy × accuracy × avg chunk size × retrieval-miss rate.
- **Deliverable:** chunking comparison table + a one-paragraph justified choice. **Acceptance:** the chosen strategy beats Week 1's retrieval-miss rate, and the win is attributed to a mechanism, not luck.

▶ **Practical project:** `krishnaik06/Updated-Langchain` — use its document-loader and text-splitter modules to implement and compare fixed/recursive/semantic chunkers on the PDF policy pack.

### Harness / reusable skill — `$chunk-strategist`
- **Purpose:** pick and justify a chunking strategy for a given corpus by measuring, not guessing.
- **Inputs:** a document set + the frozen eval.
- **Required outputs:** comparison table across ≥3 strategies, the failure examples each fixes/causes, and a final pick with the mechanism named.
- **Minimal workflow:** parse → chunk (≥3 ways) → embed → eval → tabulate → decide.
- **Evidence artifact:** `evidence/week02-chunking.md`.

### Common failure modes
- **One-size chunking** → tables and prose chunked identically. *Fix:* route by document type.
- **No overlap** → boundary facts unretrievable. *Fix:* 10–20% overlap or parent/child.
- **Metadata loss** → can't filter by product/date later. *Fix:* carry source/section/page through ingestion.
- **Semantic-chunk cargo-culting** → expensive and unstable for marginal gain. *Fix:* only adopt if it beats recursive on *your* eval.

### Evidence artifact
`evidence/week02-chunking.md` (strategy comparison + chosen-strategy justification + 2 fixed-failure examples).

### Skill sink-in
Predict whether semantic chunking will beat recursive on the PDF policy docs *before* running. Measure. Record the gap and whether the extra cost was worth it.

### Dataset(s)
- **AcmeCorp PDF policy pack** (`data/acme/pdfs/`, ~40 PDFs, ~25 MB, course-internal license).
- **Optional real corpus:** `huggingface.co/datasets/pile-of-law/pile-of-law` (subset) — large, CC BY-NC-SA / mixed; use a small slice for table/structure stress-testing.

### Code stub
```python
from langchain_text_splitters import RecursiveCharacterTextSplitter
import numpy as np

def semantic_chunks(sentences: list[str], emb, tau: float = 0.55) -> list[str]:
    vecs = emb.encode(sentences, normalize_embeddings=True)     # (S, D)
    sims = (vecs[:-1] * vecs[1:]).sum(axis=1)                   # (S-1,) adjacent cos
    out, cur = [], [sentences[0]]
    for i, s in enumerate(sims):
        if s < tau:                       # topic shift -> close chunk
            out.append(" ".join(cur)); cur = []
        cur.append(sentences[i + 1])
    out.append(" ".join(cur))
    return out
# Baseline to beat: RecursiveCharacterTextSplitter(chunk_size=512, chunk_overlap=64)
```

### Graded rubric (Week 2 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | ≥3 strategies implemented; PDFs parsed with tables intact | Only fixed-size; tables dropped |
| Evidence | Table with accuracy + retrieval-miss + chunk-size columns | Accuracy only |
| Reasoning | Win attributed to a named mechanism + failure examples | "Semantic is better" with no evidence |
| Reproducibility | Metadata preserved; re-runnable | Metadata lost; manual steps |

### Assessment weight
**5%** of course grade.

### Reading list
- Greg Kamradt, "5 Levels of Text Splitting" (2024) — the practitioner taxonomy (fixed→semantic→agentic).
- "Dense X Retrieval: What Retrieval Granularity Should We Use?" Chen et al., EMNLP 2024 (propositions vs passages).
- "Unstructured.io" docs (2025) — production document parsing patterns.
- LlamaIndex docs: Node parsers & parent/child retrievers (2025–2026).

---

## Week 3 — Vector Databases: Indexes, ANN, and Choosing Your Store

### State of the Art (June 2026)
- Production stores: Qdrant, Weaviate, Pinecone (serverless), pgvector — HNSW the default index; native pre-filtering and hybrid search are now table stakes.
- Vector quantization (binary / scalar / PQ, int8/FP8) cuts memory 4–32× at a controlled recall cost — measure recall@k vs exact, not just QPS.
- Real selection criteria are metadata pre-filtering, multi-tenancy (namespaces/collections), and ops model — not raw benchmark throughput.
- MoE + 1M-context models push the bottleneck back onto retrieval quality, so honest recall measurement matters more, not less.

**Altitude:** Builder → Engineer · **Anchor case:** AcmeCorp grows to 1M chunks; brute-force cosine is too slow — you need a real index with metadata filters.

### Learning goals
- Explain approximate nearest neighbor (ANN) search and the HNSW index: graph structure, `M`, `ef_construction`, `ef_search`, and the recall/latency tradeoff.
- Compare Chroma, pgvector, Qdrant, Weaviate, and Pinecone on capability (filters, hybrid, scale, ops) and pick for a use case.
- Implement metadata-filtered retrieval and namespaces/collections for multi-tenant docs.
- Measure recall@k of an ANN index vs exact search.

### Concept map
- **ANN vs exact search.** Plain English: exact = compare to all N; ANN = compare to a clever subset, trading a little accuracy for huge speed. Common mistake: assuming the vector DB returns the *true* nearest neighbors (it returns approximate ones).
- **HNSW.** *Idea:* a multi-layer navigable small-world graph; search greedily from a top entry point down. *Params:* `M` (neighbors/node), `ef_construction` (build quality), `ef_search` (query-time breadth). *Shapes:* index over `E ∈ ℝ^{N×D}`. *Plain English:* a skip-list-like graph you hop through toward the query. *Common mistake:* leaving `ef_search` at a default that gives 70% recall and blaming the embedding model.
- **Metadata filtering.** Why it matters: "only docs for product X, after 2025" — pre- vs post-filtering changes recall and latency. Common mistake: post-filtering after top-k, so the right doc was already cut.
- **Distance metric must match training.** *Idea:* cosine vs dot vs L2; use what the embedding model was trained for. Common mistake: L2 on vectors meant for cosine.

### Hands-on build
- `vectordb_bench.py`: load 1M chunks (AcmeCorp + synthetic padding) into Chroma, pgvector, and Qdrant; measure index build time, p95 query latency, and recall@10 vs exact NumPy search; sweep `ef_search`.
- Implement a metadata-filtered query (product + date) in each; show pre-filter vs post-filter recall difference.
- **Deliverable:** `evidence/week03-vectordb.md` with the recall/latency/cost table and a justified DB choice for the portal. **Acceptance:** you report recall@10 (not just latency) and pick a DB with a stated tradeoff reason.

▶ **Practical project:** `Shubhamsaboo/awesome-llm-apps` — port one of its RAG apps across Chroma/Qdrant/pgvector and benchmark recall@10 vs p95 latency.

### Harness / reusable skill — `$vectordb-selector`
- **Purpose:** choose and configure a vector store from measured recall/latency/ops needs, not hype.
- **Inputs:** corpus size, filter needs, scale/ops constraints.
- **Required outputs:** recall@k and p95 latency per candidate, filtering behavior, ops notes (managed vs self-host), and a justified pick.
- **Evidence artifact:** `evidence/week03-vectordb.md`.

### Common failure modes
- **Recall blindness** → tuning latency while silently returning wrong neighbors. *Fix:* always measure recall@k vs exact.
- **Default index params** → 70% recall out of the box. *Fix:* sweep `ef_search`/`M`, pick the knee.
- **Post-filtering trap** → filter throws away already-too-few results. *Fix:* use the DB's native pre-filtering.
- **Metric mismatch** → cosine model on an L2 index. *Fix:* set the space to match the embedding.

### Evidence artifact
`evidence/week03-vectordb.md` (recall/latency/cost table + filtering test + DB decision).

### Skill sink-in
Predict the `ef_search` value where recall@10 crosses 0.95. Sweep it. Record the latency cost of that recall and whether you'd pay it in production.

### Dataset(s)
- **AcmeCorp 1M-chunk index** (Week 2 output + synthetic padding generator in `data/`).
- **Benchmark reference:** ANN-Benchmarks datasets (e.g., `glove-100-angular`, `sift-128-euclidean`) — `github.com/erikbern/ann-benchmarks`, public, for calibrating recall/latency intuition.

### Code stub
```python
import numpy as np, time
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance

qc = QdrantClient(":memory:")
qc.create_collection("acme",
    vectors_config=VectorParams(size=1024, distance=Distance.COSINE))

def recall_at_k(qc, E, queries, gt, k=10, ef=64):
    hits = 0
    for q, true_ids in zip(queries, gt):
        res = qc.query_points("acme", query=q.tolist(), limit=k,
                              search_params={"hnsw_ef": ef}).points
        got = {p.id for p in res}
        hits += len(got & set(true_ids[:k])) / k
    return hits / len(queries)        # compare vs exact argsort(E @ queries.T)
# TODO: sweep ef in [16,32,64,128,256]; plot recall vs p95 latency
```

### Graded rubric (Week 3 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | recall@k measured vs exact on ≥2 DBs | Latency only, no recall |
| Evidence | ef sweep + filter pre/post comparison | Single config |
| Reasoning | DB pick justified by tradeoff, not popularity | "Everyone uses X" |
| Reproducibility | Seeded data, scripted benchmark | Manual, unrepeatable |

### Assessment weight
**6%** of course grade.

### Reading list
- Malkov & Yashunin, "Efficient and Robust Approximate Nearest Neighbor Search using HNSW," IEEE TPAMI 2020 (the HNSW paper).
- Johnson, Douze & Jégou, "Billion-scale similarity search with GPUs" (FAISS), 2017.
- pgvector docs + Jonathan Katz, "Scaling pgvector" (2024–2025).
- Qdrant / Weaviate / Pinecone architecture docs (2025–2026); ANN-Benchmarks methodology.

---

## Week 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top

### State of the Art (June 2026)
- Reranker frontier: **Cohere Rerank 3.5, Voyage `rerank-2.5`, `BGE-reranker-v2`** — cross-encoder rescoring of top-50 → top-5 is the standard precision upgrade.
- BM25 + dense + **RRF** remains the robust default; exact-code/SKU queries keep lexical signal indispensable.
- HyDE bridges query/doc vocabulary mismatch; reranking is still the highest-ROI single upgrade after a baseline.
- Reranker latency/cost is now budgeted explicitly (cache + batch) rather than treated as free.

**Altitude:** Engineer · **Anchor case:** AcmeCorp queries with exact codes/SKUs ("error E-4021") where pure dense retrieval whiffs but keyword match nails it.

### Learning goals
- Explain why lexical (BM25) and dense retrieval fail differently, and why fusing them beats either.
- Implement hybrid retrieval with Reciprocal Rank Fusion (RRF) and tune the weighting.
- Add a cross-encoder reranker (Cohere `rerank-v3.5`, `bge-reranker-v2-m3`) over the fused candidates and measure the lift.
- Quantify precision gains with nDCG on labeled data.

### Concept map
- **BM25.** *Formula:* `score(q,d) = Σ_t IDF(t)·(f_{t,d}(k₁+1))/(f_{t,d}+k₁(1−b+b·|d|/avgdl))`. *Symbols:* `f_{t,d}` term freq, `IDF` rarity, `k₁`/`b` tuning. *Plain English:* rewards rare query words that appear often in a short doc. *Code mapping:* `BM25Okapi(corpus).get_scores(query)`. *Common mistake:* dropping BM25 entirely because "embeddings are smarter" — they miss exact IDs/codes.
- **Dense vs sparse failure modes.** Dense: great on paraphrase, weak on rare exact tokens. Sparse: great on exact tokens, blind to synonyms. Why it matters: their errors are complementary.
- **Reciprocal Rank Fusion.** *Formula:* `RRF(d) = Σ_r 1/(k + rank_r(d))`, `k≈60`. *Plain English:* combine ranked lists by rewarding things ranked high in *any* list. *Common mistake:* fusing raw scores from different scales instead of ranks.
- **Cross-encoder reranker.** *Idea:* jointly encode (query, doc) for a precise relevance score — too slow for the whole corpus, perfect for re-scoring the top ~50. *Common mistake:* reranking the top-3 (nothing to reorder) instead of top-50→top-5.

### Hands-on build
- `hybrid.py`: BM25 (`rank_bm25` or OpenSearch) + dense, fuse with RRF; `rerank.py`: re-score fused top-50 with Cohere and BGE rerankers, keep top-5.
- Evaluate on HotpotQA (labeled) and AcmeCorp: report nDCG@10 and recall@50 for dense / hybrid / hybrid+rerank.
- **Deliverable:** `evidence/week04-hybrid.md` with the three-stage table + a query-level breakdown of which queries each stage rescues. **Acceptance:** hybrid+rerank beats dense on nDCG@10 and you can name *which kind* of query the reranker fixes.

▶ **Practical project:** `NirDiamant/RAG_Techniques` — run its fusion-retrieval and reranking notebooks (BM25+dense+RRF → Cohere/BGE rerank) on your corpus and measure the per-stage lift.

### Harness / reusable skill — `$retriever-stack`
- **Purpose:** assemble and measure a dense→hybrid→reranked retriever, adding each stage only if it earns its latency.
- **Inputs:** corpus + labeled queries.
- **Required outputs:** nDCG/recall per stage, per-query rescue examples, latency cost per stage, and a kept-or-cut decision for each.
- **Evidence artifact:** `evidence/week04-hybrid.md`.

### Common failure modes
- **Dense-only dogma** → exact-code queries fail forever. *Fix:* keep BM25 in the mix.
- **Score fusion across scales** → one signal dominates. *Fix:* RRF on ranks, or normalize then weight.
- **Reranking too few** → no candidates to reorder. *Fix:* retrieve 50–100, rerank to 5.
- **Ignoring reranker latency/cost** → +300ms per query unbudgeted. *Fix:* measure and cache.

### Evidence artifact
`evidence/week04-hybrid.md` (3-stage nDCG/recall table + per-query rescues + latency note).

### Skill sink-in
Predict how many of 20 "exact-code" AcmeCorp queries hybrid rescues over dense-only. Measure. Record what the reranker added *on top* and at what latency.

### Dataset(s)
- **BEIR** benchmark suite — `huggingface.co/BeIR`, multiple IR datasets with qrels (e.g., `BeIR/scifact` ~5MB, `BeIR/nfcorpus`), mixed open licenses (CC BY-SA / dataset-specific). The standard for nDCG/recall.
- **HotpotQA** (from Week 1) for multi-hop labeled relevance.

### Code stub
```python
from rank_bm25 import BM25Okapi

def rrf_fuse(dense_ids, sparse_ids, k=60, top=50):
    scores = {}
    for rank, did in enumerate(dense_ids):
        scores[did] = scores.get(did, 0) + 1 / (k + rank)
    for rank, did in enumerate(sparse_ids):
        scores[did] = scores.get(did, 0) + 1 / (k + rank)
    return sorted(scores, key=scores.get, reverse=True)[:top]

def rerank(query, docs, cohere_client, top=5):
    r = cohere_client.rerank(model="rerank-v3.5", query=query,
                             documents=docs, top_n=top)
    return [docs[x.index] for x in r.results]   # cross-encoder scored
# TODO: report nDCG@10 for dense, rrf_fuse, rerank(rrf_fuse(...))
```

### Graded rubric (Week 4 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | BM25+dense+RRF+reranker all wired; nDCG on qrels | Only one retriever; no nDCG |
| Evidence | Per-stage table + per-query rescue examples | Single aggregate number |
| Reasoning | Names query types each stage fixes + latency cost | "Hybrid is better" |
| Reproducibility | Frozen qrels, seeded, scripted | Ad-hoc eval |

### Assessment weight
**7%** of course grade.

### Reading list
- Robertson & Zaragoza, "The Probabilistic Relevance Framework: BM25 and Beyond," 2009.
- Cormack et al., "Reciprocal Rank Fusion outperforms Condorcet and individual rank learning methods," SIGIR 2009.
- Nogueira & Cho, "Passage Re-ranking with BERT," 2019 (cross-encoder reranking).
- Cohere "Rerank 3.5" model card (2025); "BGE-reranker-v2" (Xiao et al., 2024).

---

## Week 5 — Late Interaction & ColBERT: Token-Level Retrieval

### State of the Art (June 2026)
- Late-interaction lineage: ColBERTv2 → PLAID → **ColPali / ColQwen3** for visual/PDF retrieval without OCR — the 2026 headline shift.
- Multimodal embeddings (`voyage-multimodal-3`, Qwen3-VL-Embedding) make screenshot/figure/table retrieval first-class.
- Per-token indexes are still 10–100× larger; PLAID compression and on-disk indexes make them servable at scale.
- The choice is empirical: a strong cross-encoder reranker often matches late interaction more cheaply — weigh index-size against measured lift.

**Altitude:** Engineer · **Anchor case:** AcmeCorp queries where the answer hinges on one phrase buried in a long chunk that single-vector retrieval averages away.

### Learning goals
- Explain the single-vector bottleneck: pooling a passage to one vector loses token-level signal.
- Describe late interaction (ColBERT) — per-token embeddings + MaxSim — and its storage/latency tradeoff.
- Run ColBERTv2 / PLAID via RAGatouille and compare to dense + reranked retrieval.
- Decide when late interaction is worth the index-size cost.

### Concept map
- **Single-vector bottleneck.** Plain English: cramming a paragraph into one 1024-dim point blurs fine detail. Where it matters: long, fact-dense passages. Common mistake: assuming a bigger embedding fixes it — it's a pooling problem, not a dimension problem.
- **Late interaction (ColBERT).** *Formula:* `score(q,d) = Σ_{i∈q} max_{j∈d} (E_q^i · E_d^j)`. *Symbols:* `E_q^i` per-query-token vector, `E_d^j` per-doc-token vector. *Shapes:* query `(T_q, D)`, doc `(T_d, D)`; MaxSim → scalar. *Plain English:* every query word finds its best-matching doc word and we sum those. *Code mapping:* RAGatouille `RAGPretrainedModel.from_pretrained("colbert-ir/colbertv2.0")`. *Common mistake:* underestimating storage — per-token vectors are ~10–100× larger than one-vector-per-chunk.
- **PLAID / compression.** Why it matters: residual compression + centroid pruning make ColBERT servable at scale. Common mistake: deploying raw ColBERT and blowing the index budget.
- **When to use it.** Late interaction shines on out-of-domain and exact-phrase retrieval; a good cross-encoder reranker often closes much of the gap more cheaply. The lab makes you *measure*, not assume.

### Hands-on build
- `colbert_lab.py`: index AcmeCorp + a BEIR set with ColBERTv2 via RAGatouille; compare nDCG@10 and index size vs Week 4's dense and hybrid+rerank stacks.
- Find 5 queries ColBERT rescues that dense+rerank missed; characterize them.
- **Deliverable:** `evidence/week05-colbert.md` with the quality-vs-index-size table + a "use it / skip it for the portal" recommendation. **Acceptance:** decision is backed by both a quality number and a storage number.

▶ **Practical project:** `NirDiamant/RAG_Techniques` — adapt its late-interaction/ColBERT recipe and compare nDCG@10 and index size to your Week-4 hybrid+rerank stack.

### Harness / reusable skill — `$late-interaction-eval`
- **Purpose:** evaluate whether late interaction earns its storage cost on a given corpus.
- **Inputs:** corpus + labeled queries + the Week 4 reranked baseline.
- **Required outputs:** nDCG and index-size comparison, rescued-query characterization, and a cost-aware verdict.
- **Evidence artifact:** `evidence/week05-colbert.md`.

### Common failure modes
- **Storage surprise** → per-token index 50× larger than expected. *Fix:* measure index size up front; use PLAID compression.
- **Apples-to-oranges eval** → comparing ColBERT to un-reranked dense. *Fix:* compare to your *best* prior stack (hybrid+rerank).
- **Assuming SOTA-everywhere** → adopting ColBERT where a reranker was enough. *Fix:* let the measured lift decide.

### Evidence artifact
`evidence/week05-colbert.md` (quality/storage table + rescued queries + verdict).

### Skill sink-in
Predict whether ColBERT beats hybrid+rerank on AcmeCorp nDCG@10 *and* whether the index-size cost is acceptable. Measure both. Record the tradeoff you'd actually make.

### Dataset(s)
- **BEIR / LoTTE** out-of-domain sets (ColBERTv2's eval suite) — `huggingface.co/datasets/colbertv2/lotte` style subsets, public research license.
- **AcmeCorp** corpus for the in-domain comparison.

### Code stub
```python
from ragatouille import RAGPretrainedModel

rag = RAGPretrainedModel.from_pretrained("colbert-ir/colbertv2.0")
rag.index(collection=chunks, document_ids=ids, index_name="acme_colbert")

def colbert_search(query: str, k: int = 10):
    return rag.search(query, k=k)        # MaxSim over per-token embeddings

# MaxSim intuition (reference implementation):
import torch
def maxsim(Eq, Ed):                       # Eq:(Tq,D)  Ed:(Td,D), normalized
    return (Eq @ Ed.T).max(dim=1).values.sum()   # each query token -> best doc token
# TODO: log index_size_on_disk and nDCG@10 vs hybrid+rerank from Week 4
```

### Graded rubric (Week 5 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | ColBERT indexed; nDCG vs best prior stack | Compared to weak baseline only |
| Evidence | Quality AND index-size reported | Quality only, cost ignored |
| Reasoning | Verdict weighs lift against storage | "It's SOTA so use it" |
| Reproducibility | Scripted index + eval | Manual |

### Assessment weight
**6%** of course grade.

### Reading list
- Khattab & Zaharia, "ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction," SIGIR 2020.
- Santhanam et al., "ColBERTv2: Effective and Efficient Retrieval via Lightweight Late Interaction," NAACL 2022.
- Santhanam et al., "PLAID: An Efficient Engine for Late Interaction Retrieval," CIKM 2022.
- "ColPali: Efficient Document Retrieval with Vision Language Models," Faysse et al., 2024 (late interaction for visual docs).

---

## Week 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness

### State of the Art (June 2026)
- Eval/observability stack: **RAGAS, Arize Phoenix, LangSmith, Braintrust, DeepEval, UK AISI Inspect AI** — trajectory-level traces now standard.
- **LLM-as-judge** is the default but bias-audited (position/verbosity); validate judge–human agreement (κ) — TrustJudge-style scrutiny.
- Separate retrieval (nDCG/MAP/recall, context precision/recall) from generation (faithfulness/groundedness); faithfulness gating catches confident fabrication.
- Frozen, versioned gold sets plus contamination checks are baseline hygiene, not extras.

**Altitude:** Engineer · **Anchor case:** two AcmeCorp retriever stacks look equally good in demos — prove which one is actually better, and catch the one that hallucinates confidently.

### Learning goals
- Separate **retrieval** metrics (recall@k, MAP, nDCG, context precision/recall) from **generation** metrics (faithfulness, answer relevance, correctness).
- Build a Ragas-based eval harness with a frozen gold set and LLM-as-judge, and validate the judge against human labels.
- Detect hallucination via faithfulness/groundedness scoring.
- Make eval the gate every later change must pass (eval-gated development).

### Concept map
- **Retrieval metrics.** *MAP:* mean of average precision over queries. *nDCG@k:* `DCG@k/IDCG@k`, `DCG=Σ rel_i/log2(i+1)` — rewards putting relevant docs high. *Shapes:* per-query ranked list + qrels → scalar. *Plain English:* did the right docs come back, near the top? *Common mistake:* reporting recall without rank-sensitivity (nDCG) when ordering matters for stuffing.
- **Context precision/recall (Ragas).** Plain English: of the retrieved chunks, how many are relevant (precision), and did we retrieve all needed (recall)? Common mistake: high recall, low precision → context bloat → "lost in the middle."
- **Faithfulness / groundedness.** *Idea:* every claim in the answer must be entailed by retrieved context. *Plain English:* is the answer *supported*, not just plausible? Common mistake: trusting fluent answers; faithfulness catches confident fabrication.
- **LLM-as-judge validity.** Why it matters: a judge is itself a model with biases (position, verbosity). Common mistake: never checking judge–human agreement, so your "metric" is noise.

### Hands-on build
- `ragas_eval.py`: assemble a 100-question gold set (HotpotQA + 50 AcmeCorp) with reference answers + relevant chunk ids; compute context precision/recall, faithfulness, answer relevance with Ragas; compute MAP/nDCG with `pytrec_eval`.
- Validate the judge: hand-label 30 answers, report judge–human agreement (Cohen's κ).
- **Deliverable:** `evidence/week06-eval/` with the metric dashboard + judge-validation note. **Acceptance:** every metric is reproducible from the frozen gold set and the judge's κ vs humans is reported (and >0.6 or flagged).

▶ **Practical project:** `NirDiamant/RAG_Techniques` — wire its evaluation notebooks to RAGAS and compute faithfulness + context precision/recall on the frozen gold set.

### Harness / reusable skill — `$rag-eval` (the spine of the course)
- **Purpose:** turn "looks good" into a reproducible scorecard separating retrieval from generation quality.
- **Inputs:** a retriever+generator + a frozen gold set (questions, reference answers, relevant chunk ids).
- **Required outputs:** nDCG/MAP/recall (retrieval), faithfulness/answer-relevance/context-precision (generation), judge–human agreement, and a one-line verdict.
- **Minimal workflow:** freeze gold → run system → score retrieval + generation → validate judge → tabulate.
- **Evidence artifact:** `evidence/week06-eval/dashboard.md`.

### Common failure modes
- **Generation-only eval** → great answers from wrong context (lucky), unmeasured. *Fix:* score retrieval separately.
- **Unvalidated judge** → metric is the judge's bias. *Fix:* report κ vs human labels.
- **Gold-set leakage/drift** → test questions seen in tuning. *Fix:* freeze and version the gold set; never tune on it.
- **Faithfulness ignored** → confident hallucination ships. *Fix:* gate on faithfulness, not just relevance.

### Evidence artifact
`evidence/week06-eval/` (metric dashboard, judge-validation κ, frozen gold set).

### Skill sink-in
Before scoring, predict which of your two retriever stacks wins on faithfulness vs on nDCG (they may disagree). Score. Record the disagreement and what it implies for deployment.

### Dataset(s)
- **HotpotQA** dev (labeled multi-hop) + **AcmeCorp gold set** (50 Q/A/chunk-id triples you author).
- **RAGTruth** — `huggingface.co/datasets/wandb/RAGTruth-processed` style hallucination-labeled corpus, ~18k responses, research license; for calibrating the faithfulness judge.

### Code stub
```python
from ragas import evaluate
from ragas.metrics import faithfulness, answer_relevancy, context_precision, context_recall
from datasets import Dataset

ds = Dataset.from_dict({
    "question": questions, "answer": answers,
    "contexts": retrieved_chunks,        # list[list[str]] per question
    "ground_truth": references,
})
report = evaluate(ds, metrics=[faithfulness, answer_relevancy,
                               context_precision, context_recall])
print(report)                            # per-metric means
# TODO: also compute nDCG@10/MAP with pytrec_eval from qrels;
#       hand-label 30 answers and compute cohen_kappa(judge, human)
```

### Graded rubric (Week 6 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Retrieval + generation metrics both computed on frozen gold | Generation metrics only |
| Evidence | Judge validated vs humans (κ reported) | Judge trusted blindly |
| Reasoning | Notes where metrics disagree + deployment implication | Single "score went up" |
| Reproducibility | Versioned gold set, seeded judge | Editable gold, drifting |

### Assessment weight
**8%** of course grade (plus this harness underpins the 10% midterm audit).

### Reading list
- Es et al., "RAGAS: Automated Evaluation of Retrieval Augmented Generation," EACL 2024.
- Saad-Falcon et al., "ARES: An Automated Evaluation Framework for RAG," NAACL 2024.
- Zheng et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena," NeurIPS 2023.
- Niu et al., "RAGTruth: A Hallucination Corpus for Developing Trustworthy RAG," ACL 2024.
- Thakur et al., "BEIR: A Heterogeneous Benchmark for Zero-shot Evaluation of IR," NeurIPS 2021.

---

## Week 7 — Advanced RAG I: HyDE, CRAG & Self-RAG

### State of the Art (June 2026)
- **Agentic RAG** (iterative query rewriting + retrieval agents + LLM-judge loops) is the 2026 framing — RAG as a control loop, not a fixed pipeline.
- CRAG / Self-RAG-style self-correction is now wired with **LangGraph durable checkpointing** + retrieval-grading nodes.
- Adaptive retrieval (retrieve only when needed) cuts noise on easy queries — measured, not assumed.
- Discipline holds: keep each technique only if it beats the frozen eval; ablate rather than stack on blog hype.

**Altitude:** Engineer · **Anchor case:** AcmeCorp queries where the user's phrasing doesn't match the docs (HyDE), and where retrieval sometimes returns garbage that the model should *reject* (CRAG/Self-RAG).

### Learning goals
- Implement HyDE (hypothetical document embeddings) and explain when query-document vocabulary mismatch makes it help — or hurt.
- Implement Corrective RAG (CRAG): grade retrieved docs, and fall back to web/search or query rewrite when they're weak.
- Implement Self-RAG-style reflection: the model decides when to retrieve and critiques its own grounding.
- Measure each against the Week 6 harness; keep only what beats the baseline.

### Concept map
- **HyDE.** *Idea:* ask the LLM to *write* a hypothetical answer, embed *that*, and retrieve with it — bridging query/doc vocabulary. *Formula:* `q' = embed(LLM("write a passage answering: "+q))`. *Plain English:* search with a fake answer that looks like the real docs. *Common mistake:* HyDE hurts on corpora where the question already matches doc language, and on niche facts the LLM can't even hallucinate plausibly.
- **CRAG.** *Idea:* a lightweight retrieval evaluator labels results Correct / Ambiguous / Incorrect; on weak retrieval, trigger query rewrite or external search. *Plain English:* check your sources before trusting them. *Common mistake:* no fallback, so bad retrieval flows straight into the answer.
- **Self-RAG.** *Idea:* train/prompt the model to emit reflection tokens — *retrieve?*, *is this supported?*, *is it useful?* — and gate generation on them. *Plain English:* the model self-critiques grounding mid-generation. *Common mistake:* adding reflection prompting without measuring; it adds latency and can over-refuse.
- **Adaptive retrieval.** Why it matters: not every query needs retrieval (chit-chat, arithmetic). Common mistake: always retrieving, injecting noise into easy queries.

### Hands-on build
- `hyde.py`, `crag.py`, `self_rag.py` as LangGraph nodes over the Week 6 pipeline; each is an ablation toggled on/off.
- Run the full Week 6 eval for: baseline / +HyDE / +CRAG / +Self-RAG; build `evidence/week07-advanced.md` with the ablation table and per-technique rescued/regressed queries.
- **Deliverable:** ablation table + a kept-techniques decision. **Acceptance:** each kept technique shows a measured net win (faithfulness or nDCG) and you name a query type where it *hurts*.

▶ **Practical project:** `krishnaik06/Agentic-LanggraphCrash-course` — build HyDE/CRAG/Self-RAG as LangGraph nodes and ablate each against the Week-6 eval.

### Harness / reusable skill — `$rag-ablation`
- **Purpose:** add advanced-RAG techniques as toggles and keep only those that beat the eval, with the regressions named.
- **Inputs:** baseline pipeline + the `$rag-eval` harness + a list of candidate techniques.
- **Required outputs:** ablation table (each technique on/off), per-technique rescues and regressions, and a keep/cut decision per technique with the mechanism.
- **Evidence artifact:** `evidence/week07-advanced.md`.

### Common failure modes
- **Technique cargo-culting** → stacking HyDE+CRAG+Self-RAG because a blog said so. *Fix:* ablate; keep only net-positive ones.
- **HyDE on matching corpora** → adds latency, no gain or worse. *Fix:* test vocabulary mismatch first.
- **No fallback in CRAG** → the "corrective" branch is never wired. *Fix:* actually implement rewrite/search fallback.
- **Over-refusal from Self-RAG** → it says "I don't know" too often. *Fix:* measure refusal rate alongside faithfulness.

### Evidence artifact
`evidence/week07-advanced.md` (ablation table + rescues/regressions + keep/cut decisions).

### Skill sink-in
Predict which single technique gives the biggest faithfulness gain on AcmeCorp. Ablate all three. Record the winner, the loser, and the query type each helps.

### Dataset(s)
- **AcmeCorp** + **HotpotQA** (multi-hop stresses CRAG/Self-RAG).
- **PopQA** — `huggingface.co/datasets/akariasai/PopQA`, ~14k long-tail entity questions, MIT license; the Self-RAG paper's adaptive-retrieval testbed (when to retrieve vs not).

### Code stub
```python
def hyde_query(q: str, llm, emb):
    hypo = llm.invoke(f"Write a short passage that answers: {q}").content
    return emb.encode([hypo], normalize_embeddings=True)   # search with fake answer

def crag_grade(q: str, docs: list[str], grader_llm) -> str:
    verdict = grader_llm.invoke(
        f"Query: {q}\nDocs: {docs}\nReply CORRECT, AMBIGUOUS, or INCORRECT."
    ).content.strip()
    return verdict          # INCORRECT -> trigger query-rewrite or web search

# LangGraph: route on crag_grade -> {answer | rewrite_and_retry | web_fallback}
# TODO: run $rag-eval for baseline/+hyde/+crag/+self_rag, tabulate deltas
```

### Graded rubric (Week 7 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | All 3 techniques implemented as real toggles | Prompted but not wired (e.g., no CRAG fallback) |
| Evidence | Ablation table with deltas + regressions named | "I added HyDE, seems better" |
| Reasoning | Keep/cut justified per technique + hurt-cases | Keep everything |
| Reproducibility | Toggles + frozen eval | Hand-run variants |

### Assessment weight
**6%** of course grade.

### Reading list
- Gao et al., "Precise Zero-Shot Dense Retrieval without Relevance Labels" (HyDE), ACL 2023.
- Asai et al., "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection," ICLR 2024.
- Yan et al., "Corrective Retrieval Augmented Generation" (CRAG), 2024.
- Jeong et al., "Adaptive-RAG: Learning to Adapt Retrieval-Augmented LLMs through Question Complexity," NAACL 2024.
- Krish Naik, *Enterprise Advanced RAG in LangGraph* (Hybrid/HyDE/CRAG/Self-RAG/Text2SQL/Guardrails), 2025–2026.

---

## Week 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL

### State of the Art (June 2026)
- **GraphRAG** (Microsoft GraphRAG, `neo4j-graphrag`) handles multi-hop and global-summary queries a flat vector store can't.
- Agentic loops via **LangGraph / OpenAI Agents SDK / Claude Agent SDK**; **MCP** (Linux Foundation Agentic AI Foundation) standardizes tool/data access across backends.
- Text2SQL is hardened with schema-grounding + read-only sandboxes; query routing (vector / graph / SQL) is the orchestration layer.
- Reliability thinking from **τ²-bench (pass^k)** is migrating into agentic-RAG evaluation.

**Altitude:** Engineer → Specialist · **Anchor case:** AcmeCorp questions that single-shot retrieval can't answer: multi-hop ("which products owned by the team that shipped X are affected by policy Y?"), global summary ("what are the themes across all incident reports?"), and structured ("how many P1 tickets last quarter?").

### Learning goals
- Build an **agentic RAG** loop: an agent that plans sub-queries, retrieves iteratively, and decides when it has enough.
- Build **GraphRAG** over Neo4j: extract entities/relations, then answer multi-hop and global-summarization queries a vector store can't.
- Build **Text2SQL** retrieval over the `tickets` table with schema-grounding and guardrails against bad SQL.
- Route queries to the right backend (vector / graph / SQL) and measure the routed system end-to-end.

### Concept map
- **Agentic RAG.** *Idea:* replace one-shot retrieve→answer with a plan→retrieve→reflect→retrieve loop (ReAct-style) that issues multiple targeted queries. *Plain English:* a researcher that follows leads instead of grabbing the first page. *Common mistake:* unbounded loops — no step budget or stop condition.
- **GraphRAG.** *Idea:* build a knowledge graph (entities, relations, communities), then answer via graph traversal + community summaries. *Plain English:* good for "connect the dots across many docs" and global questions. *Code mapping:* Microsoft GraphRAG / `neo4j-graphrag` with Cypher retrieval. *Common mistake:* using GraphRAG for simple lookups where vector RAG is cheaper and better.
- **Text2SQL.** *Idea:* translate NL → SQL against a known schema, execute, return rows. *Plain English:* for questions that are really database queries (counts, aggregates, joins). *Common mistake:* no schema grounding → hallucinated columns; no read-only guardrail → injection risk.
- **Query routing.** Why it matters: the same portal gets lookup, multi-hop, and analytical questions; one backend can't serve all. Common mistake: forcing everything through vector RAG.

### Hands-on build
- `agentic_rag.py` (LangGraph): planner + retriever + reflector with a step budget.
- `graphrag/`: extract an AcmeCorp knowledge graph into Neo4j; answer 10 multi-hop + 3 global questions; compare to vector RAG on those.
- `text2sql.py`: schema-grounded NL→SQL over `tickets` with a read-only execution sandbox and validation.
- `router.py`: classify each query and dispatch; run the Week 6 eval over the routed system.
- **Deliverable:** `evidence/week08-agentic-graph-sql/` with per-backend wins + routed-system eval. **Acceptance:** each backend beats vector-RAG on its target query class, and the router sends queries to the right place ≥85% of the time.

▶ **Practical project:** `run-llama/llama_index` — use its GraphRAG, query-router, and Text2SQL modules to route multi-hop / global / analytical queries to the right backend.

### Harness / reusable skill — `$knowledge-router`
- **Purpose:** route a query to vector / graph / SQL retrieval and justify the choice per query class with evidence.
- **Inputs:** a query + the three backends + a labeled set of query types.
- **Required outputs:** routing accuracy, per-backend win on its class, fallback behavior, and the end-to-end routed eval.
- **Evidence artifact:** `evidence/week08-agentic-graph-sql/router-eval.md`.

### Common failure modes
- **Graph-for-everything** → slow, expensive lookups. *Fix:* route; use graph only for multi-hop/global.
- **Unbounded agent loops** → cost blowups, no answer. *Fix:* step budget + stop condition + max-cost guard.
- **Hallucinated SQL** → wrong columns, destructive statements. *Fix:* schema injection, read-only role, SQL validation, `LIMIT`.
- **No routing eval** → router silently misroutes half the queries. *Fix:* measure routing accuracy on a labeled set.

### Evidence artifact
`evidence/week08-agentic-graph-sql/` (per-backend comparisons, Neo4j graph stats, Text2SQL guardrail log, routed-system eval).

### Skill sink-in
Predict the routing accuracy of your classifier before measuring, and predict which query class GraphRAG wins biggest on. Measure both. Record the misroutes and what they share.

### Dataset(s)
- **HotpotQA** + **2WikiMultiHopQA** — `huggingface.co/datasets/2WikiMultihopQA`, ~190k multi-hop questions, Apache-2.0; the multi-hop testbed for agentic/graph RAG.
- **Spider / BIRD** Text2SQL benchmarks — `huggingface.co/datasets/xlangai/spider` (CC BY-SA 4.0) and BIRD (`bird-bench`), for NL→SQL eval.
- **AcmeCorp** graph (entities/relations extracted in lab) + `tickets` SQL table (synthetic).

### Code stub
```python
from neo4j_graphrag.retrievers import VectorCypherRetriever

# GraphRAG: vector-find entry nodes, then Cypher-traverse relations
retriever = VectorCypherRetriever(
    driver=neo4j_driver, index_name="entity_emb", embedder=emb,
    retrieval_query="""
    MATCH (n)-[:OWNS|AFFECTS*1..2]-(m)        // multi-hop traversal
    RETURN n.name, m.name, m.summary LIMIT 20
    """)

def route(q: str, clf_llm) -> str:
    return clf_llm.invoke(
        f"Classify '{q}' as LOOKUP, MULTIHOP, or ANALYTICAL."
    ).content.strip()    # -> vector | graph | sql
# guardrail: execute SQL with a read-only role + enforce LIMIT + validate AST
```

### Graded rubric (Week 8 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Agentic + graph + SQL all functional with guardrails | One backend; no SQL guardrail |
| Evidence | Per-class wins + routing accuracy measured | Demo only |
| Reasoning | Each backend justified for its query class | "Graph is cooler" |
| Reproducibility | Graph build + router scripted, seeded | Manual graph, hand-routed |

### Assessment weight
**7%** of course grade.

### Reading list
- Edge et al., "From Local to Global: A GraphRAG Approach to Query-Focused Summarization," 2024 (Microsoft GraphRAG).
- Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," ICLR 2023 (agentic loop backbone).
- Pourreza & Rafiei, "DIN-SQL: Decomposed In-Context Learning of Text-to-SQL," NeurIPS 2023; Li et al., "BIRD: Can LLM Already Serve as a Database Interface?" NeurIPS 2023.
- Singh et al., "Agentic Retrieval-Augmented Generation: A Survey," 2025.

---

## Week 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails

### State of the Art (June 2026)
- Cost core: **prompt caching** (up to ~90% off static prefixes) + semantic caching + model routing + batching.
- Serving: **vLLM** with **FP8 KV-cache** and **FlashAttention-4** (Blackwell); serverless GPU (Modal/Baseten) pay-per-second.
- Guardrails: prompt-injection defense on retrieved content (**OWASP LLM Top-10**), Llama-Guard-class validators, citation enforcement.
- Long-context (1M) reshapes but doesn't replace RAG — measure the corpus-size crossover; retrieve-then-read wins in production.
- **EU AI Act:** most GPAI rules apply **Aug 2, 2026** (Digital Omnibus defers Annex-III high-risk to **Dec 2, 2027**) — citations and audit trails matter.

**Altitude:** Engineer · **Anchor case:** AcmeCorp leadership asks "models have 1M-token context now — do we even need RAG?" and the portal must serve real traffic within a latency/cost SLA without leaking or hallucinating.

### Learning goals
- Reason quantitatively about long-context vs RAG: cost, latency, "lost in the middle," and freshness — and when to combine them.
- Add semantic caching, response caching, and an LLM gateway to control cost and latency.
- Add guardrails: grounding/citation enforcement, PII handling, prompt-injection defense for retrieved content, and refusal calibration.
- Instrument the portal with tracing and an online eval/feedback loop.

### Concept map
- **Long-context vs RAG.** Plain English: you *can* stuff the whole corpus into a 1M-token window, but you pay per token, latency rises, and accuracy sags in the middle. Where it matters: small/stable corpora favor long-context; large/fresh/cited corpora favor RAG. Common mistake: framing it as either/or — production often retrieves *then* uses a long window for the top sections.
- **Semantic caching.** *Idea:* cache by embedding-similarity of queries, not exact string match. *Formula:* serve cached answer if `cos(q, q_cached) > τ`. *Common mistake:* `τ` too low → serving wrong cached answers.
- **Prompt injection via retrieved content.** Why it matters: a malicious doc in the corpus can hijack the model ("ignore previous instructions"). *Plain English:* retrieved text is untrusted input. *Common mistake:* treating corpus text as safe.
- **Grounding/citation guardrail.** *Idea:* enforce that every answer cites retrieved chunks and refuse when unsupported. Common mistake: citations that don't actually support the claim (faithfulness gap from Week 6).
- **RAG lifecycle & retrieval drift.** *Idea:* a corpus is not static — docs are added, edited, and deprecated, so yesterday's gold set and embeddings silently rot. *Plain English:* a RAG system that was accurate at launch decays as the corpus and query distribution drift apart. Where it matters: production monitoring — track retrieval-hit-rate and faithfulness over time, re-index on corpus change, and re-freeze the gold set periodically. Common mistake: treating ingestion as a one-time job and never re-measuring after launch.

### Hands-on build
- `serve.py`: FastAPI portal with an LLM gateway, semantic cache, and streaming; measure p95 latency and cost/query.
- `guardrails.py`: citation enforcement, PII redaction, injection-detection on retrieved chunks (e.g., Llama Guard / heuristics), calibrated refusal.
- `longctx_vs_rag.py`: on a 50-question set, compare RAG vs full-context-stuffing on accuracy, cost, and latency; find the corpus-size crossover.
- **Deliverable:** `evidence/week09-production/` with the SLA table, the long-context-vs-RAG crossover plot, and a red-team log of 10 injection attempts. **Acceptance:** portal meets a stated p95 SLA, blocks ≥8/10 injections, and the long-context decision is backed by the crossover data.

▶ **Practical project:** `decodingml/llm-twin-course` — adapt its production RAG service to add semantic caching, injection guardrails, and a measured p95/cost SLA.

### Harness / reusable skill — `$rag-prod-harness`
- **Purpose:** make a RAG system production-safe and cost-bounded with measured SLA, caching, and guardrails.
- **Inputs:** a working retriever+generator + traffic samples + an SLA target.
- **Required outputs:** p95 latency + cost/query, cache hit-rate, guardrail pass rates (injection blocked, citation enforced, PII redacted), and a deploy/no-deploy call.
- **Evidence artifact:** `evidence/week09-production/sla-and-safety.md`.

### Common failure modes
- **Long-context hand-wave** → "1M context kills RAG" with no cost/latency math. *Fix:* measure the crossover.
- **Trusting retrieved text** → corpus-borne prompt injection. *Fix:* sanitize + detect + sandbox instructions.
- **Cache poisoning / over-broad cache** → wrong cached answers. *Fix:* tune similarity `τ`, scope cache by tenant/version.
- **Uninstrumented prod** → no traces, can't debug regressions. *Fix:* trace every request; log retrieval + generation + feedback.

### Evidence artifact
`evidence/week09-production/` (SLA table, crossover plot, injection red-team log, guardrail pass rates).

### Skill sink-in
Predict the corpus size (in tokens) where long-context stuffing stops being cheaper/better than RAG. Measure the crossover. Record where it landed vs your guess and the deployment rule you'd write.

### Dataset(s)
- **AcmeCorp** traffic samples + a held-out 50-question SLA set.
- **LongBench v2** — `huggingface.co/datasets/THUDM/LongBench-v2`, long-context QA tasks, research license; for the long-context-vs-RAG comparison.
- **Injection corpus:** a curated set of adversarial docs (provided in `data/redteam/`) modeled on known prompt-injection patterns.

### Code stub
```python
import numpy as np

class SemanticCache:
    def __init__(self, emb, tau=0.92):
        self.emb, self.tau, self.keys, self.vals = emb, tau, [], []
    def get(self, q):
        if not self.keys: return None
        qv = self.emb.encode([q], normalize_embeddings=True)[0]
        sims = np.array(self.keys) @ qv
        i = int(sims.argmax())
        return self.vals[i] if sims[i] > self.tau else None   # else miss
    def put(self, q, a):
        self.keys.append(self.emb.encode([q], normalize_embeddings=True)[0])
        self.vals.append(a)

def injection_guard(chunk: str, guard_llm) -> bool:
    return "UNSAFE" not in guard_llm.invoke(
        f"Does this contain instructions to the assistant? {chunk}").content
# TODO: measure p95 latency, cost/query, cache hit-rate, injection block-rate
```

### Graded rubric (Week 9 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Serving + cache + guardrails functional under load | Notebook demo, no SLA |
| Evidence | p95/cost/cache/guardrail rates + crossover plot | Anecdotes |
| Reasoning | Long-context-vs-RAG decision from data | Opinion |
| Reproducibility | Load test + red-team scripted | Hand-tested |

### Assessment weight
**5%** of course grade.

### Reading list
- Liu et al., "Lost in the Middle," TACL 2024 (long-context accuracy decay).
- Bai et al., "LongBench: A Bilingual, Multitask Benchmark for Long Context Understanding," ACL 2024.
- Greshake et al., "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection," AISec 2023.
- Inan et al., "Llama Guard: LLM-based Input-Output Safeguard," 2023; OWASP "Top 10 for LLM Applications," 2025.

---

## Week 10 — Capstone: A Production Document-QA / Knowledge Portal

### State of the Art (June 2026)
- Reference architecture: **agentic + hybrid + rerank + (graph/SQL where measured) + guarded generation + traced serving**.
- Eval-gated shipping with RAGAS / Inspect AI + a frozen gold set + faithfulness gate + prompt-injection regression.
- **MCP**-exposed tools and agent memory are increasingly part of "production RAG," not just a chatbot wrapper.
- Governance: EU AI Act Aug-2026 transparency/audit expectations are baked into the evidence packet.

**Altitude:** Engineer (graduating toward Subject 05) · **Anchor case:** ship the full AcmeCorp Knowledge Portal as a defensible system with an evidence packet.

### Learning goals
- Integrate the full stack: ingestion → hybrid+reranked (and graph/SQL where it wins) retrieval → guarded generation → eval → serving.
- Prove, with the `$rag-eval` harness, that each component earns its place against the Week 1 baseline.
- Produce an **evidence packet** that lets a reviewer trace every quality and safety claim to a file.

### Concept map (review as a checklist)
- Corpus framing (what questions? lookup vs multi-hop vs analytical? what would a wrong answer cost?).
- Retrieval discipline: baseline → chunking → hybrid → rerank → (late-interaction/graph/SQL only where measured to help).
- Eval discipline: frozen gold set, retrieval + generation metrics, validated judge, faithfulness gate.
- Production discipline: SLA, caching, guardrails, tracing, online feedback.

### Hands-on build
- Pick a real corpus (your own org's docs, a public dataset like a Wikipedia subset, or extend AcmeCorp) of ≥5k chunks.
- Ship: ingestion pipeline, the routed retriever stack, guarded generation with citations, the eval dashboard, and a served API with an SLA. Include an ablation showing each kept component beats the simpler system on the frozen eval.
- **Deliverable:** `capstone/` repo + a 3-page report. **Acceptance:** every claim in the report ("hybrid added +X nDCG," "faithfulness 0.9," "p95 < Y ms," "blocks injection") points to a file in `evidence/`; the final system beats the Week 1 baseline on both a retrieval and a generation metric.

▶ **Practical project:** `Shubhamsaboo/awesome-llm-apps` — fork a full RAG app and extend it into your routed, guarded, eval-gated knowledge portal.

### Harness / reusable skill — `$rag-evidence-packet`
- **Purpose:** assemble baseline → ablations → eval dashboard → SLA/safety logs into one reviewable bundle.
- **Inputs:** the capstone system + all weekly evidence.
- **Required outputs:** a packet where each design decision links to the measurement that justified it.
- **Evidence artifact:** the packet itself (this *is* the deliverable).

### Common failure modes
- **Demo-driven development** → impressive demo, no eval. *Fix:* gate every component on the frozen eval.
- **Kitchen-sink architecture** → graph + ColBERT + agents because they're cool. *Fix:* include only measured-positive components; document what you *cut*.
- **Score-only report** → no evidence trail. *Fix:* link every claim to a file.
- **Unsafe-but-accurate** → great answers, no guardrails. *Fix:* ship the safety log too.

### Evidence artifact
`capstone/` with ingestion, retriever stack, eval dashboard, SLA/safety logs, ablations, and the 3-page report.

### Skill sink-in
Before the final eval run, write down the nDCG and faithfulness you expect for the full system vs the Week 1 baseline. Run it. The gap between expectation and result — and any component that *didn't* help — is the real lesson. Record it.

### Dataset(s)
- **Student choice**, declared up front: own-org docs, a **Wikipedia subset** (`huggingface.co/datasets/wikimedia/wikipedia`, CC BY-SA), a **company-docs corpus**, or extended AcmeCorp — minimum 5k chunks with at least 80 gold Q/A/relevance triples.

### Code stub
```python
# capstone/eval_gate.py — the one command that decides if the system ships
from rag_portal import build_system
from rag_eval import run_eval, load_gold

def gate(config) -> bool:
    sys = build_system(config)                 # routed retriever + guarded gen
    rep = run_eval(sys, load_gold("gold_v1.jsonl"))
    return (rep["ndcg@10"] > BASELINE_NDCG and
            rep["faithfulness"] > 0.85 and
            rep["p95_ms"] < SLA_MS and
            rep["injection_block_rate"] > 0.8)
# Every ablation in the report is a different `config`; the table is the proof.
```

### Graded rubric (Capstone)
| Criterion | Excellent (A) | Adequate (C) | Failing |
|-----------|---------------|--------------|---------|
| Retrieval quality | Beats baseline on nDCG@10 + recall with ablation proof | Beats baseline, thin evidence | No improvement shown |
| Generation faithfulness | ≥0.85 faithfulness, validated judge, citations enforced | Faithfulness reported, judge unvalidated | Hallucinations unmeasured |
| Production readiness | Meets SLA, caching, guardrails, tracing, red-team log | Served but partial safety | Notebook only |
| Evidence discipline | Every claim → a file; cuts documented | Most claims traceable | Score-only report |
| Reproducibility | One command rebuilds + re-evals from seed | Mostly scripted | Manual |

### Assessment weight
**25%** of course grade.

### Reading list
- Gao et al., "Retrieval-Augmented Generation for Large Language Models: A Survey," 2024 (the field map).
- Chip Huyen, *AI Engineering* (2025) — RAG systems & evaluation chapters.
- Barnett et al., "Seven Failure Points When Engineering a RAG System," 2024.
- Source book Ch. 16 (turning a project into an evidence packet) + Appendix A (capstone blueprints).

---

## Course-level outcomes

By the end you can: build a RAG system that is *measured*, not vibes-based; separate retrieval failures from generation failures; choose chunking, vector store, hybrid/rerank/late-interaction, graph, and SQL backends from evidence; evaluate with Ragas + MAP/nDCG + faithfulness against a frozen gold set with a validated judge; deploy advanced techniques (HyDE/CRAG/Self-RAG/Agentic/GraphRAG/Text2SQL) only where they earn it; and ship a guarded, cost-bounded, traced production portal — carrying a reusable harness into Subjects 05–06.

## Skills produced (reused program-wide)
`$rag-baseline` · `$chunk-strategist` · `$vectordb-selector` · `$retriever-stack` · `$late-interaction-eval` · `$rag-eval` · `$rag-ablation` · `$knowledge-router` · `$rag-prod-harness` · `$rag-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `NirDiamant/RAG_Techniques` — runnable advanced-RAG recipes (HyDE, CRAG, Self-RAG, fusion, reranking) to ablate against your eval — Lectures 4, 7
- `Shubhamsaboo/awesome-llm-apps` — 100+ runnable RAG/agent apps to mine for the baseline and agentic-RAG patterns — Lectures 1, 8
- `run-llama/llama_index` — node parsers, parent/child retrievers, and query engines for chunking and indexing — Lectures 2, 3
- `krishnaik06/RAG-Tutorials` — enterprise hybrid / HyDE / CRAG / Text2SQL / guardrails in LangChain & LangGraph — Lectures 7–9
- `decodingml/llm-twin-course` — an end-to-end production RAG system (ingestion → retrieval → serving) — Lectures 9–10

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Agentic RAG with abstention** — hybrid + graph + table retrieval, reranking, citations, and a "no-answer" path — *Lectures 7–8*
- **Domain RAG (regulated)** — a medical/legal/finance assistant with citations, abstention, and an audit trail — *Lecture 10*
