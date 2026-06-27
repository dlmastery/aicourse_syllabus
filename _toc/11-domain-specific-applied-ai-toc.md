# Detailed Table of Contents — Subject 11 — Domain-Specific Applied AI

_Source: `11-domain-specific-applied-ai.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor
_3-hour block · 🔧 skill: `$domain-readiness` · ▶ project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use the canonical end-to-end ML template (CI, pipelines, deploy) to scaffold your anchor-vertical solution._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prediction ≠ decision; Cost asymmetry |
| 00:30–01:00 | M2 | Regulatory tiering (EU AI Act) |
| 01:00–01:30 | M3 | Distribution shift is the default, not the exception |
| 01:30–02:00 | M4 | Automation bias & feedback loops |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use the canonical end-to-end ML template (CI, pipelines, deploy) to scaffold your anchor-vertical solution. |

### Lecture 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)
_3-hour block · 🔧 skill: `$xai-audit` · ▶ project: [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — train the medical-image classifier with a patient-level split and a Grad-CAM shortcut audit._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Patient-level splitting; Dice / IoU vs accuracy |
| 00:30–01:00 | M2 | Calibration & abstention |
| 01:00–01:30 | M3 | XAI as a *failure detector* |
| 01:30–02:00 | M4 | HIPAA Safe Harbor |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Malaria-Detection`](https://github.com/krishnaik06/Malaria-Detection) — train the medical-image classifier with a patient-level split and a Grad-CAM shortcut audit. |

### Lecture 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)
_3-hour block · 🔧 skill: `$faithfulness-judge` · ▶ project: [`krishnaik06/Text-Summarization-NLP-Project`](https://github.com/krishnaik06/Text-Summarization-NLP-Project) — adapt it to clinical-note summarization with a retrieval-grounding + faithfulness check._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PHI de-identification on text |
| 00:30–01:00 | M2 | Clinical NER & concept normalization |
| 01:00–01:30 | M3 | Negation & uncertainty |
| 01:30–02:00 | M4 | Grounded generation (faithfulness) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Text-Summarization-NLP-Project`](https://github.com/krishnaik06/Text-Summarization-NLP-Project) — adapt it to clinical-note summarization with a retrieval-grounding + faithfulness check. |

### Lecture 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)
_3-hour block · 🔧 skill: `$citation-verifier` · ▶ project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — build citation-grounded RAG over contracts/case-law with a citation-verifier gate that blocks fabricated cites._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Clause-level extraction; Long-document handling |
| 00:30–01:00 | M2 | Citation grounding & verification |
| 01:00–01:30 | M3 | GraphRAG over precedent |
| 01:30–02:00 | M4 | Document & table retrieval (visual / layout-aware) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — build citation-grounded RAG over contracts/case-law with a citation-verifier gate that blocks fabricated cites. |

### Lecture 5 — Finance I: Fraud Detection & Point-in-Time Correctness
_3-hour block · 🔧 skill: `$pit-leakage-audit` · ▶ project: [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — build the fraud scorer with PIT-correct features and a fixed alerts-per-day operating point._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Point-in-time correctness |
| 00:30–01:00 | M2 | Class imbalance & cost |
| 01:00–01:30 | M3 | Temporal validation |
| 01:30–02:00 | M4 | Adversarial & label-delay dynamics |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Credit-Card-Fraudlent`](https://github.com/krishnaik06/Credit-Card-Fraudlent) — build the fraud scorer with PIT-correct features and a fixed alerts-per-day operating point. |

### Lecture 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)
_3-hour block · 🔧 skill: `$model-governance-card` · ▶ project: [`krishnaik06/ARIMA-And-Seasonal-ARIMA`](https://github.com/krishnaik06/ARIMA-And-Seasonal-ARIMA) — build the probabilistic forecast half with calibrated prediction intervals (pair with a PD scorecard + reason codes)._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Calibration over discrimination; Reason codes / adverse action |
| 00:30–01:00 | M2 | Fairness testing |
| 01:00–01:30 | M3 | Probabilistic forecasting & intervals |
| 01:30–02:00 | M4 | SR 11-7 model risk |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/ARIMA-And-Seasonal-ARIMA`](https://github.com/krishnaik06/ARIMA-And-Seasonal-ARIMA) — build the probabilistic forecast half with calibrated prediction intervals (pair with a PD scorecard + reason codes). |

### Lecture 7 — Retail & E-commerce I: Recommendation Systems at Scale
_3-hour block · 🔧 skill: `$recsys-slice-eval` · ▶ project: [`krishnaik06/Movie-Recommender-in-python`](https://github.com/krishnaik06/Movie-Recommender-in-python) — build retrieval + ranking with explicit cold-start and popularity-bias slices._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Two-stage architecture |
| 00:30–01:00 | M2 | Implicit feedback |
| 01:00–01:30 | M3 | Ranking metrics |
| 01:30–02:00 | M4 | Popularity & feedback bias |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Movie-Recommender-in-python`](https://github.com/krishnaik06/Movie-Recommender-in-python) — build retrieval + ranking with explicit cold-start and popularity-bias slices. |

### Lecture 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions
_3-hour block · 🔧 skill: `$decision-forecast-eval` · ▶ project: [`krishnaik06/Stock-MArket-Forecasting`](https://github.com/krishnaik06/Stock-MArket-Forecasting) — build SKU-style forecasts and convert them to a newsvendor reorder decision with a cost simulation._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Asymmetric cost → quantile forecast |
| 00:30–01:00 | M2 | Scale-free accuracy |
| 01:00–01:30 | M3 | Intermittent demand |
| 01:30–02:00 | M4 | Hierarchical coherence |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Stock-MArket-Forecasting`](https://github.com/krishnaik06/Stock-MArket-Forecasting) — build SKU-style forecasts and convert them to a newsvendor reorder decision with a cost simulation. |

### Lecture 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC
_3-hour block · 🔧 skill: `$anomaly-qc-eval` · ▶ project: [`krishnaik06/Tomato-Leaf-Disease-Prediction`](https://github.com/krishnaik06/Tomato-Leaf-Disease-Prediction) — train a visual defect/disease detector and report localization + a false-alarm operating threshold._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RUL regression / health index |
| 00:30–01:00 | M2 | Unsupervised/one-class defect detection |
| 01:00–01:30 | M3 | Localization vs detection |
| 01:30–02:00 | M4 | Operational thresholds |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Tomato-Leaf-Disease-Prediction`](https://github.com/krishnaik06/Tomato-Leaf-Disease-Prediction) — train a visual defect/disease detector and report localization + a false-alarm operating threshold. |

### Lecture 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)
_3-hour block · 🔧 skill: `$pedagogy-eval` · ▶ project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build the Socratic tutoring agent with a hint-ladder + CAS verifier and an answer-leakage probe._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaffolding vs answer-leakage |
| 00:30–01:00 | M2 | Knowledge tracing / mastery |
| 01:00–01:30 | M3 | Correctness guardrail |
| 01:30–02:00 | M4 | FERPA & minors |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — build the Socratic tutoring agent with a hint-ladder + CAS verifier and an answer-leakage probe. |

### Lecture 11 — AI for Science: Surrogates, Property Prediction & Inverse Design
_3-hour block · 🔧 skill: `$ood-science-eval` · ▶ project: [`krishnaik06/AQI-Project`](https://github.com/krishnaik06/AQI-Project) — build a scientific regression surrogate and report an OOD/extrapolation slice with an uncertainty estimate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaffold splitting |
| 00:30–01:00 | M2 | Graph/representation choice |
| 01:00–01:30 | M3 | Physics-informed constraints |
| 01:30–02:00 | M4 | OOD honesty & uncertainty |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/AQI-Project`](https://github.com/krishnaik06/AQI-Project) — build a scientific regression surrogate and report an OOD/extrapolation slice with an uncertainty estimate. |

### Lecture 12 — Capstone Build & Deployment-Risk Dossier
_3-hour block · 🔧 skill: `$deployment-risk-dossier` · ▶ project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — wrap your anchor solution in the end-to-end template (pipelines, CI, deploy) and bolt on the drift monitor + dossier._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — wrap your anchor solution in the end-to-end template (pipelines, CI, deploy) and bolt on the drift monitor + dossier. |

### Lecture 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis
_3-hour block · 🔧 skill: `$ship-review` · ▶ project: [`krishnaik06/Data-Science-Projects-For-Resumes`](https://github.com/krishnaik06/Data-Science-Projects-For-Resumes) — package and present your shipped solution for the stakeholder + regulator panel._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Data-Science-Projects-For-Resumes`](https://github.com/krishnaik06/Data-Science-Projects-For-Resumes) — package and present your shipped solution for the stakeholder + regulator panel. |

