---
name: adaptation-decision
description: Decide prompt vs RAG vs fine-tune from evidence rather than instinct, before spending GPU hours. Use when a prompted baseline is underperforming and you must justify whether to add retrieval, do SFT, or run DPO.
---

# Adaptation Decision

A decision harness that forces you to diagnose *why* a prompted baseline fails before committing to an expensive adaptation path. The judgment it encodes: the failure class dictates the method — knowledge gaps want RAG, behavior/format gaps want SFT, preference/quality gaps want DPO — and you may not skip the baseline.

## When to use
- A prompted model "almost works" and someone wants to jump straight to fine-tuning.
- You need to justify a GPU/data budget to a reviewer before training.
- You have failure traces but no labeled diagnosis of what kind of failure they are.

## Inputs
- The task definition and a frozen eval set.
- A hardened prompted baseline (best prompt you can write, with retrieval off).
- A failure analysis: a sample of wrong outputs you can read.

## Workflow
1. Prompt hard — exhaust prompting (few-shot, decomposition, tools) and record the baseline score.
2. Measure on the frozen eval; capture the gap to the success bar.
3. Classify the dominant failure: knowledge gap → RAG; behavior/format gap → SFT; preference/quality gap → DPO/RLAIF.
4. Estimate cost (data labeling, GPU-hours, serving) for each candidate path.
5. Recommend one path with a falsifiable success bar ("beats baseline by X on metric M").

## Outputs & evidence artifact
- `evidence/week01-decision.md`: baseline score, failure taxonomy, cost comparison table, and the recommended path with its falsifiable success bar.

## Acceptance checks
- [ ] A prompted baseline score exists and is reproducible.
- [ ] The dominant failure class is named and tied to a method.
- [ ] The recommendation states a quantitative bar that would prove it wrong.

## Worked example
`Use $adaptation-decision to choose a path for our support-email classifier.` → A memo showing the prompted baseline at 0.71 F1, 60% of errors being unseen product names (knowledge gap), a cost table, and "Recommend RAG over product catalog; ship only if F1 ≥ 0.85."

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/finetuning` and `/evaluation` recipes that frame the prompt-vs-tune decision.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable RAG and fine-tuning apps to baseline each path against.
- [huggingface/trl](https://github.com/huggingface/trl) — SFT/DPO trainers you would reach for once the decision says "fine-tune."

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 1 — The Adaptation Decision: Prompt vs RAG vs Fine-Tune (and a Baseline You Must Beat)
