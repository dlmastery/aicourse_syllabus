---
name: k8s-deploy
description: Take a container image to a probed, autoscaled, zero-downtime Kubernetes Deployment with a load-tested proof of no dropped requests during rollout. Use when deploying a model/service to k8s under an SLO and you need evidence the rollout is safe.
---

# K8s Deploy

A harness skill that turns "it runs in a container" into a production-grade Deployment: liveness/readiness probes, autoscaling tied to an SLO, and a k6 load test proving zero dropped requests during a rolling update.

## When to use
- You have a working image and a target SLO (p95 latency, RPS) to meet.
- You need health probes and an HPA configured, not just a bare Deployment.
- You must prove a rollout causes zero downtime before shipping.

## Inputs
- A container image and the service's SLO (p95 latency, target RPS).
- Resource requests/limits and the scaling signal (CPU, GPU util, or custom metric).

## Workflow
1. Write Helm values: image, resources, replica count.
2. Configure liveness and readiness probes (and startup probe for slow model loads).
3. Set an HPA target tied to the SLO signal; pick min/max replicas.
4. Run a k6 load test at target RPS while triggering a rolling update.
5. Verify zero failed requests during the rollout; capture the k6 report.

## Outputs & evidence artifact
- `evidence/week02-rollout/k6-report.html` plus the manifests/Helm values — probe config, HPA target, and the zero-downtime proof.

## Acceptance checks
- [ ] Readiness probe gates traffic so rollouts drain cleanly.
- [ ] HPA target is justified against the stated SLO.
- [ ] k6 report shows 0 (or stated near-zero) failed requests during a rollout.
- [ ] Manifests are committed and reproducible.

## Worked example
`Use $k8s-deploy to ship my embedding service at p95<150ms, 200 RPS` → readiness probe + HPA (2–8 replicas on CPU 70%); k6 during rollout: 0 failures, p95 132ms. Verdict: zero-downtime confirmed.

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI with hooks/plugins for automating deploy workflows.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable app/deployment references for serving stacks.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence conventions.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 2 — Orchestration: Kubernetes & Serverless GPU
