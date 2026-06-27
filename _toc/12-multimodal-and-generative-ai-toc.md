# Detailed Table of Contents — Subject 12 — Multimodal & Generative AI

_Source: `12-multimodal-and-generative-ai.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**_

### Lecture 1 — Vision Transformers From Scratch: Images as Sequences of Patches
_3-hour block · 🔧 reusable skill: `$from-scratch-verifier`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Patch embedding |
| 00:30–01:00 | M2 | Self-attention recap |
| 01:00–01:30 | M3 | Inductive bias trade-off |
| 01:30–02:00 | M4 | Class token vs mean pooling |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement PatchEmbed, multi-head attention, a transformer block, and a ViT classifier in pure PyTorc |

### Lecture 2 — Contrastive Learning & CLIP: Aligning Images and Text
_3-hour block · 🔧 reusable skill: `$contrastive-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Contrastive (InfoNCE) loss |
| 00:30–01:00 | M2 | Zero-shot classification |
| 01:00–01:30 | M3 | Batch size as negatives |
| 01:30–02:00 | M4 | Modality gap |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement CLIP's symmetric loss; train a small dual-encoder (ViT image tower + a small text encoder) |

### Lecture 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning
_3-hour block · 🔧 reusable skill: `$vlm-probe`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Connector / projector |
| 00:30–01:00 | M2 | Visual tokens in context |
| 01:00–01:30 | M3 | Instruction tuning for VLMs |
| 01:30–02:00 | M4 | VLM hallucination |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run zero-shot VQA/captioning with an open VLM on **VQAv2 / TextVQA / DocVQA** samples; measure accur |

### Lecture 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)
_3-hour block · 🔧 reusable skill: `$generative-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Forward process |
| 00:30–01:00 | M2 | Reverse process / objective |
| 01:00–01:30 | M3 | Time conditioning |
| 01:30–02:00 | M4 | Sampling steps |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement the DDPM schedule, a small time-conditioned U-Net, the ε-loss, and an ancestral sampler; t |

### Lecture 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image
_3-hour block · 🔧 reusable skill: `$t2i-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Latent diffusion |
| 00:30–01:00 | M2 | Cross-attention text conditioning |
| 01:00–01:30 | M3 | Classifier-free guidance (CFG) |
| 01:30–02:00 | M4 | CLIPScore vs FID for text-to-image |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run diffusers Stable-Diffusion inference; sweep the CFG scale and document the quality/alignment tra |

### Lecture 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone
_3-hour block · 🔧 reusable skill: `$sampler-benchmark`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Continuous-time view |
| 00:30–01:00 | M2 | Conditional flow matching loss |
| 01:00–01:30 | M3 | Rectified flow |
| 01:30–02:00 | M4 | DDIM bridge |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement conditional flow matching on the same CIFAR/CelebA setup; sample with a fixed-step ODE sol |

### Lecture 7 — Video Generation: Spatiotemporal Diffusion & World Consistency
_3-hour block · 🔧 reusable skill: `$video-consistency-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Temporal modeling |
| 00:30–01:00 | M2 | Latent video diffusion + DiT |
| 01:00–01:30 | M3 | Conditioning modes |
| 01:30–02:00 | M4 | Evaluation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run an open model (**Stable Video Diffusion / CogVideoX**) for image- and text-to-video on a handful |

### Lecture 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations
_3-hour block · 🔧 reusable skill: `$asr-robustness-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ASR & WER |
| 00:30–01:00 | M2 | Mel-spectrogram pipeline |
| 01:00–01:30 | M3 | Neural audio codecs |
| 01:30–02:00 | M4 | Robustness slices |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Transcribe a **LibriSpeech** subset with Whisper; compute WER overall and on a noisy/accented slice; |

### Lecture 9 — Any-to-Any & Unified Multimodal Models
_3-hour block · 🔧 reusable skill: `$modality-router-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Unified token space |
| 00:30–01:00 | M2 | Early vs late fusion |
| 01:00–01:30 | M3 | Interleaved generation |
| 01:30–02:00 | M4 | The specialist-vs-generalist trade-off |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build an any-to-any **system** (not necessarily one model): speech-in (Whisper) → VLM reasoning over |

### Lecture 10 — World Models: Learning Simulators (IRIS, Genie-style)
_3-hour block · 🔧 reusable skill: `$rollout-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Latent dynamics |
| 00:30–01:00 | M2 | Transformer/tokenized world models (IRIS) |
| 01:00–01:30 | M3 | Action-conditioned generation (Genie) |
| 01:30–02:00 | M4 | Compounding error / rollout horizon |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run a tokenized world model (IRIS or a DreamerV3 latent model) on an Atari/gym environment, or train |

### Lecture 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems
_3-hour block · 🔧 reusable skill: `$mm-grounding-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Multimodal retrieval |
| 00:30–01:00 | M2 | Grounded multimodal generation |
| 01:00–01:30 | M3 | Agentic tools for vision |
| 01:30–02:00 | M4 | Multimodal hallucination guardrail |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build a multimodal-RAG assistant over a document image set (**DocVQA / InfographicVQA**) with image- |

### Lecture 12 — Capstone: A Multimodal App + a Small Diffusion Model
_3-hour block · 🔧 reusable skill: `$multimodal-capstone-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Finish **M3** (multimodal-RAG/agent hardening) and **M4** (demo + report) coupling (A) the diffusion |

