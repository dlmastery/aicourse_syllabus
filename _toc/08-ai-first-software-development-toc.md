# Detailed Table of Contents — Subject 08 — AI-First Software Development

_Source: `08-ai-first-software-development.md` · **1 academic quarter · 3 lecture-hours/week · 12 weekly lectures (~36 contact hours)**_

### Lecture 1 — How Coding LLMs Actually Work (a usable mental model)
_3-hour block · 🔧 reusable skill: `$coding-model-profile`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Next-token prediction over code; Context window & code tokenization |
| 00:30–01:00 | M2 | Lost in the middle |
| 01:00–01:30 | M3 | Capability vs grounding |
| 01:30–02:00 | M4 | Determinism & temperature |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | experiments/code_profile/: give a model 12 Quill tasks across a difficulty ladder (one-liner → cross |

### Lecture 2 — Prompt Engineering for Developers: Specs, Context, and PRDs
_3-hour block · 🔧 reusable skill: `$spec-to-prd`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Spec over wish; Acceptance tests in the prompt |
| 00:30–01:00 | M2 | Context curation & ordering |
| 01:00–01:30 | M3 | Few-shot from your repo |
| 01:30–02:00 | M4 | PRD as shared source of truth |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | prd/share-notes.md: a real PRD for Quill's sharing feature (problem, users, requirements, API/type c |

### Lecture 3 — Building a Coding Agent From Scratch
_3-hour block · 🔧 reusable skill: `$coding-agent-loop`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The coding-agent loop; Diff/patch edits vs full rewrites |
| 00:30–01:00 | M2 | Verification as the inner loop |
| 01:00–01:30 | M3 | Localization (find the right file) |
| 01:30–02:00 | M4 | Stop rule & budgets |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | minicoder/: a from-scratch coding agent with tools read_file, grep, apply_patch, run_tests; a loop t |

### Lecture 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources
_3-hour block · 🔧 reusable skill: `$project-context-pack`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Repo indexing & retrieval; @-mentions & manual context |
| 00:30–01:00 | M2 | Rules / conventions files |
| 01:00–01:30 | M3 | PRDs/schemas as MCP resources |
| 01:30–02:00 | M4 | Context cost/quality trade-off |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Configure Quill's IDE: a CLAUDE.md/rules file (conventions, commands, architecture), @-mention workf |

### Lecture 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates
_3-hour block · 🔧 reusable skill: `$autonomy-gate-designer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Autonomy spectrum; Plan-approval checkpoint |
| 00:30–01:00 | M2 | Irreversible-action gates |
| 01:00–01:30 | M3 | Small reversible steps |
| 01:30–02:00 | M4 | Sandboxing & scoped permissions |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement a **plan-gate workflow**: the agent must output a plan/diff outline; a human approves/edit |

### Lecture 6 — The Modern AI Terminal and Sandboxing
_3-hour block · 🔧 reusable skill: `$agent-sandbox-config`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AI terminal; Why sandbox |
| 00:30–01:00 | M2 | Sandbox dimensions |
| 01:00–01:30 | M3 | Ephemeral sandboxes (E2B / cloud) |
| 01:30–02:00 | M4 | Allow-listed commands |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Configure a **Docker dev container** for Quill with the repo mounted, network off by default, and *n |

### Lecture 7 — AI-Generated Tests and Test Quality
_3-hour block · 🔧 reusable skill: `$ai-test-hardener`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Coverage ≠ quality; Mutation testing |
| 00:30–01:00 | M2 | Property-based testing |
| 01:00–01:30 | M3 | AI-assisted TDD |
| 01:30–02:00 | M4 | Test independence from the implementer |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | For Quill's sharing feature: have the agent generate a test suite; then **harden it** — add asserts, |

### Lecture 8 — AI Security and Secure "Vibe Coding"
_3-hour block · 🔧 reusable skill: `$secure-code-gate`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why AI code is insecure; SAST |
| 00:30–01:00 | M2 | Secret scanning |
| 01:00–01:30 | M3 | DAST |
| 01:30–02:00 | M4 | Dependency/supply-chain scanning |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Add a **security gate** to Quill CI: semgrep (SAST), gitleaks (secrets), trivy (deps/container); add |

### Lecture 9 — AI Code Review Gates
_3-hour block · 🔧 reusable skill: `$ai-review-gate`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | AI vs human review division of labor; Reviewer grounding |
| 00:30–01:00 | M2 | Signal vs noise |
| 01:00–01:30 | M3 | Review as a gate, not advice |
| 01:30–02:00 | M4 | Self-review prompt for the author |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Configure an **AI reviewer** on Quill PRs grounded in the rules file + PRD, with a focused checklist |

### Lecture 10 — Automated UI and App Building
_3-hour block · 🔧 reusable skill: `$ui-reconcile`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Generative UI; Reconciliation |
| 00:30–01:00 | M2 | Visual feedback loop |
| 01:00–01:30 | M3 | Component/E2E verification |
| 01:30–02:00 | M4 | Prototype vs keep |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Generate Quill's sharing UI (share dialog, permissions list, role selector) with **v0/Lovable/Bolt** |

### Lecture 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation
_3-hour block · 🔧 reusable skill: `$ai-incident-runbook`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Observability for shipped features; SLOs & alerts |
| 00:30–01:00 | M2 | Feature flags + canary + rollback |
| 01:00–01:30 | M3 | AI-assisted incident response |
| 01:30–02:00 | M4 | SWE-bench-style self-evaluation |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Instrument Quill's feature with **Sentry + OpenTelemetry**: error tracking, p95 latency, a key-flow  |

### Lecture 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent
_3-hour block · 🔧 reusable skill: `$ai-delivery-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Ship one **non-trivial Quill feature** end-to-end: a committed **PRD (as an MCP resource)**; an agen |

