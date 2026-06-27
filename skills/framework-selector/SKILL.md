---
name: framework-selector
description: Pick an agent framework from requirements, not hype — naming the one feature that decides it and what you give up. Use when choosing among LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, or Google ADK.
---

# Framework Selector

A decision harness for agent frameworks. It encodes the judgment that framework choice should follow from a few hard requirements (durability, control granularity, single vs multi-agent, typing, deploy target) — and that naming the deciding feature and the tradeoff matters more than a feature checklist.

## When to use
- You are starting an agent project and must choose a framework defensibly.
- A team is arguing frameworks on vibes and you want a requirements-driven memo.
- You need to document why you picked one and what you sacrificed.

## Inputs
- Requirements: need for durability/resume, control granularity, single vs multi-agent, typing, deploy target.

## Workflow
1. Rank the requirements by how binding each is for this project.
2. Score the candidate frameworks against the top requirements.
3. Identify the single feature that decides the choice (the binding constraint).
4. Name what you give up by choosing it (the tradeoff).
5. Commit `evidence/week06-framework-memo.md` with the recommendation, deciding feature, and tradeoff.

## Outputs & evidence artifact
- `evidence/week06-framework-memo.md`: a recommended framework, the one feature that decided it, and what you'd give up.

## Acceptance checks
- [ ] Requirements are ranked, not just listed.
- [ ] Exactly one deciding feature is named.
- [ ] The tradeoff (what you give up) is stated explicitly.

## Worked example
`Use $framework-selector for a durable multi-step support agent`. Good output: recommend LangGraph; deciding feature = durable resumable state; tradeoff = heavier graph boilerplate vs a lighter SDK.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — Claude Agent Skills + Agent SDK context for the Claude option.
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — role-based multi-agent framework, one of the candidates.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent library and tool-design reference point.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — MCP reference servers shaping cross-framework tool portability.
- [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) — curated agent frameworks to compare against.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 6 — Agent Frameworks: LangGraph, OpenAI/Claude Agent SDKs, CrewAI, AutoGen, Pydantic AI, Google ADK
