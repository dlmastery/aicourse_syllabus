# Detailed Table of Contents — Subject 09 — Full-Stack AI: MLOps, LLMOps & AgentOps to Production

_Source: `09-mlops-llmops-agentops-production.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**_

### Lecture 1 — The Production Mindset & Containerizing a Model
_3-hour block · 🔧 reusable skill: `$repro-image`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Reproducible artifact |
| 00:30–01:00 | M2 | Image layers & build cache |
| 01:00–01:30 | M3 | Twelve-factor for ML |
| 01:30–02:00 | M4 | MLOps maturity (Google's levels 0/1/2) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Create fullstack-ai-platform/ monorepo: services/eta-model/, services/support-copilot/, libs/, infra |

### Lecture 2 — Orchestration: Kubernetes & Serverless GPU
_3-hour block · 🔧 reusable skill: `$k8s-deploy`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Desired-state reconciliation |
| 00:30–01:00 | M2 | Liveness vs readiness |
| 01:00–01:30 | M3 | Requests vs limits |
| 01:30–02:00 | M4 | Scale-to-zero |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Helm chart infra/charts/eta-model/ with Deployment, Service, HPA (CPU target 60%), probes, and resou |

### Lecture 3 — Data Pipelines & Versioning: Airflow, DVC, Feature Stores
_3-hour block · 🔧 reusable skill: `$data-contract`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | DAG idempotency |
| 00:30–01:00 | M2 | Data versioning (DVC) |
| 01:00–01:30 | M3 | Train/serve skew |
| 01:30–02:00 | M4 | Data contract |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | pipelines/eta_features.py: Airflow DAG with tasks extract → validate (Great Expectations / pandera)  |

### Lecture 4 — Experiment Tracking, Model Registry & Reproducible Training
_3-hour block · 🔧 reusable skill: `$run-ledger`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Experiment vs run vs artifact |
| 00:30–01:00 | M2 | Model registry & stages |
| 01:00–01:30 | M3 | Lineage |
| 01:30–02:00 | M4 | Sweep/HPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Add wandb logging to train_eta.py (config, metrics, learning curves, the DVC data hash as a tag) |

### Lecture 5 — Model Serving I: FastAPI, vLLM & Triton
_3-hour block · 🔧 reusable skill: `$serve-bench`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Online vs offline/batch inference |
| 00:30–01:00 | M2 | Continuous batching (vLLM) |
| 01:00–01:30 | M3 | Throughput vs latency tradeoff |
| 01:30–02:00 | M4 | Backpressure |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | services/eta-model/main.py: FastAPI with Pydantic request/response, model version header, /metrics,  |

### Lecture 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)
_3-hour block · 🔧 reusable skill: `$eval-gate`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | CI vs CD vs CT |
| 00:30–01:00 | M2 | Eval-gated deploy |
| 01:00–01:30 | M3 | Prompt as code |
| 01:30–02:00 | M4 | Golden/regression set |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | .github/workflows/eta.yml and support-copilot.yml: full pipeline with caching, OIDC cloud auth, and  |

### Lecture 7 — LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control
_3-hour block · 🔧 reusable skill: `$llm-gateway`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | LLM gateway |
| 00:30–01:00 | M2 | Semantic cache |
| 01:00–01:30 | M3 | Model routing / escalation |
| 01:30–02:00 | M4 | Cost as a first-class SLO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Deploy **LiteLLM Proxy**: register Bedrock/Anthropic + the self-hosted vLLM model; set per-key budge |

### Lecture 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry
_3-hour block · 🔧 reusable skill: `$trace-debug`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Traces vs metrics vs logs |
| 00:30–01:00 | M2 | Span & attributes |
| 01:00–01:30 | M3 | RED + LLM metrics |
| 01:30–02:00 | M4 | Trace-linked eval |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Add **OpenTelemetry** SDK + Langfuse callback to the copilot; create spans for retrieve / each tool  |

### Lecture 9 — Monitoring, Drift Detection & Alerting in Production
_3-hour block · 🔧 reusable skill: `$drift-watch`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Data vs concept drift |
| 00:30–01:00 | M2 | Proxy quality signals for LLMs |
| 01:00–01:30 | M3 | SLI/SLO/error budget |
| 01:30–02:00 | M4 | Delayed labels |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Add **Evidently**/NannyML drift monitors to eta-model (feature drift +, once labels arrive, performa |

### Lecture 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates
_3-hour block · 🔧 reusable skill: `$safe-release`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Shadow mode |
| 00:30–01:00 | M2 | Canary + automated analysis |
| 01:00–01:30 | M3 | Blue-green vs rolling |
| 01:30–02:00 | M4 | HITL gate |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Deploy a new eta-model in **shadow mode**; compare shadow vs prod predictions offline for a day's tr |

### Lecture 11 — AgentOps: Operating Multi-Step Agent Systems in Production
_3-hour block · 🔧 reusable skill: `$agent-ops`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Trajectory non-determinism; Tool side-effects & blast radius |
| 00:30–01:00 | M2 | Loop/cost runaway |
| 01:00–01:30 | M3 | Prompt injection / tool poisoning |
| 01:30–02:00 | M4 | Agent memory |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Refactor the copilot into a **LangGraph** agent (planner → tools → critic) with full per-node tracin |

### Lecture 12 — Capstone: One Model + One Agent, Notebook → Monitored Production
_3-hour block · 🔧 reusable skill: `$production-readiness-review`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build the weekly artifact + evidence log |

