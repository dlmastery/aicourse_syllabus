---
name: ml-generalization-theory-translator
description: Translate learning-theory concepts such as empirical risk, hypothesis class, capacity, VC dimension, uniform convergence, and train-test gap into operational ML judgment with formulas, assumptions, and realistic caveats. Use when theory language feels disconnected from actual model choice or evaluation practice.
---

# ML Generalization Theory Translator

Use this skill when theory should sharpen engineering judgment instead of turning into theorem-recitation.

## What This Skill Does

This skill translates:

- formal concept names
- symbol-heavy statements
- the intuition behind the statement
- what assumptions are doing the real work
- what the concept does and does not justify in practice

## Workflow

1. Restate the exact concept or bound.
2. Define the objects: data distribution, hypothesis class, loss, sample size, confidence.
3. Explain the result in plain language.
4. Say what assumptions make the claim possible.
5. Connect it to overfitting, capacity, or evaluation practice.
6. Name one common misuse of the theory.

## Output Format

- `Concept / Statement`
- `Objects Involved`
- `Plain-English Meaning`
- `Why The Assumptions Matter`
- `Practical Engineering Lesson`
- `What It Does Not Prove`
- `Common Misuse`

## Quality Bar

- Do not hide behind notation.
- Do not pretend VC-style theory alone explains deep learning.
- Do not dismiss the theory either; say what judgment it supports.
- Use one concrete example when possible.

## Good Prompt Shapes

- Explain VC dimension to an ML engineer who keeps overfitting tabular data.
- Translate a uniform-convergence statement into practical evaluation language.
- What does empirical risk minimization actually assume.

## Reference

Read [references.md](references.md) only if you need example prompts or a reminder list.
