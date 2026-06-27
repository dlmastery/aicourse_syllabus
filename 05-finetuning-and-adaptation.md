# Subject 05 — Fine-Tuning & Model Adaptation

**Track:** Applications · **Altitude:** Engineer · **Length:** 10 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 02 (transformers, attention, training loops in PyTorch), Subject 04 (RAG — so you can tell a retrieval problem from an adaptation problem), and comfort with the `$rag-eval`/evidence discipline. You can run a HF `Trainer`, read a loss curve, and rent a GPU.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop, applied to post-training. The course's spine is a single rule: **never fine-tune before you've proven prompting and RAG aren't enough, and never claim a fine-tune "works" without a regression suite.** You will earn LoRA before QLoRA, SFT before preference optimization, and every adapter against a frozen eval.

**Course anchor case (carried all 10 weeks):** *SupportGenie* — adapt a small open model (a 7–8B Llama 4 / Qwen 3-class model) to AcmeCorp's customer-support domain: produce on-brand, policy-compliant answers in a fixed JSON+citation format, and beat a strong prompted-frontier baseline on a held-out support eval at a fraction of the inference cost. A second case, *function-call formatter* (reliably emit valid tool-call JSON), is used wherever we need a crisp, machine-checkable target.

**What you leave with:** an `adapt/` repo containing a data-prep pipeline with decontamination, LoRA/QLoRA training configs, a DPO/ORPO/KTO preference-tuning stack, a quantization + adapter-serving setup (vLLM multi-LoRA), a regression-test harness, and an evidence log proving the tuned model beats prompting on the target task without regressing general ability — not a pile of checkpoints.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 10 lectures (~30 contact hrs). Full time-boxed lecture plan: [`_toc/05-finetuning-and-adaptation-toc.md`](_toc/05-finetuning-and-adaptation-toc.md)._

1. **Lecture 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)** — What fine-tuning is for · The decision ladder · Catastrophic forgetting · Baseline economics  ·  🔧 `$adaptation-decision`
2. **Lecture 2 — Data Preparation & Formatting: The 80% That Decides the Outcome** — Chat template & loss masking · Decontamination · Data quality > quantity · Packing  ·  🔧 `$sft-data-prep`
3. **Lecture 3 — PEFT I: LoRA From the Math Up** — LoRA · Rank r and alpha · Why it works · Merging vs keeping separate  ·  🔧 `$lora-trainer`
4. **Lecture 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU** — Quantization (training-time) · Double quantization & paged optimizers · Quality tax · NF4 vs other 4-bit  ·  🔧 `$qlora-trainer`
5. **Lecture 5 — Preference Optimization I: DPO and the RLHF Lineage** — RLHF (for context) · DPO · β / KL anchor · Preference data quality  ·  🔧 `$preference-tuner`
6. **Lecture 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective** — Bradley-Terry backbone · ORPO · KTO · SimPO / IPO  ·  🔧 `$preference-method-selector`
7. **Lecture 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences** — RLHF vs RLAIF vs RFT · Verifiable reward · Distillation · RFT vs more SFT  ·  🔧 `$verifiable-rft`
8. **Lecture 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)** — Target vs general eval · Catastrophic forgetting check · Alignment tax · Regression gate  ·  🔧 `$finetune-regression`
9. **Lecture 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost** — Inference quantization · Multi-LoRA serving · Merge vs keep-separate · Cost/latency  ·  🔧 `$adapter-serving`
10. **Lecture 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting**  ·  🔧 `$adaptation-evidence-packet`

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

### State of the Art (June 2026)
- Canonical ordering: **Prompt → RAG → Fine-tune → Distill**; fine-tune for behavior/format/skill, RAG for knowledge.
- Strong prompted baselines now run on 1M-context + tunable thinking-effort (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro) — a high bar the tuned small model must beat.
- Economic case: QLoRA-tune an 8B on a single A100 (~$12) vs frontier per-token cost — fine-tuning's win is usually cost-at-fixed-quality.
- Open bases for adaptation: **DeepSeek V4, Qwen 3.5, Llama 4 Scout/Maverick, Gemma 4, Mistral Small 4**.

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

## Week 2 — Data Preparation & Formatting: The 80% That Decides the Outcome

### State of the Art (June 2026)
- Synthetic data is standard: generate with a frontier teacher, then **decontaminate vs the eval** (n-gram + embedding) — non-negotiable hygiene.
- Data-quality-over-quantity (LIMA / Tulu 3 lesson) holds; chat-template + loss-masking correctness is still the top silent bug.
- Tooling: HF `datasets`, `distilabel`-style synthetic pipelines, MinHash dedup; dataset cards treated as versioned artifacts.
- Packing with attention-boundary isolation is now built into TRL / Axolotl.

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

## Week 3 — PEFT I: LoRA From the Math Up

### State of the Art (June 2026)
- Default PEFT stack: **LoRA / QLoRA / DoRA**; target attention + MLP, rank-stabilized variants common.
- Tooling: HF `peft` + `trl`, **Axolotl** (config-driven), **Unsloth** (2–5× faster); A100/H100 or serverless GPU bursts.
- Adapters are MB-sized and hot-swappable — multi-LoRA serving makes per-tenant tuning cheap.
- Frontier open bases (Qwen 3.5, Llama 4, Gemma 4) are all LoRA-friendly out of the box.

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

## Week 4 — PEFT II: QLoRA, Quantization for Training & Going Bigger on One GPU

### State of the Art (June 2026)
- QLoRA (4-bit NF4 base + bf16 adapters, double-quant, paged optimizers) tunes an 8B on a single 24–48GB GPU.
- **Unsloth** pushes QLoRA throughput and longer context; gradient checkpointing is standard.
- Serving-side quantization (FP8/INT4/AWQ/GPTQ) is a *distinct* step — always re-eval the served artifact, not just the training eval.
- **DoRA** and rank-stabilized LoRA close most of the remaining full-fine-tune gap on many tasks.

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

## Week 5 — Preference Optimization I: DPO and the RLHF Lineage

### State of the Art (June 2026)
- **DPO** is the default offline preference method; reference-anchored, β/KL-tuned, with **length-controlled eval** to catch verbosity hacking.
- Preference sets (UltraFeedback / HH-RLHF style) are increasingly AI-generated (RLAIF) with quality filtering.
- Classic RLHF (reward model + PPO) is now mostly reserved for fuzzy goals; verifiable tasks move to **RLVR/GRPO**.
- Post-training recipe: **SFT → DPO/GRPO → optional model merging**.

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

## Week 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective

### State of the Art (June 2026)
- Method zoo matched to data shape: **DPO** (pairs), **ORPO** (single-stage, no ref), **KTO** (unpaired thumbs), **SimPO** (ref-free, length-normalized), IPO.
- SimPO's length normalization directly targets the 2026 verbosity-hacking pathology.
- TRL ships all objectives; the choice is data-shape + observed-pathology driven, not hype.
- **Model merging** (SLERP / TIES / DARE) is increasingly paired with preference tuning to combine skills.

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

## Week 7 — RLHF, RFT & Distillation: When You Need More Than Offline Preferences

### State of the Art (June 2026)
- **RFT/RLVR** with programmatic rewards (json-valid, unit-test, `math-verify`) is the verifiable-task default — the bridge to GRPO (Subject 06).
- **GRPO** (critic-free, group-relative) is in TRL; verifier-gaming / reward-hacking is the active failure mode to audit.
- Distillation from frontier teachers (Opus 4.8 / GPT-5.5 / Gemini 3.1) into small open bases is a standard cost play.
- RLAIF / constitutional feedback is common where human labels are scarce.

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

## Week 8 — Evaluation & Regression Testing of Fine-Tunes (No Silent Forgetting)

### State of the Art (June 2026)
- Multi-axis gating: target task + general suite (**MMLU-Pro, GSM8K, IFEval**) + safety — quantify the alignment tax.
- Harnesses: `lm-evaluation-harness`, **UK AISI Inspect AI**, LangSmith / Braintrust; LLM-judge with validated κ.
- Execution-based + contamination-aware evals (LiveBench-style) are replacing static leaderboards.
- Prompt-injection / red-team regression (OWASP LLM Top-10) is now part of the ship gate.

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

## Week 9 — Serving Adapters: Quantization for Inference, Multi-LoRA & Cost

### State of the Art (June 2026)
- **vLLM** reference engine: **multi-LoRA** (`--enable-lora`), **FP8 KV-cache**, **FlashAttention-4**, speculative decoding (mind KV-quant incompatibility).
- Inference quantization AWQ/GPTQ/FP8/INT4; **S-LoRA** / LoRAX serve thousands of adapters on one base.
- Cost core: serverless GPU pay-per-second + **prompt caching** + batching; report $/1k-answers.
- Always re-run the regression gate on the *quantized served* artifact, not the training-time eval.

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

## Week 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting

### State of the Art (June 2026)
- End-to-end open recipe to model on: **Tülu 3-style SFT → DPO → (RLVR) → merge → quantized multi-LoRA serving**.
- Evidence-packet discipline: every claim → a run; cuts documented; served-cost proven.
- Governance: **EU AI Act** GPAI transparency obligations apply **Aug 2, 2026** — document data provenance + eval.
- Frontier baselines (Opus 4.8 / GPT-5.5) are the cost/quality bar the tuned small model must clear.

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
