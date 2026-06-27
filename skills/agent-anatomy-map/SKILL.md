---
name: agent-anatomy-map
description: Force a one-screen agent design that names each organ and the stopping rule before any code is written. Use when starting any agent build and you must decide whether a task even needs an agent or just a workflow.
---

# Agent Anatomy Map

A pre-build design harness that makes you name the five organs of an agent and its stopping rule on a single screen. The judgment it encodes: most "agent" tasks are really fixed workflows, and the autonomy verdict should be made deliberately, before the loop is coded.

## When to use
- Kicking off any agent project, before writing the loop.
- Deciding workflow vs agent for a task with unclear autonomy needs.
- Reviewing someone's agent that loops forever or has no clear "done."

## Inputs
- A task description (what the agent should accomplish).
- The available tools and the stakes/reversibility of actions.

## Workflow
1. Describe the task in one sentence and list the tools it can call.
2. Fill the five organs: controller, tools, memory, optional planner, optional critic.
3. Define the action space (what the agent is allowed to do).
4. Define "done" — the explicit stop condition.
5. Name the failure that ends the loop, then render the autonomy verdict: workflow vs agent.

## Outputs & evidence artifact
- `evidence/week01-anatomy.md`: the five organs filled in, the action space, the stop condition, and the workflow-vs-agent verdict.

## Acceptance checks
- [ ] All five organs are named (planner/critic may be "none, because…").
- [ ] An explicit stop condition and a loop-ending failure are written down.
- [ ] The autonomy verdict (workflow vs agent) is justified in one line.

## Worked example
`Use $agent-anatomy-map to design an invoice-reconciliation agent.` → A one-pager: controller=ReAct, tools=[ledger API, search], memory=run-scoped, planner=none, critic=amount-match check, stop="all invoices matched or escalated", verdict=agent (variable steps).

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — canonical Agent Skills repo and SKILL.md spec; the format authority for agent design artifacts.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `agents` and `tool_use` recipes showing the controller/tools/memory anatomy.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — reference MCP servers for the "tools" organ.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 1 — Agent Anatomy and the Agent Loop
