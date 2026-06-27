# Detailed Table of Contents — Subject 07 — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)

_Source: `07-ai-agent-engineering.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — Agent Anatomy and the Agent Loop
_3-hour block · 🔧 skill: `$agent-anatomy-map` · ▶ project: [`The-Pocket/PocketFlow`](https://github.com/The-Pocket/PocketFlow) — study and extend a ~100-line agent framework to internalize the bare observe→think→act loop before any heavyweight framework._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The agent loop; Planner vs controller |
| 00:30–01:00 | M2 | Critic / verifier |
| 01:00–01:30 | M3 | Workflow vs agent (the autonomy dial) |
| 01:30–02:00 | M4 | Tools as the action space |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`The-Pocket/PocketFlow`](https://github.com/The-Pocket/PocketFlow) — study and extend a ~100-line agent framework to internalize the bare observe→think→act loop before any heavyweight framework. |

### Lecture 2 — Function Calling, Tool Schemas, and Structured Outputs
_3-hour block · 🔧 skill: `$tool-schema-designer` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its tool-use / structured-output recipes to build Atlas's typed, constrained-decoding tool belt._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tool schema; Description as prompt |
| 00:30–01:00 | M2 | Structured outputs / constrained decoding |
| 01:00–01:30 | M3 | Tool granularity & idempotency |
| 01:30–02:00 | M4 | Errors as observations |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its tool-use / structured-output recipes to build Atlas's typed, constrained-decoding tool belt. |

### Lecture 3 — MCP: Build a Model Context Protocol Server (original module)
_3-hour block · 🔧 skill: `$mcp-server-scaffold` · ▶ project: [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — clone the official example servers (filesystem/git/fetch), mirror their structure, and build your own Atlas MCP server._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why MCP (the "USB-C for tools" framing); Three primitives |
| 00:30–01:00 | M2 | Client–server–host; Transport & capability negotiation |
| 01:00–01:30 | M3 | The trust boundary |
| 01:30–02:00 | M4 | Audit logging & tool overreach |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — clone the official example servers (filesystem/git/fetch), mirror their structure, and build your own Atlas MCP server. |

### Lecture 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion
_3-hour block · 🔧 skill: `$reasoning-strategy-picker` · ▶ project: [`NirDiamant/GenAI_Agents`](https://github.com/NirDiamant/GenAI_Agents) — adapt its ReAct / plan-and-execute / reflection implementations and benchmark them on the Atlas booking tasks._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ReAct; Plan-and-execute |
| 00:30–01:00 | M2 | Reflexion / self-refine |
| 01:00–01:30 | M3 | Test-time compute as a dial |
| 01:30–02:00 | M4 | Verifier vs generator |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`NirDiamant/GenAI_Agents`](https://github.com/NirDiamant/GenAI_Agents) — adapt its ReAct / plan-and-execute / reflection implementations and benchmark them on the Atlas booking tasks. |

### Lecture 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem
_3-hour block · 🔧 skill: `$agent-memory-designer` · ▶ project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — reuse its embed→store→retrieve stack as the raw long-term-memory baseline, then A/B it against Mem0/LangMem._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Working vs long-term memory; Episodic / semantic / procedural |
| 00:30–01:00 | M2 | Memory write policy |
| 01:00–01:30 | M3 | Retrieval policy |
| 01:30–02:00 | M4 | Forgetting / decay & conflict |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — reuse its embed→store→retrieve stack as the raw long-term-memory baseline, then A/B it against Mem0/LangMem. |

### Lecture 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK
_3-hour block · 🔧 skill: `$framework-selector` · ▶ project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to rebuild Atlas as a checkpointed LangGraph graph with a human-approval node._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Graph / state machine (LangGraph); Agent SDK runtimes (Claude Agent SDK, OpenAI Agents SDK) |
| 00:30–01:00 | M2 | Role-based crews (CrewAI); Conversational multi-agent (AutoGen) |
| 01:00–01:30 | M3 | Typed agents (Pydantic AI) & Google ADK |
| 01:30–02:00 | M4 | The meta-point: |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to rebuild Atlas as a checkpointed LangGraph graph with a human-approval node. |

### Lecture 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate
_3-hour block · 🔧 skill: `$multi-agent-architect` · ▶ project: [`microsoft/ai-agents-for-beginners`](https://github.com/microsoft/ai-agents-for-beginners) — use its multi-agent / orchestration lessons as the pattern base for the Atlas orchestrator + A2A specialists._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | When multi-agent helps; Orchestrator + specialists |
| 00:30–01:00 | M2 | A2A protocol |
| 01:00–01:30 | M3 | Multi-agent debate / critic |
| 01:30–02:00 | M4 | Cost/latency multiplication |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`microsoft/ai-agents-for-beginners`](https://github.com/microsoft/ai-agents-for-beginners) — use its multi-agent / orchestration lessons as the pattern base for the Atlas orchestrator + A2A specialists. |

### Lecture 8 — Computer-Use and Browser Agents
_3-hour block · 🔧 skill: `$browser-agent-debugger` · ▶ project: [`web-arena-x/webarena`](https://github.com/web-arena-x/webarena) — self-host its realistic sites and run your Playwright browser agent against a task subset._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Perception → action loop; Grounding strategy: pixels vs DOM/a11y |
| 00:30–01:00 | M2 | Set-of-marks / element tagging |
| 01:00–01:30 | M3 | Verification after action |
| 01:30–02:00 | M4 | API > GUI when possible |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`web-arena-x/webarena`](https://github.com/web-arena-x/webarena) — self-host its realistic sites and run your Playwright browser agent against a task subset. |

### Lecture 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k
_3-hour block · 🔧 skill: `$agent-eval-suite` · ▶ project: [`sierra-research/tau-bench`](https://github.com/sierra-research/tau-bench) — run the official τ-bench/τ²-bench harness on `airline`, then mirror its structure for the ≥40-task Atlas pass^k suite._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Task success check; Simulated user |
| 00:30–01:00 | M2 | pass^k vs pass@k |
| 01:00–01:30 | M3 | Failure taxonomy |
| 01:30–02:00 | M4 | Eval-gated deploys |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`sierra-research/tau-bench`](https://github.com/sierra-research/tau-bench) — run the official τ-bench/τ²-bench harness on `airline`, then mirror its structure for the ≥40-task Atlas pass^k suite. |

### Lecture 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop
_3-hour block · 🔧 skill: `$agentops-instrumenter` · ▶ project: [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument Atlas so every LLM/tool/sub-agent call is a span with cost and latency._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tracing / spans; Cost & latency accounting |
| 00:30–01:00 | M2 | Guardrails |
| 01:00–01:30 | M3 | Human-in-the-loop gates |
| 01:30–02:00 | M4 | AgentOps lifecycle |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument Atlas so every LLM/tool/sub-agent call is a span with cost and latency. |

### Lecture 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10
_3-hour block · 🔧 skill: `$agent-red-team` · ▶ project: [`ethz-spylab/agentdojo`](https://github.com/ethz-spylab/agentdojo) — run its prompt-injection attack/defense harness against hardened Atlas and report attack-success-rate before vs after._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Direct vs indirect injection; Why agents are uniquely exposed |
| 00:30–01:00 | M2 | Least-privilege & privilege separation |
| 01:00–01:30 | M3 | Tool/MCP poisoning & confused deputy |
| 01:30–02:00 | M4 | Defense in depth |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`ethz-spylab/agentdojo`](https://github.com/ethz-spylab/agentdojo) — run its prompt-injection attack/defense harness against hardened Atlas and report attack-success-rate before vs after. |

### Lecture 12 — Capstone: Deploy a Multi-Agent System with an MCP Server
_3-hour block · 🔧 skill: `$agent-system-evidence-packet` · ▶ project: [`langchain-ai/langchain`](https://github.com/langchain-ai/langchain) — ship the capstone Atlas on production LangGraph (durable checkpointing, streaming, HITL) wired to your MCP server and pass^k gate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`langchain-ai/langchain`](https://github.com/langchain-ai/langchain) — ship the capstone Atlas on production LangGraph (durable checkpointing, streaming, HITL) wired to your MCP server and pass^k gate. |

