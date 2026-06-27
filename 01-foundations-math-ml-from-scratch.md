# Subject 01 — Math & ML Foundations From Scratch

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

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 10 lectures (~30 contact hrs). Full time-boxed lecture plan: [`_toc/01-foundations-math-ml-from-scratch-toc.md`](_toc/01-foundations-math-ml-from-scratch-toc.md)._

1. **Lecture 1 — Why Math Is the Operating Language of ML (and Python/NumPy From Scratch)** — ML as iterative improvement · The data matrix X and target y · Matrix multiplication · Reproducibility as a precondition for learning anything  ·  🔧 `$study-harness`
2. **Lecture 2 — Linear Algebra as Shapes You Can Reason About** — Vector as one structured example · Linear prediction · Norms and distance · Broadcasting  ·  🔧 `$shape-checker`
3. **Lecture 3 — Derivatives, Gradients & the Seed of Backpropagation** — Derivative · Partial derivative & gradient · Chain rule  ·  🔧 `$gradient-check`
4. **Lecture 4 — Probability & Statistics: The Language of Uncertainty** — Random variable, distribution, expectation · Conditional probability & Bayes · MLE → loss · Variance & noise  ·  🔧 `$uncertainty-reader`
5. **Lecture 5 — The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch** — Empirical risk · Gradient descent · Mini-batch / SGD  ·  🔧 `$training-diagnostics`
6. **Lecture 6 — First Models I: Linear & Logistic Regression (Now With, Then Without, scikit-learn)** — Linear regression · Logistic regression · Cross-entropy loss · Regularization (L1/L2)  ·  🔧 `$baseline-builder`
7. **Lecture 7 — First Models II: Trees, Ensembles & Strong Baselines** — Decision tree · Bagging / Random Forest · Boosting (gradient boosting / XGBoost-style) · Feature importance  ·  🔧 `$tabular-model-review`
8. **Lecture 8 — Evaluation, Error Analysis & Experiment Design** — Metric–decision fit · Threshold sweep · Slices · Calibration  ·  🔧 `$evaluation-review`
9. **Lecture 9 — Bias, Variance, Regularization & Generalization (Learning-Theory Intuition)** — Empirical vs population risk · Bias–variance · Capacity / VC intuition · Regularization & early stopping  ·  🔧 `$generalization-translator`
10. **Lecture 10 — Capstone: A From-Scratch ML Project With an Evidence Packet**  ·  🔧 `$project-evidence-packet`

---

## Week 1 — Why Math Is the Operating Language of ML (and Python/NumPy From Scratch)

### State of the Art (June 2026)
- **NumPy 2.x / Python 3.12** are still the substrate every framework lowers to; the `X @ w` you hand-code is the same op a 1.6T-param MoE like **DeepSeek V4** runs billions of times — matmul literacy still underpins the frontier.
- **Tunable "thinking effort"** is now a standard control on **Claude Opus 4.8 / Gemini 3.1 Pro / GPT-5.5** — the modern face of "more compute per query" inside the train→evaluate→revise loop you start here.
- **Reproducibility at scale** (pinned configs, seeded RNG, config hashes) is a 2026 frontier-lab discipline; the seeded-repo habit in this lab is exactly what makes trillion-token runs auditable.
- Even **MMLU-Pro / GPQA Diamond** scores are only comparable under a fixed harness + seed — the baseline-and-evidence reflex starts in Week 1.

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

## Week 2 — Linear Algebra as Shapes You Can Reason About

### State of the Art (June 2026)
- Shape literacy scales straight up: **FlashAttention-4** (Blackwell default in vLLM v0.20+) is a shape- and memory-aware re-tiling of the same `QKᵀ` matmul — dimension-tracking is what makes such kernels correct.
- **Sparse MoE** models (**DeepSeek V4** 49B-active/1.6T-total, **Qwen 3.5** 17B/397B) route each token through different weight matrices; reasoning about "which matrix multiplies which vector" is now a frontier-architecture skill.
- Norms/distance underpin modern retrieval: 2026 **embedding models** (Voyage voyage-3-large, Cohere embed-v4, BGE-M3) rank documents by the vector similarity / `‖a−b‖` geometry you build here.

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

## Week 3 — Derivatives, Gradients & the Seed of Backpropagation

### State of the Art (June 2026)
- Reverse-mode autodiff (the chain rule you hand-derive) still powers every 2026 trainer — **PyTorch 2.7 autograd**, JAX — at 1M-context, trillion-param scale; nothing about the frontier removes the gradient.
- **Gradient checking** remains the canonical correctness test for any custom kernel (e.g., a new **FlashAttention-4** backward); the finite-difference habit is a frontier-engineering practice, not a toy.
- The **test-time-compute** trend (RLVR, verifier models) optimizes *inference*, but the underlying models are still fit by gradient descent on a differentiable loss.

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

## Week 4 — Probability & Statistics: The Language of Uncertainty

### State of the Art (June 2026)
- The pretraining objective of every frontier LLM (**Opus 4.8, GPT-5.5, Gemini 3.1 Pro**) is still **maximum likelihood** / cross-entropy next-token — the MLE↔loss bridge you derive here is literally the loss they minimize.
- **Calibration** is a live 2026 eval concern, and **LLM-as-judge** scores carry documented biases (TrustJudge); "80% confident" needing careful interpretation is now an industry problem.
- Reliability metrics like **τ²-bench pass^k** measure whether an agent succeeds k-for-k — treating outcomes as random variables with variance, not point facts.

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

## Week 5 — The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch

### State of the Art (June 2026)
- **AdamW** remains the default optimizer for 2026 frontier pretraining; the SGD→mini-batch loop you build is the same one scaled across thousands of GPUs.
- Reading a loss curve to diagnose LR problems is now a distributed-training skill — **MFU** and loss-spike monitoring gate trillion-token runs.
- **RLVR / GRPO** post-training (DeepSeek-R1-style reasoning) is still gradient descent on a (verifiable) reward — empirical-risk minimization with a different objective, which you meet again in Subject 03.

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

## Week 6 — First Models I: Linear & Logistic Regression (Now With, Then Without, scikit-learn)

### State of the Art (June 2026)
- Logistic regression is still the **strong, interpretable baseline** practitioners reach for before an LLM; the "earn complexity" discipline is reinforced by 2026 **model routing** (cheap model first, escalate only when needed).
- The classification head of every transformer is a softmax/logistic layer over the vocabulary — the sigmoid/cross-entropy you build *is* the LLM output layer at `d = vocab`.
- L1/L2 regularization generalizes to **weight decay** in modern training and to **LoRA/DoRA** low-rank constraints in fine-tuning — the same "prefer simpler explanations" principle.

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

## Week 7 — First Models II: Trees, Ensembles & Strong Baselines

### State of the Art (June 2026)
- **Gradient-boosted trees (XGBoost/LightGBM)** remain SOTA on tabular data in 2026 — frontier LLMs still do not reliably beat them on structured prediction; the "flashy model isn't the lesson" point is current.
- Leakage auditing maps directly to **benchmark decontamination** (a 2026 eval crisis): contaminated test sets produce fake "emergence" — the same shortcut-that-lies you hunt here.
- Feature-importance humility prefigures **mechanistic interpretability / SAEs** — both warn against over-reading a model's internal "explanations."

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

## Week 8 — Evaluation, Error Analysis & Experiment Design

### State of the Art (June 2026)
- 2026 evaluation has gone **execution-based and reliability-aware**: **SWE-bench Verified**, **τ²-bench pass^k**, **ARC-AGI-2** — the "metric must match the decision" lesson, now with k-for-k reliability instead of single-shot accuracy.
- **LLM-as-judge** is the default scaled evaluator but carries documented biases (TrustJudge); slice analysis and calibration are exactly the guards against trusting an averaged judge score.
- Frameworks **LangSmith, Braintrust, Arize Phoenix, DeepEval, RAGAS, UK AISI Inspect AI** operationalize the threshold-sweep + slice-table discipline you build by hand.

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

## Week 9 — Bias, Variance, Regularization & Generalization (Learning-Theory Intuition)

### State of the Art (June 2026)
- **Scaling laws (Chinchilla and 2026 successors)** are the modern, quantitative face of the capacity/data trade-off — undertrained large models are the bias-variance lesson at frontier scale.
- The **double-descent / "benign overfitting"** thread (Belkin et al.) remains an open 2026 research question; your degree-vs-error curve is the entry point.
- Contamination-driven **fake emergence** (Schaeffer et al.) shows why held-out, decontaminated evaluation — not training error — is the only honest generalization signal in 2026.

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

## Week 10 — Capstone: A From-Scratch ML Project With an Evidence Packet

### State of the Art (June 2026)
- The **evidence-packet** discipline mirrors 2026 governance: **EU AI Act** main obligations apply **Aug 2, 2026** (high-risk Annex III deferred to **Dec 2, 2027** by the Digital Omnibus) — documented data, evaluation, and limitations are now legally relevant.
- **Model Cards** plus one-command reproducible runs (pinned seed/config/data hash) are the industry-standard artifacts your packet anticipates.
- Cost-aware framing (cheap baseline → escalate) reflects the 2026 LLMOps cost trio (**semantic caching + model routing + batching**); judgment about *when* a complex model is justified is the transferable capstone skill.

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
