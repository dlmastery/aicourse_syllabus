---
name: mcp-server-scaffold
description: Stand up a correct, documented Model Context Protocol server for any backend — classifying each capability as tool/resource/prompt, declaring capabilities, testing from a second host, and writing a trust-boundary note. Use when exposing a backend's functions and data to agents over MCP.
---

# MCP Server Scaffold

A harness skill that takes a backend (some functions and data) to a working MCP server in under an hour, with the parts people skip: a capability manifest, a client-config README, and an explicit note on what the server can read and do.

## When to use
- You need to expose a backend's functions/data to Claude or another MCP client.
- You want the capability classification (tool vs resource vs prompt) done correctly.
- You need a documented trust boundary before others connect to it.

## Inputs
- A backend: the functions it offers and the data it holds.
- The intended client(s) and the scopes the server should (and should not) have.

## Workflow
1. Classify each capability: tool (action), resource (readable data), or prompt (template).
2. Implement each capability against the backend.
3. Declare the server's capabilities in the manifest.
4. Test from a second host/client to confirm it works outside the dev process.
5. Document scopes and write the 3-line trust-boundary note (what it can read / what it can do / what it must never).

## Outputs & evidence artifact
- `evidence/week03-mcp/` — the server (tools/resources/prompts), the capability manifest, a README with the client config snippet, and the trust-boundary note.

## Acceptance checks
- [ ] Each capability is correctly classified (tool/resource/prompt).
- [ ] The server is verified from a second host, not only locally inline.
- [ ] The README includes a working client config snippet.
- [ ] A trust-boundary note states read/do scopes explicitly.

## Worked example
`Use $mcp-server-scaffold to expose my tickets DB` → tools: create/close ticket; resources: ticket records; prompt: triage template; manifest + README; trust note: "reads tickets table, can create/close, cannot delete or read users."

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official reference servers (Fetch, Filesystem, Git); the canonical pattern.
- [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry) — official MCP server registry for publishing/discovery.
- [anthropics/skills](https://github.com/anthropics/skills) — `example-skills/mcp-builder` and the SKILL.md format authority.
- [appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers) — large curated list of MCP servers for reference designs.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 3 — MCP: Build a Model Context Protocol Server (original module)
