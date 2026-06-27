# AI Agents & AI-First Software Engineering

**Merged subject (one academic quarter-track).** This subject combines several closely related modules, each a self-contained Part with its own lectures, hands-on builds, practical projects, State-of-the-Art notes, and assessment. Parts in this subject:

- **Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)**
- **Part B — AI-First Software Development**

## 📑 Detailed table of contents
_One academic quarter-track · 3 lecture-hrs/week · **24 lectures** across **2 parts**. Time-boxed plan: [`_toc/03-ai-agents-and-ai-first-software-toc.md`](_toc/03-ai-agents-and-ai-first-software-toc.md)._

### Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)
1. **Week 1 — Agent Anatomy and the Agent Loop** — The agent loop · Planner vs controller · Critic / verifier · Workflow vs agent (the autonomy dial) · Tools as the action space  ·  ▶ `The-Pocket/PocketFlow` · 🔧 `$agent-anatomy-map`
2. **Week 2 — Function Calling, Tool Schemas, and Structured Outputs** — Tool schema · Description as prompt · Structured outputs / constrained decoding · Tool granularity & idempotency · Errors as observations  ·  ▶ `anthropics/anthropic-cookbook` · 🔧 `$tool-schema-designer`
3. **Week 3 — MCP: Build a Model Context Protocol Server (original module)** — Why MCP (the "USB-C for tools" framing) · Three primitives · Client–server–host · Transport & capability negotiation · The trust boundary · Audit logging & tool overreach  ·  ▶ `modelcontextprotocol/servers` · 🔧 `$mcp-server-scaffold`
4. **Week 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion** — ReAct · Plan-and-execute · Reflexion / self-refine · Test-time compute as a dial · Verifier vs generator  ·  ▶ `NirDiamant/GenAI_Agents` · 🔧 `$reasoning-strategy-picker`
5. **Week 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem** — Working vs long-term memory · Episodic / semantic / procedural · Memory write policy · Retrieval policy · Forgetting / decay & conflict  ·  ▶ `krishnaik06/RAG-Tutorials` · 🔧 `$agent-memory-designer`
6. **Week 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK** — Graph / state machine (LangGraph) · Agent SDK runtimes (Claude Agent SDK, OpenAI Agents SDK) · Role-based crews (CrewAI) · Conversational multi-agent (AutoGen) · Typed agents (Pydantic AI) & Google ADK · The meta-point:  ·  ▶ `krishnaik06/Agentic-LanggraphCrash-course` · 🔧 `$framework-selector`
7. **Week 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate** — When multi-agent helps · Orchestrator + specialists · A2A protocol · Multi-agent debate / critic · Cost/latency multiplication  ·  ▶ `microsoft/ai-agents-for-beginners` · 🔧 `$multi-agent-architect`
8. **Week 8 — Computer-Use and Browser Agents** — Perception → action loop · Grounding strategy: pixels vs DOM/a11y · Set-of-marks / element tagging · Verification after action · API > GUI when possible  ·  ▶ `web-arena-x/webarena` · 🔧 `$browser-agent-debugger`
9. **Week 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k** — Task success check · Simulated user · pass^k vs pass@k · Failure taxonomy · Eval-gated deploys  ·  ▶ `sierra-research/tau-bench` · 🔧 `$agent-eval-suite`
10. **Week 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop** — Tracing / spans · Cost & latency accounting · Guardrails · Human-in-the-loop gates · AgentOps lifecycle  ·  ▶ `langfuse/langfuse` · 🔧 `$agentops-instrumenter`
11. **Week 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10** — Direct vs indirect injection · Why agents are uniquely exposed · Least-privilege & privilege separation · Tool/MCP poisoning & confused deputy · Defense in depth  ·  ▶ `ethz-spylab/agentdojo` · 🔧 `$agent-red-team`
12. **Week 12 — Capstone: Deploy a Multi-Agent System with an MCP Server**  ·  ▶ `langchain-ai/langchain` · 🔧 `$agent-system-evidence-packet`

### Part B — AI-First Software Development
1. **Week 1 — How Coding LLMs Actually Work (a usable mental model)** — Next-token prediction over code · Context window & code tokenization · Lost in the middle · Capability vs grounding · Determinism & temperature  ·  ▶ `microsoft/generative-ai-for-beginners` · 🔧 `$coding-model-profile`
2. **Week 2 — Prompt Engineering for Developers: Specs, Context, and PRDs** — Spec over wish · Acceptance tests in the prompt · Context curation & ordering · Few-shot from your repo · PRD as shared source of truth  ·  ▶ `VizuaraAI/modern-software-developer-bootcamp` · 🔧 `$spec-to-prd`
3. **Week 3 — Building a Coding Agent From Scratch** — The coding-agent loop · Diff/patch edits vs full rewrites · Verification as the inner loop · Localization (find the right file) · Stop rule & budgets  ·  ▶ `Aider-AI/aider` · 🔧 `$coding-agent-loop`
4. **Week 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources** — Repo indexing & retrieval · @-mentions & manual context · Rules / conventions files · PRDs/schemas as MCP resources · Context cost/quality trade-off  ·  ▶ `modelcontextprotocol/servers` · 🔧 `$project-context-pack`
5. **Week 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates** — Autonomy spectrum · Plan-approval checkpoint · Irreversible-action gates · Small reversible steps · Sandboxing & scoped permissions  ·  ▶ `anthropics/anthropic-cookbook` · 🔧 `$autonomy-gate-designer`
6. **Week 6 — The Modern AI Terminal and Sandboxing** — AI terminal · Why sandbox · Sandbox dimensions · Ephemeral sandboxes (E2B / cloud) · Allow-listed commands  ·  ▶ `krishnaik06/Dockers` · 🔧 `$agent-sandbox-config`
7. **Week 7 — AI-Generated Tests and Test Quality** — Coverage ≠ quality · Mutation testing · Property-based testing · AI-assisted TDD · Test independence from the implementer  ·  ▶ `evalplus/evalplus` · 🔧 `$ai-test-hardener`
8. **Week 8 — AI Security and Secure "Vibe Coding"** — Why AI code is insecure · SAST · Secret scanning · DAST · Dependency/supply-chain scanning  ·  ▶ `juice-shop/juice-shop` · 🔧 `$secure-code-gate`
9. **Week 9 — AI Code Review Gates** — AI vs human review division of labor · Reviewer grounding · Signal vs noise · Review as a gate, not advice · Self-review prompt for the author  ·  ▶ `openai/openai-cookbook` · 🔧 `$ai-review-gate`
10. **Week 10 — Automated UI and App Building** — Generative UI · Reconciliation · Visual feedback loop · Component/E2E verification · Prototype vs keep  ·  ▶ `shadcn-ui/ui` · 🔧 `$ui-reconcile`
11. **Week 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation** — Observability for shipped features · SLOs & alerts · Feature flags + canary + rollback · AI-assisted incident response · SWE-bench-style self-evaluation  ·  ▶ `krishnaik06/mlproject` · 🔧 `$ai-incident-runbook`
12. **Week 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent**  ·  ▶ `krishnaik06/Deployment-flask` · 🔧 `$ai-delivery-evidence-packet`



## How the book's skills are leveraged in this subject

This subject is taught with the reusable **reader-skills** from *Harnessing LLM Skills to Master Machine Learning* (Appendix B) — each a small "machine for repeatable thinking" invoked as `$skill-name`. They are applied exactly where this subject needs them, alongside the program's own `$skills`. The book's learning loop — **concept → code → critique → reflection → rebuild** — and the **prompt → workflow → skill → harness** ladder structure every lecture's build and critique.

| Book reader-skill | Book ch. | How it is leveraged in this subject |
|---|---|---|
| `$ml-problem-framer` | 3 | Both parts — frame the *decision* the agent supports and the prediction moment before building. |
| `$ml-adaptation-decision` | 10 | Part A — when an agent/tool-loop is justified vs a simpler prompt or workflow. |
| `$ml-evaluation-review` | 6 | Both parts — agent evaluation (tau-bench/pass^k, SWE-bench), what the headline number hides. |
| `$ml-risk-review` | 15 | Part A security + Part B secure-vibe-coding: failure surfaces, prompt-injection, human-review effectiveness. |
| `$ml-launch-readiness` | 14 | Both parts — agents/apps post-deployment: monitoring, rollback, human-in-the-loop gates. |

---


## Krish Naik real-world projects for this subject

End-to-end, deployable projects from [krishnaik.in/projects](https://www.krishnaik.in/projects) that fit this subject — use one as the **capstone-grade option** for the matching lecture's hands-on lab. Full 79-project list and cross-subject mapping: [`KRISHNAIK-WEBSITE-PROJECTS.md`](KRISHNAIK-WEBSITE-PROJECTS.md).

- **Advanced AI GitHub PR Code Reviewer** — Agentic AI · LangGraph/GPT-4o-mini/FastAPI/Celery/Redis/Prometheus/Grafana/Langfuse — *AI-First SWE · code review*
- **AI Travel Planner with GCP, ELK Stack, DeepEval** — Agentic AI · GCP/ELK/LLMs/DeepEval — *Agents*
- **Stateful Agentic AI with LangGraph and Llama 3** — Agentic AI · LangGraph/Groq/Llama 3 — *Agents · memory*
- **Autonomous Blog Generation Agent (LangGraph & FastAPI)** — Agentic AI · LangGraph/FastAPI/DAG — *Agents*
- **Gen AI Clothing Store with Pydantic AI** — Pydantic AI/AWS CI-CD — *Agents · typed*
- **Insurance Claim Support AI Agent (LangMem + RAG)** — Mem0/RAG/tool-calling — *Agents · memory*
- **Customer Support Agent with Memory & Tool Calling** — RAG/Mem0/ChromaDB/FastAPI/EC2 — *Agents*
- **Real-Time Voice AI Agent with RAG** — voice/vector DB/low-latency — *Agents*
- **Pipecat AI Interview Coach (real-time voice)** — voice/avatar/full-stack — *Agents*
- **Smart Attendance Portal (Supabase)** — Streamlit/Supabase — *app build*
- **Realtime Source Code Analyzer** — RAG/vector store/conversational memory — *AI-First SWE*
- **Personal AI Voice Assistant (Gemini)** — Streamlit/TTS/STT — *app*
- **AI Web App with LLM Fine-Tuning + CI/CD + Vibe-Coding** — Azure AI Foundry/React/AWS CodePipeline — *AI-First SWE*
- **YouTube Content Creation Agent** — Streamlit/real-time search/LLMs — *Agents*
- **Telegram Chatbot** — Telegram API/Gemini/GPT — *app*
- **Personalized Holiday Management Agent** — multi-agent/real-time validation — *multi-agent*
- **Automated Candidate Interview & Evaluation** — agentic AI/LLMs — *Agents*
- **Resume Genie Career Suite** — Streamlit/AWS EC2 — *app*
- **Google ADK: Build & Deploy AI Agents** — Google ADK/REST/Cloud Run — *Agents · ADK*
- **MCP with AutoGen + Notion** — MCP/AutoGen/Flask/ngrok — *Agents · MCP*
- **AutoGen Data Analyzer GPT** — AutoGen/multi-agent/viz — *multi-agent*
- **Neural-Semantic Matching Protocol (MCP)** — LLMs/MCP — *Agents · MCP*
- **Notion ReAct Planner Agent** — ReAct/Notion API — *Agents · ReAct*
- **Multi-Agent Quantitative Analysis (Azure)** — FastAPI/Streamlit/Azure PostgreSQL/Blob — *multi-agent*
- **Automated YouTube Mixtape Creation** — FastAPI/Streamlit/audio — *app*
- **Azure Multi-Modal Compliance Orchestration (LangGraph, LangSmith)** — Azure Video Indexer/AI Search/OpenAI — *Agents*

---

# Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)

**Track:** Engineering · **Altitude:** Engineer · **Length:** 12 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** comfortable Python; Subject 04 (LLM application building) or equivalent — you can call an
LLM API, write a prompt, and parse JSON. You do **not** need to have built an agent before. No RL required.
**Pedagogy:** the program's `concept → code → critique → reflection → rebuild` loop applied to *systems*, not
models. You spend the course on the harness-engineering rungs `prompt → workflow → skill → harness`: by Week 3
you stop hand-writing tool glue and start *exposing* tools over a protocol; by Week 10 you stop eyeballing agent
runs and start *gating* them on evals and traces. Heavy debt to **Berkeley CS294 Agentic AI (Dawn Song, Fall
2025)**, **Stanford CS329A**, and **Krish Naik's Agentic-AI-with-AgentOps** track, with from-scratch builds in
the Vizuara spirit.

**Course anchor case (carried all 12 weeks):** *"Atlas" — an enterprise travel & expense (T&E) operations
agent.* It answers employee questions ("can I expense this?"), books trips against a policy, files expense
reports, and escalates exceptions to a human. It is realistic enough to need every topic — tools, MCP, memory,
planning, multiple specialists, evaluation, cost control, guardrails, and prompt-injection defense — and small
enough to actually ship. A second throwaway case, *a research/coding assistant*, is used where a single-domain
example is clearer (e.g., browser agents, debate).

**What you leave with:** a deployed multi-agent system with a custom **MCP server**, a memory layer, an
**A2A**-style orchestrator, a `tau-bench`-style eval suite wired into CI, a Langfuse dashboard, and a
**reusable agent-engineering harness** of nine skills (`$tool-schema-designer` … `$agent-incident-review`).

> Two pedagogical notes the program insists on. **(1) MCP is taught explicitly.** As of mid-2026 the Model
> Context Protocol is the de-facto standard for exposing tools/resources/prompts to agents and is GA in
> VS Code, Copilot, Claude Desktop, and the major SDKs — yet it is still *absent by name* from university
> agent syllabi (they cover it implicitly under "tool use / function calling"). Week 3 is an original
> build-a-server module. **(2) Provider-current.** When the labs name a model, default to the latest capable
> Claude (Opus 4.x / Sonnet 4.x with extended thinking); the patterns are provider-neutral and the eval suite
> runs against any function-calling model.

---


## Course-level Assessment & grading

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly labs (W1–W11, weighted below) | 75% | the agent-engineering skill ladder, one artifact per week |
| Capstone (W12): deployed multi-agent + MCP system | 25% | end-to-end judgment: build, evaluate, secure, operate |

Weekly lab weights (sum to the 75%): W1 5 · W2 6 · W3 8 · W4 7 · W5 7 · W6 6 · W7 8 · W8 6 · W9 8 · W10 7 · W11 7.
Capstone 25. **Total = 100%.** Each week's deliverable is graded on the rubric table in its section. Labs are
individual; the capstone may be done solo or in a pair (pairs are graded on a higher acceptance bar).

## Tooling & environment (June 2026)

- **Language/runtime:** Python 3.12, `uv` for envs, `ruff` + `pyright` in CI. Node 22 for the MCP TypeScript option.
- **Models:** Claude Opus 4.x / Sonnet 4.x (extended thinking) as default; one open-weight fallback
  (Llama 4 or Qwen 3 via vLLM/Ollama) so every lab runs without a single vendor.
- **Agent frameworks:** **LangGraph 0.3+**, **OpenAI Agents SDK**, **Claude Agent SDK**, **CrewAI**, **AutoGen
  v0.4+**, **Pydantic AI**, **Google ADK**. You will use several deliberately — the course teaches the
  *abstractions*, not one vendor's API.
- **Protocols:** **MCP** (`modelcontextprotocol` Python SDK + `fastmcp`), **A2A** (Google A2A spec + sample server).
- **Memory:** **Mem0**, **LangMem**, plus a raw `pgvector`/Chroma baseline you build by hand.
- **Eval & observability:** **tau-bench / tau2-bench**, **Inspect AI** (UK AISI), **DeepEval**, **Ragas** (for
  retrieval steps), **Langfuse** (self-host) + **LangSmith** (managed) for tracing.
- **Guardrails/security:** **NeMo Guardrails**, **Guardrails AI**, **Llama Guard 3**, OWASP LLM Top-10 (2025) test set.
- **Infra:** Docker, a single small cloud box or **Modal** for serverless GPU/inference, GitHub Actions for eval-gated CI.

## Capstone spec (preview; full rubric in Week 12)

Ship **Atlas** as a deployed multi-agent system with: (a) at least one **custom MCP server** wrapping the
expense/policy "backend"; (b) an **orchestrator + ≥2 specialist agents** communicating in an A2A-style contract;
(c) a **memory layer** (short-term scratch + long-term user/policy memory); (d) a **≥40-task eval suite** in the
tau-bench style with a pass^k metric, run in CI as a deploy gate; (e) **Langfuse tracing** with per-run cost and
latency; (f) **guardrails + a prompt-injection regression test** that your system passes. Acceptance = the eval
gate is green on a held-out task split, every agent action is traced, and a documented injection attack is blocked.

---

## Week 1 — Agent Anatomy and the Agent Loop

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** stand up "Atlas v0" — a single agent that answers one T&E question by calling one fake tool in a loop.

### Learning goals
- Define an LLM agent as a **control loop over an LLM + tools + memory + a stopping rule**, not "a smart prompt."
- Name and draw the five organs — **planner, controller (policy), tools, memory, critic** — and say what each owns.
- Implement the bare agent loop (observe → think → act → observe) from scratch with no framework.
- State the difference between a *workflow* (fixed control flow) and an *agent* (LLM-decided control flow), and when each is correct.

### Concept map
- **The agent loop.** *Formula:* `aₜ = π(sₜ)`, `sₜ₊₁ = sₜ ⊕ obs(aₜ)`. *Symbols:* `sₜ`=state (the running
  transcript + scratchpad), `aₜ`=action (a tool call or a final answer), `π`=the LLM-as-policy, `obs`=tool result.
  *Shapes:* `s` is a token sequence that grows each turn; `a` is a structured object `{tool, args}`. *Plain English:*
  the model looks at everything so far, picks one action, you run it, append the result, repeat until it answers.
  *Tiny example:* state="can I expense a $30 client lunch?" → action=`get_policy("meals")` → obs="≤$75 ok" →
  action=final("Yes."). *Code mapping:* a `while` loop that calls the model, parses a tool call, dispatches it,
  appends the result. *Common mistake:* no stopping rule → infinite tool-calling; always cap steps and detect "done."
- **Planner vs controller.** Plain English: the *planner* decides *what sequence of things* to attempt; the
  *controller/policy* decides *the next single action* given the plan and state. Where it matters: small tasks
  need no planner (controller-only / ReAct); long tasks need an explicit plan (Week 4). Common mistake: conflating
  them, so the agent re-plans from scratch every step and loops.
- **Critic / verifier.** Plain English: a separate check that asks "is this action/answer actually good?" before
  committing. Where it matters: it's the single biggest reliability lever (Weeks 4, 9). Common mistake: letting the
  actor grade its own homework with no independent signal.
- **Workflow vs agent (the autonomy dial).** Plain English: if you can draw the flowchart in advance, write a
  workflow; only hand control to the LLM where the branching genuinely depends on content. Common mistake:
  "agentifying" a task that is really a 3-step script — you pay latency, cost, and nondeterminism for nothing.
- **Tools as the action space.** The agent can only do what its tools let it do; tool design *is* capability design (Week 2).

### Hands-on build (the lab)
- `atlas/loop.py`: a from-scratch agent loop (no LangGraph yet). One model call per turn; parse a JSON tool call;
  dispatch against two fake tools (`get_policy`, `get_employee`); cap at 6 steps; detect a final answer.
- Run 10 hand-written T&E questions; log each turn's `(state-len, action, obs)` to `evidence/week01-trace.jsonl`.
- **Deliverable:** a runnable loop + a one-page "agent vs workflow" decision note for three Atlas tasks (which
  should be a script, which a real agent, and why). **Acceptance:** loop terminates on all 10 questions, never
  exceeds the step cap, and the note correctly classifies at least 2 of 3 tasks with justification.

▶ **Practical project:** `The-Pocket/PocketFlow` — study and extend a ~100-line agent framework to internalize the bare observe→think→act loop before any heavyweight framework.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local `uv` env (Python 3.12) + `anthropic` SDK + `git clone The-Pocket/PocketFlow`; key in `.env`.
2. Read PocketFlow's node/flow core, then write `atlas/loop.py` as a bare while-loop: model call → parse JSON action → dispatch.
3. Add two fake tools (`get_policy`, `get_employee`) and a 6-step cap with explicit done-detection.
4. Log `(step, state_len, action, obs)` per turn to `evidence/week01-trace.jsonl`.
5. Run the 10 hand-written T&E questions; confirm termination on all.
6. Write the "agent vs workflow" autonomy note for three Atlas tasks.
- **Artifact:** runnable `atlas/loop.py` + `trace.jsonl` committed; a Colab that replays one question.
- **Use `$agent-anatomy-map`:** fill the five organs + stop rule before coding.
- **Done when:** loop terminates on all 10, never exceeds the cap, every turn is logged.
- **Stretch:** swap in an open-weight model (Qwen3 via Ollama) and compare loop behavior.

### Harness / reusable skill — `$agent-anatomy-map`
- **Purpose:** before building any agent, force a one-screen design that names each organ and the stopping rule.
- **Inputs:** a task description. **Required outputs:** the five organs filled in (planner? controller, tools,
  memory, critic?), the action space, the stop condition, and the **autonomy verdict** (workflow vs agent).
- **Minimal workflow:** describe task → list tools → pick control style → define "done" → name the failure that
  ends the loop. **Evidence artifact:** `evidence/week01-anatomy.md`.

### Common failure modes
- **No stopping rule** → infinite or runaway loops. *Fix:* step cap + explicit done-detection + cost budget.
- **Premature agentification** → nondeterministic mess for a task a script would nail. *Fix:* the autonomy verdict first.
- **Hidden state in prompts** → you can't tell what the agent "knew." *Fix:* make state an inspectable object you log.
- **Actor-as-critic** → confident wrong answers. *Fix:* plan to add an independent check (flagged for Week 4/9).

### Evidence artifact
`evidence/week01-trace.jsonl` (per-turn log) + `evidence/week01-anatomy.md` (the design map and autonomy verdict).

### Skill sink-in
Before running, **predict** the average number of tool calls per question. Run the 10. Record the **result** and
what **changed** about your sense of "how much thinking a one-line question needs."

### Dataset / benchmark
Bootstrap from **τ-bench (`tau-bench`)**, `airline` + `retail` domains, `sierra-research/tau-bench` (GitHub, MIT
license; ~hundreds of tool-agent-user tasks with a simulated user and DB). This week, **read** 10 airline tasks and
adapt their style into your hand-written T&E set; you'll run the real harness in Week 9.

### Code stub
```python
# atlas/loop.py — bare agent loop, no framework
import json
from anthropic import Anthropic  # default provider; swap for any function-calling model

client, MODEL, MAX_STEPS = Anthropic(), "claude-sonnet-4-6", 6
TOOLS = {"get_policy": get_policy, "get_employee": get_employee}  # plain Python fns

def run(question: str) -> str:
    state = [{"role": "user", "content": question}]
    for step in range(MAX_STEPS):
        reply = client.messages.create(model=MODEL, max_tokens=512,
                                        tools=tool_specs(), messages=state)
        action = parse_action(reply)              # -> {"final": str} | {"tool": str, "args": dict}
        log({"step": step, "state_len": len(state), "action": action})
        if "final" in action:
            return action["final"]
        obs = TOOLS[action["tool"]](**action["args"])   # dispatch
        state += [reply_as_msg(reply), tool_result_msg(obs)]
    return "STOP: step budget exhausted"          # the all-important stopping rule
```

### Graded rubric table
| Criterion | Excellent (full) | Adequate (half) | Failing (0) |
|-----------|------------------|-----------------|-------------|
| Loop correctness | Terminates on all 10, respects step cap, clean done-detection | Works but occasional over-stepping | Loops/crashes |
| State inspectability | Every turn logged with state-len, action, obs | Partial logs | No trace |
| Autonomy reasoning | Correctly classifies 3/3 tasks with cost/branching justification | 2/3 justified | Asserts with no reason |
| Anatomy map | All five organs + stop rule explicit | Organs named, stop vague | Missing organs |

**Assessment weight:** 5%.

### Readings & sources (2025–2026)
- Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," ICLR 2023.
- Anthropic, "Building Effective Agents" (engineering guide, 2024) — workflow-vs-agent taxonomy.
- Berkeley CS294/194-196 Agentic AI, Lec. 1–2 "LLM Agents Overview / Evolution of System Designs" (Dawn Song, 2025).
- Weng, "LLM-Powered Autonomous Agents" (Lil'Log, 2023) — the planner/memory/tools decomposition.

---

### State of the Art (June 2026)
- Orchestrator-led agents are replacing monolithic loops; **agent memory** is now the production differentiator.
- Agent SDKs ship the loop as a runtime: **Claude Agent SDK** (`query()`, subagents, hooks), **OpenAI Agents SDK** (Swarm successor), **Google ADK**, **Microsoft Agent Framework 1.0** (GA Apr 2026).
- Tunable **"thinking effort"** (Claude Opus 4.8 effort controls, Gemini 3.1 Pro Low/Med/High) turns the planner/controller split into a dial.
- **1M-context, sparse-MoE** models (Opus 4.8, GPT-5.5, Gemini 3.1, DeepSeek V4) are table stakes — state can hold whole transcripts.

**More detail:** The agent loop is now a *managed runtime* — SDKs supply tools, handoffs, sessions, checkpointing, and tracing — so engineering shifts from hand-writing the loop to composing subagents and budgeting test-time "thinking effort."

**References & links:**
- [ReAct: Synergizing Reasoning and Acting (Yao et al., 2023)](https://arxiv.org/abs/2210.03629) — the observe→think→act loop
- [`openai/openai-agents-python`](https://github.com/openai/openai-agents-python) — OpenAI Agents SDK (handoffs; Swarm successor)
- [`anthropics/claude-agent-sdk-python`](https://github.com/anthropics/claude-agent-sdk-python) — Claude Agent SDK: `query()`, subagents, hooks
- [`langchain-ai/langgraph`](https://github.com/langchain-ai/langgraph) — durable, checkpointed agent runtime
- [LangGraph docs](https://langchain-ai.github.io/langgraph/) — persistence, human-in-the-loop, time-travel
<!-- sota:07L01 -->

## Week 2 — Function Calling, Tool Schemas, and Structured Outputs

**Altitude:** Engineer · **Anchor case:** give Atlas a real tool belt: `search_flights`, `get_policy`, `file_expense`, with typed schemas the model can't misuse.

### Learning goals
- Write JSON-Schema tool definitions that make correct calls easy and incorrect calls *impossible to express*.
- Explain how function calling works under the hood (the model emits structured tokens; you execute; you return results).
- Use structured outputs / constrained decoding (Pydantic) to eliminate parse failures.
- Measure tool-call accuracy with a small harness and a public function-calling benchmark.

### Concept map
- **Tool schema.** *Formula (shape):* `tool = {name, description, parameters: JSON-Schema}`. *Plain English:* a
  typed contract the model fills in. *Tiny example:* `file_expense(amount: float, category: Enum[meals,travel,...],
  date: date)`. *Code mapping:* a Pydantic model → `model_json_schema()`. *Common mistake:* free-text `category:
  str` instead of an enum, so the model invents categories your backend rejects.
- **Description as prompt.** Plain English: the tool `description` is read by the model on *every* call — it is
  prime prompt real estate. Where it matters: ambiguous descriptions cause wrong-tool selection. Common mistake:
  one-word descriptions ("books a flight") with no preconditions or units.
- **Structured outputs / constrained decoding.** *Plain English:* force the model's output to match a schema so it
  literally cannot emit invalid JSON. *Code mapping:* `response_format=PydanticModel` / tool-choice forced.
  *Common mistake:* regex-parsing free text and discovering 3% of calls are malformed in production.
- **Tool granularity & idempotency.** Plain English: many small, single-purpose, *idempotent* tools beat one
  god-tool with a mode flag. Where it matters: retries and partial failures (Week 5). Common mistake: a
  `do_everything(action, payload)` tool the model fumbles.
- **Errors as observations.** Plain English: a tool's error message is fed back to the model — write it *for the
  model* ("amount exceeds $75 meal cap; reduce or escalate"), not a stack trace.

### Hands-on build
- `atlas/tools.py`: define 5 tools as Pydantic models with enums, ranges, and model-facing error messages; expose
  their JSON-Schemas to the model; force structured calls.
- Build `eval/toolcall.py`: 30 labeled prompts → expected `(tool, args)`; score exact-tool and arg-match accuracy.
- **Deliverable:** the tool belt + a tool-call accuracy report. **Acceptance:** ≥90% correct tool selection and
  zero JSON parse failures across 30 prompts; every tool returns a model-readable error on bad input.

▶ **Practical project:** `anthropics/anthropic-cookbook` — adapt its tool-use / structured-output recipes to build Atlas's typed, constrained-decoding tool belt.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `anthropic` + `pydantic`; open the cookbook's tool-use / structured-output notebooks.
2. Define 5 tools as Pydantic models (enums, ranges, ISO dates) in `atlas/tools.py`; emit `model_json_schema()`.
3. Force structured/tool calls; write model-facing error strings ("meal cap $75; reduce or escalate").
4. Build `eval/toolcall.py`: 30 labeled prompts → expected `(tool, args)`; score tool + arg accuracy.
5. Run it; record exact-tool accuracy and JSON parse-failure count.
6. Find the most-confused tool pair and rewrite that description.
- **Artifact:** `atlas/tools.py` + a tool-call accuracy report committed.
- **Use `$tool-schema-designer`:** turn each capability into a typed contract + three must-fail inputs.
- **Done when:** ≥90% tool selection, 0 parse failures, every bad input returns a model-readable error.
- **Stretch:** add an "irrelevance" case set (BFCL-style) and measure false tool-calls.

### Harness / reusable skill — `$tool-schema-designer`
- **Purpose:** turn a capability into a safe, model-friendly tool contract.
- **Inputs:** a desired capability + its backend signature. **Outputs:** a Pydantic schema (enums/ranges/units),
  a one-paragraph model-facing description, three "must-fail" inputs and the error string each returns.
- **Minimal workflow:** name → type-constrain → describe for the model → enumerate failure inputs → test.
  **Evidence artifact:** `evidence/week02-tools.md` (schemas + the must-fail table).

### Common failure modes
- **Stringly-typed args** → invalid values reach the backend. *Fix:* enums, ranges, dates as real types.
- **Vague descriptions** → wrong-tool selection. *Fix:* state purpose, units, preconditions, and when *not* to call.
- **Silent parse failures** → flaky agents. *Fix:* constrained/structured decoding, fail loudly in tests.
- **God-tools** → the model picks wrong modes. *Fix:* split into idempotent single-purpose tools.

### Evidence artifact
`evidence/week02-toolcall-report.md` (accuracy table + parse-failure count + the must-fail error strings).

### Skill sink-in
Predict which of your 5 tools the model will most often confuse with another. Run the 30-prompt eval. Record the
actual confusion pair and rewrite that description.

### Dataset / benchmark
**Berkeley Function-Calling Leaderboard (BFCL v3/v4)** — `gorilla` repo (`ShishirPatil/gorilla`, Apache-2.0),
thousands of single/multi/parallel function-call cases incl. "irrelevance" detection. Use its scoring style for
your 30-prompt harness; cite your tool-selection accuracy against its rubric.

### Code stub
```python
# atlas/tools.py — typed, model-friendly tool contracts
from pydantic import BaseModel, Field
from enum import Enum

class Category(str, Enum):
    meals = "meals"; travel = "travel"; lodging = "lodging"

class FileExpense(BaseModel):
    """File one expense line. Reject amounts over policy; caller must pre-check policy via get_policy."""
    amount: float = Field(gt=0, le=10000, description="USD, > 0")
    category: Category
    date: str = Field(description="ISO-8601 YYYY-MM-DD")

def file_expense(args: FileExpense) -> str:
    if args.category == Category.meals and args.amount > 75:
        return "ERROR: meal cap is $75; reduce the amount or call escalate_to_human."  # model-facing
    return f"OK: filed {args.category} ${args.amount} on {args.date}"

TOOL_SPECS = [{"name": "file_expense", "input_schema": FileExpense.model_json_schema(), ...}]
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Type safety | All args enum/range/date-typed; backend can't get junk | Mostly typed, 1–2 stringly args | Free-text args |
| Selection accuracy | ≥90% correct tool on 30 prompts | 75–90% | <75% |
| Robustness | 0 parse failures; every bad input → model-readable error | rare failures | crashes on bad input |
| Descriptions | Units/preconditions/when-not-to-call present | basic | one-liners |

**Assessment weight:** 6%.

### Readings & sources
- Schick et al., "Toolformer: Language Models Can Teach Themselves to Use Tools," NeurIPS 2023.
- Patil et al., "Gorilla: Large Language Model Connected with Massive APIs," 2023 (+ BFCL leaderboard docs, 2024–2026).
- OpenAI, "Function calling and structured outputs" docs (2024–2026); Anthropic "Tool use" docs (2024–2026).
- Qin et al., "ToolLLM: Facilitating LLMs to Master 16000+ Real-World APIs," ICLR 2024.

---

### State of the Art (June 2026)
- Function calling + **constrained/structured decoding** (JSON-schema / Pydantic) is reliable across Opus 4.8, GPT-5.5, and Gemini 3.1.
- **BFCL v4** is the live function-calling leaderboard; "irrelevance / when-not-to-call" detection is a scored axis.
- **MCP** (Linux Foundation, 10k+ servers) shifts tools from per-app glue to a shared protocol — Week 3.
- Idempotent single-purpose tools and **errors-as-observations** remain the core reliability levers.

**More detail:** Reliable tool use leans on constrained/structured decoding (JSON-schema / Pydantic) plus a function-calling benchmark; the hard part is "when *not* to call," scored as irrelevance detection on BFCL.

**References & links:**
- [Toolformer (Schick et al., 2023)](https://arxiv.org/abs/2302.04761) — models learning to call tools
- [ToolLLM (Qin et al., 2023)](https://arxiv.org/abs/2307.16789) — mastering 16k+ real APIs
- [`ShishirPatil/gorilla`](https://github.com/ShishirPatil/gorilla) — Berkeley Function-Calling Leaderboard (BFCL)
- [Anthropic tool-use docs](https://docs.anthropic.com/en/docs/build-with-claude/tool-use) — schemas + forced tool choice
- [Model Context Protocol](https://modelcontextprotocol.io) — exposing tools over a standard protocol
<!-- sota:07L02 -->

## Week 3 — MCP: Build a Model Context Protocol Server (original module)

**Altitude:** Engineer · **Anchor case:** wrap Atlas's expense/policy backend in a real **MCP server** so *any* MCP client (Claude Desktop, VS Code, your agent) can use it.

### Learning goals
- Explain **why a protocol** beats per-agent tool glue: tools, resources, and prompts become reusable, discoverable, and host-agnostic.
- Build an MCP **server** exposing **tools**, **resources**, and **prompts**, and connect it to a **client/host**.
- Distinguish MCP's three primitives and map each to an agent need (action vs context vs reusable instruction).
- Reason about MCP transport (stdio vs streamable HTTP), capability negotiation, and the trust boundary it creates (revisited in Week 11).

### Concept map
- **Why MCP (the "USB-C for tools" framing).** Plain English: instead of re-writing tool wrappers for every
  agent/IDE, you expose them *once* behind a standard protocol and every MCP-aware host can use them. Where it
  matters: your Week-2 tools become portable; the IDE, the desktop app, and your orchestrator all share one server.
  Common mistake: thinking MCP is "just function calling with extra steps" — the win is *decoupling and reuse*,
  not a new calling convention.
- **Three primitives.** **Tools** = model-invoked actions (like Week 2). **Resources** = read-only context the
  host can attach (files, DB rows, a PRD). **Prompts** = parameterized, reusable instruction templates the user/host
  can invoke. *Tiny example:* tool `file_expense`; resource `policy://meals`; prompt `expense-triage(employee_id)`.
  *Common mistake:* shoving read-only context through a tool call instead of exposing it as a resource.
- **Client–server–host.** *Shapes:* a **host** (Claude Desktop, VS Code, your agent) spawns one or more **clients**,
  each talking to one **server**. *Code mapping:* `FastMCP("atlas")` with `@mcp.tool` / `@mcp.resource` / `@mcp.prompt`.
  *Common mistake:* baking host-specific assumptions into the server (it should be host-agnostic).
- **Transport & capability negotiation.** stdio (local subprocess) vs streamable HTTP (remote). On connect, client
  and server exchange capabilities. Common mistake: assuming a tool exists without listing capabilities first.
- **The trust boundary.** Plain English: an MCP server runs code and exposes data to whatever model connects — it
  is a security surface (tool-poisoning, over-broad scopes). Flagged now, defended in Week 11.
- **Audit logging & tool overreach.** Plain English: log every tool/resource call (caller, args, result) so an
  over-broad or abused capability is visible *after the fact* — the audit trail is what turns a "trust boundary"
  from a diagram into something you can actually enforce and review. *Common mistake:* a server that grants broad
  scopes with no record of what was called, so overreach is invisible until it causes harm.

### Hands-on build
- `atlas_mcp/server.py` with **FastMCP**: expose ≥3 tools (`search_flights`, `get_policy`, `file_expense`), ≥2
  resources (`policy://{topic}`, `employee://{id}`), and ≥1 prompt (`expense-triage`).
- Connect it two ways: (a) to **Claude Desktop / VS Code** via config, and (b) to your Week-1 agent loop via the
  MCP **client** SDK so the agent auto-discovers tools instead of hard-coding them.
- **Deliverable:** a running MCP server + a screenshot/log of an external host using it + your agent calling it via
  the client. **Acceptance:** the same server is usable from *two* different hosts with no code change, and your
  agent lists tools dynamically (no hard-coded tool table).

▶ **Practical project:** `modelcontextprotocol/servers` — clone the official example servers (filesystem/git/fetch), mirror their structure, and build your own Atlas MCP server.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `mcp` Python SDK (`fastmcp`) + Node 22 for the Inspector; `git clone modelcontextprotocol/servers`.
2. Build `atlas_mcp/server.py` with FastMCP: ≥3 tools, ≥2 resources (`policy://{topic}`, `employee://{id}`), ≥1 prompt.
3. Run it over stdio; connect from Claude Desktop / VS Code via config.
4. Connect the same server to your Week-1 loop via the MCP client SDK; auto-discover tools (no hard-coded table).
5. Capture `capabilities.json` + a log of two hosts using it.
6. Write the 3-line trust-boundary note (scopes, read/write surface).
- **Artifact:** `evidence/week03-mcp/` (server + manifest + README) committed.
- **Use `$mcp-server-scaffold`:** classify each capability tool/resource/prompt before implementing.
- **Done when:** the same server works unchanged from two hosts and the agent lists tools dynamically.
- **Stretch:** expose it over streamable HTTP and connect a remote client.

### Harness / reusable skill — `$mcp-server-scaffold`
- **Purpose:** stand up a correct, documented MCP server for any backend in under an hour.
- **Inputs:** a backend (functions + data). **Outputs:** a server exposing tools/resources/prompts, a capability
  manifest, a `README` with the client config snippet, and a 3-line "trust boundary" note (what it can read/do).
- **Minimal workflow:** classify each capability (tool/resource/prompt) → implement → declare capabilities →
  test from a second host → document scopes. **Evidence artifact:** `evidence/week03-mcp/` (server + manifest + README).

### Common failure modes
- **Everything-is-a-tool** → no resources/prompts, losing MCP's main benefit. *Fix:* classify each capability first.
- **Host lock-in** → server only works in one app. *Fix:* test from two hosts before declaring done.
- **No capability listing** → agent assumes tools that aren't there. *Fix:* discover dynamically each session.
- **Over-broad scope** → server exposes more than the task needs. *Fix:* least-privilege resources; note the boundary.
- **Transport confusion** → local stdio config used for a remote server. *Fix:* match transport to deployment.

### Evidence artifact
`evidence/week03-mcp/` — server source, `capabilities.json`, README with config, and a log showing two hosts using it.

### Skill sink-in
Predict which of your capabilities belong as **resources** vs **tools** before coding. Implement. Record which one
you mis-classified and why the resource/tool line was blurry.

### Dataset / benchmark
Reference implementation: **`modelcontextprotocol/servers`** (GitHub, MIT) — official example servers
(filesystem, git, fetch). Mirror their structure. Spec: **`modelcontextprotocol/modelcontextprotocol`** (the spec
repo) and `modelcontextprotocol.io`. No labeled dataset; the "benchmark" is interoperability across two hosts.

### Code stub
```python
# atlas_mcp/server.py — a real MCP server with all three primitives
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("atlas")

@mcp.tool()
def file_expense(amount: float, category: str, date: str) -> str:
    """File one expense line (see policy resource for caps)."""
    return book_expense(amount, category, date)

@mcp.resource("policy://{topic}")
def policy(topic: str) -> str:
    """Read-only T&E policy text for a topic, e.g. policy://meals."""
    return POLICIES[topic]

@mcp.prompt()
def expense_triage(employee_id: str) -> str:
    """Reusable instruction: triage this employee's pending expenses against policy."""
    return f"You are an expense auditor. For employee {employee_id}, ..."

if __name__ == "__main__":
    mcp.run(transport="stdio")   # or "streamable-http" for remote
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Uses all 3 primitives | Tools + resources + prompts, each appropriate | tools + one other | tools only |
| Host portability | Works unchanged from 2 hosts | works from 1 + config for 2nd | single host only |
| Dynamic discovery | Agent lists capabilities at runtime | partial | hard-coded tools |
| Trust-boundary note | Scopes + read/write surface documented | mentioned | absent |

**Assessment weight:** 8%.

### Readings & sources
- Anthropic, "Introducing the Model Context Protocol" (2024) + the **MCP specification** (modelcontextprotocol.io, 2024–2026).
- "Model Context Protocol" docs: server quickstart, primitives (tools/resources/prompts), transports (2025–2026).
- Krish Naik, "MCP with AutoGen + Notion" project walkthrough (krishnaik.in, 2025–2026).
- Hou et al., "Model Context Protocol (MCP): Landscape, Security Threats, and Future Directions," 2025 (survey; sets up Week 11).

---

### State of the Art (June 2026)
- MCP was **donated to the Linux Foundation's Agentic AI Foundation (Dec 2025)**; the new **2026-07-28 spec** adds a stateless core, Extensions, Tasks, MCP Apps, and hardened auth.
- **10,000+ public MCP servers**; GA in VS Code, Copilot, Claude Desktop, ChatGPT, and AWS Bedrock.
- **A2A** absorbed ACP and now sits beside MCP — agents↔agents vs agents↔tools (Week 7).
- Security focus sharpening: tool-poisoning, confused-deputy, and auth hardening drive the new spec (Week 11).

**More detail:** MCP is now a Linux-Foundation standard with a stateless-core spec revision; tools, resources, and prompts are exposed once and consumed by any host, moving the security focus to auth and server vetting.

**References & links:**
- [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — official reference servers
- [`modelcontextprotocol/modelcontextprotocol`](https://github.com/modelcontextprotocol/modelcontextprotocol) — the spec repo
- [MCP documentation](https://modelcontextprotocol.io) — primitives, transports, auth
- [`a2aproject/A2A`](https://github.com/a2aproject/A2A) — the agent-to-agent complement to MCP
<!-- sota:07L03 -->

## Week 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion

**Altitude:** Engineer · **Anchor case:** Atlas books a multi-leg trip — a task too long for one shot — using an explicit plan, a reasoning loop, and a self-critique.

### Learning goals
- Implement **ReAct** (interleaved reason→act→observe) and explain when interleaving beats pre-planning.
- Implement **plan-and-execute** (decompose → execute steps → re-plan on failure) for long-horizon tasks.
- Add a **Reflexion/self-critique** step and measure whether it actually improves success (not just adds tokens).
- Decide *per task* how much test-time compute (steps, reflection, sampling) is worth its cost.

### Concept map
- **ReAct.** *Formula (trace):* `(thoughtₜ, actionₜ, obsₜ)` repeated. *Plain English:* think out loud, take one
  action, look at the result, think again. Where it matters: tasks where each step depends on the last observation.
  *Code mapping:* the Week-1 loop with an explicit `thought` field. *Common mistake:* letting "thoughts" balloon
  into essays that drift from the goal; keep them short and action-oriented.
- **Plan-and-execute.** *Plain English:* write the whole plan first, then execute steps, re-planning only when a
  step fails. Where it matters: long tasks with mostly-independent steps (cheaper, more parallelizable than ReAct).
  *Common mistake:* never re-planning, so one failed step dooms the run.
- **Reflexion / self-refine.** *Formula (loop):* `answer → critique → revise` for ≤k rounds. *Plain English:* the
  agent grades its own attempt and tries again with the lesson in context. Where it matters: tasks with a checkable
  signal (tests pass, policy satisfied). *Common mistake:* reflecting with *no* external signal — the model just
  rationalizes its first answer ("reflection theater").
- **Test-time compute as a dial.** Plain English: more steps / more samples / more reflection ≈ more accuracy *up
  to a point*, at linear cost. Where it matters: budget reasoning where it pays. Common mistake: max reasoning on
  trivial steps.
- **Verifier vs generator.** Plain English: a separate critic (a rule, a test, or a second model) is more trustworthy
  than self-grading. The bridge to Week 9 evaluation.

### Hands-on build
- `atlas/planners.py`: implement three strategies — `react`, `plan_execute`, `reflexion` — behind one interface.
- Run all three on 15 multi-step T&E/booking tasks; record success rate, mean steps, and token cost each.
- **Deliverable:** a strategy-comparison table + a recommendation ("use X for short, Y for long, add reflection
  only when a checkable signal exists"). **Acceptance:** reflection's benefit is reported *with its cost*, and the
  recommendation is justified by your numbers, not vibes.

▶ **Practical project:** `NirDiamant/GenAI_Agents` — adapt its ReAct / plan-and-execute / reflection implementations and benchmark them on the Atlas booking tasks.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `anthropic`; `git clone NirDiamant/GenAI_Agents`; skim its ReAct / plan-execute / reflection notebooks.
2. Implement `atlas/planners.py` with three strategies behind one interface: `react`, `plan_execute`, `reflexion`.
3. Wire Reflexion to an EXTERNAL verifier (rule/test), not self-grade.
4. Run all three on 15 multi-step booking tasks; record success, mean steps, token cost.
5. Build the comparison table; compute whether reflection's gain beat its spend.
6. Write the per-task recommendation ("X for short, Y for long").
- **Artifact:** `atlas/planners.py` + `evidence/week04-strategy.md` table committed.
- **Use `$reasoning-strategy-picker`:** choose strategy by horizon / step-independence / checkable-signal.
- **Done when:** 3 strategies run, success AND cost reported, recommendation justified by numbers.
- **Stretch:** add a 30-task GAIA/HotpotQA subset and re-rank the strategies.

### Harness / reusable skill — `$reasoning-strategy-picker`
- **Purpose:** choose a reasoning/planning strategy for a task by its structure, not by fashion.
- **Inputs:** task horizon, step-independence, availability of a checkable signal, latency/cost budget.
- **Outputs:** a recommended strategy, the step/reflection budget, and the stop condition. **Evidence artifact:**
  `evidence/week04-strategy.md` with the comparison table.

### Common failure modes
- **Reflection theater** → self-critique with no external signal inflates cost, not accuracy. *Fix:* only reflect against a verifier/test/rule.
- **Plan rigidity** → no re-planning on failure. *Fix:* re-plan trigger on step error.
- **Thought drift** → verbose reasoning wanders off-goal. *Fix:* short thoughts + goal restated each step.
- **Uniform compute** → max steps everywhere. *Fix:* budget by task difficulty.

### Evidence artifact
`evidence/week04-strategy.md` (3-strategy table: success / steps / cost) + the per-task recommendation.

### Skill sink-in
Predict whether Reflexion will help your booking tasks *before* measuring. Measure success **and** token cost.
Record whether the accuracy gain justified the spend.

### Dataset / benchmark
**GAIA** (`gaia-benchmark/GAIA`, HF; ~466 real-world multi-step tasks, gated access) and **HotpotQA**
(`hotpotqa/hotpot_qa`, HF, CC BY-SA; multi-hop) for measuring planning/reasoning gains. Use a 30-task subset to
compare strategies cheaply, plus 15 in-domain Atlas tasks.

### Code stub
```python
# atlas/planners.py — one interface, three strategies
def reflexion(task, max_rounds=2, verify=None):
    answer = react(task)                       # first attempt (ReAct under the hood)
    for r in range(max_rounds):
        signal = verify(answer)                # EXTERNAL check: test/rule/2nd-model — not self-grade
        if signal.ok:
            return answer, r
        critique = llm(f"Your answer failed: {signal.reason}. Diagnose and fix.\n{answer}")
        answer = react(task, hint=critique)    # retry with the lesson in context
    return answer, max_rounds

# compare: success_rate, mean_steps, mean_cost_usd  across {react, plan_execute, reflexion}
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| 3 strategies implemented | All behind one interface, all run | 2 of 3 | 1 |
| Honest comparison | Success **and** cost reported per strategy | success only | no numbers |
| Verifier discipline | Reflection uses an external signal | self-grade but noted | reflection theater |
| Recommendation | Justified by the table, task-structured | stated | unsupported |

**Assessment weight:** 7%.

### Readings & sources
- Yao et al., "ReAct," ICLR 2023; Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning," NeurIPS 2023.
- Wang et al., "Plan-and-Solve Prompting," ACL 2023; Madaan et al., "Self-Refine," NeurIPS 2023.
- Yao et al., "Tree of Thoughts: Deliberate Problem Solving with LLMs," NeurIPS 2023.
- Snell et al., "Scaling LLM Test-Time Compute Optimally...," 2024 (compute-as-a-dial); Berkeley CS294 "Inference-Time Reasoning" (2025).

---

### State of the Art (June 2026)
- **RLVR (RL with Verifiable Rewards)** is the dominant reasoning post-training, displacing pure RLHF for reasoning.
- Test-time compute = parallel sampling + sequential deliberation + **RL-trained verifier models** (RL^V ≈ 1.2–1.6× gains).
- **Reward hacking / verifier gaming** is an active ICLR 2026 failure-mode thread — reflect against *external* signals, not self-grade.
- Tunable extended thinking (Opus 4.8 effort, Gemini 3.1 thinking dial) is the compute-as-a-dial knob.

**More detail:** Reasoning post-training shifted to RL with verifiable rewards and verifier/critic models scoring parallel samples; the live failure mode is reward/verifier hacking, so reflection must be graded against an *external* signal.

**References & links:**
- [ReAct (Yao et al., 2023)](https://arxiv.org/abs/2210.03629) — interleaved reason/act
- [Reflexion (Shinn et al., 2023)](https://arxiv.org/abs/2303.11366) — verbal self-critique against an external signal
- [Self-Refine (Madaan et al., 2023)](https://arxiv.org/abs/2303.17651) — iterative answer→critique→revise
- [Tree of Thoughts (Yao et al., 2023)](https://arxiv.org/abs/2305.10601) — deliberate search over thoughts
- [Plan-and-Solve (Wang et al., 2023)](https://arxiv.org/abs/2305.04091) — decompose-then-execute prompting
<!-- sota:07L04 -->

## Week 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem

**Altitude:** Engineer · **Anchor case:** Atlas remembers *this* employee's prior trips, preferences, and the running task — across turns and across sessions.

### Learning goals
- Distinguish **working/short-term** memory (the context window + scratchpad) from **long-term** memory (external store) and **episodic vs semantic vs procedural** memory.
- Build a long-term memory layer by hand (embed → store in `pgvector`/Chroma → retrieve), then with **Mem0**/**LangMem**.
- Implement **write policies** (what to remember), **retrieval policies** (what to recall when), and **forgetting/decay**.
- Measure memory's effect: does recall improve task success, or just bloat the prompt?

### Concept map
- **Working vs long-term memory.** Plain English: working memory is what's in the prompt *right now*; long-term
  memory is what you fetch back into the prompt when relevant. Where it matters: context windows are finite and
  expensive; you can't keep everything in-prompt. Common mistake: dumping the whole history into context every turn
  ("context stuffing") instead of retrieving.
- **Episodic / semantic / procedural.** *Tiny example:* episodic = "on 2026-05-02 the user booked aisle seat 14C";
  semantic = "the user prefers aisle seats"; procedural = "to file lodging, attach folio + call get_policy('lodging')."
  *Common mistake:* storing raw episodes forever and never distilling them into semantic facts.
- **Memory write policy.** *Formula (gate):* `store ⟸ salient(event) ∧ ¬duplicate(event)`. *Plain English:* decide
  *at write time* what's worth keeping and dedupe it. *Code mapping:* an LLM/heuristic "is this worth remembering?"
  gate before `upsert`. *Common mistake:* remembering everything → retrieval returns noise.
- **Retrieval policy.** Plain English: fetch the *k* memories most relevant to the current state, recency- and
  salience-weighted. *Common mistake:* pure cosine top-k with no recency, so stale facts outrank fresh ones.
- **Forgetting / decay & conflict.** Plain English: preferences change; memory must update and resolve contradictions.
  *Common mistake:* two conflicting "preferred seat" facts both retrieved, confusing the agent.

### Hands-on build
- `atlas/memory_raw.py`: from-scratch long-term memory (embed with a small model, store in `pgvector`/Chroma,
  retrieve top-k with recency weighting, plus a write-gate and a dedupe step).
- `atlas/memory_mem0.py`: the same behavior via **Mem0** (and a **LangMem** variant); compare ergonomics.
- A/B test: run 20 multi-session tasks **with vs without** long-term memory; report success-rate delta and prompt-token delta.
- **Deliverable:** both memory layers + an A/B report. **Acceptance:** the A/B shows memory's effect on *both*
  success and token cost; the write-gate measurably reduces stored-memory count vs "remember everything."

▶ **Practical project:** `krishnaik06/RAG-Tutorials` — reuse its embed→store→retrieve stack as the raw long-term-memory baseline, then A/B it against Mem0/LangMem.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `chromadb`/`pgvector` + an embedding model; `git clone krishnaik06/RAG-Tutorials` for the embed→retrieve stack.
2. Build `atlas/memory_raw.py`: a write-gate + dedupe + recency-weighted top-k retrieval.
3. Build `atlas/memory_mem0.py`: the same behavior via Mem0 (and a LangMem variant); compare ergonomics.
4. Author 20 two-session tasks where session 2 needs a session-1 fact.
5. A/B run with vs without long-term memory; record success delta + prompt-token delta + stored-count.
6. Write the privacy/PII + retention note.
- **Artifact:** both memory layers + `evidence/week05-ab.md` committed.
- **Use `$agent-memory-designer`:** specify memory types, write/retrieval policy, decay rule.
- **Done when:** the A/B shows effect on success AND tokens; the write-gate cuts stored count.
- **Stretch:** score recall on a LoCoMo/LongMemEval subset.

### Harness / reusable skill — `$agent-memory-designer`
- **Purpose:** design a memory layer that helps without bloating.
- **Inputs:** task, what should persist, privacy constraints. **Outputs:** memory types used, write policy,
  retrieval policy (k, weighting), decay/forgetting rule, and a privacy note (PII handling). **Evidence artifact:**
  `evidence/week05-memory.md` + the A/B numbers.

### Common failure modes
- **Context stuffing** → cost and "lost in the middle." *Fix:* retrieve, don't dump.
- **Pack-rat memory** → noisy recall. *Fix:* write-gate + distill episodes to semantic facts.
- **Recency blindness** → stale facts win. *Fix:* recency/salience-weighted retrieval + decay.
- **Conflict ignorance** → contradictory memories retrieved. *Fix:* conflict resolution / last-write-wins per key.
- **PII leakage** → storing sensitive data unguarded. *Fix:* redact/scope memory; note retention.

### Evidence artifact
`evidence/week05-memory.md` (design + privacy note) + `evidence/week05-ab.md` (with/without memory: success + tokens + stored-count).

### Skill sink-in
Predict the success-rate lift from long-term memory before the A/B. Measure. Record whether the lift justified the
extra retrieval latency and storage.

### Dataset / benchmark
**LoCoMo** (long-term conversational memory benchmark; `snap-research/locomo` / paper data, 2024) and **LongMemEval**
(`xiaowu0162/LongMemEval`, 2024, ~500 questions over long chat histories) — use a subset to score recall accuracy.
For the A/B, build 20 two-session Atlas tasks where session 2 needs a fact from session 1.

### Code stub
```python
# atlas/memory_raw.py — long-term memory with a write-gate + recency-weighted retrieval
def remember(event: str, user_id: str):
    if not worth_remembering(event):                 # LLM/heuristic gate -> avoid pack-rat memory
        return
    emb = embed(event)
    if max_sim(emb, store.query(user_id, emb, k=1)) > 0.95:  # dedupe near-duplicates
        return
    store.upsert(user_id, emb, {"text": event, "ts": now()})

def recall(query: str, user_id: str, k=5):
    hits = store.query(user_id, embed(query), k=20)
    return sorted(hits, key=lambda h: 0.7*h.sim + 0.3*recency(h.ts))[:k]   # blend similarity + recency
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Both layers | Raw + Mem0/LangMem, comparable behavior | one layer | none works |
| Write discipline | Gate + dedupe cut stored count, measured | gate present | remembers everything |
| Retrieval quality | Recency+salience weighting, decay | top-k only | irrelevant recall |
| A/B honesty | Success **and** token delta reported | success only | no measurement |

**Assessment weight:** 7%.

### Readings & sources
- Park et al., "Generative Agents: Interactive Simulacra of Human Behavior," UIST 2023 (memory stream + reflection).
- Packer et al., "MemGPT: Towards LLMs as Operating Systems," 2023 (paging memory in/out of context).
- Mem0 (Chhikara et al., "Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory," 2025) + LangMem docs (2025).
- Liu et al., "Lost in the Middle: How Language Models Use Long Contexts," TACL 2024 (why retrieval beats stuffing).

---

### State of the Art (June 2026)
- **Agent memory is the production differentiator** in 2026; **Mem0** and **LangMem** are the standard managed layers.
- 1M-token context reshapes but doesn't kill retrieval — **"lost in the middle"** persists, so retrieve, don't stuff.
- Embeddings: **voyage-3-large, Cohere embed-v4, BGE-M3**; vector stores Qdrant / Weaviate / pgvector / Pinecone.
- **Machine unlearning / scoped memory control** is rising for PII handling and retention.

**More detail:** Long-term memory is the production differentiator; managed layers add write-gating, retrieval, and decay, while 1M context still suffers "lost in the middle," so retrieval beats stuffing.

**References & links:**
- [`mem0ai/mem0`](https://github.com/mem0ai/mem0) — production agent memory layer
- [MemGPT (Packer et al., 2023)](https://arxiv.org/abs/2310.08560) — paging memory in/out of context
- [Generative Agents (Park et al., 2023)](https://arxiv.org/abs/2304.03442) — memory stream + reflection
- [Lost in the Middle (Liu et al., 2023)](https://arxiv.org/abs/2307.03172) — why retrieval beats stuffing
- [Mem0 docs](https://docs.mem0.ai) — write / retrieval / decay policies
<!-- sota:07L05 -->

## Week 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK

**Altitude:** Engineer · **Anchor case:** rebuild Atlas's loop in a real framework so it gains durability, streaming, retries, and human-in-the-loop — then justify the framework choice.

### Learning goals
- Map each framework to its **core abstraction** (graph/state machine vs role-based crew vs conversational vs typed-agent vs SDK runtime).
- Re-implement Atlas in **LangGraph** as a stateful graph with checkpointing and a human-approval node.
- Build the *same* agent in one other framework (Claude Agent SDK / OpenAI Agents SDK / CrewAI / Pydantic AI / ADK) and compare.
- Choose a framework for a given requirement (durability, control, multi-agent, typing) and defend it.

### Concept map
- **Graph / state machine (LangGraph).** Plain English: nodes are steps, edges are control flow, state is explicit
  and checkpointed — so a run can pause (for a human), resume, and recover. Where it matters: long, resumable,
  human-gated workflows. Common mistake: building a free-form agent when your control flow is actually a fixed graph.
- **Agent SDK runtimes (Claude Agent SDK, OpenAI Agents SDK).** Plain English: a batteries-included loop with tools,
  handoffs, guardrails, sessions, and tracing built in. Where it matters: fastest path to a solid single/few-agent
  system. Common mistake: re-implementing what the SDK already gives you (retries, tracing).
- **Role-based crews (CrewAI).** Plain English: declare agents-with-roles + tasks; the framework coordinates. Where
  it matters: quick multi-specialist setups. Common mistake: over-rich role-play that adds tokens, not capability.
- **Conversational multi-agent (AutoGen).** Plain English: agents talk to each other (and tools) in a chat protocol.
  Where it matters: research/debate patterns (Week 7). Common mistake: unbounded chatter with no termination.
- **Typed agents (Pydantic AI) & Google ADK.** Plain English: strong typing / structured I/O (Pydantic AI) and a
  Google-ecosystem agent runtime (ADK). Where it matters: type safety and GCP/Vertex deployment.
- **The meta-point:** frameworks are *control-flow + state + observability* conveniences over the Week-1 loop. You
  already understand the loop; pick the abstraction that matches your control flow.

### Hands-on build
- `atlas/graph.py` in **LangGraph**: nodes for plan → act → (human-approve if amount>$500) → file; checkpointed
  state; resumable after the human node.
- `atlas/alt_framework/`: the same agent in **one** other framework; note lines of code, what was free, what fought you.
- **Deliverable:** two implementations + a framework-selection memo. **Acceptance:** the LangGraph version actually
  *pauses* at the human node and *resumes* correctly; the memo recommends a framework per a stated requirement.

▶ **Practical project:** `krishnaik06/Agentic-LanggraphCrash-course` — follow it to rebuild Atlas as a checkpointed LangGraph graph with a human-approval node.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `langgraph` + `langgraph-checkpoint`; follow `krishnaik06/Agentic-LanggraphCrash-course`.
2. Build `atlas/graph.py`: nodes plan → act → (human-approve if amount>$500) → file; an explicit `AtlasState`.
3. Add a `MemorySaver` checkpointer and `interrupt_before=["human_approve"]`.
4. Rebuild the same agent in one other framework (Claude Agent SDK / CrewAI / Pydantic AI); note LoC + what was free.
5. Run both on the Week-4 15-task set; confirm identical results.
6. Write the requirement-driven framework-selection memo.
- **Artifact:** both implementations + `evidence/week06-framework-memo.md` committed.
- **Use `$framework-selector`:** pick by durability / control / multi-agent / typing needs.
- **Done when:** the LangGraph run pauses at the human node and resumes correctly.
- **Stretch:** add time-travel debugging (replay from a past checkpoint).

### Harness / reusable skill — `$framework-selector`
- **Purpose:** pick an agent framework from requirements, not hype.
- **Inputs:** need for durability/resume, control granularity, single vs multi-agent, typing, deploy target.
- **Outputs:** a recommended framework, the one feature that decided it, and what you'd give up. **Evidence
  artifact:** `evidence/week06-framework-memo.md`.

### Common failure modes
- **Framework cargo-culting** → adopting the trendy one regardless of fit. *Fix:* decide on the requirement that matters.
- **Reinventing the runtime** → hand-rolling retries/tracing the SDK provides. *Fix:* read what's built-in first.
- **Graph-as-agent confusion** → free-form agent where a graph belonged (or vice-versa). *Fix:* draw the control flow.
- **Unbounded multi-agent chat** → no termination. *Fix:* explicit stop conditions and turn caps.

### Evidence artifact
`evidence/week06-framework-memo.md` + both implementations with a short "what was free / what fought me" table.

### Skill sink-in
Predict which framework will need the fewest lines for the human-approval flow. Build both. Record the actual LoC
and which abstraction made the human gate trivial.

### Dataset / benchmark
Reuse the Week-4 15-task Atlas booking set as the **functional** benchmark (both implementations must pass it
identically). Framework repos for reference: `langchain-ai/langgraph`, `openai/openai-agents-python`,
`anthropics/claude-agent-sdk-python`, `crewAIInc/crewAI`, `microsoft/autogen`, `pydantic/pydantic-ai`,
`google/adk-python` (all OSS, permissive licenses).

### Code stub
```python
# atlas/graph.py — LangGraph with a human-in-the-loop interrupt + checkpointing
from langgraph.graph import StateGraph, END
from langgraph.checkpoint.memory import MemorySaver

g = StateGraph(AtlasState)
g.add_node("plan", plan_node); g.add_node("act", act_node); g.add_node("file", file_node)
g.add_conditional_edges("act",
    lambda s: "human" if s["amount"] > 500 else "file",
    {"human": "human_approve", "file": "file"})
g.add_node("human_approve", lambda s: s)        # interrupt_before -> pauses here for a human
app = g.compile(checkpointer=MemorySaver(), interrupt_before=["human_approve"])
# run -> pauses at human_approve -> app.update_state(...) approve -> app.invoke(None, cfg) resumes
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| LangGraph correctness | Pauses + resumes at human node; checkpointed | runs but no real pause/resume | broken |
| Second framework | Same tasks pass; honest comparison | runs partially | not attempted |
| Selection memo | Requirement-driven, names the deciding feature | generic pros/cons | hype-based |
| Reuse of built-ins | Uses SDK retries/tracing, not hand-rolled | some | reinvents everything |

**Assessment weight:** 6%.

### Readings & sources
- LangGraph docs: "Persistence, Human-in-the-loop, Time travel" (LangChain, 2025–2026).
- OpenAI, "Agents SDK" docs (2025); Anthropic, "Claude Agent SDK" docs (2025–2026); Google, "Agent Development Kit (ADK)" docs (2025).
- Wu et al., "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation," 2023; CrewAI + Pydantic AI docs (2025).
- Krish Naik, "Agentic AI with AgentOps" curriculum — multi-framework module (krishnaik.in, 2025–2026).

---

### State of the Art (June 2026)
- 2026 GA: **LangGraph** (durable checkpointing, crash recovery, time-travel debug), **OpenAI Agents SDK** (handoffs), **Claude Agent SDK** (subagents, hooks, computer-use), **Google ADK** (native A2A), **Microsoft Agent Framework 1.0** (AutoGen + Semantic Kernel, Apr 2026).
- **Pydantic AI, CrewAI, smolagents** fill the typed / role-based / lightweight niches.
- **Orchestrator-led multi-agent** is the dominant production topology.
- All converge on **MCP for tools + A2A for agent-to-agent** — frameworks are conveniences over the same loop.

**More detail:** 2026 frameworks converge on durable state + MCP tools + A2A messaging; choose by control-flow (graph vs runtime vs roles), not vendor.

**References & links:**
- [`langchain-ai/langgraph`](https://github.com/langchain-ai/langgraph) — graph / state-machine runtime
- [`openai/openai-agents-python`](https://github.com/openai/openai-agents-python) — handoffs runtime
- [`microsoft/autogen`](https://github.com/microsoft/autogen) — conversational multi-agent
- [`crewAIInc/crewAI`](https://github.com/crewAIInc/crewAI) — role-based crews
- [`pydantic/pydantic-ai`](https://github.com/pydantic/pydantic-ai) — typed agents
- [AutoGen (Wu et al., 2023)](https://arxiv.org/abs/2308.08155) — the multi-agent conversation framework
<!-- sota:07L06 -->

## Week 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate

**Altitude:** Engineer · **Anchor case:** split Atlas into an **orchestrator** + **specialists** (FlightAgent, PolicyAgent, ExpenseAgent) that communicate over an **A2A**-style contract; add a debate step for a contested policy call.

### Learning goals
- Decide **when multiple agents beat one** (separable skills/contexts, parallelism, independent verification) — and when they don't.
- Implement an **orchestrator + specialists** pattern with clear hand-off contracts.
- Use the **A2A (Agent-to-Agent) protocol** so agents discover and call each other via **agent cards**, independent of framework.
- Implement **multi-agent debate / critic** and measure whether it improves a contested decision.

### Concept map
- **When multi-agent helps.** Plain English: split when skills/contexts are genuinely separable, when steps can run
  in parallel, or when you want an independent checker. Where it matters: a 4-specialist system can each have a
  smaller, sharper prompt and tool set. Common mistake: splitting a coherent task into chatty agents that just pass
  the same context around (more tokens, more failure surface, no gain).
- **Orchestrator + specialists.** *Shapes:* one router/manager agent → N workers, results merged. *Code mapping:*
  the orchestrator calls specialists *as tools* or via A2A. *Common mistake:* the orchestrator doing the work itself
  instead of delegating, or no merge/verification of specialist outputs.
- **A2A protocol.** Plain English: a standard way for agents (possibly on different stacks/vendors) to advertise
  capabilities via an **agent card** and exchange tasks/messages — the "agents calling agents" complement to MCP's
  "agents calling tools." *Tiny example:* PolicyAgent publishes a card; the orchestrator discovers it and sends a
  task. *Common mistake:* conflating A2A (agent↔agent) with MCP (agent↔tool); they compose, they don't compete.
- **Multi-agent debate / critic.** *Formula (sketch):* `answer* = judge(agentA(q), agentB(q))` over r rounds.
  *Plain English:* two agents argue; a judge picks/merges; can raise factuality on hard calls. *Common mistake:*
  debate on easy questions (pure cost) or agents that just converge to agreement without real disagreement.
- **Cost/latency multiplication.** Plain English: N agents ≈ N× tokens and added latency. Justify the split with numbers.

### Hands-on build
- `atlas/multi/`: an orchestrator + 3 specialists; specialists expose **A2A agent cards**; orchestrator discovers
  and dispatches. Add a **debate** node for "is this borderline expense allowed?" with a judge.
- Compare single-agent Atlas vs multi-agent Atlas on 20 tasks: success, latency, cost.
- **Deliverable:** the multi-agent system + an A2A interop log + a single-vs-multi comparison. **Acceptance:**
  specialists are discovered via agent cards (not hard-wired), and the comparison states whether multi-agent was
  *worth it* on your tasks (it may not be — say so honestly).

▶ **Practical project:** `microsoft/ai-agents-for-beginners` — use its multi-agent / orchestration lessons as the pattern base for the Atlas orchestrator + A2A specialists.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + your Week-6 framework + the A2A sample server; skim `microsoft/ai-agents-for-beginners` multi-agent lessons.
2. Split Atlas into an orchestrator + 3 specialists (Flight/Policy/Expense) in `atlas/multi/`.
3. Publish A2A agent cards; have the orchestrator discover and dispatch by capability (no hard-wiring).
4. Add a debate node + judge for a borderline expense call.
5. Compare single-agent vs multi-agent on 20 tasks: success, latency, cost.
6. Write the honest single-vs-multi verdict (it may not be worth it).
- **Artifact:** `atlas/multi/` + `evidence/week07-single-vs-multi.md` + an A2A discovery log committed.
- **Use `$multi-agent-architect`:** decide topology + hand-off contracts before coding.
- **Done when:** specialists are discovered via agent cards and the comparison states worth-it-or-not, with numbers.
- **Stretch:** stress coordination on an AgentBench environment.

### Harness / reusable skill — `$multi-agent-architect`
- **Purpose:** decide the agent topology and hand-off contracts before coding.
- **Inputs:** the task's sub-skills, parallelism, need for independent verification. **Outputs:** a topology
  (single / orchestrator-workers / debate), each agent's role + tools + I/O contract, the merge/verify step, and a
  cost estimate. **Evidence artifact:** `evidence/week07-topology.md`.

### Common failure modes
- **Over-decomposition** → chatty agents, no gain, more cost. *Fix:* split only separable skills; measure vs single-agent.
- **Lossy hand-offs** → context dropped between agents. *Fix:* explicit, typed hand-off contracts (A2A messages).
- **No merge/verify** → specialist outputs taken on faith. *Fix:* an orchestrator merge + independent check.
- **Debate theater** → agents agree instantly. *Fix:* assign genuinely different roles/positions; cap rounds.
- **Protocol confusion** → MCP vs A2A misused. *Fix:* tools→MCP, agents→A2A; document which is which.

### Evidence artifact
`evidence/week07-topology.md` + `evidence/week07-single-vs-multi.md` (success/latency/cost) + an A2A discovery log.

### Skill sink-in
Predict whether multi-agent Atlas will beat single-agent on success rate *and* whether the cost is justified.
Measure both. Record the honest verdict.

### Dataset / benchmark
**tau-bench `airline`** multi-step tasks (reused) for the single-vs-multi comparison, plus **AgentBench**
(`THUDM/AgentBench`, 2023, Apache-2.0) environments for stress-testing coordination. A2A reference:
`a2aproject/A2A` (Google/Linux Foundation A2A spec + samples, 2025).

### Code stub
```python
# atlas/multi/orchestrator.py — orchestrator dispatching to A2A specialists discovered by card
cards = discover_a2a(["http://policy-agent/.well-known/agent.json",
                      "http://flight-agent/.well-known/agent.json"])   # capability discovery

def handle(task: str) -> str:
    plan = orchestrate(task)                       # which specialists, in what order
    results = {}
    for step in plan:
        agent = pick(cards, step.capability)       # route by advertised capability
        results[step.id] = a2a_send(agent, step.message)   # agent -> agent call
    if borderline(results):                        # contested policy call -> debate
        return judge(debate(results, rounds=2))
    return merge(results)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Topology fit | Justified split, sharp roles + contracts | reasonable | over/under-split |
| A2A interop | Specialists discovered via agent cards | works but hard-wired | no A2A |
| Single-vs-multi | Success + latency + cost compared, honest verdict | partial | no comparison |
| Debate value | Measured effect on contested tasks | implemented | theater |

**Assessment weight:** 8%.

### Readings & sources
- Du et al., "Improving Factuality and Reasoning in LMs through Multiagent Debate," ICML 2024.
- Google, "Announcing the Agent2Agent (A2A) Protocol" + A2A spec (2025); A2A ↔ MCP composition docs (2025–2026).
- Hong et al., "MetaGPT: Meta Programming for a Multi-Agent Collaborative Framework," ICLR 2024.
- Berkeley CS294 "Multi-Agent AI" (Noam Brown) and "Multi-Agent Systems" (Oriol Vinyals), 2025; Liu et al., "AgentBench," ICLR 2024.

---

### State of the Art (June 2026)
- **A2A** (Agent Cards, discovery/delegation) is under the Linux Foundation; **ACP merged into A2A**.
- **Orchestrator + specialists** is replacing monolithic agents in production.
- **τ²-bench** (Sierra, dual-control) with **pass^k** measures multi-agent reliability, not just one lucky run.
- A2A and MCP **compose**: agents call agents (A2A), agents call tools (MCP) — they don't compete.

**More detail:** A2A (Agent Cards for discovery/delegation) is the agent-to-agent complement to MCP; orchestrator + specialists with independent verification replaces monolithic agents, but each split multiplies cost.

**References & links:**
- [`a2aproject/A2A`](https://github.com/a2aproject/A2A) — Agent-to-Agent protocol + samples
- [AutoGen (Wu et al., 2023)](https://arxiv.org/abs/2308.08155) — multi-agent conversation
- [MetaGPT (Hong et al., 2023)](https://arxiv.org/abs/2308.00352) — role-based collaboration
- [AgentBench (Liu et al., 2023)](https://arxiv.org/abs/2308.03688) — stress-testing agent coordination
<!-- sota:07L07 -->

## Week 8 — Computer-Use and Browser Agents

**Altitude:** Engineer · **Anchor case:** a browser agent that books a flight on a real (sandboxed) airline site when no API exists — Atlas's fallback when there is no tool, only a UI.

### Learning goals
- Explain **computer-use / browser agents**: perception (screenshot/DOM/accessibility tree) → action (click/type/scroll) → loop.
- Build a browser agent with **Playwright** + a vision-or-DOM grounding strategy; handle waits, retries, and verification.
- Reason about the **reliability and safety** gap of GUI agents vs API tools (and why you prefer APIs/MCP when they exist).
- Evaluate a browser agent on a public web-agent benchmark.

### Concept map
- **Perception → action loop.** *Shapes:* observation = screenshot (pixels) and/or DOM/accessibility tree (text);
  action = `{click(x,y)|type(text)|scroll|nav}`. *Plain English:* the agent "sees" the page, decides one UI action,
  acts, re-observes. *Code mapping:* Playwright `page` + a model that emits the next action. *Common mistake:*
  acting on a stale screenshot before the page settles → clicks miss.
- **Grounding strategy: pixels vs DOM/a11y.** Plain English: ground actions in coordinates (vision) or in element
  handles (DOM/accessibility tree). Where it matters: DOM grounding is more reliable when available; pixels are the
  fallback. Common mistake: vision-only on a page with a clean accessibility tree.
- **Set-of-marks / element tagging.** Plain English: overlay numbered marks on actionable elements so the model
  picks "element 7" instead of guessing pixels. Common mistake: unbounded element lists that blow the context.
- **Verification after action.** Plain English: confirm the action's *effect* (URL changed, field filled), don't
  assume. Where it matters: GUI flakiness. Common mistake: charging ahead without checking the step succeeded.
- **API > GUI when possible.** Plain English: a browser agent is the *last resort*; an MCP tool / API is more
  reliable, cheaper, and safer. Where it matters: design Atlas to prefer tools and only fall back to the browser.

### Hands-on build
- `atlas/browser/agent.py` with **Playwright**: a perceive→act→verify loop over a *sandboxed* mock airline site;
  set-of-marks element tagging; explicit waits and a per-step verification check.
- Run 10 booking flows; record success, mean actions, and recovery-after-failure rate.
- **Deliverable:** the browser agent + a run log. **Acceptance:** ≥70% task success on the sandbox, every action
  verified, and a written note on which steps you'd replace with an MCP tool if one existed.

▶ **Practical project:** `web-arena-x/webarena` — self-host its realistic sites and run your Playwright browser agent against a task subset.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `playwright` (`playwright install`) + the self-hosted `web-arena-x/webarena` sandbox.
2. Build `atlas/browser/agent.py`: a perceive (screenshot + a11y) → act → verify loop with set-of-marks tagging.
3. Add explicit `wait_for_load_state` + a per-step post-condition assertion.
4. Run 10 booking flows on the sandbox; record success, mean actions, recovery-after-failure.
5. Compare against the Week-2 API-tool version of the same booking.
6. Write the "replace-with-MCP-tool" note for the flaky steps.
- **Artifact:** `evidence/week08-browser/` (run logs + screenshots) committed.
- **Use `$browser-agent-debugger`:** categorize each failed step (stale view / grounding / wait / verification).
- **Done when:** ≥70% sandbox success, every action verified, API-preference note written.
- **Stretch:** evaluate on a WebVoyager live-task subset.

### Harness / reusable skill — `$browser-agent-debugger`
- **Purpose:** diagnose why a GUI agent step failed (stale view, wrong grounding, missing wait, bad verification).
- **Inputs:** a failing run trace + screenshots. **Outputs:** the failure category, the fix, and whether the step
  should be replaced by an API/MCP tool. **Evidence artifact:** `evidence/week08-browser-debug.md`.

### Common failure modes
- **Stale-view actions** → clicks miss. *Fix:* wait-for-stable + re-screenshot before acting.
- **Pixel-only grounding** → brittle clicks. *Fix:* prefer DOM/a11y + set-of-marks.
- **No effect-verification** → silent failures cascade. *Fix:* assert the post-condition after each action.
- **GUI-when-API-exists** → needless fragility. *Fix:* prefer tools; browser only as fallback.
- **Unsandboxed actions** → real bookings/charges in a lab. *Fix:* always run against a sandbox/mock.

### Evidence artifact
`evidence/week08-browser/` — run logs, screenshots, and the "replace-with-tool" note.

### Skill sink-in
Predict your browser agent's success rate vs the Week-2 API-tool version of the same booking. Run both. Record the
reliability gap and what it teaches about preferring APIs.

### Dataset / benchmark
**WebArena** (`web-arena-x/webarena`, Apache-2.0; self-hostable realistic sites) and **WebVoyager**
(`MinorJerry/WebVoyager`, 2024; 600+ live-web tasks) for browser-agent evaluation; **Mind2Web**
(`OSU-NLP-Group/Mind2Web`, 2023) for action prediction. Use a small WebArena subset on the self-hosted sandbox.

### Code stub
```python
# atlas/browser/agent.py — perceive -> act -> verify, with set-of-marks grounding
from playwright.sync_api import sync_playwright

def step(page, goal):
    page.wait_for_load_state("networkidle")        # avoid stale-view actions
    marks = tag_actionable_elements(page)          # set-of-marks: numbered clickable elements
    obs = {"url": page.url, "marks": marks, "shot": page.screenshot()}
    action = model_choose_action(goal, obs)        # -> {"click": 7} | {"type": (3, "JFK")} | {"done": True}
    apply(page, action, marks)
    assert verify_effect(page, action), "post-condition failed"   # confirm the action did something
    return action
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Success rate | ≥70% on sandbox flows | 40–70% | <40% |
| Grounding | DOM/a11y + set-of-marks, waits | mixed | pixel-only, no waits |
| Verification | Every action's effect checked | some | none |
| API-preference note | Identifies steps to replace with tools | partial | absent |

**Assessment weight:** 6%.

### Readings & sources
- Zhou et al., "WebArena: A Realistic Web Environment for Building Autonomous Agents," ICLR 2024.
- He et al., "WebVoyager: Building an End-to-End Web Agent with Large Multimodal Models," ACL 2024.
- Yang et al., "Set-of-Mark Prompting Unleashes Extraordinary Visual Grounding in GPT-4V," 2023.
- Anthropic "Computer use" (2024) and OpenAI "Operator/Computer-Using Agent" (2025) system docs.

---

### State of the Art (June 2026)
- Production CUA systems: **Claude Computer Use, OpenAI Operator/CUA, Gemini computer use**.
- **Set-of-marks + DOM/accessibility grounding** is standard; multimodal VLMs read the screen directly.
- **WebArena / WebVoyager / Mind2Web** remain the eval substrate — reliability is still the gap.
- **API/MCP is preferred over GUI** whenever a tool exists; browser agents are the last resort.

**More detail:** Production computer-use systems ground actions in screenshots + DOM/a11y with set-of-marks tagging; reliability is still the gap, so prefer API/MCP over GUI when a tool exists.

**References & links:**
- [WebArena (Zhou et al., 2023)](https://arxiv.org/abs/2307.13854) — realistic web-agent environment
- [WebVoyager (He et al., 2024)](https://arxiv.org/abs/2401.13919) — end-to-end multimodal web agent
- [Mind2Web (Deng et al., 2023)](https://arxiv.org/abs/2306.06070) — generalist web action prediction
- [Set-of-Mark (Yang et al., 2023)](https://arxiv.org/abs/2310.11441) — numbered-element visual grounding
- [`web-arena-x/webarena`](https://github.com/web-arena-x/webarena) — self-hostable benchmark sites
<!-- sota:07L08 -->

## Week 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k

**Altitude:** Engineer · **Anchor case:** answer "is Atlas good enough to ship?" with a real, reproducible eval suite — not a demo that worked once.

### Learning goals
- Build a **tau-bench-style** eval: a simulated user + a database + per-task success checks, scored over many trials.
- Use **pass^k** (consistency across k trials), not just pass@1, to measure agent *reliability*.
- Evaluate **long-horizon** behavior and decompose failures (wrong tool, bad arg, planning, grounding, user-handling).
- Wire the eval into CI as a **deploy gate** with a held-out split.

### Concept map
- **Task success check.** Plain English: a programmatic assertion that the final DB state / answer is correct
  (e.g., "expense filed with right amount & category"). Where it matters: removes "looks plausible" subjectivity.
  Common mistake: grading on the transcript's wording instead of the *outcome*.
- **Simulated user.** Plain English: an LLM playing the user with hidden intent + info it reveals only when asked.
  Where it matters: tests the agent's clarification/asking behavior. Common mistake: a too-cooperative simulated
  user that volunteers everything, inflating scores.
- **pass^k vs pass@k.** *Formula:* `pass^k = P(all k independent trials succeed)`. *Plain English:* pass@k rewards
  "succeeds at least once"; **pass^k** rewards "succeeds *every* time" — the right metric for reliability. *Tiny
  example:* 80% per-trial success → pass^5 ≈ 0.33. *Common mistake:* shipping on a lucky pass@1.
- **Failure taxonomy.** Plain English: every failure is categorized (tool-selection, arg error, planning, grounding,
  user-handling, hallucinated tool). Where it matters: tells you *what to fix*. Common mistake: an aggregate score
  with no breakdown → no idea where to improve.
- **Eval-gated deploys.** Plain English: CI runs the suite on a held-out split; deploy only if the gate is green.
  Bridge to Week 10 AgentOps.

### Hands-on build
- `eval/atlas_bench.py`: ≥40 T&E tasks with simulated users + DB state checks; run each k=5 times; report pass^1,
  pass^5, and a failure-category breakdown.
- Run the **official tau-bench / tau2-bench** harness on the `airline` domain for calibration; compare your suite's behavior.
- Add a GitHub Actions job: fail the build if pass^5 on the held-out split drops below threshold.
- **Deliverable:** the eval suite + a results report + the CI gate. **Acceptance:** pass^k reported (not just
  pass@1), failures categorized, and the CI gate actually blocks a deliberately-broken agent.

▶ **Practical project:** `sierra-research/tau-bench` — run the official τ-bench/τ²-bench harness on `airline`, then mirror its structure for the ≥40-task Atlas pass^k suite.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `git clone sierra-research/tau-bench` (+ tau2-bench); install its harness.
2. Run the official `airline` domain for calibration; read its simulated-user + DB-check design.
3. Build `eval/atlas_bench.py`: ≥40 T&E tasks with hidden-info user sims + programmatic DB-state checks.
4. Run each task k=5; compute pass^1, pass^5, and a failure-category breakdown.
5. Add a GitHub Actions job that fails the build if held-out pass^5 drops below threshold.
6. Screenshot the gate blocking a deliberately-broken agent.
- **Artifact:** `evidence/week09-eval/` (task set + pass^k table + CI gate) committed.
- **Use `$agent-eval-suite`:** turn "seems to work" into a reproducible gating eval.
- **Done when:** pass^k reported (not just pass@1), failures categorized, the CI gate actually blocks.
- **Stretch:** add a GAIA long-horizon slice for generalization.

### Harness / reusable skill — `$agent-eval-suite`
- **Purpose:** turn "seems to work" into a reproducible, gating eval.
- **Inputs:** task domain + success criteria. **Outputs:** a task set with programmatic checks, a simulated-user
  spec, a pass^k report, a failure taxonomy, and a CI threshold. **Evidence artifact:** `evidence/week09-eval/`.

### Common failure modes
- **Demo-driven confidence** → one good run = "done." *Fix:* k-trial pass^k on a held-out split.
- **Outcome-blind grading** → scoring wording, not DB state. *Fix:* programmatic outcome checks.
- **Over-helpful user sim** → inflated scores. *Fix:* hidden-info simulated user that only answers when asked.
- **Aggregate-only reporting** → no fix direction. *Fix:* failure-category breakdown.
- **Train/test leakage** → tuned on the eval set. *Fix:* a held-out split the gate uses.

### Evidence artifact
`evidence/week09-eval/` — task set, pass^k table, failure-category chart, and the CI gate config + a screenshot of it blocking a broken build.

### Skill sink-in
Predict Atlas's pass^5 from its pass^1 (assume independence), then measure the real pass^5. Record the gap — it's a
lesson in why reliability ≠ single-run accuracy.

### Dataset / benchmark
**τ-bench / τ²-bench** — `sierra-research/tau-bench` (+ tau2-bench, 2024–2025, MIT): `airline`/`retail` domains with
simulated users, DBs, and pass^k scoring. This is the canonical agent eval; mirror its structure for Atlas. Cross-check
with **GAIA** for long-horizon generalization.

### Code stub
```python
# eval/atlas_bench.py — pass^k over tasks with programmatic outcome checks
def run_task(task, k=5):
    successes = 0
    for _ in range(k):
        db = task.fresh_db()
        agent_run(task.user_sim(), db)             # simulated user reveals info only when asked
        successes += task.check(db)                # programmatic outcome check, not transcript wording
    return successes

def report(tasks, k=5):
    per = {t.id: run_task(t, k) for t in tasks}
    pass1 = sum(s >= 1 for s in per.values()) / len(per)
    passk = sum(s == k for s in per.values()) / len(per)   # ALL k trials succeed -> reliability
    return {"pass@1": pass1, "pass^k": passk, "by_failure": taxonomy(per)}
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Suite quality | ≥40 tasks, outcome checks, hidden-info user | smaller/partial checks | transcript grading |
| Reliability metric | pass^k reported + interpreted | pass@1 only | single demo |
| Failure analysis | Categorized + prioritized fixes | listed | aggregate only |
| CI gate | Blocks a broken build on held-out split | runs but doesn't gate | none |

**Assessment weight:** 8%.

### Readings & sources
- Yao et al., "τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains," 2024 (+ τ²-bench, 2025).
- Mialon et al., "GAIA: A Benchmark for General AI Assistants," ICLR 2024.
- Berkeley CS294 "Agent Evaluation" lecture (2025); UK AISI, "Inspect" eval framework docs (2024–2026).
- Liu et al., "AgentBench: Evaluating LLMs as Agents," ICLR 2024.

---

### State of the Art (June 2026)
- Execution-based agent evals dominate: **τ-bench / τ²-bench** (dual-control, **pass^k** reliability), **SWE-bench Verified/Pro**, **ARC-AGI-2/3**.
- **LLM-as-judge** is the default — with documented biases (**TrustJudge**).
- Eval/observability frameworks: **LangSmith, Braintrust, Arize Phoenix, DeepEval, UK AISI Inspect AI**.
- **Red-teaming / prompt-injection regression** is now a standard part of an agent eval suite (Week 11).

**More detail:** Execution-based agent evals with pass^k reliability (τ²-bench dual-control) and held-out splits replace single demos; LLM-as-judge is standard but biased, so gate on programmatic outcomes plus injection regressions.

**References & links:**
- [τ-bench (Yao et al., 2024)](https://arxiv.org/abs/2406.12045) — tool-agent-user tasks with pass^k
- [SWE-bench (Jimenez et al., 2023)](https://arxiv.org/abs/2310.06770) — real GitHub-issue resolution
- [GAIA (Mialon et al., 2023)](https://arxiv.org/abs/2311.12983) — long-horizon general assistants
- [`sierra-research/tau-bench`](https://github.com/sierra-research/tau-bench) — the canonical agent-eval harness
- [`UKGovernmentBEIS/inspect_ai`](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework
<!-- sota:07L09 -->

## Week 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop

**Altitude:** Engineer · **Anchor case:** run Atlas like a production service — every run traced, every dollar counted, risky actions gated, regressions caught.

### Learning goals
- Instrument an agent with **distributed tracing** (spans for each LLM call, tool call, sub-agent) using **Langfuse**/**LangSmith**.
- Track and **control cost & latency** per run; set budgets and alerts; apply semantic caching.
- Add **guardrails** (input/output filters, action allow-lists) and **human-in-the-loop** approval for high-risk actions.
- Define the AgentOps lifecycle: trace → eval → gate → canary → monitor → rollback.

### Concept map
- **Tracing / spans.** *Shapes:* a run is a tree of spans (root run → LLM calls → tool calls → sub-agents), each with
  inputs/outputs/tokens/latency. *Plain English:* a flight-recorder for every agent decision. *Code mapping:*
  `@observe` decorators / SDK callbacks → Langfuse. *Common mistake:* logging only the final answer, so you can't see
  *why* it went wrong.
- **Cost & latency accounting.** *Formula:* `cost = Σ (in_tokens·p_in + out_tokens·p_out)` over all calls in the run.
  *Plain English:* an agent's bill is the sum over every model/tool call, including retries and sub-agents. *Common
  mistake:* pricing the first call and ignoring the 6 tool-loop calls behind it.
- **Guardrails.** Plain English: programmatic checks on inputs (block injection/PII) and outputs (schema, policy,
  toxicity), plus an **action allow-list** (which tools may run unattended). Where it matters: containment. Common
  mistake: guardrails only on the final output, none on tool *actions*.
- **Human-in-the-loop gates.** Plain English: pause for human approval on high-risk/irreversible actions (large
  spend, external email, prod writes). Where it matters: the difference between an assistant and a liability.
- **AgentOps lifecycle.** trace → eval (Week 9) → eval-gated deploy → canary/shadow → monitor → rollback. The
  production discipline that makes agents shippable.

### Hands-on build
- Wire **Langfuse** into Atlas: every LLM/tool/sub-agent call is a span; tag runs with cost, latency, success.
- Add a **cost budget** (abort if a run exceeds $X), **semantic caching** for repeat policy lookups, an **input
  guardrail** (PII/injection screen), and a **HITL approval** for actions over $500 or external sends.
- Build a Langfuse dashboard: cost/run, p95 latency, success rate, top failure categories (from Week 9).
- **Deliverable:** an instrumented Atlas + a dashboard screenshot + a one-page "AgentOps runbook." **Acceptance:**
  every action is traceable end-to-end, a run that exceeds budget is aborted, and a >$500 action triggers the human gate.

▶ **Practical project:** `langfuse/langfuse` — self-host it and instrument Atlas so every LLM/tool/sub-agent call is a span with cost and latency.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `langfuse` SDK + a self-hosted Langfuse (Docker compose).
2. Decorate Atlas with `@observe`; make every LLM/tool/sub-agent call a child span tagged with cost + latency.
3. Add a per-run cost budget (abort over $X) + semantic caching for repeat policy lookups.
4. Add an input guardrail (PII/injection screen) + a HITL gate for actions >$500 / external sends.
5. Build a Langfuse dashboard: cost/run, p95 latency, success rate, top failure categories.
6. Write the one-page AgentOps runbook (budgets, guardrails, HITL, rollback).
- **Artifact:** `evidence/week10-agentops/` (dashboard screenshot + runbook + over-budget trace) committed.
- **Use `$agentops-instrumenter`:** add tracing, budgets, guardrails, HITL triggers from the risk profile.
- **Done when:** every action is traceable end-to-end, an over-budget run aborts, a >$500 action gates.
- **Stretch:** wire model routing (cheap-first, escalate on hard steps) and measure savings.

### Harness / reusable skill — `$agentops-instrumenter`
- **Purpose:** make any agent observable, budgeted, and gated.
- **Inputs:** an agent + its risk profile. **Outputs:** tracing on all calls, a per-run cost/latency budget, guardrail
  + allow-list config, HITL triggers, and the dashboard panels to watch. **Evidence artifact:** `evidence/week10-agentops/`.

### Common failure modes
- **Answer-only logging** → blind debugging. *Fix:* span every call (LLM, tool, sub-agent).
- **Cost blindness** → a tool loop quietly burns $$$. *Fix:* per-run budgets + alerts; count *all* calls.
- **Output-only guardrails** → unsafe *actions* slip through. *Fix:* guard tool actions + allow-list, not just text.
- **No human gate on irreversible actions** → real-world harm. *Fix:* HITL on spend/sends/prod writes.
- **No rollback path** → a bad deploy stays live. *Fix:* canary + one-command rollback in the runbook.

### Evidence artifact
`evidence/week10-agentops/` — dashboard screenshot, the runbook (budgets, guardrails, HITL triggers, rollback steps), and a trace showing a blocked over-budget run.

### Skill sink-in
Predict Atlas's mean cost per resolved ticket before instrumenting. Measure it from traces. Record the surprise
(it's usually the hidden tool-loop calls) and one optimization (caching/cheaper model on easy steps).

### Dataset / benchmark
Operational data: replay the **Week-9 eval task set** through the instrumented agent to populate traces, cost, and
latency distributions. Tooling refs: **Langfuse** (`langfuse/langfuse`, MIT, self-host) and **LangSmith** (managed);
**NeMo Guardrails** (`NVIDIA/NeMo-Guardrails`, Apache-2.0) and **Guardrails AI** (`guardrails-ai/guardrails`).

### Code stub
```python
# atlas/observability.py — tracing + budget + HITL gate
from langfuse.decorators import observe, langfuse_context

@observe()                                            # span: full run
def resolve(ticket):
    if pii_or_injection(ticket): return REFUSE        # input guardrail
    answer = agent_run(ticket, on_call=trace_call)    # each LLM/tool call -> child span
    cost = langfuse_context.get_current_observation().calculated_total_cost
    if cost > BUDGET: raise Budget("aborted: over per-run budget")   # cost control
    if needs_human(answer):                           # >$500 / external send -> human-in-the-loop
        return await_human_approval(answer)
    return answer
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Tracing | Every LLM/tool/sub-agent call spanned | top-level only | answer-only |
| Cost control | Per-run budget + caching, all calls counted | budget only | none |
| Guardrails | Input + output + action allow-list | output only | none |
| HITL + rollback | High-risk gate + rollback runbook | gate only | neither |

**Assessment weight:** 7%.

### Readings & sources
- Langfuse and LangSmith observability docs (2025–2026); Arize Phoenix tracing docs (2025).
- NVIDIA, "NeMo Guardrails" (Rebedea et al., 2023) + Guardrails AI docs (2025).
- Krish Naik, "AgentOps / LLMOps Industry Projects" — observability + cost + HITL gates (krishnaik.in, 2025–2026).
- Berkeley CS294 "Deploying Real-World Agents" (Sierra) lecture, 2025.

---

### State of the Art (June 2026)
- Observability stacks (**Langfuse, LangSmith, Arize Phoenix**) capture full **trajectories** with token/cost spans.
- The cost trio: **prompt caching** (up to 90% off static prefixes) + **semantic caching** + **model routing**.
- **Runtime guardrails** (input/output validators, prompt-injection focus) are standard.
- Operate four assets explicitly: **weights, data, prompts, eval metrics**.

**More detail:** Observability captures full trajectories with token/cost spans; the cost trio (prompt caching, semantic caching, model routing) plus runtime guardrails makes agents shippable.

**References & links:**
- [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-hostable LLM/agent tracing
- [Langfuse docs](https://docs.langfuse.com) — spans, cost, evals
- [`NVIDIA/NeMo-Guardrails`](https://github.com/NVIDIA/NeMo-Guardrails) — programmable guardrails
- [`guardrails-ai/guardrails`](https://github.com/guardrails-ai/guardrails) — output/action validators
- [Anthropic prompt-caching docs](https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching) — the top cost lever
<!-- sota:07L10 -->

## Week 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10

**Altitude:** Engineer · **Anchor case:** red-team Atlas — a malicious expense receipt with hidden instructions tries to make it email data or approve fraud — then harden it.

### Learning goals
- Explain **prompt injection** (direct & **indirect**) and why it is the defining agent vulnerability (untrusted content enters the same context as instructions).
- Map agent risks to the **OWASP LLM Top 10 (2025)** and the MCP/tool trust boundary from Week 3.
- Implement layered defenses: input screening, **privilege separation / least-privilege tools**, output/action allow-lists, dual-LLM/quarantine patterns, and human gates for high-impact actions.
- Build a **prompt-injection regression test** that runs in CI alongside the Week-9 evals.

### Concept map
- **Direct vs indirect injection.** Plain English: *direct* = the user types "ignore your rules"; *indirect* =
  malicious instructions hide in content the agent *reads* (a receipt, a web page, an email, an MCP resource). Where
  it matters: indirect injection is the real threat for tool-using agents — the attacker isn't the user. Common
  mistake: defending only the user prompt while the agent ingests poisoned documents.
- **Why agents are uniquely exposed.** Plain English: agents take *actions* (send email, move money, write to DBs),
  so a successful injection isn't just a bad answer — it's an unauthorized action. Common mistake: treating agent
  security as "content moderation."
- **Least-privilege & privilege separation.** *Plain English:* the agent should hold only the tools/scopes the task
  needs; high-impact tools require human approval or a separate trusted component. *Code mapping:* per-task tool
  allow-lists; the "planner sees untrusted data, executor never does" (dual-LLM) pattern. *Common mistake:* one
  agent with every tool and full credentials.
- **Tool/MCP poisoning & confused deputy.** Plain English: a malicious tool description or resource can hijack the
  agent; the agent can be tricked into misusing its legitimate authority. Where it matters: vet MCP servers; pin
  versions; scope credentials. Common mistake: installing arbitrary MCP servers with broad access.
- **Defense in depth.** Plain English: no single filter is sufficient; layer screening + scoping + allow-lists +
  human gates + monitoring (Week 10). Common mistake: a single "injection classifier" as the whole defense.

### Hands-on build
- Build an **attack set**: 15 indirect-injection payloads embedded in receipts/web content/emails Atlas processes
  (exfiltration, unauthorized send, policy-override, tool-abuse).
- Harden Atlas: input/content screening, **least-privilege tool scoping**, an action allow-list, a dual-LLM
  quarantine for untrusted content, and HITL on high-impact actions. Re-run the attack set.
- Add `eval/injection_regression.py` to CI: the build fails if any known attack succeeds.
- **Deliverable:** the attack set + a before/after defense report + the CI injection gate. **Acceptance:** every
  documented attack that succeeded pre-hardening is blocked post-hardening, and the regression test gates CI.

▶ **Practical project:** `ethz-spylab/agentdojo` — run its prompt-injection attack/defense harness against hardened Atlas and report attack-success-rate before vs after.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `git clone ethz-spylab/agentdojo`; install its attack/defense harness.
2. Build an attack set: 15 indirect-injection payloads in receipts/web/email Atlas ingests.
3. Run them against un-hardened Atlas; record which succeed.
4. Harden: content screening, least-privilege tool scoping, action allow-list, dual-LLM quarantine, HITL on high-impact.
5. Re-run the attack set + AgentDojo's harness; report attack-success-rate before vs after.
6. Add `eval/injection_regression.py` to CI; the build fails if any known attack succeeds.
- **Artifact:** `evidence/week11-redteam/` (attack set + before/after table mapped to OWASP LLM Top 10) committed.
- **Use `$agent-red-team`:** attack systematically, then verify each defense layer.
- **Done when:** every pre-hardening success is now blocked and the regression gates CI.
- **Stretch:** add InjecAgent payloads and re-measure.

### Harness / reusable skill — `$agent-red-team`
- **Purpose:** systematically attack an agent and verify defenses before shipping.
- **Inputs:** the agent + its tools + the content it ingests. **Outputs:** an attack set mapped to OWASP LLM Top 10,
  a before/after success table, the defense layers added, and the regression test. **Evidence artifact:** `evidence/week11-redteam/`.

### Common failure modes
- **User-prompt-only defense** → indirect injection via ingested content wins. *Fix:* treat *all* external content as untrusted.
- **Over-privileged agent** → injection → real damage. *Fix:* least-privilege tools + human gate on high-impact actions.
- **Single-filter faith** → one classifier bypassed. *Fix:* defense in depth (screen + scope + allow-list + gate + monitor).
- **Unvetted MCP servers** → tool poisoning. *Fix:* pin/vet servers, scope credentials, review descriptions.
- **No regression test** → a fixed hole silently reopens. *Fix:* injection tests in CI.

### Evidence artifact
`evidence/week11-redteam/` — the attack set, the before/after table mapped to OWASP LLM Top 10, defense notes, and the CI injection gate.

### Skill sink-in
Predict which of your 15 attacks will succeed against un-hardened Atlas. Run them. Record which *unexpected* one
worked — that surprise is the security lesson.

### Dataset / benchmark
**AgentDojo** (`ethz-spylab/agentdojo`, 2024 — prompt-injection attacks/defenses for tool-using agents),
**InjecAgent** (`uiuc-kang-lab/InjecAgent`, 2024), and the **OWASP Top 10 for LLM Applications (2025)** checklist.
Use AgentDojo's harness to score your attack/defense and report attack-success-rate before vs after.

### Code stub
```python
# atlas/security.py — dual-LLM quarantine + least-privilege + allow-list
def handle_untrusted(content, task):
    facts = quarantine_llm(content, schema=ExtractedFacts)   # untrusted text -> typed facts ONLY,
    #   the quarantine model has NO tools and cannot issue actions (privilege separation)
    plan = planner_llm(task, facts)                          # planner sees structured facts, not raw text
    for action in plan:
        assert action.tool in ALLOWED_TOOLS[task.kind], "tool not on allow-list"   # least privilege
        if high_impact(action):                              # send/spend/prod-write
            require_human(action)                            # HITL gate
        run(action)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Attack coverage | 15+ incl. indirect, mapped to OWASP LLM Top 10 | direct only | toy attacks |
| Defense depth | Screen + scope + allow-list + dual-LLM + HITL | 2–3 layers | single filter |
| Before/after | All pre-success attacks now blocked, measured | partial | unmeasured |
| CI regression | Injection gate blocks the build | runs | none |

**Assessment weight:** 7%.

### Readings & sources
- Greshake et al., "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection," AISec 2023.
- Debenedetti et al., "AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents," NeurIPS 2024.
- Willison, "Dual LLM pattern / prompt injection" essays (2023–2025); OWASP, "Top 10 for LLM Applications" (2025).
- Berkeley CS294 "Agentic AI Safety & Security" (Dawn Song, 2025); Hou et al., "MCP Security Threats" (2025).

---

### State of the Art (June 2026)
- **OWASP LLM Top 10 (2025)** + **AgentDojo / InjecAgent** are the injection benchmarks.
- The **"lethal trifecta"** (untrusted content + tools + exfiltration) framing drives **dual-LLM/quarantine + least-privilege** defenses.
- **MCP auth hardening** lands in the 2026-07-28 spec; **tool-poisoning** and **confused-deputy** are named threats.
- **EU AI Act** GPAI obligations apply **Aug 2, 2026** — deployed agent systems are in scope.

**References & links:**
- [Model Context Protocol docs](https://modelcontextprotocol.io)
- [EU AI Act - implementation timeline](https://artificialintelligenceact.eu/implementation-timeline/)


<!-- sota:07L11 -->

## Week 12 — Capstone: Deploy a Multi-Agent System with an MCP Server

**Altitude:** Engineer (graduating to Specialist) · **Anchor case:** ship **Atlas** for real — the full T&E operations agent, deployed, evaluated, secured, and operated.

### Learning goals
- Integrate the whole course into one deployed system: MCP server + orchestrator/specialists (A2A) + memory + planning + eval gate + AgentOps + security.
- Produce an **evidence packet** that proves the system is *reliable and safe*, not just demoable.
- Defend design trade-offs (single vs multi-agent, framework, autonomy level, cost) with data from your own runs.

### Concept map (review as a build checklist)
- Anatomy & loop (W1) → tools (W2) → **MCP server** (W3) → planning (W4) → memory (W5) → framework (W6) →
  **multi-agent + A2A** (W7) → browser fallback (W8) → **eval gate** (W9) → **AgentOps** (W10) → **security** (W11).

### Hands-on build
- Ship **Atlas** end-to-end with: (a) a custom **MCP server** for the expense/policy backend; (b) an **orchestrator
  + ≥2 specialists** over an A2A-style contract; (c) a **memory layer** (short + long-term); (d) a **≥40-task
  tau-bench-style eval** with pass^k, gating CI on a held-out split; (e) **Langfuse** tracing with per-run cost &
  latency; (f) **guardrails + a passing prompt-injection regression**; (g) deployed (Docker + small cloud box / Modal).
- **Deliverable:** the deployed system + a `capstone/` evidence packet + a 15-minute demo + a 3-page design memo.
  **Acceptance:** the eval gate is green on held-out tasks; every agent action is traced with cost; a documented
  injection attack is blocked; and every claim in the memo links to a file/trace in the packet.

▶ **Practical project:** `langchain-ai/langchain` — ship the capstone Atlas on production LangGraph (durable checkpointing, streaming, HITL) wired to your MCP server and pass^k gate.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `langgraph` + `mcp` + `langfuse` + Docker; one small cloud box or Modal for deploy.
2. Assemble Atlas: MCP server + orchestrator/≥2 A2A specialists + short/long memory + planner.
3. Wire the ≥40-task pass^k eval as a CI deploy gate on a held-out split.
4. Instrument with Langfuse (per-run cost + latency) + guardrails + the injection regression.
5. Deploy (Docker + cloud/Modal); run the held-out eval + a documented injection attack.
6. Assemble the evidence packet + 3-page design memo (every claim links to a file/trace).
- **Artifact:** deployed Atlas + `capstone/` evidence packet + 15-min demo committed.
- **Use `$agent-system-evidence-packet`:** bundle architecture + pass^k + traces + cost + security + runbook.
- **Done when:** the eval gate is green on held-out, every action is traced, the injection attack is blocked.
- **Stretch:** add an open-weight fallback model and re-run the gate to prove vendor-neutrality.

### Harness / reusable skill — `$agent-system-evidence-packet`
- **Purpose:** assemble architecture diagram + eval report (pass^k) + trace samples + cost analysis + security
  report + runbook into one reviewable bundle. **Evidence artifact:** the packet itself (this *is* the deliverable).

### Common failure modes
- **Demo-ware** → it works once on stage, not on held-out tasks. *Fix:* the eval gate is the acceptance bar.
- **Untraced actions** → can't explain a production failure. *Fix:* every action spanned with cost.
- **Security afterthought** → ships with an open injection hole. *Fix:* the injection regression must be green.
- **Unjustified architecture** → multi-agent "because it's cool." *Fix:* defend with your single-vs-multi numbers.

### Evidence artifact
`capstone/` — code, MCP server, eval report (pass^k + failure taxonomy), Langfuse trace export + cost analysis,
security/red-team report, AgentOps runbook, architecture diagram, and the 3-page design memo.

### Skill sink-in
Before the final held-out eval run, write down the pass^5 you expect to ship at. Run it. The gap between your
expectation and the gated reality is the capstone's real lesson — record it and the one change that closed it most.

### Dataset / benchmark
Your **≥40-task Atlas eval suite** (built in Week 9, tau-bench style) on a frozen held-out split is the capstone
benchmark; the **AgentDojo** injection set (Week 11) is the security benchmark. Both must be green to pass.

### Code stub
```python
# capstone/ci_gate.py — the single command that decides "ship or not"
def ship_gate():
    evals = run_eval_suite("eval/atlas_bench.py", split="heldout", k=5)
    sec   = run_injection_regression("eval/injection_regression.py")
    ops   = check_tracing_coverage()              # every action has a span + cost
    assert evals["pass^k"] >= THRESHOLD, f"eval gate failed: {evals['pass^k']}"
    assert sec["attack_success_rate"] == 0.0,  "security gate failed: an injection succeeded"
    assert ops["coverage"] == 1.0,             "ops gate failed: untraced actions"
    return "SHIP"
```

### Graded rubric table
| Criterion | Excellent (A) | Adequate (B/C) | Failing |
|-----------|---------------|----------------|---------|
| Integration | MCP + multi-agent/A2A + memory + eval + ops + security all live | most components, some stubbed | a demo script |
| Reliability | pass^k gate green on held-out split | passes loosely | demo-only |
| Observability + cost | Every action traced with cost; analysis present | partial tracing | none |
| Security | Documented injection blocked; regression in CI | basic defense | open hole |
| Evidence + defense | Every memo claim links to a file/trace; trade-offs defended with data | mostly | assertions |

**Assessment weight:** 25% (course capstone).

### Readings & sources
- Berkeley CS294/194-196 Agentic AI capstone guidance (tiered agent build, Dawn Song, 2025); Stanford CS329A project rubric (2025).
- Anthropic "Building Effective Agents" + Claude Agent SDK production guide (2024–2026); MCP spec (2024–2026).
- Yao et al., "τ-bench" (2024); Debenedetti et al., "AgentDojo" (2024); OWASP LLM Top 10 (2025).
- Krish Naik, "Agentic AI with AgentOps" end-to-end deployment projects (krishnaik.in, 2025–2026).

---

### State of the Art (June 2026)
- The 2026 production bar: **MCP tools + A2A orchestration + agent memory + pass^k eval gate + trajectory tracing + injection regression**.
- Frontier models **Claude Opus 4.8 / GPT-5.5 / Gemini 3.1 Pro** (1M context, tunable thinking) — provider-swappable.
- **EU AI Act** enforcement (Aug 2026) makes the evidence packet / audit trail a compliance asset.
- Open-weight fallbacks (**DeepSeek V4, Qwen 3.5, Llama 4**) keep the system vendor-neutral.

**References & links:**
- [`langchain-ai/langchain`](https://github.com/langchain-ai/langchain)
- [Model Context Protocol docs](https://modelcontextprotocol.io)
- [EU AI Act - implementation timeline](https://artificialintelligenceact.eu/implementation-timeline/)


<!-- sota:07L12 -->

## Course-level outcomes

By the end you can: design an agent from its anatomy up; write safe typed tools and **expose them over MCP**; pick a
reasoning/planning strategy by task structure; engineer memory that helps without bloating; choose and use the major
**agent frameworks**; build **multi-agent systems over A2A**; deploy **browser/computer-use** agents when no API
exists; **evaluate** agents with tau-bench-style pass^k gates; run them as a production service with **AgentOps**
(tracing, cost, guardrails, HITL); and **secure** them against prompt injection. Most importantly you carry a
**reusable agent-engineering harness** into the rest of the program.

## Skills produced (reused program-wide)
`$agent-anatomy-map` · `$tool-schema-designer` · `$mcp-server-scaffold` · `$reasoning-strategy-picker` ·
`$agent-memory-designer` · `$framework-selector` · `$multi-agent-architect` · `$browser-agent-debugger` ·
`$agent-eval-suite` · `$agentops-instrumenter` · `$agent-red-team` · `$agent-system-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `microsoft/ai-agents-for-beginners` — a structured tour of agent patterns (planning, tool use, multi-agent) to anchor the anatomy/loop framing — Lectures 1, 6, 7
- `huggingface/agents-course` — hands-on agent builds across frameworks (smolagents, LangGraph, tool calling) — Lectures 2, 6
- `NirDiamant/GenAI_Agents` — a large, runnable catalog of agent implementations (memory, RAG, orchestration, debate) to mine for patterns — Lectures 5, 7
- `The-Pocket/PocketFlow` — a minimalist from-scratch agent framework that makes the bare loop legible before the heavyweight frameworks — Lectures 1, 4
- `krishnaik06/Agentic-LanggraphCrash-course` — a LangGraph crash course (stateful graphs, checkpointing, human-in-the-loop) — Lecture 6
- `langchain-ai/langchain` — the LangGraph reference framework you rebuild Atlas in (durability, streaming, HITL) — Lecture 6

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Secure MCP agent** — an MCP tool server with auth, scopes, and audit logs plus an agent that consumes it safely — *Lectures 3, 11*
- **Self-evolving rubric lab** — rubric generation with judge-agreement and bias / reward-hacking tests — *Lectures 9–10*



# Part B — AI-First Software Development

**Track:** Engineering · **Altitude:** Builder → Engineer · **Length:** 12 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** you can build and run a small web service (any language, JS/TS or Python preferred), use git,
and read a stack trace. No prior experience with AI coding tools required. Subject 07 (AI Agent Engineering)
helps but is not required — Weeks 3–5 re-derive the agent loop in a coding context.
**Pedagogy:** the program's `concept → code → critique → reflection → rebuild` loop, applied to the craft of
*building software with AI in the loop*. The throughline is the harness ladder `prompt → workflow → skill →
harness`: you start by *prompting* a coding model, then build *workflows* (PRD → plan → diff), then a reusable
*coding-agent skill*, then a full *delivery harness* (tests + review + security + deploy gates). The recurring
discipline: **AI writes more code faster, so your leverage moves from typing to specifying, reviewing, testing,
and gating.**

**Course anchor case (carried all 12 weeks):** *"Quill" — a small but real SaaS: a team note-taking app with
auth, a notes API, search, and a web UI.* It is a live codebase you extend feature-by-feature with AI coding
agents — realistic enough to hit context limits, security pitfalls, flaky tests, and deploy/rollback decisions,
small enough that one student owns the whole stack. A second throwaway case, *a CLI utility*, is used where a
self-contained example is clearer (e.g., building the coding agent in Week 3).

**What you leave with:** the **Quill** repo with a shipped, reviewed, tested, deployed feature; a from-scratch
coding agent; a hardened AI-IDE setup with project context-as-MCP-resources; an AI test + security + review
gate wired into CI; and a **reusable AI-SWE harness** of ten skills (`$spec-to-prd` … `$ai-incident-runbook`).

> **Provider-current note (June 2026).** Labs name **Claude Code** (CLI/agent), **Cursor** (AI IDE), **Warp**
> (AI terminal), **MCP** (GA in VS Code/Copilot/Claude), and **Semgrep** (SAST) as defaults because they are the
> current state of practice — but the *concepts* (context curation, autonomy gates, AI-generated tests, secure
> "vibe coding," review gates, post-deploy monitoring) are tool-neutral and the labs run against any modern
> coding model. When a lab calls a model, default to the latest capable Claude (Opus 4.x / Sonnet 4.x).

---


## Course-level Assessment & grading

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly labs (W1–W11, weighted below) | 75% | the AI-SWE skill ladder, one shippable artifact per week |
| Capstone (W12): a real feature shipped end-to-end | 25% | spec → agent → tests → review → security → deploy → monitor |

Weekly lab weights (sum to the 75%): W1 5 · W2 6 · W3 8 · W4 7 · W5 7 · W6 6 · W7 8 · W8 8 · W9 7 · W10 6 · W11 7.
Capstone 25. **Total = 100%.** Each week is graded on its rubric table. Labs are individual; the capstone may be
solo or paired (paired = higher acceptance bar). Every deliverable lands as a **PR on the Quill repo** with the
evidence artifact attached, so grading mirrors real code review.

## Tooling & environment (June 2026)

- **Coding agents / IDEs:** **Claude Code** (terminal agent + SDK), **Cursor** (AI IDE), GitHub **Copilot**
  (agent mode), plus one open option (**Aider** + an open-weight model via Ollama/vLLM) so no lab is vendor-locked.
- **Models:** Claude Opus 4.x / Sonnet 4.x (extended thinking) default; an open-weight code model (e.g., Qwen3-Coder
  / DeepSeek-V3) as the offline fallback.
- **Protocol:** **MCP** for exposing project context (PRDs, schemas, runbooks) as **resources** to the IDE/agent.
- **Terminal & sandboxing:** **Warp** (AI terminal); sandboxed execution via **Docker** dev containers / **E2B** /
  Claude Code's sandbox; ephemeral cloud sandboxes for agent-run code.
- **Testing:** `pytest` / `vitest`; **Hypothesis** (property-based); coverage via `coverage.py` / `c8`; mutation
  testing via `mutmut` / `Stryker`.
- **Security:** **Semgrep** (SAST), **Trivy**/**Grype** (deps/containers), **gitleaks** (secrets), OWASP
  **ZAP** (DAST), OWASP **Juice Shop** as a vulnerable target.
- **Review & CI:** GitHub Actions; AI review via **Claude Code review** / **CodeRabbit**; branch protection + gates.
- **UI building:** **v0**, **Lovable**, **Bolt.new** for generated UI, reconciled into the real codebase.
- **Eval:** **SWE-bench Verified** harness for measuring coding-agent capability; **Langfuse** for agent run traces.
- **Deploy/monitor:** Docker + a PaaS (Vercel/Fly/Render); **Sentry** + **OpenTelemetry** + a logs/metrics stack.

## Capstone spec (preview; full rubric in Week 12)

Ship one **non-trivial Quill feature** (e.g., shared notebooks with per-note permissions, or full-text search with
ranking) **end-to-end with an AI coding agent**: a written **PRD/spec** (exposed as an MCP resource), an
agent-built implementation with **human-in-the-loop gates**, **AI-generated + human-curated tests** (incl. one
property-based test) with coverage on changed lines, a passing **SAST/secret/deps** scan, an **AI + human code
review** gate, deployment behind a **canary/rollback**, and **post-deploy monitoring** with one practiced incident
drill. Acceptance = the feature is live behind a flag, all CI gates (tests/security/review) are green, and you can
roll it back in one command and explain the monitoring you'd watch.

---

## Week 1 — How Coding LLMs Actually Work (a usable mental model)

**Altitude:** Builder · **Format:** 3h lecture + 4h lab
**Anchor case:** profile a coding model on Quill — where it shines (boilerplate, tests, glue) and where it confidently fails (your codebase's conventions, cross-file logic).

### Learning goals
- Explain how a code model produces code: next-token prediction over code+text, trained on public repos, conditioned on the **context you give it** — not a database lookup of "the right answer."
- Reason about **context window, tokenization of code, and "lost in the middle"** to predict when a model will fail.
- Distinguish **capability** (can it write this function?) from **grounding** (does it know *your* repo's types/conventions?).
- Build a personal "what to delegate vs what to write" map for AI-first development.

### Concept map
- **Next-token prediction over code.** *Plain English:* the model continues the most likely code given the prompt +
  context; it has no execution, no ground truth, no access to your private repo unless you put it in context. Where
  it matters: it explains both fluency and hallucination. *Common mistake:* treating output as verified fact rather
  than a *plausible draft to test*.
- **Context window & code tokenization.** *Formula (budget):* `usable ≈ window − (system + tools + history)`. *Plain
  English:* everything the model "knows" right now is what fits in the window; code is token-dense (identifiers,
  whitespace). *Tiny example:* a 200k-token window sounds huge until a monorepo's relevant files are 400k tokens.
  *Common mistake:* pasting the whole repo and assuming the model reads it all evenly.
- **Lost in the middle.** Plain English: models attend best to the start and end of long contexts; middle content
  gets neglected. Where it matters: ordering and *curating* context beats dumping it. *Common mistake:* burying the
  one critical constraint in the middle of a 50-file paste.
- **Capability vs grounding.** Plain English: a model can write a perfect generic auth handler (capability) and
  still violate your project's error-handling convention (grounding). Where it matters: most "AI got it wrong"
  moments are grounding failures fixable with better context (Week 4). *Common mistake:* blaming capability and
  switching models when the fix is context.
- **Determinism & temperature.** Plain English: the same prompt can yield different code run-to-run; pin temperature
  and seed where you need reproducibility (e.g., evals).

### Hands-on build (the lab)
- `experiments/code_profile/`: give a model 12 Quill tasks across a difficulty ladder (one-liner → cross-file
  refactor → bug fix needing repo conventions). Record pass/fail and *why* each failure happened (capability vs
  grounding vs context-overflow).
- Build a one-page **delegation map**: tasks to hand the agent fully, tasks to pair on, tasks to write yourself.
- **Deliverable:** the profile table + the delegation map. **Acceptance:** every failure is labeled with a cause
  (not just "wrong"), and the delegation map's claims are backed by your profile results.

▶ **Practical project:** `microsoft/generative-ai-for-beginners` — use its code-generation lessons to profile a model's capability-vs-grounding failure shape on Quill.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env (Python) or Node + your coding model SDK; skim `microsoft/generative-ai-for-beginners` code-gen lessons.
2. Build `experiments/code_profile/`: 12 Quill tasks on a ladder (one-liner → cross-file → convention-bound).
3. Run each with curated (not whole-repo) context; record pass/fail.
4. Label every failure: capability / grounding / context-overflow.
5. Pin temperature + seed; re-run to confirm reproducibility.
6. Write the one-page delegation map (delegate / pair / self).
- **Artifact:** `evidence/week01-profile.md` + delegation map committed.
- **Use `$coding-model-profile`:** learn the model's failure shape on THIS repo before trusting it.
- **Done when:** every failure is cause-labeled and the delegation map is backed by results.
- **Stretch:** repeat with an open-weight code model (Qwen3-Coder) and compare failure shapes.

### Harness / reusable skill — `$coding-model-profile`
- **Purpose:** before trusting a model on a codebase, learn its failure shape *here*.
- **Inputs:** a repo + a difficulty ladder of tasks. **Outputs:** a pass/fail table, a failure-cause label per task
  (capability/grounding/context), and a delegation map. **Evidence artifact:** `evidence/week01-profile.md`.

### Common failure modes
- **Output-as-truth** → shipping unverified generated code. *Fix:* treat every generation as a draft to test/review.
- **Context dumping** → "lost in the middle," wasted tokens. *Fix:* curate and order context (preview of Week 4).
- **Grounding/capability confusion** → switching models to fix a context problem. *Fix:* label the failure cause first.
- **Reproducibility blindness** → "it worked yesterday." *Fix:* pin temperature/seed for anything you measure.

### Evidence artifact
`evidence/week01-profile.md` (12-task table with failure causes) + `evidence/week01-delegation-map.md`.

### Skill sink-in
Before profiling, **predict** which 3 of the 12 tasks the model will fail and why. Run them. Record which failure
**surprised** you — usually a grounding failure you assumed was capability.

### Dataset / benchmark
**HumanEval** (`openai/human-eval`, MIT; 164 hand-written problems) and **MBPP** (`google-research/mbpp`,
~1k problems) to calibrate raw capability; **RepoBench** (`Leolty/repobench`, 2023) and **CrossCodeEval**
(`amazon-science/cceval`, 2023) for *repo-grounded* completion. Use small subsets — capability vs grounding is the point.

### Code stub
```python
# experiments/code_profile/run.py — profile capability vs grounding on YOUR repo
LADDER = [("oneliner", tasks_oneliner), ("crossfile", tasks_crossfile), ("convention", tasks_convention)]

def profile(model, repo):
    rows = []
    for tier, tasks in LADDER:
        for t in tasks:
            out = model.complete(prompt=t.prompt, context=curate(repo, t))  # curated, not whole-repo
            ok = run_tests(t, out)
            cause = None if ok else classify_failure(out, t)  # capability | grounding | context_overflow
            rows.append({"tier": tier, "task": t.id, "ok": ok, "cause": cause})
    return rows
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Profile rigor | 12 tasks across ladder, all run | partial | toy only |
| Failure labeling | Every failure → capability/grounding/context | some labeled | "wrong" |
| Delegation map | Backed by profile data | plausible | guess |
| Reproducibility | Temp/seed pinned, re-runnable | mostly | unpinned |

**Assessment weight:** 5%.

### Readings & sources (2025–2026)
- Chen et al., "Evaluating Large Language Models Trained on Code" (Codex/HumanEval), 2021.
- Liu et al., "Lost in the Middle: How Language Models Use Long Contexts," TACL 2024.
- Ding et al., "CrossCodeEval: A Diverse and Multilingual Benchmark for Cross-File Code Completion," NeurIPS 2023.
- CMU 11-711 "In-Context Learning & Prompting" lecture (Sean Welleck, 2025); Karpathy, "Software is changing (again)"/"vibe coding" talks (2025).

---

### State of the Art (June 2026)
- Coding frontier: **GPT-5.5** (~59% SWE-bench, strict-coding lead), **Claude Opus 4.8**, **Gemini 3.1 Pro**; 1M context standard.
- Open-weight code models **Qwen3-Coder** and **DeepSeek V4** run offline via vLLM/Ollama for vendor-free labs.
- **"Lost in the middle"** persists despite 1M windows — context curation is still decisive.
- The capability-vs-grounding gap is mostly a **context** problem, not a model problem.

**References & links:**
- [`microsoft/generative-ai-for-beginners`](https://github.com/microsoft/generative-ai-for-beginners)
- [vLLM docs](https://docs.vllm.ai)
- [Jimenez et al., 2023 - SWE-bench](https://arxiv.org/abs/2310.06770)


<!-- sota:08L01 -->

## Week 2 — Prompt Engineering for Developers: Specs, Context, and PRDs

**Altitude:** Builder · **Anchor case:** turn a vague Quill request ("let people share notes") into a precise spec + curated context the agent can execute without guessing.

### Learning goals
- Write developer prompts as **specifications**: goal, constraints, interfaces, acceptance tests, and non-goals.
- Curate context deliberately (relevant files, types, conventions, examples) and order it for the "lost in the middle" effect.
- Use **few-shot examples from your own codebase** to ground style/conventions.
- Convert a feature request into a **PRD** (Product Requirements Doc) the agent and humans share as the source of truth.

### Concept map
- **Spec over wish.** Plain English: "let people share notes" is a wish; a spec says *who* shares, *what
  permissions*, *which endpoints/types change*, and *how we'll know it's done*. Where it matters: the agent fills
  ambiguity with guesses; specs remove guesses. *Common mistake:* prompting the *wish* and debugging the model's guess.
- **Acceptance tests in the prompt.** *Plain English:* state the tests/behaviors the code must satisfy *before* the
  agent writes code; it can then self-check. *Code mapping:* include a `should:` list or literal test cases.
  *Common mistake:* no acceptance criteria → "done" is undefined.
- **Context curation & ordering.** *Formula (sketch):* `prompt = task ⊕ constraints ⊕ relevant_code ⊕ examples`,
  with the critical constraint at the *end*. *Plain English:* include exactly the files/types that matter, ordered
  so the key constraint isn't buried. *Common mistake:* whole-repo paste or, worse, the wrong files.
- **Few-shot from your repo.** Plain English: show 1–2 examples of *your* error handling / test style so the model
  matches conventions. Where it matters: grounding (Week 1). *Common mistake:* generic examples that teach generic style.
- **PRD as shared source of truth.** Plain English: a short doc (problem, users, requirements, acceptance,
  non-goals) both humans and agents read; later exposed as an MCP resource (Week 4). *Common mistake:* the spec
  living only in a throwaway chat prompt.

### Hands-on build
- `prd/share-notes.md`: a real PRD for Quill's sharing feature (problem, users, requirements, API/type changes,
  acceptance tests, non-goals, security notes).
- A/B test: run the same agent on the **wish prompt** vs the **PRD + curated context**; compare correctness, rework, and tokens.
- **Deliverable:** the PRD + the A/B result. **Acceptance:** the PRD version produces materially less rework
  (fewer iterations to passing acceptance criteria), measured, not asserted.

▶ **Practical project:** `VizuaraAI/modern-software-developer-bootcamp` — follow its spec→PRD→plan workflow to turn the Quill sharing request into an agent-ready PRD.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv`/Node + Claude Code or Cursor; skim `VizuaraAI/modern-software-developer-bootcamp` spec workflow.
2. Write `prd/share-notes.md`: problem, users, testable requirements, API/type changes, acceptance, non-goals, security.
3. Curate an ordered context bundle (critical constraint last) + 1–2 in-repo few-shot examples.
4. A/B: run the agent on the wish prompt vs the PRD + context.
5. Measure iterations-to-pass, rework, and tokens for both.
6. Commit the PRD as shared truth.
- **Artifact:** `prd/share-notes.md` + `evidence/week02-ab.md` committed.
- **Use `$spec-to-prd`:** convert any request into an agent-ready PRD + context manifest.
- **Done when:** the PRD version produces materially less rework, measured not asserted.
- **Stretch:** reverse-engineer two SWE-bench Verified issues into PRDs.

### Harness / reusable skill — `$spec-to-prd`
- **Purpose:** convert any feature request into an agent-ready PRD + curated context bundle.
- **Inputs:** a request + the repo. **Outputs:** a PRD (problem/users/requirements/acceptance/non-goals/security),
  a curated file list (ordered), and 1–2 in-repo few-shot examples. **Evidence artifact:** `prd/<feature>.md` + the context manifest.

### Common failure modes
- **Wish-prompting** → the agent guesses; you debug guesses. *Fix:* spec with acceptance criteria up front.
- **Context dumping/misordering** → buried constraints ignored. *Fix:* curate + put the critical constraint last.
- **Generic few-shot** → off-convention code. *Fix:* examples from your own repo.
- **Ephemeral spec** → no shared truth, drift. *Fix:* a committed PRD humans and agents both read.

### Evidence artifact
`prd/share-notes.md` + `evidence/week02-ab.md` (wish vs PRD: iterations-to-pass, rework, tokens).

### Skill sink-in
Predict how many agent iterations the wish prompt will need to pass acceptance vs the PRD. Run both. Record the
ratio — it quantifies why specifying beats prompting.

### Dataset / benchmark
Use **SWE-bench Verified** issue texts (`princeton-nlp/SWE-bench_Verified`, HF) as a corpus of real-world
specs/issues to study *what a good vs underspecified issue looks like*; reverse-engineer two into PRDs. No training;
this week is qualitative + your A/B numbers.

### Code stub
```markdown
<!-- prd/share-notes.md — the agent-and-human source of truth -->
# PRD: Shared Notebooks

---

### State of the Art (June 2026)
- **Spec-driven / context engineering** is the dominant practice; **PRDs-as-MCP-resources** keep one source of truth.
- **DSPy**-style compiled prompts and eval-graded specs beat hand-tuned wording.
- **SWE-bench Verified** issues are the corpus for "what a good vs underspecified issue looks like."
- **Prompt caching** rewards stable spec prefixes (up to 90% off repeated context).

**References & links:**
- [`VizuaraAI/modern-software-developer-bootcamp`](https://github.com/VizuaraAI/modern-software-developer-bootcamp)
- [Jimenez et al., 2023 - SWE-bench](https://arxiv.org/abs/2310.06770)
- [Model Context Protocol docs](https://modelcontextprotocol.io)


<!-- sota:08L02 -->

## Problem & users
Teams need to share notes read/write or read-only with specific members.
## Requirements (testable)
- [ ] `POST /notebooks/:id/share {user_id, role: viewer|editor}` -> 200, persists a permission row
- [ ] viewers get 403 on PUT /notes; editors get 200
- [ ] sharing is idempotent; re-share updates role
## API/type changes
- new table `permissions(notebook_id, user_id, role)`; extend `authz.can(user, action, resource)`
## Acceptance tests
1. owner shares editor -> editor edits a note -> 200
2. owner shares viewer -> viewer edits -> 403
## Non-goals: public links, org-wide sharing.  ## Security: enforce authz server-side, never trust client role.
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Spec quality | Testable requirements + acceptance + non-goals + security | requirements only | a wish |
| Context curation | Right files, ordered, in-repo few-shot | some curation | dump/none |
| A/B rigor | Iterations/rework/tokens measured both ways | partial | asserted |
| Reusability | PRD committed as shared truth | committed | chat-only |

**Assessment weight:** 6%.

### Readings & sources
- White et al., "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT," 2023.
- Anthropic, "Prompt engineering" + "Claude Code best practices" docs (2024–2026); OpenAI "Prompting for code" guide (2025).
- Khattab et al., "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines," ICLR 2024 (specs > hand-prompts).
- Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", ICLR 2024 (what real issues look like).

---

## Week 3 — Building a Coding Agent From Scratch

**Altitude:** Builder → Engineer · **Anchor case:** build a minimal coding agent (read → edit → run → repeat) and use it to fix a real bug in the *CLI-utility* case, then on Quill.

### Learning goals
- Implement the **coding-agent loop**: read files → propose an edit (diff) → apply → run tests → read results → repeat, with a stop rule.
- Design the agent's **tools** (read_file, list_dir, apply_patch/edit, run_tests, grep) and why diff-based edits beat full-file rewrites.
- Add a **verification step** (tests/lint) so the agent self-corrects instead of declaring victory blindly.
- Compare your scratch agent to a production one (Claude Code / Aider) and explain the gap.

### Concept map
- **The coding-agent loop.** *Formula:* `state = repo ⊕ task ⊕ history`; `action ∈ {read, edit, run, search, done}`.
  *Plain English:* the same observe→act→observe loop as any agent, but actions are file ops and the "observation"
  is test/compiler output. *Code mapping:* a `while` loop dispatching file tools + a test runner. *Common mistake:*
  no test-run step → the agent "thinks" it fixed the bug and stops.
- **Diff/patch edits vs full rewrites.** Plain English: have the agent emit a *minimal patch*, not the whole file —
  cheaper, reviewable, less collateral damage. *Code mapping:* apply a unified diff / search-replace block. *Common
  mistake:* full-file rewrites that silently drop unrelated code.
- **Verification as the inner loop.** Plain English: run tests/lint after each edit and feed failures back as
  observations; the agent fixes its own mistakes. Where it matters: this single loop is most of what makes coding
  agents work. *Common mistake:* trusting the agent's self-report over the test exit code.
- **Localization (find the right file).** Plain English: most of the difficulty is *where* to edit, not *what* to
  type; grep/embeddings/stack-trace parsing localize. *Common mistake:* editing the first plausible file.
- **Stop rule & budgets.** Plain English: stop on green tests, step cap, or cost cap — never "until it feels done."

### Hands-on build
- `minicoder/`: a from-scratch coding agent with tools `read_file`, `grep`, `apply_patch`, `run_tests`; a loop that
  edits → runs tests → re-edits; stops on green or a step cap. No framework.
- Use it to fix 5 seeded bugs in the CLI case + 2 in Quill; log diffs and test transitions.
- **Deliverable:** the agent + a fix log (red→green per bug). **Acceptance:** ≥5/7 bugs fixed with the agent's own
  test-run verification (not your manual check), edits are minimal diffs, and the loop always terminates.

▶ **Practical project:** `Aider-AI/aider` — clone it and benchmark your from-scratch `minicoder` against this production agent on the same seeded bugs.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + your model SDK; `pip install aider-chat` (`Aider-AI/aider`) as the production comparison.
2. Build `minicoder/`: tools `read_file`, `grep`, `apply_patch`, `run_tests`; a read→patch→test→repeat loop.
3. Make verification in-loop: after a patch, run tests and feed the real exit code back (no self-report).
4. Add a stop rule (green / step-cap / cost-cap) and minimal-diff edits.
5. Fix 5 seeded CLI bugs + 2 Quill bugs; log red→green per bug.
6. Run Aider on the same 7 bugs; record the capability gap.
- **Artifact:** `minicoder/` + `evidence/week03-fixlog.md` committed.
- **Use `$coding-agent-loop`:** a minimal debuggable loop you understand end-to-end.
- **Done when:** ≥5/7 fixed via the agent's own verification, edits are minimal diffs, the loop always terminates.
- **Stretch:** run your agent on 5 SWE-bench Verified "lite" instances.

### Harness / reusable skill — `$coding-agent-loop`
- **Purpose:** a minimal, debuggable coding-agent loop you understand end-to-end (the thing IDEs hide).
- **Inputs:** a repo + a failing test or bug. **Outputs:** localized files, a minimal patch, the test red→green
  transition, and a stop reason. **Evidence artifact:** `evidence/week03-fixlog.md`.

### Common failure modes
- **No verification step** → false "fixed." *Fix:* tests run inside the loop; trust the exit code.
- **Full-file rewrites** → collateral damage. *Fix:* minimal diffs / search-replace edits.
- **Bad localization** → edits the wrong file. *Fix:* grep/stack-trace/embedding localization first.
- **No stop rule** → runs forever or burns budget. *Fix:* green-tests / step-cap / cost-cap stop.

### Evidence artifact
`evidence/week03-fixlog.md` (per bug: localization, diff, red→green, stop reason) + the `minicoder/` source.

### Skill sink-in
Predict how many of the 7 bugs your scratch agent fixes vs Claude Code/Aider on the same set. Run both. Record the
gap and the *one* capability (localization? verification? planning?) that explains most of it.

### Dataset / benchmark
**SWE-bench Verified** (`princeton-nlp/SWE-bench_Verified`, 500 human-validated real GitHub issues) — run your
agent on **5 "lite"/easy instances** as a reality check against the production frontier. Reference agents:
`princeton-nlp/SWE-agent` and `Aider-AI/aider` (OSS).

### Code stub
```python
# minicoder/loop.py — read -> patch -> test -> repeat, with verification inside the loop
TOOLS = {"read_file": read_file, "grep": grep, "apply_patch": apply_patch}

def fix(task, max_steps=12):
    history = [observe_failing_test(task)]            # start from the red test
    for step in range(max_steps):
        action = model_decide(task, history)          # {"tool":..., "args":...} | {"done": True}
        if action.get("done"):
            break
        result = TOOLS[action["tool"]](**action["args"])
        if action["tool"] == "apply_patch":
            result = run_tests(task)                   # VERIFY: feed real test output back, not self-report
        history.append({"action": action, "obs": result})
    return run_tests(task)                             # stop rule: green or budget exhausted
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Loop works | ≥5/7 bugs fixed, self-verified | 3–4 | <3 |
| Edit quality | Minimal diffs, no collateral | mostly | full rewrites |
| Verification | Tests run in-loop, exit code trusted | partial | self-report |
| Reflection | Names the capability gap vs prod agent | vague | none |

**Assessment weight:** 8%.

### Readings & sources
- Yang et al., "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering," NeurIPS 2024.
- Xia et al., "Agentless: Demystifying LLM-based Software Engineering Agents," 2024 (localization > complex agents).
- Jimenez et al., "SWE-bench" (ICLR 2024) + OpenAI "Introducing SWE-bench Verified" (2024).
- Anthropic, "Claude Code" / "Building agents with the Claude Agent SDK" docs (2025–2026); Aider docs (2025).

---

### State of the Art (June 2026)
- **SWE-bench Verified/Pro** is the capability benchmark; **SWE-agent** and **Aider** are the OSS references.
- **"Agentless"**-style localization remains competitive with complex agent scaffolds.
- **Claude Agent SDK** (`query()`, subagents, hooks) and **OpenAI Agents SDK** productionize the read→edit→test loop.
- **Verification-in-the-loop** (run tests, trust the exit code) is the core reliability lever.

**References & links:**
- [Jimenez et al., 2023 - SWE-bench](https://arxiv.org/abs/2310.06770)


<!-- sota:08L03 -->

## Week 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources

**Altitude:** Engineer · **Anchor case:** configure Cursor/Claude Code for Quill so the agent *automatically* has the right context — repo index, types, conventions, and the PRD — without manual pasting.

### Learning goals
- Explain how AI IDEs build context: **repo indexing + embeddings + retrieval**, `@`-mentions, and rules/conventions files.
- Expose **project context as MCP resources** (PRDs, schemas, runbooks) so the IDE/agent pulls truth, not stale paste.
- Write project **rules/conventions** (e.g., `CLAUDE.md` / Cursor rules) that ground every generation.
- Measure how much good context configuration improves first-pass correctness.

### Concept map
- **Repo indexing & retrieval.** Plain English: the IDE embeds your files and retrieves the most relevant chunks
  per query, so you don't paste. Where it matters: scales context past the window (Week 1). *Common mistake:*
  assuming the index is fresh/complete — stale indexes feed stale code.
- **`@`-mentions & manual context.** Plain English: explicitly attach the file/symbol/doc that matters when
  retrieval might miss it. *Common mistake:* relying purely on auto-retrieval for a cross-cutting change.
- **Rules / conventions files.** *Plain English:* a committed file (`CLAUDE.md`, `.cursor/rules`) of project
  conventions, commands, and do/don'ts that's injected into every prompt — durable grounding. *Common mistake:*
  conventions living in people's heads, so every generation re-litigates style.
- **PRDs/schemas as MCP resources.** *Plain English:* expose the PRD, DB schema, and runbook as MCP **resources**
  the agent reads on demand — the Week-2 PRD becomes live, addressable context (`prd://share-notes`). Where it
  matters: one source of truth for humans and agents. *Common mistake:* copy-pasting the PRD into chat where it goes stale.
- **Context cost/quality trade-off.** Plain English: more retrieved context isn't always better (noise, cost,
  lost-in-the-middle); tune k and ordering. *Common mistake:* maxing retrieval and degrading quality.

### Hands-on build
- Configure Quill's IDE: a `CLAUDE.md`/rules file (conventions, commands, architecture), `@`-mention workflow, and
  an **MCP server exposing `prd://` and `schema://` resources** (reuse Subject 07 Week 3 if taken).
- A/B: implement a small change **with vs without** the rules file + MCP resources; measure first-pass acceptance and rework.
- **Deliverable:** the IDE config + MCP resource server + the A/B. **Acceptance:** the configured setup measurably
  raises first-pass correctness / lowers rework, and the agent demonstrably pulls the PRD from the MCP resource.

▶ **Practical project:** `modelcontextprotocol/servers` — follow its resource examples to expose Quill's PRDs and DB schema as `prd://` / `schema://` MCP resources to the IDE.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `mcp` SDK + Cursor/Claude Code; clone `modelcontextprotocol/servers` resource examples.
2. Write a `CLAUDE.md`/rules file (conventions, commands, architecture) for Quill.
3. Build `context_mcp/server.py` exposing `prd://{feature}` and `schema://db` resources.
4. Wire `@`-mentions + the MCP server into the IDE so the agent auto-pulls truth.
5. A/B a small change with vs without the rules file + MCP resources.
6. Measure first-pass acceptance + rework; confirm the agent reads the PRD resource.
- **Artifact:** `evidence/week04-context-pack/` (rules file + MCP server + A/B note) committed.
- **Use `$project-context-pack`:** make the repo AI-ready so agents are grounded by default.
- **Done when:** the configured setup raises first-pass correctness and the agent pulls the PRD from MCP.
- **Stretch:** add a runbook resource and a freshness check that re-indexes on change.

### Harness / reusable skill — `$project-context-pack`
- **Purpose:** make a repo "AI-ready" so agents are grounded by default.
- **Inputs:** a repo + its PRDs/schemas/runbooks. **Outputs:** a rules/conventions file, an MCP resource server for
  docs/schemas, and an `@`-mention cheat-sheet. **Evidence artifact:** `evidence/week04-context-pack/`.

### Common failure modes
- **Stale index** → agent codes against old structure. *Fix:* re-index on change; verify freshness.
- **Conventions-in-heads** → inconsistent style, repeated corrections. *Fix:* a committed rules file.
- **PRD drift** → chat-pasted spec rots. *Fix:* PRD as an MCP resource, single source of truth.
- **Over-retrieval** → noisy, costly context. *Fix:* tune k/ordering; `@`-mention the decisive file.

### Evidence artifact
`evidence/week04-context-pack/` — rules file, MCP resource server, A/B note (with/without context: first-pass acceptance, rework).

### Skill sink-in
Predict the first-pass acceptance lift from adding the rules file + PRD resource. Measure via the A/B. Record
whether grounding (context) or capability (model) was the bigger lever — it's almost always context.

### Dataset / benchmark
**SWE-bench Verified** instances reused as repo-grounded tasks to A/B context configurations; **CrossCodeEval** for
cross-file retrieval quality. IDE/MCP refs: Cursor docs, **Claude Code** docs, and `modelcontextprotocol/servers`
(resource examples).

### Code stub
```python
# context_mcp/server.py — expose project truth as MCP resources the IDE/agent reads on demand
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("quill-context")

@mcp.resource("prd://{feature}")
def prd(feature: str) -> str:
    """Live PRD for a feature, e.g. prd://share-notes — single source of truth for humans + agents."""
    return read(f"prd/{feature}.md")

@mcp.resource("schema://db")
def schema() -> str:
    return read("db/schema.sql")        # agent grounds DB changes in the REAL schema, not a guess
```
```markdown
<!-- CLAUDE.md (excerpt) — durable, injected-every-prompt conventions -->

---

### State of the Art (June 2026)
- **MCP resources** (Linux Foundation; new 2026-07-28 spec) expose PRDs/schemas to IDE + agent as live context.
- **Cursor, Claude Code, Copilot agent-mode** index repos with embeddings + rules files (`CLAUDE.md`, `.cursor/rules`).
- Repo-grounded evals: **CrossCodeEval, RepoBench** for cross-file completion.
- Context **curation/ordering** still beats dumping despite 1M-token windows.

**References & links:**
- [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers)
- [Model Context Protocol docs](https://modelcontextprotocol.io)


<!-- sota:08L04 -->

## Conventions
- Errors: return Result types, never throw across module boundaries. Tests: vitest, colocated *.test.ts.
- Authz: enforce in `authz.can()` server-side only. Run `pnpm verify` (lint+typecheck+test) before "done".
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Context config | Rules file + MCP resources + @-mention flow | rules file only | ad-hoc paste |
| Grounding proof | Agent pulls PRD/schema from MCP resource | partial | none |
| A/B rigor | First-pass + rework measured both ways | partial | asserted |
| Freshness | Index/resources stay current | mostly | stale |

**Assessment weight:** 7%.

### Readings & sources
- Cursor docs ("Codebase indexing", "Rules"), 2025–2026; Anthropic "Claude Code: memory & MCP" docs (2025–2026).
- MCP specification — **Resources** primitive (modelcontextprotocol.io, 2024–2026).
- Liu et al., "Lost in the Middle," TACL 2024 (why ordering/curation matters); Ding et al., "CrossCodeEval," NeurIPS 2023.
- Harvard AC215 "LLMs: LangChain/LlamaIndex/RAG" module (2025) — retrieval-as-context.

---

## Week 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates

**Altitude:** Engineer · **Anchor case:** decide *how much* to let the agent do unattended on Quill — and where a human must approve — across a spectrum from autocomplete to multi-file autonomous PRs.

### Learning goals
- Place a task on the **autonomy spectrum** (autocomplete → chat-edit → supervised agent → autonomous agent) and pick the right level.
- Design **human-in-the-loop gates**: plan approval, diff review, and irreversible-action gates (migrations, deploys, deletes).
- Use **plan-then-execute** with a checkpoint so you approve the approach before the agent writes 600 lines.
- Bound autonomy with sandboxing, scoped permissions, and small reversible steps.

### Concept map
- **Autonomy spectrum.** Plain English: more autonomy = more leverage *and* more risk/nondeterminism; match the
  level to task reversibility and clarity. *Tiny example:* autocomplete for a one-liner; supervised agent for a
  feature; never fully-autonomous on a prod DB migration. *Common mistake:* max autonomy by default ("let it cook")
  on high-stakes, irreversible work.
- **Plan-approval checkpoint.** *Plain English:* the agent proposes a plan/diff outline; a human approves *before*
  implementation. Where it matters: catches wrong approaches cheaply (before 600 lines). *Common mistake:* reviewing
  only the final giant diff, when the approach was wrong at step 1.
- **Irreversible-action gates.** Plain English: deletes, migrations, deploys, external sends, money — always behind
  an explicit human approval, regardless of autonomy level. *Common mistake:* an autonomous agent with prod credentials.
- **Small reversible steps.** Plain English: prefer many small PRs/commits the agent can be steered between, over
  one mega-change. Where it matters: reviewability + rollback. *Common mistake:* a 2000-line agent PR no one can review.
- **Sandboxing & scoped permissions.** Plain English: run agent code in a sandbox with least-privilege creds (bridge to Week 6).

### Hands-on build
- Implement a **plan-gate workflow**: the agent must output a plan/diff outline; a human approves/edits; then it
  implements; then a diff-review gate; then an irreversible-action gate for any migration/deploy.
- Apply it to two Quill changes: one low-stakes (UI copy) fully delegated, one high-stakes (schema migration) gated at every step.
- **Deliverable:** the gated workflow + a decision log per change. **Acceptance:** the high-stakes change is blocked
  at the plan gate at least once (you caught a bad approach), and irreversible actions never run without approval.

▶ **Practical project:** `anthropics/anthropic-cookbook` — adapt its agent/plan-mode patterns to build the plan-gate → diff-gate → irreversible-action-gate workflow.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv`/Node + Claude Code (plan mode) or Cursor; skim `anthropics/anthropic-cookbook` agent patterns.
2. Build `workflow/gated_agent.py`: the agent emits a plan outline ONLY (no code yet).
3. Add a plan-approval gate, then a diff-review gate, then an irreversible-action gate (migrations/deploys/deletes).
4. Apply to two Quill changes: low-stakes UI copy (delegated) + high-stakes schema migration (gated each step).
5. Record where the plan gate caught a bad approach and lines of wasted impl avoided.
6. Write the autonomy-level + gate decision log.
- **Artifact:** `evidence/week05-autonomy.md` + decision logs committed.
- **Use `$autonomy-gate-designer`:** set autonomy level + gates + rollback path per task.
- **Done when:** the high-stakes change is blocked at the plan gate ≥once; no irreversible action runs unapproved.
- **Stretch:** add scoped sandbox creds (bridge to Week 6) to the gated runner.

### Harness / reusable skill — `$autonomy-gate-designer`
- **Purpose:** decide and enforce the right autonomy level + gates for a task.
- **Inputs:** a task + its reversibility/stakes. **Outputs:** the autonomy level, the gates (plan/diff/irreversible),
  the sandbox/permission scope, and the rollback path. **Evidence artifact:** `evidence/week05-autonomy.md`.

### Common failure modes
- **Default-max autonomy** → unreviewed risky changes. *Fix:* match level to reversibility/clarity.
- **Final-diff-only review** → wrong approach caught too late. *Fix:* a plan-approval checkpoint first.
- **Ungated irreversible actions** → prod incidents. *Fix:* hard human gate on migrations/deploys/deletes.
- **Mega-PRs** → unreviewable, unrollbackable. *Fix:* small reversible steps.

### Evidence artifact
`evidence/week05-autonomy.md` (autonomy levels + gates per change) + decision logs showing a plan-gate rejection.

### Skill sink-in
Predict, for your two changes, where the agent's plan will be wrong. Run the plan gate. Record whether the gate
caught it — and how many lines of wasted implementation you avoided.

### Dataset / benchmark
Qualitative, on Quill, but calibrate against **SWE-bench Verified** "trajectory" analyses (where autonomous agents
go wrong) and the **Claude Code "permissions / plan mode"** behavior. Reference: METR's autonomous-coding task
evaluations (2024–2025) on long-horizon agent reliability.

### Code stub
```python
# workflow/gated_agent.py — plan gate -> implement -> diff gate -> irreversible gate
def run_gated(task):
    plan = agent.plan(task)                              # outline ONLY, no code yet
    if not human_approve(plan): return "rejected at plan gate"   # cheap catch of wrong approach
    diff = agent.implement(plan)
    if not human_review(diff):  return "rejected at diff gate"
    for action in diff.actions:
        if irreversible(action):                         # migration/deploy/delete/external-send
            require_explicit_human_ok(action)            # hard gate regardless of autonomy level
        apply(action)                                    # in sandbox, scoped creds
    return "merged"
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Level matching | Autonomy matched to stakes for both changes | one | max-by-default |
| Plan gate | Catches a bad approach before implementation | present | final-diff only |
| Irreversible gates | All risky actions human-approved | most | ungated |
| Reversibility | Small steps + rollback path | mostly | mega-PR |

**Assessment weight:** 7%.

### Readings & sources
- Anthropic, "Building Effective Agents" (2024) + "Claude Code best practices: plan mode & permissions" (2025–2026).
- METR, "Evaluating frontier models for autonomous capabilities" / autonomous SWE task reports (2024–2025).
- Cognition, "Introducing Devin" + "Don't Build Multi-Agents" engineering posts (2024–2025) — autonomy trade-offs.
- Berkeley CS294 "Coding Agents & Vulnerability Detection" lecture (2025).

---

### State of the Art (June 2026)
- **Plan-mode + permission gates** are standard in Claude Code / Cursor / Copilot agent mode.
- **METR** long-horizon autonomy evals track where agents go wrong over many steps.
- **Small reversible steps + irreversible-action gates** are the production discipline.
- Orchestrator-led **subagents** (Claude Agent SDK) bound blast radius for multi-file work.

**References & links:**
- [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook)


<!-- sota:08L05 -->

## Week 6 — The Modern AI Terminal and Sandboxing

**Altitude:** Engineer · **Anchor case:** run Quill's agent-generated code and commands safely — in a sandbox with scoped permissions — using an AI terminal (Warp) and dev containers.

### Learning goals
- Use an **AI terminal** (Warp) for agentic command workflows: natural-language commands, command explanation, and saved workflows.
- Explain **why agent-run code must be sandboxed** (untrusted generation + tool execution = arbitrary code risk).
- Configure sandboxes: **Docker dev containers**, ephemeral **E2B**/cloud sandboxes, and Claude Code's sandbox; scope filesystem/network/credentials.
- Build a safe "agent executes shell" loop with allow-lists and no host-credential exposure.

### Concept map
- **AI terminal.** Plain English: a terminal that turns intent into commands, explains scary ones, and saves
  reusable workflows — reducing copy-paste error. Where it matters: agentic ops without leaving the shell. *Common
  mistake:* running an AI-suggested `rm -rf`/`curl | sh` without reading the explanation.
- **Why sandbox.** *Plain English:* the agent both *writes* and *runs* code from an untrusted distribution; a bug or
  injection (Week 8) could read secrets, hit the network, or trash the host. *Code mapping:* run in a container with
  no host creds and no network unless needed. *Common mistake:* agents running with your full shell + cloud creds.
- **Sandbox dimensions.** Plain English: scope **filesystem** (only the repo), **network** (off by default),
  **credentials** (none/minted-just-in-time), **time/CPU** (limits). Where it matters: containment. *Common
  mistake:* a "sandbox" that still mounts `~/.aws`.
- **Ephemeral sandboxes (E2B / cloud).** Plain English: spin a fresh disposable box per agent task; destroy after.
  Where it matters: no persistent blast radius. *Common mistake:* reusing one long-lived box that accumulates state/risk.
- **Allow-listed commands.** Plain English: the agent may run only an approved command set unattended; everything
  else needs approval. Bridge to Weeks 5/8.

### Hands-on build
- Configure a **Docker dev container** for Quill with the repo mounted, network off by default, and *no* host
  credentials. Run `minicoder`/Claude Code inside it.
- Add a command **allow-list** for unattended agent shell (test/build/lint) and an approval prompt for anything else;
  demonstrate a blocked dangerous command.
- Build 2 **Warp** saved workflows for Quill (e.g., "set up env + run tests", "build + deploy preview").
- **Deliverable:** the sandbox config + allow-list + Warp workflows + a demo of a blocked dangerous command.
  **Acceptance:** agent-run code has no access to host credentials/network-by-default, and a `curl|sh`/`rm -rf`-style
  command is blocked or requires explicit approval.

▶ **Practical project:** `krishnaik06/Dockers` — use it to build the repo-scoped, no-host-creds, network-off dev container the agent executes inside.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Docker + Warp (AI terminal); use `krishnaik06/Dockers` as the dev-container reference.
2. Write `.devcontainer/devcontainer.json`: repo-only mount, `--network=none`, `--cap-drop=ALL`, no host creds.
3. Add `safe_exec.py`: an allow-list for unattended commands (test/build/lint); everything else needs approval.
4. Run `minicoder`/Claude Code inside the container; demonstrate a blocked `rm -rf`/`curl|sh`.
5. Build 2 Warp saved workflows (env+test, build+preview).
6. Log the blocked dangerous command + the containment proof.
- **Artifact:** `evidence/week06-sandbox/` (devcontainer + allow-list + Warp workflows + block log) committed.
- **Use `$agent-sandbox-config`:** scope fs/network/creds/time + the approval path for the rest.
- **Done when:** agent code has no host creds / no default network, and a destructive command is blocked.
- **Stretch:** swap the container for an ephemeral E2B sandbox and verify AgentDojo exfil scenarios fail.

### Harness / reusable skill — `$agent-sandbox-config`
- **Purpose:** make it safe for an agent to *execute* code and commands.
- **Inputs:** a repo + the commands the agent needs. **Outputs:** a container/sandbox spec (fs/network/cred/time
  scopes), a command allow-list, and the approval path for the rest. **Evidence artifact:** `evidence/week06-sandbox/`.

### Common failure modes
- **Host-cred exposure** → agent reads `~/.aws`/env secrets. *Fix:* no host creds; mint scoped creds just-in-time.
- **Network-on by default** → exfiltration/SSRF surface. *Fix:* network off unless the task needs it, then allow-list hosts.
- **Persistent sandbox** → accumulating blast radius. *Fix:* ephemeral, disposable per task.
- **Blind command execution** → destructive commands run. *Fix:* allow-list + read the AI terminal's explanation.

### Evidence artifact
`evidence/week06-sandbox/` — devcontainer/E2B config, command allow-list, Warp workflows, and a log of a blocked dangerous command.

### Skill sink-in
Predict what an injected "run this to set up" instruction *could* do to an un-sandboxed agent (secrets? network?).
Then run it in your sandbox and confirm containment. Record the gap between unsandboxed risk and sandboxed reality.

### Dataset / benchmark
No labeled dataset; the test is containment. References/targets: **E2B** (`e2b-dev/E2B`, sandboxes), Docker
dev-container spec, and the **AgentDojo** (2024) execution-attack scenarios to verify your sandbox blocks exfiltration.

### Code stub
```jsonc
// .devcontainer/devcontainer.json — repo-scoped, no host creds, network off by default
{
  "image": "node:22",
  "mounts": ["source=${localWorkspaceFolder},target=/repo,type=bind"],   // only the repo
  "runArgs": ["--network=none", "--cap-drop=ALL", "--read-only"],         // no net, least privilege
  "containerEnv": { "HOME": "/repo/.home" },                              // no host ~/.aws, ~/.ssh
  "postCreateCommand": "pnpm install --frozen-lockfile"
}
```
```python
# safe_exec.py — allow-listed unattended commands; everything else needs approval
ALLOW = {"pnpm test", "pnpm build", "pnpm lint", "pytest -q"}
def agent_run(cmd):
    if cmd not in ALLOW and not human_ok(cmd):   # blocks rm -rf, curl|sh, etc.
        return "BLOCKED: command not on allow-list"
    return run_in_sandbox(cmd)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Credential isolation | No host creds; JIT-scoped only | partial | full host creds |
| Network scope | Off by default, allow-listed | restricted | open |
| Command safety | Allow-list + approval; dangerous cmd blocked | allow-list only | blind exec |
| Ephemerality | Disposable per-task sandbox | reused but clean | persistent + risky |

**Assessment weight:** 6%.

### Readings & sources
- Warp docs ("Agent Mode", "Workflows"), 2025–2026; Docker "Development Containers" spec (2025).
- E2B, "Code Interpreting / Sandboxes for AI agents" docs (2025); Anthropic "Claude Code sandboxing" notes (2025–2026).
- Debenedetti et al., "AgentDojo," NeurIPS 2024 (execution/exfiltration attack scenarios).
- OWASP, "LLM Top 10: Excessive Agency & Insecure Plugin/Tool Design" (2025).

---

### State of the Art (June 2026)
- Ephemeral sandboxes: **E2B, Modal, Daytona, Claude Code sandbox** — disposable per-task boxes.
- **Warp agent-mode** + dev containers for scoped, explained command execution.
- **AgentDojo** execution/exfiltration scenarios validate containment.
- Defaults: **least-privilege JIT creds, network-off-by-default, command allow-lists**.

**References & links:**
- [`krishnaik06/Dockers`](https://github.com/krishnaik06/Dockers)


<!-- sota:08L06 -->

## Week 7 — AI-Generated Tests and Test Quality

**Altitude:** Engineer · **Anchor case:** get Quill's new feature to *real* coverage — AI-generated tests that catch bugs, not tests that merely pass.

### Learning goals
- Generate unit/integration tests with AI **and** judge their quality (do they actually constrain behavior?).
- Use **property-based testing** (Hypothesis) for invariants AI is good at proposing but humans must validate.
- Detect **weak/tautological AI tests** with coverage *and* mutation testing.
- Adopt **AI-assisted TDD**: write the test/spec first, let the agent satisfy it.

### Concept map
- **Coverage ≠ quality.** Plain English: a test can execute a line without asserting anything meaningful; high
  coverage with weak asserts is false confidence. Where it matters: AI loves to generate passing, low-value tests.
  *Common mistake:* shipping on coverage % alone.
- **Mutation testing.** *Formula (score):* `mutation_score = killed_mutants / total_mutants`. *Plain English:*
  inject bugs; good tests *fail* (kill them). *Tiny example:* flip `>=` to `>`; a real test catches it. *Code
  mapping:* `mutmut`/`Stryker`. *Common mistake:* trusting coverage while mutants survive.
- **Property-based testing.** *Plain English:* assert invariants over *generated* inputs (`reverse(reverse(x))==x`,
  "sharing is idempotent") instead of a few examples. Where it matters: finds edge cases examples miss; AI proposes
  properties well. *Common mistake:* accepting an AI-proposed property that's subtly wrong — validate it.
- **AI-assisted TDD.** Plain English: human writes the failing test/spec; the agent implements until green (ties to
  Week 3's verification loop). Where it matters: the test is the spec the agent can't game. *Common mistake:*
  letting the agent write *both* the code and the tests with no human-authored constraint → it tests its own bugs.
- **Test independence from the implementer.** Plain English: tests written/curated by a human (or a different
  context) catch what the implementer's blind spots miss.

### Hands-on build
- For Quill's sharing feature: have the agent generate a test suite; then **harden it** — add asserts, add ≥1
  property-based test (Hypothesis), and run **mutation testing**; iterate until the mutation score crosses a threshold.
- Compare AI-only tests vs hardened tests by mutation score and bugs caught (seed 3 bugs).
- **Deliverable:** the test suite + coverage + mutation report. **Acceptance:** mutation score meets the threshold
  (e.g., ≥70% on changed code), the property test catches a seeded bug examples missed, and weak AI tests are documented + fixed.

▶ **Practical project:** `evalplus/evalplus` — run its augmented test suites to expose weak AI tests, then harden Quill's suite to a mutation-score bar.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `pytest` + `hypothesis` + `mutmut`; use `evalplus/evalplus` to expose weak tests.
2. Have the agent generate a test suite for Quill's sharing feature.
3. Harden it: add real asserts + ≥1 validated property-based test (e.g. sharing is idempotent).
4. Run mutation testing; iterate until the mutation score crosses the bar (≥70% on changed code).
5. Seed 3 bugs; compare AI-only vs hardened tests by mutants killed + bugs caught.
6. Document the tautological tests you removed/fixed.
- **Artifact:** `evidence/week07-tests/` (suite + coverage + mutation before/after) committed.
- **Use `$ai-test-hardener`:** turn AI tests into tests that actually constrain behavior.
- **Done when:** mutation score meets the bar, the property test catches a missed bug, weak tests are fixed.
- **Stretch:** measure catch rate on a Defects4J/BugsInPy bug.

### Harness / reusable skill — `$ai-test-hardener`
- **Purpose:** turn AI-generated tests into tests that actually constrain behavior.
- **Inputs:** code + AI-generated tests. **Outputs:** a coverage + mutation report, added asserts, ≥1 validated
  property test, and a list of tautological tests removed/fixed. **Evidence artifact:** `evidence/week07-tests/`.

### Common failure modes
- **Coverage theater** → high coverage, weak asserts. *Fix:* mutation testing as the real bar.
- **Tautological AI tests** → assert what the code does, not what it should. *Fix:* human-authored asserts/spec.
- **Self-tested code** → agent writes code and its tests. *Fix:* human-written failing test first (TDD).
- **Unvalidated properties** → a wrong invariant passes vacuously. *Fix:* check the property fails on a known bug.

### Evidence artifact
`evidence/week07-tests/` — suite, coverage report, mutation report (before/after hardening), and the property test + the seeded bug it caught.

### Skill sink-in
Predict the mutation score of the AI's first-draft tests before running `mutmut`. Run it. Record the gap between
coverage % and mutation score — it's the lesson on why coverage lies.

### Dataset / benchmark
**Defects4J** (`rjust/defects4j`, 800+ real Java bugs) or **BugsInPy** (`soarsmu/BugsInPy`, Python) as a bug corpus
to measure whether your tests *catch real bugs*; **HumanEval+/EvalPlus** (`evalplus/evalplus`, 2023) for stronger
test-based correctness. Mutation tooling: `mutmut` (Python) / `Stryker` (JS/TS).

### Code stub
```python
# tests/test_sharing.py — property-based + a real assertion (not tautology)
from hypothesis import given, strategies as st

@given(role=st.sampled_from(["viewer", "editor"]))
def test_share_is_idempotent(role):                      # AI proposed this property; we VALIDATED it
    nb = make_notebook(); share(nb, USER, role); share(nb, USER, role)  # twice
    assert permission(nb, USER) == role                  # idempotent, single row
    assert count_permissions(nb, USER) == 1

def test_viewer_cannot_edit():                           # human-authored constraint = the spec
    nb = make_notebook(); share(nb, USER, "viewer")
    assert edit_note(nb, USER, "x").status == 403        # mutation testing: flipping authz must fail this
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Mutation score | ≥70% on changed code | 50–70% | coverage-only |
| Property test | ≥1 validated, catches a missed bug | present | none/invalid |
| Test independence | Human-authored asserts/spec | mixed | self-tested |
| Honesty | Tautological tests documented + fixed | some | unexamined |

**Assessment weight:** 8%.

### Readings & sources
- Claessen & Hughes, "QuickCheck: A Lightweight Tool for Random Testing of Haskell Programs," ICFP 2000 (property testing origin); Hypothesis docs (2025).
- Just et al., "Defects4J: A Database of Existing Faults...," ISSTA 2014; Liu et al., "Is Your Code Generated by ChatGPT Really Correct? (EvalPlus)," NeurIPS 2023.
- Schäfer et al., "An Empirical Evaluation of Using LLMs for Automated Unit Test Generation," IEEE TSE 2024.
- "Mutation Testing" (Jia & Harman survey, 2011) + `mutmut`/`Stryker` docs (2025).

---

### State of the Art (June 2026)
- **Mutation testing** (mutmut / Stryker) is the real bar over coverage %.
- **Property-based testing** (Hypothesis) for invariants the model proposes and a human validates.
- **EvalPlus / HumanEval+** for test-based correctness; **Defects4J / BugsInPy** as real-bug corpora.
- **Reward-hacking audits** for self-tested coding agents — don't let the agent grade its own bugs.

**References & links:**


<!-- sota:08L07 -->

## Week 8 — AI Security and Secure "Vibe Coding"

**Altitude:** Engineer · **Anchor case:** AI-generated Quill code introduces a subtle SQL-injection + a leaked secret; catch them with SAST/DAST/secret scanning before they ship.

### Learning goals
- Explain **why AI-generated code is disproportionately insecure** (trained on flawed public code; produces plausible-but-vulnerable patterns) and what "secure vibe coding" requires.
- Run **SAST** (Semgrep), **secret scanning** (gitleaks), **dependency/container scanning** (Trivy), and **DAST** (OWASP ZAP) in CI.
- Recognize the top AI-introduced vulns (injection, broken authz, hardcoded secrets, insecure deserialization, vulnerable deps) and fix them.
- Add an AI-assisted **threat-model + security review** to the PR flow.

### Concept map
- **Why AI code is insecure.** Plain English: models learned from public code full of vulnerabilities and produce
  the *common* pattern, not the *secure* one; studies show developers with AI assistants write *more* insecure code
  while feeling *more* confident. Where it matters: "it works" ≠ "it's safe." *Common mistake:* shipping AI code
  because tests pass — tests rarely test security.
- **SAST.** *Plain English:* static analysis scans source for vulnerable patterns (taint from input → sink). *Code
  mapping:* `semgrep --config auto`. *Common mistake:* ignoring findings as "false positives" without triage.
- **Secret scanning.** Plain English: AI loves to inline API keys/connection strings; scan diffs for secrets and
  block. *Code mapping:* `gitleaks protect`. *Common mistake:* secrets in code "temporarily" that reach git history.
- **DAST.** Plain English: run the *running* app and attack it (ZAP) to catch what static analysis misses (authz,
  runtime injection). Where it matters: complements SAST. *Common mistake:* SAST-only, missing logic/authz flaws.
- **Dependency/supply-chain scanning.** Plain English: AI-suggested packages may be vulnerable, outdated, or
  **hallucinated/typosquatted** ("slopsquatting"). *Code mapping:* `trivy fs` + lockfile pinning. *Common mistake:*
  installing an agent-suggested package without checking it exists and is safe.

### Hands-on build
- Add a **security gate** to Quill CI: `semgrep` (SAST), `gitleaks` (secrets), `trivy` (deps/container); add an
  **OWASP ZAP** baseline scan against the running app.
- Plant 3 realistic AI-style vulns (a string-built SQL query, a hardcoded key, a vulnerable dep); confirm each is caught and fix it.
- Add an AI-assisted PR **security review** prompt that flags authz/injection/secret risks.
- **Deliverable:** the CI security gate + a before/after vuln report. **Acceptance:** all 3 planted vulns are caught
  by the gate (not by luck), the build fails on a secret/critical finding, and each fix is verified.

▶ **Practical project:** `juice-shop/juice-shop` — point your SAST/secret/deps/DAST gate at this deliberately-vulnerable app to prove it catches real vulns.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GitHub Actions + `semgrep` + `gitleaks` + `trivy` + OWASP ZAP; target `juice-shop/juice-shop`.
2. Add a blocking `security.yml`: SAST + secret scan + deps scan + a ZAP baseline against the running app.
3. Plant 3 realistic AI-style vulns in Quill (string-built SQL, hardcoded key, vulnerable dep).
4. Confirm each is caught; make the build fail on a secret/critical finding.
5. Add an AI security-review prompt flagging authz/injection/secret risks on PRs.
6. Fix each vuln + write the triage note (justified suppressions).
- **Artifact:** `evidence/week08-security/` (CI gate + planted vulns + scan output + fixes) committed.
- **Use `$secure-code-gate`:** stop insecure AI code from shipping with a layered gate.
- **Done when:** all 3 planted vulns are caught (not by luck) and the build fails on a critical/secret.
- **Stretch:** add dependency provenance + a slopsquatting check on agent-suggested packages.

### Harness / reusable skill — `$secure-code-gate`
- **Purpose:** stop insecure AI code from shipping.
- **Inputs:** a repo + its CI. **Outputs:** SAST/secret/deps/DAST jobs wired as a blocking gate, a triage note for
  findings, and an AI security-review prompt for PRs. **Evidence artifact:** `evidence/week08-security/`.

### Common failure modes
- **Tests-pass = secure fallacy** → vulns ship green. *Fix:* a dedicated security gate, separate from tests.
- **SAST-only** → misses authz/runtime flaws. *Fix:* add DAST against the running app.
- **False-positive dismissal** → real findings ignored. *Fix:* triage every finding, suppress with justification.
- **Hallucinated/typosquatted deps** → supply-chain compromise. *Fix:* verify package existence + scan + pin lockfiles.
- **Secrets in history** → permanent leak. *Fix:* pre-commit + CI secret scanning; rotate on hit.

### Evidence artifact
`evidence/week08-security/` — CI gate config, the 3 planted vulns + scan output catching them, fixes, and the triage note.

### Skill sink-in
Predict which of the 3 planted vulns your gate will miss. Run the scans. Record the miss (usually the authz/logic
flaw that needs DAST or human review) — that's the lesson on layered security.

### Dataset / benchmark
**OWASP Juice Shop** (`juice-shop/juice-shop`, MIT — deliberately vulnerable app) and **OWASP Benchmark** as DAST/SAST
targets; the **OWASP Top 10 (2021)** + **OWASP LLM Top 10 (2025)** as the checklist. Tools: **Semgrep**
(`semgrep/semgrep`, LGPL), **gitleaks**, **Trivy**, **OWASP ZAP**.

### Code stub
```yaml
# .github/workflows/security.yml — blocking security gate for AI-written code
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pipx run semgrep ci --config auto            # SAST: taint -> sink patterns
      - run: gitleaks dir . --redact --exit-code 1        # secrets: fail build on any hit
      - run: trivy fs --severity HIGH,CRITICAL --exit-code 1 .   # vulnerable/typosquatted deps
      - run: |                                            # DAST: attack the RUNNING app
          docker compose up -d && sleep 10
          docker run --network host owasp/zap2docker-stable zap-baseline.py -t http://localhost:3000 -I
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Coverage | SAST + secrets + deps + DAST all wired | 2–3 | one |
| Catch rate | All 3 planted vulns caught + fixed | 2/3 | <2 |
| Gating | Build fails on critical/secret findings | warns only | non-blocking |
| Triage | Findings triaged, suppressions justified | partial | dismissed |

**Assessment weight:** 8%.

### Readings & sources
- Perry et al., "Do Users Write More Insecure Code with AI Assistants?", ACM CCS 2023.
- Pearce et al., "Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions," IEEE S&P 2022.
- OWASP, "Top 10 for LLM Applications (2025)" + OWASP "Top 10 (2021)"; Semgrep / Trivy / ZAP docs (2025–2026).
- Spracklen et al., "We Have a Package for You! (package hallucination / slopsquatting in LLM code)," USENIX Security 2025.

---

### State of the Art (June 2026)
- **Slopsquatting / package hallucination** (USENIX Security 2025) is a named supply-chain risk in agent-suggested deps.
- The layered gate: **SAST (Semgrep), secrets (gitleaks), deps (Trivy), DAST (OWASP ZAP)**.
- Checklists: **OWASP LLM Top 10 (2025)** + **OWASP Top 10 (2021)**.
- Studies still show AI-assisted devs ship **more insecure code while feeling more confident**.

**References & links:**
- [Semgrep (SAST)](https://semgrep.dev)


<!-- sota:08L08 -->

## Week 9 — AI Code Review Gates

**Altitude:** Engineer · **Anchor case:** every Quill PR passes an **AI reviewer + a human reviewer**, with the AI catching the mechanical issues so the human focuses on design and intent.

### Learning goals
- Design a **two-tier review gate**: AI review (style, bugs, security, convention) + human review (design, correctness of intent, trade-offs).
- Configure an AI reviewer (Claude Code review / CodeRabbit) with project conventions and a focused checklist.
- Calibrate the reviewer to **minimize noise** (false positives erode trust) and surface only high-confidence issues.
- Measure review effectiveness (issues caught pre-merge, false-positive rate, time-to-merge).

### Concept map
- **AI vs human review division of labor.** Plain English: AI excels at mechanical, local, checklist issues
  (null checks, missed error handling, convention, obvious security); humans own design, intent, and "should this
  exist." Where it matters: don't make humans do what AI can, or trust AI for what it can't. *Common mistake:*
  treating AI review as a merge rubber-stamp.
- **Reviewer grounding.** Plain English: feed the reviewer the project conventions (the Week-4 rules file) and the
  PR's PRD so it reviews against *your* standards, not generic ones. *Common mistake:* a generic reviewer that
  nitpicks style you don't follow.
- **Signal vs noise.** *Formula (trust):* `usefulness ≈ true_issues / total_comments`. *Plain English:* a reviewer
  that flags 20 trivia for 1 real bug gets muted. Where it matters: tune to high-confidence findings. *Common
  mistake:* maxing verbosity → reviewers ignored.
- **Review as a gate, not advice.** Plain English: wire it into branch protection so unresolved high-severity
  findings block merge. *Common mistake:* AI comments that everyone scrolls past.
- **Self-review prompt for the author.** Plain English: the agent reviews its *own* diff before opening the PR,
  catching the easy stuff first.

### Hands-on build
- Configure an **AI reviewer** on Quill PRs grounded in the rules file + PRD, with a focused checklist (bugs, error
  handling, security, convention); wire it as a branch-protection gate for high-severity findings.
- Run it on 5 PRs (3 real, 2 with planted bugs); measure caught/missed and false-positive rate; tune the prompt to cut noise.
- **Deliverable:** the review gate config + a review-effectiveness report. **Acceptance:** both planted bugs are
  caught, false-positive rate is brought below a stated threshold via tuning, and high-severity findings block merge.

▶ **Practical project:** `openai/openai-cookbook` — adapt its evaluation/review recipes to build the grounded AI PR reviewer wired as a branch-protection gate.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GitHub Actions + Claude Code review / CodeRabbit; skim `openai/openai-cookbook` eval/review recipes.
2. Configure an AI reviewer grounded in the rules file + PRD with a focused checklist (bugs, error-handling, security, convention).
3. Wire it as a branch-protection gate that blocks unresolved high-severity findings.
4. Run on 5 PRs (3 real, 2 with planted bugs); record caught/missed + false-positive rate.
5. Tune the prompt to cut noise below a stated FP threshold.
6. Write the review-effectiveness report.
- **Artifact:** `evidence/week09-review/` (reviewer config + 5-PR report + branch rule) committed.
- **Use `$ai-review-gate`:** a calibrated AI gate that complements human review.
- **Done when:** both planted bugs caught, FP rate brought below threshold, high-severity blocks merge.
- **Stretch:** add a self-review prompt the author runs before opening the PR.

### Harness / reusable skill — `$ai-review-gate`
- **Purpose:** a calibrated AI review gate that complements (not replaces) human review.
- **Inputs:** a repo + conventions + PR. **Outputs:** a grounded reviewer config, a checklist, a severity→gate
  mapping, and an effectiveness report (caught/missed/FP). **Evidence artifact:** `evidence/week09-review/`.

### Common failure modes
- **Rubber-stamp reliance** → AI review replaces human judgment on design. *Fix:* two-tier; humans own intent.
- **Noise overload** → false positives get the reviewer muted. *Fix:* tune to high-confidence; measure FP rate.
- **Ungrounded reviewer** → nitpicks non-conventions. *Fix:* feed it the rules file + PRD.
- **Advice-not-gate** → comments ignored. *Fix:* block merge on unresolved high-severity findings.

### Evidence artifact
`evidence/week09-review/` — reviewer config, the 5-PR effectiveness report (caught/missed/FP, before/after tuning), and the branch-protection rule.

### Skill sink-in
Predict the false-positive rate of the out-of-the-box AI reviewer before tuning. Measure on the 5 PRs. Record how
much grounding (rules file + PRD) cut the noise.

### Dataset / benchmark
**SWE-bench Verified** PRs and **CodeReviewer** dataset (`microsoft/CodeReviewer` / "Automating Code Review
Activities" data, 2022) as a corpus of real review comments to calibrate usefulness; plant bugs from the
**Defects4J/BugsInPy** sets (Week 7) into PRs to measure catch rate.

### Code stub
```yaml
# .github/workflows/ai-review.yml — grounded AI review as a branch-protection gate
jobs:
  ai-review:
    steps:
      - uses: actions/checkout@v4
      - run: |
          claude -p "Review this PR diff against CLAUDE.md conventions and prd/${{ github.head_ref }}.md.
            Report ONLY high-confidence bugs, missing error handling, authz/security, convention breaks.
            Output JSON: [{severity, file, line, issue, fix}]. Skip style nits." \
            --diff origin/main...HEAD > review.json
      - run: python ci/gate.py review.json   # exit 1 if any severity==HIGH unresolved -> blocks merge
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Two-tier design | AI + human roles clearly split | implied | AI rubber-stamp |
| Catch rate | Both planted bugs caught | one | none |
| Noise control | FP rate below threshold via tuning, measured | improved | noisy |
| Gating | High-severity blocks merge | warns | advisory |

**Assessment weight:** 7%.

### Readings & sources
- Tufano et al., "Towards Automating Code Review Activities," ICSE 2021; Li et al., "CodeReviewer: Pre-Training for Automating Code Review," FSE 2022.
- CodeRabbit / Claude Code "PR review" docs (2025–2026); GitHub "Copilot code review" docs (2025).
- Krish Naik, "AI GitHub PR Code Reviewer" project (LangGraph + Langfuse, krishnaik.in, 2025–2026).
- Anthropic, "Claude Code in CI / headless mode" docs (2025–2026).

---

### State of the Art (June 2026)
- **Claude Code review, CodeRabbit, Copilot code review** productionize grounded AI review as a gate.
- The consensus split: **AI for mechanical/local issues, humans for design and intent**.
- **Signal/noise tuning** is decisive — false positives mute reviewers.
- **LLM-judge biases** (TrustJudge) inform reviewer calibration and thresholds.

**References & links:**
- [`openai/openai-cookbook`](https://github.com/openai/openai-cookbook)


<!-- sota:08L09 -->

## Week 10 — Automated UI and App Building

**Altitude:** Builder → Engineer · **Anchor case:** build Quill's sharing UI with a generative UI tool (v0/Lovable/Bolt), then reconcile the generated code into the real, tested, convention-following codebase.

### Learning goals
- Use generative UI tools (**v0**, **Lovable**, **Bolt.new**) to go from prompt/screenshot to working UI fast.
- **Reconcile** generated UI into a real codebase: match conventions, wire to the real API, remove throwaway scaffolding.
- Iterate UI with **visual feedback loops** (screenshot → critique → revise), and verify with component/E2E tests.
- Judge when generated UI is a **prototype to learn from** vs **production code to keep**.

### Concept map
- **Generative UI.** Plain English: describe (or screenshot) a UI and get working React/Tailwind components; great
  for speed and exploration. Where it matters: the first 80% of UI is now minutes. *Common mistake:* pasting
  generated code wholesale, inheriting its conventions, mock data, and security gaps.
- **Reconciliation.** *Plain English:* generated UI is a *draft* — rewire it to your real API/types, your component
  library, your auth, your conventions. Where it matters: this is the actual engineering work now. *Common mistake:*
  "it looks right" so it ships with mocked endpoints and no error states.
- **Visual feedback loop.** Plain English: screenshot the running UI, have the model critique against the design
  intent, revise — a perception→action loop for front-end (ties to Subject 07 browser agents). *Common mistake:*
  iterating on code without ever *looking* at the rendered result.
- **Component/E2E verification.** Plain English: generated UI still needs tests (component + a Playwright E2E for the
  happy path + an error path). *Common mistake:* no tests because "it's just UI."
- **Prototype vs keep.** Plain English: sometimes the right move is to *learn* from the generated UI and rebuild it
  clean; sometimes it's keepable after reconciliation. Decide deliberately.

### Hands-on build
- Generate Quill's sharing UI (share dialog, permissions list, role selector) with **v0/Lovable/Bolt**; then
  **reconcile**: wire to the real `POST /notebooks/:id/share` API, apply the component library + conventions, add
  loading/error/empty states.
- Add a **Playwright E2E** (share → appears in list → viewer blocked from edit) and a component test; run a visual
  feedback loop to fix two design issues.
- **Deliverable:** the reconciled UI PR + E2E test + a before/after screenshot. **Acceptance:** the UI uses the real
  API (no mocks), follows conventions, has error/empty states, and the E2E happy+error path passes.

▶ **Practical project:** `shadcn-ui/ui` — reconcile generated Quill UI into its component conventions, wired to the real share API with error/empty states.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Node + Vercel `v0` (or Lovable/Bolt) + `shadcn-ui/ui` + Playwright.
2. Generate Quill's sharing UI (share dialog, permissions list, role selector).
3. Reconcile: rewire to the real `POST /notebooks/:id/share` API, apply shadcn conventions, drop mock data.
4. Add loading/error/empty states; run a screenshot→critique→revise visual loop for two issues.
5. Add a Playwright E2E (share → appears → viewer blocked) + a component test.
6. Record the kept-vs-rewritten line fraction.
- **Artifact:** `evidence/week10-ui/` (reconciled PR + E2E + before/after screenshots) committed.
- **Use `$ui-reconcile`:** turn generated UI into production code that fits the codebase.
- **Done when:** UI uses the real API (no mocks), has error/empty states, E2E happy+error passes.
- **Stretch:** run a Lighthouse/axe accessibility audit and fix the top finding.

### Harness / reusable skill — `$ui-reconcile`
- **Purpose:** turn generated UI into production code that fits the codebase.
- **Inputs:** generated UI + the real API/conventions. **Outputs:** rewired components (real API/types), added
  states (loading/error/empty), a component + E2E test, and a "kept vs rebuilt" decision note. **Evidence artifact:**
  `evidence/week10-ui/`.

### Common failure modes
- **Wholesale paste** → inherits mocks, conventions, and gaps. *Fix:* reconcile to real API/types/conventions.
- **No error/empty states** → demos break on real data. *Fix:* add loading/error/empty deliberately.
- **Code-only iteration** → never looks at the render. *Fix:* a screenshot→critique→revise visual loop.
- **Untested UI** → regressions. *Fix:* component + E2E (happy + error) tests.

### Evidence artifact
`evidence/week10-ui/` — the reconciled PR, E2E + component tests, before/after screenshots, and the kept-vs-rebuilt note.

### Skill sink-in
Predict how much of the generated UI survives reconciliation (lines kept vs rewritten). Reconcile. Record the
fraction kept — it calibrates "generative UI as prototype vs production."

### Dataset / benchmark
**WebArena/VisualWebArena** (Week-equivalent of Subject 07) or a **Lighthouse**/axe accessibility audit as an
objective UI-quality check; **shadcn/ui** + Tailwind as the target component conventions. Generative tools: **v0**
(Vercel), **Lovable**, **Bolt.new**. No labeled dataset — acceptance is the passing E2E + a11y audit.

### Code stub
```ts
// e2e/share.spec.ts — verify the reconciled UI against the REAL flow (not the demo mock)
import { test, expect } from "@playwright/test";

test("owner shares editor; viewer blocked from editing", async ({ page }) => {
  await loginAs(page, OWNER);
  await page.goto("/notebooks/nb1");
  await page.getByRole("button", { name: "Share" }).click();
  await page.getByLabel("User").fill("alice@quill.dev");
  await page.getByRole("combobox", { name: "Role" }).selectOption("viewer");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.getByText("alice@quill.dev — viewer")).toBeVisible();   // real API persisted it
  await loginAs(page, "alice@quill.dev");
  await expect(page.getByRole("button", { name: "Edit" })).toBeDisabled();  // authz error state shown
});
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Reconciliation | Real API/types/conventions, no mocks | mostly | wholesale paste |
| States | Loading/error/empty handled | some | happy-path only |
| Tests | Component + E2E (happy+error) pass | happy-path E2E | none |
| Judgment | Kept-vs-rebuilt decided + justified | stated | unconsidered |

**Assessment weight:** 6%.

### Readings & sources
- Vercel **v0**, **Lovable**, **Bolt.new** docs (2025–2026); **shadcn/ui** + Tailwind docs (2025).
- Playwright "Component & E2E testing" docs (2025); axe-core / Lighthouse accessibility docs (2025).
- Si et al., "Design2Code: How Far Are We From Automating Front-End Engineering?", 2024.
- Frontend-design best-practices (program skill: `frontend-design`) — intentional visual design over templated defaults.

---

### State of the Art (June 2026)
- Prompt-to-UI: **v0, Lovable, Bolt.new**; **shadcn/ui + Tailwind** the reconcile target.
- Multimodal models (**Gemini 3.1, GPT-5.5**) drive **screenshot→critique→revise** visual loops.
- **Design2Code**-style benchmarks track front-end automation progress.
- **Reconciliation** (real API/types/states) is the actual engineering now, not the generation.

**References & links:**


<!-- sota:08L10 -->

## Week 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation

**Altitude:** Engineer · **Anchor case:** Quill's feature is live — now operate it: monitor it, catch a regression, run an incident drill, and benchmark your *agentic SWE workflow* on SWE-bench Verified.

### Learning goals
- Instrument a shipped feature with **monitoring** (errors, latency, key user flows) and **alerts**; define SLOs.
- Run an **incident-response drill**: detect → triage → mitigate (flag-off/rollback) → fix → postmortem, with an AI agent assisting.
- Use **feature flags + canary/rollback** so a bad deploy is contained and reversible in one command.
- **Evaluate your coding-agent workflow** on **SWE-bench Verified** to quantify capability and track it over time.

### Concept map
- **Observability for shipped features.** Plain English: logs + metrics + traces (Sentry/OpenTelemetry) so you *see*
  errors, latency, and broken flows in production. Where it matters: you can't fix what you can't see. *Common
  mistake:* shipping with no instrumentation, learning of bugs from users.
- **SLOs & alerts.** *Formula:* `error_budget = (1 − SLO) × requests`. *Plain English:* a target (e.g., 99.5%
  success) and an alert when you burn the budget too fast. *Common mistake:* alerting on everything → alert fatigue.
- **Feature flags + canary + rollback.** Plain English: ship dark, ramp to a canary %, watch metrics, roll forward
  or **flag-off/rollback** instantly. Where it matters: contains blast radius. *Common mistake:* big-bang deploy with
  no kill switch.
- **AI-assisted incident response.** Plain English: an agent triages logs, correlates the deploy, proposes a
  mitigation and a fix PR — *with a human approving irreversible steps* (Week 5). *Common mistake:* an autonomous
  agent making prod changes during an incident.
- **SWE-bench-style self-evaluation.** Plain English: run your agent workflow on real GitHub issues
  (**SWE-bench Verified**) under the official harness to get a resolve-rate you can track and improve. Where it
  matters: turns "the agent feels good" into a number. *Common mistake:* trusting public leaderboard numbers for
  *your* workflow without running it yourself.

### Hands-on build
- Instrument Quill's feature with **Sentry + OpenTelemetry**: error tracking, p95 latency, a key-flow success metric;
  set an SLO + alert; deploy behind a **feature flag** with a canary + one-command rollback.
- Run an **incident drill**: inject a regression behind the flag, detect via the alert, have an AI agent triage and
  propose a mitigation + fix PR, roll back, and write a short postmortem.
- Run your **coding-agent workflow on a SWE-bench Verified subset** (e.g., 20 instances) under the official harness; report resolve rate.
- **Deliverable:** monitoring + flag/rollback config, an incident postmortem, and a SWE-bench resolve-rate report.
  **Acceptance:** the alert fires on the injected regression, you roll back in one command, the postmortem has a
  root cause + prevention, and the SWE-bench run is reproducible with a reported number.

▶ **Practical project:** `krishnaik06/mlproject` — reuse its CI/deploy template as the monitored-deploy base for the shipped feature and the incident drill.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Sentry + OpenTelemetry + a flag tool (OpenFeature/LaunchDarkly); base the deploy on `krishnaik06/mlproject` CI.
2. Instrument Quill's feature: error tracking, p95 latency, a key-flow success metric; set an SLO + alert.
3. Deploy behind a feature flag with a canary + one-command rollback.
4. Inject a regression behind the flag; detect via the alert.
5. Have an AI agent triage logs, correlate the deploy, propose a mitigation + fix PR (human-gated).
6. Roll back; write a blameless postmortem; run your workflow on a 20-instance SWE-bench Verified subset.
- **Artifact:** `evidence/week11-ops/` (monitoring/flag config + postmortem) + `week11-swebench.md` committed.
- **Use `$ai-incident-runbook`:** operate the feature with a practiced incident loop.
- **Done when:** the alert fires, you roll back in one command, the postmortem has root cause + prevention, SWE-bench is reproducible.
- **Stretch:** add an automated SLO-burn alert that pages only on fast burn.

### Harness / reusable skill — `$ai-incident-runbook`
- **Purpose:** operate an AI-built feature in production with a practiced incident loop.
- **Inputs:** a deployed feature. **Outputs:** monitoring + SLO + alert config, a flag/canary/rollback setup, an
  AI-assisted triage prompt, and a postmortem template. **Evidence artifact:** `evidence/week11-ops/`.

### Common failure modes
- **No instrumentation** → blind in prod. *Fix:* errors/latency/key-flow metrics + traces before launch.
- **No kill switch** → a bad deploy can't be undone fast. *Fix:* feature flag + one-command rollback.
- **Autonomous incident agent** → makes things worse. *Fix:* AI triages/proposes; human approves prod changes.
- **No postmortem** → repeat incidents. *Fix:* blameless postmortem with root cause + prevention.
- **Leaderboard trust** → assuming public SWE-bench numbers apply to you. *Fix:* run the harness on *your* workflow.

### Evidence artifact
`evidence/week11-ops/` — monitoring/flag/rollback config, the incident postmortem, and `evidence/week11-swebench.md` (resolve rate + harness command).

### Skill sink-in
Predict your agent workflow's SWE-bench Verified resolve rate on the 20-instance subset before running it. Run the
harness. Record the gap between your guess (often inflated by demos) and the measured number.

### Dataset / benchmark
**SWE-bench Verified** (`princeton-nlp/SWE-bench_Verified`, 500 human-validated instances; run a 20–50 subset under
the official `swebench` harness) for capability; **Sentry** + **OpenTelemetry** for production telemetry. Optionally
**SWE-bench Multimodal** / **SWE-bench Live** for currency.

### Code stub
```python
# ops/swebench_eval.py — run YOUR agent workflow on SWE-bench Verified, reproducibly
from datasets import load_dataset
ds = load_dataset("princeton-nlp/SWE-bench_Verified", split="test").select(range(20))

def evaluate(agent):
    preds = []
    for inst in ds:
        patch = agent.solve(repo=inst["repo"], base=inst["base_commit"], issue=inst["problem_statement"])
        preds.append({"instance_id": inst["instance_id"], "model_patch": patch})
    # score with the official harness: applies patch, runs FAIL_TO_PASS + PASS_TO_PASS tests
    return run_swebench_harness(preds)   # -> {"resolved": n, "total": 20, "resolve_rate": ...}
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Monitoring | Errors+latency+key-flow+SLO+alert | partial | none |
| Containment | Flag + canary + one-cmd rollback | flag only | big-bang |
| Incident drill | Detect→mitigate→fix→postmortem, human-gated | partial | no drill |
| SWE-bench eval | Reproducible resolve rate reported | runs | not attempted |

**Assessment weight:** 7%.

### Readings & sources
- Jimenez et al., "SWE-bench" (ICLR 2024) + OpenAI "SWE-bench Verified" (2024); "SWE-bench Multimodal" (2024).
- Google SRE, "Site Reliability Engineering" — SLOs, error budgets, postmortems (chapters, 2016/2018).
- Sentry + OpenTelemetry instrumentation docs (2025); feature-flag/canary practices (LaunchDarkly/OpenFeature docs, 2025).
- Harvard AC215 "Advanced inference: deployment & monitoring" (2025); Krish Naik LLMOps monitoring projects (2025–2026).

---

### State of the Art (June 2026)
- **SWE-bench Verified/Pro/Multimodal/Live** are the moving capability benchmarks.
- **Sentry + OpenTelemetry GenAI semantic conventions** for shipped-feature telemetry.
- **Feature flags + canary** (OpenFeature/LaunchDarkly) + **one-command rollback** are standard.
- **AI-assisted incident response** (RCA draft, telemetry correlation) with human-gated prod changes.

**References & links:**
- [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject)
- [Jimenez et al., 2023 - SWE-bench](https://arxiv.org/abs/2310.06770)


<!-- sota:08L11 -->

## Week 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent

**Altitude:** Engineer (graduating to Specialist) · **Anchor case:** take one **Quill** feature from spec to production using everything in the course.

### Learning goals
- Run the full AI-first delivery loop: **spec/PRD → grounded agent build → AI+human review → tests → security → deploy → monitor**.
- Produce an **evidence packet** proving the feature is correct, tested, secure, reviewed, and operable — not just "it works on my machine."
- Defend the autonomy, testing, and gating choices with data from your own runs.

### Concept map (review as a delivery checklist)
- Mental model (W1) → spec/PRD (W2) → coding-agent loop (W3) → grounded IDE/MCP context (W4) → autonomy gates (W5)
  → sandboxed execution (W6) → hardened tests (W7) → security gate (W8) → review gate (W9) → reconciled UI (W10) →
  monitoring + rollback + SWE-bench-style eval (W11).

### Hands-on build
- Ship one **non-trivial Quill feature** end-to-end: a committed **PRD (as an MCP resource)**; an agent-built
  implementation behind **autonomy gates**; **AI-generated + human-curated tests** (incl. a property test) meeting
  the mutation/coverage bar; a green **security gate** (SAST/secrets/deps/DAST); an **AI + human review** gate; a
  reconciled UI with E2E tests; deployment behind a **flag + canary + one-command rollback**; and **monitoring +
  one incident drill**.
- **Deliverable:** the merged, deployed feature + a `capstone/` evidence packet + a 15-min demo + a 3-page delivery memo.
  **Acceptance:** the feature is live behind a flag; tests/security/review gates are all green; you roll it back in
  one command on demand; and every claim in the memo links to a PR, test, scan, or trace in the packet.

▶ **Practical project:** `krishnaik06/Deployment-flask` — package and deploy the capstone Quill feature behind a real endpoint with flag/canary/rollback.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Claude Code/Cursor + the full CI (tests/security/review) + a PaaS; use `krishnaik06/Deployment-flask` for the deploy path.
2. Commit the PRD as an MCP resource; build the feature behind autonomy gates.
3. Add AI-generated + human-curated tests (incl. a property test) meeting the mutation/coverage bar.
4. Pass the security gate (SAST/secrets/deps/DAST) + the AI + human review gate.
5. Reconcile the UI with E2E tests; deploy behind a flag + canary + one-command rollback.
6. Add monitoring + run one incident drill; assemble the evidence packet + 3-page memo.
- **Artifact:** merged, deployed feature + `capstone/` evidence packet + 15-min demo committed.
- **Use `$ai-delivery-evidence-packet`:** bundle PRD + trajectory + tests + scan + review + deploy/rollback + monitoring.
- **Done when:** feature is live behind a flag, all gates green, one-command rollback works on demand.
- **Stretch:** add a SWE-bench-style self-eval of the agent workflow to the packet.

### Harness / reusable skill — `$ai-delivery-evidence-packet`
- **Purpose:** assemble PRD + agent trajectory + test/mutation report + security scan + review record + deploy/rollback
  proof + monitoring dashboard into one reviewable bundle. **Evidence artifact:** the packet itself (this *is* the deliverable).

### Common failure modes
- **Demo-ware** → works once, untested/unmonitored. *Fix:* the gates (tests/security/review) are the acceptance bar.
- **Unverified agent output** → ships the agent's guesses. *Fix:* every change behind tests + review + security gates.
- **No rollback** → can't undo a bad ship. *Fix:* flag + one-command rollback, demonstrated.
- **Unjustified choices** → autonomy/testing decisions by vibe. *Fix:* defend with your own A/B and eval numbers.

### Evidence artifact
`capstone/` — the PRD (MCP resource), agent trajectory/decision log, test + mutation report, security scan output,
AI+human review record, deploy/rollback proof, monitoring dashboard, and the 3-page delivery memo.

### Skill sink-in
Before the final ship, write down the production success rate and rollback time you expect. Ship behind the canary,
measure both, and record the gap — the difference between expectation and the gated reality is the capstone's lesson.

### Dataset / benchmark
Your **Quill** repo is the live target; the **SWE-bench Verified** subset (Week 11) is the capability benchmark for
your workflow; the **security gate** (Week 8) and **test mutation bar** (Week 7) are the quality benchmarks. All
gates green = pass.

### Code stub
```python
# capstone/ship_gate.py — one command decides "ship or not"
def ship_gate():
    assert tests_pass() and mutation_score() >= 0.70,    "test gate failed"
    assert security_scan_clean(),                        "security gate failed (SAST/secrets/deps/DAST)"
    assert ai_review_high_severity() == 0 and human_approved(), "review gate failed"
    assert e2e_pass(),                                   "UI E2E failed"
    deploy(canary=0.1)                                   # ship dark to 10%
    if not slo_healthy(window="10m"):
        rollback()                                       # one-command rollback on SLO burn
        return "ROLLED BACK"
    return "SHIPPED (canary healthy)"
```

### Graded rubric table
| Criterion | Excellent (A) | Adequate (B/C) | Failing |
|-----------|---------------|----------------|---------|
| End-to-end delivery | Spec→agent→tests→security→review→deploy→monitor all real | most, some manual | a demo |
| Quality gates | Tests(+mutation)+security+review all green & gating | some gating | green-by-skipping |
| Operability | Flag + canary + one-cmd rollback + monitoring + drill | partial | none |
| Evidence + defense | Every memo claim links to PR/test/scan/trace; choices defended with data | mostly | assertions |

**Assessment weight:** 25% (course capstone).

### Readings & sources
- Anthropic "Claude Code best practices" + "Building Effective Agents" (2024–2026); OpenAI/Cursor agentic-coding guides (2025–2026).
- Jimenez et al., "SWE-bench" (ICLR 2024) + "SWE-bench Verified" (OpenAI, 2024).
- Google SRE book — release engineering, canarying, postmortems (2016/2018).
- Harvard AC215 full-stack ML capstone rubric (5 milestones, 2025); Krish Naik end-to-end deployable-project structure (2025–2026).

---

### State of the Art (June 2026)
- The 2026 delivery bar: **spec → agent → AI+human review → mutation-tested tests → SAST/DAST → flag/canary/rollback → monitor**.
- Frontier coding models **GPT-5.5 / Opus 4.8 / Gemini 3.1**, with open-weight **Qwen3-Coder** fallback.
- **MCP resources + Agent SDKs** are the grounding + runtime substrate.
- **EU AI Act** (Aug 2, 2026) makes the evidence packet a compliance artifact, not just hygiene.

**References & links:**
- [`krishnaik06/Deployment-flask`](https://github.com/krishnaik06/Deployment-flask)
- [Model Context Protocol docs](https://modelcontextprotocol.io)
- [EU AI Act - implementation timeline](https://artificialintelligenceact.eu/implementation-timeline/)


<!-- sota:08L12 -->

## Course-level outcomes

By the end you can: reason about what coding LLMs can and can't do and *why*; turn vague requests into agent-ready
**specs/PRDs**; build a **coding agent** from scratch and wield production ones; ground an **AI IDE** with
context-as-MCP-resources; choose **autonomy levels and human-in-the-loop gates**; run agent code safely in
**sandboxes**; generate **tests that actually catch bugs** (mutation-tested, property-based); stop insecure
"**vibe-coded**" code with **SAST/DAST/secret/dep** gates; run **AI + human code-review gates**; build and reconcile
**generated UI**; and **operate** shipped features with monitoring, rollback, incident response, and
**SWE-bench-style evaluation**. You carry a **reusable AI-SWE delivery harness** into professional practice.

## Skills produced (reused program-wide)
`$coding-model-profile` · `$spec-to-prd` · `$coding-agent-loop` · `$project-context-pack` · `$autonomy-gate-designer` ·
`$agent-sandbox-config` · `$ai-test-hardener` · `$secure-code-gate` · `$ai-review-gate` · `$ui-reconcile` ·
`$ai-incident-runbook` · `$ai-delivery-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/modern-software-developer-bootcamp` — an AI-first software-development bootcamp (specs, agents, review, delivery) that mirrors this subject's arc — Lectures 1–3
- `anthropics/anthropic-cookbook` — runnable recipes for tool use, agents, structured outputs, and evaluations to ground the coding-agent and test labs — Lectures 2, 3, 7
- `microsoft/generative-ai-for-beginners` — foundational gen-AI building blocks (prompting, context, app scaffolding) for the mental-model weeks — Lectures 1, 2

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **AI PR reviewer** — static / security / architecture / style reviewers with a human merge gate — *Lectures 8–9*
- **Coding-agent self-repair** — unit-test generation + hidden tests + a reward-hacking audit — *Lectures 3, 7*
- **AI SRE incident bot** — RCA draft, telemetry correlation, and human-approved rollback — *Lecture 11*
