# Detailed Table of Contents — Subject 08 — AI-First Software Development

_Source: `08-ai-first-software-development.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — How Coding LLMs Actually Work (a usable mental model)
_3-hour block · 🔧 skill: `$coding-model-profile` · ▶ project: [`microsoft/generative-ai-for-beginners`](https://github.com/microsoft/generative-ai-for-beginners) — use its code-generation lessons to profile a model's capability-vs-grounding failure shape on Quill._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Next-token prediction over code; Context window & code tokenization |
| 00:30–01:00 | M2 | Lost in the middle |
| 01:00–01:30 | M3 | Capability vs grounding |
| 01:30–02:00 | M4 | Determinism & temperature |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`microsoft/generative-ai-for-beginners`](https://github.com/microsoft/generative-ai-for-beginners) — use its code-generation lessons to profile a model's capability-vs-grounding failure shape on Quill. |

### Lecture 2 — Prompt Engineering for Developers: Specs, Context, and PRDs
_3-hour block · 🔧 skill: `$spec-to-prd` · ▶ project: [`VizuaraAI/modern-software-developer-bootcamp`](https://github.com/VizuaraAI/modern-software-developer-bootcamp) — follow its spec→PRD→plan workflow to turn the Quill sharing request into an agent-ready PRD._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Spec over wish; Acceptance tests in the prompt |
| 00:30–01:00 | M2 | Context curation & ordering |
| 01:00–01:30 | M3 | Few-shot from your repo |
| 01:30–02:00 | M4 | PRD as shared source of truth |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/modern-software-developer-bootcamp`](https://github.com/VizuaraAI/modern-software-developer-bootcamp) — follow its spec→PRD→plan workflow to turn the Quill sharing request into an agent-ready PRD. |

### Lecture 3 — Building a Coding Agent From Scratch
_3-hour block · 🔧 skill: `$coding-agent-loop` · ▶ project: [`Aider-AI/aider`](https://github.com/Aider-AI/aider) — clone it and benchmark your from-scratch `minicoder` against this production agent on the same seeded bugs._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The coding-agent loop; Diff/patch edits vs full rewrites |
| 00:30–01:00 | M2 | Verification as the inner loop |
| 01:00–01:30 | M3 | Localization (find the right file) |
| 01:30–02:00 | M4 | Stop rule & budgets |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`Aider-AI/aider`](https://github.com/Aider-AI/aider) — clone it and benchmark your from-scratch `minicoder` against this production agent on the same seeded bugs. |

### Lecture 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources
_3-hour block · 🔧 skill: `$project-context-pack` · ▶ project: [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — follow its resource examples to expose Quill's PRDs and DB schema as `prd://` / `schema://` MCP resources to the IDE._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Repo indexing & retrieval; @-mentions & manual context |
| 00:30–01:00 | M2 | Rules / conventions files |
| 01:00–01:30 | M3 | PRDs/schemas as MCP resources |
| 01:30–02:00 | M4 | Context cost/quality trade-off |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`modelcontextprotocol/servers`](https://github.com/modelcontextprotocol/servers) — follow its resource examples to expose Quill's PRDs and DB schema as `prd://` / `schema://` MCP resources to the IDE. |

### Lecture 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates
_3-hour block · 🔧 skill: `$autonomy-gate-designer` · ▶ project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its agent/plan-mode patterns to build the plan-gate → diff-gate → irreversible-action-gate workflow._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Autonomy spectrum; Plan-approval checkpoint |
| 00:30–01:00 | M2 | Irreversible-action gates |
| 01:00–01:30 | M3 | Small reversible steps |
| 01:30–02:00 | M4 | Sandboxing & scoped permissions |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`anthropics/anthropic-cookbook`](https://github.com/anthropics/anthropic-cookbook) — adapt its agent/plan-mode patterns to build the plan-gate → diff-gate → irreversible-action-gate workflow. |

### Lecture 6 — The Modern AI Terminal and Sandboxing
_3-hour block · 🔧 skill: `$agent-sandbox-config` · ▶ project: [`krishnaik06/Dockers`](https://github.com/krishnaik06/Dockers) — use it to build the repo-scoped, no-host-creds, network-off dev container the agent executes inside._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AI terminal; Why sandbox |
| 00:30–01:00 | M2 | Sandbox dimensions |
| 01:00–01:30 | M3 | Ephemeral sandboxes (E2B / cloud) |
| 01:30–02:00 | M4 | Allow-listed commands |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Dockers`](https://github.com/krishnaik06/Dockers) — use it to build the repo-scoped, no-host-creds, network-off dev container the agent executes inside. |

### Lecture 7 — AI-Generated Tests and Test Quality
_3-hour block · 🔧 skill: `$ai-test-hardener` · ▶ project: [`evalplus/evalplus`](https://github.com/evalplus/evalplus) — run its augmented test suites to expose weak AI tests, then harden Quill's suite to a mutation-score bar._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Coverage ≠ quality; Mutation testing |
| 00:30–01:00 | M2 | Property-based testing |
| 01:00–01:30 | M3 | AI-assisted TDD |
| 01:30–02:00 | M4 | Test independence from the implementer |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`evalplus/evalplus`](https://github.com/evalplus/evalplus) — run its augmented test suites to expose weak AI tests, then harden Quill's suite to a mutation-score bar. |

### Lecture 8 — AI Security and Secure "Vibe Coding"
_3-hour block · 🔧 skill: `$secure-code-gate` · ▶ project: [`juice-shop/juice-shop`](https://github.com/juice-shop/juice-shop) — point your SAST/secret/deps/DAST gate at this deliberately-vulnerable app to prove it catches real vulns._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why AI code is insecure; SAST |
| 00:30–01:00 | M2 | Secret scanning |
| 01:00–01:30 | M3 | DAST |
| 01:30–02:00 | M4 | Dependency/supply-chain scanning |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`juice-shop/juice-shop`](https://github.com/juice-shop/juice-shop) — point your SAST/secret/deps/DAST gate at this deliberately-vulnerable app to prove it catches real vulns. |

### Lecture 9 — AI Code Review Gates
_3-hour block · 🔧 skill: `$ai-review-gate` · ▶ project: [`openai/openai-cookbook`](https://github.com/openai/openai-cookbook) — adapt its evaluation/review recipes to build the grounded AI PR reviewer wired as a branch-protection gate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AI vs human review division of labor; Reviewer grounding |
| 00:30–01:00 | M2 | Signal vs noise |
| 01:00–01:30 | M3 | Review as a gate, not advice |
| 01:30–02:00 | M4 | Self-review prompt for the author |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`openai/openai-cookbook`](https://github.com/openai/openai-cookbook) — adapt its evaluation/review recipes to build the grounded AI PR reviewer wired as a branch-protection gate. |

### Lecture 10 — Automated UI and App Building
_3-hour block · 🔧 skill: `$ui-reconcile` · ▶ project: [`shadcn-ui/ui`](https://github.com/shadcn-ui/ui) — reconcile generated Quill UI into its component conventions, wired to the real share API with error/empty states._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Generative UI; Reconciliation |
| 00:30–01:00 | M2 | Visual feedback loop |
| 01:00–01:30 | M3 | Component/E2E verification |
| 01:30–02:00 | M4 | Prototype vs keep |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`shadcn-ui/ui`](https://github.com/shadcn-ui/ui) — reconcile generated Quill UI into its component conventions, wired to the real share API with error/empty states. |

### Lecture 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation
_3-hour block · 🔧 skill: `$ai-incident-runbook` · ▶ project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — reuse its CI/deploy template as the monitored-deploy base for the shipped feature and the incident drill._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Observability for shipped features; SLOs & alerts |
| 00:30–01:00 | M2 | Feature flags + canary + rollback |
| 01:00–01:30 | M3 | AI-assisted incident response |
| 01:30–02:00 | M4 | SWE-bench-style self-evaluation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/mlproject`](https://github.com/krishnaik06/mlproject) — reuse its CI/deploy template as the monitored-deploy base for the shipped feature and the incident drill. |

### Lecture 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent
_3-hour block · 🔧 skill: `$ai-delivery-evidence-packet` · ▶ project: [`krishnaik06/Deployment-flask`](https://github.com/krishnaik06/Deployment-flask) — package and deploy the capstone Quill feature behind a real endpoint with flag/canary/rollback._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`krishnaik06/Deployment-flask`](https://github.com/krishnaik06/Deployment-flask) — package and deploy the capstone Quill feature behind a real endpoint with flag/canary/rollback. |

