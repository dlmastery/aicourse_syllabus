---
name: safety-serving-audit
description: Audit a deployed model on three axes — long-context fidelity, safety with over-refusal control, and serving latency/throughput. Use when shipping a long-context, safety-tuned model and you must show it's faithful, safe, and fast without over-refusing.
---

# Safety Serving Audit

A three-axis audit harness for served models. It encodes the judgment that long-context, safety, and serving performance trade against each other — so a deployment must be measured on all three, including the over-refusal that safety tuning can cause.

## When to use
- You deployed a long-context, safety-fine-tuned model and need a release audit.
- Safety tuning may have caused over-refusal you need to quantify.
- You must report serving latency/throughput alongside quality.

## Inputs
- A served model endpoint plus probe sets for long-context, safety, and load.

## Workflow
1. Probe long-context fidelity (needle-in-haystack across context lengths).
2. Run safety probes (harmful requests) and measure refusal correctness.
3. Run an over-refusal probe (benign-but-touchy requests) and measure false refusals.
4. Load-test for p50/p95/p99 latency and throughput.
5. Assemble the three tables/curves; commit the audit.

## Outputs & evidence artifact
- `evidence/week12-audit/` — a long-context curve, a safety/over-refusal table, and a latency/throughput table.

## Acceptance checks
- [ ] Long-context fidelity is measured across multiple context lengths.
- [ ] Safety is reported with an over-refusal counter-metric.
- [ ] Latency (p50/p95/p99) and throughput are recorded.

## Worked example
`Use $safety-serving-audit on the served 128k model.` → "needle recall 99%→82% past 64k; harmful-refusal 98%, but benign over-refusal 11% (too high); p95 740ms at 30 RPS. Recommend softening the refusal prompt."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for safety/over-refusal scoring.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — prebuilt long-context and safety evals.
- [huggingface/trl](https://github.com/huggingface/trl) — safety fine-tuning reference.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` and serving recipes.

## Used in
- Subject 02 · Part A — Large Language Models: Pretraining → Post-Training · Week 12 — Long-Context, Safety Fine-Tuning, and Serving
