---
name: ml-graphical-model-reader
description: Read a graphical or sequential probabilistic model by identifying random variables, conditional-independence assumptions, factorization structure, uncertainty flow, and what inference question the model actually answers. Use when Bayesian networks, hidden Markov models, factor graphs, or causal sketches appear and you need them translated into operational reasoning.
---

# ML Graphical Model Reader

Use this skill when a probabilistic graph looks elegant but the meaning of its arrows, hidden states, or factors is still fuzzy.

## What This Skill Does

This skill extracts:

- the variables and their roles
- the factorization implied by the graph
- the key conditional-independence assumptions
- the main inference question
- what evidence updates what belief
- where the model is likely too simplistic

## Workflow

1. Name the observed and hidden variables.
2. Restate the graph or chain as a factorization.
3. Explain the conditional-independence claims in plain language.
4. State the inference or prediction question.
5. Explain how evidence moves belief through the structure.
6. Name one realistic failure or mismatch.

## Output Format

- `Task / Scenario`
- `Variables`
- `Factorization`
- `Independence Assumptions`
- `Main Inference Question`
- `How Evidence Flows`
- `Why This Structure Helps`
- `Where It Is Too Simple`

## Quality Bar

- Do not only redraw the graph in words.
- Explain what the arrows or factors buy us.
- Keep the distinction between modeling structure and proving causality explicit.
- Prefer one clear inference question over many vague ones.

## Good Prompt Shapes

- Explain an HMM for user-intent tracking across support turns.
- Read this Bayesian network for fraud evidence and tell me what it assumes.
- Translate a factor graph into plain English and one inference question.

## Reference

Read [references.md](references.md) only if you need extra prompting patterns.
