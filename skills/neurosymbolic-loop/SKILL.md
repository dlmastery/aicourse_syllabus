---
name: neurosymbolic-loop
description: Wraps any reasoning task in a generate → execute → verify → repair loop so a symbolic checker catches and fixes what the neural model gets wrong. Use when a model proposes answers that a tool (code, solver, type checker) can objectively validate and you want measured gains over pure-neural.
---

# Neurosymbolic Loop

A harness skill that pairs a neural generator with a symbolic executor in a tight loop: the model proposes, a deterministic checker verifies, and failures are repaired and retried. It encodes the judgment that whenever an answer is machine-checkable, the hybrid should beat pure-neural — and you must show by how much.

## When to use
- A task's outputs can be objectively executed/verified (code, math, logic, SQL, constraints).
- A pure-neural model is close but makes correctable errors.
- You want a verification pass-rate and repair count, not just final accuracy.
- You need a clean comparison of hybrid vs pure-neural on the same task.

## Inputs
- A task with checkable outputs.
- A symbolic executor/verifier (interpreter, solver, type/unit checker).

## Workflow
1. Generate a candidate answer with the neural model.
2. Execute the candidate through the symbolic verifier.
3. If it passes, accept; if it fails, capture the error signal.
4. Repair: feed the error back to the model for a corrected candidate.
5. Repeat verify → repair up to a bounded retry limit; count repairs.
6. Record hybrid accuracy, verification pass-rate, and repair count.
7. Compare against a pure-neural baseline and write the report.

## Outputs & evidence artifact
- `neurosymbolic-eval.md` — the hybrid's accuracy, the verification pass-rate, the repair count, and the comparison to pure-neural.

## Acceptance checks
- [ ] A symbolic verifier (not the model) decides pass/fail.
- [ ] Verification pass-rate and total repair count are reported.
- [ ] Hybrid accuracy is compared head-to-head with pure-neural on identical tasks.
- [ ] `neurosymbolic-eval.md` is committed with the comparison.

## Worked example
`Use $neurosymbolic-loop to solve word problems by generating Python and verifying via execution.` Good output: pure-neural 71% vs hybrid 89%, first-pass verification 64% with mean 1.3 repairs/problem (cap 3), and a note that most repairs fixed off-by-one unit conversions.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals (incl. code/math) for scoring the verify step.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — code-agent library; its execute-and-retry pattern mirrors the loop.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official tool_use and /evaluation recipes for execute-then-verify flows.

## Used in
- Subject 05 · Part D — Emerging Topics & AI for Science · Week 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning
