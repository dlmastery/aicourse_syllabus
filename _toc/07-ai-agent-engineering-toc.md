# Detailed Table of Contents — Subject 07 — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)

_Source: `07-ai-agent-engineering.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**_

### Lecture 1 — Agent Anatomy and the Agent Loop
_3-hour block · 🔧 reusable skill: `$agent-anatomy-map`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The agent loop; Planner vs controller |
| 00:30–01:00 | M2 | Critic / verifier |
| 01:00–01:30 | M3 | Workflow vs agent (the autonomy dial) |
| 01:30–02:00 | M4 | Tools as the action space |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas/loop.py: a from-scratch agent loop (no LangGraph yet). One model call per turn; parse a JSON t |

### Lecture 2 — Function Calling, Tool Schemas, and Structured Outputs
_3-hour block · 🔧 reusable skill: `$tool-schema-designer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tool schema; Description as prompt |
| 00:30–01:00 | M2 | Structured outputs / constrained decoding |
| 01:00–01:30 | M3 | Tool granularity & idempotency |
| 01:30–02:00 | M4 | Errors as observations |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas/tools.py: define 5 tools as Pydantic models with enums, ranges, and model-facing error message |

### Lecture 3 — MCP: Build a Model Context Protocol Server (original module)
_3-hour block · 🔧 reusable skill: `$mcp-server-scaffold`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why MCP (the "USB-C for tools" framing); Three primitives |
| 00:30–01:00 | M2 | Client–server–host |
| 01:00–01:30 | M3 | Transport & capability negotiation |
| 01:30–02:00 | M4 | The trust boundary |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas_mcp/server.py with **FastMCP**: expose ≥3 tools (search_flights, get_policy, file_expense), ≥2 |

### Lecture 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion
_3-hour block · 🔧 reusable skill: `$reasoning-strategy-picker`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ReAct; Plan-and-execute |
| 00:30–01:00 | M2 | Reflexion / self-refine |
| 01:00–01:30 | M3 | Test-time compute as a dial |
| 01:30–02:00 | M4 | Verifier vs generator |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas/planners.py: implement three strategies — react, plan_execute, reflexion — behind one interfac |

### Lecture 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem
_3-hour block · 🔧 reusable skill: `$agent-memory-designer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Working vs long-term memory; Episodic / semantic / procedural |
| 00:30–01:00 | M2 | Memory write policy |
| 01:00–01:30 | M3 | Retrieval policy |
| 01:30–02:00 | M4 | Forgetting / decay & conflict |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas/memory_raw.py: from-scratch long-term memory (embed with a small model, store in pgvector/Chro |

### Lecture 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK
_3-hour block · 🔧 reusable skill: `$framework-selector`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Graph / state machine (LangGraph); Agent SDK runtimes (Claude Agent SDK, OpenAI Agents SDK) |
| 00:30–01:00 | M2 | Role-based crews (CrewAI); Conversational multi-agent (AutoGen) |
| 01:00–01:30 | M3 | Typed agents (Pydantic AI) & Google ADK |
| 01:30–02:00 | M4 | The meta-point: |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas/graph.py in **LangGraph**: nodes for plan → act → (human-approve if amount>$500) → file; check |

### Lecture 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate
_3-hour block · 🔧 reusable skill: `$multi-agent-architect`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | When multi-agent helps; Orchestrator + specialists |
| 00:30–01:00 | M2 | A2A protocol |
| 01:00–01:30 | M3 | Multi-agent debate / critic |
| 01:30–02:00 | M4 | Cost/latency multiplication |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas/multi/: an orchestrator + 3 specialists; specialists expose **A2A agent cards**; orchestrator  |

### Lecture 8 — Computer-Use and Browser Agents
_3-hour block · 🔧 reusable skill: `$browser-agent-debugger`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Perception → action loop; Grounding strategy: pixels vs DOM/a11y |
| 00:30–01:00 | M2 | Set-of-marks / element tagging |
| 01:00–01:30 | M3 | Verification after action |
| 01:30–02:00 | M4 | API > GUI when possible |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | atlas/browser/agent.py with **Playwright**: a perceive→act→verify loop over a *sandboxed* mock airli |

### Lecture 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k
_3-hour block · 🔧 reusable skill: `$agent-eval-suite`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Task success check; Simulated user |
| 00:30–01:00 | M2 | pass^k vs pass@k |
| 01:00–01:30 | M3 | Failure taxonomy |
| 01:30–02:00 | M4 | Eval-gated deploys |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | eval/atlas_bench.py: ≥40 T&E tasks with simulated users + DB state checks; run each k=5 times; repor |

### Lecture 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop
_3-hour block · 🔧 reusable skill: `$agentops-instrumenter`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tracing / spans; Cost & latency accounting |
| 00:30–01:00 | M2 | Guardrails |
| 01:00–01:30 | M3 | Human-in-the-loop gates |
| 01:30–02:00 | M4 | AgentOps lifecycle |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Wire **Langfuse** into Atlas: every LLM/tool/sub-agent call is a span; tag runs with cost, latency,  |

### Lecture 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10
_3-hour block · 🔧 reusable skill: `$agent-red-team`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Direct vs indirect injection; Why agents are uniquely exposed |
| 00:30–01:00 | M2 | Least-privilege & privilege separation |
| 01:00–01:30 | M3 | Tool/MCP poisoning & confused deputy |
| 01:30–02:00 | M4 | Defense in depth |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build an **attack set**: 15 indirect-injection payloads embedded in receipts/web content/emails Atla |

### Lecture 12 — Capstone: Deploy a Multi-Agent System with an MCP Server
_3-hour block · 🔧 reusable skill: `$agent-system-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Ship **Atlas** end-to-end with: (a) a custom **MCP server** for the expense/policy backend; (b) an * |

