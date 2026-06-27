# Detailed Table of Contents — Subject 11 — Domain-Specific Applied AI

_Source: `11-domain-specific-applied-ai.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**_

### Lecture 1 — What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor
_3-hour block · 🔧 reusable skill: `$domain-readiness`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Prediction ≠ decision; Cost asymmetry |
| 00:30–01:00 | M2 | Regulatory tiering (EU AI Act) |
| 01:00–01:30 | M3 | Distribution shift is the default, not the exception |
| 01:30–02:00 | M4 | Automation bias & feedback loops |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Take one provided dataset (Telco churn) and write three **decision memos** — the same prediction ser |

### Lecture 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)
_3-hour block · 🔧 reusable skill: `$xai-audit`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Patient-level splitting; Dice / IoU vs accuracy |
| 00:30–01:00 | M2 | Calibration & abstention |
| 01:00–01:30 | M3 | XAI as a *failure detector* |
| 01:30–02:00 | M4 | HIPAA Safe Harbor |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Train a tumor classifier on the **Br35H** brain-MRI set (or a segmenter on **BraTS** subset) with MO |

### Lecture 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)
_3-hour block · 🔧 reusable skill: `$faithfulness-judge`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | PHI de-identification on text |
| 00:30–01:00 | M2 | Clinical NER & concept normalization |
| 01:00–01:30 | M3 | Negation & uncertainty |
| 01:30–02:00 | M4 | Grounded generation (faithfulness) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On the **MIMIC-III/IV de-identified note subset** (credentialed) or the open **n2c2/i2b2** sample, r |

### Lecture 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)
_3-hour block · 🔧 reusable skill: `$citation-verifier`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Clause-level extraction |
| 00:30–01:00 | M2 | Long-document handling |
| 01:00–01:30 | M3 | Citation grounding & verification |
| 01:30–02:00 | M4 | GraphRAG over precedent |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On **CUAD** (Contract Understanding Atticus Dataset), train/prompt a clause classifier for 5 high-ri |

### Lecture 5 — Finance I: Fraud Detection & Point-in-Time Correctness
_3-hour block · 🔧 reusable skill: `$pit-leakage-audit`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Point-in-time correctness |
| 00:30–01:00 | M2 | Class imbalance & cost |
| 01:00–01:30 | M3 | Temporal validation |
| 01:30–02:00 | M4 | Adversarial & label-delay dynamics |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On **IEEE-CIS Fraud** (or **Sparkov**/credit-card-fraud), engineer entity-level velocity features wi |

### Lecture 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)
_3-hour block · 🔧 reusable skill: `$model-governance-card`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Calibration over discrimination; Reason codes / adverse action |
| 00:30–01:00 | M2 | Fairness testing |
| 01:00–01:30 | M3 | Probabilistic forecasting & intervals |
| 01:30–02:00 | M4 | SR 11-7 model risk |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On **Lending Club / Give Me Some Credit / German Credit**, train a PD model; produce a reliability d |

### Lecture 7 — Retail & E-commerce I: Recommendation Systems at Scale
_3-hour block · 🔧 reusable skill: `$recsys-slice-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Two-stage architecture |
| 00:30–01:00 | M2 | Implicit feedback |
| 01:00–01:30 | M3 | Ranking metrics |
| 01:30–02:00 | M4 | Popularity & feedback bias |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On **Instacart** (or **H&M Personalized Fashion**, **RetailRocket**), build a two-tower retrieval mo |

### Lecture 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions
_3-hour block · 🔧 reusable skill: `$decision-forecast-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Asymmetric cost → quantile forecast |
| 00:30–01:00 | M2 | Scale-free accuracy |
| 01:00–01:30 | M3 | Intermittent demand |
| 01:30–02:00 | M4 | Hierarchical coherence |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On **M5 / Corporación Favorita / Rossmann**, build per-SKU forecasts (statsforecast baselines + a gl |

### Lecture 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC
_3-hour block · 🔧 reusable skill: `$anomaly-qc-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RUL regression / health index |
| 00:30–01:00 | M2 | Unsupervised/one-class defect detection |
| 01:00–01:30 | M3 | Localization vs detection |
| 01:30–02:00 | M4 | Operational thresholds |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On **MVTec-AD**, train an Anomalib one-class detector (PatchCore) per category; report image- and pi |

### Lecture 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)
_3-hour block · 🔧 reusable skill: `$pedagogy-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaffolding vs answer-leakage |
| 00:30–01:00 | M2 | Knowledge tracing / mastery |
| 01:00–01:30 | M3 | Correctness guardrail |
| 01:30–02:00 | M4 | FERPA & minors |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build a tutoring agent (Claude Agent SDK) over a problem set (**GSM8K / MATH** items or a curriculum |

### Lecture 11 — AI for Science: Surrogates, Property Prediction & Inverse Design
_3-hour block · 🔧 reusable skill: `$ood-science-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaffold splitting |
| 00:30–01:00 | M2 | Graph/representation choice |
| 01:00–01:30 | M3 | Physics-informed constraints |
| 01:30–02:00 | M4 | OOD honesty & uncertainty |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | On **MoleculeNet (ESOL/BBBP/Tox21)** or **Materials Project**, train a GNN (or chemprop) property pr |

### Lecture 12 — Capstone Build & Deployment-Risk Dossier
_3-hour block · 🔧 reusable skill: `$deployment-risk-dossier`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Finish **M2** (model/agent passing eval) and **M3** (deployment-risk dossier) for your anchor |

### Lecture 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis
_3-hour block · 🔧 reusable skill: `$ship-review`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | **M4:** 12-minute ship review + 8-minute panel defense; submit final repo |

