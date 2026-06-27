# Detailed Table of Contents — Subject 13 — Reinforcement Learning, Robotics & Embodied AI

_Source: `13-rl-robotics-embodied-ai.md` · **1 academic quarter · 3 lecture-hours/week · 14 weekly lectures (~42 contact hours)**_

### Lecture 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch
_3-hour block · 🔧 reusable skill: `$mdp-modeler`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Markov Decision Process; Return & discounting |
| 00:30–01:00 | M2 | State-value & action-value |
| 01:00–01:30 | M3 | Bellman optimality |
| 01:30–02:00 | M4 | Contraction & convergence |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | mdp.py: represent the gridworld as explicit P[s,a,s'] and R[s,a] arrays |

### Lecture 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA
_3-hour block · 🔧 reusable skill: `$rollout-harness`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | TD(0) update; Q-learning (off-policy) |
| 00:30–01:00 | M2 | SARSA (on-policy) |
| 01:00–01:30 | M3 | Exploration |
| 01:30–02:00 | M4 | Bias–variance of targets |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | tabular.py: Q-learning and SARSA sharing one ε-greedy/rollout harness |

### Lecture 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow
_3-hour block · 🔧 reusable skill: `$value-debugger`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Q-network; Replay buffer + target net |
| 00:30–01:00 | M2 | Double DQN |
| 01:00–01:30 | M3 | Dueling architecture |
| 01:30–02:00 | M4 | Prioritized replay / n-step / distributional / noisy nets |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | dqn.py: replay buffer, target net, ε-greedy, Huber loss on LunarLander |

### Lecture 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C
_3-hour block · 🔧 reusable skill: `$gradient-variance-meter`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Policy-gradient theorem |
| 00:30–01:00 | M2 | Baseline / advantage |
| 01:00–01:30 | M3 | Actor-Critic |
| 01:30–02:00 | M4 | Continuous policies |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | pg.py: REINFORCE on CartPole; add a learned-value baseline; plot variance of the gradient estimate |

### Lecture 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL
_3-hour block · 🔧 reusable skill: `$ppo-trainer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Surrogate objective / importance ratio |
| 00:30–01:00 | M2 | PPO-clip |
| 01:00–01:30 | M3 | GAE |
| 01:30–02:00 | M4 | TRPO vs PPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | ppo.py: full PPO-clip + GAE + value-clipping + entropy bonus on MuJoCo HalfCheetah and MetaDrive |

### Lecture 6 — Offline RL & Imitation Learning
_3-hour block · 🔧 reusable skill: `$offline-data-auditor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Behavior cloning; Distributional shift |
| 00:30–01:00 | M2 | Conservative value (CQL) |
| 01:00–01:30 | M3 | Implicit Q-Learning (IQL) |
| 01:30–02:00 | M4 | Decision Transformer |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | bc.py + dagger.py on a MuJoCo expert; show DAgger fixes compounding error |

### Lecture 7 — Model-Based RL, MCTS & World Models (IRIS)
_3-hour block · 🔧 reusable skill: `$model-trust-auditor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Model-based RL |
| 00:30–01:00 | M2 | MCTS |
| 01:00–01:30 | M3 | AlphaZero loop |
| 01:30–02:00 | M4 | World models (IRIS) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | mcts.py: UCT on a small game (Connect-Four); plug a value net for AlphaZero-lite self-play |

### Lecture 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO
_3-hour block · 🔧 reusable skill: `$preference-tuner`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Reward model (Bradley-Terry) |
| 00:30–01:00 | M2 | PPO-RLHF objective |
| 01:00–01:30 | M3 | DPO |
| 01:30–02:00 | M4 | SimPO / KTO / ORPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | dpo_train.py with TRL: SFT → DPO on UltraFeedback; then swap in SimPO/KTO/ORPO configs |

### Lecture 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO
_3-hour block · 🔧 reusable skill: `$rlvr-trainer`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | RLVR |
| 00:30–01:00 | M2 | GRPO |
| 01:00–01:30 | M3 | GRPO biases (Dr.GRPO) |
| 01:30–02:00 | M4 | DAPO |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | grpo_train.py with **veRL** (or TRL GRPOTrainer): train Qwen3-1.7B on GSM8K with an exact-match veri |

### Lecture 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure
_3-hour block · 🔧 reusable skill: `$agentic-rl-env`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Agentic MDP |
| 00:30–01:00 | M2 | SWE-RL / DeepSWE |
| 01:00–01:30 | M3 | Distributed RL stack |
| 01:30–02:00 | M4 | Reward sparsity & shaping |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | swe_rl_env.py: wrap a small Python repo + pytest into a Gymnasium-style env (apply patch → run tests |

### Lecture 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real
_3-hour block · 🔧 reusable skill: `$embodied-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | VLA model |
| 00:30–01:00 | M2 | Action chunking |
| 01:00–01:30 | M3 | Sim-to-real gap |
| 01:30–02:00 | M4 | Imitation vs RL fine-tuning |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | vla_finetune.py with **LeRobot**: fine-tune **SmolVLA** on a LeRobot teleop dataset for a pick-place |

### Lecture 12 — Humanoid Locomotion & Multi-Agent RL
_3-hour block · 🔧 reusable skill: `$reward-shaping-auditor`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Massively parallel sim |
| 00:30–01:00 | M2 | Locomotion reward |
| 01:00–01:30 | M3 | Stochastic game |
| 01:30–02:00 | M4 | CTDE (centralized training, decentralized execution) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | humanoid_ppo.py in **Isaac Lab** (or MuJoCo MJX): train a humanoid to track velocity commands with t |

### Lecture 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL
_3-hour block · 🔧 reusable skill: `$reward-hacking-redteam`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Specification gaming |
| 00:30–01:00 | M2 | Goodhart / reward over-optimization |
| 01:00–01:30 | M3 | Constrained MDP |
| 01:30–02:00 | M4 | Mitigations |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | reward_hacking_lab.py: reproduce a specification-gaming exploit (e.g., a shaped-reward CartPole/driv |

### Lecture 14 — Capstone: An Agentic-RL System With a Safety Audit
_3-hour block · 🔧 reusable skill: `$rl-evidence-packet`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Pick one track: (a) agentic SWE-RL agent (GRPO + $agentic-rl-env), (b) MetaDrive PPO driving agent w |

