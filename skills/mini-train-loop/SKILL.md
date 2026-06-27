---
name: mini-train-loop
description: A reusable, instrumented training loop — seedable, checkpointing, eval-every-N, early-stop, metric logging — that becomes the backbone for every later training task. Use when training a model from scratch (e.g., nanoGPT) and you need a trustworthy, reproducible loop.
---

# Mini Train Loop

A harness skill that builds the training loop once, correctly, so it can be reused everywhere: deterministic seeding, periodic checkpoints, eval-every-N, early stopping, and metric logging — the infrastructure every later course depends on.

## When to use
- You are training a model from scratch and need a reproducible loop, not a throwaway script.
- You want checkpoints and eval baked in so runs are resumable and comparable.
- The loop will be reused across later weeks/projects.

## Inputs
- A model, a dataset, and a config (batch size, lr, steps, eval interval, seed).

## Workflow
1. Set all seeds and document the determinism caveats.
2. Implement the train step with metric logging (loss, lr, throughput) to CSV/W&B.
3. Add eval-every-N steps against a fixed val set.
4. Add checkpointing (save best + latest) and resume-from-checkpoint.
5. Add early stopping on the eval metric; emit a samples file at the end.

## Outputs & evidence artifact
- `evidence/week10-train/` — checkpoints, a metrics CSV / W&B run, the config, training curves, and a samples file.

## Acceptance checks
- [ ] The run is seeded and resumable from a checkpoint.
- [ ] Eval runs every N steps against a fixed val set.
- [ ] Metrics are logged to a durable artifact (CSV/W&B).
- [ ] Early stopping and best-checkpoint selection work.

## Worked example
`Use $mini-train-loop to train nanoGPT on TinyStories` → seeded run, eval every 500 steps, best checkpoint at step 4000 (val loss 1.42), early-stopped at 5000; curves + samples saved.

## Related skills in the wild
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — `/finetuning` and `/evaluation` recipes for loop design.
- [huggingface/trl](https://github.com/huggingface/trl) — reference Trainer loops to compare instrumentation against.
- [obra/superpowers](https://github.com/obra/superpowers) — TDD/verification methodology for building the loop reliably.

## Used in
- Subject 01 · Part B — Deep Learning & the Transformer, Built by Hand · Week 10 — Training a Small GPT: nanoGPT From Scratch
