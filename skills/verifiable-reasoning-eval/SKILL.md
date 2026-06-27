---
name: verifiable-reasoning-eval
description: Evaluates a reasoning system where correctness is formally checkable (e.g., theorem proving), reporting verified solve-rate, search budget, and the limits of what verifiability guarantees. Use when a prover/solver's outputs can be machine-checked and you need an honest capability report.
---

# Verifiable Reasoning Eval

A harness skill that scores a formally-verifiable reasoner on solve-rate against search budget, while making explicit what a passing proof does not guarantee (e.g., faithful formalization of the problem). It encodes the judgment that "verified" answers the proof's validity, not whether the right thing was proved.

## When to use
- You're evaluating a theorem prover / autoformalizer / verifiable solver.
- You need solve-rate as a function of compute/search budget.
- Stakeholders conflate "machine-verified" with "actually correct problem."

## Inputs
- A prover/solver system.
- A formal benchmark with machine-checkable targets.

## Workflow
1. Run the prover; have the checker verify each produced proof.
2. Report verified solve-rate and the search budget used (time/nodes/samples).
3. Analyze failures (timeout vs wrong direction vs unprovable statement).
4. Audit statement faithfulness: does the formal statement match the intended problem?
5. Document what verifiability does and does not guarantee here.

## Outputs & evidence artifact
- `proving-eval.md` — verified solve-rate, search budget, failure analysis, and the faithfulness caveat.

## Acceptance checks
- [ ] Solve-rate is reported as verified (checker-confirmed), with the budget.
- [ ] Failure analysis distinguishes timeout vs wrong-direction.
- [ ] A statement-faithfulness note states the guarantee's limits.

## Worked example
`Use verifiable-reasoning-eval on the Lean prover over miniF2F` → 41% verified at 200 attempts/problem; most failures are timeouts; caveat: 3 sampled statements were mis-formalized, so raw solve-rate overstates real ability.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval/scorer framework for verifiable tasks.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — reasoning/coding evals with checkers.
- [volcengine/verl](https://github.com/volcengine/verl) — verifier-driven RL/reasoning reference.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/evaluation` recipes.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 11 — Theorem Proving, Autoformalization & the Societal-Impact Panel
