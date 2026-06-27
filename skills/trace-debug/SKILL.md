---
name: trace-debug
description: Makes an LLM/agent request fully traceable from a single span tree and pins the failure to one span with a one-line root cause. Use when an instrumented app produces a bad response and you need to find exactly where it went wrong.
---

# Trace Debug

A harness skill that takes a failing request id and walks its span tree until the failing span and root cause are unambiguous. It encodes the judgment that LLM/agent failures are debuggable only when every step (retrieval, tool call, model call) is a span you can inspect.

## When to use
- An agent or LLM pipeline returns a wrong/empty answer and you have tracing on.
- You need to distinguish a retrieval failure from a tool error from a model error.
- A postmortem needs a precise root cause, not "the model was bad."

## Inputs
- An instrumented app (OpenTelemetry / LLM tracing in place).
- A failing request id.

## Workflow
1. Pull the full span tree for the request id.
2. Walk spans in order; note inputs/outputs and latency per span.
3. Identify the first span whose output is wrong (not just downstream symptoms).
4. State the root cause in one line and the evidence span.
5. Propose the fix and the assertion that would have caught it.

## Outputs & evidence artifact
- `evidence/week08-obs/root-cause-from-trace.md` — the trace, the identified failing span, and a one-line root cause.

## Acceptance checks
- [ ] The failing span is identified, not just the final symptom.
- [ ] Root cause is one line and tied to a specific span's input/output.
- [ ] A preventing assertion/check is proposed.

## Worked example
`Use trace-debug on request 9f2a` → retrieval span returned 0 chunks (empty filter), model then hallucinated; root cause: metadata filter built from a null user field.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability/tracing recipes for agents.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — reference tool servers whose calls show up as spans.
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 8 — Observability: Tracing, Metrics & LLM/Agent Telemetry
