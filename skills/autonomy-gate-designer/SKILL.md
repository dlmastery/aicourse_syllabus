---
name: autonomy-gate-designer
description: Decide and enforce the right autonomy level and human-in-the-loop gates for a coding-agent task. Use when granting a coding agent more autonomy and you must match the gates to the task's reversibility and stakes.
---

# Autonomy Gate Designer

A design harness for coding-agent autonomy. The judgment it encodes: autonomy should scale with reversibility — low-stakes reversible tasks can run free, but irreversible actions need a gate, and every level needs a rollback path.

## When to use
- Choosing how much autonomy a coding agent gets on a task.
- An agent took an irreversible action that should have been gated.
- Defining where humans must approve in an agent workflow.

## Inputs
- The task plus its reversibility and stakes.

## Workflow
1. Assess reversibility and stakes of the task's actions.
2. Pick an autonomy level (suggest → plan-approve → auto-with-gates → full).
3. Place gates at plan, diff, and irreversible-action boundaries.
4. Define the sandbox/permission scope for the chosen level.
5. Specify the rollback path for when a gate is bypassed or fails.

## Outputs & evidence artifact
- `evidence/week05-autonomy.md`: the autonomy level, the gates (plan/diff/irreversible), the sandbox/permission scope, and the rollback path.

## Acceptance checks
- [ ] Autonomy level is justified by reversibility and stakes.
- [ ] Gates are placed at irreversible-action boundaries.
- [ ] A rollback path is defined for the chosen level.

## Worked example
`Use $autonomy-gate-designer for a dependency-upgrade agent.` → Level = auto-with-gates, gate on the PR diff and on any lockfile change, sandboxed to a branch, rollback = revert the branch; full autonomy denied (supply-chain stakes).

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI whose permission modes and approval gates model autonomy levels.
- [obra/superpowers](https://github.com/obra/superpowers) — subagent-driven-development and planning methodology with human checkpoints.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — scoped MCP servers for enforcing permission boundaries.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates
