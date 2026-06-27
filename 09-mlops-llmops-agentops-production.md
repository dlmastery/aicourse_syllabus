# Subject 09 — Full-Stack AI: MLOps, LLMOps & AgentOps to Production

**Track:** Production Engineering · **Altitude:** Engineer · **Length:** 12 weeks (2 lecture hrs + 4 lab hrs/wk; two-semester feel)
**Prerequisites:** Subjects 01–02 (ML + DL foundations), comfort with Python, basic Git, one prior model you trained yourself, and one prior LLM/RAG app (Subjects 04–06). You should be able to read a stack trace without panic.
**Pedagogy:** Harvard **AC215/E115** (MLOps→LLMOps→AIOps, 5-milestone team capstone) fused with **Krish Naik's** "every project ships deployed" doctrine (AWS/GCP/Azure, Docker, K8s, CI/CD, Langfuse/Prometheus/Grafana/ELK) and the source book's `concept → code → critique → reflection → rebuild` loop. The discipline of this course is **evidence-gated delivery**: nothing is "done" until a monitored endpoint, a dashboard, and a rollback button exist.

**Course anchor cases (carried all 12 weeks):**
1. **`delivery-eta`** — the regression model from Subject 01 (predict food-delivery minutes), now a containerized, versioned, monitored microservice. This is the **classical-MLOps spine**.
2. **`support-copilot`** — a RAG-backed support agent (retrieval + tool calls + LLM) from Subjects 05–07, now a cost-controlled, traced, eval-gated, canary-released **LLMOps + AgentOps spine**.

Every week advances *both* cases one rung up the production ladder, so you feel the difference between shipping a deterministic model and shipping a non-deterministic agent.

**What you leave with:** a `fullstack-ai-platform/` monorepo containing two deployed services (one model, one agent), a CI/CD pipeline with **eval-gated deploys**, an observability stack (traces + metrics + drift), eight reusable harness skills, and a runbook good enough to hand to an on-call engineer.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 12 lectures (~36 contact hrs). Full time-boxed lecture plan: [`_toc/09-mlops-llmops-agentops-production-toc.md`](_toc/09-mlops-llmops-agentops-production-toc.md)._

1. **Lecture 1 — The Production Mindset & Containerizing a Model** — Reproducible artifact · Image layers & build cache · Twelve-factor for ML · MLOps maturity (Google's levels 0/1/2)  ·  🔧 `$repro-image`
2. **Lecture 2 — Orchestration: Kubernetes & Serverless GPU** — Desired-state reconciliation · Liveness vs readiness · Requests vs limits · Scale-to-zero  ·  🔧 `$k8s-deploy`
3. **Lecture 3 — Data Pipelines & Versioning: Airflow, DVC, Feature Stores** — DAG idempotency · Data versioning (DVC) · Train/serve skew · Data contract  ·  🔧 `$data-contract`
4. **Lecture 4 — Experiment Tracking, Model Registry & Reproducible Training** — Experiment vs run vs artifact · Model registry & stages · Lineage · Sweep/HPO  ·  🔧 `$run-ledger`
5. **Lecture 5 — Model Serving I: FastAPI, vLLM & Triton** — Online vs offline/batch inference · Continuous batching (vLLM) · Throughput vs latency tradeoff · Backpressure  ·  🔧 `$serve-bench`
6. **Lecture 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)** — CI vs CD vs CT · Eval-gated deploy · Prompt as code · Golden/regression set  ·  🔧 `$eval-gate`
7. **Lecture 7 — LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control** — LLM gateway · Semantic cache · Model routing / escalation · Cost as a first-class SLO  ·  🔧 `$llm-gateway`
8. **Lecture 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry** — Traces vs metrics vs logs · Span & attributes · RED + LLM metrics · Trace-linked eval  ·  🔧 `$trace-debug`
9. **Lecture 9 — Monitoring, Drift Detection & Alerting in Production** — Data vs concept drift · Proxy quality signals for LLMs · SLI/SLO/error budget · Delayed labels  ·  🔧 `$drift-watch`
10. **Lecture 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates** — Shadow mode · Canary + automated analysis · Blue-green vs rolling · HITL gate  ·  🔧 `$safe-release`
11. **Lecture 11 — AgentOps: Operating Multi-Step Agent Systems in Production** — Trajectory non-determinism · Tool side-effects & blast radius · Loop/cost runaway · Prompt injection / tool poisoning · Agent memory  ·  🔧 `$agent-ops`
12. **Lecture 12 — Capstone: One Model + One Agent, Notebook → Monitored Production**  ·  🔧 `$production-readiness-review`

---

## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|---|---|---|
| Weekly labs (Weeks 1–11, graded individually below) | 60% | The running platform: each week's deliverable is a merged PR with passing CI and an evidence artifact. |
| Two production design reviews (after Week 5 and Week 9) | 10% | Architecture decision records (ADRs): serving topology + release/rollback strategy. |
| Capstone (Week 12) — model + agent to monitored production | 25% | End-to-end: SLOs met, eval-gated deploy, canary + rollback demonstrated, cost dashboard. |
| Operational citizenship (incident write-ups, peer PR reviews) | 5% | One blameless post-mortem + two substantive code reviews. |

Per-week weights below are the share of the 60% lab bucket, expressed as **% of total course grade** (they sum to 60).

## Tooling & environment (pinned, June 2026)

- **Languages/runtime:** Python 3.12, `uv` 0.7 for env/locking, Node 22 (for any frontend).
- **Containers/orchestration:** Docker 27 + BuildKit, Docker Compose v2, Kubernetes 1.33 (local: `kind` 0.27 or `k3d`), Helm 3.16, `kubectl`.
- **IaC:** Terraform 1.10 (or OpenTofu 1.9), optionally Pulumi.
- **Data/versioning:** Apache Airflow 2.10 (or Dagster 1.9), DVC 3.x, Feast 0.40 (feature store), LakeFS optional.
- **Experiment tracking/registry:** Weights & Biases (SaaS) + MLflow 2.20 (self-hosted registry).
- **Serving:** FastAPI 0.115 + Uvicorn/Gunicorn, vLLM 0.8.x (OpenAI-compatible server), NVIDIA Triton 25.0x, Ray Serve 2.40 optional, BentoML optional.
- **LLMOps:** LiteLLM Proxy 1.5x (LLM gateway), Portkey or Cloudflare AI Gateway (alt), GPTCache / Redis 7.4 (semantic cache), Langfuse 3.x (self-host), LangSmith, Arize Phoenix 7.x.
- **CI/CD:** GitHub Actions, Argo CD 2.13 (GitOps) or Flux; `promptfoo` 0.100+ and DeepEval 1.x for eval gates.
- **Observability infra:** Prometheus 3.x, Grafana 11.x, OpenTelemetry 1.x, Loki/ELK for logs, Evidently 0.6 / NannyML for drift.
- **Cloud (pick one primary; know the mapping):** AWS (EKS, SageMaker, **Bedrock**), GCP (GKE, **Vertex AI**), Azure (AKS, **Azure AI Foundry**). Serverless GPU: Modal, Baseten, RunPod.
- **Models:** Claude Opus 4.x / Sonnet 4.x (via Bedrock/Anthropic API) for the agent; a small open model (Llama 3.1 8B / Qwen3 8B) self-served on vLLM for cost/latency labs.

---

## Week 1 — The Production Mindset & Containerizing a Model

**Altitude:** Engineer · **Format:** 2h lecture + 4h lab
**Anchor case:** wrap `delivery-eta` in a reproducible Docker image that runs identically on your laptop and a teammate's.

### Learning goals
- Articulate the difference between a *notebook result* and a *production system* (the "works on my machine" tax) in terms of reproducibility, latency, and failure surface.
- Write a small, multi-stage `Dockerfile` that produces a slim, pinned, non-root inference image.
- Stand up the monorepo skeleton with two services, shared CI, and a `make`/`just` task runner.
- State the **MLOps maturity ladder** (manual → automated pipeline → CI/CD/CT) and locate your project on it.

### Concept map
- **Reproducible artifact.** Plain English: the same inputs produce the same image and the same prediction. Where it matters: every downstream guarantee (canary, rollback) assumes byte-identical artifacts. Common mistake: `pip install` with unpinned versions → the image silently changes next week.
- **Image layers & build cache.** Plain English: a Dockerfile is a stack of cached steps; order them cheap→expensive. Common mistake: copying source before installing deps, busting the cache on every code change.
- **Twelve-factor for ML.** Config in env vars, logs to stdout, stateless process. Common mistake: baking secrets or model weights into the image.
- **MLOps maturity (Google's levels 0/1/2).** Where it matters: it tells you the *next* investment, not all of them at once. Common mistake: building level-2 automation for a model nobody uses yet.

### Hands-on build (the lab)
- Create `fullstack-ai-platform/` monorepo: `services/eta-model/`, `services/support-copilot/`, `libs/`, `infra/`, `.github/workflows/`.
- Write `services/eta-model/Dockerfile` (multi-stage, `python:3.12-slim`, non-root user, pinned `uv` lock) serving the Subject-01 model behind a placeholder `/predict`.
- `docker build` + `docker run`; verify deterministic predictions; record image size and cold-start time.
- **Deliverable:** a buildable image + `make up` that boots it. **Acceptance:** image < 400 MB, runs as non-root, `/predict` returns a prediction with the model version in the response header.

### Harness / reusable skill — `$repro-image`
- **Purpose:** turn any model into a reproducible, slim, non-root container with a health check.
- **Inputs:** a trained model artifact + an inference function. **Required outputs:** multi-stage `Dockerfile`, pinned lockfile, `/healthz`, a recorded image-size + cold-start line.
- **Minimal workflow:** pin deps → stage build → drop privileges → add healthcheck → measure. **Evidence artifact:** `evidence/week01-image.md` (size, layers, cold start, repro hash).

### Common failure modes
- **Unpinned dependencies** → non-reproducible image. *Fix:* `uv lock` committed; build from the lock only.
- **Fat image** (CUDA base for a tree model) → slow pulls, big attack surface. *Fix:* match base image to actual runtime.
- **Secrets in layers** → leaked keys in registry. *Fix:* build args/secrets mounts, never `COPY .env`.
- **Root container** → blocked by cluster policy later. *Fix:* `USER app` and read-only filesystem.

### Evidence artifact
`evidence/week01-image.md` + the merged PR with a green build.

### Skill sink-in
Predict your final image size before building. Build it. Record the gap and the single layer that surprised you.

### Dataset(s)
**`delivery-eta` tabular CSV** (reused from Subject 01; ~50k rows, synthetic, course-licensed) — `data/delivery.csv`. No external download; versioned with DVC starting Week 3. (Public stand-in if needed: NYC Taxi trip-duration, `kaggle.com/c/nyc-taxi-trip-duration`, ODbL.)

### Code stub
```dockerfile
# services/eta-model/Dockerfile — fill in the build stage
FROM python:3.12-slim AS build
RUN pip install --no-cache-dir uv==0.7.*
WORKDIR /app
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev          # installs from the lock ONLY

FROM python:3.12-slim AS runtime
RUN useradd -m app && mkdir /app && chown app /app
WORKDIR /app
COPY --from=build /app/.venv /app/.venv
COPY --chown=app:app src/ ./src/
USER app
ENV PATH="/app/.venv/bin:$PATH"
HEALTHCHECK --interval=10s CMD python -c "import urllib.request,sys; urllib.request.urlopen('http://localhost:8000/healthz')"
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Graded rubric
| Criterion | Excellent (full) | Adequate (half) | Failing (0) |
|---|---|---|---|
| Reproducibility | Builds from lock; identical hash on rebuild | Builds but unpinned transitive deps | Non-reproducible / build fails |
| Image hygiene | Slim, non-root, healthcheck, no secrets | One of these missing | Root + secrets baked in |
| Evidence | Size + cold-start + repro hash recorded | Partial measurements | No evidence file |

**Assessment weight:** 4% of course grade.

### Readings & sources (2025–2026)
- Harvard **AC215** "VMs, Docker, Containers" module (Pavlos Protopapas et al., 2025).
- Sculley et al., *Hidden Technical Debt in Machine Learning Systems*, NeurIPS 2015 (still the canonical "why ops" paper).
- Google Cloud, *MLOps: Continuous delivery and automation pipelines in ML* (maturity levels 0–2), updated 2024.
- Docker docs, *Multi-stage builds* + *BuildKit* (2025).

---

## Week 2 — Orchestration: Kubernetes & Serverless GPU

**Altitude:** Engineer · **Anchor case:** deploy `delivery-eta` to a local Kubernetes cluster with health/readiness probes and an autoscaler; deploy the same image to a serverless GPU platform and compare.

### Learning goals
- Explain Pods, Deployments, Services, and Ingress, and why declarative desired-state beats `docker run` at scale.
- Write Kubernetes manifests (or a Helm chart) with liveness/readiness probes and resource requests/limits.
- Configure a Horizontal Pod Autoscaler (HPA) and reason about scale-to-zero for spiky GPU workloads.
- Decide when serverless GPU (Modal/Baseten) beats managing your own cluster.

### Concept map
- **Desired-state reconciliation.** Plain English: you declare what should run; the controller makes reality match. Common mistake: treating `kubectl apply` like imperative `run` and losing track of drift.
- **Liveness vs readiness.** Liveness = restart if dead; readiness = stop sending traffic until warm. Common mistake: a readiness probe that passes before the model is loaded → 500s during rollout.
- **Requests vs limits.** Requests = scheduling guarantee; limits = ceiling. Common mistake: no requests → noisy-neighbor OOM kills.
- **Scale-to-zero.** Where it matters: GPU minutes are expensive; idle agents shouldn't bill. Common mistake: cold-start latency that violates your SLO.

### Hands-on build
- Helm chart `infra/charts/eta-model/` with `Deployment`, `Service`, `HPA` (CPU target 60%), probes, and resource limits.
- `kind create cluster`; `helm install`; drive load with `hey`/`k6` and watch pods scale.
- Deploy the same container to **Modal** (or Baseten); record cold-start + per-request cost.
- **Deliverable:** running Deployment + HPA + a one-page "self-managed K8s vs serverless GPU" decision note. **Acceptance:** rolling update causes zero failed requests under light load (proven by a k6 report).

### Harness / reusable skill — `$k8s-deploy`
- **Purpose:** take any container to a probed, autoscaled, zero-downtime Deployment.
- **Inputs:** an image + SLO (p95 latency, RPS). **Outputs:** Helm values, probe config, HPA target, a k6 zero-downtime proof.
- **Evidence artifact:** `evidence/week02-rollout/k6-report.html` + manifests.

### Common failure modes
- **Probe-less deploys** → traffic to cold pods. *Fix:* readiness gates the model load.
- **No resource requests** → OOM/eviction roulette. *Fix:* set requests from observed usage.
- **Autoscaling on the wrong signal** → CPU target for a GPU/IO-bound service. *Fix:* scale on latency/queue depth (KEDA).
- **Serverless lock-in surprise** → great DX, opaque cost. *Fix:* record $/1k requests before committing.

### Evidence artifact
`evidence/week02-rollout/` (manifests + k6 report + decision note).

### Skill sink-in
Predict how many pods the HPA spins up at 200 RPS. Run the load test. Explain the gap (was it CPU target, startup time, or limits?).

### Dataset(s)
Synthetic load profile generated by **k6** (`grafana/k6` 0.55, AGPL/k6 license) replaying `delivery.csv` rows as JSON requests; no new data download.

### Code stub
```yaml
# infra/charts/eta-model/templates/deployment.yaml (excerpt to complete)
spec:
  replicas: {{ .Values.replicas }}
  template:
    spec:
      containers:
        - name: eta-model
          image: {{ .Values.image }}
          resources:
            requests: { cpu: "250m", memory: "512Mi" }
            limits:   { cpu: "1",    memory: "1Gi" }
          readinessProbe:                       # gate traffic on model load
            httpGet: { path: /healthz, port: 8000 }
            initialDelaySeconds: 5
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /livez, port: 8000 }
            initialDelaySeconds: 15
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Zero-downtime rollout | k6 shows 0 failed reqs across update | <0.5% errors | Errors during rollout |
| Autoscaling | HPA scales on a justified signal | Scales on default CPU | No HPA / static replicas |
| Cost reasoning | $/1k reqs for both options recorded | One option measured | No cost data |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Burns, Beda, Hightower, *Kubernetes Up & Running*, 3rd ed., O'Reilly 2022 (Deployments/Services/probes).
- Harvard **AC215** "Scaling with Kubernetes" milestone (2025).
- Modal docs, *Deploying ML models* + cold-start guide (2025); Baseten *Truss* docs (2025).
- KEDA project docs, *Event-driven autoscaling* (2025).

---

## Week 3 — Data Pipelines & Versioning: Airflow, DVC, Feature Stores

**Altitude:** Engineer · **Anchor case:** an Airflow DAG that refreshes `delivery-eta` features daily, with the dataset and model versioned in DVC and features served from Feast.

### Learning goals
- Design an idempotent, scheduled data pipeline (extract → validate → transform → materialize) as a DAG.
- Version data and model artifacts with DVC so any past prediction is reproducible from a commit hash.
- Explain the train/serve skew problem and how a feature store (Feast) solves it with offline+online parity.
- Add data-quality gates (schema + distribution checks) that *fail the DAG* on bad data.

### Concept map
- **DAG idempotency.** Plain English: re-running a task for the same date yields the same result, no duplicates. Common mistake: appending instead of upserting → double-counted features.
- **Data versioning (DVC).** *Plain English:* Git for big files via content-addressed pointers. *Code mapping:* `dvc add data/delivery.csv` writes a `.dvc` pointer Git tracks. Common mistake: committing the data blob to Git itself.
- **Train/serve skew.** Plain English: features computed differently in training vs serving silently wreck accuracy. Where it matters: this is the #1 cause of "great offline, bad online." *Fix:* one transformation, two read paths (Feast offline/online).
- **Data contract.** A schema + distribution expectation the pipeline enforces. Common mistake: trusting upstream data to keep its shape.

### Hands-on build
- `pipelines/eta_features.py`: Airflow DAG with tasks `extract → validate (Great Expectations / pandera) → transform → materialize_to_feast`.
- `dvc init`; track `data/` and `models/`; push to a remote (S3/GCS); show `dvc checkout` reproducing an old dataset.
- Define a Feast feature view; materialize; read the same feature offline (training) and online (serving).
- **Deliverable:** a scheduled DAG + DVC remote + Feast feature view. **Acceptance:** a deliberately corrupted input row makes the DAG fail at the validation task (not at serving).

### Harness / reusable skill — `$data-contract`
- **Purpose:** wrap any dataset in a schema + distribution contract that gates the pipeline.
- **Inputs:** a dataframe + expectations. **Outputs:** a validation suite, a DAG gate task, a failure report sample.
- **Evidence artifact:** `evidence/week03-data-contract/validation-report.html`.

### Common failure modes
- **Silent schema drift** → model eats garbage. *Fix:* schema gate fails the DAG.
- **Data in Git** → bloated repo, slow clones. *Fix:* DVC pointers + remote storage.
- **Train/serve skew** → offline≠online features. *Fix:* single transform, Feast parity test.
- **Non-idempotent backfills** → duplicated rows on retry. *Fix:* upsert by key + execution-date partitioning.

### Evidence artifact
`evidence/week03-data-contract/` (DAG run log + validation report + a `dvc checkout` reproducibility note).

### Skill sink-in
Predict which validation check the corrupted row will trip. Run the DAG. Record whether the gate caught it where you expected.

### Dataset(s)
**`delivery.csv`** under DVC + a public reference pipeline on **NYC TLC Trip Records** (`nyc.gov/tlc`, ~1.5 GB/month Parquet, public-domain) to practice partitioned backfills at realistic scale.

### Code stub
```python
# pipelines/eta_features.py — complete the validation gate
from airflow.decorators import dag, task
import pandera as pa, pandas as pd

schema = pa.DataFrameSchema({
    "distance_km": pa.Column(float, pa.Check.in_range(0, 100)),
    "item_count":  pa.Column(int,   pa.Check.ge(1)),
    "minutes":     pa.Column(float, pa.Check.in_range(0, 240)),
})

@dag(schedule="@daily", catchup=False, tags=["eta"])
def eta_features():
    @task
    def validate(path: str) -> str:
        df = pd.read_csv(path)
        schema.validate(df, lazy=True)   # raises -> task fails -> DAG fails
        return path
    # extract >> validate >> transform >> materialize_to_feast
eta_features()
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Pipeline correctness | Idempotent, partitioned, retry-safe | Runs but appends on retry | Non-idempotent / brittle |
| Versioning | Old dataset+model reproduced from a commit | DVC set up, not demonstrated | No data versioning |
| Quality gate | Bad data fails the DAG at validation | Validation present, not wired to fail | No validation |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Feast docs, *Feature store concepts / offline-online consistency* (2025).
- Apache Airflow docs, *TaskFlow API + idempotency best practices* (2.10, 2025).
- DVC docs, *Data & model versioning* (3.x, 2025).
- Polyzotis et al., *Data Management Challenges in Production ML*, SIGMOD 2018; Breck et al., *The ML Test Score* (Google), 2017.

---

## Week 4 — Experiment Tracking, Model Registry & Reproducible Training

**Altitude:** Engineer · **Anchor case:** retrain `delivery-eta` with every run logged to W&B, the winning model promoted in the MLflow registry, and a one-command path from "experiment" to "registered, stage=Staging."

### Learning goals
- Instrument a training run with experiment tracking (params, metrics, artifacts, system stats).
- Use a model registry to manage versions and lifecycle stages (None→Staging→Production→Archived).
- Make training reproducible (seeds, pinned data version, captured config) and comparable across runs.
- Connect "best run" to "deployable artifact" via a registry promotion gate.

### Concept map
- **Experiment vs run vs artifact.** Plain English: an experiment is a question; a run is one attempt; an artifact is what it produced. Common mistake: logging metrics but not the exact data/code version → uncomparable runs.
- **Model registry & stages.** Where it matters: the registry is the single source of truth for "what is in prod." Common mistake: deploying a file from someone's laptop instead of a registry version.
- **Lineage.** Plain English: from a prediction, trace back to model→data→code. Common mistake: no link from a bad prediction to the run that made the model.
- **Sweep/HPO.** Why it matters: structured search beats fiddling. Common mistake: tuning on the test set.

### Hands-on build
- Add `wandb` logging to `train_eta.py` (config, metrics, learning curves, the DVC data hash as a tag).
- Run a small W&B Sweep over 2–3 hyperparameters; pick the best by validation MAE.
- Log the model to **MLflow Model Registry**; promote to `Staging`; write a `promote.py` that the CI will call next week.
- **Deliverable:** a tracked sweep + a registered model with lineage. **Acceptance:** from the registered model you can click/trace back to its data version and git SHA.

### Harness / reusable skill — `$run-ledger`
- **Purpose:** ensure every training run is reproducible and registry-promotable.
- **Inputs:** a training script. **Outputs:** logged config+metrics+artifact, a registry entry with data/code lineage, a promotion command.
- **Evidence artifact:** `evidence/week04-runs/sweep-summary.md` + registry screenshot/URL.

### Common failure modes
- **Untracked runs** → "which config got 0.31 MAE?" lost forever. *Fix:* log before you tune.
- **Test-set tuning** → optimistic, fake gains. *Fix:* sweep on validation, touch test once.
- **Laptop-to-prod artifacts** → unreproducible deploys. *Fix:* deploy only registry versions.
- **No lineage** → can't audit a bad prediction. *Fix:* tag runs with data hash + git SHA.

### Evidence artifact
`evidence/week04-runs/` (sweep summary + best-run config + registry link with lineage).

### Skill sink-in
Predict which hyperparameter matters most before the sweep. Run it. Record whether the parallel-coordinates plot agreed.

### Dataset(s)
**`delivery.csv`** (DVC-versioned) for the sweep; optionally **California Housing** (`sklearn.datasets`, CC0) as a second tracked task to prove the harness generalizes.

### Code stub
```python
# train_eta.py — add tracking + registry promotion
import wandb, mlflow, mlflow.sklearn, subprocess
git_sha = subprocess.check_output(["git","rev-parse","HEAD"]).decode().strip()
run = wandb.init(project="eta", config={"max_depth": 6, "lr": 0.1},
                 tags=[f"data:{open('data/delivery.csv.dvc').read().splitlines()[1]}", f"sha:{git_sha}"])
model = train(run.config)                      # your training fn
val_mae = evaluate(model)
wandb.log({"val_mae": val_mae})
with mlflow.start_run():
    mlflow.log_params(dict(run.config)); mlflow.log_metric("val_mae", val_mae)
    mlflow.sklearn.log_model(model, "model",
        registered_model_name="eta-model")     # -> registry, stage via client.transition_model_version_stage(...)
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Reproducibility | Run re-creatable from logged config+data hash | Config logged, data version implicit | Untracked run |
| Registry hygiene | Versioned + staged + lineage to data/code | Registered, no lineage | No registry |
| Comparison | Sweep with a clear, justified winner | Multiple runs, ad-hoc choice | Single run |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Weights & Biases docs, *Experiments, Sweeps, Model Registry* (2025).
- MLflow docs, *Model Registry & stages* (2.20, 2025).
- Harvard **AC215** "Experiment Tracking & Advanced Training (W&B, multi-GPU, Vertex AI)" (2025).
- Biderman et al., *Pythia: reproducible LM training suite*, ICML 2023 (reproducibility discipline at scale).

---

## Week 5 — Model Serving I: FastAPI, vLLM & Triton

**Altitude:** Engineer · **Anchor case:** serve `delivery-eta` behind a FastAPI service *and* stand up the `support-copilot` LLM on a self-hosted **vLLM** OpenAI-compatible endpoint; compare to a Triton-served path.

### Learning goals
- Build a production FastAPI service (validation, versioned responses, batching, graceful shutdown).
- Stand up an LLM inference server with **vLLM** (continuous batching, OpenAI-compatible API) and reason about throughput vs latency.
- Compare serving stacks (FastAPI custom, vLLM, **Triton Inference Server**) and pick by workload.
- Measure p50/p95/p99 latency and tokens/sec under concurrency.

### Concept map
- **Online vs offline/batch inference.** Plain English: per-request now vs bulk later. Common mistake: a synchronous request path for a job that should be a queue.
- **Continuous batching (vLLM).** *Plain English:* the server packs many in-flight requests into each GPU step instead of waiting for a full static batch. Where it matters: 5–20× LLM throughput. Common mistake: assuming static batch behavior and under-provisioning.
- **Throughput vs latency tradeoff.** Bigger batches raise tokens/sec but raise p95. Common mistake: optimizing one and surprising the SLO with the other.
- **Backpressure.** Plain English: refuse or queue politely when overloaded. Common mistake: unbounded queues → memory blowup and cascading timeouts.

### Hands-on build
- `services/eta-model/main.py`: FastAPI with Pydantic request/response, model version header, `/metrics`, graceful shutdown.
- Launch **vLLM** serving Llama-3.1-8B (or Qwen3-8B): `vllm serve ... --max-num-seqs ...`; hit it with the OpenAI client.
- Load-test all paths with `k6`/`locust`; produce a latency+throughput table (FastAPI vs vLLM vs Triton).
- **Deliverable:** two live endpoints + a serving-comparison table. **Acceptance:** vLLM continuous-batching throughput beats a naive one-request-at-a-time loop by ≥3× at equal p95, shown with numbers.
- **Design review #1 (10%-component):** an ADR choosing the serving topology for both anchor cases.

### Harness / reusable skill — `$serve-bench`
- **Purpose:** benchmark any serving stack for latency/throughput/cost and recommend a topology.
- **Inputs:** an endpoint + a load profile. **Outputs:** p50/p95/p99, tokens/sec (LLM), $/1k requests, a recommendation.
- **Evidence artifact:** `evidence/week05-serving/bench-table.md`.

### Common failure modes
- **Sync path for batch work** → timeouts under load. *Fix:* queue + worker for bulk jobs.
- **No backpressure** → OOM under spikes. *Fix:* bounded concurrency + 429s.
- **Single-number latency** → hides tail pain. *Fix:* report p95/p99, not just mean.
- **GPU under-utilization** → paying for idle silicon. *Fix:* continuous batching + right `max-num-seqs`.

### Evidence artifact
`evidence/week05-serving/` (bench table + ADR `adr-001-serving-topology.md`).

### Skill sink-in
Predict the p99 latency of the vLLM endpoint at 32 concurrent streams. Measure. Record what moved the tail (batching, KV-cache pressure, or tokenization).

### Dataset(s)
**ShareGPT / LMSYS-Chat-1M** prompt sample (`huggingface.co/datasets/lmsys/lmsys-chat-1m`, ~1M convs, permissive research license) to drive realistic LLM load; `delivery.csv` rows for the model endpoint.

### Code stub
```python
# services/eta-model/main.py — production-shaped FastAPI
from fastapi import FastAPI, Response
from pydantic import BaseModel, Field
import mlflow.pyfunc, os
app = FastAPI()
MODEL = mlflow.pyfunc.load_model(os.environ["MODEL_URI"])   # a registry version
VERSION = os.environ["MODEL_VERSION"]

class Req(BaseModel):
    distance_km: float = Field(ge=0, le=100); item_count: int = Field(ge=1)

@app.get("/healthz")
def healthz(): return {"ok": True}

@app.post("/predict")
def predict(r: Req, resp: Response):
    resp.headers["X-Model-Version"] = VERSION
    return {"minutes": float(MODEL.predict([[r.distance_km, r.item_count]])[0])}
# vLLM (separate process): vllm serve Qwen/Qwen3-8B --max-num-seqs 256 --port 8001
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Service quality | Validated, versioned, backpressured, graceful | Works, missing one concern | Crashes under load |
| LLM serving | vLLM continuous batching shown ≥3× | vLLM up, no comparison | Naive loop only |
| Measurement | p50/95/99 + tokens/sec + cost | Latency only | Mean only / none |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Kwon et al., *Efficient Memory Management for LLM Serving with PagedAttention (vLLM)*, SOSP 2023.
- vLLM docs, *OpenAI-compatible server & continuous batching* (0.8.x, 2025); NVIDIA **Triton** docs (25.0x).
- Chip Huyen, *AI Engineering* (O'Reilly 2025), inference chapter.
- Harvard **AC215** "Advanced Inference: distillation, quantization, deployment" (2025).

---

## Week 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)

**Altitude:** Engineer · **Anchor case:** a GitHub Actions pipeline that builds, tests, **evaluates**, and (only if the eval passes) deploys both `eta-model` and `support-copilot`. A prompt change to the copilot must clear an offline eval gate before it can ship.

### Learning goals
- Build a CI pipeline for an ML service: lint → unit test → build → integration test → registry promote → deploy.
- Extend CI to **CT (continuous training)** triggers and **eval-gated** prompt/agent deploys.
- Treat prompts and eval suites as **versioned code** with their own tests (`promptfoo`/DeepEval).
- Implement a deploy gate: a PR cannot merge if the offline eval score regresses beyond a threshold.

### Concept map
- **CI vs CD vs CT.** Plain English: integrate code / deliver artifact / retrain on new data. Common mistake: conflating "tests pass" with "model is good."
- **Eval-gated deploy.** *Plain English:* the model/prompt must beat a scored bar on a frozen eval set before release. Where it matters: prompts have no compiler — the eval suite *is* the type-checker. Common mistake: shipping a "better-sounding" prompt that regresses on edge cases.
- **Prompt as code.** Versioned, reviewed, diffed, tested. Common mistake: editing prompts in a console with no history.
- **Golden/regression set.** A frozen set of hard cases. Common mistake: letting it leak into the prompt's few-shot examples.

### Hands-on build
- `.github/workflows/eta.yml` and `support-copilot.yml`: full pipeline with caching, OIDC cloud auth, and a deploy job gated on tests.
- Add a **`promptfoo`** eval suite (`evals/copilot/`) with ≥20 cases + assertions (contains/llm-rubric/latency/cost); fail CI if pass-rate < 0.9 or cost regresses.
- Wire **eval-gated deploy**: deploy job `needs: eval` and only runs on `main` after green eval.
- **Deliverable:** two green pipelines, one of which blocks a deliberately-bad prompt PR. **Acceptance:** a PR that worsens the copilot's eval pass-rate is *automatically blocked* by CI (screenshot the red gate).

### Harness / reusable skill — `$eval-gate`
- **Purpose:** turn any eval suite into a CI gate that blocks regressions in quality, latency, or cost.
- **Inputs:** an eval set + thresholds. **Outputs:** a CI job, a pass/fail report, a blocked-PR example.
- **Evidence artifact:** `evidence/week06-eval-gate/blocked-pr.md` (the diff + the failing eval report).

### Common failure modes
- **Vibes-based prompt changes** → silent quality regressions. *Fix:* eval-gate every prompt PR.
- **Flaky LLM-judge gate** → non-deterministic CI. *Fix:* fixed judge model + seed + tolerance band, report variance.
- **Eval-set leakage** → gate that always passes. *Fix:* keep the golden set out of prompts/training.
- **Slow gate** → 40-min CI nobody runs. *Fix:* tiered evals (fast smoke on PR, full nightly).

### Evidence artifact
`evidence/week06-eval-gate/` (workflow YAML + blocked-PR evidence + the eval report).

### Skill sink-in
Predict whether your "improved" copilot prompt will pass the gate. Open the PR. Record which two cases it regressed on and why.

### Dataset(s)
**A hand-built golden eval set** `evals/copilot/cases.yaml` (~25 support questions w/ expected behaviors, course-authored, course-licensed) + a slice drawn from **`huggingface.co/datasets/Anthropic/hh-rlhf`** style helpfulness prompts as adversarial cases.

### Code stub
```yaml
# .github/workflows/support-copilot.yml (eval-gated deploy excerpt)
jobs:
  eval:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npx promptfoo@latest eval -c evals/copilot/promptfooconfig.yaml --share=false
      - run: |                         # fail if quality or cost regresses
          python ci/check_thresholds.py --min-pass-rate 0.90 --max-cost-usd 0.02
  deploy:
    needs: eval                        # <-- the gate: no green eval, no deploy
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps: [ { uses: actions/checkout@v4 }, { run: ./infra/deploy.sh copilot } ]
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Pipeline completeness | lint→test→build→eval→deploy, cached, OIDC | Missing one stage | Build-only |
| Eval gate | Blocks a real regression in quality+cost | Gate exists, quality only | No gate |
| Determinism | Gate is stable (seeded, tolerance-banded) | Occasionally flaky | Non-reproducible |

**Assessment weight:** 6% of course grade.

### Readings & sources
- promptfoo docs, *CI/CD & assertions*; DeepEval docs, *pytest-style LLM tests* (2025).
- Google, *CI/CD and CT for ML pipelines* (MLOps level 2), 2024.
- Zaharia et al., *The Shift from Models to Compound AI Systems* (BAIR blog), 2024 (why systems, not models, are the unit of delivery).
- Shankar et al., *Who Validates the Validators? Aligning LLM-assisted evaluation*, UIST 2024.

---

## Week 7 — LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control

**Altitude:** Engineer · **Anchor case:** route every `support-copilot` LLM call through an **LLM gateway** (LiteLLM) with centralized keys, fallback, **semantic caching**, per-tenant budgets, and a live cost/latency dashboard.

### Learning goals
- Stand up an **LLM gateway** for unified routing, retries, fallback, rate limits, and per-key budgets.
- Implement **semantic caching** and measure cost/latency savings and the cache-hit quality risk.
- Externalize prompts into a versioned **prompt registry** with environment-specific variants.
- Control cost: token budgets, model routing (cheap-first/escalation), and a kill-switch on spend.

### Concept map
- **LLM gateway.** Plain English: one front door for all model calls — keys, routing, fallback, metering. Where it matters: without it, cost/observability/keys sprawl across services. Common mistake: each service holding its own provider key with no budget.
- **Semantic cache.** *Plain English:* reuse a previous answer when a new query is *semantically* close (embedding similarity over a threshold). Common mistake: threshold too loose → returning a confidently wrong cached answer.
- **Model routing / escalation.** Plain English: try a cheap small model; escalate to Opus only when needed. Common mistake: defaulting every call to the most expensive model.
- **Cost as a first-class SLO.** Plain English: $/request is a number you budget and alert on, like latency. Common mistake: discovering the bill at month-end.

### Hands-on build
- Deploy **LiteLLM Proxy**: register Bedrock/Anthropic + the self-hosted vLLM model; set per-key budgets and a fallback chain (vLLM-8B → Sonnet → Opus).
- Add a **semantic cache** (GPTCache/Redis): measure hit-rate, cost saved, and run a small audit for wrong-cache-hits.
- Move copilot prompts into a versioned registry (Langfuse prompts or a `prompts/` dir with hashes); select variant by env.
- **Deliverable:** gateway + cache + cost dashboard. **Acceptance:** a documented configuration that cuts cost/request ≥30% on a replayed traffic sample *without* dropping the Week-6 eval pass-rate below threshold.

### Harness / reusable skill — `$llm-gateway`
- **Purpose:** front any LLM app with routing, fallback, budgets, and caching, with cost/latency metered.
- **Inputs:** provider keys + a routing/budget policy. **Outputs:** a gateway config, a cache policy, a cost/latency dashboard, a savings report.
- **Evidence artifact:** `evidence/week07-llmops/cost-before-after.md`.

### Common failure modes
- **Over-loose semantic cache** → confidently wrong reuse. *Fix:* tune threshold, exclude volatile intents, audit hits.
- **No fallback** → one provider outage = full outage. *Fix:* gateway fallback chain + timeouts.
- **Most-expensive-by-default routing** → 10× bill. *Fix:* cheap-first with quality-triggered escalation.
- **Prompt sprawl** → untracked prod prompts. *Fix:* versioned prompt registry keyed by env.

### Evidence artifact
`evidence/week07-llmops/` (gateway config + cache audit + cost-before/after + dashboard screenshot).

### Skill sink-in
Predict your semantic-cache hit-rate on the replay. Measure it. Then find one wrong cache hit and decide whether to tighten the threshold or exclude that intent.

### Dataset(s)
**Replayed copilot traffic** (~2k logged queries, course-collected from Weeks 5–6, course-licensed) + **`huggingface.co/datasets/lmsys/lmsys-chat-1m`** for cache-stress diversity.

### Code stub
```yaml
# litellm_config.yaml — gateway with fallback + budgets (complete the cache hook)
model_list:
  - model_name: copilot
    litellm_params: { model: hosted_vllm/Qwen3-8B, api_base: http://vllm:8001/v1 }
  - model_name: copilot-strong
    litellm_params: { model: bedrock/anthropic.claude-sonnet-4 }
router_settings:
  fallbacks: [{ copilot: ["copilot-strong"] }]
  num_retries: 2
  timeout: 30
litellm_settings:
  max_budget: 50.0            # USD/day kill-switch
  cache: { type: redis, host: redis, similarity_threshold: 0.93 }  # semantic cache
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Cost control | ≥30% cost cut, quality held | Some savings, quality unverified | No measured savings |
| Reliability | Fallback + budget kill-switch proven | Configured, untested | Single provider, no budget |
| Cache safety | Hit-rate + wrong-hit audit done | Cache on, no audit | Unsafe threshold |

**Assessment weight:** 6% of course grade.

### Readings & sources
- LiteLLM docs, *Proxy: routing, fallbacks, budgets, caching* (1.5x, 2025); Portkey / Cloudflare AI Gateway docs (2025).
- Bang, *GPTCache: semantic caching for LLMs*, 2023; Zhu et al., *Towards Optimal Caching for LLM Serving*, 2024.
- Chip Huyen, *AI Engineering* (2025), cost/latency & routing chapters.
- Langfuse docs, *Prompt management & versioning* (3.x, 2025).

---

## Week 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry

**Altitude:** Engineer · **Anchor case:** full **OpenTelemetry** tracing of a `support-copilot` request (gateway → retrieval → tool calls → LLM), exported to **Langfuse** (LLM traces) and **Prometheus/Grafana** (RED metrics), with **Arize Phoenix** for retrieval/LLM evals on traces.

### Learning goals
- Instrument a service with the three pillars: traces, metrics, logs — and know which question each answers.
- Trace a multi-step LLM/agent request end-to-end (spans for retrieval, each tool, each model call) with token/cost attributes.
- Build a Grafana dashboard of RED (Rate/Errors/Duration) + LLM-specific metrics (tokens, cost, cache-hit, eval score).
- Use trace-linked evals (Phoenix/Langfuse) to debug *why* a specific bad answer happened.

### Concept map
- **Traces vs metrics vs logs.** Plain English: a trace is one request's journey; metrics are aggregate trends; logs are events. Common mistake: trying to debug a single bad answer from dashboards (you need the trace).
- **Span & attributes.** *Plain English:* each step is a span; attach prompt, tokens, cost, retrieved-doc-ids. Common mistake: logging the final answer but not the retrieved context → undebuggable hallucinations.
- **RED + LLM metrics.** Rate/Errors/Duration plus tokens, $/req, cache-hit, eval pass-rate. Common mistake: only system metrics (CPU) for an LLM service whose real risk is quality/cost.
- **Trace-linked eval.** Plain English: score the actual production trace, not a synthetic copy. Common mistake: offline evals that never touch real traffic.

### Hands-on build
- Add **OpenTelemetry** SDK + Langfuse callback to the copilot; create spans for retrieve / each tool / each LLM call with token+cost attributes.
- Export metrics to **Prometheus**; build a **Grafana** dashboard (RED + tokens + cost + cache-hit + eval score).
- Run **Phoenix** over a batch of traces to flag low-relevance retrievals and hallucination-prone answers.
- **Deliverable:** an end-to-end trace + a Grafana dashboard + a Phoenix eval over real traces. **Acceptance:** given a planted bad answer, you can open *its* trace and name the failing step (bad retrieval vs bad tool result vs model error) in under 2 minutes.

### Harness / reusable skill — `$trace-debug`
- **Purpose:** make any LLM/agent request fully traceable and explainable from a single span tree.
- **Inputs:** an instrumented app + a failing request id. **Outputs:** the trace, the identified failing span, a one-line root cause.
- **Evidence artifact:** `evidence/week08-obs/root-cause-from-trace.md`.

### Common failure modes
- **Dashboard-only debugging** → can't explain a single failure. *Fix:* per-request traces with context attributes.
- **Missing context in spans** → undebuggable hallucination. *Fix:* log retrieved doc-ids + tool I/O on spans.
- **No cost/quality metrics** → blind to the two biggest LLM risks. *Fix:* add token/cost/eval to the dashboard.
- **Cardinality explosion** → Prometheus melts. *Fix:* keep high-cardinality data in traces, not metric labels.

### Evidence artifact
`evidence/week08-obs/` (trace export + Grafana JSON + Phoenix eval + root-cause note).

### Skill sink-in
Before opening the planted-failure trace, predict which span is at fault. Open it. Record whether retrieval, tool, or model was the culprit.

### Dataset(s)
**Production traces** captured from Weeks 5–7 (course-collected) + the **Phoenix demo retrieval dataset** (`arize-ai/phoenix` examples, ELI-style QA, permissive) to calibrate the relevance evaluator.

### Code stub
```python
# instrument the copilot with OTel + Langfuse spans
from opentelemetry import trace
from langfuse.decorators import observe, langfuse_context
tracer = trace.get_tracer("copilot")

@observe()                                   # Langfuse trace
def answer(query: str) -> str:
    with tracer.start_as_current_span("retrieve") as s:
        docs = retrieve(query); s.set_attribute("doc_ids", [d.id for d in docs])
    with tracer.start_as_current_span("llm") as s:
        out = llm(query, docs)
        langfuse_context.update_current_observation(
            usage={"input": out.in_tok, "output": out.out_tok}, model=out.model)
        s.set_attribute("cost_usd", out.cost)
    return out.text
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Tracing depth | Spans for retrieval+tools+LLM w/ cost/context | LLM call traced only | No tracing |
| Dashboards | RED + tokens + cost + cache + eval | RED only | None |
| Debuggability | Root-causes a planted failure from its trace | Finds it slowly | Can't isolate |

**Assessment weight:** 6% of course grade.

### Readings & sources
- OpenTelemetry docs, *Traces/Metrics/Logs & semantic conventions for GenAI* (2025).
- Langfuse docs, *Tracing & evals* (3.x); Arize **Phoenix** docs, *trace-linked LLM evals* (7.x, 2025).
- Krish Naik project: *AI GitHub PR Code Reviewer* (LangGraph + Prometheus/Grafana + Langfuse), 2025.
- Beyer et al., *Site Reliability Engineering* (Google), 2016 — RED/USE methods, SLOs.

---

## Week 9 — Monitoring, Drift Detection & Alerting in Production

**Altitude:** Engineer · **Anchor case:** detect when `delivery-eta` accuracy decays (new neighborhoods, holiday traffic) and when `support-copilot` quality drifts (new product line), with alerts that page only on real problems.

### Learning goals
- Distinguish data drift, concept drift, and prediction drift, and choose a detector for each.
- Monitor an LLM app where labels are scarce: proxy signals (eval score on sampled traffic, refusal rate, user thumbs, retrieval-relevance).
- Define SLIs/SLOs and alerting that minimizes both misses and pager fatigue.
- Close the loop: drift alert → labeling/eval task → retrain/prompt-fix decision.

### Concept map
- **Data vs concept drift.** Plain English: inputs change vs the input→output relationship changes. Where it matters: data drift you can see immediately; concept drift you often see only via delayed labels. Common mistake: alerting on input drift that doesn't actually hurt accuracy.
- **Proxy quality signals for LLMs.** Plain English: without ground truth, watch refusal rate, eval-on-sample, retrieval relevance, user feedback. Common mistake: assuming "no errors logged" = "good answers."
- **SLI/SLO/error budget.** Plain English: pick a measurable indicator, a target, and how much failure you'll tolerate before halting changes. Common mistake: alerting on raw metrics with no budget → pager fatigue.
- **Delayed labels.** Common mistake: computing "live accuracy" before the true delivery time even exists.

### Hands-on build
- Add **Evidently**/NannyML drift monitors to `eta-model` (feature drift +, once labels arrive, performance); schedule as an Airflow report.
- For the copilot: sample 5% of traffic nightly, run the Week-6 eval suite on it, track pass-rate + refusal-rate + retrieval relevance over time.
- Define SLOs (eta p95 latency, copilot eval pass-rate ≥ 0.88) and Prometheus **Alertmanager** rules with sane thresholds + for-durations.
- **Deliverable:** drift dashboard + alert rules + a closed-loop runbook. **Acceptance:** an injected distribution shift fires exactly one actionable alert (not ten), linked to a runbook step.
- **Design review #2 (10%-component):** an ADR for the release + rollback strategy you'll implement in Week 10.

### Harness / reusable skill — `$drift-watch`
- **Purpose:** monitor a model or LLM app for drift/quality decay with low-noise, actionable alerts.
- **Inputs:** a reference window + live data + SLOs. **Outputs:** drift report, alert rules, a runbook entry per alert.
- **Evidence artifact:** `evidence/week09-monitoring/alert-and-runbook.md`.

### Common failure modes
- **Alerting on harmless input drift** → pager fatigue. *Fix:* alert on impact (SLO/performance), not every shift.
- **No-labels complacency for LLMs** → silent quality rot. *Fix:* eval-on-sample + feedback as proxies.
- **Premature accuracy metrics** → wrong numbers before labels land. *Fix:* model the label delay explicitly.
- **Thresholds with no for-duration** → flapping alerts. *Fix:* `for: 10m` + multi-window.

### Evidence artifact
`evidence/week09-monitoring/` (drift report + alert rules + runbook + ADR-002 release strategy).

### Skill sink-in
Predict which feature's drift will (and won't) move accuracy. Inject the shift. Record whether your alert fired on the *impactful* one only.

### Dataset(s)
**`delivery.csv` with an injected covariate shift** (course script perturbs `distance_km`/weather) + **Evidently's bike-demand / adult-income reference datasets** (`evidentlyai/evidently` examples, public) to calibrate detectors.

### Code stub
```python
# eta-model drift report (Evidently) + alert signal
from evidently import Report
from evidently.presets import DataDriftPreset
report = Report(metrics=[DataDriftPreset()])
snapshot = report.run(reference_data=ref_df, current_data=live_df)
res = snapshot.dict()
share = res["metrics"][0]["value"]["share_of_drifted_columns"]
if share > 0.3:                 # tune from history, not gut feel
    push_to_prometheus("eta_drift_share", share)   # Alertmanager rule fires with for: 30m
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Drift detection | Right detector per drift type, calibrated | Generic detector, noisy | None |
| LLM quality monitoring | Eval-on-sample + proxies tracked | One proxy | No quality signal |
| Alert quality | One actionable alert, runbook-linked | Fires but noisy | No alerts / floods |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Evidently docs, *Data & prediction drift*; NannyML docs, *performance estimation without labels* (2025).
- Gama et al., *A Survey on Concept Drift Adaptation*, ACM Computing Surveys 2014.
- Google SRE Workbook, *Implementing SLOs* (2018).
- Shankar et al., *Operationalizing ML: an interview study*, 2022 (what actually breaks in prod).

---

## Week 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates

**Altitude:** Engineer · **Anchor case:** ship a new `eta-model` version and a new `support-copilot` prompt/model via **shadow mode → canary → rolling release**, with automated rollback on SLO breach and an HITL approval gate for high-risk agent actions.

### Learning goals
- Implement progressive delivery: shadow (mirror traffic, no user impact), canary (small %), rolling/blue-green.
- Automate rollback driven by metrics/eval gates (Argo Rollouts analysis), not by a human noticing.
- Add human-in-the-loop gates for irreversible agent actions (refunds, account changes) with approval + audit.
- Run an A/B or interleaving test to decide promotion on a real metric, not a hunch.

### Concept map
- **Shadow mode.** *Plain English:* the new version sees real traffic but its outputs are logged, not served. Where it matters: catch regressions with zero user risk. Common mistake: shadowing side-effectful calls (don't let the shadow actually issue refunds).
- **Canary + automated analysis.** Plain English: route 5% → measure SLO/eval → auto-promote or auto-rollback. Common mistake: manual canary nobody watches.
- **Blue-green vs rolling.** Instant switch+rollback vs gradual. Common mistake: rolling a stateful change with no rollback path.
- **HITL gate.** Plain English: pause the agent and require human approval before an irreversible action. Common mistake: gating everything (alert fatigue) or nothing (runaway agent).

### Hands-on build
- Deploy a new `eta-model` in **shadow mode**; compare shadow vs prod predictions offline for a day's traffic.
- Configure **Argo Rollouts** canary with an analysis template (auto-rollback if p95 latency or error-rate breaches).
- For the copilot, gate a "process refund" tool behind an HITL approval step (queue + approve/deny + audit log).
- **Deliverable:** a recorded shadow→canary→rollback cycle + an HITL-gated agent action. **Acceptance:** a deliberately-bad new version is **auto-rolled-back** by the analysis gate (no human intervention), and the refund tool cannot fire without logged approval.

### Harness / reusable skill — `$safe-release`
- **Purpose:** release any model/prompt/agent change via shadow→canary with metric-driven auto-rollback + HITL gates for risky actions.
- **Inputs:** a new version + promotion/rollback metrics + a list of irreversible actions. **Outputs:** a rollout manifest, an analysis template, an HITL gate, a rollback proof.
- **Evidence artifact:** `evidence/week10-release/auto-rollback.md`.

### Common failure modes
- **Side-effecting shadows** → shadow issues real refunds. *Fix:* stub/intercept side effects in shadow.
- **Manual rollback only** → slow MTTR at 3am. *Fix:* automated analysis-driven rollback.
- **Canary on a vanity metric** → promote a worse model. *Fix:* gate on the SLO/eval that matters.
- **Over- or under-gating HITL** → fatigue or runaway. *Fix:* gate only irreversible/high-cost actions, with audit.

### Evidence artifact
`evidence/week10-release/` (rollout manifest + analysis template + auto-rollback log + HITL audit trail).

### Skill sink-in
Predict how long auto-rollback takes after you inject the bad version. Trigger it. Record the actual MTTR and whether any user request failed.

### Dataset(s)
**Live mirrored traffic** to the shadow (course-collected) + the **golden eval set** (Week 6) reused as the canary analysis gate; refund-scenario cases authored in `evals/copilot/risky-actions.yaml`.

### Code stub
```yaml
# Argo Rollouts canary with auto-rollback analysis (excerpt)
strategy:
  canary:
    steps:
      - setWeight: 5
      - pause: { duration: 10m }
      - analysis:
          templates: [{ templateName: slo-and-eval }]   # rolls back on failure
      - setWeight: 50
      - pause: { duration: 10m }
      - setWeight: 100
# AnalysisTemplate slo-and-eval: fail if p95_latency > 400ms OR eval_pass_rate < 0.88
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Progressive delivery | Shadow + canary + rolling, side-effects safe | Canary only | Big-bang deploy |
| Auto-rollback | Metric-driven, MTTR measured | Manual rollback | No rollback path |
| HITL gate | Irreversible actions gated + audited | Gate exists, no audit | Ungated agent |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Argo Rollouts docs, *Canary, analysis & automated rollback* (2.x, 2025).
- Humble & Farley, *Continuous Delivery* (2010) — blue-green, canary foundations.
- Krish Naik bootcamp module: *CI/CD rollbacks & human-in-the-loop gates* (Advanced Route, 2025–26).
- Anthropic, *Building effective agents* (2024) + agent safety/HITL patterns (2025).

---

## Week 11 — AgentOps: Operating Multi-Step Agent Systems in Production

**Altitude:** Engineer→Specialist · **Anchor case:** promote `support-copilot` from a single LLM call to a **tool-using, multi-step agent** (LangGraph) and operate it: per-step tracing, loop/cost guards, agent-specific evals (tau-bench-style), memory, and security against prompt injection.

### Learning goals
- Name what AgentOps adds beyond LLMOps: non-determinism over *trajectories*, tool side-effects, loops, and emergent cost.
- Instrument and evaluate agents at the **trajectory** level (did it take the right steps?), not just final-answer level.
- Add operational guardrails: step/cost/time budgets, loop detection, tool allow-lists, and prompt-injection defenses.
- Manage agent memory (short-term scratchpad + long-term store) and its lifecycle/privacy.

### Concept map
- **Trajectory non-determinism.** Plain English: two runs of the same task can take different valid (or invalid) paths. Where it matters: you must eval the *process*, not just the answer. Common mistake: judging an agent only by final output and missing a dangerous intermediate action.
- **Tool side-effects & blast radius.** Plain English: agents *do* things (write DBs, send mail). Common mistake: giving an agent broad tools with no allow-list or dry-run.
- **Loop/cost runaway.** Plain English: an agent can spin forever or fan out expensive calls. *Fix:* max-steps, max-cost, and loop detection. Common mistake: no budget → a $400 single conversation.
- **Prompt injection / tool poisoning.** Plain English: untrusted content (a web page, a retrieved doc) hijacks the agent. Common mistake: trusting retrieved/tool content as if it were instructions.
- **Agent memory.** Short-term (context) vs long-term (Mem0/vector). Common mistake: unbounded memory growth + PII with no retention policy.

### Hands-on build
- Refactor the copilot into a **LangGraph** agent (planner → tools → critic) with full per-node tracing to Langfuse.
- Add guardrails: `max_steps`, `max_cost_usd`, loop detector, tool allow-list, and a prompt-injection filter (e.g., spotlighting + an input classifier) tested with a small injection suite.
- Build a **trajectory eval** (tau-bench-style task set): score task success *and* "no unsafe step taken."
- Wire short-term scratchpad + long-term memory (Mem0) with a retention/PII policy.
- **Deliverable:** an operated agent with trajectory evals + guardrails + a red-team report. **Acceptance:** the agent (a) passes a budget/loop stress test without runaway, and (b) refuses ≥90% of a held-out prompt-injection set while keeping task success above the Week-6 bar.

### Harness / reusable skill — `$agent-ops`
- **Purpose:** make any agent observable, budgeted, safety-gated, and trajectory-evaluated before production.
- **Inputs:** an agent graph + tool list + risk policy. **Outputs:** per-step traces, budget/loop guards, an injection test report, a trajectory eval score.
- **Evidence artifact:** `evidence/week11-agentops/trajectory-eval-and-redteam.md`.

### Common failure modes
- **Final-answer-only eval** → misses unsafe intermediate steps. *Fix:* trajectory-level scoring.
- **Unbounded loops/cost** → runaway bill. *Fix:* step/cost/time budgets + loop detection.
- **Trusting tool/retrieved content** → prompt injection executes. *Fix:* treat external content as data, spotlight it, classify inputs.
- **Broad tool access** → large blast radius. *Fix:* least-privilege allow-list + dry-run/HITL for writes.
- **Memory leak/PII sprawl** → privacy + cost issues. *Fix:* scoped memory + retention/redaction policy.

### Evidence artifact
`evidence/week11-agentops/` (trajectory eval + red-team report + guardrail config + memory policy).

### Skill sink-in
Predict your agent's prompt-injection refusal rate before testing. Run the injection suite. Record which injection style broke through and your fix.

### Dataset(s)
**tau-bench** (`huggingface.co/datasets/sierra-research/tau-bench` / `sierra-research/tau-bench` repo, MIT) for trajectory/tool-use eval, plus an **injection corpus** drawn from `huggingface.co/datasets/deepset/prompt-injections` (Apache-2.0) and authored support-domain attacks.

### Code stub
```python
# LangGraph agent with budget + injection guard (skeleton)
from langgraph.graph import StateGraph, END
def planner(s): ...
def tools(s):
    if s["steps"] >= s["max_steps"] or s["cost"] >= s["max_cost"]:   # budget guard
        return {"halt": True}
    if injection_classifier(s["last_tool_output"]) > 0.8:            # injection guard
        return {"blocked": True, "answer": "Refusing: untrusted instruction in content."}
    return run_allowed_tools(s, allow_list={"search_kb", "get_order"})  # least privilege
g = StateGraph(dict); g.add_node("plan", planner); g.add_node("act", tools)
g.add_edge("plan", "act"); g.add_conditional_edges("act", lambda s: END if s.get("halt") else "plan")
agent = g.compile()
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Trajectory eval | Scores success + step-safety on a task set | Final-answer eval only | No agent eval |
| Guardrails | Budget+loop+allow-list+injection, stress-tested | Some guards | None / runaway |
| Security | ≥90% injection refusal, task success held | Partial defense | Injectable |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Yao et al., *τ-bench: benchmarking tool-agent-user interaction*, 2024 (Sierra).
- Greshake et al., *Not what you've signed up for: indirect prompt injection*, AISec 2023; Willison, *Prompt injection / the lethal trifecta* (2024–25).
- Anthropic, *Building effective agents* (2024); Krish Naik **Agentic AI + AgentOps** specialization (LangGraph/ADK/Strands, MCP/A2A, agent security), 2025–26.
- Mem0 docs, *agent memory & retention* (2025); OWASP, *Top 10 for LLM Applications* (2025).

---

## Week 12 — Capstone: One Model + One Agent, Notebook → Monitored Production

**Altitude:** Engineer (graduating to Specialist) · **Anchor case:** your own model + your own agent, taken the full distance.

### Learning goals
- Integrate the whole course into one deployed, monitored, eval-gated, safely-released platform.
- Prove production-readiness with evidence: SLOs met, dashboards live, canary+rollback demonstrated, cost controlled.
- Write the operational documents a real team needs: runbook, on-call alerts, post-mortem, and a cost report.

### Capstone spec
Take **one classical ML model** and **one LLM/agent** from a notebook to a monitored production deployment on your chosen cloud. Required:
1. **Containerized + orchestrated** (Docker + K8s/serverless) with probes and autoscaling.
2. **Versioned** data + model (DVC) and tracked training (W&B/MLflow registry) with lineage.
3. **Served** behind FastAPI (+ vLLM for the LLM) through an **LLM gateway** with semantic cache + budgets.
4. **CI/CD with eval-gated deploys** for both code *and* prompts/agents.
5. **Observability:** OTel traces (Langfuse) + Grafana RED/cost/quality dashboard + drift monitoring with alerts.
6. **Safe release:** shadow→canary→rolling with **automated rollback** + HITL gate for irreversible actions.
7. **AgentOps:** trajectory evals + guardrails (budget/loop/injection) + memory policy.

### Milestones
- **M1 (start of week):** architecture ADR + repo skeleton + both services containerized.
- **M2:** data versioned, training tracked, models registered; both endpoints live with metrics.
- **M3:** CI/CD eval-gated; gateway + cache + cost dashboard; observability traces flowing.
- **M4:** drift monitoring + alerts; shadow→canary→auto-rollback demonstrated; HITL gate working.
- **M5 (demo):** full run-through + runbook + cost report + a blameless post-mortem of one injected incident.

### Acceptance checklist
- [ ] A new prompt that regresses the eval is **blocked by CI** (show the red gate).
- [ ] A bad model/prompt version is **auto-rolled-back** by the canary analysis (show MTTR).
- [ ] Every production answer is **traceable** to its retrieval/tools/model + token cost.
- [ ] The cost/request dashboard shows the gateway+cache **savings vs the naive baseline**.
- [ ] The agent **refuses** a held-out prompt-injection set while holding task success.
- [ ] An **irreversible action cannot fire** without a logged human approval.
- [ ] A **runbook** exists that a new on-call could follow to diagnose and roll back.

### Harness / reusable skill — `$production-readiness-review`
- **Purpose:** assemble all eight skills into a single go/no-go production review.
- **Inputs:** the deployed platform. **Outputs:** a checklist-scored readiness report + the top 3 risks + their mitigations.
- **Evidence artifact:** `capstone/readiness-report.md` (this *is* the deliverable).

### Common failure modes
- **Demo-only system** (works once, no monitoring). *Fix:* every claim maps to a dashboard or trace.
- **Eval-gate theater** (a gate that never blocks). *Fix:* prove it blocks a real regression.
- **Unrehearsed rollback** (works in slides, not at 3am). *Fix:* actually trigger auto-rollback in the demo.

### Evidence artifact
`capstone/` — the platform repo + readiness report + runbook + cost report + post-mortem.

### Skill sink-in
Before the demo, write the SLOs you expect to meet and the cost/request you expect. Run the load + incident. The gaps between expectation and reality are the capstone's real lesson — record them.

### Dataset(s)
Student-chosen, but must be **versioned (DVC)** and **documented** (size + license + a data card). Reuse `delivery-eta` + `support-copilot` corpora or bring your own (with a license note).

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| End-to-end completeness | All 7 capstone components live + evidenced | 5–6 components | ≤4 / demo-only |
| Evidence-gated delivery | Eval-gate blocks + auto-rollback both shown | One of the two shown | Neither demonstrated |
| Observability & cost | Traces + RED/cost/quality + drift alerts | Partial telemetry | No production visibility |
| Agent safety | Trajectory eval + injection defense + HITL | Two of three | None |
| Operability | Runbook + post-mortem + cost report | Two of three | None |

**Assessment weight:** 25% of course grade (the capstone bucket; weekly labs above sum to 60%, design reviews 10%, citizenship 5%).

### Readings & sources
- Chip Huyen, *AI Engineering* (O'Reilly, 2025) — end-to-end reference.
- Harvard **AC215/E115** full-stack capstone (5 milestones), 2025.
- Krish Naik end-to-end deployed-project template (AWS/GCP/Azure + Langfuse/Prometheus/Grafana/ELK), 2025–26.
- Sculley et al., *Hidden Technical Debt in ML Systems* (2015) — re-read as the capstone post-mortem lens.

---

## Course-level outcomes

By the end you can take **both** a deterministic model and a non-deterministic agent from a notebook to a **monitored, cost-controlled, eval-gated, safely-released** production service — and prove every guarantee with a trace, a dashboard, or a rollback log. You leave with a reusable production harness:

`$repro-image` · `$k8s-deploy` · `$data-contract` · `$run-ledger` · `$serve-bench` · `$eval-gate` · `$llm-gateway` · `$trace-debug` · `$drift-watch` · `$safe-release` · `$agent-ops` · `$production-readiness-review`

These carry directly into Subject 10 (Efficient AI: Serving & Systems), where the serving layer you built here gets quantized, batched, and benchmarked for real throughput and cost.
