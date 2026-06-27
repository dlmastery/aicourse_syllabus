---
name: layer-backprop-derive
description: For any layer, produce the forward formula, the backward (dInput, dParams) formulas, the tensor shapes, and a finite-difference check before trusting the implementation. Use when hand-deriving backprop for a new layer in NumPy.
---

# Layer Backprop Derive

A harness skill that makes backprop derivation mechanical and verifiable: write the forward expression, derive the gradients with explicit shapes, then prove them numerically before any of it is reused.

## When to use
- You are implementing a layer's backward pass by hand (NumPy, no autograd).
- You need the gradient shapes pinned down to avoid broadcasting bugs.
- A layer must be trusted before it goes into a larger from-scratch network.

## Inputs
- The layer's forward expression and the shapes of its inputs and parameters.
- A small random input and seed for the numeric check.

## Workflow
1. Write the forward formula explicitly, with every tensor shape annotated.
2. Derive `dInput` (gradient w.r.t. input) using the chain rule; annotate its shape.
3. Derive `dParams` (gradient w.r.t. each parameter); annotate shapes.
4. Implement both; check shapes match the forward operands.
5. Run a finite-difference check on a small input → numeric pass/fail.

## Outputs & evidence artifact
- `evidence/week02-backprop-derivation.md` — forward formula, `dInput`/`dParams` formulas with shapes, and the finite-difference pass/fail.

## Acceptance checks
- [ ] Forward and both backward formulas are written explicitly with shapes.
- [ ] Gradient shapes match the corresponding forward operands.
- [ ] A finite-difference check is run and passes within tolerance.
- [ ] The derivation is reproducible from the seed.

## Worked example
`Use $layer-backprop-derive on a linear layer y = xW + b` → `dInput = dY Wᵀ`, `dW = xᵀ dY`, `db = sum(dY, axis=0)`; finite-difference max rel error 2e-10 ✓.

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — TDD/verification methodology; the numeric check is the test for a derivation.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified debugging/TDD skills to pair with this.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence conventions.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 2 — Backpropagation Through an MLP, By Hand (NumPy)
