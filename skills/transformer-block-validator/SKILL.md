---
name: transformer-block-validator
description: Verifies a hand-built Transformer block by shape-checking every sublayer, confirming residual/norm placement, and overfitting a single batch to near-zero loss. Use when you implement a Transformer block from scratch and need proof it's correct before scaling up.
---

# Transformer Block Validator

A harness skill that proves a Transformer block is wired correctly via three cheap, decisive checks: shapes, residual/norm placement, and a single-batch overfit. It encodes the judgment that a block that can't memorize one batch is broken, no matter how plausible the code looks.

## When to use
- You just implemented attention + MLP + norms from scratch.
- A model won't learn and you suspect the block, not the data.
- You're reviewing someone's block implementation.

## Inputs
- A block module (attention + MLP + norm + residual).
- A tiny batch.

## Workflow
1. Build a shape table for every sublayer input/output.
2. Confirm residual connections and norm placement (pre- vs post-norm) match intent.
3. Overfit a single tiny batch; confirm loss drops to near zero.
4. If it can't overfit, bisect (remove residual, swap norm) to localize the bug.
5. Record the shape table, norm confirmation, and overfit curve.

## Outputs & evidence artifact
- `evidence/week08-block-validate.md` — shape table, pre/post-norm confirmation, and the single-batch overfit curve.

## Acceptance checks
- [ ] A shape table covers every sublayer.
- [ ] Residual/norm placement is explicitly confirmed.
- [ ] The single-batch overfit reaches near-zero loss (or the bug is localized).

## Worked example
`Use transformer-block-validator on my GPT block + a 4-example batch` → shapes consistent, pre-norm confirmed, loss → 0.002 in 200 steps; block validated.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — reference implementations to validate against.
- [obra/superpowers](https://github.com/obra/superpowers) — test-driven-development and systematic-debugging methodology.
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified TDD/debugging skills.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 8 — The Transformer Block, Built End to End
