---
name: gradient-check
description: Verify a hand-derived or hand-coded analytic gradient against a finite-difference numerical gradient before trusting it. Use whenever you implement backprop by hand and need a pass/fail with the worst-offending parameter named.
---

# Gradient Check

A harness skill that enforces a simple discipline: no analytic gradient is trusted until a numerical check agrees with it. It catches sign errors, transpose bugs, and broadcasting mistakes at the cheapest possible moment.

## When to use
- You derived `dLoss/dParam` by hand and wrote the backward pass yourself.
- A training run diverges or plateaus and you suspect the gradient, not the optimizer.
- Before reusing a from-scratch layer anywhere downstream.

## Inputs
- A scalar loss function `f(params)` and the analytic gradient implementation.
- A small, fixed random seed and a step size `epsilon` (e.g., 1e-5).

## Workflow
1. Pick a small input and freeze the seed.
2. Compute the analytic gradient.
3. For each parameter, compute the centered finite difference `(f(x+e) - f(x-e)) / 2e`.
4. Compute the relative error per parameter; record the maximum.
5. Pass if max relative error < tolerance (e.g., 1e-5 for f64); else report the worst-offending parameter and its index.

## Outputs & evidence artifact
- `evidence/week03-gradcheck.md` — tolerance used, max relative error, pass/fail, and the worst parameter (name + index + analytic vs numeric value).

## Acceptance checks
- [ ] Centered (not one-sided) finite differences are used.
- [ ] A tolerance is stated and justified for the dtype.
- [ ] On fail, the single worst parameter is identified, not just "it failed".
- [ ] The check is seedable and reproducible.

## Worked example
`Use $gradient-check on my softmax-cross-entropy layer` → max rel error 3e-9 over 50 params (tol 1e-5 ✓). Verdict: gradient trustworthy.

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — TDD and systematic-debugging methodology; numerical gradient checking is the math analog of a red/green test.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified TDD/debugging skills to pair with this verification habit.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and evidence conventions.

## Used in
- Subject 01 · Part A — Math & ML Foundations From Scratch · Week 3 — Derivatives, Gradients & the Seed of Backpropagation
