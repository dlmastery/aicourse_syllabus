---
name: paper-triage
description: Rapidly assesses a frontier paper's central claim, strongest/weakest evidence, reproducibility, and the single cheapest experiment that would confirm or refute it. Use when triaging a stack of new arXiv papers to decide what is worth a deep read or a reimplementation.
---

# Paper Triage

A fast, structured read that separates signal from hype. It encodes the judgment that a paper is worth your time only when its central claim is identifiable, its evidence is inspectable, and there exists a cheap disconfirming test.

## When to use
- A new frontier paper is making rounds and you must decide in 20 minutes whether to read deeply or reimplement.
- You are choosing a research thread and need to compare several papers on evidence quality, not novelty hype.
- A claimed SOTA result smells like benchmark contamination or cherry-picking and you want to pin down the risk.

## Inputs
- A paper (PDF / arXiv link / abstract + key figures).
- Optionally: the released code/checkpoints and the benchmark(s) it claims.

## Workflow
1. State the central claim in one sentence — what the paper says is true that wasn't before.
2. Identify the single strongest piece of evidence and the single weakest / most load-bearing assumption.
3. Assign a reproducibility tier: T1 code+weights+data, T2 code only, T3 description only.
4. Assess contamination risk: could the benchmark have leaked into pretraining or tuning?
5. Name the cheapest disconfirming test — the one experiment that, if it fails, kills the claim.
6. Write the verdict: read deeply / reimplement / skip, with the reason.

## Outputs & evidence artifact
- `triage/<paper>.md` containing: the central claim, strongest and weakest evidence, reproducibility tier, contamination risk, and the cheapest disconfirming test.

## Acceptance checks
- [ ] The central claim is stated in exactly one falsifiable sentence.
- [ ] Both strongest evidence and weakest link are named.
- [ ] A reproducibility tier and a contamination-risk level are assigned.
- [ ] The cheapest disconfirming test is concrete and runnable.

## Worked example
Invocation: `Use $paper-triage to assess "Self-Rewarding Reasoners (arXiv 2606.xxxxx)".`
Good output: `triage/self-rewarding-reasoners.md` — claim: "a model can improve its own reasoning with no external reward." Strongest: +8pt on held-out MATH; weakest: judge is the same model (circularity). Tier T2 (code, no data). Contamination risk: medium — MATH variants common in pretraining. Cheapest disconfirming test: run on a 2606 fresh-eval set the model can't have seen. Verdict: reimplement the fresh-eval check before trusting.

## Related skills in the wild
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — code-agent library for automating paper-fetch + experiment scaffolding.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official summarization/classification recipes for structured triage.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable research-assistant and paper-reading app patterns.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and evidence-artifact convention.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype
