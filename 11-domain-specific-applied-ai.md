# Subject 11 — Domain-Specific Applied AI

**Track:** Applied / Verticals · **Altitude:** Builder → Engineer · **Length:** 13 weeks (3 lecture hrs + 3 lab hrs/wk)
**Prerequisites:** Subjects 02–09 (deep learning, transformers/LLMs, RAG, agents, evaluation, MLOps). You can train a model, build a RAG pipeline, ship an agent, and write an honest eval. This course is where those skills meet a *regulated, consequential* domain.
**Pedagogy:** one **module per vertical**, each taught through the same six-lens template so a "healthcare model" and a "fraud model" are recognizably the same engineering discipline pointed at different stakes. The book's loop — *concept → code → critique → reflection → rebuild* — runs inside every module.

**The six-lens module template (memorize this — it is the whole course).** For every vertical we answer, in order:
1. **Domain data** — what it physically is, how it is collected, its biases, its leakage traps, its license.
2. **The real decision** — who acts on the output, on what timeline, and what a wrong answer costs them.
3. **Regulatory / ethical constraints** — the laws and norms that make this not a Kaggle problem (HIPAA, GDPR, EU AI Act, FCRA, SR 11-7, FERPA).
4. **A tailored model/agent** — the architecture that actually fits the data and decision (not "an LLM" reflexively).
5. **Evaluation** — the metric and slice analysis that match the *cost structure*, not the leaderboard.
6. **Deployment risks** — distribution shift, automation bias, feedback loops, adversaries, accountability.

**Course anchor:** in Week 1 each student **picks one vertical** and carries a single domain problem all term, shipping a complete domain solution (data → tailored model/agent → eval → deployment memo) as the capstone (Weeks 12–13). Every other week you *also* do the week's vertical lab, but your anchor vertical gets a running design journal.

**What you leave with:** a `domain-ai/` repo with seven vertical mini-builds, a reusable **domain-readiness harness**, and one production-grade anchor solution with a regulatory and risk dossier — evidence that you can take AI into a domain where being wrong is expensive.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 13 lectures (~39 contact hrs). Full time-boxed lecture plan: [`_toc/11-domain-specific-applied-ai-toc.md`](_toc/11-domain-specific-applied-ai-toc.md)._

1. **Lecture 1 — What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor** — Prediction ≠ decision · Cost asymmetry · Regulatory tiering (EU AI Act) · Distribution shift is the default, not the exception · Automation bias & feedback loops  ·  🔧 `$domain-readiness`
2. **Lecture 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)** — Patient-level splitting · Dice / IoU vs accuracy · Calibration & abstention · XAI as a *failure detector* · HIPAA Safe Harbor  ·  🔧 `$xai-audit`
3. **Lecture 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)** — PHI de-identification on text · Clinical NER & concept normalization · Negation & uncertainty · Grounded generation (faithfulness)  ·  🔧 `$faithfulness-judge`
4. **Lecture 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)** — Clause-level extraction · Long-document handling · Citation grounding & verification · GraphRAG over precedent  ·  🔧 `$citation-verifier`
5. **Lecture 5 — Finance I: Fraud Detection & Point-in-Time Correctness** — Point-in-time correctness · Class imbalance & cost · Temporal validation · Adversarial & label-delay dynamics  ·  🔧 `$pit-leakage-audit`
6. **Lecture 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)** — Calibration over discrimination · Reason codes / adverse action · Fairness testing · Probabilistic forecasting & intervals · SR 11-7 model risk  ·  🔧 `$model-governance-card`
7. **Lecture 7 — Retail & E-commerce I: Recommendation Systems at Scale** — Two-stage architecture · Implicit feedback · Ranking metrics · Popularity & feedback bias  ·  🔧 `$recsys-slice-eval`
8. **Lecture 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions** — Asymmetric cost → quantile forecast · Scale-free accuracy · Intermittent demand · Hierarchical coherence  ·  🔧 `$decision-forecast-eval`
9. **Lecture 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC** — RUL regression / health index · Unsupervised/one-class defect detection · Localization vs detection · Operational thresholds  ·  🔧 `$anomaly-qc-eval`
10. **Lecture 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)** — Scaffolding vs answer-leakage · Knowledge tracing / mastery · Correctness guardrail · FERPA & minors  ·  🔧 `$pedagogy-eval`
11. **Lecture 11 — AI for Science: Surrogates, Property Prediction & Inverse Design** — Scaffold splitting · Graph/representation choice · Physics-informed constraints · OOD honesty & uncertainty  ·  🔧 `$ood-science-eval`
12. **Lecture 12 — Capstone Build & Deployment-Risk Dossier**  ·  🔧 `$deployment-risk-dossier`
13. **Lecture 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis**  ·  🔧 `$ship-review`

---

## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly vertical labs (W2–W11, graded deliverables) | 50% | Per-week weights below; each builds one vertical lens-by-lens |
| Anchor design journal (W1–W11, running) | 8% | A defensible problem framing that survives contact with the domain |
| Midterm: regulatory & risk memo (W6) | 7% | Can you reason about constraints, not just metrics |
| Capstone domain solution (W12–13) | 30% | End-to-end shipped solution + dossier |
| Seminar participation / domain-expert Q&A | 5% | Engagement with guest clinicians/lawyers/quants/teachers |

Per-week lab weights (the 50%): W2 5% · W3 5% · W4 6% · W5 6% · W6 5% · W7 5% · W8 4% · W9 6% · W10 4% · W11 4%. (= 50%)

## Tooling & environment (June 2026)

- **Core:** Python 3.12, PyTorch 2.5, `uv` for envs, `scikit-learn` 1.5, `polars`/`pandas`, Jupyter, Weights & Biases or MLflow for tracking.
- **LLM / agents:** Claude Opus 4.x & Haiku 4.5 via the **Claude Agent SDK** (default for agentic modules), plus OpenAI GPT-5.x for cross-checks; LangGraph 0.3 for orchestration; **MCP** servers for tool/resource exposure.
- **RAG / retrieval:** LlamaIndex 0.12, `pgvector`/Qdrant, Cohere Rerank / BGE-reranker, Neo4j for GraphRAG (legal).
- **Vision:** `timm`, MONAI 1.4 (medical imaging), Anomalib 2.0 (industrial QC), Ultralytics YOLO11.
- **Tabular / time-series:** XGBoost 2.1, LightGBM, `statsforecast`/`mlforecast`, `feast` feature store (point-in-time joins), `temporian`.
- **Eval / safety:** Inspect AI, Ragas, DeepEval, `fairlearn`, `evidently` (drift), Captum / Grad-CAM (XAI).
- **Serving / ops:** FastAPI, Docker, Modal or AWS SageMaker, Langfuse for LLM observability.
- **Compute:** one 24 GB GPU (or Colab/Modal) is sufficient; all imaging labs use subsets that fit.
- **Governance note:** every dataset below is used under its stated license; clinical/PII data uses **de-identified, credentialed** subsets only. No real patient/customer data leaves the sandbox.

## Capstone spec (Weeks 12–13)

Ship a **domain solution** for your Week-1 anchor vertical with these milestones:
- **M1 (by W6):** data card + the real-decision memo + regulatory constraints table (this is the graded midterm).
- **M2 (by W10):** tailored model/agent passing a domain-appropriate eval with a slice analysis.
- **M3 (W12):** deployment-risk dossier — drift plan, failure-mode catalog, human-in-the-loop design, accountability/audit story.
- **M4 (W13):** 12-minute "ship review" presentation defended to a panel playing the domain stakeholder + regulator.

**Acceptance checklist:** every claim traces to an artifact; the metric matches the cost structure; at least one critical slice is reported; a named regulation is correctly applied; a wrong-answer cost is quantified; the deployment memo names how the system fails and who is accountable.

---

## Week 1 — What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor

### State of the Art (June 2026)
- **The EU AI Act timeline shifted in 2026**: GPAI obligations are live (Aug 2025) and **most high-risk rules apply Aug 2, 2026**, but the **Digital Omnibus (provisional May 7 2026) defers Annex III high-risk obligations to Dec 2, 2027** — old syllabi cite wrong dates. Fines up to €35M / 7% of turnover.
- **NIST AI RMF** plus sector regulators (FDA SaMD, SR 11-7, FCRA/ECOA, HIPAA, FERPA) remain the operative US frameworks.
- Frontier models (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro) make raw capability cheap; **the moat is domain data, cost-matched eval, and the regulatory dossier** — not the model.

**Altitude:** Builder · **Format:** 3h lecture + 3h lab
**Anchor case:** the same churn-prediction model, reframed three ways — as a marketing tool, a credit decision (regulated), and a clinical-deterioration alert (life-critical) — to feel how *stakes*, not algorithms, define a domain.

### Learning goals
- Apply the six-lens template to decompose any vertical problem before writing model code.
- Distinguish a *prediction* from a *decision* and name who acts on it, when, and at what cost.
- Identify the dominant regulatory regime for a given use (HIPAA, GDPR, EU AI Act risk tier, FCRA, SR 11-7, FERPA) and what it forbids.
- Commit to one anchor vertical and write a one-page problem framing.

### Concept map
- **Prediction ≠ decision.** Plain English: a score is not an action; someone (or some policy) turns the score into a treatment, a denial, a price. Where it matters: the *threshold and the cost matrix* live in the decision, not the model. Common mistake: optimizing AUC while ignoring the operating point the business actually uses.
- **Cost asymmetry.** Plain English: a false negative on a tumor ≠ a false negative on a movie recommendation. Where it matters: it dictates the metric (recall-at-fixed-precision, cost-weighted loss). Common mistake: reporting accuracy on an imbalanced, asymmetric problem.
- **Regulatory tiering (EU AI Act).** Plain English: the law sorts uses into prohibited / high-risk / limited / minimal; high-risk (medical, credit, hiring, education) triggers documentation, human oversight, and logging duties. Common mistake: assuming "it's just an API call" exempts you.
- **Distribution shift is the default, not the exception.** Domains drift (new fraud patterns, new scanners, new products). The model you ship is the model that starts decaying.
- **Automation bias & feedback loops.** Plain English: humans over-trust confident systems, and a deployed model changes the world it predicts (a fraud model trains future labels). Where it matters: every deployment lens.

### Hands-on build (the lab)
- Take one provided dataset (Telco churn) and write three **decision memos** — the same prediction serving marketing vs. credit vs. clinical contexts — each filling all six lenses and ending in a *different* metric and threshold.
- Skim the EU AI Act Annex III high-risk list and tag each of the seven course verticals with its risk tier.
- **Deliverable:** `anchor/week01-framing.md` choosing your anchor vertical with the six lenses sketched. **Acceptance:** the framing names a concrete decision-maker, a wrong-answer cost in real units, and one applicable regulation.

▶ **Practical project:** `krishnaik06/mlproject` — use the canonical end-to-end ML template (CI, pipelines, deploy) to scaffold your anchor-vertical solution.

### Harness / reusable skill — `$domain-readiness`
- **Purpose:** turn any vertical problem into a structured six-lens readiness brief before modeling.
- **Inputs:** a one-line use case. **Required outputs:** data lens, decision lens, regulatory lens, candidate model, eval plan, top-3 deployment risks.
- **Minimal workflow:** interrogate each lens → flag the one most likely to kill the project → name the cheapest check that would de-risk it. **Evidence artifact:** `anchor/readiness-brief.md`.

### Common failure modes
- **Algorithm-first reflex** → reaching for an LLM before understanding the decision. *Fix:* fill the decision lens before naming a model.
- **Kaggle framing** → treating a regulated problem as a leaderboard. *Fix:* the regulatory lens is mandatory, not optional.
- **Metric inherited from a tutorial** → accuracy on an asymmetric problem. *Fix:* derive the metric from the cost matrix.
- **Ignoring the feedback loop** → assuming labels are exogenous. *Fix:* draw the data-generating loop including your own deployed model.

### Evidence artifact
`anchor/week01-framing.md` + the three churn decision memos.

### Skill sink-in
Before reading the EU AI Act list, **predict** which of the seven verticals are "high-risk." Check. Record which one surprised you and why.

### Depth upgrade
- **Dataset:** Telco Customer Churn — kaggle.com/datasets/blastchar/telco-customer-churn (7,043 rows × 21 cols, ~1 MB, open/CC0). Reused only as a neutral substrate for the framing exercise.
- **Code stub:**
```python
# week01: derive the operating threshold from a cost matrix, not 0.5
import numpy as np
def best_threshold(y_true, p_hat, cost_fp, cost_fn, grid=np.linspace(0.01, 0.99, 99)):
    def cost(t):
        pred = (p_hat >= t).astype(int)
        fp = ((pred == 1) & (y_true == 0)).sum()
        fn = ((pred == 0) & (y_true == 1)).sum()
        return cost_fp * fp + cost_fn * fn
    costs = [(t, cost(t)) for t in grid]
    return min(costs, key=lambda z: z[1])      # (threshold*, expected_cost)
# marketing: cost_fn=1, cost_fp=1 ; credit: cost_fn=5, cost_fp=1 ; clinical: cost_fn=50, cost_fp=1
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Decision clarity | Names actor, timeline, action | Vague "the business" | No decision identified |
| Cost in real units | Quantified, justified | Stated, unjustified | Absent |
| Regulatory lens | Correct regime + obligation | Named but misapplied | Missing |
| Six-lens completeness | All six, specific | Some generic | <4 filled |

- **Assessment weight:** part of the 8% anchor-journal grade (W1 milestone).
- **Readings:**
  - "Regulation (EU) 2024/1689 — the AI Act," European Parliament & Council, 2024 (Annex III high-risk list).
  - "The AI Index Report 2025," Stanford HAI (domain adoption & risk chapter).
  - Saria & Subbaswamy, "Tutorial on Safe and Reliable ML in Healthcare" (dataset shift), 2019/updated.
  - Chip Huyen, "AI Engineering," 2025 (Ch. on use-case framing).

---

## Week 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)

### State of the Art (June 2026)
- **MONAI 1.4 + medical foundation models** (MedSAM-2, RadDINO, **MedGemma**) are the 2026 baseline — segment-anything-style priors replace much from-scratch training.
- The **FDA keeps clearing AI/ML SaMD** under the predetermined-change-control (PCCP) pathway; calibration + abstention are now expected, not optional.
- Shortcut-learning audits (Grad-CAM, and increasingly **sparse-autoencoder feature** inspection) are standard practice after the COVID-radiograph shortcut failures.

**Altitude:** Builder · **Anchor case:** a brain-MRI tumor screen whose output a radiologist must trust or override in seconds.

### Learning goals
- Train and evaluate a medical image classifier/segmenter on a real (de-identified) imaging dataset with patient-level splits.
- Produce and critically read an XAI explanation (Grad-CAM / attention) and explain why a "right answer for the wrong reason" is a deployment hazard.
- State the HIPAA Safe-Harbor de-identification rule and the FDA "Software as a Medical Device" (SaMD) framing at a working level.

### Concept map
- **Patient-level splitting.** *Plain English:* all slices/scans from one patient must sit on the same side of the train/test split. *Where it matters:* slice-level splits leak identity and inflate scores. *Common mistake:* `train_test_split` over images, not patients — the classic medical-AI leak.
- **Dice / IoU vs accuracy.** *Formula:* `Dice = 2|A∩B| / (|A|+|B|)`. *Symbols:* `A` predicted mask, `B` ground-truth mask. *Plain English:* overlap of predicted and true tumor regions. *Code mapping:* `dice = 2*(pred*gt).sum()/(pred.sum()+gt.sum()+eps)`. *Common mistake:* reporting pixel accuracy when 99% of pixels are background.
- **Calibration & abstention.** Plain English: a screen that says "unsure, refer to human" beats a confident wrong call. Where it matters: high-cost-FN clinical settings.
- **XAI as a *failure detector*.** Grad-CAM that highlights a scanner watermark instead of the lesion reveals a shortcut. Common mistake: using XAI to *justify* rather than *interrogate*.
- **HIPAA Safe Harbor.** Plain English: remove the 18 identifiers (names, dates finer than year, device IDs, etc.) and data is de-identified. Where it matters: pixel-burned PHI in DICOM headers and image corners.

### Hands-on build (the lab)
- Train a tumor classifier on the **Br35H** brain-MRI set (or a segmenter on **BraTS** subset) with MONAI; enforce a **patient-level** split; report Dice/AUROC with 95% CIs.
- Add **Grad-CAM**; manually audit 10 correct and 10 incorrect cases; find at least one shortcut or annotation artifact.
- Add an **abstention threshold** (predict only above a confidence band) and report coverage vs. accuracy.
- **Deliverable:** `verticals/healthcare-imaging/` with model, eval, and an XAI audit note. **Acceptance:** patient-level split proven; ≥1 documented shortcut; abstention curve plotted.

▶ **Practical project:** `krishnaik06/Malaria-Detection` — train the medical-image classifier with a patient-level split and a Grad-CAM shortcut audit.

### Harness / reusable skill — `$xai-audit`
- **Purpose:** systematically interrogate whether a vision model is right for the right reasons.
- **Inputs:** a trained model + a held-out batch. **Required outputs:** saliency maps for TP/FP/FN, a list of suspected shortcuts, and a "trust / don't trust this in production" verdict with evidence.
- **Minimal workflow:** sample errors → overlay saliency → name the shortcut → propose a data/aug fix. **Evidence artifact:** `xai-audit.md`.

### Common failure modes
- **Slice-level leakage** → AUROC 0.99 that collapses in clinic. *Fix:* split by patient ID, verify no ID crosses.
- **Shortcut learning** → model reads the scanner, not the anatomy. *Fix:* `$xai-audit`, then debias/augment.
- **Background-dominated metrics** → accuracy looks great, Dice is 0.2. *Fix:* report Dice/recall on the lesion class.
- **PHI in pixels/headers** → de-identification that misses burned-in text. *Fix:* scrub DICOM tags + pixel OCR check.
- **Overconfidence with no abstention** → no path to "refer to human." *Fix:* calibrated thresholds + abstain band.

### Evidence artifact
`verticals/healthcare-imaging/eval.md` (Dice/AUROC + CIs, patient-split proof) and `xai-audit.md`.

### Skill sink-in
Predict whether your model's errors cluster on a particular scanner or tumor size *before* the slice analysis. Run it. Record what the slices revealed.

### Depth upgrade
- **Dataset:** Br35H Brain Tumor Detection — kaggle.com/datasets/ahmedhamada0/brain-tumor-detection (3,000 MRI images, ~15 MB, open). Optional: **BraTS 2021** segmentation subset (synapse.org, ~2 GB, research license, registration required).
- **Code stub:**
```python
import torch, timm
from sklearn.metrics import roc_auc_score
def patient_level_split(df, frac=0.2, seed=0):
    pts = df["patient_id"].unique()
    test = set(df["patient_id"].sample(frac=frac, random_state=seed)
               if hasattr(df["patient_id"], "sample") else
               __import__("random").Random(seed).sample(list(pts), int(len(pts)*frac)))
    return df[~df.patient_id.isin(test)], df[df.patient_id.isin(test)]
model = timm.create_model("resnet50", pretrained=True, num_classes=1)
# train loop omitted; evaluate:
def evaluate(model, loader):
    model.eval(); ys, ps = [], []
    with torch.no_grad():
        for x, y in loader:
            ps += torch.sigmoid(model(x)).squeeze(1).tolist(); ys += y.tolist()
    return roc_auc_score(ys, ps)
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Leakage control | Patient-split proven | Random split | Leaked, unaware |
| Metric fit | Dice/AUROC + CIs | One metric, no CI | Accuracy only |
| XAI audit | ≥1 real shortcut found | Maps shown, no analysis | None |
| Abstention | Coverage/accuracy curve | Fixed threshold | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Çallı et al., "Deep learning for chest X-ray analysis: A survey," *Medical Image Analysis*, 2021.
  - Selvaraju et al., "Grad-CAM," *ICCV* 2017.
  - DeGrave, Janizek & Lee, "AI for radiographic COVID-19 detection selects shortcuts over signal," *Nature Machine Intelligence*, 2021.
  - Cardoso et al., "MONAI: An open-source framework for deep learning in healthcare," 2022.

---

## Week 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)

### State of the Art (June 2026)
- Medical LLMs (**Med-Gemini / Med-PaLM 2, OpenEvidence**) push grounded clinical QA; **faithfulness via LLM-as-judge** (with documented judge bias) is the eval norm.
- De-identification uses transformer NER (**scispaCy + clinical de-id models**) over regex alone; **MIMIC-IV** remains the credentialed reference corpus.
- **Agentic RAG** over the EHR (iterative retrieval + citation grounding) is replacing single-shot summarization for safety.

**Altitude:** Builder → Engineer · **Anchor case:** a discharge-summary assistant that drafts problem lists from free-text notes — useful only if it never invents a diagnosis.

### Learning goals
- Build a clinical-note pipeline: de-identify → extract structured concepts → ground generation in retrieved evidence.
- Map free text to a clinical ontology (ICD-10 / UMLS / SNOMED concepts) and evaluate extraction with entity-level F1.
- Quantify and mitigate hallucination in clinical summarization with retrieval grounding and an LLM-as-judge faithfulness check.

### Concept map
- **PHI de-identification on text.** Plain English: strip names/dates/MRNs before any model sees the note. Where it matters: HIPAA + reproducibility (you ship the de-id'd pipeline). Common mistake: relying on regex alone — names slip through; use an NER de-id model + audit.
- **Clinical NER & concept normalization.** *Plain English:* find "SOB" → map to *dyspnea* (a SNOMED concept). *Code mapping:* `scispacy` + UMLS linker. *Common mistake:* exact-string matching that misses abbreviations and negation ("no chest pain").
- **Negation & uncertainty.** Plain English: "rule out MI" is not "MI." Where it matters: extraction precision; pyConText/assertion models. Common mistake: counting mentioned-but-negated findings as positive.
- **Grounded generation (faithfulness).** *Plain English:* every clause in the summary must be supported by a retrieved note span. *Common mistake:* fluent summaries with fabricated meds/doses.

### Hands-on build (the lab)
- On the **MIMIC-III/IV de-identified note subset** (credentialed) or the open **n2c2/i2b2** sample, run a de-id pass, then `scispacy` concept extraction with negation handling; score entity-level F1 against provided spans.
- Build a small **RAG summarizer**: retrieve the patient's note sections, generate a problem list with Claude Haiku 4.5, and run an **LLM-as-judge faithfulness eval** that flags unsupported claims.
- **Deliverable:** `verticals/clinical-nlp/` with extraction F1, a faithfulness report, and a de-id audit. **Acceptance:** zero un-grounded medications in a 20-note sample, or each flagged.

▶ **Practical project:** `krishnaik06/Text-Summarization-NLP-Project` — adapt it to clinical-note summarization with a retrieval-grounding + faithfulness check.

### Harness / reusable skill — `$faithfulness-judge`
- **Purpose:** decide, claim-by-claim, whether generated text is supported by sources.
- **Inputs:** generated summary + retrieved spans. **Required outputs:** per-claim supported/unsupported labels, an aggregate faithfulness rate, and the worst hallucination. **Evidence artifact:** `faithfulness-report.md`.

### Common failure modes
- **Regex-only de-id** → leaked names. *Fix:* model-based de-id + human spot audit.
- **Negation blindness** → false-positive findings. *Fix:* assertion/negation module, evaluate on negated cases.
- **Ungrounded summarization** → invented dosages. *Fix:* retrieval grounding + `$faithfulness-judge` gate.
- **Eval on clean text only** → fails on messy real notes. *Fix:* include abbreviations, typos, templates in the test set.

### Evidence artifact
`verticals/clinical-nlp/faithfulness-report.md` + extraction F1 table + de-id audit.

### Skill sink-in
Predict your faithfulness rate before running the judge. Run it. The gap between your optimism and the measured rate is the lesson — record it.

### Depth upgrade
- **Dataset:** MIMIC-IV-Note (deidentified discharge summaries) — physionet.org/content/mimic-iv-note (~330k notes, **PhysioNet credentialed license + CITI training required**; use the provided 50-note teaching subset if uncredentialed). Open fallback: **i2b2/n2c2 2014 de-identification** sample.
- **Code stub:**
```python
import spacy
nlp = spacy.load("en_core_sci_md")          # scispaCy clinical model
linker = nlp.add_pipe("scispacy_linker", config={"linker_name": "umls"})
def extract_concepts(note: str):
    doc = nlp(note)
    out = []
    for ent in doc.ents:
        neg = any(t.dep_ == "neg" for t in ent.root.head.children)   # crude negation
        cui = ent._.kb_ents[0][0] if ent._.kb_ents else None
        out.append({"text": ent.text, "cui": cui, "negated": neg})
    return out
# faithfulness: for each generated claim, ask the judge model "is this entailed by <spans>?"
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| De-identification | Model+audit, 0 leaks found | Regex only | PHI leaked |
| Extraction quality | Entity-F1 + negation handled | F1 only | String match |
| Faithfulness | Per-claim judge + fixes | Aggregate only | None |
| Honesty | Reports residual risk | Glosses limits | Overclaims |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Johnson et al., "MIMIC-IV, a freely accessible electronic health record dataset," *Scientific Data*, 2023.
  - Neumann et al., "ScispaCy: Fast and Robust Models for Biomedical NLP," *BioNLP* 2019.
  - Singhal et al., "Large language models encode clinical knowledge (Med-PaLM)," *Nature*, 2023.
  - Ji et al., "Survey of Hallucination in Natural Language Generation," *ACM Computing Surveys*, 2023.

---

## Week 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)

### State of the Art (June 2026)
- **ColPali / ColQwen3 late-interaction** retrieval over contract *page-images* (no lossy OCR) is the 2026 shift; **GraphRAG** handles precedent multi-hop.
- Citation hallucination remains sanctionable (post-*Mata v. Avianca*); **retrieval-verified citation gating** is mandatory, and rerankers (**Cohere Rerank 3.5, Voyage rerank-2.5**) are standard.
- 1M-context frontier models let whole contracts fit, but verification — not context size — is the safety control.

**Altitude:** Builder → Engineer · **Anchor case:** a contract-review assistant that flags risky clauses and a research assistant that answers legal questions *with verifiable citations* — where a fabricated case is a sanctionable event.

### Learning goals
- Build clause extraction/classification over real contracts (CUAD) and report per-clause-type recall.
- Build a **GraphRAG / citation-grounded** legal QA system whose every answer links to a retrieved authority.
- Detect and prevent citation hallucination (the *Mata v. Avianca* failure) with retrieval verification.

### Concept map
- **Clause-level extraction.** *Plain English:* find the indemnification / governing-law / change-of-control clauses in a long contract. *Where it matters:* lawyers triage by clause type; recall on rare risky clauses is the metric. *Common mistake:* document-level classification that misses span-level obligations.
- **Long-document handling.** Plain English: contracts exceed context windows; chunk by clause/section, not by token count. Common mistake: arbitrary chunking that splits a clause mid-sentence.
- **Citation grounding & verification.** *Plain English:* the model must cite a real, retrieved case — and you must *verify the citation exists and says what's claimed*. *Common mistake:* trusting a plausible-looking citation string (the canonical legal-AI disaster).
- **GraphRAG over precedent.** Plain English: cases cite cases; a citation graph (Neo4j) lets retrieval follow authority, not just keyword similarity. Where it matters: "what overruled X?" needs graph hops.
- **Document & table retrieval (visual / layout-aware).** Plain English: contracts and filings are *scanned PDFs with tables and signatures*, not clean text; layout-aware/visual retrievers (ColPali-style page embeddings, table-structure parsing) retrieve the right region without lossy OCR-to-text flattening. Where it matters: a number in a table or a clause in a stamped exhibit. Common mistake: OCR→plain-text chunking that destroys table structure and citations to a specific page/cell.

### Hands-on build (the lab)
- On **CUAD** (Contract Understanding Atticus Dataset), train/prompt a clause classifier for 5 high-risk clause types; report recall@type and a confusion analysis.
- Build legal QA over an open case corpus (**Caselaw Access Project / Pile-of-Law** subset) with hybrid retrieval + a **citation-verifier** that rejects any answer whose cited case isn't in the retrieved set.
- **Deliverable:** `verticals/legal/` with clause recall table + a citation-integrity eval (fabrication rate before/after the verifier). **Acceptance:** post-verifier fabricated-citation rate = 0 on the test queries.

▶ **Practical project:** `krishnaik06/RAG-Tutorials` — build citation-grounded RAG over contracts/case-law with a citation-verifier gate that blocks fabricated cites.

### Harness / reusable skill — `$citation-verifier`
- **Purpose:** guarantee every cited source in a generated answer actually exists in the retrieved evidence and supports the claim.
- **Inputs:** an answer with citations + the retrieval set. **Required outputs:** per-citation exists/supports flags, a fabrication rate, and a blocked/allowed verdict. **Evidence artifact:** `citation-integrity.md`.

### Common failure modes
- **Fabricated citations** → sanctionable, career-ending. *Fix:* `$citation-verifier` hard gate; never emit an uncited claim.
- **Clause-split chunking** → obligations lost across chunk boundaries. *Fix:* clause-aware segmentation.
- **Keyword-only retrieval** → misses controlling-but-differently-worded precedent. *Fix:* hybrid + graph hops.
- **Document-level labels** → can't point to the risky span. *Fix:* span-level extraction.

### Evidence artifact
`verticals/legal/citation-integrity.md` + clause recall table.

### Skill sink-in
Predict how often an ungrounded LLM fabricates a citation on your 20 legal questions. Measure. Then measure with the verifier. Record the delta.

### Depth upgrade
- **Dataset:** CUAD v1 — huggingface.co/datasets/theatticusproject/cuad (510 contracts, 13k+ annotated clauses, 41 clause types, ~100 MB, CC BY 4.0). Case-law corpus: **Pile-of-Law** subset — huggingface.co/datasets/pile-of-law/pile-of-law (filtered, MIT/permissive per-subset; use the small `courtlistener` slice).
- **Code stub:**
```python
def verify_citations(answer: str, retrieved: list[dict]) -> dict:
    cited = extract_citation_ids(answer)          # regex for reporter cites / doc ids
    pool = {d["id"] for d in retrieved}
    results = []
    for c in cited:
        exists = c in pool
        supports = exists and entails(answer, next(d for d in retrieved if d["id"] == c)["text"])
        results.append({"cite": c, "exists": exists, "supports": supports})
    fabricated = [r for r in results if not r["exists"]]
    return {"results": results, "fabrication_rate": len(fabricated)/max(1, len(cited)),
            "blocked": len(fabricated) > 0}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Citation integrity | 0 fabrications post-gate | Some slip through | No verifier |
| Clause recall | Per-type + rare-class focus | Aggregate only | Doc-level only |
| Retrieval design | Hybrid + graph justified | Dense only | Keyword only |
| Honesty about limits | States jurisdiction/scope | Partial | Overclaims "legal advice" |

- **Assessment weight:** 6% of course grade.
- **Readings:**
  - Hendrycks et al., "CUAD: An Expert-Annotated NLP Dataset for Legal Contract Review," *NeurIPS Datasets* 2021.
  - Henderson et al., "Pile of Law," *NeurIPS Datasets* 2022.
  - Dahl et al., "Large Legal Fictions: Profiling Legal Hallucinations in LLMs," *Journal of Legal Analysis*, 2024.
  - Edge et al., "From Local to Global: A GraphRAG Approach to Query-Focused Summarization," Microsoft, 2024.

---

## Week 5 — Finance I: Fraud Detection & Point-in-Time Correctness

### State of the Art (June 2026)
- **Point-in-time feature stores** (Feast, Tecton) + gradient boosting (**LightGBM/XGBoost**) still beat deep nets on tabular fraud; **graph features (GNNs)** add network signal.
- Real-time scoring is **streaming** (sub-100 ms); evaluation at a **fixed alerts-per-day budget** plus adversarial/label-delay modeling is the discipline.
- Frontier LLMs assist **alert triage and explanation**, not the core scorer.

**Altitude:** Engineer · **Anchor case:** a card-fraud scorer that must catch fraud at a fixed false-positive budget — and must never train on information that didn't exist at decision time.

### Learning goals
- Build a fraud model on heavily imbalanced transaction data and evaluate at a *fixed operating point* (precision at a recall target, or alerts-per-day budget).
- Implement **point-in-time (PIT) correct** feature engineering with a feature store; prove no future leakage.
- Reason about adversarial drift (fraudsters adapt) and feedback loops (blocked fraud is unlabeled).

### Concept map
- **Point-in-time correctness.** *Plain English:* a feature value used to score a transaction at time *t* must be computable using only data available at *t*. *Where it matters:* aggregates like "30-day chargeback rate" silently leak the future. *Code mapping:* `feast` PIT joins / `as_of` timestamps. *Common mistake:* computing features over the whole table, then splitting by time.
- **Class imbalance & cost.** *Plain English:* fraud is <1% of rows; accuracy is meaningless. *Metric:* PR-AUC, recall at a fixed alert budget. *Common mistake:* SMOTE-ing the test set or optimizing ROC-AUC when the operating point is extreme.
- **Temporal validation.** Plain English: split by time, not randomly — you predict the future from the past. Common mistake: random K-fold on time-ordered data.
- **Adversarial & label-delay dynamics.** Plain English: confirmed-fraud labels arrive weeks late and blocked attempts never get labeled; the training distribution is biased by your own past actions.

### Hands-on build (the lab)
- On **IEEE-CIS Fraud** (or **Sparkov**/credit-card-fraud), engineer entity-level velocity features with **strict PIT discipline**; train LightGBM; evaluate with a temporal split at a fixed alerts-per-day budget.
- Run a **leakage audit**: deliberately add one leaky feature, show the score jump, then remove it and document the gap.
- **Deliverable:** `verticals/finance-fraud/` with a PIT feature spec, temporal eval, and leakage-audit note. **Acceptance:** leakage audit demonstrates a detected leak and its fix; metric is reported at a stated operating point.

▶ **Practical project:** `krishnaik06/Credit-Card-Fraudlent` — build the fraud scorer with PIT-correct features and a fixed alerts-per-day operating point.

### Harness / reusable skill — `$pit-leakage-audit`
- **Purpose:** prove a tabular/time-series pipeline has no target/temporal leakage.
- **Inputs:** feature pipeline + split. **Required outputs:** a list of each feature's earliest valid timestamp, any feature whose value depends on future rows, and a pass/fail. **Evidence artifact:** `pit-audit.md`.

### Common failure modes
- **Temporal leakage** → 0.99 PR-AUC offline, useless live. *Fix:* `$pit-leakage-audit`, time-split, `as_of` joins.
- **Resampling the test set** → fantasy metrics. *Fix:* resample train only; evaluate on the true imbalance.
- **Wrong metric** → ROC-AUC at a 0.5% operating point. *Fix:* precision at the alert budget the ops team can staff.
- **Ignoring label delay** → training on incomplete labels as if final. *Fix:* model the label-maturity window.

### Evidence artifact
`verticals/finance-fraud/pit-audit.md` + temporal eval at a fixed operating point.

### Skill sink-in
Predict how much your PR-AUC drops when you remove the one leaky feature. Remove it. Record the (usually sobering) real number.

### Depth upgrade
- **Dataset:** IEEE-CIS Fraud Detection — kaggle.com/competitions/ieee-fraud-detection (~590k transactions, 433 features, ~1.3 GB, competition license — research/education use). Open fallback: ULB Credit Card Fraud — kaggle.com/datasets/mlg-ulb/creditcardfraud (284k rows, CC0).
- **Code stub:**
```python
import lightgbm as lgb
from sklearn.metrics import precision_recall_curve
def precision_at_recall(y, p, target_recall=0.5):
    prec, rec, thr = precision_recall_curve(y, p)
    mask = rec[:-1] >= target_recall
    return prec[:-1][mask].max() if mask.any() else 0.0
# temporal split: everything before cutoff trains, after tests
cut = train_df["TransactionDT"].quantile(0.8)
tr, te = train_df[train_df.TransactionDT <= cut], train_df[train_df.TransactionDT > cut]
m = lgb.LGBMClassifier(scale_pos_weight=(tr.isFraud==0).sum()/(tr.isFraud==1).sum())
m.fit(tr[feats], tr.isFraud)
print("P@R=0.5:", precision_at_recall(te.isFraud, m.predict_proba(te[feats])[:,1]))
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| PIT correctness | Audited, leak demoed+fixed | Time-split only | Random split |
| Operating point | P@R or alert budget stated | PR-AUC only | Accuracy/ROC |
| Imbalance handling | Train-only resample | Mixed | Resampled test |
| Drift reasoning | Label-delay modeled | Mentioned | Ignored |

- **Assessment weight:** 6% of course grade.
- **Readings:**
  - Bahnsen et al., "Feature engineering strategies for credit card fraud detection," *Expert Systems with Applications*, 2016.
  - Ke et al., "LightGBM: A Highly Efficient Gradient Boosting Decision Tree," *NeurIPS* 2017.
  - Kaufman et al., "Leakage in Data Mining: Formulation, Detection, and Avoidance," *KDD* 2011 / TKDD 2012.
  - Grinsztajn et al., "Why do tree-based models still outperform deep learning on tabular data?," *NeurIPS* 2022.

---

## Week 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)

### State of the Art (June 2026)
- **SR 11-7 model risk + ECOA/FCRA adverse-action** still govern; SHAP reason codes are the required explanation, and **conformal prediction** is the standard for honest intervals.
- **EU AI Act high-risk credit obligations are now deferred to Dec 2, 2027** (Digital Omnibus) — but fairness / adverse-impact testing is expected now.
- Calibration (reliability + Brier) over raw ranking remains the pricing/capital discipline.

**Altitude:** Engineer · **Anchor case:** a credit-default model that must be *explainable to a regulator*, fair across protected classes, and validated under SR 11-7 — plus a volatility/demand forecast with honest uncertainty. **(Midterm regulatory & risk memo due.)**

### Learning goals
- Build a credit-risk scorecard and a probabilistic time-series forecast with calibrated uncertainty intervals.
- Apply model-governance discipline: documentation, challenger models, fairness testing (adverse-impact ratio), and adverse-action reason codes.
- Map SR 11-7 model-risk-management and ECOA/FCRA explainability duties to concrete artifacts.

### Concept map
- **Calibration over discrimination.** Plain English: for pricing/capital, a well-*calibrated* probability (says 5%, defaults 5%) matters more than raw ranking. *Metric:* reliability diagram, Brier score. Common mistake: shipping an uncalibrated GBM PD.
- **Reason codes / adverse action.** *Plain English:* a denied applicant is legally owed the top reasons; SHAP/feature attributions become *required* explanations under ECOA/FCRA. Common mistake: a black box you can't explain to the applicant or examiner.
- **Fairness testing.** *Formula:* adverse-impact ratio = selection-rate(protected)/selection-rate(reference); the "80% rule" flags disparate impact. Common mistake: dropping the protected attribute and assuming fairness (proxies remain).
- **Probabilistic forecasting & intervals.** *Plain English:* predict a distribution, not a point; report **pinball loss / coverage** of prediction intervals. Common mistake: a point forecast with no uncertainty driving a risk decision.
- **SR 11-7 model risk.** Plain English: every model needs documented development, independent validation, and ongoing monitoring; a challenger model benchmarks the champion.

### Hands-on build (the lab)
- On **Lending Club / Give Me Some Credit / German Credit**, train a PD model; produce a reliability diagram, SHAP reason codes, and an adverse-impact analysis across a (synthetic-if-needed) protected attribute.
- On a price/volume series (**M5** or an FX/equity series), build a probabilistic forecast with `statsforecast`/conformal intervals; report coverage and pinball loss.
- Write the **midterm memo**: a one-page SR 11-7-style model card + fairness + reason-code section for your anchor vertical.
- **Deliverable:** `verticals/finance-risk/` + `anchor/midterm-memo.md`. **Acceptance:** calibrated PD (reliability plot), reason codes for 3 sample denials, adverse-impact ratio reported, forecast interval coverage stated.

▶ **Practical project:** `krishnaik06/ARIMA-And-Seasonal-ARIMA` — build the probabilistic forecast half with calibrated prediction intervals (pair with a PD scorecard + reason codes).

### Harness / reusable skill — `$model-governance-card`
- **Purpose:** assemble the regulator-facing dossier for any high-risk model.
- **Inputs:** a trained model + data card. **Required outputs:** intended use, development/validation summary, calibration, fairness test, reason-code method, monitoring plan, known limitations. **Evidence artifact:** `governance-card.md`.

### Common failure modes
- **Uncalibrated probabilities** → mispriced risk. *Fix:* isotonic/Platt calibration + reliability check.
- **Unexplainable denials** → ECOA/FCRA violation. *Fix:* SHAP reason codes wired to the decision.
- **"Fairness by blindness"** → proxy discrimination. *Fix:* test outcomes, not just inputs; measure adverse impact.
- **Point forecasts for risk** → no uncertainty for capital. *Fix:* prediction intervals + coverage check.
- **No challenger / no monitoring** → SR 11-7 gap. *Fix:* benchmark + drift dashboard in the card.

### Evidence artifact
`anchor/midterm-memo.md` (graded) + `verticals/finance-risk/governance-card.md`.

### Skill sink-in
Predict your PD model's calibration before plotting the reliability diagram. Plot it. Record whether you were over- or under-confident and why.

### Depth upgrade
- **Dataset:** Give Me Some Credit — kaggle.com/c/GiveMeSomeCredit (150k borrowers, ~7 MB, competition/education license). Forecast: **M5 Forecasting** — kaggle.com/c/m5-forecasting-accuracy (Walmart hierarchical sales, ~450 MB) or `statsforecast` built-ins. Fairness substrate: UCI **German Credit** (1k rows, CC BY 4.0).
- **Code stub:**
```python
from sklearn.calibration import CalibratedClassifierCV
from sklearn.metrics import brier_score_loss
import shap, numpy as np
cal = CalibratedClassifierCV(base_gbm, method="isotonic", cv=5).fit(Xtr, ytr)
p = cal.predict_proba(Xte)[:, 1]
print("Brier:", brier_score_loss(yte, p))
def adverse_impact(sel, group):                  # sel: bool selected (approved)
    r = sel[group == "ref"].mean(); pr = sel[group == "prot"].mean()
    return pr / r                                # < 0.8 → disparate-impact flag
expl = shap.TreeExplainer(base_gbm)
reason_codes = np.argsort(-np.abs(expl.shap_values(Xte[:1])))[0][:3]
```
- **Graded rubric table (governs the midterm memo):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Calibration | Reliability + Brier | Score only | None |
| Explainability | Reason codes mapped to denial | SHAP shown | Black box |
| Fairness | Adverse-impact + mitigation | Ratio only | None |
| Regulatory mapping | SR 11-7/ECOA cited correctly | Named loosely | Absent |
| Uncertainty | Interval coverage reported | Point only | None |

- **Assessment weight:** 5% lab + the 7% midterm memo.
- **Readings:**
  - Federal Reserve / OCC, "SR 11-7: Guidance on Model Risk Management," 2011.
  - Lundberg & Lee, "A Unified Approach to Interpreting Model Predictions (SHAP)," *NeurIPS* 2017.
  - Barocas, Hardt & Narayanan, "Fairness and Machine Learning," 2023 (disparate impact chapters).
  - Angelopoulos & Bates, "A Gentle Introduction to Conformal Prediction," 2023.

---

## Week 7 — Retail & E-commerce I: Recommendation Systems at Scale

### State of the Art (June 2026)
- **Two-tower retrieval + a ranker** is still the backbone; **generative retrieval / semantic IDs** (TIGER-style) and LLM-augmented rankers are the 2026 frontier.
- Evaluation stresses **counterfactual / off-policy** estimation and exposure bias; offline NDCG ≠ online lift remains the core lesson.
- Cold-start is increasingly handled with **content / LLM embeddings** (Voyage, Cohere embed-v4).

**Altitude:** Builder → Engineer · **Anchor case:** a "customers also bought" recommender whose real job is incremental revenue, not offline NDCG.

### Learning goals
- Build retrieval-then-rank recommendation (two-tower candidate generation + a ranker) on real interaction logs.
- Evaluate with ranking metrics *and* understand why offline ranking ≠ online lift (position/exposure bias).
- Reason about cold-start, popularity bias, and feedback loops (the recommender shapes future clicks).

### Concept map
- **Two-stage architecture.** *Plain English:* generate a few hundred candidates cheaply (retrieval), then score them precisely (ranking). *Where it matters:* catalogs have millions of items; you can't rank them all. *Common mistake:* a single model over the whole catalog.
- **Implicit feedback.** Plain English: a click is weak positive evidence; a non-click is *not* a confirmed negative. *Common mistake:* treating un-clicked items as hard negatives without sampling care.
- **Ranking metrics.** *Formula:* `NDCG@k = DCG@k / IDCG@k`, `DCG@k = Σ rel_i/log2(i+1)`. *Plain English:* reward putting relevant items high. *Common mistake:* optimizing NDCG offline and assuming online revenue follows.
- **Popularity & feedback bias.** Plain English: recommending popular items begets more popularity; the log is biased by the previous recommender. Where it matters: counterfactual evaluation / exploration.

### Hands-on build (the lab)
- On **Instacart** (or **H&M Personalized Fashion**, **RetailRocket**), build a two-tower retrieval model + a gradient-boosted ranker; report Recall@k and NDCG@k with a **temporal** split.
- Run a **cold-start** slice (new users/items) and a **popularity-bias** analysis (coverage, long-tail exposure).
- **Deliverable:** `verticals/retail-recsys/` with ranking metrics, cold-start slice, and a popularity-bias note. **Acceptance:** temporal split; cold-start performance reported separately; a note on why offline ≠ online.

▶ **Practical project:** `krishnaik06/Movie-Recommender-in-python` — build retrieval + ranking with explicit cold-start and popularity-bias slices.

### Harness / reusable skill — `$recsys-slice-eval`
- **Purpose:** evaluate a recommender beyond a single averaged metric.
- **Inputs:** a ranked-list model + log. **Required outputs:** Recall/NDCG@k, cold-start vs warm split, catalog coverage, long-tail exposure, and one online-lift caveat. **Evidence artifact:** `recsys-eval.md`.

### Common failure modes
- **Random split on temporal logs** → leakage of future interactions. *Fix:* split by time.
- **Average-metric tunnel vision** → great NDCG, dead long tail. *Fix:* coverage + slice eval.
- **Cold-start blindness** → model only works for power users. *Fix:* explicit new-user/new-item evaluation.
- **Offline=online assumption** → ship a regression. *Fix:* state the exposure-bias caveat; plan an A/B test.

### Evidence artifact
`verticals/retail-recsys/recsys-eval.md` + cold-start and coverage tables.

### Skill sink-in
Predict which is worse for your model: new users or new items. Measure both. Record which cold-start hurt more and your hypothesis.

### Depth upgrade
- **Dataset:** Instacart Market Basket Analysis — kaggle.com/c/instacart-market-basket-analysis (3M orders, 200k users, ~700 MB, competition/education license). Alternatives: **H&M Personalized Fashion** (kaggle, ~25 GB images+logs), **RetailRocket** (kaggle, CC BY-NC-SA).
- **Code stub:**
```python
import torch, torch.nn as nn
class TwoTower(nn.Module):
    def __init__(self, n_users, n_items, d=64):
        super().__init__()
        self.u = nn.Embedding(n_users, d); self.i = nn.Embedding(n_items, d)
    def forward(self, u, i): return (self.u(u) * self.i(i)).sum(-1)  # dot-product score
def ndcg_at_k(ranked_items, relevant, k=10):
    import numpy as np
    dcg = sum((1.0/np.log2(rank+2)) for rank, it in enumerate(ranked_items[:k]) if it in relevant)
    idcg = sum(1.0/np.log2(r+2) for r in range(min(k, len(relevant))))
    return dcg/idcg if idcg else 0.0
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Architecture | Retrieval + rank, justified | Single stage | Toy MF only |
| Temporal validity | Time split | Mixed | Random split |
| Slice depth | Cold-start + coverage | One slice | Average only |
| Online awareness | Names exposure bias + A/B plan | Mentions | Ignores |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Covington, Adams & Sargin, "Deep Neural Networks for YouTube Recommendations," *RecSys* 2016.
  - Rendle et al., "BPR: Bayesian Personalized Ranking from Implicit Feedback," *UAI* 2009.
  - Schnabel et al., "Recommendations as Treatments: Debiasing Learning and Evaluation," *ICML* 2016.
  - Steck, "Calibrated Recommendations," *RecSys* 2018.

---

## Week 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions

### State of the Art (June 2026)
- **Time-series foundation models** (TimesFM, Chronos / Chronos-Bolt, Moirai, TimeGPT) now give strong zero-shot baselines; global gradient-boosted models (`mlforecast`) remain the production workhorse.
- The discipline is **quantile / probabilistic forecasts → newsvendor decisions** (pinball loss at the service level), not point RMSE.
- **Conformal prediction** gives distribution-free coverage on intermittent demand.

**Altitude:** Engineer · **Anchor case:** a SKU-level demand forecast that feeds a reorder decision — where the *asymmetric* cost of stock-outs vs. overstock, not RMSE, defines "good."

### Learning goals
- Build hierarchical, intermittent-demand forecasts and evaluate with decision-relevant, scale-free metrics.
- Translate a forecast distribution into an inventory decision (newsvendor / service-level quantile).
- Handle promotions, seasonality, holidays, and intermittent (mostly-zero) series.

### Concept map
- **Asymmetric cost → quantile forecast.** *Plain English:* if stock-outs cost 5× overstock, forecast the 83rd percentile (the newsvendor critical ratio), not the mean. *Formula:* `q* = c_under/(c_under+c_over)`. *Common mistake:* ordering to the mean forecast.
- **Scale-free accuracy.** *Plain English:* RMSE isn't comparable across SKUs of different volume; use MASE/WAPE. *Common mistake:* aggregate RMSE dominated by high-volume SKUs.
- **Intermittent demand.** Plain English: many SKUs sell 0 most days; Croston/TSB methods and zero-aware metrics matter. Common mistake: a model that "predicts zero" and scores well on RMSE but is useless.
- **Hierarchical coherence.** Plain English: store + region + national forecasts must reconcile. Where it matters: planners trust coherent numbers.

### Hands-on build (the lab)
- On **M5 / Corporación Favorita / Rossmann**, build per-SKU forecasts (`statsforecast` baselines + a global LightGBM/`mlforecast` model); evaluate WAPE/MASE and **pinball loss at the service-level quantile**.
- Convert forecasts to reorder quantities via the newsvendor rule; simulate stock-out vs. overstock cost vs. a naive baseline.
- **Deliverable:** `verticals/retail-forecast/` with a metric table, the inventory simulation, and cost-vs-baseline. **Acceptance:** beats a seasonal-naive baseline on WAPE *and* on simulated inventory cost.

▶ **Practical project:** `krishnaik06/Stock-MArket-Forecasting` — build SKU-style forecasts and convert them to a newsvendor reorder decision with a cost simulation.

### Harness / reusable skill — `$decision-forecast-eval`
- **Purpose:** evaluate a forecast by the *decision* it drives, not just by point error.
- **Inputs:** forecasts + cost structure. **Required outputs:** scale-free accuracy, quantile/pinball at the service level, and simulated decision cost vs. baseline. **Evidence artifact:** `forecast-decision-eval.md`.

### Common failure modes
- **RMSE worship** → optimizing a metric the planner doesn't use. *Fix:* WAPE/MASE + pinball at the service quantile.
- **Mean ordering under asymmetry** → systematic stock-outs. *Fix:* newsvendor quantile.
- **Ignoring intermittency** → predicting zeros, scoring "well." *Fix:* zero-aware metrics + Croston/TSB baseline.
- **No baseline** → "the model forecasts" but loses to seasonal-naive. *Fix:* always beat seasonal-naive first.

### Evidence artifact
`verticals/retail-forecast/forecast-decision-eval.md` + inventory cost simulation.

### Skill sink-in
Predict whether your fancy global model beats seasonal-naive on *inventory cost* (not RMSE). Simulate. Record the result and which SKUs it lost on.

### Depth upgrade
- **Dataset:** M5 Forecasting — kaggle.com/c/m5-forecasting-accuracy (42k Walmart series, ~450 MB, competition/education license). Alternatives: **Corporación Favorita Grocery Sales** (kaggle), **Rossmann Store Sales** (kaggle).
- **Code stub:**
```python
from statsforecast import StatsForecast
from statsforecast.models import SeasonalNaive, CrostonOptimized
import numpy as np
def pinball(y, q_hat, q):                          # quantile (pinball) loss
    e = y - q_hat
    return np.mean(np.maximum(q*e, (q-1)*e))
def newsvendor_qty(samples, c_under, c_over):
    q = c_under/(c_under+c_over)
    return np.quantile(samples, q)                 # order-to the critical quantile
sf = StatsForecast(models=[SeasonalNaive(7), CrostonOptimized()], freq="D")
sf.fit(train_long)                                  # columns: unique_id, ds, y
fc = sf.predict(h=28, level=[80])
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Metric fit | WAPE/MASE + pinball | One scale-free | RMSE only |
| Decision link | Newsvendor + cost sim | Quantile only | Point forecast |
| Baseline | Beats seasonal-naive on cost | Beats on RMSE only | No baseline |
| Intermittency | Zero-aware handling | Mentioned | Ignored |

- **Assessment weight:** 4% of course grade.
- **Readings:**
  - Makridakis, Spiliotis & Assimakopoulos, "The M5 Accuracy competition: Results, findings, and conclusions," *IJF*, 2022.
  - Hyndman & Athanasopoulos, "Forecasting: Principles and Practice (3e)," 2021 (hierarchical, intermittent chapters).
  - Salinas et al., "DeepAR: Probabilistic forecasting with autoregressive RNNs," *IJF*, 2020.
  - Januschowski et al., "Criteria for classifying forecasting methods," *IJF*, 2020.

---

## Week 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC

### State of the Art (June 2026)
- **Anomalib 2.0** one-class detectors (**PatchCore, EfficientAD, Dinomaly**) train on good parts only; **vision foundation features (DINOv2/v3)** are the 2026 backbone.
- **Zero-/few-shot visual anomaly** (WinCLIP, AnomalyCLIP) handles novel defect types; RUL still uses asymmetric PHM scoring.
- On-line inspection drives **quantized / on-device** vision at the edge.

**Altitude:** Engineer · **Anchor case:** an assembly-line system that both predicts machine failure from sensor streams (remaining-useful-life) and flags defective parts from images — where missed defects ship and false alarms halt the line.

### Learning goals
- Build remaining-useful-life (RUL) prediction from multivariate sensor time-series.
- Build an **anomaly-detection** visual QC model that trains on *good parts only* (defects are rare/unseen).
- Evaluate against operational constraints (lead-time-to-failure, false-alarm budget, image-level vs pixel-level localization).

### Concept map
- **RUL regression / health index.** *Plain English:* estimate cycles-until-failure from degrading sensor trends. *Metric:* asymmetric scoring (late prediction worse than early). *Common mistake:* symmetric RMSE when a late warning is catastrophic.
- **Unsupervised/one-class defect detection.** *Plain English:* you have thousands of good parts and almost no labeled defects, and defects you've never seen will appear — so model "normal" and flag deviations. *Code mapping:* PatchCore/PaDiM via Anomalib. *Common mistake:* a supervised classifier that can't catch novel defect types.
- **Localization vs detection.** Plain English: "this part is defective" vs "the defect is *here*"; pixel-level AUROC/PRO matters for root-cause. Common mistake: image-level score with no localization.
- **Operational thresholds.** Plain English: the alarm threshold trades missed defects against line stoppages; set it from the cost of each. Where it matters: deployment lens.

### Hands-on build (the lab)
- On **MVTec-AD**, train an Anomalib one-class detector (PatchCore) per category; report image- and pixel-level AUROC and the false-alarm rate at a chosen threshold.
- On **NASA C-MAPSS (turbofan)**, build an RUL model; evaluate with the asymmetric PHM scoring function and lead-time analysis.
- **Deliverable:** `verticals/manufacturing/` with anomaly localization maps, RUL curves, and an operating-threshold note. **Acceptance:** localization shown; RUL beats a "constant mean" baseline on the asymmetric score.

▶ **Practical project:** `krishnaik06/Tomato-Leaf-Disease-Prediction` — train a visual defect/disease detector and report localization + a false-alarm operating threshold.

### Harness / reusable skill — `$anomaly-qc-eval`
- **Purpose:** evaluate a rare-defect / unseen-failure system against operational costs.
- **Inputs:** an anomaly model + test set. **Required outputs:** image- & pixel-level AUROC, false-alarm rate at the chosen threshold, localization samples, and the cost trade-off at that operating point. **Evidence artifact:** `qc-eval.md`.

### Common failure modes
- **Supervised on rare defects** → can't catch novel ones. *Fix:* one-class / anomaly modeling on normal data.
- **Symmetric RUL loss** → dangerously late warnings score fine. *Fix:* asymmetric PHM scoring + lead-time check.
- **Image-only QC** → no root-cause localization. *Fix:* pixel-level maps + PRO metric.
- **Threshold from a notebook** → wrong line-stop trade-off. *Fix:* set threshold from missed-defect vs stoppage cost.

### Evidence artifact
`verticals/manufacturing/qc-eval.md` + RUL curves + localization images.

### Skill sink-in
Predict which MVTec category your detector struggles on most (texture vs object defects). Test. Record the hardest category and why.

### Depth upgrade
- **Dataset:** MVTec-AD — mvtec.com/company/research/datasets/mvtec-ad (5,354 images, 15 categories, ~5 GB, **CC BY-NC-SA 4.0**, research/education). RUL: **NASA C-MAPSS Turbofan** — data.nasa.gov / ti.arc.nasa.gov prognostics repository (4 sub-datasets, ~12 MB, US-Gov public domain).
- **Code stub:**
```python
from anomalib.models import Patchcore
from anomalib.engine import Engine
from anomalib.data import MVTec
dm = MVTec(category="bottle")                       # trains on good images only
engine = Engine(); engine.fit(model=Patchcore(), datamodule=dm)
# RUL asymmetric PHM score: penalize late (s>0) more than early (s<0)
import numpy as np
def phm_score(rul_true, rul_pred):
    d = rul_pred - rul_true
    return np.sum(np.where(d < 0, np.exp(-d/13)-1, np.exp(d/10)-1))
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| QC approach | One-class, novel-defect ready | Supervised + caveat | Supervised, no caveat |
| Localization | Pixel AUROC/PRO + maps | Image AUROC only | None |
| RUL metric | Asymmetric PHM + lead time | RMSE + comment | RMSE only |
| Threshold | Set from cost trade-off | Arbitrary, stated | Default |

- **Assessment weight:** 6% of course grade.
- **Readings:**
  - Bergmann et al., "MVTec AD — A Comprehensive Real-World Dataset for Unsupervised Anomaly Detection," *CVPR* 2019.
  - Roth et al., "Towards Total Recall in Industrial Anomaly Detection (PatchCore)," *CVPR* 2022.
  - Saxena et al., "Damage Propagation Modeling for Aircraft Engine Run-to-Failure Simulation (C-MAPSS)," *PHM* 2008.
  - Lei et al., "Machinery health prognostics: A systematic review," *MSSP*, 2018.

---

## Week 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)

### State of the Art (June 2026)
- Tutoring is **agentic** (Claude Agent SDK, Khanmigo-style) with hint-ladders + **tool/CAS verification** of every step; **answer-leakage** is the headline failure.
- **Pedagogy-as-eval** (LLM-judge on scaffolding, not just answer accuracy) is standard; deep knowledge tracing adapts difficulty.
- **FERPA + minors / COPPA** and the EU AI Act's education-as-high-risk framing govern data and deployment.

**Altitude:** Engineer · **Anchor case:** a math-tutoring agent that must *teach*, not just answer — guiding a struggling student without doing the homework for them, and never being confidently wrong on a fact.

### Learning goals
- Build a Socratic tutoring agent with scaffolding (hints, not answers), mastery tracking, and a correctness guardrail.
- Evaluate tutoring on *learning outcomes and pedagogy*, not just answer accuracy (helpfulness vs over-helping / "answer leakage").
- Apply FERPA constraints and child-safety/age-appropriateness considerations to data and deployment.

### Concept map
- **Scaffolding vs answer-leakage.** *Plain English:* a good tutor gives the next hint, not the solution; "just tell me the answer" is the failure to resist. *Where it matters:* the eval must penalize premature answer-giving. *Common mistake:* optimizing for student satisfaction (which rewards giving answers).
- **Knowledge tracing / mastery.** *Plain English:* estimate what the student knows from their response history (Bayesian/deep knowledge tracing) to choose the next problem. *Common mistake:* one-size content with no adaptation.
- **Correctness guardrail.** Plain English: a tutor that confidently teaches a wrong method is worse than no tutor; verify worked solutions (e.g., with a code/CAS check for math). Common mistake: trusting the LLM's arithmetic.
- **FERPA & minors.** Plain English: student records are protected; data minimization, consent, and age-appropriate design are mandatory. Where it matters: logging, personalization, and third-party model calls.

### Hands-on build (the lab)
- Build a tutoring agent (Claude Agent SDK) over a problem set (**GSM8K / MATH** items or a curriculum subset) with: a hint ladder, a CAS/code verifier for the solution, and a knowledge-tracing state.
- Build a **pedagogy eval**: an LLM-judge rubric scoring scaffolding quality, answer-leakage, and factual correctness on simulated student transcripts; run an "adversarial student" who tries to extract the answer.
- **Deliverable:** `verticals/education/` with the agent, the pedagogy-eval rubric + scores, and an answer-leakage rate. **Acceptance:** verified-correct solutions; answer-leakage rate reported under adversarial probing.

▶ **Practical project:** `krishnaik06/Agentic-LanggraphCrash-course` — build the Socratic tutoring agent with a hint-ladder + CAS verifier and an answer-leakage probe.

### Harness / reusable skill — `$pedagogy-eval`
- **Purpose:** score a tutoring interaction on teaching quality, not just final-answer correctness.
- **Inputs:** tutoring transcripts. **Required outputs:** scaffolding score, answer-leakage flag, factual-correctness check, and an adversarial-student stress result. **Evidence artifact:** `pedagogy-eval.md`.

### Common failure modes
- **Answer-leakage** → does the homework, teaches nothing. *Fix:* hint-ladder design + leakage-penalizing eval + adversarial student.
- **Confident wrong math** → teaches misconceptions. *Fix:* CAS/code verification of every worked step.
- **Satisfaction-optimized** → rewards spoon-feeding. *Fix:* evaluate learning/scaffolding, not thumbs-up.
- **FERPA-careless logging** → PII of minors in traces. *Fix:* minimize, pseudonymize, gate third-party calls.

### Evidence artifact
`verticals/education/pedagogy-eval.md` + answer-leakage rate + verifier logs.

### Skill sink-in
Predict how many turns your adversarial student needs to extract the full answer. Run it. Record the weakest point in your hint ladder.

### Depth upgrade
- **Dataset:** GSM8K — huggingface.co/datasets/openai/gsm8k (8.5k grade-school math problems, ~11 MB, MIT). Harder: **MATH** — huggingface.co/datasets/hendrycks/competition_math (12.5k, MIT). Tutoring dialogue reference: **MathDial** — huggingface.co/datasets/eth-nlped/mathdial (CC BY 4.0).
- **Code stub:**
```python
from sympy import sympify, simplify
def verify_math(student_steps: list[str], final: str, gold: str) -> bool:
    try:
        return simplify(sympify(final) - sympify(gold)) == 0
    except Exception:
        return False
HINT_LADDER = ["Restate what the problem is asking.",
               "What quantity do you need first?",
               "Set up the equation — don't solve yet.",
               "Now isolate the variable."]  # never includes the answer
def next_hint(state): return HINT_LADDER[min(state["attempts"], len(HINT_LADDER)-1)]
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Scaffolding | Hint ladder, no leakage | Some hints | Gives answers |
| Correctness | Every step CAS-verified | Final verified | Unverified |
| Adversarial robustness | Resists extraction, measured | Partial | Leaks instantly |
| FERPA/minors | Data-min + consent design | Mentioned | Ignored |

- **Assessment weight:** 4% of course grade.
- **Readings:**
  - Cobbe et al., "Training Verifiers to Solve Math Word Problems (GSM8K)," 2021.
  - Macina et al., "MathDial: A Dialogue Tutoring Dataset with Rich Pedagogical Properties," *EMNLP Findings* 2023.
  - Wang et al., "Towards Pedagogically Grounded Tutoring with LLMs," 2024.
  - Corbett & Anderson, "Knowledge Tracing: Modeling the Acquisition of Procedural Knowledge," *UMUAI*, 1995.

---

## Week 11 — AI for Science: Surrogates, Property Prediction & Inverse Design

### State of the Art (June 2026)
- Per-domain foundation models: **AlphaFold 3** (structure/interactions), **MatterGen / MACE / Orb** (materials & ML interatomic potentials), **Boltz-2**; **scaffold/structure splits** remain non-negotiable.
- **Neural operators (FNO) + physics-informed constraints** for PDE surrogates; OOD honesty + uncertainty (conformal) is the trust gate.
- Agentic "AI co-scientist" loops (hypothesis → experiment → report) are emerging (deep dive in S15/S17).

**Altitude:** Engineer → Specialist · **Anchor case:** a molecular/material property predictor and a fast PDE surrogate that replaces an expensive simulation in a design loop — where physical validity and out-of-distribution honesty matter more than test R².

### Learning goals
- Build a property-prediction model on molecules or materials (graph or sequence representation) with a *scaffold/structure-based* split.
- Build a learned PDE/physics surrogate and respect known physical constraints/units.
- Reason about extrapolation: scientific ML is judged on out-of-distribution generalization, not random-split metrics.

### Concept map
- **Scaffold splitting.** *Plain English:* split molecules by chemical scaffold so the test set is structurally novel (random splits leak near-duplicates). *Where it matters:* the whole point of a property model is *new* molecules. *Common mistake:* random split → optimistic R² that doesn't transfer.
- **Graph/representation choice.** Plain English: molecules are graphs (atoms/bonds); GNNs or learned fingerprints often beat hand features. Common mistake: ignoring 3D/geometry where it's decisive.
- **Physics-informed constraints.** *Plain English:* a surrogate that violates conservation laws or units is wrong even if its MSE is low. Where it matters: trust in the design loop. (Deep dive on PINNs is Subject 15.)
- **OOD honesty & uncertainty.** Plain English: report performance on novel scaffolds and an uncertainty estimate; a confident extrapolation is a trap. Common mistake: deploying a surrogate outside its training envelope without flagging it.

### Hands-on build (the lab)
- On **MoleculeNet (ESOL/BBBP/Tox21)** or **Materials Project**, train a GNN (or `chemprop`) property predictor with a **scaffold split**; report metrics on novel scaffolds + an uncertainty estimate.
- Build a small **PDE surrogate** (e.g., a Fourier Neural Operator or MLP) for a 1D heat/Burgers equation; check it against the numerical solver and a conservation/units sanity test.
- **Deliverable:** `verticals/ai-for-science/` with scaffold-split metrics, an OOD slice, and a physical-validity check. **Acceptance:** scaffold-split (not random) metrics reported; surrogate respects the sanity check or the violation is documented.

▶ **Practical project:** `krishnaik06/AQI-Project` — build a scientific regression surrogate and report an OOD/extrapolation slice with an uncertainty estimate.

### Harness / reusable skill — `$ood-science-eval`
- **Purpose:** evaluate a scientific model on extrapolation and physical validity, not just in-distribution fit.
- **Inputs:** model + scientific dataset. **Required outputs:** scaffold/structure-split metrics, an OOD slice, a physical-constraint check, and an uncertainty/applicability-domain note. **Evidence artifact:** `science-eval.md`.

### Common failure modes
- **Random split on molecules** → leaked near-duplicates, fantasy generalization. *Fix:* scaffold/temporal split.
- **Unit/conservation violations** → low MSE, unphysical output. *Fix:* sanity checks against the solver and known laws.
- **No applicability domain** → confident extrapolation into nonsense. *Fix:* uncertainty + OOD flagging.
- **Metric without baseline** → "deep model wins" vs an untried fingerprint baseline. *Fix:* compare to a simple cheminformatics baseline.

### Evidence artifact
`verticals/ai-for-science/science-eval.md` + scaffold-split + physical-validity check.

### Skill sink-in
Predict the gap between random-split and scaffold-split R². Measure both. Record the gap — it is the honesty tax of scientific ML.

### Depth upgrade
- **Dataset:** MoleculeNet (ESOL ~1.1k, BBBP ~2k, Tox21 ~7.8k) — moleculenet.org / deepchem (MIT). Materials: **Materials Project** API — materialsproject.org (~150k materials, CC BY 4.0, free API key). PDE data is generated by your own solver.
- **Code stub:**
```python
from rdkit.Chem.Scaffolds import MurckoScaffold
from collections import defaultdict
def scaffold_split(smiles, frac_train=0.8):
    groups = defaultdict(list)
    for i, s in enumerate(smiles):
        groups[MurckoScaffold.MurckoScaffoldSmilesFromSmiles(s)].append(i)
    sets = sorted(groups.values(), key=len, reverse=True)
    train, test, n = [], [], int(len(smiles)*frac_train)
    for g in sets: (train if len(train) < n else test).extend(g)
    return train, test            # test scaffolds unseen in train
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Split validity | Scaffold/structure split | Random + caveat | Random, unaware |
| Physical validity | Constraint check passes/doc'd | Mentioned | Ignored |
| Uncertainty/OOD | Applicability domain reported | Point metric + note | None |
| Baseline | Beats fingerprint baseline | Has baseline | None |

- **Assessment weight:** 6% of course grade.
- **Readings:**
  - Wu et al., "MoleculeNet: A Benchmark for Molecular Machine Learning," *Chemical Science*, 2018.
  - Yang et al., "Analyzing Learned Molecular Representations for Property Prediction (Chemprop)," *JCIM*, 2019.
  - Li et al., "Fourier Neural Operator for Parametric PDEs," *ICLR* 2021.
  - Jumper et al., "Highly accurate protein structure prediction with AlphaFold," *Nature*, 2021 (read as the field's north star).

---

## Week 12 — Capstone Build & Deployment-Risk Dossier

### State of the Art (June 2026)
- A shipped solution = **tailored model/agent + cost-matched eval with slices + a deployment-risk dossier** (drift monitor via Evidently, failure catalog, human-in-the-loop, audit trail).
- **NIST AI RMF + the relevant sector regulation** (mapped to artifacts) is the accountability spine; **EU AI Act Aug-2026 / Omnibus-2027** dates must be cited correctly.
- **Human-review UX** (evidence, uncertainty, correction, escalation) is graded engineering, not an afterthought.

**Altitude:** Engineer · **Anchor case:** *your* Week-1 vertical, now shipped end-to-end.

### Learning goals
- Integrate data → tailored model/agent → domain-appropriate eval into one running solution.
- Author a deployment-risk dossier: drift monitoring, failure catalog, human-in-the-loop design, accountability/audit trail.
- Defend the metric–decision–cost alignment for your vertical.

### Concept map (as a build checklist)
- Data card (provenance, license, leakage traps, PII handling) → the real decision + cost matrix → regulatory constraints table → tailored model/agent → eval matched to cost + ≥1 critical slice → deployment risks (drift, automation bias, adversaries, feedback loops) → human-in-the-loop + accountability.

### Hands-on build (the lab)
- Finish **M2** (model/agent passing eval) and **M3** (deployment-risk dossier) for your anchor.
- Stand up a minimal **drift monitor** (`evidently`) and a **failure-mode catalog** (top 5 ways it breaks + the detection + the fallback).
- **Deliverable:** `capstone/` with the solution, eval, governance card, and dossier. **Acceptance:** the capstone acceptance checklist (top of file) is fully satisfied; every claim traces to an artifact.

▶ **Practical project:** `krishnaik06/mlproject` — wrap your anchor solution in the end-to-end template (pipelines, CI, deploy) and bolt on the drift monitor + dossier.

### Harness / reusable skill — `$deployment-risk-dossier`
- **Purpose:** assemble the production-readiness and accountability package for a high-stakes model.
- **Inputs:** the shipped solution. **Required outputs:** drift plan, failure catalog with detections + fallbacks, human-in-the-loop design, audit/logging story, and the residual-risk statement. **Evidence artifact:** `capstone/dossier.md`.

### Common failure modes
- **Model without a system** → no monitoring, no fallback. *Fix:* drift monitor + failure catalog are deliverables.
- **Eval–decision mismatch** → a metric the stakeholder doesn't use. *Fix:* re-derive the metric from the cost matrix.
- **No accountability story** → "who is responsible when it's wrong?" unanswered. *Fix:* name the human-in-the-loop and the audit trail.

### Evidence artifact
`capstone/` (solution + eval + governance card + dossier).

### Skill sink-in
Write down the single most likely way your system fails in production *before* the panel asks. Compare to their challenge. Record what you missed.

### Depth upgrade
- **Dataset:** your anchor vertical's dataset (chosen W1, used all term).
- **Code stub:**
```python
from evidently.report import Report
from evidently.metric_preset import DataDriftPreset
report = Report(metrics=[DataDriftPreset()])
report.run(reference_data=ref_df, current_data=live_df)   # PSI/KS drift per feature
drift = report.as_dict()["metrics"][0]["result"]["dataset_drift"]
assert not drift, "Distribution shift detected — trigger review before serving"
```
- **Graded rubric table (part of the 30% capstone):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| End-to-end integrity | Data→model→eval→deploy coherent | Gaps | Disconnected pieces |
| Eval–cost alignment | Metric from cost matrix + slice | Generic metric | Leaderboard metric |
| Risk dossier | Drift+failures+HITL+audit | Some sections | Absent |
| Traceability | Every claim → artifact | Most | Vibes |

- **Assessment weight:** part of the 30% capstone.
- **Readings:**
  - Sculley et al., "Hidden Technical Debt in Machine Learning Systems," *NeurIPS* 2015.
  - Mitchell et al., "Model Cards for Model Reporting," *FAccT* 2019.
  - Gebru et al., "Datasheets for Datasets," *CACM*, 2021.
  - Paleyes, Urma & Lawrence, "Challenges in Deploying Machine Learning: A Survey of Case Studies," *ACM Computing Surveys*, 2022.

---

## Week 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis

### State of the Art (June 2026)
- The bar is a **decision tool with bounded risk**, defended to a stakeholder + regulator panel on leakage, fairness (adverse-impact), drift, and accountability.
- **Model cards + datasheets + the AI RMF profile** are the portable artifacts; the six-lens method is the reusable rubric.
- Public-good / low-resource framing (equity + limitations note) is a first-class capstone option.

**Altitude:** Engineer → Specialist · **Anchor case:** defending your shipped solution to a panel role-playing the domain stakeholder *and* a skeptical regulator.

### Learning goals
- Present a domain solution as a *decision tool with bounded risk*, not a model with a score.
- Withstand adversarial questioning on leakage, fairness, drift, and accountability.
- Synthesize the seven verticals into a transferable checklist (the six-lens method as a reusable artifact).

### Concept map (review)
- The six lenses as a portable rubric; the recurring traps (leakage, wrong metric, no abstention, no monitoring, no accountability) that show up renamed in every vertical.

### Hands-on build (the lab)
- **M4:** 12-minute ship review + 8-minute panel defense; submit final repo.
- Write a one-page **cross-vertical synthesis**: the same five traps as they appeared in each vertical and the discipline that caught them.

▶ **Practical project:** `krishnaik06/Data-Science-Projects-For-Resumes` — package and present your shipped solution for the stakeholder + regulator panel.

### Harness / reusable skill — `$ship-review`
- **Purpose:** run a structured pre-deployment review of any domain AI system.
- **Inputs:** a candidate system. **Required outputs:** lens-by-lens findings, the top-3 unmitigated risks, and a go/no-go with conditions. **Evidence artifact:** `ship-review.md`.

### Common failure modes
- **Demo theater** → a happy-path demo hiding the failure modes. *Fix:* lead with how it fails.
- **Regulatory hand-waving** → naming a law without applying it. *Fix:* map each obligation to an artifact.
- **No go/no-go** → "it works" with no deployment decision. *Fix:* explicit conditions for shipping.

### Evidence artifact
`ship-review.md` + the cross-vertical synthesis + final capstone repo.

### Skill sink-in
Before the panel, predict their single hardest question. After, record whether you anticipated it and how your answer held up.

### Depth upgrade
- **Dataset:** your anchor capstone artifacts.
- **Code stub:**
```python
SIX_LENS_GATE = ["data_provenance_and_license", "decision_and_cost", "regulatory_constraint",
                 "tailored_model", "cost_matched_eval_with_slice", "deployment_risk_and_HITL"]
def ship_gate(dossier: dict) -> dict:
    missing = [k for k in SIX_LENS_GATE if not dossier.get(k)]
    return {"go": not missing, "conditions": missing}   # no-go until all lenses satisfied
```
- **Graded rubric table (part of the 30% capstone):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Defense under fire | Survives leakage/fairness/drift probes | Partial | Folds |
| Regulatory application | Obligation→artifact mapping | Named only | Hand-waved |
| Go/no-go | Explicit, conditioned | Vague | None |
| Synthesis | Transferable six-lens artifact | Partial | None |

- **Assessment weight:** part of the 30% capstone + the 5% participation.
- **Readings:**
  - Raji et al., "Closing the AI Accountability Gap: Defining an End-to-End Framework for Internal Algorithmic Auditing," *FAccT* 2020.
  - Bommasani et al., "On the Opportunities and Risks of Foundation Models," 2021 (domain-deployment sections).
  - Wachter, Mittelstadt & Russell, "Counterfactual Explanations without Opening the Black Box," *Harvard JOLT*, 2018.
  - "Artificial Intelligence Risk Management Framework (AI RMF 1.0)," NIST, 2023.

---

## Course-level outcomes

By the end you can: take an AI capability into a *regulated, consequential* domain and ship a solution that is right for the right reasons; decompose any vertical with the **six-lens method**; choose metrics from cost structures rather than leaderboards; detect the leakage, drift, fairness, and accountability traps that recur (renamed) across healthcare, legal, finance, retail, manufacturing, education, and science; and assemble a deployment-risk dossier a regulator could read. You leave with a reusable harness — `$domain-readiness`, `$xai-audit`, `$faithfulness-judge`, `$citation-verifier`, `$pit-leakage-audit`, `$model-governance-card`, `$recsys-slice-eval`, `$decision-forecast-eval`, `$anomaly-qc-eval`, `$pedagogy-eval`, `$ood-science-eval`, `$deployment-risk-dossier`, `$ship-review` — and one production-grade vertical solution.

## Skills produced (reused program-wide)
`$domain-readiness` · `$xai-audit` · `$faithfulness-judge` · `$citation-verifier` · `$pit-leakage-audit` · `$model-governance-card` · `$recsys-slice-eval` · `$decision-forecast-eval` · `$anomaly-qc-eval` · `$pedagogy-eval` · `$ood-science-eval` · `$deployment-risk-dossier` · `$ship-review`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `krishnaik06/Credit-Card-Fraudlent` — end-to-end card-fraud project; a substrate for PIT-correct features and fixed-operating-point eval — Lecture 5.
- `krishnaik06/Malaria-Detection` — medical-image classification with an end-to-end pipeline; patient-level splits + XAI audit — Lecture 2.
- `krishnaik06/Stock-MArket-Forecasting` — time-series forecasting project for temporal validation and probabilistic intervals — Lectures 6, 8.
- `krishnaik06/Movie-Recommender-in-python` — recommender baseline for retrieval/ranking, cold-start, and popularity-bias slices — Lecture 7.
- `VizuaraAI/pharma-slm` — a ~350M domain small LM with a full pipeline; a worked regulated-domain (pharma) build — Lectures 3, 11.
- `ashishpatel26/500-AI-...-Projects-with-code` — a 500-project bank to source anchor-vertical and per-week lab starters — all verticals.

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Domain RAG (regulated)** — a medical/legal/finance assistant with citations, abstention, and an audit trail — *Lectures 3–4*.
- **Public-good track** — an on-device/low-bandwidth assistant for an underserved setting, with a human-review UX and equity note — *Lectures 10–12*.

**Public-good / low-resource track:** AI tutor for underserved learners, public-health/agriculture assistant, civic/accessibility assistant — each on-device/low-bandwidth where possible, with a human-review UX and an equity/limitations note (graded).
</content>
</invoke>
