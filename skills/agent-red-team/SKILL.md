---
name: agent-red-team
description: Systematically attack a tool-using agent against the OWASP LLM Top 10 and prove the defenses work before shipping. Use when an agent ingests untrusted content or calls powerful tools and you need a before/after security record.
---

# Agent Red Team

An offensive-then-defensive harness for agent security. The judgment it encodes: an agent that reads untrusted content and calls tools is an attack surface, so you must enumerate attacks against a known taxonomy, add defenses, and prove the attacks now fail with a regression test.

## When to use
- An agent ingests web pages, emails, or user files it doesn't control.
- The agent can call high-impact tools (shell, payments, data writes).
- A security reviewer needs evidence the agent resists prompt injection.

## Inputs
- The agent, its tools, and the content it ingests.

## Workflow
1. Enumerate attacks mapped to the OWASP LLM Top 10 (injection, tool abuse, data exfil…).
2. Run the attack set against the agent; record the success rate (before).
3. Add defense layers: input isolation, tool allow-lists, output filtering, HITL gates.
4. Re-run the attacks; record the success rate (after).
5. Freeze the attack set as a regression test in CI.

## Outputs & evidence artifact
- `evidence/week11-redteam/`: the attack set mapped to OWASP LLM Top 10, a before/after success table, the defense layers added, and the regression test.

## Acceptance checks
- [ ] Attacks are mapped to specific OWASP LLM Top 10 categories.
- [ ] A before/after table shows defenses reduced attack success.
- [ ] The attack set runs as a regression test in CI.

## Worked example
`Use $agent-red-team to harden our email-triage agent.` → 30 injection/tool-abuse attacks, 9/30 succeed before, 0/30 after adding content isolation + a send allow-list, frozen as a CI regression.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework with red-team/safety scorers for agents.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built red-team and safety evals to seed the attack set.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — tool_use and safety recipes for injection-resistant tool design.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 11 — Agent Security: Prompt Injection, Tool Abuse, and the OWASP LLM Top 10
