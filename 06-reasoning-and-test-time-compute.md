# Subject 06 — Reasoning Models & Test-Time Compute

**Track:** Specialization · **Altitude:** Engineer → Specialist · **Length:** 10 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 02 (transformers, training loops), Subject 05 (SFT, LoRA/QLoRA, DPO, and especially the `$verifiable-rft` GRPO bridge and the regression-gate discipline). You can rent a multi-GPU box, read a reward curve, and you treat "the demo looks smart" as a claim to be falsified.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop, applied to reasoning. The course spine: **reasoning is compute you spend at inference and skill you instill with verifiable reward — both must be measured against a baseline and audited for cheating (reward hacking, eval gaming, unfaithful chains).** You will exhaust prompting-based test-time compute before training, and you will reproduce a small reasoning-RL run that *moves a real math metric*, not a vibe.

**Course anchor case (carried all 10 weeks):** *MathTutor-R* — take a small open base (7–8B, Qwen 3 / Llama 4 class) from weak chain-of-thought to a measurably stronger math reasoner via test-time compute *then* GRPO with verifiable rewards, tracked on **GSM8K** and a **MATH** subset. A second case, *DeepResearch-lite* — a tool-using search/deep-research agent for long-horizon questions — anchors the agentic-reasoning weeks. Every technique lands on these so gains are comparable week to week.

**What you leave with:** a `reason/` repo containing a test-time-compute toolkit (CoT, self-consistency, ReAct, best-of-N with a verifier), a working **GRPO** training loop (TRL/veRL) with verifiable rewards, a reward/verifier suite, reasoning-eval harnesses (AIME/GPQA/ARC-AGI-style + GSM8K/MATH) with contamination control and chain-faithfulness auditing, five+ reusable skills, and an evidence log proving each step beat the prior baseline — not a folder of clever transcripts.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 10 lectures (~30 contact hrs). Full time-boxed lecture plan: [`_toc/06-reasoning-and-test-time-compute-toc.md`](_toc/06-reasoning-and-test-time-compute-toc.md)._

1. **Lecture 1 — What Reasoning Buys You: CoT, and Spending Compute at Inference** — Chain-of-thought · Test-time compute · Verifiable eval · Contamination  ·  🔧 `$reasoning-eval`
2. **Lecture 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve** — Self-consistency · Best-of-N · Test-time scaling curve · Parallel vs sequential compute  ·  🔧 `$test-time-scaler`
3. **Lecture 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome** — Outcome reward (ORM / verifier) · Process reward (PRM) · Verifier-guided selection · Verifiable vs learned reward  ·  🔧 `$verifier-suite`
4. **Lecture 4 — ReAct, Tool Use & Search: Reasoning That Acts** — ReAct · Tool-augmented computation · Deep research · Reasoning + retrieval boundary  ·  🔧 `$reasoning-agent`
5. **Lecture 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch** — RLVR · GRPO · Why no critic · R1-Zero vs R1  ·  🔧 `$grpo-trainer`
6. **Lecture 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run** — Length bias · Entropy collapse · DAPO · Dr.GRPO  ·  🔧 `$grpo-stabilizer`
7. **Lecture 7 — Long-Horizon Reasoning & Self-Improving Agents** — Long-horizon credit assignment · Self-improvement (STaR / ReST / rejection sampling) · Agentic RL · Honest long-horizon eval  ·  🔧 `$self-improve-loop`
8. **Lecture 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination** — AIME / MATH · GPQA · ARC-AGI · Contamination & faithfulness  ·  🔧 `$reasoning-audit`
9. **Lecture 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment** — Adaptive test-time compute · CoT faithfulness · Reasoning-model serving · Effort/budget controls  ·  🔧 `$reasoning-deploy`
10. **Lecture 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math**  ·  🔧 `$reasoning-evidence-packet`

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

### State of the Art (June 2026)
- Tunable **thinking-effort** is now a product control: Claude Opus 4.8 adaptive thinking, GPT-5.5 router to "GPT-5 thinking," Gemini 3.1 Low/Med/High dial.
- Framing shift: reasoning = **test-time compute you spend**, measured in tokens vs accuracy — not just bigger weights.
- Verifiable math eval (GSM8K/MATH with `math-verify`) + contamination probes is the honest baseline.
- Frontier reasoning ceilings for comparison: Gemini 3.1 GPQA-Diamond 94.3%, ARC-AGI-2 77.1% — a target to measure against, not to expect.

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

## Week 2 — Self-Consistency, Best-of-N & the Test-Time Scaling Curve

### State of the Art (June 2026)
- Test-time scaling = parallel sampling + sequential deliberation; **verifier models** (RL-trained critics) aggregate samples — RL^V reports ~1.2–1.6× lifts.
- Compute-optimal inference ("Large Language Monkeys," Snell et al.) — find the knee and report accuracy-per-token, not raw N.
- Long-deliberation models internalize some self-consistency, but external best-of-N still wins with a good verifier.
- AIME / MATH-500 are the standard hard sets for plotting scaling curves.

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

## Week 3 — Verifiers & Reward Models: PRMs, ORMs & Process vs Outcome

### State of the Art (June 2026)
- **Verifier models** are the 2026 lever: RL-trained critics score/aggregate samples; prefer verifiable reward over a learned RM where the answer is checkable.
- PRM (Math-Shepherd / PRM800K lineage) vs ORM tradeoff; auto-labeled process supervision cuts step-label cost.
- **Reward-hacking / verifier-gaming** is an active ICLR-2026 thread — probe for mis-scored chains and harden the checker.
- `math-verify` / `sympy` + sandboxed code-exec (`e2b`) are the workhorse outcome verifiers.

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

## Week 4 — ReAct, Tool Use & Search: Reasoning That Acts

### State of the Art (June 2026)
- **MCP** is the de-facto tool/data standard (donated to the Linux Foundation Agentic AI Foundation; new 2026-07-28 spec) — agents call tools over MCP; **A2A** handles agent-to-agent delegation.
- Agent SDKs: **LangGraph** (durable checkpointing), **OpenAI Agents SDK** (handoffs), **Claude Agent SDK** (subagents, computer-use), **Google ADK** (native A2A).
- Deep-research agents (plan→search→read→synthesize→cite) with step/cost budgets; computer-use / browser agents are mainstream.
- Evaluated on **GAIA / τ²-bench** (dual-control, pass^k) — full trajectory + safety, not just the final answer.

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

## Week 5 — RLVR & GRPO: The DeepSeek-R1 Recipe From Scratch

### State of the Art (June 2026)
- **RLVR** has displaced pure RLHF for reasoning post-training; **GRPO** (critic-free, group-relative advantage) is the reference algorithm.
- Reproduction stack: TRL `GRPOTrainer`, **veRL**, OpenRLHF; **vLLM** for fast rollouts; Unsloth single-GPU path.
- R1-Zero vs R1 (pure RL vs SFT cold-start) framing; **DeepSeek V4** (MIT, open) extends the lineage.
- Co-plot reward with held-out eval — reward-up / eval-flat is the canonical reward-hacking tell.

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

## Week 6 — GRPO in Practice: DAPO, Dr.GRPO & Stabilizing the Run

### State of the Art (June 2026)
- 2025–26 stabilizers: **DAPO** (decoupled clip-higher, dynamic sampling, token-level loss, overlong shaping) and **Dr.GRPO** (length/difficulty debias).
- Length bias + entropy collapse are the named pathologies — monitor entropy and length, and compare eval-per-compute.
- **DAPO-Math-17k** / **DeepScaleR** are the standard verifiable-RL prompt pools.
- "Does RL incentivize reasoning beyond the base model?" (Yue et al. 2025) remains an actively-debated open question.

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

## Week 7 — Long-Horizon Reasoning & Self-Improving Agents

### State of the Art (June 2026)
- **Agentic RL** over tool-use trajectories: the **SWE-RL / DeepSWE** lineage drives strong SWE-bench scores from RL.
- Self-improvement (**STaR / ReST-EM / rejection sampling**): verify→filter→SFT loops; guard against self-amplified narrowness.
- Long-horizon credit assignment via process rewards / step verifiers; **success-at-budget** is the honest metric.
- Reproducible, seeded environments are the bottleneck for trainable agentic RL.

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

## Week 8 — Reasoning Evaluation: AIME, GPQA, ARC-AGI & Contamination

### State of the Art (June 2026)
- Hard, contamination-resistant suites: **ARC-AGI-2/3, GPQA-Diamond, AIME, Humanity's Last Exam** — report error bars on tiny sets.
- Contamination control via perturbation (**GSM-Symbolic**) + fresh sets (**LiveBench**); separate reasoning from recall.
- Report **pass@k vs maj@k vs single-shot** with compute; run a faithfulness audit for right-answer / wrong-chain cases.
- Frontier ref: Gemini 3.1 ARC-AGI-2 77.1% — still well short of human, a live frontier.

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

## Week 9 — Reasoning at Inference: Budgets, Faithfulness & Deployment

### State of the Art (June 2026)
- Adaptive test-time compute (think-effort dials, difficulty routing) — spend tokens only on hard inputs.
- Serving: **vLLM** FP8 KV-cache + **FlashAttention-4** + speculative decoding for long reasoning outputs, under budget caps.
- **CoT faithfulness** is unresolved (Anthropic 2025, "models don't always say what they think") — perturbation probes for monitoring/safety.
- Effort/budget controls are now exposed by frontier APIs (Opus 4.8, GPT-5.5, Gemini 3.1) — mirror them in your system.

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

## Week 10 — Capstone: A Small Reasoning-RL Run That Provably Improves Math

### State of the Art (June 2026)
- End-to-end miniature DeepSeek-R1: **baseline → verifier → GRPO (+DAPO/Dr.GRPO) → hard-eval audit → bounded serving**.
- Reproduction-audit discipline: reward↔eval aligned, perturbation drop small, eval-per-compute fair.
- Tooling: TRL / veRL + vLLM + `math-verify` + Inspect AI; **DAPO-Math-17k / DeepScaleR** prompt pools.
- Governance: document compute, contamination checks, and the reward-hacking audit in the evidence packet.

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
