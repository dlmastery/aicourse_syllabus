# Subject 02 — Deep Learning & the Transformer, Built by Hand

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

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 12 lectures (~36 contact hrs). Full time-boxed lecture plan: [`_toc/02-deep-learning-transformers-from-scratch-toc.md`](_toc/02-deep-learning-transformers-from-scratch-toc.md)._

1. **Lecture 1 — The Neuron, the Forward Pass, and Scalar Autodiff From Scratch** — Artificial neuron · Computation graph & reverse-mode autodiff · Nonlinearity necessity · Input normalization  ·  🔧 `$autodiff-tracer`
2. **Lecture 2 — Backpropagation Through an MLP, By Hand (NumPy)** — Softmax · Cross-entropy loss · The backward pass · Batching  ·  🔧 `$layer-backprop-derive`
3. **Lecture 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch** — SGD · Momentum · RMSProp · Adam  ·  🔧 `$optimizer-bench`
4. **Lecture 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)** — autograd = your Week-1 engine at scale · Dropout · Batch normalization · Weight decay / L2  ·  🔧 `$regularization-ablation`
5. **Lecture 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST** — Convolution · Output-size formula · Pooling · Parameter sharing  ·  🔧 `$conv-shape-planner`
6. **Lecture 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)** — RNN recurrence · BPTT · Vanishing/exploding gradients · LSTM gates  ·  🔧 `$sequence-sanity`
7. **Lecture 7 — Attention From Scratch: Why It Replaced Recurrence** — Scaled dot-product attention · Causal mask · Q/K/V projections · Attention ≠ explanation  ·  🔧 `$attention-inspector`
8. **Lecture 8 — The Transformer Block, Built End to End** — Multi-head attention · Positional encoding · Residual connections · LayerNorm + pre-norm  ·  🔧 `$transformer-block-validator`
9. **Lecture 9 — Tokenization and Byte-Pair Encoding From Scratch** — BPE training · Encoding/decoding · Vocab size trade-off · Byte-level fallback  ·  🔧 `$tokenizer-probe`
10. **Lecture 10 — Training a Small GPT: nanoGPT From Scratch** — GPT forward pass · LR schedule · Sampling · Perplexity  ·  🔧 `$mini-train-loop`
11. **Lecture 11 — Scaling, Efficiency, and Honest Evaluation of Your Small GPT** — Scaling laws (intuition) · Mixed precision · KV-cache · Evaluation triangulation  ·  🔧 `$eval-triangulator`
12. **Lecture 12 — Capstone: A Built-From-Scratch GPT With an Evidence Packet**  ·  🔧 `$model-evidence-packet`

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

### State of the Art (June 2026)
- Your `Value`/micrograd engine is the conceptual core of **PyTorch 2.7 autograd**, the trainer behind every 2026 frontier model; reverse-mode AD has not been displaced.
- Input normalization scales to **RMSNorm** — the 2026 default norm in **Llama 4 / Qwen 3.5 / DeepSeek V4** — the same "condition the activations" motive you meet on image 1.
- The compute graph you record is what frameworks lower to fused kernels (**FlashAttention-4**, Blackwell); graph thinking is the bridge from toy to frontier.

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

## Week 2 — Backpropagation Through an MLP, By Hand (NumPy)

### State of the Art (June 2026)
- The `(p − onehot(y))/B` softmax-CE gradient you derive is the exact output-layer gradient of every LLM trained in 2026 — the vocab-sized version of this MLP.
- Hand-derived backprop + grad-check is still how custom kernels (e.g., a **FlashAttention-4** backward, fused MoE) are validated at the frontier.
- ReLU's gradient mask generalizes to **SwiGLU/GeGLU** gating used in 2026 transformer MLPs — the same "which units pass gradient" reasoning.

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

## Week 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch

### State of the Art (June 2026)
- **AdamW** (decoupled decay) is still the default for 2026 frontier pretraining; the Adam you build is unchanged at trillion-param scale.
- Modern twists to preview: **Muon, 8-bit optimizers, and μP hyperparameter transfer** — but bias correction and per-parameter scaling are exactly the accumulators you implement.
- Optimizer-vs-LR fairness (matched seeds/sweeps) is the same rigor that separates a real training improvement from noise in 2026 ablations.

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

## Week 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)

### State of the Art (June 2026)
- The NumPy↔PyTorch parity test is the discipline behind every 2026 framework port; **PyTorch 2.7** (CUDA 12.6) + `torch.compile` is the current reference.
- **Weight decay via AdamW** is the production default; **Dropout** persists, but RMSNorm/LayerNorm + residuals carry most of the stabilization in modern stacks.
- The same low-rank "regularized update" idea reappears as **LoRA/QLoRA/DoRA** — the dominant 2026 fine-tuning regularizers (Subject 03).

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

## Week 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST

### State of the Art (June 2026)
- CNNs remain SOTA for many vision tasks, but 2026 multimodal frontier models use **ViT/DiT patch encoders**; your conv/shape reasoning is the bridge to "patchify."
- **DiT (Diffusion Transformer) over spatiotemporal latent patches** is the standard architecture behind 2026 video models (**Sora 2, Veo 3.1, Seedance 2.0**) — convolutional inductive bias vs attention is a live design axis.
- Output-shape arithmetic and channel-order discipline are exactly what make **ColPali/ColQwen3** visual-document encoders correct.

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

## Week 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)

### State of the Art (June 2026)
- RNN/LSTM are largely historical for LMs, but the **vanishing-gradient problem they expose** is precisely why attention won — essential motivation for Weeks 7–8.
- 2026 efficiency research revives recurrence: **state-space / linear-attention hybrids (Mamba-style, and hybrid blocks in several open models)** trade O(T²) attention for O(T) recurrence — the gradient-highway idea you build in the LSTM cell.
- BPC and single-batch-overfit sanity checks remain the cheapest correctness tests for any sequence model in 2026.

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

## Week 7 — Attention From Scratch: Why It Replaced Recurrence

### State of the Art (June 2026)
- The scaled-dot-product attention you build is unchanged in 2026 frontier models; what changed is the **kernel: FlashAttention-3 (Hopper) / FlashAttention-4 (Blackwell)** computes the same `softmax(QKᵀ/√d)V` tiled and IO-aware.
- **GQA (grouped-query attention)** is the 2026 default (Llama 4, Qwen 3.5) — sharing K/V across heads to shrink the KV-cache; you meet it again in Subject 03.
- "Attention ≠ explanation" connects directly to 2026 **mechanistic interpretability** — attention maps are computation, not faithful reasons (corroborate with SAEs/ablations).

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

## Week 8 — The Transformer Block, Built End to End

### State of the Art (June 2026)
- Your pre-norm block is the 2026 frontier default; current models swap **LayerNorm→RMSNorm**, learned/sinusoidal PE→**RoPE**, and dense MLP→**SwiGLU** (often **MoE**) — same skeleton, modernized parts.
- **RoPE** is the universal 2026 positional scheme (extends to long context via **NTK/YaRN**); the "inject position" lesson is exactly why.
- Multi-head reshaping correctness is what makes **GQA/MoE** kernels and **FlashAttention-4** valid — the einops discipline scales straight up.

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

## Week 9 — Tokenization and Byte-Pair Encoding From Scratch

### State of the Art (June 2026)
- BPE/byte-level tokenizers remain standard in 2026 (**GPT-5.5, Llama 4, Qwen 3.5**); fertility and round-trip are still the metrics that matter.
- Tokenization still explains frontier failures — **digit-splitting, code, and multilingual** fertility drive measurable quality and cost gaps; the probe you build is current practice.
- Visual-document pipelines bypass text tokenization entirely via **ColPali/ColQwen3 late-interaction** over image patches — a 2026 shift worth contrasting with subword BPE.

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

## Week 10 — Training a Small GPT: nanoGPT From Scratch

### State of the Art (June 2026)
- nanoGPT remains the canonical teaching reference; 2026 open-weights training (**DeepSeek V4, Qwen 3.5, Llama 4**) is the same loop with **MoE, RoPE, GQA, FP8** added.
- LR schedule + perplexity + sampling are unchanged fundamentals; modern runs add **MFU** and **FP8 KV-cache** monitoring.
- Your from-scratch GPT is the substrate Subject 03 grows into a full pretrain→post-train lifecycle (SFT → DPO/GRPO).

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

## Week 11 — Scaling, Efficiency, and Honest Evaluation of Your Small GPT

### State of the Art (June 2026)
- 2026 serving reference: **vLLM** with **FP8 KV-cache** (≈half KV memory, ~2× decode-latency-slope), **FlashAttention-4**, and **speculative decoding** (2–5× at low concurrency; note the KV-quant incompatibility gotcha).
- **Scaling laws + tunable thinking-effort + sparse MoE** are the 2026 default assumptions for reasoning about cost vs quality.
- Evaluation triangulation now means **execution-based + reliability** benchmarks (**SWE-bench Verified, τ²-bench pass^k**) plus **LLM-as-judge** with documented biases — not a single perplexity number.

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

## Week 12 — Capstone: A Built-From-Scratch GPT With an Evidence Packet

### State of the Art (June 2026)
- **Model Cards** + one-command reproducibility (pinned seed/config/data hash) are the 2026 industry artifacts your packet mirrors; **EU AI Act** transparency obligations (main rules **Aug 2, 2026**) make them increasingly mandatory.
- Honest evaluation = triangulated metrics + named failures + next step — exactly the **LLM-as-judge + execution-based** discipline frontier labs publish.
- The packet is the bridge into Subject 03's full lifecycle and into the agentic / RAG / serving subjects that follow.

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
