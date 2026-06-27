# Detailed Table of Contents — Subject 01 — Math & ML Foundations From Scratch

_Source: `01-foundations-math-ml-from-scratch.md` · **1 academic quarter · 3 lecture-hours/week · 10 weekly lectures (~30 contact hours)**_

### Lecture 1 — Why Math Is the Operating Language of ML (and Python/NumPy From Scratch)
_3-hour block · 🔧 reusable skill: `$study-harness`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ML as iterative improvement |
| 00:30–01:00 | M2 | The data matrix X and target y |
| 01:00–01:30 | M3 | Matrix multiplication |
| 01:30–02:00 | M4 | Reproducibility as a precondition for learning anything |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | matmul.py: implement matmul(A, B) with nested Python loops; unit-test it against np.dot; benchmark |

### Lecture 2 — Linear Algebra as Shapes You Can Reason About
_3-hour block · 🔧 reusable skill: `$shape-checker`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Vector as one structured example |
| 00:30–01:00 | M2 | Linear prediction |
| 01:00–01:30 | M3 | Norms and distance |
| 01:30–02:00 | M4 | Broadcasting |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Extend the math library: dot, matvec, l2_norm, standardize(X) — all from scratch, all unit-tested vs |

### Lecture 3 — Derivatives, Gradients & the Seed of Backpropagation
_3-hour block · 🔧 reusable skill: `$gradient-check`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Derivative |
| 00:30–01:00 | M2 | Partial derivative & gradient |
| 01:00–01:30 | M3 | Chain rule |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | grads.py: analytic gradient of squared-error loss for linear regression; numerical_grad() finite-dif |

### Lecture 4 — Probability & Statistics: The Language of Uncertainty
_3-hour block · 🔧 reusable skill: `$uncertainty-reader`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Random variable, distribution, expectation |
| 00:30–01:00 | M2 | Conditional probability & Bayes |
| 01:00–01:30 | M3 | MLE → loss |
| 01:30–02:00 | M4 | Variance & noise |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | stats.py: sample from distributions, estimate mean/variance, build a histogram from scratch |

### Lecture 5 — The Learning Problem: Loss, Empirical Risk & Gradient Descent From Scratch
_3-hour block · 🔧 reusable skill: `$training-diagnostics`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Empirical risk |
| 00:30–01:00 | M2 | Gradient descent |
| 01:00–01:30 | M3 | Mini-batch / SGD |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | gd.py: train linear regression on delivery data with your own GD loop; log loss per epoch; plot the  |

### Lecture 6 — First Models I: Linear & Logistic Regression (Now With, Then Without, scikit-learn)
_3-hour block · 🔧 reusable skill: `$baseline-builder`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Linear regression |
| 00:30–01:00 | M2 | Logistic regression |
| 01:00–01:30 | M3 | Cross-entropy loss |
| 01:30–02:00 | M4 | Regularization (L1/L2) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | logreg.py from scratch (sigmoid + cross-entropy + GD), gradient-checked; then reproduce with sklearn |

### Lecture 7 — First Models II: Trees, Ensembles & Strong Baselines
_3-hour block · 🔧 reusable skill: `$tabular-model-review`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Decision tree |
| 00:30–01:00 | M2 | Bagging / Random Forest |
| 01:00–01:30 | M3 | Boosting (gradient boosting / XGBoost-style) |
| 01:30–02:00 | M4 | Feature importance |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement a small decision tree from scratch (Gini, max-depth); then use sklearn/xgboost for forest  |

### Lecture 8 — Evaluation, Error Analysis & Experiment Design
_3-hour block · 🔧 reusable skill: `$evaluation-review`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Metric–decision fit |
| 00:30–01:00 | M2 | Threshold sweep |
| 01:00–01:30 | M3 | Slices |
| 01:30–02:00 | M4 | Calibration |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | eval.py: confusion matrix, precision/recall/F1, ROC/PR, a threshold sweep CSV, and a per-slice error |

### Lecture 9 — Bias, Variance, Regularization & Generalization (Learning-Theory Intuition)
_3-hour block · 🔧 reusable skill: `$generalization-translator`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Empirical vs population risk |
| 00:30–01:00 | M2 | Bias–variance |
| 01:00–01:30 | M3 | Capacity / VC intuition |
| 01:30–02:00 | M4 | Regularization & early stopping |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | generalization_lab.py: fit polynomials of increasing degree to the delivery data; plot train vs val  |

### Lecture 10 — Capstone: A From-Scratch ML Project With an Evidence Packet
_3-hour block · 🔧 reusable skill: `$project-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick a dataset (e.g., California Housing or a Fashion-MNIST subset, per Vizuara's capstones, or your |

