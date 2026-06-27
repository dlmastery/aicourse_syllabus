---
name: ppo-trainer
description: Runs a reusable, instrumented PPO loop that emits the canonical health signals (KL, clip-fraction, entropy, value loss) so a learner can prove training is stable. Use when building or debugging a PPO/GRPO policy and you need a repeatable, evidence-producing procedure rather than a one-off script.
---

# PPO Trainer

A reusable harness skill that turns "I wrote a PPO loop" into "I have a trained policy plus the diagnostic traces that prove it trained healthily." It encodes the judgment of which signals to watch (KL drift, clip fraction, entropy collapse) and what their healthy ranges look like.

## When to use
- You are doing the Weeks 8-10 RLHF/GRPO hands-on build and need a backbone PPO trainer you can re-run.
- A policy is diverging, collapsing entropy, or showing reward-hacking and you need the diagnostic traces to localize the cause.
- You want an apples-to-apples PPO baseline before comparing against DPO/GRPO or other objectives.

## Inputs
- An environment / rollout function (env-step or a batched generation fn for LLM rollouts).
- Policy and value networks (or a shared backbone with two heads).
- A PPO config: clip epsilon, GAE lambda, gamma, KL target/coefficient, learning rate, epochs-per-batch, minibatch size.

## Workflow
1. Wire the rollout fn, policy+value nets, and PPO config into the trainer; fix seeds and log the config.
2. Collect a rollout batch; compute advantages with GAE(lambda) and normalize them.
3. Run the clipped surrogate update for N epochs, logging KL, clip-fraction, entropy, value loss, and explained variance every step.
4. Apply the "healthy training" checklist: KL near target (not exploding), clip-fraction roughly 0.1-0.3, entropy decaying smoothly (not collapsing), value loss trending down.
5. If a signal goes out of range, stop and adjust (KL coef, LR, clip epsilon, advantage normalization) before continuing.
6. Save the trained policy plus the full trace and the checklist verdict.

## Outputs & evidence artifact
- Trained policy checkpoint, KL/clip-fraction/entropy logs, and a pass/fail "healthy training" checklist result.
- Leave the artifact at `evidence/week05-ppo/` containing the KL/clip-fraction trace (the canonical PPO health signals).

## Acceptance checks
- [ ] `evidence/week05-ppo/` contains a KL and clip-fraction trace over training steps.
- [ ] The healthy-training checklist is filled in with an explicit pass/fail per signal.
- [ ] Config and seed are recorded so the run is reproducible.
- [ ] Any out-of-range signal has a documented intervention and its effect.

## Worked example
Invocation: "Use $ppo-trainer to train my policy on the rollout fn with clip=0.2, KL target=0.02, and emit health signals."
Good output: a trained checkpoint plus `evidence/week05-ppo/trace.csv` showing KL hovering at ~0.02, clip-fraction settling around 0.18, entropy decaying smoothly, and a checklist reading "KL: pass, clip-fraction: pass, entropy: pass, value loss: pass -> healthy."

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — reference PPO/GRPO trainers with the same KL/clip-fraction logging this skill mirrors.
- [volcengine/verl](https://github.com/volcengine/verl) — production-scale PPO/GRPO RLHF, useful for scaling the loop beyond one GPU.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official recipes for evaluating and post-training policies the loop produces.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical Agent Skills / SKILL.md format authority.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL
