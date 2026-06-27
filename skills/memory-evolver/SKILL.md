---
name: memory-evolver
description: Manage a self-improving agent skill-memory (write / retrieve / compress / forget) with an explicit forgetting check that proves old competencies survive consolidation. Use when building lifelong/continual-learning agents that accumulate and prune experience.
---

# Memory Evolver

A harness skill for agentic memory: it operationalizes the four memory operations (write, retrieve, compress, forget) and — the part that's usually missing — verifies that compression/forgetting doesn't quietly destroy capabilities the agent already had.

## When to use
- An agent accumulates skills/experiences over many tasks and memory grows unbounded.
- You need to compress or forget memory but must not regress past competencies.
- You want curves showing retrieval quality and forgetting over time.

## Inputs
- A memory store and the agent's task stream.
- A retention probe set: tasks representing previously-learned competencies.

## Workflow
1. Define write: what experiences become memory entries and in what form.
2. Define retrieve: how relevant memories are recalled at task time.
3. Define compress: how entries are merged/summarized as volume grows.
4. Define forget: the eviction policy for stale/low-value entries.
5. Run the forgetting check: re-test the retention probe after compression/forgetting; plot retrieval quality and catastrophic-forgetting curves.

## Outputs & evidence artifact
- `evidence/week04-memory/` — the four operation definitions and the curves (retrieval quality + retention of old competencies over time).

## Acceptance checks
- [ ] All four operations (write/retrieve/compress/forget) are specified.
- [ ] A retention probe is run after compression/forgetting.
- [ ] Forgetting curves are plotted, not just asserted.
- [ ] The eviction/compression policy is explicit and justified.

## Worked example
`Use $memory-evolver on my coding agent's skill memory` → after compressing 10k → 2k entries, retrieval latency −60%, retention probe holds at 94% (no catastrophic forgetting). Curves saved.

## Related skills in the wild
- [ComposioHQ/composio](https://github.com/ComposioHQ/composio) — managed tool/memory layer for agents.
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — memory, storage, and retrieval abstractions.
- [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) — multi-agent framework with memory components.
- [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) — curated agents for memory-pattern reference.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 4 — Agentic Memory & Lifelong/Continual Learning
