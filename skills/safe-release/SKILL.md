---
name: safe-release
description: Release any model/prompt/agent change via shadow→canary with metric-driven auto-rollback and human-in-the-loop gates for irreversible actions. Use when shipping a change to production and a bad version must roll back automatically.
---

# Safe Release

A progressive-delivery harness for AI changes. It encodes the judgment that no model/prompt/agent change ships all at once: it earns traffic through shadow and canary stages, auto-rolls-back on metric regressions, and gates irreversible actions behind a human.

## When to use
- You are promoting a new model/prompt/agent version to production.
- A regression must trigger automatic rollback, not a 2am page.
- Some agent actions are irreversible and need a human gate.

## Inputs
- A new version, promotion/rollback metrics with thresholds, and a list of irreversible actions.

## Workflow
1. Run the new version in **shadow** (mirror traffic, no user impact); compare to baseline.
2. Promote to **canary** on a small traffic slice.
3. Define promotion and rollback metrics with thresholds.
4. Wire metric-driven **auto-rollback** if thresholds are breached.
5. Add **HITL gates** before irreversible actions.
6. Prove a rollback actually fires; commit the manifest + evidence.

## Outputs & evidence artifact
- `evidence/week10-release/auto-rollback.md` — rollout manifest, analysis template, the HITL gate, and a rollback proof (induced regression → automatic revert).

## Acceptance checks
- [ ] Shadow and canary stages precede full rollout.
- [ ] Auto-rollback is demonstrated firing on a metric breach.
- [ ] Irreversible actions sit behind a human gate.

## Worked example
`Use $safe-release for prompt v3.` → "shadowed 24h (parity ok); canary 5% — error rate +2% over threshold, auto-rolled back in 90s; refund action gated to human. Manifest + rollback log committed."

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI (hooks/gates) for wiring release automation.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP servers for deploy/observability tooling.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable production app patterns.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 10 — Safe Release: Shadow, Canary, Rollback & Human-in-the-Loop Gates
