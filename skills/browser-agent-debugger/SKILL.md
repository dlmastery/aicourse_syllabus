---
name: browser-agent-debugger
description: Diagnose why a GUI/browser agent step failed — stale view, wrong grounding, missing wait, bad verification — and decide if an API/MCP tool should replace it. Use when a computer-use agent fails intermittently on UI steps.
---

# Browser Agent Debugger

A diagnostic harness for computer-use and browser agents. The judgment it encodes: most GUI-agent failures are not "the model is dumb" but timing, grounding, or verification bugs — and the best fix is often to replace the brittle UI step with an API/MCP tool.

## When to use
- A browser/computer-use agent fails on UI steps intermittently.
- An action targets the wrong element or fires before the page is ready.
- You're deciding whether a UI step should become an API call.

## Inputs
- A failing run trace and the screenshots from that run.

## Workflow
1. Replay the trace and locate the failing step.
2. Classify the failure: stale view, wrong grounding, missing wait, or bad verification.
3. Apply the matching fix (re-snapshot, better selector, explicit wait, post-action check).
4. Decide whether the step should be replaced by an API/MCP tool.
5. Re-run and confirm the step now passes.

## Outputs & evidence artifact
- `evidence/week08-browser-debug.md`: the failure category, the fix, and whether the step should be replaced by an API/MCP tool.

## Acceptance checks
- [ ] The failure is assigned to a specific category.
- [ ] A concrete fix is applied and re-verified.
- [ ] An API/MCP replacement decision is recorded.

## Worked example
`Use $browser-agent-debugger on a failing checkout step.` → Category = missing wait (clicked before the modal rendered), fix = explicit wait-for-selector, decision = replace with the store's order API/MCP tool.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — `example-skills` including webapp-testing for browser interaction patterns.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — MCP servers that can replace brittle UI steps with structured tools.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — computer-use recipes for grounding, waits, and verification.

## Used in
- Subject 03 · Part A — AI Agent Engineering (MCP, A2A, Multi-Agent, AgentOps) · Week 8 — Computer-Use and Browser Agents
