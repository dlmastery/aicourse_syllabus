---
name: distributed-profiler
description: profile a distributed run's throughput, MFU, memory, and communication overhead; recommend the parallelism strategy. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# Distributed Profiler

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** profile a distributed run's throughput, MFU, memory, and communication overhead; recommend the parallelism strategy.
- **Inputs:** a training job + GPU count. **Outputs:** scaling table, MFU, bottleneck diagnosis. **Evidence artifact:** `evidence/week05-scaling-eff.md`.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 5 — Distributed Pretraining: Data/Tensor/Pipeline Parallel, FSDP & ZeRO

## How to invoke

In a Codex-style environment: `Use $distributed-profiler to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
