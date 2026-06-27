---
name: physics-validity
description: Validates a learned PDE solution (PINN / neural operator) against the governing physics and a trusted numerical reference, locating the regime where it breaks. Use when a surrogate "looks right" visually but must be trusted as a solver replacement.
---

# Physics Validity

A validation harness for physics-informed ML. It encodes the judgment that a learned solution is only valid when the PDE residual is small, it tracks a real solver, it respects conservation/boundary conditions, and its failure regime is known.

## When to use
- A PINN or neural operator produces smooth-looking fields and you need to prove it actually solves the equation.
- You want to bound error against a finite-difference/finite-element reference before replacing a solver.
- You must report where the surrogate fails (sharp gradients, long horizons, out-of-range parameters) instead of claiming uniform accuracy.

## Inputs
- A learned solution (model that maps inputs/coordinates to field values).
- The governing PDE and its boundary/initial conditions.
- A trusted numerical reference solution (or a solver to generate one).

## Workflow
1. Compute the PDE residual of the learned solution on a dense grid; report its magnitude and distribution.
2. Compare against the numerical reference: report L2 / relative error fields, not just a single scalar.
3. Run a conservation / boundary check: verify conserved quantities and that boundary conditions are satisfied.
4. Sweep conditions (parameters, time horizon, resolution) to locate and characterize the failure regime.
5. Summarize: residual magnitude, error vs solver, conservation/boundary result, and the failure regime.

## Outputs & evidence artifact
- `physics-validity.md` containing: the PDE-residual magnitude, error vs the solver, the conservation/boundary check, and the identified failure regime.

## Acceptance checks
- [ ] PDE residual is computed and reported (not assumed small).
- [ ] Error is measured against an independent numerical reference.
- [ ] At least one conservation or boundary condition is explicitly checked.
- [ ] The failure regime is named with the conditions that trigger it.

## Worked example
Invocation: `Use $physics-validity to validate the heat-equation PINN before using it in the inverse-design loop.`
Good output: `physics-validity.md` — mean PDE residual 3e-4, max 2e-2 near t=0; relative L2 error vs Crank-Nicolson 1.1% interior, 7% at boundaries; energy conserved to 0.4%; failure regime: diffusivity > 5x training range and t > 2x horizon. Recommendation: usable interior, add boundary-loss weighting before trusting edges.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer/dataset pattern for sliced, reference-based evaluation.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — stress-test and regime-sweep eval design examples.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/evaluation` recipes for structuring quantitative validation reports.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and evidence-artifact convention.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates
