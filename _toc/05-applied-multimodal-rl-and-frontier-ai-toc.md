# Detailed Table of Contents — Applied, Multimodal, Reinforcement & Frontier AI

_`05-applied-multimodal-rl-and-frontier-ai.md` · **1 quarter-track · 3 lecture-hrs/week · 52 lectures across 4 parts (~156 contact hrs)**. Every lecture has a ▶ practical project + State-of-the-Art with links._

## Part A — Domain-Specific Applied AI

### Week 1 — What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor
_3-hour block · 🔧 `$domain-readiness` · ▶ [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use the canonical end-to-end ML template (CI, pipelines, deploy) to scaffold your anchor-vertical solution._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prediction ≠ decision; Cost asymmetry |
| 00:30–01:00 | M2 | Regulatory tiering (EU AI Act) |
| 01:00–01:30 | M3 | Distribution shift is the default, not the exception |
| 01:30–02:00 | M4 | Automation bias & feedback loops |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use the canonical end-to-end ML template (CI, pipelines, deploy) to scaffold your anchor-vertical solution. |

### Week 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)
_3-hour block · 🔧 `$xai-audit` · ▶ [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — train the medical-image classifier with a patient-level split and a Grad-CAM shortcut audit._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Patient-level splitting; Dice / IoU vs accuracy |
| 00:30–01:00 | M2 | Calibration & abstention |
| 01:00–01:30 | M3 | XAI as a *failure detector* |
| 01:30–02:00 | M4 | HIPAA Safe Harbor |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — train the medical-image classifier with a patient-level split and a Grad-CAM shortcut audit. |

### Week 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)
_3-hour block · 🔧 `$faithfulness-judge` · ▶ [`krishnaik06/Text-Summarization-NLP-Project`](https://github.com/krishnaik06/Text-Summarization-NLP-Project) — adapt it to clinical-note summarization with a retrieval-grounding + faithfulness check._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PHI de-identification on text |
| 00:30–01:00 | M2 | Clinical NER & concept normalization |
| 01:00–01:30 | M3 | Negation & uncertainty |
| 01:30–02:00 | M4 | Grounded generation (faithfulness) |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Text-Summarization-NLP-Project`](https://github.com/krishnaik06/Text-Summarization-NLP-Project) — adapt it to clinical-note summarization with a retrieval-grounding + faithfulness check. |

### Week 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)
_3-hour block · 🔧 `$citation-verifier` · ▶ [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — build citation-grounded RAG over contracts/case-law with a citation-verifier gate that blocks fabricated cites._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Clause-level extraction; Long-document handling |
| 00:30–01:00 | M2 | Citation grounding & verification |
| 01:00–01:30 | M3 | GraphRAG over precedent |
| 01:30–02:00 | M4 | Document & table retrieval (visual / layout-aware) |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — build citation-grounded RAG over contracts/case-law with a citation-verifier gate that blocks fabricated cites. |

### Week 5 — Finance I: Fraud Detection & Point-in-Time Correctness
_3-hour block · 🔧 `$pit-leakage-audit` · ▶ [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — build the fraud scorer with PIT-correct features and a fixed alerts-per-day operating point._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Point-in-time correctness |
| 00:30–01:00 | M2 | Class imbalance & cost |
| 01:00–01:30 | M3 | Temporal validation |
| 01:30–02:00 | M4 | Adversarial & label-delay dynamics |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — build the fraud scorer with PIT-correct features and a fixed alerts-per-day operating point. |

### Week 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)
_3-hour block · 🔧 `$model-governance-card` · ▶ [`krishnaik06/ARIMA-And-Seasonal-ARIMA`](https://github.com/krishnaik06/ARIMA-And-Seasonal-ARIMA) — build the probabilistic forecast half with calibrated prediction intervals (pair with a PD scorecard + reason codes)._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Calibration over discrimination; Reason codes / adverse action |
| 00:30–01:00 | M2 | Fairness testing |
| 01:00–01:30 | M3 | Probabilistic forecasting & intervals |
| 01:30–02:00 | M4 | SR 11-7 model risk |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/ARIMA-And-Seasonal-ARIMA`](https://github.com/krishnaik06/ARIMA-And-Seasonal-ARIMA) — build the probabilistic forecast half with calibrated prediction intervals (pair with a PD scorecard + reason codes). |

### Week 7 — Retail & E-commerce I: Recommendation Systems at Scale
_3-hour block · 🔧 `$recsys-slice-eval` · ▶ [`krishnaik06/Movie-Recommender-in-python`](https://github.com/krishnaik06/Movie-Recommender-in-python) — build retrieval + ranking with explicit cold-start and popularity-bias slices._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Two-stage architecture |
| 00:30–01:00 | M2 | Implicit feedback |
| 01:00–01:30 | M3 | Ranking metrics |
| 01:30–02:00 | M4 | Popularity & feedback bias |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Movie-Recommender-in-python`](https://github.com/krishnaik06/Movie-Recommender-in-python) — build retrieval + ranking with explicit cold-start and popularity-bias slices. |

### Week 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions
_3-hour block · 🔧 `$decision-forecast-eval` · ▶ [`krishnaik06/Stock-MArket-Forecasting`](https://github.com/krishnaik06/Stock-MArket-Forecasting) — build SKU-style forecasts and convert them to a newsvendor reorder decision with a cost simulation._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Asymmetric cost → quantile forecast |
| 00:30–01:00 | M2 | Scale-free accuracy |
| 01:00–01:30 | M3 | Intermittent demand |
| 01:30–02:00 | M4 | Hierarchical coherence |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Stock-MArket-Forecasting`](https://github.com/krishnaik06/Stock-MArket-Forecasting) — build SKU-style forecasts and convert them to a newsvendor reorder decision with a cost simulation. |

### Week 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC
_3-hour block · 🔧 `$anomaly-qc-eval` · ▶ [`krishnaik06/Tomato-Leaf-Disease-Prediction`](https://github.com/krishnaik06/Tomato-Leaf-Disease-Prediction) — train a visual defect/disease detector and report localization + a false-alarm operating threshold._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RUL regression / health index |
| 00:30–01:00 | M2 | Unsupervised/one-class defect detection |
| 01:00–01:30 | M3 | Localization vs detection |
| 01:30–02:00 | M4 | Operational thresholds |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Tomato-Leaf-Disease-Prediction`](https://github.com/krishnaik06/Tomato-Leaf-Disease-Prediction) — train a visual defect/disease detector and report localization + a false-alarm operating threshold. |

### Week 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)
_3-hour block · 🔧 `$pedagogy-eval` · ▶ [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build the Socratic tutoring agent with a hint-ladder + CAS verifier and an answer-leakage probe._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaffolding vs answer-leakage |
| 00:30–01:00 | M2 | Knowledge tracing / mastery |
| 01:00–01:30 | M3 | Correctness guardrail |
| 01:30–02:00 | M4 | FERPA & minors |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build the Socratic tutoring agent with a hint-ladder + CAS verifier and an answer-leakage probe. |

### Week 11 — AI for Science: Surrogates, Property Prediction & Inverse Design
_3-hour block · 🔧 `$ood-science-eval` · ▶ [`krishnaik06/AQI-Project`](https://github.com/krishnaik06/AQI-Project) — build a scientific regression surrogate and report an OOD/extrapolation slice with an uncertainty estimate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaffold splitting |
| 00:30–01:00 | M2 | Graph/representation choice |
| 01:00–01:30 | M3 | Physics-informed constraints |
| 01:30–02:00 | M4 | OOD honesty & uncertainty |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/AQI-Project`](https://github.com/krishnaik06/AQI-Project) — build a scientific regression surrogate and report an OOD/extrapolation slice with an uncertainty estimate. |

### Week 12 — Capstone Build & Deployment-Risk Dossier
_3-hour block · 🔧 `$deployment-risk-dossier` · ▶ [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — wrap your anchor solution in the end-to-end template (pipelines, CI, deploy) and bolt on the drift monitor + dossier._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — wrap your anchor solution in the end-to-end template (pipelines, CI, deploy) and bolt on the drift monitor + dossier. |

### Week 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis
_3-hour block · 🔧 `$ship-review` · ▶ [`krishnaik06/Data-Science-Projects-For-Resumes`](https://github.com/krishnaik06/Data-Science-Projects-For-Resumes) — package and present your shipped solution for the stakeholder + regulator panel._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Data-Science-Projects-For-Resumes`](https://github.com/krishnaik06/Data-Science-Projects-For-Resumes) — package and present your shipped solution for the stakeholder + regulator panel. |

## Part B — Multimodal & Generative AI

### Week 1 — Vision Transformers From Scratch: Images as Sequences of Patches
_3-hour block · 🔧 `$from-scratch-verifier` · ▶ [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — implement the ViT (patch-embed → attention → class head) from scratch and verify it against a reference._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Patch embedding |
| 00:30–01:00 | M2 | Self-attention recap |
| 01:00–01:30 | M3 | Inductive bias trade-off |
| 01:30–02:00 | M4 | Class token vs mean pooling |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — implement the ViT (patch-embed → attention → class head) from scratch and verify it against a reference. |

### Week 2 — Contrastive Learning & CLIP: Aligning Images and Text
_3-hour block · 🔧 `$contrastive-eval` · ▶ [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — train a dual-encoder with the symmetric InfoNCE loss and measure both-direction retrieval._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Contrastive (InfoNCE) loss |
| 00:30–01:00 | M2 | Zero-shot classification |
| 01:00–01:30 | M3 | Batch size as negatives |
| 01:30–02:00 | M4 | Modality gap |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK) — train a dual-encoder with the symmetric InfoNCE loss and measure both-direction retrieval. |

### Week 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning
_3-hour block · 🔧 `$vlm-probe` · ▶ [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — run/serve a Qwen-VL VLM for VQA and LoRA-fine-tune it on a target slice._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Connector / projector |
| 00:30–01:00 | M2 | Visual tokens in context |
| 01:00–01:30 | M3 | Instruction tuning for VLMs |
| 01:30–02:00 | M4 | VLM hallucination |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — run/serve a Qwen-VL VLM for VQA and LoRA-fine-tune it on a target slice. |

### Week 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)
_3-hour block · 🔧 `$generative-eval` · ▶ [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — implement the DDPM forward/reverse + time-conditioned U-Net and report FID._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Forward process |
| 00:30–01:00 | M2 | Reverse process / objective |
| 01:00–01:30 | M3 | Time conditioning |
| 01:30–02:00 | M4 | Sampling steps |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — implement the DDPM forward/reverse + time-conditioned U-Net and report FID. |

### Week 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image
_3-hour block · 🔧 `$t2i-eval` · ▶ [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — extend to latent diffusion + CFG and LoRA/DreamBooth fine-tune with a CLIPScore eval._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Latent diffusion |
| 00:30–01:00 | M2 | Cross-attention text conditioning |
| 01:00–01:30 | M3 | Classifier-free guidance (CFG) |
| 01:30–02:00 | M4 | CLIPScore vs FID for text-to-image |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — extend to latent diffusion + CFG and LoRA/DreamBooth fine-tune with a CLIPScore eval. |

### Week 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone
_3-hour block · 🔧 `$sampler-benchmark` · ▶ [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — retrain with a conditional flow-matching objective and plot FID-vs-NFE against DDPM/DDIM._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Continuous-time view |
| 00:30–01:00 | M2 | Conditional flow matching loss |
| 01:00–01:30 | M3 | Rectified flow |
| 01:30–02:00 | M4 | DDIM bridge |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models) — retrain with a conditional flow-matching objective and plot FID-vs-NFE against DDPM/DDIM. |

### Week 7 — Video Generation: Spatiotemporal Diffusion & World Consistency
_3-hour block · 🔧 `$video-consistency-eval` · ▶ [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — generate action-conditioned frames and measure a temporal-consistency proxy + flicker catalog._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Temporal modeling |
| 00:30–01:00 | M2 | Latent video diffusion + DiT |
| 01:00–01:30 | M3 | Conditioning modes |
| 01:30–02:00 | M4 | Evaluation |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — generate action-conditioned frames and measure a temporal-consistency proxy + flicker catalog. |

### Week 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations
_3-hour block · 🔧 `$asr-robustness-eval` · ▶ [`VizuaraAI/audio-llm`](https://github.com/VizuaraAI/audio-llm) — build the Whisper ASR→WER + TTS pipeline and evaluate a noisy/accented slice._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ASR & WER |
| 00:30–01:00 | M2 | Mel-spectrogram pipeline |
| 01:00–01:30 | M3 | Neural audio codecs |
| 01:30–02:00 | M4 | Robustness slices |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/audio-llm`](https://github.com/VizuaraAI/audio-llm) — build the Whisper ASR→WER + TTS pipeline and evaluate a noisy/accented slice. |

### Week 9 — Any-to-Any & Unified Multimodal Models
_3-hour block · 🔧 `$modality-router-eval` · ▶ [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — assemble a speech→VLM→speech any-to-any pipeline and compare it head-to-head with a native multimodal model._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Unified token space |
| 00:30–01:00 | M2 | Early vs late fusion |
| 01:00–01:30 | M3 | Interleaved generation |
| 01:30–02:00 | M4 | The specialist-vs-generalist trade-off |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps) — assemble a speech→VLM→speech any-to-any pipeline and compare it head-to-head with a native multimodal model. |

### Week 10 — World Models: Learning Simulators (IRIS, Genie-style)
_3-hour block · 🔧 `$rollout-eval` · ▶ [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — train/run an action-conditioned world model and plot rollout error vs horizon._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Latent dynamics |
| 00:30–01:00 | M2 | Transformer/tokenized world models (IRIS) |
| 01:00–01:30 | M3 | Action-conditioned generation (Genie) |
| 01:30–02:00 | M4 | Compounding error / rollout horizon |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation) — train/run an action-conditioned world model and plot rollout error vs horizon. |

### Week 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems
_3-hour block · 🔧 `$mm-grounding-eval` · ▶ [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — build multimodal/agentic RAG with ColPali-style retrieval + a grounding/abstention guardrail._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Multimodal retrieval |
| 00:30–01:00 | M2 | Grounded multimodal generation |
| 01:00–01:30 | M3 | Agentic tools for vision |
| 01:30–02:00 | M4 | Multimodal hallucination guardrail |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques) — build multimodal/agentic RAG with ColPali-style retrieval + a grounding/abstention guardrail. |

### Week 12 — Capstone: A Multimodal App + a Small Diffusion Model
_3-hour block · 🔧 `$multimodal-capstone-packet` · ▶ [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — ship the coupled diffusion-model + served VLM app with honest evals as the capstone._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — ship the coupled diffusion-model + served VLM app with honest evals as the capstone. |

## Part C — Reinforcement Learning, Robotics & Embodied AI

### Week 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch
_3-hour block · 🔧 `$mdp-modeler` · ▶ [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement value & policy iteration on the tutorial gridworld and assert both converge to the same V*._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Markov Decision Process; Return & discounting |
| 00:30–01:00 | M2 | State-value & action-value |
| 01:00–01:30 | M3 | Bellman optimality |
| 01:30–02:00 | M4 | Contraction & convergence |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement value & policy iteration on the tutorial gridworld and assert both converge to the same V*. |

### Week 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA
_3-hour block · 🔧 `$rollout-harness` · ▶ [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — code tabular Q-learning vs SARSA on CliffWalking and reproduce the safe-vs-optimal path split over ≥5 seeds._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | TD(0) update; Q-learning (off-policy) |
| 00:30–01:00 | M2 | SARSA (on-policy) |
| 01:00–01:30 | M3 | Exploration |
| 01:30–02:00 | M4 | Bias–variance of targets |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — code tabular Q-learning vs SARSA on CliffWalking and reproduce the safe-vs-optimal path split over ≥5 seeds. |

### Week 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow
_3-hour block · 🔧 `$value-debugger` · ▶ [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — build DQN→Double→Dueling→PER on LunarLander and attribute each ablation’s sample-efficiency gain._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Q-network; Replay buffer + target net |
| 00:30–01:00 | M2 | Double DQN |
| 01:00–01:30 | M3 | Dueling architecture |
| 01:30–02:00 | M4 | Prioritized replay / n-step / distributional / noisy nets |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — build DQN→Double→Dueling→PER on LunarLander and attribute each ablation’s sample-efficiency gain. |

### Week 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C
_3-hour block · 🔧 `$gradient-variance-meter` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — implement REINFORCE + value baseline + A2C and quantify the baseline’s gradient-variance reduction._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Policy-gradient theorem |
| 00:30–01:00 | M2 | Baseline / advantage |
| 01:00–01:30 | M3 | Actor-Critic |
| 01:30–02:00 | M4 | Continuous policies |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — implement REINFORCE + value baseline + A2C and quantify the baseline’s gradient-variance reduction. |

### Week 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL
_3-hour block · 🔧 `$ppo-trainer` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train PPO+GAE on MuJoCo HalfCheetah/MetaDrive and sweep λ and clip ε with a KL health trace._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Surrogate objective / importance ratio |
| 00:30–01:00 | M2 | PPO-clip |
| 01:00–01:30 | M3 | GAE |
| 01:30–02:00 | M4 | TRPO vs PPO |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train PPO+GAE on MuJoCo HalfCheetah/MetaDrive and sweep λ and clip ε with a KL health trace. |

### Week 6 — Offline RL & Imitation Learning
_3-hour block · 🔧 `$offline-data-auditor` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train IQL vs BC on a Minari dataset and show DAgger fixes compounding error._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Behavior cloning; Distributional shift |
| 00:30–01:00 | M2 | Conservative value (CQL) |
| 01:00–01:30 | M3 | Implicit Q-Learning (IQL) |
| 01:30–02:00 | M4 | Decision Transformer |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train IQL vs BC on a Minari dataset and show DAgger fixes compounding error. |

### Week 7 — Model-Based RL, MCTS & World Models (IRIS)
_3-hour block · 🔧 `$model-trust-auditor` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build UCT MCTS on Connect-Four + a tiny IRIS-style world model and measure the safe imagination horizon._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Model-based RL |
| 00:30–01:00 | M2 | MCTS |
| 01:00–01:30 | M3 | AlphaZero loop |
| 01:30–02:00 | M4 | World models (IRIS) |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build UCT MCTS on Connect-Four + a tiny IRIS-style world model and measure the safe imagination horizon. |

### Week 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO
_3-hour block · 🔧 `$preference-tuner` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — SFT→DPO on UltraFeedback with TRL, then swap SimPO/KTO/ORPO and compare length-controlled win-rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Reward model (Bradley-Terry) |
| 00:30–01:00 | M2 | PPO-RLHF objective |
| 01:00–01:30 | M3 | DPO |
| 01:30–02:00 | M4 | SimPO / KTO / ORPO |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — SFT→DPO on UltraFeedback with TRL, then swap SimPO/KTO/ORPO and compare length-controlled win-rate. |

### Week 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO
_3-hour block · 🔧 `$rlvr-trainer` · ▶ [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — train GRPO on GSM8K with an exact-match verifier and ablate GRPO→Dr.GRPO→DAPO on pass@1 and response length._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLVR |
| 00:30–01:00 | M2 | GRPO |
| 01:00–01:30 | M3 | GRPO biases (Dr.GRPO) |
| 01:30–02:00 | M4 | DAPO |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — train GRPO on GSM8K with an exact-match verifier and ablate GRPO→Dr.GRPO→DAPO on pass@1 and response length. |

### Week 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure
_3-hour block · 🔧 `$agentic-rl-env` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — wrap a repo+pytest as a Gymnasium env and train an agent with veRL+Ray+vLLM; report resolved-rate + the infra bottleneck._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Agentic MDP |
| 00:30–01:00 | M2 | SWE-RL / DeepSWE |
| 01:00–01:30 | M3 | Distributed RL stack |
| 01:30–02:00 | M4 | Reward sparsity & shaping |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — wrap a repo+pytest as a Gymnasium env and train an agent with veRL+Ray+vLLM; report resolved-rate + the infra bottleneck. |

### Week 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real
_3-hour block · 🔧 `$embodied-eval` · ▶ [`VizuaraAILabs/ACT-Maniskill`](https://github.com/VizuaraAILabs/ACT-Maniskill) — fine-tune an action-chunking (ACT) policy on ManiSkill and evaluate sim success-rate with an embodied-eval harness._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | VLA model |
| 00:30–01:00 | M2 | Action chunking |
| 01:00–01:30 | M3 | Sim-to-real gap |
| 01:30–02:00 | M4 | Imitation vs RL fine-tuning |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/ACT-Maniskill`](https://github.com/VizuaraAILabs/ACT-Maniskill) — fine-tune an action-chunking (ACT) policy on ManiSkill and evaluate sim success-rate with an embodied-eval harness. |

### Week 12 — Humanoid Locomotion & Multi-Agent RL
_3-hour block · 🔧 `$reward-shaping-auditor` · ▶ [`VizuaraAILabs/Modern-Robot-Learning`](https://github.com/VizuaraAILabs/Modern-Robot-Learning) — train a massively-parallel locomotion policy and a 2-agent CTDE task; audit the locomotion reward for shaping exploits._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Massively parallel sim |
| 00:30–01:00 | M2 | Locomotion reward |
| 01:00–01:30 | M3 | Stochastic game |
| 01:30–02:00 | M4 | CTDE (centralized training, decentralized execution) |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/Modern-Robot-Learning`](https://github.com/VizuaraAILabs/Modern-Robot-Learning) — train a massively-parallel locomotion policy and a 2-agent CTDE task; audit the locomotion reward for shaping exploits. |

### Week 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL
_3-hour block · 🔧 `$reward-hacking-redteam` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — red-team a trained policy’s reward for hacking and demonstrate a constrained-MDP/penalty mitigation._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Specification gaming |
| 00:30–01:00 | M2 | Goodhart / reward over-optimization |
| 01:00–01:30 | M3 | Constrained MDP |
| 01:30–02:00 | M4 | Mitigations |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — red-team a trained policy’s reward for hacking and demonstrate a constrained-MDP/penalty mitigation. |

### Week 14 — Capstone: An Agentic-RL System With a Safety Audit
_3-hour block · 🔧 `$rl-evidence-packet` · ▶ [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — ship one agentic-RL system end-to-end (train → held-out eval → reward-hacking audit → evidence packet)._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — ship one agentic-RL system end-to-end (train → held-out eval → reward-hacking audit → evidence packet). |

## Part D — Emerging Topics & AI for Science

### Week 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype
_3-hour block · 🔧 `$paper-triage` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — triage 3 thread papers and turn the chosen one into a running baseline notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Claim–evidence–gap |
| 00:30–01:00 | M2 | Reproducibility tiers |
| 01:00–01:30 | M3 | Benchmark contamination & gaming |
| 01:30–02:00 | M4 | The hype cycle |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — triage 3 thread papers and turn the chosen one into a running baseline notebook. |

### Week 2 — Autonomous Research Agents: The "AI Scientist"
_3-hour block · 🔧 `$research-claim-audit` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an AI-Scientist-style claim into a notebook and independently re-run it to find an over-claim._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The research loop as an agent |
| 00:30–01:00 | M2 | Verification bottleneck |
| 01:00–01:30 | M3 | Novelty vs recombination |
| 01:30–02:00 | M4 | Automated reviewing & its biases |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an AI-Scientist-style claim into a notebook and independently re-run it to find an over-claim. |

### Week 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL
_3-hour block · 🔧 `$scientific-repro` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an ESMFold inference notebook, compare to PDB (TM-score/RMSD), and analyze pLDDT-vs-error calibration._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Equivariance |
| 00:30–01:00 | M2 | MSA / evolutionary signal |
| 01:00–01:30 | M3 | Confidence (pLDDT/PAE) |
| 01:30–02:00 | M4 | Generalization limits |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an ESMFold inference notebook, compare to PDB (TM-score/RMSD), and analyze pLDDT-vs-error calibration. |

### Week 4 — AI for Science II: Molecules, Materials & Generative Design
_3-hour block · 🔧 `$discovery-validity-check` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce a generator/screen on QM9 / Materials Project as a validity-funnel notebook (generated→valid→novel→synthesizable)._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Property prediction + screening |
| 00:30–01:00 | M2 | Generative proposal |
| 01:00–01:30 | M3 | Validation gap |
| 01:30–02:00 | M4 | Distribution shift / novelty |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce a generator/screen on QM9 / Materials Project as a validity-funnel notebook (generated→valid→novel→synthesizable). |

### Week 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates
_3-hour block · 🔧 `$physics-validity` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a Burgers PINN + an FNO in one notebook, validate vs a solver, and compare generalization across instances._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Physics-informed loss |
| 00:30–01:00 | M2 | PINN vs neural operator |
| 01:00–01:30 | M3 | Training pathologies |
| 01:30–02:00 | M4 | Validation against the solver |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a Burgers PINN + an FNO in one notebook, validate vs a solver, and compare generalization across instances. |

### Week 6 — Emergence, Scaling & In-Context Learning
_3-hour block · 🔧 `$emergence-probe` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce grokking on modular arithmetic and test whether ‘emergence’ survives a continuous metric._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaling laws |
| 00:30–01:00 | M2 | Emergent abilities & the metric critique |
| 01:00–01:30 | M3 | In-context learning |
| 01:30–02:00 | M4 | Grokking |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce grokking on modular arithmetic and test whether ‘emergence’ survives a continuous metric. |

### Week 7 — Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring
_3-hour block · 🔧 `$interp-evidence` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an induction-head activation-patching result and interpret ≥5 SAE features in one notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Superposition |
| 00:30–01:00 | M2 | Sparse autoencoders (SAEs) |
| 01:00–01:30 | M3 | Circuits & activation patching |
| 01:30–02:00 | M4 | CoT monitoring & faithfulness |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — reproduce an induction-head activation-patching result and interpret ≥5 SAE features in one notebook. |

### Week 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning
_3-hour block · 🔧 `$neurosymbolic-loop` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an LLM+solver generate-execute-repair loop on ARC/GSM8K and beat a pure-LLM baseline on a generalization slice._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why hybridize |
| 00:30–01:00 | M2 | LLM-as-program-generator + solver |
| 01:00–01:30 | M3 | Differentiable/relaxed logic |
| 01:30–02:00 | M4 | Verifiability |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build an LLM+solver generate-execute-repair loop on ARC/GSM8K and beat a pure-LLM baseline on a generalization slice. |

### Week 9 — World Models & Simulation for Reasoning and Control
_3-hour block · 🔧 `$sim-fidelity-eval` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — run a Dreamer/IRIS-style world model and quantify the imagined-vs-real exploitation gap in a notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Planning in imagination |
| 00:30–01:00 | M2 | Model exploitation |
| 01:00–01:30 | M3 | Compounding error & horizon |
| 01:30–02:00 | M4 | Generative interactive environments (Genie) |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — run a Dreamer/IRIS-style world model and quantify the imagined-vs-real exploitation gap in a notebook. |

### Week 10 — Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier
_3-hour block · 🔧 `$frontier-tradeoff` · ▶ [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — reproduce an SSM/efficiency comparison (or a verified self-improvement loop) as a trade-off-curve notebook._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Synthetic data & self-improvement |
| 00:30–01:00 | M2 | Model collapse |
| 01:00–01:30 | M3 | State-space models (Mamba) |
| 01:30–02:00 | M4 | Hybrids |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — reproduce an SSM/efficiency comparison (or a verified self-improvement loop) as a trade-off-curve notebook. |

### Week 11 — Theorem Proving, Autoformalization & the Societal-Impact Panel
_3-hour block · 🔧 `$verifiable-reasoning-eval` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a Lean 4 + LeanDojo proof-search notebook on a small theorem set and report verified-rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Formal verification as ground truth |
| 00:30–01:00 | M2 | Autoformalization |
| 01:00–01:30 | M3 | LLM + search + RL (AlphaProof) |
| 01:30–02:00 | M4 | Governance frameworks |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — build a Lean 4 + LeanDojo proof-search notebook on a small theorem set and report verified-rate. |

### Week 12 — In-Class Hackathon: Build at the Frontier Under Pressure
_3-hour block · 🔧 `$frontier-sprint` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — under time pressure, convert one frontier result into a runnable, ablated notebook with seeds pinned._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — under time pressure, convert one frontier result into a runnable, ablated notebook with seeds pinned. |

### Week 13 — Final Talks: Conference-Style Presentations & Defense
_3-hour block · 🔧 `$research-defense` · ▶ [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — package your reproduction as a clean, one-command notebook to accompany the short paper + talk._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook) — package your reproduction as a clean, one-command notebook to accompany the short paper + talk. |

