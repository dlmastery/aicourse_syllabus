---
name: k8s-deploy
description: take any container to a probed, autoscaled, zero-downtime Deployment. Use when a learner/engineer is working through the relevant lecture's hands-on build and needs a repeatable, evidence-producing procedure.
---

# K8s Deploy

A reusable **harness skill** from the *Modern AI Mastery (June 2026)* program — a small machine for repeatable thinking that turns a one-off task into a checklist that leaves behind evidence.

## Definition

- **Purpose:** take any container to a probed, autoscaled, zero-downtime Deployment.
- **Inputs:** an image + SLO (p95 latency, RPS). **Outputs:** Helm values, probe config, HPA target, a k6 zero-downtime proof.
- **Evidence artifact:** `evidence/week02-rollout/k6-report.html` + manifests.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 2 — Orchestration: Kubernetes & Serverless GPU

## How to invoke

In a Codex-style environment: `Use $k8s-deploy to ...`. Otherwise follow the Definition above as a prompt scaffold / checklist. Always end by committing the named evidence artifact.
