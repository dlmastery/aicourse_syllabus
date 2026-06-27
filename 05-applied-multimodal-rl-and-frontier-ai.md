# Applied, Multimodal, Reinforcement & Frontier AI

**Merged subject (one academic quarter-track).** This subject combines several closely related modules, each a self-contained Part with its own lectures, hands-on builds, practical projects, State-of-the-Art notes, and assessment. Parts in this subject:

- **Part A — Domain-Specific Applied AI**
- **Part B — Multimodal & Generative AI**
- **Part C — Reinforcement Learning, Robotics & Embodied AI**
- **Part D — Emerging Topics & AI for Science**

## 📑 Detailed table of contents
_One academic quarter-track · 3 lecture-hrs/week · **52 lectures** across **4 parts**. Time-boxed plan: [`_toc/05-applied-multimodal-rl-and-frontier-ai-toc.md`](_toc/05-applied-multimodal-rl-and-frontier-ai-toc.md)._

### Part A — Domain-Specific Applied AI
1. **Week 1 — What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor** — Prediction ≠ decision · Cost asymmetry · Regulatory tiering (EU AI Act) · Distribution shift is the default, not the exception · Automation bias & feedback loops  ·  ▶ `krishnaik06/mlproject` · 🔧 `$domain-readiness`
2. **Week 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)** — Patient-level splitting · Dice / IoU vs accuracy · Calibration & abstention · XAI as a *failure detector* · HIPAA Safe Harbor  ·  ▶ `krishnaik06/Malaria-Detection` · 🔧 `$xai-audit`
3. **Week 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)** — PHI de-identification on text · Clinical NER & concept normalization · Negation & uncertainty · Grounded generation (faithfulness)  ·  ▶ `krishnaik06/Text-Summarization-NLP-Project` · 🔧 `$faithfulness-judge`
4. **Week 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)** — Clause-level extraction · Long-document handling · Citation grounding & verification · GraphRAG over precedent · Document & table retrieval (visual / layout-aware)  ·  ▶ `krishnaik06/RAG-Tutorials` · 🔧 `$citation-verifier`
5. **Week 5 — Finance I: Fraud Detection & Point-in-Time Correctness** — Point-in-time correctness · Class imbalance & cost · Temporal validation · Adversarial & label-delay dynamics  ·  ▶ `krishnaik06/Credit-Card-Fraudlent` · 🔧 `$pit-leakage-audit`
6. **Week 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)** — Calibration over discrimination · Reason codes / adverse action · Fairness testing · Probabilistic forecasting & intervals · SR 11-7 model risk  ·  ▶ `krishnaik06/ARIMA-And-Seasonal-ARIMA` · 🔧 `$model-governance-card`
7. **Week 7 — Retail & E-commerce I: Recommendation Systems at Scale** — Two-stage architecture · Implicit feedback · Ranking metrics · Popularity & feedback bias  ·  ▶ `krishnaik06/Movie-Recommender-in-python` · 🔧 `$recsys-slice-eval`
8. **Week 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions** — Asymmetric cost → quantile forecast · Scale-free accuracy · Intermittent demand · Hierarchical coherence  ·  ▶ `krishnaik06/Stock-MArket-Forecasting` · 🔧 `$decision-forecast-eval`
9. **Week 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC** — RUL regression / health index · Unsupervised/one-class defect detection · Localization vs detection · Operational thresholds  ·  ▶ `krishnaik06/Tomato-Leaf-Disease-Prediction` · 🔧 `$anomaly-qc-eval`
10. **Week 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)** — Scaffolding vs answer-leakage · Knowledge tracing / mastery · Correctness guardrail · FERPA & minors  ·  ▶ `krishnaik06/Agentic-LanggraphCrash-course` · 🔧 `$pedagogy-eval`
11. **Week 11 — AI for Science: Surrogates, Property Prediction & Inverse Design** — Scaffold splitting · Graph/representation choice · Physics-informed constraints · OOD honesty & uncertainty  ·  ▶ `krishnaik06/AQI-Project` · 🔧 `$ood-science-eval`
12. **Week 12 — Capstone Build & Deployment-Risk Dossier**  ·  ▶ `krishnaik06/mlproject` · 🔧 `$deployment-risk-dossier`
13. **Week 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis**  ·  ▶ `krishnaik06/Data-Science-Projects-For-Resumes` · 🔧 `$ship-review`

### Part B — Multimodal & Generative AI
1. **Week 1 — Vision Transformers From Scratch: Images as Sequences of Patches** — Patch embedding · Self-attention recap · Inductive bias trade-off · Class token vs mean pooling  ·  ▶ `VizuaraAI/Transformers-for-vision-BOOK` · 🔧 `$from-scratch-verifier`
2. **Week 2 — Contrastive Learning & CLIP: Aligning Images and Text** — Contrastive (InfoNCE) loss · Zero-shot classification · Batch size as negatives · Modality gap  ·  ▶ `VizuaraAI/Transformers-for-vision-BOOK` · 🔧 `$contrastive-eval`
3. **Week 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning** — Connector / projector · Visual tokens in context · Instruction tuning for VLMs · VLM hallucination  ·  ▶ `VizuaraAI/infertutor-arena-capstone` · 🔧 `$vlm-probe`
4. **Week 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)** — Forward process · Reverse process / objective · Time conditioning · Sampling steps  ·  ▶ `VizuaraAILabs/Principles-of-Diffusion-Models` · 🔧 `$generative-eval`
5. **Week 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image** — Latent diffusion · Cross-attention text conditioning · Classifier-free guidance (CFG) · CLIPScore vs FID for text-to-image  ·  ▶ `VizuaraAILabs/Principles-of-Diffusion-Models` · 🔧 `$t2i-eval`
6. **Week 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone** — Continuous-time view · Conditional flow matching loss · Rectified flow · DDIM bridge  ·  ▶ `VizuaraAILabs/Principles-of-Diffusion-Models` · 🔧 `$sampler-benchmark`
7. **Week 7 — Video Generation: Spatiotemporal Diffusion & World Consistency** — Temporal modeling · Latent video diffusion + DiT · Conditioning modes · Evaluation  ·  ▶ `VizuaraAI/vla-driving-simulation` · 🔧 `$video-consistency-eval`
8. **Week 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations** — ASR & WER · Mel-spectrogram pipeline · Neural audio codecs · Robustness slices  ·  ▶ `VizuaraAI/audio-llm` · 🔧 `$asr-robustness-eval`
9. **Week 9 — Any-to-Any & Unified Multimodal Models** — Unified token space · Early vs late fusion · Interleaved generation · The specialist-vs-generalist trade-off  ·  ▶ `Shubhamsaboo/awesome-llm-apps` · 🔧 `$modality-router-eval`
10. **Week 10 — World Models: Learning Simulators (IRIS, Genie-style)** — Latent dynamics · Transformer/tokenized world models (IRIS) · Action-conditioned generation (Genie) · Compounding error / rollout horizon  ·  ▶ `VizuaraAI/vla-driving-simulation` · 🔧 `$rollout-eval`
11. **Week 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems** — Multimodal retrieval · Grounded multimodal generation · Agentic tools for vision · Multimodal hallucination guardrail  ·  ▶ `NirDiamant/RAG_Techniques` · 🔧 `$mm-grounding-eval`
12. **Week 12 — Capstone: A Multimodal App + a Small Diffusion Model**  ·  ▶ `VizuaraAI/infertutor-arena-capstone` · 🔧 `$multimodal-capstone-packet`

### Part C — Reinforcement Learning, Robotics & Embodied AI
1. **Week 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch** — Markov Decision Process · Return & discounting · State-value & action-value · Bellman optimality · Contraction & convergence  ·  ▶ `VizuaraAILabs/OpenClaw-RL-Tutorial` · 🔧 `$mdp-modeler`
2. **Week 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA** — TD(0) update · Q-learning (off-policy) · SARSA (on-policy) · Exploration · Bias–variance of targets  ·  ▶ `VizuaraAILabs/OpenClaw-RL-Tutorial` · 🔧 `$rollout-harness`
3. **Week 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow** — Q-network · Replay buffer + target net · Double DQN · Dueling architecture · Prioritized replay / n-step / distributional / noisy nets  ·  ▶ `VizuaraAILabs/OpenClaw-RL-Tutorial` · 🔧 `$value-debugger`
4. **Week 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C** — Policy-gradient theorem · Baseline / advantage · Actor-Critic · Continuous policies  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$gradient-variance-meter`
5. **Week 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL** — Surrogate objective / importance ratio · PPO-clip · GAE · TRPO vs PPO  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$ppo-trainer`
6. **Week 6 — Offline RL & Imitation Learning** — Behavior cloning · Distributional shift · Conservative value (CQL) · Implicit Q-Learning (IQL) · Decision Transformer  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$offline-data-auditor`
7. **Week 7 — Model-Based RL, MCTS & World Models (IRIS)** — Model-based RL · MCTS · AlphaZero loop · World models (IRIS)  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$model-trust-auditor`
8. **Week 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO** — Reward model (Bradley-Terry) · PPO-RLHF objective · DPO · SimPO / KTO / ORPO  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$preference-tuner`
9. **Week 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO** — RLVR · GRPO · GRPO biases (Dr.GRPO) · DAPO  ·  ▶ `VizuaraAILabs/DeepSeek-From-Scratch` · 🔧 `$rlvr-trainer`
10. **Week 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure** — Agentic MDP · SWE-RL / DeepSWE · Distributed RL stack · Reward sparsity & shaping  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$agentic-rl-env`
11. **Week 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real** — VLA model · Action chunking · Sim-to-real gap · Imitation vs RL fine-tuning  ·  ▶ `VizuaraAILabs/ACT-Maniskill` · 🔧 `$embodied-eval`
12. **Week 12 — Humanoid Locomotion & Multi-Agent RL** — Massively parallel sim · Locomotion reward · Stochastic game · CTDE (centralized training, decentralized execution)  ·  ▶ `VizuaraAILabs/Modern-Robot-Learning` · 🔧 `$reward-shaping-auditor`
13. **Week 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL** — Specification gaming · Goodhart / reward over-optimization · Constrained MDP · Mitigations  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$reward-hacking-redteam`
14. **Week 14 — Capstone: An Agentic-RL System With a Safety Audit**  ·  ▶ `VizuaraAI/RL-in-Production-Bootcamp-Resources` · 🔧 `$rl-evidence-packet`

### Part D — Emerging Topics & AI for Science
1. **Week 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype** — Claim–evidence–gap · Reproducibility tiers · Benchmark contamination & gaming · The hype cycle  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$paper-triage`
2. **Week 2 — Autonomous Research Agents: The "AI Scientist"** — The research loop as an agent · Verification bottleneck · Novelty vs recombination · Automated reviewing & its biases  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$research-claim-audit`
3. **Week 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL** — Equivariance · MSA / evolutionary signal · Confidence (pLDDT/PAE) · Generalization limits  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$scientific-repro`
4. **Week 4 — AI for Science II: Molecules, Materials & Generative Design** — Property prediction + screening · Generative proposal · Validation gap · Distribution shift / novelty  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$discovery-validity-check`
5. **Week 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates** — Physics-informed loss · PINN vs neural operator · Training pathologies · Validation against the solver  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$physics-validity`
6. **Week 6 — Emergence, Scaling & In-Context Learning** — Scaling laws · Emergent abilities & the metric critique · In-context learning · Grokking  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$emergence-probe`
7. **Week 7 — Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring** — Superposition · Sparse autoencoders (SAEs) · Circuits & activation patching · CoT monitoring & faithfulness  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$interp-evidence`
8. **Week 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning** — Why hybridize · LLM-as-program-generator + solver · Differentiable/relaxed logic · Verifiability  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$neurosymbolic-loop`
9. **Week 9 — World Models & Simulation for Reasoning and Control** — Planning in imagination · Model exploitation · Compounding error & horizon · Generative interactive environments (Genie)  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$sim-fidelity-eval`
10. **Week 10 — Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier** — Synthetic data & self-improvement · Model collapse · State-space models (Mamba) · Hybrids  ·  ▶ `VizuaraAILabs/DeepSeek-From-Scratch` · 🔧 `$frontier-tradeoff`
11. **Week 11 — Theorem Proving, Autoformalization & the Societal-Impact Panel** — Formal verification as ground truth · Autoformalization · LLM + search + RL (AlphaProof) · Governance frameworks  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$verifiable-reasoning-eval`
12. **Week 12 — In-Class Hackathon: Build at the Frontier Under Pressure**  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$frontier-sprint`
13. **Week 13 — Final Talks: Conference-Style Presentations & Defense**  ·  ▶ `VizuaraAI/paper-to-notebook` · 🔧 `$research-defense`


# Part A — Domain-Specific Applied AI

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab or local `uv`; `pip install scikit-learn pandas`; clone the repo as your pipeline scaffold; load Telco churn.
2. **Three memos:** write the same prediction as marketing vs credit vs clinical decision memos, each filling all six lenses.
3. **Threshold:** derive each operating threshold from a cost matrix (not 0.5); show the metric differs per context.
4. **Risk tier:** tag the seven verticals against the EU AI Act Annex III high-risk list.
5. **Anchor:** pick your anchor vertical; write the one-page framing.
- **Artifact:** `anchor/week01-framing.md` + the three churn decision memos in the repo scaffold.
- **Use `$domain-readiness`:** produce the six-lens readiness brief + the cheapest de-risking check.
- **Done when:** the framing names a decision-maker, a wrong-answer cost in real units, and one applicable regulation.
- **Stretch:** add the Digital-Omnibus 2027 high-risk deferral nuance to the regulatory lens.

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

### State of the Art (June 2026)
- **The EU AI Act timeline shifted in 2026**: GPAI obligations are live (Aug 2025) and **most high-risk rules apply Aug 2, 2026**, but the **Digital Omnibus (provisional May 7 2026) defers Annex III high-risk obligations to Dec 2, 2027** — old syllabi cite wrong dates. Fines up to €35M / 7% of turnover.
- **NIST AI RMF** plus sector regulators (FDA SaMD, SR 11-7, FCRA/ECOA, HIPAA, FERPA) remain the operative US frameworks.
- Frontier models (Claude Opus 4.8, GPT-5.5, Gemini 3.1 Pro) make raw capability cheap; **the moat is domain data, cost-matched eval, and the regulatory dossier** — not the model.

**More detail:** The EU AI Act sorts uses into prohibited/high-risk/limited/minimal; GPAI duties applied Aug 2025 and most high-risk rules apply Aug 2 2026, but the provisional Digital Omnibus (May 2026) defers Annex III high-risk obligations to Dec 2 2027 — the dates older syllabi get wrong.

**References & links:**
- [EU AI Act — Regulation (EU) 2024/1689 (official)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) — the law
- [EU AI Act Explorer (artificialintelligenceact.eu)](https://artificialintelligenceact.eu/) — Annex III high-risk list
- [NIST AI Risk Management Framework (AI RMF 1.0)](https://www.nist.gov/itl/ai-risk-management-framework)
- [Datasheets for Datasets (Gebru et al., 2021)](https://arxiv.org/abs/1803.09010)
- [Model Cards for Model Reporting (Mitchell et al., 2019)](https://arxiv.org/abs/1810.03993)
<!-- sota:11L01 -->

## Week 2 — Healthcare I: Medical Imaging & Explainable Diagnosis (HIPAA, FDA SaMD)

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install monai timm scikit-learn grad-cam`; clone the repo; load the imaging set.
2. **Patient split:** enforce a patient-level train/test split; verify no ID crosses.
3. **Train + CI:** train the classifier; report AUROC/Dice with 95% CIs.
4. **Grad-CAM:** audit 10 correct + 10 incorrect cases; find ≥1 shortcut/artifact.
5. **Abstain:** add a confidence-band abstention; plot coverage vs accuracy.
- **Artifact:** `verticals/healthcare-imaging/eval.md` + `xai-audit.md`.
- **Use `$xai-audit`:** saliency for TP/FP/FN + a trust/don't-trust-in-production verdict.
- **Done when:** patient split proven, ≥1 documented shortcut, abstention curve plotted.
- **Stretch:** swap in a MedSAM-2 / RadDINO foundation backbone and compare.

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

### State of the Art (June 2026)
- **MONAI 1.4 + medical foundation models** (MedSAM-2, RadDINO, **MedGemma**) are the 2026 baseline — segment-anything-style priors replace much from-scratch training.
- The **FDA keeps clearing AI/ML SaMD** under the predetermined-change-control (PCCP) pathway; calibration + abstention are now expected, not optional.
- Shortcut-learning audits (Grad-CAM, and increasingly **sparse-autoencoder feature** inspection) are standard practice after the COVID-radiograph shortcut failures.

**More detail:** 2026 medical imaging leans on foundation priors (MedSAM-2, RadDINO, MedGemma) with patient-level splits and calibrated abstention; XAI is used to *detect* shortcuts (the scanner-watermark trap), not to justify, and the FDA clears these as SaMD under predetermined change-control.

**References & links:**
- [`Project-MONAI/MONAI`](https://github.com/Project-MONAI/MONAI) — medical DL framework
- [Grad-CAM (Selvaraju et al., 2017)](https://arxiv.org/abs/1610.02391)
- [AI for radiographic COVID-19 detection selects shortcuts (DeGrave et al., 2021)](https://www.nature.com/articles/s42256-021-00338-7) — Nature MI
- [Segment Anything in Medical Images / MedSAM (Ma et al., 2024)](https://www.nature.com/articles/s41467-024-44824-z)
- [FDA — AI/ML-Based Software as a Medical Device](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-software-medical-device)
<!-- sota:11L02 -->

## Week 3 — Healthcare II: Clinical NLP on Notes (De-identification, RAG, Hallucination Safety)

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install scispacy spacy transformers`; clone the repo; load the i2b2/MIMIC teaching subset.
2. **De-id:** run model-based de-identification; spot-audit for residual PHI.
3. **Extract:** scispaCy concept extraction with negation handling; score entity-level F1.
4. **RAG summarize:** retrieve note sections, draft a problem list with Claude Haiku, ground each claim.
5. **Judge:** an LLM-as-judge faithfulness eval flags unsupported claims; report the rate.
- **Artifact:** `verticals/clinical-nlp/faithfulness-report.md` + F1 table + de-id audit.
- **Use `$faithfulness-judge`:** per-claim supported/unsupported + the worst hallucination.
- **Done when:** zero un-grounded medications in a 20-note sample (or each flagged).
- **Stretch:** add an agentic-RAG retrieval loop and re-measure faithfulness.

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

### State of the Art (June 2026)
- Medical LLMs (**Med-Gemini / Med-PaLM 2, OpenEvidence**) push grounded clinical QA; **faithfulness via LLM-as-judge** (with documented judge bias) is the eval norm.
- De-identification uses transformer NER (**scispaCy + clinical de-id models**) over regex alone; **MIMIC-IV** remains the credentialed reference corpus.
- **Agentic RAG** over the EHR (iterative retrieval + citation grounding) is replacing single-shot summarization for safety.

**More detail:** The safe pipeline is de-identify (transformer NER, not regex) → normalize concepts to UMLS/SNOMED with negation handling → ground generation in retrieved note spans, gated by an LLM-as-judge faithfulness check on the credentialed MIMIC-IV corpus.

**References & links:**
- [`allenai/scispacy`](https://github.com/allenai/scispacy) — clinical NER + UMLS linking
- [ScispaCy (Neumann et al., 2019)](https://arxiv.org/abs/1902.07669)
- [MIMIC-IV (Johnson et al., 2023)](https://www.nature.com/articles/s41597-022-01899-x) — Scientific Data
- [LLMs encode clinical knowledge / Med-PaLM (Singhal et al., 2023)](https://www.nature.com/articles/s41586-023-06291-2)
- [Survey of Hallucination in NLG (Ji et al., 2023)](https://arxiv.org/abs/2202.03629)
<!-- sota:11L03 -->

## Week 4 — Legal: Contract Analysis & RAG over Case Law (Citation Integrity)

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install langchain llama-index qdrant-client`; clone the repo; load CUAD + a case-law slice.
2. **Clause:** classify 5 high-risk clause types; report recall@type.
3. **Retrieve:** hybrid + (optional) graph retrieval over the case corpus.
4. **Verify:** a citation-verifier rejects any answer whose cited case isn't in the retrieved set.
5. **Measure:** fabrication rate before vs after the verifier.
- **Artifact:** `verticals/legal/citation-integrity.md` + clause recall table.
- **Use `$citation-verifier`:** per-citation exists/supports flags + a blocked/allowed verdict.
- **Done when:** post-verifier fabricated-citation rate = 0 on the test queries.
- **Stretch:** add ColPali page-image retrieval over scanned contracts.

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

### State of the Art (June 2026)
- **ColPali / ColQwen3 late-interaction** retrieval over contract *page-images* (no lossy OCR) is the 2026 shift; **GraphRAG** handles precedent multi-hop.
- Citation hallucination remains sanctionable (post-*Mata v. Avianca*); **retrieval-verified citation gating** is mandatory, and rerankers (**Cohere Rerank 3.5, Voyage rerank-2.5**) are standard.
- 1M-context frontier models let whole contracts fit, but verification — not context size — is the safety control.

**More detail:** Citation hallucination is sanctionable, so retrieval-verified citation gating is mandatory; 2026 shifts contract/case retrieval to ColPali-style late-interaction over page-images (no lossy OCR) plus GraphRAG for precedent hops and a reranker before synthesis.

**References & links:**
- [ColPali (Faysse et al., 2025)](https://arxiv.org/abs/2407.01449) — late-interaction page retrieval
- [CUAD (Hendrycks et al., 2021)](https://arxiv.org/abs/2103.06268) — contract review dataset
- [Large Legal Fictions: Legal Hallucinations in LLMs (Dahl et al., 2024)](https://arxiv.org/abs/2401.01301)
- [GraphRAG (Edge et al., 2024)](https://arxiv.org/abs/2404.16130)
- [`illuin-tech/colpali`](https://github.com/illuin-tech/colpali)
<!-- sota:11L04 -->

## Week 5 — Finance I: Fraud Detection & Point-in-Time Correctness

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install lightgbm feast scikit-learn`; clone the repo; load IEEE-CIS / ULB.
2. **PIT features:** engineer velocity features with strict point-in-time discipline (`as_of` joins).
3. **Temporal split:** train LightGBM on a time-ordered split; evaluate at a fixed alerts-per-day budget.
4. **Leak demo:** add one leaky feature, show the score jump, remove it, document the gap.
5. **Audit:** list each feature's earliest valid timestamp; pass/fail.
- **Artifact:** `verticals/finance-fraud/pit-audit.md` + temporal eval at a stated operating point.
- **Use `$pit-leakage-audit`:** prove no target/temporal leakage.
- **Done when:** the audit demos a detected leak + its fix and the metric is at a stated operating point.
- **Stretch:** add a GNN network feature and re-check PIT correctness.

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

### State of the Art (June 2026)
- **Point-in-time feature stores** (Feast, Tecton) + gradient boosting (**LightGBM/XGBoost**) still beat deep nets on tabular fraud; **graph features (GNNs)** add network signal.
- Real-time scoring is **streaming** (sub-100 ms); evaluation at a **fixed alerts-per-day budget** plus adversarial/label-delay modeling is the discipline.
- Frontier LLMs assist **alert triage and explanation**, not the core scorer.

**More detail:** Tabular fraud is still won by gradient boosting on point-in-time-correct features (a feature at time t may use only data available at t); evaluate at a fixed alerts-per-day budget on a temporal split, and model the label-delay / feedback dynamics.

**References & links:**
- [`microsoft/LightGBM`](https://github.com/microsoft/LightGBM)
- [Leakage in Data Mining (Kaufman et al., 2012)](https://dl.acm.org/doi/10.1145/2382577.2382579) — TKDD
- [Why tree-based models still outperform DL on tabular data (Grinsztajn et al., 2022)](https://arxiv.org/abs/2207.08815)
- [`feast-dev/feast`](https://github.com/feast-dev/feast) — point-in-time feature store
- [Feature engineering for credit-card fraud (Bahnsen et al., 2016)](https://doi.org/10.1016/j.eswa.2015.12.030)
<!-- sota:11L05 -->

## Week 6 — Finance II: Credit Risk, Time-Series & Model Governance (SR 11-7, ECOA/FCRA)

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install statsforecast scikit-learn shap`; clone the repo; load Give-Me-Some-Credit + a price/volume series.
2. **PD model:** train + calibrate (isotonic); plot a reliability diagram + Brier score.
3. **Reason codes:** SHAP top-3 reasons for 3 sample denials; adverse-impact ratio on a protected attribute.
4. **Forecast:** build a probabilistic ARIMA/Croston forecast with conformal intervals; report coverage + pinball.
5. **Memo:** write the SR 11-7-style governance card / midterm memo.
- **Artifact:** `anchor/midterm-memo.md` + `governance-card.md`.
- **Use `$model-governance-card`:** the regulator-facing dossier (calibration, fairness, reason codes, monitoring).
- **Done when:** calibrated PD, reason codes for 3 denials, adverse-impact ratio, and interval coverage all reported.
- **Stretch:** add a challenger model benchmark per SR 11-7.

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

### State of the Art (June 2026)
- **SR 11-7 model risk + ECOA/FCRA adverse-action** still govern; SHAP reason codes are the required explanation, and **conformal prediction** is the standard for honest intervals.
- **EU AI Act high-risk credit obligations are now deferred to Dec 2, 2027** (Digital Omnibus) — but fairness / adverse-impact testing is expected now.
- Calibration (reliability + Brier) over raw ranking remains the pricing/capital discipline.

**More detail:** Pricing/capital need calibration (reliability + Brier) over raw ranking; ECOA/FCRA require SHAP-style adverse-action reason codes, SR 11-7 requires independent validation + a challenger, and conformal prediction gives distribution-free interval coverage.

**References & links:**
- [SR 11-7: Guidance on Model Risk Management (Fed/OCC, 2011)](https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm)
- [SHAP (Lundberg & Lee, 2017)](https://arxiv.org/abs/1705.07874)
- [A Gentle Introduction to Conformal Prediction (Angelopoulos & Bates, 2023)](https://arxiv.org/abs/2107.07511)
- [Fairness and Machine Learning (Barocas, Hardt, Narayanan, 2023)](https://fairmlbook.org/) — disparate impact
- [scikit-learn calibration docs](https://scikit-learn.org/stable/modules/calibration.html)
<!-- sota:11L06 -->

## Week 7 — Retail & E-commerce I: Recommendation Systems at Scale

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install torch lightgbm pandas`; clone the repo; load the interaction logs.
2. **Two-stage:** build a two-tower retrieval model + a gradient-boosted ranker.
3. **Temporal eval:** Recall@k and NDCG@k on a time split.
4. **Slices:** cold-start (new users/items) + popularity bias (coverage, long-tail exposure).
5. **Caveat:** write the offline≠online (exposure-bias) note + an A/B plan.
- **Artifact:** `verticals/retail-recsys/recsys-eval.md` + cold-start/coverage tables.
- **Use `$recsys-slice-eval`:** Recall/NDCG + cold-start + coverage + an online-lift caveat.
- **Done when:** temporal split, cold-start reported separately, offline≠online noted.
- **Stretch:** add LLM/content embeddings to fix cold-start and re-measure.

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

### State of the Art (June 2026)
- **Two-tower retrieval + a ranker** is still the backbone; **generative retrieval / semantic IDs** (TIGER-style) and LLM-augmented rankers are the 2026 frontier.
- Evaluation stresses **counterfactual / off-policy** estimation and exposure bias; offline NDCG ≠ online lift remains the core lesson.
- Cold-start is increasingly handled with **content / LLM embeddings** (Voyage, Cohere embed-v4).

**References & links:**
- [`krishnaik06/Movie-Recommender-in-python`](https://github.com/krishnaik06/Movie-Recommender-in-python)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)

<!-- sota:11L07 -->

## Week 8 — Retail & E-commerce II: Demand Forecasting & Inventory Decisions

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install statsforecast mlforecast lightgbm`; clone the repo; load M5/Favorita.
2. **Forecast:** per-SKU `statsforecast` baselines + a global `mlforecast` model.
3. **Metrics:** WAPE/MASE + pinball loss at the service-level quantile.
4. **Decide:** convert forecasts to newsvendor reorder quantities; simulate stock-out vs overstock cost.
5. **Baseline:** beat seasonal-naive on WAPE *and* inventory cost.
- **Artifact:** `verticals/retail-forecast/forecast-decision-eval.md` + inventory cost simulation.
- **Use `$decision-forecast-eval`:** evaluate by the decision the forecast drives, not point error.
- **Done when:** beats seasonal-naive on WAPE and simulated inventory cost.
- **Stretch:** swap in a TimesFM/Chronos zero-shot baseline and compare.

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

### State of the Art (June 2026)
- **Time-series foundation models** (TimesFM, Chronos / Chronos-Bolt, Moirai, TimeGPT) now give strong zero-shot baselines; global gradient-boosted models (`mlforecast`) remain the production workhorse.
- The discipline is **quantile / probabilistic forecasts → newsvendor decisions** (pinball loss at the service level), not point RMSE.
- **Conformal prediction** gives distribution-free coverage on intermittent demand.

**References & links:**
- [`krishnaik06/Stock-MArket-Forecasting`](https://github.com/krishnaik06/Stock-MArket-Forecasting)
- [Hong et al., 2024 - ORPO](https://arxiv.org/abs/2403.07691)

<!-- sota:11L08 -->

## Week 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install anomalib timm`; clone the repo; load MVTec-AD + the leaf set.
2. **One-class:** train a PatchCore/EfficientAD detector per category on good parts only.
3. **Localize:** report image- and pixel-level AUROC + a false-alarm rate at a chosen threshold.
4. **RUL (optional):** on C-MAPSS, build an RUL model with the asymmetric PHM score + lead-time.
5. **Threshold:** set the operating threshold from missed-defect vs line-stop cost.
- **Artifact:** `verticals/manufacturing/qc-eval.md` + localization maps (+ RUL curve).
- **Use `$anomaly-qc-eval`:** image/pixel AUROC + false-alarm + the cost trade-off at the operating point.
- **Done when:** localization shown and the threshold is set from cost, not a default.
- **Stretch:** add zero-shot WinCLIP/AnomalyCLIP for novel defect types.

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

### State of the Art (June 2026)
- **Anomalib 2.0** one-class detectors (**PatchCore, EfficientAD, Dinomaly**) train on good parts only; **vision foundation features (DINOv2/v3)** are the 2026 backbone.
- **Zero-/few-shot visual anomaly** (WinCLIP, AnomalyCLIP) handles novel defect types; RUL still uses asymmetric PHM scoring.
- On-line inspection drives **quantized / on-device** vision at the edge.

**References & links:**
- [`krishnaik06/Tomato-Leaf-Disease-Prediction`](https://github.com/krishnaik06/Tomato-Leaf-Disease-Prediction)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)

<!-- sota:11L09 -->

## Week 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install langgraph sympy anthropic`; clone the repo; load GSM8K/MATH items.
2. **Agent:** build a tutoring agent with a hint-ladder (hints, not answers) + a knowledge-tracing state.
3. **Verify:** add a CAS/code verifier for every worked solution step.
4. **Pedagogy eval:** an LLM-judge rubric scoring scaffolding, answer-leakage, factual correctness.
5. **Adversary:** run an answer-extracting student; report the answer-leakage rate.
- **Artifact:** `verticals/education/pedagogy-eval.md` + leakage rate + verifier logs.
- **Use `$pedagogy-eval`:** score teaching quality, not just final-answer correctness.
- **Done when:** verified-correct solutions + an answer-leakage rate reported under adversarial probing.
- **Stretch:** add FERPA-safe pseudonymized logging and gate third-party calls.

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

### State of the Art (June 2026)
- Tutoring is **agentic** (Claude Agent SDK, Khanmigo-style) with hint-ladders + **tool/CAS verification** of every step; **answer-leakage** is the headline failure.
- **Pedagogy-as-eval** (LLM-judge on scaffolding, not just answer accuracy) is standard; deep knowledge tracing adapts difficulty.
- **FERPA + minors / COPPA** and the EU AI Act's education-as-high-risk framing govern data and deployment.

**References & links:**
- [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course)
- [Su et al., 2021 - RoPE](https://arxiv.org/abs/2104.09864)
- [EU AI Act timeline](https://artificialintelligenceact.eu/implementation-timeline/)
- [LangGraph](https://github.com/langchain-ai/langgraph)

<!-- sota:11L10 -->

## Week 11 — AI for Science: Surrogates, Property Prediction & Inverse Design

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install rdkit chemprop scikit-learn`; clone the repo; load MoleculeNet (or the AQI regression set).
2. **Scaffold split:** split by structure/scaffold so the test set is structurally novel.
3. **Train:** a GNN/`chemprop` (or the AQI regressor) + an uncertainty estimate.
4. **Physics/OOD:** report novel-scaffold metrics + an OOD slice; for a PDE surrogate, a conservation/units check.
5. **Baseline:** beat a simple fingerprint/linear baseline.
- **Artifact:** `verticals/ai-for-science/science-eval.md` + scaffold-split + validity check.
- **Use `$ood-science-eval`:** extrapolation + physical validity, not just in-distribution fit.
- **Done when:** scaffold-split (not random) metrics reported and the validity check passes or is documented.
- **Stretch:** add an FNO PDE surrogate and check it against the numerical solver.

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

### State of the Art (June 2026)
- Per-domain foundation models: **AlphaFold 3** (structure/interactions), **MatterGen / MACE / Orb** (materials & ML interatomic potentials), **Boltz-2**; **scaffold/structure splits** remain non-negotiable.
- **Neural operators (FNO) + physics-informed constraints** for PDE surrogates; OOD honesty + uncertainty (conformal) is the trust gate.
- Agentic "AI co-scientist" loops (hypothesis → experiment → report) are emerging (deep dive in S15/S17).

**References & links:**
- [`krishnaik06/AQI-Project`](https://github.com/krishnaik06/AQI-Project)
- [Su et al., 2021 - RoPE](https://arxiv.org/abs/2104.09864)
- [Abramson et al., 2024 - AlphaFold3](https://www.nature.com/articles/s41586-024-07487-w)
- [Raissi et al., 2019 - PINNs](https://arxiv.org/abs/1711.10561)

<!-- sota:11L11 -->

## Week 12 — Capstone Build & Deployment-Risk Dossier

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** local/Colab; reuse the `mlproject` scaffold (CI, pipelines, deploy) for your anchor vertical.
2. **Finish model:** complete M2 (model/agent passing the domain eval with a slice).
3. **Drift monitor:** stand up an `evidently` PSI/KS drift report on reference vs live data.
4. **Failure catalog:** top-5 ways it breaks + detection + fallback; human-in-the-loop design.
5. **Dossier:** assemble the drift plan + failure catalog + audit/accountability story.
- **Artifact:** `capstone/` (solution + eval + governance card + `dossier.md`).
- **Use `$deployment-risk-dossier`:** the production-readiness + accountability package.
- **Done when:** the capstone acceptance checklist is satisfied and every claim traces to an artifact.
- **Stretch:** wire a human-review UX (evidence, uncertainty, correction, escalation).

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

### State of the Art (June 2026)
- A shipped solution = **tailored model/agent + cost-matched eval with slices + a deployment-risk dossier** (drift monitor via Evidently, failure catalog, human-in-the-loop, audit trail).
- **NIST AI RMF + the relevant sector regulation** (mapped to artifacts) is the accountability spine; **EU AI Act Aug-2026 / Omnibus-2027** dates must be cited correctly.
- **Human-review UX** (evidence, uncertainty, correction, escalation) is graded engineering, not an afterthought.

**References & links:**
- [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject)
- [EU AI Act timeline](https://artificialintelligenceact.eu/implementation-timeline/)

<!-- sota:11L12 -->

## Week 13 — Ship Review: Stakeholder + Regulator Panel & Cross-Vertical Synthesis

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

**Build it — step by step (AI-builder lab):**
1. **Setup:** package your capstone repo using the `Data-Science-Projects-For-Resumes` structure for a clean narrative.
2. **Deck:** build the 12-minute ship-review presentation framed as a decision tool with bounded risk.
3. **Map obligations:** each named regulation → a concrete artifact.
4. **Defend:** rehearse adversarial Q&A on leakage, fairness, drift, accountability.
5. **Go/no-go:** write the six-lens gate + a conditioned ship decision + the cross-vertical synthesis.
- **Artifact:** `ship-review.md` + the cross-vertical synthesis + the final repo.
- **Use `$ship-review`:** lens-by-lens findings + top-3 unmitigated risks + a go/no-go.
- **Done when:** you survive the panel's leakage/fairness/drift probes with an obligation→artifact mapping.
- **Stretch:** present the public-good/low-resource variant with an equity + limitations note.

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

### State of the Art (June 2026)
- The bar is a **decision tool with bounded risk**, defended to a stakeholder + regulator panel on leakage, fairness (adverse-impact), drift, and accountability.
- **Model cards + datasheets + the AI RMF profile** are the portable artifacts; the six-lens method is the reusable rubric.
- Public-good / low-resource framing (equity + limitations note) is a first-class capstone option.

**References & links:**
- [`krishnaik06/Data-Science-Projects-For-Resumes`](https://github.com/krishnaik06/Data-Science-Projects-For-Resumes)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)

<!-- sota:11L13 -->

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



# Part B — Multimodal & Generative AI

**Track:** Multimodal / Generative · **Altitude:** Builder → Engineer · **Length:** 12 weeks (3 lecture hrs + 3 lab hrs/wk)
**Prerequisites:** Subjects 01–03 (math/ML from scratch, deep learning, transformers/attention). You can write a training loop, implement attention, and read a loss curve. We assume PyTorch fluency and one GPU (24 GB or Colab/Modal).
**Pedagogy:** Vizuara-style *build-the-component-from-scratch* meets the book's *concept → code → critique → reflection → rebuild* loop. You implement a Vision Transformer, a CLIP-style contrastive loss, and a DDPM **from scratch** before touching pretrained giants — then you fine-tune and assemble the giants into a real app.

**Course anchor cases (carried all term):**
1. **A small diffusion model** trained from scratch on CIFAR-10 / CelebA — your evidence that you understand generation, not just call an API.
2. **A multimodal image+text assistant** — a VLM-backed app (caption/VQA/grounded answer) that you build, fine-tune, evaluate, and harden against hallucination. The capstone fuses both: a generation-and-understanding system with honest evals.

**What you leave with:** a `multimodal/` repo containing a from-scratch ViT, a contrastive image–text model, a working DDPM + latent-diffusion fine-tune, an audio pipeline, a multimodal-RAG agent, six reusable skills, and an evidence log — not a folder of API demos.

---


## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly labs (W1–W11 deliverables) | 55% | Per-week weights below; from-scratch builds + evals |
| Midterm: from-scratch DDPM report (W5) | 10% | You can train and evaluate a generative model |
| Capstone: multimodal app + small diffusion model (W12) | 30% | End-to-end generation + understanding, evaluated honestly |
| Paper-presentation / seminar participation | 5% | Reading frontier multimodal papers critically |

Per-week lab weights (the 55%): W1 5% · W2 5% · W3 5% · W4 5% · W5 5% · W6 5% · W7 5% · W8 5% · W9 5% · W10 5% · W11 5%. (= 55%)

## Tooling & environment (June 2026)

- **Core:** Python 3.12, PyTorch 2.5 (`torch.compile`, SDPA/FlashAttention-3 backend), `uv`, Weights & Biases, `einops`, `timm` 1.0.
- **Diffusion / generation:** Hugging Face `diffusers` 0.31, `accelerate`, xFormers; latent VAEs from `diffusers`.
- **VLMs:** `transformers` 4.46+, LLaVA-NeXT / Qwen2.5-VL / Llama-3.2-Vision checkpoints; `peft` (LoRA/QLoRA) for fine-tuning; `bitsandbytes` for 4-bit.
- **Audio:** `openai-whisper` / faster-whisper, `torchaudio`, a modern TTS (XTTS-v2 / Parler-TTS / Kokoro), `librosa`.
- **CLIP / retrieval:** `open_clip`, FAISS / Qdrant for multimodal vector search.
- **Eval:** `torchmetrics` (FID, CLIPScore), `clip-score`, COCO caption metrics (CIDEr/SPICE), Inspect AI / custom VLM judges, human eval sheets.
- **Serving:** vLLM (multimodal), FastAPI, Gradio for app demos, Modal for GPU jobs.
- **Compute note:** every from-scratch build is sized for one 24 GB GPU; diffusion uses 32×32/64×64 resolutions; VLM fine-tunes use LoRA + 4-bit. Larger runs are optional Modal jobs.

## Capstone spec (Week 12)

Ship **two coupled artifacts**:
- **(A) A small diffusion model** trained from scratch (or substantially fine-tuned) on CIFAR-10/CelebA, reported with **FID** + sample grid + a training-stability writeup.
- **(B) A multimodal image+text assistant**: a VLM app (VQA / grounded captioning / visual document QA) with a **hallucination-aware eval** (CLIPScore/judge + grounding check) and a guardrail for "I can't see that in the image."

**Milestones:** M1 (W5) DDPM trained + FID baseline; M2 (W9) VLM app working + eval harness; M3 (W11) multimodal-RAG/agent layer + hardening; M4 (W12) demo + report.
**Acceptance checklist:** FID reported with a sample grid and a baseline comparison; VLM eval reports a grounding/hallucination metric and ≥1 failure slice; every generated/answered claim is traceable; the report names a failure mode and a fix; no metric is reported without a baseline.

---

## Week 1 — Vision Transformers From Scratch: Images as Sequences of Patches

**Altitude:** Builder · **Format:** 3h lecture + 3h lab
**Anchor case:** classify CIFAR-10 with a ViT you write yourself — patchify, embed, attend, pool, predict.

### Learning goals
- Implement a Vision Transformer end-to-end (patch embedding → positional embedding → transformer encoder → class head).
- Explain why attention over patches works and where ViTs need more data/regularization than CNNs.
- Read attention maps and connect them to what the model uses.

### Concept map
- **Patch embedding.** *Formula:* split `H×W×3` into `N=(H/P)(W/P)` patches of `P×P`, flatten, linear-project to `d`. *Shapes:* image `(3,32,32)` → patches `(N, P*P*3)` → tokens `(N, d)`. *Code mapping:* a `Conv2d(3, d, kernel=P, stride=P)` *is* patch embedding. *Common mistake:* forgetting the `[CLS]` token or positional embedding (then permutation-invariant nonsense).
- **Self-attention recap.** *Formula:* `Attn(Q,K,V)=softmax(QKᵀ/√d_k)V`. *Plain English:* each patch mixes information from every other patch, weighted by similarity. *Common mistake:* omitting the `√d_k` scale → saturated softmax.
- **Inductive bias trade-off.** Plain English: CNNs assume locality/translation; ViTs don't, so they need more data or strong augmentation/distillation. Where it matters: small-data training collapses without it.
- **Class token vs mean pooling.** Plain English: two ways to summarize the sequence into one vector for the classifier.

### Hands-on build (the lab)
- Implement `PatchEmbed`, multi-head attention, a transformer block, and a ViT classifier in pure PyTorch (no `timm` model); train on CIFAR-10 with augmentation; report top-1 accuracy.
- Compare against a `timm` ViT and a small ResNet baseline; visualize attention rollout for 5 images.
- **Deliverable:** `builds/vit/` with your ViT, accuracy vs baselines, and attention visualizations. **Acceptance:** from-scratch ViT trains and beats a linear baseline; attention maps rendered.

▶ **Practical project:** `VizuaraAI/Transformers-for-vision-BOOK` — implement the ViT (patch-embed → attention → class head) from scratch and verify it against a reference.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch timm einops`; clone the repo; load CIFAR-10.
2. **Build:** implement `PatchEmbed`, multi-head attention, a transformer block, the ViT classifier in pure PyTorch.
3. **Train:** train on CIFAR-10 with augmentation; report top-1 accuracy.
4. **Compare:** vs a `timm` ViT + a small ResNet; visualize attention rollout for 5 images.
5. **Verify:** shape checks + output-parity vs the reference + a param-count comparison.
- **Artifact:** `builds/vit/` with the ViT, accuracy table, attention images, `verify.md`.
- **Use `$from-scratch-verifier`:** prove the module matches a reference (shapes + parity).
- **Done when:** the from-scratch ViT beats a linear baseline and attention maps render.
- **Stretch:** ablate positional embeddings and add register tokens.

### Harness / reusable skill — `$from-scratch-verifier`
- **Purpose:** prove a from-scratch module matches a reference implementation.
- **Inputs:** your module + a reference (`timm`/`transformers`). **Required outputs:** shape checks at every stage, output-parity test on a fixed input, and a parameter-count comparison. **Evidence artifact:** `verify.md`.

### Common failure modes
- **Missing positional embedding** → bag-of-patches, no spatial sense. *Fix:* add (and ablate) pos-emb.
- **No augmentation on small data** → ViT overfits hard. *Fix:* RandAugment/mixup, or distill from a CNN.
- **Unscaled attention** → vanishing gradients. *Fix:* divide by `√d_k`; assert numerically.
- **Shape drift** → silent broadcasting bugs. *Fix:* `$from-scratch-verifier` shape asserts.

### Evidence artifact
`builds/vit/verify.md` + accuracy table + attention images.

### Skill sink-in
Predict whether your from-scratch ViT or the ResNet wins on CIFAR-10 at the same budget. Train both. Record the result and why ViTs are data-hungry.

### Depth upgrade
- **Dataset:** CIFAR-10 — cs.toronto.edu/~kriz/cifar.html / huggingface.co/datasets/uoft-cs/cifar10 (60k 32×32 images, 10 classes, ~170 MB, MIT-like research use).
- **Code stub:**
```python
import torch, torch.nn as nn
class PatchEmbed(nn.Module):
    def __init__(self, img=32, p=4, c=3, d=192):
        super().__init__(); self.proj = nn.Conv2d(c, d, kernel_size=p, stride=p)
        self.n = (img // p) ** 2
        self.cls = nn.Parameter(torch.zeros(1, 1, d))
        self.pos = nn.Parameter(torch.zeros(1, self.n + 1, d))
    def forward(self, x):                       # x: (B, 3, 32, 32)
        x = self.proj(x).flatten(2).transpose(1, 2)        # (B, N, d)
        cls = self.cls.expand(x.size(0), -1, -1)
        return torch.cat([cls, x], 1) + self.pos           # (B, N+1, d)
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Correctness | Parity vs reference, all shapes asserted | Trains, no parity check | Doesn't train |
| Performance | Beats CNN-baseline w/ aug | Beats linear only | Below linear |
| Analysis | Attention maps interpreted | Shown only | None |
| Ablation | Pos-emb/aug ablated | One ablation | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Dosovitskiy et al., "An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale (ViT)," *ICLR* 2021.
  - Touvron et al., "Training data-efficient image transformers & distillation (DeiT)," *ICML* 2021.
  - Vaswani et al., "Attention Is All You Need," *NeurIPS* 2017.
  - Steiner et al., "How to train your ViT? Data, Augmentation, and Regularization," *TMLR*, 2022.

---

### State of the Art (June 2026)
- ViTs remain the multimodal backbone; **DINOv2 / DINOv3** self-supervised features and **SigLIP 2** encoders are the 2026 pretrained defaults feeding VLMs.
- **Register tokens** and the **FlashAttention-3/4 SDPA backend** are standard ViT training practice; patchification is still a `Conv2d`.
- Data-efficiency tricks (DeiT distillation, strong augmentation) still decide small-data ViT training.

**References & links:**
- [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK)
- [Vaswani et al., 2017 - Attention Is All You Need](https://arxiv.org/abs/1706.03762)
- [Dao et al., 2022 - FlashAttention](https://arxiv.org/abs/2205.14135)
- [Dosovitskiy et al., 2020 - ViT](https://arxiv.org/abs/2010.11929)

<!-- sota:12L01 -->

## Week 2 — Contrastive Learning & CLIP: Aligning Images and Text

**Altitude:** Builder · **Anchor case:** train a small CLIP on a image–caption subset so "a photo of a dog" retrieves dog images.

### Learning goals
- Implement the symmetric InfoNCE contrastive loss and a dual image/text encoder.
- Explain zero-shot classification via text prompts and the role of the temperature and batch size.
- Evaluate cross-modal retrieval (image→text and text→image Recall@k) and zero-shot accuracy.

### Concept map
- **Contrastive (InfoNCE) loss.** *Formula:* for a batch of `N` pairs, maximize similarity of matched image–text and minimize mismatched; `L = ½(CE(logits, labels) + CE(logitsᵀ, labels))` with `logits = (I·Tᵀ)/τ`. *Symbols:* `I,T` are L2-normalized embeddings, `τ` temperature. *Plain English:* pull true pairs together, push the rest apart, using the other batch items as negatives. *Common mistake:* forgetting to normalize embeddings or learn `τ`.
- **Zero-shot classification.** Plain English: embed class names as text ("a photo of a {class}"), embed the image, pick the nearest text. Where it matters: no fine-tuning needed. Common mistake: poor prompt templates tank accuracy.
- **Batch size as negatives.** Plain English: more in-batch negatives = harder, better contrast. Where it matters: small batches underperform; gradient accumulation / large-batch tricks help.
- **Modality gap.** Plain English: image and text embeddings occupy slightly separated cones; retrieval still works but the gap is real.

### Hands-on build (the lab)
- Implement CLIP's symmetric loss; train a small dual-encoder (ViT image tower + a small text encoder) on a **Flickr30k / COCO captions** subset; report image↔text Recall@1/5/10.
- Run **zero-shot CIFAR-10** with `open_clip` pretrained weights and compare prompt templates.
- **Deliverable:** `builds/clip/` with the loss, retrieval metrics, and a zero-shot comparison. **Acceptance:** symmetric loss verified; retrieval Recall@k reported both directions.

▶ **Practical project:** `VizuaraAI/Transformers-for-vision-BOOK` — train a dual-encoder with the symmetric InfoNCE loss and measure both-direction retrieval.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch open_clip_torch`; clone the repo; load a Flickr30k/COCO subset.
2. **Loss:** implement the symmetric InfoNCE loss (normalized embeddings, learned τ).
3. **Train:** a small dual-encoder (ViT tower + text tower); report image↔text Recall@1/5/10.
4. **Zero-shot:** run zero-shot CIFAR-10 with `open_clip` weights; sweep 5 prompt templates.
5. **Report:** retrieval + zero-shot tables + a prompt-sensitivity note.
- **Artifact:** `builds/clip/clip-eval.md` + retrieval/zero-shot tables.
- **Use `$contrastive-eval`:** R@k both directions + zero-shot + prompt sensitivity.
- **Done when:** symmetric loss verified and Recall@k reported both directions.
- **Stretch:** swap in a SigLIP-2 sigmoid loss and compare.

### Harness / reusable skill — `$contrastive-eval`
- **Purpose:** evaluate any image–text model on retrieval and zero-shot, both directions.
- **Inputs:** image/text encoders + a paired set. **Required outputs:** R@1/5/10 (i→t and t→i), zero-shot accuracy, and a prompt-template sensitivity note. **Evidence artifact:** `clip-eval.md`.

### Common failure modes
- **Unnormalized embeddings** → degenerate similarities. *Fix:* L2-normalize both towers.
- **Tiny batch** → too few negatives, weak model. *Fix:* large batch / accumulation / memory bank.
- **Single prompt** → unstable zero-shot. *Fix:* prompt ensembling, report sensitivity.
- **One-direction eval** → hides asymmetry. *Fix:* report i→t and t→i.

### Evidence artifact
`builds/clip/clip-eval.md` + retrieval + zero-shot tables.

### Skill sink-in
Predict how much prompt template choice changes zero-shot accuracy. Sweep 5 templates. Record the spread — it is larger than you expect.

### Depth upgrade
- **Dataset:** Flickr30k — huggingface.co/datasets/nlphuji/flickr30k (31k images, 5 captions each, ~4 GB, research use) and/or MS-COCO Captions — cocodataset.org (~118k images, CC BY 4.0 annotations).
- **Code stub:**
```python
import torch, torch.nn.functional as F
def clip_loss(img_emb, txt_emb, logit_scale):
    img = F.normalize(img_emb, dim=-1); txt = F.normalize(txt_emb, dim=-1)
    logits = logit_scale.exp() * img @ txt.t()         # (B, B)
    labels = torch.arange(img.size(0), device=img.device)
    return 0.5 * (F.cross_entropy(logits, labels) + F.cross_entropy(logits.t(), labels))
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Loss correctness | Symmetric, learned τ, normalized | One issue | Broken |
| Retrieval | R@k both directions | One direction | None |
| Zero-shot | Prompt-ensemble + sensitivity | Single prompt | None |
| Insight | Discusses modality gap/batch | Partial | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Radford et al., "Learning Transferable Visual Models From Natural Language Supervision (CLIP)," *ICML* 2021.
  - Oord et al., "Representation Learning with Contrastive Predictive Coding (InfoNCE)," 2018.
  - Zhai et al., "Sigmoid Loss for Language Image Pre-Training (SigLIP)," *ICCV* 2023.
  - Liang et al., "Mind the Gap: Understanding the Modality Gap in Contrastive Representation Learning," *NeurIPS* 2022.

---

### State of the Art (June 2026)
- **SigLIP 2** (sigmoid loss) is the 2026 contrastive default; **ColPali / ColQwen3** extend late-interaction contrastive retrieval to document images.
- Multimodal embeddings (**voyage-multimodal-3, Qwen3-VL-Embedding, Cohere embed-v4**) productionize CLIP-style retrieval.
- The modality-gap and batch-size-as-negatives lessons still hold; large-batch / sigmoid loss mitigate them.

**References & links:**
- [`VizuaraAI/Transformers-for-vision-BOOK`](https://github.com/VizuaraAI/Transformers-for-vision-BOOK)
- [Faysse et al., 2024 - ColPali](https://arxiv.org/abs/2407.01449)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)

<!-- sota:12L02 -->

## Week 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning

**Altitude:** Builder → Engineer · **Anchor case:** stand up a VLM that answers questions about an image, then LoRA-fine-tune it on a target task.

### Learning goals
- Explain the VLM recipe: a vision encoder + a projector/connector + an LLM, and how visual tokens enter the language model.
- Run inference with an open VLM (LLaVA-NeXT / Qwen2.5-VL / Llama-3.2-Vision) for VQA and captioning.
- LoRA-fine-tune a VLM on a small instruction dataset and evaluate the lift.

### Concept map
- **Connector / projector.** *Plain English:* the vision encoder outputs patch features; an MLP (LLaVA) or resampler/cross-attention (Flamingo/Qwen) maps them into the LLM's token space. *Shapes:* `(N_patches, d_vision) → (N_visual_tokens, d_llm)`. *Common mistake:* freezing/unfreezing the wrong stage; LLaVA's two-stage recipe (align projector, then instruction-tune) matters.
- **Visual tokens in context.** Plain English: images become a sequence of tokens prepended to the text; long/high-res images cost many tokens. Where it matters: context budget, tiling for high-res (LLaVA-NeXT/AnyRes). Common mistake: ignoring resolution → unreadable text in documents.
- **Instruction tuning for VLMs.** Plain English: teach the model to follow image+text instructions with curated VQA/caption data. Common mistake: catastrophic forgetting of language ability; LoRA mitigates.
- **VLM hallucination.** Plain English: VLMs confidently describe objects not in the image (object hallucination). Where it matters: every eval. Common mistake: trusting fluent descriptions.

### Hands-on build (the lab)
- Run zero-shot VQA/captioning with an open VLM on **VQAv2 / TextVQA / DocVQA** samples; measure accuracy and inspect failures.
- **LoRA-fine-tune** the VLM on a small target instruction set; report before/after on a held-out slice.
- **Deliverable:** `builds/vlm/` with inference results, a LoRA fine-tune, and a before/after table. **Acceptance:** measurable lift on the target slice; ≥3 hallucination examples documented.

▶ **Practical project:** `VizuaraAI/infertutor-arena-capstone` — run/serve a Qwen-VL VLM for VQA and LoRA-fine-tune it on a target slice.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100/Modal; `pip install transformers peft bitsandbytes`; clone the repo; load Qwen2.5-VL / LLaVA-NeXT.
2. **Zero-shot:** run VQA/captioning on VQAv2/TextVQA/DocVQA samples; inspect failures.
3. **Probe:** per-capability accuracy (objects/counting/text-in-image/spatial) + a hallucination rate.
4. **LoRA:** fine-tune on a small target instruction set; report before/after on a held-out slice.
5. **Document:** ≥3 hallucination examples + a resolution-sensitivity note.
- **Artifact:** `builds/vlm/vlm-probe.md` + LoRA before/after table.
- **Use `$vlm-probe`:** per-capability accuracy + hallucination rate before deploying.
- **Done when:** measurable LoRA lift on the slice and ≥3 hallucinations documented.
- **Stretch:** add AnyRes high-res tiling and re-measure DocVQA.

### Harness / reusable skill — `$vlm-probe`
- **Purpose:** characterize a VLM's strengths/failures before deploying it.
- **Inputs:** a VLM + a probe set (objects, counting, text-in-image, spatial). **Required outputs:** per-capability accuracy, a hallucination rate, and a resolution-sensitivity note. **Evidence artifact:** `vlm-probe.md`.

### Common failure modes
- **Resolution starvation** → can't read document/UI text. *Fix:* high-res tiling (AnyRes), report resolution.
- **Object hallucination** → names absent objects. *Fix:* grounding/POPE-style eval, abstention prompt.
- **Catastrophic forgetting** in full fine-tune. *Fix:* LoRA, small LR, mixed data.
- **Eval on easy VQA only** → misses counting/spatial/text gaps. *Fix:* capability-sliced probe.

### Evidence artifact
`builds/vlm/vlm-probe.md` + LoRA before/after table.

### Skill sink-in
Predict which capability (objects / counting / reading text / spatial) your VLM is worst at. Probe all four. Record the weakest and a hypothesis.

### Depth upgrade
- **Dataset:** VQAv2 — visualqa.org / huggingface.co/datasets/HuggingFaceM4/VQAv2 (~1.1M QA pairs, CC BY 4.0); TextVQA — textvqa.org (45k questions, CC BY 4.0); models e.g. **llava-hf/llava-v1.6-mistral-7b-hf**, **Qwen/Qwen2.5-VL-7B-Instruct** (HF, Apache-2.0/Qwen license).
- **Code stub:**
```python
from transformers import AutoProcessor, LlavaNextForConditionalGeneration
import torch
proc = AutoProcessor.from_pretrained("llava-hf/llava-v1.6-mistral-7b-hf")
model = LlavaNextForConditionalGeneration.from_pretrained(
    "llava-hf/llava-v1.6-mistral-7b-hf", torch_dtype=torch.float16, device_map="auto")
def vqa(image, question):
    prompt = f"[INST] <image>\n{question} [/INST]"
    inp = proc(prompt, image, return_tensors="pt").to(model.device, torch.float16)
    out = model.generate(**inp, max_new_tokens=64)
    return proc.decode(out[0], skip_special_tokens=True)
# LoRA: wrap with peft.get_peft_model(model, LoraConfig(target_modules=["q_proj","v_proj"]))
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Architecture grasp | Explains connector+token flow | Partial | Black box |
| Fine-tune | LoRA lift on held-out slice | Trains, no eval | None |
| Hallucination | Rate measured + examples | Mentioned | Ignored |
| Capability slices | 4 capabilities probed | One | Aggregate only |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Liu et al., "Visual Instruction Tuning (LLaVA)," *NeurIPS* 2023; Liu et al., "Improved Baselines (LLaVA-1.5)," 2024.
  - Bai et al., "Qwen-VL / Qwen2-VL," 2023–2024.
  - Alayrac et al., "Flamingo: a Visual Language Model for Few-Shot Learning," *NeurIPS* 2022.
  - Li et al., "Evaluating Object Hallucination in Large Vision-Language Models (POPE)," *EMNLP* 2023.

---

### State of the Art (June 2026)
- 2026 open VLM leaders: **Qwen3-VL, Llama 4 (native-multimodal), InternVL 3, Molmo, Gemma 3 vision**; closed frontier: **Gemini 3.1 Pro, GPT-5.5, Claude Opus 4.8**.
- **AnyRes / high-res tiling** for documents; **LoRA/QLoRA + trl** fine-tuning; **object-hallucination evals (POPE / HALault)** are mandatory.
- Connector design (MLP vs resampler) plus the visual-token budget remain the core trade-offs.

**References & links:**
- [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)
- [Dettmers et al., 2023 - QLoRA](https://arxiv.org/abs/2305.14314)
- [Liu et al., 2023 - LLaVA](https://arxiv.org/abs/2304.08485)
- [Hugging Face TRL](https://github.com/huggingface/trl)
- [Hugging Face PEFT](https://github.com/huggingface/peft)

<!-- sota:12L03 -->

## Week 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)

**Altitude:** Builder · **Anchor case:** train a denoising diffusion model on CIFAR-10/CelebA and sample images you generated yourself.

### Learning goals
- Derive and implement the DDPM forward (noising) and reverse (denoising) processes.
- Implement a noise-prediction U-Net with time conditioning and train the simplified ε-objective.
- Sample images and reason about the noise schedule and number of steps.

### Concept map
- **Forward process.** *Formula:* `q(x_t|x_0)=N(√(ᾱ_t) x_0, (1−ᾱ_t)I)` → closed form `x_t=√(ᾱ_t)x_0+√(1−ᾱ_t)ε`. *Symbols:* `ᾱ_t` cumulative product of `1−β_t`. *Plain English:* gradually add Gaussian noise until the image is pure noise. *Code mapping:* one line — sample `t`, sample `ε`, form `x_t`. *Common mistake:* mismatched schedule between train and sample.
- **Reverse process / objective.** *Formula (simplified):* `L = E[‖ε − ε_θ(x_t, t)‖²]`. *Plain English:* train a network to predict the noise added at step `t`; denoising = subtract predicted noise. *Common mistake:* predicting `x_0` vs `ε` vs `v` and mixing parameterizations.
- **Time conditioning.** Plain English: the U-Net must know which noise level it's at; inject a sinusoidal time embedding. Common mistake: omitting it → blurry mush.
- **Sampling steps.** Plain English: ancestral sampling over T steps (DDPM) is slow; DDIM (Week 6 preview) is the deterministic fast cousin.

### Hands-on build (the lab)
- Implement the DDPM schedule, a small time-conditioned U-Net, the ε-loss, and an ancestral sampler; train on CIFAR-10 (or 32×32 CelebA); generate a sample grid.
- Compute **FID** vs the training set; compare two noise schedules (linear vs cosine).
- **Deliverable:** `builds/ddpm/` with training code, sample grids, and FID. **Acceptance:** recognizable samples; FID reported; cosine vs linear compared.

▶ **Practical project:** `VizuaraAILabs/Principles-of-Diffusion-Models` — implement the DDPM forward/reverse + time-conditioned U-Net and report FID.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch torchvision diffusers`; clone the repo; load CIFAR-10/CelebA (32–64px).
2. **Schedule:** implement the DDPM β/ᾱ schedule + closed-form forward noising.
3. **U-Net:** build a small time-conditioned U-Net; train the ε-objective.
4. **Sample:** an ancestral sampler → a sample grid; compute FID vs the training set.
5. **Ablate:** compare linear vs cosine schedule; add a nearest-neighbor memorization check.
- **Artifact:** `builds/ddpm/gen-eval.md` + sample grids + FID + schedule comparison.
- **Use `$generative-eval`:** FID + a diversity/memorization check + a sample grid.
- **Done when:** recognizable samples, FID reported, cosine vs linear compared.
- **Stretch:** swap the U-Net for a small DiT backbone and compare FID.

### Harness / reusable skill — `$generative-eval`
- **Purpose:** evaluate a generator beyond eyeballing.
- **Inputs:** generated + real samples. **Required outputs:** FID (and/or CLIPScore for conditional), a diversity check (mode-coverage / nearest-neighbor to training set to catch memorization), and a sample grid. **Evidence artifact:** `gen-eval.md`.

### Common failure modes
- **Train/sample schedule mismatch** → noise. *Fix:* share the exact `β`/`ᾱ` arrays.
- **Missing time embedding** → blurry constant output. *Fix:* add sinusoidal `t`-embedding to every block.
- **FID on too few samples** → noisy/meaningless. *Fix:* ≥10k samples (or state the caveat).
- **Memorization mistaken for quality** → copies training images. *Fix:* nearest-neighbor check.

### Evidence artifact
`builds/ddpm/gen-eval.md` + sample grids + FID + schedule comparison. *(This is the W5 midterm input.)*

### Skill sink-in
Predict whether cosine or linear schedule gives lower FID at your budget. Train both. Record the winner and your explanation.

### Depth upgrade
- **Dataset:** CIFAR-10 (as W1) or CelebA — mmlab.ie.cuhk.edu.hk/projects/CelebA.html / huggingface.co/datasets/student/celebA (~200k face images, ~1.4 GB, **research-only license**). Use 32×32 or 64×64 crops.
- **Code stub:**
```python
import torch
T = 1000
betas = torch.linspace(1e-4, 0.02, T)
alphas = 1 - betas; abar = torch.cumprod(alphas, 0)
def q_sample(x0, t, eps):                          # forward noising, closed form
    return abar[t].sqrt()[:, None, None, None] * x0 + (1 - abar[t]).sqrt()[:, None, None, None] * eps
def loss_fn(model, x0):
    t = torch.randint(0, T, (x0.size(0),), device=x0.device)
    eps = torch.randn_like(x0)
    eps_pred = model(q_sample(x0, t, eps), t)      # U-Net predicts the noise
    return torch.mean((eps - eps_pred) ** 2)
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Implementation | Forward+reverse+time-cond correct | Trains, minor gaps | Broken |
| Sample quality | Recognizable + FID | Noisy but improving | Pure noise |
| Eval | FID + memorization check | FID only | Eyeball only |
| Ablation | Schedule comparison | One run | None |

- **Assessment weight:** 5% of course grade (feeds the 10% W5 midterm).
- **Readings:**
  - Ho, Jain & Abbeel, "Denoising Diffusion Probabilistic Models (DDPM)," *NeurIPS* 2020.
  - Nichol & Dhariwal, "Improved Denoising Diffusion Probabilistic Models," *ICML* 2021.
  - Sohl-Dickstein et al., "Deep Unsupervised Learning using Nonequilibrium Thermodynamics," *ICML* 2015.
  - Heusel et al., "GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium (FID)," *NeurIPS* 2017.

---

### State of the Art (June 2026)
- **DiT (Diffusion Transformer)** has displaced the U-Net as the scalable backbone; **ε/v-prediction + cosine/EDM schedules** are standard.
- **FID + a memorization / nearest-neighbor check** is the honest eval; **EDM2** training recipes are the reference.
- Foundations are still taught on CIFAR/CelebA at 32–64px on one GPU.

**References & links:**
- [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Ho et al., 2020 - DDPM](https://arxiv.org/abs/2006.11239)
- [HF diffusers](https://github.com/huggingface/diffusers)

<!-- sota:12L04 -->

## Week 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image

**Altitude:** Builder → Engineer · **Anchor case:** fine-tune Stable-Diffusion-style latent diffusion to generate from text prompts. **(Midterm DDPM report due.)**

### Learning goals
- Explain latent diffusion (diffuse in a VAE latent, not pixels) and why it makes high-res tractable.
- Implement classifier-free guidance and text conditioning via cross-attention.
- Fine-tune a pretrained latent-diffusion model (DreamBooth/LoRA) and evaluate text–image alignment.

### Concept map
- **Latent diffusion.** *Plain English:* encode the image to a small latent with a VAE, run diffusion there, decode at the end — 8× smaller spatially, far cheaper. *Where it matters:* makes 512×512 feasible on one GPU. *Common mistake:* fine-tuning the VAE and U-Net together and destabilizing.
- **Cross-attention text conditioning.** *Formula:* U-Net cross-attends to text embeddings (CLIP/T5); `Attn(Q_image, K_text, V_text)`. *Plain English:* the prompt steers denoising. *Common mistake:* unconditioned training then expecting prompt control.
- **Classifier-free guidance (CFG).** *Formula:* `ε̃ = ε_uncond + s·(ε_cond − ε_uncond)`. *Symbols:* `s` guidance scale. *Plain English:* exaggerate the difference between prompted and unprompted predictions to follow the text harder. *Common mistake:* `s` too high → oversaturated, artifacts.
- **CLIPScore vs FID for text-to-image.** Plain English: FID measures realism, CLIPScore measures prompt alignment; you need both.

### Hands-on build (the lab)
- Run `diffusers` Stable-Diffusion inference; sweep the CFG scale and document the quality/alignment trade-off.
- **LoRA / DreamBooth fine-tune** on a small concept set (10–20 images); evaluate with CLIPScore on held-out prompts + a sample grid.
- Submit the **W4 DDPM report** as the midterm.
- **Deliverable:** `builds/latent-diffusion/` + `midterm/ddpm-report.md`. **Acceptance:** fine-tune produces the target concept; CFG sweep documented; CLIPScore reported.

▶ **Practical project:** `VizuaraAILabs/Principles-of-Diffusion-Models` — extend to latent diffusion + CFG and LoRA/DreamBooth fine-tune with a CLIPScore eval.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100; `pip install diffusers transformers peft`; clone the repo; pull SD-2.1/SDXL or FLUX.1.
2. **CFG sweep:** run inference; sweep the classifier-free guidance scale; document the quality/alignment trade-off.
3. **Fine-tune:** LoRA/DreamBooth on a 10–20 image concept set (with prior preservation).
4. **Eval:** CLIPScore on held-out prompts (PartiPrompts) + a sample grid.
5. **Midterm:** submit the W4 DDPM report.
- **Artifact:** `builds/latent-diffusion/t2i-eval.md` + `midterm/ddpm-report.md`.
- **Use `$t2i-eval`:** realism + alignment (CLIPScore + a CFG-scale curve).
- **Done when:** the fine-tune produces the target concept, CFG sweep documented, CLIPScore reported.
- **Stretch:** compare a rectified-flow base (SD3.5/FLUX) on the same prompts.

### Harness / reusable skill — `$t2i-eval`
- **Purpose:** evaluate a text-to-image model on realism *and* alignment.
- **Inputs:** prompts + generations. **Required outputs:** FID-or-realism note, CLIPScore per prompt, a CFG-scale curve, and a failure-prompt set. **Evidence artifact:** `t2i-eval.md`.

### Common failure modes
- **CFG too high/low** → artifacts or weak prompt following. *Fix:* sweep `s`, pick from the trade-off curve.
- **Overfit DreamBooth** → only generates the training images. *Fix:* prior-preservation, fewer steps, LoRA.
- **Alignment ignored** → pretty but off-prompt. *Fix:* CLIPScore, not just FID.
- **VAE artifacts** → blurry decode. *Fix:* keep VAE frozen; check latent stats.

### Evidence artifact
`builds/latent-diffusion/t2i-eval.md` + `midterm/ddpm-report.md` (graded).

### Skill sink-in
Predict the CFG scale that best balances realism and prompt-alignment for your concept. Sweep. Record the chosen `s` and the trade-off you accepted.

### Depth upgrade
- **Dataset:** for fine-tuning, your own 10–20 image concept set; eval prompts from **PartiPrompts** — github.com/google-research/parti (1.6k prompts, Apache-2.0) or **DrawBench**. Base model: **stabilityai/stable-diffusion-2-1** or **stable-diffusion-xl** (HF, CreativeML OpenRAIL / SDXL license).
- **Code stub:**
```python
from diffusers import StableDiffusionPipeline
import torch
pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1", torch_dtype=torch.float16).to("cuda")
def gen(prompt, scale):                            # classifier-free guidance scale sweep
    return pipe(prompt, guidance_scale=scale, num_inference_steps=30).images[0]
# CLIPScore for alignment:
from torchmetrics.multimodal import CLIPScore
clip = CLIPScore(model_name_or_path="openai/clip-vit-base-patch16")
# clip.update(image_tensor_uint8, [prompt]); clip.compute()
```
- **Graded rubric table (governs midterm report):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| DDPM report | FID+grid+stability writeup | Partial | Missing |
| Fine-tune | Target concept, not overfit | Overfit but works | Fails |
| Alignment eval | CLIPScore + CFG curve | One metric | Eyeball |
| Trade-off reasoning | Justifies CFG choice | States it | None |

- **Assessment weight:** 5% lab + the 10% midterm.
- **Readings:**
  - Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models (Stable Diffusion)," *CVPR* 2022.
  - Ho & Salimans, "Classifier-Free Diffusion Guidance," *NeurIPS Workshop* 2021.
  - Ruiz et al., "DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation," *CVPR* 2023.
  - Hessel et al., "CLIPScore: A Reference-free Evaluation Metric for Image Captioning," *EMNLP* 2021.

---

### State of the Art (June 2026)
- **Rectified-flow latent transformers** (SD3.5, **FLUX.1** — the open-weights leader) replaced classic LDM; closed leaders: **Nano Banana Pro, GPT Image, Midjourney v7**.
- **LoRA / DreamBooth** is still the fine-tune path; eval = **CLIPScore (alignment) + FID/realism** with a CFG sweep.
- Text rendering and instruction-following are the 2026 quality frontier.

**References & links:**
- [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Ho et al., 2020 - DDPM](https://arxiv.org/abs/2006.11239)
- [Rombach et al., 2022 - Latent Diffusion](https://arxiv.org/abs/2112.10752)
- [Hugging Face PEFT](https://github.com/huggingface/peft)
- [HF diffusers](https://github.com/huggingface/diffusers)

<!-- sota:12L05 -->

## Week 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone

**Altitude:** Engineer · **Anchor case:** retrain your small generator with a flow-matching objective and compare sample quality and steps against DDPM.

### Learning goals
- Explain flow matching / rectified flow as learning a velocity field that transports noise to data along straight-ish paths.
- Implement a conditional flow-matching loss and an ODE sampler; compare step counts to DDPM/DDIM.
- Situate why 2024–2026 SOTA (SD3, Flux) moved to rectified flow.

### Concept map
- **Continuous-time view.** *Plain English:* instead of discrete noising steps, define a continuous path from noise `x_0~N(0,I)` to data `x_1`; learn the velocity `v_θ(x_t,t)` that moves along it. *Common mistake:* conflating the diffusion SDE with the flow ODE — flow matching trains a simpler regression.
- **Conditional flow matching loss.** *Formula:* `L = E[‖v_θ(x_t,t) − (x_1 − x_0)‖²]` for the linear path `x_t=(1−t)x_0+t x_1`. *Plain English:* predict the straight-line velocity from noise to data. *Common mistake:* wrong time parameterization/path.
- **Rectified flow.** Plain English: straighten the paths so an ODE solver needs few steps (even 1–4) for good samples. Where it matters: fast, high-quality generation (Flux, SD3). Common mistake: expecting straight paths without the reflow procedure.
- **DDIM bridge.** Plain English: deterministic diffusion sampling is itself an ODE; flow matching generalizes and simplifies it.

### Hands-on build (the lab)
- Implement conditional flow matching on the same CIFAR/CelebA setup; sample with a fixed-step ODE solver (Euler/Heun); compare FID at 4 / 10 / 50 steps vs your DDPM and DDIM.
- **Deliverable:** `builds/flow-matching/` with the loss, a steps-vs-FID curve across methods, and a short writeup. **Acceptance:** flow matching matches/beats DDPM at far fewer steps, or the gap is explained.

▶ **Practical project:** `VizuaraAILabs/Principles-of-Diffusion-Models` — retrain with a conditional flow-matching objective and plot FID-vs-NFE against DDPM/DDIM.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch torchvision`; clone the repo; reuse the CIFAR/CelebA setup.
2. **FM loss:** implement conditional flow matching on the linear path (predict the velocity).
3. **Sample:** an Euler/Heun ODE sampler at 4/10/50 steps.
4. **Frontier:** plot FID-vs-NFE for flow matching vs your DDPM and DDIM.
5. **Pick:** recommend an operating point on the quality–compute frontier.
- **Artifact:** `builds/flow-matching/sampler-benchmark.md` + steps-vs-FID curve.
- **Use `$sampler-benchmark`:** FID vs NFE curve + the recommended operating point.
- **Done when:** flow matching matches/beats DDPM at far fewer steps (or the gap is explained).
- **Stretch:** add a reflow / few-step distillation pass and re-plot.

### Harness / reusable skill — `$sampler-benchmark`
- **Purpose:** compare generative samplers on the quality–compute frontier.
- **Inputs:** trained generators + samplers. **Required outputs:** FID (and CLIPScore if conditional) vs NFE (number of function evaluations) curve, and the recommended operating point. **Evidence artifact:** `sampler-benchmark.md`.

### Common failure modes
- **Wrong path/time** → unstable training. *Fix:* use the linear interpolation path, verify endpoints.
- **Too few ODE steps without reflow** → artifacts. *Fix:* reflow or more steps; report the curve.
- **Apples-to-oranges FID** → different sample counts/resolutions. *Fix:* fix protocol across methods.
- **Claiming SOTA from one number** → no frontier. *Fix:* plot quality vs NFE.

### Evidence artifact
`builds/flow-matching/sampler-benchmark.md` + steps-vs-FID curve.

### Skill sink-in
Predict how few steps flow matching needs to match your 50-step DDPM FID. Measure. Record the real step count.

### Depth upgrade
- **Dataset:** CIFAR-10 / CelebA (as W4) for direct comparability.
- **Code stub:**
```python
import torch
def fm_loss(model, x1):                            # x1: data batch
    x0 = torch.randn_like(x1)                      # noise endpoint
    t = torch.rand(x1.size(0), device=x1.device)
    xt = (1 - t)[:, None, None, None] * x0 + t[:, None, None, None] * x1   # linear path
    target = x1 - x0                               # constant velocity along the path
    return ((model(xt, t) - target) ** 2).mean()
@torch.no_grad()
def sample(model, shape, steps=8):                 # Euler ODE integration noise->data
    x = torch.randn(shape, device="cuda"); dt = 1.0 / steps
    for i in range(steps):
        t = torch.full((shape[0],), i * dt, device="cuda")
        x = x + model(x, t) * dt
    return x
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| FM implementation | Correct path + ODE sampler | Trains, minor gaps | Broken |
| Frontier analysis | FID-vs-NFE vs DDPM/DDIM | One comparison | Single number |
| Few-step quality | Strong at ≤10 steps | Needs many | Fails |
| Conceptual clarity | Explains flow vs diffusion | Partial | Confused |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Lipman et al., "Flow Matching for Generative Modeling," *ICLR* 2023.
  - Liu, Gong & Liu, "Rectified Flow: A Marginal Preserving Approach to Optimal Transport," *ICLR* 2023.
  - Esser et al., "Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (SD3)," *ICML* 2024.
  - Song et al., "Denoising Diffusion Implicit Models (DDIM)," *ICLR* 2021.

---

### State of the Art (June 2026)
- **Flow matching / rectified flow is the modern backbone** (SD3, FLUX, and most video models); **reflow + few-step distillation** give 1–4 step sampling.
- **Consistency models / distilled samplers** (LCM, consistency-FM) push toward real-time generation.
- The ODE-velocity-regression view (vs the diffusion SDE) is now the standard pedagogy.

**References & links:**
- [`VizuaraAILabs/Principles-of-Diffusion-Models`](https://github.com/VizuaraAILabs/Principles-of-Diffusion-Models)
- [Rafailov et al., 2023 - DPO](https://arxiv.org/abs/2305.18290)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Ho et al., 2020 - DDPM](https://arxiv.org/abs/2006.11239)
- [Lipman et al., 2022 - Flow Matching](https://arxiv.org/abs/2210.02747)

<!-- sota:12L06 -->

## Week 7 — Video Generation: Spatiotemporal Diffusion & World Consistency

**Altitude:** Engineer · **Anchor case:** generate short clips and reason about temporal consistency — why video is not "many independent images."

### Learning goals
- Explain how video diffusion adds temporal layers/attention and why naive per-frame generation flickers.
- Run an open text/image-to-video model and evaluate temporal consistency.
- Understand the compute reality (latent video diffusion, frame interpolation, the DiT backbone).

### Concept map
- **Temporal modeling.** *Plain English:* add temporal attention/3D convolutions so frames are coherent; a video is a latent tensor `(T,C,H,W)`. *Common mistake:* generating frames independently → flicker, identity drift.
- **Latent video diffusion + DiT.** Plain English: diffuse in a spatiotemporal latent with a diffusion transformer; this is the Sora/SVD/CogVideoX family. Where it matters: tractability and scaling.
- **Conditioning modes.** Plain English: text-to-video vs image-to-video (animate a still); motion/camera control. Common mistake: expecting long, controllable clips from short-context models.
- **Evaluation.** Plain English: per-frame quality (FVD), temporal consistency, and text alignment (VBench dimensions). Common mistake: a pretty thumbnail hiding a flickering clip.

### Hands-on build (the lab)
- Run an open model (**Stable Video Diffusion / CogVideoX**) for image- and text-to-video on a handful of prompts; measure a temporal-consistency proxy (frame-to-frame CLIP/feature similarity) and inspect flicker.
- **Deliverable:** `builds/video/` with generated clips, a consistency analysis, and a compute/limits note. **Acceptance:** consistency metric reported; ≥2 failure modes (flicker, morphing, physics violation) documented.

▶ **Practical project:** `VizuaraAI/vla-driving-simulation` — generate action-conditioned frames and measure a temporal-consistency proxy + flicker catalog.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100/Modal; `pip install diffusers transformers`; clone the repo; pull SVD/CogVideoX.
2. **Generate:** image- and text-to-video on a handful of prompts.
3. **Consistency:** measure a frame-to-frame CLIP/feature-similarity temporal proxy.
4. **Inspect:** catalog ≥2 failure modes (flicker, morphing, physics violation).
5. **Honesty:** document the resolution/length/latency reality.
- **Artifact:** `builds/video/video-eval.md` + clips + failure catalog.
- **Use `$video-consistency-eval`:** temporal coherence, not just single-frame quality.
- **Done when:** the consistency metric is reported and ≥2 failure modes documented.
- **Stretch:** score against VBench dimensions.

### Harness / reusable skill — `$video-consistency-eval`
- **Purpose:** evaluate generated video for temporal coherence, not just single-frame quality.
- **Inputs:** generated clips. **Required outputs:** frame-quality proxy, temporal-consistency score, text alignment, and a flicker/identity-drift catalog. **Evidence artifact:** `video-eval.md`.

### Common failure modes
- **Per-frame thinking** → flicker. *Fix:* temporal layers / use a real video model.
- **Cherry-picked thumbnail** → hides motion failures. *Fix:* watch the whole clip, measure consistency.
- **Ignoring compute** → unrealistic expectations. *Fix:* document the resolution/length/latency reality.
- **Physics violations unflagged** → objects morph. *Fix:* catalog failures explicitly.

### Evidence artifact
`builds/video/video-eval.md` + clips + failure catalog.

### Skill sink-in
Predict the dominant failure mode (flicker vs morphing vs physics) for your model. Generate and inspect. Record what actually broke.

### Depth upgrade
- **Dataset:** prompt set of your design + reference frames; benchmark dimensions from **VBench** — github.com/Vchitect/VBench (Apache-2.0). Model: **stabilityai/stable-video-diffusion-img2vid-xt** or **THUDM/CogVideoX-5b** (HF, respective licenses).
- **Code stub:**
```python
import torch, torch.nn.functional as F
def temporal_consistency(frame_feats):             # frame_feats: (T, D) e.g. CLIP image embeds
    f = F.normalize(frame_feats, dim=-1)
    sims = (f[1:] * f[:-1]).sum(-1)                # cosine sim between consecutive frames
    return sims.mean().item()                      # higher = smoother / more consistent
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Generation | Coherent multi-second clips | Short/flickery | Fails |
| Consistency eval | Temporal metric + alignment | Frame quality only | None |
| Failure analysis | ≥2 modes catalogued | One | None |
| Limits | Compute/length honesty | Partial | Overclaims |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Blattmann et al., "Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets," 2023.
  - Ho et al., "Video Diffusion Models," *NeurIPS* 2022.
  - Peebles & Xie, "Scalable Diffusion Models with Transformers (DiT)," *ICCV* 2023.
  - Huang et al., "VBench: Comprehensive Benchmark Suite for Video Generative Models," *CVPR* 2024.

---

### State of the Art (June 2026)
- 2026 video models: **Sora 2, Veo 3.1, Kling 3.0, Seedance 2.0, Runway Gen-4.5, Wan 2.6** — native 4K, synchronized audio, multi-shot.
- The architecture to teach: **DiT over spatiotemporal latent patches**; eval = **VBench dimensions + FVD + temporal consistency**.
- Controllability (camera/motion, image-to-video) and physical consistency are the open problems.

**References & links:**
- [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [HF diffusers](https://github.com/huggingface/diffusers)

<!-- sota:12L07 -->

## Week 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations

**Altitude:** Builder → Engineer · **Anchor case:** a speech pipeline that transcribes audio (Whisper) and speaks responses (TTS) — the voice layer of a multimodal assistant.

### Learning goals
- Run and evaluate ASR with Whisper; compute Word Error Rate and reason about robustness (accents, noise, code-switching).
- Run modern TTS and evaluate intelligibility/naturalness; understand the mel-spectrogram + vocoder pipeline.
- Explain audio tokenization (neural codecs) enabling audio LLMs.

### Concept map
- **ASR & WER.** *Formula:* `WER=(S+D+I)/N` (substitutions+deletions+insertions over reference words). *Plain English:* edit distance between transcript and truth. *Common mistake:* comparing WER across datasets of different difficulty; normalize text first.
- **Mel-spectrogram pipeline.** Plain English: audio → mel-spectrogram (time-frequency image) → model; TTS goes text → mel → waveform via a vocoder. Common mistake: mismatched sample rates / mel configs.
- **Neural audio codecs.** Plain English: encode audio into discrete tokens (EnCodec/SoundStream) so transformers can model speech/music like text. Where it matters: audio LLMs and any-to-any (Week 9).
- **Robustness slices.** Plain English: WER explodes on accents, noise, domain terms. Where it matters: deployment honesty. Common mistake: reporting clean-speech WER only.

### Hands-on build (the lab)
- Transcribe a **LibriSpeech** subset with Whisper; compute WER overall and on a noisy/accented slice; compare model sizes.
- Run a modern **TTS** (XTTS-v2/Parler/Kokoro) on generated text; do a small MOS-style listening rubric.
- **Deliverable:** `builds/audio/` with WER tables (incl. a hard slice), TTS samples, and a robustness note. **Acceptance:** WER reported with a slice; TTS intelligibility rated.

▶ **Practical project:** `VizuaraAI/audio-llm` — build the Whisper ASR→WER + TTS pipeline and evaluate a noisy/accented slice.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install openai-whisper jiwer torchaudio`; clone the repo; load a LibriSpeech subset + MUSAN noise.
2. **ASR:** transcribe `test-clean`; compute WER with identical normalization on both sides.
3. **Slice:** add noise/accent; compute the WER gap; compare Whisper sizes.
4. **TTS:** run XTTS-v2/Kokoro on generated text; do a small MOS listening rubric.
5. **Report:** WER tables (incl. the hard slice) + TTS samples + a robustness note.
- **Artifact:** `builds/audio/asr-eval.md` + TTS samples + listening rubric.
- **Use `$asr-robustness-eval`:** overall + noise/accent-sliced WER + a normalization note.
- **Done when:** WER reported with a slice and TTS intelligibility rated.
- **Stretch:** add an EnCodec/Mimi audio-token round-trip and inspect quality.

### Harness / reusable skill — `$asr-robustness-eval`
- **Purpose:** evaluate a speech system beyond clean-set WER.
- **Inputs:** an ASR model + audio sets. **Required outputs:** overall WER, noise/accent-sliced WER, and a normalization note. **Evidence artifact:** `asr-eval.md`.

### Common failure modes
- **Clean-only WER** → false confidence. *Fix:* noisy/accented slices.
- **Text-normalization mismatch** → inflated WER. *Fix:* normalize both sides identically.
- **Sample-rate/mel mismatch** → garbage TTS/ASR. *Fix:* assert config (16 kHz etc.).
- **No human check on TTS** → metric-only naturalness. *Fix:* small listening rubric.

### Evidence artifact
`builds/audio/asr-eval.md` + TTS samples + listening rubric.

### Skill sink-in
Predict the WER gap between clean and noisy speech for your Whisper size. Measure both. Record the gap and which errors dominate (D/I/S).

### Depth upgrade
- **Dataset:** LibriSpeech — openslr.org/12 / huggingface.co/datasets/openslr/librispeech_asr (~1000 hrs, ~60 GB full; use `test-clean`/`test-other` ~5 GB, CC BY 4.0). Robustness: add noise from **MUSAN** (openslr.org/17, CC BY 4.0).
- **Code stub:**
```python
import whisper, jiwer
model = whisper.load_model("base")
def transcribe_wer(audio_path, reference):
    hyp = model.transcribe(audio_path)["text"]
    norm = jiwer.Compose([jiwer.ToLowerCase(), jiwer.RemovePunctuation(),
                          jiwer.RemoveMultipleSpaces(), jiwer.Strip()])
    return jiwer.wer(norm(reference), norm(hyp))    # normalize BOTH sides
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| ASR eval | WER + hard slice + normalization | WER only | Wrong norm |
| TTS | Intelligible + rated | Runs | Fails |
| Robustness | Noise/accent quantified | Mentioned | Ignored |
| Codec grasp | Explains audio tokens | Partial | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Radford et al., "Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)," *ICML* 2023.
  - Défossez et al., "High Fidelity Neural Audio Compression (EnCodec)," *TMLR*, 2023.
  - Wang et al., "Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers (VALL-E)," 2023.
  - Panayotov et al., "LibriSpeech: An ASR corpus based on public domain audiobooks," *ICASSP* 2015.

---

### State of the Art (June 2026)
- **Whisper-v3 / large** remain WER baselines; **neural codecs (EnCodec, DAC, Mimi/Moshi)** tokenize audio for audio-LLMs.
- 2026 TTS/voice: **ElevenLabs Eleven v3, XTTS-v2, Parler, Kokoro**; full-duplex speech models (Moshi-style) are the frontier.
- Robustness slices (accent/noise/code-switch) + identical text normalization on both sides are the eval discipline.

**References & links:**
- [`VizuaraAI/audio-llm`](https://github.com/VizuaraAI/audio-llm)
- [Radford et al., 2022 - Whisper](https://arxiv.org/abs/2212.04356)

<!-- sota:12L08 -->

## Week 9 — Any-to-Any & Unified Multimodal Models

**Altitude:** Engineer · **Anchor case:** assemble (and probe) a model/system that takes mixed image+text+audio in and produces mixed outputs — the architecture behind native multimodal frontier models.

### Learning goals
- Explain unified tokenization strategies (discrete tokens vs continuous embeddings, early vs late fusion) for any-to-any models.
- Build an app that routes/combines modalities (image understanding + text reasoning + speech I/O) into one experience.
- Reason about the trade-offs of native any-to-any vs. a pipeline of specialists.

### Concept map
- **Unified token space.** *Plain English:* convert every modality to tokens (image patches, audio codec tokens, text tokens) so one transformer handles all; outputs decoded per modality. *Common mistake:* assuming one tokenizer fits all — quality varies by modality.
- **Early vs late fusion.** Plain English: mix modalities at the input (early, native) vs combine outputs of specialists (late, pipeline). Where it matters: latency, quality, controllability trade-offs. Common mistake: building a brittle pipeline when a native model is simpler (or vice versa).
- **Interleaved generation.** Plain English: produce text and images in one stream (e.g., illustrated answers). Common mistake: ignoring alignment between generated modalities.
- **The specialist-vs-generalist trade-off.** Plain English: native models are flexible but each modality may lag a dedicated specialist; pick per requirement.

### Hands-on build (the lab)
- Build an any-to-any **system** (not necessarily one model): speech-in (Whisper) → VLM reasoning over an image → text + optional image/speech out, orchestrated with the Claude Agent SDK / a router.
- Compare it against a single native multimodal model on the same tasks; document where each wins.
- **Deliverable:** `builds/any2any/` with the system, a head-to-head comparison, and a fusion-strategy note. **Acceptance:** working multimodal round-trip; pipeline-vs-native comparison with a recommendation.

▶ **Practical project:** `Shubhamsaboo/awesome-llm-apps` — assemble a speech→VLM→speech any-to-any pipeline and compare it head-to-head with a native multimodal model.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/Modal; `pip install openai-whisper transformers gradio`; clone the repo; pick a multimodal app.
2. **Pipeline:** speech-in (Whisper) → VLM reasoning over an image → text + optional speech out, via an agent SDK / router.
3. **Native:** compare against a single native model (Qwen2.5-Omni) on the same tasks.
4. **Measure:** per-modality quality, end-to-end latency, failures at modality boundaries.
5. **Recommend:** a native-vs-pipeline write-up.
- **Artifact:** `builds/any2any/any2any-eval.md` + head-to-head comparison.
- **Use `$modality-router-eval`:** routing/fusion quality + latency + a native-vs-pipeline recommendation.
- **Done when:** a working multimodal round-trip + a data-backed recommendation.
- **Stretch:** add interleaved text+image output and check cross-modal alignment.

### Harness / reusable skill — `$modality-router-eval`
- **Purpose:** evaluate a multimodal system's routing/fusion choices.
- **Inputs:** a multimodal system + task set. **Required outputs:** per-modality quality, end-to-end latency, failure cases at modality boundaries, and a native-vs-pipeline recommendation. **Evidence artifact:** `any2any-eval.md`.

### Common failure modes
- **Boundary errors** → information lost between stages. *Fix:* test the seams, not just components.
- **Latency blowup** → too many model hops. *Fix:* measure end-to-end, prune the chain.
- **Native-model dogma** → using a generalist where a specialist is far better. *Fix:* head-to-head per modality.
- **Unaligned interleaved outputs** → text and image disagree. *Fix:* cross-check generated modalities.

### Evidence artifact
`builds/any2any/any2any-eval.md` + head-to-head comparison.

### Skill sink-in
Predict whether the native model or your specialist-pipeline wins on image-grounded VQA. Test both. Record the winner and the cost you paid.

### Depth upgrade
- **Dataset:** a small custom multimodal task set (image+question+spoken query) you assemble; reuse COCO images + recorded prompts. Reference model: **Qwen2.5-Omni** / **AnyGPT**-style checkpoints (HF, respective licenses) for the native comparison.
- **Code stub:**
```python
# pipeline any-to-any: speech -> vision-language -> speech
def multimodal_turn(audio_path, image):
    question = whisper_model.transcribe(audio_path)["text"]   # audio -> text
    answer = vlm_answer(image, question)                      # image+text -> text
    speak(answer)                                             # text -> audio (TTS)
    return {"question": question, "answer": answer}
# native: one model.generate() over [audio_tokens, image_tokens, text_tokens]
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Round-trip | All modalities, robust seams | Works, brittle | Breaks |
| Comparison | Native vs pipeline w/ data | One system | None |
| Latency | Measured end-to-end | Component only | None |
| Recommendation | Justified by requirements | Stated | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Team Chameleon (Meta), "Chameleon: Mixed-Modal Early-Fusion Foundation Models," 2024.
  - Zhan et al., "AnyGPT: Unified Multimodal LLM with Discrete Sequence Modeling," *ACL* 2024.
  - Wu et al., "NExT-GPT: Any-to-Any Multimodal LLM," *ICML* 2024.
  - Xu et al., "Qwen2.5-Omni Technical Report," 2025.

---

### State of the Art (June 2026)
- **Natively-multimodal frontier models** (Gemini 3.1 Pro, GPT-5.5, Qwen3-Omni) do any-to-any in one model; **early-fusion (Chameleon-style)** is the architecture lens.
- The 2026 question is **native generalist vs specialist pipeline** orchestrated by an agent SDK / **MCP** tools.
- Interleaved text+image generation and unified token spaces are the standard framing.

**References & links:**
- [`Shubhamsaboo/awesome-llm-apps`](https://github.com/Shubhamsaboo/awesome-llm-apps)
- [Radford et al., 2022 - Whisper](https://arxiv.org/abs/2212.04356)

<!-- sota:12L09 -->

## Week 10 — World Models: Learning Simulators (IRIS, Genie-style)

**Altitude:** Engineer → Specialist · **Anchor case:** train/run a world model that predicts future frames/observations given actions — a learned simulator an agent can plan or train inside.

### Learning goals
- Explain world models: encode observations to latents, model dynamics over latents conditioned on actions, decode predictions.
- Train a small world model (or run IRIS/DreamerV3-style) in a simple environment and evaluate rollout fidelity.
- Connect world models to model-based RL, video generation, and "neural game engines" (Genie).

### Concept map
- **Latent dynamics.** *Plain English:* learn a compact latent of the world and a transition model `z_{t+1}=f(z_t,a_t)`; predict/imagine futures without the real simulator. *Common mistake:* modeling raw pixels directly (expensive, unstable) instead of latents.
- **Transformer/tokenized world models (IRIS).** Plain English: tokenize observations (discrete autoencoder) and model dynamics autoregressively like a language model over world-tokens. Where it matters: sample-efficient Atari. Common mistake: ignoring compounding error.
- **Action-conditioned generation (Genie).** Plain English: a controllable video model where a learned latent action drives the next frame — a generative, playable world. Common mistake: confusing uncontrolled video gen with an action-conditioned world model.
- **Compounding error / rollout horizon.** Plain English: small per-step errors accumulate; long imagined rollouts drift. Where it matters: planning horizon, evaluation.

### Hands-on build (the lab)
- Run a tokenized world model (IRIS or a DreamerV3 latent model) on an Atari/`gym` environment, or train a small action-conditioned next-frame predictor; measure rollout prediction error vs horizon.
- **Deliverable:** `builds/world-model/` with rollout predictions, an error-vs-horizon curve, and a planning/imagination demo. **Acceptance:** rollouts shown; compounding-error curve plotted; one use (planning or data-augmentation) demonstrated.

▶ **Practical project:** `VizuaraAI/vla-driving-simulation` — train/run an action-conditioned world model and plot rollout error vs horizon.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch gymnasium ale-py`; clone the repo; collect `(obs, action, next_obs)` trajectories.
2. **Train:** a tokenized/latent action-conditioned next-frame world model (IRIS/DreamerV3-style).
3. **Rollout:** imagine multi-step futures from a start latent.
4. **Error curve:** plot per-step + cumulative prediction error vs horizon; find the drift point.
5. **Use:** demo one use (planning or data augmentation).
- **Artifact:** `builds/world-model/rollout-eval.md` + error-vs-horizon curve + demo.
- **Use `$rollout-eval`:** per-step/cumulative error + a trustworthy-horizon estimate.
- **Done when:** rollouts shown, the compounding-error curve plotted, one use demonstrated.
- **Stretch:** compare a video-diffusion world-model framing.

### Harness / reusable skill — `$rollout-eval`
- **Purpose:** evaluate a world model's predictive fidelity over time.
- **Inputs:** a world model + real trajectories. **Required outputs:** per-step and cumulative prediction error, an error-vs-horizon curve, and a "trustworthy horizon" estimate. **Evidence artifact:** `rollout-eval.md`.

### Common failure modes
- **Pixel-space dynamics** → unstable, costly. *Fix:* latent/token dynamics.
- **Ignoring compounding error** → fantasy long rollouts. *Fix:* error-vs-horizon curve, cap the horizon.
- **No action conditioning** → it's just video gen. *Fix:* condition transitions on actions.
- **Overfit to one trajectory** → no generalization. *Fix:* held-out trajectories/seeds.

### Evidence artifact
`builds/world-model/rollout-eval.md` + error-vs-horizon curve + demo.

### Skill sink-in
Predict how many steps your world model stays accurate before drifting. Roll out and measure. Record the trustworthy horizon.

### Depth upgrade
- **Dataset:** environment rollouts from **Atari 100k** / `gymnasium` (Atari ROMs via `ale-py`, free for research) or **DMControl**; collect your own `(obs, action, next_obs)` trajectories.
- **Code stub:**
```python
import torch
@torch.no_grad()
def imagine(world, z0, actions):                   # latent rollout
    z, preds = z0, []
    for a in actions:
        z = world.dynamics(z, a)                   # z_{t+1} = f(z_t, a_t)
        preds.append(world.decode(z))
    return preds
def horizon_error(world, traj):                    # compounding error vs ground truth
    z = world.encode(traj.obs[0]); errs = []
    for t, a in enumerate(traj.actions):
        z = world.dynamics(z, a)
        errs.append(((world.decode(z) - traj.obs[t+1]) ** 2).mean().item())
    return errs                                    # plot to find drift point
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| World model | Latent dynamics + actions | Runs | Broken |
| Rollout eval | Error-vs-horizon curve | Single-step only | None |
| Use demo | Planning or data-aug shown | Mentioned | None |
| Honesty | States trustworthy horizon | Partial | Overclaims |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Micheli, Alonso & Fleuret, "Transformers are Sample-Efficient World Models (IRIS)," *ICLR* 2023.
  - Hafner et al., "Mastering Diverse Domains through World Models (DreamerV3)," 2023.
  - Bruce et al., "Genie: Generative Interactive Environments," *ICML* 2024.
  - Ha & Schmidhuber, "World Models," *NeurIPS* 2018.

---

### State of the Art (June 2026)
- 2026 world models: **Genie 3** (real-time playable interactive worlds), **DreamerV3**, **IRIS/tokenized**, and **video-diffusion-as-world-model** (the dominant framing).
- Action-conditioned generation + **compounding-error / rollout-horizon** evaluation is the core discipline; ties to robotics/VLA (S13).
- "Neural game engines" and model-based RL inside learned simulators are the frontier.

**References & links:**
- [`VizuaraAI/vla-driving-simulation`](https://github.com/VizuaraAI/vla-driving-simulation)
- [Micheli et al., 2022 - IRIS](https://arxiv.org/abs/2209.00588)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:12L10 -->

## Week 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems

**Altitude:** Engineer · **Anchor case:** a visual document assistant that retrieves over images+text and answers with grounded, hallucination-checked responses — and can call tools (OCR, zoom, search).

### Learning goals
- Build multimodal retrieval (image+text embeddings, ColPali-style document retrieval) and grounded generation.
- Add tool-use/agentic behavior (OCR, crop/zoom, web/DB lookup) via the Claude Agent SDK / MCP.
- Evaluate grounding and hallucination for multimodal answers and add a "can't see it" guardrail.

### Concept map
- **Multimodal retrieval.** *Plain English:* embed images and queries in a shared space (CLIP) or retrieve document *pages as images* (ColPali/late-interaction) to skip lossy OCR. *Common mistake:* OCR-then-text RAG that drops layout/figures.
- **Grounded multimodal generation.** Plain English: the answer must cite the retrieved image region/page; "show me where" is the test. Common mistake: confident answers about un-retrieved content.
- **Agentic tools for vision.** Plain English: let the model zoom, OCR, or search when the image is ambiguous — multi-step instead of one glance. Where it matters: documents, charts, fine print.
- **Multimodal hallucination guardrail.** Plain English: detect and refuse when the requested content isn't in the image/retrieval. Common mistake: no abstention path.

### Hands-on build (the lab)
- Build a multimodal-RAG assistant over a document image set (**DocVQA / InfographicVQA**) with image-page retrieval + grounded answering; add an agentic zoom/OCR tool and an abstention guardrail.
- Evaluate with answer accuracy + a grounding/hallucination check (judge or POPE-style) and report the abstention behavior.
- **Deliverable:** `builds/mm-rag/` with the agent, a grounding eval, and a hallucination/abstention report. **Acceptance:** grounded citations to image regions/pages; hallucination rate measured; abstention works on out-of-document queries.

▶ **Practical project:** `NirDiamant/RAG_Techniques` — build multimodal/agentic RAG with ColPali-style retrieval + a grounding/abstention guardrail.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/Modal; `pip install colpali-engine transformers qdrant-client`; clone the repo; load DocVQA/InfographicVQA.
2. **Retrieve:** ColPali-style page-image retrieval (no OCR) over the document set.
3. **Ground:** grounded answering with region/page citations.
4. **Agentic:** add a zoom/OCR tool + an abstention ("can't see it") guardrail.
5. **Eval:** answer accuracy + a grounding/hallucination check; report abstention on OOD queries.
- **Artifact:** `builds/mm-rag/mm-grounding.md` + abstention report.
- **Use `$mm-grounding-eval`:** grounding rate + hallucination rate + abstention correctness.
- **Done when:** grounded citations to pages, hallucination rate measured, abstention works on OOD.
- **Stretch:** add a reranker (voyage-multimodal-3) and re-measure grounding.

### Harness / reusable skill — `$mm-grounding-eval`
- **Purpose:** verify multimodal answers are grounded in retrieved visual evidence.
- **Inputs:** answers + retrieved images/regions. **Required outputs:** grounding rate, hallucination rate, abstention correctness, and the worst ungrounded case. **Evidence artifact:** `mm-grounding.md`.

### Common failure modes
- **OCR-only RAG** → loses figures/layout. *Fix:* image-page retrieval (ColPali).
- **Ungrounded answers** → invented chart values. *Fix:* region citations + `$mm-grounding-eval`.
- **No abstention** → answers about absent content. *Fix:* "can't see it" guardrail, tested with OOD queries.
- **Single-glance failure** → misses fine print. *Fix:* agentic zoom/OCR tool.

### Evidence artifact
`builds/mm-rag/mm-grounding.md` + abstention report.

### Skill sink-in
Predict your hallucination rate on out-of-document questions before adding the guardrail. Measure with and without. Record the improvement.

### Depth upgrade
- **Dataset:** DocVQA — docvqa.org / huggingface.co/datasets/lmms-lab/DocVQA (50k questions on document images, research license); InfographicVQA (same site). Retrieval model: **vidore/colpali** (HF, Gemma license) or CLIP for image embeddings.
- **Code stub:**
```python
# image-page retrieval + grounded answer + abstention
def mm_rag_answer(query, page_images, retriever, vlm, threshold=0.25):
    scores = retriever.score(query, page_images)         # late-interaction / CLIP sim
    top = max(range(len(scores)), key=lambda i: scores[i])
    if scores[top] < threshold:
        return {"answer": "I can't find that in the document.", "grounded": False}
    ans = vlm.answer(page_images[top], query)
    return {"answer": ans, "page": top, "grounded": True}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Retrieval | Image-page/late-interaction | OCR-text RAG | None |
| Grounding | Region/page citations | Answer only | Ungrounded |
| Hallucination | Rate + abstention works | Measured only | Ignored |
| Agentic tools | Zoom/OCR used effectively | Present | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Faysse et al., "ColPali: Efficient Document Retrieval with Vision Language Models," *ICLR* 2025.
  - Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," *NeurIPS* 2020.
  - Mathew et al., "DocVQA: A Dataset for VQA on Document Images," *WACV* 2021.
  - Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," *ICLR* 2023.

---

### State of the Art (June 2026)
- **ColPali / ColQwen3 page-image retrieval** (no OCR) + **agentic RAG** (zoom/OCR/search tools via the Claude Agent SDK / MCP) is the 2026 stack.
- Rerankers (**Cohere Rerank 3.5, voyage-multimodal-3**) + grounded answering with **region/page citations**; abstention ("can't see it") is required.
- Multimodal hallucination evals (POPE-style / LLM-judge) gate deployment.

**References & links:**
- [`NirDiamant/RAG_Techniques`](https://github.com/NirDiamant/RAG_Techniques)
- [Faysse et al., 2024 - ColPali](https://arxiv.org/abs/2407.01449)
- [Lewis et al., 2020 - RAG](https://arxiv.org/abs/2005.11401)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Qdrant](https://github.com/qdrant/qdrant)

<!-- sota:12L11 -->

## Week 12 — Capstone: A Multimodal App + a Small Diffusion Model

**Altitude:** Engineer · **Anchor case:** your two coupled artifacts, shipped and honestly evaluated.

### Learning goals
- Integrate generation (your diffusion/flow model) and understanding (your VLM assistant) into one demoed system.
- Report every result against a baseline with the right metric (FID/CLIPScore for generation; accuracy + grounding/hallucination for understanding).
- Defend the design and name the failure modes.

### Concept map (as a build checklist)
- Generation: trained model → sample grid → FID vs baseline → memorization check. Understanding: VLM app → capability slices → grounding/hallucination eval → abstention guardrail. Integration: one demo, one report, traceable claims.

### Hands-on build (the lab)
- Finish **M3** (multimodal-RAG/agent hardening) and **M4** (demo + report) coupling (A) the diffusion model and (B) the assistant.
- Build a single Gradio demo and a report where every number cites an artifact.
- **Deliverable:** `capstone/` with both artifacts, evals, demo, and report. **Acceptance:** the capstone checklist (top of file) is fully satisfied.

▶ **Practical project:** `VizuaraAI/infertutor-arena-capstone` — ship the coupled diffusion-model + served VLM app with honest evals as the capstone.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Modal/Colab; full stack (`diffusers`, `transformers`, `gradio`); clone the capstone repo.
2. **Generation:** finish your from-scratch diffusion/flow model → sample grid → FID vs baseline → memorization check.
3. **Understanding:** the VLM app → capability slices → grounding/hallucination eval → abstention guardrail.
4. **Integrate:** one Gradio demo coupling both; every number cites an artifact.
5. **Report:** sample grids + FID/CLIPScore + capability/grounding tables + a failure catalog.
- **Artifact:** `capstone/` (both artifacts + evals + demo + `report.md`).
- **Use `$multimodal-capstone-packet`:** assemble generation + understanding evidence into one bundle.
- **Done when:** FID with a baseline + a grounding metric + ≥1 failure slice, every claim traceable.
- **Stretch:** serve the VLM on vLLM and report served latency.

### Harness / reusable skill — `$multimodal-capstone-packet`
- **Purpose:** assemble generation + understanding evidence into one reviewable bundle.
- **Inputs:** both artifacts + evals. **Required outputs:** sample grids + FID/CLIPScore, capability + grounding tables, failure catalog, and a demo. **Evidence artifact:** `capstone/report.md`.

### Common failure modes
- **API-demo masquerading as understanding** → no from-scratch evidence. *Fix:* the diffusion model must be trained/substantially fine-tuned by you.
- **Metric without baseline** → unanchored numbers. *Fix:* every metric gets a baseline.
- **Hidden hallucination** → fluent demo, no grounding eval. *Fix:* grounding/hallucination report is mandatory.

### Evidence artifact
`capstone/` (both artifacts + evals + demo + report).

### Skill sink-in
Write down the FID and the grounding rate you *expect* before the final eval. Run it. The gaps are the lesson — record them.

### Depth upgrade
- **Dataset:** CIFAR-10/CelebA (generation) + your chosen VQA/DocVQA slice (understanding).
- **Code stub:**
```python
ACCEPT = {
  "fid_reported": lambda r: r.get("fid") is not None and r.get("fid_baseline") is not None,
  "sample_grid":  lambda r: r.get("sample_grid_path") is not None,
  "grounding":    lambda r: r.get("grounding_rate") is not None,
  "failure_slice":lambda r: len(r.get("failure_slices", [])) >= 1,
}
def capstone_gate(report): return {k: f(report) for k, f in ACCEPT.items()}
```
- **Graded rubric table (part of the 30% capstone):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Generation | From-scratch, FID vs baseline | Fine-tuned only | API call |
| Understanding | Grounded + capability slices | Works, weak eval | Demo only |
| Integration | Coherent single system | Two disjoint demos | Pieces |
| Honesty | Failures + baselines throughout | Partial | Vibes |

- **Assessment weight:** the 30% capstone.
- **Readings:**
  - Bommasani et al., "On the Opportunities and Risks of Foundation Models," 2021 (multimodal sections).
  - Yin et al., "A Survey on Multimodal Large Language Models," 2024.
  - Mitchell et al., "Model Cards for Model Reporting," *FAccT* 2019.
  - Chip Huyen, "AI Engineering," 2025 (evaluation & deployment chapters).

---

### State of the Art (June 2026)
- A coupled deliverable: a **from-scratch DiT / flow-matching generator (FID + memorization check)** + a **VLM assistant with grounding/hallucination eval and abstention**.
- Frontier reference points: **FLUX.1** (open image), **Qwen3-VL** (open VLM), **Gemini 3.1 Pro** (multimodal frontier).
- Every metric is reported against a baseline; an honest failure-mode catalog is the bar.

**References & links:**
- [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone)
- [vLLM docs](https://docs.vllm.ai)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [HF diffusers](https://github.com/huggingface/diffusers)

<!-- sota:12L12 -->

## Course-level outcomes

By the end you can: implement a Vision Transformer, a CLIP contrastive loss, a DDPM, and a flow-matching generator **from scratch**; fine-tune and evaluate VLMs while catching object hallucination; build text-to-image, video, audio, any-to-any, world-model, and multimodal-RAG systems; and — most importantly — evaluate generative and multimodal systems *honestly* (FID/CLIPScore with baselines, grounding/hallucination checks, capability slices). You leave with a reusable harness — `$from-scratch-verifier`, `$contrastive-eval`, `$vlm-probe`, `$generative-eval`, `$t2i-eval`, `$sampler-benchmark`, `$video-consistency-eval`, `$asr-robustness-eval`, `$modality-router-eval`, `$rollout-eval`, `$mm-grounding-eval`, `$multimodal-capstone-packet` — plus two shipped artifacts.

## Skills produced (reused program-wide)
`$from-scratch-verifier` · `$contrastive-eval` · `$vlm-probe` · `$generative-eval` · `$t2i-eval` · `$sampler-benchmark` · `$video-consistency-eval` · `$asr-robustness-eval` · `$modality-router-eval` · `$rollout-eval` · `$mm-grounding-eval` · `$multimodal-capstone-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/Transformers-for-vision-BOOK` — vision-transformer internals from the ground up; the reference for your from-scratch ViT — Lecture 1.
- `VizuaraAILabs/Principles-of-Diffusion-Models` — diffusion from first principles; the DDPM/forward-reverse derivations you implement — Lectures 4–5.
- `VizuaraAI/audio-llm` — an audio-LLM walkthrough (codec tokens → speech modeling) for the ASR/TTS and any-to-any weeks — Lectures 8–9.
- `VizuaraAI/infertutor-arena-capstone` — Modal + vLLM + Qwen-VL served VLM; a worked multimodal serving reference — Lectures 3, 12.
- `VizuaraAI/vla-driving-simulation` — an action-conditioned VLA/world-model build to ground rollout/world-model evaluation — Lecture 10.

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **VLA / world-model reading lab** — robotics-policy / world-model evaluation with a safety analysis — *Lectures 10–11*.



# Part C — Reinforcement Learning, Robotics & Embodied AI

**Track:** Decision-Making & Embodiment · **Altitude:** Engineer → Specialist · **Length:** 14 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 01 (math/ML from scratch), Subject 02 (deep learning), and comfort with PyTorch, autograd, and training loops. Subject 11/12 (LLM fine-tuning, agents) recommended before the RLHF/GRPO/agentic-RL block (Weeks 8–10).
**Pedagogy:** Vizuara *"Reinforcement Learning in Production"* DQN→PPO→GRPO/DPO lineage, built component-by-component, fused with Stanford CS234 (theory) and MIT 6.S890 (multi-agent), under the source book's `concept → code → critique → reflection → rebuild` loop and the `prompt → workflow → skill → harness` ladder. You implement every algorithm once in NumPy/PyTorch on a tiny environment before reaching for a library.

**Course anchor cases (carried all 14 weeks):**
1. **`CartPole`/`LunarLander` control** — the "does my agent learn at all" smoke test that every algorithm must pass first.
2. **`MetaDrive` autonomous-driving** — a high-dimensional, partially observed, sim-to-real-flavored continuous-control case carried from policy gradients through robotics.
3. **`SWE-RL` coding agent** — the agentic-RL case where the "environment" is a repo + test suite, used to ground RLVR, GRPO, and the agentic capstone.

**What you leave with:** a personal `rl-embodied/` repo containing from-scratch implementations of value iteration, DQN(+Rainbow), PPO, GAE, an offline-RL learner, a GRPO trainer, a VLA fine-tune, eight reusable skills, an evidence log, and one shipped agentic-RL capstone with a reward-hacking audit.

---


## Week 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** a 4×4 `FrozenLake`-style gridworld where you can read every value by hand and check the math.

### Learning goals
- State the MDP tuple `(S, A, P, R, γ)` and explain each component on the gridworld.
- Derive and implement policy evaluation, policy iteration, and value iteration from scratch (no RL library).
- Explain why the Bellman optimality operator is a γ-contraction and what that guarantees about convergence.
- Distinguish *planning* (model known) from *learning* (model unknown) and say which weeks use which.

### Concept map
- **Markov Decision Process.** Plain English: a world where the next state depends only on the current state and action, not history. Where it matters: it is the substrate of *every* later algorithm. Common mistake: using a non-Markov state (e.g., position without velocity) and blaming the algorithm.
- **Return & discounting.** *Formula:* `G_t = Σ_{k=0}^∞ γ^k r_{t+k+1}`. *Symbols:* `γ∈[0,1)` discount, `r` reward. *Shapes:* `G_t` scalar per trajectory. *Plain English:* total future reward, with later reward worth less. *Tiny example:* rewards `[0,0,1]`, `γ=0.9` → `G_0=0.81`. *Code mapping:* `G = sum((gamma**k)*r[k] for k in range(len(r)))`. *Common mistake:* using `γ=1` in a continuing task and getting infinite returns.
- **State-value & action-value.** *Formula:* `V^π(s)=E_π[G_t|s_t=s]`, `Q^π(s,a)=E_π[G_t|s_t=s,a_t=a]`. *Shapes:* `V:(|S|,)`, `Q:(|S|,|A|)`. *Plain English:* expected return from a state (or state-action) under a policy. *Common mistake:* conflating `V` (follows π everywhere) with `Q` (one fixed first action, then π).
- **Bellman optimality.** *Formula:* `V*(s)=max_a [R(s,a)+γ Σ_{s'} P(s'|s,a)V*(s')]`. *Plain English:* the value of acting optimally now and forever after. *Code mapping:* the inner `max` over a `(|A|,|S|)` array. *Common mistake:* forgetting the `γ Σ P V'` bootstrap term and treating it as a bandit.
- **Contraction & convergence.** Why it matters: value iteration is *guaranteed* to converge because the Bellman operator shrinks distances by factor `γ`.

### Hands-on build (the lab)
- `mdp.py`: represent the gridworld as explicit `P[s,a,s']` and `R[s,a]` arrays.
- `dp.py`: implement `policy_evaluation`, `policy_iteration`, `value_iteration`; assert the two converge to the same `V*` within `1e-8`.
- Plot the value function as a heatmap over the grid; verify the greedy policy "flows" to the goal.
- **Deliverable:** `python value_iteration.py` prints `V*` and the optimal policy; **Acceptance:** policy iteration and value iteration agree; greedy policy reaches goal with prob 1 on the deterministic grid.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — implement value & policy iteration on the tutorial gridworld and assert both converge to the same V*.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local CPU or Colab; `pip install gymnasium numpy matplotlib`; clone `VizuaraAILabs/OpenClaw-RL-Tutorial`.
2. **Model the MDP:** encode the gridworld as explicit `P[s,a,s']` and `R[s,a]` arrays (cross-check with `FrozenLake-v1`).
3. **Implement DP:** code `policy_evaluation`, `policy_iteration`, `value_iteration` from scratch — no RL library.
4. **Cross-check:** assert PI and VI converge to the same `V*` within `1e-8`; unit-test against a hand-computed 2-state MDP.
5. **Visualize:** plot `V*` as a heatmap and confirm the greedy policy flows to the goal.
6. **Reason about γ:** sweep `γ∈{0.5,0.9,0.99}` and record how horizon `1/(1-γ)` changes the policy.
- **Artifact:** runnable `value_iteration.py` + heatmap + convergence log committed to `rl-embodied/`.
- **Use `$mdp-modeler`:** write the `(S,A,P,R,γ)` spec + one Markov-violation risk before coding.
- **Done when:** PI==VI to 1e-8; greedy policy reaches goal; γ/horizon reasoning recorded.
- **Stretch:** add a stochastic (slippery) variant and show how it changes `V*`.

### Harness / reusable skill — `$mdp-modeler`
- **Purpose:** turn any informal control problem into an explicit MDP spec before coding.
- **Inputs:** a task description. **Required outputs:** state space, action space, transition assumptions, reward function, discount choice + justification, and one stated Markov-violation risk.
- **Minimal workflow:** name S → name A → write R → pick γ → flag the non-Markov risk. **Evidence artifact:** `evidence/week01-mdp-spec.md`.

### Common failure modes
- **Reward hacking the gridworld** → a shaped reward that rewards spinning in place. *Fix:* check the optimal policy reaches the goal, not just that reward is high.
- **Wrong γ** → myopic agent ignores the goal. *Fix:* reason about the horizon `1/(1-γ)` explicitly.
- **Non-Markov state** → DP "works" but learning later fails. *Fix:* write the `$mdp-modeler` Markov-risk line.
- **Off-by-one in the Bellman backup** → values look plausible but are wrong. *Fix:* unit-test against a hand-computed 2-state MDP.

### Evidence artifact
`evidence/week01-mdp-spec.md` + value heatmap + the policy/value-iteration agreement log.

### Skill sink-in
Predict the value of the start state under the optimal policy before running value iteration. Run it. Record the gap and what surprised you about discounting.

### Dataset / environment
**Gymnasium `FrozenLake-v1`** (deterministic and slippery variants) — https://gymnasium.farama.org/environments/toy_text/frozen_lake/ . Tiny tabular MDP, no license constraints (Farama, MIT-licensed).

### Code stub
```python
import numpy as np
def value_iteration(P, R, gamma=0.99, tol=1e-8):
    # P: (S,A,S) transition probs, R: (S,A) rewards
    S, A, _ = P.shape
    V = np.zeros(S)
    while True:
        Q = R + gamma * np.einsum("sap,p->sa", P, V)   # (S,A)
        V_new = Q.max(axis=1)
        if np.max(np.abs(V_new - V)) < tol:
            break
        V = V_new
    policy = Q.argmax(axis=1)                            # greedy
    return V, policy
```

### Graded rubric table
| Criterion | Excellent (A) | Adequate (C) | Failing |
|---|---|---|---|
| Correctness | VI & PI agree to 1e-8; matches hand-computed 2-state MDP | VI converges but not cross-checked | wrong Bellman backup |
| Evidence | heatmap + convergence log + MDP spec committed | partial artifacts | score only, no spec |
| Reasoning | γ/horizon and Markov risk justified | γ chosen without reason | no discussion |

### Assessment weight
**5%** of course grade.

### Reading list
- Bellman, *Dynamic Programming* (1957) — origin of the value recursion.
- Sutton & Barto, *Reinforcement Learning: An Introduction*, 2nd ed. (2018), Ch. 3–4.
- Puterman, *Markov Decision Processes* (1994), contraction-mapping treatment.
- Stanford CS234 (Winter 2026), Lecture 1–2 (MDPs, planning).

---

### State of the Art (June 2026)
- RLVR (RL with Verifiable Rewards) made the Bellman/advantage machinery the substrate under every 2026 reasoning model (DeepSeek-R1, GPT-5.5 thinking) — same value estimation, LLM-scale.
- Gymnasium 1.x (Farama) is the maintained API standard (`terminated`/`truncated`); MuJoCo is fully open-source (Apache-2.0).
- Tunable thinking-effort in Claude Opus 4.8 / Gemini 3.1 Pro is literally test-time planning depth — the MDP horizon as a product dial.

**References & links:**
- [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial)
- [Shao et al., 2024 - GRPO/RLVR](https://arxiv.org/abs/2402.03300)
- [DeepSeek-AI, 2025 - DeepSeek-R1](https://arxiv.org/abs/2501.12948)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:13L01 -->

## Week 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA

**Altitude:** Engineer · **Anchor case:** `FrozenLake` and `CliffWalking` where the model is now *hidden* — you only get samples.

### Learning goals
- Explain the difference between Monte Carlo (full-return) and temporal-difference (bootstrap) estimation.
- Implement tabular Q-learning (off-policy) and SARSA (on-policy) and explain why they differ on the cliff.
- Reason about the exploration–exploitation tradeoff with ε-greedy and explain why ε must decay.
- Stand up the course's Gymnasium harness with seeded, reproducible rollouts.

### Concept map
- **TD(0) update.** *Formula:* `V(s) ← V(s) + α[r + γV(s') − V(s)]`. *Symbols:* `α` step size, the bracket is the **TD error δ**. *Shapes:* scalars in the tabular case. *Plain English:* nudge your estimate toward a one-step bootstrapped target. *Code mapping:* `V[s] += alpha*(r + gamma*V[sp] - V[s])`. *Common mistake:* bootstrapping off a *terminal* state's value (should be 0).
- **Q-learning (off-policy).** *Formula:* `Q(s,a) ← Q(s,a)+α[r+γ max_{a'}Q(s',a') − Q(s,a)]`. *Plain English:* learn the optimal-policy value while behaving exploratorily. *Common mistake:* using the behavior action instead of `max` in the target.
- **SARSA (on-policy).** *Formula:* uses `Q(s',a')` for the *actually chosen* `a'`. *Plain English:* learn the value of the policy you actually follow (safer near cliffs).
- **Exploration.** ε-greedy, optimistic init; why GLIE (decaying ε) is needed for convergence. Common mistake: fixed ε=0.1 forever, so the agent never sharpens.
- **Bias–variance of targets.** MC: unbiased, high variance. TD: biased, low variance. The spectrum is n-step / λ-returns.

### Hands-on build
- `tabular.py`: Q-learning and SARSA sharing one ε-greedy/rollout harness.
- Reproduce the classic **cliff-walking divergence**: SARSA takes the safe path, Q-learning the risky optimal path.
- Log episode return curves (mean over 10 seeds) for both.
- **Deliverable:** return-curve plot + the cliff trajectory difference; **Acceptance:** Q-learning reaches optimal return, SARSA the safe sub-optimal return, both reproducibly over seeds.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — code tabular Q-learning vs SARSA on CliffWalking and reproduce the safe-vs-optimal path split over ≥5 seeds.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `pip install gymnasium numpy matplotlib`; envs `CliffWalking-v0` + `FrozenLake-v1`.
2. **Build the harness:** a seeded ε-greedy rollout loop returning `(s,a,r,s',done)` + return stats.
3. **Implement both learners:** tabular Q-learning (off-policy `max`) and SARSA (on-policy `a'`) sharing the harness.
4. **Schedule exploration:** decay ε→0.01; zero the bootstrap target on `done`.
5. **Reproduce the cliff split:** plot mean±std return over ≥5 seeds — Q-learning risky-optimal, SARSA safe.
6. **Stability check:** confirm same seed → same return (deterministic replay).
- **Artifact:** return-curve plot + cliff trajectories + seed-stability table in `rl-embodied/`.
- **Use `$rollout-harness`:** commit this seeded loop once — it is reused every later week.
- **Done when:** Q-learning optimal, SARSA safe-suboptimal, both reproducible over seeds.
- **Stretch:** add Expected-SARSA and compare target variance.

### Harness / reusable skill — `$rollout-harness`
- **Purpose:** a seeded, vectorizable environment-interaction loop reused all course.
- **Inputs:** env id, policy fn, n_episodes, seed. **Outputs:** trajectories `(s,a,r,s',done)`, return stats, and a deterministic-replay check.
- **Evidence artifact:** `evidence/week02-rollout/` with a seed-stability table (same seed → same return).

### Common failure modes
- **Unseeded env** → return curves uncomparable. *Fix:* seed env, action sampler, and torch/numpy.
- **No ε decay** → plateaus below optimal. *Fix:* schedule ε → 0.01.
- **Terminal bootstrap bug** → values inflate. *Fix:* zero the target on `done`.
- **Single-seed conclusions** → noise mistaken for signal. *Fix:* always ≥5 seeds with mean±std.

### Evidence artifact
`evidence/week02-rollout/` (return curves, cliff trajectories, seed-stability table).

### Skill sink-in
Predict which of SARSA/Q-learning walks the cliff edge. Run. Record why the on/off-policy distinction produced that behavior.

### Dataset / environment
**Gymnasium `CliffWalking-v0`** and **`FrozenLake-v1`** — https://gymnasium.farama.org/environments/toy_text/ . Tabular, Farama MIT license.

### Code stub
```python
def q_learning(env, episodes=500, alpha=0.5, gamma=0.99, eps=0.1):
    Q = np.zeros((env.observation_space.n, env.action_space.n))
    for ep in range(episodes):
        s, _ = env.reset(seed=ep)
        done = False
        while not done:
            a = env.action_space.sample() if np.random.rand() < eps else Q[s].argmax()
            sp, r, term, trunc, _ = env.step(a)
            done = term or trunc
            target = r + gamma * Q[sp].max() * (not term)   # zero on terminal
            Q[s, a] += alpha * (target - Q[s, a])
            s = sp
    return Q
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | Q-learning optimal, SARSA safe, ≥5 seeds | converges single-seed | terminal-bootstrap bug |
| Reproducibility | seed-stability table passes | partial seeding | nondeterministic |
| Reasoning | on/off-policy difference explained on cliff | states difference, no evidence | conflates the two |

### Assessment weight
**6%**.

### Reading list
- Watkins & Dayan, "Q-learning" (*Machine Learning*, 1992).
- Rummery & Niranjan, "On-line Q-learning using connectionist systems" (SARSA, 1994).
- Sutton & Barto (2018), Ch. 5–7 (MC, TD, n-step).
- Stanford CS234 (2026), Lecture 3–4 (model-free prediction/control).

---

### State of the Art (June 2026)
- TD/Q-learning targets are unchanged, but 2026 RLVR trainers (veRL, OpenRLHF) reuse the same advantage estimators at token level.
- The on/off-policy distinction now frames agentic-RL: stale-rollout drift in distributed trainers is the modern ‘cliff’.
- Gymnasium 1.x vectorized envs + seeded, multi-seed reporting are the de-facto reproducibility standard.

**References & links:**
- [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Shao et al., 2024 - GRPO/RLVR](https://arxiv.org/abs/2402.03300)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:13L02 -->

## Week 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow

**Altitude:** Engineer · **Anchor case:** `LunarLander-v3` and one Atari game (`Breakout`) — where tabular dies and function approximation is mandatory.

### Learning goals
- Explain why naive Q-learning with a neural net is unstable, and how replay + target networks fix it.
- Implement DQN from scratch, then add Double, Dueling, and prioritized replay; measure each increment.
- Read a "deadly triad" failure (bootstrapping + off-policy + function approx) from a diverging Q-value plot.
- Compose the Rainbow components and attribute the gain to each.

### Concept map
- **Q-network.** *Formula:* `Q(s,a;θ) ≈ Q*(s,a)`. *Shapes:* input `(B, obs_dim)`, output `(B, |A|)`. *Plain English:* a net that scores each action. *Common mistake:* applying it to continuous action spaces (DQN is discrete-action only).
- **Replay buffer + target net.** *Formula:* loss `L=(r+γ max_{a'}Q(s',a';θ⁻) − Q(s,a;θ))²`. *Symbols:* `θ⁻` frozen target params. *Plain English:* break correlation (replay) and freeze the moving target. *Common mistake:* using online params in the target → divergence.
- **Double DQN.** *Formula:* target `r+γ Q(s', argmax_{a'}Q(s',a';θ); θ⁻)`. *Plain English:* decouple action *selection* from *evaluation* to cut max-overestimation.
- **Dueling architecture.** *Formula:* `Q=V(s)+(A(s,a)−mean_a A)`. *Plain English:* separately estimate "how good is this state" and "how much better is this action."
- **Prioritized replay / n-step / distributional / noisy nets.** The six Rainbow ingredients; each addresses a distinct failure (sample efficiency, bias, value-distribution, exploration).

### Hands-on build
- `dqn.py`: replay buffer, target net, ε-greedy, Huber loss on `LunarLander`.
- Ablation: vanilla → +Double → +Dueling → +PER; one return curve per variant (3 seeds).
- **Deliverable:** ablation plot + a table attributing sample-efficiency gain to each component; **Acceptance:** DQN solves `LunarLander` (>200 mean return) and each ablation is reproducible.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — build DQN→Double→Dueling→PER on LunarLander and attribute each ablation’s sample-efficiency gain.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab T4 / local GPU; `pip install gymnasium[box2d] torch ale-py`.
2. **Baseline DQN:** replay buffer + target net + ε-greedy + Huber loss on `LunarLander-v3`.
3. **Add increments:** layer in Double → Dueling → Prioritized Replay; one return curve per variant (3 seeds).
4. **Diagnose divergence:** log Q-values; read a deadly-triad failure (exploding Q / overestimation) from the plot.
5. **Attribute gains:** table mapping each Rainbow component to its sample-efficiency delta.
6. **Validate:** DQN solves `LunarLander` (>200 mean return).
- **Artifact:** ablation curves + Q-divergence diagnosis + component-attribution table.
- **Use `$value-debugger`:** feed it Q/loss/return logs to name the firing deadly-triad symptom + cheapest fix.
- **Done when:** >200 return; each ablation reproducible; one divergence diagnosed.
- **Stretch:** add n-step returns and measure the bias/variance shift.

### Harness / reusable skill — `$value-debugger`
- **Purpose:** diagnose value-based divergence. **Inputs:** Q-value logs, loss, return. **Outputs:** which deadly-triad symptom is firing (exploding Q, overestimation, replay staleness) + cheapest fix.
- **Evidence artifact:** an annotated diverging-vs-stable Q-value plot.

### Common failure modes
- **No target network** → Q explodes. *Fix:* periodic/soft target updates.
- **Reward not clipped on Atari** → unstable scale. *Fix:* clip to [-1,1] / normalize.
- **Overestimation bias** → over-optimistic policy. *Fix:* Double DQN.
- **Tiny replay buffer** → catastrophic forgetting. *Fix:* size buffer to ≥10⁵ and warm-start.

### Evidence artifact
`evidence/week03-dqn/` (ablation curves, Q-divergence diagnosis, component-attribution table).

### Skill sink-in
Predict how much Double DQN reduces value overestimation before measuring `Q − actual return`. Run. Record the corrected bias.

### Dataset / environment
**Gymnasium `LunarLander-v3`** and **ALE/Atari `Breakout`** via `ale-py` — https://gymnasium.farama.org/environments/atari/ . Atari ROMs under the ALE license (research use); Box2D envs MIT.

### Code stub
```python
def dqn_loss(batch, q_net, target_net, gamma=0.99, double=True):
    s, a, r, sp, done = batch                       # tensors
    q_sa = q_net(s).gather(1, a.unsqueeze(1)).squeeze(1)   # (B,)
    with torch.no_grad():
        if double:
            a_star = q_net(sp).argmax(1, keepdim=True)
            q_next = target_net(sp).gather(1, a_star).squeeze(1)
        else:
            q_next = target_net(sp).max(1).values
        target = r + gamma * q_next * (1 - done.float())
    return F.smooth_l1_loss(q_sa, target)           # Huber
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | solves LunarLander >200, all ablations run | solves base only | diverges |
| Evidence | per-component attribution table + Q-divergence plot | curves only | score only |
| Reasoning | deadly-triad symptoms named & fixed | mentions instability | no diagnosis |

### Assessment weight
**7%**.

### Reading list
- Mnih et al., "Human-level control through deep RL" (DQN, *Nature* 2015).
- van Hasselt et al., "Deep RL with Double Q-learning" (AAAI 2016).
- Wang et al., "Dueling Network Architectures" (ICML 2016).
- Hessel et al., "Rainbow: Combining Improvements in Deep RL" (AAAI 2018).
- Schaul et al., "Prioritized Experience Replay" (ICLR 2016).

---

### State of the Art (June 2026)
- Value-based DQN is niche vs policy methods now, but Double-Q/distributional ideas resurface in 2026 verifier/critic models (RL^V, ~1.2–1.6× test-time gains).
- FlashAttention-4 (Blackwell) + FP8 KV-cache are serving defaults even for RL rollout/eval networks.
- Atari-100k sample-efficiency remains the canonical deep-RL smoke test.

**References & links:**
- [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial)
- [Dao et al., 2022 - FlashAttention](https://arxiv.org/abs/2205.14135)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Mnih et al., 2013 - DQN](https://arxiv.org/abs/1312.5602)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:13L03 -->

## Week 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C

**Altitude:** Engineer · **Anchor case:** `CartPole` (discrete) then `MetaDrive` (continuous) — where we need policies that *output actions directly*.

### Learning goals
- Derive the policy-gradient theorem and explain why REINFORCE is unbiased but high-variance.
- Implement REINFORCE with and without a value baseline; show the variance reduction.
- Build an advantage actor-critic (A2C) and explain the actor/critic division of labor.
- Explain why policy methods handle continuous actions where DQN cannot.

### Concept map
- **Policy-gradient theorem.** *Formula:* `∇_θ J = E_π[∇_θ log π_θ(a|s) · G_t]`. *Symbols:* `π_θ` parameterized policy, `G_t` return. *Shapes:* gradient has param shape. *Plain English:* push up the log-prob of actions that led to high return. *Code mapping:* `(-logp * returns).mean().backward()`. *Common mistake:* forgetting the `log` (using prob, not log-prob) → wrong gradient.
- **Baseline / advantage.** *Formula:* `A_t = G_t − V(s_t)`. *Plain English:* "was this action better than average from here?" — subtracting a baseline cuts variance without adding bias. *Common mistake:* letting the baseline depend on the action (introduces bias).
- **Actor-Critic.** *Formula:* actor uses `A`, critic minimizes `(G_t − V(s))²`. *Plain English:* the critic estimates the baseline the actor needs. *Common mistake:* sharing too much between actor/critic so the critic destabilizes the actor.
- **Continuous policies.** *Formula:* `a ~ N(μ_θ(s), σ_θ(s))`. *Plain English:* output a distribution over actions; sample and reparameterize. *Common mistake:* unbounded σ → exploding actions.

### Hands-on build
- `pg.py`: REINFORCE on `CartPole`; add a learned-value baseline; plot variance of the gradient estimate.
- `a2c.py`: synchronous advantage actor-critic on `MetaDrive` discrete-action mode.
- **Deliverable:** variance-reduction plot (REINFORCE vs +baseline) + A2C return curve; **Acceptance:** baseline measurably reduces gradient variance; A2C beats a random policy on `MetaDrive`.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — implement REINFORCE + value baseline + A2C and quantify the baseline’s gradient-variance reduction.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install gymnasium torch metadrive-simulator`; clone `VizuaraAI/RL-in-Production-Bootcamp-Resources`.
2. **REINFORCE:** implement on `CartPole-v1` with correct reward-to-go.
3. **Add baseline:** a learned value baseline; plot gradient-estimate variance with vs without.
4. **A2C:** synchronous advantage actor-critic on MetaDrive discrete mode.
5. **Stabilize:** normalize advantages per batch; add an entropy bonus.
6. **Compare:** REINFORCE vs +baseline variance + the A2C return curve.
- **Artifact:** variance-reduction plot + A2C curve + entropy log.
- **Use `$gradient-variance-meter`:** quantify gradient-norm variance and recommend the next reduction.
- **Done when:** baseline measurably cuts variance; A2C beats random on MetaDrive.
- **Stretch:** swap in GAE and re-measure variance.

### Harness / reusable skill — `$gradient-variance-meter`
- **Purpose:** quantify policy-gradient variance and the effect of variance-reduction tricks. **Inputs:** logp, returns/advantages. **Outputs:** gradient-norm variance over a batch + a recommended next reduction (baseline → GAE → normalization).
- **Evidence artifact:** `evidence/week04-variance.md`.

### Common failure modes
- **Reward-to-go error** → using full-episode return for every step. *Fix:* use return *from t onward*.
- **No advantage normalization** → unstable updates. *Fix:* standardize advantages per batch.
- **Entropy collapse** → premature determinism. *Fix:* add an entropy bonus.
- **Critic lags actor** → moving-target instability. *Fix:* tune critic LR / updates per actor step.

### Evidence artifact
`evidence/week04-pg/` (variance plot, A2C curve, entropy log).

### Skill sink-in
Predict how much a value baseline cuts gradient variance before measuring it. Run. Record the factor and revise your intuition about "why critics exist."

### Dataset / environment
**Gymnasium `CartPole-v1`** + **MetaDrive** (`metadrive-simulator`) — https://github.com/metadriverse/metadrive . MetaDrive Apache-2.0; procedurally generated driving scenarios.

### Code stub
```python
def reinforce_step(logps, rewards, gamma=0.99, baseline=None):
    # logps, rewards: lists over one episode
    returns, G = [], 0.0
    for r in reversed(rewards):
        G = r + gamma * G
        returns.insert(0, G)
    returns = torch.tensor(returns)
    adv = returns - (baseline if baseline is not None else 0.0)
    adv = (adv - adv.mean()) / (adv.std() + 1e-8)
    loss = -(torch.stack(logps) * adv).sum()
    return loss
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | REINFORCE+baseline+A2C all learn | REINFORCE only | wrong PG gradient |
| Evidence | variance reduction quantified | curve only | none |
| Reasoning | baseline/advantage role explained | partial | hand-waved |

### Assessment weight
**7%**.

### Reading list
- Williams, "Simple statistical gradient-following algorithms" (REINFORCE, 1992).
- Sutton et al., "Policy Gradient Methods for RL with Function Approximation" (NeurIPS 2000).
- Mnih et al., "Asynchronous Methods for Deep RL" (A3C, ICML 2016).
- Stanford CS234 (2026), policy-search lectures.

---

### State of the Art (June 2026)
- Policy-gradient is the backbone of all 2026 LLM post-training: GRPO/DAPO are PG with group-relative advantages and no critic.
- Advantage normalization + entropy control are standard ‘healthy training’ signals across TRL/veRL.
- Continuous-control PG (MetaDrive, MuJoCo) is the bridge to robotics VLA fine-tuning.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [Schulman et al., 2015 - GAE](https://arxiv.org/abs/1506.02438)
- [Mnih et al., 2013 - DQN](https://arxiv.org/abs/1312.5602)
- [Hugging Face TRL](https://github.com/huggingface/trl)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:13L04 -->

## Week 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL

**Altitude:** Engineer → Specialist · **Anchor case:** `MetaDrive` continuous control and `MuJoCo HalfCheetah` — the locomotion warm-up for robotics.

### Learning goals
- Explain why large policy steps are dangerous and how a trust region / clipped objective bounds them.
- Implement PPO-clip with GAE from scratch and tune the key knobs (clip ε, GAE λ, epochs).
- Derive Generalized Advantage Estimation as a bias–variance dial between TD and Monte Carlo.
- Benchmark PPO on continuous control and explain why it dominates as the default for RLHF/robotics.

### Concept map
- **Surrogate objective / importance ratio.** *Formula:* `r_t(θ)=π_θ(a|s)/π_{θ_old}(a|s)`. *Plain English:* how much more/less likely the new policy makes the taken action. *Common mistake:* forgetting to detach `π_old`.
- **PPO-clip.** *Formula:* `L=E[min(r_t A_t, clip(r_t,1−ε,1+ε)A_t)]`. *Symbols:* `ε≈0.2`. *Plain English:* take improvement steps but refuse to move too far in one update. *Code mapping:* `torch.min(ratio*adv, clamp(ratio,1-eps,1+eps)*adv)`. *Common mistake:* maximizing instead of minimizing the negative (sign error).
- **GAE.** *Formula:* `A_t^{GAE}=Σ_l (γλ)^l δ_{t+l}`, `δ_t=r_t+γV(s_{t+1})−V(s_t)`. *Symbols:* `λ∈[0,1]` bias/variance dial. *Plain English:* an exponentially weighted blend of n-step advantages. *Common mistake:* not masking across episode boundaries.
- **TRPO vs PPO.** TRPO enforces a hard KL constraint (second-order); PPO approximates it cheaply with clipping (first-order). Why PPO won: simpler, scalable, good enough.

### Hands-on build
- `ppo.py`: full PPO-clip + GAE + value-clipping + entropy bonus on `MuJoCo HalfCheetah` and `MetaDrive`.
- Sweep `λ ∈ {0.9, 0.95, 0.99}` and `clip ε ∈ {0.1, 0.2, 0.3}`; report sensitivity.
- **Deliverable:** PPO learning curves + a hyperparameter-sensitivity table; **Acceptance:** PPO reaches a documented MuJoCo HalfCheetah return threshold (>4000) reproducibly.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — train PPO+GAE on MuJoCo HalfCheetah/MetaDrive and sweep λ and clip ε with a KL health trace.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install gymnasium[mujoco] torch metadrive-simulator`.
2. **Implement PPO:** PPO-clip + GAE + value-clipping + entropy bonus.
3. **Train:** MuJoCo `HalfCheetah-v5` and MetaDrive continuous control.
4. **Health trace:** log approx-KL, clip-fraction, entropy; early-stop the epoch on a KL spike.
5. **Sweep:** λ∈{0.9,0.95,0.99}, clip ε∈{0.1,0.2,0.3}; build a sensitivity table.
6. **Validate:** HalfCheetah >4000 return reproducibly.
- **Artifact:** learning curves + KL/clip-fraction trace + sensitivity table.
- **Use `$ppo-trainer`:** this instrumented trainer is the backbone reused in Weeks 8–10.
- **Done when:** >4000 HalfCheetah; MetaDrive learns; health signals healthy.
- **Stretch:** add running reward normalization and compare stability.

### Harness / reusable skill — `$ppo-trainer`
- **Purpose:** a reusable, instrumented PPO trainer (the backbone for Weeks 8–10 RLHF/GRPO).
- **Inputs:** env/rollout fn, policy+value nets, PPO config. **Outputs:** trained policy, KL/clip-fraction/entropy logs, and a "healthy training" checklist result.
- **Evidence artifact:** `evidence/week05-ppo/` with the KL/clip-fraction trace (the canonical PPO health signals).

### Common failure modes
- **KL blow-up** → policy collapses. *Fix:* monitor approx-KL; early-stop epoch if KL exceeds target.
- **Advantage not normalized** → unstable. *Fix:* per-batch standardization.
- **Value clipping omitted** → critic overfits. *Fix:* clip value loss like the policy.
- **Reward scale wrong** → tiny/huge gradients. *Fix:* running reward normalization.

### Evidence artifact
`evidence/week05-ppo/` (curves, KL/clip-fraction trace, sensitivity table).

### Skill sink-in
Predict the clip-fraction at convergence before training. Run. If it is near 0 or near 1, diagnose what that says about your step size.

### Dataset / environment
**MuJoCo via Gymnasium** (`HalfCheetah-v5`, `Humanoid-v5`) — https://gymnasium.farama.org/environments/mujoco/ . MuJoCo now open-source (Apache-2.0, DeepMind).

### Code stub
```python
def ppo_clip_loss(logp, logp_old, adv, eps=0.2):
    ratio = torch.exp(logp - logp_old)              # (B,)
    unclipped = ratio * adv
    clipped = torch.clamp(ratio, 1 - eps, 1 + eps) * adv
    policy_loss = -torch.min(unclipped, clipped).mean()
    approx_kl = (logp_old - logp).mean()            # health signal
    clip_frac = ((ratio - 1).abs() > eps).float().mean()
    return policy_loss, approx_kl, clip_frac
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | HalfCheetah >4000, MetaDrive learns | one env learns | unstable |
| Evidence | KL/clip-fraction health trace + sweep | curves only | none |
| Reasoning | GAE λ bias/variance explained | states λ effect | hand-waved |

### Assessment weight
**8%**.

### Reading list
- Schulman et al., "Trust Region Policy Optimization" (TRPO, ICML 2015).
- Schulman et al., "Proximal Policy Optimization Algorithms" (PPO, 2017).
- Schulman et al., "High-Dimensional Continuous Control Using GAE" (ICLR 2016).
- Engstrom et al., "Implementation Matters in Deep RL: A Case Study on PPO and TRPO" (ICLR 2020).

---

### State of the Art (June 2026)
- PPO-clip is still the workhorse — GPT-5.5 / Claude-class RLHF and most RLVR recipes wrap a PPO core.
- GAE λ and clip-fraction/approx-KL are the canonical health signals tracked in W&B/LangSmith RL dashboards.
- veRL (HybridFlow) + Ray + vLLM is the 2026 reference stack for scaled PPO/GRPO.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [vLLM docs](https://docs.vllm.ai)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Schulman et al., 2015 - GAE](https://arxiv.org/abs/1506.02438)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:13L05 -->

## Week 6 — Offline RL & Imitation Learning

**Altitude:** Specialist · **Anchor case:** `D4RL`/`Minari` driving + locomotion logs — learning a policy *without* environment interaction.

### Learning goals
- Explain why naive off-policy RL fails on fixed datasets (distributional shift, OOD action overestimation).
- Implement behavior cloning, DAgger, and one offline-RL method (CQL or IQL).
- Explain Decision Transformer's "RL as sequence modeling" reframe and when it helps.
- Choose between imitation and offline RL given dataset quality.

### Concept map
- **Behavior cloning.** *Formula:* `max_θ Σ log π_θ(a_i|s_i)` on logged `(s,a)`. *Plain English:* supervised learning of the expert's actions. *Common mistake:* assuming i.i.d. — compounding errors drift off the expert distribution (the DAgger problem).
- **Distributional shift.** Why offline RL is hard: the learned policy queries actions absent from the data, and the critic hallucinates high values for them. *Common mistake:* applying vanilla DQN/SAC to a static buffer.
- **Conservative value (CQL).** *Formula:* adds a penalty pushing down Q on OOD actions. *Plain English:* "don't trust value estimates for actions you never saw." 
- **Implicit Q-Learning (IQL).** Avoids querying OOD actions via expectile regression on in-data actions.
- **Decision Transformer.** *Formula:* condition on desired return-to-go and predict next action autoregressively. *Plain English:* treat trajectories as token sequences; "ask" for a return.

### Hands-on build
- `bc.py` + `dagger.py` on a MuJoCo expert; show DAgger fixes compounding error.
- `iql.py` (or CQL) on a `Minari` D4RL dataset; compare to BC.
- **Deliverable:** BC-vs-DAgger drift plot + offline-RL-vs-BC return table; **Acceptance:** offline RL beats BC on a sub-optimal-data dataset; DAgger beats BC on long horizons.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — train IQL vs BC on a Minari dataset and show DAgger fixes compounding error.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install minari gymnasium[mujoco] torch`.
2. **BC + DAgger:** train on a MuJoCo expert; show DAgger fixes compounding error on long horizons.
3. **Offline RL:** implement IQL (expectile regression) on a Minari `medium` dataset.
4. **Audit data:** state/action coverage, return distribution, behavior-policy entropy.
5. **Compare:** IQL vs BC return table on sub-optimal data.
6. **Split:** trajectory-level held-out, no leakage.
- **Artifact:** BC-vs-DAgger drift plot + IQL-vs-BC table + data audit.
- **Use `$offline-data-auditor`:** produce the imitation-vs-offline-RL recommendation from the dataset.
- **Done when:** IQL>BC on medium data; DAgger beats BC on long horizons.
- **Stretch:** swap IQL for CQL and compare conservatism.

### Harness / reusable skill — `$offline-data-auditor`
- **Purpose:** assess whether a logged dataset can support offline RL. **Inputs:** trajectory dataset. **Outputs:** state/action coverage, return distribution, behavior-policy entropy, and an imitation-vs-offline-RL recommendation.
- **Evidence artifact:** `evidence/week06-data-audit.md`.

### Common failure modes
- **OOD overestimation** → great offline metrics, terrible deployment. *Fix:* conservatism (CQL/IQL).
- **Compounding BC error** → drift on long horizons. *Fix:* DAgger / data aggregation.
- **Return-to-go miscalibration (DT)** → asking for unreachable returns. *Fix:* clamp to dataset support.
- **No held-out trajectories** → overfit evaluation. *Fix:* trajectory-level split.

### Evidence artifact
`evidence/week06-offline/` (drift plot, return table, data audit).

### Skill sink-in
Predict whether BC or IQL wins on a "medium-quality" dataset before running. Run. Record what dataset property decided it.

### Dataset / environment
**Minari (Farama) D4RL datasets** — https://minari.farama.org/ (e.g., `mujoco/halfcheetah/medium-v0`). Apache-2.0; pre-collected trajectories with documented behavior policies.

### Code stub
```python
def iql_value_loss(q_net, v_net, s, a, expectile=0.7):
    with torch.no_grad():
        q = q_net(s, a)                              # in-data actions only
    v = v_net(s)
    diff = q - v
    weight = torch.where(diff > 0, expectile, 1 - expectile)
    return (weight * diff.pow(2)).mean()             # expectile regression
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | IQL>BC on medium data; DAgger fixes drift | one result | OOD-blind |
| Evidence | data audit + return table | table only | none |
| Reasoning | distributional shift explained | named | ignored |

### Assessment weight
**7%**.

### Reading list
- Levine et al., "Offline RL: Tutorial, Review, and Perspectives" (2020).
- Kumar et al., "Conservative Q-Learning for Offline RL" (CQL, NeurIPS 2020).
- Kostrikov et al., "Offline RL with Implicit Q-Learning" (IQL, ICLR 2022).
- Chen et al., "Decision Transformer: RL via Sequence Modeling" (NeurIPS 2021).
- Ross et al., "A Reduction of Imitation Learning... (DAgger)" (AISTATS 2011).

---

### State of the Art (June 2026)
- Offline RL + imitation underpin 2026 robot-learning data engines (LeRobot datasets, action chunking); BC→DAgger→IQL is still the ladder.
- Decision-Transformer ‘RL-as-sequence’ converged with VLA models that tokenize actions.
- Minari (Farama) is the maintained D4RL successor for trajectory datasets.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [Su et al., 2021 - RoPE](https://arxiv.org/abs/2104.09864)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Mnih et al., 2013 - DQN](https://arxiv.org/abs/1312.5602)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
- [LeRobot](https://github.com/huggingface/lerobot)

<!-- sota:13L06 -->

## Week 7 — Model-Based RL, MCTS & World Models (IRIS)

**Altitude:** Specialist · **Anchor case:** Atari from pixels with a *learned* world model; a board game with MCTS.

### Learning goals
- Explain the sample-efficiency promise of model-based RL and its core failure (model exploitation).
- Implement Monte Carlo Tree Search and connect it to AlphaZero-style planning.
- Explain how a learned world model (IRIS: discrete tokens + Transformer dynamics) enables imagination-based training.
- Decide when a world model is worth the added complexity.

### Concept map
- **Model-based RL.** *Formula:* learn `P̂(s'|s,a)`, `R̂`, then plan. *Plain English:* learn a simulator, train inside it. *Common mistake:* the policy exploits model errors ("hallucinated" high-value states).
- **MCTS.** *Formula:* UCT score `Q(s,a)+c√(ln N(s)/N(s,a))`. *Symbols:* `N` visit counts, `c` exploration constant. *Plain English:* selectively expand the most promising branches, balancing value and novelty. *Common mistake:* too few simulations → noisy action choice.
- **AlphaZero loop.** Self-play + MCTS-improved policy/value targets. Plain English: search makes a better teacher than the raw network.
- **World models (IRIS).** *Formula:* encode frames to discrete tokens (VQ-VAE), model dynamics with a Transformer, train the policy in "imagination." *Plain English:* a learned dream environment with sample efficiency far above model-free. *Common mistake:* training the policy on rollouts longer than the model is accurate for.

### Hands-on build
- `mcts.py`: UCT on a small game (Connect-Four); plug a value net for AlphaZero-lite self-play.
- `world_model_lab.py`: train a tiny IRIS-style tokenizer + Transformer dynamics on an Atari env; roll out imagined trajectories and inspect reconstruction.
- **Deliverable:** MCTS strength curve vs simulations + imagined-vs-real rollout comparison; **Acceptance:** MCTS beats a random opponent decisively; world-model reconstructions are visually faithful for ≥10 steps.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — build UCT MCTS on Connect-Four + a tiny IRIS-style world model and measure the safe imagination horizon.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install gymnasium[atari] ale-py torch`; reference `eloialonso/iris`.
2. **MCTS:** UCT on Connect-Four; plug a value net for AlphaZero-lite self-play.
3. **World model:** train a tiny IRIS-style VQ tokenizer + Transformer dynamics on an Atari env.
4. **Imagine:** roll out imagined trajectories; inspect reconstruction fidelity per horizon.
5. **Trust horizon:** measure per-horizon reconstruction/return error → max safe imagination horizon.
6. **Validate:** MCTS beats random decisively; reconstructions faithful ≥10 steps.
- **Artifact:** MCTS strength curve + imagined-vs-real rollouts + trust audit.
- **Use `$model-trust-auditor`:** bound policy training by the measured safe horizon.
- **Done when:** strong MCTS; faithful ≥10-step model; horizon cap recorded.
- **Stretch:** train the policy in imagination and check for model exploitation.

### Harness / reusable skill — `$model-trust-auditor`
- **Purpose:** measure how far into the future a learned model can be trusted. **Inputs:** model, real rollouts. **Outputs:** per-horizon reconstruction/return error and a "max safe imagination horizon."
- **Evidence artifact:** `evidence/week07-model-trust.md`.

### Common failure modes
- **Model exploitation** → policy games model errors. *Fix:* short imagination horizons, ensembles.
- **Compounding rollout error** → divergent dreams. *Fix:* the `$model-trust-auditor` horizon cap.
- **Too few MCTS sims** → weak play. *Fix:* scale sims, reuse subtree.
- **Tokenizer collapse (IRIS)** → blurry frames. *Fix:* monitor codebook usage.

### Evidence artifact
`evidence/week07-model/` (MCTS curve, imagination rollouts, trust audit).

### Skill sink-in
Predict the horizon at which imagined rollouts diverge from reality. Measure. Record the cap and how it should bound policy training.

### Dataset / environment
**Atari 100k benchmark** (sample-efficient regime) via Gymnasium ALE — https://gymnasium.farama.org/environments/atari/ ; IRIS reference code https://github.com/eloialonso/iris (MIT).

### Code stub
```python
def uct_select(node, c=1.41):
    import math
    logN = math.log(node.visits + 1)
    def score(child):
        if child.visits == 0:
            return float("inf")
        return child.value / child.visits + c * math.sqrt(logN / child.visits)
    return max(node.children, key=score)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | MCTS strong; world model faithful ≥10 steps | one works | both weak |
| Evidence | trust-horizon audit + rollouts | partial | none |
| Reasoning | model-exploitation risk addressed | named | ignored |

### Assessment weight
**6%**.

### Reading list
- Silver et al., "Mastering the game of Go without human knowledge" (AlphaZero, *Nature* 2017).
- Schrittwieser et al., "Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model" (MuZero, *Nature* 2020).
- Micheli et al., "Transformers are Sample-Efficient World Models" (IRIS, ICLR 2023).
- Hafner et al., "Mastering Diverse Domains through World Models" (DreamerV3, 2023).

---

### State of the Art (June 2026)
- World models went mainstream via video-diffusion framing (Genie-style interactive environments); DiT over spatiotemporal latents is the architecture to know.
- DreamerV3 and IRIS remain the open references; model-exploitation + trust-horizon are the live failure modes.
- MCTS/AlphaZero search resurfaces as test-time deliberation in reasoning models.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [Hu et al., 2021 - LoRA](https://arxiv.org/abs/2106.09685)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Micheli et al., 2022 - IRIS](https://arxiv.org/abs/2209.00588)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:13L07 -->

## Week 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO

**Altitude:** Specialist · **Anchor case:** post-train a small instruct model (`Qwen3-0.6B`/`Llama-3.2-1B`) on a preference dataset.

### Learning goals
- Explain the three-stage RLHF pipeline (SFT → reward model → PPO) and the role of the KL penalty.
- Derive DPO and explain how it removes the explicit reward model and RL loop.
- Compare DPO / SimPO / KTO / ORPO on objective form, data needs, and failure modes.
- Run a preference-optimization fine-tune and evaluate it honestly (win-rate + KL/reward-hacking checks).

### Concept map
- **Reward model (Bradley-Terry).** *Formula:* `P(y_w ≻ y_l|x)=σ(r(x,y_w)−r(x,y_l))`. *Plain English:* learn a scalar score whose differences predict human preference. *Common mistake:* reward over-optimization (Goodhart) — the policy games the RM.
- **PPO-RLHF objective.** *Formula:* `max_π E[r(x,y)] − β·KL(π‖π_ref)`. *Symbols:* `β` KL weight, `π_ref` frozen SFT model. *Plain English:* maximize reward while staying close to the reference. *Common mistake:* `β` too small → KL blows up, model degenerates.
- **DPO.** *Formula:* `L=−log σ(β log[π(y_w|x)/π_ref(y_w|x)] − β log[π(y_l|x)/π_ref(y_l|x)])`. *Plain English:* the optimal RLHF policy has a closed form, so train directly on preferences with a classification-style loss — no RM, no rollouts. *Common mistake:* forgetting `π_ref` log-ratios (turns DPO into something biased).
- **SimPO / KTO / ORPO.** SimPO: reference-free, length-normalized reward. KTO: uses *unpaired* good/bad labels (prospect-theory utility). ORPO: folds preference odds-ratio into SFT — one stage, no reference model. *Common mistake:* picking the algorithm by hype instead of by the data you actually have (paired vs unpaired vs single-stage budget).

### Hands-on build
- `dpo_train.py` with TRL: SFT → DPO on `UltraFeedback`; then swap in SimPO/KTO/ORPO configs.
- Compare against a PPO-RLHF run (TRL `PPOTrainer` + reward model) on the same data.
- **Deliverable:** win-rate table (LLM-as-judge) across methods + KL/length-bias audit; **Acceptance:** DPO improves judge win-rate over SFT without length-hacking it (length-controlled win-rate also up).

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — SFT→DPO on UltraFeedback with TRL, then swap SimPO/KTO/ORPO and compare length-controlled win-rate.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install trl peft transformers datasets vllm`.
2. **SFT→DPO:** on `ultrafeedback_binarized` with `Qwen3-0.6B`/`Llama-3.2-1B`.
3. **Swap methods:** re-run with SimPO / KTO / ORPO configs.
4. **Baseline:** a PPO-RLHF run (TRL `PPOTrainer` + reward model) on the same data.
5. **Eval honestly:** LLM-judge win-rate + length-controlled win-rate + a KL audit.
6. **Recommend:** pick the method by data property (paired/unpaired/single-stage budget).
- **Artifact:** cross-method win-rate table + KL/length audit.
- **Use `$preference-tuner`:** the reusable harness across DPO/SimPO/KTO/ORPO.
- **Done when:** DPO improves judge win-rate over SFT without length-hacking.
- **Stretch:** add a cross-family judge + human spot-check.

### Harness / reusable skill — `$preference-tuner`
- **Purpose:** a reusable preference-optimization harness across DPO/SimPO/KTO/ORPO. **Inputs:** SFT model, preference data, method. **Outputs:** tuned model, win-rate vs reference, KL/length/reward-hacking report.
- **Evidence artifact:** `evidence/week08-pref/` with the cross-method comparison.

### Common failure modes
- **Reward over-optimization** → high RM score, worse real quality. *Fix:* KL control + held-out judge.
- **Length bias** → model wins by being verbose. *Fix:* length-controlled win-rate (SimPO/AlpacaEval-LC).
- **Reference-model drift** → forgetting capabilities. *Fix:* monitor KL to `π_ref`.
- **Judge contamination** → judge and policy share a model family. *Fix:* cross-family judge + human spot-check.

### Evidence artifact
`evidence/week08-pref/` (win-rate table, KL/length audit, method recommendation).

### Skill sink-in
Predict whether DPO or ORPO gives a better quality/compute tradeoff on your data before running. Run. Record what data property (paired? single-stage budget?) actually decided it.

### Dataset / environment
**`HuggingFaceH4/ultrafeedback_binarized`** — https://huggingface.co/datasets/HuggingFaceH4/ultrafeedback_binarized (MIT). Base models `Qwen/Qwen3-0.6B`, `meta-llama/Llama-3.2-1B-Instruct`. Library: **TRL** (Hugging Face).

### Code stub
```python
import torch.nn.functional as F
def dpo_loss(pi_lw, pi_ll, ref_lw, ref_ll, beta=0.1):
    # *_lw / *_ll: summed log-probs of chosen / rejected under policy & ref
    pi_logratio = pi_lw - pi_ll
    ref_logratio = ref_lw - ref_ll
    return -F.logsigmoid(beta * (pi_logratio - ref_logratio)).mean()
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | DPO+1 variant+PPO-RLHF all run, win-rate up | DPO only | no improvement |
| Evidence | length-controlled win-rate + KL audit | raw win-rate | none |
| Reasoning | method chosen by data property | named methods | hype-driven |

### Assessment weight
**8%**.

### Reading list
- Ouyang et al., "Training language models to follow instructions with human feedback" (InstructGPT, NeurIPS 2022).
- Rafailov et al., "Direct Preference Optimization" (DPO, NeurIPS 2023).
- Meng et al., "SimPO: Simple Preference Optimization with a Reference-Free Reward" (NeurIPS 2024).
- Ethayarajh et al., "KTO: Model Alignment as Prospect Theoretic Optimization" (2024).
- Hong et al., "ORPO: Monolithic Preference Optimization without Reference Model" (EMNLP 2024).

---

### State of the Art (June 2026)
- DPO/ORPO/KTO are the default preference-optimization stack (HF trl); SimPO reference-free length control is standard.
- Length-controlled win-rate (AlpacaEval-LC) + cross-family LLM-judge are the honest-eval norm; TrustJudge documents judge biases.
- RLHF is now mostly a thin PPO/DPO layer atop SFT; RLVR displaces it for verifiable tasks.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [Su et al., 2021 - RoPE](https://arxiv.org/abs/2104.09864)
- [vLLM docs](https://docs.vllm.ai)
- [Rafailov et al., 2023 - DPO](https://arxiv.org/abs/2305.18290)
- [Hong et al., 2024 - ORPO](https://arxiv.org/abs/2403.07691)
- [Ethayarajh et al., 2024 - KTO](https://arxiv.org/abs/2402.01306)
- [Meng et al., 2024 - SimPO](https://arxiv.org/abs/2405.14734)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)

<!-- sota:13L08 -->

## Week 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO

**Altitude:** Specialist · **Anchor case:** train a small model to *reason* on math (`GSM8K`/`MATH`) with verifiable rewards.

### Learning goals
- Explain RL from Verifiable Rewards (RLVR) and why it sidesteps the reward-model bottleneck.
- Derive GRPO and explain how group-relative advantages remove the value network.
- Diagnose GRPO's known biases and explain the DAPO and Dr.GRPO fixes.
- Train a reasoning model and measure pass@1 gains plus response-length dynamics.

### Concept map
- **RLVR.** *Formula:* reward `r=1` if a verifier (unit tests / exact-match / checker) accepts the answer else `0`. *Plain English:* skip the learned RM — use ground-truth correctness as reward. *Common mistake:* a leaky verifier the model can game (e.g., format-only checks).
- **GRPO.** *Formula:* for a group of `G` sampled outputs per prompt, `Â_i=(r_i − mean(r))/std(r)`; optimize a PPO-clip objective with `Â_i`, no critic. *Symbols:* group-relative advantage. *Plain English:* "better than your other tries on this prompt" replaces a value function. *Common mistake:* group size too small → noisy/zero advantages when all samples tie.
- **GRPO biases (Dr.GRPO).** Length and difficulty normalization terms bias toward longer wrong answers; Dr.GRPO removes the std/length normalization that causes it. *Plain English:* fix the math so the model isn't rewarded for rambling.
- **DAPO.** Decoupled clip + dynamic sampling + token-level loss + overlong-reward shaping — an open, scaled recipe that stabilizes long-CoT RLVR. *Common mistake:* keeping zero-gradient prompts (all-correct or all-wrong groups) in the batch.

### Hands-on build
- `grpo_train.py` with **veRL** (or TRL `GRPOTrainer`): train `Qwen3-1.7B` on `GSM8K` with an exact-match verifier.
- Ablate GRPO → Dr.GRPO (remove length/std norm) → add DAPO dynamic sampling; track pass@1 and mean response length.
- **Deliverable:** pass@1 curve + response-length curve across variants + a "length-hacking" check; **Acceptance:** GRPO improves GSM8K pass@1 over the SFT base; Dr.GRPO reduces length inflation without losing accuracy.

▶ **Practical project:** `VizuaraAILabs/DeepSeek-From-Scratch` — train GRPO on GSM8K with an exact-match verifier and ablate GRPO→Dr.GRPO→DAPO on pass@1 and response length.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install verl trl vllm transformers datasets`; clone `VizuaraAILabs/DeepSeek-From-Scratch`.
2. **Verifier:** an exact-match checker on `openai/gsm8k`.
3. **GRPO:** train `Qwen3-1.7B` with group sampling, group-relative advantage, no critic.
4. **Ablate:** GRPO → Dr.GRPO (drop std/length norm) → add DAPO dynamic sampling.
5. **Track:** pass@1 + mean response length per variant; a length-hacking check.
6. **Harden:** spot-check accepted answers for verifier gaming.
- **Artifact:** pass@1 + length curves + variant ablation + gaming report.
- **Use `$rlvr-trainer`:** verifier + group sampler + GRPO/DAPO objective as one harness.
- **Done when:** GRPO↑pass@1 over SFT; Dr.GRPO cuts length without losing accuracy.
- **Stretch:** add MATH-500 and compare difficulty transfer.

### Harness / reusable skill — `$rlvr-trainer`
- **Purpose:** a verifiable-reward RL harness (verifier + group sampler + GRPO/DAPO objective). **Inputs:** base model, prompt set, verifier fn, variant. **Outputs:** trained model, pass@k, length/format metrics, verifier-gaming report.
- **Evidence artifact:** `evidence/week09-rlvr/` with the variant ablation.

### Common failure modes
- **Verifier gaming** → reward without correctness. *Fix:* harden the verifier; spot-check accepted answers.
- **Length hacking** → longer, not better. *Fix:* Dr.GRPO normalization fix + length-penalized eval.
- **All-tie groups** → zero advantage, no learning. *Fix:* DAPO dynamic sampling (keep informative groups).
- **KL/entropy collapse** → repetitive CoT. *Fix:* tune KL coeff and entropy bonus.

### Evidence artifact
`evidence/week09-rlvr/` (pass@1 + length curves, variant ablation, gaming report).

### Skill sink-in
Predict whether GRPO will inflate response length on GSM8K before training. Run. Record the length curve and whether Dr.GRPO's fix recovered accuracy at lower length.

### Dataset / environment
**`openai/gsm8k`** — https://huggingface.co/datasets/openai/gsm8k (MIT) and **`HuggingFaceH4/MATH-500`**. Base `Qwen/Qwen3-1.7B`. Libraries: **veRL** (https://github.com/volcengine/verl) and/or TRL `GRPOTrainer`; serving via **vLLM**.

### Code stub
```python
def grpo_advantages(rewards, group_size, drgrpo=False):
    # rewards: (N,) flat, grouped by prompt into blocks of `group_size`
    r = rewards.view(-1, group_size)                 # (P, G)
    centered = r - r.mean(dim=1, keepdim=True)
    if drgrpo:
        adv = centered                               # Dr.GRPO: no std norm
    else:
        adv = centered / (r.std(dim=1, keepdim=True) + 1e-6)
    return adv.view(-1)                              # (N,)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | GRPO↑pass@1; Dr.GRPO controls length | GRPO only | no gain |
| Evidence | length + accuracy + gaming report | accuracy only | none |
| Reasoning | GRPO bias & DAPO/Dr.GRPO fixes explained | named | conflated |

### Assessment weight
**8%**.

### Reading list
- Shao et al., "DeepSeekMath: Pushing the Limits of Mathematical Reasoning... (GRPO)" (2024).
- DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL" (2025).
- Yu et al., "DAPO: An Open-Source LLM Reinforcement Learning System at Scale" (2025).
- Liu et al., "Understanding R1-Zero-Like Training: A Critical Perspective (Dr.GRPO)" (2025).
- Lambert et al., "Tülu 3 / RLVR" technical report (AI2, 2025).

---

### State of the Art (June 2026)
- GRPO (DeepSeek-R1) → DAPO → Dr.GRPO is the 2026 reasoning-RL lineage; group-relative advantage removes the value net.
- RLVR (verifiable rewards) is now dominant for reasoning post-training, displacing pure RLHF.
- Reward/verifier hacking (length inflation, leaky checkers) is an active ICLR-2026 thread; Dr.GRPO fixes the normalization bias.

**References & links:**
- [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch)
- [`openai/gsm8k`](https://github.com/openai/gsm8k)
- [vLLM docs](https://docs.vllm.ai)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [DeepSeek-AI, 2025 - DeepSeek-R1](https://arxiv.org/abs/2501.12948)
- [Radford et al., 2021 - CLIP](https://arxiv.org/abs/2103.00020)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)

<!-- sota:13L09 -->

## Week 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure

**Altitude:** Specialist · **Anchor case:** the `SWE-RL` coding-agent case — environment = a repo + test suite; reward = tests pass.

### Learning goals
- Frame an agentic task (multi-step tool use) as an RL problem with sparse, verifiable, long-horizon rewards.
- Explain SWE-RL / DeepSWE training recipes and what made coding agents trainable with RL.
- Stand up distributed RLVR infrastructure (veRL / OpenRLHF + Ray + vLLM) and reason about its bottlenecks.
- Handle credit assignment and reward sparsity over long tool-use trajectories.

### Concept map
- **Agentic MDP.** State = conversation+repo+tool outputs; action = a tool call or token; horizon = many steps. *Plain English:* the "environment" is a sandbox running code. *Common mistake:* per-token reward when only the final patch is verifiable (credit-assignment trap).
- **SWE-RL / DeepSWE.** *Formula:* reward from test-suite pass/fail (and partial signals); GRPO-style optimization over sampled patches. *Plain English:* let the model attempt repo edits, run tests, reinforce trajectories that pass. DeepSWE reached strong SWE-Bench-Verified numbers with open RL recipes. *Common mistake:* reward only exact-match diffs (too sparse) instead of test outcomes.
- **Distributed RL stack.** Rollout (vLLM generation) ↔ reward (sandbox/verifier) ↔ trainer (FSDP/Megatron); orchestrated by Ray. *Plain English:* generation, reward, and gradient steps are separate scalable services. *Common mistake:* the generator and trainer policy versions drift (stale rollouts).
- **Reward sparsity & shaping.** Partial credit, curriculum, dense intermediate signals. *Common mistake:* over-shaping → the agent games sub-rewards.

### Hands-on build
- `swe_rl_env.py`: wrap a small Python repo + pytest into a Gymnasium-style env (apply patch → run tests → reward).
- `agentic_grpo.py` with **veRL + Ray + vLLM**: train a small model to fix seeded bugs; measure resolved-rate.
- **Deliverable:** resolved-rate curve on held-out bugs + an infra throughput report (rollout/sec, GPU util); **Acceptance:** trained agent resolves more held-out bugs than the SFT base; infra report identifies the bottleneck stage.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — wrap a repo+pytest as a Gymnasium env and train an agent with veRL+Ray+vLLM; report resolved-rate + the infra bottleneck.

**Build it — step by step (AI-builder lab):**
1. **Setup:** multi-GPU/serverless; `pip install verl vllm ray`; SWE-Gym / SWE-bench Verified instances.
2. **Build the env:** wrap a Python repo + pytest as Gymnasium-style (apply patch → run tests → reward).
3. **Reward:** partial credit = passed/total; protect test files; keep held-out tests.
4. **Train:** GRPO over sampled patches with veRL + Ray + vLLM on seeded bugs.
5. **Profile infra:** rollout/sec, GPU util; find the bottleneck stage (gen/reward/train).
6. **Evaluate:** resolved-rate on held-out bugs vs the SFT base.
- **Artifact:** resolved-rate curve + infra throughput report + reward-sparsity stats.
- **Use `$agentic-rl-env`:** the reusable verifiable agentic env (sandbox + reward + trajectory logger).
- **Done when:** agent beats SFT base on held-out; bottleneck identified.
- **Stretch:** add curriculum/partial-credit shaping and measure the lift.

### Harness / reusable skill — `$agentic-rl-env`
- **Purpose:** a reusable verifiable agentic environment (tool sandbox + reward + trajectory logger). **Inputs:** task spec, tools, verifier. **Outputs:** Gymnasium-compatible env, trajectory logs, reward-sparsity stats.
- **Evidence artifact:** `evidence/week10-agentic/` with the env + resolved-rate log.

### Common failure modes
- **Sparse-reward stall** → no learning signal. *Fix:* partial credit / curriculum / more samples per task.
- **Stale-policy rollouts** → off-policy drift. *Fix:* sync generator weights; bound staleness.
- **Sandbox flakiness** → noisy reward. *Fix:* deterministic, isolated, timeout-bounded test runs.
- **Reward gaming** → patches that disable tests. *Fix:* protect the test files; held-out tests.

### Evidence artifact
`evidence/week10-agentic/` (resolved-rate curve, infra throughput report, reward-sparsity stats).

### Skill sink-in
Predict the infra bottleneck (generation vs reward vs training) before profiling. Profile. Record where the wall-clock actually goes and what you'd scale first.

### Dataset / environment
**SWE-bench Verified / SWE-Gym** — https://github.com/SWE-bench/SWE-bench (MIT) and **SWE-Gym** for trainable instances. Infra: **veRL** / **OpenRLHF** (https://github.com/OpenRLHF/OpenRLHF), **Ray**, **vLLM**.

### Code stub
```python
class SWEEnv:
    def reset(self, task):
        self.repo = checkout(task.base_commit)       # isolated sandbox
        return observe(self.repo, task.issue)
    def step(self, patch):
        ok = apply_patch(self.repo, patch)
        if not ok:
            return self.obs, -1.0, True, {}
        passed, total = run_pytest(self.repo, timeout=120)
        reward = passed / total                      # partial credit
        done = (passed == total)
        return observe(self.repo, None), reward, done, {"passed": passed}
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | resolved-rate beats SFT on held-out | trains, no held-out gain | no learning |
| Evidence | throughput report + sparsity stats | curve only | none |
| Reasoning | credit-assignment & staleness addressed | named | ignored |

### Assessment weight
**8%**.

### Reading list
- Wei et al., "SWE-RL: Advancing LLM Reasoning via RL on Open Software Evolution" (Meta, 2025).
- Luo et al., "DeepSWE: Training a State-of-the-Art Coding Agent with RL" (Agentica/Together, 2025).
- Sheng et al., "HybridFlow: A Flexible and Efficient RLHF Framework (veRL)" (2024).
- Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" (ICLR 2024).

---

### State of the Art (June 2026)
- DeepSWE/SWE-RL pushed open RL coding agents to strong SWE-bench-Verified numbers; the environment = repo + test suite.
- Distributed RLVR stack: veRL/OpenRLHF + Ray + vLLM rollouts; stale-policy drift is the headline infra bug.
- Execution-based agent evals (SWE-bench Pro/Verified, τ²-bench pass^k) are the 2026 standard.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [vLLM docs](https://docs.vllm.ai)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [Jimenez et al., 2023 - SWE-bench](https://arxiv.org/abs/2310.06770)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:13L10 -->

## Week 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real

**Altitude:** Specialist · **Anchor case:** a manipulation task in simulation, fine-tuned from a vision-language-action model.

### Learning goals
- Explain the vision-language-action (VLA) paradigm and how it differs from classical control and pure RL.
- Fine-tune a small VLA (SmolVLA) on teleoperation data and run closed-loop in sim.
- Explain the sim-to-real gap and the main transfer techniques (domain randomization, system identification).
- Reason about action representations (joint vs end-effector, action chunking, diffusion/flow policies).

### Concept map
- **VLA model.** *Formula:* `π(a_{t:t+H} | image, instruction, proprioception)`. *Plain English:* a multimodal policy mapping camera + language + robot state to an action chunk. *Common mistake:* treating it as a chatbot — it outputs continuous action sequences, not text.
- **Action chunking.** *Formula:* predict `H` future actions at once. *Plain English:* commit to short plans to reduce compounding error and jitter. *Common mistake:* `H` too long → can't react to disturbances.
- **Sim-to-real gap.** *Plain English:* a policy perfect in sim fails on hardware due to dynamics/visual mismatch. **Domain randomization:** train over randomized physics/textures so reality is "in distribution." *Common mistake:* randomizing the wrong factors.
- **Imitation vs RL fine-tuning.** Most VLAs are behavior-cloned on demos, optionally RL-fine-tuned. *Common mistake:* expecting RL from scratch on hardware (sample cost is prohibitive).

### Hands-on build
- `vla_finetune.py` with **LeRobot**: fine-tune **SmolVLA** on a `LeRobot` teleop dataset for a pick-place task.
- Evaluate closed-loop in sim; apply domain randomization and measure success-rate robustness.
- **Deliverable:** closed-loop success-rate (with/without domain randomization) + action-chunk-length ablation; **Acceptance:** fine-tuned SmolVLA exceeds a BC baseline; domain randomization improves robustness to perturbations.

▶ **Practical project:** `VizuaraAILabs/ACT-Maniskill` — fine-tune an action-chunking (ACT) policy on ManiSkill and evaluate sim success-rate with an embodied-eval harness.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install mani-skill lerobot torch`; clone `VizuaraAILabs/ACT-Maniskill`.
2. **Data:** load LeRobot/ManiSkill demos with action chunking.
3. **Fine-tune:** train an ACT (or SmolVLA) policy on the manipulation task.
4. **Closed-loop eval:** roll the policy in sim; measure success-rate + sim-to-real caveats.
5. **Compare:** imitation vs RL fine-tuning on the same task.
6. **Audit:** log unsafe/degenerate behaviors.
- **Artifact:** success-rate curve + an embodied-eval report.
- **Use `$embodied-eval`:** standardized closed-loop success/safety evaluation.
- **Done when:** policy beats a random/BC baseline on held-out scenes.
- **Stretch:** add residual RL on top of the BC policy and re-measure.

### Harness / reusable skill — `$embodied-eval`
- **Purpose:** standardized closed-loop evaluation for embodied policies. **Inputs:** policy, sim env, perturbation suite. **Outputs:** success-rate, robustness curve under randomization, failure-mode taxonomy.
- **Evidence artifact:** `evidence/week11-vla/` with success-rate + robustness curves.

### Common failure modes
- **Open-loop evaluation** → looks fine, fails closed-loop. *Fix:* always evaluate in closed loop.
- **Distribution shift in observations** → camera/lighting mismatch. *Fix:* domain randomization + augmentation.
- **Action-space mismatch** → demos in EE-space, policy in joint-space. *Fix:* fix and document the action representation.
- **Over-chunking** → unreactive policy. *Fix:* tune chunk length `H`.

### Evidence artifact
`evidence/week11-vla/` (success-rate, robustness curve, failure taxonomy).

### Skill sink-in
Predict how much domain randomization improves robustness to a held-out perturbation before testing. Run. Record the gain and which randomized factor mattered most.

### Dataset / environment
**LeRobot datasets + SmolVLA** (Hugging Face) — https://huggingface.co/lerobot and https://huggingface.co/blog/smolvla . Sim via **ManiSkill** / **robosuite** (MuJoCo). LeRobot Apache-2.0.

### Code stub
```python
from lerobot.policies import SmolVLAPolicy
policy = SmolVLAPolicy.from_pretrained("lerobot/smolvla_base")
def rollout(env, instruction, horizon=200, chunk=10):
    obs, total = env.reset(), 0.0
    while not env.done and env.t < horizon:
        action_chunk = policy.select_action(obs, instruction)  # (chunk, act_dim)
        for a in action_chunk[:chunk]:
            obs, r, done, _ = env.step(a)
            total += r
            if done: break
    return env.success, total
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | SmolVLA>BC closed-loop; DR helps | BC-level | open-loop only |
| Evidence | robustness curve + failure taxonomy | success-rate only | none |
| Reasoning | sim-to-real gap addressed | named | ignored |

### Assessment weight
**6%**.

### Reading list
- Brohan et al., "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control" (2023).
- Kim et al., "OpenVLA: An Open-Source Vision-Language-Action Model" (2024).
- Shukor et al., "SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics" (Hugging Face, 2025).
- Tobin et al., "Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World" (IROS 2017).

---

### State of the Art (June 2026)
- VLA models (SmolVLA, π0-class, OpenVLA successors) with action chunking are the 2026 robot-learning default.
- LeRobot (HF) is the de-facto open robot-learning hub; ManiSkill/Isaac Lab for massively parallel sim.
- Residual RL on top of behavior-cloned policies is the standard sim-to-real fine-tune.

**References & links:**
- [`VizuaraAILabs/ACT-Maniskill`](https://github.com/VizuaraAILabs/ACT-Maniskill)
- [LeRobot](https://github.com/huggingface/lerobot)

<!-- sota:13L11 -->

## Week 12 — Humanoid Locomotion & Multi-Agent RL

**Altitude:** Specialist · **Anchor case:** train a `Humanoid` to walk via massively parallel sim; then a multi-agent game.

### Learning goals
- Train humanoid locomotion with PPO in a massively parallel GPU simulator and explain why parallelism is essential.
- Explain reward shaping for locomotion (velocity tracking, energy, gait) and its pitfalls.
- Formalize multi-agent RL: stochastic games, the non-stationarity problem, CTDE.
- Implement a multi-agent algorithm (MAPPO/QMIX) and analyze cooperative vs competitive dynamics.

### Concept map
- **Massively parallel sim.** *Plain English:* thousands of robots stepping in parallel on GPU make PPO's sample hunger affordable (minutes, not days). *Common mistake:* tiny `num_envs` → too few samples per update.
- **Locomotion reward.** *Formula:* `r = w_v·track(v) − w_e·energy − w_a·action_rate + alive_bonus`. *Plain English:* track a commanded velocity smoothly and efficiently. *Common mistake:* reward terms that produce a "bug-like" exploit gait.
- **Stochastic game.** *Formula:* `(S, {A_i}, P, {R_i}, γ)` over agents. *Plain English:* an MDP where transitions depend on *all* agents' actions. *Common mistake:* treating other agents as fixed environment → non-stationarity breaks single-agent guarantees.
- **CTDE (centralized training, decentralized execution).** *Plain English:* use global info during training, act on local obs at test time. MAPPO/QMIX/value-decomposition. *Common mistake:* credit assignment across agents (who caused the win?).

### Hands-on build
- `humanoid_ppo.py` in **Isaac Lab** (or MuJoCo MJX): train a humanoid to track velocity commands with thousands of parallel envs.
- `mappo.py` on a multi-agent benchmark (PettingZoo MPE / SMACv2); compare cooperative vs competitive.
- **Deliverable:** locomotion gait video + reward-term ablation; multi-agent win-rate vs a baseline; **Acceptance:** humanoid achieves stable forward locomotion; MAPPO beats independent learners on a cooperative task.

▶ **Practical project:** `VizuaraAILabs/Modern-Robot-Learning` — train a massively-parallel locomotion policy and a 2-agent CTDE task; audit the locomotion reward for shaping exploits.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; Isaac Lab / MJX (massively parallel) per repo; clone `VizuaraAILabs/Modern-Robot-Learning`.
2. **Locomotion:** train a humanoid/quadruped policy with 4096+ parallel envs.
3. **MARL:** a 2-agent CTDE task with PettingZoo (centralized critic, decentralized actors).
4. **Reward audit:** inspect the locomotion reward for shaping exploits (e.g., reward for jitter).
5. **Domain randomization:** add it for sim-to-real robustness.
6. **Evaluate:** locomotion return + a multi-agent coordination metric.
- **Artifact:** locomotion curve + CTDE result + a reward-shaping audit note.
- **Use `$reward-shaping-auditor`:** flag shaped-reward exploits before they dominate.
- **Done when:** stable locomotion; 2-agent task solved; ≥1 shaping exploit caught.
- **Stretch:** scale to 3+ agents and test for emergent collusion.

### Harness / reusable skill — `$reward-shaping-auditor`
- **Purpose:** detect reward-shaping exploits in continuous control. **Inputs:** reward components, trajectory rollouts. **Outputs:** per-term contribution, exploit flags (e.g., reward high but task failed), and a shaping fix.
- **Evidence artifact:** `evidence/week12-locomotion/` with the reward-term breakdown.

### Common failure modes
- **Reward exploit gait** → high reward, useless walk. *Fix:* `$reward-shaping-auditor` + visual inspection.
- **Too few parallel envs** → no learning. *Fix:* scale `num_envs` to thousands.
- **MARL non-stationarity** → oscillating policies. *Fix:* CTDE, parameter sharing, opponent sampling.
- **Sim instability** → exploding contacts. *Fix:* tune solver / contact params.

### Evidence artifact
`evidence/week12-locomotion/` (gait video, reward breakdown, MARL win-rate).

### Skill sink-in
Predict which reward term the agent will exploit before training the humanoid. Train. Record the exploit (if any) and the shaping fix.

### Dataset / environment
**Isaac Lab** (NVIDIA, https://github.com/isaac-sim/IsaacLab) or **MuJoCo MJX**; multi-agent via **PettingZoo** (https://pettingzoo.farama.org/) and **SMACv2**. Isaac Lab BSD-3; PettingZoo MIT.

### Code stub
```python
# Vectorized PPO update over thousands of parallel humanoid envs
obs = envs.reset()                                   # (num_envs, obs_dim)
for step in range(rollout_len):
    actions, logp, value = policy(obs)               # batched on GPU
    obs, rew, done, info = envs.step(actions)        # parallel sim step
    buffer.add(obs, actions, logp, value, rew, done)
adv, ret = compute_gae(buffer, gamma=0.99, lam=0.95)
ppo_update(policy, buffer, adv, ret)                 # reuse $ppo-trainer
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | stable locomotion + MAPPO>IPPO | one works | neither |
| Evidence | reward breakdown + gait video | video only | none |
| Reasoning | non-stationarity / shaping addressed | named | ignored |

### Assessment weight
**6%**.

### Reading list
- Rudin et al., "Learning to Walk in Minutes Using Massively Parallel Deep RL" (CoRL 2021).
- Yu et al., "The Surprising Effectiveness of PPO in Cooperative Multi-Agent Games (MAPPO)" (NeurIPS 2022).
- Rashid et al., "QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent RL" (ICML 2018).
- MIT 6.S890, Topics in Multi-Agent Learning, lecture notes (2025).

---

### State of the Art (June 2026)
- Massively parallel sim (Isaac Lab / MJX, 4096+ envs on one GPU) is how 2026 humanoid locomotion is trained.
- CTDE (centralized-training, decentralized-execution) remains the MARL workhorse; PettingZoo/Safety-Gymnasium for benchmarks.
- Sim-to-real locomotion transfers via domain randomization + residual RL.

**References & links:**
- [`VizuaraAILabs/Modern-Robot-Learning`](https://github.com/VizuaraAILabs/Modern-Robot-Learning)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Schulman et al., 2015 - GAE](https://arxiv.org/abs/1506.02438)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:13L12 -->

## Week 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL

**Altitude:** Specialist · **Anchor case:** deliberately break each prior week's agent by exploiting its reward, then defend it.

### Learning goals
- Define reward hacking / specification gaming and connect it to Goodhart's law across this course's agents.
- Implement constrained RL (CMDP / Lagrangian) and reason about safety constraints vs reward.
- Detect reward over-optimization (the RM "hacking" curve) and apply mitigations.
- Build a reward-hacking red-team → mitigation → re-eval loop as the bridge to Subject 14.

### Concept map
- **Specification gaming.** *Plain English:* the agent maximizes the *stated* reward in a way that violates the *intended* goal (boat circling for points, robot exploiting physics). *Common mistake:* assuming a clever reward is hack-proof.
- **Goodhart / reward over-optimization.** *Formula:* true reward rises then *falls* as proxy reward keeps rising past an optimum. *Plain English:* optimize a proxy too hard and it stops tracking the goal. *Common mistake:* training to max proxy reward with no held-out true-objective check.
- **Constrained MDP.** *Formula:* `max E[Σγ^t r_t]` s.t. `E[Σγ^t c_t] ≤ d`. *Symbols:* `c_t` cost, `d` budget. *Plain English:* maximize reward while keeping a safety cost under budget (Lagrangian dual). *Common mistake:* folding safety into reward with a fixed weight (no guarantee).
- **Mitigations.** KL anchoring, reward-model ensembles, early stopping, RLVR with hardened verifiers, human oversight. 

### Hands-on build
- `reward_hacking_lab.py`: reproduce a specification-gaming exploit (e.g., a shaped-reward CartPole/driving exploit, or a verifier-gaming LLM from Week 9).
- `safe_ppo.py`: Lagrangian-constrained PPO on a `Safety-Gymnasium` task; trade reward against a cost budget.
- **Deliverable:** a red-team report (exploit found) + mitigation + before/after true-objective metric; **Acceptance:** you exhibit one genuine reward hack and a mitigation that restores the true objective.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — red-team a trained policy’s reward for hacking and demonstrate a constrained-MDP/penalty mitigation.

**Build it — step by step (AI-builder lab):**
1. **Setup:** reuse a trained policy + its reward from an earlier week.
2. **Red-team:** search for behaviors that inflate reward without solving the task (specification gaming).
3. **Quantify:** measure reward vs true task success — show the Goodhart gap.
4. **Mitigate:** add a constrained-MDP penalty / KL control / held-out judge.
5. **Re-eval:** before/after reward-hacking rate + task success.
6. **Document residual risk.**
- **Artifact:** a reward-hacking incident report + the hardened reward.
- **Use `$reward-hacking-redteam`:** the reusable specification-gaming probe.
- **Done when:** ≥1 real hack demonstrated and measurably reduced.
- **Stretch:** try a multi-objective reward and check for new exploits.

### Harness / reusable skill — `$reward-hacking-redteam`
- **Purpose:** systematically probe an RL agent/reward for exploits. **Inputs:** agent, reward fn, true-objective metric. **Outputs:** ranked exploit hypotheses, a demonstrated hack, a mitigation, and a re-eval.
- **Evidence artifact:** `evidence/week13-safety/` red-team report (carried into Subject 14).

### Common failure modes
- **Proxy worship** → optimize reward, ignore intent. *Fix:* always track a held-out true-objective metric.
- **Cost-as-reward** → no safety guarantee. *Fix:* constrained formulation with a real budget.
- **Single-exploit blindness** → fix one hack, miss the class. *Fix:* enumerate exploit *categories*.
- **Over-constraining** → safe but useless. *Fix:* report the reward/safety Pareto curve.

### Evidence artifact
`evidence/week13-safety/` (red-team report, Pareto curve, mitigation re-eval).

### Skill sink-in
Predict which of your prior agents is easiest to reward-hack. Try to break it. Record whether you were right and what the mitigation cost in performance.

### Dataset / environment
**Safety-Gymnasium** — https://github.com/PKU-Alignment/safety-gymnasium (Apache-2.0); plus reuse Week 9's RLVR verifier for LLM reward-gaming.

### Code stub
```python
# Lagrangian-constrained PPO: dual variable on a safety-cost budget
lagrange = torch.tensor(1.0, requires_grad=True)
def constrained_objective(reward_adv, cost_adv, lam, budget_violation):
    policy_obj = -(reward_adv).mean() + lam.detach() * (cost_adv).mean()
    lam_loss = -lam * budget_violation                # dual ascent on lambda
    return policy_obj, lam_loss
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | real hack demonstrated + mitigation works | hack only | neither |
| Evidence | Pareto curve + true-objective re-eval | report only | none |
| Reasoning | Goodhart/CMDP connected to agent | named | ignored |

### Assessment weight
**5%**.

### Reading list
- Amodei et al., "Concrete Problems in AI Safety" (2016).
- Krakovna et al., "Specification gaming: the flip side of AI ingenuity" (DeepMind, 2020).
- Gao et al., "Scaling Laws for Reward Model Overoptimization" (ICML 2023).
- Achiam et al., "Constrained Policy Optimization" (ICML 2017).

---

### State of the Art (June 2026)
- Reward hacking / specification gaming is the central 2026 RL-safety failure — same root as LLM verifier-gaming (ICLR-2026 RSI thread).
- Constrained MDPs + safe-RL (Safety-Gymnasium) and runtime guardrails are the mitigation stack.
- Reward-model over-optimization (Goodhart) is measured with held-out judges + KL control.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [Kaplan et al., 2020 - Scaling Laws](https://arxiv.org/abs/2001.08361)
- [Shao et al., 2024 - GRPO/RLVR](https://arxiv.org/abs/2402.03300)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:13L13 -->

## Week 14 — Capstone: An Agentic-RL System With a Safety Audit

**Altitude:** Specialist (graduating to Subjects 14/16) · **Anchor case:** your choice — extend the SWE-RL coding agent, a MetaDrive driving agent, or an embodied VLA task.

### Learning goals
- Run the full modern RL post-training loop on a real task: environment → reward/verifier → RL → eval → safety audit.
- Produce an **RL evidence packet** proving the agent learned for the right reasons (not reward hacking).
- Integrate ≥4 of the course's reusable skills into one coherent harness.

### Concept map (review as checklist)
- Problem → MDP/agentic spec (`$mdp-modeler`) → algorithm choice (value/policy/GRPO/RLVR) → infra → eval → reward-hacking red-team.

### Hands-on build
- Pick one track: (a) agentic SWE-RL agent (GRPO + `$agentic-rl-env`), (b) MetaDrive PPO driving agent with sim-to-real robustness, or (c) SmolVLA embodied task with RL fine-tuning.
- Ship: training curves, held-out eval, an ablation, a reward-hacking red-team report, and a 3-page write-up where every claim links to an artifact.
- **Deliverable:** `capstone/` repo + 3-page report + demo (video or notebook); **Acceptance:** the agent beats a named baseline on held-out tasks *and* passes its own reward-hacking audit.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — ship one agentic-RL system end-to-end (train → held-out eval → reward-hacking audit → evidence packet).

**Build it — step by step (AI-builder lab):**
1. **Setup:** pick a track — SWE-RL (coding), MetaDrive (driving), or LeRobot/ManiSkill (embodied).
2. **Spec:** MDP/agentic spec, algorithm, baseline, success metric, anticipated reward hack.
3. **Train:** PPO/GRPO/VLA with the right Week-5/9/11 harness; ≥3 seeds.
4. **Evaluate:** held-out vs the named baseline + one ablation.
5. **Safety audit:** `$reward-hacking-redteam` probe + a mitigation.
6. **Package:** 3-page report (every claim → artifact) + a demo.
- **Artifact:** the full evidence packet + demo committed to `rl-embodied/`.
- **Use `$rl-evidence-packet`:** compose all course skills into one auditable bundle.
- **Done when:** beats baseline on held-out (≥3 seeds); safety audit passes; demo runs.
- **Stretch:** add a second track and compare transfer.

### Harness / reusable skill — `$rl-evidence-packet`
- **Purpose:** assemble MDP spec + training logs + eval + ablation + safety audit into one reviewable bundle. **Evidence artifact:** the packet itself (this *is* the deliverable).

### Common failure modes
- **Score-only reporting** → no evidence trail. *Fix:* link every claim to a file.
- **No held-out eval** → train/test leakage. *Fix:* held-out tasks/seeds.
- **Skipping the safety audit** → ships a reward hacker. *Fix:* mandatory `$reward-hacking-redteam` pass.
- **One-seed result** → noise as signal. *Fix:* ≥3 seeds, report variance.

### Evidence artifact
`capstone/` (training logs, eval, ablation, safety audit, report, demo).

### Skill sink-in
Before the final run, write down the held-out metric you expect and the most likely reward hack. Compare to reality. The two gaps are the lesson — record both.

### Dataset / environment
Track-dependent: **SWE-Gym** (coding), **MetaDrive** (driving), or **LeRobot/ManiSkill** (embodied) — all introduced earlier with URLs/licenses above.

### Code stub
```python
# Capstone harness: compose the course skills
env    = build_env(track)            # $mdp-modeler / $agentic-rl-env
agent  = train(env, algo=cfg.algo)   # $ppo-trainer / $rlvr-trainer
report = evaluate(agent, heldout)    # $embodied-eval / resolved-rate
audit  = redteam(agent, env.reward)  # $reward-hacking-redteam
assert report.beats(baseline) and audit.passed, "capstone gate not met"
save_packet(env, agent, report, audit)   # $rl-evidence-packet
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | beats baseline on held-out, ≥3 seeds | beats on single seed | no baseline gain |
| Safety | passes reward-hacking audit | audit run, gaps noted | no audit |
| Evidence | every claim → artifact; demo runs | most claims linked | score only |
| Reasoning | algorithm/infra choices justified | partial | unjustified |

### Assessment weight
**5%** (capstone deliverable; see course Assessment for the full project weighting).

### Reading list
- Sutton & Barto (2018), Ch. 16–17 (case studies, frontiers).
- DeepSeek-AI, "DeepSeek-R1" (2025) — end-to-end RLVR system reference.
- Stanford CS234 (2026) final-project guidelines; Vizuara *RL in Production* capstone briefs.

---

### State of the Art (June 2026)
- 2026 agentic-RL capstones ship on the veRL/OpenRLHF + Ray + vLLM stack with execution-based evals and a reward-hacking audit.
- Evidence-over-demos: held-out resolved-rate, ≥3 seeds, and a documented safety audit are the bar.
- Tracks mirror the field: SWE-RL coding, MetaDrive driving, LeRobot/ManiSkill embodied.

**References & links:**
- [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources)
- [vLLM docs](https://docs.vllm.ai)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)
- [DeepSeek-AI, 2025 - DeepSeek-R1](https://arxiv.org/abs/2501.12948)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [veRL](https://github.com/volcengine/verl)
- [LeRobot](https://github.com/huggingface/lerobot)

<!-- sota:13L14 -->

## Course-level Assessment & grading

| Component | Weight |
|---|---|
| Weekly labs (Weeks 1–13 deliverables, summing the per-week weights above: 5+6+7+7+8+7+6+8+8+8+6+6+5) | **87%** |
| Capstone (Week 14 packet + demo) | **5%** |
| Reading responses & paper-presentation (one led discussion on a 2024–2026 paper) | **5%** |
| Reproducibility & evidence-log hygiene (seeds, logs, artifact links across all weeks) | **3%** |
| **Total** | **100%** |

> Weekly weights already total 87%; the remaining 13% is the capstone + scholarship + reproducibility. Each weekly deliverable is graded on its own rubric table (Correctness / Evidence / Reasoning / Reproducibility).

## Tooling & environment (June 2026)
- **Python 3.12**, **PyTorch 2.5+**, **Gymnasium 1.x** (Farama), **MetaDrive**, **MuJoCo 3.x / MJX**, **Isaac Lab**, **PettingZoo / Safety-Gymnasium**.
- **RL/post-training:** **TRL**, **veRL** (HybridFlow), **OpenRLHF**, **Ray**, **vLLM** (rollout generation), **FSDP/DeepSpeed** (training).
- **Robotics:** **LeRobot** + **SmolVLA**, **ManiSkill / robosuite**.
- **Experiment tracking:** **Weights & Biases** or **MLflow**; seeds + configs committed with every run.
- **Compute:** single-GPU works for Weeks 1–7; Weeks 8–12 assume 1–8× A100/H100-class GPUs or serverless GPU (Modal/RunPod). Tabular/classic weeks run on CPU.

## Capstone specification (milestones & acceptance checklist)
1. **Proposal (end Week 10):** task, MDP/agentic spec (`$mdp-modeler`), chosen algorithm, baseline, success metric, and the reward-hacking risk you anticipate.
2. **Prototype (Week 12):** training runs on the chosen env; first learning curve beats random; infra/throughput note.
3. **Full run + eval (Week 13):** held-out evaluation vs the named baseline, ≥3 seeds, one ablation.
4. **Safety audit (Week 14):** `$reward-hacking-redteam` report with a demonstrated probe and mitigation.
5. **Showcase (Week 14):** 3-page report (every claim → artifact) + demo.

**Acceptance checklist:** ☐ MDP/agentic spec committed ☐ reproducible (seeds+config) ☐ beats named baseline on held-out ☐ ≥3 seeds with variance ☐ one ablation ☐ reward-hacking audit passed ☐ demo runs end-to-end ☐ evidence packet assembled via `$rl-evidence-packet`.

## Skills produced (reused program-wide)
`$mdp-modeler` · `$rollout-harness` · `$value-debugger` · `$gradient-variance-meter` · `$ppo-trainer` · `$offline-data-auditor` · `$model-trust-auditor` · `$preference-tuner` · `$rlvr-trainer` · `$agentic-rl-env` · `$embodied-eval` · `$reward-shaping-auditor` · `$reward-hacking-redteam` · `$rl-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAILabs/OpenClaw-RL-Tutorial` — component-by-component RL tutorial that mirrors the DQN→PPO build path — *Lectures 1–5*
- `VizuaraAI/RL-in-Production-Bootcamp-Resources` — the course's "RL in Production" pedagogy anchor (PPO→GRPO/DPO lineage, infra) — *Lectures 5–10*
- `VizuaraAILabs/Modern-Robot-Learning` — modern robot-learning recipes (imitation + RL fine-tuning) — *Lectures 11–12*
- `VizuaraAILabs/ACT-Maniskill` — Action-Chunking Transformer on ManiSkill (action chunking, sim manipulation) — *Lecture 11 + capstone embodied track*
- `VizuaraAI/vla-driving-simulation` — vision-language-action driving in sim (grounds the MetaDrive anchor) — *Lectures 11, 14*

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **VLA / world-model reading lab** — evaluate a robotics policy / world model and write its safety analysis — *Lectures 11–14*



# Part D — Emerging Topics & AI for Science

**Track:** Frontier / Research · **Altitude:** Specialist · **Length:** 13 weeks (seminar: 3h seminar + 3h research-lab/wk)
**Format:** a **graduate research seminar**, not a lecture course. Each week pairs an instructor frame with **student-led paper presentations**, a live experiment or reproduction, and a critique. The deliverable spine is a term-long **research-reproduction or novel mini-project** plus a polished seminar presentation.
**Prerequisites:** Subjects 01–12 (foundations → LLMs → agents → multimodal/generative). You can read a 2025 ML paper, reproduce a result, run an eval, and write a critique. This course assumes you can *learn from primary sources*, not tutorials.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop applied to **frontier papers** — the unit of work is "read the claim → reproduce or stress-test it → say what's real and what's hype." Evidence over vibes is doubly enforced because frontier work is the most over-claimed.

**Course anchor (carried all term):** in Week 1 each student chooses a **research thread** (e.g., autonomous research agents, AlphaFold-style structure prediction, PINNs, SAEs/interpretability, SSMs, theorem proving, synthetic data). All term you (a) present its key papers, (b) reproduce one core result or build a novel mini-extension, and (c) defend it as a conference-style talk + short paper in the final weeks.

**What you leave with:** a `frontier/` repo with a reproduction/mini-project, a stack of paper critiques, a benchmark or ablation you ran yourself, a conference-style talk, and a short paper (4–6 pages) — evidence you can operate at the frontier and tell signal from hype.

---


## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly paper critiques + presentations (W2–W11) | 30% | Reading frontier work critically; ~3% per graded week |
| Reproduction / experiment milestones (W3, W6, W9) | 18% | You can actually reproduce/stress-test a frontier result (6% each) |
| In-class hackathon (W12) | 7% | Build something at the frontier under time pressure |
| Final research mini-project: short paper (W13) | 25% | A reproduction or novel contribution, written up honestly |
| Final conference-style talk + defense (W13) | 12% | Communicate and defend frontier work |
| Societal-impact panel + seminar participation (ongoing) | 8% | Engagement, including the W11 panel |

Weekly critique/presentation weights (the 30%): W2–W11 ≈ 3% each.

## Tooling & environment (June 2026)

- **Core:** Python 3.12, PyTorch 2.5, `uv`, JAX 0.4 (for PINNs/scientific labs), Weights & Biases, Jupyter.
- **Reproduction:** Hugging Face `transformers`/`datasets`/`diffusers`, `mamba-ssm`, `transformer-lens` (mech interp), `sae-lens`, DeepChem / `e3nn` (geometric/scientific), `deepxde` (PINNs).
- **Agents / theorem proving:** Claude Agent SDK + MCP, LangGraph; **Lean 4** + `LeanDojo`/`mathlib`, optionally Isabelle; Inspect AI for agent evals.
- **AI-for-Science tooling:** OpenFold / ESM (proteins), Materials Project API, `ase`/`pymatgen` (materials), `torchdiffeq`.
- **Compute:** seminar reproductions are sized for one 24 GB GPU or a small Modal/Colab budget; "hero" runs use released checkpoints, not from-scratch training. Where a paper's full scale is infeasible, you reproduce the *trend* (a scaled-down ablation) and say so explicitly.
- **Scholarship hygiene:** every claim cites a primary source; every reproduction reports seed, hardware, and the delta from the paper's number; "we could not reproduce X" is a valid, valued result.

## Final research mini-project spec (Weeks 12–13)

Produce **either** a faithful reproduction (with an ablation that goes beyond the paper) **or** a novel mini-contribution on your thread. Milestones:
- **M1 (W3):** thread chosen, 3-paper literature map, a reproducible baseline running.
- **M2 (W6):** core result reproduced (or a documented failure-to-reproduce) with seeds/hardware.
- **M3 (W9):** novel ablation / extension / stress-test with a result table.
- **M4 (W13):** 4–6 page short paper (related work, method, experiments, honest limitations) + a 12-minute conference talk defended to a panel.

**Acceptance checklist:** a primary-source literature map; a reproduced number with its delta from the paper; an ablation *you* ran; an explicit limitations section; a claim about what is real vs over-hyped in your thread; reproducible code (seed + environment pinned).

---

## Week 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype

**Altitude:** Specialist · **Format:** 3h seminar + 3h lab
**Anchor case:** take one over-hyped 2025–2026 result and a sober follow-up that tempered it; learn to hold both.

### Learning goals
- Read a frontier ML paper for its *claim, evidence, and the gap between them* in under an hour.
- Distinguish a reproducible result, a cherry-picked result, and an unfalsifiable claim.
- Choose a research thread and assemble a 3-paper literature map.
- State the norms of this seminar: present, reproduce, critique, defend.

### Concept map
- **Claim–evidence–gap.** Plain English: every paper claims more than it shows; your job is the delta. Where it matters: frontier work has the widest delta. Common mistake: taking the abstract as the result.
- **Reproducibility tiers.** Plain English: released code+weights+data > code only > "results available on request" > none. Common mistake: citing an irreproducible claim as fact.
- **Benchmark contamination & gaming.** Plain English: test sets leak into training; numbers inflate. Where it matters: every "SOTA." Common mistake: trusting a leaderboard without asking about contamination.
- **The hype cycle.** Plain English: a splashy result, a wave of follow-ons, then sober corrections; read the corrections. Common mistake: stopping at the splash.

### Hands-on build (the lab)
- Run the `$paper-triage` skill on 3 candidate papers in your thread; pick one to reproduce; get its baseline running (or its checkpoint loading) end-to-end.
- Write a one-page literature map: claim, evidence, gap, and what you'd test.
- **Deliverable:** `frontier/week01-thread.md` (thread + literature map + a running baseline). **Acceptance:** baseline runs/loads; the map names a falsifiable thing to test.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — triage 3 thread papers and turn the chosen one into a running baseline notebook.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install transformers datasets`; clone `VizuaraAI/paper-to-notebook`.
2. **Triage 3:** run `$paper-triage` on 3 thread papers (claim/evidence/repro-tier/contamination/disconfirming test).
3. **Pick one:** get its baseline running or checkpoint loading end-to-end in the notebook.
4. **Lit map:** one page — claim, evidence, gap, what you'd test.
5. **Falsifiable:** name the cheapest disconfirming experiment.
6. **Record** what was missing from the repo.
- **Artifact:** `frontier/week01-thread.md` + 3 triage notes + a running baseline notebook.
- **Use `$paper-triage`:** the gate before presenting any paper.
- **Done when:** baseline runs/loads; the map names a falsifiable test.
- **Stretch:** find the sober follow-up that tempered the splashy result.

### Harness / reusable skill — `$paper-triage`
- **Purpose:** rapidly assess a frontier paper's claim, evidence, reproducibility, and the one experiment that would confirm/refute it.
- **Inputs:** a paper. **Required outputs:** the central claim, the strongest and weakest evidence, reproducibility tier, contamination risk, and the cheapest disconfirming test. **Evidence artifact:** `triage/<paper>.md`.

### Common failure modes
- **Abstract-as-truth** → repeating claims you haven't checked. *Fix:* `$paper-triage`, find the gap.
- **Citation laundering** → citing irreproducible work as established. *Fix:* check the reproducibility tier.
- **Hype momentum** → ignoring the sober follow-up. *Fix:* read the corrections, not just the splash.
- **Thread too big** → "I'll reproduce AlphaFold." *Fix:* scope to a reproducible sub-result.

### Evidence artifact
`frontier/week01-thread.md` + 3 `$paper-triage` notes.

### Skill sink-in
Predict whether your chosen paper is fully reproducible from its repo. Try to run it. Record what was missing.

### Depth upgrade
- **Dataset / source:** arXiv + Papers With Code + the paper's own repo/checkpoints; the **AI Index Report 2025** (Stanford HAI) for landscape context (open access).
- **Code stub:**
```python
PAPER_TRIAGE = {
  "claim": "",                # one sentence: what they say they achieved
  "evidence_strongest": "",   # the single most convincing result
  "evidence_weakest": "",     # the result that doesn't support the claim
  "repro_tier": "",           # weights+code+data | code | on-request | none
  "contamination_risk": "",   # could the benchmark be in training data?
  "disconfirming_test": "",   # cheapest experiment that would refute the claim
}
def triage_complete(t): return all(v for v in t.values())   # gate before presenting
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Claim–gap | Names the precise delta | Vague | Repeats abstract |
| Reproducibility | Tier assessed + tested | Stated | Ignored |
| Scope | Reproducible sub-result | Too broad | Undefined |
| Disconfirming test | Concrete, cheap | Vague | None |

- **Assessment weight:** part of the 8% participation (W1 onboarding).
- **Readings:**
  - Stanford HAI, "The AI Index Report 2025."
  - Kapoor & Narayanan, "Leakage and the Reproducibility Crisis in ML-based Science," *Patterns*, 2023.
  - Pineau et al., "Improving Reproducibility in Machine Learning Research (NeurIPS Reproducibility Program)," *JMLR*, 2021.
  - Lipton & Steinhardt, "Troubling Trends in Machine Learning Scholarship," 2018.

---

### State of the Art (June 2026)
- Reproducibility crisis + benchmark contamination are first-order concerns; the AI Index 2025 gives landscape context.
- Papers With Code + released checkpoints define reproducibility tiers; the 1M-context/MoE frontier inflates ‘SOTA’ churn.
- LLM-as-judge leaderboards need contamination + bias scrutiny (TrustJudge).

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Abramson et al., 2024 - AlphaFold3](https://www.nature.com/articles/s41586-024-07487-w)

<!-- sota:15L01 -->

## Week 2 — Autonomous Research Agents: The "AI Scientist"

**Altitude:** Specialist · **Anchor case:** an agent that proposes hypotheses, runs experiments, and writes them up — and the question of whether its "discoveries" are real.

### Learning goals
- Describe the AI-scientist loop: ideation → experiment design → execution (code/tools) → analysis → write-up → review.
- Run/inspect an autonomous-research-agent system on a bounded task and audit its outputs for validity.
- Critique autonomy claims: novelty, correctness, and the verification bottleneck.

### Concept map
- **The research loop as an agent.** Plain English: wrap ideation, coding, and analysis in a planner/critic agent with tools. Where it matters: it can parallelize drudgery. Common mistake: assuming generated "findings" are correct without verification.
- **Verification bottleneck.** Plain English: generating hypotheses is cheap; *verifying* them is the hard, expensive part. Where it matters: this is where AI scientists succeed or fail. Common mistake: equating fluent write-ups with valid science.
- **Novelty vs recombination.** Plain English: most agent "ideas" recombine known work; genuine novelty is rare and must be checked against the literature. Common mistake: novelty claims without a literature check.
- **Automated reviewing & its biases.** Plain English: LLM reviewers inherit biases and can be gamed. Where it matters: closing the loop responsibly.

### Hands-on build (the lab)
- Run an AI-Scientist-style agent (or build a scoped one with the Claude Agent SDK) on a small ML task (e.g., propose+test a regularizer on a tiny benchmark); **audit** every claimed result against your own re-run.
- **Deliverable:** `frontier/ai-scientist/` with the agent transcript, your independent verification, and a validity verdict. **Acceptance:** ≥1 agent claim independently checked; at least one over-claim or error found and documented.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce an AI-Scientist-style claim into a notebook and independently re-run it to find an over-claim.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; a tiny benchmark (CIFAR-10 subset / sklearn task); the AI-Scientist repo as reference.
2. **Run an agent:** AI-Scientist-style (or a scoped Claude Agent SDK agent) proposes + tests a regularizer.
3. **Audit:** independently re-run every claimed result (multi-seed).
4. **Verdict:** supported vs over-claimed (within 2σ of the claim?).
5. **Novelty check:** literature-check any "novel" claim.
6. **Name** the verification bottleneck.
- **Artifact:** `frontier/ai-scientist/` transcript + `claim-audit.md` + a validity verdict.
- **Use `$research-claim-audit`:** independent reproduction + gap analysis.
- **Done when:** ≥1 claim independently checked; ≥1 over-claim/error documented.
- **Stretch:** re-seed and show whether the headline survives.

### Harness / reusable skill — `$research-claim-audit`
- **Purpose:** independently verify a claim produced by an autonomous (or human) research process.
- **Inputs:** a claimed result + its code/log. **Required outputs:** a reproduction attempt, a validity verdict, and the specific gap (if any) between claim and evidence. **Evidence artifact:** `claim-audit.md`.

### Common failure modes
- **Fluent-but-wrong** → polished write-up of an invalid result. *Fix:* independent re-run.
- **Novelty inflation** → "novel" rediscovery. *Fix:* literature check before crediting novelty.
- **Verification skipped** → trusting the agent's own eval. *Fix:* external verifier, not self-report.
- **Cherry-picked seed** → result vanishes on reseed. *Fix:* multi-seed reproduction.

### Evidence artifact
`frontier/ai-scientist/claim-audit.md` + transcript.

### Skill sink-in
Predict whether the agent's headline result survives your independent re-run. Re-run it. Record whether it held.

### Depth upgrade
- **Dataset / source:** a tiny benchmark of your choice (e.g., CIFAR-10 subset, a `sklearn` task) for the agent to experiment on; reference: **The AI Scientist** repo (github.com/SakanaAI/AI-Scientist, Apache-2.0).
- **Code stub:**
```python
def audit_claim(claim: dict, rerun_fn, n_seeds=5):
    results = [rerun_fn(seed=s) for s in range(n_seeds)]
    import numpy as np
    mean, std = np.mean(results), np.std(results)
    claimed = claim["reported_metric"]
    holds = abs(mean - claimed) <= 2 * std            # within noise of the claim?
    return {"reproduced_mean": mean, "std": std, "claimed": claimed,
            "holds": bool(holds), "verdict": "supported" if holds else "over-claimed"}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Verification | Multi-seed independent re-run | Single re-run | Trusts agent |
| Novelty check | Literature-checked | Asserted | None |
| Verdict | Evidence-backed | Stated | Vibes |
| Critique | Names the bottleneck | Partial | None |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Lu et al., "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery," Sakana AI, 2024.
  - Boiko et al., "Autonomous chemical research with large language models (Coscientist)," *Nature*, 2023.
  - Si, Yang & Hashimoto, "Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study," 2024.
  - Romera-Paredes et al., "Mathematical discoveries from program search with LLMs (FunSearch)," *Nature*, 2024.

---

### State of the Art (June 2026)
- AI-Scientist (Sakana), Coscientist, and FunSearch are the references; the verification bottleneck (not ideation) is the limit.
- Novelty-vs-recombination and automated-reviewer bias are active critiques (Si et al. human study).
- Execution-grounded research loops (Claude Agent SDK + MCP tools) are the 2026 build pattern.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)

<!-- sota:15L02 -->

## Week 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL

**Altitude:** Specialist · **Anchor case:** protein structure prediction as the field's proof that ML can solve a 50-year scientific problem — and what generalizes from it. **(Reproduction milestone M1 due.)**

### Learning goals
- Explain the AlphaFold2/3 recipe: evolutionary input (MSA) → pairwise representation → equivariant structure module → confidence (pLDDT).
- Run inference with a released structure model (ESMFold / OpenFold) and interpret confidence.
- Describe equivariance/geometric DL and why 3D symmetry matters for molecular ML.

### Concept map
- **Equivariance.** *Plain English:* if you rotate the input molecule, the predicted structure should rotate the same way; build this symmetry into the network (`e3nn`, SE(3)-equivariance). *Where it matters:* sample efficiency and physical validity. *Common mistake:* data-augmenting rotations instead of building equivariance in.
- **MSA / evolutionary signal.** Plain English: co-evolving residues hint at spatial contacts; AlphaFold exploits this. Where it matters: performance drops on orphan proteins without MSAs (ESMFold uses a language model instead). Common mistake: assuming it works without evolutionary context.
- **Confidence (pLDDT/PAE).** Plain English: the model reports per-residue confidence; low confidence flags unreliable regions. Where it matters: scientific honesty. Common mistake: trusting low-confidence regions.
- **Generalization limits.** Plain English: great on folding, weaker on dynamics/novel folds/complexes. Where it matters: don't over-extrapolate the success.

### Hands-on build (the lab)
- Run **ESMFold** (or OpenFold) on a handful of sequences; compare predicted structures to PDB ground truth (TM-score/RMSD); analyze pLDDT vs actual error.
- Get your thread's reproducible baseline running (**M1**).
- **Deliverable:** `frontier/structure/` with predictions, accuracy vs PDB, a confidence-vs-error analysis, and `frontier/M1-litmap.md`. **Acceptance:** structures predicted; confidence correlates (or not) with error, reported honestly; M1 baseline runs.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build an ESMFold inference notebook, compare to PDB (TM-score/RMSD), and analyze pLDDT-vs-error calibration.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU Colab; `pip install transformers torch`; PDB sequences + ESMFold (`facebook/esmfold_v1`).
2. **Fold:** run ESMFold on a handful of sequences.
3. **Compare:** TM-score/RMSD vs PDB ground truth.
4. **Confidence:** analyze pLDDT vs actual error (calibration).
5. **Equivariance:** explain where SE(3)-equivariance matters.
6. **Limits:** name failure regimes (dynamics, novel folds, complexes).
- **Artifact:** `frontier/structure/repro.md` + confidence-vs-error analysis + `M1-litmap.md`.
- **Use `$scientific-repro`:** reproduce with provenance + an honest delta.
- **Done when:** structures predicted; confidence calibration reported; M1 baseline runs.
- **Stretch:** compare to an OpenFold (MSA) run on an orphan protein.

### Harness / reusable skill — `$scientific-repro`
- **Purpose:** reproduce a scientific-ML result with full provenance and an honest delta.
- **Inputs:** a released model + a ground-truth set. **Required outputs:** the reproduced metric, the paper's number, the delta, seeds/hardware, and a "matches / does-not-match" verdict. **Evidence artifact:** `repro.md`.

### Common failure modes
- **Confidence ignored** → trusting low-pLDDT regions. *Fix:* gate by confidence, report the correlation.
- **Augmentation instead of equivariance** → data-hungry, less robust. *Fix:* use equivariant layers where appropriate.
- **Over-extrapolation** → "AlphaFold solved biology." *Fix:* name the failure regimes (dynamics, novel folds).
- **No ground-truth comparison** → unvalidated structures. *Fix:* TM-score/RMSD vs PDB.

### Evidence artifact
`frontier/structure/repro.md` + confidence-vs-error analysis + `M1-litmap.md`.

### Skill sink-in
Predict whether pLDDT confidence tracks true error on your sequences. Plot it. Record how well calibrated the confidence is.

### Depth upgrade
- **Dataset / source:** sequences + structures from the **PDB** (rcsb.org, public domain) and **CASP** targets; **ESMFold/ESM-2** via huggingface.co/facebook/esm2_t33_650M_UR50D (MIT). Optional: **OpenFold** (github.com, Apache-2.0).
- **Code stub:**
```python
import torch
from transformers import AutoTokenizer, EsmForProteinFolding
tok = AutoTokenizer.from_pretrained("facebook/esmfold_v1")
model = EsmForProteinFolding.from_pretrained("facebook/esmfold_v1").cuda()
def fold(seq):
    inp = tok([seq], return_tensors="pt", add_special_tokens=False)["input_ids"].cuda()
    with torch.no_grad():
        out = model(inp)
    return out["positions"][-1], out["plddt"]        # coords, per-residue confidence
# compare to PDB with TM-score / RMSD; analyze plddt vs |pred - true|
```
- **Graded rubric table (governs M1):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Reproduction | Metric + delta + provenance | Runs, no delta | Doesn't run |
| Confidence analysis | Calibration quantified | Shown | Ignored |
| Equivariance grasp | Explains + where it matters | Partial | Confused |
| Limits | Names failure regimes | Partial | Overclaims |

- **Assessment weight:** ~3% critique + the 6% M1 milestone.
- **Readings:**
  - Jumper et al., "Highly accurate protein structure prediction with AlphaFold," *Nature*, 2021.
  - Abramson et al., "Accurate structure prediction of biomolecular interactions with AlphaFold3," *Nature*, 2024.
  - Lin et al., "Evolutionary-scale prediction of atomic-level protein structure with a language model (ESMFold)," *Science*, 2023.
  - Geiger & Smidt, "e3nn: Euclidean Neural Networks," 2022.

---

### State of the Art (June 2026)
- AlphaFold3 (biomolecular complexes) + ESMFold (MSA-free LM) are the references; pLDDT/PAE confidence calibration is the honesty check.
- e3nn / SE(3)-equivariance is the geometric-DL standard; failure regimes are dynamics and novel folds.
- PDB/CASP remain ground truth.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Abramson et al., 2024 - AlphaFold3](https://www.nature.com/articles/s41586-024-07487-w)

<!-- sota:15L03 -->

## Week 4 — AI for Science II: Molecules, Materials & Generative Design

**Altitude:** Specialist · **Anchor case:** generative design of molecules/materials (GNoME, MatterGen-style) and the gap between *proposed* and *validated* candidates.

### Learning goals
- Explain ML-driven materials/molecule discovery: property prediction + generative proposal + (in silico) validation.
- Run a generative or screening pipeline and assess validity, novelty, and synthesizability.
- Critique discovery-count claims ("millions of new materials") against experimental validation rates.

### Concept map
- **Property prediction + screening.** Plain English: predict stability/properties fast, screen a huge candidate pool. Where it matters: throughput. Common mistake: screening with a model outside its applicability domain.
- **Generative proposal.** Plain English: diffusion/flow/VAE over molecular/crystal structures proposes candidates; constrain to valid chemistry. Common mistake: invalid or unsynthesizable outputs.
- **Validation gap.** Plain English: "N new candidates" is not "N new materials" until validated (DFT, then lab). Where it matters: the honest headline. Common mistake: reporting proposals as discoveries.
- **Distribution shift / novelty.** Plain English: truly novel candidates are OOD for the property model; uncertainty matters. Common mistake: trusting confident OOD predictions.

### Hands-on build (the lab)
- Run a property/stability screen on **Materials Project** (or a molecular generator like a junction-tree/diffusion model on **QM9**); report validity, novelty, and an uncertainty/applicability-domain check.
- **Deliverable:** `frontier/materials/` with generated/screened candidates, validity+novelty stats, and a "proposed vs validated" honesty note. **Acceptance:** validity & novelty reported; the proposal-vs-discovery distinction made explicit.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce a generator/screen on QM9 / Materials Project as a validity-funnel notebook (generated→valid→novel→synthesizable).

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install rdkit`; QM9 / Materials Project API (free key).
2. **Generate/screen:** a molecular generator or a stability screen.
3. **Validity funnel:** generated → valid (RDKit) → novel → synthesizable, count per stage.
4. **Uncertainty:** an applicability-domain/OOD check on novel candidates.
5. **Baseline:** compare hit-rate to random/enumeration.
6. **Honesty:** proposed ≠ validated, explicit.
- **Artifact:** `frontier/materials/validity-check.md` + the candidate funnel.
- **Use `$discovery-validity-check`:** separate proposals from validated discoveries.
- **Done when:** validity+novelty reported; proposal-vs-discovery made explicit.
- **Stretch:** run DFT formation-energy on the top survivors.

### Harness / reusable skill — `$discovery-validity-check`
- **Purpose:** separate plausible proposals from validated discoveries.
- **Inputs:** generated candidates. **Required outputs:** chemical-validity rate, novelty vs training set, synthesizability/applicability flag, and the count that survives each filter. **Evidence artifact:** `validity-check.md`.

### Common failure modes
- **Proposals reported as discoveries** → inflated counts. *Fix:* the validation funnel; report survivors per stage.
- **Invalid chemistry** → unsynthesizable molecules. *Fix:* validity filters (RDKit / formation energy).
- **OOD overconfidence** → trusting predictions on novel structures. *Fix:* uncertainty + applicability domain.
- **No baseline** → random/enumeration baseline untried. *Fix:* compare hit-rate to a baseline.

### Evidence artifact
`frontier/materials/validity-check.md` + candidate funnel.

### Skill sink-in
Predict the fraction of generated candidates that pass all validity filters. Run the funnel. Record the survival rate.

### Depth upgrade
- **Dataset / source:** QM9 — quantum-machine.org / huggingface.co/datasets/n0w0f/qm9 (134k molecules, ~150 MB, CC0); **Materials Project** API (materialsproject.org, CC BY 4.0, free key). Reference: **GNoME / MatterGen** papers.
- **Code stub:**
```python
from rdkit import Chem
def validity_funnel(smiles_list, train_set):
    valid = [s for s in smiles_list if Chem.MolFromSmiles(s) is not None]
    novel = [s for s in valid if Chem.CanonSmiles(s) not in train_set]
    return {"generated": len(smiles_list), "valid": len(valid), "novel": len(novel),
            "validity_rate": len(valid)/len(smiles_list),
            "novelty_rate": len(novel)/max(1, len(valid))}   # report each stage
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Validity funnel | Per-stage survival reported | Validity only | None |
| Honesty | Proposed≠validated explicit | Implied | Conflated |
| Uncertainty/OOD | Applicability domain | Mentioned | Ignored |
| Baseline | Beats random/enumeration | Has baseline | None |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Merchant et al., "Scaling deep learning for materials discovery (GNoME)," *Nature*, 2023.
  - Zeni et al., "MatterGen: a generative model for inorganic materials design," *Nature*, 2025.
  - Ramakrishnan et al., "Quantum chemistry structures and properties of 134 kilo molecules (QM9)," *Scientific Data*, 2014.
  - Cheetham & Seshadri, "Artificial Intelligence Driving Materials Discovery? Perspective on the Article," *Chemistry of Materials*, 2024 (the skeptical counterpoint).

---

### State of the Art (June 2026)
- GNoME + MatterGen (Nature 2023/2025) are the generative-discovery references; the proposed-vs-validated gap is the headline critique (Cheetham/Seshadri).
- Validity funnels (RDKit / formation-energy) + applicability-domain/uncertainty gate OOD overconfidence.
- Materials Project API + QM9 are the open datasets.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Su et al., 2021 - RoPE](https://arxiv.org/abs/2104.09864)

<!-- sota:15L04 -->

## Week 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates

**Altitude:** Specialist · **Anchor case:** solving/【learning】a PDE with a physics-informed network vs a neural operator — and when each is the right tool.

### Learning goals
- Implement a PINN that embeds a PDE residual in the loss and solve a benchmark equation.
- Contrast PINNs (solve one PDE instance, mesh-free) with neural operators (learn a solution operator across instances).
- Diagnose PINN training pathologies (stiffness, spectral bias, loss balancing).

### Concept map
- **Physics-informed loss.** *Formula:* `L = L_data + λ·L_PDE`, where `L_PDE = ‖N[u_θ](x)‖²` is the PDE residual via autodiff. *Plain English:* penalize violating the governing equation, not just data error. *Code mapping:* use `torch.autograd.grad` for derivatives of the network. *Common mistake:* mis-weighting `λ` so one term dominates.
- **PINN vs neural operator.** Plain English: a PINN fits one solution; a Fourier Neural Operator learns a mapping from inputs (e.g., initial conditions) to solutions for a whole family. Where it matters: reuse and speed. Common mistake: using a PINN where you need a fast surrogate over many instances.
- **Training pathologies.** Plain English: PINNs struggle with stiff/multiscale/high-frequency solutions (spectral bias); gradient pathologies require loss balancing/curriculum. Common mistake: blaming the physics when it's an optimization problem.
- **Validation against the solver.** Plain English: always compare to a trusted numerical solution. Common mistake: a low loss that hides a wrong solution.

### Hands-on build (the lab)
- Implement a PINN for a 1D Burgers'/heat equation in PyTorch/`deepxde`; compare to a numerical solver; then train an **FNO** on a family of instances and compare accuracy + speed.
- **Deliverable:** `frontier/pinn/` with the PINN solution, solver comparison, the FNO surrogate, and a loss-balancing note. **Acceptance:** PINN matches the solver within tolerance (or the pathology is diagnosed); FNO generalizes across instances.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build a Burgers PINN + an FNO in one notebook, validate vs a solver, and compare generalization across instances.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install deepxde torch`; neuraloperator data.
2. **PINN:** a 1D Burgers'/heat solver with a PDE-residual loss (`torch.autograd.grad`).
3. **Validate:** compare to a numerical solver within tolerance.
4. **FNO:** train a Fourier Neural Operator on a family of instances.
5. **Compare:** accuracy + speed; generalization to a new initial condition.
6. **Diagnose:** spectral-bias / loss-balancing pathologies.
- **Artifact:** `frontier/pinn/physics-validity.md` + solver comparison + FNO results.
- **Use `$physics-validity`:** PDE-residual + solver + conservation checks.
- **Done when:** PINN matches solver (or pathology diagnosed); FNO generalizes.
- **Stretch:** add Fourier features and show the high-frequency fix.

### Harness / reusable skill — `$physics-validity`
- **Purpose:** validate a learned PDE solution against physics and a numerical reference.
- **Inputs:** a learned solution. **Required outputs:** PDE-residual magnitude, error vs the solver, a conservation/boundary check, and the failure regime. **Evidence artifact:** `physics-validity.md`.

### Common failure modes
- **Loss imbalance** → fits data, violates physics (or vice versa). *Fix:* balance/anneal `λ`, gradient-based weighting.
- **Spectral bias** → misses high-frequency structure. *Fix:* Fourier features / curriculum / domain decomposition.
- **No solver comparison** → confident wrong solution. *Fix:* always validate against a numerical reference.
- **PINN where an operator is needed** → re-solving per instance. *Fix:* neural operator for families.

### Evidence artifact
`frontier/pinn/physics-validity.md` + solver comparison + FNO results.

### Skill sink-in
Predict whether your PINN or the FNO is more accurate on a *new* initial condition. Test. Record which generalized and why.

### Depth upgrade
- **Dataset / source:** self-generated PDE data from a numerical solver; FNO benchmark data — github.com/neuraloperator (Burgers/Darcy/Navier-Stokes datasets, MIT). Tooling: **DeepXDE** (deepxde.readthedocs.io, LGPL).
- **Code stub:**
```python
import torch
def pde_residual(net, x, t, nu=0.01/3.1416):          # Burgers': u_t + u u_x - nu u_xx = 0
    x.requires_grad_(True); t.requires_grad_(True)
    u = net(torch.cat([x, t], 1))
    u_t = torch.autograd.grad(u, t, torch.ones_like(u), create_graph=True)[0]
    u_x = torch.autograd.grad(u, x, torch.ones_like(u), create_graph=True)[0]
    u_xx = torch.autograd.grad(u_x, x, torch.ones_like(u_x), create_graph=True)[0]
    return u_t + u * u_x - nu * u_xx                   # should be ~0
def loss(net, x_d, t_d, u_d, x_c, t_c, lam=1.0):
    data = ((net(torch.cat([x_d, t_d], 1)) - u_d) ** 2).mean()
    phys = (pde_residual(net, x_c, t_c) ** 2).mean()
    return data + lam * phys
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| PINN correctness | Matches solver / pathology diagnosed | Close | Wrong, undiagnosed |
| Operator comparison | FNO generalizes, timed | One method | None |
| Loss balancing | Justified weighting | Default | Ignored |
| Validation | Residual + solver + conservation | Partial | Loss only |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Raissi, Perdikaris & Karniadakis, "Physics-Informed Neural Networks," *Journal of Computational Physics*, 2019.
  - Li et al., "Fourier Neural Operator for Parametric PDEs," *ICLR* 2021.
  - Wang, Teng & Perdikaris, "Understanding and Mitigating Gradient Pathologies in PINNs," *SIAM J. Sci. Comput.*, 2021.
  - Krishnapriyan et al., "Characterizing Possible Failure Modes in Physics-Informed Neural Networks," *NeurIPS* 2021.

---

### State of the Art (June 2026)
- PINNs vs Fourier Neural Operators (FNO) is the core contrast; neural operators win for families/surrogates.
- Training pathologies (spectral bias, loss imbalance) need Fourier features / curriculum / gradient weighting.
- DeepXDE + neuraloperator are the tooling; always validate against a numerical solver.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Raissi et al., 2019 - PINNs](https://arxiv.org/abs/1711.10561)

<!-- sota:15L05 -->

## Week 6 — Emergence, Scaling & In-Context Learning

**Altitude:** Specialist · **Anchor case:** the "emergent abilities" debate — real phase transitions vs artifacts of discontinuous metrics. **(Reproduction milestone M2 due.)**

### Learning goals
- Explain scaling laws and the claim of emergent abilities, then the metric-artifact critique.
- Reproduce a small scaling/emergence trend and test whether "emergence" survives a smooth metric.
- Reason about in-context learning as an emergent capability and its proposed mechanisms.

### Concept map
- **Scaling laws.** *Formula:* loss `L(N,D) ≈ E + A/N^α + B/D^β` (params `N`, data `D`). *Plain English:* loss falls predictably with scale; compute-optimal balances `N` and `D` (Chinchilla). *Common mistake:* extrapolating a power law far past its fitted range.
- **Emergent abilities & the metric critique.** Plain English: some abilities appear to "switch on" at scale — but often because the metric is discontinuous (exact-match); smooth metrics show gradual improvement. Where it matters: don't mistake your ruler for the territory. Common mistake: reporting emergence under exact-match without checking a continuous metric.
- **In-context learning.** Plain English: models learn a task from prompt examples without weight updates; proposed mechanisms include implicit gradient descent / induction heads. Common mistake: treating ICL as magic rather than a studied phenomenon.
- **Grokking.** Plain English: delayed generalization long after fitting train — a real, reproducible emergence at small scale. Where it matters: a clean lab for studying emergence.

### Hands-on build (the lab)
- Reproduce **grokking** on modular arithmetic (small transformer) *or* an emergence curve where you compare an exact-match vs a continuous metric on the same task; show whether "emergence" persists.
- Submit **M2** (core thread result reproduced).
- **Deliverable:** `frontier/emergence/` with the curve(s), the metric-sensitivity analysis, and `frontier/M2-repro.md`. **Acceptance:** the metric-artifact effect demonstrated or refuted on your task; M2 reproduced with seeds/hardware.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce grokking on modular arithmetic and test whether ‘emergence’ survives a continuous metric.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install transformers datasets`; Pythia suite / BIG-Bench tasks.
2. **Grokking:** a tiny transformer on `(a+b) mod p`; watch val long after train fits.
3. **Two metrics:** the same predictions under exact-match vs a continuous metric.
4. **Verdict:** does "emergence" survive the smooth metric?
5. **Scaling:** fit a power law; state the fitted range (no over-extrapolation).
6. **Multi-seed** the grokking curve.
- **Artifact:** `frontier/emergence/emergence-probe.md` + `M2-repro.md`.
- **Use `$emergence-probe`:** test claimed jumps as real vs metric artifact.
- **Done when:** the metric-artifact effect demonstrated/refuted; M2 reproduced w/ seeds.
- **Stretch:** cite induction-head / implicit-GD evidence for ICL.

### Harness / reusable skill — `$emergence-probe`
- **Purpose:** test whether a claimed emergent jump is real or a metric artifact.
- **Inputs:** a capability-vs-scale (or vs-step) result. **Required outputs:** the curve under a discontinuous and a continuous metric, and a verdict on whether emergence survives. **Evidence artifact:** `emergence-probe.md`.

### Common failure modes
- **Metric artifact mistaken for emergence** → false phase transition. *Fix:* re-measure with a smooth metric.
- **Power-law over-extrapolation** → predicting far past data. *Fix:* state the fitted range.
- **Single seed grokking** → noise. *Fix:* multi-seed.
- **ICL mysticism** → no mechanism. *Fix:* cite induction-head / implicit-GD evidence.

### Evidence artifact
`frontier/emergence/emergence-probe.md` + `M2-repro.md`.

### Skill sink-in
Predict whether your task's "emergence" survives a continuous metric. Measure both. Record the answer.

### Depth upgrade
- **Dataset / source:** synthetic modular-arithmetic data (you generate) for grokking; for emergence, a few **BIG-Bench** tasks (github.com/google/BIG-bench, Apache-2.0) across model sizes (Pythia suite, huggingface.co/EleutherAI, Apache-2.0).
- **Code stub:**
```python
# grokking: tiny transformer on (a+b) mod p; watch train vs val long after train fits
def make_modular(p=97):
    import itertools
    data = [((a, b), (a + b) % p) for a, b in itertools.product(range(p), range(p))]
    return data
# emergence-probe: same predictions, two metrics
def exact_match(pred, gold): return float(pred == gold)
def token_edit_sim(pred, gold):                     # continuous: smooth credit
    import difflib
    return difflib.SequenceMatcher(None, str(pred), str(gold)).ratio()
```
- **Graded rubric table (governs M2):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Reproduction | M2 result + delta + seeds | Runs | Fails |
| Metric analysis | Both metrics, clear verdict | One metric | None |
| Scaling grasp | Explains laws + limits | Partial | Confused |
| Multi-seed | Reported | Single | None |

- **Assessment weight:** ~3% critique + the 6% M2 milestone.
- **Readings:**
  - Kaplan et al., "Scaling Laws for Neural Language Models," 2020; Hoffmann et al., "Training Compute-Optimal LLMs (Chinchilla)," *NeurIPS* 2022.
  - Wei et al., "Emergent Abilities of Large Language Models," *TMLR*, 2022.
  - Schaeffer, Miranda & Koyejo, "Are Emergent Abilities of LLMs a Mirage?," *NeurIPS* 2023.
  - Power et al., "Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets," 2022.

---

### State of the Art (June 2026)
- Emergence-as-metric-artifact (Schaeffer 2023) vs Wei 2022 is the live debate; grokking is the clean small-scale lab.
- Chinchilla compute-optimal scaling still frames training; power-law over-extrapolation is the warning.
- Pythia suite + BIG-Bench enable cross-scale reproduction.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Hoffmann et al., 2022 - Chinchilla scaling](https://arxiv.org/abs/2203.15556)
- [Kaplan et al., 2020 - Scaling Laws](https://arxiv.org/abs/2001.08361)

<!-- sota:15L06 -->

## Week 7 — Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring

**Altitude:** Specialist · **Anchor case:** reverse-engineering a small circuit and extracting interpretable features with a sparse autoencoder.

### Learning goals
- Explain mechanistic interpretability: features, circuits, superposition, and the role of sparse autoencoders.
- Train/inspect an SAE on model activations and interpret features; verify with activation patching.
- Critique interpretability claims and discuss CoT monitoring as a safety tool and its faithfulness limits.

### Concept map
- **Superposition.** *Plain English:* models pack more features than neurons by overlapping them; that's why single neurons are polysemantic. *Where it matters:* you need SAEs to disentangle. *Common mistake:* interpreting a neuron as one concept.
- **Sparse autoencoders (SAEs).** *Plain English:* learn an overcomplete, sparse dictionary of activation directions ("features") that are more monosemantic. *Code mapping:* encoder→sparse code→decoder, with an L1 penalty. *Common mistake:* dead features / no sparsity → uninterpretable.
- **Circuits & activation patching.** Plain English: trace how specific components implement a behavior; *patch* an activation from one run into another to test causal necessity. Common mistake: correlational stories without causal patching.
- **CoT monitoring & faithfulness.** Plain English: read the model's chain-of-thought to catch misbehavior — but CoT can be unfaithful (post-hoc rationalization). Where it matters: safety. Common mistake: trusting CoT as a true account of computation.

### Hands-on build (the lab)
- Use `transformer-lens` to find an induction head / a small circuit in a small model via activation patching; then train (or load via `sae-lens`) an SAE on a layer and interpret 5 features.
- **Deliverable:** `frontier/interp/` with the circuit (patching evidence), SAE feature interpretations, and a faithfulness note. **Acceptance:** ≥1 causal patching result; ≥5 interpreted features with evidence (max-activating examples).

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce an induction-head activation-patching result and interpret ≥5 SAE features in one notebook.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install transformer_lens sae_lens`; GPT-2 small / Pythia.
2. **Circuit:** find an induction head via activation patching.
3. **Causal test:** patch a clean activation into a corrupt run — did behavior restore?
4. **SAE:** load (sae_lens) or train an SAE; interpret 5 features w/ max-activating examples.
5. **Validate:** ablate a circuit component; confirm the behavior breaks.
6. **Caveat** CoT faithfulness.
- **Artifact:** `frontier/interp/interp-evidence.md` + patching + SAE features.
- **Use `$interp-evidence`:** hold interpretability claims to a causal standard.
- **Done when:** ≥1 causal patching result; ≥5 interpreted features with evidence.
- **Stretch:** compare your SAE features to Neuronpedia.

### Harness / reusable skill — `$interp-evidence`
- **Purpose:** hold interpretability claims to a causal standard.
- **Inputs:** a circuit/feature claim. **Required outputs:** max-activating examples, an activation-patching/ablation test of necessity, and a confidence-calibrated interpretation. **Evidence artifact:** `interp-evidence.md`.

### Common failure modes
- **Polysemantic over-interpretation** → "this neuron = X." *Fix:* SAEs; report superposition.
- **Correlational just-so stories** → no causal test. *Fix:* activation patching/ablation.
- **Dead SAE features** → no sparsity. *Fix:* tune L1/width, monitor feature density.
- **CoT taken as faithful** → trusting rationalizations. *Fix:* faithfulness tests; treat CoT as a signal, not ground truth.

### Evidence artifact
`frontier/interp/interp-evidence.md` + patching + SAE features.

### Skill sink-in
Predict whether ablating your identified circuit component actually breaks the behavior. Ablate it. Record the causal result.

### Depth upgrade
- **Dataset / source:** small models + tooling — **GPT-2 small** / **Pythia** via `transformer-lens` (github.com, MIT); pretrained SAEs via `sae-lens` (github.com, MIT) / Neuronpedia. Probing prompts you write.
- **Code stub:**
```python
from transformer_lens import HookedTransformer
import torch
model = HookedTransformer.from_pretrained("gpt2")
def patch_and_measure(clean, corrupt, layer, pos):
    _, clean_cache = model.run_with_cache(clean)
    def hook(act, hook):                              # patch clean activation into corrupt run
        act[:, pos, :] = clean_cache[hook.name][:, pos, :]; return act
    name = f"blocks.{layer}.hook_resid_post"
    logits = model.run_with_hooks(corrupt, fwd_hooks=[(name, hook)])
    return logits                                     # did patching restore the behavior?
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Causal evidence | Patching/ablation necessity | Correlational | None |
| SAE features | ≥5 interpreted w/ evidence | A few, weak | None |
| Superposition grasp | Explains + accounts for it | Partial | Neuron=concept |
| CoT faithfulness | Tests/caveats it | Mentions | Trusts blindly |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Elhage et al., "Toy Models of Superposition," Anthropic, 2022.
  - Bricken et al., "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning (SAEs)," Anthropic, 2023; Templeton et al., "Scaling Monosemanticity," 2024.
  - Olsson et al., "In-context Learning and Induction Heads," Anthropic, 2022.
  - Lanham et al., "Measuring Faithfulness in Chain-of-Thought Reasoning," Anthropic, 2023.

---

### State of the Art (June 2026)
- SAEs for monosemantic features (Scaling Monosemanticity, Gemma Scope) + activation patching for causal circuits; a MIT 2026 mech-interp breakthrough accelerated the field.
- Induction heads remain the canonical circuit; causal patching beats correlational stories.
- TransformerLens + SAELens/Neuronpedia tooling.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Wei et al., 2022 - Chain-of-Thought](https://arxiv.org/abs/2201.11903)
- [Anthropic, 2023 - Towards Monosemanticity](https://transformer-circuits.pub/2023/monosemantic-features)
- [Anthropic - Transformer Circuits](https://transformer-circuits.pub)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:15L07 -->

## Week 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning

**Altitude:** Specialist · **Anchor case:** a task where pure neural nets fail at systematic reasoning and a neuro-symbolic hybrid succeeds (e.g., program synthesis / constraint solving / abstract reasoning).

### Learning goals
- Explain the neuro-symbolic spectrum: neural perception + symbolic reasoning, differentiable logic, program induction, LLM+solver.
- Build a hybrid where an LLM generates a symbolic program/constraints that a verifier/solver executes.
- Reason about when symbols buy you systematic generalization and verifiability.

### Concept map
- **Why hybridize.** Plain English: neural nets excel at perception/pattern but struggle with systematic, compositional, verifiable reasoning; symbols give exactness and generalization. Where it matters: math, planning, constraints. Common mistake: forcing one paradigm onto both jobs.
- **LLM-as-program-generator + solver.** *Plain English:* the LLM writes code/logic; a deterministic engine (Python, SAT/SMT, a CAS) executes and verifies. *Code mapping:* generate → execute → check → repair. *Common mistake:* trusting the LLM's "execution" instead of running it.
- **Differentiable/relaxed logic.** Plain English: relax logic to make it trainable end-to-end (e.g., DeepProbLog). Where it matters: learning with symbolic constraints. Common mistake: scalability and brittleness.
- **Verifiability.** Plain English: a symbolic answer can be *checked*; this is the safety/reliability payoff. Common mistake: discarding verification because the LLM "looked right."

### Hands-on build (the lab)
- Build an LLM+solver hybrid for a reasoning task (e.g., **ARC-AGI** subset via program search, or word problems via LLM→Python→verify) with a generate-execute-repair loop; compare to a pure-LLM baseline.
- **Deliverable:** `frontier/neurosymbolic/` with the hybrid, accuracy vs the pure-LLM baseline, and a generalization slice. **Acceptance:** hybrid beats the pure-neural baseline on a systematic-generalization slice, or the failure is analyzed.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build an LLM+solver generate-execute-repair loop on ARC/GSM8K and beat a pure-LLM baseline on a generalization slice.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; an ARC-AGI subset or GSM8K; a sandboxed Python executor.
2. **Hybrid:** the LLM writes a program; execute it (really run, don't simulate).
3. **Repair loop:** feed real errors back; iterate to a verified answer.
4. **Baseline:** compare to a pure-LLM solver.
5. **Generalization slice:** test the systematic-generalization split.
6. **Report** verification pass-rate + repair count.
- **Artifact:** `frontier/neurosymbolic/neurosymbolic-eval.md` + baseline comparison.
- **Use `$neurosymbolic-loop`:** the generate→execute→verify→repair wrapper.
- **Done when:** the hybrid beats pure-LLM on the generalization slice (or the failure is analyzed).
- **Stretch:** add SAT/SMT for a constraint task.

### Harness / reusable skill — `$neurosymbolic-loop`
- **Purpose:** wrap any reasoning task in a generate→execute→verify→repair loop.
- **Inputs:** a task + a symbolic executor. **Required outputs:** the hybrid's accuracy, the verification pass-rate, the repair count, and a comparison to pure-neural. **Evidence artifact:** `neurosymbolic-eval.md`.

### Common failure modes
- **Simulated execution** → trusting the LLM to "run" code. *Fix:* actually execute, feed errors back.
- **No repair loop** → one-shot failures. *Fix:* execute→error→repair iterations.
- **In-distribution-only eval** → misses the generalization payoff. *Fix:* systematic-generalization slice.
- **Symbol overhead unjustified** → hybrid no better than neural. *Fix:* compare; keep symbols only where they help.

### Evidence artifact
`frontier/neurosymbolic/neurosymbolic-eval.md` + baseline comparison.

### Skill sink-in
Predict the accuracy gap between the hybrid and pure-LLM on the *hard generalization* slice. Measure. Record the gap.

### Depth upgrade
- **Dataset / source:** **ARC-AGI** — github.com/fchollet/ARC-AGI (1,000 abstract-reasoning tasks, Apache-2.0); or **GSM8K** (HF, MIT) for LLM→Python→verify.
- **Code stub:**
```python
def neurosymbolic_solve(problem, llm, max_repairs=3):
    code = llm.generate_program(problem)              # LLM writes a Python solution
    for _ in range(max_repairs):
        ok, result, err = execute_sandboxed(code)     # actually run it
        if ok and verify(result, problem):
            return {"answer": result, "verified": True}
        code = llm.repair(problem, code, err)         # feed the real error back
    return {"answer": None, "verified": False}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Hybrid design | Generate-execute-verify-repair | No repair | Simulated exec |
| Baseline | Beats pure-LLM, measured | Has baseline | None |
| Generalization | Systematic slice tested | In-dist only | None |
| Verifiability | Uses + reports verification | Partial | Ignored |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Chollet, "On the Measure of Intelligence (ARC)," 2019.
  - Mao et al., "The Neuro-Symbolic Concept Learner," *ICLR* 2019.
  - Manhaeve et al., "DeepProbLog: Neural Probabilistic Logic Programming," *NeurIPS* 2018.
  - Gao et al., "PAL: Program-aided Language Models," *ICML* 2023.

---

### State of the Art (June 2026)
- LLM-as-program-generator + solver (PAL-style) with generate→execute→verify→repair is the reliable 2026 pattern; ARC-AGI-2 is the systematic-reasoning bar.
- Verifiability is the payoff — symbolic answers are checkable; differentiable logic (DeepProbLog) stays brittle/niche.
- Execution grounding beats ‘the LLM looked right’.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)

<!-- sota:15L08 -->

## Week 9 — World Models & Simulation for Reasoning and Control

**Altitude:** Specialist · **Anchor case:** using a learned world model/simulator for planning or as a training environment — and the limits of imagined experience. **(Experiment milestone M3 due.)**

### Learning goals
- Explain world models as learned simulators for model-based RL, planning, and synthetic experience (link back to Subject 12 W10, now research-depth).
- Evaluate planning-in-imagination vs model-free, and reason about model exploitation and compounding error.
- Connect world models to "neural game engines" and embodied/robotics learning.

### Concept map
- **Planning in imagination.** Plain English: learn dynamics, then optimize actions by rolling out inside the model (Dreamer); cheaper than real interaction. Where it matters: sample efficiency. Common mistake: the policy exploits model errors.
- **Model exploitation.** Plain English: an agent finds and abuses inaccuracies in the learned model (free reward that doesn't transfer). Where it matters: a core failure mode. Common mistake: not penalizing/uncertainty-gating imagined returns.
- **Compounding error & horizon.** Plain English: errors accumulate over rollout; trust short horizons. Common mistake: long imagined rollouts as ground truth.
- **Generative interactive environments (Genie).** Plain English: action-conditioned world models become playable, learnable simulators — a path to scalable embodied training. Common mistake: conflating with passive video gen.

### Hands-on build (the lab)
- Run a Dreamer-style or tokenized world model on a control/Atari task; compare planning-in-imagination performance and sample efficiency to a model-free baseline; probe model exploitation.
- Submit **M3** (novel ablation/extension on your thread).
- **Deliverable:** `frontier/world-sim/` with the comparison, an exploitation probe, an error-vs-horizon curve, and `frontier/M3-ablation.md`. **Acceptance:** sample-efficiency comparison reported; model-exploitation behavior characterized; M3 ablation has a result table.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — run a Dreamer/IRIS-style world model and quantify the imagined-vs-real exploitation gap in a notebook.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU Colab; `pip install gymnasium`; DreamerV3/IRIS reference; Atari-100k / DMC.
2. **World model:** run a Dreamer/tokenized model on a control/Atari task.
3. **Compare:** planning-in-imagination vs model-free sample efficiency.
4. **Exploitation:** the imagined-vs-real return gap.
5. **Horizon:** an error-vs-horizon curve → trustworthy horizon.
6. **M3 ablation** with a result table.
- **Artifact:** `frontier/world-sim/sim-fidelity.md` + `M3-ablation.md`.
- **Use `$sim-fidelity-eval`:** is the simulator good enough to plan/train inside?
- **Done when:** sample-efficiency reported; exploitation characterized; M3 has a table.
- **Stretch:** add an uncertainty penalty and re-check the gap.

### Harness / reusable skill — `$sim-fidelity-eval`
- **Purpose:** assess whether a learned simulator is good enough to plan/train inside.
- **Inputs:** a world model + a policy. **Required outputs:** rollout fidelity vs horizon, an exploitation check (imagined vs real return gap), and a trustworthy-horizon recommendation. **Evidence artifact:** `sim-fidelity.md`.

### Common failure modes
- **Model exploitation** → great imagined reward, fails for real. *Fix:* uncertainty penalty, real-env validation.
- **Long-horizon trust** → compounding error. *Fix:* short rollouts + error curve.
- **No model-free baseline** → can't judge the benefit. *Fix:* compare sample efficiency.
- **Imagined=real reporting** → dishonest. *Fix:* always report the imagined-vs-real return gap.

### Evidence artifact
`frontier/world-sim/sim-fidelity.md` + `M3-ablation.md`.

### Skill sink-in
Predict the gap between imagined and real returns for your agent. Measure both. Record the exploitation gap.

### Depth upgrade
- **Dataset / source:** **Atari 100k** / `gymnasium` (ale-py, research use) or **DeepMind Control Suite**; reference implementations DreamerV3 (github.com/danijar/dreamerv3, MIT), IRIS (github.com/eloialonso/iris, MIT).
- **Code stub:**
```python
def exploitation_gap(world, policy, real_env, n=20):
    imagined = [imagined_return(world, policy) for _ in range(n)]
    real = [real_return(real_env, policy) for _ in range(n)]
    import numpy as np
    return {"imagined": np.mean(imagined), "real": np.mean(real),
            "gap": np.mean(imagined) - np.mean(real)}   # large gap = model exploitation
```
- **Graded rubric table (governs M3):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Ablation (M3) | Result table + insight | Runs | None |
| Sample efficiency | vs model-free baseline | Reported alone | None |
| Exploitation | Imagined-vs-real gap | Mentioned | Ignored |
| Horizon honesty | Trustworthy horizon stated | Partial | Overclaims |

- **Assessment weight:** ~3% critique + the 6% M3 milestone.
- **Readings:**
  - Hafner et al., "Mastering Diverse Domains through World Models (DreamerV3)," 2023.
  - Micheli et al., "Transformers are Sample-Efficient World Models (IRIS)," *ICLR* 2023.
  - Bruce et al., "Genie: Generative Interactive Environments," *ICML* 2024.
  - Sutton, "Dyna, an Integrated Architecture for Learning, Planning, and Reacting," 1991 (the origin).

---

### State of the Art (June 2026)
- DreamerV3 + IRIS remain references; Genie-style interactive environments and video-diffusion world models are the 2026 shift (DiT over spatiotemporal latents).
- Model exploitation + compounding error bound the trustworthy horizon; report the imagined-vs-real gap.
- World models double as embodied training simulators.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Micheli et al., 2022 - IRIS](https://arxiv.org/abs/2209.00588)
- [Farama Gymnasium](https://github.com/Farama-Foundation/Gymnasium)

<!-- sota:15L09 -->

## Week 10 — Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier

**Altitude:** Specialist · **Anchor case:** training on model-generated data (self-improvement) and the architectures (Mamba/SSMs) that change the cost frontier.

### Learning goals
- Explain synthetic-data pipelines (distillation, self-instruct, RLVR-style self-improvement) and the model-collapse risk.
- Explain state-space models (Mamba) vs Transformers: linear-time sequence modeling and the quality/efficiency trade-off.
- Reproduce a small self-improvement loop *or* a Mamba-vs-Transformer efficiency comparison.

### Concept map
- **Synthetic data & self-improvement.** Plain English: use a model (or a verifier) to generate training data and bootstrap (STaR, self-instruct, RLVR). Where it matters: cheap scaling, reasoning gains. Common mistake: ignoring verification → amplifying errors.
- **Model collapse.** Plain English: training repeatedly on generated data degrades diversity/tails. Where it matters: data ecosystems. Common mistake: assuming synthetic data is free of cost.
- **State-space models (Mamba).** *Plain English:* a selective SSM models sequences in linear time with a recurrent scan, avoiding attention's quadratic cost; strong on long contexts. *Common mistake:* assuming it strictly dominates Transformers — it trades off recall/in-context behavior.
- **Hybrids.** Plain English: Transformer+SSM hybrids (e.g., Jamba) chase the best of both. Where it matters: the practical frontier.

### Hands-on build (the lab)
- **Either** run a small **self-improvement** loop (generate→verify→filter→fine-tune) on a reasoning task and measure gain + a diversity/collapse check, **or** benchmark a small **Mamba** vs a Transformer on a long-context task (throughput + accuracy).
- **Deliverable:** `frontier/efficiency/` with the loop or benchmark, a collapse/diversity or quality-vs-length analysis, and a frontier note. **Acceptance:** a measured trade-off curve; the failure mode (collapse or recall) addressed.

▶ **Practical project:** `VizuaraAILabs/DeepSeek-From-Scratch` — reproduce an SSM/efficiency comparison (or a verified self-improvement loop) as a trade-off-curve notebook.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install mamba-ssm transformers`; clone `VizuaraAILabs/DeepSeek-From-Scratch`.
2. **Pick:** a self-improvement (STaR) loop OR a Mamba-vs-Transformer long-context benchmark.
3. **Self-improve:** generate → verify → filter → fine-tune; track yield + diversity per round.
4. **OR SSM:** throughput + accuracy vs sequence length; find the crossover.
5. **Failure mode:** model collapse (diversity/tail) or the recall gap.
6. **Recommend** by regime.
- **Artifact:** `frontier/efficiency/frontier-tradeoff.md` + the trade-off curve.
- **Use `$frontier-tradeoff`:** quality–cost/diversity trade-off, rigorously.
- **Done when:** a measured trade-off curve; the failure mode addressed.
- **Stretch:** test a Transformer-SSM hybrid (Jamba-style).

### Harness / reusable skill — `$frontier-tradeoff`
- **Purpose:** characterize a quality–cost (or quality–diversity) trade-off rigorously.
- **Inputs:** two methods/configs. **Required outputs:** a trade-off curve (quality vs cost/length/iteration), the failure mode each hits, and a recommendation by regime. **Evidence artifact:** `frontier-tradeoff.md`.

### Common failure modes
- **Unverified self-improvement** → error amplification. *Fix:* verifier-filtered data only.
- **Ignoring collapse** → diversity loss over iterations. *Fix:* diversity/tail metrics across rounds.
- **SSM-as-strictly-better** → ignoring recall gaps. *Fix:* test in-context recall, not just throughput.
- **Single-length benchmark** → hides the long-context payoff. *Fix:* vary sequence length.

### Evidence artifact
`frontier/efficiency/frontier-tradeoff.md` + trade-off curve.

### Skill sink-in
Predict where Mamba overtakes the Transformer on throughput as length grows (or where self-improvement gains saturate). Measure. Record the crossover.

### Depth upgrade
- **Dataset / source:** GSM8K (HF, MIT) for self-improvement; long-context: a synthetic long-range task or **LongBench** (github.com/THUDM/LongBench, MIT). Models: **state-spaces/mamba-130m** (HF, Apache-2.0) vs a similar-size Transformer (Pythia).
- **Code stub:**
```python
# self-improvement (STaR-style): keep only verified generations
def self_improve_round(model, problems, verify):
    data = []
    for p in problems:
        sols = model.generate(p, n=4)                 # sample multiple solutions
        good = [s for s in sols if verify(s, p)]      # keep only verified-correct
        if good:
            data.append((p, good[0]))
    return finetune(model, data), len(data)           # track yield + diversity per round
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Trade-off curve | Quality vs cost/length/iter | Two points | Single number |
| Failure mode | Collapse/recall addressed | Mentioned | Ignored |
| Verification/recall | Properly handled | Partial | None |
| Recommendation | By regime, justified | Stated | None |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Gu & Dao, "Mamba: Linear-Time Sequence Modeling with Selective State Spaces," 2023.
  - Zelikman et al., "STaR: Bootstrapping Reasoning with Reasoning," *NeurIPS* 2022.
  - Shumailov et al., "The Curse of Recursion: Training on Generated Data Makes Models Forget (model collapse)," *Nature*, 2024.
  - Lieber et al., "Jamba: A Hybrid Transformer-Mamba Language Model," 2024.

---

### State of the Art (June 2026)
- STaR-style verifier-filtered self-improvement is standard; model collapse (Shumailov, Nature 2024) bounds it.
- Mamba/SSMs + Transformer-SSM hybrids (Jamba) are the linear-time frontier; recall gaps vs attention are the tradeoff.
- Synthetic data is the default scaling fuel — verification gates error amplification.

**References & links:**
- [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch)
- [Su et al., 2021 - RoPE](https://arxiv.org/abs/2104.09864)
- [Shao et al., 2024 - GRPO/RLVR](https://arxiv.org/abs/2402.03300)
- [Gu & Dao, 2023 - Mamba](https://arxiv.org/abs/2312.00752)

<!-- sota:15L10 -->

## Week 11 — Theorem Proving, Autoformalization & the Societal-Impact Panel

**Altitude:** Specialist · **Anchor case:** AlphaProof-style automated theorem proving (LLM + Lean + RL) — verifiable reasoning — paired with a panel on the societal stakes of frontier AI.

### Learning goals
- Explain autoformalization (natural-language math → formal Lean) and LLM+proof-assistant+search/RL proving.
- Run a small proof-search experiment in Lean (LeanDojo/an LLM prover) and reason about verifiability as the key property.
- Engage a structured societal-impact panel: governance (EU AI Act, NIST AI RMF), risks, and responsible scaling.

### Concept map
- **Formal verification as ground truth.** Plain English: a proof assistant (Lean) *checks* every step; if it compiles, it's correct — no hallucination survives. Where it matters: this is why math is a clean RL/verification domain. Common mistake: trusting an informal proof an LLM "believes."
- **Autoformalization.** Plain English: translate informal statements into formal ones (the bottleneck for using LLMs on real math). Common mistake: assuming translation is faithful without checking.
- **LLM + search + RL (AlphaProof).** Plain English: generate candidate proof steps, search the tactic tree, train on verified successes (RLVR). Where it matters: IMO-level results. Common mistake: ignoring the enormous search/compute behind the headline.
- **Governance frameworks.** Plain English: EU AI Act tiers, NIST AI RMF, responsible scaling policies structure how frontier risk is managed. Where it matters: the societal lens. Common mistake: treating capability and governance as separate conversations.

### Hands-on build (the lab)
- Run an LLM-driven proof search on a small Lean benchmark (**MiniF2F** via LeanDojo); report solve-rate and inspect verified vs failed proofs.
- Prepare and run the **societal-impact panel**: each student argues one position (capability optimism, safety caution, governance, access/equity) grounded in primary sources.
- **Deliverable:** `frontier/proving/` with proof-search results + the panel position memo. **Acceptance:** verified proofs reported (with solve-rate); a defensible, source-grounded panel position.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build a Lean 4 + LeanDojo proof-search notebook on a small theorem set and report verified-rate.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install`; Lean 4 + LeanDojo/mathlib.
2. **Autoformalize:** a small theorem set into Lean.
3. **Proof search:** LLM + Lean (AlphaProof-style) over the set.
4. **Verify:** the Lean kernel is the ground-truth reward.
5. **Report:** verified-rate + a failure taxonomy.
6. **Connect** to the societal-impact panel.
- **Artifact:** a Lean 4 + LeanDojo proof-search notebook + verified-rate.
- **Use `$verifiable-reasoning-eval`:** formal-verification-grounded scoring.
- **Done when:** verified-rate reported on the theorem set with provenance.
- **Stretch:** add an autoformalization-accuracy check.

### Harness / reusable skill — `$verifiable-reasoning-eval`
- **Purpose:** evaluate a reasoning system where correctness is formally checkable.
- **Inputs:** a prover + a formal benchmark. **Required outputs:** verified solve-rate, search budget, failure analysis, and a note on what verifiability does/doesn't guarantee (statement faithfulness). **Evidence artifact:** `proving-eval.md`.

### Common failure modes
- **Trusting informal proofs** → unverified claims. *Fix:* require the Lean check.
- **Autoformalization drift** → a proof of the *wrong* statement. *Fix:* verify the formal statement matches the informal one.
- **Hiding the search cost** → headline without compute. *Fix:* report the search budget.
- **Panel without sources** → opinion theater. *Fix:* ground every position in primary sources.

### Evidence artifact
`frontier/proving/proving-eval.md` + panel position memo.

### Skill sink-in
Predict your prover's solve-rate on MiniF2F before running it. Run it. Record the gap between your optimism and the verified rate.

### Depth upgrade
- **Dataset / source:** **MiniF2F** — github.com/openai/miniF2F (488 formal math problems, MIT); **LeanDojo** (leandojo.org, github.com/lean-dojo, MIT) + `mathlib`. Governance: EU AI Act, NIST AI RMF 1.0 (open).
- **Code stub:**
```python
from lean_dojo import LeanGitRepo, Dojo, Theorem
def attempt_proof(theorem: Theorem, llm, max_steps=50):
    with Dojo(theorem) as (dojo, state):
        for _ in range(max_steps):
            tactic = llm.suggest_tactic(state)         # LLM proposes a Lean tactic
            state = dojo.run_tac(state, tactic)
            if state.__class__.__name__ == "ProofFinished":
                return {"proved": True}                 # Lean verified every step
            if state.__class__.__name__ == "LeanError":
                continue
    return {"proved": False}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Proof search | Verified solve-rate + budget | Runs | Fails |
| Verifiability grasp | Statement-faithfulness checked | Partial | Trusts informal |
| Panel position | Source-grounded, defended | Stated | Opinion only |
| Governance | Maps a framework correctly | Named | Absent |

- **Assessment weight:** ~3% critique + part of the 8% panel/participation.
- **Readings:**
  - AlphaProof & AlphaGeometry teams (DeepMind), "AI achieves silver-medal standard solving IMO problems," 2024.
  - Yang et al., "LeanDojo: Theorem Proving with Retrieval-Augmented Language Models," *NeurIPS* 2023.
  - Zheng, Han & Polu, "MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics," *ICLR* 2022.
  - Bengio et al., "Managing extreme AI risks amid rapid progress," *Science*, 2024.

---

### State of the Art (June 2026)
- AlphaProof (LLM + Lean + RL) is the reference for verifiable reasoning; a formal proof is a ground-truth reward (RLVR’s purest form).
- Autoformalization + LeanDojo/mathlib are the tooling; Lean 4 is standard.
- Verifiable reasoning ties directly to the governance panel on frontier stakes.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [Su et al., 2021 - RoPE](https://arxiv.org/abs/2104.09864)
- [Shao et al., 2024 - GRPO/RLVR](https://arxiv.org/abs/2402.03300)
- [Lewis et al., 2020 - RAG](https://arxiv.org/abs/2005.11401)
- [EU AI Act timeline](https://artificialintelligenceact.eu/implementation-timeline/)

<!-- sota:15L11 -->

## Week 12 — In-Class Hackathon: Build at the Frontier Under Pressure

**Altitude:** Specialist · **Anchor case:** a one-day sprint extending your thread or combining two frontier ideas.

### Learning goals
- Scope and execute a frontier build in a fixed time budget.
- Make defensible engineering trade-offs under uncertainty and report honestly what works.
- Practice the reproduce→extend→evaluate loop at speed.

### Concept map (as a sprint checklist)
- Pick the smallest interesting extension → reuse a checkpoint/baseline → run one clean ablation → measure against a baseline → write a 1-page result with limitations. Speed comes from scoping, not from skipping evidence.

### Hands-on build (the lab)
- A timed hackathon: ship a working frontier mini-build (e.g., an SAE feature steering demo, a flow-matching speedup, an AI-scientist sub-loop, a PINN for a new PDE) with one measured result and a baseline.
- **Deliverable:** `frontier/hackathon/` with the build, one result table, and a 1-page writeup. **Acceptance:** runs end-to-end; one honest result vs a baseline; limitations stated.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — under time pressure, convert one frontier result into a runnable, ablated notebook with seeds pinned.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Modal/Colab serverless GPU + prompt caching; pick one frontier result.
2. **Scope:** a reproducible sub-result (not the hero run).
3. **Reproduce the trend:** a scaled-down ablation; pin seeds.
4. **Eval:** an Inspect AI / DeepEval quick harness.
5. **Honesty:** report the delta from the paper.
6. **Time-box** and ship.
- **Artifact:** a runnable, ablated notebook with seeds pinned.
- **Use `$frontier-sprint`:** a fast, honest frontier build under pressure.
- **Done when:** the trend reproduced or refuted; the delta reported.
- **Stretch:** add a second seed-set to bound variance.

### Harness / reusable skill — `$frontier-sprint`
- **Purpose:** execute a time-boxed frontier build without dropping evidence discipline.
- **Inputs:** an idea + a time budget. **Required outputs:** the minimal scoped build, one result vs baseline, and a limitations note. **Evidence artifact:** `hackathon/result.md`.

### Common failure modes
- **Over-scoping** → nothing runs by the deadline. *Fix:* smallest interesting extension.
- **Demo without measurement** → no result. *Fix:* one metric vs a baseline is mandatory.
- **Skipping the baseline under time pressure** → unanchored. *Fix:* baseline first, fancy later.

### Evidence artifact
`frontier/hackathon/result.md` + the build.

### Skill sink-in
Before the sprint, predict what you'll get working. After, record the gap between plan and what shipped — and why.

### Depth upgrade
- **Dataset / source:** reuse any dataset/checkpoint from earlier weeks; the point is speed and evidence, not new data.
- **Code stub:**
```python
SPRINT = {
  "scope": "smallest interesting extension of <thread>",
  "baseline": "the number to beat",
  "result": None,                       # one metric, measured before the deadline
  "limitations": [],                    # at least one honest caveat
}
def sprint_ready(s): return s["result"] is not None and s["baseline"] and s["limitations"]
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Shipped | Runs end-to-end | Partial | Nothing |
| Result | Measured vs baseline | One number | None |
| Scope | Well-chosen | Too big/small | Undefined |
| Honesty | Limitations stated | Partial | Overclaims |

- **Assessment weight:** the 7% hackathon.
- **Readings:**
  - (Hackathon week — reuse your thread's primary sources.)
  - Norvig, "How to Write a Spelling Corrector," 2007 (a model of small, honest, reproducible work).
  - Henderson et al., "Deep Reinforcement Learning that Matters," *AAAI* 2018 (why rigor under time pressure matters).

---

### State of the Art (June 2026)
- Frontier sprints lean on released checkpoints + serverless GPU (Modal/RunPod, pay-per-second) and prompt caching for cost.
- Reproduce-the-trend (a scaled-down ablation) beats hero runs under time pressure.
- Inspect AI / DeepEval give fast, honest evals.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)
- [veRL](https://github.com/volcengine/verl)
- [UK AISI Inspect](https://inspect.aisi.org.uk)

<!-- sota:15L12 -->

## Week 13 — Final Talks: Conference-Style Presentations & Defense

**Altitude:** Specialist · **Anchor case:** present and defend your term project as a conference talk to a panel of peers + instructors.

### Learning goals
- Communicate a frontier reproduction/contribution clearly: claim, method, evidence, limitations.
- Defend the work under adversarial questioning (reproducibility, baselines, over-claiming).
- Submit a 4–6 page short paper that survives a peer review.

### Concept map (review)
- The seminar's spine: claim–evidence–gap; reproduce before extending; baselines and ablations; honest limitations; verifiability and governance where they apply.

### Hands-on build (the lab)
- **M4:** 12-minute conference talk + 8-minute defense; submit the short paper.
- Peer-review two classmates' papers using the `$paper-triage` standard.
- **Deliverable:** `frontier/final/` with the short paper, talk slides, and two peer reviews. **Acceptance:** the final mini-project checklist (top of file) is fully satisfied; the paper has an honest limitations section and a real ablation.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — package your reproduction as a clean, one-command notebook to accompany the short paper + talk.

**Build it — step by step (AI-builder lab):**
1. **Setup:** your project artifacts; a NeurIPS/ICLR reviewer-guideline template.
2. **Package:** a one-command repro (uv-pinned env).
3. **Defense prep:** the 3 hardest questions + baseline/ablation gaps + the likely over-claim.
4. **Talk:** a 12-min conference talk + an 8-min defense.
5. **Peer review:** two classmates' papers at the `$paper-triage` standard.
6. **Limitations-first** framing.
- **Artifact:** `frontier/final/` short paper + slides + two peer reviews + defense prep.
- **Use `$research-defense`:** stress-test the claim before presenting.
- **Done when:** the final checklist satisfied; honest limitations + a real ablation.
- **Stretch:** pre-register the single hardest question and how the answer held.

### Harness / reusable skill — `$research-defense`
- **Purpose:** stress-test a research claim before (and during) presentation.
- **Inputs:** a paper/talk. **Required outputs:** the three hardest questions, the baseline/ablation gaps, and the over-claim most likely to be challenged — with prepared answers. **Evidence artifact:** `final/defense-prep.md`.

### Common failure modes
- **Over-claiming** → headline beyond the evidence. *Fix:* state limitations first; calibrate the claim.
- **Missing baseline/ablation** → unanchored contribution. *Fix:* both are required deliverables.
- **Irreproducible** → no seed/environment. *Fix:* pin everything; one-command repro.
- **Defense by deflection** → dodging the hard question. *Fix:* `$research-defense` rehearsal.

### Evidence artifact
`frontier/final/` (paper + slides + peer reviews + defense prep).

### Skill sink-in
Predict the single hardest question the panel will ask. After the defense, record whether you anticipated it and how the answer held.

### Depth upgrade
- **Dataset / source:** your project's artifacts; review template based on NeurIPS/ICLR reviewer guidelines (open).
- **Code stub:**
```python
FINAL_GATE = ["literature_map", "reproduced_metric_with_delta", "own_ablation",
              "limitations_section", "real_vs_hype_claim", "pinned_repro_env"]
def final_gate(project: dict): return {k: bool(project.get(k)) for k in FINAL_GATE}
```
- **Graded rubric table (governs the 25% paper + 12% talk):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Contribution | Reproduction + real ablation | Reproduction only | Neither |
| Rigor | Baselines + seeds + delta | Some | None |
| Limitations | Honest, specific | Generic | Absent |
| Defense | Survives hard questions | Partial | Folds |
| Communication | Clear claim→evidence arc | Uneven | Confused |

- **Assessment weight:** the 25% paper + 12% talk + remaining participation.
- **Readings:**
  - Whitesides, "Whitesides' Group: Writing a Paper," *Advanced Materials*, 2004.
  - Reviewer guidelines (NeurIPS/ICLR 2025) for the peer-review exercise.
  - Lipton & Steinhardt, "Troubling Trends in Machine Learning Scholarship," 2018 (revisited as a self-check).

---

### State of the Art (June 2026)
- Conference-grade reproduction = primary-source map + reproduced number with delta + your own ablation + honest limitations.
- Pinned environments (uv) and one-command repro are the reproducibility bar.
- The real-vs-hype claim is the deliverable, not the headline number.

**References & links:**
- [`VizuaraAI/paper-to-notebook`](https://github.com/VizuaraAI/paper-to-notebook)

<!-- sota:15L13 -->

## Course-level outcomes

By the end you can: read frontier AI papers for the claim–evidence gap; reproduce or stress-test a 2024–2026 result with full provenance; build at the frontier across autonomous research agents, AlphaFold-style structure prediction, materials/molecule generation, PINNs/neural operators, emergence/scaling, mechanistic interpretability/SAEs, neuro-symbolic reasoning, world models, synthetic data/SSMs, and theorem proving; tell signal from hype; and communicate and defend research honestly. You leave with a reusable harness — `$paper-triage`, `$research-claim-audit`, `$scientific-repro`, `$discovery-validity-check`, `$physics-validity`, `$emergence-probe`, `$interp-evidence`, `$neurosymbolic-loop`, `$sim-fidelity-eval`, `$frontier-tradeoff`, `$verifiable-reasoning-eval`, `$frontier-sprint`, `$research-defense` — plus a short paper and a talk.

## Skills produced (reused program-wide)
`$paper-triage` · `$research-claim-audit` · `$scientific-repro` · `$discovery-validity-check` · `$physics-validity` · `$emergence-probe` · `$interp-evidence` · `$neurosymbolic-loop` · `$sim-fidelity-eval` · `$frontier-tradeoff` · `$verifiable-reasoning-eval` · `$frontier-sprint` · `$research-defense`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/paper-to-notebook` — turn a PDF paper into a runnable notebook (the seminar's reproduce-from-primary-source workflow) — *Lectures 1–3*
- `VizuaraAILabs/DeepSeek-From-Scratch` — MLA / MoE / MTP built from scratch (grounds the efficiency / SSM-vs-Transformer frontier) — *Lecture 10*

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Automated research mini-agent** — hypothesis → experiment → report → uncertainty statement, audited against your own re-run — *Lectures 2, 12–13*
- **Synthetic-data audit** — real+synthetic vs real-only; artifact / model-collapse check across rounds — *Lecture 10*
