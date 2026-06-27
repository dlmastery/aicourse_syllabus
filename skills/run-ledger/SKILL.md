---
name: run-ledger
description: Ensure every training run is reproducible and registry-promotable — logged config + metrics + artifact, a registry entry with data/code lineage, and a promotion command. Use when training runs must be tracked, compared, and promoted to a model registry.
---

# Run Ledger

An experiment-tracking harness. It encodes the judgment that a training run that isn't logged with full lineage didn't really happen — you can't reproduce, compare, or promote it.

## When to use
- You are running experiments and need them reproducible and comparable.
- A model must be promotable to a registry with data/code lineage.
- A sweep needs a single summary a reviewer can read.

## Inputs
- A training script and a tracker/registry target (e.g., MLflow/W&B-style).

## Workflow
1. Log the full config (hyperparameters, data version, code commit).
2. Log metrics and the output artifact for each run.
3. Record data and code lineage (which dataset hash, which commit).
4. Create a registry entry tied to that lineage.
5. Provide a one-command promotion path (staging → production).
6. Summarize the sweep; commit the evidence.

## Outputs & evidence artifact
- `evidence/week04-runs/sweep-summary.md` plus a registry entry (screenshot/URL) — logged config+metrics+artifact, lineage, and a promotion command.

## Acceptance checks
- [ ] Each run logs config, metrics, artifact, and code/data lineage.
- [ ] A registry entry exists and is reproducible from the lineage.
- [ ] A promotion command is documented and works.

## Worked example
`Use $run-ledger on my LR sweep.` → "12 runs logged with config+data-hash+commit; best (val 0.91) registered as model v7 with lineage; `promote v7 --to prod` documented and tested."

## Related skills in the wild
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — official MCP servers (Git/Filesystem) for lineage tooling.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI for automating run logging/promotion.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable MLOps/app templates.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format authority.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 4 — Experiment Tracking, Model Registry & Reproducible Training
