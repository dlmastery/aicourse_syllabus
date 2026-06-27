# Large Language Models: Pretraining, RAG, Fine-Tuning & Reasoning

**Merged subject (one academic quarter-track).** This subject combines several closely related modules, each a self-contained Part with its own lectures, hands-on builds, practical projects, State-of-the-Art notes, and assessment. Parts in this subject:

- **Part A — Large Language Models: Pretraining → Post-Training**
- **Part B — Retrieval-Augmented Generation & Knowledge Systems**
- **Part C — Fine-Tuning & Model Adaptation**
- **Part D — Reasoning Models & Test-Time Compute**

## 📑 Detailed table of contents
_One academic quarter-track · 3 lecture-hrs/week · **43 lectures** across **4 parts**. Time-boxed plan: [`_toc/02-llms-rag-finetuning-reasoning-toc.md`](_toc/02-llms-rag-finetuning-reasoning-toc.md)._

### Part A — Large Language Models: Pretraining → Post-Training
1. **Week 1 — The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run)** — Pretraining objective · The lifecycle as stages with different objectives · Compute/throughput accounting · Reproducibility at scale  ·  ▶ `VizuaraAILabs/nano-gpt-oss` · 🔧 `$lifecycle-map`
2. **Week 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID** — Extraction · Quality filtering · Language identification · Provenance & licensing  ·  ▶ `VizuaraAILabs/truly-open-gpt-oss` · 🔧 `$data-funnel`
3. **Week 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training** — Exact dedup · Near-dup (MinHash + LSH) · Decontamination · Tokenizer quality  ·  ▶ `VizuaraAILabs/truly-open-gpt-oss` · 🔧 `$dedup-decontam`
4. **Week 4 — Architecture, Hyperparameters, and Scaling Laws** — RoPE · RMSNorm + SwiGLU · GQA (grouped-query attention) · Scaling laws / Chinchilla  ·  ▶ `VizuaraAILabs/DeepSeek-From-Scratch` · 🔧 `$scaling-fit`
5. **Week 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO** — Data parallel (DDP) · ZeRO / FSDP sharding · Tensor & pipeline parallel · MFU & scaling efficiency  ·  ▶ `VizuaraAI/vizuara-5d-parallelism-workshop` · 🔧 `$distributed-profiler`
6. **Week 6 — Mixture-of-Experts and Long-Context Pretraining** — MoE FFN · Load-balancing loss · Capacity factor · Long context  ·  ▶ `VizuaraAI/Mixture_of_Experts` · 🔧 `$moe-router-monitor`
7. **Week 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint** — Perplexity vs capability · Benchmark formats · Contamination & emergence · Reproduction discipline  ·  ▶ `mlabonne/llm-course` · 🔧 `$benchmark-runner`
8. **Week 8 — Supervised Fine-Tuning & Instruction Tuning** — SFT objective · Chat templating · LoRA / QLoRA · Data quality > quantity  ·  ▶ `krishnaik06/Finetuning-LLM` · 🔧 `$sft-recipe`
9. **Week 9 — Reward Modeling & RLHF (PPO)** — Bradley-Terry reward model · RLHF/PPO objective · Value function / advantage · Reward hacking  ·  ▶ `mlabonne/llm-course` · 🔧 `$rlhf-monitor`
10. **Week 10 — Direct Preference Optimization: DPO, ORPO, KTO** — DPO · ORPO · KTO · DPO vs RLHF  ·  ▶ `mlabonne/llm-course` · 🔧 `$preference-align-bench`
11. **Week 11 — RL for Reasoning: GRPO and Verifiable Rewards** — GRPO · Verifiable reward (RLVR) · Test-time compute · Format + correctness rewards  ·  ▶ `VizuaraAILabs/OpenClaw-RL-Tutorial` · 🔧 `$verifiable-reward`
12. **Week 12 — Long-Context, Safety Fine-Tuning, and Serving** — Long-context extension · Safety fine-tuning · Red-teaming · Efficient serving  ·  ▶ `VizuaraAI/llm-inference-tutorial` · 🔧 `$safety-serving-audit`
13. **Week 13 — Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet**  ·  ▶ `VizuaraAI/pharma-slm` · 🔧 `$lifecycle-evidence-packet`

### Part B — Retrieval-Augmented Generation & Knowledge Systems
1. **Week 1 — Why Retrieval at All: Embeddings, Semantic Search & a Naive RAG Baseline** — The RAG loop · Embedding · Cosine similarity · Top-k retrieval & context stuffing  ·  ▶ `krishnaik06/RAG-Tutorials` · 🔧 `$rag-baseline`
2. **Week 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality** — Chunk · Recursive splitting · Semantic chunking · Structure-aware & parent/child  ·  ▶ `krishnaik06/Updated-Langchain` · 🔧 `$chunk-strategist`
3. **Week 3 — Vector Databases: Indexes, ANN, and Choosing Your Store** — ANN vs exact search · HNSW · Metadata filtering · Distance metric must match training  ·  ▶ `Shubhamsaboo/awesome-llm-apps` · 🔧 `$vectordb-selector`
4. **Week 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top** — BM25 · Dense vs sparse failure modes · Reciprocal Rank Fusion · Cross-encoder reranker  ·  ▶ `NirDiamant/RAG_Techniques` · 🔧 `$retriever-stack`
5. **Week 5 — Late Interaction & ColBERT: Token-Level Retrieval** — Single-vector bottleneck · Late interaction (ColBERT) · PLAID / compression · When to use it  ·  ▶ `NirDiamant/RAG_Techniques` · 🔧 `$late-interaction-eval`
6. **Week 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness** — Retrieval metrics · Context precision/recall (Ragas) · Faithfulness / groundedness · LLM-as-judge validity  ·  ▶ `NirDiamant/RAG_Techniques` · 🔧 `$rag-eval`
7. **Week 7 — Advanced RAG I: HyDE, CRAG & Self-RAG** — HyDE · CRAG · Self-RAG · Adaptive retrieval  ·  ▶ `krishnaik06/Agentic-LanggraphCrash-course` · 🔧 `$rag-ablation`
8. **Week 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL** — Agentic RAG · GraphRAG · Text2SQL · Query routing  ·  ▶ `run-llama/llama_index` · 🔧 `$knowledge-router`
9. **Week 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails** — Long-context vs RAG · Semantic caching · Prompt injection via retrieved content · Grounding/citation guardrail · RAG lifecycle & retrieval drift  ·  ▶ `decodingml/llm-twin-course` · 🔧 `$rag-prod-harness`
10. **Week 10 — Capstone: A Production Document-QA / Knowledge Portal**  ·  ▶ `Shubhamsaboo/awesome-llm-apps` · 🔧 `$rag-evidence-packet`

### Part C — Fine-Tuning & Model Adaptation
1. **Week 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)** — What fine-tuning is for · The decision ladder · Catastrophic forgetting · Baseline economics  ·  ▶ `mlabonne/llm-course` · 🔧 `$adaptation-decision`
2. **Week 2 — Data Preparation & Formatting: The 80% That Decides the Outcome** — Chat template & loss masking · Decontamination · Data quality > quantity · Packing  ·  ▶ `VizuaraAI/pharma-slm` · 🔧 `$sft-data-prep`
3. **Week 3 — PEFT I: LoRA From the Math Up** — LoRA · Rank r and alpha · Why it works · Merging vs keeping separate  ·  ▶ `krishnaik06/Finetuning-LLM` · 🔧 `$lora-trainer`
4. **Week 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU** — Quantization (training-time) · Double quantization & paged optimizers · Quality tax · NF4 vs other 4-bit  ·  ▶ `krishnaik06/Finetuning-LLM` · 🔧 `$qlora-trainer`
5. **Week 5 — Preference Optimization I: DPO and the RLHF Lineage** — RLHF (for context) · DPO · β / KL anchor · Preference data quality  ·  ▶ `mlabonne/llm-course` · 🔧 `$preference-tuner`
6. **Week 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective** — Bradley-Terry backbone · ORPO · KTO · SimPO / IPO  ·  ▶ `mlabonne/llm-course` · 🔧 `$preference-method-selector`
7. **Week 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences** — RLHF vs RLAIF vs RFT · Verifiable reward · Distillation · RFT vs more SFT  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$verifiable-rft`
8. **Week 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)** — Target vs general eval · Catastrophic forgetting check · Alignment tax · Regression gate  ·  ▶ `VizuaraAI/pharma-slm` · 🔧 `$finetune-regression`
9. **Week 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost** — Inference quantization · Multi-LoRA serving · Merge vs keep-separate · Cost/latency  ·  ▶ `VizuaraAI/llm-inference-tutorial` · 🔧 `$adapter-serving`
10. **Week 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting**  ·  ▶ `krishnaik06/Finetuning-LLM` · 🔧 `$adaptation-evidence-packet`

### Part D — Reasoning Models & Test-Time Compute
1. **Week 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference** — Chain-of-thought · Test-time compute · Verifiable eval · Contamination  ·  ▶ `mlabonne/llm-course` · 🔧 `$reasoning-eval`
2. **Week 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve** — Self-consistency · Best-of-N · Test-time scaling curve · Parallel vs sequential compute  ·  ▶ `mlabonne/llm-course` · 🔧 `$test-time-scaler`
3. **Week 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome** — Outcome reward (ORM / verifier) · Process reward (PRM) · Verifier-guided selection · Verifiable vs learned reward  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$verifier-suite`
4. **Week 4 — ReAct, Tool Use & Search: Reasoning That Acts** — ReAct · Tool-augmented computation · Deep research · Reasoning + retrieval boundary  ·  ▶ `krishnaik06/Agentic-LanggraphCrash-course` · 🔧 `$reasoning-agent`
5. **Week 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch** — RLVR · GRPO · Why no critic · R1-Zero vs R1  ·  ▶ `VizuaraAILabs/OpenClaw-RL-Tutorial` · 🔧 `$grpo-trainer`
6. **Week 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run** — Length bias · Entropy collapse · DAPO · Dr.GRPO  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$grpo-stabilizer`
7. **Week 7 — Long-Horizon Reasoning & Self-Improving Agents** — Long-horizon credit assignment · Self-improvement (STaR / ReST / rejection sampling) · Agentic RL · Honest long-horizon eval  ·  ▶ `VizuaraAILabs/OpenClaw-RL-Tutorial` · 🔧 `$self-improve-loop`
8. **Week 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination** — AIME / MATH · GPQA · ARC-AGI · Contamination & faithfulness  ·  ▶ `mlabonne/llm-course` · 🔧 `$reasoning-audit`
9. **Week 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment** — Adaptive test-time compute · CoT faithfulness · Reasoning-model serving · Effort/budget controls · Contextual drag  ·  ▶ `VizuaraAI/kv-cache-token-reduction-walkthrough` · 🔧 `$reasoning-deploy`
10. **Week 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math**  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$reasoning-evidence-packet`



## How the book's skills are leveraged in this subject

This subject is taught with the reusable **reader-skills** from *Harnessing LLM Skills to Master Machine Learning* (Appendix B) — each a small "machine for repeatable thinking" invoked as `$skill-name`. They are applied exactly where this subject needs them, alongside the program's own `$skills`. The book's learning loop — **concept → code → critique → reflection → rebuild** — and the **prompt → workflow → skill → harness** ladder structure every lecture's build and critique.

| Book reader-skill | Book ch. | How it is leveraged in this subject |
|---|---|---|
| `$ml-adaptation-decision` | 10 | Part C — choose prompt vs RAG vs PEFT vs full fine-tune with an explicit weighted scorecard. |
| `$ml-retrieval-evaluation` | 11 | Part B (RAG) — define relevance, score retrieval, classify failure as representation/indexing/ranking. |
| `$ml-evaluation-review` | 6 | All parts — benchmarking & eval lectures (what the metric hides, threshold/calibration, slices). |
| `$ml-training-diagnostics` | 7 | Part A — pretraining/post-training runs (loss/throughput, instability, RL reward curves). |
| `$ml-architecture-reader` | 9 | Part A — architecture & scaling-law lectures. |
| `$ml-data-readiness` | 13 | Part A — data-curation lectures (filtering, dedup, decontamination, train-serve parity). |
| `$ml-math-translator` | 2 | Part C & D — the RLHF/DPO/GRPO and test-time-compute math. |

---

# Part A — Large Language Models: Pretraining → Post-Training

**Track:** Core · **Altitude:** Builder→Engineer · **Length:** 13 weeks (3 lecture hrs + 5 lab hrs/wk)
**Prerequisites:** Subject 02 (you can build a Transformer block, train a small GPT, train a BPE
tokenizer, and run an instrumented training loop) or equivalent. Comfortable with PyTorch, Hugging Face
`datasets`/`transformers`, and reading an experiment's evidence honestly.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop, scaled up to the full
LLM lifecycle. You will not treat any stage as a black box: you curate real web data, train a tokenizer,
fit a scaling law, run distributed training, and execute SFT → reward modeling → RLHF → DPO/ORPO/KTO →
GRPO on a real open model. Where you can't afford full scale, you reproduce the *mechanism* at small
scale and reason explicitly about what changes at scale.

**Course anchor case (carried all 13 weeks):** *grow a small open base model into a helpful, harmless,
reasoning-capable assistant.* You start from a **Pythia-160M/410M** or **Qwen3-0.6B / Llama-3.2-1B**
base, and over the term you (a) reproduce a slice of its pretraining data pipeline, (b) continue-pretrain
a tiny model you own, (c) SFT it on instructions, (d) align it with preferences (RLHF then DPO/ORPO/KTO),
(e) push reasoning with GRPO on math, and (f) evaluate + safety-tune it. A second mini-case, *a domain
assistant* (e.g., a customer-support or coding helper), is used for the capstone.

**What you leave with:** a personal `llm-lifecycle/` repo: a data-curation pipeline, a trained tokenizer,
a scaling-law fit, a distributed-training run, an SFT model, a reward model, DPO/ORPO/KTO and GRPO
checkpoints, an eval harness, and a safety-tuning report — plus eight reusable skills and an evidence log.

---


## Course-level Assessment & grading

| Component | Weight | What it measures |
|-----------|--------|------------------|
| Weekly labs (13 × graded deliverable) | 58% | the lifecycle builds + evidence artifacts (per-week weights below) |
| Two quizzes (Wk 4 scaling/architecture, Wk 9 post-training math) | 8% | conceptual fluency: scaling laws, loss objectives, DPO/RLHF derivations |
| Paper-reproduction checkpoint (Wk 7: reproduce a published result at small scale) | 9% | reproducing a real result with controlled compute |
| Capstone (Wk 13: full pretrain→post-train pipeline + evidence packet) | 25% | end-to-end engineering judgment and honest evaluation |
| **Total** | **100%** | |

Per-week lab weights (the 58% bucket): W1 3 · W2 5 · W3 5 · W4 5 · W5 5 · W6 5 · W7 4 · W8 5 · W9 5 ·
W10 5 · W11 5 · W12 6. Week 13 is graded under the capstone (25%). (Labs 58% + quizzes 8% +
reproduction checkpoint 9% + capstone 25% = 100%.)

## Tooling & environment (June 2026)

- **Python 3.12**, **PyTorch 2.7** (CUDA 12.6), **Hugging Face** `transformers 4.5x`, `datasets 3.x`,
  `tokenizers 0.21`, `accelerate 1.x`, **PEFT 0.14** (LoRA/QLoRA), **TRL 0.16** (SFT/DPO/GRPO/reward),
  **bitsandbytes 0.45** (4-bit), **Flash-Attention 3**.
- **Distributed:** **FSDP2** (native PyTorch) and **DeepSpeed ZeRO-3**; **Megatron-style** tensor/pipeline
  parallel discussed; **Unsloth 2026.x** and **Axolotl** for efficient fine-tuning; **veRL / OpenRLHF** for scalable RL.
- **Data:** **`datatrove`** (HF) and **`nemo-curator`** for curation; **`datasketch`** / MinHash for dedup; **fastText/langdetect** for language ID.
- **Eval:** **lm-evaluation-harness (EleutherAI)**, **Inspect AI (UK AISI)**, **LightEval**; **vLLM 0.8** / **SGLang** for fast eval/inference; **LLM-as-judge** via an API model.
- **Tracking:** **Weights & Biases** or **Trackio**; **Langfuse** for any agentic/eval traces.
- **Compute:** labs run on **1× 24–80 GB GPU** (A100/H100/4090, or Modal/RunPod/Lambda serverless);
  multi-GPU sections use 2–8 GPUs or a simulated/CPU-offloaded fallback with the mechanism intact.
- **Models:** **Pythia-160M/410M/1.4B** (`EleutherAI`), **Qwen3-0.6B/1.7B**, **Llama-3.2-1B/3B**,
  **SmolLM2-135M/360M** as base models sized to the available GPU.
- **Reference texts:** Stanford **CS336** materials; **CS224N** (Winter 2026); Zhao et al. *A Survey of LLMs* (2023, updated); the **FineWeb** technical report.

---

## Week 1 — The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run)

**Altitude:** Builder · **Format:** 3h lecture + 5h lab
**Anchor case:** stand up the repo and continue-pretrain a SmolLM2-135M-scale model on a tiny corpus for 1k steps to map the whole pipeline before zooming in.

### Learning goals
- Draw the full lifecycle: data → tokenizer → architecture → pretraining → evaluation → SFT → preference alignment → reasoning RL → safety → serving.
- Set up a reproducible LLM project (configs, seeds, `accelerate`, W&B/Trackio, checkpoint policy).
- Run and instrument a tiny continue-pretraining job and read its loss/throughput.

### Concept map
- **Pretraining objective.** *Formula:* `L = −Σ_t log p_θ(x_t | x_{<t})`. *Symbols:* `x_{<t}` the prefix,
  `θ` params. *Shapes:* logits `(B,T,V)`, targets `(B,T)`. *Plain English:* predict the next token,
  averaged over a corpus. *Common mistake:* conflating pretraining loss with downstream usefulness.
- **The lifecycle as stages with different objectives.** Plain English: pretraining maximizes likelihood;
  SFT imitates demonstrations; RLHF/DPO optimize a *preference*; GRPO optimizes a *verifiable reward*.
  *Common mistake:* expecting alignment to fix capabilities that pretraining never instilled.
- **Compute/throughput accounting.** *Formula (rough):* `FLOPs ≈ 6·N·D` (params `N`, tokens `D`). *Plain
  English:* training cost scales with params × tokens. *Common mistake:* ignoring data movement / MFU when reasoning about cost.
- **Reproducibility at scale.** Why it matters: a run you can't re-launch deterministically isn't evidence.

### Hands-on build (the lab)
- Initialize `llm-lifecycle/` with `configs/`, `data/`, `src/`, `evidence/`, an `accelerate` config, and a seed helper.
- Continue-pretrain SmolLM2-135M (or Pythia-160M) on a 50–200 MB clean text slice for ~1k steps; log loss, tokens/sec, and MFU.
- **Deliverable:** a runnable tiny pretraining job + a one-page lifecycle map annotated with "where each later week plugs in."
  **Acceptance:** loss decreases; throughput + MFU reported; the lifecycle map names the objective at each stage.

▶ **Practical project:** `VizuaraAILabs/nano-gpt-oss` — stand up a tiny gpt-oss pretraining run and annotate where each later week plugs into the lifecycle.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU) / serverless GPU; `pip install transformers datasets accelerate wandb`; clone `VizuaraAILabs/nano-gpt-oss`.
2. **Scaffold:** init `llm-lifecycle/` with `configs/ data/ src/ evidence/`, an `accelerate` config, and a seed helper.
3. **Data:** stream a ~100 MB FineWeb-Edu slice; tokenize + pack to length 1024.
4. **Train:** continue-pretrain a SmolLM2-135M-scale model for ~1k steps; log loss, tokens/sec, MFU.
5. **Map:** draw the lifecycle (data→tokenizer→arch→pretrain→eval→SFT→align→RL→safety→serve) naming each stage's objective + gate.
6. **Record:** annotate where each later week plugs in.
- **Artifact:** `evidence/week01-lifecycle-map.md` (stage table) + the tiny run's loss/throughput log.
- **Use `$lifecycle-map`:** lay out each stage's objective/data/eval and the decision that gates moving on.
- **Done when:** loss decreases; tokens/sec + MFU logged; the map names the objective at every stage.
- **Stretch:** add a config-hash check so the run re-launches deterministically.

### Harness / reusable skill — `$lifecycle-map`
- **Purpose:** for any LLM project, lay out the stages, the objective + data + eval at each, and the decision that gates moving on.
- **Inputs:** a target model/use-case. **Outputs:** a stage table (objective/data/eval/gate). **Evidence artifact:** `evidence/week01-lifecycle-map.md`.

### Common failure modes
- **Black-box thinking** → treating pretraining as magic. *Fix:* run a real (tiny) job and read its internals.
- **No throughput baseline** → can't tell if later optimizations help. *Fix:* record tokens/sec + MFU now.
- **Unpinned environment** → irreproducible loss curves. *Fix:* pin deps, seed, log the config hash.

### Evidence artifact
`evidence/week01-lifecycle-map.md` (stage table) + the tiny run's loss/throughput log.

### Skill sink-in
Predict the tokens/sec your GPU achieves on a 135M model. Run it. Record the gap and one bottleneck hypothesis.

### Dataset(s)
**A small clean slice of FineWeb-Edu** — `huggingface.co/datasets/HuggingFaceFW/fineweb-edu` (sample-10BT
config; use a ~100 MB streaming slice). **License:** ODC-By 1.0. Fallback: **WikiText-103**
(`Salesforce/wikitext`, CC-BY-SA-3.0).

### Code stub
```python
from transformers import AutoModelForCausalLM, AutoTokenizer, Trainer, TrainingArguments
from datasets import load_dataset

tok = AutoTokenizer.from_pretrained("HuggingFaceTB/SmolLM2-135M")
model = AutoModelForCausalLM.from_pretrained("HuggingFaceTB/SmolLM2-135M",
                                             attn_implementation="flash_attention_3")
ds = load_dataset("HuggingFaceFW/fineweb-edu", "sample-10BT", split="train", streaming=True)
def tokenize(ex): return tok(ex["text"], truncation=True, max_length=1024)
ds = ds.map(tokenize).take(20000)                       # tiny slice
args = TrainingArguments(output_dir="ckpt", max_steps=1000, per_device_train_batch_size=8,
                         bf16=True, logging_steps=20, report_to="wandb", seed=0)
# TODO: pack sequences; add a DataCollatorForLanguageModeling(mlm=False); log tokens/sec + MFU
Trainer(model=model, args=args, train_dataset=ds).train()
```

### Graded rubric (Week 1 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Lifecycle map | all stages, objectives + gates correct | stages only | missing/wrong |
| Tiny run | loss down, MFU + tokens/sec logged | runs, partial logging | doesn't run |
| Reproducibility | seeded, pinned, config hash | partial | none |

**Assessment weight:** 3%.

### Readings & sources
- Brown et al. (2020). *Language Models are Few-Shot Learners (GPT-3).* NeurIPS.
- Penedo et al. (2024). *The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale.* (HF/NeurIPS D&B).
- Biderman et al. (2023). *Pythia: A Suite for Analyzing LLMs Across Training and Scaling.* ICML.
- Stanford CS336 (Spring 2025) — *PyTorch & resource accounting* lecture.

---

### State of the Art (June 2026)
- The 2026 lifecycle is standardized: **pretrain → SFT → LoRA/QLoRA → DPO or GRPO/RLVR → (merge) → serve**; you execute each stage on a real open base (Pythia/SmolLM2/Qwen3/Llama).
- Frontier defaults to assume: **1M context, sparse MoE, tunable thinking-effort** (**Opus 4.8, GPT-5.5 router, Gemini 3.1 Pro, DeepSeek V4**).
- `FLOPs ≈ 6ND` + **MFU** accounting is the same cost language used to plan trillion-token runs in 2026.

**References & links:**
- [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss)
- [Fedus et al., 2021 - MoE](https://arxiv.org/abs/2101.03961)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)
- [Dettmers et al., 2023 - QLoRA](https://arxiv.org/abs/2305.14314)
- [Rafailov et al., 2023 - DPO](https://arxiv.org/abs/2305.18290)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)


<!-- sota:03L01 -->

## Week 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID

**Altitude:** Builder→Engineer · **Format:** 3h lecture + 5h lab
**Anchor case:** build a real (small-scale) web-text curation pipeline from raw Common Crawl WARC to clean training shards.

### Learning goals
- Explain the web-data pipeline: WARC → text extraction → language ID → quality filtering → PII/safety scrubbing.
- Implement heuristic + classifier-based quality filters and measure their effect on a sample.
- Reason about how data choices (sources, filters) shape model behavior and bias.

### Concept map
- **Extraction.** Plain English: pull readable text out of HTML (boilerplate removal). *Common mistake:* training on nav bars, cookie banners, and JS.
- **Quality filtering.** *Two families:* heuristic (length, symbol ratio, stopword presence — Gopher/C4 rules)
  and model-based (a classifier scoring "is this educational/clean?" — FineWeb-Edu style). *Plain English:*
  keep prose, drop junk. *Common mistake:* over-filtering to a narrow, biased slice.
- **Language identification.** *Plain English:* fastText/CLD3 to keep the languages you want. *Common mistake:* mislabeling code/mixed text.
- **Provenance & licensing.** Why it matters: data licenses and PII obligations are part of engineering, not an afterthought (EU AI Act data-governance).

### Hands-on build (the lab)
- `curate.py` using `datatrove`: read a small Common Crawl / FineWeb WARC sample → trafilatura extraction → fastText language ID → Gopher-style heuristic filters → a quality-classifier pass.
- Report a funnel: documents in → kept at each stage, with 10 examples dropped at each filter (and why).
- **Deliverable:** a curation pipeline + a filtering funnel report + a before/after sample diff.
  **Acceptance:** the funnel quantifies each stage's drop rate; you can defend each filter with examples and name one bias it could introduce.

▶ **Practical project:** `VizuaraAILabs/truly-open-gpt-oss` — run its data-prep stage (extraction/filtering) and emit a retention funnel with sampled drops.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local env; `pip install datatrove trafilatura fasttext`; clone `VizuaraAILabs/truly-open-gpt-oss` data stage.
2. **Read:** point a `WarcReader` at a small Common Crawl / FineWeb WARC sample (limit ~5k docs).
3. **Extract:** `Trafilatura(favour_precision=True)` to strip boilerplate to clean text.
4. **Filter:** fastText `lid.176` language ID → Gopher-style heuristics → a FineWeb-Edu-style quality classifier.
5. **Funnel:** log docs-in → kept-after-each-stage with 10 sampled drops per stage and a reason.
6. **Reflect:** name one bias each filter could introduce; track source + license per shard.
- **Artifact:** `evidence/week02-funnel.md` (retention funnel + sampled drops + a bias-risk paragraph).
- **Use `$data-funnel`:** produce a stage-by-stage retention funnel with sampled drops and a bias note.
- **Done when:** per-stage drop rates quantified; each filter defended with examples; one induced bias named; provenance tracked.
- **Stretch:** add a PII/secret scrubber and measure how many docs it touches.

### Harness / reusable skill — `$data-funnel`
- **Purpose:** for any corpus, produce a stage-by-stage retention funnel with sampled drops and a bias note.
- **Inputs:** raw corpus + filter stack. **Outputs:** funnel table, sampled rejected docs, one bias risk. **Evidence artifact:** `evidence/week02-funnel.md`.

### Common failure modes
- **Boilerplate contamination** → model learns menus. *Fix:* proper extraction; spot-check kept docs.
- **Over-filtering** → narrow, biased corpus. *Fix:* tune thresholds; inspect what's removed.
- **No provenance tracking** → license/PII risk. *Fix:* keep source + license per shard.
- **Eval contamination** → benchmark text leaks into training. *Fix:* decontaminate against eval sets (next week's dedup).

### Evidence artifact
`evidence/week02-funnel.md` (retention funnel, sampled drops per stage, a bias-risk paragraph).

### Skill sink-in
Predict what fraction of raw Common Crawl survives quality filtering. Run the funnel. Record the actual rate and the biggest surprise.

### Dataset(s)
**Common Crawl** WARC sample (`https://commoncrawl.org/` — pick one small WARC; CC data terms) and/or
**FineWeb** raw (`huggingface.co/datasets/HuggingFaceFW/fineweb`, ODC-By 1.0, ~15T tokens full — use a
streaming MB-scale slice). Language-ID model: **fastText lid.176** (`fasttext.cc`, CC-BY-SA-3.0).

### Code stub
```python
from datatrove.pipeline.readers import WarcReader
from datatrove.pipeline.extractors import Trafilatura
from datatrove.pipeline.filters import GopherQualityFilter, LanguageFilter
from datatrove.executor import LocalPipelineExecutor

pipeline = [
    WarcReader("data/sample.warc.gz", limit=5000),
    Trafilatura(favour_precision=True),                 # HTML -> clean text
    LanguageFilter(languages=["en"]),                   # fastText lid
    GopherQualityFilter(min_stop_words=2, max_symbol_word_ratio=0.1),
    # TODO: add a model-based quality classifier (FineWeb-Edu style) and a Writer that logs drop reasons
]
LocalPipelineExecutor(pipeline=pipeline, tasks=4).run()
# TODO: emit a funnel table: docs_in -> kept_after_each_stage, with 10 sampled drops/stage
```

### Graded rubric (Week 2 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Pipeline correctness | extraction+langID+filters run on real WARC | partial pipeline | doesn't run |
| Funnel evidence | per-stage rates + sampled drops | rates only | none |
| Critical reasoning | names a concrete induced bias | vague | absent |
| Provenance | source+license tracked | partial | ignored |

**Assessment weight:** 5%.

### Readings & sources
- Penedo et al. (2024). *The FineWeb Datasets.* (HF). + the FineWeb-Edu classifier report.
- Rae et al. (2021). *Scaling Language Models: Gopher* (quality-filter heuristics). DeepMind.
- Raffel et al. (2020). *Exploring the Limits of Transfer Learning with T5 (the C4 corpus).* JMLR.
- Dodge et al. (2021). *Documenting the English Colossal Clean Crawled Corpus.* EMNLP. (bias/provenance)

---

### State of the Art (June 2026)
- **FineWeb / FineWeb-Edu** (plus Dolma, Nemotron-CC) are the 2026 reference open pipelines; model-based quality classifiers (FineWeb-Edu style) now beat pure heuristics.
- **EU AI Act** GPAI data-governance/transparency obligations (in force since Aug 2025; main rules **Aug 2, 2026**) make provenance + licensing a legal requirement, not hygiene.
- **`datatrove` / `nemo-curator`** are the current curation toolchains; the funnel-with-sampled-drops you build is standard practice.

**References & links:**
- [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss)
- [EU AI Act - implementation timeline](https://artificialintelligenceact.eu/implementation-timeline/)


<!-- sota:03L02 -->

## Week 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab
**Anchor case:** dedup the Week-2 corpus, decontaminate it against eval sets, then train a tokenizer on it.

### Learning goals
- Implement exact + near-duplicate (MinHash/LSH) deduplication and measure its effect.
- Decontaminate training data against benchmark test sets and explain why this matters for honest eval.
- Train a production-style tokenizer (BPE/Unigram) and evaluate fertility, coverage, and compression.

### Concept map
- **Exact dedup.** Plain English: drop byte-identical docs (hashing). *Common mistake:* missing near-dupes (templated pages).
- **Near-dup (MinHash + LSH).** *Formula intuition:* estimate Jaccard similarity via min-hash signatures;
  bucket similar docs with LSH. *Plain English:* find "almost the same" documents cheaply. *Common mistake:* thresholds that nuke legitimate repetition (quotes, code).
- **Decontamination.** Plain English: remove training docs overlapping benchmark test items, or your eval is a lie. *Common mistake:* evaluating on data the model memorized.
- **Tokenizer quality.** *Metrics:* fertility (tokens/word), vocab coverage, compression; multilingual/code handling. *Common mistake:* a tokenizer mismatched to the domain (digits, code).

### Hands-on build (the lab)
- `dedup.py`: exact hash dedup + `datasketch` MinHashLSH near-dup removal; report duplicate rate and size reduction.
- `decontaminate.py`: n-gram overlap check against MMLU/GSM8K samples; remove and count contaminated docs.
- `train_tokenizer.py`: train a 32k BPE (HF `tokenizers`) on the cleaned corpus; report fertility vs Llama-3 and GPT-2 tokenizers.
- **Deliverable:** dedup+decontam report + a trained tokenizer + a fertility comparison table.
  **Acceptance:** measurable dup reduction; documented decontamination; tokenizer round-trips and reports fertility.

▶ **Practical project:** `VizuaraAILabs/truly-open-gpt-oss` — run its tokenizer-training stage, then layer in MinHash dedup + n-gram decontamination and measure the duplicate rate.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local env; `pip install datasketch tokenizers datasets`; reuse the Week-2 cleaned corpus.
2. **Exact dedup:** hash docs and drop byte-identical duplicates; report the rate.
3. **Near-dup:** `datasketch` MinHashLSH (threshold ~0.8); report duplicate rate + size reduction.
4. **Decontaminate:** n-gram overlap check vs MMLU/GSM8K samples; remove and count contaminated docs.
5. **Tokenizer:** `train_tokenizer.py` a 32k BPE on the cleaned corpus; report fertility vs Llama-3 and GPT-2 tokenizers.
6. **Verify:** assert the tokenizer round-trips on held-out text.
- **Artifact:** `evidence/week03-dedup.md` (dup rate + contamination count + fertility table + round-trip proof).
- **Use `$dedup-decontam`:** quantify duplication + benchmark contamination and emit clean shards.
- **Done when:** exact+near dup rates reported with justified thresholds; decontamination counted; tokenizer round-trips + reports fertility.
- **Stretch:** sweep the MinHash threshold and show which legitimate repetition it starts deleting.

### Harness / reusable skill — `$dedup-decontam`
- **Purpose:** quantify duplication and benchmark contamination in any corpus and emit a clean shard set.
- **Inputs:** corpus + benchmark sets. **Outputs:** dup-rate, contamination count, cleaned shards. **Evidence artifact:** `evidence/week03-dedup.md`.

### Common failure modes
- **Skipping near-dup** → memorization + wasted compute. *Fix:* MinHash/LSH, tune threshold.
- **No decontamination** → inflated benchmark scores. *Fix:* n-gram overlap removal; document it.
- **Aggressive thresholds** → deleting legitimate content. *Fix:* inspect removed pairs; calibrate.
- **Domain-blind tokenizer** → high fertility on code/digits. *Fix:* include domain text; measure fertility.

### Evidence artifact
`evidence/week03-dedup.md` (dup rate, contamination count, tokenizer fertility table + round-trip proof).

### Skill sink-in
Predict the near-duplicate rate in your Week-2 corpus. Run MinHash dedup. Record the actual rate and what it implies about web data.

### Dataset(s)
The Week-2 cleaned **FineWeb/Common Crawl** slice; benchmark refs for decontamination: **MMLU**
(`huggingface.co/datasets/cais/mmlu`, MIT) and **GSM8K** (`huggingface.co/datasets/openai/gsm8k`, MIT).

### Code stub
```python
from datasketch import MinHash, MinHashLSH

def minhash(text, num_perm=128, k=5):
    m = MinHash(num_perm=num_perm)
    toks = text.split()
    for i in range(len(toks) - k + 1):
        m.update(" ".join(toks[i:i+k]).encode())
    return m

def dedup(docs, threshold=0.8):
    lsh = MinHashLSH(threshold=threshold, num_perm=128)
    keep, sigs = [], {}
    for i, d in enumerate(docs):
        m = minhash(d)
        if not lsh.query(m):            # no near-duplicate already kept
            lsh.insert(str(i), m); keep.append(d); sigs[i] = m
    return keep                          # TODO: also report dup_rate = 1 - len(keep)/len(docs)
```

### Graded rubric (Week 3 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Dedup | exact+near, rate reported, thresholds justified | exact only | none |
| Decontamination | overlap removed + counted | attempted | ignored |
| Tokenizer | trained, fertility vs 2 refs, round-trips | trained only | broken |
| Evidence | full report committed | partial | none |

**Assessment weight:** 5%.

### Readings & sources
- Lee et al. (2022). *Deduplicating Training Data Makes Language Models Better.* ACL.
- Broder (1997). *On the Resemblance and Containment of Documents (MinHash).* SEQUENCES.
- Soldaini et al. (2024). *Dolma: an Open Corpus for LM Pretraining.* ACL. (curation + decontamination at scale)
- Stanford CS336 (Spring 2025) — *Data (Common Crawl, filtering, dedup)* lecture.

---

### State of the Art (June 2026)
- **MinHash/LSH dedup + n-gram decontamination** are 2026 standard (Dolma, FineWeb); contamination is the documented cause of **fake "emergence"** and inflated benchmarks.
- Tokenizer fertility vs **Llama 4 / Qwen 3.5 / GPT-5.5** tokenizers is the current quality check; domain/code/digit handling drives real cost.
- Decontamination is now an eval-integrity obligation as much as a quality one — directly feeding Week 7's honest evaluation.

**References & links:**
- [`VizuaraAILabs/truly-open-gpt-oss`](https://github.com/VizuaraAILabs/truly-open-gpt-oss)


<!-- sota:03L03 -->

## Week 4 — Architecture, Hyperparameters, and Scaling Laws

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab · **Quiz 1 (scaling/architecture) this week.**
**Anchor case:** fit your own scaling law across a few small models and use it to choose a compute-optimal config.

### Learning goals
- Map the modern decoder stack: RoPE, RMSNorm, SwiGLU, GQA, attention/MLP ratios — and why each replaced its predecessor.
- Fit a scaling law on small runs and use Chinchilla reasoning to pick params-vs-tokens for a fixed budget.
- Reason about hyperparameter transfer (μP-style) across scales.

### Concept map
- **RoPE.** *Formula:* rotate `q,k` by a position-dependent angle. *Plain English:* relative position via
  rotation, extrapolates better than sinusoidal. *Common mistake:* wrong base/θ when extending context.
- **RMSNorm + SwiGLU.** *Formula:* `RMSNorm(x)=x/√(mean(x²)+ε)·g`; `SwiGLU(x)=（xW₁⊙SiLU(xW₂))W₃`. *Plain
  English:* cheaper norm + a gated MLP that works better empirically. *Common mistake:* mismatched MLP hidden ratio.
- **GQA (grouped-query attention).** Plain English: share K/V across query heads → smaller KV-cache, faster
  inference, near-MHA quality. *Common mistake:* too few KV groups hurting quality.
- **Scaling laws / Chinchilla.** *Formula:* `L(N,D)=E + A/N^α + B/D^β`; compute-optimal ≈ ~20 tokens/param.
  *Plain English:* for a fixed compute budget, balance params and data. *Common mistake:* big model, too little data (undertrained).

### Hands-on build (the lab)
- `arch.py`: a configurable modern decoder (RoPE + RMSNorm + SwiGLU + GQA); verify a forward pass + KV-cache parity vs full attention.
- `scaling.py`: train 4–5 sizes on a fixed token budget; fit `L(N)`; predict the loss of a held-out size and check.
- **Deliverable:** the architecture module + a fitted scaling curve + a compute-optimal config recommendation.
  **Acceptance:** the held-out-size loss prediction is within a stated tolerance; the recommendation cites token/param balance.

▶ **Practical project:** `VizuaraAILabs/DeepSeek-From-Scratch` — build the modern decoder (RoPE/RMSNorm/SwiGLU/MoE) and fit a small scaling law across sizes.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch scipy matplotlib`; clone `VizuaraAILabs/DeepSeek-From-Scratch`.
2. **Build:** `arch.py` configurable decoder — RoPE + RMSNorm + SwiGLU + GQA; verify a forward pass + KV-cache parity vs full attention.
3. **Sweep sizes:** train 4–5 model sizes on a fixed token budget on the FineWeb-Edu slice.
4. **Fit:** `fit_scaling(runs)` to `L(N,D)=E+A/N^α+B/D^β` via `curve_fit`.
5. **Validate:** hold out one size, predict its loss, report the error.
6. **Recommend:** use the fit (and the ~20 tokens/param rule) to pick a compute-optimal config.
- **Artifact:** `evidence/week04-scaling.md` (fit + held-out prediction + compute-optimal config justification).
- **Use `$scaling-fit`:** fit + validate a scaling law from a few runs, then recommend a config.
- **Done when:** RoPE+RMSNorm+SwiGLU+GQA verified with KV-cache parity; held-out loss within tolerance; recommendation cites token/param balance.
- **Stretch:** swap the dense MLP for a 2-expert MoE and re-fit, comparing the curves.

### Harness / reusable skill — `$scaling-fit`
- **Purpose:** fit and validate a scaling law from a handful of runs, then recommend a compute-optimal config.
- **Inputs:** (params, tokens, loss) triples. **Outputs:** fitted exponents + a held-out prediction + a config rec. **Evidence artifact:** `evidence/week04-scaling.md`.

### Common failure modes
- **Undertrained large model** → wasted compute. *Fix:* Chinchilla balance (~20 tok/param as a start).
- **Overfitting the scaling fit** → wild extrapolation. *Fix:* hold out a size; report fit error.
- **Architecture cargo-culting** → copying configs without checking shapes/quality. *Fix:* ablate one change at a time.
- **HP non-transfer** → tuned LR breaks at new scale. *Fix:* use μP-style transfer or re-tune key HPs.

### Evidence artifact
`evidence/week04-scaling.md` (fit, held-out prediction, compute-optimal config justification).

### Skill sink-in
Predict the compute-optimal token count for a 100M-param budget. Fit your law. Record the recommendation and your reasoning.

### Dataset(s)
The cleaned **FineWeb-Edu** slice (ODC-By 1.0) for the scaling runs; **C4** (`huggingface.co/datasets/allenai/c4`,
ODC-By) as an alternative fixed corpus.

### Code stub
```python
import numpy as np
from scipy.optimize import curve_fit

def chinchilla_loss(ND, E, A, alpha, B, beta):
    N, D = ND
    return E + A / N**alpha + B / D**beta

def fit_scaling(runs):                      # runs: list of (N_params, D_tokens, loss)
    N = np.array([r[0] for r in runs]); D = np.array([r[1] for r in runs])
    L = np.array([r[2] for r in runs])
    p0 = [1.5, 400, 0.34, 400, 0.28]
    popt, _ = curve_fit(chinchilla_loss, (N, D), L, p0=p0, maxfev=20000)
    return popt                              # TODO: hold out one run, predict, report error
# compute-optimal: minimize loss s.t. FLOPs ~ 6*N*D = budget  (-> ~20 tokens/param rule of thumb)
```

### Graded rubric (Week 4 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Architecture | RoPE+RMSNorm+SwiGLU+GQA correct, KV-cache parity | minor issue | broken |
| Scaling fit | held-out prediction within tolerance | fit only | no fit |
| Recommendation | compute-optimal config justified | stated | absent |
| Evidence | curve + prediction committed | partial | none |

**Assessment weight:** 5% (+ Quiz 1).

### Readings & sources
- Hoffmann et al. (2022). *Training Compute-Optimal LLMs (Chinchilla).* DeepMind.
- Su et al. (2021/2023). *RoFormer (RoPE).* Neurocomputing.
- Shazeer (2020). *GLU Variants Improve Transformer (SwiGLU).* arXiv; Ainslie et al. (2023). *GQA.* EMNLP.
- Yang et al. (2022). *Tensor Programs V: Tuning Large NNs via Zero-Shot Hyperparameter Transfer (μP).* NeurIPS.

---

### State of the Art (June 2026)
- The 2026 frontier decoder stack is exactly **RoPE + RMSNorm + SwiGLU + GQA (+ MoE)** — Llama 4, Qwen 3.5, and DeepSeek V4 all share this skeleton.
- **Chinchilla-style scaling laws** (and successors) + **μP hyperparameter transfer** are the current tools for choosing params-vs-tokens and porting LR across scale.
- Sparse **MoE** (DeepSeek V4 49B-active/1.6T-total) is now the dominant way to add capacity without proportional FLOPs — the active-vs-total distinction you formalize in Week 6.

**References & links:**
- [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch)
- [Su et al., 2021 - RoPE rotary embeddings](https://arxiv.org/abs/2104.09864)
- [Hoffmann et al., 2022 - Chinchilla scaling](https://arxiv.org/abs/2203.15556)
- [Fedus et al., 2021 - MoE](https://arxiv.org/abs/2101.03961)


<!-- sota:03L04 -->

## Week 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab
**Anchor case:** scale your pretraining job across 2–8 GPUs (or simulate the mechanism) and measure scaling efficiency.

### Learning goals
- Explain data, tensor, pipeline, and sharded-data parallelism and when each is needed.
- Use FSDP2 / DeepSpeed ZeRO-3 to train a model too big for one GPU's memory; reason about memory vs communication trade-offs.
- Apply activation checkpointing, mixed precision, and gradient accumulation; measure MFU and scaling efficiency.

### Concept map
- **Data parallel (DDP).** Plain English: replicate the model, split the batch, all-reduce gradients. *Common mistake:* replicating a model that doesn't fit.
- **ZeRO / FSDP sharding.** *Formula intuition:* shard optimizer states (ZeRO-1), gradients (ZeRO-2), and
  params (ZeRO-3/FSDP) across ranks. *Plain English:* don't store the whole model on every GPU. *Common
  mistake:* ignoring the extra communication cost of full sharding.
- **Tensor & pipeline parallel.** Plain English: split a single layer's matmul (tensor) or split layers
  across devices (pipeline). *Common mistake:* pipeline bubbles from bad micro-batch sizing.
- **MFU & scaling efficiency.** *Formula:* `MFU = achieved_FLOPs / peak_FLOPs`. *Plain English:* how much of
  the GPU you actually use; scaling efficiency = throughput gain per added GPU. *Common mistake:* claiming "8× GPUs" with 3× throughput and not noticing.

### Hands-on build (the lab)
- `train_fsdp.py`: wrap the Week-4 model in FSDP2 (or DeepSpeed ZeRO-3) + activation checkpointing + bf16; train across available GPUs.
- Measure throughput and MFU at 1, 2, 4 (and 8 if available) GPUs; plot scaling efficiency; document the communication bottleneck.
- **Deliverable:** a sharded training run + a scaling-efficiency plot + a memory breakdown.
  **Acceptance:** the model trains under memory that single-GPU full replication can't fit; scaling efficiency + MFU reported with an explanation of the gap from linear.

▶ **Practical project:** `VizuaraAI/vizuara-5d-parallelism-workshop` — run DP/TP/PP/FSDP across GPUs and measure scaling efficiency + MFU.

**Build it — step by step (AI-builder lab):**
1. **Setup:** multi-GPU node / 2–8 serverless GPUs; `pip install torch accelerate deepspeed`; clone `VizuaraAI/vizuara-5d-parallelism-workshop`.
2. **Shard:** wrap the Week-4 model in FSDP2 (or DeepSpeed ZeRO-3) + activation checkpointing + bf16.
3. **Launch:** `accelerate launch --multi_gpu` across 1, 2, 4 (and 8 if available) GPUs.
4. **Measure:** tokens/sec/GPU + MFU at each world size; record a memory breakdown.
5. **Plot:** scaling efficiency vs GPU count; mark the gap from linear.
6. **Diagnose:** identify the communication bottleneck (interconnect, batch size, overlap).
- **Artifact:** `evidence/week05-scaling-eff.md` (scaling-efficiency plot + MFU + memory breakdown + bottleneck note).
- **Use `$distributed-profiler`:** profile throughput/MFU/memory/comm and recommend the parallelism strategy.
- **Done when:** trains beyond single-GPU capacity; efficiency + MFU reported vs a 1-GPU baseline; a real bottleneck named.
- **Stretch:** add tensor-parallel to one layer and compare against pure FSDP.

### Harness / reusable skill — `$distributed-profiler`
- **Purpose:** profile a distributed run's throughput, MFU, memory, and communication overhead; recommend the parallelism strategy.
- **Inputs:** a training job + GPU count. **Outputs:** scaling table, MFU, bottleneck diagnosis. **Evidence artifact:** `evidence/week05-scaling-eff.md`.

### Common failure modes
- **OOM despite sharding** → wrong ZeRO stage / no checkpointing. *Fix:* escalate ZeRO stage; enable activation checkpointing.
- **Poor scaling efficiency** → communication-bound. *Fix:* increase per-GPU batch, overlap comm/compute, check interconnect.
- **Silent precision bugs** → loss diverges in bf16. *Fix:* keep fp32 master weights / proper reductions.
- **Misreported speedup** → no per-GPU baseline. *Fix:* measure 1-GPU throughput first.

### Evidence artifact
`evidence/week05-scaling-eff.md` (scaling-efficiency plot, MFU, memory breakdown, bottleneck note).

### Skill sink-in
Predict your scaling efficiency at 4 GPUs. Measure it. Record the gap from linear and the dominant cause.

### Dataset(s)
The cleaned **FineWeb-Edu** slice (ODC-By 1.0); reuse the Week-3 tokenizer and packed shards.

### Code stub
```python
import torch
from torch.distributed.fsdp import fully_shard            # FSDP2 API
from torch.distributed.algorithms._checkpoint.checkpoint_wrapper import checkpoint_wrapper

def setup_fsdp(model):
    for block in model.transformer.blocks:                # shard per block
        checkpoint_wrapper(block)                         # activation checkpointing
        fully_shard(block)
    fully_shard(model)
    return model
# launch: accelerate launch --multi_gpu --mixed_precision bf16 train_fsdp.py
# TODO: log tokens/sec/GPU at world_size 1,2,4; MFU = 6*N*tokens_per_s / peak_flops
```

### Graded rubric (Week 5 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Sharded training | trains beyond single-GPU capacity, stable | runs small only | OOM/diverge |
| Scaling measurement | efficiency + MFU + baseline | partial | unmeasured |
| Diagnosis | identifies real bottleneck | guesses | none |
| Evidence | plot + memory breakdown | partial | none |

**Assessment weight:** 5%.

### Readings & sources
- Rajbhandari et al. (2020). *ZeRO: Memory Optimizations Toward Training Trillion Parameter Models.* SC20.
- Zhao et al. (2023). *PyTorch FSDP: Experiences on Scaling Fully Sharded Data Parallel.* VLDB.
- Shoeybi et al. (2019). *Megatron-LM: Training Multi-Billion Parameter LMs Using Model Parallelism.* arXiv.
- Narayanan et al. (2021). *Efficient Large-Scale LM Training on GPU Clusters (PTD-P).* SC21.

---

### State of the Art (June 2026)
- **FSDP2** (native PyTorch) and **DeepSpeed ZeRO-3** are the 2026 reference shards; Megatron-style TP/PP for the largest models.
- **FP8 training** (Blackwell) + **MFU** are the current efficiency metrics; the scaling-efficiency gap-from-linear analysis is exactly what frontier labs report.
- **5D parallelism (DP/TP/PP/CP/EP)** is the 2026 frontier vocabulary — expert-parallel (EP) added specifically for MoE.

**References & links:**
- [`VizuaraAI/vizuara-5d-parallelism-workshop`](https://github.com/VizuaraAI/vizuara-5d-parallelism-workshop)
- [Fedus et al., 2021 - MoE](https://arxiv.org/abs/2101.03961)


<!-- sota:03L05 -->

## Week 6 — Mixture-of-Experts and Long-Context Pretraining

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab
**Anchor case:** convert your dense model's MLP into a sparse MoE layer and reason about long-context training.

### Learning goals
- Implement a top-k gated MoE FFN; explain routing, load balancing, and the active-vs-total parameter distinction.
- Explain MoE training pathologies (router collapse, capacity drops) and their mitigations.
- Reason about long-context training (RoPE scaling, attention cost, document packing).

### Concept map
- **MoE FFN.** *Formula:* `y = Σ_{e∈TopK(g(x))} g_e(x)·E_e(x)`. *Symbols:* `g(x)` router logits, `E_e` expert
  `e`. *Plain English:* route each token to a few experts; only those compute. *Common mistake:* counting total params as if all were active.
- **Load-balancing loss.** *Formula:* an auxiliary term encouraging uniform expert usage. *Plain English:*
  stop the router from sending everything to two experts. *Common mistake:* dropping it → router collapse.
- **Capacity factor.** Plain English: cap tokens/expert; overflow tokens are dropped or rerouted. *Common mistake:* too-low capacity silently drops tokens.
- **Long context.** *Formula intuition:* attention is O(T²); RoPE base scaling / NTK / YaRN extend context.
  *Plain English:* extending context needs both position-encoding tricks and efficient attention. *Common mistake:* extending context without continued training → degraded quality.

### Hands-on build (the lab)
- `moe.py`: replace a dense MLP with a top-2 MoE (8 experts) + a load-balancing aux loss; verify routing distributes and measure active vs total params.
- Compare a dense vs MoE model at matched *active* params on a small pretraining run; track expert utilization.
- Short experiment: extend context from 1k→4k via RoPE scaling on a small model; measure perplexity on long docs.
- **Deliverable:** a working MoE layer + dense-vs-MoE comparison + an expert-utilization plot.
  **Acceptance:** experts are utilized (no collapse), active-param accounting is correct, and you state when MoE is/ isn't worth it.

▶ **Practical project:** `VizuaraAI/Mixture_of_Experts` — implement a top-k MoE FFN + load-balancing loss and track expert utilization.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch matplotlib`; clone `VizuaraAI/Mixture_of_Experts`.
2. **Implement:** `moe.py` replace a dense MLP with a top-2 MoE (8 experts) + a load-balancing aux loss.
3. **Account:** report active vs total params explicitly.
4. **Compare:** dense vs MoE at matched active params on a small pretraining run; track expert utilization.
5. **Long context:** extend 1k→4k via RoPE scaling on a small model; measure perplexity on PG-19 long docs.
6. **Monitor:** plot the per-expert load histogram + token-drop rate; flag collapse.
- **Artifact:** `evidence/week06-moe.md` (utilization histogram + drop rate + dense-vs-MoE table + long-context perplexity).
- **Use `$moe-router-monitor`:** monitor per-expert load, drop rate, and balance loss; flag collapse.
- **Done when:** experts are utilized (no collapse); active/total accounting correct; you state when MoE is/ isn't worth it.
- **Stretch:** add router noise + a capacity factor and show their effect on the drop rate.

### Harness / reusable skill — `$moe-router-monitor`
- **Purpose:** monitor MoE routing health (per-expert load, drop rate, balance loss) and flag collapse.
- **Inputs:** an MoE model + a batch stream. **Outputs:** utilization histogram, drop rate, collapse flag. **Evidence artifact:** `evidence/week06-moe.md`.

### Common failure modes
- **Router collapse** → a few experts do everything. *Fix:* load-balancing loss + noise; monitor utilization.
- **Token dropping** from low capacity → silent quality loss. *Fix:* raise capacity factor; log drop rate.
- **Active/total confusion** → overstating "free" capacity. *Fix:* report both numbers explicitly.
- **Context extension without training** → broken long-range quality. *Fix:* continue-train at the new length.

### Evidence artifact
`evidence/week06-moe.md` (utilization histogram, drop rate, dense-vs-MoE table, long-context perplexity).

### Skill sink-in
Predict whether MoE beats a dense model at equal *active* params on your small run. Measure. Record the result and the routing health.

### Dataset(s)
**FineWeb-Edu** slice (ODC-By 1.0) for pretraining; **PG-19** (`huggingface.co/datasets/deepmind/pg19`,
Apache-2.0, long books) for the long-context perplexity test.

### Code stub
```python
import torch, torch.nn as nn, torch.nn.functional as F

class MoEFFN(nn.Module):
    def __init__(self, d, n_exp=8, k=2):
        super().__init__()
        self.k = k; self.router = nn.Linear(d, n_exp)
        self.experts = nn.ModuleList([nn.Sequential(nn.Linear(d, 4*d), nn.SiLU(),
                                                    nn.Linear(4*d, d)) for _ in range(n_exp)])
    def forward(self, x):                          # x: (B,T,d)
        logits = self.router(x)                    # (B,T,n_exp)
        w, idx = torch.topk(logits.softmax(-1), self.k, dim=-1)
        out = torch.zeros_like(x)
        for j in range(self.k):                    # route to top-k experts
            for e in range(len(self.experts)):
                m = (idx[..., j] == e)
                if m.any(): out[m] += w[..., j][m, None] * self.experts[e](x[m])
        # TODO: aux load-balancing loss = n_exp * mean(load_e) . mean(router_prob_e)
        return out
```

### Graded rubric (Week 6 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| MoE correctness | top-k routing + aux loss, no collapse | routing only | collapse/broken |
| Accounting | active vs total params correct | one | wrong |
| Long-context | RoPE scaling + perplexity measured | attempted | none |
| Evidence | utilization + comparison committed | partial | none |

**Assessment weight:** 5%.

### Readings & sources
- Shazeer et al. (2017). *Outrageously Large Neural Networks (Sparsely-Gated MoE).* ICLR.
- Fedus, Zoph & Shazeer (2022). *Switch Transformers.* JMLR.
- DeepSeek-AI (2024/2025). *DeepSeek-V3 Technical Report* (MoE at scale). arXiv.
- Peng et al. (2023). *YaRN: Efficient Context Window Extension of LLMs.* ICLR.

---

### State of the Art (June 2026)
- **MoE is the dominant 2026 frontier architecture** (DeepSeek V4 1.6T/49B, Qwen 3.5 397B/17B, Llama 4); top-k routing + load-balancing loss + capacity factor are exactly what you implement.
- Long context is table stakes (**1M+ context; Llama 4 Scout ~10M**); **RoPE scaling / YaRN / NTK** + continued training are the current extension recipes.
- Router-collapse monitoring and active-vs-total accounting are live production concerns in 2026 MoE serving.

**References & links:**
- [`VizuaraAI/Mixture_of_Experts`](https://github.com/VizuaraAI/Mixture_of_Experts)
- [Su et al., 2021 - RoPE rotary embeddings](https://arxiv.org/abs/2104.09864)
- [Fedus et al., 2021 - MoE](https://arxiv.org/abs/2101.03961)


<!-- sota:03L06 -->

## Week 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab · **Paper-reproduction checkpoint due.**
**Anchor case:** evaluate your base model with a real harness and reproduce one published small-scale result.

### Learning goals
- Run `lm-evaluation-harness` / LightEval on standard benchmarks; explain what each measures and its pitfalls.
- Distinguish loss/perplexity from capability benchmarks (MMLU, GSM8K, HellaSwag, ARC) and from emergent behavior claims.
- Reproduce a published result at small scale and report the gap honestly.

### Concept map
- **Perplexity vs capability.** Plain English: low loss ≠ can-do-the-task. *Common mistake:* reporting only perplexity for an assistant.
- **Benchmark formats.** Plain English: multiple-choice (MMLU/ARC/HellaSwag) vs generative (GSM8K) vs
  log-likelihood scoring. *Common mistake:* prompt/format sensitivity making scores non-comparable.
- **Contamination & emergence.** Where it matters: contaminated benchmarks and threshold artifacts produce
  fake "emergence." *Common mistake:* treating a jump as emergent without checking the metric.
- **Reproduction discipline.** Why it matters: re-deriving a published number at small scale is the strongest evidence you understand it.

### Hands-on build (the lab)
- `eval_base.py`: run `lm-eval-harness` on HellaSwag, ARC-easy, MMLU (subset), and GSM8K for your base + your continue-pretrained model; tabulate with confidence intervals.
- **Reproduction checkpoint:** pick a small published result (e.g., a Pythia checkpoint's reported HellaSwag, or a SmolLM2 number) and reproduce it within a stated tolerance; document every deviation.
- **Deliverable:** a benchmark table + a reproduction report (target number, your number, gap, explanation).
  **Acceptance:** scores are reported with CIs and format notes; the reproduction is within tolerance or the discrepancy is diagnosed.

▶ **Practical project:** `mlabonne/llm-course` — run its evaluation notebooks (lm-eval-harness) on your base model and reproduce a published number with CIs.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install lm-eval vllm`; open the eval section of `mlabonne/llm-course`.
2. **Run:** `lm_eval.simple_evaluate` on HellaSwag, ARC-easy, MMLU (subset), GSM8K for your base + continue-pretrained model.
3. **Quantify:** extract acc + stderr; build a table with 95% CIs and fixed prompt templates.
4. **Reproduce:** pick a published small-scale number (e.g., a Pythia/SmolLM2 HellaSwag) and reproduce within a stated tolerance.
5. **Diagnose:** document every deviation; check for contamination / format sensitivity.
6. **Visualize:** bar-chart your scores vs the published target with CIs.
- **Artifact:** `evidence/week07-eval/` (benchmark table with CIs + format notes + reproduction report).
- **Use `$benchmark-runner`:** run the suite reproducibly with format/contamination caveats + a reproduction delta.
- **Done when:** scores reported with CIs + a pinned harness; the reproduction is within tolerance or the gap is diagnosed.
- **Stretch:** re-run one benchmark under two prompt templates and quantify the format swing.

### Harness / reusable skill — `$benchmark-runner`
- **Purpose:** run a standard eval suite reproducibly, with format/contamination caveats and confidence intervals.
- **Inputs:** a model + a benchmark list. **Outputs:** a scored table + caveats + a reproduction delta. **Evidence artifact:** `evidence/week07-eval/`.

### Common failure modes
- **Format sensitivity** → score swings from prompt template. *Fix:* fix the harness version + template; report it.
- **No confidence intervals** → over-reading noise. *Fix:* report CIs; use enough items.
- **Contamination blindness** → inflated scores. *Fix:* check decontamination (Week 3); flag suspect benchmarks.
- **Reproduction hand-waving** → "close enough." *Fix:* state tolerance; diagnose any gap.

### Evidence artifact
`evidence/week07-eval/` (benchmark table with CIs, format notes, reproduction report).

### Skill sink-in
Predict your model's HellaSwag accuracy before running. Run the harness. Record the gap and one format effect you noticed.

### Dataset(s)
**HellaSwag** (`huggingface.co/datasets/Rowan/hellaswag`, MIT), **ARC** (`allenai/ai2_arc`, CC-BY-SA-4.0),
**MMLU** (`cais/mmlu`, MIT), **GSM8K** (`openai/gsm8k`, MIT). Run via **lm-evaluation-harness** (EleutherAI, MIT).

### Code stub
```python
# lm-eval-harness, pinned version, fixed templates for reproducibility
import lm_eval
results = lm_eval.simple_evaluate(
    model="hf",
    model_args="pretrained=./ckpt/continue-pretrained,dtype=bfloat16",
    tasks=["hellaswag", "arc_easy", "mmlu", "gsm8k"],
    num_fewshot=0, batch_size="auto",
)
# TODO: extract acc + stderr; build a table with 95% CI = 1.96*stderr;
# TODO: reproduction delta = |your_score - published_score|; flag if > tolerance
```

### Graded rubric (Reproduction checkpoint — the 9% bucket)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Eval rigor | CIs + format notes + pinned harness | scores only | unreproducible |
| Reproduction | within tolerance or gap diagnosed | close, undiagnosed | not attempted |
| Honesty | caveats + contamination check | partial | overclaims |
| Evidence | table + report committed | partial | none |

**Assessment weight:** 4% lab + the 9% reproduction-checkpoint bucket.

### Readings & sources
- Gao et al. (2023). *A Framework for Few-Shot Language Model Evaluation (lm-eval-harness).* Zenodo/EleutherAI.
- Zellers et al. (2019). *HellaSwag: Can a Machine Really Finish Your Sentence?* ACL.
- Schaeffer, Miranda & Koyejo (2023). *Are Emergent Abilities of LLMs a Mirage?* NeurIPS.
- Biderman et al. (2024). *Lessons from the Trenches on Reproducible Evaluation of LMs.* arXiv.

---

### State of the Art (June 2026)
- 2026 capability benchmarks: **MMLU-Pro, GPQA Diamond, ARC-AGI-2, AIME, HellaSwag/ARC** via **lm-evaluation-harness / LightEval**; report CIs + format notes.
- **Contamination → fake emergence** (Schaeffer et al.) is the central honesty concern; decontamination (Week 3) is the antidote.
- Reproduction discipline mirrors **UK AISI Inspect AI / reproducible-eval** practice — re-deriving a published number is the strongest evidence of understanding.

**References & links:**
- [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course)
- [UK AISI Inspect (evals)](https://inspect.aisi.org.uk)


<!-- sota:03L07 -->

## Week 8 — Supervised Fine-Tuning & Instruction Tuning

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab
**Anchor case:** turn your base model into an instruction-follower with SFT (full + LoRA/QLoRA) on a curated instruction set.

### Learning goals
- Implement SFT with proper chat templating, loss masking (train on responses, not prompts), and packing.
- Use LoRA/QLoRA for parameter-efficient tuning; explain rank, target modules, and the quality/cost trade-off.
- Curate and assess an instruction dataset; explain why data quality dominates SFT.

### Concept map
- **SFT objective.** *Formula:* `L = −Σ_{t∈response} log p_θ(y_t | context)`. *Plain English:* maximize
  likelihood of good demonstrations — but only score the assistant's tokens. *Common mistake:* computing loss over the prompt too.
- **Chat templating.** Plain English: special tokens/roles structure multi-turn data; must match the model's expected template. *Common mistake:* template mismatch → degraded or broken behavior.
- **LoRA / QLoRA.** *Formula:* `W' = W + (α/r)·BA`, `B∈ℝ^{d×r}, A∈ℝ^{r×k}`. *Symbols:* `r` rank, `α` scale.
  *Plain English:* learn a low-rank update; QLoRA adds 4-bit base weights. *Common mistake:* rank too low for the task, or targeting the wrong modules.
- **Data quality > quantity.** Why it matters: a few thousand excellent examples (LIMA) can beat a noisy million. *Common mistake:* scaling noisy data and expecting gains.

### Hands-on build (the lab)
- `sft.py` using TRL `SFTTrainer`: chat-template a dataset, mask prompt tokens, pack sequences; run full-FT (small model) and QLoRA (larger model).
- Curate/clean a 5–10k instruction subset; compare SFT on the raw vs cleaned subset.
- **Deliverable:** an SFT model + a LoRA-vs-full comparison + a data-quality ablation.
  **Acceptance:** the SFT model follows instructions (qualitative + a small held-out instruction eval); loss masking and templating are verified; the data-quality ablation shows the expected effect.

▶ **Practical project:** `krishnaik06/Finetuning-LLM` — run SFT + LoRA/QLoRA on an instruction set with proper chat templating and loss masking.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install trl peft bitsandbytes transformers`; clone `krishnaik06/Finetuning-LLM`.
2. **Data:** chat-template a 5–10k instruction subset (Tulu-3/UltraChat); verify token-level labels.
3. **Configure:** TRL `SFTTrainer` with `assistant_only_loss=True` (mask prompt tokens) + packing; QLoRA via `LoraConfig(r=16)`.
4. **Train:** run full-FT on a small model and QLoRA on a larger one.
5. **Ablate:** SFT on raw vs cleaned data; compare on a small held-out instruction eval.
6. **Inspect:** generate sample completions; confirm the chat template round-trips.
- **Artifact:** `evidence/week08-sft/` (config + loss curves + LoRA-vs-full table + data-quality ablation + samples).
- **Use `$sft-recipe`:** template + mask + pack + LoRA config + held-out instruction eval.
- **Done when:** masking + template verified; the model follows instructions; the data-quality ablation shows the expected effect.
- **Stretch:** sweep LoRA rank and plot quality vs trainable-parameter count.

### Harness / reusable skill — `$sft-recipe`
- **Purpose:** a reproducible SFT recipe: template + mask + pack + LoRA config + held-out instruction eval.
- **Inputs:** base model + instruction data. **Outputs:** a tuned checkpoint + an eval delta + a config. **Evidence artifact:** `evidence/week08-sft/`.

### Common failure modes
- **No loss masking** → model learns to generate prompts. *Fix:* mask everything but the response; verify token-level labels.
- **Template mismatch** → broken chat behavior. *Fix:* use the model's exact chat template; test one round-trip.
- **LoRA under-capacity** → underfits hard tasks. *Fix:* raise rank / add target modules; compare to full-FT.
- **Noisy data scaling** → flat or worse results. *Fix:* clean and dedup; prefer quality.

### Evidence artifact
`evidence/week08-sft/` (config, loss curves, LoRA-vs-full table, data-quality ablation, sample completions).

### Skill sink-in
Predict whether QLoRA matches full fine-tuning on your held-out instruction eval. Run both. Record the quality/cost trade-off.

### Dataset(s)
**Tulu-3 SFT mixture** (`huggingface.co/datasets/allenai/tulu-3-sft-mixture`, ODC-By) and/or **UltraChat-200k**
(`huggingface.co/datasets/HuggingFaceH4/ultrachat_200k`, MIT); a quality reference: **LIMA**
(`huggingface.co/datasets/GAIR/lima`, CC-BY-NC — research use).

### Code stub
```python
from trl import SFTTrainer, SFTConfig
from peft import LoraConfig
from transformers import AutoModelForCausalLM, AutoTokenizer

tok = AutoTokenizer.from_pretrained("Qwen/Qwen3-1.7B-Base")
model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-1.7B-Base", load_in_4bit=True)  # QLoRA
peft_cfg = LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj","k_proj","v_proj","o_proj"])
cfg = SFTConfig(output_dir="sft-ckpt", packing=True, max_seq_length=2048,
                assistant_only_loss=True, bf16=True)     # mask prompt tokens
trainer = SFTTrainer(model=model, args=cfg, peft_config=peft_cfg,
                     train_dataset=ds, processing_class=tok)   # ds uses the chat template
trainer.train()
```

### Graded rubric (Week 8 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| SFT correctness | masking + template verified, follows instructions | runs, minor issue | broken behavior |
| LoRA vs full | compared with cost/quality | one run | none |
| Data ablation | quality effect shown | attempted | absent |
| Evidence | curves + tables + samples | partial | none |

**Assessment weight:** 5%.

### Readings & sources
- Wei et al. (2022). *Finetuned Language Models Are Zero-Shot Learners (FLAN).* ICLR.
- Hu et al. (2021). *LoRA: Low-Rank Adaptation of LLMs.* ICLR; Dettmers et al. (2023). *QLoRA.* NeurIPS.
- Zhou et al. (2023). *LIMA: Less Is More for Alignment.* NeurIPS.
- Lambert et al. (2024). *Tülu 3: Pushing Frontiers in Open Language Model Post-Training.* AllenAI/arXiv.

---

### State of the Art (June 2026)
- The 2026 default PEFT stack is **LoRA/QLoRA/DoRA** via HF **trl/peft + unsloth/axolotl** (2–5× faster QLoRA; ~$12 to tune 8B on one A100).
- **Data quality > quantity** (LIMA, Tülu 3) is reinforced; **assistant-only loss masking + chat templates** are non-negotiable correctness checks.
- Synthetic SFT data (distilled from frontier models) is standard 2026 practice — with model-collapse caveats.

**References & links:**
- [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)
- [Dettmers et al., 2023 - QLoRA](https://arxiv.org/abs/2305.14314)
- [Liu et al., 2024 - DoRA](https://arxiv.org/abs/2402.09353)
- [Hugging Face TRL](https://github.com/huggingface/trl)
- [Hugging Face PEFT](https://github.com/huggingface/peft)
- [Unsloth (fast QLoRA)](https://github.com/unslothai/unsloth)


<!-- sota:03L08 -->

## Week 9 — Reward Modeling & RLHF (PPO)

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab · **Quiz 2 (post-training math) this week.**
**Anchor case:** train a reward model on human/AI preferences, then improve your SFT model with PPO-based RLHF.

### Learning goals
- Train a reward model from pairwise preferences (Bradley-Terry) and evaluate its accuracy.
- Run PPO-based RLHF: policy, reference (KL anchor), value model, and reward; explain the KL penalty's role.
- Diagnose RLHF pathologies (reward hacking, KL collapse, mode collapse).

### Concept map
- **Bradley-Terry reward model.** *Formula:* `P(y_w ≻ y_l) = σ(r(y_w) − r(y_l))`; loss `−log σ(r_w − r_l)`.
  *Symbols:* `y_w,y_l` chosen/rejected, `r` reward head. *Plain English:* learn a scalar "goodness" that
  ranks preferred over dispreferred. *Common mistake:* an over-optimized RM that's gameable.
- **RLHF/PPO objective.** *Formula:* `max_θ E[r(x,y)] − β·KL(π_θ ‖ π_ref)`. *Symbols:* `β` KL weight,
  `π_ref` frozen SFT model. *Plain English:* raise reward but don't drift too far from the SFT policy.
  *Common mistake:* `β` too small → reward hacking / gibberish that scores high.
- **Value function / advantage.** Plain English: PPO uses a learned baseline (GAE) to reduce variance. *Common mistake:* an untrained value head destabilizing updates.
- **Reward hacking.** Where it matters: the policy exploits RM blind spots (length, sycophancy). *Common mistake:* trusting reward without held-out human/judge checks.

### Hands-on build (the lab)
- `reward_model.py`: train a BT reward model on a preference dataset; report pairwise accuracy on held-out pairs.
- `ppo.py` (TRL `PPOTrainer`): RLHF your SFT model with the RM + a KL penalty to the reference; track reward, KL, and a held-out judge score.
- **Deliverable:** a reward model (with accuracy) + a PPO run (reward/KL curves) + a reward-hacking probe.
  **Acceptance:** RM beats chance clearly; PPO raises judge-scored quality without KL blow-up; you demonstrate at least one reward-hacking failure and a mitigation.

▶ **Practical project:** `mlabonne/llm-course` — train a Bradley-Terry reward model and run PPO RLHF from its post-training notebooks, watching reward/KL.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install trl transformers`; open the RLHF section of `mlabonne/llm-course`.
2. **Reward model:** `reward_model.py` Bradley-Terry on UltraFeedback/HH-RLHF; report held-out pairwise accuracy.
3. **PPO:** TRL `PPOTrainer` — policy + frozen reference (KL anchor) + value head + the RM.
4. **Track:** log reward, KL, and a held-out LLM-as-judge score over training.
5. **Probe hacking:** demonstrate one reward-hacking failure (length/lists/sycophancy) and a mitigation.
6. **Visualize:** plot reward vs KL trajectories.
- **Artifact:** `evidence/week09-rlhf/` (RM accuracy + reward/KL curves + reward-hacking demo + mitigation).
- **Use `$rlhf-monitor`:** watch reward/KL trajectories + hacking signatures and make a stop/continue call.
- **Done when:** the RM beats chance clearly; PPO raises judge-scored quality without KL blow-up; one hack shown + mitigated.
- **Stretch:** add an adaptive-KL controller and compare stability vs a fixed β.

### Harness / reusable skill — `$rlhf-monitor`
- **Purpose:** monitor an RLHF run for reward/KL trajectories and reward-hacking signatures (length inflation, repetition, sycophancy).
- **Inputs:** a PPO run's logs + samples. **Outputs:** reward/KL plots, a hacking-signature checklist, a stop/continue call. **Evidence artifact:** `evidence/week09-rlhf/`.

### Common failure modes
- **Reward hacking** → high reward, bad text. *Fix:* held-out judge eval; length/format penalties; better RM.
- **KL collapse/explosion** → degenerate or unmoved policy. *Fix:* tune `β`/target-KL; adaptive KL controller.
- **RM overfitting** → brittle reward. *Fix:* regularize, more diverse preferences, check held-out accuracy.
- **Value instability** → divergence. *Fix:* value clipping, warmup, smaller LR.

### Evidence artifact
`evidence/week09-rlhf/` (RM accuracy, reward/KL curves, reward-hacking demonstration + mitigation).

### Skill sink-in
Predict what your policy will exploit to hack the reward (length? lists? hedging?). Run PPO. Record the actual hack and your fix.

### Dataset(s)
**UltraFeedback** (`huggingface.co/datasets/HuggingFaceH4/ultrafeedback_binarized`, MIT) and/or
**HH-RLHF** (`huggingface.co/datasets/Anthropic/hh-rlhf`, MIT) for preferences; judge via an API model.

### Code stub
```python
from trl import RewardTrainer, RewardConfig, PPOTrainer, PPOConfig
from transformers import AutoModelForSequenceClassification

# 1) Reward model: Bradley-Terry on (chosen, rejected) pairs
rm = AutoModelForSequenceClassification.from_pretrained("./sft-ckpt", num_labels=1)
RewardTrainer(model=rm, args=RewardConfig(output_dir="rm", bf16=True),
              train_dataset=pref_ds).train()      # loss = -log sigmoid(r_chosen - r_rejected)

# 2) PPO: maximize reward - beta * KL(policy || ref)
ppo_cfg = PPOConfig(output_dir="ppo", kl_coef=0.05, batch_size=64)
# TODO: PPOTrainer(policy=sft_model, ref_model=frozen_sft, reward_model=rm, ...).train()
# TODO: log mean_reward, kl, and a held-out LLM-judge win-rate every N steps
```

### Graded rubric (Week 9 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Reward model | strong held-out accuracy, BT loss correct | trains, modest acc | broken/chance |
| PPO run | reward up, KL controlled, judge gain | unstable but runs | diverges |
| Reward hacking | demonstrated + mitigated | noted | ignored |
| Evidence | RM acc + curves + probe | partial | none |

**Assessment weight:** 5% (+ Quiz 2).

### Readings & sources
- Christiano et al. (2017). *Deep Reinforcement Learning from Human Preferences.* NeurIPS.
- Ouyang et al. (2022). *Training Language Models to Follow Instructions with Human Feedback (InstructGPT).* NeurIPS.
- Schulman et al. (2017). *Proximal Policy Optimization Algorithms.* arXiv.
- Bai et al. (2022). *Constitutional AI: Harmlessness from AI Feedback (RLAIF).* Anthropic/arXiv.

---

### State of the Art (June 2026)
- **RLVR is displacing pure RLHF** for reasoning, but Bradley-Terry reward models + PPO remain the foundation and the clearest place to see **reward hacking / verifier gaming** (active ICLR 2026 thread).
- KL-to-reference control and held-out **LLM-as-judge** checks are the current guards against reward-hacked policies.
- Tooling: **TRL, veRL, OpenRLHF** are the 2026 scalable-RL references.

**References & links:**
- [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Shao et al., 2024 - GRPO/RLVR](https://arxiv.org/abs/2402.03300)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Hugging Face TRL](https://github.com/huggingface/trl)
- [veRL (RL for LLMs)](https://github.com/volcengine/verl)


<!-- sota:03L09 -->

## Week 10 — Direct Preference Optimization: DPO, ORPO, KTO

**Altitude:** Engineer · **Format:** 3h lecture + 5h lab
**Anchor case:** align the SFT model *without* a separate reward model or RL loop, and compare DPO/ORPO/KTO head-to-head against Week 9's PPO.

### Learning goals
- Derive the DPO objective and explain how it replaces RM+PPO with a single classification-style loss.
- Implement DPO, ORPO, and KTO via TRL; explain their data requirements (paired vs unpaired) and trade-offs.
- Compare RLHF vs direct methods on the same preference data with a judge.

### Concept map
- **DPO.** *Formula:* `L = −log σ(β·[log(π_θ(y_w)/π_ref(y_w)) − log(π_θ(y_l)/π_ref(y_l))])`. *Symbols:*
  `β` KL strength, `π_ref` the SFT reference. *Plain English:* directly raise the log-prob margin of chosen
  over rejected, anchored to the reference — the optimal RLHF policy in closed form. *Common mistake:* forgetting the reference model or mismatching it to the SFT checkpoint.
- **ORPO.** Plain English: combines SFT and an odds-ratio preference term in one stage — *no reference model*. *Common mistake:* using it when you actually want a strong separate SFT stage.
- **KTO.** Plain English: learns from *unpaired* binary good/bad signals (Kahneman-Tversky), so you don't need pairwise preferences. *Common mistake:* applying it to paired data where DPO is stronger.
- **DPO vs RLHF.** Where it matters: DPO is simpler/cheaper and stable; PPO can reach higher ceilings with online data + a good RM. *Common mistake:* declaring a universal winner.

### Hands-on build (the lab)
- `dpo.py`, `orpo.py`, `kto.py` via TRL on the same preferences (KTO uses a binarized variant); train all three from the SFT checkpoint.
- Compare DPO/ORPO/KTO/PPO on a held-out judge win-rate + a benchmark (e.g., a small AlpacaEval/MT-Bench-style set), holding data + compute fixed.
- **Deliverable:** three aligned checkpoints + a method-comparison table (win-rate, KL drift, cost).
  **Acceptance:** all three train stably and improve over SFT; the comparison is fair (same data/compute) and you give a defended recommendation.

▶ **Practical project:** `mlabonne/llm-course` — align your SFT model with DPO (and contrast ORPO/KTO) using its preference-optimization notebook.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install trl peft`; open the preference-optimization notebook of `mlabonne/llm-course`.
2. **Data:** the binarized UltraFeedback pairs; chat-template chosen/rejected.
3. **Align:** run DPO on your Week-8 SFT model; then ORPO and KTO with matched data.
4. **Compare:** evaluate the three on a held-out preference set + an LLM-as-judge head-to-head.
5. **Inspect:** check for over-optimization (degenerate length/format drift).
6. **Visualize:** bar-chart win-rate per method vs the SFT baseline.
- **Artifact:** `evidence/week10-preference/` (method comparison table + judge win-rates + sample completions).
- **Use `$preference-align-bench`:** benchmark DPO vs ORPO vs KTO fairly on one model/data.
- **Done when:** all three run on the same base/data; a fair comparison + judge eval is reported; the pick is justified.
- **Stretch:** model-merge the DPO + SFT checkpoints and re-evaluate.

### Harness / reusable skill — `$preference-align-bench`
- **Purpose:** fairly compare preference-optimization methods on fixed data/compute with a judge + a benchmark.
- **Inputs:** SFT model + preferences + method list. **Outputs:** win-rate table, KL drift, cost, recommendation. **Evidence artifact:** `evidence/week10-align/`.

### Common failure modes
- **Reference mismatch** → DPO/ORPO instability. *Fix:* reference = exact SFT checkpoint; verify.
- **β mis-set** → over/under-alignment. *Fix:* sweep `β`; watch KL drift + quality.
- **Unfair comparison** → different data/compute across methods. *Fix:* hold both fixed; same judge/seed.
- **Judge bias** → length/style-biased win-rates. *Fix:* control length; use a rubric; spot-check by hand.

### Evidence artifact
`evidence/week10-align/` (win-rate table across DPO/ORPO/KTO/PPO, KL drift, cost, recommendation).

### Skill sink-in
Predict which method wins the judged comparison at fixed compute. Run all four. Record the ranking and what surprised you.

### Dataset(s)
**UltraFeedback (binarized)** (`HuggingFaceH4/ultrafeedback_binarized`, MIT) for DPO/ORPO; a binarized
good/bad variant for KTO; judge/benchmark via **AlpacaEval 2** set (`tatsu-lab/alpaca_eval`, Apache-2.0).

### Code stub
```python
from trl import DPOTrainer, DPOConfig, ORPOTrainer, ORPOConfig, KTOTrainer, KTOConfig

# DPO: closed-form optimal RLHF policy, no RM, no rollouts
dpo = DPOTrainer(model="./sft-ckpt", ref_model="./sft-ckpt",
                 args=DPOConfig(output_dir="dpo", beta=0.1, bf16=True),
                 train_dataset=pref_ds)           # columns: prompt, chosen, rejected
dpo.train()
# ORPO: reference-free, SFT + odds-ratio in one stage
# KTO: unpaired binary {desirable / undesirable} signal
# TODO: evaluate all four (DPO/ORPO/KTO/PPO) with the SAME judge + AlpacaEval set; tabulate win-rate
```

### Graded rubric (Week 10 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Method correctness | DPO/ORPO/KTO all train, refs correct | two work | broken |
| Fair comparison | same data/compute/judge | partial control | uncontrolled |
| Recommendation | defended with evidence | stated | absent |
| Evidence | win-rate + KL + cost table | partial | none |

**Assessment weight:** 5%.

### Readings & sources
- Rafailov et al. (2023). *Direct Preference Optimization: Your Language Model is Secretly a Reward Model.* NeurIPS.
- Hong, Lee & Thorne (2024). *ORPO: Monolithic Preference Optimization without Reference Model.* EMNLP.
- Ethayarajh et al. (2024). *KTO: Model Alignment as Prospect Theoretic Optimization.* ICML.
- Meng, Xia & Chen (2024). *SimPO: Simple Preference Optimization with a Reference-Free Reward.* NeurIPS.

---

### State of the Art (June 2026)
- **DPO (and ORPO/KTO)** are the 2026 default preference-optimization methods — simpler than PPO, no separate reward model; the standard "→ DPO or GRPO" step in the post-training stack.
- **Tülu 3** and most open post-training recipes use DPO-family losses; you compare them head-to-head.
- **Model merging** after DPO is an increasingly common final step worth previewing.

**References & links:**
- [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course)
- [Rafailov et al., 2023 - DPO](https://arxiv.org/abs/2305.18290)
- [Hong et al., 2024 - ORPO](https://arxiv.org/abs/2403.07691)
- [Ethayarajh et al., 2024 - KTO](https://arxiv.org/abs/2402.01306)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)


<!-- sota:03L10 -->

## Week 11 — RL for Reasoning: GRPO and Verifiable Rewards

**Altitude:** Engineer/Specialist · **Format:** 3h lecture + 5h lab
**Anchor case:** push your model's math reasoning with GRPO using a verifiable (answer-checking) reward on GSM8K-style problems.

### Learning goals
- Explain GRPO and how it removes the value model by using group-relative advantages.
- Implement RL from verifiable rewards (RLVR): a programmatic reward that checks final answers / formats.
- Reason about test-time compute, reasoning-length growth, and reward-design pitfalls for reasoning.

### Concept map
- **GRPO.** *Formula:* for a group of `G` sampled outputs per prompt, advantage `Â_i = (r_i − mean(r))/std(r)`;
  objective is a PPO-style clipped ratio with KL to a reference, **no value network**. *Plain English:*
  sample several answers, reward the better-than-average ones, push toward them. *Common mistake:* tiny groups → noisy advantage estimates.
- **Verifiable reward (RLVR).** Plain English: for math/code, the reward is "is the final answer correct?" — cheap, unhackable-ish, scalable. *Common mistake:* a reward that's gameable by format tricks without correctness.
- **Test-time compute.** Where it matters: RL elicits longer chains-of-thought that trade compute for accuracy (o1/R1-style). *Common mistake:* unbounded length with no quality gain (overthinking).
- **Format + correctness rewards.** Plain English: combine "answer correct" with "uses the required answer format." *Common mistake:* rewarding format so heavily the model stops solving.

### Hands-on build (the lab)
- `grpo.py` via TRL `GRPOTrainer`: a verifiable reward function (parse `\boxed{}` / final number, compare to gold) + a format reward; train your SFT/DPO model on GSM8K-style problems.
- Track accuracy vs training step and mean reasoning length; show an example whose chain-of-thought improves.
- **Deliverable:** a GRPO run + an accuracy-vs-steps curve + a reasoning-length plot + before/after solutions.
  **Acceptance:** measurable accuracy improvement on a held-out math set; reward function is verifiable and documented; you discuss the length/accuracy trade-off.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — implement GRPO with verifiable rewards on a math task, adding format + correctness rewards.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install trl vllm`; clone `VizuaraAILabs/OpenClaw-RL-Tutorial`.
2. **Task:** pick a math set (GSM8K / AIME-style) with a programmatic answer checker.
3. **Rewards:** define a verifiable reward = format reward + correctness reward (exact-match on the parsed answer).
4. **Train:** run GRPO (group-relative advantages, no value model) on your SFT/aligned model.
5. **Evaluate:** measure accuracy gain + reasoning-length change; add a test-time best-of-n comparison.
6. **Probe:** check for reward hacking / verifier gaming and patch the checker.
- **Artifact:** `evidence/week11-grpo/` (reward curves + accuracy gain + a reward-hacking note).
- **Use `$verifiable-reward`:** design + validate format + correctness rewards that resist gaming.
- **Done when:** GRPO raises verified accuracy; the reward isn't trivially gamed; the test-time scaling effect is measured.
- **Stretch:** add a DAPO-style refinement and compare sample efficiency to vanilla GRPO.

### Harness / reusable skill — `$verifiable-reward`
- **Purpose:** build and validate a programmatic reward (answer-checking + format) and audit it for gameability.
- **Inputs:** a task with checkable answers. **Outputs:** a reward fn + a gameability audit + unit tests. **Evidence artifact:** `evidence/week11-grpo/`.

### Common failure modes
- **Gameable reward** → format-only "solutions." *Fix:* require correctness; unit-test the reward on adversarial outputs.
- **Group too small** → high-variance advantages. *Fix:* increase `G`; normalize within group.
- **Length explosion** → compute up, accuracy flat. *Fix:* mild length penalty; monitor accuracy/length jointly.
- **KL drift** → loses general ability while gaining math. *Fix:* KL anchor; evaluate general benchmarks too.

### Evidence artifact
`evidence/week11-grpo/` (reward fn + tests, accuracy-vs-steps, length plot, before/after CoT examples).

### Skill sink-in
Predict the held-out math accuracy gain from GRPO. Run it. Record the gain, the length change, and one reward-design lesson.

### Dataset(s)
**GSM8K** (`openai/gsm8k`, MIT) and/or **MATH** (`huggingface.co/datasets/hendrycks/competition_math`, MIT)
for verifiable rewards; optionally **Tulu-3 RLVR** prompt sets (AllenAI, ODC-By).

### Code stub
```python
import re
from trl import GRPOTrainer, GRPOConfig

def correctness_reward(prompts, completions, answer, **kw):
    rewards = []
    for c, gold in zip(completions, answer):
        m = re.search(r"\\boxed\{([^}]*)\}", c) or re.search(r"(-?\d+)\s*$", c)
        pred = m.group(1).strip() if m else None
        rewards.append(1.0 if pred == str(gold).strip() else 0.0)   # verifiable
    return rewards
# format_reward: +0.2 if a \boxed{} answer is present (small, to avoid gaming)

cfg = GRPOConfig(output_dir="grpo", num_generations=8, beta=0.04, bf16=True)  # group size G=8
GRPOTrainer(model="./dpo-ckpt", reward_funcs=[correctness_reward],
            args=cfg, train_dataset=gsm8k).train()
# TODO: log held-out accuracy + mean completion length per eval step
```

### Graded rubric (Week 11 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| GRPO correctness | group-relative advantage + KL, stable | runs, minor issue | broken |
| Reward design | verifiable + gameability-audited + tested | verifiable only | gameable |
| Result | clear held-out accuracy gain | small gain | none/regression |
| Evidence | curves + CoT examples | partial | none |

**Assessment weight:** 5%.

### Readings & sources
- Shao et al. (2024). *DeepSeekMath: Pushing the Limits of Mathematical Reasoning (GRPO).* arXiv.
- DeepSeek-AI (2025). *DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL.* arXiv.
- Lambert et al. (2024). *Tülu 3 (RLVR).* AllenAI/arXiv.
- Yu et al. (2025). *DAPO: An Open-Source LLM Reinforcement Learning System at Scale.* arXiv.

---

### State of the Art (June 2026)
- **GRPO + RLVR (RL with Verifiable Rewards)** is the dominant 2026 reasoning-post-training method — behind DeepSeek-R1-style models; format + correctness rewards are exactly what you build.
- **Verifier models** (RL-trained critics) + test-time parallel/sequential scaling give ~1.2–1.6× (RL^V); **reward hacking** is the key failure mode.
- Variants to know: **DAPO** and other GRPO refinements; **AIME / GPQA** are the standard reasoning benchmarks.

**References & links:**
- [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [DeepSeek-AI, 2025 - DeepSeek-R1](https://arxiv.org/abs/2501.12948)


<!-- sota:03L11 -->

## Week 12 — Long-Context, Safety Fine-Tuning, and Serving

**Altitude:** Engineer/Specialist · **Format:** 3h lecture + 5h lab
**Anchor case:** extend your assistant's context, safety-tune it, red-team it, and serve it efficiently.

### Learning goals
- Extend context (RoPE scaling + continued training) and evaluate with a long-context probe (needle-in-a-haystack).
- Apply safety fine-tuning (refusals, safe completions) and measure the safety/helpfulness trade-off; red-team for jailbreaks/prompt injection.
- Serve the model with vLLM/SGLang (paged KV-cache, continuous batching) and measure latency/throughput; reason about quantization for serving.

### Concept map
- **Long-context extension.** Plain English: RoPE base scaling/YaRN + continued training on long docs;
  evaluate with retrieval-style probes. *Common mistake:* "supports 128k" with no long-context eval (lost-in-the-middle).
- **Safety fine-tuning.** Plain English: train refusals/safe-completions on harmful prompts while preserving
  helpfulness on benign ones. *Common mistake:* over-refusal (refusing benign requests) or under-refusal.
- **Red-teaming.** Where it matters: jailbreaks, prompt injection, and eval-gaming probe real robustness.
  *Common mistake:* testing only static benchmarks, not adaptive attacks.
- **Efficient serving.** *Formula intuition:* paged KV-cache + continuous batching raise throughput; FP8/AWQ
  quantization cuts memory at a small quality cost. *Common mistake:* reporting latency without load / batch context.

### Hands-on build (the lab)
- `longctx.py`: RoPE-scale + briefly continue-train; run a needle-in-a-haystack eval across context lengths; plot retrieval accuracy vs position.
- `safety_ft.py`: safety-tune on a refusal/safe-completion set; measure refusal rate on harmful vs benign (over-refusal) prompts; run a small jailbreak/prompt-injection red-team with Inspect AI.
- `serve.py`: deploy with vLLM; benchmark tokens/sec + p50/p95 latency at a few concurrency levels; try an FP8/AWQ quantized variant.
- **Deliverable:** a long-context probe + a safety/red-team report + a serving benchmark.
  **Acceptance:** long-context accuracy reported by position; safety improves without large over-refusal; serving numbers reported with concurrency + a quantization quality note.

▶ **Practical project:** `VizuaraAI/llm-inference-tutorial` — serve your model with vLLM + KV-cache, measure latency, and add input/output guardrails.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU box / serverless GPU; `pip install vllm`; clone `VizuaraAI/llm-inference-tutorial`.
2. **Serve:** launch your aligned model under vLLM with `--kv-cache-dtype fp8`; hit it with concurrent requests.
3. **Measure:** record throughput, p50/p99 latency, and the FP8-KV memory saving.
4. **Long context:** extend context via YaRN/NTK; test retrieval / perplexity on long docs.
5. **Safety:** add input/output guardrails (prompt-injection focus); run a small red-team set; measure refusal AND over-refusal.
6. **Audit:** write a serving + safety audit note.
- **Artifact:** `evidence/week12-serving/` (latency/memory table + long-context check + refusal/over-refusal numbers).
- **Use `$safety-serving-audit`:** audit serving efficiency + safety (refusal + over-refusal + injection).
- **Done when:** the FP8-KV serving win is measured; long-context extension tested; refusal and over-refusal both reported.
- **Stretch:** add speculative decoding and measure the low-concurrency speedup (note the KV-quant gotcha).

### Harness / reusable skill — `$safety-serving-audit`
- **Purpose:** audit a deployed model on three axes — long-context fidelity, safety (with over-refusal control), and serving latency/throughput.
- **Inputs:** a served model + probes. **Outputs:** a long-context curve, a safety/over-refusal table, a latency/throughput table. **Evidence artifact:** `evidence/week12-audit/`.

### Common failure modes
- **Claimed-but-untested context** → lost-in-the-middle. *Fix:* needle eval by position; report the curve.
- **Over-refusal** → refusing benign prompts. *Fix:* balance safety data with benign; measure both rates.
- **Static-only safety eval** → misses adaptive jailbreaks. *Fix:* adaptive red-team; prompt-injection tests.
- **Latency without context** → meaningless "fast." *Fix:* report concurrency, batch, p50/p95.
- **Quantization quality blindness** → silent regressions. *Fix:* eval the quantized model on a benchmark.

### Evidence artifact
`evidence/week12-audit/` (long-context curve, safety/over-refusal table, red-team findings, serving benchmark).

### Skill sink-in
Predict the over-refusal rate your safety tuning will introduce. Measure it. Record the safety/helpfulness trade-off and your chosen operating point.

### Dataset(s)
Long-context: **RULER**/needle harness (`huggingface.co/datasets/...` needle sets, MIT-style) or a synthetic
needle set. Safety: **HarmBench** prompts (`huggingface.co/datasets/walledai/HarmBench`, MIT) and a benign
set (e.g., **XSTest**, `natolambert/xstest`, CC-BY-4.0) for over-refusal; red-team via **Inspect AI** (UK AISI, MIT).

### Code stub
```python
from vllm import LLM, SamplingParams
llm = LLM(model="./grpo-ckpt", quantization="fp8", max_model_len=32768,
          enable_prefix_caching=True)              # paged KV-cache + continuous batching
out = llm.generate(prompts, SamplingParams(max_tokens=512, temperature=0.7))
# TODO: needle-in-haystack -> accuracy vs needle depth (lost-in-the-middle curve)
# TODO: safety eval -> refusal_rate(harmful) and over_refusal_rate(benign) from Inspect AI
# TODO: serving bench -> tokens/sec + p50/p95 latency at concurrency in {1,8,32}
```

### Graded rubric (Week 12 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Long-context | by-position curve, honest limits | single length | claimed only |
| Safety | improved + over-refusal measured + red-team | one axis | unmeasured |
| Serving | throughput+latency+quant note, with concurrency | partial | no context |
| Evidence | all three artifacts committed | partial | none |

**Assessment weight:** 6%.

### Readings & sources
- Liu et al. (2024). *Lost in the Middle: How Language Models Use Long Contexts.* TACL.
- Peng et al. (2023). *YaRN: Efficient Context Window Extension.* ICLR.
- Kwon et al. (2023). *Efficient Memory Management for LLM Serving with PagedAttention (vLLM).* SOSP.
- Mazeika et al. (2024). *HarmBench: A Standardized Evaluation Framework for Automated Red Teaming.* ICML.

---

### State of the Art (June 2026)
- Serving reference: **vLLM / SGLang** with **FP8 KV-cache**, **FlashAttention-4**, **speculative decoding**, and **prompt caching** (up to ~90% off static prefixes) — the 2026 cost core.
- Safety: **Constitutional AI with dynamic constitutions + automated red-teaming**; **runtime guardrails** (prompt-injection focus) with refusal *and* over-refusal both measured.
- Governance: **EU AI Act** main obligations apply **Aug 2, 2026** (Annex III high-risk deferred to **Dec 2, 2027** via the Digital Omnibus); long-context extension via **YaRN/NTK**.

**References & links:**
- [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial)
- [Dao et al., 2022 - FlashAttention](https://arxiv.org/abs/2205.14135)
- [vLLM docs](https://docs.vllm.ai)
- [Leviathan et al., 2022 - Speculative Decoding](https://arxiv.org/abs/2211.17192)
- [Bai et al., 2022 - Constitutional AI](https://arxiv.org/abs/2212.08073)
- [EU AI Act - implementation timeline](https://artificialintelligenceact.eu/implementation-timeline/)


<!-- sota:03L12 -->

## Week 13 — Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet

**Altitude:** Engineer/Specialist (graduating toward the agents/RAG/serving subjects) · **Format:** project week (7 lab hrs)
**Anchor case:** your own small assistant, taken through (a curated slice of) the entire lifecycle and defended with evidence.

### Learning goals
- Run the lifecycle end-to-end on a chosen domain: curate → tokenize → (continue-)pretrain → SFT → preference-align → (optional) GRPO → evaluate → safety-tune → serve.
- Produce an **evidence packet + model card** proving judgment at each stage, not just a final score.
- Reuse all eight skills from this course as one coherent post-training harness.

### Concept map (review as a checklist)
- Data provenance + dedup/decontam → tokenizer fertility → scaling/architecture choice → training
  throughput/MFU → SFT (masking/template) → alignment (DPO/PPO with a fair comparison) → reasoning
  (verifiable reward) → eval (benchmarks + judge, with CIs) → safety (over-refusal controlled) → serving (latency/throughput).

### Hands-on build (the lab)
- Pick a domain assistant (support, coding helper, math tutor). Assemble: a curated+decontaminated data slice, a trained tokenizer (or justified reuse), an SFT model, at least one preference-alignment method, an eval suite with CIs + a judge, a safety + over-refusal report, and a served endpoint with a latency/throughput benchmark.
- **Deliverable:** `capstone/` + a model card + a 3–4 page report where **every claim links to a file**.
  **Acceptance:** reproducible (config + seeds + data hashes + one orchestration command), each stage shows its evidence artifact, the evaluation is honest (names ≥ 2 concrete failure modes + defended next steps), and the safety section reports both refusal and over-refusal.

▶ **Practical project:** `VizuaraAI/pharma-slm` — use its full ~350M domain-SLM pipeline as the capstone template for your pretrain → post-train evidence packet.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU / serverless GPU; `pip install transformers trl peft datasets accelerate`; reference `VizuaraAI/pharma-slm`.
2. **Configure:** `capstone/config.json` (seeds, data, arch, optim, methods); pin deps + data hashes.
3. **Run pipeline:** `capstone/pipeline.py` end-to-end — curate → tokenizer → pretrain → SFT → align (DPO/GRPO) → eval → safety.
4. **Evaluate:** benchmarks + judge + CIs; name ≥2 failure modes; report refusal + over-refusal.
5. **Document:** a model card + a report where every claim links to a file.
6. **Reproduce:** confirm one command re-runs the headline result from the pinned config.
- **Artifact:** a `capstone/` lifecycle packet (every claim → a file) + a model card.
- **Use `$lifecycle-evidence-packet`:** assemble every stage's evidence into one reviewable bundle.
- **Done when:** one command reproduces it; every stage has its artifact; eval is honest (CIs + named failures); safety measured.
- **Stretch:** serve the final model behind a small API + a Langfuse trace of the eval runs.

### Harness / reusable skill — `$lifecycle-evidence-packet`
- **Purpose:** assemble data-funnel + tokenizer report + training curves + SFT/alignment comparisons + eval table + safety report + serving benchmark into one reviewable bundle with a model card.
- **Inputs:** all stage artifacts. **Outputs:** the packet (this *is* the deliverable). **Evidence artifact:** `capstone/`.

### Common failure modes
- **Stage-skipping with hidden assumptions** (e.g., no decontamination, then bragging about benchmarks) ·
  **score-only reporting** · **unfair alignment comparison** · **unsafe-or-over-refusing model shipped without measuring both** · **irreproducible pipeline**.
  *Fixes:* every stage emits its artifact; link claims to files; hold data/compute fixed in comparisons; report both safety rates; pin everything.

### Evidence artifact
`capstone/` with data funnel, tokenizer report, training + alignment curves, eval table (CIs), safety/over-refusal report, serving benchmark, model card, and the report.

### Skill sink-in
Before the final eval, write your expected benchmark scores, judge win-rate, and over-refusal rate. Compare to results. The gaps are the lesson — record them and one change each.

### Dataset(s)
Learner's choice from the course datasets with documented licenses: **FineWeb-Edu** (ODC-By), **Tulu-3 SFT**
(ODC-By) / **UltraChat** (MIT), **UltraFeedback** (MIT), **GSM8K/MATH** (MIT), **HarmBench**/**XSTest** for safety — plus any domain corpus with a stated license and a `$dedup-decontam` proof.

### Code stub
```python
# capstone/pipeline.py -- one command runs the whole lifecycle reproducibly
import json, torch
from src import curate, train_tokenizer, pretrain, sft, align, grpo, evaluate, safety, serve

cfg = json.load(open("capstone/config.json"))            # seeds, data, arch, optim, methods
torch.manual_seed(cfg["seed"])
shards = curate(cfg["data"])                             # -> data funnel evidence
tok    = train_tokenizer(shards, cfg["tokenizer"])       # -> fertility report
base   = pretrain(tok, shards, cfg["pretrain"])          # -> loss/MFU curves
m_sft  = sft(base, cfg["sft"])                           # -> masking/template verified
m_aln  = align(m_sft, cfg["align"])                      # DPO/PPO comparison
report = evaluate(m_aln, cfg["eval"])                    # benchmarks + judge + CIs
safety.audit(m_aln, cfg["safety"])                       # refusal + over-refusal
json.dump(report, open("capstone/metrics.json", "w"))    # every report claim -> a file
```

### Graded rubric (Capstone — the 25% bucket)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Reproducibility | one command + pinned seeds/config/data hashes | runs with tweaks | not reproducible |
| Lifecycle completeness | every stage with its evidence artifact | most stages | gaps unexplained |
| Comparison rigor | alignment methods compared fairly | one method | unjustified |
| Evaluation honesty | CIs + judge + ≥2 named failures + next steps | metric + samples | score only |
| Safety | refusal + over-refusal both reported | one | unmeasured |
| Communication | clear report + model card, claims link to files | rough | missing |

**Assessment weight:** 25% (course capstone).

### Readings & sources
- Lambert et al. (2024). *Tülu 3: Pushing Frontiers in Open Language Model Post-Training.* AllenAI/arXiv.
- Grattafiori et al. (2024). *The Llama 3 Herd of Models.* Meta/arXiv. (end-to-end lifecycle reference)
- Mitchell et al. (2019). *Model Cards for Model Reporting.* FAT*.
- Stanford CS336 (Spring 2025) capstone (RL-for-reasoning) + Princeton COS 597R (Fall 2024) project guidelines.

---

### State of the Art (June 2026)
- The capstone mirrors the 2026 open-model playbook end-to-end (**Tülu 3 / Llama 4 lifecycle**): curate → tokenize → pretrain → SFT → DPO/GRPO → eval → safety → serve.
- Evidence discipline = **Model Cards + CIs + LLM-as-judge + named failures**, now partly mandated by **EU AI Act** transparency (main rules **Aug 2, 2026**).
- One-command reproducibility (pinned seeds/config/data hashes) is both the frontier-lab and the emerging regulatory standard your packet targets.

**References & links:**
- [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm)
- [Rafailov et al., 2023 - DPO](https://arxiv.org/abs/2305.18290)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [EU AI Act - implementation timeline](https://artificialintelligenceact.eu/implementation-timeline/)


<!-- sota:03L13 -->

## Course-level outcomes

By the end you can: curate and decontaminate real web data; train a tokenizer; choose an architecture and
fit a scaling law; run distributed (FSDP/ZeRO) and sparse (MoE) pretraining; evaluate reproducibly with
CIs; and execute the full post-training stack — SFT (LoRA/QLoRA), reward modeling, RLHF/PPO, DPO/ORPO/KTO,
and GRPO with verifiable rewards — then extend context, safety-tune, red-team, and serve the result. You
carry a **post-training harness** of reusable skills and an evidence log into the agents, RAG, evaluation,
and serving subjects that follow.

## Skills produced (reused program-wide)
`$lifecycle-map` · `$data-funnel` · `$dedup-decontam` · `$scaling-fit` · `$distributed-profiler` ·
`$moe-router-monitor` · `$benchmark-runner` · `$sft-recipe` · `$rlhf-monitor` · `$preference-align-bench` ·
`$verifiable-reward` · `$safety-serving-audit` · `$lifecycle-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; re-verify — full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAILabs/nano-gpt-oss` + `VizuaraAILabs/truly-open-gpt-oss` — build & pretrain a gpt-oss model from scratch; the spine for Lectures 1, 4–7 (tiny pretraining → architecture → distributed → eval).
- `rasbt/LLMs-from-scratch` (~98k★) — step-by-step GPT build in PyTorch; reference for the architecture and pretraining-objective work in Lectures 1 and 4.
- `VizuaraAILabs/DeepSeek-From-Scratch` — MLA / MoE / MTP from scratch; directly supports Lecture 6 (Mixture-of-Experts and long-context).
- `VizuaraAI/Mixture_of_Experts` — a clean MoE FFN implementation to compare against your own Lecture 6 router.
- `mlabonne/llm-course` (~80k★) — LLM roadmap + Colabs covering SFT, LoRA/QLoRA, and preference alignment; Lectures 8–11.
- `krishnaik06/Finetuning-LLM` — focused SFT / LoRA / QLoRA recipes; a comparison reference for Lecture 8.

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Self-evolving rubric lab** — rubric generation, judge agreement, and reward-hacking tests — *maps to Lectures 9–11 (reward modeling, RLHF, GRPO with verifiable rewards)*.
- **Synthetic-data audit** — real+synthetic vs real-only with a model-collapse check — *maps to Lectures 2–3 (data curation) and Lecture 8 (SFT data quality)*.



# Part B — Retrieval-Augmented Generation & Knowledge Systems

**Track:** Applications · **Altitude:** Builder → Engineer · **Length:** 10 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 02 (transformers/embeddings) and Subject 03 (LLM app basics) or equivalent: you can call an LLM API, write Python, and read a PyTorch tensor shape. Subject 01's evidence discipline is assumed.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop, applied to retrieval systems. You will build a naive RAG baseline in Week 1 and spend nine weeks earning every piece of added complexity against a measured eval — never adding a reranker, a graph, or an agent until the numbers say the simpler system fails.

**Course anchor case (carried all 10 weeks):** *AcmeCorp Knowledge Portal* — a document-QA assistant over a messy enterprise corpus (product docs, PDFs of policies, Confluence-style wiki exports, a `tickets` SQL table, and an org/product knowledge graph). A second public case, *HotpotQA multi-hop questions*, is used wherever we need labeled relevance/answers to compute honest metrics. Every technique lands on these two corpora so improvements are comparable week to week.

**What you leave with:** a `rag-portal/` repo containing an ingestion pipeline, a swappable retriever stack (dense / hybrid / reranked / late-interaction / graph / SQL), a Ragas-based eval harness with a frozen gold set, seven reusable skills, and an evidence log proving each upgrade beat the previous baseline — not a folder of demo notebooks.

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Google Colab (T4) or local `uv venv`; `pip install langchain chromadb sentence-transformers pypdf`.
2. **Data:** load the 200 AcmeCorp wiki pages into `docs/`; write `ingest.py`.
3. **Build:** chunk at 512 tokens, embed with `BAAI/bge-m3`, store in a local Chroma collection (`hnsw:space=cosine`).
4. **Run:** `ask.py` embeds the question, cosine top-3, stuffs a Claude/GPT prompt with "answer only from context."
5. **Eval:** `eval_manual.py` over 20 hand-written Q/A; label correct/incorrect/refused; split retrieval-miss vs generation-miss.
6. **Ship:** commit `evidence/week01-baseline.md` with the accuracy line + error split.
- **Artifact:** runnable Colab (`rag_baseline.ipynb`) + the frozen 20-question gold file committed to the repo.
- **Use `$rag-baseline`:** it stands up the simplest honest pipeline and its error-split eval before any optimization.
- **Done when:** pipeline answers all 20; baseline accuracy reproducible from seed; errors split into retrieval vs generation.
- **Stretch:** swap `bge-m3` for `text-embedding-3-large` and record the accuracy delta.

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

### State of the Art (June 2026)
- Embedding frontier: Voyage `voyage-3-large`, Cohere `embed-v4`, OpenAI `text-embedding-3-large`, open `BGE-M3` / `nomic-embed` — choose by retrieval eval, not leaderboard rank.
- 1M-context models (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro) make "just stuff everything" tempting, but cost, latency, and lost-in-the-middle keep retrieval essential.
- Consensus is **retrieve-then-read**: long context reshapes RAG but doesn't kill it — RAG still owns freshness, citations, and cost control.
- The durable 2026 lesson is unchanged: instrument the retrieval-miss vs generation-miss split on a frozen baseline *before* adding any machinery.

**More detail:** Embedding choice sets the retrieval ceiling — on BEIR, the right model plus correct query/doc instruction prefixes moves recall@k more than scaling the generator. "Lost in the middle" means even 1M-context models lose facts buried mid-window, so retrieve-then-read stays the production default.

**References & links:**
- [DPR: Dense Passage Retrieval (Karpukhin et al., 2020)](https://arxiv.org/abs/2004.04906) — the dense-retrieval foundation
- [Lost in the Middle (Liu et al., 2023)](https://arxiv.org/abs/2307.03172) — why long context still needs retrieval
- [Sentence-BERT (Reimers & Gurevych, 2019)](https://arxiv.org/abs/1908.10084) — sentence embeddings for search
- [BEIR (Thakur et al., 2021)](https://arxiv.org/abs/2104.08663) — zero-shot retrieval benchmark
- [`FlagOpen/FlagEmbedding`](https://github.com/FlagOpen/FlagEmbedding) — BGE-M3 open embeddings
- [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG baselines
<!-- sota:04L01 -->

## Week 2 — Chunking & Document Processing: The Unsexy Half of Retrieval Quality

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install langchain-text-splitters unstructured pymupdf sentence-transformers`.
2. **Data:** parse the AcmeCorp PDF policy pack with `pymupdf`/`unstructured`, preserving `source`/`section`/`page` metadata.
3. **Build:** implement fixed, `RecursiveCharacterTextSplitter(512, 64)`, and semantic chunkers in `chunkers.py`.
4. **Run:** re-embed the corpus under each strategy into separate Chroma collections.
5. **Eval:** re-run the Week-1 eval; build `evidence/week02-chunking.md` (strategy × accuracy × avg-chunk-size × retrieval-miss).
6. **Ship:** commit the comparison table + a one-paragraph justified pick naming the mechanism.
- **Artifact:** `chunkers.py` + a comparison notebook + metadata-preserving ingest.
- **Use `$chunk-strategist`:** pick and justify a strategy by measuring ≥3 options, not guessing.
- **Done when:** ≥3 strategies run with tables intact; chosen strategy beats Week-1 retrieval-miss; win attributed to a mechanism.
- **Stretch:** add parent/child retrieval (small child, parent context) and measure the lift.

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

### State of the Art (June 2026)
- **Visual/layout-aware retrieval (ColPali / ColQwen3)** lets you retrieve PDFs and tables without brittle OCR — a major 2026 shift in document processing.
- Parsing stack: `unstructured`, LlamaParse, `docling` for tables/figures; structure-aware and parent/child chunking are now the default over fixed-size.
- 1M-context models tolerate larger chunks, but precision still rewards semantic / proposition-level splitting measured on your eval.
- Agentic chunking (an LLM picks boundaries) is emerging but only cost-justified when it beats a recursive baseline on the frozen set.

**More detail:** A fact split across two chunks can never be retrieved whole, so parent/child and proposition-level chunking lift recall. ColPali sidesteps OCR entirely by retrieving PDF pages as images via late interaction over patch embeddings.

**References & links:**
- [ColPali: Efficient Document Retrieval with VLMs (Faysse et al., 2024)](https://arxiv.org/abs/2407.01449) — visual PDF retrieval, no OCR
- [LlamaIndex node parsers & parent/child retrieval](https://docs.llamaindex.ai/en/stable/module_guides/loading/node_parsers/) — chunking patterns
- [`Unstructured-IO/unstructured`](https://github.com/Unstructured-IO/unstructured) — production document parsing
- [`illuin-tech/colpali`](https://github.com/illuin-tech/colpali) — ColPali reference implementation
- [`krishnaik06/Updated-Langchain`](https://github.com/krishnaik06/Updated-Langchain) — loaders & splitters lab
<!-- sota:04L02 -->

## Week 3 — Vector Databases: Indexes, ANN, and Choosing Your Store

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install qdrant-client chromadb pgvector psycopg numpy`.
2. **Data:** load 1M chunks (Week-2 output + synthetic padding) into Chroma, Qdrant, and pgvector.
3. **Build:** `vectordb_bench.py` — index build time, p95 query latency, recall@10 vs exact NumPy argsort; sweep `ef_search ∈ {16,32,64,128,256}`.
4. **Run:** add a metadata-filtered query (product + date) per store; compare pre- vs post-filter recall.
5. **Eval:** tabulate recall/latency/cost in `evidence/week03-vectordb.md`.
6. **Ship:** commit a justified DB pick with the stated tradeoff.
- **Artifact:** the benchmark script + a recall-vs-latency plot.
- **Use `$vectordb-selector`:** choose and configure a store from measured recall/latency/ops, not hype.
- **Done when:** recall@10 reported (not just latency) on ≥2 DBs; `ef` sweep + filter test present; pick justified by tradeoff.
- **Stretch:** enable scalar/binary quantization and re-measure the recall/memory tradeoff.

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

### State of the Art (June 2026)
- Production stores: Qdrant, Weaviate, Pinecone (serverless), pgvector — HNSW the default index; native pre-filtering and hybrid search are now table stakes.
- Vector quantization (binary / scalar / PQ, int8/FP8) cuts memory 4–32× at a controlled recall cost — measure recall@k vs exact, not just QPS.
- Real selection criteria are metadata pre-filtering, multi-tenancy (namespaces/collections), and ops model — not raw benchmark throughput.
- MoE + 1M-context models push the bottleneck back onto retrieval quality, so honest recall measurement matters more, not less.

**More detail:** HNSW gives sublinear ANN search; recall@10 vs exact hinges on `ef_search`/`M`, and scalar/binary quantization cuts memory 4–32× at a measurable recall cost. Native pre-filtering beats post-filtering when metadata constraints are tight.

**References & links:**
- [HNSW (Malkov & Yashunin, 2016)](https://arxiv.org/abs/1603.09320) — the default ANN index
- [FAISS: billion-scale similarity search (Johnson et al., 2017)](https://arxiv.org/abs/1702.08734) — ANN at scale
- [Qdrant documentation](https://qdrant.tech/documentation/) — HNSW params, quantization, filtering
- [`pgvector/pgvector`](https://github.com/pgvector/pgvector) — Postgres vector index
- [`erikbern/ann-benchmarks`](https://github.com/erikbern/ann-benchmarks) — recall/latency methodology
<!-- sota:04L03 -->

## Week 4 — Hybrid Search & Rerankers: BM25 + Dense, Then Cohere/BGE on Top

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install rank-bm25 cohere sentence-transformers` + a Cohere/BGE reranker key.
2. **Data:** index AcmeCorp + a BEIR set (`BeIR/scifact`) with qrels.
3. **Build:** `hybrid.py` — BM25 + dense, fuse with RRF (`k=60`); `rerank.py` — re-score fused top-50 with `rerank-v3.5` / `bge-reranker-v2-m3`, keep top-5.
4. **Run:** evaluate dense / hybrid / hybrid+rerank on HotpotQA + AcmeCorp.
5. **Eval:** report nDCG@10 + recall@50 per stage + a per-query rescue breakdown in `evidence/week04-hybrid.md`.
6. **Ship:** commit the three-stage table + a latency note.
- **Artifact:** the hybrid+rerank notebook + per-stage eval.
- **Use `$retriever-stack`:** add each stage only if it earns its latency, with the rescues named.
- **Done when:** BM25+dense+RRF+reranker wired; nDCG on qrels; you name which query type the reranker fixes.
- **Stretch:** tune RRF weighting and compare to a normalized-score fusion.

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

### State of the Art (June 2026)
- Reranker frontier: **Cohere Rerank 3.5, Voyage `rerank-2.5`, `BGE-reranker-v2`** — cross-encoder rescoring of top-50 → top-5 is the standard precision upgrade.
- BM25 + dense + **RRF** remains the robust default; exact-code/SKU queries keep lexical signal indispensable.
- HyDE bridges query/doc vocabulary mismatch; reranking is still the highest-ROI single upgrade after a baseline.
- Reranker latency/cost is now budgeted explicitly (cache + batch) rather than treated as free.

**More detail:** BM25 and dense retrievers fail differently (exact tokens vs paraphrase), so RRF fusion + a cross-encoder rerank of top-50→top-5 is usually the largest single nDCG@10 jump after a baseline. Rerankers add ~100–300 ms, so budget and cache them.

**References & links:**
- [Passage Re-ranking with BERT (Nogueira & Cho, 2019)](https://arxiv.org/abs/1901.04085) — cross-encoder reranking
- [HyDE (Gao et al., 2022)](https://arxiv.org/abs/2212.10496) — hypothetical-document embeddings for vocab mismatch
- [BEIR (Thakur et al., 2021)](https://arxiv.org/abs/2104.08663) — qrels for nDCG/recall
- [Cohere Rerank docs](https://docs.cohere.com/docs/rerank-overview) — rerank-v3.5 usage
- [`AmenRa/ranx`](https://github.com/AmenRa/ranx) — RRF fusion + nDCG/MAP eval
- [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — fusion + reranking notebooks
<!-- sota:04L04 -->

## Week 5 — Late Interaction & ColBERT: Token-Level Retrieval

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install ragatouille colbert-ai`.
2. **Data:** index AcmeCorp + a LoTTE/BEIR out-of-domain set with ColBERTv2 via RAGatouille.
3. **Build:** `colbert_lab.py` — `RAGPretrainedModel.from_pretrained("colbert-ir/colbertv2.0")`, `.index(...)`, `.search(...)`.
4. **Run:** compare nDCG@10 + on-disk index size to Week-4's dense and hybrid+rerank stacks.
5. **Eval:** find 5 queries ColBERT rescues that dense+rerank missed; characterize them.
6. **Ship:** commit `evidence/week05-colbert.md` with the quality-vs-index-size table + a use-it/skip-it verdict.
- **Artifact:** the ColBERT index + a comparison notebook.
- **Use `$late-interaction-eval`:** decide whether late interaction earns its storage cost on this corpus.
- **Done when:** ColBERT compared to your best prior stack; both a quality number and a storage number reported; verdict justified.
- **Stretch:** index the AcmeCorp PDFs with ColPali and compare visual vs text retrieval.

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

### State of the Art (June 2026)
- Late-interaction lineage: ColBERTv2 → PLAID → **ColPali / ColQwen3** for visual/PDF retrieval without OCR — the 2026 headline shift.
- Multimodal embeddings (`voyage-multimodal-3`, Qwen3-VL-Embedding) make screenshot/figure/table retrieval first-class.
- Per-token indexes are still 10–100× larger; PLAID compression and on-disk indexes make them servable at scale.
- The choice is empirical: a strong cross-encoder reranker often matches late interaction more cheaply — weigh index-size against measured lift.

**More detail:** Single-vector pooling blurs token detail; ColBERT's MaxSim over per-token embeddings recovers it, and PLAID compression makes the (10–100× larger) index servable. ColPali extends the same late-interaction idea to document images.

**References & links:**
- [ColBERT (Khattab & Zaharia, 2020)](https://arxiv.org/abs/2004.12832) — late interaction + MaxSim
- [ColBERTv2 (Santhanam et al., 2021)](https://arxiv.org/abs/2112.01488) — compression + denoised supervision
- [ColPali (Faysse et al., 2024)](https://arxiv.org/abs/2407.01449) — late interaction for visual docs
- [`stanford-futuredata/ColBERT`](https://github.com/stanford-futuredata/ColBERT) — ColBERTv2 + PLAID engine
- [`AnswerDotAI/RAGatouille`](https://github.com/AnswerDotAI/RAGatouille) — easy ColBERT indexing
<!-- sota:04L05 -->

## Week 6 — RAG Evaluation: Ragas, MAP/nDCG, and Faithfulness

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install ragas pytrec_eval datasets`.
2. **Data:** assemble a 100-question gold set (HotpotQA + 50 AcmeCorp) with reference answers + relevant chunk ids.
3. **Build:** `ragas_eval.py` — context precision/recall, faithfulness, answer relevance; `pytrec_eval` for MAP/nDCG.
4. **Run:** validate the judge — hand-label 30 answers, compute Cohen's κ vs the LLM judge.
5. **Eval:** assemble the metric dashboard in `evidence/week06-eval/`.
6. **Ship:** commit the dashboard + the judge-validation note (κ).
- **Artifact:** the eval notebook + frozen gold set + dashboard.
- **Use `$rag-eval`:** turn "looks good" into a reproducible scorecard separating retrieval from generation.
- **Done when:** retrieval + generation metrics both on frozen gold; judge κ reported (>0.6 or flagged); reproducible from seed.
- **Stretch:** add RAGTruth-calibrated faithfulness thresholds and re-score.

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

### State of the Art (June 2026)
- Eval/observability stack: **RAGAS, Arize Phoenix, LangSmith, Braintrust, DeepEval, UK AISI Inspect AI** — trajectory-level traces now standard.
- **LLM-as-judge** is the default but bias-audited (position/verbosity); validate judge–human agreement (κ) — TrustJudge-style scrutiny.
- Separate retrieval (nDCG/MAP/recall, context precision/recall) from generation (faithfulness/groundedness); faithfulness gating catches confident fabrication.
- Frozen, versioned gold sets plus contamination checks are baseline hygiene, not extras.

**More detail:** Separate retrieval (nDCG/MAP/recall) from generation (faithfulness, answer relevance), and validate the LLM judge against humans (Cohen's κ > 0.6) because judges carry position/verbosity bias. RAGTruth provides hallucination-labeled data to calibrate the faithfulness threshold.

**References & links:**
- [RAGAS (Es et al., 2023)](https://arxiv.org/abs/2309.15217) — automated RAG evaluation
- [ARES (Saad-Falcon et al., 2023)](https://arxiv.org/abs/2311.09476) — automated RAG eval framework
- [Judging LLM-as-a-Judge (Zheng et al., 2023)](https://arxiv.org/abs/2306.05685) — judge bias + MT-Bench
- [RAGAS documentation](https://docs.ragas.io/) — metric definitions + usage
- [`explodinggradients/ragas`](https://github.com/explodinggradients/ragas) — the library
- [`UKGovernmentBEIS/inspect_ai`](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework
<!-- sota:04L06 -->

## Week 7 — Advanced RAG I: HyDE, CRAG & Self-RAG

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install langgraph langchain tavily-python` (web fallback for CRAG).
2. **Data:** reuse the Week-6 pipeline + frozen gold set.
3. **Build:** `hyde.py`, `crag.py`, `self_rag.py` as LangGraph nodes, each an on/off toggle.
4. **Run:** run the Week-6 eval for baseline / +HyDE / +CRAG / +Self-RAG.
5. **Eval:** `evidence/week07-advanced.md` ablation table + per-technique rescued/regressed queries + refusal rate.
6. **Ship:** commit the table + a kept-techniques decision.
- **Artifact:** the LangGraph ablation graph + eval table.
- **Use `$rag-ablation`:** keep only techniques that beat the eval, with the regressions named.
- **Done when:** all 3 wired as real toggles; each kept technique shows a net win; you name a query type where one hurts.
- **Stretch:** add Adaptive-RAG routing (skip retrieval on easy queries) and measure the noise reduction.

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

### State of the Art (June 2026)
- **Agentic RAG** (iterative query rewriting + retrieval agents + LLM-judge loops) is the 2026 framing — RAG as a control loop, not a fixed pipeline.
- CRAG / Self-RAG-style self-correction is now wired with **LangGraph durable checkpointing** + retrieval-grading nodes.
- Adaptive retrieval (retrieve only when needed) cuts noise on easy queries — measured, not assumed.
- Discipline holds: keep each technique only if it beats the frozen eval; ablate rather than stack on blog hype.

**More detail:** CRAG grades retrieved docs and falls back to search/rewrite; Self-RAG emits reflection tokens to gate retrieval and self-critique grounding; Adaptive-RAG skips retrieval on easy queries. Wire them as LangGraph nodes and ablate — each adds latency and can over-refuse.

**References & links:**
- [Self-RAG (Asai et al., 2023)](https://arxiv.org/abs/2310.11511) — retrieve/critique reflection tokens
- [CRAG (Yan et al., 2024)](https://arxiv.org/abs/2401.15884) — corrective retrieval
- [HyDE (Gao et al., 2022)](https://arxiv.org/abs/2212.10496) — hypothetical document embeddings
- [Adaptive-RAG (Jeong et al., 2024)](https://arxiv.org/abs/2403.14403) — route by question complexity
- [LangGraph docs](https://langchain-ai.github.io/langgraph/) — durable graph nodes + checkpointing
- [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — HyDE/CRAG/Self-RAG lab
<!-- sota:04L07 -->

## Week 8 — Advanced RAG II: Agentic RAG, GraphRAG & Text2SQL

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install llama-index neo4j neo4j-graphrag duckdb`.
2. **Data:** extract an AcmeCorp knowledge graph into Neo4j; load the `tickets` table into DuckDB.
3. **Build:** `agentic_rag.py` (planner+retriever+reflector with a step budget), `graphrag/` (VectorCypherRetriever), `text2sql.py` (schema-grounded, read-only sandbox), `router.py`.
4. **Run:** 10 multi-hop + 3 global + analytical questions; classify and route each.
5. **Eval:** per-backend wins + routed-system eval + routing accuracy in `evidence/week08-agentic-graph-sql/`.
6. **Ship:** commit `router-eval.md`.
- **Artifact:** the routed multi-backend app + Neo4j graph + SQL guardrail log.
- **Use `$knowledge-router`:** route each query class to the right backend with evidence.
- **Done when:** agentic+graph+SQL functional with guardrails; each backend beats vector-RAG on its class; router ≥85% accurate.
- **Stretch:** add a cost guard + max-step cap and report agent loop budgets.

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

### State of the Art (June 2026)
- **GraphRAG** (Microsoft GraphRAG, `neo4j-graphrag`) handles multi-hop and global-summary queries a flat vector store can't.
- Agentic loops via **LangGraph / OpenAI Agents SDK / Claude Agent SDK**; **MCP** (Linux Foundation Agentic AI Foundation) standardizes tool/data access across backends.
- Text2SQL is hardened with schema-grounding + read-only sandboxes; query routing (vector / graph / SQL) is the orchestration layer.
- Reliability thinking from **τ²-bench (pass^k)** is migrating into agentic-RAG evaluation.

**More detail:** GraphRAG builds entity/relation/community summaries for multi-hop and global questions a flat vector store can't serve; Text2SQL needs schema-grounding + read-only sandboxes; MCP standardizes tool access. A router sends LOOKUP/MULTIHOP/ANALYTICAL queries to vector/graph/SQL.

**References & links:**
- [GraphRAG (Edge et al., 2024)](https://arxiv.org/abs/2404.16130) — local-to-global query-focused summarization
- [ReAct (Yao et al., 2022)](https://arxiv.org/abs/2210.03629) — the agentic retrieve loop
- [`microsoft/graphrag`](https://github.com/microsoft/graphrag) — Microsoft GraphRAG
- [`neo4j/neo4j-graphrag-python`](https://github.com/neo4j/neo4j-graphrag-python) — Cypher-based retrieval
- [Model Context Protocol](https://modelcontextprotocol.io/) — standard tool/data access
- [`run-llama/llama_index`](https://github.com/run-llama/llama_index) — query router + Text2SQL
<!-- sota:04L08 -->

## Week 9 — Long-Context vs RAG, Production Serving, Caching & Guardrails

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** local; `pip install fastapi uvicorn redis` + an LLM gateway; `uv` env.
2. **Data:** a replayed traffic sample + a 50-question SLA set + `data/redteam/` injection docs.
3. **Build:** `serve.py` (FastAPI + gateway + semantic cache + streaming), `guardrails.py` (citation enforce, PII redact, injection detect), `longctx_vs_rag.py`.
4. **Run:** load-test p95 latency + cost/query; run 10 injection attempts; compute the long-context-vs-RAG crossover.
5. **Eval:** `evidence/week09-production/` SLA table + crossover plot + red-team log.
6. **Ship:** a deploy/no-deploy call.
- **Artifact:** the served FastAPI portal + load-test + red-team scripts.
- **Use `$rag-prod-harness`:** make the system production-safe and cost-bounded with measured SLA, caching, guardrails.
- **Done when:** portal meets a stated p95 SLA; blocks ≥8/10 injections; long-context decision backed by crossover data.
- **Stretch:** add prompt-caching for static prefixes and re-measure cost/query.

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

### State of the Art (June 2026)
- Cost core: **prompt caching** (up to ~90% off static prefixes) + semantic caching + model routing + batching.
- Serving: **vLLM** with **FP8 KV-cache** and **FlashAttention-4** (Blackwell); serverless GPU (Modal/Baseten) pay-per-second.
- Guardrails: prompt-injection defense on retrieved content (**OWASP LLM Top-10**), Llama-Guard-class validators, citation enforcement.
- Long-context (1M) reshapes but doesn't replace RAG — measure the corpus-size crossover; retrieve-then-read wins in production.
- **EU AI Act:** most GPAI rules apply **Aug 2, 2026** (Digital Omnibus defers Annex-III high-risk to **Dec 2, 2027**) — citations and audit trails matter.

**More detail:** Prompt caching cuts up to ~90% off static prefixes; semantic caching serves by query similarity. Retrieved content is untrusted input — indirect prompt injection is a top OWASP-LLM risk. EU AI Act GPAI obligations apply Aug 2, 2026 (high-risk Annex-III deferred to Dec 2, 2027).

**References & links:**
- [Indirect Prompt Injection (Greshake et al., 2023)](https://arxiv.org/abs/2302.12173) — compromising LLM-integrated apps
- [Llama Guard (Inan et al., 2023)](https://arxiv.org/abs/2312.06674) — input/output safety classifier
- [LongBench (Bai et al., 2023)](https://arxiv.org/abs/2308.14508) — long-context QA benchmark
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/) — injection + guardrail risks
- [EU AI Act explorer](https://artificialintelligenceact.eu/) — GPAI obligations + dates
- [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — production RAG serving
<!-- sota:04L09 -->

## Week 10 — Capstone: A Production Document-QA / Knowledge Portal

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** fork a full RAG app from the repo; `uv` env + your Week-1→9 retriever stack.
2. **Data:** a real ≥5k-chunk corpus + ≥80 gold Q/A/relevance triples.
3. **Build:** ingestion → routed retrieval (hybrid+rerank, graph/SQL where measured) → guarded generation with citations → eval dashboard → served API.
4. **Run:** an ablation showing each kept component beats the simpler system on the frozen eval.
5. **Eval:** `eval_gate.py` checks nDCG@10 > baseline, faithfulness > 0.85, p95 < SLA, injection-block > 0.8.
6. **Ship:** `capstone/` repo + a 3-page report where every claim → a file.
- **Artifact:** the deployed portal + evidence packet + report.
- **Use `$rag-evidence-packet`:** assemble baseline → ablations → dashboard → SLA/safety into one reviewable bundle.
- **Done when:** every report claim points to `evidence/`; final system beats Week-1 on a retrieval AND a generation metric; one-command rebuild.
- **Stretch:** expose the retriever as an MCP tool and add agent memory.

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

### State of the Art (June 2026)
- Reference architecture: **agentic + hybrid + rerank + (graph/SQL where measured) + guarded generation + traced serving**.
- Eval-gated shipping with RAGAS / Inspect AI + a frozen gold set + faithfulness gate + prompt-injection regression.
- **MCP**-exposed tools and agent memory are increasingly part of "production RAG," not just a chatbot wrapper.
- Governance: EU AI Act Aug-2026 transparency/audit expectations are baked into the evidence packet.

**More detail:** A defensible portal gates every component on a frozen eval (nDCG@10 > baseline, faithfulness > 0.85), serves under a p95 SLA with caching + guardrails, and increasingly exposes tools over MCP with agent memory. Every claim in the report traces to a file.

**References & links:**
- [Retrieval-Augmented Generation: A Survey (Gao et al., 2024)](https://arxiv.org/abs/2312.10997) — the field map
- [Seven Failure Points of RAG (Barnett et al., 2024)](https://arxiv.org/abs/2401.05856) — production pitfalls
- [RAGAS documentation](https://docs.ragas.io/) — the eval gate
- [Model Context Protocol](https://modelcontextprotocol.io/) — tool exposure
- [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — full RAG apps to extend
<!-- sota:04L10 -->

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



# Part C — Fine-Tuning & Model Adaptation

**Track:** Applications · **Altitude:** Engineer · **Length:** 10 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 02 (transformers, attention, training loops in PyTorch), Subject 04 (RAG — so you can tell a retrieval problem from an adaptation problem), and comfort with the `$rag-eval`/evidence discipline. You can run a HF `Trainer`, read a loss curve, and rent a GPU.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop, applied to post-training. The course's spine is a single rule: **never fine-tune before you've proven prompting and RAG aren't enough, and never claim a fine-tune "works" without a regression suite.** You will earn LoRA before QLoRA, SFT before preference optimization, and every adapter against a frozen eval.

**Course anchor case (carried all 10 weeks):** *SupportGenie* — adapt a small open model (a 7–8B Llama 4 / Qwen 3-class model) to AcmeCorp's customer-support domain: produce on-brand, policy-compliant answers in a fixed JSON+citation format, and beat a strong prompted-frontier baseline on a held-out support eval at a fraction of the inference cost. A second case, *function-call formatter* (reliably emit valid tool-call JSON), is used wherever we need a crisp, machine-checkable target.

**What you leave with:** an `adapt/` repo containing a data-prep pipeline with decontamination, LoRA/QLoRA training configs, a DPO/ORPO/KTO preference-tuning stack, a quantization + adapter-serving setup (vLLM multi-LoRA), a regression-test harness, and an evidence log proving the tuned model beats prompting on the target task without regressing general ability — not a pile of checkpoints.

---


## Course-level Assessment & grading (weights sum to 100%)

| Component | Weight | What it covers |
|-----------|-------:|----------------|
| Weekly labs (Weeks 1–9) | 55% | Per-week build + evidence (weights per week below) |
| Midterm decision memo (after Week 5) | 10% | A written "prompt vs RAG vs SFT vs DPO" decision for SupportGenie, backed by the Week 1–5 evidence |
| Capstone adapted model (Week 10) | 25% | Fine-tuned model that beats prompting on the target task + evidence packet |
| Reading responses & critique (continuous) | 10% | 1 paper response/week + one peer regression-audit |

Per-week lab weights (the 55%): W1 5 · W2 6 · W3 7 · W4 6 · W5 7 · W6 6 · W7 6 · W8 6 · W9 6 = **55%**.

## Tooling & environment (June 2026)

- **Python** 3.12, `uv`, seeded everything; experiment tracking with **Weights & Biases** or **Trackio**.
- **Core:** `transformers` 4.5x, `peft` 0.14+, **TRL** 0.14+ (SFTTrainer, DPOTrainer, ORPOTrainer, KTOTrainer, RewardTrainer), `datasets`, `accelerate`.
- **Fast/efficient training:** **Unsloth** (2–5× faster LoRA/QLoRA, long-context), `bitsandbytes` (4-bit NF4), **Axolotl** for config-driven runs.
- **Quantization:** bitsandbytes NF4 (training), **AWQ**/**GPTQ**/`llm-compressor` (serving), FP8 where supported.
- **Serving:** **vLLM** 0.7+ with multi-LoRA (`--enable-lora`), or **LoRAX**; **SGLang** as an alternative.
- **Eval:** `lm-evaluation-harness`, **Inspect AI** (UK AISI), the Subject-04 `$rag-eval`-style harness reused, **LLM-as-judge** with validation.
- **Hardware:** one 24–48GB GPU (A6000/L40S/4090-class) suffices for 7–8B QLoRA; serverless GPU (Modal/RunPod/Baseten) for bursts. Base models: Llama 4 (scout-class), Qwen 3 8B, Gemma 3, Phi-4 — all open-weight.

---

## Week 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** before tuning anything, get SupportGenie as good as possible with *prompting alone* on a frontier model — that's the number fine-tuning has to justify itself against.

### Learning goals
- State, with a decision rubric, when prompting, RAG, fine-tuning, or a combination is the right tool — and why fine-tuning is the *last* thing to reach for.
- Articulate what fine-tuning changes (behavior, format, style, latent skills) vs what it can't (inject fresh facts reliably — that's RAG's job).
- Build a strong prompted baseline and a frozen held-out eval for the target task.
- Estimate the cost/benefit: tuning + serving a small model vs prompting a frontier model.

### Concept map
- **What fine-tuning is for.** Plain English: teach a model a *behavior or form* (tone, format, a skill, a domain's style) by updating weights on examples. Where it matters: consistent JSON, on-brand voice, a narrow skill where prompting is unreliable. Common mistake: fine-tuning to add facts — it memorizes poorly and forgets; use RAG for knowledge.
- **The decision ladder.** *Prompt* (cheapest, fastest to iterate) → *RAG* (when the gap is missing knowledge) → *fine-tune* (when the gap is behavior/format/skill and prompting plateaus) → *combine* (RAG + a tuned model). Common mistake: skipping straight to fine-tuning because it sounds more serious.
- **Catastrophic forgetting.** *Idea:* tuning hard on a narrow task degrades general ability. *Plain English:* you teach it support answers and it forgets how to do arithmetic. Common mistake: no general-ability regression check (Week 8).
- **Baseline economics.** *Formula (sketch):* `decide(tune) if quality(tuned_small) ≥ quality(prompted_frontier) AND cost_per_1k(tuned_small_served) ≪ cost_per_1k(frontier)`. Why it matters: fine-tuning's usual win is *cost at fixed quality*, not magic quality.

### Hands-on build
- `baseline_prompt.py`: best-effort prompted SupportGenie on a frontier model (few-shot + format instructions); freeze a 150-example held-out support eval with reference answers + a rubric.
- `decision_memo.md` (draft): for SupportGenie, lay out where prompting fails (format drift? tone? a specific skill?) and hypothesize whether SFT, RAG, or both will close it.
- `cost_model.py`: estimate $/1k-answers for prompted-frontier vs a hypothetical served 8B.
- **Deliverable:** prompted baseline score on the frozen eval + the cost model + a first decision hypothesis. **Acceptance:** baseline is genuinely strong (you tried hard at prompting), eval is frozen, and the memo names the *specific* failure fine-tuning would fix.

▶ **Practical project:** `mlabonne/llm-course` — use its prompt-vs-RAG-vs-fine-tune material to build the strong prompted baseline + cost model before any GPU time.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install transformers datasets`; a frontier API key.
2. **Data:** AcmeCorp support corpus → carve a frozen 150-example eval with reference answers + a rubric.
3. **Build:** `baseline_prompt.py` (best-effort few-shot + format instructions on a frontier model) + `cost_model.py` ($/1k for prompted-frontier vs a hypothetical served 8B).
4. **Run:** score format-compliance (`json.loads`) + judged quality on the frozen eval.
5. **Eval:** classify the dominant gap (knowledge → RAG, behavior/format → SFT, preference → DPO).
6. **Ship:** `evidence/week01-decision.md` (baseline score + cost model + recommended path with a falsifiable bar).
- **Artifact:** the decision memo + frozen `gold_v1.jsonl` + cost model.
- **Use `$adaptation-decision`:** decide prompt vs RAG vs fine-tune from evidence before spending GPU.
- **Done when:** strong prompted baseline + frozen eval + cost model; gap classified with examples; path has a success bar.
- **Stretch:** add a RAG variant and show whether it closes a knowledge gap fine-tuning wouldn't.

### Harness / reusable skill — `$adaptation-decision`
- **Purpose:** decide prompt vs RAG vs fine-tune from evidence, not instinct, before spending GPU hours.
- **Inputs:** a task + a prompted baseline + the failure analysis.
- **Required outputs:** the dominant failure class (knowledge gap → RAG; behavior/format gap → SFT; preference/quality gap → DPO), a cost comparison, and a recommended path with a falsifiable success bar.
- **Minimal workflow:** prompt hard → measure → classify the gap → estimate cost → recommend.
- **Evidence artifact:** `evidence/week01-decision.md`.

### Common failure modes
- **Fine-tune reflex** → burning GPU on a problem prompting solves. *Fix:* exhaust prompting first; document why it's insufficient.
- **No frozen baseline** → "the fine-tune is better" with nothing to compare. *Fix:* freeze the eval and the prompted number on day one.
- **Facts-via-fine-tuning** → tuning to memorize a knowledge base. *Fix:* route knowledge gaps to RAG.
- **Ignoring serving cost** → a "cheaper" small model that's expensive to host. *Fix:* model the full served cost.

### Evidence artifact
`evidence/week01-decision.md` (prompted baseline score, gap classification, cost model, recommended path + success bar).

### Skill sink-in
Predict whether prompting alone can hit your target JSON-format compliance on SupportGenie. Measure it. Record the gap and which technique you now believe will close it.

### Dataset(s)
- **AcmeCorp support corpus** (`data/support/`, ~5k ticket/answer pairs, course-internal synthetic license) → carve a frozen 150-example eval.
- **Reference for format target:** **Glaive function-calling v2** — `huggingface.co/datasets/glaiveai/glaive-function-calling-v2`, ~113k samples, Apache-2.0 (the second case's target format).

### Code stub
```python
import json
from statistics import mean

def eval_prompted(model, eval_set) -> dict:
    fmt_ok, judged = [], []
    for ex in eval_set:                       # frozen 150 examples
        out = model.generate(ex["prompt"])
        try:
            json.loads(out); fmt_ok.append(1)            # machine-checkable
        except json.JSONDecodeError:
            fmt_ok.append(0)
        judged.append(llm_judge(out, ex["reference"]))   # validated rubric judge
    return {"format_compliance": mean(fmt_ok),
            "quality": mean(judged)}          # <-- the number fine-tuning must beat
# TODO: freeze eval_set to gold_v1.jsonl; never train on it
```

### Graded rubric (Week 1 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Strong prompted baseline + frozen eval + cost model | Weak prompting, no freeze |
| Evidence | Gap classified (knowledge/behavior/preference) with examples | "Prompting isn't great" |
| Reasoning | Recommends path with falsifiable success bar | Jumps to fine-tuning |
| Reproducibility | Eval frozen + seeded | Editable eval |

### Assessment weight
**5%** of course grade.

### Reading list
- Ouyang et al., "Training Language Models to Follow Instructions with Human Feedback" (InstructGPT), NeurIPS 2022.
- Zhou et al., "LIMA: Less Is More for Alignment," NeurIPS 2023 (a little good data > lots of data).
- Chip Huyen, *AI Engineering* (2025), "Finetuning vs RAG vs Prompting" chapter.
- Ovadia et al., "Fine-Tuning or Retrieval? Comparing Knowledge Injection in LLMs," 2024.

---

### State of the Art (June 2026)
- Canonical ordering: **Prompt → RAG → Fine-tune → Distill**; fine-tune for behavior/format/skill, RAG for knowledge.
- Strong prompted baselines now run on 1M-context + tunable thinking-effort (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro) — a high bar the tuned small model must beat.
- Economic case: QLoRA-tune an 8B on a single A100 (~$12) vs frontier per-token cost — fine-tuning's win is usually cost-at-fixed-quality.
- Open bases for adaptation: **DeepSeek V4, Qwen 3.5, Llama 4 Scout/Maverick, Gemma 4, Mistral Small 4**.

**More detail:** Fine-tuning teaches behavior/format/skill, not facts; the decision ladder is prompt → RAG → fine-tune → distill. QLoRA makes an 8B tune ~$12 on one A100, so the usual win is cost-at-fixed-quality versus a prompted frontier model.

**References & links:**
- [Fine-Tuning or Retrieval? (Ovadia et al., 2024)](https://arxiv.org/abs/2312.05934) — knowledge-injection comparison
- [LIMA: Less Is More for Alignment (Zhou et al., 2023)](https://arxiv.org/abs/2305.11206) — data quality over quantity
- [InstructGPT (Ouyang et al., 2022)](https://arxiv.org/abs/2203.02155) — what post-training changes
- [Hugging Face TRL docs](https://huggingface.co/docs/trl) — SFT/DPO entry points
- [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — the decision + roadmap
<!-- sota:05L01 -->

## Week 2 — Data Preparation & Formatting: The 80% That Decides the Outcome

**Altitude:** Engineer · **Anchor case:** turn AcmeCorp's raw tickets into a clean, chat-templated, decontaminated SFT set — and watch quality track data quality far more than hyperparameters.

### Learning goals
- Build an SFT dataset: instruction/response formatting, chat templates, loss-masking the prompt, and packing.
- Apply data quality discipline: dedup, decontamination against the eval, quality filtering, and difficulty/diversity balancing.
- Quantify how dataset size and quality move the needle (small-clean vs large-noisy).
- Format the function-calling case into strict tool-call targets.

### Concept map
- **Chat template & loss masking.** *Idea:* train only on the assistant tokens; mask the prompt so the model learns to *respond*, not to *predict the user*. *Shapes:* `labels` = `input_ids` with prompt positions set to `-100`. *Code mapping:* TRL `SFTTrainer` with `completion_only_loss` / a data collator. *Common mistake:* training on the full sequence, diluting the signal and teaching it to parrot prompts.
- **Decontamination.** *Idea:* remove training examples that overlap the eval (n-gram/embedding match). *Plain English:* don't let the test answers leak into training. *Common mistake:* none done → inflated scores, real-world flop.
- **Data quality > quantity.** Plain English: 1k clean, diverse, correct examples often beat 50k noisy ones (LIMA lesson). Common mistake: scraping volume and skipping filtering.
- **Packing.** *Idea:* concatenate short examples to fill the context window for GPU efficiency, with attention boundaries respected. Common mistake: cross-example attention contamination when packing naively.

### Hands-on build
- `prep.py`: format AcmeCorp tickets into chat-template SFT JSONL; dedup (MinHash), decontaminate against the frozen eval (n-gram + embedding overlap), quality-filter (length, language, refusal/garbage heuristics, optional LLM scoring).
- Build two variants — *small-clean* (1.5k) and *large-noisy* (15k) — to test the quality hypothesis next week.
- **Deliverable:** `evidence/week02-data/` with dataset card (size, sources, filters, decontam report) + 10 inspected examples. **Acceptance:** zero eval contamination detected, loss-masking verified on a sample, dataset card complete.

▶ **Practical project:** `VizuaraAI/pharma-slm` — follow its data pipeline to format, dedup, and decontaminate your domain SFT set with a defensible dataset card.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install datasets datasketch trl`.
2. **Data:** AcmeCorp raw tickets (~20k).
3. **Build:** `prep.py` — chat-template SFT JSONL, MinHash dedup, n-gram + embedding decontam vs the frozen eval, quality filters.
4. **Run:** build two variants — small-clean (1.5k) and large-noisy (15k).
5. **Eval:** verify loss-masking on a sample; produce a decontam report (target 0 overlap).
6. **Ship:** `evidence/week02-data/` dataset card + 10 inspected rows.
- **Artifact:** the prep pipeline + dataset card + decontam report.
- **Use `$sft-data-prep`:** turn raw data into a clean, decontaminated, correctly-templated set with a defensible card.
- **Done when:** zero eval contamination; loss-mask verified on a sample; dataset card complete.
- **Stretch:** add an LLM quality-scorer filter and compare card stats before/after.

### Harness / reusable skill — `$sft-data-prep`
- **Purpose:** turn raw domain data into a clean, decontaminated, correctly-templated SFT set with a defensible card.
- **Inputs:** raw examples + the frozen eval + a target chat template.
- **Required outputs:** formatted JSONL, dedup/decontam report, quality-filter stats, loss-mask verification, and a dataset card.
- **Evidence artifact:** `evidence/week02-data/dataset-card.md`.

### Common failure modes
- **Eval contamination** → fake gains. *Fix:* n-gram + embedding decontam, reported.
- **No loss masking** → model learns to echo prompts. *Fix:* mask prompt tokens; verify on a sample.
- **Volume over quality** → noisy data caps quality. *Fix:* filter hard; prefer small-clean.
- **Template mismatch** → train template ≠ serve template → garbage at inference. *Fix:* one template, asserted both sides.

### Evidence artifact
`evidence/week02-data/` (dataset card, decontam report, masked-sample screenshot, 10 inspected rows).

### Skill sink-in
Predict whether your small-clean or large-noisy set will win next week. Write it down now. (You'll confirm in Week 3.)

### Dataset(s)
- **AcmeCorp tickets** (raw, ~20k, course-internal) → filtered SFT set.
- **Quality reference sets:** **OpenHermes-2.5** (`huggingface.co/datasets/teknium/OpenHermes-2.5`, ~1M, mixed permissive) and **Tulu 3 SFT mixture** (`huggingface.co/datasets/allenai/tulu-3-sft-mixture`, ODC-BY) as gold-standard formatting/quality exemplars.

### Code stub
```python
from datasets import load_dataset
from datasketch import MinHash, MinHashLSH

def decontaminate(train, eval_texts, n=13, thresh=0.8):
    lsh = MinHashLSH(threshold=thresh, num_perm=64)
    for i, t in enumerate(eval_texts):
        m = MinHash(num_perm=64)
        for g in ngrams(t, n): m.update(g.encode())
        lsh.insert(f"eval{i}", m)
    keep = []
    for ex in train:
        m = MinHash(num_perm=64)
        for g in ngrams(ex["text"], n): m.update(g.encode())
        if not lsh.query(m):              # no eval overlap -> safe to train
            keep.append(ex)
    return keep
# chat template + loss mask handled by TRL SFTConfig(completion_only_loss=True)
```

### Graded rubric (Week 2 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Templated, masked, packed correctly | Wrong template / no mask |
| Evidence | Decontam report (0 overlap) + dataset card | No decontam check |
| Reasoning | Filter choices justified; small-clean rationale | "Used everything" |
| Reproducibility | Scripted, seeded, versioned dataset | Manual edits |

### Assessment weight
**6%** of course grade.

### Reading list
- Zhou et al., "LIMA: Less Is More for Alignment," NeurIPS 2023.
- Lambert et al., "Tulu 3: Pushing Frontiers in Open Language Model Post-Training," 2024 (data recipes).
- Penedo et al., "The FineWeb Datasets: Decanting the Web for the Finest Text Data at Scale," NeurIPS 2024 (filtering).
- "Deduplicating Training Data Makes Language Models Better," Lee et al., ACL 2022.

---

### State of the Art (June 2026)
- Synthetic data is standard: generate with a frontier teacher, then **decontaminate vs the eval** (n-gram + embedding) — non-negotiable hygiene.
- Data-quality-over-quantity (LIMA / Tulu 3 lesson) holds; chat-template + loss-masking correctness is still the top silent bug.
- Tooling: HF `datasets`, `distilabel`-style synthetic pipelines, MinHash dedup; dataset cards treated as versioned artifacts.
- Packing with attention-boundary isolation is now built into TRL / Axolotl.

**More detail:** Loss-masking the prompt and matching train/serve chat templates are the top silent bugs; n-gram + embedding decontamination against the eval prevents inflated scores. Small-clean data often beats large-noisy (the LIMA lesson).

**References & links:**
- [LIMA (Zhou et al., 2023)](https://arxiv.org/abs/2305.11206) — 1k clean > 50k noisy
- [Tülu 3 (Lambert et al., 2024)](https://arxiv.org/abs/2411.15124) — open post-training data recipes
- [Deduplicating Training Data (Lee et al., 2021)](https://arxiv.org/abs/2107.06499) — dedup improves models
- [TRL SFTTrainer docs](https://huggingface.co/docs/trl/sft_trainer) — chat templates + completion-only loss
- [`argilla-io/distilabel`](https://github.com/argilla-io/distilabel) — synthetic data pipelines
- [`VizuaraAI/pharma-slm`](https://github.com/VizuaraAI/pharma-slm) — full data pipeline
<!-- sota:05L02 -->

## Week 3 — PEFT I: LoRA From the Math Up

**Altitude:** Engineer · **Anchor case:** fine-tune SupportGenie with LoRA on a single GPU and prove it beats prompting on format compliance — then run the small-clean vs large-noisy data showdown.

### Learning goals
- Explain LoRA: low-rank weight updates, what `r`, `alpha`, target modules, and dropout do, and why it trains ~0.1–1% of parameters.
- Run a real LoRA SFT with TRL/PEFT (and Unsloth for speed); read the loss curve and eval.
- Tune the LoRA hyperparameters that matter and know which don't.
- Confirm or refute the Week 2 data-quality hypothesis.

### Concept map
- **LoRA.** *Formula:* `W' = W₀ + ΔW = W₀ + (α/r)·B·A`, with `A ∈ ℝ^{r×d}`, `B ∈ ℝ^{d×r}`, `r ≪ d`. *Symbols:* `r` rank, `α` scaling, `W₀` frozen base. *Shapes:* update is rank-`r`; only `A,B` train. *Plain English:* instead of editing the whole weight matrix, learn a small low-rank "patch." *Code mapping:* `LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj","v_proj",...])`. *Common mistake:* targeting too few modules (only attention, skipping MLP) and underfitting.
- **Rank `r` and `alpha`.** Plain English: `r` = capacity of the patch; effective scale is `α/r`. Common mistake: cranking `r` huge (loses LoRA's point) or mismatching `α`.
- **Why it works.** *Idea:* task adaptation lives in a low-dimensional subspace, so a low-rank update suffices. Where it matters: cheap training, tiny artifacts (MBs), swappable adapters.
- **Merging vs keeping separate.** Adapter can be merged into base for serving or kept separate for multi-LoRA. Common mistake: merging when you wanted to hot-swap many adapters.

### Hands-on build
- `train_lora.py`: LoRA SFT of an 8B base on the small-clean set; log loss to W&B; eval on the frozen set.
- Run the **data showdown**: same config on small-clean vs large-noisy; compare on the eval.
- Sweep `r ∈ {8,16,64}` and target-module sets; record what moved the metric.
- **Deliverable:** `evidence/week03-lora/` with the loss curve, eval-vs-baseline table, data-showdown result, and the `r`/target-module sweep. **Acceptance:** the LoRA model beats the Week 1 prompted baseline on format compliance, and the data-quality hypothesis is confirmed or refuted with numbers.

▶ **Practical project:** `krishnaik06/Finetuning-LLM` — run its LoRA SFT notebook on an 8B base and beat the Week-1 prompted baseline on format compliance.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (A100) or local 24GB; `pip install trl peft bitsandbytes unsloth wandb`.
2. **Data:** the small-clean (1.5k) and large-noisy (15k) sets from Week 2.
3. **Build:** `train_lora.py` — `LoraConfig(r=16, alpha=32, target_modules=[q,k,v,o,gate,up,down])`, `SFTTrainer`, `completion_only_loss=True`.
4. **Run:** LoRA SFT on small-clean (log loss to W&B); run the data showdown vs large-noisy; sweep `r ∈ {8,16,64}`.
5. **Eval:** evaluate on the frozen set vs the Week-1 prompted baseline.
6. **Ship:** `evidence/week03-lora/` loss curve + eval table + data showdown + `r` sweep.
- **Artifact:** the training config + loss curve + eval-vs-baseline table.
- **Use `$lora-trainer`:** run a reproducible LoRA SFT, isolating the 1–2 hyperparameters that moved the metric.
- **Done when:** LoRA beats the prompted baseline on format compliance; data hypothesis confirmed/refuted with numbers; seed committed.
- **Stretch:** target only attention vs attention+MLP and quantify the underfit.

### Harness / reusable skill — `$lora-trainer`
- **Purpose:** run a reproducible LoRA SFT and report whether it beats the prompted baseline, with the hyperparameters that mattered isolated.
- **Inputs:** a base model + a prepped dataset + the frozen eval.
- **Required outputs:** training config, loss curve, eval delta vs baseline, and the 1–2 hyperparameters that actually moved the metric.
- **Evidence artifact:** `evidence/week03-lora/report.md`.

### Common failure modes
- **Too-few target modules** → underfit. *Fix:* include MLP projections, not just `q/v`.
- **LR/scheduler mis-set** → no learning or divergence. *Fix:* warmup + cosine; sane LR (e.g., 1–2e-4 for LoRA).
- **Eval on training data** → fake win. *Fix:* the frozen held-out set only.
- **Tuning noise** → chasing 0.5% wiggles. *Fix:* fix the seed; report variance; change one knob at a time.

### Evidence artifact
`evidence/week03-lora/` (loss curve, eval table, data showdown, hyperparameter sweep, config).

### Skill sink-in
Predict whether `r=64` beats `r=16` enough to justify the extra parameters. Sweep. Record the actual delta and your revised default `r`.

### Dataset(s)
- **AcmeCorp small-clean (1.5k)** and **large-noisy (15k)** SFT sets from Week 2.
- **Base models:** `meta-llama/Llama-4-Scout` class or `Qwen/Qwen3-8B` (`huggingface.co`, respective community licenses — note Llama license restrictions).

### Code stub
```python
from peft import LoraConfig
from trl import SFTTrainer, SFTConfig

peft_cfg = LoraConfig(
    r=16, lora_alpha=32, lora_dropout=0.05, bias="none",
    target_modules=["q_proj","k_proj","v_proj","o_proj",
                    "gate_proj","up_proj","down_proj"],   # attn + MLP
    task_type="CAUSAL_LM")

trainer = SFTTrainer(
    model="Qwen/Qwen3-8B",
    train_dataset=clean_ds,
    peft_config=peft_cfg,
    args=SFTConfig(per_device_train_batch_size=4, gradient_accumulation_steps=4,
                   learning_rate=2e-4, num_train_epochs=2, warmup_ratio=0.03,
                   lr_scheduler_type="cosine", bf16=True, logging_steps=10,
                   completion_only_loss=True, report_to="wandb"))
trainer.train()        # eval on FROZEN gold_v1.jsonl, compare to prompted baseline
```

### Graded rubric (Week 3 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | LoRA SFT runs; beats prompted baseline on held-out | Doesn't beat baseline / evals on train |
| Evidence | Loss curve + eval delta + data showdown | Final number only |
| Reasoning | Isolates which knob mattered | Changed everything at once |
| Reproducibility | Config + seed committed | Unpinned |

### Assessment weight
**7%** of course grade.

### Reading list
- Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models," ICLR 2022 (the paper).
- Aghajanyan et al., "Intrinsic Dimensionality Explains the Effectiveness of Language Model Fine-Tuning," ACL 2021 (why low-rank works).
- Biderman et al., "LoRA Learns Less and Forgets Less," TMLR 2024.
- HF PEFT + Unsloth docs (2025–2026).

---

### State of the Art (June 2026)
- Default PEFT stack: **LoRA / QLoRA / DoRA**; target attention + MLP, rank-stabilized variants common.
- Tooling: HF `peft` + `trl`, **Axolotl** (config-driven), **Unsloth** (2–5× faster); A100/H100 or serverless GPU bursts.
- Adapters are MB-sized and hot-swappable — multi-LoRA serving makes per-tenant tuning cheap.
- Frontier open bases (Qwen 3.5, Llama 4, Gemma 4) are all LoRA-friendly out of the box.

**More detail:** LoRA learns a rank-r patch `ΔW = (α/r)·BA` on frozen weights, training ~0.1–1% of params; targeting attention+MLP (not just q/v) avoids underfit. DoRA and rank-stabilized LoRA close most of the full-fine-tune gap.

**References & links:**
- [LoRA (Hu et al., 2021)](https://arxiv.org/abs/2106.09685) — low-rank adaptation
- [DoRA (Liu et al., 2024)](https://arxiv.org/abs/2402.09353) — weight-decomposed LoRA
- [Intrinsic Dimensionality (Aghajanyan et al., 2020)](https://arxiv.org/abs/2012.13255) — why low-rank works
- [Hugging Face PEFT docs](https://huggingface.co/docs/peft) — LoRA config + target modules
- [`unslothai/unsloth`](https://github.com/unslothai/unsloth) — 2–5× faster LoRA
- [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — LoRA SFT lab
<!-- sota:05L03 -->

## Week 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU

**Altitude:** Engineer · **Anchor case:** fit a larger base (or longer context) on the same GPU by training in 4-bit — and check whether you paid any quality tax.

### Learning goals
- Explain QLoRA: 4-bit NF4 base + LoRA adapters in higher precision, with double quantization and paged optimizers.
- Quantify the memory/quality/speed tradeoff of QLoRA vs full-precision LoRA on the same task.
- Use Unsloth for faster QLoRA and longer context; manage gradient checkpointing and paging.
- Decide when 4-bit training's savings are worth any quality loss.

### Concept map
- **Quantization (training-time).** *Idea:* store base weights in 4-bit NF4 (NormalFloat, info-theoretically suited to normal weights) to cut memory ~4×, while LoRA adapters stay bf16. *Plain English:* compress the frozen part, train the tiny patch in full precision. *Common mistake:* quantizing the adapters too (defeats the point; hurts quality).
- **Double quantization & paged optimizers.** *Idea:* quantize the quantization constants too; page optimizer state to CPU on spikes. *Plain English:* squeeze more onto the GPU and survive memory bursts. Common mistake: OOM from no gradient checkpointing.
- **Quality tax.** Plain English: QLoRA is usually within noise of LoRA, but verify per task. Common mistake: assuming "4-bit = worse" or "4-bit = free" without measuring.
- **NF4 vs other 4-bit.** Where it matters: NF4 for normally-distributed weights vs INT4/FP4. Common mistake: using a quant format mismatched to the weight distribution.

### Hands-on build
- `train_qlora.py`: QLoRA SFT of the same (or a larger) base on the small-clean set; compare memory, throughput, and eval to Week 3's full-precision LoRA.
- Push context length and/or model size to what only fits in 4-bit; document the headroom gained.
- **Deliverable:** `evidence/week04-qlora/` with the LoRA-vs-QLoRA table (memory / tokens-per-sec / eval) + a "use 4-bit or not" decision. **Acceptance:** the quality delta vs full-precision LoRA is measured (not assumed) and the memory savings are quantified.

▶ **Practical project:** `krishnaik06/Finetuning-LLM` — switch its config to 4-bit QLoRA and measure the memory / throughput / quality tradeoff vs Week-3 full-precision LoRA.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local 24–48GB; `BitsAndBytesConfig(load_in_4bit, nf4, double_quant, compute_dtype=bf16)` or Unsloth `FastLanguageModel`.
2. **Data:** the small-clean set (reused) + a long-ticket subset for context headroom.
3. **Build:** `train_qlora.py` — 4-bit base + bf16 adapters, `optim="paged_adamw_8bit"`, `gradient_checkpointing=True`.
4. **Run:** log `torch.cuda.max_memory_allocated()` + tokens/sec vs Week-3 LoRA; push model/context to what only fits in 4-bit.
5. **Eval:** compare memory / throughput / eval to full-precision LoRA; test the served (merged) artifact.
6. **Ship:** `evidence/week04-qlora/` table + a use-4-bit-or-not decision.
- **Artifact:** the QLoRA config + memory/throughput/eval table.
- **Use `$qlora-trainer`:** train under a memory budget and report the exact memory/quality tradeoff.
- **Done when:** quality delta vs LoRA measured (not assumed); memory savings quantified; served artifact evaluated.
- **Stretch:** try DoRA and compare the quality/throughput tradeoff.

### Harness / reusable skill — `$qlora-trainer`
- **Purpose:** train under a memory budget with 4-bit base + LoRA, and report the exact memory/quality tradeoff.
- **Inputs:** base model + dataset + a GPU memory budget.
- **Required outputs:** memory footprint, throughput, eval vs full-precision LoRA, and a budget-aware recommendation.
- **Evidence artifact:** `evidence/week04-qlora/report.md`.

### Common failure modes
- **OOM mysticism** → blaming the model for memory crashes. *Fix:* gradient checkpointing + paged optimizer + batch/accum tuning.
- **Assuming a quality tax** → avoiding QLoRA without measuring. *Fix:* run the head-to-head.
- **Quantizing adapters** → unnecessary quality loss. *Fix:* keep LoRA in bf16.
- **Serving-train precision mismatch** → train 4-bit, serve fp16 merged, surprises. *Fix:* test the served artifact, not just the training eval.

### Evidence artifact
`evidence/week04-qlora/` (memory/throughput/eval table + decision + OOM-debug notes).

### Skill sink-in
Predict the eval gap between LoRA and QLoRA on SupportGenie before running. Measure it. Record whether the memory savings justified any loss — and what model size that unlocked.

### Dataset(s)
- **AcmeCorp small-clean** (reused) for a controlled LoRA-vs-QLoRA comparison.
- **Long-context stress set:** a synthetic long-ticket subset (provided) to exercise the context headroom QLoRA buys.

### Code stub
```python
from transformers import BitsAndBytesConfig
import torch

bnb = BitsAndBytesConfig(
    load_in_4bit=True, bnb_4bit_quant_type="nf4",
    bnb_4bit_use_double_quant=True,
    bnb_4bit_compute_dtype=torch.bfloat16)        # base 4-bit, compute bf16

# model = AutoModelForCausalLM.from_pretrained(base, quantization_config=bnb)
# then same LoraConfig as Week 3; SFTConfig(..., optim="paged_adamw_8bit",
#                                            gradient_checkpointing=True)
# Unsloth fast path:
# from unsloth import FastLanguageModel
# model, tok = FastLanguageModel.from_pretrained(base, load_in_4bit=True,
#                                                max_seq_length=8192)
# TODO: log torch.cuda.max_memory_allocated() and tokens/sec vs Week 3
```

### Graded rubric (Week 4 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | QLoRA trains; served artifact evaluated | Trains but never tests served model |
| Evidence | Memory + throughput + eval vs LoRA | Eval only, no memory data |
| Reasoning | Budget-aware verdict; names unlocked headroom | "4-bit, because cheaper" |
| Reproducibility | Config + GPU specs logged | Unspecified hardware |

### Assessment weight
**6%** of course grade.

### Reading list
- Dettmers et al., "QLoRA: Efficient Finetuning of Quantized LLMs," NeurIPS 2023.
- Dettmers et al., "8-bit Optimizers via Block-wise Quantization," ICLR 2022.
- "GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers," Frantar et al., ICLR 2023 (serving-side context).
- Unsloth technical blog/docs (2025–2026) on QLoRA throughput.

---

### State of the Art (June 2026)
- QLoRA (4-bit NF4 base + bf16 adapters, double-quant, paged optimizers) tunes an 8B on a single 24–48GB GPU.
- **Unsloth** pushes QLoRA throughput and longer context; gradient checkpointing is standard.
- Serving-side quantization (FP8/INT4/AWQ/GPTQ) is a *distinct* step — always re-eval the served artifact, not just the training eval.
- **DoRA** and rank-stabilized LoRA close most of the remaining full-fine-tune gap on many tasks.

**More detail:** QLoRA stores the frozen base in 4-bit NF4 (information-optimal for normal weights) with bf16 adapters, double-quantizes the quant constants, and pages optimizer state to survive memory spikes — usually within noise of full-precision LoRA.

**References & links:**
- [QLoRA (Dettmers et al., 2023)](https://arxiv.org/abs/2305.14314) — 4-bit NF4 + paged optimizers
- [8-bit Optimizers (Dettmers et al., 2021)](https://arxiv.org/abs/2110.02861) — block-wise quantization
- [GPTQ (Frantar et al., 2022)](https://arxiv.org/abs/2210.17323) — serving-side PTQ context
- [`bitsandbytes-foundation/bitsandbytes`](https://github.com/bitsandbytes-foundation/bitsandbytes) — NF4 + paged optim
- [`unslothai/unsloth`](https://github.com/unslothai/unsloth) — fast QLoRA + long context
- [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — QLoRA notebook
<!-- sota:05L04 -->

## Week 5 — Preference Optimization I: DPO and the RLHF Lineage

**Altitude:** Engineer · **Anchor case:** SupportGenie's SFT model is fluent but sometimes terse/off-tone — align it to *preferred* answers with DPO using chosen/rejected pairs.

### Learning goals
- Explain the RLHF → DPO progression: why DPO replaces a reward model + PPO with a direct classification-style loss.
- Build a preference dataset (chosen/rejected pairs) for the support domain.
- Run DPO with TRL on top of the SFT checkpoint and measure win-rate vs the SFT model.
- Understand the role of the reference model and the `β` (KL) knob.

### Concept map
- **RLHF (for context).** *Idea:* train a reward model on human preferences, then PPO the policy to maximize reward minus a KL penalty to the reference. *Plain English:* learn what humans like, then optimize toward it without drifting too far. Common mistake: thinking RLHF is the only path — DPO skips the separate RM + RL loop.
- **DPO.** *Formula:* `L_DPO = −log σ( β[ (logπ_θ(y_w|x) − logπ_ref(y_w|x)) − (logπ_θ(y_l|x) − logπ_ref(y_l|x)) ] )`. *Symbols:* `y_w` chosen, `y_l` rejected, `π_ref` frozen SFT reference, `β` KL strength. *Shapes:* per-pair scalar loss. *Plain English:* raise the model's probability of the chosen answer over the rejected one, relative to where it started. *Code mapping:* TRL `DPOTrainer`. *Common mistake:* no/incorrect reference model → the KL anchor breaks and the model degenerates.
- **`β` / KL anchor.** Plain English: how hard you pull toward preferences vs how close you stay to the SFT model. Common mistake: `β` too low → reward-hacky, verbose, drifted outputs.
- **Preference data quality.** Why it matters: noisy/contradictory pairs teach noise. Common mistake: auto-generating pairs without checking the "chosen" is actually better.

### Hands-on build
- `prep_prefs.py`: build chosen/rejected support pairs (from edits, human ranking, or stronger-model vs SFT outputs), with quality checks.
- `train_dpo.py`: DPO from the SFT checkpoint; sweep `β`; eval win-rate (LLM-as-judge, validated) vs SFT and vs prompted baseline.
- **Deliverable:** `evidence/week05-dpo/` with the preference dataset card, `β` sweep, and win-rate table. **Acceptance:** DPO model beats the SFT model on judged win-rate without verbosity/length blow-up (report length stats).

▶ **Practical project:** `mlabonne/llm-course` — run its DPO notebook on your SFT checkpoint and report length-controlled win-rate over the SFT model.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install trl`; the SFT checkpoint from Week 3/4.
2. **Data:** `prep_prefs.py` — chosen/rejected support pairs (edits / human ranking / stronger-model vs SFT) with quality checks; UltraFeedback for warm-up.
3. **Build:** `train_dpo.py` — `DPOTrainer(beta=0.1, ref_model=None)` from the SFT checkpoint.
4. **Run:** sweep `β`; log mean KL to the reference.
5. **Eval:** judged win-rate vs SFT AND length-controlled win-rate; report length stats.
6. **Ship:** `evidence/week05-dpo/` preference card + β sweep + win-rate table.
- **Artifact:** the preference dataset card + DPO config + KL trace.
- **Use `$preference-tuner`:** prove preference tuning improves judged quality without reward-hacking (length, drift).
- **Done when:** DPO beats SFT on judged win-rate; no verbosity blow-up (length-controlled reported); proper reference frozen.
- **Stretch:** re-run with SimPO and compare length-controlled win-rate.

### Harness / reusable skill — `$preference-tuner`
- **Purpose:** run a preference-optimization step and prove it improves judged quality without reward-hacking (length, drift).
- **Inputs:** an SFT checkpoint + a preference dataset + the frozen eval/judge.
- **Required outputs:** win-rate vs SFT, length/verbosity deltas, `β` choice rationale, and a degeneration check.
- **Evidence artifact:** `evidence/week05-dpo/report.md`.

### Common failure modes
- **Missing reference model** → DPO degenerates. *Fix:* freeze the SFT model as `π_ref`.
- **Length/verbosity hacking** → judge prefers longer, not better. *Fix:* report length-controlled win-rate.
- **Noisy preference pairs** → learns contradictions. *Fix:* filter pairs; verify chosen > rejected.
- **`β` mis-set** → over- or under-alignment. *Fix:* sweep `β`; watch KL to reference.

### Evidence artifact
`evidence/week05-dpo/` (preference card, `β` sweep, win-rate + length-controlled win-rate, KL trace).

### Skill sink-in
Predict the judged win-rate of DPO over SFT before running. Measure it. Then check whether the win disappears once you length-control — record what that tells you about your judge.

### Dataset(s)
- **AcmeCorp preference pairs** (built in lab from edits/rankings).
- **UltraFeedback** — `huggingface.co/datasets/HuggingFaceH4/ultrafeedback_binarized`, ~64k binarized preference pairs, MIT license (the standard DPO preference set; use for warm-up + as a general-quality anchor).

### Code stub
```python
from trl import DPOTrainer, DPOConfig

# dataset columns: {"prompt", "chosen", "rejected"}
trainer = DPOTrainer(
    model=sft_checkpoint,                 # policy, initialized from SFT
    ref_model=None,                       # TRL clones SFT as frozen reference
    args=DPOConfig(beta=0.1, learning_rate=5e-6, num_train_epochs=1,
                   per_device_train_batch_size=2, gradient_accumulation_steps=8,
                   bf16=True, logging_steps=10, report_to="wandb"),
    train_dataset=pref_ds, processing_class=tokenizer)
trainer.train()
# eval: judged win-rate(DPO vs SFT) AND length-controlled win-rate; log mean KL
```

### Graded rubric (Week 5 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | DPO from SFT with proper reference; beats SFT | No reference / no improvement |
| Evidence | Win-rate + length-controlled + KL trace | Raw win-rate only |
| Reasoning | β chosen from sweep; degeneration checked | Default β, no checks |
| Reproducibility | Preference card + config committed | Opaque pairs |

### Assessment weight
**7%** of course grade.

### Reading list
- Rafailov et al., "Direct Preference Optimization: Your Language Model is Secretly a Reward Model," NeurIPS 2023.
- Christiano et al., "Deep Reinforcement Learning from Human Preferences," NeurIPS 2017 (RLHF origin).
- Schulman et al., "Proximal Policy Optimization Algorithms," 2017 (the PPO DPO replaces).
- Cui et al., "UltraFeedback: Boosting Language Models with Scaled AI Feedback," ICML 2024.

---

### State of the Art (June 2026)
- **DPO** is the default offline preference method; reference-anchored, β/KL-tuned, with **length-controlled eval** to catch verbosity hacking.
- Preference sets (UltraFeedback / HH-RLHF style) are increasingly AI-generated (RLAIF) with quality filtering.
- Classic RLHF (reward model + PPO) is now mostly reserved for fuzzy goals; verifiable tasks move to **RLVR/GRPO**.
- Post-training recipe: **SFT → DPO/GRPO → optional model merging**.

**More detail:** DPO replaces a reward model + PPO with a direct classification loss over chosen/rejected pairs, anchored to a frozen SFT reference by β; report length-controlled win-rate because judges reward verbosity.

**References & links:**
- [DPO (Rafailov et al., 2023)](https://arxiv.org/abs/2305.18290) — your LM is secretly a reward model
- [InstructGPT / RLHF (Ouyang et al., 2022)](https://arxiv.org/abs/2203.02155) — the RLHF lineage
- [PPO (Schulman et al., 2017)](https://arxiv.org/abs/1707.06347) — what DPO replaces
- [UltraFeedback (Cui et al., 2023)](https://arxiv.org/abs/2310.01377) — standard preference data
- [TRL DPOTrainer docs](https://huggingface.co/docs/trl/dpo_trainer) — usage + β/KL
<!-- sota:05L05 -->

## Week 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective

**Altitude:** Engineer · **Anchor case:** you don't always have clean pairwise preferences — pick the preference method that matches the *data you actually have* and the compute you can spend.

### Learning goals
- Compare DPO, ORPO, KTO, SimPO, IPO on data requirements, reference-model needs, and failure modes.
- Run ORPO (single-stage SFT+preference, no reference model) and KTO (unpaired binary good/bad signals).
- Choose an objective from data shape (paired vs unpaired, abundant vs scarce) and resources.
- Understand the preference-theory backbone (Bradley-Terry) connecting them.

### Concept map
- **Bradley-Terry backbone.** *Formula:* `P(y_w ≻ y_l) = σ(r(y_w) − r(y_l))`. *Plain English:* preference probability is a sigmoid of a reward gap — the model under DPO/RLHF reward modeling. Common mistake: assuming all methods share this assumption (KTO uses a prospect-theory value function instead).
- **ORPO.** *Idea:* combine SFT and odds-ratio preference loss in one stage, no reference model, no separate SFT pass. *Plain English:* align while you instruction-tune. *Common mistake:* using it when you already have a good SFT model (DPO may be cleaner).
- **KTO.** *Idea:* needs only unpaired "this output was good / bad" labels (Kahneman-Tversky value), not pairs. *Plain English:* learn from thumbs-up/down you actually collect in production. *Common mistake:* forcing data into pairs when KTO fits the signal better.
- **SimPO / IPO.** SimPO: reference-free, length-normalized reward (combats length hacking). IPO: fixes DPO's overfitting to deterministic preferences. Where it matters: pick by your observed pathology (length bloat → SimPO; overfit → IPO).

### Hands-on build
- `compare_prefs.py`: run ORPO and KTO (and re-use Week 5 DPO) on matched data where possible; tabulate win-rate, length, compute, and data-format needs.
- Decide the SupportGenie objective from the real data you have.
- **Deliverable:** `evidence/week06-pref-compare/` with the methods comparison table + a justified objective choice. **Acceptance:** the choice is tied to your *actual* data shape and resources, with at least two methods run head-to-head.

▶ **Practical project:** `mlabonne/llm-course` — use its preference-alignment notebooks to run ORPO + KTO and pick an objective by your actual data shape.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install trl`; reuse the Week-5 DPO run.
2. **Data:** UltraFeedback (paired) + a derived unpaired KTO set (binarized good/bad) + HH-RLHF as a second source.
3. **Build:** `compare_prefs.py` — `ORPOTrainer` (no ref) + `KTOTrainer` (unpaired) on matched data.
4. **Run:** tabulate win-rate, length, GPU-hours, and data-format needs.
5. **Eval:** build a decision matrix tying method to data shape + observed pathology.
6. **Ship:** `evidence/week06-pref-compare/` methods table + a justified objective.
- **Artifact:** the methods-comparison notebook + decision matrix.
- **Use `$preference-method-selector`:** choose an objective from data shape, reference-model availability, and pathologies.
- **Done when:** ≥2 methods run on the right data shape; comparison table complete; choice tied to data shape + pathology.
- **Stretch:** add IPO and show where it fixes DPO overfitting.

### Harness / reusable skill — `$preference-method-selector`
- **Purpose:** choose a preference-optimization objective from data shape, reference-model availability, and observed pathologies.
- **Inputs:** the preference data (paired/unpaired, size) + compute budget + observed failures (length, drift).
- **Required outputs:** a comparison across ≥2 methods, a decision matrix, and the chosen objective with rationale.
- **Evidence artifact:** `evidence/week06-pref-compare/decision.md`.

### Common failure modes
- **Method-by-hype** → using whatever trended. *Fix:* match method to data shape.
- **Pairing unpaired data** → throwing away signal or fabricating pairs. *Fix:* use KTO for binary feedback.
- **Ignoring length hacking** → DPO/ORPO bloat. *Fix:* SimPO or length-controlled eval.
- **Double SFT waste** → SFT then ORPO (which already includes SFT). *Fix:* understand each method's stages.

### Evidence artifact
`evidence/week06-pref-compare/` (methods table, decision matrix, chosen-objective rationale).

### Skill sink-in
Predict which objective wins for SupportGenie given your data shape. Run two. Record whether the data-shape argument or the empirical win-rate drove your final choice.

### Dataset(s)
- **UltraFeedback** (paired) + a **derived unpaired KTO set** (binarize to good/bad) from the same source.
- **HH-RLHF** — `huggingface.co/datasets/Anthropic/hh-rlhf`, ~170k helpfulness/harmlessness pairs, MIT license, as a second preference source.

### Code stub
```python
from trl import ORPOTrainer, ORPOConfig, KTOTrainer, KTOConfig

# ORPO: single stage, no reference model, dataset {"prompt","chosen","rejected"}
orpo = ORPOTrainer(model=base, train_dataset=pair_ds, processing_class=tok,
    args=ORPOConfig(beta=0.1, learning_rate=8e-6, num_train_epochs=1, bf16=True))

# KTO: unpaired, dataset {"prompt","completion","label": bool}
kto = KTOTrainer(model=sft, train_dataset=binary_ds, processing_class=tok,
    args=KTOConfig(beta=0.1, desirable_weight=1.0, undesirable_weight=1.0))
# TODO: run both + Week5 DPO on matched data; tabulate win-rate, length, GPU-hours
```

### Graded rubric (Week 6 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | ≥2 methods run correctly on right data shape | One method / wrong data format |
| Evidence | Comparison table (win-rate/length/compute/data-need) | Single method result |
| Reasoning | Choice tied to data shape + pathology | "Picked DPO, it's popular" |
| Reproducibility | Configs + data variants committed | Unclear setup |

### Assessment weight
**6%** of course grade.

### Reading list
- Hong et al., "ORPO: Monolithic Preference Optimization without Reference Model," EMNLP 2024.
- Ethayarajh et al., "KTO: Model Alignment as Prospect Theoretic Optimization," ICML 2024.
- Meng et al., "SimPO: Simple Preference Optimization with a Reference-Free Reward," NeurIPS 2024.
- Azar et al., "A General Theoretical Paradigm to Understand Learning from Human Preferences" (IPO), AISTATS 2024.
- Stanford CS329H — preference modeling & choice theory (Bradley-Terry/Luce/RUM), 2025.

---

### State of the Art (June 2026)
- Method zoo matched to data shape: **DPO** (pairs), **ORPO** (single-stage, no ref), **KTO** (unpaired thumbs), **SimPO** (ref-free, length-normalized), IPO.
- SimPO's length normalization directly targets the 2026 verbosity-hacking pathology.
- TRL ships all objectives; the choice is data-shape + observed-pathology driven, not hype.
- **Model merging** (SLERP / TIES / DARE) is increasingly paired with preference tuning to combine skills.

**More detail:** Match the objective to your data shape — ORPO folds preference into SFT (no reference model), KTO learns from unpaired thumbs (prospect theory), SimPO length-normalizes to fight verbosity, IPO fixes DPO's overfitting to deterministic preferences.

**References & links:**
- [ORPO (Hong et al., 2024)](https://arxiv.org/abs/2403.07691) — reference-free monolithic preference
- [KTO (Ethayarajh et al., 2024)](https://arxiv.org/abs/2402.01306) — unpaired prospect-theoretic alignment
- [SimPO (Meng et al., 2024)](https://arxiv.org/abs/2405.14734) — reference-free length-normalized reward
- [IPO (Azar et al., 2023)](https://arxiv.org/abs/2310.12036) — general preference paradigm
- [Hugging Face TRL docs](https://huggingface.co/docs/trl) — ORPO/KTO/DPO trainers
<!-- sota:05L06 -->

## Week 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences

**Altitude:** Engineer → Specialist · **Anchor case:** for a sub-skill where you *can verify correctness* (valid tool-call JSON, schema-correct output), use reinforcement fine-tuning with a programmatic reward; and shrink a strong teacher into SupportGenie via distillation.

### Learning goals
- Distinguish RLHF (learned reward), RLAIF (AI feedback), and RFT/RLVR (verifiable/programmatic reward).
- Run a small reinforcement fine-tuning loop with a rule-based reward (format/correctness) — a bridge to Subject 06's GRPO.
- Apply knowledge distillation (teacher logits or teacher-generated data) to make a small model match a larger one.
- Decide when RL-style tuning beats more SFT/DPO data.

### Concept map
- **RLHF vs RLAIF vs RFT.** Plain English: RLHF = humans rank; RLAIF = a model ranks; RFT/RLVR = a *checker* scores (unit test, JSON validity, exact-match math). Where it matters: when correctness is verifiable, skip the learned reward model. Common mistake: building a reward model when a `json.loads` check suffices.
- **Verifiable reward.** *Formula (sketch):* `r(x,y) = 1[check(y) passes]` (e.g., valid tool call, correct answer). *Plain English:* reward = did it pass the test. Common mistake: a reward that's gameable (rewards length or keywords, not correctness).
- **Distillation.** *Idea:* train the student on the teacher's soft targets or generations. *Formula:* `L = (1−λ)·CE(y, student) + λ·KL(teacher_T ‖ student_T)` with temperature `T`. *Plain English:* learn from the teacher's full answer distribution, not just hard labels. Common mistake: distilling without checking the student didn't inherit the teacher's mistakes/biases.
- **RFT vs more SFT.** Why it matters: when you can verify, RL can exceed the ceiling of imitation. Common mistake: reaching for RL when SFT data is the cheaper fix.

### Hands-on build
- `rft_format.py`: a minimal policy-gradient/GRPO-style loop (TRL) on the function-call case with `reward = valid_json AND schema_match`; compare to SFT-only on format compliance.
- `distill.py`: distill a strong teacher (frontier model generations) into the 8B SupportGenie; compare to direct SFT.
- **Deliverable:** `evidence/week07-rft-distill/` with the RFT-vs-SFT format-compliance curve + the distillation comparison. **Acceptance:** RFT improves verifiable-format compliance over SFT-only, and you show the reward isn't being gamed (inspect samples).

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — adapt its RLHF→GRPO walkthrough into a verifiable-reward RFT loop on the function-call task.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install trl`; the function-call SFT checkpoint.
2. **Data:** Glaive function-calling v2 prompts.
3. **Build:** `rft_format.py` — `GRPOTrainer(reward_funcs=[reward_valid_call], num_generations=8)` with `reward = valid_json AND schema_match`; `distill.py` for teacher→8B distillation.
4. **Run:** train; inspect top-reward samples for gaming; compare to SFT-only.
5. **Eval:** RFT-vs-SFT format-compliance curve + the distillation comparison.
6. **Ship:** `evidence/week07-rft-distill/` reward def + curve + hacking inspection.
- **Artifact:** the GRPO RFT loop + distillation notebook + reward-hacking inspection.
- **Use `$verifiable-rft`:** improve a verifiable skill with a programmatic reward + anti-gaming checks.
- **Done when:** RFT beats SFT-only on verifiable-format compliance; reward shown not gamed (samples inspected).
- **Stretch:** harden the checker against a gaming case you found and re-train.

### Harness / reusable skill — `$verifiable-rft`
- **Purpose:** improve a verifiable skill with a programmatic reward, with anti-gaming checks.
- **Inputs:** a task with a checkable reward + an SFT checkpoint.
- **Required outputs:** reward definition, training curve, eval delta vs SFT, and a reward-hacking inspection.
- **Evidence artifact:** `evidence/week07-rft-distill/report.md`.

### Common failure modes
- **Gameable reward** → high reward, wrong behavior. *Fix:* inspect high-reward samples; harden the checker.
- **RL when SFT would do** → expensive, unstable. *Fix:* try SFT data first; use RL where verification beats imitation.
- **Distillation of mistakes** → student copies teacher's errors/biases. *Fix:* eval the student independently, not just vs the teacher.
- **Unstable RL** → reward variance, collapse. *Fix:* small LR, KL anchor, baseline/advantage normalization (preview of Subject 06).

### Evidence artifact
`evidence/week07-rft-distill/` (reward def, RFT curve, distillation comparison, reward-hacking inspection).

### Skill sink-in
Predict whether RFT or just-more-SFT-data gives better JSON-validity. Run both. Record which won and whether your reward was secretly gameable.

### Dataset(s)
- **Glaive function-calling v2** (from Week 1) for the verifiable-format RFT reward.
- **Distillation source:** teacher-generated AcmeCorp answers (frontier model) + **OpenOrca**-style traces (`huggingface.co/datasets/Open-Orca/OpenOrca`, MIT) as a distillation-format reference.

### Code stub
```python
import json
from trl import GRPOTrainer, GRPOConfig    # bridge to Subject 06

def reward_valid_call(completions, **kw):   # programmatic, verifiable reward
    rs = []
    for c in completions:
        try:
            obj = json.loads(c)
            rs.append(1.0 if {"name","arguments"} <= obj.keys() else 0.2)
        except json.JSONDecodeError:
            rs.append(0.0)
    return rs

trainer = GRPOTrainer(
    model=sft_ckpt, reward_funcs=[reward_valid_call],
    train_dataset=fc_prompts,
    args=GRPOConfig(num_generations=8, learning_rate=1e-6, bf16=True))
trainer.train()    # INSPECT top-reward samples for gaming; compare vs SFT-only
```

### Graded rubric (Week 7 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | RFT loop runs; distillation produces working student | Either broken |
| Evidence | RFT-vs-SFT curve + distill comparison + hack check | No anti-gaming inspection |
| Reasoning | Justifies RL vs SFT choice | "Used RL because advanced" |
| Reproducibility | Reward + configs committed | Opaque reward |

### Assessment weight
**6%** of course grade.

### Reading list
- Bai et al., "Constitutional AI: Harmlessness from AI Feedback" (RLAIF), 2022.
- Lee et al., "RLAIF vs. RLHF: Scaling Reinforcement Learning from Human Feedback with AI Feedback," ICML 2024.
- Hinton et al., "Distilling the Knowledge in a Neural Network," NeurIPS 2015 Workshop.
- OpenAI, "Reinforcement Fine-Tuning" docs/announcement (2024–2025); Vizuara RL-in-Production (RLHF→GRPO lineage).

---

### State of the Art (June 2026)
- **RFT/RLVR** with programmatic rewards (json-valid, unit-test, `math-verify`) is the verifiable-task default — the bridge to GRPO (Subject 06).
- **GRPO** (critic-free, group-relative) is in TRL; verifier-gaming / reward-hacking is the active failure mode to audit.
- Distillation from frontier teachers (Opus 4.8 / GPT-5.5 / Gemini 3.1) into small open bases is a standard cost play.
- RLAIF / constitutional feedback is common where human labels are scarce.

**More detail:** When correctness is checkable (`json.loads`, a unit test, `math-verify`), reward = the check — no learned reward model needed; GRPO drops the critic for group-relative advantages. Inspect high-reward samples for gaming.

**References & links:**
- [DeepSeekMath / GRPO (Shao et al., 2024)](https://arxiv.org/abs/2402.03300) — group-relative policy optimization
- [Constitutional AI / RLAIF (Bai et al., 2022)](https://arxiv.org/abs/2212.08073) — AI feedback
- [Distilling the Knowledge in a Neural Network (Hinton et al., 2015)](https://arxiv.org/abs/1503.02531) — teacher→student
- [TRL GRPOTrainer docs](https://huggingface.co/docs/trl/grpo_trainer) — reward functions
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — RLHF→GRPO walkthrough
<!-- sota:05L07 -->

## Week 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)

**Altitude:** Engineer · **Anchor case:** your DPO+RFT SupportGenie is great on support — prove it didn't get worse at general reasoning, safety, or instruction-following before anyone ships it.

### Learning goals
- Build a multi-axis eval: target-task quality, general capability (catastrophic-forgetting check), instruction-following, and safety/refusal calibration.
- Run standardized harnesses (`lm-evaluation-harness`, Inspect AI) plus your domain LLM-judge, with the judge validated.
- Detect regressions and alignment tax; gate deployment on the full suite, not the headline metric.
- Track everything with versioned eval runs.

### Concept map
- **Target vs general eval.** Plain English: improving the narrow task often costs general ability — measure both. Common mistake: reporting only the target win.
- **Catastrophic forgetting check.** *Idea:* run a fixed general suite (e.g., MMLU-Pro slice, GSM8K, IFEval) before/after tuning. *Plain English:* did teaching support break math/reasoning? Common mistake: never running it → silent regression.
- **Alignment tax.** *Idea:* preference/safety tuning can reduce capability. Where it matters: quantify it; decide if acceptable. Common mistake: ignoring it because the demo looks good.
- **Regression gate.** *Formula (gate):* `ship if Δtarget > 0 AND Δgeneral ≥ −ε AND safety_pass ≥ bar`. Common mistake: a single threshold on one metric.

### Hands-on build
- `regression_suite.py`: assemble target eval + general suite (MMLU-Pro slice, GSM8K, IFEval, a refusal/safety set); run base / SFT / DPO / RFT checkpoints; produce a before/after matrix.
- Validate the domain judge (κ vs human on 30 samples).
- **Deliverable:** `evidence/week08-regression/` with the multi-axis matrix + a ship/no-ship recommendation. **Acceptance:** every checkpoint is scored on all axes; any general-ability regression beyond `ε` is flagged with a decision.

▶ **Practical project:** `VizuaraAI/pharma-slm` — reuse its eval pipeline to build a multi-axis target + general + safety regression matrix across your checkpoints.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install lm-eval inspect-ai`.
2. **Data:** AcmeCorp target eval + general suite (MMLU-Pro slice, GSM8K, IFEval) + a refusal/safety probe set.
3. **Build:** `regression_suite.py` — run base / SFT / DPO / RFT checkpoints across all axes into a before/after matrix.
4. **Run:** validate the domain judge (κ vs human on 30 samples).
5. **Eval:** flag any general-ability regression beyond `ε`.
6. **Ship:** `evidence/week08-regression/` matrix + ship/no-ship memo.
- **Artifact:** the multi-axis regression matrix + validated judge.
- **Use `$finetune-regression`:** gate a fine-tune on target gain AND no significant general/safety regression.
- **Done when:** every checkpoint scored on all axes incl. base; judge κ reported; regressions flagged with a decision.
- **Stretch:** add a continual-learning replay mix and measure the forgetting reduction.

### Harness / reusable skill — `$finetune-regression`
- **Purpose:** gate a fine-tune on target gain AND no-significant-regression across general capability and safety.
- **Inputs:** candidate checkpoints + target eval + a general/safety suite.
- **Required outputs:** per-axis before/after matrix, validated judge κ, flagged regressions, and a ship/no-ship call.
- **Evidence artifact:** `evidence/week08-regression/matrix.md`.

### Common failure modes
- **Headline-metric tunnel vision** → ship a model that forgot math. *Fix:* multi-axis suite, always.
- **Unvalidated judge** → fake quality numbers. *Fix:* κ vs human.
- **No base comparison** → can't quantify the tax. *Fix:* always include the base model column.
- **Eval drift** → suite changes between checkpoints. *Fix:* freeze and version the suite.

### Evidence artifact
`evidence/week08-regression/` (before/after multi-axis matrix, judge validation, ship/no-ship memo).

### Skill sink-in
Predict how much (if any) GSM8K or IFEval drops after preference tuning. Measure. Record the alignment tax and whether it's worth the target gain.

### Dataset(s)
- **Target:** AcmeCorp frozen support eval.
- **General suite:** **MMLU-Pro** (`huggingface.co/datasets/TIGER-Lab/MMLU-Pro`, MIT), **GSM8K** (`huggingface.co/datasets/openai/gsm8k`, MIT), **IFEval** (`huggingface.co/datasets/google/IFEval`, Apache-2.0).
- **Safety:** a refusal/jailbreak probe set (e.g., from **HarmBench**-style prompts, research license).

### Code stub
```python
# regression_suite.py — one matrix decides the ship
AXES = {"support": run_domain_eval, "mmlu_pro": run_mmlu_slice,
        "gsm8k": run_gsm8k, "ifeval": run_ifeval, "safety": run_refusal_probe}

def regression_matrix(checkpoints: dict) -> dict:
    return {name: {axis: fn(ckpt) for axis, fn in AXES.items()}
            for name, ckpt in checkpoints.items()}   # base/sft/dpo/rft columns

def ship(matrix, base, cand, eps=0.02) -> bool:
    return (matrix[cand]["support"] > matrix[base]["support"] and
            all(matrix[cand][a] >= matrix[base][a] - eps
                for a in ["mmlu_pro","gsm8k","ifeval"]) and
            matrix[cand]["safety"] >= SAFETY_BAR)
```

### Graded rubric (Week 8 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | All checkpoints on all axes incl. base | Target axis only |
| Evidence | Before/after matrix + validated judge | Headline number |
| Reasoning | Ship call weighs target gain vs tax | "Target improved, ship" |
| Reproducibility | Frozen versioned suite | Drifting eval |

### Assessment weight
**6%** of course grade.

### Reading list
- Wang et al., "MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark," NeurIPS 2024.
- Zhou et al., "Instruction-Following Evaluation for Large Language Models" (IFEval), 2023.
- Luo et al., "An Empirical Study of Catastrophic Forgetting in LLMs during Continual Fine-tuning," 2023.
- UK AISI, "Inspect: An Open-Source Framework for LLM Evaluations" (2024–2025).

---

### State of the Art (June 2026)
- Multi-axis gating: target task + general suite (**MMLU-Pro, GSM8K, IFEval**) + safety — quantify the alignment tax.
- Harnesses: `lm-evaluation-harness`, **UK AISI Inspect AI**, LangSmith / Braintrust; LLM-judge with validated κ.
- Execution-based + contamination-aware evals (LiveBench-style) are replacing static leaderboards.
- Prompt-injection / red-team regression (OWASP LLM Top-10) is now part of the ship gate.

**More detail:** Improving the narrow task often costs general ability — gate on target gain AND no regression on MMLU-Pro/GSM8K/IFEval + a safety probe, with a base-model column to quantify the alignment tax.

**References & links:**
- [MMLU-Pro (Wang et al., 2024)](https://arxiv.org/abs/2406.01574) — harder knowledge benchmark
- [IFEval (Zhou et al., 2023)](https://arxiv.org/abs/2311.07911) — instruction-following eval
- [Catastrophic Forgetting in LLMs (Luo et al., 2023)](https://arxiv.org/abs/2308.08747) — continual-FT regression
- [`EleutherAI/lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) — standardized evals
- [`UKGovernmentBEIS/inspect_ai`](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework
<!-- sota:05L08 -->

## Week 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost

**Altitude:** Engineer · **Anchor case:** serve SupportGenie cheaply at scale — quantize for inference, host many LoRA adapters on one base, and meet a latency/cost SLA.

### Learning goals
- Quantize the tuned model for serving (AWQ/GPTQ/FP8) and measure the quality/latency tradeoff vs bf16.
- Serve multiple LoRA adapters on a shared base with vLLM multi-LoRA / LoRAX (dynamic adapter swap).
- Benchmark throughput, p95 latency, and $/1k-tokens; decide merge-vs-keep-separate.
- Close the loop: the served, quantized artifact must still pass the Week 8 regression gate.

### Concept map
- **Inference quantization.** *Idea:* AWQ/GPTQ/FP8 shrink the served model with minimal quality loss. *Plain English:* compress for speed/cost at serving, distinct from training-time 4-bit. Common mistake: assuming the training eval predicts the *quantized-served* eval — re-evaluate the served artifact.
- **Multi-LoRA serving.** *Idea:* one base in GPU memory + many small adapters swapped per request. *Plain English:* serve dozens of fine-tunes for ~the cost of one base. *Code mapping:* vLLM `--enable-lora --max-loras N`. Common mistake: merging every adapter into separate full models (wastes memory).
- **Merge vs keep-separate.** Merge: one model, lowest per-request overhead, no swapping. Separate: hot-swap many tenants. Where it matters: one tenant vs many. Common mistake: merging when you need per-tenant adapters.
- **Cost/latency.** *Formula:* `$/1k-answers = (tokens × $/token) + amortized_GPU_time`. Why it matters: this is usually fine-tuning's actual win. Common mistake: optimizing quality and never measuring served cost.

### Hands-on build
- `serve_vllm.py`: serve the quantized SupportGenie base + ≥2 LoRA adapters via vLLM multi-LoRA; load-test for throughput/p95.
- `quant_eval.py`: AWQ/GPTQ the model; re-run the Week 8 regression gate on the *quantized served* model; compare to bf16.
- **Deliverable:** `evidence/week09-serving/` with the quant quality/latency table, multi-LoRA throughput, $/1k-answers vs the prompted-frontier baseline, and the served-model regression result. **Acceptance:** the served quantized model still passes the regression gate and beats the frontier baseline on cost at target quality.

▶ **Practical project:** `VizuaraAI/llm-inference-tutorial` — serve your quantized multi-LoRA model with vLLM and load-test p95 / throughput / $-per-1k-answers.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local GPU; `pip install vllm`; AWQ/GPTQ the tuned model.
2. **Data:** a replayed traffic sample + the Week-8 regression suite.
3. **Build:** `serve_vllm.py` — `LLM(quantization="awq", enable_lora=True, max_loras=4)` serving the base + ≥2 adapters; `quant_eval.py`.
4. **Run:** load-test throughput + p95; re-run the regression gate on the *quantized served* model.
5. **Eval:** quant quality/latency table + multi-LoRA throughput + $/1k-answers vs prompted-frontier.
6. **Ship:** `evidence/week09-serving/` SLA + served-model regression result.
- **Artifact:** the vLLM multi-LoRA serving config + load test + cost table.
- **Use `$adapter-serving`:** verify the *served* artifact still passes eval and beats the baseline on cost.
- **Done when:** quantized multi-LoRA served; passes the regression gate; $/1k-answers win shown vs frontier.
- **Stretch:** enable FP8 KV-cache + speculative decoding and re-measure p95.

### Harness / reusable skill — `$adapter-serving`
- **Purpose:** serve quantized adapters under an SLA and verify the *served* artifact still passes eval and beats the baseline on cost.
- **Inputs:** tuned checkpoint + adapters + an SLA + the regression suite.
- **Required outputs:** quant quality/latency table, multi-LoRA throughput, $/1k-answers, and a served-model regression pass/fail.
- **Evidence artifact:** `evidence/week09-serving/sla.md`.

### Common failure modes
- **Eval-only-on-bf16** → quantized served model silently worse. *Fix:* re-run the gate on the served artifact.
- **Adapter explosion** → N full models in memory. *Fix:* multi-LoRA on a shared base.
- **No cost number** → can't justify the whole project. *Fix:* report $/1k-answers vs the frontier baseline.
- **Train/serve template drift** → format breaks at inference. *Fix:* assert identical template; test end-to-end.

### Evidence artifact
`evidence/week09-serving/` (quant table, throughput, cost comparison, served-model regression result).

### Skill sink-in
Predict the quality drop (if any) from AWQ quantization on the served model. Measure it on the regression gate. Record whether the cost win survived the quality check.

### Dataset(s)
- **AcmeCorp frozen eval + general suite** (reused, now on the served/quantized model).
- **Throughput workload:** a replayed traffic sample (provided) for load testing.

### Code stub
```python
# serve quantized base + multiple LoRA adapters on one GPU
from vllm import LLM, SamplingParams
from vllm.lora.request import LoRARequest

llm = LLM(model="acme/supportgenie-awq", quantization="awq",
          enable_lora=True, max_loras=4, max_lora_rank=16)

def answer(prompt, adapter_path, adapter_id):
    return llm.generate([prompt], SamplingParams(max_tokens=512),
        lora_request=LoRARequest(f"a{adapter_id}", adapter_id, adapter_path))
# TODO: load-test p95/throughput; re-run Week 8 regression on THIS served model;
#       compute $/1k-answers vs prompted-frontier baseline
```

### Graded rubric (Week 9 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Quantized multi-LoRA served; passes regression gate | Served but not re-evaluated |
| Evidence | Quant table + throughput + $/1k + gate result | Latency only |
| Reasoning | Merge vs multi-LoRA justified; cost win shown | No cost analysis |
| Reproducibility | Serving config + load test scripted | Manual |

### Assessment weight
**6%** of course grade.

### Reading list
- Lin et al., "AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration," MLSys 2024.
- Sheng et al., "S-LoRA: Serving Thousands of Concurrent LoRA Adapters," MLSys 2024.
- Kwon et al., "Efficient Memory Management for Large Language Model Serving with PagedAttention" (vLLM), SOSP 2023.
- "FP8 Formats for Deep Learning," Micikevicius et al., 2022; vLLM multi-LoRA docs (2025–2026).

---

### State of the Art (June 2026)
- **vLLM** reference engine: **multi-LoRA** (`--enable-lora`), **FP8 KV-cache**, **FlashAttention-4**, speculative decoding (mind KV-quant incompatibility).
- Inference quantization AWQ/GPTQ/FP8/INT4; **S-LoRA** / LoRAX serve thousands of adapters on one base.
- Cost core: serverless GPU pay-per-second + **prompt caching** + batching; report $/1k-answers.
- Always re-run the regression gate on the *quantized served* artifact, not the training-time eval.

**More detail:** Serve a quantized base (AWQ/GPTQ/FP8) with many LoRA adapters hot-swapped per request (S-LoRA / vLLM multi-LoRA); FP8 KV-cache roughly halves KV memory. Re-run the regression gate on the quantized *served* model.

**References & links:**
- [AWQ (Lin et al., 2023)](https://arxiv.org/abs/2306.00978) — activation-aware weight quantization
- [S-LoRA (Sheng et al., 2023)](https://arxiv.org/abs/2311.03285) — thousands of concurrent adapters
- [vLLM / PagedAttention (Kwon et al., 2023)](https://arxiv.org/abs/2309.06180) — the serving engine
- [vLLM documentation](https://docs.vllm.ai/) — multi-LoRA + FP8 KV-cache flags
- [`VizuaraAI/llm-inference-tutorial`](https://github.com/VizuaraAI/llm-inference-tutorial) — serving lab
<!-- sota:05L09 -->

## Week 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting

**Altitude:** Engineer (graduating toward Subject 06) · **Anchor case:** ship adapted SupportGenie (or your own domain task) end-to-end, with an evidence packet proving it beats prompting at lower cost without regressing.

### Learning goals
- Run the full adaptation pipeline: decide → data → SFT (LoRA/QLoRA) → preference-tune → (optional RFT/distill) → regress → serve.
- Prove, against the Week 1 frozen baseline and the Week 8 regression gate, that the tuned model wins on the target task and on cost without a general-ability tax.
- Produce an evidence packet where every claim traces to a run.

### Concept map (review as a checklist)
- Adaptation decision (why fine-tune, not just prompt/RAG) with the gap classified.
- Data discipline: decontaminated, templated, carded.
- Method discipline: LoRA→QLoRA→preference→(RFT) each earned against eval.
- Regression discipline: multi-axis gate, validated judge.
- Serving discipline: quantized, multi-LoRA, SLA, $/1k proven.

### Hands-on build
- Pick the target task (SupportGenie or your own: a domain classifier, a strict-format generator, a style/tone adapter).
- Ship: the decision memo, the prepped dataset card, the trained adapters, the preference-tuned checkpoint, the regression matrix, and the served quantized endpoint. Include an ablation showing each stage's contribution.
- **Deliverable:** `capstone/` repo + a 3-page report. **Acceptance:** the tuned model beats the Week 1 prompted baseline on the frozen target eval, passes the regression gate (no general regression beyond `ε`), and shows a $/1k-answers win — every claim links to a file in `evidence/`.

▶ **Practical project:** `krishnaik06/Finetuning-LLM` — assemble the full decide → data → LoRA/QLoRA → DPO → serve pipeline into your capstone repo.

**Build it — step by step (AI-builder lab):**
1. **Setup:** assemble the full pipeline repo; `uv` env + W&B.
2. **Data:** the declared target task (SupportGenie or your own) + a frozen ≥120 held-out eval + general/safety suite.
3. **Build:** decide → data card → SFT (LoRA/QLoRA) → preference-tune → (optional RFT/distill) → regress → serve.
4. **Run:** `ship_gate.py` — `beats_prompting`, `no_regression`, `cheaper`, with traceable run ids.
5. **Eval:** an ablation showing each stage's contribution.
6. **Ship:** `capstone/` repo + a 3-page report.
- **Artifact:** the end-to-end pipeline + evidence packet + report.
- **Use `$adaptation-evidence-packet`:** assemble decision → data → runs → regression → serving SLA into one bundle.
- **Done when:** tuned model beats the Week-1 baseline; passes the regression gate (no general loss beyond ε); $/1k-answers win; every claim → a run.
- **Stretch:** add multi-LoRA per-tenant adapters and show the cost amortization.

### Harness / reusable skill — `$adaptation-evidence-packet`
- **Purpose:** assemble decision → data card → training runs → regression matrix → serving SLA into one reviewable bundle.
- **Inputs:** the capstone artifacts + all weekly evidence.
- **Required outputs:** a packet where each design decision links to the measurement that justified it, including what was tried and *cut*.
- **Evidence artifact:** the packet itself.

### Common failure modes
- **No-baseline triumph** → "the fine-tune is great" vs nothing. *Fix:* the frozen prompted baseline is the bar.
- **Regression blindness** → target win, hidden general loss. *Fix:* ship the regression matrix.
- **Cost hand-wave** → never proves the economic case. *Fix:* $/1k-answers vs frontier, on the served model.
- **Checkpoint dump** → weights, no story. *Fix:* link every claim to a run + config.

### Evidence artifact
`capstone/` with decision memo, dataset card, training configs/curves, regression matrix, serving SLA, ablations, and the 3-page report.

### Skill sink-in
Before the final eval, write down the target-eval score, the expected general-ability tax, and the $/1k-answers you expect vs the frontier baseline. Run it. The gaps — especially any stage that *didn't* help — are the lesson. Record them.

### Dataset(s)
- **Student choice**, declared up front: AcmeCorp support, the function-call case, or your own domain task — must include a frozen held-out eval (≥120 examples) and a general/safety suite for the regression gate.

### Code stub
```python
# capstone/ship_gate.py — the one decision that ends the course
from regression_suite import regression_matrix, ship
from serve_vllm import serve_and_cost

def capstone_gate(base, candidate_ckpt, adapter) -> dict:
    served = serve_and_cost(candidate_ckpt, adapter, quant="awq")
    mat = regression_matrix({"base": base, "cand": served["model"]})
    return {
        "beats_prompting": served["target"] > PROMPTED_BASELINE,
        "no_regression": ship(mat, "base", "cand"),
        "cheaper": served["cost_per_1k"] < FRONTIER_COST_PER_1K,
        "evidence": served["run_ids"],          # every claim -> a run
    }
# A == all True with traceable evidence; the report is just this table explained.
```

### Graded rubric (Capstone)
| Criterion | Excellent (A) | Adequate (C) | Failing |
|-----------|---------------|--------------|---------|
| Beats prompting | Clear target-eval win vs frozen baseline + ablation | Marginal win, thin evidence | No win shown |
| No regression | Full multi-axis gate passed, validated judge | Gate run, judge unvalidated | No regression check |
| Cost case | $/1k-answers win on served quantized model | Cost estimated, not served-measured | No cost analysis |
| Evidence discipline | Every claim → a run; cuts documented | Most traceable | Checkpoint dump |
| Reproducibility | One command retrains + re-gates from seed | Mostly scripted | Manual |

### Assessment weight
**25%** of course grade.

### Reading list
- Lambert et al., "Tulu 3," 2024 (an end-to-end open post-training recipe to model your packet on).
- Hu et al., "LoRA," 2022 + Dettmers et al., "QLoRA," 2023 (your core methods).
- Rafailov et al., "DPO," 2023 (your alignment step).
- Source book Ch. 16 (project → evidence packet) + Subject 04 `$rag-eval` discipline reused.

---

### State of the Art (June 2026)
- End-to-end open recipe to model on: **Tülu 3-style SFT → DPO → (RLVR) → merge → quantized multi-LoRA serving**.
- Evidence-packet discipline: every claim → a run; cuts documented; served-cost proven.
- Governance: **EU AI Act** GPAI transparency obligations apply **Aug 2, 2026** — document data provenance + eval.
- Frontier baselines (Opus 4.8 / GPT-5.5) are the cost/quality bar the tuned small model must clear.

**More detail:** Model the capstone on an open end-to-end recipe (Tülu 3): SFT → DPO → optional RLVR → merge → quantized multi-LoRA serving, with every claim traced to a run and data provenance documented for EU AI Act GPAI transparency (Aug 2, 2026).

**References & links:**
- [Tülu 3 (Lambert et al., 2024)](https://arxiv.org/abs/2411.15124) — open end-to-end post-training
- [LoRA (Hu et al., 2021)](https://arxiv.org/abs/2106.09685) — core PEFT method
- [QLoRA (Dettmers et al., 2023)](https://arxiv.org/abs/2305.14314) — memory-budget training
- [EU AI Act explorer](https://artificialintelligenceact.eu/) — GPAI obligations + dates
- [`krishnaik06/Finetuning-LLM`](https://github.com/krishnaik06/Finetuning-LLM) — pipeline scaffold
<!-- sota:05L10 -->

## Course-level outcomes

By the end you can: decide prompt vs RAG vs fine-tune from evidence; prepare decontaminated, correctly-templated SFT data; run LoRA and QLoRA under a memory budget; align with DPO/ORPO/KTO/SimPO chosen by data shape; use RFT with verifiable rewards and distillation where they beat SFT; gate every fine-tune on a multi-axis regression suite with a validated judge; and serve quantized multi-LoRA adapters under an SLA that proves the economic case — carrying a reusable adaptation harness into Subject 06's reasoning-RL.

## Skills produced (reused program-wide)
`$adaptation-decision` · `$sft-data-prep` · `$lora-trainer` · `$qlora-trainer` · `$preference-tuner` · `$preference-method-selector` · `$verifiable-rft` · `$finetune-regression` · `$adapter-serving` · `$adaptation-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `krishnaik06/Finetuning-LLM` — runnable SFT / LoRA / QLoRA notebooks to anchor the PEFT weeks — Lectures 3–4
- `mlabonne/llm-course` — LLM roadmap with SFT, DPO, and quantization Colabs — Lectures 1, 5–6
- `VizuaraAI/pharma-slm` — a full domain SLM pipeline (data → train → eval) on a ~350M model — Lectures 2, 10

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **SLM local assistant** — a quantized/distilled on-device assistant with a latency/cost eval — *Lecture 9*
- **Synthetic-data audit** — real+synthetic vs real-only training with an artifact / model-collapse check — *Lecture 2*



# Part D — Reasoning Models & Test-Time Compute

**Track:** Specialization · **Altitude:** Engineer → Specialist · **Length:** 10 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 02 (transformers, training loops), Subject 05 (SFT, LoRA/QLoRA, DPO, and especially the `$verifiable-rft` GRPO bridge and the regression-gate discipline). You can rent a multi-GPU box, read a reward curve, and you treat "the demo looks smart" as a claim to be falsified.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop, applied to reasoning. The course spine: **reasoning is compute you spend at inference and skill you instill with verifiable reward — both must be measured against a baseline and audited for cheating (reward hacking, eval gaming, unfaithful chains).** You will exhaust prompting-based test-time compute before training, and you will reproduce a small reasoning-RL run that *moves a real math metric*, not a vibe.

**Course anchor case (carried all 10 weeks):** *MathTutor-R* — take a small open base (7–8B, Qwen 3 / Llama 4 class) from weak chain-of-thought to a measurably stronger math reasoner via test-time compute *then* GRPO with verifiable rewards, tracked on **GSM8K** and a **MATH** subset. A second case, *DeepResearch-lite* — a tool-using search/deep-research agent for long-horizon questions — anchors the agentic-reasoning weeks. Every technique lands on these so gains are comparable week to week.

**What you leave with:** a `reason/` repo containing a test-time-compute toolkit (CoT, self-consistency, ReAct, best-of-N with a verifier), a working **GRPO** training loop (TRL/veRL) with verifiable rewards, a reward/verifier suite, reasoning-eval harnesses (AIME/GPQA/ARC-AGI-style + GSM8K/MATH) with contamination control and chain-faithfulness auditing, five+ reusable skills, and an evidence log proving each step beat the prior baseline — not a folder of clever transcripts.

---


## Course-level Assessment & grading (weights sum to 100%)

| Component | Weight | What it covers |
|-----------|-------:|----------------|
| Weekly labs (Weeks 1–9) | 55% | Per-week build + evidence (weights per week below) |
| Midterm reproduction audit (after Week 6) | 10% | A written audit of your GRPO run: does the reward curve correspond to a real eval gain, and is it reward-hacked? |
| Capstone reasoning-RL run (Week 10) | 25% | A small reasoning-RL run on math that beats the SFT/base baseline + evidence packet |
| Reading responses & critique (continuous) | 10% | 1 paper response/week + one peer reproduction-audit |

Per-week lab weights (the 55%): W1 5 · W2 6 · W3 6 · W4 7 · W5 7 · W6 7 · W7 6 · W8 6 · W9 5 = **55%**.

## Tooling & environment (June 2026)

- **Python** 3.12, `uv`, seeded everything; **Weights & Biases**/Trackio for reward + eval curves.
- **RL training:** **TRL** 0.14+ (`GRPOTrainer`), **veRL** (volcengine, scalable GRPO/PPO), **OpenRLHF** as alternatives; **Unsloth** GRPO fast-path for single-GPU.
- **Rollout/inference:** **vLLM** 0.7+ (fast generation for RL rollouts), **SGLang**; tensor/data parallel via `accelerate`/FSDP for the bigger runs.
- **Verifiers:** `math-verify` / `sympy` for math equivalence; sandboxed code-exec (e.g., a restricted subprocess / `e2b`) for code rewards.
- **Eval:** `lm-evaluation-harness`, **Inspect AI**, custom AIME/GPQA/ARC-AGI runners; `LiveBench`/contamination-aware sets.
- **Agents:** LangGraph / OpenAI Agents SDK / Claude Agent SDK for ReAct + deep-research; a search tool (Tavily/Exa/Brave) + a code tool.
- **Models:** open bases Qwen 3 (8B/32B), Llama 4, DeepSeek-R1-distill checkpoints as references; frontier reasoning models (o-series / Claude extended-thinking / Gemini) as comparison ceilings and judges. **Hardware:** 2–8× 48–80GB GPUs for the GRPO runs (or rented bursts).

---

## Week 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** measure how much plain chain-of-thought prompting moves MathTutor-R's GSM8K accuracy over direct answering — the first "test-time compute" lever, for free.

### Learning goals
- Explain chain-of-thought (CoT): why generating intermediate steps raises accuracy on multi-step problems, and where it doesn't help.
- Distinguish *train-time* compute (pretraining/RL) from *test-time* (inference) compute, and frame reasoning as spending the latter.
- Build the GSM8K/MATH eval harness with exact-answer verification and contamination awareness — the spine of the course.
- Establish the baseline numbers every later week must beat.

### Concept map
- **Chain-of-thought.** *Idea:* prompt the model to "think step by step," producing reasoning tokens before the answer. *Plain English:* showing work lets the model decompose hard problems instead of guessing in one shot. *Code mapping:* a prompt suffix + an answer extractor (`#### <num>`). *Common mistake:* CoT on tasks it doesn't help (simple lookup) and *trusting* the chain as an explanation (Week 9: chains can be unfaithful).
- **Test-time compute.** *Formula (framing):* `accuracy = f(tokens_spent_at_inference)` — more reasoning tokens / more samples can raise accuracy up to a point. *Plain English:* you can buy correctness with inference compute, not just bigger weights. Where it matters: this is the whole field. Common mistake: assuming only bigger models help.
- **Verifiable eval.** *Idea:* math answers are checkable (`math_verify(pred, gold)`), so eval is objective. *Plain English:* no judge needed for the final number — extract and compare. Common mistake: brittle answer extraction inflating/deflating scores.
- **Contamination.** Why it matters: GSM8K/MATH may be in pretraining; a high score can be memorization. Common mistake: no contamination check, no held-out/fresh set.

### Hands-on build
- `eval_math.py`: GSM8K + a 500-problem MATH subset; direct-answer vs CoT prompting; robust answer extraction + `math-verify`; report accuracy and tokens/problem.
- Add a contamination probe (n-gram overlap with the model's known training sets where possible; or use a fresh/held-out set).
- **Deliverable:** `evidence/week01-baseline.md` with direct vs CoT accuracy, tokens spent, and a contamination note. **Acceptance:** baseline accuracies are reproducible from a seed, answer extraction is validated on 20 hand-checked samples, and the CoT-vs-direct lift is reported with token cost.

▶ **Practical project:** `mlabonne/llm-course` — use its evaluation notebooks to build the GSM8K/MATH direct-vs-CoT baseline with token cost and a contamination note.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install math-verify datasets`; a small open base via API/vLLM.
2. **Data:** GSM8K + a 500-problem MATH subset.
3. **Build:** `eval_math.py` — direct vs CoT prompting, robust `extract_answer` (`####` / `\boxed{}`), `math-verify`.
4. **Run:** report accuracy + tokens/problem; add a contamination probe (n-gram overlap / fresh set).
5. **Eval:** validate the extractor on 20 hand-checked samples.
6. **Ship:** `evidence/week01-baseline.md` direct-vs-CoT + tokens + contamination note.
- **Artifact:** the eval-harness notebook + frozen baseline.
- **Use `$reasoning-eval`:** measure accuracy with objective verification, token cost, and contamination awareness.
- **Done when:** baselines reproducible from seed; extractor validated on samples; CoT-vs-direct lift reported with token cost.
- **Stretch:** add a fresh AIME-2025 slice and check the contamination gap.

### Harness / reusable skill — `$reasoning-eval`
- **Purpose:** measure reasoning accuracy with objective verification, token cost, and contamination awareness — the baseline everything is judged against.
- **Inputs:** a model + a math/reasoning set + an answer verifier.
- **Required outputs:** accuracy, tokens/problem, extraction-validation note, and a contamination flag.
- **Minimal workflow:** prompt → generate → extract → verify → tabulate → flag contamination.
- **Evidence artifact:** `evidence/week01-baseline.md`.

### Common failure modes
- **Brittle extraction** → correct answers scored wrong. *Fix:* validate the extractor on hand-checked samples.
- **No baseline** → later RL "gains" are unfalsifiable. *Fix:* freeze direct + CoT baselines on day one.
- **Contamination blindness** → memorization mistaken for reasoning. *Fix:* probe overlap / keep a fresh set.
- **Ignoring token cost** → "CoT is better" without the compute it spent. *Fix:* always report tokens/problem.

### Evidence artifact
`evidence/week01-baseline.md` (direct vs CoT accuracy + tokens + extraction validation + contamination note).

### Skill sink-in
Predict the GSM8K accuracy lift from CoT over direct answering, and the token-cost multiple. Measure both. Record the gap and your updated mental model of "free" reasoning.

### Dataset(s)
- **GSM8K** — `huggingface.co/datasets/openai/gsm8k`, 8.5k grade-school math problems, MIT license.
- **MATH** — `huggingface.co/datasets/hendrycks/competition_math` (or the MATH-500 subset `huggingface.co/datasets/HuggingFaceH4/MATH-500`), competition problems, MIT license.

### Code stub
```python
from math_verify import parse, verify

def extract_answer(text: str) -> str:
    # GSM8K convention: answer after '####'; MATH: \boxed{...}
    if "####" in text: return text.split("####")[-1].strip()
    return text.split("\\boxed{")[-1].split("}")[0] if "\\boxed{" in text else ""

def eval_set(model, problems, cot=True) -> dict:
    correct, toks = 0, 0
    for p in problems:
        prompt = p["question"] + ("\nThink step by step." if cot else "")
        out = model.generate(prompt)
        toks += len(out.split())
        if verify(parse(p["answer"]), parse(extract_answer(out))): correct += 1
    return {"acc": correct/len(problems), "tokens_per_q": toks/len(problems)}
# TODO: validate extract_answer on 20 hand-checked samples before trusting acc
```

### Graded rubric (Week 1 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Verified eval; extractor validated on samples | Brittle extraction, unchecked |
| Evidence | Direct vs CoT + tokens + contamination note | Single accuracy number |
| Reasoning | Names where CoT helps/doesn't + token cost | "CoT is better" |
| Reproducibility | Seeded, frozen sets | Non-deterministic |

### Assessment weight
**5%** of course grade.

### Reading list
- Wei et al., "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models," NeurIPS 2022.
- Kojima et al., "Large Language Models are Zero-Shot Reasoners" ("Let's think step by step"), NeurIPS 2022.
- Cobbe et al., "Training Verifiers to Solve Math Word Problems" (GSM8K), 2021.
- Hendrycks et al., "Measuring Mathematical Problem Solving With the MATH Dataset," NeurIPS 2021.

---

### State of the Art (June 2026)
- Tunable **thinking-effort** is now a product control: Claude Opus 4.8 adaptive thinking, GPT-5.5 router to "GPT-5 thinking," Gemini 3.1 Low/Med/High dial.
- Framing shift: reasoning = **test-time compute you spend**, measured in tokens vs accuracy — not just bigger weights.
- Verifiable math eval (GSM8K/MATH with `math-verify`) + contamination probes is the honest baseline.
- Frontier reasoning ceilings for comparison: Gemini 3.1 GPQA-Diamond 94.3%, ARC-AGI-2 77.1% — a target to measure against, not to expect.

**More detail:** CoT raises multi-step accuracy by externalizing reasoning, but the chain isn't a faithful explanation; GSM8K/MATH are answer-checkable with `math-verify`, so report accuracy with tokens/problem and a contamination probe.

**References & links:**
- [Chain-of-Thought Prompting (Wei et al., 2022)](https://arxiv.org/abs/2201.11903) — reasoning steps raise accuracy
- [Zero-Shot Reasoners (Kojima et al., 2022)](https://arxiv.org/abs/2205.11916) — "let's think step by step"
- [GSM8K (Cobbe et al., 2021)](https://arxiv.org/abs/2110.14168) — grade-school math
- [MATH dataset (Hendrycks et al., 2021)](https://arxiv.org/abs/2103.03874) — competition math
- [`huggingface/Math-Verify`](https://github.com/huggingface/Math-Verify) — robust answer verification
- [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course) — eval notebooks
<!-- sota:06L01 -->

## Week 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve

**Altitude:** Engineer · **Anchor case:** spend more inference compute on MathTutor-R via sampling many chains and aggregating — and plot accuracy vs samples to see the scaling curve.

### Learning goals
- Implement self-consistency (sample N chains, majority-vote the answer) and best-of-N (pick by a scorer).
- Plot and interpret the test-time scaling curve: accuracy vs number of samples / tokens, and its diminishing returns.
- Compare parallel sampling vs longer single chains as two ways to spend compute.
- Quantify the compute/accuracy tradeoff and find the efficient operating point.

### Concept map
- **Self-consistency.** *Idea:* sample N diverse CoT chains, take the majority-vote final answer. *Formula:* `ŷ = mode({extract(chainᵢ)})`. *Plain English:* ask the same question many ways and trust the consensus. *Code mapping:* generate with temperature, `Counter(answers).most_common(1)`. *Common mistake:* temperature 0 (no diversity → no benefit).
- **Best-of-N.** *Idea:* sample N, pick the best by a scorer (a verifier or reward model). *Plain English:* generate many, keep the one a judge likes. *Common mistake:* picking by length/fluency instead of a correctness-correlated scorer.
- **Test-time scaling curve.** *Formula (framing):* `acc(N) ≈ a − b·N^{−c}` — rising, concave, with a ceiling. *Plain English:* each extra sample helps less; there's a knee. Where it matters: budgeting inference. Common mistake: scaling N forever past diminishing returns.
- **Parallel vs sequential compute.** Plain English: N short chains (vote) vs one long chain (more thinking) — different bets. Common mistake: assuming more tokens always = better without testing which axis pays off.

### Hands-on build
- `self_consistency.py`: sample N∈{1,2,4,8,16,32} chains, majority-vote; `best_of_n.py`: score with a simple verifier.
- Plot accuracy vs N (and vs total tokens) for GSM8K/MATH; find the efficient operating point.
- **Deliverable:** `evidence/week02-scaling/` with the scaling-curve plot + the chosen N with its compute cost. **Acceptance:** the curve shows the expected concave shape; you identify the knee and justify an operating N by accuracy-per-token, beating Week 1 single-CoT at a stated cost.

▶ **Practical project:** `mlabonne/llm-course` — extend the eval loop with self-consistency + best-of-N and plot the test-time scaling curve (accuracy vs N and tokens).

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; reuse the Week-1 harness; temperature sampling enabled.
2. **Data:** GSM8K + MATH-500 (+ AIME for genuinely hard problems).
3. **Build:** `self_consistency.py` (sample N, majority vote) + `best_of_n.py` (score with a verifier).
4. **Run:** sweep `N ∈ {1,2,4,8,16,32}` at temperature 0.8; log accuracy + total tokens.
5. **Eval:** plot accuracy vs N and vs tokens; mark the knee; pick an operating N by accuracy-per-token.
6. **Ship:** `evidence/week02-scaling/` curve + chosen N + its cost.
- **Artifact:** the scaling-curve notebook + plot.
- **Use `$test-time-scaler`:** find the accuracy-per-compute operating point for parallel vs longer chains.
- **Done when:** concave curve in N and tokens; knee identified; operating N justified by accuracy-per-token, beating Week-1 single-CoT.
- **Stretch:** compare N short chains (vote) vs one long chain at an equal token budget.

### Harness / reusable skill — `$test-time-scaler`
- **Purpose:** find the accuracy-per-compute operating point for parallel sampling vs longer chains.
- **Inputs:** a model + an eval set + an aggregation method (vote / best-of-N).
- **Required outputs:** accuracy-vs-N (and vs tokens) curve, the knee, and a recommended budget with its cost.
- **Evidence artifact:** `evidence/week02-scaling/curve.md`.

### Common failure modes
- **Temperature 0 self-consistency** → identical samples, zero gain. *Fix:* sample with temperature/top-p.
- **Scaling past the knee** → paying lots for nothing. *Fix:* report accuracy-per-token; stop at diminishing returns.
- **Bad best-of-N scorer** → picks fluent-wrong. *Fix:* use a correctness-correlated verifier (Week 3).
- **Token-cost amnesia** → claiming wins without the compute. *Fix:* x-axis in tokens/$ , not just N.

### Evidence artifact
`evidence/week02-scaling/` (scaling curve, knee identification, operating-point justification).

### Skill sink-in
Predict the N where GSM8K accuracy gains flatten. Plot the curve. Record the actual knee and the accuracy-per-token you'd buy in production.

### Dataset(s)
- **GSM8K + MATH-500** (reused) for the scaling curves.
- **AIME 2024/2025** — `huggingface.co/datasets/Maxwell-Jia/AIME_2024` (and 2025), small hard competition sets, research license; to see scaling on genuinely hard problems.

### Code stub
```python
from collections import Counter

def self_consistency(model, question, n=16, temp=0.8):
    chains = [model.generate(question + "\nThink step by step.",
                             temperature=temp) for _ in range(n)]
    answers = [extract_answer(c) for c in chains]
    return Counter(answers).most_common(1)[0][0]      # majority vote

def scaling_curve(model, problems, Ns=(1,2,4,8,16,32)):
    return {n: eval_with(lambda q: self_consistency(model, q, n), problems)
            for n in Ns}                              # acc vs N (and log tokens)
# TODO: plot acc vs N and acc vs total_tokens; mark the knee
```

### Graded rubric (Week 2 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Self-consistency + best-of-N both run with diversity | Temp 0 / no aggregation |
| Evidence | Curve in N and tokens; knee marked | Single N tried |
| Reasoning | Operating point by accuracy-per-token | "Used N=32 because more" |
| Reproducibility | Seeded sampling, scripted sweep | Ad-hoc |

### Assessment weight
**6%** of course grade.

### Reading list
- Wang et al., "Self-Consistency Improves Chain of Thought Reasoning in Language Models," ICLR 2023.
- Snell et al., "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters," 2024.
- Brown et al., "Large Language Monkeys: Scaling Inference Compute with Repeated Sampling," 2024.
- Wu et al., "Inference Scaling Laws: An Empirical Analysis of Compute-Optimal Inference," 2024.

---

### State of the Art (June 2026)
- Test-time scaling = parallel sampling + sequential deliberation; **verifier models** (RL-trained critics) aggregate samples — RL^V reports ~1.2–1.6× lifts.
- Compute-optimal inference ("Large Language Monkeys," Snell et al.) — find the knee and report accuracy-per-token, not raw N.
- Long-deliberation models internalize some self-consistency, but external best-of-N still wins with a good verifier.
- AIME / MATH-500 are the standard hard sets for plotting scaling curves.

**References & links:**
- [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course)
- [Wang et al., 2022 - Self-Consistency](https://arxiv.org/abs/2203.11171)


<!-- sota:06L02 -->

## Week 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome

**Altitude:** Engineer → Specialist · **Anchor case:** build the *scorer* that makes best-of-N and (later) RL work — an outcome verifier for math and a process reward model that scores each step.

### Learning goals
- Distinguish outcome reward models (ORM, score the final answer) from process reward models (PRM, score each step).
- Build a verifiable outcome reward for math (`math-verify`) and contrast it with a learned reward model.
- Use a PRM/verifier to guide best-of-N and tree search; measure the lift over majority vote.
- Understand the data cost and reward-hacking surface of each.

### Concept map
- **Outcome reward (ORM / verifier).** *Idea:* `r = 1[final answer correct]`. *Plain English:* did it get the right answer, regardless of how. *Code mapping:* `math_verify(pred, gold)`. *Common mistake:* sparse signal — no credit for a mostly-right chain with an arithmetic slip.
- **Process reward (PRM).** *Idea:* score each reasoning step's validity; reward partial progress. *Plain English:* grade the working, not just the answer. *Shapes:* per-step scalar over a chain. *Common mistake:* PRMs are expensive to label (step-level data) and can be gamed by plausible-looking wrong steps.
- **Verifier-guided selection.** *Idea:* use the scorer to pick among samples (best-of-N) or guide search (Week 4). *Plain English:* a good verifier turns many tries into reliable answers. Where it matters: it's the engine of test-time scaling and RL reward. Common mistake: a verifier weakly correlated with correctness → selection adds noise.
- **Verifiable vs learned reward.** When the answer is checkable (math, code, format), prefer a verifier; learned RMs are for fuzzy goals (helpfulness). Common mistake: training an RM where `math-verify` suffices.

### Hands-on build
- `verifier.py`: a robust math outcome verifier; `prm.py`: use an off-the-shelf PRM (e.g., a Math-Shepherd-style model) to score steps.
- Compare answer selection: majority vote vs ORM-best-of-N vs PRM-weighted on GSM8K/MATH.
- **Deliverable:** `evidence/week03-verifiers/` with the selection-method comparison + a reward-hacking probe (can you find chains the verifier mis-scores?). **Acceptance:** verifier-guided selection beats plain majority vote, and you report at least one way each scorer can be fooled.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — build an outcome verifier + PRM and compare majority-vote / ORM / PRM selection on MATH.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install math-verify sympy`; an off-the-shelf PRM (Math-Shepherd-style).
2. **Data:** GSM8K/MATH + PRM800K/Math-Shepherd for process understanding.
3. **Build:** `verifier.py` (robust outcome reward) + `prm.py` (per-step scoring, min/mean over steps).
4. **Run:** compare majority-vote vs ORM-best-of-N vs PRM-weighted selection.
5. **Eval:** report selection lift over majority + a reward-hacking probe (chains the verifier mis-scores).
6. **Ship:** `evidence/week03-verifiers/` comparison + hacking probe.
- **Artifact:** the verifier + PRM notebook + selection comparison.
- **Use `$verifier-suite`:** build and validate the reward signal RL and best-of-N depend on, incl. its hacking surface.
- **Done when:** verifier validated vs ground truth; selection beats majority vote; ≥1 way each scorer is fooled reported.
- **Stretch:** train a tiny outcome verifier and compare to `math-verify`.

### Harness / reusable skill — `$verifier-suite`
- **Purpose:** build and validate the reward signal (outcome and/or process) that RL and best-of-N depend on, including its hacking surface.
- **Inputs:** a task with checkable or step-labeled correctness.
- **Required outputs:** verifier accuracy (vs human), selection lift over majority vote, and a documented reward-hacking probe.
- **Evidence artifact:** `evidence/week03-verifiers/report.md`.

### Common failure modes
- **Weak verifier** → selection adds noise, RL learns garbage. *Fix:* measure verifier vs ground truth before trusting it.
- **PRM label cost ignored** → can't build the data. *Fix:* use auto-labeled PRMs or stick to outcome rewards.
- **Reward hacking unexamined** → model games the scorer. *Fix:* probe for mis-scored chains; harden the checker.
- **Learned RM where verifier suffices** → unnecessary complexity. *Fix:* prefer verifiable reward when answers are checkable.

### Evidence artifact
`evidence/week03-verifiers/` (verifier validation, selection comparison, reward-hacking probe).

### Skill sink-in
Predict whether a PRM beats a simple outcome verifier for best-of-N on MATH. Measure. Record the lift and the easiest way you found to fool each scorer.

### Dataset(s)
- **PRM800K** — `huggingface.co/datasets/HuggingFaceH4/prm800k` style step-level labels (from Lightman et al.), research license; for PRM understanding.
- **Math-Shepherd** reference (`huggingface.co/datasets/peiyi9979/Math-Shepherd`) for auto-labeled process supervision; GSM8K/MATH for selection eval.

### Code stub
```python
from math_verify import parse, verify

def outcome_reward(pred: str, gold: str) -> float:
    return 1.0 if verify(parse(gold), parse(extract_answer(pred))) else 0.0

def best_of_n(model, q, n, scorer):        # scorer: ORM or PRM
    cands = [model.generate(q, temperature=0.8) for _ in range(n)]
    return max(cands, key=lambda c: scorer(c, q))

def prm_score(chain: str, prm) -> float:   # process reward = min/mean step score
    steps = chain.split("\n")
    return min(prm.score_step(s) for s in steps if s.strip())
# TODO: compare majority-vote vs best_of_n(ORM) vs best_of_n(PRM); probe hacking
```

### Graded rubric (Week 3 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Verifier validated; PRM + ORM both wired | Unvalidated scorer |
| Evidence | Selection lift over majority + hacking probe | No comparison |
| Reasoning | ORM vs PRM tradeoff articulated | "Used PRM, it's fancier" |
| Reproducibility | Scripted comparison, seeded | Manual |

### Assessment weight
**6%** of course grade.

### Reading list
- Lightman et al., "Let's Verify Step by Step" (PRM800K), ICLR 2024.
- Cobbe et al., "Training Verifiers to Solve Math Word Problems," 2021 (ORM/verifier origin).
- Wang et al., "Math-Shepherd: Verify and Reinforce LLMs Step-by-step without Human Annotations," ACL 2024.
- Uesato et al., "Solving Math Word Problems with Process- and Outcome-Based Feedback," 2022.

---

### State of the Art (June 2026)
- **Verifier models** are the 2026 lever: RL-trained critics score/aggregate samples; prefer verifiable reward over a learned RM where the answer is checkable.
- PRM (Math-Shepherd / PRM800K lineage) vs ORM tradeoff; auto-labeled process supervision cuts step-label cost.
- **Reward-hacking / verifier-gaming** is an active ICLR-2026 thread — probe for mis-scored chains and harden the checker.
- `math-verify` / `sympy` + sandboxed code-exec (`e2b`) are the workhorse outcome verifiers.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)


<!-- sota:06L03 -->

## Week 4 — ReAct, Tool Use & Search: Reasoning That Acts

**Altitude:** Engineer → Specialist · **Anchor case:** DeepResearch-lite — a ReAct agent that interleaves thinking with tool calls (calculator, code, web search) to answer questions a single chain can't.

### Learning goals
- Implement ReAct (interleaved reasoning + actions + observations) and explain why externalizing computation beats "doing math in the head."
- Add tools: a code executor (for exact arithmetic/algorithms) and a search tool (for fresh facts), with guardrails.
- Build a basic deep-research loop: plan → search → read → synthesize → cite, with a step/cost budget.
- Evaluate tool-augmented reasoning vs pure CoT on tasks needing computation or retrieval.

### Concept map
- **ReAct.** *Idea:* alternate Thought → Action → Observation until an answer. *Plain English:* think, do something in the world, observe, repeat — instead of one long guess. *Code mapping:* a loop that parses an action, runs a tool, appends the observation. *Common mistake:* no stop condition / step budget → loops or runaway cost.
- **Tool-augmented computation.** *Idea:* offload exact steps (arithmetic, lookups) to tools the model is bad at. *Plain English:* use a calculator instead of hoping the model multiplies right. Common mistake: letting the model "compute" in tokens when a tool would be exact.
- **Deep research.** *Idea:* multi-step retrieve-and-reason over many sources with synthesis + citations. *Plain English:* an analyst that follows leads and cites them. Common mistake: no budget, no source verification → expensive, ungrounded essays.
- **Reasoning + retrieval boundary.** Why it matters: connects to Subject 04 — reasoning decides *what* to retrieve next. Common mistake: treating retrieval as one-shot rather than reasoning-driven.

### Hands-on build
- `react_agent.py` (LangGraph/Agents SDK): Thought/Action/Observation loop with a code tool and a search tool, a step budget, and a cost cap.
- `deep_research.py`: plan→search→read→synthesize with citations on a set of long-horizon questions.
- Evaluate tool-augmented vs CoT-only on a computation-heavy and a fresh-facts set.
- **Deliverable:** `evidence/week04-react/` with the tool-vs-CoT comparison + a trace gallery (good + failed loops). **Acceptance:** tool use beats CoT on the computation/fresh-facts tasks, every run respects the step/cost budget, and you show a failure trace and its fix.

▶ **Practical project:** `krishnaik06/Agentic-LanggraphCrash-course` — build a bounded ReAct + code/search agent and beat CoT-only on computation-heavy and fresh-facts questions.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local; `pip install langgraph`; a search tool (Tavily/Exa) + a code-exec tool.
2. **Data:** GSM8K-hard (computation) + GAIA / HotpotQA (fresh-facts, multi-hop).
3. **Build:** `react_agent.py` — Thought/Action/Observation loop with a code tool, search tool, step budget, cost cap; `deep_research.py` (plan→search→read→synthesize→cite).
4. **Run:** tool-augmented vs CoT-only on both sets; respect the budget.
5. **Eval:** `evidence/week04-react/` tool-vs-CoT comparison + a trace gallery (good + failed) + a failure fix.
6. **Ship:** commit traces + budget logs.
- **Artifact:** the bounded ReAct/deep-research agent + trace gallery.
- **Use `$reasoning-agent`:** prove tools beat pure CoT where computation/freshness matters, within budget.
- **Done when:** tools beat CoT on computation/fresh-facts; every run respects the step/cost budget; a failure trace + fix shown.
- **Stretch:** expose the code tool over MCP and re-run.

### Harness / reusable skill — `$reasoning-agent`
- **Purpose:** build a bounded ReAct/deep-research loop and prove tools beat pure CoT where computation/freshness matters.
- **Inputs:** a task + a tool set + a step/cost budget.
- **Required outputs:** tool-vs-CoT eval, budget adherence, a trace gallery, and a failure-mode fix.
- **Evidence artifact:** `evidence/week04-react/report.md`.

### Common failure modes
- **No budget** → infinite loops, cost blowups. *Fix:* hard step + cost caps with a graceful stop.
- **In-head computation** → arithmetic errors a tool would avoid. *Fix:* route exact steps to a code tool.
- **Ungrounded research** → fluent, uncited, possibly wrong. *Fix:* require citations; verify sources.
- **Tool-call parsing brittleness** → malformed actions crash the loop. *Fix:* structured tool-calling + validation.

### Evidence artifact
`evidence/week04-react/` (tool-vs-CoT comparison, budget logs, trace gallery, failure-fix note).

### Skill sink-in
Predict how much a code tool improves accuracy on computation-heavy problems over CoT-only. Measure. Record the lift and the failure trace that surprised you.

### Dataset(s)
- **GSM8K (hard subset)** + a computation-heavy set for tool benefit.
- **GAIA** — `huggingface.co/datasets/gaia-benchmark/GAIA`, real-world tool-use/agent questions, research license; and **HotpotQA** (Subject 04) for multi-hop deep research.

### Code stub
```python
def react(model, question, tools, max_steps=8, max_cost=0.5):
    scratch, cost = "", 0.0
    for _ in range(max_steps):
        out = model.generate(f"{question}\n{scratch}\nThought:")
        cost += estimate_cost(out)
        if cost > max_cost: break                      # budget guard
        if "Final Answer:" in out:
            return out.split("Final Answer:")[-1].strip()
        action, arg = parse_action(out)                # e.g., (search|python, arg)
        obs = tools[action](arg)                       # exact tool execution
        scratch += f"{out}\nObservation: {obs}\n"
    return "stopped: budget/steps exceeded"
# TODO: compare react(...) vs CoT-only; save good + failed traces
```

### Graded rubric (Week 4 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | ReAct + tools + budget; deep-research cites | No budget / no tools |
| Evidence | Tool-vs-CoT + trace gallery + budget logs | Demo only |
| Reasoning | Shows where tools beat CoT and why | "Agent is better" |
| Reproducibility | Seeded, scripted, traced | Manual runs |

### Assessment weight
**7%** of course grade.

### Reading list
- Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," ICLR 2023.
- Schick et al., "Toolformer: Language Models Can Teach Themselves to Use Tools," NeurIPS 2023.
- Mialon et al., "GAIA: A Benchmark for General AI Assistants," ICLR 2024.
- Yao et al., "Tree of Thoughts: Deliberate Problem Solving with Large Language Models," NeurIPS 2023.

---

### State of the Art (June 2026)
- **MCP** is the de-facto tool/data standard (donated to the Linux Foundation Agentic AI Foundation; new 2026-07-28 spec) — agents call tools over MCP; **A2A** handles agent-to-agent delegation.
- Agent SDKs: **LangGraph** (durable checkpointing), **OpenAI Agents SDK** (handoffs), **Claude Agent SDK** (subagents, computer-use), **Google ADK** (native A2A).
- Deep-research agents (plan→search→read→synthesize→cite) with step/cost budgets; computer-use / browser agents are mainstream.
- Evaluated on **GAIA / τ²-bench** (dual-control, pass^k) — full trajectory + safety, not just the final answer.

**References & links:**
- [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course)
- [Model Context Protocol docs](https://modelcontextprotocol.io)
- [LangGraph (durable agents)](https://github.com/langchain-ai/langgraph)


<!-- sota:06L04 -->

## Week 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch

**Altitude:** Specialist · **Anchor case:** train MathTutor-R with **GRPO** and a verifiable reward — reproduce, at small scale, the core of the DeepSeek-R1 recipe and watch reasoning emerge from RL.

### Learning goals
- Explain RL from verifiable rewards (RLVR): use a checker, not a learned reward model, as the RL signal.
- Derive and implement GRPO (Group Relative Policy Optimization): why it drops the value/critic network and uses group-relative advantages.
- Run a real (small) GRPO loop on GSM8K/MATH with TRL/veRL; read the reward curve *and* the held-out eval together.
- Understand the R1-Zero vs R1 distinction (pure RL vs SFT-cold-start + RL).

### Concept map
- **RLVR.** *Idea:* reward = output of a verifier (`1` if correct). *Plain English:* RL where the environment grades you objectively. Where it matters: scalable, un-hackable-ish reasoning training. Common mistake: a reward that leaks (format-only reward → format-gaming).
- **GRPO.** *Formula:* for a group of `G` sampled outputs per prompt, advantage `Â_i = (r_i − mean(r))/std(r)`; objective `J = E[ min(ρ_i Â_i, clip(ρ_i,1±ε) Â_i) ] − β·KL(π_θ‖π_ref)`, with `ρ_i = π_θ/π_old`. *Symbols:* `r_i` reward of sample `i`, group baseline = group mean. *Plain English:* sample several answers, reward the above-average ones, penalize below-average — no separate value network needed. *Code mapping:* TRL `GRPOTrainer(reward_funcs=[...])`. *Common mistake:* tiny group size → noisy advantages; no KL anchor → drift/collapse.
- **Why no critic.** *Idea:* the group mean replaces a learned value baseline, cutting memory/complexity. Where it matters: GRPO fits on far less hardware than PPO. Common mistake: assuming it's "PPO but worse" — it's a deliberate simplification that works for verifiable tasks.
- **R1-Zero vs R1.** R1-Zero: pure RL from base (reasoning emerges, but messy/unreadable). R1: small SFT cold-start for readability, then RL. Common mistake: expecting clean chains from pure RL.

### Hands-on build
- `train_grpo.py`: GRPO on an 8B base/SFT checkpoint with `outcome_reward` (+ a light format reward); vLLM for fast rollouts; log reward, KL, response length, and held-out GSM8K/MATH every K steps.
- Watch for the "aha" behaviors (longer chains, self-correction) and for reward hacking.
- **Deliverable:** `evidence/week05-grpo/` with reward+eval co-plots, length dynamics, and a sample gallery (before/after). **Acceptance:** held-out accuracy rises with reward (not just reward going up), KL stays bounded, and you show the reward isn't being gamed.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — run its hands-on GRPO loop with a verifiable reward and co-plot reward vs held-out GSM8K/MATH accuracy.

**Build it — step by step (AI-builder lab):**
1. **Setup:** multi-GPU box or Unsloth single-GPU; `pip install trl vllm`; an 8B base/SFT checkpoint.
2. **Data:** GSM8K/MATH training prompts with verifiable answers (+ DeepScaleR pool).
3. **Build:** `train_grpo.py` — `GRPOTrainer(reward_funcs=[reward_correct], num_generations=8, beta=0.04, use_vllm=True)`.
4. **Run:** log reward, KL, response length, and held-out GSM8K/MATH every K steps.
5. **Eval:** co-plot reward vs held-out accuracy; audit samples for reward hacking + "aha" behaviors.
6. **Ship:** `evidence/week05-grpo/` co-plots + KL/length + before/after gallery.
- **Artifact:** the GRPO loop + reward/eval co-plot.
- **Use `$grpo-trainer`:** run a verifiable-reward GRPO loop validated against held-out eval and audited for hacking.
- **Done when:** held-out accuracy rises with reward (not just reward); KL bounded; reward shown not gamed.
- **Stretch:** try R1-Zero (pure RL from base) and compare chain readability.

### Harness / reusable skill — `$grpo-trainer`
- **Purpose:** run a verifiable-reward GRPO loop where the reward curve is validated against a held-out eval and audited for hacking.
- **Inputs:** a base/SFT model + a verifier + prompts.
- **Required outputs:** reward + held-out-eval co-plot, KL/length traces, group-size/`β` choices, and a reward-hacking audit.
- **Evidence artifact:** `evidence/week05-grpo/report.md`.

### Common failure modes
- **Reward up, eval flat** → reward hacking or metric mismatch. *Fix:* always co-plot held-out eval; audit samples.
- **KL blow-up / collapse** → drift, repetition, gibberish. *Fix:* tune `β`, clip, group size; watch length.
- **Format-only reward** → correct-looking, wrong answers. *Fix:* reward correctness (verifier), not just format.
- **Group too small** → noisy advantages, unstable. *Fix:* adequate `G` (e.g., 8–16) per prompt.

### Evidence artifact
`evidence/week05-grpo/` (reward/eval co-plots, KL+length traces, before/after sample gallery, hacking audit).

### Skill sink-in
Predict whether your reward curve and held-out accuracy will move together. Run the GRPO loop. Record where they diverge — that divergence is reward hacking, and it's the whole lesson.

### Dataset(s)
- **GSM8K + MATH** (training prompts with verifiable answers).
- **DeepScaleR / Big-Math-RL** style verifiable-RL prompt sets — e.g., `huggingface.co/datasets/agentica-org/DeepScaleR-Preview-Dataset`, research license; curated for reasoning-RL.

### Code stub
```python
from trl import GRPOTrainer, GRPOConfig

def reward_correct(completions, answer, **kw):     # verifiable RLVR reward
    return [outcome_reward(c, a) for c, a in zip(completions, answer)]

trainer = GRPOTrainer(
    model=sft_or_base,
    reward_funcs=[reward_correct],                 # (+ optional light format reward)
    train_dataset=math_prompts,                    # cols: prompt, answer
    args=GRPOConfig(num_generations=8,             # group size G
                    learning_rate=1e-6, beta=0.04, # KL coefficient
                    max_completion_length=1024,
                    use_vllm=True, bf16=True, logging_steps=5))
trainer.train()
# CO-PLOT mean reward AND held-out GSM8K acc; log KL + mean response length
```

### Graded rubric (Week 5 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | GRPO runs; held-out eval rises with reward | Only reward logged |
| Evidence | Reward/eval co-plot + KL/length + samples | Reward curve alone |
| Reasoning | Explains GRPO advantage/no-critic; R1-Zero vs R1 | Treats it as a black box |
| Reproducibility | Config + seed + hardware logged | Unspecified |

### Assessment weight
**7%** of course grade.

### Reading list
- DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning," 2025.
- Shao et al., "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models" (GRPO), 2024.
- Lambert et al., "Tülu 3 / RLVR: Reinforcement Learning with Verifiable Rewards," 2024–2025.
- Schulman et al., "Proximal Policy Optimization Algorithms," 2017 (the PPO GRPO simplifies).

---

### State of the Art (June 2026)
- **RLVR** has displaced pure RLHF for reasoning post-training; **GRPO** (critic-free, group-relative advantage) is the reference algorithm.
- Reproduction stack: TRL `GRPOTrainer`, **veRL**, OpenRLHF; **vLLM** for fast rollouts; Unsloth single-GPU path.
- R1-Zero vs R1 (pure RL vs SFT cold-start) framing; **DeepSeek V4** (MIT, open) extends the lineage.
- Co-plot reward with held-out eval — reward-up / eval-flat is the canonical reward-hacking tell.

**References & links:**
- [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial)
- [vLLM docs](https://docs.vllm.ai)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [Hugging Face TRL](https://github.com/huggingface/trl)
- [Unsloth (fast QLoRA)](https://github.com/unslothai/unsloth)
- [veRL (RL for LLMs)](https://github.com/volcengine/verl)


<!-- sota:06L05 -->

## Week 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run

**Altitude:** Specialist · **Anchor case:** your Week-5 GRPO run is unstable / length-explodes / plateaus — apply the 2025 fixes (DAPO, Dr.GRPO) and diagnose what each addresses.

### Learning goals
- Diagnose common GRPO pathologies: length bias, entropy collapse, advantage bias, and reward hacking.
- Apply DAPO's techniques (decoupled clip, dynamic sampling, token-level loss, overlong-reward shaping) and Dr.GRPO's bias fixes.
- Tune the knobs (group size, clip range, KL `β`, length penalty) from observed dynamics, not folklore.
- Re-run the reproduction audit: does the stabilized run beat Week-5 on held-out eval per unit compute?

### Concept map
- **Length bias.** *Idea:* GRPO's normalization can reward longer responses regardless of correctness. *Plain English:* the model learns to ramble because length correlates with reward. *Fix:* Dr.GRPO removes the length/std normalization bias; DAPO adds overlong shaping. Common mistake: celebrating longer chains as "more reasoning."
- **Entropy collapse.** *Idea:* the policy becomes over-confident/deterministic, exploration dies. *Plain English:* it stops trying new approaches and plateaus. *Fix:* dynamic sampling (DAPO keeps prompts with reward variance), clip-higher. Common mistake: no entropy/diversity monitoring.
- **DAPO.** *Idea:* Decoupled clip (clip-higher), dynamic sampling (drop all-correct/all-wrong groups), token-level policy gradient loss, overlong reward shaping. *Plain English:* a bundle of fixes that made open GRPO match strong baselines. Common mistake: applying one fix and expecting the whole gain.
- **Dr.GRPO.** *Idea:* removes optimization biases (response-length and question-difficulty normalization) for cleaner advantages. Where it matters: more honest credit assignment. Common mistake: conflating it with DAPO — different fixes for overlapping symptoms.

### Hands-on build
- `train_grpo_v2.py`: add DAPO/Dr.GRPO options to the Week-5 loop; run an ablation (vanilla GRPO vs +Dr.GRPO vs +DAPO) tracking reward, eval, length, and entropy.
- **Deliverable:** `evidence/week06-grpo-fixes/` with the ablation (eval-per-compute, length, entropy) + a diagnosis of which pathology each fix cured. **Acceptance:** at least one stabilization beats vanilla GRPO on held-out eval at equal/less compute, and length/entropy pathologies are shown fixed (not just claimed).

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — add DAPO / Dr.GRPO options to your loop and ablate against vanilla GRPO on eval-per-compute.

**Build it — step by step (AI-builder lab):**
1. **Setup:** the same RL box; extend the Week-5 loop.
2. **Data:** DAPO-Math-17k + GSM8K/MATH held-out.
3. **Build:** `train_grpo_v2.py` — `GRPOConfig(epsilon_high=0.28, loss_type="dr_grpo", mask_truncated_completions=True, scale_rewards=False, beta=0.0)` + dynamic sampling.
4. **Run:** ablate vanilla GRPO vs +Dr.GRPO vs +DAPO; track reward, eval, length, entropy.
5. **Eval:** diagnose which pathology each fix cured; compare eval-per-compute.
6. **Ship:** `evidence/week06-grpo-fixes/` ablation + length/entropy traces.
- **Artifact:** the stabilized GRPO loop + ablation table.
- **Use `$grpo-stabilizer`:** match the right targeted fix (length, entropy, bias) to the observed pathology.
- **Done when:** ≥1 stabilization beats vanilla on held-out at equal/less compute; length/entropy pathologies shown fixed.
- **Stretch:** add overlong-reward shaping and measure the length-distribution shift.

### Harness / reusable skill — `$grpo-stabilizer`
- **Purpose:** diagnose and fix GRPO instabilities (length, entropy, bias) with the right targeted technique.
- **Inputs:** a GRPO run + its dynamics (reward, eval, length, entropy).
- **Required outputs:** a diagnosis per pathology, the fix applied, and the ablation showing the fix worked on held-out eval.
- **Evidence artifact:** `evidence/week06-grpo-fixes/report.md`.

### Common failure modes
- **Length-reward confound** → "more reasoning" is just rambling. *Fix:* Dr.GRPO debias + length-controlled eval.
- **Dead exploration** → early plateau. *Fix:* dynamic sampling, clip-higher, monitor entropy.
- **Cargo-cult fixes** → stacking DAPO+Dr.GRPO blindly. *Fix:* ablate; apply the fix that matches the observed symptom.
- **Compute-unfair comparison** → "better" but used 3× compute. *Fix:* compare eval-per-compute.

### Evidence artifact
`evidence/week06-grpo-fixes/` (ablation table, length/entropy traces, per-pathology diagnosis).

### Skill sink-in
Predict which fix (Dr.GRPO or DAPO) most helps *your* run, based on whether your pathology is length bias or entropy collapse. Ablate. Record whether the diagnosis matched the data.

### Dataset(s)
- **DAPO-Math-17k** — `huggingface.co/datasets/BytedTsinghua-SIA/DAPO-Math-17k`, ~17k verifiable math prompts, research license (the DAPO paper's set).
- **GSM8K/MATH** held-out for the eval-per-compute comparison.

### Code stub
```python
from trl import GRPOConfig

cfg = GRPOConfig(
    num_generations=16,
    epsilon=0.2, epsilon_high=0.28,        # DAPO clip-higher (decoupled clip)
    loss_type="dr_grpo",                   # Dr.GRPO: debiased advantage
    mask_truncated_completions=True,       # don't reward overlong/truncated
    scale_rewards=False,                   # Dr.GRPO: drop std normalization
    beta=0.0,                              # DAPO often drops the KL term
    max_completion_length=2048, use_vllm=True, bf16=True)
# dynamic sampling: filter out prompts whose group is all-correct/all-wrong
# TODO: ablate vanilla vs dr_grpo vs +dapo; track eval/compute, length, entropy
```

### Graded rubric (Week 6 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Stabilization techniques correctly implemented | Misapplied / one only |
| Evidence | Ablation with eval/compute + length + entropy | Reward curve only |
| Reasoning | Diagnosis matches fix to pathology | Stacks everything blindly |
| Reproducibility | Configs + compute budget logged | Unfair/opaque comparison |

### Assessment weight
**7%** of course grade (anchors the 10% reproduction audit).

### Reading list
- Yu et al., "DAPO: An Open-Source LLM Reinforcement Learning System at Scale," 2025.
- Liu et al., "Understanding R1-Zero-Like Training: A Critical Perspective" (Dr.GRPO), 2025.
- Hu et al., "Open-Reasoner-Zero: An Open Source Approach to Scaling Reinforcement Learning," 2025.
- Yue et al., "Does Reinforcement Learning Really Incentivize Reasoning Capacity Beyond the Base Model?" 2025.

---

### State of the Art (June 2026)
- 2025–26 stabilizers: **DAPO** (decoupled clip-higher, dynamic sampling, token-level loss, overlong shaping) and **Dr.GRPO** (length/difficulty debias).
- Length bias + entropy collapse are the named pathologies — monitor entropy and length, and compare eval-per-compute.
- **DAPO-Math-17k** / **DeepScaleR** are the standard verifiable-RL prompt pools.
- "Does RL incentivize reasoning beyond the base model?" (Yue et al. 2025) remains an actively-debated open question.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)


<!-- sota:06L06 -->

## Week 7 — Long-Horizon Reasoning & Self-Improving Agents

**Altitude:** Specialist · **Anchor case:** push DeepResearch-lite to multi-step, long-horizon tasks where credit assignment spans many actions — and let the agent learn from its own trajectories.

### Learning goals
- Explain the long-horizon credit-assignment problem: rewarding a 20-step trajectory where only the end is verifiable.
- Apply RL to multi-step agents (agentic RL): trajectory-level rewards, step budgets, and the SWE-RL / DeepSWE lineage.
- Build a self-improvement loop: generate trajectories → filter by outcome → fine-tune on the wins (rejection sampling / STaR / ReST).
- Evaluate long-horizon agents honestly (partial credit, cost, success-at-budget).

### Concept map
- **Long-horizon credit assignment.** *Idea:* sparse terminal reward over many steps makes it hard to know which action helped. *Plain English:* you only learn if the whole task succeeded, not which move mattered. *Fixes:* process rewards, step verifiers, trajectory filtering. Common mistake: treating it like single-step RLVR.
- **Self-improvement (STaR / ReST / rejection sampling).** *Idea:* sample many solutions, keep the verified-correct ones, SFT on them, repeat. *Formula (loop):* `D' = {(x,y) : verify(y)=1}`; `θ ← SFT(θ, D')`. *Plain English:* the model teaches itself from its own successes. Common mistake: no diversity/decontam → it amplifies its own narrow tricks and overfits.
- **Agentic RL.** *Idea:* RL over tool-using trajectories (code agents, SWE tasks). *Plain English:* train the whole act-observe-think loop, not just final text. Where it matters: SWE-RL, DeepSWE (strong SWE-bench from RL). Common mistake: no environment reproducibility → un-trainable noise.
- **Honest long-horizon eval.** Plain English: report success-at-budget and cost, not cherry-picked wins. Common mistake: success rate without the compute it took.

### Hands-on build
- `self_improve.py`: rejection-sampling / STaR loop on MATH (sample → verify → SFT on correct) for ≥2 iterations; track eval each round.
- `agentic_rl_min.py` (optional stretch): GRPO over short tool-use trajectories with a trajectory-level verifiable reward.
- **Deliverable:** `evidence/week07-longhorizon/` with the self-improvement curve across iterations + a diversity/contamination check. **Acceptance:** at least two self-improvement iterations show held-out gains (or a documented plateau), and you check the model isn't just amplifying memorized solutions.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — implement a verify→filter→SFT self-improvement loop and track per-iteration held-out gains with a diversity check.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/local GPU; reuse the Week-3 verifier + an SFT base.
2. **Data:** MATH/GSM8K prompts.
3. **Build:** `self_improve.py` — sample N, keep verified-correct, decontam+dedup, SFT on the wins; repeat ≥2 iterations.
4. **Run:** eval held-out EVERY iteration; track answer diversity per round.
5. **Eval:** plot the self-improvement curve; diagnose plateau/collapse.
6. **Ship:** `evidence/week07-longhorizon/` curve + diversity/decontam check.
- **Artifact:** the STaR/ReST loop + per-iteration eval.
- **Use `$self-improve-loop`:** prove (or honestly disprove) iteration gains without collapse.
- **Done when:** ≥2 iterations show held-out gains (or a documented plateau); model checked it isn't amplifying memorized solutions.
- **Stretch:** add a short agentic-RL trajectory reward (SWE-bench-style) as a stretch run.

### Harness / reusable skill — `$self-improve-loop`
- **Purpose:** run a verify-filter-SFT self-improvement loop and prove (or honestly disprove) iteration gains without collapse.
- **Inputs:** a model + a verifier + a prompt set.
- **Required outputs:** per-iteration held-out eval, diversity/decontam check, and a plateau/collapse diagnosis.
- **Evidence artifact:** `evidence/week07-longhorizon/report.md`.

### Common failure modes
- **Self-amplified narrowness** → the loop overfits its own tricks. *Fix:* diversity + decontam + held-out eval each round.
- **No partial credit** → long tasks look like total failures. *Fix:* step/process rewards or success-at-budget.
- **Non-reproducible environments** → agentic RL learns noise. *Fix:* deterministic, seeded environments.
- **Iteration-without-eval** → assuming it improves. *Fix:* eval every round; stop at plateau.

### Evidence artifact
`evidence/week07-longhorizon/` (self-improvement curve, diversity/decontam check, plateau diagnosis).

### Skill sink-in
Predict how many self-improvement iterations until held-out gains plateau. Run them. Record where it flattened and whether diversity collapse caused it.

### Dataset(s)
- **MATH / GSM8K** for the verify-filter-SFT loop.
- **SWE-bench Verified** — `huggingface.co/datasets/princeton-nlp/SWE-bench_Verified`, ~500 human-verified GitHub issue tasks, MIT license; the long-horizon agentic-RL reference (read/optional run).

### Code stub
```python
def self_improve(model, prompts, verifier, iters=3, n=8):
    history = []
    for it in range(iters):
        D = []
        for p in prompts:
            for c in [model.generate(p["q"], temperature=0.9) for _ in range(n)]:
                if verifier(c, p["answer"]):           # keep only verified wins
                    D.append({"prompt": p["q"], "completion": c})
        D = decontaminate_and_dedup(D)                 # avoid self-amplified narrowness
        model = sft(model, D)                          # ReST/STaR step
        history.append(eval_set(model, heldout))       # eval EVERY iteration
    return model, history
# TODO: plot held-out acc per iteration; check answer-diversity each round
```

### Graded rubric (Week 7 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | ≥2 verify-filter-SFT iterations, eval each | One pass / no eval |
| Evidence | Iteration curve + diversity/decontam check | Final number only |
| Reasoning | Diagnoses plateau/collapse | "It keeps improving" (unchecked) |
| Reproducibility | Seeded loop, versioned data | Manual |

### Assessment weight
**6%** of course grade.

### Reading list
- Zelikman et al., "STaR: Bootstrapping Reasoning With Reasoning," NeurIPS 2022.
- Singh et al., "Beyond Human Data: Scaling Self-Training for Problem-Solving with Language Models" (ReST-EM), TMLR 2024.
- Wei et al., "SWE-RL: Advancing LLM Reasoning via Reinforcement Learning on Open Software Evolution," 2025.
- Stanford CS329A, "Self-Improving AI Agents" (2025); Berkeley Advanced LLM Agents (Spring 2025) — learning-to-reason lectures.

---

### State of the Art (June 2026)
- **Agentic RL** over tool-use trajectories: the **SWE-RL / DeepSWE** lineage drives strong SWE-bench scores from RL.
- Self-improvement (**STaR / ReST-EM / rejection sampling**): verify→filter→SFT loops; guard against self-amplified narrowness.
- Long-horizon credit assignment via process rewards / step verifiers; **success-at-budget** is the honest metric.
- Reproducible, seeded environments are the bottleneck for trainable agentic RL.

**References & links:**
- [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial)
- [Jimenez et al., 2023 - SWE-bench](https://arxiv.org/abs/2310.06770)


<!-- sota:06L07 -->

## Week 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination

**Altitude:** Specialist · **Anchor case:** prove MathTutor-R's gains are *real reasoning*, not memorization — evaluate on hard, contamination-resistant benchmarks and audit for cheating.

### Learning goals
- Build evals on AIME, GPQA (Google-proof Q&A), and ARC-AGI-style abstraction tasks; understand what each measures.
- Detect and control contamination; use fresh/held-out and perturbed problems to separate reasoning from recall.
- Measure pass@k vs maj@k vs single-shot correctly; report compute alongside accuracy.
- Audit chains for shortcut/lucky-guess behavior (right answer, wrong reasoning).

### Concept map
- **AIME / MATH.** *Idea:* hard competition math; small, high-difficulty. *Plain English:* genuinely tests multi-step math, but small N → high variance. Common mistake: reporting AIME on 30 problems as a precise number without error bars.
- **GPQA.** *Idea:* graduate-level, "Google-proof" science questions experts get ~65%, non-experts ~34% even with web access. *Plain English:* resists shallow retrieval; tests real understanding. Common mistake: assuming web/RAG trivially solves it.
- **ARC-AGI.** *Idea:* abstraction/reasoning puzzles designed to resist memorization; measures skill-acquisition efficiency. *Plain English:* novel patterns, not in any training set. Common mistake: treating it like a knowledge benchmark.
- **Contamination & faithfulness.** *Idea:* high scores may be memorized; right answers may come from wrong/lucky chains. *Plain English:* check the *process*, perturb the problems. Common mistake: trusting the final-answer accuracy alone.

### Hands-on build
- `eval_hard.py`: runners for AIME (with bootstrap error bars), a GPQA-Diamond subset, and an ARC-AGI-style set; report pass@1, maj@k, pass@k with compute.
- `contamination_audit.py`: perturb GSM8K/MATH problems (rename variables, change numbers) and measure the accuracy drop; inspect chains for lucky guesses.
- **Deliverable:** `evidence/week08-hard-eval/` with the multi-benchmark scorecard (with error bars + compute) + the contamination/perturbation audit. **Acceptance:** scores carry uncertainty, the perturbation test is run (a big drop flags memorization), and at least one "right answer, wrong reasoning" case is surfaced.

▶ **Practical project:** `mlabonne/llm-course` — assemble AIME / GPQA / ARC-AGI-style runners with bootstrap error bars and a GSM-Symbolic perturbation audit.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy`; runners for the hard sets.
2. **Data:** AIME 2024/25, a GPQA-Diamond subset, an ARC-AGI set + GSM-Symbolic for perturbation.
3. **Build:** `eval_hard.py` (pass@1, maj@k, pass@k with compute + bootstrap CIs) + `contamination_audit.py` (perturb rename/renumber → accuracy drop).
4. **Run:** score all benchmarks; inspect chains for lucky guesses.
5. **Eval:** `evidence/week08-hard-eval/` scorecard (CIs + compute) + perturbation audit + a right-answer/wrong-chain case.
6. **Ship:** commit the audit.
- **Artifact:** the hard-eval runners + contamination-audit notebook.
- **Use `$reasoning-audit`:** evaluate on contamination-resistant sets with error bars, compute, and a faithfulness audit.
- **Done when:** scores carry CIs; perturbation test run (big drop flags memorization); ≥1 right-answer/wrong-chain surfaced.
- **Stretch:** add LiveBench fresh problems and compare to the perturbation drop.

### Harness / reusable skill — `$reasoning-audit`
- **Purpose:** evaluate reasoning on hard, contamination-resistant sets with error bars, compute, and a memorization/faithfulness audit.
- **Inputs:** a model + hard benchmarks + a perturbation generator.
- **Required outputs:** scorecard with error bars and compute, perturbation-drop result, and a lucky-guess/faithfulness inspection.
- **Evidence artifact:** `evidence/week08-hard-eval/report.md`.

### Common failure modes
- **Point estimates on tiny sets** → AIME "score" with no error bars. *Fix:* bootstrap CIs; report N.
- **Contamination unchecked** → memorization sold as reasoning. *Fix:* perturbation test + fresh sets.
- **pass@k confusion** → inflating with k samples while reporting as single-shot. *Fix:* state k and compute explicitly.
- **Answer-only trust** → lucky guesses count as reasoning. *Fix:* inspect chains; check process faithfulness.

### Evidence artifact
`evidence/week08-hard-eval/` (multi-benchmark scorecard with CIs + compute, perturbation audit, faithfulness inspection).

### Skill sink-in
Predict the accuracy drop when you perturb MATH problems (rename/renumber). Measure it. A large drop means memorization, not reasoning — record what it implies about your Week-5/6 gains.

### Dataset(s)
- **AIME 2024/2025** (small, hard), **GPQA** — `huggingface.co/datasets/Idavidrein/gpqa` (Diamond subset), CC BY 4.0; **ARC-AGI** — `github.com/fchollet/ARC-AGI` (ARC-AGI-1/2), Apache-2.0.
- **GSM-Symbolic / perturbed sets** — `huggingface.co/datasets/apple/GSM-Symbolic`-style, research license; for the contamination/robustness test.

### Code stub
```python
import numpy as np

def bootstrap_ci(correct: list[int], n_boot=10000):
    boots = [np.mean(np.random.choice(correct, len(correct))) for _ in range(n_boot)]
    return np.mean(correct), np.percentile(boots, [2.5, 97.5])   # acc + 95% CI

def perturbation_drop(model, problems, perturb):
    base = eval_set(model, problems)["acc"]
    pert = eval_set(model, [perturb(p) for p in problems])["acc"]
    return base, pert, base - pert        # large drop => memorization, not reasoning
# TODO: report AIME/GPQA/ARC with CIs + compute; surface right-answer-wrong-chain cases
```

### Graded rubric (Week 8 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Hard benchmarks run with correct pass@k/maj@k | Misreported sampling |
| Evidence | Error bars + compute + perturbation audit | Point estimates only |
| Reasoning | Separates reasoning from memorization | Trusts final-answer acc |
| Reproducibility | Seeded, fresh/perturbed sets versioned | Ad-hoc |

### Assessment weight
**6%** of course grade.

### Reading list
- Rein et al., "GPQA: A Graduate-Level Google-Proof Q&A Benchmark," COLM 2024.
- Chollet, "On the Measure of Intelligence" (ARC), 2019; Chollet et al., "ARC-AGI-2," 2025.
- Mirzadeh et al., "GSM-Symbolic: Understanding the Limitations of Mathematical Reasoning in LLMs," ICLR 2025.
- White et al., "LiveBench: A Challenging, Contamination-Free LLM Benchmark," 2024.

---

### State of the Art (June 2026)
- Hard, contamination-resistant suites: **ARC-AGI-2/3, GPQA-Diamond, AIME, Humanity's Last Exam** — report error bars on tiny sets.
- Contamination control via perturbation (**GSM-Symbolic**) + fresh sets (**LiveBench**); separate reasoning from recall.
- Report **pass@k vs maj@k vs single-shot** with compute; run a faithfulness audit for right-answer / wrong-chain cases.
- Frontier ref: Gemini 3.1 ARC-AGI-2 77.1% — still well short of human, a live frontier.

**References & links:**
- [`mlabonne/llm-course`](https://github.com/mlabonne/llm-course)


<!-- sota:06L08 -->

## Week 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment

**Altitude:** Specialist · **Anchor case:** ship MathTutor-R / DeepResearch-lite with controllable thinking budgets, faithful chains, and a cost/latency SLA — reasoning you can deploy and trust.

### Learning goals
- Control test-time compute in production: thinking-budget / effort settings, adaptive compute (think more on hard problems), and early-stopping.
- Audit chain-of-thought faithfulness: does the stated reasoning reflect the actual computation, and can it be monitored for safety?
- Serve reasoning models efficiently (long outputs, KV-cache, speculative decoding) within a latency/cost budget.
- Decide when extended thinking is worth its cost per query class.

### Concept map
- **Adaptive test-time compute.** *Idea:* spend more reasoning tokens/samples only on hard inputs. *Plain English:* don't deliberate over "2+2"; do over a proof. *Formula (router):* `budget(x) = g(difficulty(x))`. Common mistake: a flat budget — overpaying on easy, underpaying on hard.
- **CoT faithfulness.** *Idea:* the verbalized chain may not be the true cause of the answer (post-hoc rationalization). *Plain English:* a model can give a correct chain it didn't actually use, or hide its real reason. Where it matters: CoT monitoring for safety relies on faithfulness. Common mistake: treating the chain as a trustworthy explanation by default.
- **Reasoning-model serving.** *Idea:* long outputs stress KV-cache and latency; speculative decoding and budget caps help. *Plain English:* thinking is expensive tokens — manage them. Common mistake: unbounded thinking → latency/cost spikes.
- **Effort/budget controls.** Where it matters: frontier reasoning APIs expose effort levels; your system should too. Common mistake: max effort everywhere.
- **Contextual drag.** *Idea:* piling more tokens into the context (retrieved chunks, long chains, prior turns) past a point *lowers* reasoning accuracy — irrelevant or distractor context "drags" the model off the answer. *Plain English:* more context is not more reasoning; noise in the window competes with signal. Where it matters: long reasoning chains and RAG-fed prompts both suffer it (ties to Subject 04's "lost in the middle"). Common mistake: equating a longer prompt or a longer chain with better thinking instead of measuring accuracy-per-token against a trimmed-context baseline.

### Hands-on build
- `adaptive_compute.py`: a difficulty router that sets thinking budget / sample count per query; compare flat vs adaptive on accuracy-per-token.
- `faithfulness_probe.py`: perturb the chain (inject a hint, or corrupt a step) and test whether the answer changes as it should — measure faithfulness.
- `serve_reasoning.py`: serve with budget caps + speculative decoding; measure p95 latency and cost/query.
- **Deliverable:** `evidence/week09-deploy/` with the adaptive-vs-flat compute curve, a faithfulness report, and the serving SLA. **Acceptance:** adaptive compute beats flat on accuracy-per-token, the faithfulness probe is run with a result, and the served system meets a stated SLA.

▶ **Practical project:** `VizuaraAI/kv-cache-token-reduction-walkthrough` — serve reasoning with budget caps + KV-cache tricks and measure adaptive-vs-flat accuracy-per-token.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local GPU; `pip install vllm`; a difficulty scorer (length/embedding/router).
2. **Data:** GSM8K (mixed difficulty) + MATH + a faithfulness probe set (perturbed chains).
3. **Build:** `adaptive_compute.py` (budget/samples per difficulty), `faithfulness_probe.py` (inject hint / corrupt a step), `serve_reasoning.py` (budget caps + speculative decoding).
4. **Run:** compare flat-max vs adaptive on accuracy-per-token; measure p95 + cost/query.
5. **Eval:** `evidence/week09-deploy/` adaptive-vs-flat curve + faithfulness report + SLA.
6. **Ship:** a deploy decision.
- **Artifact:** the adaptive-compute router + faithfulness probe + served endpoint.
- **Use `$reasoning-deploy`:** deploy reasoning under a compute budget with adaptive effort + a faithfulness check.
- **Done when:** adaptive beats flat on accuracy-per-token; faithfulness probe run with a result; served system meets a stated SLA.
- **Stretch:** add FP8 KV-cache and quantify the latency-slope improvement.

### Harness / reusable skill — `$reasoning-deploy`
- **Purpose:** deploy reasoning under a compute budget with adaptive effort, a faithfulness check, and a measured SLA.
- **Inputs:** a reasoning model + a difficulty signal + an SLA.
- **Required outputs:** adaptive-vs-flat accuracy-per-token, faithfulness-probe result, p95 latency + cost/query, and a deploy decision.
- **Evidence artifact:** `evidence/week09-deploy/sla.md`.

### Common failure modes
- **Flat budget** → overpay easy, fail hard. *Fix:* route compute by difficulty.
- **Faithfulness assumed** → trusting/monitoring an unfaithful chain. *Fix:* run the perturbation faithfulness probe.
- **Unbounded thinking** → latency/cost spikes. *Fix:* budget caps + early-stop + speculative decoding.
- **No per-class cost** → can't justify extended thinking. *Fix:* report accuracy-per-token by query class.

### Evidence artifact
`evidence/week09-deploy/` (adaptive-compute curve, faithfulness report, serving SLA, deploy decision).

### Skill sink-in
Predict whether adaptive compute saves more than 30% tokens at equal accuracy vs a flat max budget. Measure. Record the savings and whether your difficulty router was the bottleneck.

### Dataset(s)
- **GSM8K (mixed difficulty) + MATH** for the adaptive-compute routing.
- **A faithfulness probe set** built by perturbing chains (hint-injection / step-corruption), modeled on the Anthropic/Turpin CoT-faithfulness methodology.

### Code stub
```python
def difficulty(q, scorer) -> float:           # cheap pre-estimate
    return scorer(q)                          # length/embedding/router model

def adaptive_answer(model, q, scorer):
    d = difficulty(q, scorer)
    n = 1 if d < 0.3 else (8 if d < 0.7 else 32)      # think more on hard ones
    budget = 256 if d < 0.3 else 2048
    return self_consistency(model, q, n=n, max_tokens=budget)

def faithfulness(model, q, chain, hint):
    # inject a (possibly misleading) hint into the chain; faithful models react
    hinted = model.continue_from(q, chain + f"\n(Hint: {hint})")
    return extract_answer(hinted) != extract_answer(chain)   # changed => used hint
# TODO: compare flat-max vs adaptive on acc-per-token; report p95 + cost/query
```

### Graded rubric (Week 9 deliverable)
| Criterion | Excellent | Failing |
|-----------|-----------|---------|
| Correctness | Adaptive routing + faithfulness probe + served SLA | Flat only / no serving |
| Evidence | Acc-per-token + faithfulness result + p95/cost | Latency only |
| Reasoning | Justifies budget per query class; reads faithfulness | "Max effort everywhere" |
| Reproducibility | Router + probe + load test scripted | Manual |

### Assessment weight
**5%** of course grade.

### Reading list
- Turpin et al., "Language Models Don't Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting," NeurIPS 2023.
- Anthropic, "Reasoning Models Don't Always Say What They Think" (CoT faithfulness), 2025.
- Leviathan et al., "Fast Inference from Transformers via Speculative Decoding," ICML 2023.
- Damani et al., "Learning How Hard to Think: Input-Adaptive Allocation of LM Computation," ICLR 2025.

---

### State of the Art (June 2026)
- Adaptive test-time compute (think-effort dials, difficulty routing) — spend tokens only on hard inputs.
- Serving: **vLLM** FP8 KV-cache + **FlashAttention-4** + speculative decoding for long reasoning outputs, under budget caps.
- **CoT faithfulness** is unresolved (Anthropic 2025, "models don't always say what they think") — perturbation probes for monitoring/safety.
- Effort/budget controls are now exposed by frontier APIs (Opus 4.8, GPT-5.5, Gemini 3.1) — mirror them in your system.

**References & links:**
- [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough)
- [Dao et al., 2022 - FlashAttention](https://arxiv.org/abs/2205.14135)
- [vLLM docs](https://docs.vllm.ai)
- [Leviathan et al., 2022 - Speculative Decoding](https://arxiv.org/abs/2211.17192)


<!-- sota:06L09 -->

## Week 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math

**Altitude:** Specialist · **Anchor case:** reproduce, end-to-end, a small reasoning-RL pipeline that takes a base/SFT model to a measurably better math reasoner — with an evidence packet that survives a reproduction audit.

### Learning goals
- Run the full reasoning pipeline: baseline (test-time compute) → verifier → GRPO (+stabilization) → hard-eval audit → bounded deployment.
- Prove, against the Week-1 baseline and on contamination-resistant evals, that the gain is real reasoning, not memorization or reward hacking.
- Produce an evidence packet where every claim (reward curve, eval gain, faithfulness, SLA) traces to a run.

### Concept map (review as a checklist)
- Baseline discipline: direct/CoT/self-consistency numbers frozen, with token cost.
- Reward discipline: a validated verifier; reward-hacking audited.
- Training discipline: GRPO with reward/eval co-plotted, stabilized, compute-fair.
- Eval discipline: hard sets with error bars, perturbation/contamination audit, faithfulness check.
- Deployment discipline: adaptive compute, SLA, cost.

### Hands-on build
- Pick the task: math (GSM8K/MATH, recommended) or another verifiable-reward domain (code with unit tests, a verifiable logic task).
- Ship: the frozen baselines, the verifier suite, the GRPO run (with the Week-6 stabilization), the hard-eval audit (with contamination/perturbation), and a bounded served endpoint. Include an ablation showing the RL step's contribution over SFT/test-time-compute alone.
- **Deliverable:** `capstone/` repo + a 3-page report. **Acceptance:** the trained model beats the Week-1 baseline on held-out GSM8K/MATH *and* on a contamination-resistant check (perturbation drop small), the reward curve corresponds to real eval gains (not hacking), and every claim links to a file in `evidence/`.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — run the full baseline → verifier → GRPO → hard-eval pipeline as your reproduction-audit capstone.

**Build it — step by step (AI-builder lab):**
1. **Setup:** assemble the full reasoning-pipeline repo; `uv` env + W&B; an RL box.
2. **Data:** GSM8K/MATH (train + held-out) + a perturbed/fresh set (GSM-Symbolic / AIME-2025) + DAPO-Math-17k pool.
3. **Build:** frozen baselines → verifier suite → GRPO (+Week-6 stabilization) → hard-eval audit → bounded served endpoint.
4. **Run:** `repro_gate.py` — `beats_baseline`, `real_reasoning` (perturbation drop < 0.10), `not_hacked`, `compute_fair`.
5. **Eval:** an ablation showing the RL step's contribution over SFT/test-time-compute alone.
6. **Ship:** `capstone/` repo + a 3-page report.
- **Artifact:** the end-to-end RL pipeline + evidence packet + report.
- **Use `$reasoning-evidence-packet`:** assemble baselines → verifier → GRPO curves → hard-eval audit → SLA into one auditable bundle.
- **Done when:** model beats Week-1 on held-out AND a contamination-resistant check; reward↔eval aligned; every claim → a run.
- **Stretch:** reproduce a second seed and report variance across runs.

### Harness / reusable skill — `$reasoning-evidence-packet`
- **Purpose:** assemble baselines → verifier → GRPO curves → hard-eval audit → SLA into one reviewable bundle that survives a reproduction audit.
- **Inputs:** the capstone artifacts + all weekly evidence.
- **Required outputs:** a packet where each claim links to the run that justifies it, including reward-hacking and contamination audits and what was *cut*.
- **Evidence artifact:** the packet itself.

### Common failure modes
- **Reward-curve theater** → reward rose, eval didn't (hacking). *Fix:* co-plot held-out eval; show it moved.
- **Contamination win** → "improvement" is memorization. *Fix:* perturbation/fresh-set audit in the packet.
- **Compute-unfair claim** → beat the baseline with 5× compute. *Fix:* report eval-per-compute.
- **Transcript dump** → clever samples, no metrics. *Fix:* link every claim to a measured run.

### Evidence artifact
`capstone/` with baselines, verifier suite, GRPO reward/eval curves, hard-eval audit, faithfulness + SLA, ablations, and the 3-page report.

### Skill sink-in
Before the final run, write down: the held-out accuracy you expect after RL, the perturbation drop you expect, and whether reward and eval will move together. Run it. The gaps — especially any reward-without-eval divergence — are the real lesson. Record them.

### Dataset(s)
- **GSM8K + MATH** (training + held-out) plus a **perturbed/fresh set** (GSM-Symbolic-style or AIME-2025) for the contamination-resistant check. Optional: **DAPO-Math-17k** / **DeepScaleR** as the RL prompt pool.

### Code stub
```python
# capstone/repro_gate.py — the one table that survives the audit
from grpo_trainer import train_grpo
from reasoning_audit import eval_with_ci, perturbation_drop, hacking_audit

def capstone_gate(base, prompts, verifier, heldout, perturbed):
    model = train_grpo(base, prompts, verifier)          # Week 5/6 loop
    acc, ci = eval_with_ci(model, heldout)
    _, _, drop = perturbation_drop(model, perturbed, perturb)
    return {
        "beats_baseline": acc - BASELINE_ACC,            # held-out gain
        "real_reasoning": drop < 0.10,                   # small perturbation drop
        "not_hacked": hacking_audit(model, verifier),    # reward<->eval aligned
        "compute_fair": True,                            # eval-per-compute logged
        "evidence": model.run_ids,                       # every claim -> a run
    }
# The report explains this dict; nothing is claimed that isn't in a run.
```

### Graded rubric (Capstone)
| Criterion | Excellent (A) | Adequate (C) | Failing |
|-----------|---------------|--------------|---------|
| Real gain | Beats baseline on held-out with error bars + ablation | Beats baseline, thin evidence | No gain shown |
| Not memorization | Small perturbation drop; fresh-set checked | Perturbation run, marginal | No contamination audit |
| Not reward-hacked | Reward↔eval aligned; samples audited | Co-plotted, light audit | Reward curve only |
| Evidence discipline | Every claim → a run; cuts documented | Most traceable | Transcript dump |
| Reproducibility | One command retrains + re-audits from seed | Mostly scripted | Manual |

### Assessment weight
**25%** of course grade.

### Reading list
- DeepSeek-AI, "DeepSeek-R1," 2025 (the recipe you're reproducing in miniature).
- Yu et al., "DAPO," 2025 + Liu et al., "Dr.GRPO," 2025 (your stabilization).
- Lambert et al., "Tülu 3 / RLVR," 2024–2025 (an open, auditable post-training pipeline).
- Source book Ch. 16 (project → evidence packet); Subjects 04–05 eval/regression discipline reused.

---

### State of the Art (June 2026)
- End-to-end miniature DeepSeek-R1: **baseline → verifier → GRPO (+DAPO/Dr.GRPO) → hard-eval audit → bounded serving**.
- Reproduction-audit discipline: reward↔eval aligned, perturbation drop small, eval-per-compute fair.
- Tooling: TRL / veRL + vLLM + `math-verify` + Inspect AI; **DAPO-Math-17k / DeepScaleR** prompt pools.
- Governance: document compute, contamination checks, and the reward-hacking audit in the evidence packet.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [vLLM docs](https://docs.vllm.ai)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [DeepSeek-AI, 2025 - DeepSeek-R1](https://arxiv.org/abs/2501.12948)
- [Hugging Face TRL](https://github.com/huggingface/trl)
- [veRL (RL for LLMs)](https://github.com/volcengine/verl)
- [UK AISI Inspect (evals)](https://inspect.aisi.org.uk)


<!-- sota:06L10 -->

## Course-level outcomes

By the end you can: frame reasoning as test-time compute and verifiable-reward training; spend inference compute well (CoT, self-consistency, best-of-N, ReAct, adaptive budgets) on the scaling curve; build and validate verifiers/reward models and audit them for hacking; reproduce the GRPO / DeepSeek-R1 recipe (with DAPO/Dr.GRPO stabilization) so a real held-out math metric moves; run self-improvement loops without collapse; evaluate on contamination-resistant hard benchmarks with error bars and faithfulness audits; and deploy reasoning under a budget and SLA — graduating with a reusable reasoning harness and an evidence packet that survives a reproduction audit.

## Skills produced (reused program-wide)
`$reasoning-eval` · `$test-time-scaler` · `$verifier-suite` · `$reasoning-agent` · `$grpo-trainer` · `$grpo-stabilizer` · `$self-improve-loop` · `$reasoning-audit` · `$reasoning-deploy` · `$reasoning-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/RL-in-Production-Bootcamp-Resources` — the RLHF→GRPO lineage with production RL walkthroughs — Lectures 5–6
- `VizuaraAILabs/OpenClaw-RL-Tutorial` — a hands-on RL training tutorial to ground the GRPO loop — Lecture 5
- `mlabonne/llm-course` — reasoning/RL roadmap with runnable Colabs (test-time compute → preference/RL) — Lectures 1, 5

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Self-evolving rubric lab** — rubric generation, judge-agreement, and bias / reward-hacking tests for verifier design — *Lectures 3, 8*
