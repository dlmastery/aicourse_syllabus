---
name: shape-checker
description: Annotates every line of model code with the shape of its result and predicts one failure point. Use when reading or writing tensor/matrix code and you want to catch broadcasting and dimension bugs before running anything.
---

# Shape Checker

A harness skill that forces you to write the shape of every intermediate tensor as a comment, turning silent broadcasting bugs into things you can see. It encodes the judgment that most numerical-code bugs are shape bugs you can predict on paper.

## When to use
- You are writing or reviewing matrix/tensor code and want to reason about dimensions first.
- A matmul or broadcast is misbehaving and you need to localize it.
- You are studying a model layer and want to internalize its dimensions.

## Inputs
- A code snippet (NumPy / PyTorch / JAX) with tensor operations.

## Workflow
1. For each line that produces a tensor, append a `# (n, d)` style shape comment.
2. Trace shapes forward; flag any line where a broadcast silently changes rank.
3. Name the single most likely failure (e.g., `(n,) vs (n,1)` mismatch) before running.
4. Run the snippet and compare actual shapes to your predictions; revise the comments.

## Outputs & evidence artifact
- A shape-annotated version of `linalg.py` with one explicitly predicted failure and its resolution.

## Acceptance checks
- [ ] Every tensor-producing line has a shape comment.
- [ ] At least one failure was predicted before execution.
- [ ] Predicted vs actual shapes are reconciled in the annotations.

## Worked example
`Use shape-checker on attention.py` → each line annotated (`scores # (b, h, t, t)`), prediction "softmax over wrong axis," confirmed and fixed.

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — systematic-debugging methodology this skill operationalizes for tensors.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example skills.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified debugging/code skills.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — reference implementations to shape-check against.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 2 — Linear Algebra as Shapes You Can Reason About
