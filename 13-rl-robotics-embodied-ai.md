# Subject 13 — Reinforcement Learning, Robotics & Embodied AI

**Track:** Decision-Making & Embodiment · **Altitude:** Engineer → Specialist · **Length:** 14 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** Subject 01 (math/ML from scratch), Subject 02 (deep learning), and comfort with PyTorch, autograd, and training loops. Subject 11/12 (LLM fine-tuning, agents) recommended before the RLHF/GRPO/agentic-RL block (Weeks 8–10).
**Pedagogy:** Vizuara *"Reinforcement Learning in Production"* DQN→PPO→GRPO/DPO lineage, built component-by-component, fused with Stanford CS234 (theory) and MIT 6.S890 (multi-agent), under the source book's `concept → code → critique → reflection → rebuild` loop and the `prompt → workflow → skill → harness` ladder. You implement every algorithm once in NumPy/PyTorch on a tiny environment before reaching for a library.

**Course anchor cases (carried all 14 weeks):**
1. **`CartPole`/`LunarLander` control** — the "does my agent learn at all" smoke test that every algorithm must pass first.
2. **`MetaDrive` autonomous-driving** — a high-dimensional, partially observed, sim-to-real-flavored continuous-control case carried from policy gradients through robotics.
3. **`SWE-RL` coding agent** — the agentic-RL case where the "environment" is a repo + test suite, used to ground RLVR, GRPO, and the agentic capstone.

**What you leave with:** a personal `rl-embodied/` repo containing from-scratch implementations of value iteration, DQN(+Rainbow), PPO, GAE, an offline-RL learner, a GRPO trainer, a VLA fine-tune, eight reusable skills, an evidence log, and one shipped agentic-RL capstone with a reward-hacking audit.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 14 lectures (~42 contact hrs). Full time-boxed lecture plan: [`_toc/13-rl-robotics-embodied-ai-toc.md`](_toc/13-rl-robotics-embodied-ai-toc.md)._

1. **Lecture 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch** — Markov Decision Process · Return & discounting · State-value & action-value · Bellman optimality · Contraction & convergence  ·  🔧 `$mdp-modeler`
2. **Lecture 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA** — TD(0) update · Q-learning (off-policy) · SARSA (on-policy) · Exploration · Bias–variance of targets  ·  🔧 `$rollout-harness`
3. **Lecture 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow** — Q-network · Replay buffer + target net · Double DQN · Dueling architecture · Prioritized replay / n-step / distributional / noisy nets  ·  🔧 `$value-debugger`
4. **Lecture 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C** — Policy-gradient theorem · Baseline / advantage · Actor-Critic · Continuous policies  ·  🔧 `$gradient-variance-meter`
5. **Lecture 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL** — Surrogate objective / importance ratio · PPO-clip · GAE · TRPO vs PPO  ·  🔧 `$ppo-trainer`
6. **Lecture 6 — Offline RL & Imitation Learning** — Behavior cloning · Distributional shift · Conservative value (CQL) · Implicit Q-Learning (IQL) · Decision Transformer  ·  🔧 `$offline-data-auditor`
7. **Lecture 7 — Model-Based RL, MCTS & World Models (IRIS)** — Model-based RL · MCTS · AlphaZero loop · World models (IRIS)  ·  🔧 `$model-trust-auditor`
8. **Lecture 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO** — Reward model (Bradley-Terry) · PPO-RLHF objective · DPO · SimPO / KTO / ORPO  ·  🔧 `$preference-tuner`
9. **Lecture 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO** — RLVR · GRPO · GRPO biases (Dr.GRPO) · DAPO  ·  🔧 `$rlvr-trainer`
10. **Lecture 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure** — Agentic MDP · SWE-RL / DeepSWE · Distributed RL stack · Reward sparsity & shaping  ·  🔧 `$agentic-rl-env`
11. **Lecture 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real** — VLA model · Action chunking · Sim-to-real gap · Imitation vs RL fine-tuning  ·  🔧 `$embodied-eval`
12. **Lecture 12 — Humanoid Locomotion & Multi-Agent RL** — Massively parallel sim · Locomotion reward · Stochastic game · CTDE (centralized training, decentralized execution)  ·  🔧 `$reward-shaping-auditor`
13. **Lecture 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL** — Specification gaming · Goodhart / reward over-optimization · Constrained MDP · Mitigations  ·  🔧 `$reward-hacking-redteam`
14. **Lecture 14 — Capstone: An Agentic-RL System With a Safety Audit**  ·  🔧 `$rl-evidence-packet`

---

## Week 1 — MDPs, Bellman Equations & Dynamic Programming From Scratch

**Altitude:** Engineer · **Format:** 3h lecture + 4h lab
**Anchor case:** a 4×4 `FrozenLake`-style gridworld where you can read every value by hand and check the math.

### Learning goals
- State the MDP tuple `(S, A, P, R, γ)` and explain each component on the gridworld.
- Derive and implement policy evaluation, policy iteration, and value iteration from scratch (no RL library).
- Explain why the Bellman optimality operator is a γ-contraction and what that guarantees about convergence.
- Distinguish *planning* (model known) from *learning* (model unknown) and say which weeks use which.

### Concept map
- **Markov Decision Process.** Plain English: a world where the next state depends only on the current state and action, not history. Where it matters: it is the substrate of *every* later algorithm. Common mistake: using a non-Markov state (e.g., position without velocity) and blaming the algorithm.
- **Return & discounting.** *Formula:* `G_t = Σ_{k=0}^∞ γ^k r_{t+k+1}`. *Symbols:* `γ∈[0,1)` discount, `r` reward. *Shapes:* `G_t` scalar per trajectory. *Plain English:* total future reward, with later reward worth less. *Tiny example:* rewards `[0,0,1]`, `γ=0.9` → `G_0=0.81`. *Code mapping:* `G = sum((gamma**k)*r[k] for k in range(len(r)))`. *Common mistake:* using `γ=1` in a continuing task and getting infinite returns.
- **State-value & action-value.** *Formula:* `V^π(s)=E_π[G_t|s_t=s]`, `Q^π(s,a)=E_π[G_t|s_t=s,a_t=a]`. *Shapes:* `V:(|S|,)`, `Q:(|S|,|A|)`. *Plain English:* expected return from a state (or state-action) under a policy. *Common mistake:* conflating `V` (follows π everywhere) with `Q` (one fixed first action, then π).
- **Bellman optimality.** *Formula:* `V*(s)=max_a [R(s,a)+γ Σ_{s'} P(s'|s,a)V*(s')]`. *Plain English:* the value of acting optimally now and forever after. *Code mapping:* the inner `max` over a `(|A|,|S|)` array. *Common mistake:* forgetting the `γ Σ P V'` bootstrap term and treating it as a bandit.
- **Contraction & convergence.** Why it matters: value iteration is *guaranteed* to converge because the Bellman operator shrinks distances by factor `γ`.

### Hands-on build (the lab)
- `mdp.py`: represent the gridworld as explicit `P[s,a,s']` and `R[s,a]` arrays.
- `dp.py`: implement `policy_evaluation`, `policy_iteration`, `value_iteration`; assert the two converge to the same `V*` within `1e-8`.
- Plot the value function as a heatmap over the grid; verify the greedy policy "flows" to the goal.
- **Deliverable:** `python value_iteration.py` prints `V*` and the optimal policy; **Acceptance:** policy iteration and value iteration agree; greedy policy reaches goal with prob 1 on the deterministic grid.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — implement value & policy iteration on the tutorial gridworld and assert both converge to the same V*.

**Build it — step by step (AI-builder lab):**
1. **Setup:** local CPU or Colab; `pip install gymnasium numpy matplotlib`; clone `VizuaraAILabs/OpenClaw-RL-Tutorial`.
2. **Model the MDP:** encode the gridworld as explicit `P[s,a,s']` and `R[s,a]` arrays (cross-check with `FrozenLake-v1`).
3. **Implement DP:** code `policy_evaluation`, `policy_iteration`, `value_iteration` from scratch — no RL library.
4. **Cross-check:** assert PI and VI converge to the same `V*` within `1e-8`; unit-test against a hand-computed 2-state MDP.
5. **Visualize:** plot `V*` as a heatmap and confirm the greedy policy flows to the goal.
6. **Reason about γ:** sweep `γ∈{0.5,0.9,0.99}` and record how horizon `1/(1-γ)` changes the policy.
- **Artifact:** runnable `value_iteration.py` + heatmap + convergence log committed to `rl-embodied/`.
- **Use `$mdp-modeler`:** write the `(S,A,P,R,γ)` spec + one Markov-violation risk before coding.
- **Done when:** PI==VI to 1e-8; greedy policy reaches goal; γ/horizon reasoning recorded.
- **Stretch:** add a stochastic (slippery) variant and show how it changes `V*`.

### Harness / reusable skill — `$mdp-modeler`
- **Purpose:** turn any informal control problem into an explicit MDP spec before coding.
- **Inputs:** a task description. **Required outputs:** state space, action space, transition assumptions, reward function, discount choice + justification, and one stated Markov-violation risk.
- **Minimal workflow:** name S → name A → write R → pick γ → flag the non-Markov risk. **Evidence artifact:** `evidence/week01-mdp-spec.md`.

### Common failure modes
- **Reward hacking the gridworld** → a shaped reward that rewards spinning in place. *Fix:* check the optimal policy reaches the goal, not just that reward is high.
- **Wrong γ** → myopic agent ignores the goal. *Fix:* reason about the horizon `1/(1-γ)` explicitly.
- **Non-Markov state** → DP "works" but learning later fails. *Fix:* write the `$mdp-modeler` Markov-risk line.
- **Off-by-one in the Bellman backup** → values look plausible but are wrong. *Fix:* unit-test against a hand-computed 2-state MDP.

### Evidence artifact
`evidence/week01-mdp-spec.md` + value heatmap + the policy/value-iteration agreement log.

### Skill sink-in
Predict the value of the start state under the optimal policy before running value iteration. Run it. Record the gap and what surprised you about discounting.

### Dataset / environment
**Gymnasium `FrozenLake-v1`** (deterministic and slippery variants) — https://gymnasium.farama.org/environments/toy_text/frozen_lake/ . Tiny tabular MDP, no license constraints (Farama, MIT-licensed).

### Code stub
```python
import numpy as np
def value_iteration(P, R, gamma=0.99, tol=1e-8):
    # P: (S,A,S) transition probs, R: (S,A) rewards
    S, A, _ = P.shape
    V = np.zeros(S)
    while True:
        Q = R + gamma * np.einsum("sap,p->sa", P, V)   # (S,A)
        V_new = Q.max(axis=1)
        if np.max(np.abs(V_new - V)) < tol:
            break
        V = V_new
    policy = Q.argmax(axis=1)                            # greedy
    return V, policy
```

### Graded rubric table
| Criterion | Excellent (A) | Adequate (C) | Failing |
|---|---|---|---|
| Correctness | VI & PI agree to 1e-8; matches hand-computed 2-state MDP | VI converges but not cross-checked | wrong Bellman backup |
| Evidence | heatmap + convergence log + MDP spec committed | partial artifacts | score only, no spec |
| Reasoning | γ/horizon and Markov risk justified | γ chosen without reason | no discussion |

### Assessment weight
**5%** of course grade.

### Reading list
- Bellman, *Dynamic Programming* (1957) — origin of the value recursion.
- Sutton & Barto, *Reinforcement Learning: An Introduction*, 2nd ed. (2018), Ch. 3–4.
- Puterman, *Markov Decision Processes* (1994), contraction-mapping treatment.
- Stanford CS234 (Winter 2026), Lecture 1–2 (MDPs, planning).

---

### State of the Art (June 2026)
- RLVR (RL with Verifiable Rewards) made the Bellman/advantage machinery the substrate under every 2026 reasoning model (DeepSeek-R1, GPT-5.5 thinking) — same value estimation, LLM-scale.
- Gymnasium 1.x (Farama) is the maintained API standard (`terminated`/`truncated`); MuJoCo is fully open-source (Apache-2.0).
- Tunable thinking-effort in Claude Opus 4.8 / Gemini 3.1 Pro is literally test-time planning depth — the MDP horizon as a product dial.

<!-- sota:13L01 -->

## Week 2 — Model-Free Prediction & Control: Monte Carlo, TD, Q-Learning, SARSA

**Altitude:** Engineer · **Anchor case:** `FrozenLake` and `CliffWalking` where the model is now *hidden* — you only get samples.

### Learning goals
- Explain the difference between Monte Carlo (full-return) and temporal-difference (bootstrap) estimation.
- Implement tabular Q-learning (off-policy) and SARSA (on-policy) and explain why they differ on the cliff.
- Reason about the exploration–exploitation tradeoff with ε-greedy and explain why ε must decay.
- Stand up the course's Gymnasium harness with seeded, reproducible rollouts.

### Concept map
- **TD(0) update.** *Formula:* `V(s) ← V(s) + α[r + γV(s') − V(s)]`. *Symbols:* `α` step size, the bracket is the **TD error δ**. *Shapes:* scalars in the tabular case. *Plain English:* nudge your estimate toward a one-step bootstrapped target. *Code mapping:* `V[s] += alpha*(r + gamma*V[sp] - V[s])`. *Common mistake:* bootstrapping off a *terminal* state's value (should be 0).
- **Q-learning (off-policy).** *Formula:* `Q(s,a) ← Q(s,a)+α[r+γ max_{a'}Q(s',a') − Q(s,a)]`. *Plain English:* learn the optimal-policy value while behaving exploratorily. *Common mistake:* using the behavior action instead of `max` in the target.
- **SARSA (on-policy).** *Formula:* uses `Q(s',a')` for the *actually chosen* `a'`. *Plain English:* learn the value of the policy you actually follow (safer near cliffs).
- **Exploration.** ε-greedy, optimistic init; why GLIE (decaying ε) is needed for convergence. Common mistake: fixed ε=0.1 forever, so the agent never sharpens.
- **Bias–variance of targets.** MC: unbiased, high variance. TD: biased, low variance. The spectrum is n-step / λ-returns.

### Hands-on build
- `tabular.py`: Q-learning and SARSA sharing one ε-greedy/rollout harness.
- Reproduce the classic **cliff-walking divergence**: SARSA takes the safe path, Q-learning the risky optimal path.
- Log episode return curves (mean over 10 seeds) for both.
- **Deliverable:** return-curve plot + the cliff trajectory difference; **Acceptance:** Q-learning reaches optimal return, SARSA the safe sub-optimal return, both reproducibly over seeds.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — code tabular Q-learning vs SARSA on CliffWalking and reproduce the safe-vs-optimal path split over ≥5 seeds.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `pip install gymnasium numpy matplotlib`; envs `CliffWalking-v0` + `FrozenLake-v1`.
2. **Build the harness:** a seeded ε-greedy rollout loop returning `(s,a,r,s',done)` + return stats.
3. **Implement both learners:** tabular Q-learning (off-policy `max`) and SARSA (on-policy `a'`) sharing the harness.
4. **Schedule exploration:** decay ε→0.01; zero the bootstrap target on `done`.
5. **Reproduce the cliff split:** plot mean±std return over ≥5 seeds — Q-learning risky-optimal, SARSA safe.
6. **Stability check:** confirm same seed → same return (deterministic replay).
- **Artifact:** return-curve plot + cliff trajectories + seed-stability table in `rl-embodied/`.
- **Use `$rollout-harness`:** commit this seeded loop once — it is reused every later week.
- **Done when:** Q-learning optimal, SARSA safe-suboptimal, both reproducible over seeds.
- **Stretch:** add Expected-SARSA and compare target variance.

### Harness / reusable skill — `$rollout-harness`
- **Purpose:** a seeded, vectorizable environment-interaction loop reused all course.
- **Inputs:** env id, policy fn, n_episodes, seed. **Outputs:** trajectories `(s,a,r,s',done)`, return stats, and a deterministic-replay check.
- **Evidence artifact:** `evidence/week02-rollout/` with a seed-stability table (same seed → same return).

### Common failure modes
- **Unseeded env** → return curves uncomparable. *Fix:* seed env, action sampler, and torch/numpy.
- **No ε decay** → plateaus below optimal. *Fix:* schedule ε → 0.01.
- **Terminal bootstrap bug** → values inflate. *Fix:* zero the target on `done`.
- **Single-seed conclusions** → noise mistaken for signal. *Fix:* always ≥5 seeds with mean±std.

### Evidence artifact
`evidence/week02-rollout/` (return curves, cliff trajectories, seed-stability table).

### Skill sink-in
Predict which of SARSA/Q-learning walks the cliff edge. Run. Record why the on/off-policy distinction produced that behavior.

### Dataset / environment
**Gymnasium `CliffWalking-v0`** and **`FrozenLake-v1`** — https://gymnasium.farama.org/environments/toy_text/ . Tabular, Farama MIT license.

### Code stub
```python
def q_learning(env, episodes=500, alpha=0.5, gamma=0.99, eps=0.1):
    Q = np.zeros((env.observation_space.n, env.action_space.n))
    for ep in range(episodes):
        s, _ = env.reset(seed=ep)
        done = False
        while not done:
            a = env.action_space.sample() if np.random.rand() < eps else Q[s].argmax()
            sp, r, term, trunc, _ = env.step(a)
            done = term or trunc
            target = r + gamma * Q[sp].max() * (not term)   # zero on terminal
            Q[s, a] += alpha * (target - Q[s, a])
            s = sp
    return Q
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | Q-learning optimal, SARSA safe, ≥5 seeds | converges single-seed | terminal-bootstrap bug |
| Reproducibility | seed-stability table passes | partial seeding | nondeterministic |
| Reasoning | on/off-policy difference explained on cliff | states difference, no evidence | conflates the two |

### Assessment weight
**6%**.

### Reading list
- Watkins & Dayan, "Q-learning" (*Machine Learning*, 1992).
- Rummery & Niranjan, "On-line Q-learning using connectionist systems" (SARSA, 1994).
- Sutton & Barto (2018), Ch. 5–7 (MC, TD, n-step).
- Stanford CS234 (2026), Lecture 3–4 (model-free prediction/control).

---

### State of the Art (June 2026)
- TD/Q-learning targets are unchanged, but 2026 RLVR trainers (veRL, OpenRLHF) reuse the same advantage estimators at token level.
- The on/off-policy distinction now frames agentic-RL: stale-rollout drift in distributed trainers is the modern ‘cliff’.
- Gymnasium 1.x vectorized envs + seeded, multi-seed reporting are the de-facto reproducibility standard.

<!-- sota:13L02 -->

## Week 3 — Deep Q-Networks: DQN → Double → Dueling → Rainbow

**Altitude:** Engineer · **Anchor case:** `LunarLander-v3` and one Atari game (`Breakout`) — where tabular dies and function approximation is mandatory.

### Learning goals
- Explain why naive Q-learning with a neural net is unstable, and how replay + target networks fix it.
- Implement DQN from scratch, then add Double, Dueling, and prioritized replay; measure each increment.
- Read a "deadly triad" failure (bootstrapping + off-policy + function approx) from a diverging Q-value plot.
- Compose the Rainbow components and attribute the gain to each.

### Concept map
- **Q-network.** *Formula:* `Q(s,a;θ) ≈ Q*(s,a)`. *Shapes:* input `(B, obs_dim)`, output `(B, |A|)`. *Plain English:* a net that scores each action. *Common mistake:* applying it to continuous action spaces (DQN is discrete-action only).
- **Replay buffer + target net.** *Formula:* loss `L=(r+γ max_{a'}Q(s',a';θ⁻) − Q(s,a;θ))²`. *Symbols:* `θ⁻` frozen target params. *Plain English:* break correlation (replay) and freeze the moving target. *Common mistake:* using online params in the target → divergence.
- **Double DQN.** *Formula:* target `r+γ Q(s', argmax_{a'}Q(s',a';θ); θ⁻)`. *Plain English:* decouple action *selection* from *evaluation* to cut max-overestimation.
- **Dueling architecture.** *Formula:* `Q=V(s)+(A(s,a)−mean_a A)`. *Plain English:* separately estimate "how good is this state" and "how much better is this action."
- **Prioritized replay / n-step / distributional / noisy nets.** The six Rainbow ingredients; each addresses a distinct failure (sample efficiency, bias, value-distribution, exploration).

### Hands-on build
- `dqn.py`: replay buffer, target net, ε-greedy, Huber loss on `LunarLander`.
- Ablation: vanilla → +Double → +Dueling → +PER; one return curve per variant (3 seeds).
- **Deliverable:** ablation plot + a table attributing sample-efficiency gain to each component; **Acceptance:** DQN solves `LunarLander` (>200 mean return) and each ablation is reproducible.

▶ **Practical project:** `VizuaraAILabs/OpenClaw-RL-Tutorial` — build DQN→Double→Dueling→PER on LunarLander and attribute each ablation’s sample-efficiency gain.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab T4 / local GPU; `pip install gymnasium[box2d] torch ale-py`.
2. **Baseline DQN:** replay buffer + target net + ε-greedy + Huber loss on `LunarLander-v3`.
3. **Add increments:** layer in Double → Dueling → Prioritized Replay; one return curve per variant (3 seeds).
4. **Diagnose divergence:** log Q-values; read a deadly-triad failure (exploding Q / overestimation) from the plot.
5. **Attribute gains:** table mapping each Rainbow component to its sample-efficiency delta.
6. **Validate:** DQN solves `LunarLander` (>200 mean return).
- **Artifact:** ablation curves + Q-divergence diagnosis + component-attribution table.
- **Use `$value-debugger`:** feed it Q/loss/return logs to name the firing deadly-triad symptom + cheapest fix.
- **Done when:** >200 return; each ablation reproducible; one divergence diagnosed.
- **Stretch:** add n-step returns and measure the bias/variance shift.

### Harness / reusable skill — `$value-debugger`
- **Purpose:** diagnose value-based divergence. **Inputs:** Q-value logs, loss, return. **Outputs:** which deadly-triad symptom is firing (exploding Q, overestimation, replay staleness) + cheapest fix.
- **Evidence artifact:** an annotated diverging-vs-stable Q-value plot.

### Common failure modes
- **No target network** → Q explodes. *Fix:* periodic/soft target updates.
- **Reward not clipped on Atari** → unstable scale. *Fix:* clip to [-1,1] / normalize.
- **Overestimation bias** → over-optimistic policy. *Fix:* Double DQN.
- **Tiny replay buffer** → catastrophic forgetting. *Fix:* size buffer to ≥10⁵ and warm-start.

### Evidence artifact
`evidence/week03-dqn/` (ablation curves, Q-divergence diagnosis, component-attribution table).

### Skill sink-in
Predict how much Double DQN reduces value overestimation before measuring `Q − actual return`. Run. Record the corrected bias.

### Dataset / environment
**Gymnasium `LunarLander-v3`** and **ALE/Atari `Breakout`** via `ale-py` — https://gymnasium.farama.org/environments/atari/ . Atari ROMs under the ALE license (research use); Box2D envs MIT.

### Code stub
```python
def dqn_loss(batch, q_net, target_net, gamma=0.99, double=True):
    s, a, r, sp, done = batch                       # tensors
    q_sa = q_net(s).gather(1, a.unsqueeze(1)).squeeze(1)   # (B,)
    with torch.no_grad():
        if double:
            a_star = q_net(sp).argmax(1, keepdim=True)
            q_next = target_net(sp).gather(1, a_star).squeeze(1)
        else:
            q_next = target_net(sp).max(1).values
        target = r + gamma * q_next * (1 - done.float())
    return F.smooth_l1_loss(q_sa, target)           # Huber
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | solves LunarLander >200, all ablations run | solves base only | diverges |
| Evidence | per-component attribution table + Q-divergence plot | curves only | score only |
| Reasoning | deadly-triad symptoms named & fixed | mentions instability | no diagnosis |

### Assessment weight
**7%**.

### Reading list
- Mnih et al., "Human-level control through deep RL" (DQN, *Nature* 2015).
- van Hasselt et al., "Deep RL with Double Q-learning" (AAAI 2016).
- Wang et al., "Dueling Network Architectures" (ICML 2016).
- Hessel et al., "Rainbow: Combining Improvements in Deep RL" (AAAI 2018).
- Schaul et al., "Prioritized Experience Replay" (ICLR 2016).

---

### State of the Art (June 2026)
- Value-based DQN is niche vs policy methods now, but Double-Q/distributional ideas resurface in 2026 verifier/critic models (RL^V, ~1.2–1.6× test-time gains).
- FlashAttention-4 (Blackwell) + FP8 KV-cache are serving defaults even for RL rollout/eval networks.
- Atari-100k sample-efficiency remains the canonical deep-RL smoke test.

<!-- sota:13L03 -->

## Week 4 — Policy Gradients & Actor-Critic: REINFORCE, Baselines, A2C

**Altitude:** Engineer · **Anchor case:** `CartPole` (discrete) then `MetaDrive` (continuous) — where we need policies that *output actions directly*.

### Learning goals
- Derive the policy-gradient theorem and explain why REINFORCE is unbiased but high-variance.
- Implement REINFORCE with and without a value baseline; show the variance reduction.
- Build an advantage actor-critic (A2C) and explain the actor/critic division of labor.
- Explain why policy methods handle continuous actions where DQN cannot.

### Concept map
- **Policy-gradient theorem.** *Formula:* `∇_θ J = E_π[∇_θ log π_θ(a|s) · G_t]`. *Symbols:* `π_θ` parameterized policy, `G_t` return. *Shapes:* gradient has param shape. *Plain English:* push up the log-prob of actions that led to high return. *Code mapping:* `(-logp * returns).mean().backward()`. *Common mistake:* forgetting the `log` (using prob, not log-prob) → wrong gradient.
- **Baseline / advantage.** *Formula:* `A_t = G_t − V(s_t)`. *Plain English:* "was this action better than average from here?" — subtracting a baseline cuts variance without adding bias. *Common mistake:* letting the baseline depend on the action (introduces bias).
- **Actor-Critic.** *Formula:* actor uses `A`, critic minimizes `(G_t − V(s))²`. *Plain English:* the critic estimates the baseline the actor needs. *Common mistake:* sharing too much between actor/critic so the critic destabilizes the actor.
- **Continuous policies.** *Formula:* `a ~ N(μ_θ(s), σ_θ(s))`. *Plain English:* output a distribution over actions; sample and reparameterize. *Common mistake:* unbounded σ → exploding actions.

### Hands-on build
- `pg.py`: REINFORCE on `CartPole`; add a learned-value baseline; plot variance of the gradient estimate.
- `a2c.py`: synchronous advantage actor-critic on `MetaDrive` discrete-action mode.
- **Deliverable:** variance-reduction plot (REINFORCE vs +baseline) + A2C return curve; **Acceptance:** baseline measurably reduces gradient variance; A2C beats a random policy on `MetaDrive`.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — implement REINFORCE + value baseline + A2C and quantify the baseline’s gradient-variance reduction.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install gymnasium torch metadrive-simulator`; clone `VizuaraAI/RL-in-Production-Bootcamp-Resources`.
2. **REINFORCE:** implement on `CartPole-v1` with correct reward-to-go.
3. **Add baseline:** a learned value baseline; plot gradient-estimate variance with vs without.
4. **A2C:** synchronous advantage actor-critic on MetaDrive discrete mode.
5. **Stabilize:** normalize advantages per batch; add an entropy bonus.
6. **Compare:** REINFORCE vs +baseline variance + the A2C return curve.
- **Artifact:** variance-reduction plot + A2C curve + entropy log.
- **Use `$gradient-variance-meter`:** quantify gradient-norm variance and recommend the next reduction.
- **Done when:** baseline measurably cuts variance; A2C beats random on MetaDrive.
- **Stretch:** swap in GAE and re-measure variance.

### Harness / reusable skill — `$gradient-variance-meter`
- **Purpose:** quantify policy-gradient variance and the effect of variance-reduction tricks. **Inputs:** logp, returns/advantages. **Outputs:** gradient-norm variance over a batch + a recommended next reduction (baseline → GAE → normalization).
- **Evidence artifact:** `evidence/week04-variance.md`.

### Common failure modes
- **Reward-to-go error** → using full-episode return for every step. *Fix:* use return *from t onward*.
- **No advantage normalization** → unstable updates. *Fix:* standardize advantages per batch.
- **Entropy collapse** → premature determinism. *Fix:* add an entropy bonus.
- **Critic lags actor** → moving-target instability. *Fix:* tune critic LR / updates per actor step.

### Evidence artifact
`evidence/week04-pg/` (variance plot, A2C curve, entropy log).

### Skill sink-in
Predict how much a value baseline cuts gradient variance before measuring it. Run. Record the factor and revise your intuition about "why critics exist."

### Dataset / environment
**Gymnasium `CartPole-v1`** + **MetaDrive** (`metadrive-simulator`) — https://github.com/metadriverse/metadrive . MetaDrive Apache-2.0; procedurally generated driving scenarios.

### Code stub
```python
def reinforce_step(logps, rewards, gamma=0.99, baseline=None):
    # logps, rewards: lists over one episode
    returns, G = [], 0.0
    for r in reversed(rewards):
        G = r + gamma * G
        returns.insert(0, G)
    returns = torch.tensor(returns)
    adv = returns - (baseline if baseline is not None else 0.0)
    adv = (adv - adv.mean()) / (adv.std() + 1e-8)
    loss = -(torch.stack(logps) * adv).sum()
    return loss
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | REINFORCE+baseline+A2C all learn | REINFORCE only | wrong PG gradient |
| Evidence | variance reduction quantified | curve only | none |
| Reasoning | baseline/advantage role explained | partial | hand-waved |

### Assessment weight
**7%**.

### Reading list
- Williams, "Simple statistical gradient-following algorithms" (REINFORCE, 1992).
- Sutton et al., "Policy Gradient Methods for RL with Function Approximation" (NeurIPS 2000).
- Mnih et al., "Asynchronous Methods for Deep RL" (A3C, ICML 2016).
- Stanford CS234 (2026), policy-search lectures.

---

### State of the Art (June 2026)
- Policy-gradient is the backbone of all 2026 LLM post-training: GRPO/DAPO are PG with group-relative advantages and no critic.
- Advantage normalization + entropy control are standard ‘healthy training’ signals across TRL/veRL.
- Continuous-control PG (MetaDrive, MuJoCo) is the bridge to robotics VLA fine-tuning.

<!-- sota:13L04 -->

## Week 5 — Trust Regions & PPO: TRPO, GAE, and the Workhorse of Modern RL

**Altitude:** Engineer → Specialist · **Anchor case:** `MetaDrive` continuous control and `MuJoCo HalfCheetah` — the locomotion warm-up for robotics.

### Learning goals
- Explain why large policy steps are dangerous and how a trust region / clipped objective bounds them.
- Implement PPO-clip with GAE from scratch and tune the key knobs (clip ε, GAE λ, epochs).
- Derive Generalized Advantage Estimation as a bias–variance dial between TD and Monte Carlo.
- Benchmark PPO on continuous control and explain why it dominates as the default for RLHF/robotics.

### Concept map
- **Surrogate objective / importance ratio.** *Formula:* `r_t(θ)=π_θ(a|s)/π_{θ_old}(a|s)`. *Plain English:* how much more/less likely the new policy makes the taken action. *Common mistake:* forgetting to detach `π_old`.
- **PPO-clip.** *Formula:* `L=E[min(r_t A_t, clip(r_t,1−ε,1+ε)A_t)]`. *Symbols:* `ε≈0.2`. *Plain English:* take improvement steps but refuse to move too far in one update. *Code mapping:* `torch.min(ratio*adv, clamp(ratio,1-eps,1+eps)*adv)`. *Common mistake:* maximizing instead of minimizing the negative (sign error).
- **GAE.** *Formula:* `A_t^{GAE}=Σ_l (γλ)^l δ_{t+l}`, `δ_t=r_t+γV(s_{t+1})−V(s_t)`. *Symbols:* `λ∈[0,1]` bias/variance dial. *Plain English:* an exponentially weighted blend of n-step advantages. *Common mistake:* not masking across episode boundaries.
- **TRPO vs PPO.** TRPO enforces a hard KL constraint (second-order); PPO approximates it cheaply with clipping (first-order). Why PPO won: simpler, scalable, good enough.

### Hands-on build
- `ppo.py`: full PPO-clip + GAE + value-clipping + entropy bonus on `MuJoCo HalfCheetah` and `MetaDrive`.
- Sweep `λ ∈ {0.9, 0.95, 0.99}` and `clip ε ∈ {0.1, 0.2, 0.3}`; report sensitivity.
- **Deliverable:** PPO learning curves + a hyperparameter-sensitivity table; **Acceptance:** PPO reaches a documented MuJoCo HalfCheetah return threshold (>4000) reproducibly.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — train PPO+GAE on MuJoCo HalfCheetah/MetaDrive and sweep λ and clip ε with a KL health trace.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install gymnasium[mujoco] torch metadrive-simulator`.
2. **Implement PPO:** PPO-clip + GAE + value-clipping + entropy bonus.
3. **Train:** MuJoCo `HalfCheetah-v5` and MetaDrive continuous control.
4. **Health trace:** log approx-KL, clip-fraction, entropy; early-stop the epoch on a KL spike.
5. **Sweep:** λ∈{0.9,0.95,0.99}, clip ε∈{0.1,0.2,0.3}; build a sensitivity table.
6. **Validate:** HalfCheetah >4000 return reproducibly.
- **Artifact:** learning curves + KL/clip-fraction trace + sensitivity table.
- **Use `$ppo-trainer`:** this instrumented trainer is the backbone reused in Weeks 8–10.
- **Done when:** >4000 HalfCheetah; MetaDrive learns; health signals healthy.
- **Stretch:** add running reward normalization and compare stability.

### Harness / reusable skill — `$ppo-trainer`
- **Purpose:** a reusable, instrumented PPO trainer (the backbone for Weeks 8–10 RLHF/GRPO).
- **Inputs:** env/rollout fn, policy+value nets, PPO config. **Outputs:** trained policy, KL/clip-fraction/entropy logs, and a "healthy training" checklist result.
- **Evidence artifact:** `evidence/week05-ppo/` with the KL/clip-fraction trace (the canonical PPO health signals).

### Common failure modes
- **KL blow-up** → policy collapses. *Fix:* monitor approx-KL; early-stop epoch if KL exceeds target.
- **Advantage not normalized** → unstable. *Fix:* per-batch standardization.
- **Value clipping omitted** → critic overfits. *Fix:* clip value loss like the policy.
- **Reward scale wrong** → tiny/huge gradients. *Fix:* running reward normalization.

### Evidence artifact
`evidence/week05-ppo/` (curves, KL/clip-fraction trace, sensitivity table).

### Skill sink-in
Predict the clip-fraction at convergence before training. Run. If it is near 0 or near 1, diagnose what that says about your step size.

### Dataset / environment
**MuJoCo via Gymnasium** (`HalfCheetah-v5`, `Humanoid-v5`) — https://gymnasium.farama.org/environments/mujoco/ . MuJoCo now open-source (Apache-2.0, DeepMind).

### Code stub
```python
def ppo_clip_loss(logp, logp_old, adv, eps=0.2):
    ratio = torch.exp(logp - logp_old)              # (B,)
    unclipped = ratio * adv
    clipped = torch.clamp(ratio, 1 - eps, 1 + eps) * adv
    policy_loss = -torch.min(unclipped, clipped).mean()
    approx_kl = (logp_old - logp).mean()            # health signal
    clip_frac = ((ratio - 1).abs() > eps).float().mean()
    return policy_loss, approx_kl, clip_frac
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | HalfCheetah >4000, MetaDrive learns | one env learns | unstable |
| Evidence | KL/clip-fraction health trace + sweep | curves only | none |
| Reasoning | GAE λ bias/variance explained | states λ effect | hand-waved |

### Assessment weight
**8%**.

### Reading list
- Schulman et al., "Trust Region Policy Optimization" (TRPO, ICML 2015).
- Schulman et al., "Proximal Policy Optimization Algorithms" (PPO, 2017).
- Schulman et al., "High-Dimensional Continuous Control Using GAE" (ICLR 2016).
- Engstrom et al., "Implementation Matters in Deep RL: A Case Study on PPO and TRPO" (ICLR 2020).

---

### State of the Art (June 2026)
- PPO-clip is still the workhorse — GPT-5.5 / Claude-class RLHF and most RLVR recipes wrap a PPO core.
- GAE λ and clip-fraction/approx-KL are the canonical health signals tracked in W&B/LangSmith RL dashboards.
- veRL (HybridFlow) + Ray + vLLM is the 2026 reference stack for scaled PPO/GRPO.

<!-- sota:13L05 -->

## Week 6 — Offline RL & Imitation Learning

**Altitude:** Specialist · **Anchor case:** `D4RL`/`Minari` driving + locomotion logs — learning a policy *without* environment interaction.

### Learning goals
- Explain why naive off-policy RL fails on fixed datasets (distributional shift, OOD action overestimation).
- Implement behavior cloning, DAgger, and one offline-RL method (CQL or IQL).
- Explain Decision Transformer's "RL as sequence modeling" reframe and when it helps.
- Choose between imitation and offline RL given dataset quality.

### Concept map
- **Behavior cloning.** *Formula:* `max_θ Σ log π_θ(a_i|s_i)` on logged `(s,a)`. *Plain English:* supervised learning of the expert's actions. *Common mistake:* assuming i.i.d. — compounding errors drift off the expert distribution (the DAgger problem).
- **Distributional shift.** Why offline RL is hard: the learned policy queries actions absent from the data, and the critic hallucinates high values for them. *Common mistake:* applying vanilla DQN/SAC to a static buffer.
- **Conservative value (CQL).** *Formula:* adds a penalty pushing down Q on OOD actions. *Plain English:* "don't trust value estimates for actions you never saw." 
- **Implicit Q-Learning (IQL).** Avoids querying OOD actions via expectile regression on in-data actions.
- **Decision Transformer.** *Formula:* condition on desired return-to-go and predict next action autoregressively. *Plain English:* treat trajectories as token sequences; "ask" for a return.

### Hands-on build
- `bc.py` + `dagger.py` on a MuJoCo expert; show DAgger fixes compounding error.
- `iql.py` (or CQL) on a `Minari` D4RL dataset; compare to BC.
- **Deliverable:** BC-vs-DAgger drift plot + offline-RL-vs-BC return table; **Acceptance:** offline RL beats BC on a sub-optimal-data dataset; DAgger beats BC on long horizons.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — train IQL vs BC on a Minari dataset and show DAgger fixes compounding error.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install minari gymnasium[mujoco] torch`.
2. **BC + DAgger:** train on a MuJoCo expert; show DAgger fixes compounding error on long horizons.
3. **Offline RL:** implement IQL (expectile regression) on a Minari `medium` dataset.
4. **Audit data:** state/action coverage, return distribution, behavior-policy entropy.
5. **Compare:** IQL vs BC return table on sub-optimal data.
6. **Split:** trajectory-level held-out, no leakage.
- **Artifact:** BC-vs-DAgger drift plot + IQL-vs-BC table + data audit.
- **Use `$offline-data-auditor`:** produce the imitation-vs-offline-RL recommendation from the dataset.
- **Done when:** IQL>BC on medium data; DAgger beats BC on long horizons.
- **Stretch:** swap IQL for CQL and compare conservatism.

### Harness / reusable skill — `$offline-data-auditor`
- **Purpose:** assess whether a logged dataset can support offline RL. **Inputs:** trajectory dataset. **Outputs:** state/action coverage, return distribution, behavior-policy entropy, and an imitation-vs-offline-RL recommendation.
- **Evidence artifact:** `evidence/week06-data-audit.md`.

### Common failure modes
- **OOD overestimation** → great offline metrics, terrible deployment. *Fix:* conservatism (CQL/IQL).
- **Compounding BC error** → drift on long horizons. *Fix:* DAgger / data aggregation.
- **Return-to-go miscalibration (DT)** → asking for unreachable returns. *Fix:* clamp to dataset support.
- **No held-out trajectories** → overfit evaluation. *Fix:* trajectory-level split.

### Evidence artifact
`evidence/week06-offline/` (drift plot, return table, data audit).

### Skill sink-in
Predict whether BC or IQL wins on a "medium-quality" dataset before running. Run. Record what dataset property decided it.

### Dataset / environment
**Minari (Farama) D4RL datasets** — https://minari.farama.org/ (e.g., `mujoco/halfcheetah/medium-v0`). Apache-2.0; pre-collected trajectories with documented behavior policies.

### Code stub
```python
def iql_value_loss(q_net, v_net, s, a, expectile=0.7):
    with torch.no_grad():
        q = q_net(s, a)                              # in-data actions only
    v = v_net(s)
    diff = q - v
    weight = torch.where(diff > 0, expectile, 1 - expectile)
    return (weight * diff.pow(2)).mean()             # expectile regression
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | IQL>BC on medium data; DAgger fixes drift | one result | OOD-blind |
| Evidence | data audit + return table | table only | none |
| Reasoning | distributional shift explained | named | ignored |

### Assessment weight
**7%**.

### Reading list
- Levine et al., "Offline RL: Tutorial, Review, and Perspectives" (2020).
- Kumar et al., "Conservative Q-Learning for Offline RL" (CQL, NeurIPS 2020).
- Kostrikov et al., "Offline RL with Implicit Q-Learning" (IQL, ICLR 2022).
- Chen et al., "Decision Transformer: RL via Sequence Modeling" (NeurIPS 2021).
- Ross et al., "A Reduction of Imitation Learning... (DAgger)" (AISTATS 2011).

---

### State of the Art (June 2026)
- Offline RL + imitation underpin 2026 robot-learning data engines (LeRobot datasets, action chunking); BC→DAgger→IQL is still the ladder.
- Decision-Transformer ‘RL-as-sequence’ converged with VLA models that tokenize actions.
- Minari (Farama) is the maintained D4RL successor for trajectory datasets.

<!-- sota:13L06 -->

## Week 7 — Model-Based RL, MCTS & World Models (IRIS)

**Altitude:** Specialist · **Anchor case:** Atari from pixels with a *learned* world model; a board game with MCTS.

### Learning goals
- Explain the sample-efficiency promise of model-based RL and its core failure (model exploitation).
- Implement Monte Carlo Tree Search and connect it to AlphaZero-style planning.
- Explain how a learned world model (IRIS: discrete tokens + Transformer dynamics) enables imagination-based training.
- Decide when a world model is worth the added complexity.

### Concept map
- **Model-based RL.** *Formula:* learn `P̂(s'|s,a)`, `R̂`, then plan. *Plain English:* learn a simulator, train inside it. *Common mistake:* the policy exploits model errors ("hallucinated" high-value states).
- **MCTS.** *Formula:* UCT score `Q(s,a)+c√(ln N(s)/N(s,a))`. *Symbols:* `N` visit counts, `c` exploration constant. *Plain English:* selectively expand the most promising branches, balancing value and novelty. *Common mistake:* too few simulations → noisy action choice.
- **AlphaZero loop.** Self-play + MCTS-improved policy/value targets. Plain English: search makes a better teacher than the raw network.
- **World models (IRIS).** *Formula:* encode frames to discrete tokens (VQ-VAE), model dynamics with a Transformer, train the policy in "imagination." *Plain English:* a learned dream environment with sample efficiency far above model-free. *Common mistake:* training the policy on rollouts longer than the model is accurate for.

### Hands-on build
- `mcts.py`: UCT on a small game (Connect-Four); plug a value net for AlphaZero-lite self-play.
- `world_model_lab.py`: train a tiny IRIS-style tokenizer + Transformer dynamics on an Atari env; roll out imagined trajectories and inspect reconstruction.
- **Deliverable:** MCTS strength curve vs simulations + imagined-vs-real rollout comparison; **Acceptance:** MCTS beats a random opponent decisively; world-model reconstructions are visually faithful for ≥10 steps.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — build UCT MCTS on Connect-Four + a tiny IRIS-style world model and measure the safe imagination horizon.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install gymnasium[atari] ale-py torch`; reference `eloialonso/iris`.
2. **MCTS:** UCT on Connect-Four; plug a value net for AlphaZero-lite self-play.
3. **World model:** train a tiny IRIS-style VQ tokenizer + Transformer dynamics on an Atari env.
4. **Imagine:** roll out imagined trajectories; inspect reconstruction fidelity per horizon.
5. **Trust horizon:** measure per-horizon reconstruction/return error → max safe imagination horizon.
6. **Validate:** MCTS beats random decisively; reconstructions faithful ≥10 steps.
- **Artifact:** MCTS strength curve + imagined-vs-real rollouts + trust audit.
- **Use `$model-trust-auditor`:** bound policy training by the measured safe horizon.
- **Done when:** strong MCTS; faithful ≥10-step model; horizon cap recorded.
- **Stretch:** train the policy in imagination and check for model exploitation.

### Harness / reusable skill — `$model-trust-auditor`
- **Purpose:** measure how far into the future a learned model can be trusted. **Inputs:** model, real rollouts. **Outputs:** per-horizon reconstruction/return error and a "max safe imagination horizon."
- **Evidence artifact:** `evidence/week07-model-trust.md`.

### Common failure modes
- **Model exploitation** → policy games model errors. *Fix:* short imagination horizons, ensembles.
- **Compounding rollout error** → divergent dreams. *Fix:* the `$model-trust-auditor` horizon cap.
- **Too few MCTS sims** → weak play. *Fix:* scale sims, reuse subtree.
- **Tokenizer collapse (IRIS)** → blurry frames. *Fix:* monitor codebook usage.

### Evidence artifact
`evidence/week07-model/` (MCTS curve, imagination rollouts, trust audit).

### Skill sink-in
Predict the horizon at which imagined rollouts diverge from reality. Measure. Record the cap and how it should bound policy training.

### Dataset / environment
**Atari 100k benchmark** (sample-efficient regime) via Gymnasium ALE — https://gymnasium.farama.org/environments/atari/ ; IRIS reference code https://github.com/eloialonso/iris (MIT).

### Code stub
```python
def uct_select(node, c=1.41):
    import math
    logN = math.log(node.visits + 1)
    def score(child):
        if child.visits == 0:
            return float("inf")
        return child.value / child.visits + c * math.sqrt(logN / child.visits)
    return max(node.children, key=score)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | MCTS strong; world model faithful ≥10 steps | one works | both weak |
| Evidence | trust-horizon audit + rollouts | partial | none |
| Reasoning | model-exploitation risk addressed | named | ignored |

### Assessment weight
**6%**.

### Reading list
- Silver et al., "Mastering the game of Go without human knowledge" (AlphaZero, *Nature* 2017).
- Schrittwieser et al., "Mastering Atari, Go, Chess and Shogi by Planning with a Learned Model" (MuZero, *Nature* 2020).
- Micheli et al., "Transformers are Sample-Efficient World Models" (IRIS, ICLR 2023).
- Hafner et al., "Mastering Diverse Domains through World Models" (DreamerV3, 2023).

---

### State of the Art (June 2026)
- World models went mainstream via video-diffusion framing (Genie-style interactive environments); DiT over spatiotemporal latents is the architecture to know.
- DreamerV3 and IRIS remain the open references; model-exploitation + trust-horizon are the live failure modes.
- MCTS/AlphaZero search resurfaces as test-time deliberation in reasoning models.

<!-- sota:13L07 -->

## Week 8 — RLHF & Preference Optimization: PPO-RLHF, DPO, SimPO, KTO, ORPO

**Altitude:** Specialist · **Anchor case:** post-train a small instruct model (`Qwen3-0.6B`/`Llama-3.2-1B`) on a preference dataset.

### Learning goals
- Explain the three-stage RLHF pipeline (SFT → reward model → PPO) and the role of the KL penalty.
- Derive DPO and explain how it removes the explicit reward model and RL loop.
- Compare DPO / SimPO / KTO / ORPO on objective form, data needs, and failure modes.
- Run a preference-optimization fine-tune and evaluate it honestly (win-rate + KL/reward-hacking checks).

### Concept map
- **Reward model (Bradley-Terry).** *Formula:* `P(y_w ≻ y_l|x)=σ(r(x,y_w)−r(x,y_l))`. *Plain English:* learn a scalar score whose differences predict human preference. *Common mistake:* reward over-optimization (Goodhart) — the policy games the RM.
- **PPO-RLHF objective.** *Formula:* `max_π E[r(x,y)] − β·KL(π‖π_ref)`. *Symbols:* `β` KL weight, `π_ref` frozen SFT model. *Plain English:* maximize reward while staying close to the reference. *Common mistake:* `β` too small → KL blows up, model degenerates.
- **DPO.** *Formula:* `L=−log σ(β log[π(y_w|x)/π_ref(y_w|x)] − β log[π(y_l|x)/π_ref(y_l|x)])`. *Plain English:* the optimal RLHF policy has a closed form, so train directly on preferences with a classification-style loss — no RM, no rollouts. *Common mistake:* forgetting `π_ref` log-ratios (turns DPO into something biased).
- **SimPO / KTO / ORPO.** SimPO: reference-free, length-normalized reward. KTO: uses *unpaired* good/bad labels (prospect-theory utility). ORPO: folds preference odds-ratio into SFT — one stage, no reference model. *Common mistake:* picking the algorithm by hype instead of by the data you actually have (paired vs unpaired vs single-stage budget).

### Hands-on build
- `dpo_train.py` with TRL: SFT → DPO on `UltraFeedback`; then swap in SimPO/KTO/ORPO configs.
- Compare against a PPO-RLHF run (TRL `PPOTrainer` + reward model) on the same data.
- **Deliverable:** win-rate table (LLM-as-judge) across methods + KL/length-bias audit; **Acceptance:** DPO improves judge win-rate over SFT without length-hacking it (length-controlled win-rate also up).

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — SFT→DPO on UltraFeedback with TRL, then swap SimPO/KTO/ORPO and compare length-controlled win-rate.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install trl peft transformers datasets vllm`.
2. **SFT→DPO:** on `ultrafeedback_binarized` with `Qwen3-0.6B`/`Llama-3.2-1B`.
3. **Swap methods:** re-run with SimPO / KTO / ORPO configs.
4. **Baseline:** a PPO-RLHF run (TRL `PPOTrainer` + reward model) on the same data.
5. **Eval honestly:** LLM-judge win-rate + length-controlled win-rate + a KL audit.
6. **Recommend:** pick the method by data property (paired/unpaired/single-stage budget).
- **Artifact:** cross-method win-rate table + KL/length audit.
- **Use `$preference-tuner`:** the reusable harness across DPO/SimPO/KTO/ORPO.
- **Done when:** DPO improves judge win-rate over SFT without length-hacking.
- **Stretch:** add a cross-family judge + human spot-check.

### Harness / reusable skill — `$preference-tuner`
- **Purpose:** a reusable preference-optimization harness across DPO/SimPO/KTO/ORPO. **Inputs:** SFT model, preference data, method. **Outputs:** tuned model, win-rate vs reference, KL/length/reward-hacking report.
- **Evidence artifact:** `evidence/week08-pref/` with the cross-method comparison.

### Common failure modes
- **Reward over-optimization** → high RM score, worse real quality. *Fix:* KL control + held-out judge.
- **Length bias** → model wins by being verbose. *Fix:* length-controlled win-rate (SimPO/AlpacaEval-LC).
- **Reference-model drift** → forgetting capabilities. *Fix:* monitor KL to `π_ref`.
- **Judge contamination** → judge and policy share a model family. *Fix:* cross-family judge + human spot-check.

### Evidence artifact
`evidence/week08-pref/` (win-rate table, KL/length audit, method recommendation).

### Skill sink-in
Predict whether DPO or ORPO gives a better quality/compute tradeoff on your data before running. Run. Record what data property (paired? single-stage budget?) actually decided it.

### Dataset / environment
**`HuggingFaceH4/ultrafeedback_binarized`** — https://huggingface.co/datasets/HuggingFaceH4/ultrafeedback_binarized (MIT). Base models `Qwen/Qwen3-0.6B`, `meta-llama/Llama-3.2-1B-Instruct`. Library: **TRL** (Hugging Face).

### Code stub
```python
import torch.nn.functional as F
def dpo_loss(pi_lw, pi_ll, ref_lw, ref_ll, beta=0.1):
    # *_lw / *_ll: summed log-probs of chosen / rejected under policy & ref
    pi_logratio = pi_lw - pi_ll
    ref_logratio = ref_lw - ref_ll
    return -F.logsigmoid(beta * (pi_logratio - ref_logratio)).mean()
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | DPO+1 variant+PPO-RLHF all run, win-rate up | DPO only | no improvement |
| Evidence | length-controlled win-rate + KL audit | raw win-rate | none |
| Reasoning | method chosen by data property | named methods | hype-driven |

### Assessment weight
**8%**.

### Reading list
- Ouyang et al., "Training language models to follow instructions with human feedback" (InstructGPT, NeurIPS 2022).
- Rafailov et al., "Direct Preference Optimization" (DPO, NeurIPS 2023).
- Meng et al., "SimPO: Simple Preference Optimization with a Reference-Free Reward" (NeurIPS 2024).
- Ethayarajh et al., "KTO: Model Alignment as Prospect Theoretic Optimization" (2024).
- Hong et al., "ORPO: Monolithic Preference Optimization without Reference Model" (EMNLP 2024).

---

### State of the Art (June 2026)
- DPO/ORPO/KTO are the default preference-optimization stack (HF trl); SimPO reference-free length control is standard.
- Length-controlled win-rate (AlpacaEval-LC) + cross-family LLM-judge are the honest-eval norm; TrustJudge documents judge biases.
- RLHF is now mostly a thin PPO/DPO layer atop SFT; RLVR displaces it for verifiable tasks.

<!-- sota:13L08 -->

## Week 9 — RLVR & the GRPO Lineage: GRPO (DeepSeek-R1), DAPO, Dr.GRPO

**Altitude:** Specialist · **Anchor case:** train a small model to *reason* on math (`GSM8K`/`MATH`) with verifiable rewards.

### Learning goals
- Explain RL from Verifiable Rewards (RLVR) and why it sidesteps the reward-model bottleneck.
- Derive GRPO and explain how group-relative advantages remove the value network.
- Diagnose GRPO's known biases and explain the DAPO and Dr.GRPO fixes.
- Train a reasoning model and measure pass@1 gains plus response-length dynamics.

### Concept map
- **RLVR.** *Formula:* reward `r=1` if a verifier (unit tests / exact-match / checker) accepts the answer else `0`. *Plain English:* skip the learned RM — use ground-truth correctness as reward. *Common mistake:* a leaky verifier the model can game (e.g., format-only checks).
- **GRPO.** *Formula:* for a group of `G` sampled outputs per prompt, `Â_i=(r_i − mean(r))/std(r)`; optimize a PPO-clip objective with `Â_i`, no critic. *Symbols:* group-relative advantage. *Plain English:* "better than your other tries on this prompt" replaces a value function. *Common mistake:* group size too small → noisy/zero advantages when all samples tie.
- **GRPO biases (Dr.GRPO).** Length and difficulty normalization terms bias toward longer wrong answers; Dr.GRPO removes the std/length normalization that causes it. *Plain English:* fix the math so the model isn't rewarded for rambling.
- **DAPO.** Decoupled clip + dynamic sampling + token-level loss + overlong-reward shaping — an open, scaled recipe that stabilizes long-CoT RLVR. *Common mistake:* keeping zero-gradient prompts (all-correct or all-wrong groups) in the batch.

### Hands-on build
- `grpo_train.py` with **veRL** (or TRL `GRPOTrainer`): train `Qwen3-1.7B` on `GSM8K` with an exact-match verifier.
- Ablate GRPO → Dr.GRPO (remove length/std norm) → add DAPO dynamic sampling; track pass@1 and mean response length.
- **Deliverable:** pass@1 curve + response-length curve across variants + a "length-hacking" check; **Acceptance:** GRPO improves GSM8K pass@1 over the SFT base; Dr.GRPO reduces length inflation without losing accuracy.

▶ **Practical project:** `VizuaraAILabs/DeepSeek-From-Scratch` — train GRPO on GSM8K with an exact-match verifier and ablate GRPO→Dr.GRPO→DAPO on pass@1 and response length.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install verl trl vllm transformers datasets`; clone `VizuaraAILabs/DeepSeek-From-Scratch`.
2. **Verifier:** an exact-match checker on `openai/gsm8k`.
3. **GRPO:** train `Qwen3-1.7B` with group sampling, group-relative advantage, no critic.
4. **Ablate:** GRPO → Dr.GRPO (drop std/length norm) → add DAPO dynamic sampling.
5. **Track:** pass@1 + mean response length per variant; a length-hacking check.
6. **Harden:** spot-check accepted answers for verifier gaming.
- **Artifact:** pass@1 + length curves + variant ablation + gaming report.
- **Use `$rlvr-trainer`:** verifier + group sampler + GRPO/DAPO objective as one harness.
- **Done when:** GRPO↑pass@1 over SFT; Dr.GRPO cuts length without losing accuracy.
- **Stretch:** add MATH-500 and compare difficulty transfer.

### Harness / reusable skill — `$rlvr-trainer`
- **Purpose:** a verifiable-reward RL harness (verifier + group sampler + GRPO/DAPO objective). **Inputs:** base model, prompt set, verifier fn, variant. **Outputs:** trained model, pass@k, length/format metrics, verifier-gaming report.
- **Evidence artifact:** `evidence/week09-rlvr/` with the variant ablation.

### Common failure modes
- **Verifier gaming** → reward without correctness. *Fix:* harden the verifier; spot-check accepted answers.
- **Length hacking** → longer, not better. *Fix:* Dr.GRPO normalization fix + length-penalized eval.
- **All-tie groups** → zero advantage, no learning. *Fix:* DAPO dynamic sampling (keep informative groups).
- **KL/entropy collapse** → repetitive CoT. *Fix:* tune KL coeff and entropy bonus.

### Evidence artifact
`evidence/week09-rlvr/` (pass@1 + length curves, variant ablation, gaming report).

### Skill sink-in
Predict whether GRPO will inflate response length on GSM8K before training. Run. Record the length curve and whether Dr.GRPO's fix recovered accuracy at lower length.

### Dataset / environment
**`openai/gsm8k`** — https://huggingface.co/datasets/openai/gsm8k (MIT) and **`HuggingFaceH4/MATH-500`**. Base `Qwen/Qwen3-1.7B`. Libraries: **veRL** (https://github.com/volcengine/verl) and/or TRL `GRPOTrainer`; serving via **vLLM**.

### Code stub
```python
def grpo_advantages(rewards, group_size, drgrpo=False):
    # rewards: (N,) flat, grouped by prompt into blocks of `group_size`
    r = rewards.view(-1, group_size)                 # (P, G)
    centered = r - r.mean(dim=1, keepdim=True)
    if drgrpo:
        adv = centered                               # Dr.GRPO: no std norm
    else:
        adv = centered / (r.std(dim=1, keepdim=True) + 1e-6)
    return adv.view(-1)                              # (N,)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | GRPO↑pass@1; Dr.GRPO controls length | GRPO only | no gain |
| Evidence | length + accuracy + gaming report | accuracy only | none |
| Reasoning | GRPO bias & DAPO/Dr.GRPO fixes explained | named | conflated |

### Assessment weight
**8%**.

### Reading list
- Shao et al., "DeepSeekMath: Pushing the Limits of Mathematical Reasoning... (GRPO)" (2024).
- DeepSeek-AI, "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via RL" (2025).
- Yu et al., "DAPO: An Open-Source LLM Reinforcement Learning System at Scale" (2025).
- Liu et al., "Understanding R1-Zero-Like Training: A Critical Perspective (Dr.GRPO)" (2025).
- Lambert et al., "Tülu 3 / RLVR" technical report (AI2, 2025).

---

### State of the Art (June 2026)
- GRPO (DeepSeek-R1) → DAPO → Dr.GRPO is the 2026 reasoning-RL lineage; group-relative advantage removes the value net.
- RLVR (verifiable rewards) is now dominant for reasoning post-training, displacing pure RLHF.
- Reward/verifier hacking (length inflation, leaky checkers) is an active ICLR-2026 thread; Dr.GRPO fixes the normalization bias.

<!-- sota:13L09 -->

## Week 10 — Agentic RL: SWE-RL, DeepSWE & Distributed RL Infrastructure

**Altitude:** Specialist · **Anchor case:** the `SWE-RL` coding-agent case — environment = a repo + test suite; reward = tests pass.

### Learning goals
- Frame an agentic task (multi-step tool use) as an RL problem with sparse, verifiable, long-horizon rewards.
- Explain SWE-RL / DeepSWE training recipes and what made coding agents trainable with RL.
- Stand up distributed RLVR infrastructure (veRL / OpenRLHF + Ray + vLLM) and reason about its bottlenecks.
- Handle credit assignment and reward sparsity over long tool-use trajectories.

### Concept map
- **Agentic MDP.** State = conversation+repo+tool outputs; action = a tool call or token; horizon = many steps. *Plain English:* the "environment" is a sandbox running code. *Common mistake:* per-token reward when only the final patch is verifiable (credit-assignment trap).
- **SWE-RL / DeepSWE.** *Formula:* reward from test-suite pass/fail (and partial signals); GRPO-style optimization over sampled patches. *Plain English:* let the model attempt repo edits, run tests, reinforce trajectories that pass. DeepSWE reached strong SWE-Bench-Verified numbers with open RL recipes. *Common mistake:* reward only exact-match diffs (too sparse) instead of test outcomes.
- **Distributed RL stack.** Rollout (vLLM generation) ↔ reward (sandbox/verifier) ↔ trainer (FSDP/Megatron); orchestrated by Ray. *Plain English:* generation, reward, and gradient steps are separate scalable services. *Common mistake:* the generator and trainer policy versions drift (stale rollouts).
- **Reward sparsity & shaping.** Partial credit, curriculum, dense intermediate signals. *Common mistake:* over-shaping → the agent games sub-rewards.

### Hands-on build
- `swe_rl_env.py`: wrap a small Python repo + pytest into a Gymnasium-style env (apply patch → run tests → reward).
- `agentic_grpo.py` with **veRL + Ray + vLLM**: train a small model to fix seeded bugs; measure resolved-rate.
- **Deliverable:** resolved-rate curve on held-out bugs + an infra throughput report (rollout/sec, GPU util); **Acceptance:** trained agent resolves more held-out bugs than the SFT base; infra report identifies the bottleneck stage.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — wrap a repo+pytest as a Gymnasium env and train an agent with veRL+Ray+vLLM; report resolved-rate + the infra bottleneck.

**Build it — step by step (AI-builder lab):**
1. **Setup:** multi-GPU/serverless; `pip install verl vllm ray`; SWE-Gym / SWE-bench Verified instances.
2. **Build the env:** wrap a Python repo + pytest as Gymnasium-style (apply patch → run tests → reward).
3. **Reward:** partial credit = passed/total; protect test files; keep held-out tests.
4. **Train:** GRPO over sampled patches with veRL + Ray + vLLM on seeded bugs.
5. **Profile infra:** rollout/sec, GPU util; find the bottleneck stage (gen/reward/train).
6. **Evaluate:** resolved-rate on held-out bugs vs the SFT base.
- **Artifact:** resolved-rate curve + infra throughput report + reward-sparsity stats.
- **Use `$agentic-rl-env`:** the reusable verifiable agentic env (sandbox + reward + trajectory logger).
- **Done when:** agent beats SFT base on held-out; bottleneck identified.
- **Stretch:** add curriculum/partial-credit shaping and measure the lift.

### Harness / reusable skill — `$agentic-rl-env`
- **Purpose:** a reusable verifiable agentic environment (tool sandbox + reward + trajectory logger). **Inputs:** task spec, tools, verifier. **Outputs:** Gymnasium-compatible env, trajectory logs, reward-sparsity stats.
- **Evidence artifact:** `evidence/week10-agentic/` with the env + resolved-rate log.

### Common failure modes
- **Sparse-reward stall** → no learning signal. *Fix:* partial credit / curriculum / more samples per task.
- **Stale-policy rollouts** → off-policy drift. *Fix:* sync generator weights; bound staleness.
- **Sandbox flakiness** → noisy reward. *Fix:* deterministic, isolated, timeout-bounded test runs.
- **Reward gaming** → patches that disable tests. *Fix:* protect the test files; held-out tests.

### Evidence artifact
`evidence/week10-agentic/` (resolved-rate curve, infra throughput report, reward-sparsity stats).

### Skill sink-in
Predict the infra bottleneck (generation vs reward vs training) before profiling. Profile. Record where the wall-clock actually goes and what you'd scale first.

### Dataset / environment
**SWE-bench Verified / SWE-Gym** — https://github.com/SWE-bench/SWE-bench (MIT) and **SWE-Gym** for trainable instances. Infra: **veRL** / **OpenRLHF** (https://github.com/OpenRLHF/OpenRLHF), **Ray**, **vLLM**.

### Code stub
```python
class SWEEnv:
    def reset(self, task):
        self.repo = checkout(task.base_commit)       # isolated sandbox
        return observe(self.repo, task.issue)
    def step(self, patch):
        ok = apply_patch(self.repo, patch)
        if not ok:
            return self.obs, -1.0, True, {}
        passed, total = run_pytest(self.repo, timeout=120)
        reward = passed / total                      # partial credit
        done = (passed == total)
        return observe(self.repo, None), reward, done, {"passed": passed}
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | resolved-rate beats SFT on held-out | trains, no held-out gain | no learning |
| Evidence | throughput report + sparsity stats | curve only | none |
| Reasoning | credit-assignment & staleness addressed | named | ignored |

### Assessment weight
**8%**.

### Reading list
- Wei et al., "SWE-RL: Advancing LLM Reasoning via RL on Open Software Evolution" (Meta, 2025).
- Luo et al., "DeepSWE: Training a State-of-the-Art Coding Agent with RL" (Agentica/Together, 2025).
- Sheng et al., "HybridFlow: A Flexible and Efficient RLHF Framework (veRL)" (2024).
- Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?" (ICLR 2024).

---

### State of the Art (June 2026)
- DeepSWE/SWE-RL pushed open RL coding agents to strong SWE-bench-Verified numbers; the environment = repo + test suite.
- Distributed RLVR stack: veRL/OpenRLHF + Ray + vLLM rollouts; stale-policy drift is the headline infra bug.
- Execution-based agent evals (SWE-bench Pro/Verified, τ²-bench pass^k) are the 2026 standard.

<!-- sota:13L10 -->

## Week 11 — Robotics & Embodied AI: VLA Models (SmolVLA), Sim-to-Real

**Altitude:** Specialist · **Anchor case:** a manipulation task in simulation, fine-tuned from a vision-language-action model.

### Learning goals
- Explain the vision-language-action (VLA) paradigm and how it differs from classical control and pure RL.
- Fine-tune a small VLA (SmolVLA) on teleoperation data and run closed-loop in sim.
- Explain the sim-to-real gap and the main transfer techniques (domain randomization, system identification).
- Reason about action representations (joint vs end-effector, action chunking, diffusion/flow policies).

### Concept map
- **VLA model.** *Formula:* `π(a_{t:t+H} | image, instruction, proprioception)`. *Plain English:* a multimodal policy mapping camera + language + robot state to an action chunk. *Common mistake:* treating it as a chatbot — it outputs continuous action sequences, not text.
- **Action chunking.** *Formula:* predict `H` future actions at once. *Plain English:* commit to short plans to reduce compounding error and jitter. *Common mistake:* `H` too long → can't react to disturbances.
- **Sim-to-real gap.** *Plain English:* a policy perfect in sim fails on hardware due to dynamics/visual mismatch. **Domain randomization:** train over randomized physics/textures so reality is "in distribution." *Common mistake:* randomizing the wrong factors.
- **Imitation vs RL fine-tuning.** Most VLAs are behavior-cloned on demos, optionally RL-fine-tuned. *Common mistake:* expecting RL from scratch on hardware (sample cost is prohibitive).

### Hands-on build
- `vla_finetune.py` with **LeRobot**: fine-tune **SmolVLA** on a `LeRobot` teleop dataset for a pick-place task.
- Evaluate closed-loop in sim; apply domain randomization and measure success-rate robustness.
- **Deliverable:** closed-loop success-rate (with/without domain randomization) + action-chunk-length ablation; **Acceptance:** fine-tuned SmolVLA exceeds a BC baseline; domain randomization improves robustness to perturbations.

▶ **Practical project:** `VizuaraAILabs/ACT-Maniskill` — fine-tune an action-chunking (ACT) policy on ManiSkill and evaluate sim success-rate with an embodied-eval harness.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; `pip install mani-skill lerobot torch`; clone `VizuaraAILabs/ACT-Maniskill`.
2. **Data:** load LeRobot/ManiSkill demos with action chunking.
3. **Fine-tune:** train an ACT (or SmolVLA) policy on the manipulation task.
4. **Closed-loop eval:** roll the policy in sim; measure success-rate + sim-to-real caveats.
5. **Compare:** imitation vs RL fine-tuning on the same task.
6. **Audit:** log unsafe/degenerate behaviors.
- **Artifact:** success-rate curve + an embodied-eval report.
- **Use `$embodied-eval`:** standardized closed-loop success/safety evaluation.
- **Done when:** policy beats a random/BC baseline on held-out scenes.
- **Stretch:** add residual RL on top of the BC policy and re-measure.

### Harness / reusable skill — `$embodied-eval`
- **Purpose:** standardized closed-loop evaluation for embodied policies. **Inputs:** policy, sim env, perturbation suite. **Outputs:** success-rate, robustness curve under randomization, failure-mode taxonomy.
- **Evidence artifact:** `evidence/week11-vla/` with success-rate + robustness curves.

### Common failure modes
- **Open-loop evaluation** → looks fine, fails closed-loop. *Fix:* always evaluate in closed loop.
- **Distribution shift in observations** → camera/lighting mismatch. *Fix:* domain randomization + augmentation.
- **Action-space mismatch** → demos in EE-space, policy in joint-space. *Fix:* fix and document the action representation.
- **Over-chunking** → unreactive policy. *Fix:* tune chunk length `H`.

### Evidence artifact
`evidence/week11-vla/` (success-rate, robustness curve, failure taxonomy).

### Skill sink-in
Predict how much domain randomization improves robustness to a held-out perturbation before testing. Run. Record the gain and which randomized factor mattered most.

### Dataset / environment
**LeRobot datasets + SmolVLA** (Hugging Face) — https://huggingface.co/lerobot and https://huggingface.co/blog/smolvla . Sim via **ManiSkill** / **robosuite** (MuJoCo). LeRobot Apache-2.0.

### Code stub
```python
from lerobot.policies import SmolVLAPolicy
policy = SmolVLAPolicy.from_pretrained("lerobot/smolvla_base")
def rollout(env, instruction, horizon=200, chunk=10):
    obs, total = env.reset(), 0.0
    while not env.done and env.t < horizon:
        action_chunk = policy.select_action(obs, instruction)  # (chunk, act_dim)
        for a in action_chunk[:chunk]:
            obs, r, done, _ = env.step(a)
            total += r
            if done: break
    return env.success, total
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | SmolVLA>BC closed-loop; DR helps | BC-level | open-loop only |
| Evidence | robustness curve + failure taxonomy | success-rate only | none |
| Reasoning | sim-to-real gap addressed | named | ignored |

### Assessment weight
**6%**.

### Reading list
- Brohan et al., "RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control" (2023).
- Kim et al., "OpenVLA: An Open-Source Vision-Language-Action Model" (2024).
- Shukor et al., "SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics" (Hugging Face, 2025).
- Tobin et al., "Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World" (IROS 2017).

---

### State of the Art (June 2026)
- VLA models (SmolVLA, π0-class, OpenVLA successors) with action chunking are the 2026 robot-learning default.
- LeRobot (HF) is the de-facto open robot-learning hub; ManiSkill/Isaac Lab for massively parallel sim.
- Residual RL on top of behavior-cloned policies is the standard sim-to-real fine-tune.

<!-- sota:13L11 -->

## Week 12 — Humanoid Locomotion & Multi-Agent RL

**Altitude:** Specialist · **Anchor case:** train a `Humanoid` to walk via massively parallel sim; then a multi-agent game.

### Learning goals
- Train humanoid locomotion with PPO in a massively parallel GPU simulator and explain why parallelism is essential.
- Explain reward shaping for locomotion (velocity tracking, energy, gait) and its pitfalls.
- Formalize multi-agent RL: stochastic games, the non-stationarity problem, CTDE.
- Implement a multi-agent algorithm (MAPPO/QMIX) and analyze cooperative vs competitive dynamics.

### Concept map
- **Massively parallel sim.** *Plain English:* thousands of robots stepping in parallel on GPU make PPO's sample hunger affordable (minutes, not days). *Common mistake:* tiny `num_envs` → too few samples per update.
- **Locomotion reward.** *Formula:* `r = w_v·track(v) − w_e·energy − w_a·action_rate + alive_bonus`. *Plain English:* track a commanded velocity smoothly and efficiently. *Common mistake:* reward terms that produce a "bug-like" exploit gait.
- **Stochastic game.** *Formula:* `(S, {A_i}, P, {R_i}, γ)` over agents. *Plain English:* an MDP where transitions depend on *all* agents' actions. *Common mistake:* treating other agents as fixed environment → non-stationarity breaks single-agent guarantees.
- **CTDE (centralized training, decentralized execution).** *Plain English:* use global info during training, act on local obs at test time. MAPPO/QMIX/value-decomposition. *Common mistake:* credit assignment across agents (who caused the win?).

### Hands-on build
- `humanoid_ppo.py` in **Isaac Lab** (or MuJoCo MJX): train a humanoid to track velocity commands with thousands of parallel envs.
- `mappo.py` on a multi-agent benchmark (PettingZoo MPE / SMACv2); compare cooperative vs competitive.
- **Deliverable:** locomotion gait video + reward-term ablation; multi-agent win-rate vs a baseline; **Acceptance:** humanoid achieves stable forward locomotion; MAPPO beats independent learners on a cooperative task.

▶ **Practical project:** `VizuaraAILabs/Modern-Robot-Learning` — train a massively-parallel locomotion policy and a 2-agent CTDE task; audit the locomotion reward for shaping exploits.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GPU; Isaac Lab / MJX (massively parallel) per repo; clone `VizuaraAILabs/Modern-Robot-Learning`.
2. **Locomotion:** train a humanoid/quadruped policy with 4096+ parallel envs.
3. **MARL:** a 2-agent CTDE task with PettingZoo (centralized critic, decentralized actors).
4. **Reward audit:** inspect the locomotion reward for shaping exploits (e.g., reward for jitter).
5. **Domain randomization:** add it for sim-to-real robustness.
6. **Evaluate:** locomotion return + a multi-agent coordination metric.
- **Artifact:** locomotion curve + CTDE result + a reward-shaping audit note.
- **Use `$reward-shaping-auditor`:** flag shaped-reward exploits before they dominate.
- **Done when:** stable locomotion; 2-agent task solved; ≥1 shaping exploit caught.
- **Stretch:** scale to 3+ agents and test for emergent collusion.

### Harness / reusable skill — `$reward-shaping-auditor`
- **Purpose:** detect reward-shaping exploits in continuous control. **Inputs:** reward components, trajectory rollouts. **Outputs:** per-term contribution, exploit flags (e.g., reward high but task failed), and a shaping fix.
- **Evidence artifact:** `evidence/week12-locomotion/` with the reward-term breakdown.

### Common failure modes
- **Reward exploit gait** → high reward, useless walk. *Fix:* `$reward-shaping-auditor` + visual inspection.
- **Too few parallel envs** → no learning. *Fix:* scale `num_envs` to thousands.
- **MARL non-stationarity** → oscillating policies. *Fix:* CTDE, parameter sharing, opponent sampling.
- **Sim instability** → exploding contacts. *Fix:* tune solver / contact params.

### Evidence artifact
`evidence/week12-locomotion/` (gait video, reward breakdown, MARL win-rate).

### Skill sink-in
Predict which reward term the agent will exploit before training the humanoid. Train. Record the exploit (if any) and the shaping fix.

### Dataset / environment
**Isaac Lab** (NVIDIA, https://github.com/isaac-sim/IsaacLab) or **MuJoCo MJX**; multi-agent via **PettingZoo** (https://pettingzoo.farama.org/) and **SMACv2**. Isaac Lab BSD-3; PettingZoo MIT.

### Code stub
```python
# Vectorized PPO update over thousands of parallel humanoid envs
obs = envs.reset()                                   # (num_envs, obs_dim)
for step in range(rollout_len):
    actions, logp, value = policy(obs)               # batched on GPU
    obs, rew, done, info = envs.step(actions)        # parallel sim step
    buffer.add(obs, actions, logp, value, rew, done)
adv, ret = compute_gae(buffer, gamma=0.99, lam=0.95)
ppo_update(policy, buffer, adv, ret)                 # reuse $ppo-trainer
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | stable locomotion + MAPPO>IPPO | one works | neither |
| Evidence | reward breakdown + gait video | video only | none |
| Reasoning | non-stationarity / shaping addressed | named | ignored |

### Assessment weight
**6%**.

### Reading list
- Rudin et al., "Learning to Walk in Minutes Using Massively Parallel Deep RL" (CoRL 2021).
- Yu et al., "The Surprising Effectiveness of PPO in Cooperative Multi-Agent Games (MAPPO)" (NeurIPS 2022).
- Rashid et al., "QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent RL" (ICML 2018).
- MIT 6.S890, Topics in Multi-Agent Learning, lecture notes (2025).

---

### State of the Art (June 2026)
- Massively parallel sim (Isaac Lab / MJX, 4096+ envs on one GPU) is how 2026 humanoid locomotion is trained.
- CTDE (centralized-training, decentralized-execution) remains the MARL workhorse; PettingZoo/Safety-Gymnasium for benchmarks.
- Sim-to-real locomotion transfers via domain randomization + residual RL.

<!-- sota:13L12 -->

## Week 13 — RL Safety: Reward Hacking, Specification Gaming & Safe RL

**Altitude:** Specialist · **Anchor case:** deliberately break each prior week's agent by exploiting its reward, then defend it.

### Learning goals
- Define reward hacking / specification gaming and connect it to Goodhart's law across this course's agents.
- Implement constrained RL (CMDP / Lagrangian) and reason about safety constraints vs reward.
- Detect reward over-optimization (the RM "hacking" curve) and apply mitigations.
- Build a reward-hacking red-team → mitigation → re-eval loop as the bridge to Subject 14.

### Concept map
- **Specification gaming.** *Plain English:* the agent maximizes the *stated* reward in a way that violates the *intended* goal (boat circling for points, robot exploiting physics). *Common mistake:* assuming a clever reward is hack-proof.
- **Goodhart / reward over-optimization.** *Formula:* true reward rises then *falls* as proxy reward keeps rising past an optimum. *Plain English:* optimize a proxy too hard and it stops tracking the goal. *Common mistake:* training to max proxy reward with no held-out true-objective check.
- **Constrained MDP.** *Formula:* `max E[Σγ^t r_t]` s.t. `E[Σγ^t c_t] ≤ d`. *Symbols:* `c_t` cost, `d` budget. *Plain English:* maximize reward while keeping a safety cost under budget (Lagrangian dual). *Common mistake:* folding safety into reward with a fixed weight (no guarantee).
- **Mitigations.** KL anchoring, reward-model ensembles, early stopping, RLVR with hardened verifiers, human oversight. 

### Hands-on build
- `reward_hacking_lab.py`: reproduce a specification-gaming exploit (e.g., a shaped-reward CartPole/driving exploit, or a verifier-gaming LLM from Week 9).
- `safe_ppo.py`: Lagrangian-constrained PPO on a `Safety-Gymnasium` task; trade reward against a cost budget.
- **Deliverable:** a red-team report (exploit found) + mitigation + before/after true-objective metric; **Acceptance:** you exhibit one genuine reward hack and a mitigation that restores the true objective.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — red-team a trained policy’s reward for hacking and demonstrate a constrained-MDP/penalty mitigation.

**Build it — step by step (AI-builder lab):**
1. **Setup:** reuse a trained policy + its reward from an earlier week.
2. **Red-team:** search for behaviors that inflate reward without solving the task (specification gaming).
3. **Quantify:** measure reward vs true task success — show the Goodhart gap.
4. **Mitigate:** add a constrained-MDP penalty / KL control / held-out judge.
5. **Re-eval:** before/after reward-hacking rate + task success.
6. **Document residual risk.**
- **Artifact:** a reward-hacking incident report + the hardened reward.
- **Use `$reward-hacking-redteam`:** the reusable specification-gaming probe.
- **Done when:** ≥1 real hack demonstrated and measurably reduced.
- **Stretch:** try a multi-objective reward and check for new exploits.

### Harness / reusable skill — `$reward-hacking-redteam`
- **Purpose:** systematically probe an RL agent/reward for exploits. **Inputs:** agent, reward fn, true-objective metric. **Outputs:** ranked exploit hypotheses, a demonstrated hack, a mitigation, and a re-eval.
- **Evidence artifact:** `evidence/week13-safety/` red-team report (carried into Subject 14).

### Common failure modes
- **Proxy worship** → optimize reward, ignore intent. *Fix:* always track a held-out true-objective metric.
- **Cost-as-reward** → no safety guarantee. *Fix:* constrained formulation with a real budget.
- **Single-exploit blindness** → fix one hack, miss the class. *Fix:* enumerate exploit *categories*.
- **Over-constraining** → safe but useless. *Fix:* report the reward/safety Pareto curve.

### Evidence artifact
`evidence/week13-safety/` (red-team report, Pareto curve, mitigation re-eval).

### Skill sink-in
Predict which of your prior agents is easiest to reward-hack. Try to break it. Record whether you were right and what the mitigation cost in performance.

### Dataset / environment
**Safety-Gymnasium** — https://github.com/PKU-Alignment/safety-gymnasium (Apache-2.0); plus reuse Week 9's RLVR verifier for LLM reward-gaming.

### Code stub
```python
# Lagrangian-constrained PPO: dual variable on a safety-cost budget
lagrange = torch.tensor(1.0, requires_grad=True)
def constrained_objective(reward_adv, cost_adv, lam, budget_violation):
    policy_obj = -(reward_adv).mean() + lam.detach() * (cost_adv).mean()
    lam_loss = -lam * budget_violation                # dual ascent on lambda
    return policy_obj, lam_loss
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | real hack demonstrated + mitigation works | hack only | neither |
| Evidence | Pareto curve + true-objective re-eval | report only | none |
| Reasoning | Goodhart/CMDP connected to agent | named | ignored |

### Assessment weight
**5%**.

### Reading list
- Amodei et al., "Concrete Problems in AI Safety" (2016).
- Krakovna et al., "Specification gaming: the flip side of AI ingenuity" (DeepMind, 2020).
- Gao et al., "Scaling Laws for Reward Model Overoptimization" (ICML 2023).
- Achiam et al., "Constrained Policy Optimization" (ICML 2017).

---

### State of the Art (June 2026)
- Reward hacking / specification gaming is the central 2026 RL-safety failure — same root as LLM verifier-gaming (ICLR-2026 RSI thread).
- Constrained MDPs + safe-RL (Safety-Gymnasium) and runtime guardrails are the mitigation stack.
- Reward-model over-optimization (Goodhart) is measured with held-out judges + KL control.

<!-- sota:13L13 -->

## Week 14 — Capstone: An Agentic-RL System With a Safety Audit

**Altitude:** Specialist (graduating to Subjects 14/16) · **Anchor case:** your choice — extend the SWE-RL coding agent, a MetaDrive driving agent, or an embodied VLA task.

### Learning goals
- Run the full modern RL post-training loop on a real task: environment → reward/verifier → RL → eval → safety audit.
- Produce an **RL evidence packet** proving the agent learned for the right reasons (not reward hacking).
- Integrate ≥4 of the course's reusable skills into one coherent harness.

### Concept map (review as checklist)
- Problem → MDP/agentic spec (`$mdp-modeler`) → algorithm choice (value/policy/GRPO/RLVR) → infra → eval → reward-hacking red-team.

### Hands-on build
- Pick one track: (a) agentic SWE-RL agent (GRPO + `$agentic-rl-env`), (b) MetaDrive PPO driving agent with sim-to-real robustness, or (c) SmolVLA embodied task with RL fine-tuning.
- Ship: training curves, held-out eval, an ablation, a reward-hacking red-team report, and a 3-page write-up where every claim links to an artifact.
- **Deliverable:** `capstone/` repo + 3-page report + demo (video or notebook); **Acceptance:** the agent beats a named baseline on held-out tasks *and* passes its own reward-hacking audit.

▶ **Practical project:** `VizuaraAI/RL-in-Production-Bootcamp-Resources` — ship one agentic-RL system end-to-end (train → held-out eval → reward-hacking audit → evidence packet).

**Build it — step by step (AI-builder lab):**
1. **Setup:** pick a track — SWE-RL (coding), MetaDrive (driving), or LeRobot/ManiSkill (embodied).
2. **Spec:** MDP/agentic spec, algorithm, baseline, success metric, anticipated reward hack.
3. **Train:** PPO/GRPO/VLA with the right Week-5/9/11 harness; ≥3 seeds.
4. **Evaluate:** held-out vs the named baseline + one ablation.
5. **Safety audit:** `$reward-hacking-redteam` probe + a mitigation.
6. **Package:** 3-page report (every claim → artifact) + a demo.
- **Artifact:** the full evidence packet + demo committed to `rl-embodied/`.
- **Use `$rl-evidence-packet`:** compose all course skills into one auditable bundle.
- **Done when:** beats baseline on held-out (≥3 seeds); safety audit passes; demo runs.
- **Stretch:** add a second track and compare transfer.

### Harness / reusable skill — `$rl-evidence-packet`
- **Purpose:** assemble MDP spec + training logs + eval + ablation + safety audit into one reviewable bundle. **Evidence artifact:** the packet itself (this *is* the deliverable).

### Common failure modes
- **Score-only reporting** → no evidence trail. *Fix:* link every claim to a file.
- **No held-out eval** → train/test leakage. *Fix:* held-out tasks/seeds.
- **Skipping the safety audit** → ships a reward hacker. *Fix:* mandatory `$reward-hacking-redteam` pass.
- **One-seed result** → noise as signal. *Fix:* ≥3 seeds, report variance.

### Evidence artifact
`capstone/` (training logs, eval, ablation, safety audit, report, demo).

### Skill sink-in
Before the final run, write down the held-out metric you expect and the most likely reward hack. Compare to reality. The two gaps are the lesson — record both.

### Dataset / environment
Track-dependent: **SWE-Gym** (coding), **MetaDrive** (driving), or **LeRobot/ManiSkill** (embodied) — all introduced earlier with URLs/licenses above.

### Code stub
```python
# Capstone harness: compose the course skills
env    = build_env(track)            # $mdp-modeler / $agentic-rl-env
agent  = train(env, algo=cfg.algo)   # $ppo-trainer / $rlvr-trainer
report = evaluate(agent, heldout)    # $embodied-eval / resolved-rate
audit  = redteam(agent, env.reward)  # $reward-hacking-redteam
assert report.beats(baseline) and audit.passed, "capstone gate not met"
save_packet(env, agent, report, audit)   # $rl-evidence-packet
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Correctness | beats baseline on held-out, ≥3 seeds | beats on single seed | no baseline gain |
| Safety | passes reward-hacking audit | audit run, gaps noted | no audit |
| Evidence | every claim → artifact; demo runs | most claims linked | score only |
| Reasoning | algorithm/infra choices justified | partial | unjustified |

### Assessment weight
**5%** (capstone deliverable; see course Assessment for the full project weighting).

### Reading list
- Sutton & Barto (2018), Ch. 16–17 (case studies, frontiers).
- DeepSeek-AI, "DeepSeek-R1" (2025) — end-to-end RLVR system reference.
- Stanford CS234 (2026) final-project guidelines; Vizuara *RL in Production* capstone briefs.

---

### State of the Art (June 2026)
- 2026 agentic-RL capstones ship on the veRL/OpenRLHF + Ray + vLLM stack with execution-based evals and a reward-hacking audit.
- Evidence-over-demos: held-out resolved-rate, ≥3 seeds, and a documented safety audit are the bar.
- Tracks mirror the field: SWE-RL coding, MetaDrive driving, LeRobot/ManiSkill embodied.

<!-- sota:13L14 -->

## Course-level Assessment & grading

| Component | Weight |
|---|---|
| Weekly labs (Weeks 1–13 deliverables, summing the per-week weights above: 5+6+7+7+8+7+6+8+8+8+6+6+5) | **87%** |
| Capstone (Week 14 packet + demo) | **5%** |
| Reading responses & paper-presentation (one led discussion on a 2024–2026 paper) | **5%** |
| Reproducibility & evidence-log hygiene (seeds, logs, artifact links across all weeks) | **3%** |
| **Total** | **100%** |

> Weekly weights already total 87%; the remaining 13% is the capstone + scholarship + reproducibility. Each weekly deliverable is graded on its own rubric table (Correctness / Evidence / Reasoning / Reproducibility).

## Tooling & environment (June 2026)
- **Python 3.12**, **PyTorch 2.5+**, **Gymnasium 1.x** (Farama), **MetaDrive**, **MuJoCo 3.x / MJX**, **Isaac Lab**, **PettingZoo / Safety-Gymnasium**.
- **RL/post-training:** **TRL**, **veRL** (HybridFlow), **OpenRLHF**, **Ray**, **vLLM** (rollout generation), **FSDP/DeepSpeed** (training).
- **Robotics:** **LeRobot** + **SmolVLA**, **ManiSkill / robosuite**.
- **Experiment tracking:** **Weights & Biases** or **MLflow**; seeds + configs committed with every run.
- **Compute:** single-GPU works for Weeks 1–7; Weeks 8–12 assume 1–8× A100/H100-class GPUs or serverless GPU (Modal/RunPod). Tabular/classic weeks run on CPU.

## Capstone specification (milestones & acceptance checklist)
1. **Proposal (end Week 10):** task, MDP/agentic spec (`$mdp-modeler`), chosen algorithm, baseline, success metric, and the reward-hacking risk you anticipate.
2. **Prototype (Week 12):** training runs on the chosen env; first learning curve beats random; infra/throughput note.
3. **Full run + eval (Week 13):** held-out evaluation vs the named baseline, ≥3 seeds, one ablation.
4. **Safety audit (Week 14):** `$reward-hacking-redteam` report with a demonstrated probe and mitigation.
5. **Showcase (Week 14):** 3-page report (every claim → artifact) + demo.

**Acceptance checklist:** ☐ MDP/agentic spec committed ☐ reproducible (seeds+config) ☐ beats named baseline on held-out ☐ ≥3 seeds with variance ☐ one ablation ☐ reward-hacking audit passed ☐ demo runs end-to-end ☐ evidence packet assembled via `$rl-evidence-packet`.

## Skills produced (reused program-wide)
`$mdp-modeler` · `$rollout-harness` · `$value-debugger` · `$gradient-variance-meter` · `$ppo-trainer` · `$offline-data-auditor` · `$model-trust-auditor` · `$preference-tuner` · `$rlvr-trainer` · `$agentic-rl-env` · `$embodied-eval` · `$reward-shaping-auditor` · `$reward-hacking-redteam` · `$rl-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAILabs/OpenClaw-RL-Tutorial` — component-by-component RL tutorial that mirrors the DQN→PPO build path — *Lectures 1–5*
- `VizuaraAI/RL-in-Production-Bootcamp-Resources` — the course's "RL in Production" pedagogy anchor (PPO→GRPO/DPO lineage, infra) — *Lectures 5–10*
- `VizuaraAILabs/Modern-Robot-Learning` — modern robot-learning recipes (imitation + RL fine-tuning) — *Lectures 11–12*
- `VizuaraAILabs/ACT-Maniskill` — Action-Chunking Transformer on ManiSkill (action chunking, sim manipulation) — *Lecture 11 + capstone embodied track*
- `VizuaraAI/vla-driving-simulation` — vision-language-action driving in sim (grounds the MetaDrive anchor) — *Lectures 11, 14*

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **VLA / world-model reading lab** — evaluate a robotics policy / world model and write its safety analysis — *Lectures 11–14*
