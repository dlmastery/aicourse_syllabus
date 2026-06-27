# Subject 07 — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)

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

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 12 lectures (~36 contact hrs). Full time-boxed lecture plan: [`_toc/07-ai-agent-engineering-toc.md`](_toc/07-ai-agent-engineering-toc.md)._

1. **Lecture 1 — Agent Anatomy and the Agent Loop** — The agent loop · Planner vs controller · Critic / verifier · Workflow vs agent (the autonomy dial) · Tools as the action space  ·  🔧 `$agent-anatomy-map`
2. **Lecture 2 — Function Calling, Tool Schemas, and Structured Outputs** — Tool schema · Description as prompt · Structured outputs / constrained decoding · Tool granularity & idempotency · Errors as observations  ·  🔧 `$tool-schema-designer`
3. **Lecture 3 — MCP: Build a Model Context Protocol Server (original module)** — Why MCP (the "USB-C for tools" framing) · Three primitives · Client–server–host · Transport & capability negotiation · The trust boundary  ·  🔧 `$mcp-server-scaffold`
4. **Lecture 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion** — ReAct · Plan-and-execute · Reflexion / self-refine · Test-time compute as a dial · Verifier vs generator  ·  🔧 `$reasoning-strategy-picker`
5. **Lecture 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem** — Working vs long-term memory · Episodic / semantic / procedural · Memory write policy · Retrieval policy · Forgetting / decay & conflict  ·  🔧 `$agent-memory-designer`
6. **Lecture 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK** — Graph / state machine (LangGraph) · Agent SDK runtimes (Claude Agent SDK, OpenAI Agents SDK) · Role-based crews (CrewAI) · Conversational multi-agent (AutoGen) · Typed agents (Pydantic AI) & Google ADK · The meta-point:  ·  🔧 `$framework-selector`
7. **Lecture 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate** — When multi-agent helps · Orchestrator + specialists · A2A protocol · Multi-agent debate / critic · Cost/latency multiplication  ·  🔧 `$multi-agent-architect`
8. **Lecture 8 — Computer-Use and Browser Agents** — Perception → action loop · Grounding strategy: pixels vs DOM/a11y · Set-of-marks / element tagging · Verification after action · API > GUI when possible  ·  🔧 `$browser-agent-debugger`
9. **Lecture 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k** — Task success check · Simulated user · pass^k vs pass@k · Failure taxonomy · Eval-gated deploys  ·  🔧 `$agent-eval-suite`
10. **Lecture 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop** — Tracing / spans · Cost & latency accounting · Guardrails · Human-in-the-loop gates · AgentOps lifecycle  ·  🔧 `$agentops-instrumenter`
11. **Lecture 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10** — Direct vs indirect injection · Why agents are uniquely exposed · Least-privilege & privilege separation · Tool/MCP poisoning & confused deputy · Defense in depth  ·  🔧 `$agent-red-team`
12. **Lecture 12 — Capstone: Deploy a Multi-Agent System with an MCP Server**  ·  🔧 `$agent-system-evidence-packet`

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

### State of the Art (June 2026)
- Orchestrator-led agents are replacing monolithic loops; **agent memory** is now the production differentiator.
- Agent SDKs ship the loop as a runtime: **Claude Agent SDK** (`query()`, subagents, hooks), **OpenAI Agents SDK** (Swarm successor), **Google ADK**, **Microsoft Agent Framework 1.0** (GA Apr 2026).
- Tunable **"thinking effort"** (Claude Opus 4.8 effort controls, Gemini 3.1 Pro Low/Med/High) turns the planner/controller split into a dial.
- **1M-context, sparse-MoE** models (Opus 4.8, GPT-5.5, Gemini 3.1, DeepSeek V4) are table stakes — state can hold whole transcripts.

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

## Week 2 — Function Calling, Tool Schemas, and Structured Outputs

### State of the Art (June 2026)
- Function calling + **constrained/structured decoding** (JSON-schema / Pydantic) is reliable across Opus 4.8, GPT-5.5, and Gemini 3.1.
- **BFCL v4** is the live function-calling leaderboard; "irrelevance / when-not-to-call" detection is a scored axis.
- **MCP** (Linux Foundation, 10k+ servers) shifts tools from per-app glue to a shared protocol — Week 3.
- Idempotent single-purpose tools and **errors-as-observations** remain the core reliability levers.

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

## Week 3 — MCP: Build a Model Context Protocol Server (original module)

### State of the Art (June 2026)
- MCP was **donated to the Linux Foundation's Agentic AI Foundation (Dec 2025)**; the new **2026-07-28 spec** adds a stateless core, Extensions, Tasks, MCP Apps, and hardened auth.
- **10,000+ public MCP servers**; GA in VS Code, Copilot, Claude Desktop, ChatGPT, and AWS Bedrock.
- **A2A** absorbed ACP and now sits beside MCP — agents↔agents vs agents↔tools (Week 7).
- Security focus sharpening: tool-poisoning, confused-deputy, and auth hardening drive the new spec (Week 11).

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

## Week 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion

### State of the Art (June 2026)
- **RLVR (RL with Verifiable Rewards)** is the dominant reasoning post-training, displacing pure RLHF for reasoning.
- Test-time compute = parallel sampling + sequential deliberation + **RL-trained verifier models** (RL^V ≈ 1.2–1.6× gains).
- **Reward hacking / verifier gaming** is an active ICLR 2026 failure-mode thread — reflect against *external* signals, not self-grade.
- Tunable extended thinking (Opus 4.8 effort, Gemini 3.1 thinking dial) is the compute-as-a-dial knob.

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

## Week 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem

### State of the Art (June 2026)
- **Agent memory is the production differentiator** in 2026; **Mem0** and **LangMem** are the standard managed layers.
- 1M-token context reshapes but doesn't kill retrieval — **"lost in the middle"** persists, so retrieve, don't stuff.
- Embeddings: **voyage-3-large, Cohere embed-v4, BGE-M3**; vector stores Qdrant / Weaviate / pgvector / Pinecone.
- **Machine unlearning / scoped memory control** is rising for PII handling and retention.

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

## Week 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK

### State of the Art (June 2026)
- 2026 GA: **LangGraph** (durable checkpointing, crash recovery, time-travel debug), **OpenAI Agents SDK** (handoffs), **Claude Agent SDK** (subagents, hooks, computer-use), **Google ADK** (native A2A), **Microsoft Agent Framework 1.0** (AutoGen + Semantic Kernel, Apr 2026).
- **Pydantic AI, CrewAI, smolagents** fill the typed / role-based / lightweight niches.
- **Orchestrator-led multi-agent** is the dominant production topology.
- All converge on **MCP for tools + A2A for agent-to-agent** — frameworks are conveniences over the same loop.

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

## Week 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate

### State of the Art (June 2026)
- **A2A** (Agent Cards, discovery/delegation) is under the Linux Foundation; **ACP merged into A2A**.
- **Orchestrator + specialists** is replacing monolithic agents in production.
- **τ²-bench** (Sierra, dual-control) with **pass^k** measures multi-agent reliability, not just one lucky run.
- A2A and MCP **compose**: agents call agents (A2A), agents call tools (MCP) — they don't compete.

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

## Week 8 — Computer-Use and Browser Agents

### State of the Art (June 2026)
- Production CUA systems: **Claude Computer Use, OpenAI Operator/CUA, Gemini computer use**.
- **Set-of-marks + DOM/accessibility grounding** is standard; multimodal VLMs read the screen directly.
- **WebArena / WebVoyager / Mind2Web** remain the eval substrate — reliability is still the gap.
- **API/MCP is preferred over GUI** whenever a tool exists; browser agents are the last resort.

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

## Week 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k

### State of the Art (June 2026)
- Execution-based agent evals dominate: **τ-bench / τ²-bench** (dual-control, **pass^k** reliability), **SWE-bench Verified/Pro**, **ARC-AGI-2/3**.
- **LLM-as-judge** is the default — with documented biases (**TrustJudge**).
- Eval/observability frameworks: **LangSmith, Braintrust, Arize Phoenix, DeepEval, UK AISI Inspect AI**.
- **Red-teaming / prompt-injection regression** is now a standard part of an agent eval suite (Week 11).

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

## Week 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop

### State of the Art (June 2026)
- Observability stacks (**Langfuse, LangSmith, Arize Phoenix**) capture full **trajectories** with token/cost spans.
- The cost trio: **prompt caching** (up to 90% off static prefixes) + **semantic caching** + **model routing**.
- **Runtime guardrails** (input/output validators, prompt-injection focus) are standard.
- Operate four assets explicitly: **weights, data, prompts, eval metrics**.

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

## Week 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10

### State of the Art (June 2026)
- **OWASP LLM Top 10 (2025)** + **AgentDojo / InjecAgent** are the injection benchmarks.
- The **"lethal trifecta"** (untrusted content + tools + exfiltration) framing drives **dual-LLM/quarantine + least-privilege** defenses.
- **MCP auth hardening** lands in the 2026-07-28 spec; **tool-poisoning** and **confused-deputy** are named threats.
- **EU AI Act** GPAI obligations apply **Aug 2, 2026** — deployed agent systems are in scope.

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

## Week 12 — Capstone: Deploy a Multi-Agent System with an MCP Server

### State of the Art (June 2026)
- The 2026 production bar: **MCP tools + A2A orchestration + agent memory + pass^k eval gate + trajectory tracing + injection regression**.
- Frontier models **Claude Opus 4.8 / GPT-5.5 / Gemini 3.1 Pro** (1M context, tunable thinking) — provider-swappable.
- **EU AI Act** enforcement (Aug 2026) makes the evidence packet / audit trail a compliance asset.
- Open-weight fallbacks (**DeepSeek V4, Qwen 3.5, Llama 4**) keep the system vendor-neutral.

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
