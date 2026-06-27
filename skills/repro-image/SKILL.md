---
name: repro-image
description: Turn any model into a reproducible, slim, non-root container with a health check, recording image size and cold-start. Use when containerizing a model for production and you need a verifiable, lean, secure image.
---

# Repro Image

A containerization harness that takes a trained model from "runs on my machine" to a reproducible, minimal, non-root image with a health endpoint. It encodes the judgment that a production image must be pinned, slim, least-privilege, and measured.

## When to use
- You are packaging a model for serving and need a defensible Dockerfile.
- An image is bloated, root-running, or not reproducible across builds.
- You need recorded size/cold-start numbers as deployment evidence.

## Inputs
- A trained model artifact and an inference function/entrypoint.
- The runtime dependency set (to be pinned).

## Workflow
1. Pin all dependencies to a lockfile (hash-locked where possible).
2. Use a multi-stage `Dockerfile`: build stage compiles, runtime stage stays slim.
3. Drop privileges: create and run as a non-root user.
4. Add a `/healthz` endpoint and a `HEALTHCHECK`.
5. Build, then measure image size, layer count, and cold-start latency.
6. Record a reproducibility hash and commit the evidence.

## Outputs & evidence artifact
- `evidence/week01-image.md` — multi-stage `Dockerfile`, pinned lockfile, `/healthz`, and recorded image size, layers, cold-start, and repro hash.

## Acceptance checks
- [ ] Image runs as non-root and passes its health check.
- [ ] Dependencies are pinned and the build is reproducible (matching hash).
- [ ] Image size and cold-start are recorded numbers, not estimates.

## Worked example
`Use $repro-image on my sentiment model.` → "multi-stage build, 280MB (was 1.4GB), runs as uid 1001, `/healthz` green, cold start 0.9s, repro hash a13f… stable across two builds."

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP reference servers; clean containerized-service patterns.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI for wiring build/health automation.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable app templates with deployment setups.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 1 — The Production Mindset & Containerizing a Model
