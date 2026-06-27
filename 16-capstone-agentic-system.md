# Subject 16 — Capstone: Build & Ship an Agentic AI System

**Track:** Integration & Delivery · **Altitude:** All altitudes (Learner → Specialist, integrated) · **Format:** project studio (1h studio + self-directed build) · **Length:** two semesters (≈28 weeks), structured as **6 milestones**
**Prerequisites:** the full program. You should have already produced the reusable skills from Subjects 01–14 (foundations, deep learning, transformers/LLMs, RAG, fine-tuning, agents/MCP, RL, safety, LLMOps). This course does not teach new primitives — it makes you *integrate, ship, and operate* them.
**Pedagogy:** the source book's `prompt → workflow → skill → harness` ladder taken to its end state: a *production* harness. Every milestone follows the same rubric sections as the weekly courses (goals, build, harness/skill, failure modes, evidence, rubric table, assessment %) **adapted to milestones instead of lectures**. Modeled on the original *Agentic AI Capstone*, Harvard AC215 (5-milestone full-stack capstone), Berkeley's tiered agent build (Dawn Song), Krish Naik's end-to-end deployable projects, and Appendix-A capstone blueprints.

**The thesis of this course:** *evidence over demos.* A capstone is not a flashy notebook — it is a **monitored production system** plus an **evidence trail** (evals, safety review, ops dashboards, cost accounting) that proves the system works, is safe, and is operable by someone other than you.

**The recurring spine (all six milestones):** `problem framing → data/RAG → model/fine-tune → multi-agent system (MCP) → evals → safety review → LLMOps/AgentOps deploy → monitored production → final report + demo`. Each milestone advances this spine and re-uses skills from the whole program.

**What you leave with:** a deployed, monitored, eval-gated, safety-reviewed agentic system; a versioned repo with CI/CD; an evaluation harness; a safety case; an AgentOps dashboard; a cost/latency budget; and a final report + demo that an external reviewer (or employer) can audit.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 6 milestones (~18 contact hrs). Full time-boxed lecture plan: [`_toc/16-capstone-agentic-system-toc.md`](_toc/16-capstone-agentic-system-toc.md)._

1. **Milestone 1 — Proposal & Problem Framing**  ·  🔧 `$project-charter`
2. **Milestone 2 — Data, RAG & Prototype**  ·  🔧 `$rag-evaluator`
3. **Milestone 3 — Multi-Agent System with MCP + Fine-Tuning**  ·  🔧 `$agent-orchestrator`
4. **Milestone 4 — Evaluation Harness & Safety Review**  ·  🔧 `$eval-gate`
5. **Milestone 5 — LLMOps/AgentOps Production Deployment**  ·  🔧 `$agentops-deployer`
6. **Milestone 6 — Monitored Production, Final Report & Showcase**  ·  🔧 `$production-evidence-packet`

---

## How this course is graded (read first)

This is a **portfolio** course. The six milestones below sum to **100%**. Each milestone has an **acceptance checklist** (binary gates — you cannot pass the milestone until all are checked) and a **graded rubric table** (quality within the gate). Milestones are cumulative: later milestones re-grade earlier artifacts as the system evolves. A working-but-unevaluated system fails; an evaluated-but-unsafe system fails; a safe-but-unoperated system fails. The whole point is the *complete* lifecycle.

| Milestone | Title | Weight | Due |
|---|---|---|---|
| M1 | Proposal & Problem Framing | 10% | Sem 1, Wk 4 |
| M2 | Data, RAG & Prototype | 18% | Sem 1, Wk 10 |
| M3 | Multi-Agent System with MCP + Fine-Tuning | 20% | Sem 1, Wk 15 |
| M4 | Evaluation Harness & Safety Review | 20% | Sem 2, Wk 6 |
| M5 | LLMOps/AgentOps Production Deployment | 22% | Sem 2, Wk 11 |
| M6 | Monitored Production, Final Report & Showcase | 10% | Sem 2, Wk 14 |
| | **Total** | **100%** | |

---

## Milestone 1 — Proposal & Problem Framing

**Altitude:** Engineer → Specialist · **Anchor:** the decision your system improves and the user who feels it.

### Learning goals
- Frame a real problem an agentic system should solve, and state the decision/value it changes (not "build a chatbot").
- Define success metrics (task success, latency, cost, safety) *before* building, with target thresholds.
- Choose a track and architecture sketch; identify the riskiest assumption and how M2 will test it.
- Scope to "shippable in two semesters," naming what is explicitly out of scope.

### Build (the milestone deliverable)
- A **proposal doc**: problem, users, the decision improved, baseline (how it's done today), success metrics + targets, architecture sketch (agents, tools, data sources, MCP servers), data plan, risk register, and a kill-criterion.
- A 1-page **architecture diagram** and a `metrics.yaml` with target thresholds.
- A throwaway **feasibility spike**: the single riskiest call working end-to-end (e.g., one tool call through MCP, or one retrieval round-trip).

### Harness / reusable skill — `$project-charter`
- **Purpose:** turn a vague idea into a scoped, measurable agentic-system charter.
- **Inputs:** problem idea, users, constraints. **Required outputs:** decision-framing, success metrics + targets, architecture sketch, riskiest assumption + test plan, out-of-scope list, kill criterion.
- **Minimal workflow:** frame decision → name baseline → set metrics → sketch architecture → flag top risk. **Evidence artifact:** `M1/charter.md` + `metrics.yaml` + feasibility-spike log.

### Common failure modes
- **Solution-first framing** ("I want to use LangGraph") → no problem. *Fix:* start from the decision/user.
- **Unmeasurable success** → can't grade later. *Fix:* numeric targets in `metrics.yaml`.
- **Scope creep** → unshippable. *Fix:* explicit out-of-scope + kill criterion.
- **Untested riskiest assumption** → discovers infeasibility in M4. *Fix:* feasibility spike now.

### Evidence artifact
`M1/` (charter, metrics.yaml, architecture diagram, feasibility-spike log).

### Skill sink-in
Predict your riskiest assumption's outcome before the feasibility spike. Run the spike. Record whether the project is still viable and what you'd cut.

### Dataset / environment
Track-dependent (see **Example Capstone Tracks** below); the proposal must name a concrete primary dataset/source with a URL and license (e.g., a domain corpus on `huggingface.co`, an internal doc set, or a public API).

### Code stub
```yaml
# metrics.yaml — success defined before building
task_success_rate:   {target: 0.80, measure: "eval harness pass@1", gate: M4}
p95_latency_ms:      {target: 4000, measure: "load test",          gate: M5}
cost_per_task_usd:   {target: 0.05, measure: "token+infra accounting", gate: M5}
unsafe_action_rate:  {target: 0.01, measure: "safety red-team ASR", gate: M4}
groundedness:        {target: 0.90, measure: "RAG faithfulness judge", gate: M2}
```

### Graded rubric table
| Criterion | Excellent (A) | Adequate (C) | Failing |
|---|---|---|---|
| Framing | decision + user + baseline crisp | problem stated, no baseline | solution-first |
| Metrics | numeric targets for success/latency/cost/safety | partial metrics | vibes |
| Risk | riskiest assumption tested by spike | named, untested | none |
| Scope | shippable, out-of-scope + kill criterion | loose scope | unbounded |

### Assessment weight
**10%** (M1).

### Reading list
- Huyen, *AI Engineering* (2025), Ch. on problem framing & evaluation-driven development.
- Ng, "Machine Learning Yearning" (project scoping/metrics).
- Berkeley CS294 Agentic AI (Dawn Song, 2025), agent-build framing lectures.
- Source book, Appendix A (capstone blueprints) + Ch. 16 (projects into evidence).

---

## Milestone 2 — Data, RAG & Prototype

**Altitude:** Engineer · **Anchor:** the knowledge your agent must ground on, and a first end-to-end vertical slice.

### Learning goals
- Build the data/RAG layer: ingestion, chunking, embeddings, hybrid retrieval + reranking, and groundedness evaluation.
- Decide RAG vs long-context vs fine-tuning for *your* knowledge, with evidence.
- Ship a thin end-to-end prototype: user input → retrieval → single-agent response → measured groundedness.
- Establish data governance (sources, licenses, PII handling, freshness).

### Build
- A **RAG pipeline**: ingestion + chunking strategy, an embedding/vector store (Pinecone/Qdrant/pgvector/Weaviate), hybrid (BM25 + dense) retrieval, a reranker (Cohere/BGE), and a groundedness/faithfulness eval (Ragas-style).
- A **prototype** wiring retrieval into a single agent that answers real queries.
- A **data card**: sources, licenses, PII handling, refresh cadence.
- **Acceptance:** the prototype answers a held-out query set above the M1 groundedness target, and retrieval quality (recall@k / nDCG) is measured, not assumed.

### Harness / reusable skill — `$rag-evaluator`
- **Purpose:** measure and tune a retrieval/RAG layer end-to-end. **Inputs:** corpus, query set with references. **Outputs:** retrieval metrics (recall@k, nDCG), groundedness/faithfulness, hallucination rate, a tuning recommendation (chunking/rerank/hybrid weights).
- **Evidence artifact:** `M2/rag-eval/`.

### Common failure modes
- **Retrieval not measured** → blame the LLM for retrieval misses. *Fix:* measure recall@k first.
- **Chunking by default** → context fragmentation. *Fix:* test ≥2 chunking strategies.
- **No reranking** → relevant-but-buried docs. *Fix:* add a reranker, measure the lift.
- **License/PII blindness** → legal/privacy risk. *Fix:* data card before ingestion.
- **Groundedness unmeasured** → confident hallucinations. *Fix:* faithfulness judge on every answer.

### Evidence artifact
`M2/` (rag pipeline, rag-eval metrics, data card, prototype demo log).

### Skill sink-in
Predict recall@10 of your first retriever before measuring. Measure. Record the gap and which single change (chunking, hybrid, rerank) closed it most.

### Dataset / environment
Track-dependent corpus + **vector DB** (Pinecone / Qdrant / pgvector). Eval with **Ragas** — https://github.com/explodinggradients/ragas (Apache-2.0) and a labeled query set you build. Retrieval frameworks: **LlamaIndex** / **LangChain**.

### Code stub
```python
def rag_answer(query, retriever, reranker, llm, k=20, top=5):
    candidates = retriever.hybrid_search(query, k=k)        # BM25 + dense
    ranked = reranker.rerank(query, candidates)[:top]       # Cohere/BGE
    context = format_context(ranked)
    answer = llm.generate(system=GROUNDED_SYS, context=context, query=query)
    return answer, ranked                                   # ranked -> faithfulness eval
# metrics: recall_at_k(ranked, gold), ragas_faithfulness(answer, context)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Retrieval | recall@k + nDCG measured & tuned | measured, untuned | unmeasured |
| Groundedness | faithfulness ≥ target on held-out | measured, below target | unmeasured |
| Prototype | end-to-end slice runs on real queries | partial | broken |
| Governance | data card (sources/license/PII) complete | partial | none |

### Assessment weight
**18%** (M2).

### Reading list
- Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" (NeurIPS 2020).
- Es et al., "RAGAS: Automated Evaluation of Retrieval Augmented Generation" (EACL 2024).
- Asai et al., "Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection" (ICLR 2024).
- Krish Naik, "Enterprise Advanced RAG (Hybrid/ReRank/HyDE/CRAG/Self-RAG)" project notes (2025–2026).

---

## Milestone 3 — Multi-Agent System with MCP + Fine-Tuning

**Altitude:** Engineer → Specialist · **Anchor:** the orchestrated agents and tools that do the actual work.

### Learning goals
- Design a multi-agent architecture (orchestrator + specialists, or planner/solver/critic) with explicit responsibilities.
- Expose tools/resources via **MCP** (Model Context Protocol) and connect agents over it; reason about A2A where relevant.
- Decide and (if justified) execute a fine-tune (LoRA/QLoRA or preference optimization) for a capability RAG can't provide.
- Add agent memory and context engineering; control failure propagation across agents.

### Build
- A **multi-agent system**: an orchestrator coordinating specialist agents (e.g., retriever, tool-user, critic) built in **LangGraph / CrewAI / OpenAI Agents SDK / Claude Agent SDK**.
- **MCP servers** exposing your tools/data; the agents consume them through MCP clients (no bespoke glue).
- A justified **fine-tune** *or* a written decision memo proving fine-tuning is *not* yet warranted (with the RAG/prompting alternative that suffices).
- **Agent memory** (Mem0/LangMem or a vector store) + context-engineering strategy.
- **Acceptance:** the multi-agent system completes the core task end-to-end via MCP tools, with a documented agent topology and failure-isolation strategy.

### Harness / reusable skill — `$agent-orchestrator`
- **Purpose:** a reusable multi-agent orchestration + MCP-tooling scaffold with tracing. **Inputs:** task spec, agent roles, MCP tool servers. **Outputs:** running orchestrated system, per-agent traces, failure-isolation report, a fine-tune decision record.
- **Evidence artifact:** `M3/` (agent graph, MCP server specs, traces, fine-tune memo/run).

### Common failure modes
- **Agent sprawl** → 7 agents where 2 suffice. *Fix:* justify each agent's existence; merge.
- **Bespoke tool glue** → brittle, unportable. *Fix:* expose tools via MCP.
- **Fine-tune cargo-culting** → expensive, unnecessary. *Fix:* prove RAG/prompting insufficient first.
- **Error cascade** → one agent's failure poisons the chain. *Fix:* validation gates + retries + fallbacks between agents.
- **Context bloat** → cost/latency explosion. *Fix:* context-engineering (summarize, scope, prune).

### Evidence artifact
`M3/` (agent topology diagram, MCP server definitions, end-to-end traces, fine-tune decision record + run if done).

### Skill sink-in
Predict whether your task needs a fine-tune or just better RAG/prompting. Test the cheaper alternative first. Record the evidence that justified (or killed) the fine-tune.

### Dataset / environment
**MCP** (Model Context Protocol) — https://modelcontextprotocol.io/ ; orchestration via **LangGraph** / **Claude Agent SDK** / **OpenAI Agents SDK**; fine-tuning via **TRL/PEFT** + **Unsloth** on a task-specific dataset (track-dependent). Memory: **Mem0** / **LangMem**.

### Code stub
```python
# Orchestrator delegating to MCP-exposed specialist tools
from mcp import ClientSession
async def orchestrate(task, mcp_sessions, agents):
    plan = await agents["planner"].plan(task)
    state = {"task": task, "results": []}
    for step in plan:
        tool = mcp_sessions[step.server]                  # tools via MCP, not bespoke glue
        try:
            out = await tool.call_tool(step.tool, step.args)
            state["results"].append(validate(out, step))  # gate before passing on
        except ToolError as e:
            state["results"].append(agents["critic"].recover(step, e))  # failure isolation
    return await agents["synthesizer"].finalize(state)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Architecture | minimal justified agents; clean topology | works, some sprawl | tangled |
| MCP | tools exposed + consumed via MCP | partial MCP | bespoke glue |
| Fine-tune | justified (done or correctly declined) w/ evidence | done without justification | cargo-culted |
| Robustness | failure isolation + retries between agents | partial | cascades |

### Assessment weight
**20%** (M3).

### Reading list
- Anthropic, "Model Context Protocol" specification + "Building Effective Agents" (2024/2025).
- Wu et al., "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation" (2023).
- Hu et al., "LoRA: Low-Rank Adaptation of Large Language Models" (ICLR 2022).
- Krish Naik, "Agentic AI Specialization with AgentOps" (MCP + A2A, multi-framework) project notes (2025–2026).

---

## Milestone 4 — Evaluation Harness & Safety Review

**Altitude:** Specialist · **Anchor:** the eval and safety evidence that decides whether this system may ship.

### Learning goals
- Build an automated evaluation harness (task success, groundedness, regression suite) with LLM-as-judge + ground-truth checks.
- Make evals a **gate**: CI runs them, and a regression blocks merge/deploy.
- Run a safety review reusing Subject 14 skills: red-team (jailbreak + prompt injection), mitigations, residual-risk statement.
- Produce a system card and tie evals to the M1 metric targets.

### Build
- An **eval harness**: a curated test set, automated scorers (exact-match/tool-correctness + calibrated LLM-judge), and an **agent eval** (tau-bench/AgentDojo-style) for tool-use correctness and unsafe-action rate.
- **Eval-gated CI**: a regression run on every PR; a drop past threshold fails the build.
- A **safety review**: `$jailbreak-suite` + `$injection-redteam` against the system, ≥2 mitigations with quantified safety/utility tradeoffs, and a residual-risk statement.
- A **system card** documenting capabilities, limits, evals, and known risks.
- **Acceptance:** evals are reproducible and CI-gated; the system meets M1's task-success and unsafe-action targets (or documents the gap with a remediation plan).

### Harness / reusable skill — `$eval-gate`
- **Purpose:** a reusable, CI-integrated eval + safety gate. **Inputs:** system, test set, judge, safety red-team. **Outputs:** scorecard vs targets, regression diff, red-team ASR + mitigations, ship/no-ship verdict.
- **Evidence artifact:** `M4/` (eval scorecard, CI config, safety report, system card).

### Common failure modes
- **Demo-driven evaluation** → cherry-picked successes. *Fix:* held-out test set + aggregate metrics.
- **Uncalibrated judge** → meaningless scores. *Fix:* calibrate LLM-judge against human labels on a sample.
- **Evals not gating** → quality silently regresses. *Fix:* CI fails on regression.
- **Safety as an afterthought** → ships exploitable. *Fix:* red-team before deploy; quantify mitigations.
- **No residual-risk statement** → over-claims safety. *Fix:* explicit residual risk + monitoring plan.

### Evidence artifact
`M4/` (eval harness + scorecard, eval-gated CI run, safety red-team report, system card).

### Skill sink-in
Predict your system's task-success and jailbreak ASR before running the full harness. Run. Record both gaps and which mitigation you'll carry into production.

### Dataset / environment
A track-specific held-out eval set + **tau-bench** (https://github.com/sierra-research/tau-bench) / **AgentDojo** for agent/safety eval; **Inspect AI** / **DeepEval** / **LangSmith** for harness + tracing; **HarmBench** behaviors for red-team.

### Code stub
```python
def eval_gate(system, test_set, judge, redteam, targets):
    success = mean(judge(t, system.run(t.input)) == "pass" for t in test_set)
    asr     = redteam.attack_success_rate(system)              # jailbreak + injection
    scorecard = {"task_success": success, "unsafe_action_rate": asr}
    ship = all(scorecard[k] >= v if "success" in k else scorecard[k] <= v
               for k, v in targets.items() if k in scorecard)
    return {"scorecard": scorecard, "ship": ship}              # CI fails if not ship
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Eval rigor | held-out set + calibrated judge + CI gate | metrics, no gate | demo-only |
| Coverage | task + groundedness + agent + safety evals | task only | thin |
| Safety | ≥2 quantified mitigations + residual risk | red-team only | none |
| Traceability | scorecard maps to M1 targets | partial | unlinked |

### Assessment weight
**20%** (M4).

### Reading list
- Yao et al., "tau-bench" (Sierra, 2024); Debenedetti et al., "AgentDojo" (NeurIPS 2024).
- Zheng et al., "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" (NeurIPS 2023).
- UK AISI, "Inspect" evaluation framework docs (2024/2025).
- Mitchell et al., "Model Cards for Model Reporting" (FAccT 2019); Subject 14 safety-case readings.

---

## Milestone 5 — LLMOps/AgentOps Production Deployment

**Altitude:** Engineer → Specialist · **Anchor:** the running, observable, cost-bounded system in front of real (or shadow) traffic.

### Learning goals
- Containerize and deploy the system with CI/CD, an LLM gateway, semantic caching, and infra-as-code.
- Instrument full AgentOps observability: tracing, token/cost accounting, latency, per-agent metrics, and alerting.
- Implement safe-release practices: shadow mode, canary/rolling deploy, human-in-the-loop gates, and rollback.
- Meet the M1 latency and cost targets under load, with evidence.

### Build
- A **deployment**: Docker + (Kubernetes or serverless GPU: Modal/Replicate/Baseten/RunPod) + Terraform/IaC + a CI/CD pipeline that runs the M4 eval gate before promoting.
- An **LLM gateway** + **semantic cache** + rate limiting + fallback model routing.
- **Observability**: Langfuse/LangSmith/Arize Phoenix tracing; a dashboard with task success, p95 latency, cost/task, error rate, and per-agent breakdown; alerts on threshold breaches.
- **Safe rollout**: shadow mode against logged traffic, then canary; a documented rollback procedure; human-gate on high-impact actions (from Subject 14).
- **Acceptance:** the system serves traffic (real or shadow), meets M1 p95-latency and cost-per-task targets under a load test, and a rollback has been rehearsed.

### Harness / reusable skill — `$agentops-deployer`
- **Purpose:** a reusable deploy + observe + safe-release harness for agentic systems. **Inputs:** system, infra config, SLOs. **Outputs:** deployed service, CI/CD with eval gate, observability dashboard, load-test report, rollback runbook.
- **Evidence artifact:** `M5/` (IaC, CI/CD config, dashboard screenshots, load-test + cost report, rollback runbook).

### Common failure modes
- **"Works on my machine"** → no reproducible deploy. *Fix:* containerize + IaC.
- **No cost accounting** → surprise bills. *Fix:* per-task token+infra accounting on the dashboard.
- **Deploy without eval gate** → regressions to prod. *Fix:* CI runs `$eval-gate` before promote.
- **No rollback** → outages become incidents. *Fix:* rehearse rollback; document the runbook.
- **Unobserved agents** → silent failures in prod. *Fix:* trace every agent call; alert on anomalies.

### Evidence artifact
`M5/` (IaC + CI/CD, dashboard, load-test/cost report, shadow/canary logs, rollback runbook).

### Skill sink-in
Predict your p95 latency and cost-per-task under load before the load test. Run it. Record the gap and the cheapest optimization (caching, routing, batching) that closed it.

### Dataset / environment
Infra: **Docker**, **Kubernetes** or **Modal/Replicate/Baseten/RunPod**, **Terraform**; gateway/cache: **LiteLLM** / **Portkey** + semantic cache; observability: **Langfuse** (https://langfuse.com/) / **LangSmith** / **Arize Phoenix**; serving: **vLLM** for self-hosted models. Load test: **Locust** / **k6**.

### Code stub
```yaml
# .github/workflows/deploy.yml — eval-gated promotion
jobs:
  deploy:
    steps:
      - run: pytest tests/                       # unit
      - run: python eval/run_gate.py --targets metrics.yaml   # $eval-gate (M4)
      - run: terraform apply -auto-approve       # IaC
      - run: python ops/canary.py --traffic 5    # 5% canary
      - run: python ops/watch_slo.py --p95 4000 --error 0.02  # auto-rollback on breach
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Deploy | IaC + CI/CD + eval-gated promotion | deploys, no gate | manual only |
| Observability | full dashboard + alerts + per-agent traces | basic logging | none |
| SLOs | meets latency+cost targets under load test | measured, misses target | untested |
| Safe release | shadow/canary + rehearsed rollback | canary only | none |

### Assessment weight
**22%** (M5).

### Reading list
- Huyen, *Designing Machine Learning Systems* (2022) + *AI Engineering* (2025), deployment/monitoring chapters.
- Harvard AC215/E115, "MLOps, LLMOps & AIOps" full-stack deployment milestones (2025).
- Langfuse / LangSmith / Arize Phoenix production observability docs (2025–2026).
- Krish Naik, "LLMOps Industry Projects" + "AI GitHub PR Reviewer (Celery, Prometheus/Grafana, Langfuse)" notes.

---

## Milestone 6 — Monitored Production, Final Report & Showcase

**Altitude:** All altitudes (integrated) · **Anchor:** proof the system runs in the wild and the story that ties it together.

### Learning goals
- Operate the system in monitored production for a sustained window; respond to at least one real (or injected) incident.
- Detect and report drift/regression from live data; close the loop with a data/eval update.
- Produce a final report where every claim links to an artifact, plus a live demo and a handoff runbook.
- Reflect on the full lifecycle: what the evidence shows, what is still risky, and what you'd do next.

### Build
- A **production-monitoring window** (≥2 weeks): live (or replayed) traffic with the M5 dashboard; an **incident log** for ≥1 incident (triggered or injected) with detection → response → postmortem.
- A **drift/regression report**: monitor live quality (judge sampling), flag drift, and ship one closed-loop fix (data refresh or eval update).
- A **final report** (8–12 pages): problem → architecture → data/RAG → agents/MCP → fine-tune decision → evals → safety case → ops → results vs M1 targets → limitations → next steps. Every claim cites a file.
- A **handoff runbook** so someone else can operate it, and a **live demo**.
- **Acceptance:** the system survived the monitoring window, ≥1 incident has a postmortem, results are reported against M1 targets honestly, and the report is fully artifact-linked.

### Harness / reusable skill — `$production-evidence-packet`
- **Purpose:** assemble charter + RAG eval + agent traces + eval scorecard + safety case + ops dashboard + incident log into one auditable bundle. **Evidence artifact:** the packet + final report (this *is* the deliverable).

### Common failure modes
- **Demo-day theater** → looks great, no operational evidence. *Fix:* the monitoring window + incident log.
- **Cherry-picked results** → hide failures. *Fix:* report vs M1 targets, including misses.
- **No handoff** → bus-factor of one. *Fix:* runbook someone else can follow.
- **No reflection** → no learning. *Fix:* limitations + defended next steps.
- **Drift ignored** → silent decay. *Fix:* live quality sampling + a closed-loop fix.

### Evidence artifact
`M6/` + the full `capstone/` packet (charter through incident postmortem) + final report + demo recording + handoff runbook.

### Skill sink-in
Before the monitoring window, predict where the system will first break in production. Watch. Record whether you were right and what the postmortem changed about your design.

### Dataset / environment
Live or replayed production traffic for your track; monitoring via the M5 stack (Langfuse/LangSmith/Phoenix); drift detection via judge-sampling on live outputs.

### Code stub
```python
# Live drift monitor: sample production traffic, judge, alert on regression
def monitor_drift(prod_logs, judge, baseline_quality, window=200, drop=0.05):
    sample = reservoir_sample(prod_logs, window)
    live_quality = mean(judge(x.input, x.output) == "pass" for x in sample)
    if baseline_quality - live_quality > drop:
        open_incident(f"quality drift {baseline_quality:.2f}->{live_quality:.2f}")
        return {"drift": True, "live_quality": live_quality}
    return {"drift": False, "live_quality": live_quality}
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Operation | survived window + incident postmortem + drift fix | window only | no live evidence |
| Reporting | every claim→artifact; honest vs M1 targets | most linked | demo only |
| Handoff | runbook others can follow + demo | partial runbook | none |
| Reflection | limitations + defended next steps | listed | absent |

### Assessment weight
**10%** (M6).

### Reading list
- Sculley et al., "Hidden Technical Debt in Machine Learning Systems" (NeurIPS 2015).
- Google, "Site Reliability Engineering" — incident response & postmortems (selected).
- Shankar et al., "Operationalizing Machine Learning: An Interview Study" / "Who Validates the Validators?" (2022–2024).
- Source book Ch. 16 (projects into evidence) + Appendix A (capstone blueprints).

---

## Example Capstone Tracks (choose one; 6–8 options)

Each track names a concrete problem, a primary dataset/source, and the integration emphasis. All must pass the same six milestones.

1. **Enterprise Agentic RAG Assistant.** A support/knowledge assistant over a company's docs + ticketing. Emphasis: hybrid RAG + reranking, MCP tools (search, ticket actions), groundedness evals, PII governance. *Data:* an internal doc corpus or a public substitute (e.g., a product-docs dump on Hugging Face).
2. **Autonomous Research Agent.** A deep-research agent that plans, searches, reads, and writes a cited report. Emphasis: planner/solver/critic multi-agent, long-horizon eval, hallucination/citation-faithfulness, cost control. *Data:* web + a domain paper corpus (e.g., arXiv subset).
3. **Coding-Agent Product.** A repo-aware agent that fixes issues / reviews PRs and runs tests. Emphasis: tool sandboxing, SWE-bench-style eval, safety (no destructive actions), CI integration. *Data:* **SWE-bench Verified** (https://github.com/SWE-bench/SWE-bench) instances or your own repos.
4. **Domain Vertical Agent — Healthcare/Legal/Finance.** A regulated-domain assistant with strict grounding + compliance. Emphasis: groundedness, refusal/escalation policy, EU-AI-Act/NIST mapping, human-in-the-loop. *Data:* a domain corpus (e.g., **PubMedQA**, **CUAD** contracts, or SEC filings) with documented licensing.
5. **Voice/Multimodal Customer Agent.** A real-time voice or vision+text agent. Emphasis: streaming latency SLOs, ASR/TTS integration, multimodal grounding, cost/latency budget. *Data:* a domain knowledge base + audio (e.g., a public support-call dataset).
6. **Data/Analytics Agent (Text2SQL + BI).** An agent that answers analytical questions over a database. Emphasis: Text2SQL correctness eval, guardrails on destructive queries, query-cost control. *Data:* **Spider/BIRD** Text2SQL benchmark (https://yale-lily.github.io/spider) + a sample warehouse.
7. **Embodied / Robotics Agent (sim).** A task-planning agent driving a simulated robot (bridges Subject 13). Emphasis: VLA/policy integration, closed-loop eval, safety constraints, sim-to-real discussion. *Data:* **LeRobot** datasets + a sim env (ManiSkill/MuJoCo).
8. **Workflow Automation Agent (Ops/DevOps).** An agent that triages alerts / automates runbooks with strict authorization. Emphasis: least-privilege tool authz, incident-response eval, audit trail, rollback. *Data:* synthetic + real ops logs; tools via MCP.

---

## Course-level Assessment & grading

| Component | Weight |
|---|---|
| M1 — Proposal & Problem Framing | 10% |
| M2 — Data, RAG & Prototype | 18% |
| M3 — Multi-Agent System with MCP + Fine-Tuning | 20% |
| M4 — Evaluation Harness & Safety Review | 20% |
| M5 — LLMOps/AgentOps Production Deployment | 22% |
| M6 — Monitored Production, Final Report & Showcase | 10% |
| **Total** | **100%** |

> Each milestone is gated by a binary **acceptance checklist** (must be fully checked to pass) and scored within the gate by its **rubric table**. Milestones are cumulative: M4–M6 re-grade earlier artifacts as the system matures. Cross-cutting expectations graded inside every milestone: reproducibility (seeds/configs/IaC committed), evidence-linking (every claim → a file), and honest reporting against M1 targets.

## Tooling & environment (June 2026)
- **Languages/core:** Python 3.12, **PyTorch 2.5+**, Hugging Face **Transformers / TRL / PEFT**, **Unsloth** (fine-tune).
- **Agents/orchestration:** **LangGraph**, **CrewAI**, **OpenAI Agents SDK**, **Claude Agent SDK**, **AutoGen**; **MCP** (tools/resources) + **A2A** where relevant.
- **RAG/retrieval:** **LlamaIndex / LangChain**, vector DBs **Pinecone / Qdrant / pgvector / Weaviate**, rerankers **Cohere Rerank / BGE**; eval **Ragas**.
- **Eval/observability:** **Inspect AI**, **DeepEval**, **LangSmith**, **Langfuse**, **Arize Phoenix**, **tau-bench / AgentDojo**; LLM-as-judge (cross-family, calibrated).
- **Safety:** Subject 14 stack — **HarmBench**, **nanoGCG**, **Llama Guard**, **NeMo Guardrails**, EU AI Act / NIST RMF / OWASP LLM Top-10.
- **Serving/infra:** **vLLM**, **Docker**, **Kubernetes** or serverless GPU (**Modal / Replicate / Baseten / RunPod**), **Terraform**, **LiteLLM/Portkey** gateway + semantic cache; load test **Locust/k6**.
- **Models:** a frontier API (Claude / GPT-5.x / Gemini class) for top-line quality + open-weight (`Qwen3`, `Llama-4`-class, `DeepSeek`) for self-hosting/fine-tuning and cost control.

## Capstone-of-the-program acceptance checklist (the final gate)
☐ M1 charter with numeric targets in `metrics.yaml` · ☐ M2 RAG eval (recall@k + groundedness) + data card · ☐ M3 multi-agent system with tools via **MCP** + justified fine-tune decision · ☐ M4 eval-gated CI + safety red-team (≥2 mitigations) + system card · ☐ M5 deployed with IaC/CI-CD, observability dashboard, SLOs met under load, rehearsed rollback · ☐ M6 ≥2-week monitoring window + ≥1 incident postmortem + drift fix · ☐ final report where **every claim links to an artifact** · ☐ handoff runbook + live demo · ☐ full `$production-evidence-packet` assembled.

## Skills produced (the program-wide harness, completed)
`$project-charter` · `$rag-evaluator` · `$agent-orchestrator` · `$eval-gate` · `$agentops-deployer` · `$production-evidence-packet` — composed with every skill from Subjects 01–14 (`$baseline-builder`, `$evaluation-review`, `$preference-tuner`, `$rlvr-trainer`, `$threat-modeler`, `$jailbreak-suite`, `$injection-redteam`, `$safety-case-builder`, …) into one production harness.
