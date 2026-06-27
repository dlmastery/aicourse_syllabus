---
name: preference-method-selector
description: Chooses a preference-optimization objective (DPO, ORPO, KTO, SimPO, ...) from data shape, reference-model availability, and observed pathologies, and records the decision with a comparison matrix. Use when you must pick an alignment method up front and justify why, rather than defaulting to DPO.
---

# Preference Method Selector

A reusable decision harness that maps your situation — data shape, whether a reference model is available, and the failures you are seeing — onto the right preference objective. It encodes the judgment that the objective should be chosen from constraints, not habit.

## When to use
- You have preference data and compute but have not yet committed to an objective.
- Your data is unpaired or imbalanced (favoring KTO), or you want to drop the reference model (favoring ORPO/SimPO).
- You are already tuning and hitting pathologies (length inflation, reward drift) and need to switch objectives deliberately.

## Inputs
- The preference data: paired vs unpaired, dataset size, label balance.
- The compute budget and whether a frozen reference model is available.
- Observed failures so far (length blow-up, KL/reference drift, instability).

## Workflow
1. Characterize the data: paired or unpaired, size, balance — this gates which objectives are even applicable.
2. Note constraints: reference-model availability and compute budget (ORPO/SimPO drop the reference; DPO/KTO assume one).
3. List the observed pathologies and which objective each one argues for or against.
4. Build a decision matrix scoring at least 2 candidate methods against data fit, compute, reference need, and pathology resistance.
5. Pick the objective and write the rationale tying the choice back to the inputs.

## Outputs & evidence artifact
- A comparison across >=2 methods, a decision matrix, and the chosen objective with rationale.
- Leave the artifact at `evidence/week06-pref-compare/decision.md`.

## Acceptance checks
- [ ] `evidence/week06-pref-compare/decision.md` exists with a decision matrix over >=2 methods.
- [ ] Data shape, reference availability, and observed pathologies are each cited in the rationale.
- [ ] A single objective is chosen and explicitly justified against the alternatives.
- [ ] The matrix would point to a different method if the inputs changed (i.e. it is not post-hoc).

## Worked example
Invocation: "Use $preference-method-selector: I have 12k unpaired thumbs-up/down samples, no reference model, and DPO kept inflating length."
Good output: `evidence/week06-pref-compare/decision.md` scoring DPO, KTO, and ORPO — KTO wins (handles unpaired/binary feedback), ORPO is runner-up (no reference needed), DPO is dropped (needs pairs, showed length inflation), with the choice tied to "unpaired data + no reference + length pathology."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — trainers for every objective in the matrix (DPO, ORPO, KTO, etc.).
- [volcengine/verl](https://github.com/volcengine/verl) — RLHF/GRPO alternatives to weigh when preference methods underperform.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official fine-tuning/evaluation recipes to validate the chosen objective.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical Agent Skills / SKILL.md format authority.

## Used in
- Subject 02 · Part C — Fine-Tuning & Model Adaptation · Week 6 — Preference Optimization II: ORPO, KTO, SimPO & Choosing the Right Objective
