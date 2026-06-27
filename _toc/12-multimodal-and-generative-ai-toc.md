# Detailed Table of Contents — Subject 12 — Multimodal & Generative AI

_Source: `12-multimodal-and-generative-ai.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — Vision Transformers From Scratch: Images as Sequences of Patches
_3-hour block · 🔧 skill: `$from-scratch-verifier` · ▶ project: [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — implement the ViT (patch-embed → attention → class head) from scratch and verify it against a reference._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Patch embedding |
| 00:30–01:00 | M2 | Self-attention recap |
| 01:00–01:30 | M3 | Inductive bias trade-off |
| 01:30–02:00 | M4 | Class token vs mean pooling |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — implement the ViT (patch-embed → attention → class head) from scratch and verify it against a reference. |

### Lecture 2 — Contrastive Learning & CLIP: Aligning Images and Text
_3-hour block · 🔧 skill: `$contrastive-eval` · ▶ project: [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — train a dual-encoder with the symmetric InfoNCE loss and measure both-direction retrieval._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Contrastive (InfoNCE) loss |
| 00:30–01:00 | M2 | Zero-shot classification |
| 01:00–01:30 | M3 | Batch size as negatives |
| 01:30–02:00 | M4 | Modality gap |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — train a dual-encoder with the symmetric InfoNCE loss and measure both-direction retrieval. |

### Lecture 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning
_3-hour block · 🔧 skill: `$vlm-probe` · ▶ project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — run/serve a Qwen-VL VLM for VQA and LoRA-fine-tune it on a target slice._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Connector / projector |
| 00:30–01:00 | M2 | Visual tokens in context |
| 01:00–01:30 | M3 | Instruction tuning for VLMs |
| 01:30–02:00 | M4 | VLM hallucination |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — run/serve a Qwen-VL VLM for VQA and LoRA-fine-tune it on a target slice. |

### Lecture 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)
_3-hour block · 🔧 skill: `$generative-eval` · ▶ project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — implement the DDPM forward/reverse + time-conditioned U-Net and report FID._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Forward process |
| 00:30–01:00 | M2 | Reverse process / objective |
| 01:00–01:30 | M3 | Time conditioning |
| 01:30–02:00 | M4 | Sampling steps |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — implement the DDPM forward/reverse + time-conditioned U-Net and report FID. |

### Lecture 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image
_3-hour block · 🔧 skill: `$t2i-eval` · ▶ project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — extend to latent diffusion + CFG and LoRA/DreamBooth fine-tune with a CLIPScore eval._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Latent diffusion |
| 00:30–01:00 | M2 | Cross-attention text conditioning |
| 01:00–01:30 | M3 | Classifier-free guidance (CFG) |
| 01:30–02:00 | M4 | CLIPScore vs FID for text-to-image |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — extend to latent diffusion + CFG and LoRA/DreamBooth fine-tune with a CLIPScore eval. |

### Lecture 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone
_3-hour block · 🔧 skill: `$sampler-benchmark` · ▶ project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — retrain with a conditional flow-matching objective and plot FID-vs-NFE against DDPM/DDIM._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Continuous-time view |
| 00:30–01:00 | M2 | Conditional flow matching loss |
| 01:00–01:30 | M3 | Rectified flow |
| 01:30–02:00 | M4 | DDIM bridge |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — retrain with a conditional flow-matching objective and plot FID-vs-NFE against DDPM/DDIM. |

### Lecture 7 — Video Generation: Spatiotemporal Diffusion & World Consistency
_3-hour block · 🔧 skill: `$video-consistency-eval` · ▶ project: [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — generate action-conditioned frames and measure a temporal-consistency proxy + flicker catalog._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Temporal modeling |
| 00:30–01:00 | M2 | Latent video diffusion + DiT |
| 01:00–01:30 | M3 | Conditioning modes |
| 01:30–02:00 | M4 | Evaluation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — generate action-conditioned frames and measure a temporal-consistency proxy + flicker catalog. |

### Lecture 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations
_3-hour block · 🔧 skill: `$asr-robustness-eval` · ▶ project: [`VizuaraAI/audio-llm`](https://github.com/VizuaraAI/audio-llm) — build the Whisper ASR→WER + TTS pipeline and evaluate a noisy/accented slice._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ASR & WER |
| 00:30–01:00 | M2 | Mel-spectrogram pipeline |
| 01:00–01:30 | M3 | Neural audio codecs |
| 01:30–02:00 | M4 | Robustness slices |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/audio-llm`](https://github.com/VizuaraAI/audio-llm) — build the Whisper ASR→WER + TTS pipeline and evaluate a noisy/accented slice. |

### Lecture 9 — Any-to-Any & Unified Multimodal Models
_3-hour block · 🔧 skill: `$modality-router-eval` · ▶ project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — assemble a speech→VLM→speech any-to-any pipeline and compare it head-to-head with a native multimodal model._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Unified token space |
| 00:30–01:00 | M2 | Early vs late fusion |
| 01:00–01:30 | M3 | Interleaved generation |
| 01:30–02:00 | M4 | The specialist-vs-generalist trade-off |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — assemble a speech→VLM→speech any-to-any pipeline and compare it head-to-head with a native multimodal model. |

### Lecture 10 — World Models: Learning Simulators (IRIS, Genie-style)
_3-hour block · 🔧 skill: `$rollout-eval` · ▶ project: [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — train/run an action-conditioned world model and plot rollout error vs horizon._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Latent dynamics |
| 00:30–01:00 | M2 | Transformer/tokenized world models (IRIS) |
| 01:00–01:30 | M3 | Action-conditioned generation (Genie) |
| 01:30–02:00 | M4 | Compounding error / rollout horizon |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — train/run an action-conditioned world model and plot rollout error vs horizon. |

### Lecture 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems
_3-hour block · 🔧 skill: `$mm-grounding-eval` · ▶ project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — build multimodal/agentic RAG with ColPali-style retrieval + a grounding/abstention guardrail._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Multimodal retrieval |
| 00:30–01:00 | M2 | Grounded multimodal generation |
| 01:00–01:30 | M3 | Agentic tools for vision |
| 01:30–02:00 | M4 | Multimodal hallucination guardrail |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — build multimodal/agentic RAG with ColPali-style retrieval + a grounding/abstention guardrail. |

### Lecture 12 — Capstone: A Multimodal App + a Small Diffusion Model
_3-hour block · 🔧 skill: `$multimodal-capstone-packet` · ▶ project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — ship the coupled diffusion-model + served VLM app with honest evals as the capstone._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — ship the coupled diffusion-model + served VLM app with honest evals as the capstone. |

