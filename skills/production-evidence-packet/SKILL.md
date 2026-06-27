---
name: production-evidence-packet
description: Assembles charter, RAG eval, agent traces, eval scorecard, safety case, ops dashboard, and incident log into one auditable bundle plus a final report. Use when shipping an agentic system to monitored production and you need a single reviewable deliverable that proves it works and is safe.
---

# Production Evidence Packet

A harness skill that collects every artifact a production agentic system has produced into one auditable packet. It encodes the judgment that "shipped" means assembled, cross-referenced evidence — the packet *is* the deliverable, not a side document.

## When to use
- A capstone or real agentic system is going to monitored production and needs a single sign-off bundle.
- A reviewer or stakeholder must judge readiness from one place rather than chasing scattered notebooks and dashboards.
- You have already produced a charter, evals, traces, and ops monitoring and now need to bind them into a defensible whole.

## Inputs
- Project charter, RAG/system eval results, agent execution traces, eval scorecard.
- Safety case, ops/monitoring dashboard, and incident log.

## Workflow
1. Collect each upstream artifact (charter, RAG eval, agent traces, eval scorecard, safety case, ops dashboard, incident log).
2. Verify each is current and points at the deployed version, not a stale branch.
3. Cross-link artifacts so a reviewer can trace a claim to its evidence.
4. Write the final report: what was built, what the evals show, known risks, and the production status.
5. Assemble the packet and commit it as the deliverable.

## Outputs & evidence artifact
- The assembled packet + final report — this *is* the deliverable. Commit it as the capstone production evidence packet.

## Acceptance checks
- [ ] All seven inputs (charter, RAG eval, traces, scorecard, safety case, ops dashboard, incident log) are present.
- [ ] Every artifact references the deployed version.
- [ ] The final report states a clear production status and names known risks.
- [ ] A reviewer can trace each claim in the report to a linked artifact.

## Worked example
Invocation: `Use $production-evidence-packet to assemble the Milestone 6 bundle.` Good output: a directory whose index lists each artifact with a one-line claim ("RAG eval: 0.91 faithfulness on 200 held-out queries → see eval/rag.md") and a final report ending in "Status: in monitored production; top risk = retrieval drift, mitigation = weekly re-index."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for evaluation and observability that feed the packet
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI for the production workflows (hooks, traces) the packet documents
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework that produces the scorecard evidence

## Used in
- Subject 06 · Part C — Capstone: Build & Ship an Agentic AI System · Milestone 6 — Monitored Production, Final Report & Showcase
