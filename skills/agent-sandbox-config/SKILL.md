---
name: agent-sandbox-config
description: Make it safe for a coding agent to execute code and shell commands by scoping a sandbox and an allow-list. Use when an agent will run commands in a repo and you must prevent it from escaping its intended blast radius.
---

# Agent Sandbox Config

A configuration harness for letting agents *execute* safely. The judgment it encodes: code execution is the highest-risk agent capability, so default-deny with a narrow allow-list and an explicit approval path beats trying to enumerate everything dangerous.

## When to use
- A coding/terminal agent needs to run builds, tests, or scripts.
- You're handing an agent a repo and shell access for the first time.
- You need to document the approval path for commands outside the allow-list.

## Inputs
- The repo and the commands the agent legitimately needs to run.

## Workflow
1. Inventory the commands the task actually requires.
2. Write a container/sandbox spec scoping filesystem, network, credentials, and time.
3. Build a command allow-list (default-deny everything else).
4. Define the approval path for commands not on the allow-list.
5. Test escape attempts and confirm they're blocked.

## Outputs & evidence artifact
- `evidence/week06-sandbox/`: the container/sandbox spec (fs/network/cred/time scopes), the command allow-list, and the approval path.

## Acceptance checks
- [ ] The sandbox scopes filesystem, network, credentials, and time.
- [ ] A default-deny allow-list governs command execution.
- [ ] An approval path exists for out-of-list commands and is tested.

## Worked example
`Use $agent-sandbox-config to let an agent run our test suite.` → Container with no network, repo-only FS, no host creds, allow-list = [pytest, ruff, git diff], everything else routes to human approval; escape attempts blocked.

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Filesystem/Git MCP servers showing scoped, permissioned tool access.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — the agentic CLI with built-in sandboxing, permissions, and command gating.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent library with sandboxed code execution as a reference.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 6 — The Modern AI Terminal and Sandboxing
