---
name: agent-memory-designer
description: Design an agent memory layer that helps without bloating context or leaking PII. Use when an agent needs to persist state across turns/sessions and you must choose what to store, retrieve, and forget.
---

# Agent Memory Designer

A design harness for agent memory. The judgment it encodes: memory is a liability as much as an asset — every stored item costs context, retrieval precision, and privacy, so write/retrieve/forget policies must be chosen deliberately and A/B-proven to help.

## When to use
- An agent forgets relevant context or, conversely, drowns in stale memory.
- You're adding long-term memory (Mem0/LangMem-style) and need a policy.
- Privacy/PII constraints require an explicit retention and handling note.

## Inputs
- The task and what genuinely should persist across turns/sessions.
- Privacy constraints (what must not be stored or must be redacted).

## Workflow
1. Choose memory types: short-term (scratchpad) vs long-term (vector/episodic).
2. Define the write policy — what gets stored and when.
3. Define the retrieval policy — k, weighting/recency, relevance filter.
4. Define a decay/forgetting rule to prevent unbounded growth.
5. A/B the agent with vs without memory; record the numbers and write a PII note.

## Outputs & evidence artifact
- `evidence/week05-memory.md`: memory types, write policy, retrieval policy (k, weighting), decay rule, PII-handling note, and the A/B numbers.

## Acceptance checks
- [ ] Write, retrieve, and forget policies are each specified.
- [ ] An A/B shows memory measurably helps (not just adds tokens).
- [ ] A PII/privacy note covers what is stored and how it's protected.

## Worked example
`Use $agent-memory-designer to add memory to a tutoring agent.` → Long-term episodic store, write on lesson completion, retrieve top-3 by recency-weighted similarity, decay after 90 days, PII redaction on names; A/B shows +11% task continuity.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — Agent Skills patterns including persistent state and context management.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable agents with memory (Mem0/LangMem) to compare policies against.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — RAG and retrieval recipes underpinning long-term memory retrieval.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 5 — Agent Memory: Short-Term, Long-Term, Mem0 and LangMem
