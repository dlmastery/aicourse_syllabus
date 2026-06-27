# Detailed Table of Contents — Subject 13 — Reinforcement Learning, Robotics & Embodied AI

_Source: `13-rl-robotics-embodied-ai.md` · **1 academic quarter · 3 lecture-hours/week · 14 weekly lectures (~42 contact hours)**. Every lecture has a **▶ practical project** (real GitHub repo)._

### Lecture 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch
_3-hour block · 🔧 skill: `$mdp-modeler` · ▶ project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement value & policy iteration on the tutorial gridworld and assert both converge to the same V*._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Markov Decision Process; Return & discounting |
| 00:30–01:00 | M2 | State-value & action-value |
| 01:00–01:30 | M3 | Bellman optimality |
| 01:30–02:00 | M4 | Contraction & convergence |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — implement value & policy iteration on the tutorial gridworld and assert both converge to the same V*. |

### Lecture 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA
_3-hour block · 🔧 skill: `$rollout-harness` · ▶ project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — code tabular Q-learning vs SARSA on CliffWalking and reproduce the safe-vs-optimal path split over ≥5 seeds._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | TD(0) update; Q-learning (off-policy) |
| 00:30–01:00 | M2 | SARSA (on-policy) |
| 01:00–01:30 | M3 | Exploration |
| 01:30–02:00 | M4 | Bias–variance of targets |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — code tabular Q-learning vs SARSA on CliffWalking and reproduce the safe-vs-optimal path split over ≥5 seeds. |

### Lecture 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow
_3-hour block · 🔧 skill: `$value-debugger` · ▶ project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — build DQN→Double→Dueling→PER on LunarLander and attribute each ablation’s sample-efficiency gain._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Q-network; Replay buffer + target net |
| 00:30–01:00 | M2 | Double DQN |
| 01:00–01:30 | M3 | Dueling architecture |
| 01:30–02:00 | M4 | Prioritized replay / n-step / distributional / noisy nets |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/OpenClaw-RL-Tutorial`](https://github.com/VizuaraAILabs/OpenClaw-RL-Tutorial) — build DQN→Double→Dueling→PER on LunarLander and attribute each ablation’s sample-efficiency gain. |

### Lecture 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C
_3-hour block · 🔧 skill: `$gradient-variance-meter` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — implement REINFORCE + value baseline + A2C and quantify the baseline’s gradient-variance reduction._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Policy-gradient theorem |
| 00:30–01:00 | M2 | Baseline / advantage |
| 01:00–01:30 | M3 | Actor-Critic |
| 01:30–02:00 | M4 | Continuous policies |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — implement REINFORCE + value baseline + A2C and quantify the baseline’s gradient-variance reduction. |

### Lecture 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL
_3-hour block · 🔧 skill: `$ppo-trainer` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train PPO+GAE on MuJoCo HalfCheetah/MetaDrive and sweep λ and clip ε with a KL health trace._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Surrogate objective / importance ratio |
| 00:30–01:00 | M2 | PPO-clip |
| 01:00–01:30 | M3 | GAE |
| 01:30–02:00 | M4 | TRPO vs PPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train PPO+GAE on MuJoCo HalfCheetah/MetaDrive and sweep λ and clip ε with a KL health trace. |

### Lecture 6 — Offline RL & Imitation Learning
_3-hour block · 🔧 skill: `$offline-data-auditor` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train IQL vs BC on a Minari dataset and show DAgger fixes compounding error._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Behavior cloning; Distributional shift |
| 00:30–01:00 | M2 | Conservative value (CQL) |
| 01:00–01:30 | M3 | Implicit Q-Learning (IQL) |
| 01:30–02:00 | M4 | Decision Transformer |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — train IQL vs BC on a Minari dataset and show DAgger fixes compounding error. |

### Lecture 7 — Model-Based RL, MCTS & World Models (IRIS)
_3-hour block · 🔧 skill: `$model-trust-auditor` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build UCT MCTS on Connect-Four + a tiny IRIS-style world model and measure the safe imagination horizon._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Model-based RL |
| 00:30–01:00 | M2 | MCTS |
| 01:00–01:30 | M3 | AlphaZero loop |
| 01:30–02:00 | M4 | World models (IRIS) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — build UCT MCTS on Connect-Four + a tiny IRIS-style world model and measure the safe imagination horizon. |

### Lecture 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO
_3-hour block · 🔧 skill: `$preference-tuner` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — SFT→DPO on UltraFeedback with TRL, then swap SimPO/KTO/ORPO and compare length-controlled win-rate._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Reward model (Bradley-Terry) |
| 00:30–01:00 | M2 | PPO-RLHF objective |
| 01:00–01:30 | M3 | DPO |
| 01:30–02:00 | M4 | SimPO / KTO / ORPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — SFT→DPO on UltraFeedback with TRL, then swap SimPO/KTO/ORPO and compare length-controlled win-rate. |

### Lecture 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO
_3-hour block · 🔧 skill: `$rlvr-trainer` · ▶ project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — train GRPO on GSM8K with an exact-match verifier and ablate GRPO→Dr.GRPO→DAPO on pass@1 and response length._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLVR |
| 00:30–01:00 | M2 | GRPO |
| 01:00–01:30 | M3 | GRPO biases (Dr.GRPO) |
| 01:30–02:00 | M4 | DAPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/DeepSeek-From-Scratch`](https://github.com/VizuaraAILabs/DeepSeek-From-Scratch) — train GRPO on GSM8K with an exact-match verifier and ablate GRPO→Dr.GRPO→DAPO on pass@1 and response length. |

### Lecture 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure
_3-hour block · 🔧 skill: `$agentic-rl-env` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — wrap a repo+pytest as a Gymnasium env and train an agent with veRL+Ray+vLLM; report resolved-rate + the infra bottleneck._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Agentic MDP |
| 00:30–01:00 | M2 | SWE-RL / DeepSWE |
| 01:00–01:30 | M3 | Distributed RL stack |
| 01:30–02:00 | M4 | Reward sparsity & shaping |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — wrap a repo+pytest as a Gymnasium env and train an agent with veRL+Ray+vLLM; report resolved-rate + the infra bottleneck. |

### Lecture 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real
_3-hour block · 🔧 skill: `$embodied-eval` · ▶ project: [`VizuaraAILabs/ACT-Maniskill`](https://github.com/VizuaraAILabs/ACT-Maniskill) — fine-tune an action-chunking (ACT) policy on ManiSkill and evaluate sim success-rate with an embodied-eval harness._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | VLA model |
| 00:30–01:00 | M2 | Action chunking |
| 01:00–01:30 | M3 | Sim-to-real gap |
| 01:30–02:00 | M4 | Imitation vs RL fine-tuning |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/ACT-Maniskill`](https://github.com/VizuaraAILabs/ACT-Maniskill) — fine-tune an action-chunking (ACT) policy on ManiSkill and evaluate sim success-rate with an embodied-eval harness. |

### Lecture 12 — Humanoid Locomotion & Multi-Agent RL
_3-hour block · 🔧 skill: `$reward-shaping-auditor` · ▶ project: [`VizuaraAILabs/Modern-Robot-Learning`](https://github.com/VizuaraAILabs/Modern-Robot-Learning) — train a massively-parallel locomotion policy and a 2-agent CTDE task; audit the locomotion reward for shaping exploits._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Massively parallel sim |
| 00:30–01:00 | M2 | Locomotion reward |
| 01:00–01:30 | M3 | Stochastic game |
| 01:30–02:00 | M4 | CTDE (centralized training, decentralized execution) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAILabs/Modern-Robot-Learning`](https://github.com/VizuaraAILabs/Modern-Robot-Learning) — train a massively-parallel locomotion policy and a 2-agent CTDE task; audit the locomotion reward for shaping exploits. |

### Lecture 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL
_3-hour block · 🔧 skill: `$reward-hacking-redteam` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — red-team a trained policy’s reward for hacking and demonstrate a constrained-MDP/penalty mitigation._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Specification gaming |
| 00:30–01:00 | M2 | Goodhart / reward over-optimization |
| 01:00–01:30 | M3 | Constrained MDP |
| 01:30–02:00 | M4 | Mitigations |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — red-team a trained policy’s reward for hacking and demonstrate a constrained-MDP/penalty mitigation. |

### Lecture 14 — Capstone: An Agentic-RL System With a Safety Audit
_3-hour block · 🔧 skill: `$rl-evidence-packet` · ▶ project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — ship one agentic-RL system end-to-end (train → held-out eval → reward-hacking audit → evidence packet)._

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ▶ Build the weekly artifact — practical project: [`VizuaraAI/RL-in-Production-Bootcamp-Resources`](https://github.com/VizuaraAI/RL-in-Production-Bootcamp-Resources) — ship one agentic-RL system end-to-end (train → held-out eval → reward-hacking audit → evidence packet). |

