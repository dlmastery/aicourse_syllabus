---
name: attention-inspector
description: Dump and visualize an attention score matrix, verify the causal mask, and flag degenerate patterns. Use when building or debugging a transformer from scratch and you need to confirm attention is doing what the math says.
---

# Attention Inspector

A debugging harness for attention internals. The judgment it encodes: attention bugs are silent — a broken causal mask or a degenerate all-uniform head still produces plausible loss curves, so you must look at the actual score matrix.

## When to use
- Building a transformer from scratch and verifying attention works.
- A model trains but you suspect a mask or attention bug.
- Teaching/learning what attention patterns should look like.

## Inputs
- A model (or single attention layer) and an input sequence.

## Workflow
1. Run a forward pass and capture the attention score matrix per head.
2. Render heatmaps of the scores.
3. Verify the causal mask: future positions must be zero.
4. Flag degenerate heads (all-uniform, or all weight on one token).
5. Note findings and the fix if a degeneracy is real.

## Outputs & evidence artifact
- `evidence/week07-attention/`: the heatmap(s), the mask-correctness check, and a degeneracy flag.

## Acceptance checks
- [ ] The causal mask is verified (no attention to future tokens).
- [ ] Per-head heatmaps are produced for a real input.
- [ ] Degenerate heads are flagged (or confirmed absent).

## Worked example
`Use $attention-inspector on my from-scratch GPT block.` → Heatmaps for 4 heads, mask check PASS, one head flagged all-uniform (later traced to an un-scaled QK product), fix verified.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for inspecting and visualizing model internals.
- [huggingface/smolagents](https://github.com/huggingface/smolagents) — minimal, readable code reference for transformer/tooling internals.
- [huggingface/trl](https://github.com/huggingface/trl) — transformer training library to compare attention behavior against.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 7 — Attention From Scratch: Why It Replaced Recurrence
