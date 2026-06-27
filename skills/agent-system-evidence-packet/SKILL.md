---
name: agent-system-evidence-packet
description: Assemble architecture diagram, pass^k eval, trace samples, cost analysis, security report, and runbook into one reviewable bundle. Use at an agent-system capstone to prove the deployed system is correct, affordable, and safe.
---

# Agent System Evidence Packet

A capstone assembly harness for a deployed multi-agent + MCP system. The judgment it encodes: a shipped agent system is only credible when its correctness, cost, and security are documented together — the packet *is* the deliverable, not an afterthought.

## When to use
- Closing an agent-system capstone or a production launch review.
- A reviewer must judge correctness, cost, and security in one place.
- You need an operational runbook attached to the evidence.

## Inputs
- The deployed system, its eval results, traces, cost data, and security findings.

## Workflow
1. Draw the architecture diagram (agents, MCP servers, data flows).
2. Attach the eval report with pass^k across runs.
3. Include representative trace samples (a success and a failure).
4. Add the cost analysis ($/task, throughput).
5. Attach the security report (red-team results) and an operational runbook.

## Outputs & evidence artifact
- The packet itself: architecture diagram + pass^k eval + trace samples + cost analysis + security report + runbook.

## Acceptance checks
- [ ] Architecture diagram, pass^k eval, and cost analysis are all present.
- [ ] Trace samples include at least one failure case.
- [ ] A security report and an operational runbook are attached.

## Worked example
`Use $agent-system-evidence-packet to close our MCP capstone.` → A bundle: 3-agent diagram, pass^5 = 0.86, two annotated traces, $0.31/task, red-team 0/25 attacks succeed, on-call runbook.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — the SKILL.md/Agent Skills format authority for documenting the system.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — reference MCP servers to cite in the architecture diagram.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework producing the pass^k report.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 12 — Capstone: Deploy a Multi-Agent System with an MCP Server
