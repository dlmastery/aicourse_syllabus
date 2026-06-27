# Foundations & Deep Learning From Scratch

**Merged subject (one academic quarter-track).** This subject combines several closely related modules, each a self-contained Part with its own lectures, hands-on builds, practical projects, State-of-the-Art notes, and assessment. Parts in this subject:

- **Part A — Math & ML Foundations From Scratch**
- **Part B — Deep Learning & the Transformer, Built by Hand**

## 📑 Detailed table of contents
_One academic quarter-track · 3 lecture-hrs/week · **22 lectures** across **2 parts**. Time-boxed plan: [`_toc/01-foundations-and-deep-learning-toc.md`](_toc/01-foundations-and-deep-learning-toc.md)._

### Part A — Math & ML Foundations From Scratch
1. **Week 1 — Why Math Is the Operating Language of ML (and Python/NumPy From Scratch)** — ML as iterative improvement · The data matrix X and target y · Matrix multiplication · Reproducibility as a precondition for learning anything  ·  ▶ `krishnaik06/mlproject` · 🔧 `$study-harness`
2. **Week 2 — Linear Algebra as Shapes You Can Reason About** — Vector as one structured example · Linear prediction · Norms and distance · Broadcasting  ·  ▶ `microsoft/ML-For-Beginners` · 🔧 `$shape-checker`
3. **Week 3 — Derivatives, Gradients & the Seed of Backpropagation** — Derivative · Partial derivative & gradient · Chain rule  ·  ▶ `ashishpatel26/500-AI-Machine-Learning-Projects-with-code` · 🔧 `$gradient-check`
4. **Week 4 — Probability & Statistics: The Language of Uncertainty** — Random variable, distribution, expectation · Conditional probability & Bayes · MLE → loss · Variance & noise  ·  ▶ `microsoft/AI-For-Beginners` · 🔧 `$uncertainty-reader`
5. **Week 5 — The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch** — Empirical risk · Gradient descent · Mini-batch / SGD  ·  ▶ `krishnaik06/AQI-Project` · 🔧 `$training-diagnostics`
6. **Week 6 — First Models I: Linear & Logistic Regression (Now With, Then Without, scikit-learn)** — Linear regression · Logistic regression · Cross-entropy loss · Regularization (L1/L2)  ·  ▶ `microsoft/ML-For-Beginners` · 🔧 `$baseline-builder`
7. **Week 7 — First Models II: Trees, Ensembles & Strong Baselines** — Decision tree · Bagging / Random Forest · Boosting (gradient boosting / XGBoost-style) · Feature importance  ·  ▶ `krishnaik06/Credit-Card-Fraudlent` · 🔧 `$tabular-model-review`
8. **Week 8 — Evaluation, Error Analysis & Experiment Design** — Metric–decision fit · Threshold sweep · Slices · Calibration  ·  ▶ `krishnaik06/Credit-Card-Fraudlent` · 🔧 `$evaluation-review`
9. **Week 9 — Bias, Variance, Regularization & Generalization (Learning-Theory Intuition)** — Empirical vs population risk · Bias–variance · Capacity / VC intuition · Regularization & early stopping  ·  ▶ `ashishpatel26/500-AI-Machine-Learning-Projects-with-code` · 🔧 `$generalization-translator`
10. **Week 10 — Capstone: A From-Scratch ML Project With an Evidence Packet**  ·  ▶ `krishnaik06/Data-Science-Projects-For-Resumes` · 🔧 `$project-evidence-packet`

### Part B — Deep Learning & the Transformer, Built by Hand
1. **Week 1 — The Neuron, the Forward Pass, and Scalar Autodiff From Scratch** — Artificial neuron · Computation graph & reverse-mode autodiff · Nonlinearity necessity · Input normalization  ·  ▶ `VizuaraAI/visual-ai-book` · 🔧 `$autodiff-tracer`
2. **Week 2 — Backpropagation Through an MLP, By Hand (NumPy)** — Softmax · Cross-entropy loss · The backward pass · Batching  ·  ▶ `rasbt/LLMs-from-scratch` · 🔧 `$layer-backprop-derive`
3. **Week 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch** — SGD · Momentum · RMSProp · Adam  ·  ▶ `rasbt/LLMs-from-scratch` · 🔧 `$optimizer-bench`
4. **Week 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)** — autograd = your Week-1 engine at scale · Dropout · Batch normalization · Weight decay / L2  ·  ▶ `microsoft/AI-For-Beginners` · 🔧 `$regularization-ablation`
5. **Week 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST** — Convolution · Output-size formula · Pooling · Parameter sharing  ·  ▶ `krishnaik06/Malaria-Detection` · 🔧 `$conv-shape-planner`
6. **Week 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)** — RNN recurrence · BPTT · Vanishing/exploding gradients · LSTM gates  ·  ▶ `VizuaraAI/visual-ai-book` · 🔧 `$sequence-sanity`
7. **Week 7 — Attention From Scratch: Why It Replaced Recurrence** — Scaled dot-product attention · Causal mask · Q/K/V projections · Attention ≠ explanation  ·  ▶ `rasbt/LLMs-from-scratch` · 🔧 `$attention-inspector`
8. **Week 8 — The Transformer Block, Built End to End** — Multi-head attention · Positional encoding · Residual connections · LayerNorm + pre-norm  ·  ▶ `rasbt/LLMs-from-scratch` · 🔧 `$transformer-block-validator`
9. **Week 9 — Tokenization and Byte-Pair Encoding From Scratch** — BPE training · Encoding/decoding · Vocab size trade-off · Byte-level fallback  ·  ▶ `rasbt/LLMs-from-scratch` · 🔧 `$tokenizer-probe`
10. **Week 10 — Training a Small GPT: nanoGPT From Scratch** — GPT forward pass · LR schedule · Sampling · Perplexity  ·  ▶ `rasbt/LLMs-from-scratch` · 🔧 `$mini-train-loop`
11. **Week 11 — Scaling, Efficiency, and Honest Evaluation of Your Small GPT** — Scaling laws (intuition) · Mixed precision · KV-cache · Evaluation triangulation  ·  ▶ `VizuaraAI/kv-cache-token-reduction-walkthrough` · 🔧 `$eval-triangulator`
12. **Week 12 — Capstone: A Built-From-Scratch GPT With an Evidence Packet**  ·  ▶ `VizuaraAILabs/nano-gpt-oss` · 🔧 `$model-evidence-packet`


# Part A — Math & ML Foundations From Scratch

**Track:** Foundations · **Altitude:** Learner · **Length:** 10 weeks (3 lecture hrs + 3 lab hrs/wk)
**Prerequisites:** programming in any language; high-school algebra. No prior ML.
**Pedagogy:** Vizuara-style *build-every-component-without-libraries* + the source book's
*concept → code → critique → reflection → rebuild* loop. You will not `import sklearn` until Week 6,
and only after you have re-implemented the same thing in NumPy.

**Course anchor case (carried all 10 weeks):** *delivery-time prediction* — predict how many minutes
a food-delivery order will take, from distance, item count, and weather. A second case,
*support-ticket urgency* (low/high), is introduced for classification. Both are reused so every new
idea lands on familiar ground.

**What you leave with:** a personal `ml-foundations/` repo containing a from-scratch math library, a
hand-coded neural layer, five reusable skills, and an evidence log — not a folder of finished notebooks.

---


## Week 1 — Why Math Is the Operating Language of ML (and Python/NumPy From Scratch)

**Altitude:** Learner · **Format:** 3h lecture + 3h lab
**Anchor case:** load the raw delivery-time CSV and compute a "predict the mean" baseline by hand.

### Learning goals
- Explain why ML is a set of *loops* (train→evaluate→inspect→revise) rather than a one-shot calculation.
- Implement matrix–vector multiplication in pure Python with no libraries, then in NumPy, and explain the speedup.
- Set up a reproducible repo (`venv`/`uv`, pinned deps, seeded RNG, `data/`, `src/`, `evidence/`).
- State the difference between a *prompt*, a *workflow*, a *skill*, and a *harness* (the book's ladder).

### Concept map
- **ML as iterative improvement.** Plain English: a model is a guess machine you correct with data.
  Where it matters: it reframes "learning" as optimization. Common mistake: expecting a closed-form answer.
- **The data matrix `X` and target `y`.** *Formula:* `X ∈ ℝ^{n×d}`, `y ∈ ℝ^{n}`. *Symbols:* `n`=rows/examples,
  `d`=features/columns. *Shapes:* one order = one row of `d` numbers. *Plain English:* a spreadsheet where
  rows are orders and columns are measurements. *Tiny example:* 3 orders × 3 features. *Code mapping:*
  `X = np.array([[3.1,2,1],[1.2,1,0],...])`. *Common mistake:* transposing `X` and silently training on garbage.
- **Matrix multiplication.** Why it matters: every model prediction is `X @ w`. The from-scratch lab makes the
  triple-loop cost visceral before NumPy hides it.
- **Reproducibility as a precondition for learning anything.** A result you can't re-run is not evidence.

### Hands-on build (the lab)
- `matmul.py`: implement `matmul(A, B)` with nested Python loops; unit-test it against `np.dot`; benchmark
  both on 200×200 matrices and record the ratio in `evidence/week01-bench.md`.
- `baseline.py`: load `delivery.csv`, predict the training mean for every row, compute mean absolute error (MAE).
- Initialize the repo with a seeded RNG and a `README` describing the anchor case.
- **Deliverable:** repo that runs `python baseline.py` and prints a baseline MAE.
  **Acceptance:** matmul matches NumPy to 1e-9; baseline MAE reported with units (minutes).

▶ **Practical project:** `krishnaik06/mlproject` — clone and run the end-to-end ML template; adopt its modular `src/`, config, and one-command run as the reproducible-repo blueprint for `ml-foundations/`.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local `uv` env (`uv venv && uv pip install numpy pandas scikit-learn pytest`); clone `krishnaik06/mlproject` for reference.
2. **Scaffold:** create `ml-foundations/` with `data/ src/ tests/ evidence/`, a pinned `pyproject.toml`, and `seed.py` calling `np.random.default_rng(0)`.
3. **Data:** drop `delivery.csv` in `data/`; write `src/load.py` returning `X, y` and asserting shapes.
4. **Implement:** `src/matmul.py` (triple-loop `matmul`) + `src/baseline.py` (predict training mean, compute MAE).
5. **Run & test:** `pytest` compares `matmul` to `np.dot` (1e-9); `python -m src.baseline` prints baseline MAE in minutes.
6. **Record:** log the matmul timing ratio + baseline MAE to `evidence/week01-bench.md`; commit with the seed.
- **Artifact:** a runnable `ml-foundations/` repo (one-command `python -m src.baseline`) committed to GitHub.
- **Use `$study-harness`:** run the 7-step loop on "matrix multiplication" — explain → formalize → counterexample → rebuild → log prediction/result/revision.
- **Done when:** matmul matches NumPy < 1e-9; baseline MAE printed with units; the repo re-runs deterministically from a clean clone.
- **Stretch:** add a GitHub Actions CI job (from `mlproject`) that runs `pytest` on every push.

### Harness / reusable skill — `$study-harness`
- **Purpose:** turn any new concept into a reusable 7-step study loop.
- **Inputs:** one topic (e.g., "matrix multiplication"). **Required outputs:** simple explanation, formal
  statement, one counterexample, your own restatement, a tiny built artifact, one recorded mistake, one open question.
- **Minimal workflow:** explain → formalize → counterexample → rebuild in code → log. **Evidence artifact:**
  `evidence/study-log.md` with three columns: prediction / result / revision.

### Common failure modes
- **Library-first blindness** → you call `np.dot` and never learn what it does. *Fix:* implement once by hand.
- **Unseeded randomness** → results change every run, so nothing is comparable. *Fix:* seed everything, commit the seed.
- **No baseline** → you can't tell whether later models help. *Fix:* always ship the "predict the mean" number first.

### Evidence artifact
`evidence/week01-bench.md` (matmul correctness + timing) and the baseline MAE line committed to git.

### Skill sink-in
Before benchmarking, **predict** how much slower pure-Python matmul is than NumPy. Run it. Record the **result**
and what **changed** in your mental model of "why NumPy exists."

### Readings & sources (2025–2026)
- Source book, Ch. 1 (harness engineering) and Ch. 2 (math as operational language).
- Vizuara, *ML & DL Research Bootcamp* — "matrix multiplication without libraries."
- 3Blue1Brown, *Essence of Linear Algebra* (Ch. 1–3) for intuition.

---

### State of the Art (June 2026)
- **NumPy 2.x / Python 3.12** are still the substrate every framework lowers to; the `X @ w` you hand-code is the same op a 1.6T-param MoE like **DeepSeek V4** runs billions of times — matmul literacy still underpins the frontier.
- **Tunable "thinking effort"** is now a standard control on **Claude Opus 4.8 / Gemini 3.1 Pro / GPT-5.5** — the modern face of "more compute per query" inside the train→evaluate→revise loop you start here.
- **Reproducibility at scale** (pinned configs, seeded RNG, config hashes) is a 2026 frontier-lab discipline; the seeded-repo habit in this lab is exactly what makes trillion-token runs auditable.
- Even **MMLU-Pro / GPQA Diamond** scores are only comparable under a fixed harness + seed — the baseline-and-evidence reflex starts in Week 1.

**More detail:** A 1.6T-param MoE like DeepSeek V4 activates only ~37–49B params per token, yet every forward pass still reduces to batched `X @ w`; NumPy 2.x (2024) reworked dtype promotion but left the matmul semantics you learn here unchanged. Seeds + config hashes are exactly what let labs re-launch trillion-token runs deterministically.

**References & links:**
- [`numpy/numpy`](https://github.com/numpy/numpy) — the array library every framework lowers to
- [NumPy 2.0 release notes](https://numpy.org/doc/stable/release/2.0.0-notes.html) — the dtype/promotion changes
- [Array programming with NumPy (Harris et al., 2020)](https://www.nature.com/articles/s41586-020-2649-2) — the canonical reference
- [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — where these matmuls scale into a GPT
- [DeepSeek-V3 Technical Report (DeepSeek-AI, 2024)](https://arxiv.org/abs/2412.19437) — sparse-MoE at the frontier
- [MMLU-Pro (Wang et al., 2024)](https://arxiv.org/abs/2406.01574) — a harder, harness-sensitive benchmark
<!-- sota:01L01 -->

## Week 2 — Linear Algebra as Shapes You Can Reason About

**Altitude:** Learner · **Anchor case:** batch-predict delivery times for all orders at once with one matrix op.

### Learning goals
- Read any ML equation as **shapes flowing through operations** and predict output dimensions before running.
- Explain dot product, matrix–vector, and matrix–matrix products geometrically and in code.
- Use broadcasting deliberately (and catch the bugs it hides).

### Concept map
- **Vector as one structured example.** *Formula:* `x ∈ ℝ^d`. *Plain English:* one order's measurements.
  *Common mistake:* treating a feature vector as a bag of unrelated numbers.
- **Linear prediction.** *Formula:* `ŷ = x·w + b`. *Symbols:* `w∈ℝ^d` weights, `b` bias. *Shapes:* `(d)·(d)→scalar`.
  *Code mapping:* `yhat = X @ w + b`. *Common mistake:* shape mismatch between `(n,d)` and `(d,)`.
- **Norms and distance.** Why it matters: nearest-neighbors and scaling are *geometry*; `‖a−b‖` is similarity.
- **Broadcasting.** Where it matters: subtracting a per-feature mean. Common mistake: accidental `(n,n)` blow-ups.

### Hands-on build
- Extend the math library: `dot`, `matvec`, `l2_norm`, `standardize(X)` — all from scratch, all unit-tested vs NumPy.
- Re-express Week 1's loop-based baseline as a single vectorized expression; confirm identical output.
- **Deliverable:** `linalg.py` + tests. **Acceptance:** vectorized delivery prediction equals the looped version.

▶ **Practical project:** `microsoft/ML-For-Beginners` — work the regression-module NumPy/pandas notebooks to drill vectorized prediction, broadcasting, and shape reasoning.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Google Colab; `pip install numpy pandas matplotlib`; open the ML-For-Beginners regression notebooks alongside.
2. **Data:** load `delivery.csv` into an `(n, d)` array; standardize with `(X - mu)/sd` and annotate the broadcast shapes.
3. **Implement:** `linalg.py` with `dot`, `matvec`, `l2_norm`, `standardize` — pure NumPy, each unit-tested vs the builtin.
4. **Vectorize:** rewrite Week-1's looped baseline as `X @ w + b`; assert identical output to the loop.
5. **Annotate:** add `# (n, d)` shape comments on every line and one deliberate broadcasting bug to observe the `(n,n)` blow-up.
6. **Visualize:** scatter predicted vs actual delivery minutes to sanity-check the vectorized prediction.
- **Artifact:** a shape-annotated `linalg.py` + a Colab notebook committed to the repo.
- **Use `$shape-checker`:** annotate each result's shape and predict one failure before running.
- **Done when:** all `linalg` ops match NumPy; vectorized prediction equals the loop; every line carries a verified shape comment.
- **Stretch:** add a `@shape_assert` decorator that raises on unexpected output dimensions.

### Harness / reusable skill — `$shape-checker`
- **Purpose:** annotate every line of model code with the shape of its result.
- **Inputs:** a code snippet. **Outputs:** the same snippet with `# (n, d)` shape comments and one predicted failure.
- **Evidence artifact:** a shape-annotated version of `linalg.py`.

### Common failure modes
- **Shape blindness** → silent broadcasting produces wrong-but-runnable results. *Fix:* annotate shapes, assert them.
- **Geometry amnesia** → distances computed on unscaled features. *Fix:* standardize first, justify why.
- **Transpose roulette** → guessing `.T` until it runs. *Fix:* derive the shape on paper first.

### Evidence artifact
Shape-annotated `linalg.py` and a one-paragraph note: "three bugs broadcasting could have hidden here."

### Skill sink-in
Predict the output shape of `X @ w` for `X:(100,3)`, `w:(3,)`. Run. Then break it on purpose and record the error.

### Readings & sources
- Source book Ch. 2 (vectors/matrices/shape literacy). Cornell CS4782 (linear-algebra refresher).
- Vizuara linear-algebra module; Gilbert Strang, *Linear Algebra* lectures (selected).

---

### State of the Art (June 2026)
- Shape literacy scales straight up: **FlashAttention-4** (Blackwell default in vLLM v0.20+) is a shape- and memory-aware re-tiling of the same `QKᵀ` matmul — dimension-tracking is what makes such kernels correct.
- **Sparse MoE** models (**DeepSeek V4** 49B-active/1.6T-total, **Qwen 3.5** 17B/397B) route each token through different weight matrices; reasoning about "which matrix multiplies which vector" is now a frontier-architecture skill.
- Norms/distance underpin modern retrieval: 2026 **embedding models** (Voyage voyage-3-large, Cohere embed-v4, BGE-M3) rank documents by the vector similarity / `‖a−b‖` geometry you build here.

**More detail:** FlashAttention-4 (Blackwell) and grouped-query attention are mostly disciplined re-tilings of the same `QKᵀ/√d · V` shapes; modern retrieval ranks by cosine/`‖a−b‖` over 1024–4096-dim embeddings (Voyage, Cohere, BGE). Tracking which axis means what is the skill that prevents silent broadcasting bugs at every scale.

**References & links:**
- [`Dao-AILab/flash-attention`](https://github.com/Dao-AILab/flash-attention) — IO-aware attention kernels (same QKᵀ shapes)
- [FlashAttention (Dao et al., 2022)](https://arxiv.org/abs/2205.14135) — the tiling idea
- [`FlagOpen/FlagEmbedding`](https://github.com/FlagOpen/FlagEmbedding) — BGE-M3 embeddings/retrieval
- [3Blue1Brown — Essence of Linear Algebra](https://www.3blue1brown.com/topics/linear-algebra) — shape/geometry intuition
- [NumPy broadcasting docs](https://numpy.org/doc/stable/user/basics.broadcasting.html) — the rules behind the bugs
<!-- sota:01L02 -->

## Week 3 — Derivatives, Gradients & the Seed of Backpropagation

**Altitude:** Learner · **Anchor case:** measure how delivery-MAE changes as you nudge one weight.

### Learning goals
- Explain a derivative as "sensitivity of output to a small input change," numerically and symbolically.
- Compute a gradient by hand for a 2-feature linear model and verify it with finite differences.
- Explain why the gradient points uphill and why we step against it.

### Concept map
- **Derivative.** *Formula:* `f'(x)=lim_{h→0}(f(x+h)−f(x))/h`. *Plain English:* slope right here.
  *Tiny example:* `f(x)=x²`, `f'(3)=6`. *Code mapping:* finite-difference check. *Common mistake:* confusing
  the value `f(x)` with its rate of change `f'(x)`.
- **Partial derivative & gradient.** *Formula:* `∇f = [∂f/∂w₁, …, ∂f/∂w_d]`. *Shapes:* gradient has the same
  shape as the parameter. *Common mistake:* a gradient with the wrong shape silently breaks updates.
- **Chain rule.** Why it matters: it *is* backpropagation. Plain English: multiply local slopes along the path.

### Hands-on build
- `grads.py`: analytic gradient of squared-error loss for linear regression; `numerical_grad()` finite-difference
  checker; assert they agree to 1e-6 — this "gradient check" is the single most useful debugging habit in the course.
- **Deliverable:** passing gradient check on the delivery model. **Acceptance:** max abs diff < 1e-6.

▶ **Practical project:** `ashishpatel26/500-AI-Machine-Learning-Projects-with-code` — take a linear-regression / gradient-descent-from-scratch project and add a finite-difference gradient check.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy matplotlib`; clone a linear-regression-from-scratch project from `ashishpatel26/500-...`.
2. **Implement analytic:** `grads.py` with the squared-error gradient `dL/dw = X.T @ (Xw - y) / n`.
3. **Implement numeric:** `numerical_grad(f, w, eps=1e-5)` central differences over each parameter.
4. **Check:** assert `max|analytic - numeric| < 1e-6` on the delivery model; log the worst-offending parameter.
5. **Interpret:** flip the sign of the distance-weight and show the loss rises — confirm gradient direction.
6. **Visualize:** plot loss vs a single weight with the analytic slope arrow overlaid.
- **Artifact:** `grads.py` + `evidence/week03-gradcheck.md` (analytic-vs-numeric table).
- **Use `$gradient-check`:** never trust a hand-derived gradient without the numeric pass/fail.
- **Done when:** max abs diff < 1e-6; you can state the sign of each partial; the check is committed.
- **Stretch:** add the logistic-loss gradient and gradient-check it too.

### Harness / reusable skill — `$gradient-check`
- **Purpose:** never trust a hand-derived gradient without a numerical check.
- **Inputs:** a loss function + analytic gradient. **Outputs:** pass/fail + the worst-offending parameter.
- **Evidence artifact:** `evidence/week03-gradcheck.md`.

### Common failure modes
- **Sign errors** → model diverges. *Fix:* gradient-check before training.
- **Optimization mysticism** → treating gradient descent as magic. *Fix:* watch the loss decrease step by step.
- **Shape-mismatched gradients** → broadcasting "fixes" them into nonsense. *Fix:* assert `grad.shape == param.shape`.

### Evidence artifact
`evidence/week03-gradcheck.md` with the analytic-vs-numerical table.

### Skill sink-in
Predict whether increasing the distance-weight raises or lowers predicted delivery time, then verify via the gradient sign.

### Readings & sources
- Source book Ch. 2 (derivatives/gradients/optimization). Vizuara "backprop by hand" (chain rule).
- Stanford CS231n notes on gradients/backprop (still the clearest treatment).

---

### State of the Art (June 2026)
- Reverse-mode autodiff (the chain rule you hand-derive) still powers every 2026 trainer — **PyTorch 2.7 autograd**, JAX — at 1M-context, trillion-param scale; nothing about the frontier removes the gradient.
- **Gradient checking** remains the canonical correctness test for any custom kernel (e.g., a new **FlashAttention-4** backward); the finite-difference habit is a frontier-engineering practice, not a toy.
- The **test-time-compute** trend (RLVR, verifier models) optimizes *inference*, but the underlying models are still fit by gradient descent on a differentiable loss.

**More detail:** Reverse-mode autodiff (the chain rule over a recorded graph) powers PyTorch 2.7 and JAX unchanged at trillion-param scale; finite-difference gradient checks remain the standard correctness test for any custom kernel's backward pass. The seed of backprop you build here is literally the engine the frontier still runs.

**References & links:**
- [`karpathy/micrograd`](https://github.com/karpathy/micrograd) — a ~100-line scalar autodiff engine
- [Automatic Differentiation in ML: a Survey (Baydin et al., 2018)](https://arxiv.org/abs/1502.05767) — reverse-mode AD foundations
- [PyTorch autograd mechanics](https://pytorch.org/docs/stable/notes/autograd.html) — the production version
- [Learning representations by back-propagating errors (Rumelhart et al., 1986)](https://www.nature.com/articles/323533a0) — the origin
- [CS231n — backpropagation notes](https://cs231n.github.io/optimization-2/) — the clearest practical treatment
<!-- sota:01L03 -->

## Week 4 — Probability & Statistics: The Language of Uncertainty

**Altitude:** Learner · **Anchor case:** ticket-urgency as a *probability*, not a hard label.

### Learning goals
- Use distributions, expectation, and variance to describe data and predictions.
- Explain maximum likelihood estimation (MLE) and connect it to loss functions.
- Read a probabilistic claim ("the model is 80% confident") and say what it does and does not mean.

### Concept map
- **Random variable, distribution, expectation.** Plain English: a number that varies + how often each value
  appears + its long-run average. Common mistake: confusing a probability with a frequency in small samples.
- **Conditional probability & Bayes.** *Formula:* `P(y|x)=P(x|y)P(y)/P(x)`. Where it matters: classification is
  estimating `P(y|x)`. Common mistake: ignoring base rates (the fraud/medical-test fallacy).
- **MLE → loss.** Why it matters: minimizing cross-entropy *is* maximizing likelihood; squared error *is* a
  Gaussian-noise assumption. This single bridge demystifies "where loss functions come from."
- **Variance & noise.** Plain English: not all error is the model's fault; some is irreducible.

### Hands-on build
- `stats.py`: sample from distributions, estimate mean/variance, build a histogram from scratch.
- Derive on paper that minimizing squared error = MLE under Gaussian noise; reproduce numerically.
- **Deliverable:** a short `evidence/week04-mle.md` showing the squared-error↔Gaussian equivalence.

▶ **Practical project:** `microsoft/AI-For-Beginners` — run its probability / Naive-Bayes notebooks and connect the likelihood to the cross-entropy loss you derived.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy scipy matplotlib scikit-learn`; open AI-For-Beginners probability/Naive-Bayes notebooks.
2. **Data:** load `tickets.csv` (text_len, n_links, urgent); report the positive (urgent) base rate.
3. **Implement:** `stats.py` sampling + a from-scratch histogram; `nll_gauss` and `nll_bern` loss functions.
4. **Derive:** show numerically that minimizing squared error = Gaussian-noise MLE; cross-entropy = Bernoulli MLE.
5. **Evaluate:** fit Naive Bayes; output predicted probabilities (not labels) and bucket them into calibration bins.
6. **Visualize:** plot a reliability diagram and mark where 0.51 vs 0.99 land.
- **Artifact:** `evidence/week04-mle.md` (loss-from-likelihood derivation + numeric check) + the calibration plot.
- **Use `$uncertainty-reader`:** translate one predicted probability into plain English + a base-rate caution.
- **Done when:** the squared-error↔Gaussian equivalence is shown numerically; base rate reported; a probability interpreted with its caveat.
- **Stretch:** compute the Brier score and compare it to accuracy on the imbalanced set.

### Harness / reusable skill — `$uncertainty-reader`
- **Purpose:** translate any probabilistic output into plain-English meaning + one base-rate caution.
- **Inputs:** a predicted probability + context. **Outputs:** interpretation, what it ignores, one failure case.

### Common failure modes
- **Deterministic thinking** → treating 0.51 and 0.99 as the same "positive." *Fix:* keep probabilities, set thresholds deliberately.
- **Base-rate neglect** → high accuracy on rare events that's actually useless. *Fix:* always report the positive rate.
- **Confusing confidence with correctness.** *Fix:* calibration, introduced in Week 8.

### Evidence artifact
`evidence/week04-mle.md` (loss-from-likelihood derivation + numeric check).

### Skill sink-in
Predict whether a 90%-accurate ticket classifier is "good" when only 5% of tickets are urgent. Compute. Revise.

### Readings & sources
- Source book Ch. 2 (probability) and Ch. 17 (likelihood/GLM lineage). Vizuara probability/stats module.
- MIT 6.7960 / CS229 probability review notes.

---

### State of the Art (June 2026)
- The pretraining objective of every frontier LLM (**Opus 4.8, GPT-5.5, Gemini 3.1 Pro**) is still **maximum likelihood** / cross-entropy next-token — the MLE↔loss bridge you derive here is literally the loss they minimize.
- **Calibration** is a live 2026 eval concern, and **LLM-as-judge** scores carry documented biases (TrustJudge); "80% confident" needing careful interpretation is now an industry problem.
- Reliability metrics like **τ²-bench pass^k** measure whether an agent succeeds k-for-k — treating outcomes as random variables with variance, not point facts.

**More detail:** Every frontier LLM still minimizes cross-entropy = next-token MLE; calibration and judge-bias (e.g., TrustJudge) are active 2026 concerns, and reliability metrics like τ²-bench pass^k treat outcomes as random variables rather than point facts. The MLE↔loss bridge you derive is the exact objective they optimize.

**References & links:**
- [`microsoft/AI-For-Beginners`](https://github.com/microsoft/AI-For-Beginners) — probability / Naive-Bayes notebooks
- [Language Models are Few-Shot Learners / GPT-3 (Brown et al., 2020)](https://arxiv.org/abs/2005.14165) — next-token MLE at scale
- [τ-bench (Yao et al., 2024)](https://arxiv.org/abs/2406.12045) — reliability / pass^k evaluation
- [scikit-learn — probability calibration](https://scikit-learn.org/stable/modules/calibration.html) — reliability diagrams in practice
<!-- sota:01L04 -->

## Week 5 — The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch

**Altitude:** Learner→Builder · **Anchor case:** train the delivery model by gradient descent, watching the loss curve.

### Learning goals
- State empirical risk minimization and why it's a *proxy* for the real objective.
- Implement full-batch and mini-batch gradient descent from scratch.
- Diagnose learning-rate problems from the loss curve alone.

### Concept map
- **Empirical risk.** *Formula:* `R̂(w)=(1/n)Σ L(ŷᵢ,yᵢ)`. Plain English: average wrongness on your data.
  Common mistake: forgetting it's only a sample of the world (Week 9's generalization gap).
- **Gradient descent.** *Formula:* `w ← w − η∇R̂(w)`. *Symbols:* `η`=learning rate. *Plain English:* step downhill.
  *Common mistake:* `η` too large (diverge) or too small (crawl).
- **Mini-batch / SGD.** Why it matters: noise helps and scales. The bridge to deep learning in Subject 02.

### Hands-on build
- `gd.py`: train linear regression on delivery data with your own GD loop; log loss per epoch; plot the curve.
- Sweep three learning rates; save a *stable* run log and a *diverging* run log side by side.
- **Deliverable:** loss-curve plot + two run logs. **Acceptance:** stable run beats the Week 1 baseline MAE.

▶ **Practical project:** `krishnaik06/AQI-Project` — train the AQI regression with your own gradient-descent loop, logging loss curves and beating the mean baseline.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy pandas matplotlib`; clone `krishnaik06/AQI-Project` for the AQI dataset + framing.
2. **Data:** load the AQI table, standardize features, hold out 20% for validation.
3. **Implement:** `gd.py` full-batch + mini-batch gradient descent; log MSE per epoch into `hist`.
4. **Sweep:** train at three learning rates; save one stable and one diverging run log side by side.
5. **Evaluate:** confirm the stable run beats the predict-the-mean MAE baseline.
6. **Visualize:** overlay the loss curves; annotate where the diverging LR explodes.
- **Artifact:** `evidence/week05-training/` (loss plot + stable/unstable logs + a 5-line diagnosis).
- **Use `$training-diagnostics`:** read the loss curve and rank likely causes (LR too high/low, bug, data) + the cheapest next experiment.
- **Done when:** the stable run beats the mean baseline; the LR sweep is logged; the diagnosis names the diverging cause.
- **Stretch:** add momentum and show it reaches the target loss in fewer epochs.

### Harness / reusable skill — `$training-diagnostics`
- **Purpose:** read a loss curve and rank the likely causes of bad training.
- **Inputs:** a loss log. **Outputs:** diagnosis (LR too high/low, bug, data issue) + the cheapest next experiment.
- **Evidence artifact:** annotated stable-vs-unstable logs.

### Common failure modes
- **Learning-rate guessing** → blame the model for an optimizer problem. *Fix:* sweep LR, read the curve.
- **No loss logging** → flying blind. *Fix:* log every epoch, plot it.
- **Beating no baseline** → "it trained" but is worse than the mean. *Fix:* compare to Week 1 always.

### Evidence artifact
`evidence/week05-training/` with loss plot + stable/unstable logs + a 5-line diagnosis note.

### Skill sink-in
Predict which of three learning rates will diverge before running the sweep. Record outcome and revision.

### Readings & sources
- Source book Ch. 2 (optimization) and Ch. 7 (training dynamics). Vizuara optimizers (GD/RMSProp/Adam) preview.

---

### State of the Art (June 2026)
- **AdamW** remains the default optimizer for 2026 frontier pretraining; the SGD→mini-batch loop you build is the same one scaled across thousands of GPUs.
- Reading a loss curve to diagnose LR problems is now a distributed-training skill — **MFU** and loss-spike monitoring gate trillion-token runs.
- **RLVR / GRPO** post-training (DeepSeek-R1-style reasoning) is still gradient descent on a (verifiable) reward — empirical-risk minimization with a different objective, which you meet again in Subject 03.

**More detail:** AdamW remains the default optimizer for 2026 frontier pretraining; the same SGD/mini-batch loop scales across thousands of GPUs, and RLVR/GRPO post-training is empirical-risk minimization with a verifiable-reward objective. Reading a loss curve to rank causes is now a distributed-training skill gated by MFU and loss-spike monitoring.

**References & links:**
- [Adam (Kingma & Ba, 2015)](https://arxiv.org/abs/1412.6980) — the optimizer you implement
- [Decoupled Weight Decay / AdamW (Loshchilov & Hutter, 2019)](https://arxiv.org/abs/1711.05101) — the production default
- [torch.optim docs](https://pytorch.org/docs/stable/optim.html) — reference implementations
- [DeepSeekMath / GRPO (Shao et al., 2024)](https://arxiv.org/abs/2402.03300) — ERM with a verifiable reward
- [`ashishpatel26/500-AI-Machine-Learning-Projects-with-code`](https://github.com/ashishpatel26/500-AI-Machine-Learning-Projects-with-code) — GD-from-scratch projects
<!-- sota:01L05 -->

## Week 6 — First Models I: Linear & Logistic Regression (Now With, Then Without, scikit-learn)

**Altitude:** Builder · **Anchor case:** delivery time (regression) and ticket urgency (classification).

### Learning goals
- Implement and interpret linear and logistic regression; read coefficients responsibly.
- Explain the sigmoid and cross-entropy loss, and why logistic regression outputs calibrated-ish probabilities.
- Use `scikit-learn` *after* matching it with your from-scratch version.

### Concept map
- **Linear regression** — already built; now interpret weights as "minutes per km," with the caveat that
  correlation ≠ effect. Common mistake: causal language for a predictive coefficient.
- **Logistic regression.** *Formula:* `p=σ(x·w+b)`, `σ(z)=1/(1+e^{−z})`. *Plain English:* squash a score into a
  probability. *Code mapping:* `p = 1/(1+np.exp(-(X@w+b)))`. *Common mistake:* thresholding at 0.5 by default.
- **Cross-entropy loss.** Why it matters: the right loss for probabilities (from Week 4's MLE bridge).
- **Regularization (L1/L2).** Plain English: prefer simpler explanations. Where it matters: prevents overfitting (Week 9).

### Hands-on build
- `logreg.py` from scratch (sigmoid + cross-entropy + GD), gradient-checked; then reproduce with `sklearn` and
  confirm coefficients match within tolerance.
- **Deliverable:** both implementations + a coefficient-comparison table. **Acceptance:** agreement within 1e-2.

▶ **Practical project:** `microsoft/ML-For-Beginners` — reproduce its logistic-regression lesson, then match coefficients against your from-scratch `logreg.py`.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy scikit-learn matplotlib`; open the ML-For-Beginners logistic-regression lesson.
2. **Data:** `tickets.csv` (classification) + `delivery.csv` (regression); standardize features.
3. **Implement:** `logreg.py` from scratch (sigmoid + cross-entropy + GD), gradient-checked.
4. **Reproduce:** fit `sklearn.LogisticRegression`; compare coefficients to your version within 1e-2.
5. **Threshold:** choose the decision threshold by cost (not 0.5); tabulate precision/recall at the chosen cut.
6. **Visualize:** plot the sigmoid + the fitted decision boundary on two features.
- **Artifact:** both implementations + `evidence/week06-baseline-memo.md` (coefficient-comparison table).
- **Use `$baseline-builder`:** propose the simplest baseline + metric + critical slices before any complex model.
- **Done when:** coefficients agree within 1e-2; threshold chosen by cost; the memo names why a complex model isn't yet justified.
- **Stretch:** add L2 and show the coefficient shrinkage vs the unregularized fit.

### Harness / reusable skill — `$baseline-builder`
- **Purpose:** for any new dataset, propose the simplest reasonable baseline + evaluation plan before any complex model.
- **Inputs:** dataset + target. **Outputs:** naive baseline, first interpretable model, metric, critical slices,
  one reason a complex model is *not yet* justified. **Evidence artifact:** a baseline memo.

### Common failure modes
- **Skipping the baseline** → no yardstick. **Interpretability-as-weakness** → discarding a strong simple model.
  **Default-threshold reflex** → 0.5 when costs are asymmetric. **Causal overclaim** from coefficients.
  *Fixes:* baseline first; earn complexity; choose thresholds by cost; say "associated with," not "causes."

### Evidence artifact
`evidence/week06-baseline-memo.md` for both cases.

### Skill sink-in
Predict which feature gets the largest logistic weight for ticket urgency; fit; compare; explain the surprise.

### Readings & sources
- Source book Ch. 4 (first models). CS229 (GLMs/logistic). Vizuara regression module (sigmoid/cross-entropy/regularization).

---

### State of the Art (June 2026)
- Logistic regression is still the **strong, interpretable baseline** practitioners reach for before an LLM; the "earn complexity" discipline is reinforced by 2026 **model routing** (cheap model first, escalate only when needed).
- The classification head of every transformer is a softmax/logistic layer over the vocabulary — the sigmoid/cross-entropy you build *is* the LLM output layer at `d = vocab`.
- L1/L2 regularization generalizes to **weight decay** in modern training and to **LoRA/DoRA** low-rank constraints in fine-tuning — the same "prefer simpler explanations" principle.

**More detail:** Logistic regression remains the interpretable first baseline (its softmax head is the LLM output layer at `d = vocab`); L1/L2 regularization generalizes to weight decay and to LoRA/DoRA low-rank constraints in fine-tuning. The "earn complexity" discipline is reinforced by 2026 cost-routing — cheap model first, escalate only when needed.

**References & links:**
- [`microsoft/ML-For-Beginners`](https://github.com/microsoft/ML-For-Beginners) — logistic-regression lesson + code
- [scikit-learn — logistic regression](https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression) — the reference to match
- [LoRA (Hu et al., 2021)](https://arxiv.org/abs/2106.09685) — low-rank "regularized update" for LLMs
- [The Elements of Statistical Learning (Hastie, Tibshirani & Friedman)](https://hastie.su.domains/ElemStatLearn/) — GLM/regularization reference
<!-- sota:01L06 -->

## Week 7 — First Models II: Trees, Ensembles & Strong Baselines

**Altitude:** Builder · **Anchor case:** fraud screening — where a "flashy" model is *not* the lesson.

### Learning goals
- Explain decision trees (splits, impurity, depth) and why they suit tabular data.
- Compare majority / logistic / single-tree / random-forest / gradient-boosted on one task with one metric.
- Read feature importance without overclaiming, and spot leakage.

### Concept map
- **Decision tree.** Plain English: a flowchart of yes/no questions. *Split criterion:* Gini/entropy.
  Common mistake: deep trees memorize. **Pruning / max-depth** as the fix.
- **Bagging / Random Forest.** Why it matters: averaging many decorrelated trees reduces variance.
- **Boosting (gradient boosting / XGBoost-style).** Plain English: each tree fixes the previous one's mistakes.
- **Feature importance.** Helpful but narrow and easy to abuse. **Leakage** — the shortcut that lies.

### Hands-on build
- Implement a small decision tree from scratch (Gini, max-depth); then use `sklearn`/`xgboost` for forest & boosting.
- One comparison table: majority, logistic, tree, forest, boosted — with the same metric and split.
- **Deliverable:** comparison table + a slice analysis showing where tree models win (e.g., new-device cross-border).
  **Acceptance:** a justified recommendation, not just "boosting won."

▶ **Practical project:** `krishnaik06/Credit-Card-Fraudlent` — compare tree / random-forest / boosted models on the fraud split and audit for leakage.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install scikit-learn xgboost pandas`; clone `krishnaik06/Credit-Card-Fraudlent` for the fraud data.
2. **Data:** load the fraud table; build a time-aware (not random) train/test split to avoid leakage.
3. **Implement:** a small from-scratch decision tree (Gini, max-depth), then `RandomForestClassifier` + `XGBClassifier`.
4. **Compare:** one table — majority / logistic / tree / forest / boosted — same split, same metric (PR-AUC).
5. **Audit:** check for leakage (e.g., post-event columns); inspect feature importance without overclaiming.
6. **Slice:** report performance on the rare-fraud slice, not just the average.
- **Artifact:** `evidence/week07-model-comparison.md` (comparison table + slice table + justified pick).
- **Use `$tabular-model-review`:** drive the split strategy, slice comparison, leakage notes, and the final recommendation.
- **Done when:** all models share one split/metric; a leakage audit is documented; the pick is justified, not "boosting won."
- **Stretch:** calibrate the boosted model (Platt/isotonic) and re-check the rare-slice precision.

### Harness / reusable skill — `$tabular-model-review`
- **Purpose:** honest structured-data model comparison. **Inputs:** dataset + candidate models.
  **Outputs:** split strategy, slice comparison, leakage notes, calibration concern, justified pick.

### Common failure modes
- **Deep-model prestige** · **single-metric triumph** · **feature-importance overclaim** · **hidden-leakage success** ·
  **baseline shame**. *Fixes:* compare honestly; report several metrics; treat importance as a hint; audit for leakage;
  never be embarrassed to ship a simple winner.

### Evidence artifact
`evidence/week07-model-comparison.md` (table + slice table + recommendation).

### Skill sink-in
Predict which model wins the rare fraud slice before running; compare; record what changed your mind.

### Readings & sources
- Source book Ch. 5 (trees/ensembles). CS181/CS229 (boosting/ensembles). Vizuara decision-trees module.

---

### State of the Art (June 2026)
- **Gradient-boosted trees (XGBoost/LightGBM)** remain SOTA on tabular data in 2026 — frontier LLMs still do not reliably beat them on structured prediction; the "flashy model isn't the lesson" point is current.
- Leakage auditing maps directly to **benchmark decontamination** (a 2026 eval crisis): contaminated test sets produce fake "emergence" — the same shortcut-that-lies you hunt here.
- Feature-importance humility prefigures **mechanistic interpretability / SAEs** — both warn against over-reading a model's internal "explanations."

**More detail:** Gradient-boosted trees (XGBoost/LightGBM) still beat LLMs on most tabular tasks in 2026; the leakage you audit here is the same shortcut that, at LLM scale, becomes benchmark contamination and fake "emergence." Feature-importance humility prefigures the same caution that mechanistic interpretability applies to model internals.

**References & links:**
- [`dmlc/xgboost`](https://github.com/dmlc/xgboost) — gradient-boosting reference
- [XGBoost (Chen & Guestrin, 2016)](https://arxiv.org/abs/1603.02754) — the algorithm
- [scikit-learn — ensembles guide](https://scikit-learn.org/stable/modules/ensemble.html) — RF/boosting in practice
- [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — the fraud project
- [Are Emergent Abilities of LLMs a Mirage? (Schaeffer et al., 2023)](https://arxiv.org/abs/2304.15004) — metric/contamination artifacts
<!-- sota:01L07 -->

## Week 8 — Evaluation, Error Analysis & Experiment Design

**Altitude:** Builder→Engineer · **Anchor case:** is the new fraud model *actually* better?

### Learning goals
- Choose metrics that match the decision (MAE vs F1 vs precision/recall vs AUC) and explain what each hides.
- Run a threshold sweep and a slice analysis; reason about calibration.
- Design an honest experiment (train/val/test, no leakage, one variable at a time).

### Concept map
- **Metric–decision fit.** Plain English: the metric must reward the behavior you actually want.
  Common mistake: optimizing AUC when the deployed threshold is what matters.
- **Threshold sweep.** Why it matters: one model is many classifiers depending on the cutoff.
- **Slices.** Where it matters: averages hide the failures that get you fired (new merchants, rare classes).
- **Calibration.** Plain English: when it says 0.8, is it right 80% of the time?

### Hands-on build
- `eval.py`: confusion matrix, precision/recall/F1, ROC/PR, a threshold sweep CSV, and a per-slice error table.
- Write a one-page evaluation review note deciding whether the experiment supports "the new model is better."
- **Deliverable:** threshold-sweep CSV + slice table + review note. **Acceptance:** the note names at least one
  thing the headline metric hides.

▶ **Practical project:** `krishnaik06/Credit-Card-Fraudlent` — run a threshold sweep + per-slice error table on the fraud model and write the evaluation-review note.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install scikit-learn matplotlib pandas`; reuse the Week-7 fraud model + time-aware split.
2. **Implement:** `eval.py` — confusion matrix, precision/recall/F1, ROC + PR curves.
3. **Sweep:** `threshold_sweep(y, scores)` over 0.05–0.95 → a CSV of (t, precision, recall, F1).
4. **Slice:** build a per-slice error table (e.g., new-merchant, high-amount) from the same predictions.
5. **Decide:** pick the threshold at the recall you actually need; read off the precision cost.
6. **Write:** a one-page review note stating one thing the headline metric hides.
- **Artifact:** `evidence/week08-eval/` (sweep CSV + slice table + review note).
- **Use `$evaluation-review`:** review the result for hidden-metric gaps, threshold/calibration issues, and critical slices.
- **Done when:** the sweep CSV + slice table exist; the note names a real limitation; the threshold is chosen by cost.
- **Stretch:** add a cost-weighted metric and compare the chosen operating point.

### Harness / reusable skill — `$evaluation-review`
- **Purpose:** review any result for what the main metric hides, threshold/calibration issues, critical slices,
  and whether the evidence supports the claim. **Evidence artifact:** the review note.

### Common failure modes
- **Benchmark vanity** (a metric with no comparison/limitation) · **leakage by convenient split** · **slice blindness** ·
  **metric worship before framing**. *Fixes:* metric+comparison+limitation together; time-aware splits; always slice.

### Evidence artifact
`evidence/week08-eval/` (sweep CSV, slice table, review note).

### Skill sink-in
Predict the precision at the recall you need *before* sweeping the threshold; sweep; revise the deployment recommendation.

### Readings & sources
- Source book Ch. 6 (evaluation/error analysis). CMU 11-711 "Evaluation Techniques." Krish Naik (LLM-as-judge preview).

---

### State of the Art (June 2026)
- 2026 evaluation has gone **execution-based and reliability-aware**: **SWE-bench Verified**, **τ²-bench pass^k**, **ARC-AGI-2** — the "metric must match the decision" lesson, now with k-for-k reliability instead of single-shot accuracy.
- **LLM-as-judge** is the default scaled evaluator but carries documented biases (TrustJudge); slice analysis and calibration are exactly the guards against trusting an averaged judge score.
- Frameworks **LangSmith, Braintrust, Arize Phoenix, DeepEval, RAGAS, UK AISI Inspect AI** operationalize the threshold-sweep + slice-table discipline you build by hand.

**More detail:** 2026 evaluation is execution-based and reliability-aware (SWE-bench Verified, τ²-bench pass^k); LLM-as-judge is the default scaled grader but carries documented biases, so slice + calibration analysis remains essential. The "metric must match the decision" lesson now means k-for-k reliability, not single-shot accuracy.

**References & links:**
- [`EleutherAI/lm-evaluation-harness`](https://github.com/EleutherAI/lm-evaluation-harness) — standard eval harness
- [`princeton-nlp/SWE-bench`](https://github.com/princeton-nlp/SWE-bench) — execution-based agent eval
- [τ-bench (Yao et al., 2024)](https://arxiv.org/abs/2406.12045) — pass^k reliability
- [scikit-learn — model-evaluation metrics](https://scikit-learn.org/stable/modules/model_evaluation.html) — PR/ROC/threshold tooling
- [The Relationship Between Precision-Recall and ROC (Davis & Goadrich, 2006)](https://www.biostat.wisc.edu/~page/rocpr.pdf) — why PR for rare classes
<!-- sota:01L08 -->

## Week 9 — Bias, Variance, Regularization & Generalization (Learning-Theory Intuition)

**Altitude:** Builder→Engineer · **Anchor case:** a model with great training error and a useless test error.

### Learning goals
- Explain the train/val/test split and why low training error is not the ending.
- Diagnose under- vs over-fitting from learning curves; apply regularization and early stopping.
- State capacity / VC-style intuition in plain language (no theorems required).

### Concept map
- **Empirical vs population risk.** Plain English: your data is a sample; the world is the test.
- **Bias–variance.** Plain English: too simple (misses signal) vs too flexible (memorizes noise).
- **Capacity / VC intuition.** Where it matters: more capacity needs more data or more regularization.
  Common mistake: treating a benchmark number as truth without asking about the split.
- **Regularization & early stopping** as capacity control.

### Hands-on build
- `generalization_lab.py`: fit polynomials of increasing degree to the delivery data; plot train vs val error;
  find the overfitting point; add L2 and watch the gap close.
- **Deliverable:** a train-vs-validation curve + a short theory note. **Acceptance:** you can point to the exact
  capacity where validation error turns up.

▶ **Practical project:** `ashishpatel26/500-AI-Machine-Learning-Projects-with-code` — take an overfitting/regularization project; plot train-vs-validation and close the gap with L2.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy scikit-learn matplotlib`; pick an overfitting/regularization project from `ashishpatel26/500-...`.
2. **Data:** `delivery.csv` with engineered polynomial features of degree 1–11.
3. **Implement:** `generalization_lab.py` fitting each degree; record train and validation error.
4. **Diagnose:** find the degree where validation error turns up (the overfitting point).
5. **Regularize:** add L2; sweep the strength and watch the train–val gap close.
6. **Visualize:** plot train-vs-validation curves with the overfit point and the regularized curve overlaid.
- **Artifact:** `evidence/week09-generalization/` (curve + a short theory note).
- **Use `$generalization-translator`:** turn capacity/VC language into one practical lesson + one misuse to avoid.
- **Done when:** you can point to the exact overfitting degree; L2 measurably closes the gap; the note avoids quoting VC bounds as practical.
- **Stretch:** reproduce a mini double-descent curve by pushing capacity well past the interpolation point.

### Harness / reusable skill — `$generalization-translator`
- **Purpose:** translate learning-theory language (capacity, uniform convergence, VC) into a practical lesson +
  one misuse to avoid. **Evidence artifact:** the theory note.

### Common failure modes
- **Training-error celebration** · **capacity denial** · **theory misuse** (quoting VC bounds as if practical).
  *Fixes:* judge on held-out data; match capacity to data; use theory for intuition, not false precision.

### Evidence artifact
`evidence/week09-generalization/` (curve + note).

### Skill sink-in
Predict the polynomial degree where validation error bottoms out; run the sweep; record the gap.

### Readings & sources
- Source book Ch. 18–19 (inductive bias, generalization/VC). CS229 learning-theory notes. Cornell CS4782 (regularization).

---

### State of the Art (June 2026)
- **Scaling laws (Chinchilla and 2026 successors)** are the modern, quantitative face of the capacity/data trade-off — undertrained large models are the bias-variance lesson at frontier scale.
- The **double-descent / "benign overfitting"** thread (Belkin et al.) remains an open 2026 research question; your degree-vs-error curve is the entry point.
- Contamination-driven **fake emergence** (Schaeffer et al.) shows why held-out, decontaminated evaluation — not training error — is the only honest generalization signal in 2026.

**More detail:** Scaling laws (Chinchilla and successors) are the quantitative face of the capacity/data trade-off — a 2026 model undertrained on tokens is the bias-variance lesson at scale; double descent shows the classic U-curve isn't the whole story. Only held-out, decontaminated evaluation — not training error — is an honest generalization signal.

**References & links:**
- [Training Compute-Optimal LLMs / Chinchilla (Hoffmann et al., 2022)](https://arxiv.org/abs/2203.15556) — params-vs-tokens balance
- [Scaling Laws for Neural LMs (Kaplan et al., 2020)](https://arxiv.org/abs/2001.08361) — the original power laws
- [Understanding deep learning requires rethinking generalization (Zhang et al., 2017)](https://arxiv.org/abs/1611.03530) — capacity vs memorization
- [Reconciling modern ML and the bias-variance trade-off (Belkin et al., 2019)](https://arxiv.org/abs/1812.11118) — double descent
- [scikit-learn — validation curves](https://scikit-learn.org/stable/modules/learning_curve.html) — the lab tooling
<!-- sota:01L09 -->

## Week 10 — Capstone: A From-Scratch ML Project With an Evidence Packet

**Altitude:** Builder (graduating to Subject 02) · **Anchor case:** your choice of a small real tabular dataset.

### Learning goals
- Run the full loop on a new dataset: frame → baseline → model → evaluate → critique → rebuild.
- Produce an **evidence packet** that proves judgment, not just a final score.
- Reuse the five skills built this course as a coherent personal harness.

### Concept map (review as a checklist)
- Problem framing (what decision? what's the prediction moment? what would leakage look like?).
- Baseline discipline → model comparison → honest evaluation → generalization check.

### Hands-on build
- Pick a dataset (e.g., California Housing or a Fashion-MNIST subset, per Vizuara's capstones, or your own).
- Ship: framing memo, baseline, ≥3 models compared, threshold/slice evaluation, generalization curve, and a
  written "what I would do next and why." **Deliverable:** `capstone/` folder + 2-page report.
  **Acceptance:** every claim in the report points to a file in the evidence packet.

▶ **Practical project:** `krishnaik06/Data-Science-Projects-For-Resumes` — pick one end-to-end project and ship it as your capstone evidence packet (framing → baseline → compare → eval).

**Build it — step by step (AI-builder lab):**
1. **Setup:** local `uv` env + Colab; `pip install scikit-learn pandas matplotlib`; pick one project from `krishnaik06/Data-Science-Projects-For-Resumes` (or California Housing).
2. **Frame:** write `framing-memo.md` — the decision, prediction moment, and what leakage would look like.
3. **Baseline:** ship a predict-the-mean/majority baseline with its metric.
4. **Model:** train ≥3 models on one split; compare honestly (reuse the Week-7 review).
5. **Evaluate:** threshold sweep + slice table + a generalization curve.
6. **Assemble:** bundle framing + baseline + comparison + eval + generalization into `capstone/` with a 2-page report.
- **Artifact:** a `capstone/` folder where every claim in `report.md` links to a file.
- **Use `$project-evidence-packet`:** assemble the framing memo + baseline + comparison + eval note into one reviewable bundle.
- **Done when:** the loop is complete (frame→baseline→compare→eval→generalize); every report claim links to an artifact; a defended next experiment is stated.
- **Stretch:** wrap the model in a small Streamlit app that shows a prediction + its uncertainty.

### Harness / reusable skill — `$project-evidence-packet`
- **Purpose:** assemble framing memo + baseline + comparison + eval note + generalization note into one
  reviewable bundle. **Evidence artifact:** the packet itself (this *is* the deliverable).

### Common failure modes
- **Score-only reporting** (no evidence trail) · **skipping framing** · **no next-step reasoning**.
  *Fixes:* link every claim to a file; frame before modeling; end with a defended next experiment.

### Evidence artifact
`capstone/` with all artifacts + the 2-page report.

### Skill sink-in
Before the final run, write down the test metric you expect. Compare. The gap between expectation and result is the
real lesson — record it.

### Readings & sources
- Source book Ch. 16 (turning projects into evidence) and Appendix A (capstone blueprints).
- Vizuara capstones (Fashion MNIST, California Housing). Krish Naik end-to-end project structure (for the deployment preview into Subject 09).

---

### State of the Art (June 2026)
- The **evidence-packet** discipline mirrors 2026 governance: **EU AI Act** main obligations apply **Aug 2, 2026** (high-risk Annex III deferred to **Dec 2, 2027** by the Digital Omnibus) — documented data, evaluation, and limitations are now legally relevant.
- **Model Cards** plus one-command reproducible runs (pinned seed/config/data hash) are the industry-standard artifacts your packet anticipates.
- Cost-aware framing (cheap baseline → escalate) reflects the 2026 LLMOps cost trio (**semantic caching + model routing + batching**); judgment about *when* a complex model is justified is the transferable capstone skill.

**More detail:** The evidence-packet discipline mirrors 2026 governance — EU AI Act main obligations apply Aug 2, 2026 (Annex III high-risk deferred to Dec 2, 2027 via the Digital Omnibus) — so documented data, evaluation, and limitations are increasingly mandatory. Model Cards + one-command reproducibility are the industry-standard artifacts your packet anticipates.

**References & links:**
- [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — end-to-end project template
- [Model Cards for Model Reporting (Mitchell et al., 2019)](https://arxiv.org/abs/1810.03993) — the artifact standard
- [EU AI Act — official explorer](https://artificialintelligenceact.eu/) — obligations + timeline
- [Hugging Face — Model Cards guide](https://huggingface.co/docs/hub/model-cards) — how to write one
- [Machine Learning Yearning (Ng)](https://www.mlyearning.org/) — error-analysis / project discipline
<!-- sota:01L10 -->

## Course-level outcomes

By the end you can: reason about ML in shapes and gradients; implement the core math, optimization, and first
models from scratch; evaluate honestly; explain generalization; and — most importantly — you have a **reusable
harness** (`$study-harness`, `$shape-checker`, `$gradient-check`, `$training-diagnostics`, `$baseline-builder`,
`$tabular-model-review`, `$evaluation-review`, `$generalization-translator`, `$project-evidence-packet`) plus an
evidence log you carry into Subject 02.

## Skills produced (reused program-wide)
`$study-harness` · `$shape-checker` · `$gradient-check` · `$training-diagnostics` · `$baseline-builder` ·
`$tabular-model-review` · `$evaluation-review` · `$generalization-translator` · `$project-evidence-packet`

---

## Assessment & grading

| Component | Weight | Notes |
|---|---|---|
| Weekly labs (W1–W9 deliverables) | 45% | 5% each × 9 weeks |
| Two quizzes (concepts, after W4 and W9) | 15% | math/probability + generalization |
| Capstone (W10 evidence packet + report) | 30% | every claim must link to an artifact |
| Evidence log & skill reuse (judged W10) | 10% | prediction/result/revision discipline |
| **Total** | **100%** | |

## Tooling & environment (June 2026)

- **Python 3.12**, **NumPy 2.x**, **scikit-learn 1.5+** (only from W6), **matplotlib**, **pandas**.
- **PyTorch 2.x** previewed in W10 as the bridge to Subject 02. **pytest** for unit tests; **uv** for envs; **git** for evidence.
- A single repo `ml-foundations/` with `data/ src/ tests/ evidence/ capstone/`. Seeded RNG (`np.random.default_rng(0)`).

## Per-week depth pack (datasets · code stubs · grading rubrics · weights · papers)

> The 10 weeks above carry the full pedagogical narrative. This pack adds, per week, the five depth items required
> program-wide: named dataset, a runnable-shaped code stub, a graded rubric table, the assessment weight, and named papers.

### W1 — matmul & baseline · weight 5%
- **Dataset:** `delivery.csv` (synthetic, provided; ~500 rows: `distance_km, item_count, is_raining, minutes`; CC0).
```python
import numpy as np
def matmul(A, B):                      # A:(m,k) B:(k,n) -> (m,n)
    m, k = A.shape; k2, n = B.shape
    assert k == k2, (A.shape, B.shape)
    C = np.zeros((m, n))
    for i in range(m):
        for j in range(n):
            C[i, j] = sum(A[i, t] * B[t, j] for t in range(k))
    return C
assert np.allclose(matmul(np.random.rand(8,5), np.random.rand(5,3)),
                   np.random.rand(8,5) @ np.random.rand(5,3)) is False  # use SAME arrays in your test
```
| Criterion | Excellent | Failing |
|---|---|---|
| Correctness | matches `np.dot` to 1e-9 | wrong shapes / mismatch |
| Evidence | timing ratio recorded w/ units | no benchmark file |
| Reproducibility | seeded, one-command run | non-deterministic |
- **Papers/refs:** Goodfellow, Bengio, Courville, *Deep Learning* (2016) ch.2; Harris et al., "Array programming with NumPy," *Nature* (2020).

### W2 — linear algebra / shapes · weight 5%
- **Dataset:** same `delivery.csv` (batched).
```python
def standardize(X):                    # X:(n,d) -> (n,d), plus mean/std for reuse
    mu = X.mean(axis=0); sd = X.std(axis=0) + 1e-8
    return (X - mu) / sd, mu, sd       # broadcasting (n,d)-(d,) -> (n,d)
```
| Criterion | Excellent | Failing |
|---|---|---|
| Shape reasoning | every line annotated, asserts pass | guesses `.T` until it runs |
| Vectorization | looped == vectorized output | mismatched results |
- **Papers/refs:** Strang, *Introduction to Linear Algebra* (6e, 2023); 3Blue1Brown *Essence of Linear Algebra*.

### W3 — gradients & gradient-check · weight 5%
- **Dataset:** `delivery.csv`.
```python
def numerical_grad(f, w, eps=1e-5):    # central differences
    g = np.zeros_like(w)
    for i in range(w.size):
        e = np.zeros_like(w); e[i] = eps
        g[i] = (f(w + e) - f(w - e)) / (2 * eps)
    return g
# assert np.max(np.abs(numerical_grad(loss, w) - analytic_grad(w))) < 1e-6
```
| Criterion | Excellent | Failing |
|---|---|---|
| Gradient check | max abs diff < 1e-6 | no check / fails |
| Reasoning | explains sign of each partial | cannot interpret |
- **Papers/refs:** Rumelhart, Hinton & Williams, "Learning representations by back-propagating errors," *Nature* (1986); CS231n backprop notes.

### W4 — probability & MLE · weight 5%
- **Dataset:** `tickets.csv` (synthetic; `text_len, n_links, urgent∈{0,1}`; CC0).
```python
# squared error == Gaussian-noise MLE; cross-entropy == Bernoulli MLE
nll_gauss = lambda y, yhat: 0.5*np.mean((y-yhat)**2)            # up to constant
nll_bern  = lambda y, p: -np.mean(y*np.log(p)+(1-y)*np.log(1-p))
```
| Criterion | Excellent | Failing |
|---|---|---|
| Derivation | loss-from-likelihood shown + numeric match | asserts without showing |
| Base rates | reports positive rate, interprets | ignores imbalance |
- **Papers/refs:** Bishop, *Pattern Recognition and Machine Learning* (2006) ch.1–2; Nelder & Wedderburn, "Generalized Linear Models," *JRSS-A* (1972).

### W5 — gradient descent from scratch · weight 5%
- **Dataset:** `delivery.csv`.
```python
def gd(X, y, lr=0.01, epochs=200, seed=0):
    rng = np.random.default_rng(seed); w = rng.normal(size=X.shape[1]); b = 0.0
    hist = []
    for _ in range(epochs):
        yhat = X@w + b; err = yhat - y
        w -= lr*(X.T@err)/len(y); b -= lr*err.mean()
        hist.append(np.mean(err**2))
    return w, b, hist                  # plot hist; save stable & diverging runs
```
| Criterion | Excellent | Failing |
|---|---|---|
| Convergence | beats W1 baseline MAE | worse than mean |
| Diagnostics | LR sweep + read curve | no logging |
- **Papers/refs:** Bottou, "Large-Scale ML with SGD," *COMPSTAT* (2010); Kingma & Ba, "Adam," *ICLR* (2015).

### W6 — linear & logistic regression · weight 5%
- **Dataset:** `delivery.csv` (reg) + `tickets.csv` (clf); compare to `sklearn`.
```python
def logreg_fit(X, y, lr=0.1, epochs=500):
    w = np.zeros(X.shape[1]); b = 0.0
    for _ in range(epochs):
        p = 1/(1+np.exp(-(X@w+b)))     # (n,)
        w -= lr*(X.T@(p-y))/len(y); b -= lr*(p-y).mean()
    return w, b
```
| Criterion | Excellent | Failing |
|---|---|---|
| Parity | coeffs match sklearn within 1e-2 | large divergence |
| Threshold | chosen by cost, not 0.5 default | blind 0.5 |
- **Papers/refs:** Hastie, Tibshirani & Friedman, *Elements of Statistical Learning* (2e, 2009) ch.4; Pedregosa et al., "scikit-learn," *JMLR* (2011).

### W7 — trees & ensembles · weight 5%
- **Dataset:** IEEE-CIS Fraud subset (kaggle.com/c/ieee-fraud-detection) or provided `fraud_small.csv`.
```python
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier
models = {"majority": None, "logreg": ..., "tree": ..., "forest": RandomForestClassifier(),
          "xgb": XGBClassifier(n_estimators=300, max_depth=4)}  # one metric, one split, slice table
```
| Criterion | Excellent | Failing |
|---|---|---|
| Honest compare | same split/metric, slice table | cherry-picked metric |
| Leakage | audited & noted | hidden leakage win |
- **Papers/refs:** Breiman, "Random Forests," *ML* (2001); Chen & Guestrin, "XGBoost," *KDD* (2016); Friedman, "Greedy Function Approximation," *Annals of Statistics* (2001).

### W8 — evaluation & error analysis · weight 5%
- **Dataset:** fraud subset (held-out, time-aware split).
```python
def threshold_sweep(y, scores, ts=np.linspace(0.05,0.95,19)):
    rows=[]
    for t in ts:
        pred=(scores>=t).astype(int)
        tp=((pred==1)&(y==1)).sum(); fp=((pred==1)&(y==0)).sum(); fn=((pred==0)&(y==1)).sum()
        prec=tp/(tp+fp+1e-9); rec=tp/(tp+fn+1e-9)
        rows.append((t,prec,rec,2*prec*rec/(prec+rec+1e-9)))
    return rows                        # -> CSV; also per-slice error table
```
| Criterion | Excellent | Failing |
|---|---|---|
| Metric fit | metric matches the decision | AUC-only when threshold matters |
| Slices | critical slices reported | average-only |
- **Papers/refs:** Davis & Goadrich, "The Relationship Between PR and ROC," *ICML* (2006); Saito & Rehmsmeier, "Precision-Recall Plot," *PLoS ONE* (2015).

### W9 — generalization & regularization · weight 5%
- **Dataset:** `delivery.csv` with engineered polynomial features.
```python
for degree in range(1, 12):
    Xp = poly_features(X, degree)
    tr, va = fit_and_eval(Xp, y)       # plot train vs val; add L2; watch gap close
```
| Criterion | Excellent | Failing |
|---|---|---|
| Diagnosis | identifies overfit point | reads only train error |
| Capacity control | L2/early-stop closes gap | no remedy |
- **Papers/refs:** Zhang et al., "Understanding deep learning requires rethinking generalization," *ICLR* (2017); Belkin et al., "Reconciling modern ML and the bias-variance trade-off," *PNAS* (2019); Vapnik, *The Nature of Statistical Learning Theory* (1995).

### W10 — capstone · weight 30% (course-level)
- **Dataset:** California Housing (`sklearn.datasets.fetch_california_housing`, 20 640 rows) or Fashion-MNIST (Xiao et al. 2017, MIT, 70k) or your own.
```text
capstone/
  framing-memo.md   baseline.py   models/   eval/ (sweep.csv, slices.md)   generalization.md   report.md
# acceptance: every claim in report.md links to a file in capstone/
```
| Criterion | Excellent | Failing |
|---|---|---|
| Loop completeness | frame→baseline→compare→eval→generalize all present | skips stages |
| Evidence trail | every claim → an artifact | score-only report |
| Next-step reasoning | defended next experiment | none |
- **Papers/refs:** Ng, *Machine Learning Yearning* (2018); source book ch.16 + Appendix A (capstone blueprints).

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; re-verify — full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `microsoft/ML-For-Beginners` (~87k★) — 12-week classical-ML curriculum with runnable code; reinforces Lectures 6–7 (linear/logistic regression, trees & ensembles).
- `microsoft/AI-For-Beginners` (~48k★) — broad ML/AI foundations; supports the framing in Lectures 1–5 (data matrix, probability, the learning problem).
- `ashishpatel26/500-AI-Machine-Learning-Projects-with-code` (~35k★) — 500-project bank for choosing a real tabular dataset for the Lecture 10 capstone.
- `krishnaik06/mlproject` — canonical end-to-end ML template (CI, pipelines, deploy); a structure reference for the Lecture 10 evidence packet and the bridge into Subject 09.
- `rasbt/LLMs-from-scratch` (~98k★) — preview of the build-every-component-without-libraries philosophy you carry into Subject 02; optional Lecture 10 bridge.

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Synthetic-data audit** — real+synthetic vs real-only with an artifact / model-collapse check — *maps to Lectures 8–9 (honest evaluation + generalization)*.
- **AI tutor for underserved learners** (public-good track) — hint-first tutoring with a learning-gain eval and a human-review UX — *maps to Lecture 10 (capstone option)*.



# Part B — Deep Learning & the Transformer, Built by Hand

**Track:** Core · **Altitude:** Learner→Builder · **Length:** 12 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 01 (math/ML from scratch) or equivalent — you can read an ML equation as
shapes, hand-derive a gradient, gradient-check it, and run a clean experiment with baselines.
**Pedagogy:** Vizuara-style *build-every-component-without-libraries* (NumPy first), then re-implement
in PyTorch once you have earned the abstraction; the book's *concept → code → critique → reflection →
rebuild* loop throughout. You will not `import torch.nn` until Week 4, and only after a NumPy MLP +
backprop that you derived by hand.

**Course anchor cases (carried all 12 weeks):**
1. **Fashion-MNIST** (vision) — a 10-class clothing classifier you grow from a NumPy MLP → CNN.
2. **A tiny character/BPE language model** — first an RNN/LSTM, then a from-scratch Transformer, then a
   small GPT trained on TinyShakespeare and a WikiText-2 subset.
Every new idea (backprop, Adam, batchnorm, attention, positional encodings) lands first on a familiar
case before it generalizes.

**What you leave with:** a personal `dl-from-scratch/` repo containing (a) `micrograd`-style scalar
autodiff, (b) a NumPy MLP with hand-derived backprop, (c) a PyTorch re-implementation, (d) a CNN, an
LSTM, a full Transformer block, and a trained ~10M-parameter GPT, plus seven reusable skills and an
evidence log — not a folder of finished notebooks.

---


## Course-level Assessment & grading

| Component | Weight | What it measures |
|-----------|--------|------------------|
| Weekly labs (12 × graded deliverable) | 60% | the from-scratch builds + evidence artifacts (per-week weights below) |
| Two quizzes (Wk 4 mechanics, Wk 9 attention/transformer) | 10% | conceptual fluency, shape reasoning, gradient derivation |
| Mid-course checkpoint (Wk 6: NumPy→PyTorch parity report) | 10% | reproducibility + the discipline of matching a hand build to a framework |
| Capstone (Wk 12: trained small GPT + evidence packet) | 20% | end-to-end judgment, training diagnostics, honest evaluation |
| **Total** | **100%** | |

Per-week lab weights (the 60% lab bucket, summing to 60): W1 4 · W2 6 · W3 5 · W4 5 · W5 6 · W6 5 ·
W7 5 · W8 6 · W9 6 · W10 6 · W11 6. Week 12 is graded under the capstone (20%). (Quizzes 10% +
checkpoint 10% + capstone 20% + labs 60% = 100%.)

## Tooling & environment (June 2026)

- **Python 3.12**, **NumPy 2.2**, **PyTorch 2.7** (CUDA 12.6 build), **einops 0.8**, **matplotlib 3.10**.
- **Hugging Face**: `datasets 3.x`, `tokenizers 0.21`, `transformers 4.5x` (used only for tokenizer
  comparison and dataset loading, never to hide the model internals you are building).
- **Experiment tracking:** **Weights & Biases (`wandb` 0.18)** or **Trackio** (local); **TensorBoard** acceptable.
- **Compute:** a single 16 GB GPU is enough for everything through Week 12 (Colab T4/A100, a 4090, or a
  Modal/RunPod serverless GPU). CPU-only works through Week 6.
- **Repro:** `uv` for envs, pinned deps, one global `seed_everything(seed)` helper, deterministic dataloaders.
- **Reference texts:** Prince, *Understanding Deep Learning* (2023, free PDF); Bishop & Bishop,
  *Deep Learning: Foundations and Concepts* (2024). Karpathy's *Zero-to-Hero* / *nanoGPT* as the spine.

---

## Week 1 — The Neuron, the Forward Pass, and Scalar Autodiff From Scratch

**Altitude:** Learner · **Format:** 3h lecture + 4h lab
**Anchor case:** Fashion-MNIST as a flat 784-vector; build one neuron, then a layer, predicting a single class logit.

### Learning goals
- Explain a feed-forward layer as `affine → nonlinearity` and predict every shape in the forward pass.
- Build a scalar autodiff engine (`Value` with `+`, `*`, `tanh`, `.backward()`) à la `micrograd`.
- Explain why a computation graph is the right data structure for learning.
- Load Fashion-MNIST, normalize it, and reason about why pixel scaling matters.

### Concept map
- **Artificial neuron.** *Formula:* `a = φ(wᵀx + b)`. *Symbols:* `x∈ℝ^d` input, `w∈ℝ^d` weights, `b∈ℝ`
  bias, `φ` nonlinearity. *Shapes:* `(d)·(d)→scalar → scalar`. *Plain English:* weigh the inputs, add a
  bias, squash. *Tiny example:* `x=[0.5,-1]`, `w=[2,1]`, `b=0` → `wᵀx=0` → `tanh(0)=0`. *Code mapping:*
  `a = np.tanh(w @ x + b)`. *Common mistake:* forgetting the bias term and wondering why the decision
  boundary must pass through the origin.
- **Computation graph & reverse-mode autodiff.** *Plain English:* record every operation so you can
  replay slopes backward. Where it matters: this *is* what PyTorch's `autograd` does — you build the toy
  version so the real one is never magic. *Common mistake:* summing gradients into the wrong node when a
  value is reused (the `+=` vs `=` bug).
- **Nonlinearity necessity.** Why it matters: stacked affine maps collapse to one affine map; `φ` is what
  buys depth. *Common mistake:* a "deep" net with no activations that is secretly linear regression.
- **Input normalization.** Plain English: center and scale pixels to `[0,1]` or zero-mean/unit-var so
  early gradients are well-conditioned.

### Hands-on build (the lab)
- `engine.py`: a `Value` class wrapping a float with `.data`, `.grad`, `_backward`, supporting `+ * tanh
  relu exp` and a topological-sort `.backward()`. Unit-test each op's gradient against finite differences.
- `neuron.py`: `Neuron`, `Layer`, `MLP` built on `Value`; do a forward pass on one Fashion-MNIST image.
- **Deliverable:** `engine.py` + tests that pass a finite-difference gradient check to 1e-6.
  **Acceptance:** `(a*b + a.tanh()).backward()` matches numerical gradients; an `MLP([784,16,10])` produces a 10-vector.

▶ **Practical project:** `VizuaraAI/visual-ai-book` — follow its NN-from-scratch track to build a neuron, a forward pass, and a scalar-autodiff engine.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy matplotlib`; open the `VizuaraAI/visual-ai-book` NN-from-scratch chapter.
2. **Implement:** `engine.py` — a `Value` class with `+ * tanh relu exp` and a topo-sort `.backward()`.
3. **Test:** finite-difference gradient-check each op to 1e-6, including a reused node (`d = a*b + a`).
4. **Build net:** `neuron.py` with `Neuron/Layer/MLP` on `Value`; forward-pass one Fashion-MNIST image (784→16→10).
5. **Normalize:** scale pixels to [0,1]; confirm `tanh` isn't saturated by plotting the activation histogram.
6. **Trace:** print the topo-ordered node list + each local derivative for one small expression.
- **Artifact:** `engine.py` + `evidence/week01-autodiff-check.md` (per-op gradient-check table).
- **Use `$autodiff-tracer`:** draw the graph and verify each local gradient via finite differences.
- **Done when:** all ops pass FD-check < 1e-6 incl. reused nodes; `MLP([784,16,10])` returns a 10-vector; pixels normalized.
- **Stretch:** add a `pow`/`exp` op and extend the gradient-check suite.

### Harness / reusable skill — `$autodiff-tracer`
- **Purpose:** for any small expression, draw/print the computation graph and verify each local gradient.
- **Inputs:** an expression built from `Value` ops. **Outputs:** the topo-ordered node list, each node's
  local derivative, and a finite-difference pass/fail per leaf.
- **Minimal workflow:** build expr → `.backward()` → numerically perturb each leaf → diff. **Evidence
  artifact:** `evidence/week01-autodiff-check.md`.

### Common failure modes
- **Gradient accumulation bug** (overwriting instead of `+=` when a node feeds two children) → wrong
  grads that still "look reasonable." *Fix:* always `node.grad += ...` in `_backward`; test a reused value.
- **Topo-sort errors** → some nodes never get their `_backward` called. *Fix:* assert every node visited once.
- **Un-normalized pixels** → saturated `tanh`, dead gradients on image 1. *Fix:* scale to `[0,1]`, verify the histogram.

### Evidence artifact
`evidence/week01-autodiff-check.md` (per-op gradient-check table) + the graph print for one MLP forward pass.

### Skill sink-in
Before running, **predict** the gradient of `d = a*b + a` w.r.t. `a` at `a=3, b=4`. Run `.backward()`.
Record the **result** and what **changed** in your understanding of why `a` appears twice.

### Dataset(s)
**Fashion-MNIST** — `huggingface.co/datasets/zalando-datasets/fashion_mnist` (also `keras.datasets`).
70,000 grayscale 28×28 images (60k train / 10k test), 10 classes. **License:** MIT. ~30 MB.

### Code stub
```python
import numpy as np

class Value:
    def __init__(self, data, _children=()):
        self.data = float(data); self.grad = 0.0
        self._backward = lambda: None; self._prev = set(_children)
    def __mul__(self, other):
        other = other if isinstance(other, Value) else Value(other)
        out = Value(self.data * other.data, (self, other))
        def _backward():                 # TODO: accumulate, don't overwrite
            self.grad  += other.data * out.grad
            other.grad += self.data  * out.grad
        out._backward = _backward; return out
    def tanh(self):
        t = np.tanh(self.data); out = Value(t, (self,))
        out._backward = lambda: None     # TODO: dt = (1 - t**2) * out.grad
        return out
    def backward(self):
        topo, seen = [], set()
        def build(v):                    # TODO: post-order DFS over self._prev
            ...
        build(self); self.grad = 1.0
        for v in reversed(topo): v._backward()
```

### Graded rubric (Week 1 deliverable)
| Criterion | Excellent (full) | Adequate (partial) | Failing |
|-----------|------------------|--------------------|---------|
| Autodiff correctness | all ops pass FD check < 1e-6, incl. reused nodes | passes for simple exprs only | grads wrong or no check |
| Shape/forward pass | `MLP([784,16,10])` returns correct 10-vector, shapes annotated | runs but shapes unverified | crashes |
| Evidence | clean per-op check table committed | partial table | none |
| Reproducibility | seeded, `uv` env, one-command run | runs with tweaks | not runnable |

**Assessment weight:** 4% of course grade.

### Readings & sources (2025–2026)
- Karpathy, A. (2022). *The spelled-out intro to neural networks and backpropagation: building micrograd.* (video + repo).
- Prince, S. (2023). *Understanding Deep Learning*, Ch. 3 (shallow networks). MIT Press.
- Baydin, Pearlmutter, Radul & Siskind (2018). *Automatic Differentiation in Machine Learning: a Survey.* JMLR.
- Vizuara, *Build a Neural Network from Scratch* — neuron & forward-pass module.

---

### State of the Art (June 2026)
- Your `Value`/micrograd engine is the conceptual core of **PyTorch 2.7 autograd**, the trainer behind every 2026 frontier model; reverse-mode AD has not been displaced.
- Input normalization scales to **RMSNorm** — the 2026 default norm in **Llama 4 / Qwen 3.5 / DeepSeek V4** — the same "condition the activations" motive you meet on image 1.
- The compute graph you record is what frameworks lower to fused kernels (**FlashAttention-4**, Blackwell); graph thinking is the bridge from toy to frontier.

**More detail:** Your `Value`/micrograd engine is conceptually PyTorch 2.7 autograd; input normalization scales to RMSNorm — the 2026 default norm in Llama 4 / Qwen 3.5 / DeepSeek V4 — and the recorded compute graph is what frameworks fuse into kernels like FlashAttention-4. Reverse-mode AD has not been displaced.

**References & links:**
- [`karpathy/micrograd`](https://github.com/karpathy/micrograd) — the scalar autodiff engine you mirror
- [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — NN-from-scratch track
- [PyTorch autograd mechanics](https://pytorch.org/docs/stable/notes/autograd.html) — the production graph
- [Automatic Differentiation in ML: a Survey (Baydin et al., 2018)](https://arxiv.org/abs/1502.05767) — reverse-mode AD
- [Root Mean Square Layer Normalization (Zhang & Sennrich, 2019)](https://arxiv.org/abs/1910.07467) — RMSNorm
<!-- sota:02L01 -->

## Week 2 — Backpropagation Through an MLP, By Hand (NumPy)

**Altitude:** Learner · **Format:** 3h lecture + 4h lab
**Anchor case:** a 2-layer MLP classifying Fashion-MNIST (784→128→10) trained with hand-derived backprop.

### Learning goals
- Derive the backward pass for a softmax-cross-entropy MLP and express it as matrix operations.
- Implement forward + backward + a training step in pure NumPy (no autodiff), and gradient-check it.
- Explain why batching turns per-example loops into single matrix multiplies.

### Concept map
- **Softmax.** *Formula:* `softmax(z)_k = e^{z_k}/Σ_j e^{z_j}`. *Shapes:* `(B,C)→(B,C)`. *Plain English:*
  turn logits into a probability vector per example. *Code mapping:* subtract `z.max(1, keepdims=True)`
  before `exp` for stability. *Common mistake:* overflow from un-shifted `exp`.
- **Cross-entropy loss.** *Formula:* `L = −(1/B) Σ_i log p_{i,y_i}`. *Symbols:* `B` batch, `y_i` true class.
  *Plain English:* penalize the log-probability you gave the right answer. *Common mistake:* indexing the
  wrong axis when gathering `p_{i,y_i}`.
- **The backward pass.** *Formula (key simplification):* `∂L/∂z = (p − onehot(y))/B`. *Shapes:* `(B,C)`.
  *Plain English:* the gradient at the logits is just "predicted minus true." *Code mapping:* `dz = (p -
  Y)/B`, then `dW2 = A1.T @ dz`. *Common mistake:* re-deriving softmax+CE separately and getting a messy,
  buggy gradient instead of using the clean combined form.
- **Batching.** Why it matters: `Z1 = X @ W1 + b1` with `X:(B,784)` computes the whole batch at once.

### Hands-on build (the lab)
- `mlp_numpy.py`: `forward(X)`, `backward(...)`, `step(lr)` for a 784→128→10 MLP with ReLU + softmax-CE.
- Gradient-check every parameter on a 4-example batch against finite differences (reuse `$gradient-check`
  from Subject 01) before any training.
- Train on Fashion-MNIST; log loss/accuracy per epoch; reach ≥ 85% test accuracy.
- **Deliverable:** training run + gradient-check report. **Acceptance:** grad-check max-abs-diff < 1e-5; test acc ≥ 85%.

▶ **Practical project:** `rasbt/LLMs-from-scratch` — use its Appendix-A autograd intro to cross-check your hand-derived NumPy MLP backward pass.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy torch`; open `rasbt/LLMs-from-scratch` Appendix-A autograd intro.
2. **Data:** Fashion-MNIST 60k/10k, hold out 5k for validation; one-hot the labels.
3. **Implement:** `mlp_numpy.py` — `forward`, `backward` (key: `dz = (p - Y)/B`), `step(lr)` for 784→128→10 with ReLU+softmax-CE.
4. **Cross-check:** rebuild the net in PyTorch (Appendix A) and compare gradients on a 4-example batch.
5. **Train:** run to ≥88% test accuracy; log loss/accuracy per epoch.
6. **Stabilize:** shift logits by the row-max before `exp`; assert no NaNs across seeds.
- **Artifact:** `evidence/week02-backprop-derivation.md` (forward/backward formulas + grad-check) + loss/acc curve.
- **Use `$layer-backprop-derive`:** produce the forward + backward formulas + shapes + a numeric pass/fail before trusting them.
- **Done when:** grad-check max-abs-diff < 1e-5 (vs PyTorch); test acc ≥ 88%; softmax is numerically stable.
- **Stretch:** add a second hidden layer and re-derive/re-check the extra gradients.

### Harness / reusable skill — `$layer-backprop-derive`
- **Purpose:** for any layer, produce the forward formula, the backward formula, the shapes, and a
  finite-difference check before trusting it.
- **Inputs:** a layer's forward expression. **Outputs:** `dInput`, `dParams` formulas + a numeric pass/fail.
- **Evidence artifact:** `evidence/week02-backprop-derivation.md`.

### Common failure modes
- **Softmax overflow** → `nan` loss. *Fix:* subtract the row-max before `exp`.
- **Axis confusion in CE** → loss decreases but accuracy doesn't. *Fix:* assert `p.shape`, test one example by hand.
- **Wrong `1/B` scaling** → gradients off by a constant; LR "feels" wrong. *Fix:* keep the batch-average explicit.
- **Forgetting ReLU's gradient mask** → gradient flows through dead units. *Fix:* `dZ1[Z1<=0] = 0`.

### Evidence artifact
`evidence/week02-backprop-derivation.md` (forward/backward formulas + grad-check table) and the loss/acc curve.

### Skill sink-in
Predict the test accuracy of a 784→128→10 MLP before training. Train it. Record the gap and one hypothesis for it.

### Dataset(s)
**Fashion-MNIST** (as Week 1). Use the standard 60k/10k split; hold out 5k of train as validation.

### Code stub
```python
import numpy as np

def forward(X, W1, b1, W2, b2):
    Z1 = X @ W1 + b1            # (B,784)@(784,128) -> (B,128)
    A1 = np.maximum(0, Z1)      # ReLU
    Z2 = A1 @ W2 + b2           # (B,128)@(128,10) -> (B,10)
    Z2 -= Z2.max(1, keepdims=True)
    P = np.exp(Z2); P /= P.sum(1, keepdims=True)   # softmax
    return Z1, A1, P

def backward(X, Z1, A1, P, Y, W2):     # Y is one-hot (B,10)
    B = X.shape[0]
    dZ2 = (P - Y) / B                  # KEY: predicted - true
    dW2 = A1.T @ dZ2;  db2 = dZ2.sum(0)
    dA1 = dZ2 @ W2.T
    dZ1 = dA1 * (Z1 > 0)              # TODO: ReLU mask
    dW1 = X.T @ dZ1;  db1 = dZ1.sum(0)
    return dW1, db1, dW2, db2
```

### Graded rubric (Week 2 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Gradient correctness | all params FD-checked < 1e-5 | a subset checked | not checked / wrong |
| Accuracy | ≥ 88% test | 82–88% | < 82% or not reported |
| Numerical stability | shifted softmax, no nans across seeds | occasional nan | nan loss |
| Evidence | derivation + curves committed | partial | none |

**Assessment weight:** 6%.

### Readings & sources
- Rumelhart, Hinton & Williams (1986). *Learning representations by back-propagating errors.* Nature.
- LeCun, Bottou, Orr & Müller (1998/2012). *Efficient BackProp.* (the practitioner's classic).
- Prince (2023), *Understanding Deep Learning*, Ch. 6–7 (loss, fitting, backprop).
- MIT 6.7960 (Fall 2025) lecture: *SGD / backprop / autodiff.*

---

### State of the Art (June 2026)
- The `(p − onehot(y))/B` softmax-CE gradient you derive is the exact output-layer gradient of every LLM trained in 2026 — the vocab-sized version of this MLP.
- Hand-derived backprop + grad-check is still how custom kernels (e.g., a **FlashAttention-4** backward, fused MoE) are validated at the frontier.
- ReLU's gradient mask generalizes to **SwiGLU/GeGLU** gating used in 2026 transformer MLPs — the same "which units pass gradient" reasoning.

**More detail:** The `(p − onehot(y))/B` softmax-CE gradient you derive is the exact output-layer gradient of every 2026 LLM (vocab-sized); ReLU's gradient mask generalizes to the SwiGLU/GeGLU gating used in modern transformer MLPs. Hand-derived backprop + grad-check is still how custom kernels are validated.

**References & links:**
- [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — Appendix-A autograd intro
- [Efficient BackProp (LeCun et al., 1998)](http://yann.lecun.com/exdb/publis/pdf/lecun-98b.pdf) — the practitioner's classic
- [PyTorch CrossEntropyLoss docs](https://pytorch.org/docs/stable/generated/torch.nn.CrossEntropyLoss.html) — the fused softmax-CE
- [GLU Variants Improve Transformer / SwiGLU (Shazeer, 2020)](https://arxiv.org/abs/2002.05202) — gated MLPs
<!-- sota:02L02 -->

## Week 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch

**Altitude:** Learner→Builder · **Format:** 3h lecture + 4h lab
**Anchor case:** the same Fashion-MNIST MLP, now trained four ways; compare convergence on one plot.

### Learning goals
- Implement SGD, SGD+Momentum, RMSProp, and Adam from their update rules in NumPy.
- Explain what each accumulator does (velocity, second moment, bias correction) and when each helps.
- Read a set of loss curves and attribute differences to the optimizer, not luck.

### Concept map
- **SGD.** *Formula:* `θ ← θ − η g`. *Plain English:* step downhill. *Common mistake:* one global LR for
  wildly different-scale parameters.
- **Momentum.** *Formula:* `v ← βv + g; θ ← θ − ηv`. *Symbols:* `β≈0.9` decay. *Plain English:* a heavy
  ball that keeps rolling, damping oscillation. *Common mistake:* expecting momentum to fix a bad LR.
- **RMSProp.** *Formula:* `s ← ρs + (1−ρ)g²; θ ← θ − η g/√(s+ε)`. *Plain English:* per-parameter LR scaled
  by recent gradient size. *Common mistake:* dropping `ε` and dividing by ~0.
- **Adam.** *Formula:* `m←β₁m+(1−β₁)g`, `v←β₂v+(1−β₂)g²`, `m̂=m/(1−β₁ᵗ)`, `v̂=v/(1−β₂ᵗ)`, `θ←θ−η m̂/(√v̂+ε)`.
  *Shapes:* `m,v` match `θ`. *Plain English:* momentum + RMSProp + bias correction. *Common mistake:*
  forgetting bias correction so early steps are tiny; using Adam's default LR (1e-3) for everything blindly.

### Hands-on build (the lab)
- `optim.py`: `SGD`, `Momentum`, `RMSProp`, `Adam` as classes with a uniform `.step(params, grads)` API.
- Train the Week-2 MLP with each; overlay the four loss curves; tabulate epochs-to-90%-train-acc.
- **Deliverable:** four-optimizer comparison plot + table. **Acceptance:** Adam reaches a target loss in
  fewer steps than plain SGD, and you can explain *why* in two sentences referencing the accumulators.

▶ **Practical project:** `rasbt/LLMs-from-scratch` — adapt its training loop to implement and compare SGD / Momentum / RMSProp / Adam on one model.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install numpy torch matplotlib`; reuse the Week-2 MLP; reference the `rasbt/LLMs-from-scratch` training loop.
2. **Implement:** `optim.py` with `SGD`, `Momentum`, `RMSProp`, `Adam` sharing a `.step(params, grads)` API (Adam with bias correction).
3. **Control:** fix the seed; sweep LR per optimizer so the comparison is fair.
4. **Train:** run all four on Fashion-MNIST; record epochs-to-90%-train-accuracy.
5. **Evaluate:** tabulate best-LR + convergence speed per optimizer.
6. **Visualize:** overlay the four loss curves on one plot.
- **Artifact:** `evidence/week03-optim/` (overlaid curves + epochs-to-target table + a 1-paragraph reasoning).
- **Use `$optimizer-bench`:** compare optimizers with matched seeds + LR sweeps and a recommendation.
- **Done when:** all four update rules match reference within noise; Adam beats plain SGD in steps-to-target; differences attributed to the accumulators.
- **Stretch:** add AdamW (decoupled decay) and show its effect on the train–test gap.

### Harness / reusable skill — `$optimizer-bench`
- **Purpose:** fairly compare optimizers on one model/data with matched seeds and LR sweeps.
- **Inputs:** model, data, list of optimizers + LR grid. **Outputs:** convergence table, best-LR per
  optimizer, one-paragraph recommendation. **Evidence artifact:** `evidence/week03-optim/` (plots + table).

### Common failure modes
- **Unfair comparison** (different seeds/LRs) → meaningless "winner." *Fix:* fix seeds, sweep LR per optimizer.
- **Missing bias correction in Adam** → stalls early then catches up. *Fix:* divide by `(1−β^t)`.
- **Epsilon placement** (`/(√v̂+ε)` vs `/√(v̂+ε)`) → subtle instability. *Fix:* match the paper, test tiny `v̂`.
- **LR transfer myth** → reusing SGD's LR for Adam. *Fix:* tune LR per optimizer.

### Evidence artifact
`evidence/week03-optim/` (overlaid curves, epochs-to-target table, 1-paragraph reasoning).

### Skill sink-in
Predict which optimizer reaches 90% train accuracy fastest and by how much. Run the sweep. Record the surprise.

### Dataset(s)
**Fashion-MNIST** (as before). Optionally add **MNIST** (`huggingface.co/datasets/ylecun/mnist`, CC-BY-SA-3.0,
70k 28×28) as a sanity-check easy task to confirm all four optimizers converge.

### Code stub
```python
import numpy as np

class Adam:
    def __init__(self, lr=1e-3, b1=0.9, b2=0.999, eps=1e-8):
        self.lr, self.b1, self.b2, self.eps = lr, b1, b2, eps
        self.m, self.v, self.t = None, None, 0
    def step(self, params, grads):
        if self.m is None:
            self.m = [np.zeros_like(p) for p in params]
            self.v = [np.zeros_like(p) for p in params]
        self.t += 1
        for i, (p, g) in enumerate(zip(params, grads)):
            self.m[i] = self.b1*self.m[i] + (1-self.b1)*g
            self.v[i] = self.b2*self.v[i] + (1-self.b2)*(g*g)
            mhat = self.m[i] / (1 - self.b1**self.t)   # bias correction
            vhat = self.v[i] / (1 - self.b2**self.t)
            p -= self.lr * mhat / (np.sqrt(vhat) + self.eps)
        return params
```

### Graded rubric (Week 3 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Correct update rules | all four match reference within noise | minor bug in one | wrong rules |
| Fair comparison | matched seeds + per-optimizer LR sweep | partial control | uncontrolled |
| Interpretation | attributes differences to accumulators correctly | vague | absent/wrong |
| Evidence | overlaid plot + table | one of them | none |

**Assessment weight:** 5%.

### Readings & sources
- Kingma & Ba (2015). *Adam: A Method for Stochastic Optimization.* ICLR.
- Tieleman & Hinton (2012). *RMSProp* (Coursera lecture 6e).
- Sutskever, Martens, Dahl & Hinton (2013). *On the importance of initialization and momentum in deep learning.* ICML.
- Loshchilov & Hutter (2019). *Decoupled Weight Decay Regularization (AdamW).* ICLR.

---

### State of the Art (June 2026)
- **AdamW** (decoupled decay) is still the default for 2026 frontier pretraining; the Adam you build is unchanged at trillion-param scale.
- Modern twists to preview: **Muon, 8-bit optimizers, and μP hyperparameter transfer** — but bias correction and per-parameter scaling are exactly the accumulators you implement.
- Optimizer-vs-LR fairness (matched seeds/sweeps) is the same rigor that separates a real training improvement from noise in 2026 ablations.

**More detail:** AdamW (decoupled decay) is still the 2026 frontier default; modern twists you can preview include Muon and 8-bit optimizers plus μP hyperparameter transfer, but bias correction + per-parameter scaling are exactly the accumulators you implement. Matched-seed LR sweeps are what separate a real improvement from noise.

**References & links:**
- [Adam (Kingma & Ba, 2015)](https://arxiv.org/abs/1412.6980) — momentum + RMSProp + bias correction
- [Decoupled Weight Decay / AdamW (Loshchilov & Hutter, 2019)](https://arxiv.org/abs/1711.05101) — the production default
- [Tensor Programs V / μTransfer (Yang et al., 2022)](https://arxiv.org/abs/2203.03466) — HP transfer across scale
- [`bitsandbytes-foundation/bitsandbytes`](https://github.com/bitsandbytes-foundation/bitsandbytes) — 8-bit optimizers
- [torch.optim docs](https://pytorch.org/docs/stable/optim.html) — reference optimizers
<!-- sota:02L03 -->

## Week 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)

**Altitude:** Builder · **Format:** 3h lecture + 4h lab · **Quiz 1 (mechanics) this week.**
**Anchor case:** re-implement the Fashion-MNIST MLP in PyTorch, then add regularizers and measure the generalization gap.

### Learning goals
- Re-express the hand-built MLP using `torch.nn` and `torch.autograd`, and verify parity with the NumPy version.
- Explain and implement dropout, batch normalization, and weight decay; state what each regularizes and its train/eval behavior.
- Use a `Dataset`/`DataLoader`, an optimizer, and a training loop idiomatically.

### Concept map
- **`autograd` = your Week-1 engine at scale.** *Plain English:* PyTorch records the same graph you built
  by hand. *Common mistake:* forgetting `optimizer.zero_grad()` so gradients accumulate across steps.
- **Dropout.** *Formula (train):* `ỹ = (mask ⊙ y)/(1−p)`, `mask~Bernoulli(1−p)`. *Shapes:* mask matches `y`.
  *Plain English:* randomly zero units so the net can't rely on any one. *Code mapping:* `nn.Dropout(p)`.
  *Common mistake:* leaving dropout on at eval (forgetting `model.eval()`).
- **Batch normalization.** *Formula:* `x̂=(x−μ_B)/√(σ²_B+ε); y=γx̂+β`. *Symbols:* `μ_B,σ²_B` batch stats,
  `γ,β` learned. *Plain English:* renormalize each feature per batch to stabilize training. *Common
  mistake:* tiny batches → noisy stats; forgetting that eval uses running averages, not batch stats.
- **Weight decay / L2.** *Formula:* `θ ← θ − η(g + λθ)`. *Plain English:* pull weights toward zero. Use
  **AdamW** (decoupled) not naive L2-in-the-loss with Adam. *Common mistake:* double-counting decay.

### Hands-on build (the lab)
- `mlp_torch.py`: `nn.Module` MLP matching `mlp_numpy.py`; assert outputs agree on a fixed batch to 1e-4
  before training (this is the parity test that mid-course checkpoint formalizes).
- Add dropout + batchnorm + AdamW weight decay; run an ablation (none / +dropout / +bn / +wd / all) and
  report the train–test gap for each.
- **Deliverable:** parity assertion + regularization ablation table. **Acceptance:** NumPy/PyTorch parity
  < 1e-4 on logits; ablation shows a measurable gap reduction with at least one regularizer.

▶ **Practical project:** `microsoft/AI-For-Beginners` — port your MLP to its PyTorch neural-network notebooks and ablate dropout / batchnorm / weight decay.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch torchvision`; open the AI-For-Beginners PyTorch notebooks.
2. **Port:** `mlp_torch.py` (`nn.Module`) matching `mlp_numpy.py`; assert logits agree on a fixed batch to 1e-4.
3. **Add regularizers:** dropout, batchnorm, and AdamW weight decay as toggles.
4. **Ablate:** run none / +dropout / +bn / +wd / all; record train acc, test acc, and the gap each.
5. **Verify modes:** confirm `model.train()` vs `model.eval()` changes dropout/bn behavior; check `zero_grad` each step.
6. **Visualize:** bar-chart the train–test gap per setting.
- **Artifact:** `evidence/week04-ablation.md` (parity log + regularization ablation table).
- **Use `$regularization-ablation`:** quantify each regularizer's effect on the train–test gap with everything else fixed.
- **Done when:** NumPy↔PyTorch parity < 1e-4; ablation is all-else-fixed; at least one regularizer measurably shrinks the gap.
- **Stretch:** add label smoothing and place it in the ablation.

### Harness / reusable skill — `$regularization-ablation`
- **Purpose:** quantify each regularizer's effect on the train–test gap with everything else fixed.
- **Inputs:** a model + a set of regularizers to toggle. **Outputs:** an ablation table (train acc, test
  acc, gap) + a recommendation. **Evidence artifact:** `evidence/week04-ablation.md`.

### Common failure modes
- **`model.train()`/`model.eval()` confusion** → dropout/bn behave wrong at test. *Fix:* set mode explicitly, test both.
- **Missing `zero_grad`** → exploding "ghost" gradients. *Fix:* zero every step; assert grad norms are sane.
- **L2 + Adam double-decay** → over-regularized. *Fix:* use `AdamW` and set `weight_decay` once.
- **BatchNorm with batch size 1** → divide-by-noise. *Fix:* use adequate batch size or LayerNorm.

### Evidence artifact
`evidence/week04-ablation.md` (parity assertion log + regularization ablation table).

### Skill sink-in
Predict which single regularizer closes the train–test gap most. Run the ablation. Record what changed and why.

### Dataset(s)
**Fashion-MNIST** (as before), loaded via `torchvision.datasets.FashionMNIST` (downloads the same MIT-licensed set).

### Code stub
```python
import torch, torch.nn as nn

class MLP(nn.Module):
    def __init__(self, p_drop=0.2, use_bn=True):
        super().__init__()
        self.fc1 = nn.Linear(784, 128)
        self.bn  = nn.BatchNorm1d(128) if use_bn else nn.Identity()
        self.drop = nn.Dropout(p_drop)
        self.fc2 = nn.Linear(128, 10)
    def forward(self, x):
        x = x.view(x.size(0), -1)
        x = self.drop(torch.relu(self.bn(self.fc1(x))))
        return self.fc2(x)                       # raw logits

model = MLP()
opt = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-2)
loss_fn = nn.CrossEntropyLoss()
# TODO: training loop -- model.train(); opt.zero_grad(); loss.backward(); opt.step()
# TODO: eval loop    -- model.eval(); with torch.no_grad(): ...
```

### Graded rubric (Week 4 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| NumPy↔PyTorch parity | logits agree < 1e-4 | < 1e-2 | no parity test |
| Regularization understanding | correct train/eval behavior, AdamW used | minor mode bug | dropout on at eval |
| Ablation rigor | all-else-fixed, gap reported per setting | partial | uncontrolled |
| Evidence | parity log + table | one | none |

**Assessment weight:** 5% (+ Quiz 1 contributes to the 10% quiz bucket).

### Readings & sources
- Srivastava, Hinton, Krizhevsky, Sutskever & Salakhutdinov (2014). *Dropout.* JMLR.
- Ioffe & Szegedy (2015). *Batch Normalization.* ICML.
- Loshchilov & Hutter (2019). *Decoupled Weight Decay Regularization (AdamW).* ICLR.
- Paszke et al. (2019). *PyTorch: An Imperative Style, High-Performance Deep Learning Library.* NeurIPS.

---

### State of the Art (June 2026)
- The NumPy↔PyTorch parity test is the discipline behind every 2026 framework port; **PyTorch 2.7** (CUDA 12.6) + `torch.compile` is the current reference.
- **Weight decay via AdamW** is the production default; **Dropout** persists, but RMSNorm/LayerNorm + residuals carry most of the stabilization in modern stacks.
- The same low-rank "regularized update" idea reappears as **LoRA/QLoRA/DoRA** — the dominant 2026 fine-tuning regularizers (Subject 03).

**More detail:** The NumPy↔PyTorch parity test is the discipline behind every framework port; weight decay via AdamW is the production default, and the same low-rank "regularized update" reappears as LoRA/QLoRA/DoRA in Subject 03. Dropout persists, but RMSNorm/LayerNorm + residuals carry most modern stabilization.

**References & links:**
- [`microsoft/AI-For-Beginners`](https://github.com/microsoft/AI-For-Beginners) — PyTorch NN notebooks
- [Batch Normalization (Ioffe & Szegedy, 2015)](https://arxiv.org/abs/1502.03167) — normalization
- [Dropout (Srivastava et al., 2014)](https://jmlr.org/papers/v15/srivastava14a.html) — the regularizer
- [LoRA (Hu et al., 2021)](https://arxiv.org/abs/2106.09685) — low-rank fine-tuning
- [PyTorch nn docs](https://pytorch.org/docs/stable/nn.html) — Dropout/BatchNorm/AdamW APIs
<!-- sota:02L04 -->

## Week 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST

**Altitude:** Builder · **Format:** 3h lecture + 4h lab
**Anchor case:** beat the MLP on Fashion-MNIST with a small CNN, and *see* what the filters learn.

### Learning goals
- Implement 2D convolution and max-pooling from scratch (NumPy), then use `nn.Conv2d` and confirm parity.
- Reason about channels, kernels, stride, padding, and the output-shape formula.
- Build, train, and regularize a small CNN; visualize first-layer filters and a confusion matrix.

### Concept map
- **Convolution.** *Formula:* `Y[o,i,j] = Σ_{c,u,v} K[o,c,u,v]·X[c,i+u,j+v] + b[o]`. *Symbols:* `o` out-channel,
  `c` in-channel, `(u,v)` kernel offsets. *Shapes:* `X:(C,H,W)`, `K:(O,C,kh,kw)`, `Y:(O,H',W')`. *Plain
  English:* slide a small learned stencil over the image. *Common mistake:* mixing up the channel axis order.
- **Output-size formula.** *Formula:* `H' = ⌊(H + 2P − kh)/S⌋ + 1`. *Symbols:* `P` padding, `S` stride.
  *Common mistake:* off-by-one shape errors that only surface deep in the net.
- **Pooling.** Plain English: downsample by taking the max (or mean) in each window — translation tolerance + fewer params.
- **Parameter sharing.** Why it matters: the same kernel everywhere is why CNNs need far fewer params than an MLP.

### Hands-on build (the lab)
- `conv_numpy.py`: `conv2d_forward` (im2col allowed) + `maxpool2d`; check against `torch.nn.functional.conv2d` to 1e-4.
- `cnn.py`: `Conv→ReLU→Pool→Conv→ReLU→Pool→FC` in PyTorch; train on Fashion-MNIST to ≥ 91% test acc.
- Visualize the 8 first-layer filters and a 10×10 confusion matrix; name the two most-confused classes.
- **Deliverable:** CNN training run + filter grid + confusion matrix. **Acceptance:** test acc ≥ 91% and a
  one-paragraph reading of which classes confuse the model and why (e.g., shirt vs coat vs pullover).

▶ **Practical project:** `krishnaik06/Malaria-Detection` — build and train a small CNN end-to-end on an image dataset, visualize filters, and read the confusion matrix.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch torchvision matplotlib`; clone `krishnaik06/Malaria-Detection` for the image pipeline.
2. **Plan shapes:** before coding, compute every conv/pool output size via `(H+2P-k)/S + 1` into a shape table.
3. **Implement:** `conv_numpy.py` (im2col `conv2d` + `maxpool2d`) checked vs `F.conv2d` to 1e-4.
4. **Build CNN:** `Conv→ReLU→Pool→Conv→ReLU→Pool→FC` in PyTorch; train (Fashion-MNIST or malaria images) to ≥91% / strong AUC.
5. **Evaluate:** plot the 10×10 confusion matrix; name the two most-confused classes.
6. **Visualize:** show the 8 first-layer filters as an image grid.
- **Artifact:** `evidence/week05-shape-table.md` + filter grid + confusion matrix + a 1-paragraph error reading.
- **Use `$conv-shape-planner`:** compute every intermediate shape + param count + one predicted bottleneck before coding.
- **Done when:** NumPy conv matches torch < 1e-4; test acc ≥ 92% (or strong malaria AUC); confused classes named with a reason.
- **Stretch:** add a residual connection and compare accuracy + training stability.

### Harness / reusable skill — `$conv-shape-planner`
- **Purpose:** given an input size and a stack of conv/pool layers, compute every intermediate shape *before* coding.
- **Inputs:** input `(C,H,W)` + layer specs. **Outputs:** a per-layer shape table + total param count + one
  predicted bottleneck. **Evidence artifact:** `evidence/week05-shape-table.md`.

### Common failure modes
- **Shape miscalculation** → runtime error or silent wrong flatten. *Fix:* compute shapes with the formula first.
- **Channel-order bugs** (`NCHW` vs `NHWC`) → garbage features. *Fix:* assert tensor layout at the boundary.
- **Over-pooling** → throwing away spatial info too fast. *Fix:* watch validation acc as you add pools.
- **Reading filters as truth** → over-interpreting noisy early kernels. *Fix:* treat visualizations as hints, not proof.

### Evidence artifact
`evidence/week05-shape-table.md` + the filter grid + confusion matrix image + a 1-paragraph error reading.

### Skill sink-in
Predict the two most-confused Fashion-MNIST classes before training. Inspect the confusion matrix. Record the result.

### Dataset(s)
**Fashion-MNIST** (as before). Optionally **CIFAR-10** (`huggingface.co/datasets/uoft-cs/cifar10`, MIT,
60k 32×32 color, 10 classes, ~170 MB) as a stretch task to see RGB convolutions.

### Code stub
```python
import torch.nn as nn

class SmallCNN(nn.Module):
    def __init__(self, n_classes=10):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(1, 16, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),   # 28->14
            nn.Conv2d(16, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),  # 14->7
        )
        self.head = nn.Sequential(nn.Flatten(), nn.Linear(32*7*7, n_classes))
    def forward(self, x):                 # x: (B,1,28,28)
        return self.head(self.features(x))
# TODO: out_size = (H + 2*P - k)//S + 1 -- verify 28->28->14->14->7 by hand first
```

### Graded rubric (Week 5 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Conv correctness | NumPy conv matches torch < 1e-4 | small mismatch | wrong |
| Test accuracy | ≥ 92% | 89–92% | < 89% |
| Shape reasoning | full shape table, no runtime shape fixes | minor patching | trial-and-error `.T` |
| Error analysis | names confused classes + plausible reason | lists them only | none |

**Assessment weight:** 6%.

### Readings & sources
- LeCun, Bottou, Bengio & Haffner (1998). *Gradient-Based Learning Applied to Document Recognition.* Proc. IEEE.
- Krizhevsky, Sutskever & Hinton (2012). *ImageNet Classification with Deep CNNs (AlexNet).* NeurIPS.
- He, Zhang, Ren & Sun (2016). *Deep Residual Learning (ResNet).* CVPR.
- Cornell CS4782 (Spring 2025) — CNN lectures; Prince (2023) Ch. 10.

---

### State of the Art (June 2026)
- CNNs remain SOTA for many vision tasks, but 2026 multimodal frontier models use **ViT/DiT patch encoders**; your conv/shape reasoning is the bridge to "patchify."
- **DiT (Diffusion Transformer) over spatiotemporal latent patches** is the standard architecture behind 2026 video models (**Sora 2, Veo 3.1, Seedance 2.0**) — convolutional inductive bias vs attention is a live design axis.
- Output-shape arithmetic and channel-order discipline are exactly what make **ColPali/ColQwen3** visual-document encoders correct.

**More detail:** CNNs remain strong for many vision tasks, but 2026 multimodal frontier models use ViT/DiT patch encoders, and DiT-over-spatiotemporal-latents is the standard behind Sora 2 / Veo 3.1; your output-shape + channel-order discipline is what makes those patchifiers correct.

**References & links:**
- [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — end-to-end CNN project
- [Deep Residual Learning / ResNet (He et al., 2015)](https://arxiv.org/abs/1512.03385) — the residual CNN
- [An Image is Worth 16x16 Words / ViT (Dosovitskiy et al., 2020)](https://arxiv.org/abs/2010.11929) — patch encoders
- [Scalable Diffusion Models with Transformers / DiT (Peebles & Xie, 2022)](https://arxiv.org/abs/2212.09748) — video-model backbone
- [PyTorch Conv2d docs](https://pytorch.org/docs/stable/generated/torch.nn.Conv2d.html) — the output-shape formula
<!-- sota:02L05 -->

## Week 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)

**Altitude:** Builder · **Format:** 3h lecture + 4h lab · **Mid-course checkpoint (NumPy→PyTorch parity report) due.**
**Anchor case:** introduce the language-model case — predict the next character of TinyShakespeare with an RNN, then an LSTM.

### Learning goals
- Implement a vanilla RNN cell and the BPTT gradient by hand; explain vanishing/exploding gradients.
- Implement an LSTM cell (gates) and explain how the cell state preserves gradient flow.
- Frame next-token prediction as classification over a vocabulary and train a char-level LM.

### Concept map
- **RNN recurrence.** *Formula:* `h_t = tanh(W_x x_t + W_h h_{t−1} + b)`. *Shapes:* `h_t:(B,H)`. *Plain
  English:* a running summary updated each step. *Common mistake:* not detaching/clipping, so BPTT explodes.
- **BPTT.** *Plain English:* unroll the loop and backprop through every step; gradients multiply across
  time. *Common mistake:* expecting long-range memory from a vanilla RNN.
- **Vanishing/exploding gradients.** *Formula intuition:* `∂h_t/∂h_k = Π W_h·diag(tanh')` → shrinks/grows
  geometrically. *Fix:* gradient clipping, LSTM gating.
- **LSTM gates.** *Formula:* `f,i,o = σ(...)`, `g=tanh(...)`, `c_t = f⊙c_{t−1} + i⊙g`, `h_t = o⊙tanh(c_t)`.
  *Plain English:* gates decide what to forget, write, and read; the additive `c` path is a gradient highway.
  *Common mistake:* initializing the forget-gate bias at 0 instead of ~1 (start by remembering).

### Hands-on build (the lab)
- `rnn_numpy.py`: a vanilla RNN cell + BPTT, gradient-checked on a 5-step sequence.
- `lstm_torch.py`: an LSTM (use `nn.LSTM` or hand-built cell) char-LM on TinyShakespeare; report
  bits-per-character (BPC) and sample 200 characters.
- **Mid-course checkpoint:** a `parity-report.md` showing NumPy↔PyTorch agreement for the MLP (Wk2/4), CNN
  (Wk5), and RNN (this week) on fixed batches.
- **Deliverable:** RNN grad-check + LSTM char-LM (BPC + sample) + parity report.
  **Acceptance:** grad-check < 1e-4; LSTM BPC clearly beats a uniform-character baseline; samples are word-shaped.

▶ **Practical project:** `VizuaraAI/visual-ai-book` — follow its sequence-models chapter to build an RNN/LSTM char-LM and report bits-per-character.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch numpy`; download TinyShakespeare; open the visual-ai-book sequence chapter.
2. **Implement RNN:** `rnn_numpy.py` vanilla cell + BPTT; gradient-check on a 5-step sequence.
3. **Implement LSTM:** `lstm_torch.py` char-LM (forget-gate bias ≈ 1); train on TinyShakespeare.
4. **Stabilize:** add `clip_grad_norm_(…, 1.0)`; confirm no NaN on long sequences.
5. **Evaluate:** report bits-per-character; sample 200 characters and check they're word-shaped.
6. **Sanity:** overfit a single batch to ~0 loss as a correctness check.
- **Artifact:** `evidence/week06-seq-sanity.md` (grad-check + single-batch overfit + sample).
- **Use `$sequence-sanity`:** validate with grad-check + overfit-one-batch + a samples-look-reasonable read.
- **Done when:** RNN grad-check < 1e-4; LSTM BPC clearly beats a uniform baseline; samples are word-shaped.
- **Stretch:** swap in a GRU cell and compare BPC at equal parameters.

### Harness / reusable skill — `$sequence-sanity`
- **Purpose:** validate any sequence model with three cheap checks: grad-check on a short sequence,
  overfit-a-single-batch, and a samples-look-reasonable read.
- **Inputs:** a sequence model + a tiny batch. **Outputs:** grad-check result, single-batch loss→~0 curve,
  a generated sample. **Evidence artifact:** `evidence/week06-seq-sanity.md`.

### Common failure modes
- **Exploding gradients** → `nan` loss on long sequences. *Fix:* `clip_grad_norm_` (e.g., 1.0).
- **No teacher forcing / wrong target shift** → model learns nothing. *Fix:* targets are inputs shifted by one.
- **Forget-gate bias at 0** → slow learning. *Fix:* initialize forget bias ≈ 1.
- **Reporting loss not BPC** → can't compare to references. *Fix:* report bits-per-character.

### Evidence artifact
`evidence/week06-seq-sanity.md` (grad-check + single-batch overfit + sample) and `parity-report.md`.

### Skill sink-in
Predict whether a vanilla RNN or LSTM samples more coherent Shakespeare at equal params. Train both. Record the gap in BPC.

### Dataset(s)
**TinyShakespeare** — `https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt`
(~1.1 MB, ~1M characters; public domain text). Single file, char-vocab ≈ 65.

### Code stub
```python
import torch, torch.nn as nn

class CharLSTM(nn.Module):
    def __init__(self, vocab, emb=128, hid=256, layers=2):
        super().__init__()
        self.embed = nn.Embedding(vocab, emb)
        self.lstm  = nn.LSTM(emb, hid, layers, batch_first=True)
        self.head  = nn.Linear(hid, vocab)
    def forward(self, x, state=None):     # x: (B,T) int tokens
        e = self.embed(x)                 # (B,T,emb)
        out, state = self.lstm(e, state)  # (B,T,hid)
        return self.head(out), state      # logits (B,T,vocab)
# targets = x shifted left by one; loss = CrossEntropy over (B*T, vocab)
# TODO: torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
```

### Graded rubric (Week 6 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| RNN BPTT correctness | grad-check < 1e-4 | < 1e-2 | wrong |
| LM quality | BPC ≈ ≤ 1.6, word-shaped samples | BPC < 2.0 | no better than baseline |
| Stability | clipped, no nan across seeds | rare nan | divergence |
| Parity report | all 4 models matched | partial | missing |

**Assessment weight:** 5% (+ this week carries the 10% mid-course checkpoint).

### Readings & sources
- Hochreiter & Schmidhuber (1997). *Long Short-Term Memory.* Neural Computation.
- Pascanu, Mikolov & Bengio (2013). *On the difficulty of training RNNs.* ICML.
- Karpathy (2015). *The Unreasonable Effectiveness of Recurrent Neural Networks.* (blog + char-rnn).
- Cho et al. (2014). *Learning Phrase Representations using RNN Encoder–Decoder (GRU).* EMNLP.

---

### State of the Art (June 2026)
- RNN/LSTM are largely historical for LMs, but the **vanishing-gradient problem they expose** is precisely why attention won — essential motivation for Weeks 7–8.
- 2026 efficiency research revives recurrence: **state-space / linear-attention hybrids (Mamba-style, and hybrid blocks in several open models)** trade O(T²) attention for O(T) recurrence — the gradient-highway idea you build in the LSTM cell.
- BPC and single-batch-overfit sanity checks remain the cheapest correctness tests for any sequence model in 2026.

**More detail:** RNN/LSTM are historical for LMs but expose the vanishing-gradient problem that motivated attention; 2026 efficiency research revives recurrence via state-space / linear-attention hybrids (Mamba-style) trading O(T²) attention for O(T) recurrence. BPC + single-batch-overfit remain the cheapest sequence-model sanity checks.

**References & links:**
- [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — sequence-models chapter
- [Long Short-Term Memory (Hochreiter & Schmidhuber, 1997)](https://www.bioinf.jku.at/publications/older/2604.pdf) — the LSTM
- [The Unreasonable Effectiveness of RNNs (Karpathy, 2015)](https://karpathy.github.io/2015/05/21/rnn-effectiveness/) — char-RNN
- [Mamba: Linear-Time Sequence Modeling (Gu & Dao, 2023)](https://arxiv.org/abs/2312.00752) — the recurrence revival
- [On the difficulty of training RNNs (Pascanu et al., 2013)](https://arxiv.org/abs/1211.5063) — vanishing/exploding gradients
<!-- sota:02L06 -->

## Week 7 — Attention From Scratch: Why It Replaced Recurrence

**Altitude:** Builder · **Format:** 3h lecture + 4h lab
**Anchor case:** add a single self-attention layer to the char-LM and watch it attend to relevant earlier characters.

### Learning goals
- Derive scaled dot-product attention and implement it in NumPy, then PyTorch, with shape annotations.
- Explain queries/keys/values, the `√d_k` scaling, and causal masking.
- Visualize an attention matrix and interpret what it is (and is not) telling you.

### Concept map
- **Scaled dot-product attention.** *Formula:* `Attention(Q,K,V)=softmax(QKᵀ/√d_k)V`. *Symbols:* `Q:(T,d_k)`
  queries, `K:(T,d_k)` keys, `V:(T,d_v)` values, `d_k` key dim. *Shapes:* `QKᵀ:(T,T)` scores → softmax over
  the last axis → `(T,T)@(T,d_v)=(T,d_v)`. *Plain English:* each position builds a weighted average of all
  positions' values, weighted by query–key similarity. *Tiny example:* `T=2,d_k=1`, equal keys → uniform
  attention. *Code mapping:* `w = (Q@K.T)/math.sqrt(dk); a = softmax(w) @ V`. *Common mistake:* forgetting
  `/√d_k`, so softmax saturates and gradients vanish.
- **Causal mask.** *Formula:* set `score_{ij}=−∞` for `j>i` before softmax. *Plain English:* a token may not
  look at the future. *Common mistake:* masking after softmax (leaks future probability mass).
- **Q/K/V projections.** Why it matters: learned linear maps let the same token play different roles.
- **Attention ≠ explanation.** Where it matters: attention weights are a computation, not a faithful reason.

### Hands-on build (the lab)
- `attention_numpy.py`: `scaled_dot_product_attention(Q,K,V,mask)` + a causal mask; check vs a PyTorch reference.
- Replace the LSTM in the char-LM with one self-attention layer + an MLP; train and compare BPC.
- Plot the `(T,T)` attention matrix for one sample and annotate one interpretable pattern (e.g., attending to the previous space).
- **Deliverable:** attention implementation + a single-layer attention LM + an annotated attention heatmap.
  **Acceptance:** NumPy↔PyTorch attention parity < 1e-5; the attention LM trains stably and beats the
  vanilla-RNN BPC from Week 6.

▶ **Practical project:** `rasbt/LLMs-from-scratch` — implement scaled-dot-product + causal self-attention (Ch.3) and visualize the attention matrix.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch matplotlib`; open `rasbt/LLMs-from-scratch` Ch.3.
2. **Implement:** `attention_numpy.py` — `scaled_dot_product_attention(Q,K,V,mask)` with `/√d_k` scaling and a causal mask applied BEFORE softmax.
3. **Cross-check:** parity vs a PyTorch reference to 1e-5 on random Q,K,V.
4. **Swap in:** replace the LSTM in the char-LM with one self-attention layer + MLP; train on TinyShakespeare.
5. **Compare:** show BPC beats the Week-6 vanilla RNN.
6. **Visualize:** heatmap the `(T,T)` attention matrix and annotate one interpretable pattern.
- **Artifact:** `evidence/week07-attention/` (parity log + heatmap + mask-correctness test + BPC comparison).
- **Use `$attention-inspector`:** dump/visualize the score matrix, verify the causal mask, flag degenerate patterns.
- **Done when:** parity < 1e-5; the mask provably hides the future (position t ignores t+1); the attention LM beats the RNN BPC.
- **Stretch:** add a second head and inspect whether the heads specialize.

### Harness / reusable skill — `$attention-inspector`
- **Purpose:** for any attention layer, dump and visualize the score matrix, verify the causal mask, and
  flag degenerate patterns (all-uniform or all-on-one-token).
- **Inputs:** a model + an input sequence. **Outputs:** heatmap(s), mask-correctness check, a degeneracy
  flag. **Evidence artifact:** `evidence/week07-attention/` (heatmaps + notes).

### Common failure modes
- **Missing `√d_k` scaling** → saturated softmax, dead training. *Fix:* divide scores by `√d_k`; unit-test on random Q,K.
- **Mask leakage** → model "cheats" by seeing the future; train loss unrealistically low. *Fix:* mask before softmax; test that position `t` ignores `t+1`.
- **Over-reading attention** → claiming the model "focuses on the verb because grammar." *Fix:* treat heatmaps as hints; corroborate with ablations.
- **Shape transposition** in `QKᵀ` → wrong axis softmaxed. *Fix:* annotate shapes, assert `(T,T)`.

### Evidence artifact
`evidence/week07-attention/` (parity log, attention heatmap, mask-correctness test, BPC comparison).

### Skill sink-in
Predict whether one attention layer beats the LSTM at equal parameter count. Train both. Record the BPC gap and one reason.

### Dataset(s)
**TinyShakespeare** (as Week 6) — keeps the case constant so the attention-vs-recurrence comparison is clean.

### Code stub
```python
import torch, torch.nn.functional as F, math

def causal_self_attention(x, Wq, Wk, Wv):     # x: (B,T,d)
    Q, K, V = x @ Wq, x @ Wk, x @ Wv          # each (B,T,dk)
    dk = Q.size(-1)
    scores = Q @ K.transpose(-2, -1) / math.sqrt(dk)   # (B,T,T)
    T = x.size(1)
    mask = torch.triu(torch.ones(T, T, device=x.device), diagonal=1).bool()
    scores = scores.masked_fill(mask, float('-inf'))    # mask BEFORE softmax
    attn = F.softmax(scores, dim=-1)          # (B,T,T)
    return attn @ V, attn                     # (B,T,dk), weights for inspection
```

### Graded rubric (Week 7 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Attention correctness | parity < 1e-5, scaling + mask correct | one minor issue | wrong/leaky mask |
| LM result | beats RNN BPC, stable | matches RNN | worse / diverges |
| Interpretation | annotates a real pattern, hedges appropriately | describes heatmap | overclaims |
| Evidence | parity + heatmap + mask test | partial | none |

**Assessment weight:** 5%.

### Readings & sources
- Bahdanau, Cho & Bengio (2015). *Neural Machine Translation by Jointly Learning to Align and Translate.* ICLR. (additive attention origin)
- Vaswani et al. (2017). *Attention Is All You Need.* NeurIPS.
- Elhage et al. (2021). *A Mathematical Framework for Transformer Circuits.* Anthropic. (attention as computation)
- Jain & Wallace (2019). *Attention is not Explanation.* NAACL.

---

### State of the Art (June 2026)
- The scaled-dot-product attention you build is unchanged in 2026 frontier models; what changed is the **kernel: FlashAttention-3 (Hopper) / FlashAttention-4 (Blackwell)** computes the same `softmax(QKᵀ/√d)V` tiled and IO-aware.
- **GQA (grouped-query attention)** is the 2026 default (Llama 4, Qwen 3.5) — sharing K/V across heads to shrink the KV-cache; you meet it again in Subject 03.
- "Attention ≠ explanation" connects directly to 2026 **mechanistic interpretability** — attention maps are computation, not faithful reasons (corroborate with SAEs/ablations).

**More detail:** The scaled-dot-product attention you build is unchanged in 2026; what changed is the kernel — FlashAttention-3 (Hopper) / FlashAttention-4 (Blackwell) compute the same `softmax(QKᵀ/√d)V` tiled and IO-aware — and GQA shares K/V across heads to shrink the KV-cache. "Attention ≠ explanation" connects to today's mechanistic interpretability.

**References & links:**
- [Attention Is All You Need (Vaswani et al., 2017)](https://arxiv.org/abs/1706.03762) — the mechanism
- [`Dao-AILab/flash-attention`](https://github.com/Dao-AILab/flash-attention) — the IO-aware kernels
- [FlashAttention (Dao et al., 2022)](https://arxiv.org/abs/2205.14135) — tiling/recompute
- [GQA (Ainslie et al., 2023)](https://arxiv.org/abs/2305.13245) — grouped-query attention
- [Attention is not Explanation (Jain & Wallace, 2019)](https://arxiv.org/abs/1902.10186) — the interpretability caveat
<!-- sota:02L07 -->

## Week 8 — The Transformer Block, Built End to End

**Altitude:** Builder · **Format:** 3h lecture + 4h lab
**Anchor case:** assemble a full decoder block — multi-head attention + positional encodings + LayerNorm + residuals + MLP — for the char-LM.

### Learning goals
- Implement multi-head attention by splitting `d_model` into `h` heads and concatenating.
- Implement sinusoidal **and** learned positional encodings (and RoPE conceptually); explain why position must be injected.
- Assemble a pre-norm Transformer decoder block with residual connections and the position-wise MLP.

### Concept map
- **Multi-head attention.** *Formula:* `head_i = Attn(QW_i^Q, KW_i^K, VW_i^V)`, `MHA = Concat(head_1..h)W^O`.
  *Shapes:* split `d_model=h·d_k`; each head `(B,T,d_k)`; concat back to `(B,T,d_model)`. *Plain English:*
  run several attentions in parallel subspaces, then combine. *Common mistake:* reshaping heads wrong so they bleed into each other.
- **Positional encoding.** *Formula (sinusoidal):* `PE_{pos,2i}=sin(pos/10000^{2i/d})`, `PE_{pos,2i+1}=cos(...)`.
  *Plain English:* attention is permutation-invariant, so you must add "where am I." *Common mistake:* omitting
  position entirely (model can't tell order). *RoPE:* rotate Q,K by position — note it for Subject 03.
- **Residual connections.** *Formula:* `x ← x + Sublayer(x)`. *Plain English:* a gradient highway + "edit, don't replace."
- **LayerNorm + pre-norm.** *Formula:* normalize over the feature dim; pre-norm = `x + Sublayer(LN(x))`.
  *Plain English:* pre-norm trains deep stacks more stably than post-norm. *Common mistake:* normalizing the batch axis.

### Hands-on build (the lab)
- `transformer_block.py`: `MultiHeadAttention`, `PositionalEncoding`, `TransformerBlock` (pre-norm) in PyTorch.
- Stack 2–4 blocks into a tiny decoder LM; train on TinyShakespeare; compare BPC to Week 7's single-head layer.
- Ablate: remove positional encoding, remove residuals — record the damage.
- **Deliverable:** a working multi-block decoder + an ablation table (no-PE, no-residual, full).
  **Acceptance:** the full block beats Week 7's BPC; removing PE or residuals visibly hurts (documented).

▶ **Practical project:** `rasbt/LLMs-from-scratch` — assemble multi-head attention + the full pre-norm decoder block (Ch.3–4) and overfit a single batch.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch einops`; open `rasbt/LLMs-from-scratch` Ch.3–4.
2. **Implement:** `transformer_block.py` — `MultiHeadAttention` (einops head reshape), sinusoidal + learned `PositionalEncoding`, pre-norm `TransformerBlock`.
3. **Validate shapes:** run a shape table over every sublayer; confirm residual + LayerNorm placement.
4. **Train:** stack 2–4 blocks into a tiny decoder; train on TinyShakespeare; beat Week-7 BPC.
5. **Ablate:** remove positional encoding, then residuals; record the BPC damage each.
6. **Sanity:** overfit a single batch to near-zero loss.
- **Artifact:** `evidence/week08-block-validate.md` (shape table + single-batch overfit + PE/residual ablation table).
- **Use `$transformer-block-validator`:** shape-check every sublayer, confirm pre-norm/residual, overfit one batch.
- **Done when:** heads reshape correctly; the full block beats Week-7 BPC; removing PE/residuals visibly hurts (documented).
- **Stretch:** swap sinusoidal PE for RoPE and compare long-sequence BPC.

### Harness / reusable skill — `$transformer-block-validator`
- **Purpose:** verify a Transformer block by shape-checking every sublayer, confirming residual/Norm
  placement, and overfitting a single batch to near-zero loss.
- **Inputs:** a block module + a tiny batch. **Outputs:** shape table, pre/post-norm confirmation, single-batch
  overfit curve. **Evidence artifact:** `evidence/week08-block-validate.md`.

### Common failure modes
- **Head-reshape bug** → heads mix; performance mysteriously caps. *Fix:* use `einops.rearrange`, assert shapes.
- **No positional info** → bag-of-tokens behavior. *Fix:* add PE, confirm order sensitivity with a shuffled-input test.
- **Post-norm deep instability** → loss spikes. *Fix:* use pre-norm; warm up the LR.
- **Residual dropped** → vanishing gradients in deep stacks. *Fix:* keep `x + sublayer(...)`; check grad norms by depth.

### Evidence artifact
`evidence/week08-block-validate.md` (shape table, single-batch overfit, ablation table for PE/residual).

### Skill sink-in
Predict how much BPC worsens if you delete positional encodings. Run the ablation. Record the number and the lesson.

### Dataset(s)
**TinyShakespeare** (as before). Begin previewing **WikiText-2** (`huggingface.co/datasets/Salesforce/wikitext`,
config `wikitext-2-raw-v1`, ~2M tokens, CC-BY-SA-3.0) for the BPE-based runs in Weeks 9–11.

### Code stub
```python
import torch, torch.nn as nn
from einops import rearrange

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model, n_heads):
        super().__init__()
        self.h = n_heads; self.dk = d_model // n_heads
        self.qkv = nn.Linear(d_model, 3*d_model)
        self.proj = nn.Linear(d_model, d_model)
    def forward(self, x):                          # x: (B,T,d_model)
        B, T, _ = x.shape
        q, k, v = self.qkv(x).chunk(3, dim=-1)
        q, k, v = [rearrange(t, 'b t (h d) -> b h t d', h=self.h) for t in (q, k, v)]
        att = (q @ k.transpose(-2, -1)) / self.dk**0.5            # (B,h,T,T)
        att = att.masked_fill(torch.triu(torch.ones(T, T, device=x.device), 1).bool(), float('-inf'))
        out = att.softmax(-1) @ v                  # (B,h,T,dk)
        return self.proj(rearrange(out, 'b h t d -> b t (h d)'))
```

### Graded rubric (Week 8 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Block correctness | heads correct, pre-norm + residual right, single-batch overfits | minor placement issue | broken block |
| Ablation insight | quantifies PE + residual damage with reasons | runs one ablation | none |
| BPC | beats Week 7 clearly | matches | worse |
| Evidence | shape table + overfit + ablations | partial | none |

**Assessment weight:** 6%.

### Readings & sources
- Vaswani et al. (2017). *Attention Is All You Need.* NeurIPS.
- Xiong et al. (2020). *On Layer Normalization in the Transformer Architecture (Pre-LN).* ICML.
- Su et al. (2021/2023). *RoFormer: Enhanced Transformer with Rotary Position Embedding (RoPE).* (Neurocomputing).
- Ba, Kiros & Hinton (2016). *Layer Normalization.* arXiv.

---

### State of the Art (June 2026)
- Your pre-norm block is the 2026 frontier default; current models swap **LayerNorm→RMSNorm**, learned/sinusoidal PE→**RoPE**, and dense MLP→**SwiGLU** (often **MoE**) — same skeleton, modernized parts.
- **RoPE** is the universal 2026 positional scheme (extends to long context via **NTK/YaRN**); the "inject position" lesson is exactly why.
- Multi-head reshaping correctness is what makes **GQA/MoE** kernels and **FlashAttention-4** valid — the einops discipline scales straight up.

**More detail:** Your pre-norm block is the 2026 frontier skeleton; current models swap LayerNorm→RMSNorm, learned PE→RoPE, dense MLP→SwiGLU (often MoE); RoPE is the universal positional scheme and extends to long context via NTK/YaRN. Correct multi-head reshaping is exactly what makes GQA/MoE kernels valid.

**References & links:**
- [Attention Is All You Need (Vaswani et al., 2017)](https://arxiv.org/abs/1706.03762) — the original block
- [RoFormer / RoPE (Su et al., 2021)](https://arxiv.org/abs/2104.09864) — rotary position embeddings
- [On Layer Normalization in the Transformer / Pre-LN (Xiong et al., 2020)](https://arxiv.org/abs/2002.04745) — why pre-norm
- [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — block assembly
- [`huggingface/transformers`](https://github.com/huggingface/transformers) — production block implementations
<!-- sota:02L08 -->

## Week 9 — Tokenization and Byte-Pair Encoding From Scratch

**Altitude:** Builder · **Format:** 3h lecture + 4h lab · **Quiz 2 (attention/transformer) this week.**
**Anchor case:** switch the LM from characters to BPE subwords; train your own tokenizer on WikiText-2.

### Learning goals
- Implement the BPE training algorithm (merge most-frequent pair, repeat) and an encoder/decoder.
- Explain vocabulary size vs sequence length trade-offs and why tokenization shapes model behavior.
- Compare your BPE to Hugging Face `tokenizers` and to a byte-level GPT-2 tokenizer.

### Concept map
- **BPE training.** *Algorithm:* start from characters/bytes; repeatedly merge the most frequent adjacent
  pair into a new token; stop at target vocab size. *Plain English:* learn common chunks ("ing", " the")
  so frequent strings cost one token. *Common mistake:* not handling word boundaries / whitespace consistently.
- **Encoding/decoding.** *Plain English:* apply learned merges greedily to new text; decoding is a lookup +
  join. *Common mistake:* a tokenizer that doesn't round-trip (`decode(encode(x)) != x`).
- **Vocab size trade-off.** Why it matters: bigger vocab → shorter sequences but a bigger embedding/softmax;
  affects compute and rare-word handling. *Common mistake:* ignoring how tokenization explains "weird" model failures (digits, code).
- **Byte-level fallback.** Plain English: operating on bytes guarantees any string is representable (GPT-2 style).

### Hands-on build (the lab)
- `bpe.py`: `train_bpe(corpus, vocab_size)`, `encode(text)`, `decode(ids)`; assert exact round-trip on held-out text.
- Train BPE (vocab ≈ 4k–8k) on WikiText-2; report average tokens-per-word vs char-level, and the 20 most frequent merges.
- Swap the char-LM to BPE tokens; retrain the Week-8 decoder; compare perplexity per token and sequence length.
- **Deliverable:** working BPE + round-trip test + a tokenization comparison table.
  **Acceptance:** exact round-trip on 10k held-out chars; your BPE's compression is within a sensible range of HF `tokenizers`.

▶ **Practical project:** `rasbt/LLMs-from-scratch` — build/train a BPE tokenizer (Ch.2) and compare round-trip + fertility against tiktoken.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install tokenizers tiktoken datasets`; open `rasbt/LLMs-from-scratch` Ch.2; load WikiText-2.
2. **Implement:** `bpe.py` — `train_bpe(corpus, vocab_size)`, `encode`, `decode`; assert exact round-trip on 10k held-out chars.
3. **Train:** build a 4k–8k vocab on WikiText-2; list the 20 most frequent merges.
4. **Compare:** report tokens-per-word vs char-level and vs a GPT-2/`tiktoken` tokenizer.
5. **Probe edges:** run numbers, code, emojis, and non-English through the probe.
6. **Swap & retrain:** point the Week-8 decoder at BPE tokens; compare perplexity-per-token and sequence length.
- **Artifact:** `evidence/week09-tokenizer-probe.md` (round-trip proof + compression table + surprising tokenizations).
- **Use `$tokenizer-probe`:** stress-test round-trip fidelity, compression ratio, and edge-case behavior.
- **Done when:** exact round-trip on 10k chars; compression within a sensible range of HF `tokenizers`; edge cases tabulated.
- **Stretch:** add byte-level fallback and show it represents any string.

### Harness / reusable skill — `$tokenizer-probe`
- **Purpose:** stress-test any tokenizer: round-trip fidelity, compression ratio, and behavior on edge cases
  (numbers, emojis, code, non-English).
- **Inputs:** a tokenizer + a probe set. **Outputs:** round-trip pass/fail, tokens-per-byte, a table of
  surprising tokenizations. **Evidence artifact:** `evidence/week09-tokenizer-probe.md`.

### Common failure modes
- **Non-round-tripping tokenizer** → silent corruption of training data. *Fix:* assert `decode(encode(x))==x` on a corpus.
- **Whitespace handling bugs** → " the" and "the" collide or explode the vocab. *Fix:* adopt an explicit space marker (e.g., `Ġ`/byte-level).
- **Vocab too small/large** → sequences too long or embeddings too heavy. *Fix:* sweep vocab size, plot tokens-per-word.
- **Ignoring tokenization in error analysis** → blaming the model for tokenizer artifacts (e.g., digit splitting). *Fix:* always inspect token boundaries on failures.

### Evidence artifact
`evidence/week09-tokenizer-probe.md` (round-trip proof, compression table, edge-case surprises) + the merge list.

### Skill sink-in
Predict your BPE's average tokens-per-word at vocab 8k vs char-level. Measure. Record the compression and one edge case that surprised you.

### Dataset(s)
**WikiText-2 (raw)** — `huggingface.co/datasets/Salesforce/wikitext`, config `wikitext-2-raw-v1` (~2M tokens,
~12 MB, CC-BY-SA-3.0). Compare against the **GPT-2 byte-level tokenizer** via `tokenizers`/`transformers`.

### Code stub
```python
from collections import Counter

def get_pair_counts(seqs):
    c = Counter()
    for s in seqs:
        for a, b in zip(s, s[1:]):
            c[(a, b)] += 1
    return c

def train_bpe(words, vocab_size):
    seqs = [list(w) + ['</w>'] for w in words]      # char sequences + word-end
    merges = []
    while len({t for s in seqs for t in s}) < vocab_size:
        pairs = get_pair_counts(seqs)
        if not pairs: break
        best = max(pairs, key=pairs.get)            # most frequent adjacent pair
        merges.append(best)
        seqs = [merge_pair(s, best) for s in seqs]  # TODO: replace best pair with joined token
    return merges
# TODO: encode(text, merges) applies merges greedily; decode(ids) must round-trip
```

### Graded rubric (Week 9 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| BPE correctness | exact round-trip, sensible merges | round-trips, odd merges | fails round-trip |
| Comparison | compression vs HF + char, with table | one comparison | none |
| LM swap | BPE LM trains, perplexity reported | runs | broken |
| Edge-case probing | finds + explains ≥ 2 artifacts | lists | none |

**Assessment weight:** 6% (+ Quiz 2 contributes to the 10% quiz bucket).

### Readings & sources
- Sennrich, Haddow & Birch (2016). *Neural Machine Translation of Rare Words with Subword Units (BPE).* ACL.
- Radford et al. (2019). *Language Models are Unsupervised Multitask Learners (GPT-2).* (byte-level BPE).
- Kudo & Richardson (2018). *SentencePiece.* EMNLP (system demo).
- Karpathy (2024). *Let's build the GPT Tokenizer (minBPE).* (video + repo).

---

### State of the Art (June 2026)
- BPE/byte-level tokenizers remain standard in 2026 (**GPT-5.5, Llama 4, Qwen 3.5**); fertility and round-trip are still the metrics that matter.
- Tokenization still explains frontier failures — **digit-splitting, code, and multilingual** fertility drive measurable quality and cost gaps; the probe you build is current practice.
- Visual-document pipelines bypass text tokenization entirely via **ColPali/ColQwen3 late-interaction** over image patches — a 2026 shift worth contrasting with subword BPE.

**More detail:** BPE/byte-level tokenizers remain standard in 2026 (GPT-5.5, Llama 4, Qwen 3.5); tokenization still explains frontier failures (digit-splitting, code, multilingual), while visual-document pipelines bypass text tokenization via ColPali/ColQwen3 late-interaction over image patches. Fertility + round-trip are still the metrics that matter.

**References & links:**
- [Neural Machine Translation of Rare Words with Subword Units / BPE (Sennrich et al., 2016)](https://arxiv.org/abs/1508.07909) — the BPE algorithm
- [`openai/tiktoken`](https://github.com/openai/tiktoken) — fast byte-level BPE
- [Hugging Face Tokenizers docs](https://huggingface.co/docs/tokenizers) — training your own
- [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — a from-scratch BPE build
- [ColPali: Efficient Document Retrieval with VLMs (Faysse et al., 2024)](https://arxiv.org/abs/2407.01449) — late-interaction over patches
<!-- sota:02L09 -->

## Week 10 — Training a Small GPT: nanoGPT From Scratch

**Altitude:** Builder→Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** assemble Weeks 7–9 into a ~10M-parameter GPT and train it end-to-end on TinyShakespeare (then a WikiText-2 BPE run).

### Learning goals
- Compose embeddings + positional encodings + a stack of Transformer blocks + a tied LM head into a GPT.
- Write a clean training loop with batching, LR warmup+cosine decay, gradient clipping, and checkpointing.
- Implement autoregressive sampling with temperature and top-k/top-p; read training curves as diagnostics.

### Concept map
- **GPT forward pass.** *Formula:* `logits = LN(blocks(embed(x)+PE(x))) W_embᵀ`. *Shapes:* `x:(B,T)` →
  `logits:(B,T,V)`. *Plain English:* embed tokens, run the stack, project back to vocab. *Common mistake:*
  not tying the embedding and output weights when you intend to.
- **LR schedule.** *Formula:* linear warmup then cosine decay to a floor. *Plain English:* ramp up gently,
  cool down slowly. *Common mistake:* no warmup → early divergence with Adam on transformers.
- **Sampling.** *Formula:* `p = softmax(logits_T/τ)`; top-k keeps the `k` largest, top-p the smallest set with
  cumulative prob ≥ `p`. *Plain English:* `τ` controls randomness; top-k/p prune the tail. *Common mistake:*
  greedy decoding then complaining the text is repetitive.
- **Perplexity.** *Formula:* `PPL = exp(mean cross-entropy)`. *Plain English:* "how surprised" the model is; lower is better.

### Hands-on build (the lab)
- `gpt.py`: a configurable GPT (`n_layer, n_head, d_model, block_size`) reusing your Week-8 block.
- `train.py`: dataloader over packed token sequences, AdamW, warmup+cosine, grad-clip, periodic eval + checkpoint, W&B/Trackio logging.
- Train on TinyShakespeare to coherent samples; then a BPE run on WikiText-2 reporting validation perplexity.
- **Deliverable:** a trained checkpoint + loss/PPL curves + 5 generated samples at 3 temperatures.
  **Acceptance:** validation loss decreases smoothly to a sensible floor; TinyShakespeare samples are
  clearly English-Shakespeare-shaped; you can explain every hyperparameter you chose.

▶ **Practical project:** `rasbt/LLMs-from-scratch` — pretrain the GPT end-to-end (Ch.5) on TinyShakespeare and track perplexity + sampling.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch tiktoken`; open `rasbt/LLMs-from-scratch` Ch.5.
2. **Assemble:** wire your Week-8 blocks into a ~10M-param GPT with the Week-9 BPE tokenizer.
3. **Train:** pretrain on TinyShakespeare with a cosine LR schedule + warmup; log train/val loss.
4. **Sample:** implement temperature/top-k sampling; generate 200 tokens at checkpoints.
5. **Evaluate:** report validation perplexity; confirm it drops over training.
6. **Instrument:** log tokens/sec and (if GPU) a rough MFU number.
- **Artifact:** a trained GPT checkpoint + `evidence/week10-train/` (loss curves + samples + perplexity).
- **Use `$mini-train-loop`:** standardize the train/eval/sample/log loop you reuse in the capstone.
- **Done when:** val perplexity decreases to a target; samples are word-shaped; one run reproduces from a pinned seed/config.
- **Stretch:** train on a WikiText-2 subset with BPE and compare perplexity to the char model.

### Harness / reusable skill — `$mini-train-loop`
- **Purpose:** a reusable, instrumented training loop: seedable, checkpointing, eval-every-N, early-stop,
  metric logging — the backbone for every later course.
- **Inputs:** model, dataset, config. **Outputs:** checkpoints, a metrics CSV/`wandb` run, a samples file.
  **Evidence artifact:** `evidence/week10-train/` (curves, config, samples).

### Common failure modes
- **No LR warmup** → loss spikes/diverges in the first hundred steps. *Fix:* warm up 100–500 steps.
- **Data leakage between train/val** via overlapping windows → too-good val loss. *Fix:* split by document/offset; verify no overlap.
- **Greedy-only sampling** → degenerate repetition. *Fix:* temperature + top-k/p; show the contrast.
- **Unlogged runs** → can't compare or reproduce. *Fix:* log config + curves; checkpoint deterministically.
- **Over-large `block_size` for the GPU** → OOM mid-epoch. *Fix:* size context to memory; use gradient accumulation.

### Evidence artifact
`evidence/week10-train/` (config.json, loss/PPL curves, sample.txt at τ∈{0.5,0.8,1.0}, the checkpoint hash).

### Skill sink-in
Predict the validation perplexity your config will reach. Train. Record the gap between expectation and result, and what you'd change.

### Dataset(s)
**TinyShakespeare** (~1 MB, public domain) for fast iteration; **WikiText-2-raw** (`Salesforce/wikitext`,
CC-BY-SA-3.0) for the perplexity run. Optional stretch: **WikiText-103** subset or a 100 MB slice of
**OpenWebText** (`huggingface.co/datasets/Skylion007/openwebtext`, CC0-ish/scraped — note provenance caveats).

### Code stub
```python
import torch
def get_lr(step, warmup, total, base, floor):
    if step < warmup:
        return base * (step + 1) / warmup
    import math
    t = (step - warmup) / max(1, total - warmup)
    return floor + 0.5 * (base - floor) * (1 + math.cos(math.pi * t))

@torch.no_grad()
def generate(model, idx, n_new, block_size, temp=1.0, top_k=50):
    for _ in range(n_new):
        logits = model(idx[:, -block_size:])[:, -1, :] / temp     # (B,V)
        if top_k:
            v, _ = torch.topk(logits, top_k)
            logits[logits < v[:, [-1]]] = float('-inf')
        probs = logits.softmax(-1)
        idx = torch.cat([idx, torch.multinomial(probs, 1)], dim=1)
    return idx
```

### Graded rubric (Week 10 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Training quality | smooth curve, sensible PPL, coherent samples | trains, mediocre samples | diverges / gibberish |
| Loop engineering | warmup+cosine, clip, ckpt, logged | most of these | ad-hoc loop |
| Sampling | temp + top-k/p contrast shown | one sampler | greedy only |
| Reproducibility | seed + config + ckpt hash committed | partial | not reproducible |

**Assessment weight:** 6%.

### Readings & sources
- Radford et al. (2018/2019). *Improving Language Understanding by Generative Pre-Training (GPT-1/2).* OpenAI.
- Karpathy (2023). *nanoGPT* and *Let's build GPT from scratch.* (repo + video).
- Holtzman et al. (2020). *The Curious Case of Neural Text Degeneration (top-p/nucleus sampling).* ICLR.
- Brown et al. (2020). *Language Models are Few-Shot Learners (GPT-3).* NeurIPS. (context for scale)

---

### State of the Art (June 2026)
- nanoGPT remains the canonical teaching reference; 2026 open-weights training (**DeepSeek V4, Qwen 3.5, Llama 4**) is the same loop with **MoE, RoPE, GQA, FP8** added.
- LR schedule + perplexity + sampling are unchanged fundamentals; modern runs add **MFU** and **FP8 KV-cache** monitoring.
- Your from-scratch GPT is the substrate Subject 03 grows into a full pretrain→post-train lifecycle (SFT → DPO/GRPO).

**More detail:** nanoGPT is still the canonical teaching reference; 2026 open-weights training (DeepSeek V4, Qwen 3.5, Llama 4) is the same loop with MoE, RoPE, GQA, and FP8 added. LR schedule + perplexity + sampling are unchanged fundamentals; modern runs add MFU and FP8 KV-cache monitoring.

**References & links:**
- [`karpathy/nanoGPT`](https://github.com/karpathy/nanoGPT) — the reference GPT trainer
- [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — Ch.5 pretraining
- [Language Models are Few-Shot Learners / GPT-3 (Brown et al., 2020)](https://arxiv.org/abs/2005.14165) — the architecture at scale
- [Pythia (Biderman et al., 2023)](https://arxiv.org/abs/2304.01373) — reproducible small-model training
- [PyTorch — adjusting the learning rate](https://pytorch.org/docs/stable/optim.html#how-to-adjust-learning-rate) — cosine + warmup
<!-- sota:02L10 -->

## Week 11 — Scaling, Efficiency, and Honest Evaluation of Your Small GPT

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** make your GPT bigger/faster/better and prove the improvement with metrics, not vibes.

### Learning goals
- Measure how loss scales with parameters/data/compute on your own small models (a baby scaling study).
- Apply two efficiency techniques (mixed precision + `torch.compile`; KV-cache for generation) and measure speedups.
- Evaluate the LM honestly: held-out perplexity, qualitative samples, and a simple downstream probe.

### Concept map
- **Scaling laws (intuition).** *Formula:* `L(N) ≈ aN^{−α} + L∞` (loss falls as a power law in params `N`).
  *Plain English:* more params/data/compute predictably lower loss — until you run out of one. *Common
  mistake:* extrapolating a 3-point curve to AGI; ignoring the data-vs-params balance (Chinchilla).
- **Mixed precision.** *Plain English:* compute in bf16/fp16 with fp32 master weights → faster, less memory.
  *Common mistake:* fp16 overflow without loss scaling (bf16 avoids it).
- **KV-cache.** *Plain English:* cache past keys/values so generation is O(T) not O(T²) per token. *Common
  mistake:* recomputing the full context every step and calling it "slow inference."
- **Evaluation triangulation.** Why it matters: perplexity, samples, and a downstream task each hide
  different failures. *Common mistake:* reporting a single perplexity number with no comparison or limitation.

### Hands-on build (the lab)
- `scaling_study.py`: train 3–4 model sizes (e.g., 1M/3M/10M params) on a fixed token budget; plot loss vs params (log-log) and fit the exponent.
- Add bf16 autocast + `torch.compile`; add a KV-cache to `generate`; record tokens/sec before/after.
- `eval.py`: held-out perplexity + a qualitative sample sheet + one tiny downstream probe (e.g., character-level analogy or a toy classification readout).
- **Deliverable:** a scaling plot + an efficiency table (tokens/sec, memory) + an evaluation note.
  **Acceptance:** a monotone scaling curve with a fitted exponent; a real measured speedup; an eval note
  naming at least one thing perplexity hides.

▶ **Practical project:** `VizuaraAI/kv-cache-token-reduction-walkthrough` — profile KV-cache + inference efficiency on your small GPT and measure the latency effect.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU); `pip install torch vllm` (or the repo's deps); open `VizuaraAI/kv-cache-token-reduction-walkthrough`.
2. **Baseline:** measure tokens/sec + peak memory generating from your Week-10 GPT without a KV-cache.
3. **Add KV-cache:** enable caching; re-measure decode latency and memory.
4. **Quantize:** try FP8/INT8 KV-cache; note any speculative-decoding incompatibility.
5. **Evaluate:** triangulate quality — perplexity + a tiny task eval + a couple of sampled generations.
6. **Visualize:** plot latency vs sequence length with and without the cache.
- **Artifact:** `evidence/week11-efficiency/` (latency/memory table + the triangulated eval).
- **Use `$eval-triangulator`:** combine perplexity, a task metric, and sample inspection rather than one number.
- **Done when:** the KV-cache shows a measured decode-latency win; the memory delta is reported; quality is triangulated, not single-metric.
- **Stretch:** add speculative decoding with a tiny draft model and measure the low-concurrency speedup.

### Harness / reusable skill — `$eval-triangulator`
- **Purpose:** evaluate a generative model along three axes (quantitative metric, qualitative samples,
  downstream probe) and force a limitation statement.
- **Inputs:** a model + eval data. **Outputs:** a metric+comparison, a sample sheet, a probe result, and
  "what this hides." **Evidence artifact:** `evidence/week11-eval/`.

### Common failure modes
- **Three-point scaling hubris** → over-fit power-law claims. *Fix:* report fit uncertainty; don't extrapolate far.
- **Speedup with no baseline** → "compiled, feels faster." *Fix:* measure tokens/sec both ways, same batch/seed.
- **Perplexity worship** → ignoring that low PPL ≠ useful generations. *Fix:* triangulate with samples + a probe.
- **Eval/train leakage** → inflated scores. *Fix:* strict held-out split, document it.

### Evidence artifact
`evidence/week11-eval/` (scaling plot + fit, efficiency table, sample sheet, limitation note).

### Skill sink-in
Predict the loss-vs-params exponent before fitting. Run the study. Record the fitted value and whether your intuition held.

### Dataset(s)
**WikiText-2 / WikiText-103** (`Salesforce/wikitext`, CC-BY-SA-3.0) for perplexity and the scaling budget.
Optional: a held-out **TinyStories** slice (`huggingface.co/datasets/roneneldan/TinyStories`, CDLA-Sharing-1.0)
for a cleaner small-model signal.

### Code stub
```python
import torch, time

def benchmark_generate(model, idx, n_new, use_compile=False):
    if use_compile:
        model = torch.compile(model)
    torch.cuda.synchronize(); t0 = time.time()
    with torch.autocast('cuda', dtype=torch.bfloat16):
        _ = generate(model, idx, n_new, block_size=256)   # from Week 10
    torch.cuda.synchronize()
    return n_new / (time.time() - t0)                     # tokens/sec

import numpy as np
def fit_scaling(params, losses):                          # L ≈ a*N^-alpha + Linf
    x = np.log(params); y = np.log(np.array(losses) - min(losses)*0.9 + 1e-6)
    alpha, logb = np.polyfit(x, -y, 1)                    # rough slope estimate
    return alpha
```

### Graded rubric (Week 11 deliverable)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Scaling study | ≥ 3 sizes, fitted exponent, honest caveats | curve only | no curve |
| Efficiency | measured speedup + memory, fair baseline | one measured | claimed, unmeasured |
| Evaluation | triangulated + limitation named | metric only | unsupported claim |
| Evidence | plot + table + note committed | partial | none |

**Assessment weight:** 6%.

### Readings & sources
- Kaplan et al. (2020). *Scaling Laws for Neural Language Models.* OpenAI.
- Hoffmann et al. (2022). *Training Compute-Optimal Large Language Models (Chinchilla).* DeepMind.
- Dao et al. (2022). *FlashAttention.* NeurIPS (efficiency context; FA-3 noted for Subject 03).
- Micikevicius et al. (2018). *Mixed Precision Training.* ICLR.

---

### State of the Art (June 2026)
- 2026 serving reference: **vLLM** with **FP8 KV-cache** (≈half KV memory, ~2× decode-latency-slope), **FlashAttention-4**, and **speculative decoding** (2–5× at low concurrency; note the KV-quant incompatibility gotcha).
- **Scaling laws + tunable thinking-effort + sparse MoE** are the 2026 default assumptions for reasoning about cost vs quality.
- Evaluation triangulation now means **execution-based + reliability** benchmarks (**SWE-bench Verified, τ²-bench pass^k**) plus **LLM-as-judge** with documented biases — not a single perplexity number.

**More detail:** The 2026 serving reference is vLLM with FP8 KV-cache (≈half KV memory, ~2× decode-latency-slope), FlashAttention-4, and speculative decoding (2–5× at low concurrency, with a KV-quant incompatibility gotcha); honest eval triangulates execution-based + reliability benchmarks, not one perplexity number.

**References & links:**
- [`vllm-project/vllm`](https://github.com/vllm-project/vllm) — reference inference engine
- [Efficient Memory Management for LLM Serving / PagedAttention (Kwon et al., 2023)](https://arxiv.org/abs/2309.06180) — vLLM's core idea
- [vLLM docs](https://docs.vllm.ai/) — FP8 KV-cache + speculative decoding
- [Fast Inference via Speculative Decoding (Leviathan et al., 2023)](https://arxiv.org/abs/2211.17192) — speculative decoding
- [`princeton-nlp/SWE-bench`](https://github.com/princeton-nlp/SWE-bench) — execution-based eval
<!-- sota:02L11 -->

## Week 12 — Capstone: A Built-From-Scratch GPT With an Evidence Packet

**Altitude:** Engineer (graduating to Subject 03) · **Format:** project week (6 lab hrs)
**Anchor case:** your own small GPT — chosen corpus, your tokenizer, your training loop — defended with evidence.

### Learning goals
- Run the full pipeline you built: tokenizer → architecture → training → sampling → evaluation → critique.
- Produce an **evidence packet** that proves engineering judgment, not just a final perplexity.
- Reuse all seven skills from this course as one coherent personal harness.

### Concept map (review as a checklist)
- Data & tokenizer (round-trip-proven) → architecture choices (heads/layers/context, justified) →
  training (warmup/clip/checkpoint, logged) → sampling (temp/top-k/p) → evaluation (triangulated) →
  critique (what fails, what you'd do next).

### Hands-on build (the lab)
- Pick a corpus (TinyShakespeare, a WikiText subset, TinyStories, or your own ≤ 50 MB clean text — document the license).
- Ship: a trained checkpoint, a model card (params, data, training config), loss/PPL curves, sample sheets at multiple temperatures, an evaluation note, and a 2-page report where **every claim links to a file**.
- **Deliverable:** `capstone/` folder + 2-page report. **Acceptance:** reproducible (`seed` + config + one command), samples are coherent for the corpus, and the report names at least one concrete failure mode and a defended next step.

▶ **Practical project:** `VizuaraAILabs/nano-gpt-oss` — use its from-scratch gpt-oss pretraining as the reference to extend your capstone GPT + model card.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab (GPU) / serverless GPU; `pip install torch`; reference `VizuaraAILabs/nano-gpt-oss`.
2. **Configure:** write `capstone/config.json` (seed, data, arch, optim); pin deps + data hash.
3. **Train:** run `capstone/run.py` end-to-end so one command reproduces the headline result.
4. **Evaluate:** report validation perplexity + sampled generations + one named failure mode.
5. **Document:** write a model card (intended use, data, limitations) + a 2-page report.
6. **Assemble:** bundle checkpoint + curves + samples + eval note into `capstone/`.
- **Artifact:** a `capstone/` packet where every report claim links to a file (+ a model card).
- **Use `$model-evidence-packet`:** assemble model card + curves + samples + eval + critique into one reviewable bundle.
- **Done when:** one command reproduces the result; every arch/optim choice is justified; eval is triangulated with a named failure + next step.
- **Stretch:** publish the model card + a Gradio demo to a Hugging Face Space.

### Harness / reusable skill — `$model-evidence-packet`
- **Purpose:** assemble model card + training curves + samples + eval note + critique into one reviewable bundle.
- **Inputs:** a trained run's artifacts. **Outputs:** the packet (this *is* the deliverable). **Evidence artifact:** `capstone/`.

### Common failure modes
- **Score-only reporting** (no evidence trail) · **unjustified architecture** (cargo-culted hyperparameters) ·
  **no failure analysis** · **irreproducible run**. *Fixes:* link every claim to a file; justify each choice;
  end with a defended next experiment; pin seed + config + data hash.

### Evidence artifact
`capstone/` with checkpoint, model card, curves, samples, eval note, and the 2-page report.

### Skill sink-in
Before the final run, write the validation perplexity and one sample-quality prediction. Compare to results. The gap is the lesson — record it.

### Dataset(s)
Learner's choice from the course datasets (TinyShakespeare PD / WikiText CC-BY-SA-3.0 / TinyStories
CDLA-Sharing-1.0) or an own corpus with a documented license and a `$tokenizer-probe` round-trip proof.

### Code stub
```python
# capstone/run.py -- one command must reproduce the headline result
import json, torch
from gpt import GPT; from train import train; from bpe import load_tokenizer

cfg = json.load(open("capstone/config.json"))        # seed, data, arch, optim
torch.manual_seed(cfg["seed"])
tok = load_tokenizer(cfg["tokenizer"])               # round-trip verified
model = GPT(**cfg["arch"])
metrics = train(model, tok, cfg)                     # logs curves + checkpoints
json.dump(metrics, open("capstone/metrics.json", "w"))   # every report claim -> a file
```

### Graded rubric (Capstone — the 20% bucket)
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Reproducibility | one command + pinned seed/config/data hash | runs with tweaks | not reproducible |
| Engineering judgment | every arch/optim choice justified | some justified | cargo-culted |
| Evaluation honesty | triangulated + named failure + next step | metric + samples | score only |
| Evidence packet | every claim links to a file | most | report only |
| Communication | clear 2-page report + model card | rough | missing |

**Assessment weight:** 20% (course capstone).

### Readings & sources
- Prince (2023), *Understanding Deep Learning* — Transformers chapter (consolidation).
- Karpathy (2023). *nanoGPT* (reference implementation to compare against, not copy).
- Mitchell et al. (2019). *Model Cards for Model Reporting.* FAT*. (for the model card)
- Stanford CS224N (Winter 2026) final-project guidelines (build/finetune a GPT-2) — structure reference.

---

### State of the Art (June 2026)
- **Model Cards** + one-command reproducibility (pinned seed/config/data hash) are the 2026 industry artifacts your packet mirrors; **EU AI Act** transparency obligations (main rules **Aug 2, 2026**) make them increasingly mandatory.
- Honest evaluation = triangulated metrics + named failures + next step — exactly the **LLM-as-judge + execution-based** discipline frontier labs publish.
- The packet is the bridge into Subject 03's full lifecycle and into the agentic / RAG / serving subjects that follow.

**More detail:** Model Cards + one-command reproducibility (pinned seed/config/data hash) are the 2026 industry artifacts your packet mirrors; EU AI Act transparency obligations (main rules Aug 2, 2026) make them increasingly mandatory. Honest evaluation = triangulated metrics + named failures + next step.

**References & links:**
- [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — gpt-oss pretraining reference
- [Model Cards for Model Reporting (Mitchell et al., 2019)](https://arxiv.org/abs/1810.03993) — the model card
- [Hugging Face — Model Cards guide](https://huggingface.co/docs/hub/model-cards) — how to publish one
- [EU AI Act — official explorer](https://artificialintelligenceact.eu/) — transparency timeline
- [`karpathy/nanoGPT`](https://github.com/karpathy/nanoGPT) — reproducible training reference
<!-- sota:02L12 -->

## Course-level outcomes

By the end you can: build reverse-mode autodiff, derive and implement backprop for MLPs/CNNs/RNNs/LSTMs,
implement every Transformer component from scratch (multi-head attention, positional encodings, LayerNorm,
residuals), train your own BPE tokenizer, and train + evaluate a small GPT with honest, reproducible
evidence. You carry a **reusable harness** into Subject 03.

## Skills produced (reused program-wide)
`$autodiff-tracer` · `$layer-backprop-derive` · `$optimizer-bench` · `$regularization-ablation` ·
`$conv-shape-planner` · `$sequence-sanity` · `$attention-inspector` · `$transformer-block-validator` ·
`$tokenizer-probe` · `$mini-train-loop` · `$eval-triangulator` · `$model-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; re-verify — full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `rasbt/LLMs-from-scratch` (~98k★) — build a ChatGPT-like LLM in PyTorch step by step; the spine for Lectures 7–10 (attention → Transformer block → nanoGPT).
- `VizuaraAI/dna-of-a-transformer` — transformer internals walked through component by component; Lectures 7–8 (attention, multi-head, positional encoding).
- `VizuaraAI/visual-ai-book` — visual guide NN→LLM; reinforces Lectures 1–8 across the whole from-scratch arc.
- `VizuaraAI/Mixture_of_Experts` — MoE from scratch; a stretch beyond the Lecture 8 dense block and a preview of Subject 03.
- `VizuaraAILabs/Principles-of-Diffusion-Models` — generative modeling from first principles; optional stretch for learners who want a non-autoregressive contrast after Lecture 12.

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **SLM local assistant** — quantized/distilled on-device assistant with a latency/cost eval — a downstream home for the small GPT you train; *maps to the Lecture 12 capstone (stretch into Subjects 05/10)*.
- **Synthetic-data audit** — real+synthetic vs real-only with a model-collapse check — *maps to Lecture 11 (honest evaluation of your small GPT)*.
