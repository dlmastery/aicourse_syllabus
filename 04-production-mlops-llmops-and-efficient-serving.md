# Production AI: MLOps, LLMOps, AgentOps & Efficient Serving

**Merged subject (one academic quarter-track).** This subject combines several closely related modules, each a self-contained Part with its own lectures, hands-on builds, practical projects, State-of-the-Art notes, and assessment. Parts in this subject:

- **Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production**
- **Part B — Efficient AI: Quantization, Serving & Systems**

## 📑 Detailed table of contents
_One academic quarter-track · 3 lecture-hrs/week · **24 lectures** across **2 parts**. Time-boxed plan: [`_toc/04-production-mlops-llmops-and-efficient-serving-toc.md`](_toc/04-production-mlops-llmops-and-efficient-serving-toc.md)._

### Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production
1. **Week 1 — The Production Mindset & Containerizing a Model** — Reproducible artifact · Image layers & build cache · Twelve-factor for ML · MLOps maturity (Google's levels 0/1/2)  ·  ▶ `krishnaik06/mlproject` · 🔧 `$repro-image`
2. **Week 2 — Orchestration: Kubernetes & Serverless GPU** — Desired-state reconciliation · Liveness vs readiness · Requests vs limits · Scale-to-zero  ·  ▶ `GokuMohandas/Made-With-ML` · 🔧 `$k8s-deploy`
3. **Week 3 — Data Pipelines & Versioning: Airflow, DVC, Feature Stores** — DAG idempotency · Data versioning (DVC) · Train/serve skew · Data contract  ·  ▶ `krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project` · 🔧 `$data-contract`
4. **Week 4 — Experiment Tracking, Model Registry & Reproducible Training** — Experiment vs run vs artifact · Model registry & stages · Lineage · Sweep/HPO  ·  ▶ `DataTalksClub/mlops-zoomcamp` · 🔧 `$run-ledger`
5. **Week 5 — Model Serving I: FastAPI, vLLM & Triton** — Online vs offline/batch inference · Continuous batching (vLLM) · Throughput vs latency tradeoff · Backpressure  ·  ▶ `VizuaraAI/infertutor-arena-capstone` · 🔧 `$serve-bench`
6. **Week 6 — CI/CD for Models *and* Prompts/Evals (Eval-Gated Deploys)** — CI vs CD vs CT · Eval-gated deploy · Prompt as code · Golden/regression set  ·  ▶ `promptfoo/promptfoo` · 🔧 `$eval-gate`
7. **Week 7 — LLMOps: Gateways, Prompt Management, Semantic Caching & Cost/Latency Control** — LLM gateway · Semantic cache · Model routing / escalation · Cost as a first-class SLO  ·  ▶ `decodingml/llm-twin-course` · 🔧 `$llm-gateway`
8. **Week 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry** — Traces vs metrics vs logs · Span & attributes · RED + LLM metrics · Trace-linked eval  ·  ▶ `langfuse/langfuse` · 🔧 `$trace-debug`
9. **Week 9 — Monitoring, Drift Detection & Alerting in Production** — Data vs concept drift · Proxy quality signals for LLMs · SLI/SLO/error budget · Delayed labels · RAG-lifecycle drift  ·  ▶ `evidentlyai/evidently` · 🔧 `$drift-watch`
10. **Week 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates** — Shadow mode · Canary + automated analysis · Blue-green vs rolling · HITL gate  ·  ▶ `argoproj/argo-rollouts` · 🔧 `$safe-release`
11. **Week 11 — AgentOps: Operating Multi-Step Agent Systems in Production** — Trajectory non-determinism · Tool side-effects & blast radius · Loop/cost runaway · Prompt injection / tool poisoning · Agent memory  ·  ▶ `krishnaik06/Agentic-LanggraphCrash-course` · 🔧 `$agent-ops`
12. **Week 12 — Capstone: One Model + One Agent, Notebook → Monitored Production**  ·  ▶ `GokuMohandas/Made-With-ML` · 🔧 `$production-readiness-review`

### Part B — Efficient AI: Quantization, Serving & Systems
1. **Week 1 — The GPU Execution & Memory Model (and How to Profile It)** — Memory-bound vs compute-bound · GPU memory hierarchy · Roofline model · The memory budget of an LLM  ·  ▶ `VizuaraAI/llm-inference-tutorial` · 🔧 `$gpu-profile`
2. **Week 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter** — Range vs precision · Mixed precision · FP8 (E4M3/E5M2) · Dynamic range & scaling  ·  ▶ `VizuaraAILabs/nano-gpt-oss` · 🔧 `$precision-sweep`
3. **Week 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant** — PTQ vs QAT · Quantization granularity · AWQ · SmoothQuant · Calibration set  ·  ▶ `mlabonne/llm-course` · 🔧 `$quantize-and-verify`
4. **Week 4 — QAT, Low-Bit Frontiers & Serving Quantized Models** — QAT & the straight-through estimator · NF4 + QLoRA · Served vs offline speedup · Low-bit cliff · On-device / private SLM deployment  ·  ▶ `krishnaik06/Finetuning-LLM` · 🔧 `$lowbit-serve`
5. **Week 5 — Pruning, Sparsity, Distillation & NAS** — Unstructured vs structured pruning · 2:4 sparsity · Distillation · SparseGPT / Wanda · NAS / once-for-all  ·  ▶ `VizuaraAILabs/Tiny-Stories-Regional` · 🔧 `$compress-verify`
6. **Week 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention** — Naive attention is IO-bound · FlashAttention (tiling + online softmax) · KV-cache · PagedAttention  ·  ▶ `VizuaraAI/kv-cache-token-reduction-walkthrough` · 🔧 `$attention-bench`
7. **Week 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM** — Prefill vs decode · Continuous batching · TTFT vs ITL vs throughput · Prefix caching / RadixAttention  ·  ▶ `VizuaraAI/infertutor-arena-capstone` · 🔧 `$serving-engine-bench`
8. **Week 8 — Speculative & Parallel Decoding** — Why decode is slow · Speculative decoding (verify-in-parallel) · Acceptance rate · Medusa / EAGLE  ·  ▶ `VizuaraAI/llm-inference-tutorial` · 🔧 `$spec-decode`
9. **Week 9 — Mixture-of-Experts: Sparse Models at Scale** — Sparse activation · Router + top-k gating · Load balancing · Expert parallelism  ·  ▶ `VizuaraAILabs/DeepSeek-From-Scratch` · 🔧 `$moe-analyze`
10. **Week 10 — Long-Context Efficiency** — KV-cache dominates long context · KV-cache quantization & eviction · Sliding-window / sparse attention · RoPE scaling / YaRN · Long-context vs RAG  ·  ▶ `VizuaraAI/kv-cache-token-reduction-walkthrough` · 🔧 `$longctx-budget`
11. **Week 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism** — Data parallelism · ZeRO / FSDP sharding · Tensor parallelism · Pipeline parallelism · Choosing a plan  ·  ▶ `VizuaraAI/vizuara-5d-parallelism-workshop` · 🔧 `$parallel-plan`
12. **Week 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint**  ·  ▶ `VizuaraAI/infertutor-arena-capstone` · 🔧 `$efficiency-report`


# Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production

**Track:** Production Engineering · **Altitude:** Engineer · **Length:** 12 weeks (3 lecture hrs + 4 lab hrs/wk; two-semester feel)
**Prerequisites:** Subjects 01–02 (ML + DL foundations), comfort with Python, basic Git, one prior model you trained yourself, and one prior LLM/RAG app (Subjects 04–06). You should be able to read a stack trace without panic.
**Pedagogy:** Harvard **AC215/E115** (MLOps→LLMOps→AIOps, 5-milestone team capstone) fused with **Krish Naik's** "every project ships deployed" doctrine (AWS/GCP/Azure, Docker, K8s, CI/CD, Langfuse/Prometheus/Grafana/ELK) and the source book's `concept → code → critique → reflection → rebuild` loop. The discipline of this course is **evidence-gated delivery**: nothing is "done" until a monitored endpoint, a dashboard, and a rollback button exist.

**Course anchor cases (carried all 12 weeks):**
1. **`delivery-eta`** — the regression model from Subject 01 (predict food-delivery minutes), now a containerized, versioned, monitored microservice. This is the **classical-MLOps spine**.
2. **`support-copilot`** — a RAG-backed support agent (retrieval + tool calls + LLM) from Subjects 05–07, now a cost-controlled, traced, eval-gated, canary-released **LLMOps + AgentOps spine**.

Every week advances *both* cases one rung up the production ladder, so you feel the difference between shipping a deterministic model and shipping a non-deterministic agent.

**What you leave with:** a `fullstack-ai-platform/` monorepo containing two deployed services (one model, one agent), a CI/CD pipeline with **eval-gated deploys**, an observability stack (traces + metrics + drift), eight reusable harness skills, and a runbook good enough to hand to an on-call engineer.

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

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
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

▶ **Practical project:** `krishnaik06/mlproject` — use its containerized end-to-end template as the base for the `fullstack-ai-platform` monorepo and the slim `eta-model` image.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Docker 27 + BuildKit + `uv` 0.7; base the layout on `krishnaik06/mlproject`.
2. Create the `fullstack-ai-platform/` monorepo (`services/eta-model`, `services/support-copilot`, `libs`, `infra`).
3. Write a multi-stage `Dockerfile` (`python:3.12-slim`, non-root, pinned `uv` lock) serving `/predict` + `/healthz`.
4. `docker build` + `docker run`; verify deterministic predictions; add `make up`.
5. Record image size, cold-start, and repro hash.
6. Open the PR with a green build.
- **Artifact:** buildable image + `evidence/week01-image.md` committed.
- **Use `$repro-image`:** a slim, non-root, healthchecked, reproducible container.
- **Done when:** image <400 MB, non-root, `/predict` returns a prediction with the model-version header.
- **Stretch:** add an SBOM + a Trivy scan of the image.

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

### State of the Art (June 2026)
- Reproducible artifacts + MLOps maturity unchanged; **uv + multi-stage slim images** are the 2026 default.
- **Serverless GPU** (Modal, RunPod FlashBoot, Baseten) pay-per-second reshapes "where it runs."
- **Prompt caching** is the highest-leverage cost lever for the LLM service (up to 90% off static prefixes).
- Operate four managed assets: **weights, data, prompts, eval metrics**.

**References & links:**
- [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:09L01 -->

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

▶ **Practical project:** `GokuMohandas/Made-With-ML` — follow its deploy/scale modules to take the `eta-model` image to a probed, autoscaled Deployment and a serverless-GPU comparison.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `kind` 0.27 + Helm 3.16 + `k6`; follow `GokuMohandas/Made-With-ML` deploy modules.
2. Write Helm chart `infra/charts/eta-model/` with Deployment, Service, HPA, probes, resource requests/limits.
3. `kind create cluster` + `helm install`; drive load with k6 and watch pods scale.
4. Deploy the same image to Modal/Baseten; record cold-start + $/1k requests.
5. Prove a rolling update causes zero failed requests (k6 report).
6. Write the self-managed-K8s vs serverless-GPU decision note.
- **Artifact:** `evidence/week02-rollout/` (manifests + k6 report + decision note) committed.
- **Use `$k8s-deploy`:** take any container to a probed, autoscaled, zero-downtime Deployment.
- **Done when:** a rolling update shows 0 failed reqs and the HPA scales on a justified signal.
- **Stretch:** switch autoscaling to KEDA queue-depth and re-measure.

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

### State of the Art (June 2026)
- **vLLM** is the reference serving engine; **FlashAttention-4** (Blackwell) is the default in vLLM v0.20+.
- **Serverless GPU** (Modal / RunPod FlashBoot / Baseten) vs self-managed K8s is the live cost/control trade-off.
- **KEDA** event/queue-depth autoscaling beats raw CPU targets for GPU/IO workloads.
- **Scale-to-zero + cold-start** is the central cost/latency tension for spiky inference.

**References & links:**
- [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML)
- [Dao et al., 2022 - FlashAttention](https://arxiv.org/abs/2205.14135)
- [vLLM docs](https://docs.vllm.ai)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:09L02 -->

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

▶ **Practical project:** `krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project` — mirror its DVC pipeline as the data/model-versioning reference for the `delivery-eta` features.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Airflow 2.10 + DVC 3.x + Feast 0.40 + pandera; mirror the DVC pipeline in `krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project`.
2. Build `pipelines/eta_features.py`: extract → validate (pandera) → transform → materialize_to_feast.
3. `dvc init`; track `data/` + `models/`; push to an S3/GCS remote; show `dvc checkout` reproducing an old dataset.
4. Define a Feast feature view; read the same feature offline + online (parity).
5. Inject a corrupted row; confirm the DAG fails at validation, not at serving.
6. Capture the validation report.
- **Artifact:** `evidence/week03-data-contract/` (DAG log + validation report + dvc-checkout note) committed.
- **Use `$data-contract`:** wrap the dataset in a schema + distribution contract that gates the pipeline.
- **Done when:** a corrupted row fails the DAG at validation and an old dataset is reproduced from a commit.
- **Stretch:** add a distribution-drift expectation (ties to Week 9).

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

### State of the Art (June 2026)
- **Data contracts** + pandera / Great Expectations gate pipelines; **DVC / LakeFS** for versioning.
- **Feature stores** (Feast) for offline/online parity — **train/serve skew** is still the #1 silent killer.
- **RAG-lifecycle drift** (stale index, changed docs) is a newly-monitored data axis (ties to Week 9).
- **Dagster** is gaining on Airflow for asset-centric pipelines.

**References & links:**
- [`krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project`](https://github.com/krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project)

<!-- sota:09L03 -->

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

▶ **Practical project:** `DataTalksClub/mlops-zoomcamp` — follow its experiment-tracking module (W&B/MLflow) to log the `delivery-eta` sweep and promote a registry version with lineage.

**Build it — step by step (AI-builder lab):**
1. **Setup:** W&B + MLflow 2.20; follow the experiment-tracking module of `DataTalksClub/mlops-zoomcamp`.
2. Add `wandb` logging to `train_eta.py` (config, metrics, the DVC data hash + git SHA as tags).
3. Run a small W&B Sweep over 2–3 hyperparameters; pick best by validation MAE.
4. Log the model to the MLflow registry; promote to Staging; write `promote.py` for next week's CI.
5. From the registered model, trace back to its data version + git SHA.
6. Summarize the sweep.
- **Artifact:** `evidence/week04-runs/` (sweep summary + registry link with lineage) committed.
- **Use `$run-ledger`:** make every run reproducible and registry-promotable.
- **Done when:** the registered model traces to data version + git SHA and the sweep has a justified winner.
- **Stretch:** add a second tracked task (California Housing) to prove the harness generalizes.

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

### State of the Art (June 2026)
- **W&B + MLflow 3.x registry** are standard; **lineage** (data hash + git SHA) is the audit anchor.
- **RLVR / GRPO** post-training runs are tracked like any other sweep.
- Model + prompt + eval-set versioning unify as the **"four assets."**
- Reproducibility discipline (seeds, pinned data) is the cross-run comparability bar.

**References & links:**
- [`DataTalksClub/mlops-zoomcamp`](https://github.com/DataTalksClub/mlops-zoomcamp)
- [Shao et al., 2024 - DeepSeekMath/GRPO](https://arxiv.org/abs/2402.03300)

<!-- sota:09L04 -->

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

▶ **Practical project:** `VizuaraAI/infertutor-arena-capstone` — study its Modal + vLLM serving stack to stand up and benchmark the `support-copilot` LLM endpoint.

**Build it — step by step (AI-builder lab):**
1. **Setup:** FastAPI 0.115 + vLLM 0.8.x + `k6`/locust; study the Modal+vLLM serving in `VizuaraAI/infertutor-arena-capstone`.
2. Build `services/eta-model/main.py`: Pydantic I/O, model-version header, `/metrics`, graceful shutdown.
3. Launch vLLM serving Qwen3-8B with continuous batching (`--max-num-seqs`).
4. Load-test FastAPI vs vLLM vs Triton; build a p50/p95/p99 + tokens/sec + $/1k table.
5. Show vLLM continuous batching beats a naive loop ≥3× at equal p95.
6. Write ADR-001 (serving topology) for the design review.
- **Artifact:** `evidence/week05-serving/` (bench table + ADR) committed.
- **Use `$serve-bench`:** benchmark any stack for latency/throughput/cost and recommend a topology.
- **Done when:** the ≥3× continuous-batching win is shown with numbers and tails are reported.
- **Stretch:** enable FP8 KV-cache (`--kv-cache-dtype fp8`) and re-measure the decode-latency slope.

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

### State of the Art (June 2026)
- **vLLM continuous batching + FP8 KV-cache** (`--kv-cache-dtype fp8`, ~half KV memory, ~2× decode slope).
- **Speculative decoding** gives 2–5× at low concurrency (incompatible with some KV-quant — a teachable gotcha).
- **FlashAttention-3** (Hopper) / **FlashAttention-4** (Blackwell) are the attention defaults.
- p50/p95/p99 + tokens/sec are the honest metrics; **Triton vs vLLM** is chosen by workload.

**References & links:**
- [`VizuaraAI/infertutor-arena-capstone`](https://github.com/VizuaraAI/infertutor-arena-capstone)
- [Dao et al., 2022 - FlashAttention](https://arxiv.org/abs/2205.14135)
- [Kwon et al., 2023 - vLLM/PagedAttention](https://arxiv.org/abs/2309.06180)
- [vLLM docs](https://docs.vllm.ai)
- [Leviathan et al., 2022 - Speculative Decoding](https://arxiv.org/abs/2211.17192)
- [Rafailov et al., 2023 - DPO](https://arxiv.org/abs/2305.18290)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:09L05 -->

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

▶ **Practical project:** `promptfoo/promptfoo` — build the offline eval suite and wire it as the CI gate that blocks a regressing copilot prompt PR.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GitHub Actions + `promptfoo` 0.100+ / DeepEval; clone `promptfoo/promptfoo` examples.
2. Build `evals/copilot/`: ≥20 cases + assertions (contains / llm-rubric / latency / cost).
3. Write `.github/workflows/support-copilot.yml`: lint→test→build→eval→deploy with the deploy job `needs: eval`.
4. Fail CI if pass-rate < 0.90 or cost regresses; seed it + tolerance-band the judge.
5. Open a deliberately-bad prompt PR; confirm CI blocks it.
6. Screenshot the red gate.
- **Artifact:** `evidence/week06-eval-gate/` (workflow + blocked-PR + eval report) committed.
- **Use `$eval-gate`:** turn an eval suite into a CI gate that blocks quality/latency/cost regressions.
- **Done when:** a regressing prompt PR is automatically blocked and the gate is stable (seeded).
- **Stretch:** tier the evals (fast smoke on PR, full nightly).

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

### State of the Art (June 2026)
- **promptfoo + DeepEval** are the eval-gate tooling; **prompts are versioned, evaluated artifacts.**
- **CI/CD/CT** (continuous training) + **eval-gated deploys** are the LLMOps maturity bar.
- Golden/regression sets kept out of few-shot to avoid leakage.
- LLM-judge gates need a **fixed judge + seed + tolerance band** (TrustJudge biases).

**References & links:**
- [`promptfoo/promptfoo`](https://github.com/promptfoo/promptfoo)
- [Ouyang et al., 2022 - InstructGPT/RLHF](https://arxiv.org/abs/2203.02155)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)

<!-- sota:09L06 -->

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

▶ **Practical project:** `decodingml/llm-twin-course` — adapt its production LLMOps patterns (gateway, caching, cost control) to route the copilot through LiteLLM with budgets.

**Build it — step by step (AI-builder lab):**
1. **Setup:** LiteLLM Proxy 1.5x + Redis 7.4/GPTCache; adapt the LLMOps patterns in `decodingml/llm-twin-course`.
2. Deploy LiteLLM: register Bedrock/Anthropic + the self-hosted vLLM model; per-key budgets + a fallback chain.
3. Add semantic caching; measure hit-rate, cost saved, and audit for wrong-cache-hits.
4. Move copilot prompts into a versioned registry (Langfuse prompts); select variant by env.
5. Replay ~2k logged queries; show ≥30% cost cut without dropping the Week-6 eval pass-rate.
6. Capture the cost-before/after + dashboard.
- **Artifact:** `evidence/week07-llmops/` (gateway config + cache audit + cost report) committed.
- **Use `$llm-gateway`:** front the app with routing, fallback, budgets, caching, and metered cost.
- **Done when:** ≥30% cost cut with quality held and a budget kill-switch proven.
- **Stretch:** add cheap-first routing with quality-triggered escalation to Opus.

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

### State of the Art (June 2026)
- The cost trio: **prompt caching** (up to 90%) + **semantic caching** + **model routing/escalation**.
- Gateways: **LiteLLM, Portkey, Cloudflare AI Gateway** for keys/fallback/budgets.
- **Model routing** across Opus 4.8 / GPT-5.5 / open-weight tiers by request difficulty.
- **Cost-as-an-SLO** with spend kill-switches; prompt management as versioned artifacts.

**References & links:**
- [`decodingml/llm-twin-course`](https://github.com/decodingml/llm-twin-course)
- [vLLM docs](https://docs.vllm.ai)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Langfuse](https://github.com/langfuse/langfuse)

<!-- sota:09L07 -->

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

▶ **Practical project:** `langfuse/langfuse` — self-host it and instrument the copilot with OTel spans (retrieve / tools / LLM) carrying token and cost attributes.

**Build it — step by step (AI-builder lab):**
1. **Setup:** OpenTelemetry 1.x + Langfuse 3.x + Prometheus/Grafana + Arize Phoenix; self-host Langfuse.
2. Instrument the copilot: spans for retrieve / each tool / each LLM call with token + cost + doc-ids.
3. Export metrics to Prometheus; build a Grafana dashboard (RED + tokens + cost + cache-hit + eval score).
4. Run Phoenix over a batch of traces to flag low-relevance retrievals.
5. Plant a bad answer; open its trace and name the failing span in <2 min.
6. Write the root-cause-from-trace note.
- **Artifact:** `evidence/week08-obs/` (trace export + Grafana JSON + Phoenix eval + root-cause) committed.
- **Use `$trace-debug`:** make any request explainable from a single span tree.
- **Done when:** a planted failure is root-caused from its trace and the dashboard shows RED+cost+quality.
- **Stretch:** add trace-linked eval scoring on live sampled traffic.

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

### State of the Art (June 2026)
- **OpenTelemetry GenAI semantic conventions** are standard; **Langfuse / Arize Phoenix / LangSmith** for LLM traces.
- **Trace-linked evals** score real production traces, not synthetic copies.
- **RED + LLM metrics** (tokens, $/req, cache-hit, eval score) on one dashboard.
- High-cardinality data (prompts, doc-ids) lives in **traces, not metric labels**.

**References & links:**
- [`langfuse/langfuse`](https://github.com/langfuse/langfuse)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [LangGraph](https://github.com/langchain-ai/langgraph)

<!-- sota:09L08 -->

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
- **RAG-lifecycle drift.** Plain English: a RAG app can decay even when the model is frozen — the index goes stale, source documents change, or query patterns drift away from what was embedded; monitor *retrieval relevance and index freshness*, not just the final answer. Common mistake: watching only output quality while a stale index silently erodes grounding (the copilot's real failure mode here).

### Hands-on build
- Add **Evidently**/NannyML drift monitors to `eta-model` (feature drift +, once labels arrive, performance); schedule as an Airflow report.
- For the copilot: sample 5% of traffic nightly, run the Week-6 eval suite on it, track pass-rate + refusal-rate + retrieval relevance over time.
- Define SLOs (eta p95 latency, copilot eval pass-rate ≥ 0.88) and Prometheus **Alertmanager** rules with sane thresholds + for-durations.
- **Deliverable:** drift dashboard + alert rules + a closed-loop runbook. **Acceptance:** an injected distribution shift fires exactly one actionable alert (not ten), linked to a runbook step.
- **Design review #2 (10%-component):** an ADR for the release + rollback strategy you'll implement in Week 10.

▶ **Practical project:** `evidentlyai/evidently` — use its drift detectors and reference datasets to monitor `delivery-eta` feature drift and fire one actionable alert.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Evidently 0.6 / NannyML + Prometheus Alertmanager; clone `evidentlyai/evidently` examples.
2. Add drift monitors to `eta-model` (feature drift now; performance once labels arrive); schedule as an Airflow report.
3. For the copilot, sample 5% nightly, run the Week-6 eval, track pass-rate + refusal + retrieval relevance.
4. Define SLOs + Alertmanager rules with thresholds + `for:` durations.
5. Inject a covariate shift; confirm exactly one actionable alert (not ten), runbook-linked.
6. Write ADR-002 (release strategy) for the design review.
- **Artifact:** `evidence/week09-monitoring/` (drift report + alert rules + runbook + ADR) committed.
- **Use `$drift-watch`:** monitor for drift/quality decay with low-noise, actionable alerts.
- **Done when:** the injected shift fires one impactful alert linked to a runbook step.
- **Stretch:** add a RAG index-freshness check as a copilot drift signal.

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

### State of the Art (June 2026)
- **Evidently / NannyML** for data + performance drift; NannyML **estimates performance without labels**.
- LLM proxy signals: **eval-on-sample, refusal rate, retrieval relevance, user feedback**.
- **RAG-lifecycle drift** (index staleness) is now a first-class monitored axis.
- **SLO / error-budget + for-duration** alerts to beat pager fatigue.

**References & links:**
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)

<!-- sota:09L09 -->

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

▶ **Practical project:** `argoproj/argo-rollouts` — configure a canary with an AnalysisTemplate so a deliberately-bad version auto-rolls-back on SLO/eval breach.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Argo Rollouts 2.x on the kind cluster; reuse the Week-6 golden eval as the analysis gate.
2. Deploy a new `eta-model` in shadow mode; compare shadow vs prod predictions offline (side-effects stubbed).
3. Configure a canary Rollout with an AnalysisTemplate (fail if p95 > 400ms OR eval pass-rate < 0.88).
4. Gate the copilot's "process refund" tool behind an HITL approval (queue + approve/deny + audit log).
5. Ship a deliberately-bad version; confirm metric-driven auto-rollback (no human).
6. Record MTTR + the HITL audit trail.
- **Artifact:** `evidence/week10-release/` (rollout manifest + analysis template + auto-rollback log) committed.
- **Use `$safe-release`:** release via shadow→canary with auto-rollback + HITL gates.
- **Done when:** a bad version auto-rolls-back and the refund tool can't fire without logged approval.
- **Stretch:** add a blue-green path and compare rollback latency.

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

### State of the Art (June 2026)
- **Argo Rollouts** canary + **AnalysisTemplate** for metric-driven auto-rollback.
- **Shadow mode** (side-effects stubbed) → canary → blue-green/rolling is the progression.
- **HITL gates** on irreversible agent actions with audit trails.
- **A/B / interleaving** to decide promotion on a real metric, not a hunch.

**References & links:**
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)

<!-- sota:09L10 -->

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

▶ **Practical project:** `krishnaik06/Agentic-LanggraphCrash-course` — follow it to refactor the copilot into a traced LangGraph agent with budget/loop/injection guardrails.

**Build it — step by step (AI-builder lab):**
1. **Setup:** LangGraph + Langfuse + Mem0 + an injection corpus; follow `krishnaik06/Agentic-LanggraphCrash-course`.
2. Refactor the copilot into a LangGraph agent (planner → tools → critic) with per-node Langfuse tracing.
3. Add guardrails: `max_steps`, `max_cost_usd`, a loop detector, a tool allow-list, an injection filter (spotlighting + classifier).
4. Build a tau-bench-style trajectory eval scoring success AND "no unsafe step".
5. Wire short-term scratchpad + long-term Mem0 with a retention/PII policy.
6. Run a budget/loop stress test + a held-out injection suite.
- **Artifact:** `evidence/week11-agentops/` (trajectory eval + red-team + guardrail config + memory policy) committed.
- **Use `$agent-ops`:** make the agent observable, budgeted, safety-gated, and trajectory-evaluated.
- **Done when:** no runaway under stress and ≥90% injection refusal with task success held.
- **Stretch:** add A2A delegation to a second specialist and trace cross-agent calls.

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

### State of the Art (June 2026)
- Agent SDKs (**LangGraph** durable checkpointing, **Claude Agent SDK**, **Google ADK** native A2A) are the runtimes.
- **Trajectory-level evals** (τ²-bench dual-control, **pass^k**) over final-answer scoring.
- Guardrails: **step/cost/time budgets, loop detection, tool allow-lists, injection filters**.
- **Agent memory** (Mem0/LangMem) + retention/PII policy is the production differentiator.

**References & links:**
- [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course)
- [Yao et al., 2024 - tau-bench](https://arxiv.org/abs/2406.12045)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [Greshake et al., 2023 - Indirect Prompt Injection](https://arxiv.org/abs/2302.12173)
- [LangGraph](https://github.com/langchain-ai/langgraph)
- [Langfuse](https://github.com/langfuse/langfuse)

<!-- sota:09L11 -->

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

▶ **Practical project:** `GokuMohandas/Made-With-ML` — use its end-to-end structure as the integration reference for taking your model + agent to monitored production.

**Build it — step by step (AI-builder lab):**
1. **Setup:** the full stack (Docker/K8s + DVC/MLflow + vLLM/LiteLLM + Langfuse + Argo Rollouts); use `GokuMohandas/Made-With-ML` as the integration reference.
2. Take one model + one agent from notebook to deployment: containerized + orchestrated with probes/autoscaling.
3. Version data+model (DVC) + tracked training (registry, lineage); serve through the gateway with cache + budgets.
4. Wire eval-gated CI/CD for code AND prompts; add OTel traces + Grafana + drift alerts.
5. Add shadow→canary→auto-rollback + an HITL gate; add AgentOps guardrails + memory policy.
6. Run the load + one injected incident; write the readiness report + runbook + cost report + post-mortem.
- **Artifact:** `capstone/` (platform repo + readiness report + runbook + cost report + post-mortem) committed.
- **Use `$production-readiness-review`:** assemble all eight skills into one go/no-go review.
- **Done when:** the eval-gate blocks a regression AND auto-rollback fires, both demonstrated; every claim maps to a trace/dashboard/rollback log.
- **Stretch:** swap the agent's model for an open-weight fallback and re-run the eval gate.

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

### State of the Art (June 2026)
- The 2026 production bar: **containerized + eval-gated CI/CD + gateway cost control + OTel traces + drift alerts + auto-rollback + AgentOps**.
- Serving: **vLLM + FP8 KV-cache + FlashAttention-4**, with serverless GPU for spiky load.
- **EU AI Act** GPAI obligations (**Aug 2, 2026**) make audit trails / evidence a compliance asset.
- Frontier models swappable (**Opus 4.8 / GPT-5.5 / Gemini 3.1**) with open-weight fallback (**DeepSeek V4, Qwen 3.5**).

**References & links:**
- [`GokuMohandas/Made-With-ML`](https://github.com/GokuMohandas/Made-With-ML)
- [Dao et al., 2022 - FlashAttention](https://arxiv.org/abs/2205.14135)
- [vLLM docs](https://docs.vllm.ai)
- [Rafailov et al., 2023 - DPO](https://arxiv.org/abs/2305.18290)
- [Hong et al., 2024 - ORPO](https://arxiv.org/abs/2403.07691)
- [Schulman et al., 2017 - PPO](https://arxiv.org/abs/1707.06347)
- [EU AI Act timeline](https://artificialintelligenceact.eu/implementation-timeline/)
- [veRL](https://github.com/volcengine/verl)

<!-- sota:09L12 -->

## Course-level outcomes

By the end you can take **both** a deterministic model and a non-deterministic agent from a notebook to a **monitored, cost-controlled, eval-gated, safely-released** production service — and prove every guarantee with a trace, a dashboard, or a rollback log. You leave with a reusable production harness:

`$repro-image` · `$k8s-deploy` · `$data-contract` · `$run-ledger` · `$serve-bench` · `$eval-gate` · `$llm-gateway` · `$trace-debug` · `$drift-watch` · `$safe-release` · `$agent-ops` · `$production-readiness-review`

These carry directly into Subject 10 (Efficient AI: Serving & Systems), where the serving layer you built here gets quantized, batched, and benchmarked for real throughput and cost.

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `GokuMohandas/Made-With-ML` — an end-to-end MLOps course (design → develop → deploy → iterate) that parallels the classical-MLOps spine — Lectures 1, 4, 6
- `DataTalksClub/mlops-zoomcamp` — a full MLOps zoomcamp (containers, pipelines, tracking, deployment, monitoring) to reinforce each rung — Lectures 1–6
- `decodingml/llm-twin-course` — a production LLMOps build (RAG, gateways, deployment, eval) mapping to the LLMOps/AgentOps spine — Lectures 7, 8
- `krishnaik06/mlproject` — an end-to-end ML project wired for CI/CD deployment, the "every project ships" template — Lectures 1, 6
- `krishnaik06/Kidney-Disease-Classification-Deep-Learning-Project` — DVC + MLflow + pipeline + deployment, a concrete data/experiment-versioning reference — Lectures 3, 4

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **AI SRE incident bot** — RCA draft, telemetry correlation, and human-approved rollback — *Lectures 8–11*

**Human-review UX:** interfaces that surface evidence, uncertainty, correction, and escalation are graded engineering, not an afterthought — every deployed model/agent ships one.



# Part B — Efficient AI: Quantization, Serving & Systems

**Track:** Systems & Efficiency · **Altitude:** Engineer → Specialist · **Length:** 12 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subjects 01–02 (math + DL from scratch, backprop, attention), Subject 09 (you can already containerize and serve a model), comfort with PyTorch and the shell, and access to at least one NVIDIA GPU (a single 24 GB consumer card — RTX 4090/L4 — is enough; A100/H100 via Modal/RunPod for the big labs).
**Pedagogy:** the *build-and-measure* spine of **MIT 6.5940 (TinyML & Efficient DL)**, **CMU 11-868 (LLM Systems)**, and **Stanford CS336 (LM from Scratch: Triton kernels, parallelism)**, run through the source book's `concept → code → critique → reflection → rebuild` loop. The non-negotiable discipline here is **measure-before-you-claim**: every optimization must be justified by a profile and a benchmark, with a quality check, not by reputation.

**Course anchor case (carried all 12 weeks):** **`shrink-an-8B`** — take one open model (default **Qwen3-8B**, with **Llama-3.1-8B** as an alternate) from a vanilla FP16 checkpoint to a quantized, kernel-optimized, continuously-batched, **served endpoint**, and at every step record **latency (p50/p95), throughput (tokens/s), memory (GB), cost ($/1M tokens), and quality (a fixed eval)**. A second mini-anchor, **`tiny-on-edge`** — a small vision/speech model deployed on-device — recurs in the pruning/distillation/edge weeks so efficiency lessons land on both server and edge.

**What you leave with:** an `efficient-ai/` repo with a reproducible **efficiency report** (one Pareto chart: quality vs latency vs cost across every technique), a hand-written Triton kernel, quantized model variants (INT4/FP8), a speculative-decoding setup, an MoE experiment, and nine reusable harness skills — not a folder of one-off notebooks.

---


## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|---|---|---|
| Weekly labs (Weeks 1–11, graded individually below) | 58% | The running efficiency report: each week adds a measured technique with a quality check. |
| Two systems design reviews (after Week 4 and Week 9) | 8% | ADRs: quantization recipe choice; serving-stack + parallelism plan. |
| Capstone (Week 12) — FP16 → served quantized endpoint, benchmarked | 28% | The full Pareto frontier + a defended deployment recommendation. |
| Reproducibility & benchmarking hygiene | 6% | Pinned env, warmup/repeats, error bars, hardware disclosed on every number. |

Per-week weights below are the share of the 58% lab bucket, expressed as **% of total course grade** (they sum to 58).

## Tooling & environment (pinned, June 2026)

- **Core:** Python 3.12, PyTorch 2.6 (CUDA 12.4), `uv` 0.7, CUDA Toolkit 12.4, NVIDIA driver ≥ 550.
- **Profiling:** PyTorch Profiler + `torch.cuda` events, NVIDIA **Nsight Systems/Compute**, `nvidia-smi`/`nvtop`, `gpustat`.
- **Kernels:** **Triton** 3.2 (`pip install triton`), `torch.compile`, CUTLASS (read-only reference).
- **Quantization:** **llm-compressor** 0.4 (vLLM/Neural Magic, GPTQ+SmoothQuant+FP8), **AutoAWQ** 0.2.x, **AutoGPTQ**/GPTQModel, `bitsandbytes` 0.45 (NF4/QLoRA), `torchao` 0.8 (INT4/FP8, `quantize_`).
- **Serving:** **vLLM** 0.8.x, **SGLang** 0.4.x, **TensorRT-LLM** 0.18 + Triton Inference Server 25.0x.
- **Speculative/parallel decoding:** vLLM speculative (draft model / **EAGLE-3** / n-gram / **Medusa**) configs.
- **Distributed:** PyTorch **FSDP2**, **DeepSpeed** 0.16 (ZeRO-1/2/3), **Megatron-LM** (tensor/pipeline parallel), `accelerate` 1.3.
- **Edge/on-device:** **llama.cpp** (GGUF, Q4_K_M), **MLC-LLM**, ONNX Runtime 1.20, ExecuTorch, **MLX** (Apple) optional.
- **Benchmarking:** vLLM `benchmark_serving.py`, **GuideLLM** (Neural Magic), `lm-eval-harness` 0.4.x for quality, `genai-perf` (Triton).
- **Models/data:** Qwen3-8B / Llama-3.1-8B (FP16), a 1B draft model for speculation, WikiText-2 (calibration), MMLU/GSM8K (quality).

---

## Week 1 — The GPU Execution & Memory Model (and How to Profile It)

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** profile a single forward pass of `shrink-an-8B` (FP16) and find out where the time and memory actually go.

### Learning goals
- Explain the GPU memory hierarchy (HBM ↔ L2 ↔ shared/SRAM ↔ registers) and the **roofline** idea (compute-bound vs memory-bound).
- Distinguish **arithmetic intensity** and predict, for a given op, whether it's bottlenecked by FLOPs or by HBM bandwidth.
- Profile a model with PyTorch Profiler + Nsight and read a kernel timeline.
- Account for where the ~16 GB of an 8B FP16 model + activations + KV-cache actually live.

### Concept map
- **Memory-bound vs compute-bound.** *Formula:* arithmetic intensity `I = FLOPs / bytes_moved`; compare to the GPU's FLOP:bandwidth ratio. *Plain English:* if you move more bytes than you compute, you're waiting on memory. *Code mapping:* matmul = compute-bound; attention/elementwise/decode = often memory-bound. Common mistake: optimizing FLOPs on a memory-bound op (no speedup).
- **GPU memory hierarchy.** HBM (big, slow) → SRAM/shared (tiny, fast). Where it matters: FlashAttention's whole trick is staying in SRAM. Common mistake: assuming all "GPU memory" is equally fast.
- **Roofline model.** Plain English: max achievable performance is the lower of (peak FLOPs) and (bandwidth × intensity). Common mistake: chasing the compute roof while pinned to the memory roof.
- **The memory budget of an LLM.** weights + optimizer (train) / weights + KV-cache (infer) + activations. Common mistake: forgetting the KV-cache grows with batch×sequence and dominates at long context.

### Hands-on build (the lab)
- `profile_forward.py`: load the 8B in FP16, run a profiled forward pass, export a Chrome trace; identify the top-5 kernels by time.
- Compute a back-of-envelope **memory budget** (weights/activations/KV) and compare to `nvidia-smi` reality.
- Build a tiny **roofline** plot for `matmul` vs `softmax` vs `layernorm` at a few sizes; label each compute- or memory-bound.
- **Deliverable:** a profiling report + roofline plot. **Acceptance:** you correctly classify each of three ops as compute- or memory-bound *and* your predicted memory budget is within 15% of measured.

▶ **Practical project:** `VizuaraAI/llm-inference-tutorial` — instrument and profile a served model's forward pass to classify the memory- vs compute-bound bottleneck.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab T4/A100 (or local `uv venv`); `pip install torch transformers` + clone the repo; load Qwen3-8B FP16.
2. **Warm up:** 3 warm-up forwards, then `torch.cuda.synchronize()`.
3. **Profile:** wrap a forward in `torch.profiler` (CUDA activity), export a Chrome trace, list the top-5 kernels by CUDA time.
4. **Budget:** compute weights + activations + KV memory by hand; compare to `torch.cuda.max_memory_allocated()`.
5. **Classify:** for matmul vs softmax vs layernorm, compute arithmetic intensity and label each compute- or memory-bound.
6. **Report:** write the roofline classification.
- **Artifact:** committed Colab + `evidence/week01-profile/bottleneck-report.md` + the Chrome trace.
- **Use `$gpu-profile`:** it turns the trace into the bottleneck + top-time-sink table.
- **Done when:** 3/3 ops correctly classified and predicted memory within 15% of measured.
- **Stretch:** repeat at batch 8 and show which ops flip compute↔memory-bound.

### Harness / reusable skill — `$gpu-profile`
- **Purpose:** turn any model/op into a profile that names the bottleneck (compute vs memory) and the top time-sinks.
- **Inputs:** a model + input shape. **Outputs:** a kernel-time table, a roofline classification, a memory breakdown.
- **Evidence artifact:** `evidence/week01-profile/bottleneck-report.md`.

### Common failure modes
- **Optimizing without profiling** → speeding up a 2% kernel. *Fix:* profile first, optimize the top sink.
- **Ignoring warmup** → measuring CUDA init/compile, not the op. *Fix:* warmup iters + `torch.cuda.synchronize()`.
- **Mean-only timing** → noisy GPU numbers. *Fix:* repeats + median + spread.
- **KV-cache amnesia** → "why did memory explode at long context?" *Fix:* include KV in the budget.

### Evidence artifact
`evidence/week01-profile/` (Chrome trace + roofline plot + memory budget vs measured).

### Skill sink-in
Predict whether the 8B forward pass is compute- or memory-bound at batch 1. Profile it. Record what the timeline said and what surprised you.

### Dataset(s)
**WikiText-2** (`huggingface.co/datasets/wikitext`, ~2M tokens, CC-BY-SA) as a fixed input corpus for consistent profiling; model weights from `huggingface.co/Qwen/Qwen3-8B` (Apache-2.0).

### Code stub
```python
# profile_forward.py — profile + classify the bottleneck
import torch, time
from torch.profiler import profile, ProfilerActivity
from transformers import AutoModelForCausalLM, AutoTokenizer
m = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-8B", torch_dtype=torch.float16).cuda().eval()
tok = AutoTokenizer.from_pretrained("Qwen/Qwen3-8B")
x = tok("The roofline model says", return_tensors="pt").input_ids.cuda()
for _ in range(3): m(x)                       # warmup
torch.cuda.synchronize()
with profile(activities=[ProfilerActivity.CUDA], record_shapes=True) as p:
    with torch.no_grad(): m(x)
    torch.cuda.synchronize()
print(p.key_averages().table(sort_by="cuda_time_total", row_limit=5))
print("alloc GB:", torch.cuda.max_memory_allocated()/1e9)   # compare to your budget
```

### Graded rubric
| Criterion | Excellent (full) | Adequate (half) | Failing (0) |
|---|---|---|---|
| Bottleneck analysis | All 3 ops correctly classified w/ roofline reasoning | 1–2 correct | Guesses, no roofline |
| Memory accounting | Predicted budget within 15% of measured | Within 40% | No budget |
| Method hygiene | Warmup + sync + repeats | One missing | Single cold run |

**Assessment weight:** 4% of course grade.

### Readings & sources (2025–2026)
- Williams, Waterman, Patterson, *Roofline: an insightful visual performance model*, CACM 2009.
- Stanford **CS336** "PyTorch & resource accounting" + "GPUs" lectures (2025).
- Horace He, *Making Deep Learning Go Brrrr From First Principles* (2023).
- NVIDIA, *Nsight Systems/Compute* docs + *GPU Performance Background* (2025).

---

### State of the Art (June 2026)
- Roofline reasoning is now standard tooling: **NVIDIA Nsight Compute 2026** + the PyTorch 2.6 profiler with `torch.cuda` memory snapshots; **Blackwell B200/GB200** (HBM3e ~8 TB/s) shifts the FLOP:bandwidth ratio so even more ops are memory-bound than on Hopper.
- **1M-token context is table stakes** (Claude Opus 4.8, Gemini 3.1 Pro, DeepSeek V4) → the KV-cache, not the weights, dominates the memory budget you profile.
- Sparse **MoE** is the dominant frontier architecture (DeepSeek V4 1.6T/49B-active, Qwen 3.5 397B/17B-active), so "active vs total params" is now a first-order accounting question.

**More detail:** The roofline mental model (arithmetic intensity vs the HBM-bandwidth:FLOP ratio) tells you whether to fuse kernels or cut memory traffic; on Blackwell the ~8 TB/s HBM3e pushes more decode/attention ops below the ridge point, so a profile — not intuition — must drive every optimization.

**References & links:**
- [Roofline: An Insightful Visual Performance Model (Williams et al., 2009)](https://doi.org/10.1145/1498765.1498785) — the model
- [Making Deep Learning Go Brrrr From First Principles (Horace He, 2023)](https://horace.io/brrr_intro.html) — memory- vs compute-bound in practice
- [PyTorch Profiler recipe](https://pytorch.org/tutorials/recipes/recipes/profiler_recipe.html) — capturing the trace
- [NVIDIA Nsight Systems](https://developer.nvidia.com/nsight-systems) — kernel-timeline profiling
- [`pytorch/pytorch`](https://github.com/pytorch/pytorch) — `torch.profiler` + CUDA events
<!-- sota:10L01 -->

## Week 2 — Numerics: Mixed Precision, FP8 & Why Bits Matter

**Altitude:** Engineer · **Anchor case:** run `shrink-an-8B` in FP16, BF16, and FP8 and measure the speed/memory/quality tradeoffs of each.

### Learning goals
- Explain floating-point layouts (FP32/FP16/BF16/FP8 E4M3 & E5M2): range vs precision and where each breaks.
- Use automatic mixed precision correctly (loss scaling, master weights) and explain why BF16 eased it.
- Reason about **FP8** inference/training on Hopper/Blackwell and the role of per-tensor/per-channel scales.
- Detect numeric failure (overflow→NaN, underflow→dead gradients) and tie it to the format's range.

### Concept map
- **Range vs precision.** *Plain English:* exponent bits buy range, mantissa bits buy precision. *Tiny example:* FP16 overflows past 65504; BF16 has FP32's range but coarse precision. Common mistake: training in FP16 without loss scaling → silent NaNs.
- **Mixed precision.** *Formula:* compute in low precision, keep an FP32 master copy + scaled loss. Where it matters: ~2× speed/memory at ~no quality loss. Common mistake: storing the master weights in FP16 too.
- **FP8 (E4M3/E5M2).** Plain English: 8-bit floats for matmuls with per-tensor scales; E4M3 for weights/activations, E5M2 for gradients. Common mistake: a single global scale → clipping or underflow; you need calibrated scales.
- **Dynamic range & scaling.** Plain English: pick a scale that maps your tensor's values into the format's sweet spot. Common mistake: ignoring outlier channels (the SmoothQuant problem, Week 3).

### Hands-on build
- `precision_sweep.py`: run the same generation in FP16/BF16/FP8 (via `torchao`/Transformer Engine); record latency, peak memory, and MMLU/GSM8K delta.
- Reproduce an FP16 overflow→NaN and fix it with BF16 or loss scaling; explain via the format's max value.
- **Deliverable:** a precision-tradeoff table (speed/mem/quality) + a one-paragraph "when to use which." **Acceptance:** FP8 shows a real memory/throughput win with quality drop quantified on a fixed eval (not "looks fine").

▶ **Practical project:** `VizuaraAILabs/nano-gpt-oss` — run BF16/FP16 mixed-precision training and reproduce (then fix) an FP16-overflow→NaN.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100; `pip install torch torchao transformers`; clone the repo.
2. **Baseline:** run the same generation in FP16, BF16, and FP8 (`torchao` float8) on a fixed prompt set.
3. **Measure:** record latency, peak memory, and an MMLU/GSM8K subset score per dtype.
4. **Break it:** force an FP16 overflow→NaN, then fix with BF16 / loss scaling and explain via the format's max value.
5. **Tabulate:** speed/mem/quality table + a one-paragraph "when to use which."
- **Artifact:** committed notebook + `tradeoff-table.md` + the NaN repro/fix note.
- **Use `$precision-sweep`:** it produces the table + a recommended dtype.
- **Done when:** FP8 shows a real mem/throughput win with a quantified quality delta on a fixed eval.
- **Stretch:** add per-tensor vs per-channel FP8 scaling and show the outlier-channel effect.

### Harness / reusable skill — `$precision-sweep`
- **Purpose:** for any model, compare precisions on speed/memory/quality with a fixed eval, and recommend one.
- **Inputs:** a model + an eval set. **Outputs:** a tradeoff table + a recommendation + the failure cases each precision introduced.
- **Evidence artifact:** `evidence/week02-precision/tradeoff-table.md`.

### Common failure modes
- **FP16 training without loss scaling** → NaNs. *Fix:* BF16 or dynamic loss scaling.
- **Quality claimed from one prompt** → unmeasured regression. *Fix:* fixed eval (MMLU/GSM8K subset) with a number.
- **Global FP8 scale** → clipped outliers. *Fix:* per-tensor/per-channel calibrated scales.
- **Mixing up E4M3/E5M2 roles** → range/precision mismatch. *Fix:* E4M3 fwd, E5M2 grads.

### Evidence artifact
`evidence/week02-precision/` (tradeoff table + the NaN repro+fix note).

### Skill sink-in
Predict the FP8 quality drop on GSM8K before running. Measure it. Record whether outlier channels (not the format itself) were the real culprit.

### Dataset(s)
**MMLU** (`huggingface.co/datasets/cais/mmlu`, MIT) + **GSM8K** (`huggingface.co/datasets/openai/gsm8k`, MIT), small fixed subsets for fast, comparable quality deltas.

### Code stub
```python
# precision_sweep.py — compare dtypes on one eval
import torch
from torchao.quantization import quantize_, Float8DynamicActivationFloat8WeightConfig
results = {}
for name, setup in {
    "bf16": lambda m: m.to(torch.bfloat16),
    "fp16": lambda m: m.to(torch.float16),
    "fp8":  lambda m: (quantize_(m, Float8DynamicActivationFloat8WeightConfig()), m)[1],
}.items():
    m = load_model(); m = setup(m)
    lat, mem = time_generate(m); acc = eval_gsm8k(m, n=200)   # fixed subset
    results[name] = dict(latency_ms=lat, mem_gb=mem, gsm8k=acc)
print(results)        # -> tradeoff-table.md
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Precision understanding | Explains each format's range/precision + failure | Partial | Confuses formats |
| Measured tradeoffs | Speed+mem+quality for all 3, with numbers | Missing one axis | Anecdotal |
| Failure repro | Reproduces + fixes a numeric failure | Repro only | None |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Micikevicius et al., *Mixed Precision Training*, ICLR 2018; Micikevicius et al., *FP8 Formats for Deep Learning*, 2022 (NVIDIA/Arm/Intel).
- NVIDIA, *Transformer Engine & FP8 on Hopper/Blackwell* docs (2025).
- MIT **6.5940** "Quantization Part I" (numeric formats), 2024.
- `torchao` docs, *float8 & low-precision training/inference* (0.8, 2025).

---

### State of the Art (June 2026)
- **FP8 inference is the default on Hopper/Blackwell**; **Blackwell adds FP4/MXFP4** microscaling formats (vLLM v0.20+ kernels) — sub-8-bit floats now ship in production.
- **FP8 KV-cache** (`--kv-cache-dtype fp8`) ~halves KV memory and ~2×'s the decode-latency slope — the highest-leverage numeric lever of 2026.
- NVIDIA **Transformer Engine** + `torchao` MXFP8/MXFP4 recipes are the reference; per-block microscaling replaces single global scales.

**More detail:** BF16 buys FP32's exponent range so mixed precision "just works"; FP8 (E4M3 weights/activations, E5M2 grads) needs calibrated per-tensor scales, and Blackwell's MXFP4/MXFP8 microscaling formats attach a shared scale per small block to push below 8 bits without outlier collapse.

**References & links:**
- [Mixed Precision Training (Micikevicius et al., 2018)](https://arxiv.org/abs/1710.03740) — loss scaling + master weights
- [FP8 Formats for Deep Learning (Micikevicius et al., 2022)](https://arxiv.org/abs/2209.05433) — E4M3/E5M2
- [`NVIDIA/TransformerEngine`](https://github.com/NVIDIA/TransformerEngine) — FP8 on Hopper/Blackwell
- [`pytorch/ao` (torchao)](https://github.com/pytorch/ao) — float8 + MX formats
- [torchao documentation](https://docs.pytorch.org/ao/stable/) — low-precision recipes
<!-- sota:10L02 -->

## Week 3 — Post-Training Quantization: GPTQ, AWQ, SmoothQuant

**Altitude:** Engineer · **Anchor case:** quantize `shrink-an-8B` to INT4 (AWQ and GPTQ) and W8A8 (SmoothQuant), and find which keeps quality at the best speed/memory.

### Learning goals
- Explain weight-only vs weight+activation quantization, and per-tensor/per-channel/group-wise granularity.
- Apply **GPTQ** (error-compensating, second-order), **AWQ** (activation-aware, protect salient channels), and **SmoothQuant** (migrate activation outliers into weights) — and say *when* each wins.
- Run calibration correctly (representative data, enough samples) and measure the quality/speed/memory tradeoff.
- Diagnose the **activation-outlier** problem that makes naive INT8 activation quantization fail.

### Concept map
- **PTQ vs QAT.** Plain English: quantize a trained model (cheap, slight loss) vs train with quantization (costly, best quality). This week is PTQ. Common mistake: reaching for QAT when AWQ already suffices.
- **Quantization granularity.** *Formula:* `x_q = round(x/s) + z`, scale `s`/zero-point `z` per-tensor, per-channel, or per-group (e.g., group size 128). Where it matters: finer granularity = better quality, slightly more overhead. Common mistake: per-tensor weights for a model with channel outliers.
- **AWQ.** Plain English: a few weight channels matter much more (tied to large activations); scale to protect them. Common mistake: ignoring which channels are salient.
- **SmoothQuant.** *Plain English:* activations have outliers that wreck INT8; mathematically "smooth" them into the weights so both quantize well. Common mistake: W8A8 without smoothing → big accuracy cliff.
- **Calibration set.** Plain English: a small representative corpus to estimate ranges. Common mistake: calibrating on data unlike production → bad scales.

### Hands-on build
- Quantize the 8B with **AutoAWQ** (INT4, group 128) and **llm-compressor** (GPTQ INT4 and SmoothQuant W8A8) using a WikiText calibration set.
- Evaluate each on the fixed MMLU/GSM8K subset; measure tokens/s and memory served on vLLM.
- **Deliverable:** a quantization comparison table (method × {quality, tokens/s, GB}) + a recommendation. **Acceptance:** at least one INT4 variant holds ≥98% of FP16 quality on the eval while cutting memory ≥3×, demonstrated with numbers.
- **Design review #1 (8%-component):** an ADR recommending a quantization recipe for the capstone.

▶ **Practical project:** `mlabonne/llm-course` — use its quantization notebooks (GPTQ/AWQ/GGUF) to quantize the 8B and re-eval quality.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install autoawq auto-gptq llmcompressor transformers vllm`; open the course's quantization notebook.
2. **Calibrate:** build a WikiText calibration set; quantize the 8B with AWQ INT4 (group 128) and GPTQ INT4.
3. **W8A8:** run SmoothQuant W8A8 via llm-compressor; export vLLM-ready checkpoints.
4. **Serve & eval:** `vllm serve` each variant; score the fixed MMLU/GSM8K subset; measure tokens/s + GB.
5. **Decide:** method × {quality, tokens/s, GB} table; write the ADR recommending a recipe.
- **Artifact:** committed notebook + `quant-comparison.md` + ADR-001.
- **Use `$quantize-and-verify`:** quantize → verify quality on a fixed eval → go/no-go.
- **Done when:** ≥1 INT4 variant holds ≥98% of FP16 quality while cutting memory ≥3×.
- **Stretch:** add an FP8 W8A8 variant and compare against INT4 on Blackwell-class kernels.

### Harness / reusable skill — `$quantize-and-verify`
- **Purpose:** quantize any model with a chosen method + verify quality on a fixed eval before it ships.
- **Inputs:** a model + calibration data + an eval. **Outputs:** quantized weights, a quality/speed/memory delta, a go/no-go.
- **Evidence artifact:** `evidence/week03-quant/quant-comparison.md`.

### Common failure modes
- **No quality eval after quantizing** → shipped a degraded model. *Fix:* always re-eval on the fixed set.
- **Bad calibration data** → wrong scales, quality cliff. *Fix:* representative, sufficient calibration samples.
- **W8A8 without outlier handling** → accuracy collapse. *Fix:* SmoothQuant before INT8 activations.
- **Per-tensor everything** → avoidable quality loss. *Fix:* per-channel/group-wise where it counts.

### Evidence artifact
`evidence/week03-quant/` (comparison table + calibration notes + ADR-001 quant recipe).

### Skill sink-in
Predict which method (AWQ vs GPTQ vs SmoothQuant) best preserves GSM8K. Run all three. Record the winner and *why* (granularity? outliers? second-order?).

### Dataset(s)
**WikiText-2** (calibration, CC-BY-SA) + **C4** sample (`huggingface.co/datasets/allenai/c4`, ODC-BY) for calibration robustness; **MMLU/GSM8K** subsets for quality.

### Code stub
```python
# AWQ INT4 quantize + vLLM-ready export (AutoAWQ)
from awq import AutoAWQForCausalLM
from transformers import AutoTokenizer
model = AutoAWQForCausalLM.from_pretrained("Qwen/Qwen3-8B")
tok = AutoTokenizer.from_pretrained("Qwen/Qwen3-8B")
quant_cfg = {"w_bit": 4, "q_group_size": 128, "zero_point": True, "version": "GEMM"}
model.quantize(tok, quant_config=quant_cfg,
               calib_data="wikitext")          # representative calibration
model.save_quantized("Qwen3-8B-awq-int4")
# then: vllm serve Qwen3-8B-awq-int4 --quantization awq  ; eval with lm-eval-harness
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Method understanding | Explains AWQ/GPTQ/SmoothQuant + when each wins | Two of three | Names only |
| Quality verification | All variants eval'd; ≥98% INT4 variant found | Eval'd, no clear winner | No eval |
| Tradeoff reporting | quality×tokens/s×GB table + pick | Missing an axis | Anecdotal |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Frantar et al., *GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers*, ICLR 2023.
- Lin et al., *AWQ: Activation-aware Weight Quantization for LLM Compression*, MLSys 2024.
- Xiao et al., *SmoothQuant: Accurate and Efficient PTQ for LLMs*, ICML 2023.
- Dettmers et al., *LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale*, NeurIPS 2022 (the outlier story).

---

### State of the Art (June 2026)
- **llm-compressor** (Neural Magic / Red Hat) is the de-facto PTQ toolkit feeding vLLM (GPTQ + AWQ + SmoothQuant + FP8 in one flow).
- **INT4 (AWQ/GPTQ) is the production default** for weight-only; **FP8 W8A8** dominates server-side where Blackwell kernels exist.
- Frontier open weights (DeepSeek V4, Qwen 3.5, Llama 4) ship with first-party quantized checkpoints — calibration recipes (NeMo / llm-compressor) are now standardized.

**More detail:** Weight-only INT4 (AWQ protects salient channels; GPTQ does error-compensating second-order rounding) keeps quality cheaply, while W8A8 needs SmoothQuant to migrate activation outliers into the weights; llm-compressor unifies all three into vLLM-ready checkpoints.

**References & links:**
- [GPTQ (Frantar et al., 2023)](https://arxiv.org/abs/2210.17323) — second-order PTQ
- [AWQ (Lin et al., 2024)](https://arxiv.org/abs/2306.00978) — activation-aware
- [SmoothQuant (Xiao et al., 2023)](https://arxiv.org/abs/2211.10438) — W8A8 outlier migration
- [`casper-hansen/AutoAWQ`](https://github.com/casper-hansen/AutoAWQ)
- [`vllm-project/llm-compressor`](https://github.com/vllm-project/llm-compressor)
<!-- sota:10L03 -->

## Week 4 — QAT, Low-Bit Frontiers & Serving Quantized Models

**Altitude:** Engineer · **Anchor case:** push `shrink-an-8B` further — QLoRA-style NF4, FP8 serving on vLLM, and a peek at sub-4-bit — then serve the best variant and re-measure end to end.

### Learning goals
- Explain quantization-aware training/fine-tuning (straight-through estimator) and when it beats PTQ.
- Use **NF4 + QLoRA** to fine-tune a quantized model on a single GPU, and explain double quantization.
- Serve quantized checkpoints (INT4/FP8) on vLLM/TensorRT-LLM and confirm the *served* (not just offline) speedup.
- Reason about the low-bit frontier (W4A8, FP8, 2–3 bit, and where quality falls off a cliff).

### Concept map
- **QAT & the straight-through estimator.** *Plain English:* simulate quantization in the forward pass, pass gradients straight through the non-differentiable round. Where it matters: recovers quality at very low bits. Common mistake: expecting PTQ-level cost from QAT.
- **NF4 + QLoRA.** Plain English: store frozen weights in 4-bit NormalFloat, train small LoRA adapters in BF16; double-quantize the quant constants to save more. Common mistake: thinking QLoRA quantizes the *adapters* (it doesn't).
- **Served vs offline speedup.** Plain English: a smaller model isn't automatically faster to serve — kernels must support the format. Common mistake: quantizing to a format your serving stack lacks fast kernels for.
- **Low-bit cliff.** Plain English: quality degrades gracefully to ~4-bit, then often sharply below. Common mistake: chasing 2-bit without a quality budget.
- **On-device / private SLM deployment.** Plain English: a low-bit small model can run *locally* (llama.cpp/GGUF, MLX, ExecuTorch) so data never leaves the device — the efficiency win is also a privacy and offline-availability win. Where it matters: regulated/edge settings where a server round-trip is a non-starter. Common mistake: picking a quant format the on-device runtime has no fast kernel for (links to the `tiny-on-edge` mini-anchor and the "SLM local assistant" studio).

### Hands-on build
- QLoRA-fine-tune the 8B (NF4) on a small instruction set; merge/serve; compare quality to the base.
- Produce an **FP8** checkpoint (llm-compressor) and serve on vLLM; benchmark served tokens/s vs the INT4 and FP16 baselines.
- **Deliverable:** an updated efficiency table with QLoRA + FP8 rows + a "served speedup vs offline" note. **Acceptance:** the served FP8/INT4 variant shows a real end-to-end throughput gain on vLLM (measured with `benchmark_serving.py`), with quality within budget.

▶ **Practical project:** `krishnaik06/Finetuning-LLM` — QLoRA-fine-tune a 4-bit base on one GPU, then merge and serve the result.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab / single 24 GB GPU; `pip install bitsandbytes peft trl transformers vllm`; clone the repo.
2. **QLoRA:** load the 8B in NF4 (double-quant), attach LoRA adapters, fine-tune on a small instruction set.
3. **Merge:** merge adapters, export, re-eval on the fixed set vs the base.
4. **FP8 serve:** produce an FP8 checkpoint (llm-compressor); serve on vLLM.
5. **Prove served gain:** benchmark served tokens/s with `benchmark_serving.py` at batch 1 and batch 32 vs FP16/INT4.
- **Artifact:** committed notebook + `served-speedup.md` + the merged adapter.
- **Use `$lowbit-serve`:** pick an accelerated format, fine-tune if needed, verify the *served* gain.
- **Done when:** the served FP8/INT4 variant beats FP16 end-to-end with quality within budget.
- **Stretch:** show where the served gain disappears at high concurrency and explain why.

### Harness / reusable skill — `$lowbit-serve`
- **Purpose:** select a low-bit format your serving stack accelerates, fine-tune if needed (QLoRA), and verify the *served* gain.
- **Inputs:** a model + serving stack + quality budget. **Outputs:** a served variant + a benchmark proving real speedup + quality delta.
- **Evidence artifact:** `evidence/week04-lowbit/served-speedup.md`.

### Common failure modes
- **Offline-only speedup** → no real serving gain. *Fix:* benchmark the actual server, not just `model.generate`.
- **Format without kernels** → quantized but slow. *Fix:* match format to stack (AWQ/FP8 kernels in vLLM).
- **QLoRA quality assumptions** → unverified adapters. *Fix:* eval merged model on the fixed set.
- **Chasing 2-bit** → quality cliff. *Fix:* set a quality floor first.

### Evidence artifact
`evidence/week04-lowbit/` (served benchmark + quality delta + format/kernel notes).

### Skill sink-in
Predict whether your INT4 model is faster *served* than FP16 at batch 1 vs batch 32. Benchmark both. Record where (and why) the served gain appears.

### Dataset(s)
**Alpaca/OpenHermes** instruction sample (`huggingface.co/datasets/teknium/OpenHermes-2.5`, permissive) for QLoRA fine-tuning; **MMLU/GSM8K** subsets for quality; vLLM ShareGPT trace for serving load.

### Code stub
```python
# QLoRA fine-tune on a 4-bit base (bitsandbytes NF4)
from transformers import AutoModelForCausalLM, BitsAndBytesConfig
from peft import LoraConfig, get_peft_model
bnb = BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_quant_type="nf4",
                         bnb_4bit_use_double_quant=True, bnb_4bit_compute_dtype="bfloat16")
m = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-8B", quantization_config=bnb, device_map="auto")
m = get_peft_model(m, LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj","v_proj"], task_type="CAUSAL_LM"))
# train adapters in bf16 over frozen 4-bit weights ... then merge + serve + eval
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| QAT/QLoRA grasp | Explains STE + NF4/double-quant correctly | Partial | Misconceptions |
| Served gain | Real end-to-end throughput win, measured | Offline-only gain | No benchmark |
| Quality budget | Within stated floor, verified | Eval'd, no floor set | No eval |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Dettmers et al., *QLoRA: Efficient Finetuning of Quantized LLMs*, NeurIPS 2023.
- Bengio et al., *Estimating or Propagating Gradients Through Stochastic Neurons* (STE), 2013.
- Frantar et al., *Marlin / Machete: fast low-bit GPU kernels for LLM serving*, 2024–25 (why kernels matter).
- llm-compressor & vLLM docs, *FP8 / INT4 serving recipes* (2025).

---

### State of the Art (June 2026)
- **QLoRA/DoRA on NF4** remains the one-GPU fine-tune default; **unsloth** gives 2–5× faster QLoRA, and `trl` + `peft` are the standard stack.
- **Marlin / Machete** low-bit GPU kernels make INT4/FP8 actually fast to *serve* in vLLM — the format must match an accelerated kernel or there is no served win.
- Sub-4-bit (2–3 bit) is still research-grade; the production quality floor sits at ~INT4/FP8.

**More detail:** QLoRA freezes NF4 weights and trains BF16 LoRA adapters (double-quantizing the quant constants), and the *served* speedup only materializes when the format hits an accelerated kernel (Marlin/Machete) in the serving stack.

**References & links:**
- [QLoRA (Dettmers et al., 2023)](https://arxiv.org/abs/2305.14314) — NF4 + double quant
- [LLM.int8() (Dettmers et al., 2022)](https://arxiv.org/abs/2208.07339) — the outlier story
- [`unslothai/unsloth`](https://github.com/unslothai/unsloth) — 2–5× faster QLoRA
- [`huggingface/peft`](https://github.com/huggingface/peft) — LoRA/QLoRA/DoRA
- [vLLM quantization docs](https://docs.vllm.ai/en/latest/features/quantization/) — serving INT4/FP8
<!-- sota:10L04 -->

## Week 5 — Pruning, Sparsity, Distillation & NAS

**Altitude:** Engineer · **Anchor case:** `tiny-on-edge` — compress a small model with structured pruning + distillation; on the server, try 2:4 sparsity on the 8B.

### Learning goals
- Distinguish unstructured vs structured pruning and magnitude vs second-order (OBD/SparseGPT) criteria.
- Use **2:4 semi-structured sparsity** that NVIDIA tensor cores actually accelerate, and measure the real speedup.
- Apply **knowledge distillation** (logit/feature) to shrink a model while keeping accuracy.
- Explain Neural Architecture Search / once-for-all as automated efficiency, and its cost tradeoff.

### Concept map
- **Unstructured vs structured pruning.** *Plain English:* zero out scattered weights (great compression, no speed without special kernels) vs remove whole channels/heads (real speedup, harder to keep accuracy). Common mistake: unstructured sparsity expecting wall-clock gains on dense hardware.
- **2:4 sparsity.** Plain English: 2 of every 4 weights zero, in a pattern Ampere+ tensor cores accelerate ~2×. Common mistake: arbitrary sparsity patterns the hardware can't use.
- **Distillation.** *Formula:* student minimizes `α·CE(y) + (1−α)·KL(softmax(z_t/T) ‖ softmax(z_s/T))`. *Plain English:* learn from the teacher's soft probabilities, not just the hard label. Common mistake: temperature `T=1` (throws away the dark knowledge).
- **SparseGPT / Wanda.** Plain English: one-shot prune an LLM with calibration, like GPTQ for sparsity. Common mistake: pruning then never re-evaluating.
- **NAS / once-for-all.** Plain English: search architectures under a latency budget; train once, specialize many. Common mistake: ignoring NAS's large search cost vs the win.

### Hands-on build
- Distill `tiny-on-edge` from a larger teacher; report the accuracy gap vs a same-size from-scratch model.
- Apply **2:4 sparsity** (SparseGPT/`torchao`) to the 8B; measure served speedup on a sparsity-aware kernel + quality delta.
- **Deliverable:** a compression report (pruning + distillation rows, real speedup vs theoretical). **Acceptance:** 2:4 sparsity shows a measured wall-clock speedup (not just a parameter-count reduction) and the distilled student beats its from-scratch twin.

▶ **Practical project:** `VizuaraAILabs/Tiny-Stories-Regional` — train a small distilled-scale LM and compare it against a from-scratch same-size twin.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab; `pip install torch torchao transformers`; clone the repo.
2. **Distill:** train a small student from a larger teacher (logit KD, tuned temperature) on the corpus.
3. **Twin:** train a same-size model from scratch; compare accuracy to the distilled student.
4. **2:4 sparsity:** apply 2:4 semi-structured sparsity (`torchao`) to the 8B; measure served wall-clock vs dense.
5. **Report:** compression table — theoretical vs real speedup + quality delta.
- **Artifact:** committed notebook + `compression-report.md`.
- **Use `$compress-verify`:** verify a hardware-real speedup *and* an in-budget quality delta.
- **Done when:** 2:4 shows a measured wall-clock speedup and the distilled student beats its from-scratch twin.
- **Stretch:** add SparseGPT/Wanda one-shot pruning and re-eval.

### Harness / reusable skill — `$compress-verify`
- **Purpose:** compress a model (prune/distill) and verify both a *hardware-real* speedup and an in-budget quality delta.
- **Inputs:** a model (+ teacher) + a latency target. **Outputs:** a compressed model + measured speedup + quality delta + a note on theoretical-vs-real gain.
- **Evidence artifact:** `evidence/week05-compress/compression-report.md`.

### Common failure modes
- **Unstructured sparsity, no speedup** → fewer params, same latency. *Fix:* structured / 2:4 with supporting kernels.
- **No re-eval after pruning** → silent accuracy loss. *Fix:* eval on the fixed set post-prune.
- **Distillation with T=1** → loses soft-label signal. *Fix:* tune temperature, use teacher logits.
- **NAS over-engineering** → search cost > the win. *Fix:* compare NAS cost to a hand-tuned baseline.

### Evidence artifact
`evidence/week05-compress/` (compression report + theoretical-vs-real speedup note).

### Skill sink-in
Predict the wall-clock speedup of 2:4 sparsity vs its theoretical 2×. Measure it. Record the gap and which layers didn't speed up.

### Dataset(s)
**CIFAR-100 / Tiny-ImageNet** (`huggingface.co/datasets/zh-plus/tiny-imagenet`, research) for the edge distillation case; **WikiText-2** calibration + **MMLU** for the 8B sparsity quality check.

### Code stub
```python
# 2:4 semi-structured sparsity with torchao + measure real speedup
import torch
from torchao.sparsity import sparsify_, semi_sparse_weight
m = load_8b().half().cuda().eval()
sparsify_(m, semi_sparse_weight())            # 2:4 pattern on Linear weights
def bench(model):
    x = sample_batch(); torch.cuda.synchronize(); t=time.time()
    for _ in range(20): model.generate(x, max_new_tokens=64)
    torch.cuda.synchronize(); return (time.time()-t)/20
print("dense vs 2:4:", bench(dense), bench(m), "  MMLU delta:", eval_mmlu(m)-base_mmlu)
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Hardware-real speedup | 2:4 wall-clock gain measured + explained | Param reduction only | None |
| Distillation | Student beats from-scratch twin | Trained, no comparison | No distillation |
| Quality check | All compressed variants re-eval'd | Partial | None |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Hinton, Vinyals, Dean, *Distilling the Knowledge in a Neural Network*, NeurIPS-W 2015.
- Frantar & Alistarh, *SparseGPT: Massive LMs Can Be Accurately Pruned in One-Shot*, ICML 2023; Sun et al., *Wanda*, ICLR 2024.
- Mishra et al., *Accelerating Sparse DNNs with 2:4 Sparsity* (NVIDIA), 2021.
- Cai et al., *Once-for-All: Train One Network and Specialize for Efficient Deployment*, ICLR 2020 (MIT 6.5940 NAS).

---

### State of the Art (June 2026)
- **2:4 semi-structured sparsity** on Hopper/Blackwell sparse tensor cores is the only pruning that reliably yields a wall-clock speedup (`torchao`, SparseGPT/Wanda one-shot).
- Distillation is now **synthetic-data + on-policy** (teacher = a frontier model such as Opus 4.8 / DeepSeek V4); distilled SLMs (Gemma 4, Qwen 3.5 small, Llama 4 Scout) power edge deployment.
- **KV-cache compression (EvicPress, QuantSpec)** is the 2026 sparsity frontier for inference, more than weight pruning.

**More detail:** Only 2:4 semi-structured sparsity (with sparse tensor-core support) reliably converts param reduction into wall-clock speedup; distillation has shifted to synthetic/on-policy data from a frontier teacher, and the live inference-sparsity frontier is KV-cache compression rather than weight pruning.

**References & links:**
- [Distilling the Knowledge in a Neural Network (Hinton et al., 2015)](https://arxiv.org/abs/1503.02531)
- [SparseGPT (Frantar & Alistarh, 2023)](https://arxiv.org/abs/2301.00774) — one-shot pruning
- [Wanda (Sun et al., 2024)](https://arxiv.org/abs/2306.11695)
- [Once-for-All (Cai et al., 2020)](https://arxiv.org/abs/1908.09791) — NAS under a latency budget
- [`pytorch/ao` sparsity](https://github.com/pytorch/ao/tree/main/torchao/sparsity) — 2:4 semi-structured
<!-- sota:10L05 -->

## Week 6 — Attention at Scale: FlashAttention-3, KV-Cache & PagedAttention

**Altitude:** Engineer → Specialist · **Anchor case:** make `shrink-an-8B` cheaper at long context — quantify FlashAttention-3 and KV-cache management on memory and throughput.

### Learning goals
- Explain why naive attention is memory-bound and O(n²) memory, and how **FlashAttention** makes it IO-aware (tiling, no materialized N×N matrix).
- Describe **FlashAttention-3** improvements (Hopper async/warp-specialization, FP8) and when they help.
- Explain the **KV-cache**: what it stores, why it dominates long-context memory, and how to size it.
- Explain **PagedAttention** (vLLM): KV-cache as paged memory to kill fragmentation and raise batch size.

### Concept map
- **Naive attention is IO-bound.** *Plain English:* it writes/reads a huge N×N score matrix to HBM. Where it matters: that traffic, not the FLOPs, is the cost. Common mistake: thinking attention is compute-bound.
- **FlashAttention (tiling + online softmax).** *Plain English:* compute attention block-by-block in SRAM, never materializing the full matrix, using a running (online) softmax. Common mistake: assuming it changes results (it's exact, not approximate).
- **KV-cache.** *Formula:* memory ≈ `2 · layers · heads · head_dim · seq_len · batch · bytes`. *Plain English:* cache past keys/values so each new token doesn't recompute the whole prefix. Common mistake: forgetting it grows linearly with context and batch → OOM.
- **PagedAttention.** *Plain English:* store the KV-cache in fixed-size pages (like OS virtual memory) so you avoid fragmentation and pack more sequences. Common mistake: pre-allocating max-length contiguous KV per request → wasted memory, small batch.

### Hands-on build
- Benchmark generation with eager attention vs **FlashAttention-3** (or FA-2 if HW-limited) at 1k/8k/32k context; record latency, memory, tokens/s.
- Compute the KV-cache memory formula and verify against measured memory as context grows; then show how vLLM **PagedAttention** lets you raise concurrent sequences at the same memory.
- **Deliverable:** an attention-scaling report (latency/memory vs context, FA on/off, paged vs naive). **Acceptance:** FA-3 shows a measured memory + throughput win at long context, and your KV-cache prediction matches measurement within 15%.

▶ **Practical project:** `VizuaraAI/kv-cache-token-reduction-walkthrough` — measure KV-cache growth and the FlashAttention/paged-KV win across 1k/8k/32k context.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100; `pip install vllm transformers flash-attn`; clone the repo.
2. **Backends:** benchmark eager vs FlashAttention-3/4 at 1k/8k/32k context (latency, memory, tokens/s).
3. **KV formula:** compute KV-cache bytes from the formula; verify against measured memory as context grows.
4. **Paged:** show vLLM PagedAttention raising concurrent sequences at the same memory.
5. **Curve:** plot latency/memory vs context, FA on/off, paged vs naive.
- **Artifact:** committed notebook + `attention-scaling.md`.
- **Use `$attention-bench`:** quantify attention/KV cost across context + prove the FA/paged win.
- **Done when:** FA shows a measured long-context win and KV prediction matches within 15%.
- **Stretch:** add FP8 KV-cache and re-measure max concurrency.

### Harness / reusable skill — `$attention-bench`
- **Purpose:** quantify attention/KV-cache cost across context lengths and prove the win from FlashAttention + paged KV.
- **Inputs:** a model + context lengths + batch sizes. **Outputs:** a latency/memory/throughput curve, a KV-cache budget, a paged-vs-naive batch-size comparison.
- **Evidence artifact:** `evidence/week06-attention/attention-scaling.md`.

### Common failure modes
- **Treating attention as compute-bound** → wrong optimization. *Fix:* it's memory/IO-bound; reduce traffic.
- **KV-cache OOM at long context** → crashes. *Fix:* size KV from the formula; use paged KV + quantized KV.
- **FA assumed approximate** → distrust. *Fix:* show outputs match eager within numeric tolerance.
- **Contiguous KV allocation** → tiny batch. *Fix:* PagedAttention to pack sequences.

### Evidence artifact
`evidence/week06-attention/` (scaling curves + KV-cache prediction vs measured + paged batch-size gain).

### Skill sink-in
Predict the KV-cache size for batch 16 at 32k context. Measure it. Record the error and whether KV-cache quantization would change your serving plan.

### Dataset(s)
**LongBench / RULER** long-context prompts (`huggingface.co/datasets/THUDM/LongBench`, MIT) to drive realistic long-context load; WikiText for short-context baselines.

### Code stub
```python
# compare attention backends + verify KV-cache memory formula
import torch, time
def kv_bytes(layers, heads, hdim, seq, batch, dtype_bytes=2):
    return 2*layers*heads*hdim*seq*batch*dtype_bytes      # keys + values
for attn in ["eager", "flash_attention_3"]:
    m = load_8b(attn_implementation=attn).half().cuda().eval()
    for seq in [1024, 8192, 32768]:
        torch.cuda.reset_peak_memory_stats()
        out = m.generate(make_input(seq), max_new_tokens=64)
        print(attn, seq, "GB:", torch.cuda.max_memory_allocated()/1e9,
              "predicted KV GB:", kv_bytes(32,32,128,seq,1)/1e9)
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Attention mechanics | Explains IO-awareness + online softmax + paging | Partial | Hand-wave |
| Measured scaling | FA on/off × context, with memory + tokens/s | One axis | Anecdotal |
| KV prediction | Formula matches measured within 15% | Within 40% | No prediction |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Dao et al., *FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness*, NeurIPS 2022; Dao, *FlashAttention-2*, 2023.
- Shah et al., *FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision*, NeurIPS 2024.
- Kwon et al., *Efficient Memory Management for LLM Serving with PagedAttention (vLLM)*, SOSP 2023.
- Stanford **CS336** FlashAttention/Triton assignment (2025); CMU **11-868** "inference serving" (2025).

---

### State of the Art (June 2026)
- **FlashAttention-4** is the Blackwell default (vLLM v0.20+); **FA-3** remains the Hopper path — both exact and IO-aware.
- **PagedAttention** is universal; **prefix caching / RadixAttention** (SGLang) + **FP8 KV-cache** are standard at long context.
- KV-cache eviction/compression (**StreamingLLM sinks, H2O, KVQuant, EvicPress**) is how 1M-context serving stays in memory.

**More detail:** FlashAttention keeps the N×N scores in SRAM via tiling + online softmax (exact, not approximate); FA-3 adds Hopper async/FP8 and FA-4 is the Blackwell default, while PagedAttention stores the KV-cache in fixed pages to kill fragmentation and raise batch size.

**References & links:**
- [FlashAttention (Dao et al., 2022)](https://arxiv.org/abs/2205.14135)
- [FlashAttention-2 (Dao, 2023)](https://arxiv.org/abs/2307.08691)
- [PagedAttention / vLLM (Kwon et al., 2023)](https://arxiv.org/abs/2309.06180)
- [`Dao-AILab/flash-attention`](https://github.com/Dao-AILab/flash-attention)
- [`vllm-project/vllm`](https://github.com/vllm-project/vllm)
<!-- sota:10L06 -->

## Week 7 — Inference Serving Engines: vLLM, SGLang & TensorRT-LLM

**Altitude:** Engineer → Specialist · **Anchor case:** serve the quantized 8B on vLLM, SGLang, and TensorRT-LLM; benchmark continuous batching and pick a stack on evidence.

### Learning goals
- Explain **continuous (in-flight) batching** and why it dominates static batching for LLM serving.
- Compare the three major engines (vLLM, SGLang, TensorRT-LLM) on throughput, latency, features, and ops cost.
- Use **prefix caching / RadixAttention** (SGLang) for shared-prefix workloads (RAG, system prompts).
- Benchmark *serving* properly: separate prefill vs decode, report TTFT and ITL, sweep concurrency.

### Concept map
- **Prefill vs decode.** *Plain English:* prefill processes the whole prompt in parallel (compute-bound); decode generates one token at a time (memory-bound). Where it matters: they have totally different bottlenecks; serving must balance both. Common mistake: one batching policy for both phases.
- **Continuous batching.** Plain English: add/remove requests from the running batch every step instead of waiting for the slowest. Common mistake: comparing engines at static batch and missing the real win.
- **TTFT vs ITL vs throughput.** Time-to-first-token, inter-token latency, total tokens/s — different SLOs for chat vs batch. Common mistake: reporting only aggregate throughput for an interactive product.
- **Prefix caching / RadixAttention.** Plain English: reuse KV for shared prefixes (same system prompt, same RAG context). Common mistake: recomputing identical prefixes thousands of times.

### Hands-on build
- Serve the same quantized checkpoint on **vLLM**, **SGLang**, and **TensorRT-LLM**; run `benchmark_serving.py`/GuideLLM at concurrency 1/8/32/64.
- Produce a serving-engine comparison: TTFT, ITL, throughput, max concurrency, and a feature/ops-cost note; demonstrate SGLang prefix caching on a shared-system-prompt workload.
- **Deliverable:** an engine comparison table + a recommendation for the capstone. **Acceptance:** continuous batching shown to beat static batching by a measured margin, and prefix caching gives a measured TTFT win on shared prefixes.

▶ **Practical project:** `VizuaraAI/infertutor-arena-capstone` — serve on Modal + vLLM and benchmark continuous batching / TTFT / ITL across concurrency.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Modal or RunPod serverless GPU; `pip install vllm sglang`; clone the repo; deploy the quantized 8B.
2. **Serve 3 ways:** stand up vLLM, SGLang, and TensorRT-LLM on the same checkpoint.
3. **Benchmark:** run `benchmark_serving.py`/GuideLLM at concurrency 1/8/32/64; capture TTFT, ITL, throughput.
4. **Prefix cache:** demonstrate SGLang RadixAttention on a shared-system-prompt workload (TTFT win).
5. **Decide:** engine comparison table + ADR-002 recommending a stack.
- **Artifact:** committed config + `engine-comparison.md` + ADR-002.
- **Use `$serving-engine-bench`:** benchmark + choose an engine on real metrics.
- **Done when:** continuous batching beats static by a measured margin and prefix caching gives a TTFT win.
- **Stretch:** add a disaggregated prefill/decode run and compare throughput.

### Harness / reusable skill — `$serving-engine-bench`
- **Purpose:** benchmark and choose an inference engine for a given workload (chat vs batch vs RAG) on real metrics.
- **Inputs:** a model + workload profile + SLOs. **Outputs:** TTFT/ITL/throughput table, max concurrency, a justified engine pick.
- **Evidence artifact:** `evidence/week07-serving/engine-comparison.md`.

### Common failure modes
- **Static-batch comparisons** → understates modern engines. *Fix:* benchmark continuous batching at varied concurrency.
- **Throughput-only reporting** → bad for interactive SLOs. *Fix:* report TTFT + ITL too.
- **No prefix caching for RAG** → wasted prefill. *Fix:* enable prefix/Radix caching, measure.
- **Single concurrency point** → misleading. *Fix:* sweep concurrency, show the curve.

### Evidence artifact
`evidence/week07-serving/` (engine table + concurrency sweep + prefix-cache TTFT win + ADR-002 serving stack).

### Skill sink-in
Predict which engine wins at concurrency 64 for your workload. Benchmark all three. Record the winner and which metric (TTFT vs throughput) decided it.

### Dataset(s)
**ShareGPT** / **LMSYS-Chat-1M** (`huggingface.co/datasets/lmsys/lmsys-chat-1m`) for chat-shaped load + a synthetic **shared-system-prompt RAG** trace (course-authored) to exercise prefix caching.

### Code stub
```bash
# Benchmark continuous batching on vLLM, sweep concurrency, capture TTFT/ITL/throughput
vllm serve Qwen3-8B-awq-int4 --quantization awq --max-num-seqs 256 --enable-prefix-caching &
python -m vllm.entrypoints.benchmark_serving \
  --backend vllm --model Qwen3-8B-awq-int4 \
  --dataset-name sharegpt --num-prompts 1000 \
  --request-rate 8 --metric-percentiles 50,95,99 \
  --save-result --result-filename evidence/week07-serving/vllm_c8.json
# repeat with --request-rate 32,64 ; repeat on SGLang (sglang.launch_server) and TensorRT-LLM
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Batching understanding | Explains continuous batching + prefill/decode split | Partial | Conflates with static |
| Benchmark rigor | TTFT+ITL+throughput swept over concurrency, 3 engines | One engine / one metric | Single point |
| Decision | Evidence-backed engine pick for the workload | Pick, weak evidence | "vLLM because popular" |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Yu et al., *Orca: A Distributed Serving System for Transformer-Based Generative Models* (continuous batching), OSDI 2022.
- Zheng et al., *SGLang: Efficient Execution of Structured LM Programs (RadixAttention)*, NeurIPS 2024.
- vLLM & TensorRT-LLM docs (2025); Neural Magic **GuideLLM** benchmarking guide (2025).
- Stanford **CS25** "production inference/serving (Modal)" guest lecture (2026).

---

### State of the Art (June 2026)
- **vLLM is the reference engine** (FA-4, FP8 KV, chunked prefill, speculative); **SGLang** (RadixAttention) and **TensorRT-LLM** are the production alternatives.
- **Disaggregated prefill/decode serving** (separate pools — vLLM/Dynamo, Mooncake) is the 2026 throughput frontier.
- Benchmarking standardized on **GuideLLM** + vLLM `benchmark_serving` (TTFT/ITL/throughput swept over concurrency); **serverless GPU** (Modal, Baseten, RunPod FlashBoot) is the default deploy substrate.

**More detail:** Continuous (in-flight) batching is the throughput win over static batching; SGLang's RadixAttention reuses KV across shared prefixes, and 2026's frontier is disaggregating prefill (compute-bound) from decode (memory-bound) into separate pools.

**References & links:**
- [Orca: continuous batching (Yu et al., OSDI 2022)](https://www.usenix.org/conference/osdi22/presentation/yu)
- [SGLang / RadixAttention (Zheng et al., 2024)](https://arxiv.org/abs/2312.07104)
- [vLLM documentation](https://docs.vllm.ai/) — serving + benchmarking
- [`sgl-project/sglang`](https://github.com/sgl-project/sglang)
- [`vllm-project/vllm`](https://github.com/vllm-project/vllm) — `benchmark_serving`
<!-- sota:10L07 -->

## Week 8 — Speculative & Parallel Decoding

**Altitude:** Specialist · **Anchor case:** cut `shrink-an-8B` decode latency with speculative decoding (draft model, EAGLE-3, Medusa) without changing outputs.

### Learning goals
- Explain why autoregressive decode is latency-bound (one token per forward pass, memory-bound) and how speculation breaks the serialization.
- Describe **speculative decoding**: a cheap draft proposes k tokens, the target verifies them in one pass; accepted tokens are *exactly* what the target would produce.
- Compare draft-model, **Medusa** (extra heads), **EAGLE-3** (feature-level drafting), and n-gram/lookahead approaches.
- Measure the real speedup and its dependence on the **acceptance rate** and batch size.

### Concept map
- **Why decode is slow.** *Plain English:* each token needs a full forward pass that's memory-bound (you reload all weights to make one token). Where it matters: speculation amortizes weight loads over many candidate tokens. Common mistake: thinking a faster GPU alone fixes per-token latency.
- **Speculative decoding (verify-in-parallel).** *Plain English:* guess k tokens cheaply, check them all at once with the big model, keep the longest correct prefix. *Key property:* output distribution is provably unchanged. Common mistake: assuming it changes quality (it doesn't, with correct rejection sampling).
- **Acceptance rate.** *Formula:* speedup ≈ function of expected accepted length per target step. Where it matters: a poorly-matched draft → low acceptance → little or negative gain. Common mistake: a draft model too different from the target.
- **Medusa / EAGLE.** Plain English: instead of a separate draft model, train extra heads / draft on hidden features. Common mistake: ignoring the small training cost they require.

### Hands-on build
- Configure vLLM speculative decoding with (a) a 1B draft model and (b) **EAGLE-3** or **n-gram**; benchmark decode latency + acceptance rate vs the baseline.
- Show outputs are unchanged (greedy match) and measure how speedup varies with batch size.
- **Deliverable:** a speculative-decoding report (speedup vs acceptance vs batch) + a recommendation. **Acceptance:** a measured decode-latency reduction at batch 1 with *identical greedy outputs*, and an explanation of why the gain shrinks at high batch.

▶ **Practical project:** `VizuaraAI/llm-inference-tutorial` — configure speculative decoding (draft / EAGLE) and measure acceptance rate + decode-latency win.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100/Modal; `pip install vllm`; clone the repo; load the quantized 8B + a 1B draft.
2. **Configure:** enable vLLM speculative decoding with (a) the draft model and (b) EAGLE-3 / n-gram.
3. **Acceptance:** measure acceptance rate and per-step accepted length.
4. **Latency:** benchmark decode latency at batch 1 vs batch 32 vs the no-speculation baseline.
5. **Equivalence:** prove greedy outputs are identical to baseline.
- **Artifact:** committed notebook + `spec-decode-report.md`.
- **Use `$spec-decode`:** add speculation and verify an output-preserving latency win.
- **Done when:** measured decode-latency drop at batch 1 with identical greedy outputs.
- **Stretch:** show the KV-quant + speculative incompatibility and document the gotcha.

### Harness / reusable skill — `$spec-decode`
- **Purpose:** add speculative decoding to a served model and verify a real, output-preserving latency win.
- **Inputs:** a target model + a draft/method. **Outputs:** acceptance rate, latency delta vs batch, an output-equivalence check.
- **Evidence artifact:** `evidence/week08-spec/spec-decode-report.md`.

### Common failure modes
- **Mismatched draft** → low acceptance, no gain. *Fix:* choose/distill a well-aligned draft; measure acceptance.
- **Claiming speedup at high batch** → speculation helps least when batching already saturates the GPU. *Fix:* report across batch sizes.
- **Unverified equivalence** → silent quality change. *Fix:* greedy output match against baseline.
- **Ignoring draft cost** → net slower. *Fix:* account for draft forward passes in the budget.

### Evidence artifact
`evidence/week08-spec/` (acceptance + latency-vs-batch + greedy-equivalence proof).

### Skill sink-in
Predict the acceptance rate of your draft model. Measure it. Record how acceptance rate, not raw draft speed, determined the actual gain.

### Dataset(s)
**MT-Bench / ShareGPT** prompts (`huggingface.co/datasets/lmsys/mt_bench_human_judgments`, CC) for decode benchmarking; GSM8K for an equivalence check on structured outputs.

### Code stub
```python
# vLLM speculative decoding (draft model) + acceptance measurement
from vllm import LLM, SamplingParams
llm = LLM(model="Qwen3-8B-awq-int4", quantization="awq",
          speculative_config={"model": "Qwen/Qwen3-1.7B", "num_speculative_tokens": 5})
sp = SamplingParams(temperature=0, max_tokens=128)        # greedy -> exact-match check
out = llm.generate(prompts, sp)
# compare out.text to the non-speculative baseline (must be identical);
# read acceptance rate + per-step accepted length from llm metrics / Prometheus
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Mechanism grasp | Explains verify-in-parallel + acceptance + invariance | Partial | Treats as approximate |
| Measured gain | Latency↓ at batch 1, swept over batch | Single batch | No measurement |
| Equivalence | Greedy outputs proven identical | Claimed not shown | Outputs differ |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Leviathan, Kalman, Matias, *Fast Inference from Transformers via Speculative Decoding*, ICML 2023; Chen et al., *Accelerating LLM Decoding with Speculative Sampling* (DeepMind), 2023.
- Cai et al., *Medusa: Simple LLM Inference Acceleration with Multiple Decoding Heads*, ICML 2024.
- Li et al., *EAGLE-3: Scaling Inference Acceleration via Training-Time Test*, 2024–25.
- vLLM docs, *Speculative decoding configs* (0.8.x, 2025).

---

### State of the Art (June 2026)
- **EAGLE-3** is the leading speculative method (feature-level drafting); **Medusa** (extra heads) and n-gram/lookahead remain in vLLM.
- Speculation gives **2–5× at low concurrency** and shrinks under heavy batching — and **conflicts with some KV-quant** configs (a teachable 2026 gotcha).
- **RL-trained / verifier-style drafts** and built-in self-speculation are emerging in frontier serving stacks.

**More detail:** Speculative decoding has a cheap draft propose k tokens that the target verifies in one pass (output distribution provably unchanged); EAGLE-3 drafts at the feature level for high acceptance, and the gain tracks acceptance rate — shrinking under heavy batching.

**References & links:**
- [Fast Inference via Speculative Decoding (Leviathan et al., 2023)](https://arxiv.org/abs/2211.17192)
- [Accelerating LLM Decoding with Speculative Sampling (Chen et al., 2023)](https://arxiv.org/abs/2302.01318)
- [Medusa (Cai et al., 2024)](https://arxiv.org/abs/2401.10774)
- [EAGLE (Li et al., 2024)](https://arxiv.org/abs/2401.15077)
- [vLLM speculative-decoding docs](https://docs.vllm.ai/en/latest/features/spec_decode.html)
<!-- sota:10L08 -->

## Week 9 — Mixture-of-Experts: Sparse Models at Scale

**Altitude:** Specialist · **Anchor case:** run and serve an MoE model (e.g., Qwen3-MoE / Mixtral-style) and measure the active-vs-total parameter tradeoff and its serving implications.

### Learning goals
- Explain MoE: many expert FFNs, a router selecting top-k per token, so *active* params ≪ *total* params.
- Reason about the compute/memory tradeoff: cheap FLOPs per token, but all experts must fit in memory.
- Describe routing problems (load imbalance, token dropping) and the auxiliary load-balancing loss.
- Understand **expert parallelism** and why MoE serving is a memory-capacity and communication problem.

### Concept map
- **Sparse activation.** *Plain English:* each token uses only k of N experts, so you get a big model's capacity at a small model's per-token compute. *Formula:* active params ≈ `(k/N) · expert_params + shared`. Common mistake: assuming MoE is cheap to *serve* — you still must hold all experts in memory.
- **Router + top-k gating.** *Plain English:* a small network picks which experts handle each token. Common mistake: ignoring routing instability between training and inference.
- **Load balancing.** *Plain English:* without a balancing loss, a few experts get all tokens (others starve). Common mistake: dropping the aux loss → collapsed routing.
- **Expert parallelism.** Plain English: shard experts across GPUs; tokens are all-to-all routed. Where it matters: communication, not FLOPs, often bounds MoE serving. Common mistake: treating MoE like a dense model for capacity planning.

### Hands-on build
- Serve an MoE model on vLLM/SGLang; measure tokens/s and memory; compare *active* vs *total* params and the throughput vs a dense model of similar quality.
- Inspect router behavior on a batch: per-expert token counts (load balance) and the effect of top-k.
- **Deliverable:** an MoE analysis (active/total params, throughput, memory, routing-balance plot). **Acceptance:** you can explain, with measured numbers, why the MoE needs more memory but less compute per token than a dense peer, and show its expert load distribution.

▶ **Practical project:** `VizuaraAILabs/DeepSeek-From-Scratch` — inspect MLA/MoE routing and per-expert load on a from-scratch MoE.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100; `pip install torch transformers`; clone the repo.
2. **Run MoE:** load a Qwen3-MoE / Mixtral-style model with `output_router_logits=True`.
3. **Accounting:** compute active vs total params; measure tokens/s and memory vs a dense peer.
4. **Routing:** histogram per-expert token counts; sweep top-k and observe load balance.
5. **Report:** active/total accounting + throughput/memory + expert-load plot + ADR-003.
- **Artifact:** committed notebook + `moe-analysis.md` + ADR-003.
- **Use `$moe-analyze`:** profile active/total, serving cost, and routing balance.
- **Done when:** you explain with numbers why MoE needs more memory but less compute/token, with a load histogram.
- **Stretch:** simulate expert-parallel all-to-all cost across 2 GPUs.

### Harness / reusable skill — `$moe-analyze`
- **Purpose:** profile an MoE model's active/total params, serving cost, and routing balance to inform a deploy decision.
- **Inputs:** an MoE model + a batch. **Outputs:** active-vs-total param accounting, throughput/memory, an expert-load histogram.
- **Evidence artifact:** `evidence/week09-moe/moe-analysis.md`.
- **Design review #2 (8%-component):** an ADR for the serving stack + (if used) parallelism/MoE plan for the capstone.

### Common failure modes
- **"MoE is just cheaper"** → forgets memory capacity cost. *Fix:* account for total params in VRAM.
- **Ignoring load imbalance** → wasted experts, latency spikes. *Fix:* measure per-expert token counts.
- **Dense capacity planning for MoE** → undersized GPUs. *Fix:* plan for all experts + expert-parallel comms.
- **Top-k mis-set** → quality/cost imbalance. *Fix:* sweep k, measure quality vs throughput.

### Evidence artifact
`evidence/week09-moe/` (param accounting + throughput/memory + expert-load histogram + ADR-003).

### Skill sink-in
Predict the active-vs-total parameter ratio and the expert-load skew. Measure both. Record whether routing was as balanced as you assumed.

### Dataset(s)
**WikiText-2 / C4** sample for routing inspection; **MMLU** for the dense-vs-MoE quality-at-equal-throughput comparison. Model: `huggingface.co/Qwen/Qwen3-30B-A3B` (MoE) or `mistralai/Mixtral-8x7B` (Apache-2.0).

### Code stub
```python
# inspect MoE routing balance from a forward pass with output_router_logits
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
m = AutoModelForCausalLM.from_pretrained("Qwen/Qwen3-30B-A3B", torch_dtype=torch.bfloat16,
                                         device_map="auto", output_router_logits=True)
tok = AutoTokenizer.from_pretrained("Qwen/Qwen3-30B-A3B")
out = m(**tok(batch_texts, return_tensors="pt", padding=True).to(m.device))
# router_logits: tuple per layer -> [tokens, n_experts]; top-k argmax -> per-expert counts
counts = torch.zeros(n_experts)
for layer_logits in out.router_logits:
    top = layer_logits.topk(k=2, dim=-1).indices
    counts += torch.bincount(top.flatten().cpu(), minlength=n_experts)
print("expert load (should be roughly flat):", counts)
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| MoE understanding | Explains active/total + memory/comms tradeoff | Partial | "Just a big model" |
| Measurement | Throughput+memory+param accounting + routing | Missing one | None |
| Serving insight | Correct capacity/parallelism implication | Vague | Wrong |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Shazeer et al., *Outrageously Large Neural Networks: The Sparsely-Gated MoE Layer*, ICLR 2017.
- Fedus, Zoph, Shazeer, *Switch Transformers: Scaling to Trillion Parameter Models*, JMLR 2022.
- Jiang et al., *Mixtral of Experts*, 2024; DeepSeek-AI, *DeepSeek-V3 / DeepSeekMoE* technical reports, 2024–25.
- Stanford **CS336** "Mixture of Experts" lecture (2025); CMU **11-711** "MoE" (2025).

---

### State of the Art (June 2026)
- **MoE is the dominant frontier architecture**: DeepSeek V4 (1.6T total / 49B active), Qwen 3.5 (397B/17B), Llama 4 Scout/Maverick, the Mixtral lineage.
- Serving is a **memory-capacity + expert-parallel all-to-all communication** problem; **DeepEP** expert-parallel kernels and **fine-grained + shared-expert** routing (DeepSeekMoE) are standard.
- The teachable tension: cheap per-token FLOPs, but all experts must reside in VRAM.

**More detail:** MoE routes each token to k of N expert FFNs, so active params ≪ total — cheap per-token FLOPs but every expert must sit in VRAM; serving is bounded by memory capacity and expert-parallel all-to-all communication, and a load-balancing loss prevents router collapse.

**References & links:**
- [Sparsely-Gated Mixture-of-Experts (Shazeer et al., 2017)](https://arxiv.org/abs/1701.06538)
- [Switch Transformers (Fedus et al., 2022)](https://arxiv.org/abs/2101.03961)
- [Mixtral of Experts (Jiang et al., 2024)](https://arxiv.org/abs/2401.04088)
- [DeepSeek-V3 (DeepSeek-AI, 2024)](https://arxiv.org/abs/2412.19437)
- [`deepseek-ai/DeepEP`](https://github.com/deepseek-ai/DeepEP) — expert-parallel comms
<!-- sota:10L09 -->

## Week 10 — Long-Context Efficiency

**Altitude:** Specialist · **Anchor case:** make `shrink-an-8B` viable at 128k context — KV-cache quantization, sliding-window/sparse attention, and the long-context-vs-RAG decision.

### Learning goals
- Explain why long context is dominated by KV-cache memory and attention cost, and enumerate the levers.
- Apply KV-cache compression: quantized KV (INT8/FP8), eviction (H2O/StreamingLLM), and sliding-window attention.
- Reason about position methods (RoPE scaling, YaRN) for extending context and their quality cost.
- Decide, with numbers, when long-context beats RAG and vice versa (cost, latency, accuracy).

### Concept map
- **KV-cache dominates long context.** *Plain English:* at 128k tokens the KV-cache can exceed the weights in memory. Common mistake: extending context length without budgeting KV memory.
- **KV-cache quantization & eviction.** *Plain English:* store KV in INT8/FP8, or drop low-attention tokens (StreamingLLM keeps sink + recent; H2O keeps heavy hitters). Common mistake: uniform eviction that drops tokens the model still attends to.
- **Sliding-window / sparse attention.** Plain English: attend only to a local window (+ a few global tokens) to cut O(n²). Common mistake: applying it to tasks that need full global attention.
- **RoPE scaling / YaRN.** Plain English: rescale rotary positions to generalize beyond the trained length. Common mistake: naive extrapolation → quality collapse past the training length.
- **Long-context vs RAG.** Plain English: stuff everything in context (simple, expensive, "lost-in-the-middle") vs retrieve the few relevant chunks (cheap, needs a retriever). Common mistake: paying 128k-context cost when 4k of retrieval suffices.

### Hands-on build
- Serve the 8B with **quantized KV-cache** (FP8) and **StreamingLLM/sliding-window**; measure max context per GB and throughput vs full-precision KV.
- Run a **lost-in-the-middle** probe and a long-context-vs-RAG cost/accuracy comparison on a long-doc QA task.
- **Deliverable:** a long-context efficiency report (max context/GB, quality vs KV-precision, LC-vs-RAG tradeoff). **Acceptance:** KV-cache quantization shown to raise max context per GB with a quantified quality delta, and a defended LC-vs-RAG recommendation backed by cost+accuracy numbers.

▶ **Practical project:** `VizuaraAI/kv-cache-token-reduction-walkthrough` — push toward 128k with FP8 KV + eviction and run a long-context-vs-RAG cost comparison.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100/Modal; `pip install vllm transformers`; clone the repo.
2. **Quantize KV:** serve with FP8 KV-cache + StreamingLLM/sliding-window at 16k/64k/128k.
3. **Max ctx/GB:** measure max context per GB vs full-precision KV; record quality deltas.
4. **LC vs RAG:** run a long-doc QA task as long-context vs retrieval; compare cost + accuracy.
5. **Probe:** run a lost-in-the-middle probe; write the LC-vs-RAG recommendation.
- **Artifact:** committed notebook + `longctx-report.md`.
- **Use `$longctx-budget`:** find the cheapest path to a target context under a quality floor.
- **Done when:** KV quantization raises max ctx/GB with a quantified quality delta + a defended LC-vs-RAG pick.
- **Stretch:** add YaRN scaling and eval quality at 256k.

### Harness / reusable skill — `$longctx-budget`
- **Purpose:** find the cheapest way to hit a target context length under a quality floor (KV-quant/eviction/window/RAG).
- **Inputs:** a model + target context + quality floor + a long-doc task. **Outputs:** max-context-per-GB curve, quality deltas per lever, an LC-vs-RAG recommendation.
- **Evidence artifact:** `evidence/week10-longctx/longctx-report.md`.

### Common failure modes
- **Extending context, ignoring KV memory** → OOM. *Fix:* budget + quantize/evict KV.
- **Aggressive eviction** → drops needed tokens. *Fix:* keep attention sinks + heavy hitters, measure quality.
- **Naive RoPE extrapolation** → collapse past trained length. *Fix:* YaRN/position-interpolation, eval at target length.
- **Long-context when RAG is cheaper** → 10× cost. *Fix:* compare cost+accuracy before choosing.

### Evidence artifact
`evidence/week10-longctx/` (max-context/GB curve + KV-precision quality deltas + LC-vs-RAG decision).

### Skill sink-in
Predict whether long-context or RAG wins on cost *and* accuracy for your task. Run both. Record where the lines crossed.

### Dataset(s)
**LongBench v2** (`huggingface.co/datasets/THUDM/LongBench`, MIT) + **RULER** (`huggingface.co/datasets/nvidia/ruler` style) + **NarrativeQA** for lost-in-the-middle probing.

### Code stub
```python
# serve with FP8 KV-cache + sliding window; measure max context per GB
from vllm import LLM
llm = LLM(model="Qwen3-8B-awq-int4", quantization="awq",
          kv_cache_dtype="fp8",                 # quantized KV-cache
          max_model_len=131072, enable_chunked_prefill=True)
for seq in [16384, 65536, 131072]:
    try:
        out = llm.generate(make_long_prompt(seq), max_tokens=64)
        print(seq, "OK  peak GB:", gpu_peak_gb(), " quality:", eval_longqa(out))
    except RuntimeError as e:
        print(seq, "OOM -> need more KV compression"); break
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Lever understanding | Explains KV-quant/eviction/window/RoPE + tradeoffs | Two levers | One / vague |
| Measurement | Max-ctx/GB + quality per lever measured | Partial | None |
| LC-vs-RAG | Defended pick with cost+accuracy numbers | Pick, weak data | Assertion |

**Assessment weight:** 5% of course grade.

### Readings & sources
- Xiao et al., *Efficient Streaming Language Models with Attention Sinks (StreamingLLM)*, ICLR 2024; Zhang et al., *H2O: Heavy-Hitter Oracle for KV-cache*, NeurIPS 2023.
- Peng et al., *YaRN: Efficient Context Window Extension of LLMs*, ICLR 2024.
- Liu et al., *Lost in the Middle: How Language Models Use Long Contexts*, TACL 2024.
- MIT **6.5940** "long-context / efficient LLM serving"; Hooper et al., *KVQuant*, NeurIPS 2024.

---

### State of the Art (June 2026)
- **1M-token context is table stakes** (Opus 4.8, Gemini 3.1 Pro, DeepSeek V4; Llama 4 Scout ~10M) — KV-cache memory, not compute, is the binding constraint.
- Standard levers: **FP8/INT4 KV-cache, StreamingLLM sinks, H2O/EvicPress eviction, YaRN scaling**, sliding-window/sparse attention.
- **Long-context vs Agentic RAG** is an explicit cost decision; RAG (with ColPali/late-interaction retrieval) usually wins on $/accuracy below the context limit.

**More detail:** At 128k+ the KV-cache can exceed the weights, so the levers are FP8/INT4 KV, eviction that keeps attention sinks + heavy hitters (StreamingLLM/H2O), and RoPE/YaRN extension — and below the context limit, retrieval usually wins on $/accuracy.

**References & links:**
- [StreamingLLM (Xiao et al., 2024)](https://arxiv.org/abs/2309.17453) — attention sinks
- [H2O: Heavy-Hitter Oracle (Zhang et al., 2023)](https://arxiv.org/abs/2306.14048)
- [YaRN (Peng et al., 2024)](https://arxiv.org/abs/2309.00071) — context extension
- [Lost in the Middle (Liu et al., 2024)](https://arxiv.org/abs/2307.03172)
- [vLLM automatic prefix caching docs](https://docs.vllm.ai/en/latest/features/automatic_prefix_caching.html)
<!-- sota:10L10 -->

## Week 11 — Distributed Training & Inference: FSDP, ZeRO, Tensor/Pipeline Parallelism

**Altitude:** Specialist · **Anchor case:** scale `shrink-an-8B` beyond a single GPU — shard it with FSDP/ZeRO for training and split it with tensor/pipeline parallelism for serving a bigger model.

### Learning goals
- Explain the four parallelism axes — **data, tensor, pipeline, (expert)** — and what each shards and communicates.
- Use **FSDP2 / DeepSpeed ZeRO** (stages 1/2/3) to fit a model that doesn't fit on one GPU, and read the memory/comms tradeoff.
- Explain **tensor parallelism** (split each layer) and **pipeline parallelism** (split by layers + microbatching) for inference of large models.
- Diagnose distributed bottlenecks (communication overlap, bubble time, OOM) and pick a parallelism plan for a target model + hardware.

### Concept map
- **Data parallelism.** *Plain English:* replicate the model, split the batch, all-reduce gradients. Common mistake: using DP when the model itself doesn't fit (you need sharding).
- **ZeRO / FSDP sharding.** *Plain English:* shard optimizer state (Z1), gradients (Z2), and parameters (Z3) across GPUs, gathering on demand. *Tradeoff:* less memory, more communication. Common mistake: ZeRO-3 on a fast-enough setup where ZeRO-2 would avoid the comms cost.
- **Tensor parallelism.** *Plain English:* split each matmul across GPUs (column/row parallel), all-reduce within a layer. Where it matters: low-latency serving of models too big for one GPU. Common mistake: TP across slow interconnect (NVLink vs PCIe matters a lot).
- **Pipeline parallelism.** *Plain English:* place different layers on different GPUs, stream microbatches to fill the pipeline. *Bubble:* idle time at fill/drain. Common mistake: too-few microbatches → big bubble.
- **Choosing a plan.** Plain English: TP within a node (fast links), PP/DP across nodes; pick by model size, latency target, and interconnect. Common mistake: one-size-fits-all parallelism.

### Hands-on build
- Train/fine-tune the 8B with **FSDP2** (or DeepSpeed ZeRO-3) across 2+ GPUs; record peak memory per GPU and throughput vs single-GPU (where it even fits).
- Serve a larger model (e.g., 70B quantized) with **tensor parallelism** on vLLM (`--tensor-parallel-size`); measure latency vs TP degree and explain the comms cost.
- **Deliverable:** a parallelism report (memory/throughput vs strategy) + a "which plan for which model+hardware" decision table. **Acceptance:** you demonstrate fitting a model that does *not* fit on one GPU via sharding, and show how serving latency changes with TP degree, explaining the interconnect role.

▶ **Practical project:** `VizuaraAI/vizuara-5d-parallelism-workshop` — run DP/TP/PP/CP/EP sharding on multi-GPU and read the memory/comms tradeoff.

**Build it — step by step (AI-builder lab):**
1. **Setup:** multi-GPU (Modal/RunPod 2–8×); `pip install torch deepspeed accelerate vllm`; clone the workshop.
2. **Shard:** fine-tune the 8B with FSDP2 (or ZeRO-3) across 2+ GPUs; record peak mem/GPU + throughput.
3. **Tensor-parallel:** serve a 70B (quantized) with `--tensor-parallel-size`; sweep TP degree vs latency.
4. **Diagnose:** name the bottleneck (comms overlap, pipeline bubble, interconnect).
5. **Plan:** decision table — which plan for which model + hardware + goal.
- **Artifact:** committed configs + `parallel-plan.md`.
- **Use `$parallel-plan`:** choose + validate a DP/FSDP/TP/PP strategy.
- **Done when:** you fit a model that doesn't fit on one GPU and show TP-degree latency with the interconnect role.
- **Stretch:** add context + expert parallelism (5D) and compare.

### Harness / reusable skill — `$parallel-plan`
- **Purpose:** choose and validate a parallelism strategy (DP/FSDP-ZeRO/TP/PP) for a target model + hardware + latency goal.
- **Inputs:** model size + GPU count/interconnect + objective (train vs serve, latency vs throughput). **Outputs:** a recommended plan + measured memory/throughput + the bottleneck named.
- **Evidence artifact:** `evidence/week11-distributed/parallel-plan.md`.

### Common failure modes
- **DP when the model doesn't fit** → OOM. *Fix:* shard (ZeRO-3/FSDP) or TP.
- **ZeRO-3 everywhere** → comms-bound. *Fix:* lowest stage that fits; overlap comms with compute.
- **TP over slow links** → latency worse than a smaller model. *Fix:* TP within NVLink node, PP/DP across.
- **Too-few pipeline microbatches** → huge bubble. *Fix:* increase microbatches; balance stages.

### Evidence artifact
`evidence/week11-distributed/` (memory/throughput vs strategy + TP-degree latency curve + decision table).

### Skill sink-in
Predict the per-GPU memory savings of ZeRO-3 vs ZeRO-2 for the 8B. Measure both. Record the savings and the communication cost you paid for it.

### Dataset(s)
**OpenHermes-2.5 / Tulu-3** instruction data (`huggingface.co/datasets/allenai/tulu-3-sft-mixture`, ODC-BY) for the FSDP fine-tune; serving load from ShareGPT for the TP latency sweep.

### Code stub
```python
# FSDP2 sharded fine-tune (accelerate config) + TP serving (vLLM) — skeletons
# 1) Training: accelerate launch --config_file fsdp.yaml train.py
#    fsdp.yaml: fsdp_sharding_strategy: FULL_SHARD (ZeRO-3 equiv), fsdp_offload_params: false
from accelerate import Accelerator
acc = Accelerator()                      # picks up FSDP from the launch config
model, opt, dl = acc.prepare(model, opt, dataloader)
for batch in dl:
    loss = model(**batch).loss; acc.backward(loss); opt.step(); opt.zero_grad()
# 2) Serving a 70B across 4 GPUs with tensor parallelism:
#    vllm serve meta-llama/Llama-3.1-70B-Instruct --tensor-parallel-size 4 --quantization fp8
```

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Parallelism understanding | Explains all 4 axes + when to use each | 2–3 axes | One axis |
| Demonstrated scaling | Fits an un-fittable model; TP latency curve shown | One of the two | Neither |
| Plan quality | Decision table matches model+hardware+goal | Generic plan | Wrong/absent |

**Assessment weight:** 6% of course grade.

### Readings & sources
- Rajbhandari et al., *ZeRO: Memory Optimizations Toward Training Trillion Parameter Models*, SC 2020.
- Zhao et al., *PyTorch FSDP: Experiences on Scaling Fully Sharded Data Parallel*, VLDB 2023.
- Shoeybi et al., *Megatron-LM: Training Multi-Billion Parameter LMs Using Model Parallelism*, 2019/2021 (tensor parallel); Narayanan et al., *PipeDream / pipeline parallelism*, SOSP 2019.
- Stanford **CS336** "parallelism (data/tensor/pipeline)"; HuggingFace *Ultra-Scale Playbook* (2025).

---

### State of the Art (June 2026)
- **PyTorch FSDP2** + **DeepSpeed ZeRO-3** are the sharding defaults; **5D parallelism** (data/tensor/pipeline/context/expert) is the frontier vocabulary (HF *Ultra-Scale Playbook*).
- **Context parallelism** (Ring-style) is now required for 1M-context training; **expert parallelism** (DeepEP) for MoE.
- Serving large models uses **TP within an NVLink node, PP/DP across nodes**; **disaggregated serving + GB200 NVL72** scale-up changes the interconnect calculus.

**More detail:** ZeRO/FSDP shard optimizer state → gradients → parameters across GPUs (more comms for less memory); tensor parallelism splits each matmul (keep it inside an NVLink node), pipeline parallelism splits by layer with microbatches, and 5D adds context + expert parallelism for 1M-context MoE training.

**References & links:**
- [ZeRO (Rajbhandari et al., 2020)](https://arxiv.org/abs/1910.02054)
- [Megatron-LM tensor parallel (Shoeybi et al., 2019)](https://arxiv.org/abs/1909.08053)
- [PyTorch FSDP (Zhao et al., 2023)](https://arxiv.org/abs/2304.11277)
- [`microsoft/DeepSpeed`](https://github.com/microsoft/DeepSpeed)
- [HuggingFace Ultra-Scale Playbook](https://huggingface.co/spaces/nanotron/ultrascale-playbook) — 5D parallelism
<!-- sota:10L11 -->

## Week 12 — Capstone: FP16 → Quantized, Served, Benchmarked Endpoint

**Altitude:** Specialist · **Anchor case:** your own model, taken the full efficiency distance, with a defended deployment recommendation.

### Learning goals
- Integrate the course into one end-to-end efficiency pipeline: profile → quantize → kernel/attention optimize → serve → speculate → benchmark.
- Produce a single **Pareto frontier** (quality vs latency vs cost) across every technique and defend one operating point.
- Make a deployment recommendation grounded entirely in measured numbers with hardware disclosed and error bars.

### Capstone spec
Take one open model from a vanilla **FP16** checkpoint to a **quantized, optimized, served** endpoint and produce the efficiency report. Required:
1. **Profile** the FP16 baseline (bottleneck + memory budget) and record baseline latency/throughput/cost/quality.
2. **Quantize** (≥2 methods, e.g., AWQ INT4 + FP8) with a verified quality eval (fixed MMLU/GSM8K subset).
3. **Attention/KV** optimization (FlashAttention + paged/quantized KV) with a long-context measurement.
4. **Serve** on a chosen engine (vLLM/SGLang/TensorRT-LLM) with continuous batching; benchmark TTFT/ITL/throughput across concurrency.
5. **Speculative decoding** with an output-equivalence check and a measured decode-latency win.
6. **(Choose one) MoE analysis OR a distributed/parallel serving demo** appropriate to your model size.
7. **Pareto report:** one chart of quality vs latency vs cost for every variant, plus a $/1M-tokens table.

### Milestones
- **M1:** baseline profiled + memory budget + fixed eval harness wired (`lm-eval-harness`).
- **M2:** quantized variants produced + quality-verified + served on the chosen engine.
- **M3:** attention/KV + speculative decoding + concurrency benchmark complete.
- **M4 (demo):** Pareto frontier + cost table + a one-page deployment recommendation defended against the numbers.

### Acceptance checklist
- [ ] Every number lists **hardware, precision, batch/concurrency, warmup, repeats, and spread** (no naked numbers).
- [ ] At least one variant hits **≥98% of FP16 quality** at a **measured** latency/cost win.
- [ ] The **served** speedup (not offline) is demonstrated with `benchmark_serving.py`/GuideLLM.
- [ ] Speculative decoding output equivalence is **proven** (greedy match), with the acceptance rate reported.
- [ ] The **Pareto chart** makes the chosen operating point obviously defensible.
- [ ] A **$/1M-tokens** figure is computed for the recommended deployment.

▶ **Practical project:** `VizuaraAI/infertutor-arena-capstone` — take a model FP16 → quantized → served → benchmarked end-to-end as the capstone reference.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Modal/RunPod serverless GPU; full stack (`vllm`, `llmcompressor`, `peft`); clone the capstone repo.
2. **Pipeline:** profile FP16 → quantize (≥2 methods) → FA + paged/FP8 KV → serve (vLLM) → speculative.
3. **Benchmark:** sweep concurrency for TTFT/ITL/throughput; verify speculative equivalence.
4. **Cost:** compute $/1M tokens with prompt caching + model routing.
5. **Pareto:** one quality-vs-latency-vs-cost chart across every variant + a defended operating point.
- **Artifact:** the pipeline repo + `capstone/efficiency-report.md` (Pareto chart + cost table).
- **Use `$efficiency-report`:** assemble all nine skills into one reproducible report.
- **Done when:** a ≥98%-quality variant at a measured latency/cost win, served speedup proven, $/1M computed.
- **Stretch:** add a distributed/MoE serving demo appropriate to your model size.

### Harness / reusable skill — `$efficiency-report`
- **Purpose:** assemble all nine skills into one reproducible Pareto-frontier efficiency report + deployment recommendation.
- **Inputs:** a model + a quality eval + a target SLO/budget. **Outputs:** the Pareto chart, the cost table, the defended recommendation, and the full benchmarking method.
- **Evidence artifact:** `capstone/efficiency-report.md` (this *is* the deliverable).

### Common failure modes
- **Naked numbers** (no hardware/warmup/repeats). *Fix:* a benchmarking method section + error bars on every figure.
- **Offline-only "speedups."** *Fix:* prove it on the actual server under load.
- **Quality unverified after optimizing.** *Fix:* re-eval every variant on the fixed set; show the deltas.
- **A recommendation that ignores cost.** *Fix:* the pick must be defended on the Pareto frontier *and* $/1M tokens.

### Evidence artifact
`capstone/` — the pipeline repo + `efficiency-report.md` (Pareto chart, cost table, method, recommendation).

### Skill sink-in
Before the final benchmark, write down the operating point (quality/latency/cost) you expect to recommend. Run the full sweep. The distance between your guess and the Pareto frontier is the capstone's real lesson — record it.

### Dataset(s)
**MMLU + GSM8K** (quality, fixed subsets), **ShareGPT/LMSYS-Chat-1M** (serving load), **LongBench** (long-context) — all reused from earlier weeks for a consistent, comparable report. Model: student-chosen open weights with a stated license.

### Graded rubric
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Coverage | All 7 capstone components, measured | 5–6 components | ≤4 |
| Benchmark rigor | Hardware/warmup/repeats/spread on every number | Mostly disclosed | Naked numbers |
| Quality verification | Every variant eval'd; ≥98% point found | Some eval'd | Unverified |
| Served reality | End-to-end served speedup proven | Offline-only | None |
| Decision quality | Pareto + $/1M-tokens-defended recommendation | Pick, partial evidence | Assertion |

**Assessment weight:** 28% of course grade (capstone bucket; weekly labs sum to 58%, design reviews 8%, benchmarking hygiene 6%).

### Readings & sources
- Dao et al. (FlashAttention 1–3), Kwon et al. (PagedAttention/vLLM), Lin et al. (AWQ), Leviathan et al. (speculative decoding) — the capstone's primary toolbox, re-read as an integrated system.
- MIT **6.5940** efficient-serving capstone framing (2024); CMU **11-868** end-to-end LLM-systems project (2025); Stanford **CS336** resource-accounting discipline (2025).
- Neural Magic **GuideLLM** + vLLM `benchmark_serving` docs (2025) — the benchmarking method reference.

---

### State of the Art (June 2026)
- The 2026 reference pipeline: **INT4/FP8 quantize (llm-compressor) → vLLM serve with FA-4 + FP8 KV + prefix caching → EAGLE-3 speculative → GuideLLM benchmark → serverless-GPU deploy**.
- Cost is reported as **$/1M tokens** with **prompt caching** (up to ~90% off static prefixes) and **model routing** as first-class levers.
- Pareto framing (quality vs latency vs cost) on disclosed Blackwell/Hopper hardware is the deliverable standard.

**More detail:** The end-to-end reference pipeline is quantize (llm-compressor) → serve on vLLM with FA-4 + FP8 KV + prefix caching → EAGLE-3 speculative → benchmark (GuideLLM) → serverless-GPU deploy, with $/1M-token cost driven by prompt caching + model routing.

**References & links:**
- [`vllm-project/vllm`](https://github.com/vllm-project/vllm)
- [`vllm-project/llm-compressor`](https://github.com/vllm-project/llm-compressor)
- [vLLM benchmarking docs](https://docs.vllm.ai/en/latest/contributing/benchmarks.html)
- [Modal serverless-GPU guide](https://modal.com/docs/guide/gpu) — pay-per-second deploy
- [PagedAttention / vLLM (Kwon et al., 2023)](https://arxiv.org/abs/2309.06180)
<!-- sota:10L12 -->

## Course-level outcomes

By the end you can take a model from an FP16 checkpoint to a **quantized, kernel-aware, continuously-batched, speculatively-decoded, served** endpoint — and **prove** every gain with a profile, a benchmark, a quality eval, and a cost figure, on disclosed hardware. You leave with a reusable efficiency harness:

`$gpu-profile` · `$precision-sweep` · `$quantize-and-verify` · `$lowbit-serve` · `$compress-verify` · `$attention-bench` · `$serving-engine-bench` · `$spec-decode` · `$moe-analyze` · `$longctx-budget` · `$parallel-plan` · `$efficiency-report`

These compose directly with Subject 09's production harness: the endpoints you containerized, gated, and monitored there are now the ones you quantize, batch, and benchmark here — efficiency and operations as two halves of shipping real AI systems.

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/vizuara-5d-parallelism-workshop` (+ `-assignments`) — DP/TP/PP/CP/EP parallelism on 8 GPUs; the hands-on spine for distributed training/inference — Lecture 11.
- `VizuaraAI/llm-inference-tutorial` — inference internals (prefill/decode, batching) to instrument and benchmark — Lectures 7, 10.
- `VizuaraAI/kv-cache-token-reduction-walkthrough` — KV-cache sizing, quantization, and token-reduction walkthrough — Lectures 6, 10.
- `VizuaraAILabs/DeepSeek-From-Scratch` — MLA / MoE / MTP from scratch; the MoE router + expert mechanics you analyze — Lecture 9.
- `VizuaraAI/Mixture_of_Experts` — a minimal MoE built from scratch for routing/load-balance inspection — Lecture 9.
- `VizuaraAI/infertutor-arena-capstone` — Modal + vLLM + Qwen-VL served endpoint; a worked end-to-end serving capstone reference — Lecture 12.

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **SLM local assistant** — a quantized/distilled **on-device** RAG assistant shipped with a latency/cost eval — *Lectures 4–5*.
