---
name: project-context-pack
description: Makes a repo "AI-ready" by producing a rules/conventions file, an MCP resource server for docs/schemas, and an @-mention cheat-sheet so coding agents are grounded by default. Use when agents keep hallucinating your conventions or ignoring your schemas because the context was never packaged for them.
---

# Project Context Pack

A harness skill that packages a repo's tacit knowledge — conventions, PRDs, schemas, runbooks — into artifacts an AI IDE can load automatically. It encodes the judgment that grounding is infrastructure: agents should inherit project context by default, not be re-briefed every prompt.

## When to use
- Agents in your repo invent conventions, miss schemas, or contradict the PRD because nothing grounds them.
- Onboarding a repo to an AI IDE and you want context (docs/schemas) served as MCP resources.
- The team keeps pasting the same background into prompts and needs a reusable @-mention cheat-sheet instead.

## Inputs
- A repo plus its PRDs, schemas, and runbooks.

## Workflow
1. Inventory the repo's authoritative context: PRDs, schemas, runbooks, conventions.
2. Write a rules/conventions file the IDE loads by default (style, structure, do/don't).
3. Stand up an MCP resource server that serves the docs and schemas to the agent.
4. Author an `@`-mention cheat-sheet mapping common needs to the right resource.
5. Verify an agent, given only the pack, answers a project-specific question correctly.
6. Commit the pack under the evidence directory.

## Outputs & evidence artifact
- A rules/conventions file, an MCP resource server for docs/schemas, and an `@`-mention cheat-sheet — collected under `evidence/week04-context-pack/`.

## Acceptance checks
- [ ] A rules/conventions file exists and is auto-loaded by the IDE.
- [ ] An MCP resource server serves the docs/schemas and responds to a query.
- [ ] The `@`-mention cheat-sheet maps real tasks to specific resources.
- [ ] A cold agent answers a project-specific question using only the pack.

## Worked example
Invocation: `Use $project-context-pack on this service repo.` Good output: `CONVENTIONS.md` ("snake_case DB columns, errors via Result type"), an MCP server exposing `prd://checkout` and `schema://orders`, and a cheat-sheet line "`@schema:orders` before writing any order query" — proven by an agent correctly citing the orders schema unprompted.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md / Agent Skills format and skill-creator authority
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI whose MCP resources, hooks, and context features this pack targets
- [obra/superpowers](https://github.com/obra/superpowers) — agentic-skills methodology for packaging reusable agent context
- [hesreallyhim/awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code) — curated Claude Code list incl. context and MCP setups

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources
