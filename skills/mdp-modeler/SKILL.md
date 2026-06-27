---
name: mdp-modeler
description: Turn an informal control problem into an explicit MDP spec — state space, action space, transition assumptions, reward, discount with justification, and one stated Markov-violation risk — before writing any RL code. Use whenever you start an RL problem and need to pin down the formalism first.
---

# MDP Modeler

A harness skill that forces the modeling decision before the coding decision: every RL problem is first written as an explicit MDP, including the assumption most likely to break the Markov property — so you know what you're approximating.

## When to use
- You are about to implement an RL agent for a loosely specified task.
- You need to commit to a reward function and discount factor deliberately.
- You want to surface non-Markov risks before they corrupt training.

## Inputs
- An informal task description (goal, what the agent observes, what it can do).

## Workflow
1. Name the state space S (what the agent observes and whether it's the true state).
2. Name the action space A (discrete/continuous, bounds).
3. Write the reward function R (and note any shaping and its risks).
4. Choose the discount γ and justify it from the task horizon.
5. State the transition assumptions and flag one concrete Markov-violation risk.

## Outputs & evidence artifact
- `evidence/week01-mdp-spec.md` — S, A, R, γ (with justification), transition assumptions, and the stated Markov-violation risk.

## Acceptance checks
- [ ] S, A, R, and γ are each defined explicitly.
- [ ] The discount choice is justified from the task horizon.
- [ ] At least one Markov-violation risk is named.
- [ ] Reward shaping (if any) is flagged with its failure mode.

## Worked example
`Use $mdp-modeler on "balance a cartpole"` → S = (x, ẋ, θ, θ̇); A = {left, right}; R = +1 per upright step; γ = 0.99 (long horizon); risk: partial observability if velocities are noisy/estimated.

## Related skills in the wild
- [huggingface/trl](https://github.com/huggingface/trl) — RL training loops that consume the MDP you specify.
- [volcengine/verl](https://github.com/volcengine/verl) — scalable RL framework for larger MDPs.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable agent/RL reference apps.

## Used in
- Subject 05 · Part C — Reinforcement Learning, Robotics & Embodied AI · Week 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch
