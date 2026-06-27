# Detailed Table of Contents — Subject 09 — Full-Stack AI: MLOps, LLMOps & AgentOps to Production

_Source: `09-mlops-llmops-agentops-production.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — The Production Mindset & Containerizing a Model
_3-hour block · 🔧 skill: `$repro-image` · ▶ project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use its containerized end-to-end template as the base for the `fullstack-ai-platform` monorepo and the slim `eta-model` image._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Reproducible artifact |
| 00:30–01:00 | M2 | Image layers & build cache |
| 01:00–01:30 | M3 | Twelve-factor for ML |
| 01:30–02:00 | M4 | MLOps maturity (Google's levels 0/1/2) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — use its containerized end-to-end template as the base for the `fullstack-ai-platform` monorepo and the slim `eta-model` image. |

### Lecture 2 — Orchestration: Kubernetes & Serverless GPU
_3-hour block · 🔧 skill: `$k8s-deploy` · ▶ project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/scale modules to take the `eta-model` image to a probed, autoscaled Deployment and a serverless-GPU comparison._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Desired-state reconciliation |
| 00:30–01:00 | M2 | Liveness vs readiness |
| 01:00–01:30 | M3 | Requests vs limits |
| 01:30–02:00 | M4 | Scale-to-zero |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — follow its deploy/scale modules to take the `eta-model` image to a probed, autoscaled Deployment and a serverless-GPU comparison. |

### Lecture 3 — Data Pipelines & Versioning: Airflow, DVC, Feature Stores
_3-hour block · 🔧 skill: `$data-contract` · ▶ project: [`krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project`](https://github.com/krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project) — mirror its DVC pipeline as the data/model-versioning reference for the `delivery-eta` features._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | DAG idempotency |
| 00:30–01:00 | M2 | Data versioning (DVC) |
| 01:00–01:30 | M3 | Train/serve skew |
| 01:30–02:00 | M4 | Data contract |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project`](https://github.com/krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project) — mirror its DVC pipeline as the data/model-versioning reference for the `delivery-eta` features. |

### Lecture 4 — Experiment Tracking, Model Registry & Reproducible Training
_3-hour block · 🔧 skill: `$run-ledger` · ▶ project: [`DataTalksClub/mlops-zoomcamp`](https://github.com/DataTalksClub/mlops-zoomcamp) — follow its experiment-tracking module (W&B/MLflow) to log the `delivery-eta` sweep and promote a registry version with lineage._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Experiment vs run vs artifact |
| 00:30–01:00 | M2 | Model registry & stages |
| 01:00–01:30 | M3 | Lineage |
| 01:30–02:00 | M4 | Sweep/HPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`DataTalksClub/mlops-zoomcamp`](https://github.com/DataTalksClub/mlops-zoomcamp) — follow its experiment-tracking module (W&B/MLflow) to log the `delivery-eta` sweep and promote a registry version with lineage. |

### Lecture 5 — Model Serving I: FastAPI, vLLM & Triton
_3-hour block · 🔧 skill: `$serve-bench` · ▶ project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — study its Modal + vLLM serving stack to stand up and benchmark the `support-copilot` LLM endpoint._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Online vs offline/batch inference |
| 00:30–01:00 | M2 | Continuous batching (vLLM) |
| 01:00–01:30 | M3 | Throughput vs latency tradeoff |
| 01:30–02:00 | M4 | Backpressure |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone) — study its Modal + vLLM serving stack to stand up and benchmark the `support-copilot` LLM endpoint. |

### Lecture 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)
_3-hour block · 🔧 skill: `$eval-gate` · ▶ project: [`promptfoo/promptfoo`](https://github.com/promptfoo/promptfoo) — build the offline eval suite and wire it as the CI gate that blocks a regressing copilot prompt PR._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | CI vs CD vs CT |
| 00:30–01:00 | M2 | Eval-gated deploy |
| 01:00–01:30 | M3 | Prompt as code |
| 01:30–02:00 | M4 | Golden/regression set |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`promptfoo/promptfoo`](https://github.com/promptfoo/promptfoo) — build the offline eval suite and wire it as the CI gate that blocks a regressing copilot prompt PR. |

### Lecture 7 — LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control
_3-hour block · 🔧 skill: `$llm-gateway` · ▶ project: [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production LLMOps patterns (gateway, caching, cost control) to route the copilot through LiteLLM with budgets._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | LLM gateway |
| 00:30–01:00 | M2 | Semantic cache |
| 01:00–01:30 | M3 | Model routing / escalation |
| 01:30–02:00 | M4 | Cost as a first-class SLO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course) — adapt its production LLMOps patterns (gateway, caching, cost control) to route the copilot through LiteLLM with budgets. |

### Lecture 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry
_3-hour block · 🔧 skill: `$trace-debug` · ▶ project: [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument the copilot with OTel spans (retrieve / tools / LLM) carrying token and cost attributes._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Traces vs metrics vs logs |
| 00:30–01:00 | M2 | Span & attributes |
| 01:00–01:30 | M3 | RED + LLM metrics |
| 01:30–02:00 | M4 | Trace-linked eval |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument the copilot with OTel spans (retrieve / tools / LLM) carrying token and cost attributes. |

### Lecture 9 — Monitoring, Drift Detection & Alerting in Production
_3-hour block · 🔧 skill: `$drift-watch` · ▶ project: [`evidentlyai/evidently`](https://github.com/evidentlyai/evidently) — use its drift detectors and reference datasets to monitor `delivery-eta` feature drift and fire one actionable alert._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data vs concept drift; Proxy quality signals for LLMs |
| 00:30–01:00 | M2 | SLI/SLO/error budget |
| 01:00–01:30 | M3 | Delayed labels |
| 01:30–02:00 | M4 | RAG-lifecycle drift |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`evidentlyai/evidently`](https://github.com/evidentlyai/evidently) — use its drift detectors and reference datasets to monitor `delivery-eta` feature drift and fire one actionable alert. |

### Lecture 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates
_3-hour block · 🔧 skill: `$safe-release` · ▶ project: [`argoproj/argo-rollouts`](https://github.com/argoproj/argo-rollouts) — configure a canary with an AnalysisTemplate so a deliberately-bad version auto-rolls-back on SLO/eval breach._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Shadow mode |
| 00:30–01:00 | M2 | Canary + automated analysis |
| 01:00–01:30 | M3 | Blue-green vs rolling |
| 01:30–02:00 | M4 | HITL gate |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`argoproj/argo-rollouts`](https://github.com/argoproj/argo-rollouts) — configure a canary with an AnalysisTemplate so a deliberately-bad version auto-rolls-back on SLO/eval breach. |

### Lecture 11 — AgentOps: Operating Multi-Step Agent Systems in Production
_3-hour block · 🔧 skill: `$agent-ops` · ▶ project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to refactor the copilot into a traced LangGraph agent with budget/loop/injection guardrails._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Trajectory non-determinism; Tool side-effects & blast radius |
| 00:30–01:00 | M2 | Loop/cost runaway |
| 01:00–01:30 | M3 | Prompt injection / tool poisoning |
| 01:30–02:00 | M4 | Agent memory |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to refactor the copilot into a traced LangGraph agent with budget/loop/injection guardrails. |

### Lecture 12 — Capstone: One Model + One Agent, Notebook → Monitored Production
_3-hour block · 🔧 skill: `$production-readiness-review` · ▶ project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its end-to-end structure as the integration reference for taking your model + agent to monitored production._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML) — use its end-to-end structure as the integration reference for taking your model + agent to monitored production. |

