---
name: conv-shape-planner
description: Given an input size and a stack of conv/pool layers, compute every intermediate tensor shape and param count before writing code. Use when designing a CNN and you want a shape table and predicted bottleneck up front.
---

# Conv Shape Planner

A pencil-first harness for CNN design. It encodes the judgment that most "why doesn't this layer fit?" bugs are avoidable by hand-computing every spatial shape and parameter count before touching a framework.

## When to use
- You are building a CNN and want to catch shape mismatches before runtime.
- You need a parameter budget and a predicted bottleneck layer.
- You are teaching/learning conv arithmetic and want the table to verify the code.

## Inputs
- Input shape `(C, H, W)`.
- Layer specs: kernel size, stride, padding, channels, pool ops, in order.

## Workflow
1. Walk the stack top to bottom, applying the conv/pool output-size formula at each layer.
2. Record per-layer output `(C, H, W)` and the running receptive field.
3. Compute parameter count per layer and the total.
4. Flag the predicted bottleneck (largest activation or param blob).
5. Commit `evidence/week05-shape-table.md`; later, assert the built model matches it.

## Outputs & evidence artifact
- `evidence/week05-shape-table.md`: a per-layer shape table, total parameter count, and one predicted bottleneck.

## Acceptance checks
- [ ] Every layer has its output `(C, H, W)` computed by formula.
- [ ] Total parameter count is shown with the per-layer breakdown.
- [ ] One bottleneck is named with a reason (params or activation memory).

## Worked example
`Use $conv-shape-planner for a 3×28×28 Fashion-MNIST net`. Good output: a table ending at the flattened feature size, total ≈0.9M params, and bottleneck "first FC layer holds 60% of params."

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example-skills patterns for compute-before-code procedures.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal code-agent reference for wiring such a planner as a tool.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — curated skills including code/debugging helpers.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable DL examples to validate the shape table against.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 5 — Convolutional Networks: Built, Then Trained on Fashion-MNIST
