---
name: ml-inductive-bias-review
description: Review what a model family is predisposed to learn by identifying its symmetry assumptions, locality or smoothness preferences, regularization choices, data requirements, and likely failure modes. Use when choosing between linear models, trees, CNNs, transformers, retrieval systems, or other model families and you need to make the hidden bias explicit.
---

# ML Inductive Bias Review

Use this skill when model choice feels like taste or trend and you need to surface what each family is actually assuming about the world.

## What This Skill Does

This skill reviews:

- what patterns a model family learns easily
- what patterns it struggles to express
- which invariances or symmetries it encodes
- how regularization changes effective capacity
- what data regime it expects
- which failure modes naturally follow

## Workflow

1. State the task and what structure seems important.
2. Name the candidate model families.
3. For each family, identify the baked-in preferences.
4. Check whether those preferences match the task.
5. Separate useful bias from harmful rigidity.
6. Recommend the simplest family whose bias matches the case.

## Output Format

- `Task`
- `Candidate Model Families`
- `Useful Structure in the Task`
- `Bias Carried by Each Family`
- `Regularization / Capacity Notes`
- `Likely Failure Modes`
- `Best Match`
- `What Evidence Would Change My Mind`

## Quality Bar

- Do not describe one family as universally superior.
- Name the bias in operational language, not only with theory jargon.
- Keep regularization tied to the task, not as a generic trick.
- Make it possible for a reader to disagree using evidence.

## Good Prompt Shapes

- Compare trees, CNNs, and transformers for product-image moderation.
- What inductive bias does convolution add compared with a dense net.
- Review whether retrieval plus ranking has a better bias than a giant classifier for support search.

## Reference

Read [references.md](references.md) only if you need the comparison prompts.
