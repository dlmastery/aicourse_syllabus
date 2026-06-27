---
name: rsi-evidence-audit
description: Certify a self-improvement claim against leakage, gaming, and missing ablation, producing a pass/fail evidence report. Use when a system claims it self-improved and you must prove the gain is real, not contamination.
---

# RSI Evidence Audit

A certification harness for self-improvement claims. It encodes the judgment that "it improved itself" is the easiest claim to fake — through leakage, benchmark gaming, or a missing baseline — so each must be ruled out explicitly.

## When to use
- A system claims measurable self-improvement and you must validate it.
- A benchmark gain might be contamination or gaming rather than real learning.
- You need a certifiable evidence report before citing a result.

## Inputs
- The self-improvement claim, the benchmark/eval used, and the system's runs/logs.

## Workflow
1. Restate the improvement claim and its metric.
2. Check for **leakage** (train/eval overlap, contaminated benchmarks).
3. Check for **gaming** (overfit to the metric, format exploits).
4. Check for the **missing ablation** (is improvement vs a fair baseline?).
5. Reproduce the gain on a clean, held-out split.
6. Render a pass/fail verdict; commit the evidence report.

## Outputs & evidence artifact
- `evidence/rsi-evidence-audit.md` — leakage check, gaming check, ablation check, clean-split reproduction, and a pass/fail certification.

## Acceptance checks
- [ ] Leakage, gaming, and ablation are each checked explicitly.
- [ ] The gain is reproduced on a decontaminated split.
- [ ] A clear pass/fail verdict is recorded.

## Worked example
`Use $rsi-evidence-audit on the agent's "self-improved 9%" claim.` → "no train/eval overlap found; ablation missing — added fair baseline, gain shrinks to 5%; reproduced 5% on clean split. Verdict: pass at 5%, not 9%."

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for leakage-aware scoring.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ prebuilt evals to cross-check claims.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes for contamination-aware audits.

## Used in
- Subject 06 · Part B — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems · Week 12 — Benchmarks & Evidence: Proving a System Actually Self-Improved
