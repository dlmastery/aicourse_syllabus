---
name: adaptation-evidence-packet
description: Assemble decision memo, data card, training runs, regression matrix, and serving SLA into one reviewable bundle. Use at the end of a fine-tuning project to prove the tuned model beats prompting and is safe to ship.
---

# Adaptation Evidence Packet

A capstone assembly harness: it gathers every weekly artifact from a fine-tuning project into one bundle where each design decision links to the measurement that justified it — including what was tried and cut. The judgment it encodes: a tuned model isn't "done" until its provenance is auditable end-to-end.

## When to use
- Closing out a fine-tuning capstone or production adaptation project.
- A reviewer or stakeholder needs to see *why* each choice was made, not just the final checkpoint.
- You need to demonstrate the tuned model provably beats the prompted baseline.

## Inputs
- The capstone checkpoint/adapters and all weekly evidence files.
- The original adaptation decision memo and success bar.
- Serving SLA targets and the regression suite.

## Workflow
1. Collect the decision memo, data card, and training-run logs.
2. Build the regression matrix: tuned vs baseline across all eval slices.
3. Attach the serving SLA result (latency, cost/1k answers) from the served artifact.
4. For each design decision, link the measurement that justified it.
5. Add a "tried and cut" section — failed experiments and why they were dropped.

## Outputs & evidence artifact
- The packet itself (decision → data card → runs → regression matrix → serving SLA), with every claim traceable to evidence.

## Acceptance checks
- [ ] Each design decision links to a specific measurement.
- [ ] The regression matrix shows tuned beats baseline on the agreed bar.
- [ ] A "tried and cut" section documents discarded approaches.

## Worked example
`Use $adaptation-evidence-packet to assemble our LoRA capstone bundle.` → A directory whose README walks decision → data card → 3 training runs → regression table (tuned +0.14 F1) → SLA (340ms p95, $0.40/1k), with two cut experiments noted.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning`, `/evaluation`, and observability recipes that supply the measurements a packet links to.
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework for producing the reproducible regression scores in the matrix.
- [huggingface/trl](https://github.com/huggingface/trl) — training library whose run logs and configs become the data-card and training-run sections.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 10 — Capstone: A Fine-Tuned Model That Provably Beats Prompting
