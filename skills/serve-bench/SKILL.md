---
name: serve-bench
description: benchmark any serving stack for latency/throughput/cost and recommend a topology. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Serve Bench

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** benchmark any serving stack for latency/throughput/cost and recommend a topology.
- **Inputs:** an endpoint + a load profile. **Outputs:** p50/p95/p99, tokens/sec (LLM), $/1k requests, a recommendation.
- **Evidence artifact:** `evidence/week05-serving/bench-table.md`.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 5 — Model Serving I: FastAPI, vLLM & Triton

## How to invoke

In a Codex-style environment: `Use $serve-bench to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
