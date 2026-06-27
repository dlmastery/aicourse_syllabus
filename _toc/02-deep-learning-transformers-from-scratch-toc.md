# Detailed Table of Contents — Subject 02 — Deep Learning & the Transformer, Built by Hand

_Source: `02-deep-learning-transformers-from-scratch.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**_

### Lecture 1 — The Neuron, the Forward Pass, and Scalar Autodiff From Scratch
_3-hour block · 🔧 reusable skill: `$autodiff-tracer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Artificial neuron |
| 00:30–01:00 | M2 | Computation graph & reverse-mode autodiff |
| 01:00–01:30 | M3 | Nonlinearity necessity |
| 01:30–02:00 | M4 | Input normalization |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | engine.py: a Value class wrapping a float with .data, .grad, _backward, supporting + * tanh |

### Lecture 2 — Backpropagation Through an MLP, By Hand (NumPy)
_3-hour block · 🔧 reusable skill: `$layer-backprop-derive`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Softmax |
| 00:30–01:00 | M2 | Cross-entropy loss |
| 01:00–01:30 | M3 | The backward pass |
| 01:30–02:00 | M4 | Batching |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | mlp_numpy.py: forward(X), backward(...), step(lr) for a 784→128→10 MLP with ReLU + softmax-CE |

### Lecture 3 — Optimizers: SGD, Momentum, RMSProp, Adam From Scratch
_3-hour block · 🔧 reusable skill: `$optimizer-bench`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | SGD |
| 00:30–01:00 | M2 | Momentum |
| 01:00–01:30 | M3 | RMSProp |
| 01:30–02:00 | M4 | Adam |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | optim.py: SGD, Momentum, RMSProp, Adam as classes with a uniform .step(params, grads) API |

### Lecture 4 — From NumPy to PyTorch + Regularization (Dropout, BatchNorm, Weight Decay)
_3-hour block · 🔧 reusable skill: `$regularization-ablation`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | autograd = your Week-1 engine at scale |
| 00:30–01:00 | M2 | Dropout |
| 01:00–01:30 | M3 | Batch normalization |
| 01:30–02:00 | M4 | Weight decay / L2 |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | mlp_torch.py: nn.Module MLP matching mlp_numpy.py; assert outputs agree on a fixed batch to 1e-4 |

### Lecture 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST
_3-hour block · 🔧 reusable skill: `$conv-shape-planner`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Convolution |
| 00:30–01:00 | M2 | Output-size formula |
| 01:00–01:30 | M3 | Pooling |
| 01:30–02:00 | M4 | Parameter sharing |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | conv_numpy.py: conv2d_forward (im2col allowed) + maxpool2d; check against torch.nn.functional.conv2d |

### Lecture 6 — Sequence Models: RNNs and LSTMs From Scratch (and the Char-LM)
_3-hour block · 🔧 reusable skill: `$sequence-sanity`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RNN recurrence |
| 00:30–01:00 | M2 | BPTT |
| 01:00–01:30 | M3 | Vanishing/exploding gradients |
| 01:30–02:00 | M4 | LSTM gates |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | rnn_numpy.py: a vanilla RNN cell + BPTT, gradient-checked on a 5-step sequence |

### Lecture 7 — Attention From Scratch: Why It Replaced Recurrence
_3-hour block · 🔧 reusable skill: `$attention-inspector`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaled dot-product attention |
| 00:30–01:00 | M2 | Causal mask |
| 01:00–01:30 | M3 | Q/K/V projections |
| 01:30–02:00 | M4 | Attention ≠ explanation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | attention_numpy.py: scaled_dot_product_attention(Q,K,V,mask) + a causal mask; check vs a PyTorch ref |

### Lecture 8 — The Transformer Block, Built End to End
_3-hour block · 🔧 reusable skill: `$transformer-block-validator`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Multi-head attention |
| 00:30–01:00 | M2 | Positional encoding |
| 01:00–01:30 | M3 | Residual connections |
| 01:30–02:00 | M4 | LayerNorm + pre-norm |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | transformer_block.py: MultiHeadAttention, PositionalEncoding, TransformerBlock (pre-norm) in PyTorch |

### Lecture 9 — Tokenization and Byte-Pair Encoding From Scratch
_3-hour block · 🔧 reusable skill: `$tokenizer-probe`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | BPE training |
| 00:30–01:00 | M2 | Encoding/decoding |
| 01:00–01:30 | M3 | Vocab size trade-off |
| 01:30–02:00 | M4 | Byte-level fallback |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | bpe.py: train_bpe(corpus, vocab_size), encode(text), decode(ids); assert exact round-trip on held-ou |

### Lecture 10 — Training a Small GPT: nanoGPT From Scratch
_3-hour block · 🔧 reusable skill: `$mini-train-loop`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | GPT forward pass |
| 00:30–01:00 | M2 | LR schedule |
| 01:00–01:30 | M3 | Sampling |
| 01:30–02:00 | M4 | Perplexity |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | gpt.py: a configurable GPT (n_layer, n_head, d_model, block_size) reusing your Week-8 block |

### Lecture 11 — Scaling, Efficiency, and Honest Evaluation of Your Small GPT
_3-hour block · 🔧 reusable skill: `$eval-triangulator`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaling laws (intuition) |
| 00:30–01:00 | M2 | Mixed precision |
| 01:00–01:30 | M3 | KV-cache |
| 01:30–02:00 | M4 | Evaluation triangulation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | scaling_study.py: train 3–4 model sizes (e.g., 1M/3M/10M params) on a fixed token budget; plot loss  |

### Lecture 12 — Capstone: A Built-From-Scratch GPT With an Evidence Packet
_3-hour block · 🔧 reusable skill: `$model-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick a corpus (TinyShakespeare, a WikiText subset, TinyStories, or your own ≤ 50 MB clean text — doc |

