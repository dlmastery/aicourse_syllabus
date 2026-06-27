---
name: autodiff-tracer
description: For any small expression, print the computation graph and verify each local gradient against finite differences. Use when building scalar autodiff from scratch and you must prove backprop is numerically correct, not just plausible.
---

# Autodiff Tracer

A verification harness for hand-built autodiff. The judgment it encodes: a backward pass that runs is not a backward pass that's correct — every local gradient must be checked against a finite-difference perturbation before you trust the engine.

## When to use
- Building a scalar autodiff engine (micrograd-style) from scratch.
- A network won't learn and you suspect a gradient bug.
- Teaching/learning how backprop composes local derivatives.

## Inputs
- An expression built from your `Value` (or equivalent) ops.

## Workflow
1. Build the expression and call `.backward()`.
2. Produce the topo-ordered node list.
3. Record each node's local derivative.
4. Numerically perturb each leaf (finite difference) and compare to the analytic grad.
5. Mark pass/fail per leaf; investigate any mismatch.

## Outputs & evidence artifact
- `evidence/week01-autodiff-check.md`: the topo-ordered node list, each node's local derivative, and a finite-difference pass/fail per leaf.

## Acceptance checks
- [ ] The computation graph is printed in topological order.
- [ ] Each leaf has a finite-difference check with a pass/fail.
- [ ] Any mismatch is traced to a specific op.

## Worked example
`Use $autodiff-tracer on z = (a*b + a).tanh().` → Topo list of 4 nodes, local derivatives shown, finite-difference check PASS for a and b within 1e-6.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for building and validating small ML components.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal, readable code style to model a from-scratch engine on.
- [huggingface/trl](https://github.com/huggingface/trl) — production autograd-based training to compare correctness against.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 1 — The Neuron, the Forward Pass, and Scalar Autodiff From Scratch
