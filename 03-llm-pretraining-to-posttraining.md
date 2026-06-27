# Subject 03 — Large Language Models: Pretraining → Post-Training

**Track:** Core · **Altitude:** Builder→Engineer · **Length:** 13 weeks (2 lecture hrs + 5 lab hrs/wk)
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

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 13 lectures (~39 contact hrs). Full time-boxed lecture plan: [`_toc/03-llm-pretraining-to-posttraining-toc.md`](_toc/03-llm-pretraining-to-posttraining-toc.md)._

1. **Lecture 1 — The LLM Lifecycle, End to End (and a Reproducible Tiny Pretraining Run)** — Pretraining objective · The lifecycle as stages with different objectives · Compute/throughput accounting · Reproducibility at scale  ·  🔧 `$lifecycle-map`
2. **Lecture 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID** — Extraction · Quality filtering · Language identification · Provenance & licensing  ·  🔧 `$data-funnel`
3. **Lecture 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training** — Exact dedup · Near-dup (MinHash + LSH) · Decontamination · Tokenizer quality  ·  🔧 `$dedup-decontam`
4. **Lecture 4 — Architecture, Hyperparameters, and Scaling Laws** — RoPE · RMSNorm + SwiGLU · GQA (grouped-query attention) · Scaling laws / Chinchilla  ·  🔧 `$scaling-fit`
5. **Lecture 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO** — Data parallel (DDP) · ZeRO / FSDP sharding · Tensor & pipeline parallel · MFU & scaling efficiency  ·  🔧 `$distributed-profiler`
6. **Lecture 6 — Mixture-of-Experts and Long-Context Pretraining** — MoE FFN · Load-balancing loss · Capacity factor · Long context  ·  🔧 `$moe-router-monitor`
7. **Lecture 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint** — Perplexity vs capability · Benchmark formats · Contamination & emergence · Reproduction discipline  ·  🔧 `$benchmark-runner`
8. **Lecture 8 — Supervised Fine-Tuning & Instruction Tuning** — SFT objective · Chat templating · LoRA / QLoRA · Data quality > quantity  ·  🔧 `$sft-recipe`
9. **Lecture 9 — Reward Modeling & RLHF (PPO)** — Bradley-Terry reward model · RLHF/PPO objective · Value function / advantage · Reward hacking  ·  🔧 `$rlhf-monitor`
10. **Lecture 10 — Direct Preference Optimization: DPO, ORPO, KTO** — DPO · ORPO · KTO · DPO vs RLHF  ·  🔧 `$preference-align-bench`
11. **Lecture 11 — RL for Reasoning: GRPO and Verifiable Rewards** — GRPO · Verifiable reward (RLVR) · Test-time compute · Format + correctness rewards  ·  🔧 `$verifiable-reward`
12. **Lecture 12 — Long-Context, Safety Fine-Tuning, and Serving** — Long-context extension · Safety fine-tuning · Red-teaming · Efficient serving  ·  🔧 `$safety-serving-audit`
13. **Lecture 13 — Capstone: A Full Pretrain → Post-Train Pipeline With an Evidence Packet**  ·  🔧 `$lifecycle-evidence-packet`

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

**Altitude:** Builder · **Format:** 2h lecture + 5h lab
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

## Week 2 — Data Curation I: Common Crawl, Extraction, Filtering, Language ID

**Altitude:** Builder→Engineer · **Format:** 2h lecture + 5h lab
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

## Week 3 — Data Curation II: Deduplication, Decontamination, and Tokenizer Training

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab
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

## Week 4 — Architecture, Hyperparameters, and Scaling Laws

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab · **Quiz 1 (scaling/architecture) this week.**
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

## Week 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab
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

## Week 6 — Mixture-of-Experts and Long-Context Pretraining

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab
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

## Week 7 — Pretraining Evaluation & a Paper-Reproduction Checkpoint

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab · **Paper-reproduction checkpoint due.**
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

## Week 8 — Supervised Fine-Tuning & Instruction Tuning

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab
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

## Week 9 — Reward Modeling & RLHF (PPO)

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab · **Quiz 2 (post-training math) this week.**
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

## Week 10 — Direct Preference Optimization: DPO, ORPO, KTO

**Altitude:** Engineer · **Format:** 2h lecture + 5h lab
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

## Week 11 — RL for Reasoning: GRPO and Verifiable Rewards

**Altitude:** Engineer/Specialist · **Format:** 2h lecture + 5h lab
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

## Week 12 — Long-Context, Safety Fine-Tuning, and Serving

**Altitude:** Engineer/Specialist · **Format:** 2h lecture + 5h lab
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
