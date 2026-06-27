---
name: tool-schema-designer
description: Turns a backend capability into a safe, model-friendly tool contract — typed schema, a model-facing description, and must-fail inputs with their error strings. Use when exposing a function as an agent/LLM tool and you want it hard to misuse.
---

# Tool Schema Designer

A harness skill that designs a tool's contract for both the model and the runtime: constrained types, a clear description the model can act on, and deliberate failure cases. It encodes the judgment that a good tool is defined as much by what it refuses as by what it does.

## When to use
- You are adding a function-calling / MCP tool for an agent.
- A model keeps calling a tool with bad arguments and you need guardrails.
- You want tool contracts that are reviewable and testable, not ad hoc.

## Inputs
- A desired capability.
- The backend function signature it wraps.

## Workflow
1. Name the tool for the model's mental model (verb + object).
2. Type-constrain inputs (enums, ranges, units, formats) in a Pydantic/JSON schema.
3. Write a one-paragraph model-facing description (when to use, when not to).
4. Enumerate three "must-fail" inputs and the exact error string each returns.
5. Add unit tests asserting the failures and a happy path.

## Outputs & evidence artifact
- `evidence/week02-tools.md` — the schema, the model-facing description, and the must-fail table.

## Acceptance checks
- [ ] Inputs are constrained (enums/ranges/units), not free-form strings.
- [ ] A model-facing description states when to use and when not to.
- [ ] Three must-fail inputs are tested with their error strings.

## Worked example
`Use tool-schema-designer for a "refund_order" capability` → Pydantic schema with `amount_cents: int > 0` and `reason: Enum`, description forbidding partial refunds over limit, must-fail table for negative amount / unknown order / over-limit.

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — canonical MCP tool/server implementations to model contracts on.
- [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry) — official MCP server registry.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — tool-definition reference (MCP/Hub interop).
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `tool_use` recipes.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 2 — Function Calling, Tool Schemas, and Structured Outputs
