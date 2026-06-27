---
name: agent-safety-harness
description: Wrap a tool-using agent in authorization, sandboxing, and monitoring, then measure the unsafe-action rate and utility cost. Use when granting an agent real permissions and you must bound its blast radius before deployment.
---

# Agent Safety Harness

A containment harness for autonomous, tool-using agents. The judgment it encodes: autonomy must be earned — every powerful capability needs an authorization gate, a sandbox boundary, and an audit trail, and you must measure how much safety costs in utility.

## When to use
- An agent is about to get real permissions (filesystem, network, money).
- Multiple agents act together and the combined risk is unclear.
- A governance reviewer requires an audit trail and an unsafe-action metric.

## Inputs
- The agent, its tool set, and a risk policy (what's allowed, what's gated).

## Workflow
1. Define authorization: which actions require approval vs run freely.
2. Sandbox the agent's execution (fs/network/credential/time scopes).
3. Add monitoring that logs every action to an audit trail.
4. Run a task suite; measure the unsafe-action rate and the utility delta vs ungated.
5. Tune gates to minimize utility loss at an acceptable unsafe-action rate.

## Outputs & evidence artifact
- `evidence/week11-agent/`: the gated agent config, unsafe-action rate, utility delta, and the audit trail.

## Acceptance checks
- [ ] Every high-risk action is authorization-gated or sandboxed.
- [ ] Unsafe-action rate and utility delta are both measured.
- [ ] A complete audit trail of agent actions is captured.

## Worked example
`Use $agent-safety-harness to gate a file-cleanup agent.` → Approval required for deletes, sandboxed to one directory, audit log of all ops, unsafe-action rate 0% with only −3% task utility vs ungated.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — framework for scoring agent safety and unsafe-action behavior.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — MCP servers whose scoped permissions model the authorization boundary.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — agent and tool_use recipes for permissioning and human-in-the-loop.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 11 — Agent Safety: Autonomy, Permissions & Multi-Agent Risk
