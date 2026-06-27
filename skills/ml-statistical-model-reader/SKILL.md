---
name: ml-statistical-model-reader
description: Read a classical statistical model or generalized linear model as an engineering object by identifying the target distribution, link function, assumptions, sufficient statistics intuition, calibration behavior, and when the model is still the right baseline. Use when logistic regression, Poisson regression, survival-style risk, or other statistical models feel either too old-fashioned or too abstract.
---

# ML Statistical Model Reader

Use this skill when a statistical model should be understood as a living part of modern ML practice rather than as pre-deep-learning history.

## What This Skill Does

This skill extracts:

- the prediction target and data-generating story
- the response distribution and why it fits
- the link function and what it linearizes
- the main assumptions
- what kind of inductive bias the model imposes
- when the model is still the best baseline

## Workflow

1. Restate the task and target variable.
2. Identify the response type: continuous, binary, count, time-to-event, or categorical.
3. Name the statistical family and link function.
4. Translate the model into plain language.
5. Inspect the key assumptions and likely failure modes.
6. Decide whether the model is a credible production baseline or only a teaching artifact.

## Output Format

Use this structure:

- `Task`
- `Target Type`
- `Model Family`
- `Link Function`
- `Plain-English Story`
- `Key Assumptions`
- `What This Model Is Biased Toward`
- `Calibration / Interpretation Notes`
- `When It Is Still Strong`
- `When It Will Likely Fail`

## Quality Bar

- Do not treat classical models as obsolete by default.
- Do not explain the link function only symbolically; say what it buys us.
- Do not praise interpretability without naming what structure was sacrificed.
- Make the engineering tradeoff visible.

## Good Prompt Shapes

- Explain why logistic regression is still a strong baseline for churn risk.
- Compare Poisson regression with a tree model for incident-count forecasting.
- Read this GLM result and tell me what assumptions I am making.

## Reference

Read [references.md](references.md) only if you need extra prompts or review cues.
