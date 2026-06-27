---
name: rag-evidence-packet
description: Assembles baseline, ablations, eval dashboard, and SLA/safety logs into one reviewable bundle where every design decision links to the measurement that justified it. Use when packaging a capstone RAG system for final review.
---

# RAG Evidence Packet

The capstone deliverable that proves the system was built by measurement, not vibes: one bundle that chains baseline → ablations → eval dashboard → SLA/safety logs, with every design choice traceable to the number that justified it. The judgment it encodes is that a defensible system is one whose every decision has a receipt.

## When to use
- You are finishing the capstone document-QA / knowledge portal and need a review packet.
- A reviewer needs to verify each design choice against its supporting measurement.
- Weekly evidence artifacts exist but are scattered and need consolidation.

## Inputs
- The capstone system.
- All weekly evidence artifacts (baseline, ablation table, eval dashboard, SLA/safety logs).

## Workflow
1. Collect the weekly artifacts: `week01-baseline.md`, `week07-advanced.md`, `week06-eval/dashboard.md`, and `week09-production/sla-and-safety.md`.
2. Order them as the build narrative: baseline → ablations → eval → production.
3. For each major design decision, link to the specific measurement that justified it.
4. Flag any decision that lacks a supporting measurement and resolve or note it.
5. Assemble the packet so a reviewer can follow choice → evidence end-to-end.

## Outputs & evidence artifact
- The packet itself is the deliverable — a single reviewable bundle in which each design decision links to the measurement that justified it.

## Acceptance checks
- [ ] Baseline, ablations, eval dashboard, and SLA/safety logs are all included.
- [ ] Every major design decision links to a specific measurement.
- [ ] Any unmeasured decision is explicitly flagged.
- [ ] A reviewer can trace the build narrative without external context.

## Worked example
`Use $rag-evidence-packet to compile the capstone bundle`. Good output: a packet that reads "Chose 400-token chunks (baseline error split: 6/9 misses were retrieval) → added reranker (ablation: +0.09 nDCG) → eval dashboard recall@5 0.81, faithfulness 0.86 → production p95 1.6s, guardrails pass → DEPLOY," each clause hyperlinked to its source artifact.

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — canonical Agent Skills / SKILL.md format authority for packaging evidence-producing skills.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — example of evals bundled as reviewable, reproducible records.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for RAG, evaluation, and observability to cite per decision.

## Used in
- Subject 02 · Part B — Retrieval-Augmented Generation & Knowledge Systems · Week 10 — Capstone: A Production Document-QA / Knowledge Portal
