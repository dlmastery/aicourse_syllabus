# Detailed Table of Contents — AI Agents & AI-First Software Engineering

_`03-ai-agents-and-ai-first-software.md` · **1 quarter-track · 3 lecture-hrs/week · 24 lectures across 2 parts (~72 contact hrs)**. Every lecture has a ▶ practical project + State-of-the-Art with links._

## Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps)

### Week 1 — Agent Anatomy and the Agent Loop
_3-hour block · 🔧 `$agent-anatomy-map` · ▶ [`The-Pocket/PocketFlow`](https://github.com/The-Pocket/PocketFlow) — study and extend a ~100-line agent framework to internalize the bare observe→think→act loop before any heavyweight framework._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The agent loop; Planner vs controller |
| 00:30–01:00 | M2 | Critic / verifier |
| 01:00–01:30 | M3 | Workflow vs agent (the autonomy dial) |
| 01:30–02:00 | M4 | Tools as the action space |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`The-Pocket/PocketFlow`](https://github.com/The-Pocket/PocketFlow) — study and extend a ~100-line agent framework to internalize the bare observe→think→act loop before any heavyweight framework. |

### Week 2 — Function Calling, Tool Schemas, and Structured Outputs
_3-hour block · 🔧 `$tool-schema-designer` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its tool-use / structured-output recipes to build Atlas's typed, constrained-decoding tool belt._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tool schema; Description as prompt |
| 00:30–01:00 | M2 | Structured outputs / constrained decoding |
| 01:00–01:30 | M3 | Tool granularity & idempotency |
| 01:30–02:00 | M4 | Errors as observations |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its tool-use / structured-output recipes to build Atlas's typed, constrained-decoding tool belt. |

### Week 3 — MCP: Build a Model Context Protocol Server (original module)
_3-hour block · 🔧 `$mcp-server-scaffold` · ▶ [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — clone the official example servers (filesystem/git/fetch), mirror their structure, and build your own Atlas MCP server._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why MCP (the "USB-C for tools" framing); Three primitives |
| 00:30–01:00 | M2 | Client–server–host; Transport & capability negotiation |
| 01:00–01:30 | M3 | The trust boundary |
| 01:30–02:00 | M4 | Audit logging & tool overreach |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — clone the official example servers (filesystem/git/fetch), mirror their structure, and build your own Atlas MCP server. |

### Week 4 — Reasoning and Planning: ReAct, Plan-and-Execute, Reflexion
_3-hour block · 🔧 `$reasoning-strategy-picker` · ▶ [`NirDiamant/GenAI_Agents`](https://github.com/NirDiamant/GenAI_Agents) — adapt its ReAct / plan-and-execute / reflection implementations and benchmark them on the Atlas booking tasks._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | ReAct; Plan-and-execute |
| 00:30–01:00 | M2 | Reflexion / self-refine |
| 01:00–01:30 | M3 | Test-time compute as a dial |
| 01:30–02:00 | M4 | Verifier vs generator |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`NirDiamant/GenAI_Agents`](https://github.com/NirDiamant/GenAI_Agents) — adapt its ReAct / plan-and-execute / reflection implementations and benchmark them on the Atlas booking tasks. |

### Week 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem
_3-hour block · 🔧 `$agent-memory-designer` · ▶ [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — reuse its embed→store→retrieve stack as the raw long-term-memory baseline, then A/B it against Mem0/LangMem._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Working vs long-term memory; Episodic / semantic / procedural |
| 00:30–01:00 | M2 | Memory write policy |
| 01:00–01:30 | M3 | Retrieval policy |
| 01:30–02:00 | M4 | Forgetting / decay & conflict |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/RAG-Tutorials`](https://github.com/krishnaik06/RAG-Tutorials) — reuse its embed→store→retrieve stack as the raw long-term-memory baseline, then A/B it against Mem0/LangMem. |

### Week 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK
_3-hour block · 🔧 `$framework-selector` · ▶ [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to rebuild Atlas as a checkpointed LangGraph graph with a human-approval node._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Graph / state machine (LangGraph); Agent SDK runtimes (Claude Agent SDK, OpenAI Agents SDK) |
| 00:30–01:00 | M2 | Role-based crews (CrewAI); Conversational multi-agent (AutoGen) |
| 01:00–01:30 | M3 | Typed agents (Pydantic AI) & Google ADK |
| 01:30–02:00 | M4 | The meta-point: |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Agentic-LanggraphCrash-course`](https://github.com/krishnaik06/Agentic-LanggraphCrash-course) — follow it to rebuild Atlas as a checkpointed LangGraph graph with a human-approval node. |

### Week 7 — Multi-Agent Systems and A2A: Orchestrator, Specialists, Debate
_3-hour block · 🔧 `$multi-agent-architect` · ▶ [`microsoft/ai-agents-for-beginners`](https://github.com/microsoft/ai-agents-for-beginners) — use its multi-agent / orchestration lessons as the pattern base for the Atlas orchestrator + A2A specialists._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | When multi-agent helps; Orchestrator + specialists |
| 00:30–01:00 | M2 | A2A protocol |
| 01:00–01:30 | M3 | Multi-agent debate / critic |
| 01:30–02:00 | M4 | Cost/latency multiplication |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`microsoft/ai-agents-for-beginners`](https://github.com/microsoft/ai-agents-for-beginners) — use its multi-agent / orchestration lessons as the pattern base for the Atlas orchestrator + A2A specialists. |

### Week 8 — Computer-Use and Browser Agents
_3-hour block · 🔧 `$browser-agent-debugger` · ▶ [`web-arena-x/webarena`](https://github.com/web-arena-x/webarena) — self-host its realistic sites and run your Playwright browser agent against a task subset._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Perception → action loop; Grounding strategy: pixels vs DOM/a11y |
| 00:30–01:00 | M2 | Set-of-marks / element tagging |
| 01:00–01:30 | M3 | Verification after action |
| 01:30–02:00 | M4 | API > GUI when possible |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`web-arena-x/webarena`](https://github.com/web-arena-x/webarena) — self-host its realistic sites and run your Playwright browser agent against a task subset. |

### Week 9 — Agent Evaluation: tau-bench, Long-Horizon, and pass^k
_3-hour block · 🔧 `$agent-eval-suite` · ▶ [`sierra-research/tau-bench`](https://github.com/sierra-research/tau-bench) — run the official τ-bench/τ²-bench harness on `airline`, then mirror its structure for the ≥40-task Atlas pass^k suite._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Task success check; Simulated user |
| 00:30–01:00 | M2 | pass^k vs pass@k |
| 01:00–01:30 | M3 | Failure taxonomy |
| 01:30–02:00 | M4 | Eval-gated deploys |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`sierra-research/tau-bench`](https://github.com/sierra-research/tau-bench) — run the official τ-bench/τ²-bench harness on `airline`, then mirror its structure for the ≥40-task Atlas pass^k suite. |

### Week 10 — AgentOps: Observability, Cost, Guardrails, Human-in-the-Loop
_3-hour block · 🔧 `$agentops-instrumenter` · ▶ [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument Atlas so every LLM/tool/sub-agent call is a span with cost and latency._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Tracing / spans; Cost & latency accounting |
| 00:30–01:00 | M2 | Guardrails |
| 01:00–01:30 | M3 | Human-in-the-loop gates |
| 01:30–02:00 | M4 | AgentOps lifecycle |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`langfuse/langfuse`](https://github.com/langfuse/langfuse) — self-host it and instrument Atlas so every LLM/tool/sub-agent call is a span with cost and latency. |

### Week 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10
_3-hour block · 🔧 `$agent-red-team` · ▶ [`ethz-spylab/agentdojo`](https://github.com/ethz-spylab/agentdojo) — run its prompt-injection attack/defense harness against hardened Atlas and report attack-success-rate before vs after._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Direct vs indirect injection; Why agents are uniquely exposed |
| 00:30–01:00 | M2 | Least-privilege & privilege separation |
| 01:00–01:30 | M3 | Tool/MCP poisoning & confused deputy |
| 01:30–02:00 | M4 | Defense in depth |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`ethz-spylab/agentdojo`](https://github.com/ethz-spylab/agentdojo) — run its prompt-injection attack/defense harness against hardened Atlas and report attack-success-rate before vs after. |

### Week 12 — Capstone: Deploy a Multi-Agent System with an MCP Server
_3-hour block · 🔧 `$agent-system-evidence-packet` · ▶ [`langchain-ai/langchain`](https://github.com/langchain-ai/langchain) — ship the capstone Atlas on production LangGraph (durable checkpointing, streaming, HITL) wired to your MCP server and pass^k gate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`langchain-ai/langchain`](https://github.com/langchain-ai/langchain) — ship the capstone Atlas on production LangGraph (durable checkpointing, streaming, HITL) wired to your MCP server and pass^k gate. |

## Part B — AI-First Software Development

### Week 1 — How Coding LLMs Actually Work (a usable mental model)
_3-hour block · 🔧 `$coding-model-profile` · ▶ [`microsoft/generative-ai-for-beginners`](https://github.com/microsoft/generative-ai-for-beginners) — use its code-generation lessons to profile a model's capability-vs-grounding failure shape on Quill._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Next-token prediction over code; Context window & code tokenization |
| 00:30–01:00 | M2 | Lost in the middle |
| 01:00–01:30 | M3 | Capability vs grounding |
| 01:30–02:00 | M4 | Determinism & temperature |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`microsoft/generative-ai-for-beginners`](https://github.com/microsoft/generative-ai-for-beginners) — use its code-generation lessons to profile a model's capability-vs-grounding failure shape on Quill. |

### Week 2 — Prompt Engineering for Developers: Specs, Context, and PRDs
_3-hour block · 🔧 `$spec-to-prd` · ▶ [`VizuaraAI/modern-software-developer-bootcamp`](https://github.com/VizuaraAI/modern-software-developer-bootcamp) — follow its spec→PRD→plan workflow to turn the Quill sharing request into an agent-ready PRD._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Spec over wish; Acceptance tests in the prompt |
| 00:30–01:00 | M2 | Context curation & ordering |
| 01:00–01:30 | M3 | Few-shot from your repo |
| 01:30–02:00 | M4 | PRD as shared source of truth |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`VizuaraAI/modern-software-developer-bootcamp`](https://github.com/VizuaraAI/modern-software-developer-bootcamp) — follow its spec→PRD→plan workflow to turn the Quill sharing request into an agent-ready PRD. |

### Week 3 — Building a Coding Agent From Scratch
_3-hour block · 🔧 `$coding-agent-loop` · ▶ [`Aider-AI/aider`](https://github.com/Aider-AI/aider) — clone it and benchmark your from-scratch `minicoder` against this production agent on the same seeded bugs._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The coding-agent loop; Diff/patch edits vs full rewrites |
| 00:30–01:00 | M2 | Verification as the inner loop |
| 01:00–01:30 | M3 | Localization (find the right file) |
| 01:30–02:00 | M4 | Stop rule & budgets |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`Aider-AI/aider`](https://github.com/Aider-AI/aider) — clone it and benchmark your from-scratch `minicoder` against this production agent on the same seeded bugs. |

### Week 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources
_3-hour block · 🔧 `$project-context-pack` · ▶ [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — follow its resource examples to expose Quill's PRDs and DB schema as `prd://` / `schema://` MCP resources to the IDE._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Repo indexing & retrieval; @-mentions & manual context |
| 00:30–01:00 | M2 | Rules / conventions files |
| 01:00–01:30 | M3 | PRDs/schemas as MCP resources |
| 01:30–02:00 | M4 | Context cost/quality trade-off |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — follow its resource examples to expose Quill's PRDs and DB schema as `prd://` / `schema://` MCP resources to the IDE. |

### Week 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates
_3-hour block · 🔧 `$autonomy-gate-designer` · ▶ [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its agent/plan-mode patterns to build the plan-gate → diff-gate → irreversible-action-gate workflow._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Autonomy spectrum; Plan-approval checkpoint |
| 00:30–01:00 | M2 | Irreversible-action gates |
| 01:00–01:30 | M3 | Small reversible steps |
| 01:30–02:00 | M4 | Sandboxing & scoped permissions |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its agent/plan-mode patterns to build the plan-gate → diff-gate → irreversible-action-gate workflow. |

### Week 6 — The Modern AI Terminal and Sandboxing
_3-hour block · 🔧 `$agent-sandbox-config` · ▶ [`krishnaik06/Dockers`](https://github.com/krishnaik06/Dockers) — use it to build the repo-scoped, no-host-creds, network-off dev container the agent executes inside._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AI terminal; Why sandbox |
| 00:30–01:00 | M2 | Sandbox dimensions |
| 01:00–01:30 | M3 | Ephemeral sandboxes (E2B / cloud) |
| 01:30–02:00 | M4 | Allow-listed commands |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Dockers`](https://github.com/krishnaik06/Dockers) — use it to build the repo-scoped, no-host-creds, network-off dev container the agent executes inside. |

### Week 7 — AI-Generated Tests and Test Quality
_3-hour block · 🔧 `$ai-test-hardener` · ▶ [`evalplus/evalplus`](https://github.com/evalplus/evalplus) — run its augmented test suites to expose weak AI tests, then harden Quill's suite to a mutation-score bar._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Coverage ≠ quality; Mutation testing |
| 00:30–01:00 | M2 | Property-based testing |
| 01:00–01:30 | M3 | AI-assisted TDD |
| 01:30–02:00 | M4 | Test independence from the implementer |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`evalplus/evalplus`](https://github.com/evalplus/evalplus) — run its augmented test suites to expose weak AI tests, then harden Quill's suite to a mutation-score bar. |

### Week 8 — AI Security and Secure "Vibe Coding"
_3-hour block · 🔧 `$secure-code-gate` · ▶ [`juice-shop/juice-shop`](https://github.com/juice-shop/juice-shop) — point your SAST/secret/deps/DAST gate at this deliberately-vulnerable app to prove it catches real vulns._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why AI code is insecure; SAST |
| 00:30–01:00 | M2 | Secret scanning |
| 01:00–01:30 | M3 | DAST |
| 01:30–02:00 | M4 | Dependency/supply-chain scanning |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`juice-shop/juice-shop`](https://github.com/juice-shop/juice-shop) — point your SAST/secret/deps/DAST gate at this deliberately-vulnerable app to prove it catches real vulns. |

### Week 9 — AI Code Review Gates
_3-hour block · 🔧 `$ai-review-gate` · ▶ [`openai/openai-cookbook`](https://github.com/openai/openai-cookbook) — adapt its evaluation/review recipes to build the grounded AI PR reviewer wired as a branch-protection gate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AI vs human review division of labor; Reviewer grounding |
| 00:30–01:00 | M2 | Signal vs noise |
| 01:00–01:30 | M3 | Review as a gate, not advice |
| 01:30–02:00 | M4 | Self-review prompt for the author |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`openai/openai-cookbook`](https://github.com/openai/openai-cookbook) — adapt its evaluation/review recipes to build the grounded AI PR reviewer wired as a branch-protection gate. |

### Week 10 — Automated UI and App Building
_3-hour block · 🔧 `$ui-reconcile` · ▶ [`shadcn-ui/ui`](https://github.com/shadcn-ui/ui) — reconcile generated Quill UI into its component conventions, wired to the real share API with error/empty states._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Generative UI; Reconciliation |
| 00:30–01:00 | M2 | Visual feedback loop |
| 01:00–01:30 | M3 | Component/E2E verification |
| 01:30–02:00 | M4 | Prototype vs keep |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`shadcn-ui/ui`](https://github.com/shadcn-ui/ui) — reconcile generated Quill UI into its component conventions, wired to the real share API with error/empty states. |

### Week 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation
_3-hour block · 🔧 `$ai-incident-runbook` · ▶ [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — reuse its CI/deploy template as the monitored-deploy base for the shipped feature and the incident drill._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Observability for shipped features; SLOs & alerts |
| 00:30–01:00 | M2 | Feature flags + canary + rollback |
| 01:00–01:30 | M3 | AI-assisted incident response |
| 01:30–02:00 | M4 | SWE-bench-style self-evaluation |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — reuse its CI/deploy template as the monitored-deploy base for the shipped feature and the incident drill. |

### Week 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent
_3-hour block · 🔧 `$ai-delivery-evidence-packet` · ▶ [`krishnaik06/Deployment-flask`](https://github.com/krishnaik06/Deployment-flask) — package and deploy the capstone Quill feature behind a real endpoint with flag/canary/rollback._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap + lecture goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection |
| 02:00–02:30 | Studio | Guided practice toward the lab |
| 02:30–03:00 | Lab | ▶ Practical project: [`krishnaik06/Deployment-flask`](https://github.com/krishnaik06/Deployment-flask) — package and deploy the capstone Quill feature behind a real endpoint with flag/canary/rollback. |

