# Detailed Table of Contents — Subject 02 — Deep Learning & the Transformer, Built by Hand

_Source: `02-deep-learning-transformers-from-scratch.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — The Neuron, the Forward Pass, and Scalar Autodiff From Scratch
_3-hour block · 🔧 skill: `$autodiff-tracer` · ▶ project: [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — follow its NN-from-scratch track to build a neuron, a forward pass, and a scalar-autodiff engine._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Artificial neuron |
| 00:30–01:00 | M2 | Computation graph & reverse-mode autodiff |
| 01:00–01:30 | M3 | Nonlinearity necessity |
| 01:30–02:00 | M4 | Input normalization |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — follow its NN-from-scratch track to build a neuron, a forward pass, and a scalar-autodiff engine. |

### Lecture 2 — Backpropagation Through an MLP, By Hand (NumPy)
_3-hour block · 🔧 skill: `$layer-backprop-derive` · ▶ project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — use its Appendix-A autograd intro to cross-check your hand-derived NumPy MLP backward pass._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Softmax |
| 00:30–01:00 | M2 | Cross-entropy loss |
| 01:00–01:30 | M3 | The backward pass |
| 01:30–02:00 | M4 | Batching |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — use its Appendix-A autograd intro to cross-check your hand-derived NumPy MLP backward pass. |

### Lecture 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch
_3-hour block · 🔧 skill: `$optimizer-bench` · ▶ project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — adapt its training loop to implement and compare SGD / Momentum / RMSProp / Adam on one model._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | SGD |
| 00:30–01:00 | M2 | Momentum |
| 01:00–01:30 | M3 | RMSProp |
| 01:30–02:00 | M4 | Adam |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — adapt its training loop to implement and compare SGD / Momentum / RMSProp / Adam on one model. |

### Lecture 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)
_3-hour block · 🔧 skill: `$regularization-ablation` · ▶ project: [`microsoft/AI-For-Beginners`](https://github.com/microsoft/AI-For-Beginners) — port your MLP to its PyTorch neural-network notebooks and ablate dropout / batchnorm / weight decay._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | autograd = your Week-1 engine at scale |
| 00:30–01:00 | M2 | Dropout |
| 01:00–01:30 | M3 | Batch normalization |
| 01:30–02:00 | M4 | Weight decay / L2 |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`microsoft/AI-For-Beginners`](https://github.com/microsoft/AI-For-Beginners) — port your MLP to its PyTorch neural-network notebooks and ablate dropout / batchnorm / weight decay. |

### Lecture 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST
_3-hour block · 🔧 skill: `$conv-shape-planner` · ▶ project: [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — build and train a small CNN end-to-end on an image dataset, visualize filters, and read the confusion matrix._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Convolution |
| 00:30–01:00 | M2 | Output-size formula |
| 01:00–01:30 | M3 | Pooling |
| 01:30–02:00 | M4 | Parameter sharing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — build and train a small CNN end-to-end on an image dataset, visualize filters, and read the confusion matrix. |

### Lecture 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)
_3-hour block · 🔧 skill: `$sequence-sanity` · ▶ project: [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — follow its sequence-models chapter to build an RNN/LSTM char-LM and report bits-per-character._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RNN recurrence |
| 00:30–01:00 | M2 | BPTT |
| 01:00–01:30 | M3 | Vanishing/exploding gradients |
| 01:30–02:00 | M4 | LSTM gates |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/visual-ai-book`](https://github.com/VizuaraAI/visual-ai-book) — follow its sequence-models chapter to build an RNN/LSTM char-LM and report bits-per-character. |

### Lecture 7 — Attention From Scratch: Why It Replaced Recurrence
_3-hour block · 🔧 skill: `$attention-inspector` · ▶ project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — implement scaled-dot-product + causal self-attention (Ch.3) and visualize the attention matrix._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaled dot-product attention |
| 00:30–01:00 | M2 | Causal mask |
| 01:00–01:30 | M3 | Q/K/V projections |
| 01:30–02:00 | M4 | Attention ≠ explanation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — implement scaled-dot-product + causal self-attention (Ch.3) and visualize the attention matrix. |

### Lecture 8 — The Transformer Block, Built End to End
_3-hour block · 🔧 skill: `$transformer-block-validator` · ▶ project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — assemble multi-head attention + the full pre-norm decoder block (Ch.3–4) and overfit a single batch._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Multi-head attention |
| 00:30–01:00 | M2 | Positional encoding |
| 01:00–01:30 | M3 | Residual connections |
| 01:30–02:00 | M4 | LayerNorm + pre-norm |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — assemble multi-head attention + the full pre-norm decoder block (Ch.3–4) and overfit a single batch. |

### Lecture 9 — Tokenization and Byte-Pair Encoding From Scratch
_3-hour block · 🔧 skill: `$tokenizer-probe` · ▶ project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — build/train a BPE tokenizer (Ch.2) and compare round-trip + fertility against tiktoken._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | BPE training |
| 00:30–01:00 | M2 | Encoding/decoding |
| 01:00–01:30 | M3 | Vocab size trade-off |
| 01:30–02:00 | M4 | Byte-level fallback |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — build/train a BPE tokenizer (Ch.2) and compare round-trip + fertility against tiktoken. |

### Lecture 10 — Training a Small GPT: nanoGPT From Scratch
_3-hour block · 🔧 skill: `$mini-train-loop` · ▶ project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — pretrain the GPT end-to-end (Ch.5) on TinyShakespeare and track perplexity + sampling._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | GPT forward pass |
| 00:30–01:00 | M2 | LR schedule |
| 01:00–01:30 | M3 | Sampling |
| 01:30–02:00 | M4 | Perplexity |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`rasbt/LLMs-from-scratch`](https://github.com/rasbt/LLMs-from-scratch) — pretrain the GPT end-to-end (Ch.5) on TinyShakespeare and track perplexity + sampling. |

### Lecture 11 — Scaling, Efficiency, and Honest Evaluation of Your Small GPT
_3-hour block · 🔧 skill: `$eval-triangulator` · ▶ project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — profile KV-cache + inference efficiency on your small GPT and measure the latency effect._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaling laws (intuition) |
| 00:30–01:00 | M2 | Mixed precision |
| 01:00–01:30 | M3 | KV-cache |
| 01:30–02:00 | M4 | Evaluation triangulation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/kv-cache-token-reduction-walkthrough`](https://github.com/VizuaraAI/kv-cache-token-reduction-walkthrough) — profile KV-cache + inference efficiency on your small GPT and measure the latency effect. |

### Lecture 12 — Capstone: A Built-From-Scratch GPT With an Evidence Packet
_3-hour block · 🔧 skill: `$model-evidence-packet` · ▶ project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — use its from-scratch gpt-oss pretraining as the reference to extend your capstone GPT + model card._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/nano-gpt-oss`](https://github.com/VizuaraAILabs/nano-gpt-oss) — use its from-scratch gpt-oss pretraining as the reference to extend your capstone GPT + model card. |

