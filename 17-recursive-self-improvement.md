# Subject 17 — Recursive Self-Improvement: Self-Evolving Agents, Models & Systems

**Track:** Frontier / Research · **Altitude:** Specialist (seminar + lab) · **Length:** 13 weeks + capstone
**Prerequisites:** Subjects 03 (LLMs), 06 (Reasoning & test-time compute), 07 (Agents), 13 (RL), 14 (Safety).
**Pedagogy:** paper-to-code seminar in the source book's style — every week pairs a concept with a **live experiment**
and leaves behind an **evidence artifact**. This course is the bleeding edge: it is built directly on the
**ICLR 2026 Workshop on AI with Recursive Self-Improvement** (Rio de Janeiro, Apr 26 2026; 110 accepted papers).

> **What is recursive self-improvement (RSI)?** A system that improves its *own* future learning or performance —
> by generating its own data, curricula, verifiers, memories, tools, or even successor models — and then feeds those
> gains back into itself. The workshop frames every contribution through **five lenses**, which become the spine of
> this course:
> 1. **Change target** — what inside the system changes (weights, context, memory, tools, architecture, successor)?
> 2. **Temporal regime** — when does adaptation happen (train-time, test-time, lifelong)?
> 3. **Mechanism / driver** — what drives improvement (self-play, verification, curricula, evolution, distillation)?
> 4. **Operating context** — where (coding, science, robotics, multimodal, recommendation)?
> 5. **Evidence of improvement** — how do we *prove* it improved and didn't just game its own metric?

**Course anchor system (built all term):** `Agent0-Loop` — a minimal self-evolving agent that starts from little/no
data, generates its own tasks + tool-integrated solutions, verifies them, distills the wins back into itself, and is
wrapped in safety gates. Each week adds one real RSI mechanism to it.

**Hard rule (the course's harness):** every self-improvement claim must come with an **anti-gaming check** — a held-out,
independently-verified measure of improvement. RSI that only improves its own self-judged score is treated as a *failure*,
not a result (see Weeks 5, 12, 13).

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 13 lectures (~39 contact hrs). Full time-boxed lecture plan: [`_toc/17-recursive-self-improvement-toc.md`](_toc/17-recursive-self-improvement-toc.md)._

1. **Lecture 1 — Foundations: The Five Lenses, Taxonomy & Theory of RSI** — The self-improvement loop · Iterative computation as a unifying view · A task-centric theory · Interestingness / novelty  ·  🔧 `$rsi-classifier`
2. **Lecture 2 — Self-Generated Data & Self-Play (and the Collapse Problem)** — Self-play loop · Model collapse · Self-play ≈ adversarial imitation  ·  🔧 `$collapse-monitor`
3. **Lecture 3 — Test-Time Self-Improvement & Inference-Time Scaling** — Compute-as-teacher · Test-time self-distillation · Reusable test-time computation · Fast tree-search self-improvement  ·  🔧 `$test-time-improver`
4. **Lecture 4 — Agentic Memory & Lifelong/Continual Learning** — Meta-learned memory designs · Agentic context engineering · Continual learning without forgetting · Real-time procedural learning from experience  ·  🔧 `$memory-evolver`
5. **Lecture 5 — Verifiers, Rewards & the Reward-Hacking Problem** — Verifiers > solvers as a bottleneck · Self-evolving, interpretable rubrics · Reward hacking in self-improving code agents · Self-improving VLM judges without human labels  ·  🔧 `$verifier-auditor`
6. **Lecture 6 — Self-Evolving Coding Agents** — Adversarial self-generated unit tests + preference optimization · Repository context files (AGENTS.md) · Sobering baseline: · Deep agentic reasoning systems  ·  🔧 `$code-harness-synth`
7. **Lecture 7 — Automated AI Research & Scientific Discovery ("AI Scientists")** — Can agents automate post-training? · Discovery limits: · Evolutionary optimization by LLMs  ·  🔧 `$research-loop`
8. **Lecture 8 — Open-Ended Discovery & Evolutionary Self-Improvement** — Learning to evolve / relative-progress RL · Feedback Descent · Prompt optimization & translation across foundation models  ·  🔧 `$open-ended-evolver`
9. **Lecture 9 — Self-Improving Reasoning: Curricula at the Edge of Learnability** — Teaching models to teach themselves · Process rewards & multi-agent scaling · Shared decision pivots · GRPO-guided controllers for hyperparameter sweeps  ·  🔧 `$learnability-curriculum`
10. **Lecture 10 — Tiny Recursive Models & Iterative Architectures** — Tiny autoregressive recursive models · Generative recursive reasoning models · Depth vs recursion  ·  🔧 `$recursion-profiler`
11. **Lecture 11 — Multimodal, World-Model & Embodied Self-Improvement** — Self-improving world models · Self-improving VLA with data generation via residual RL · Residual off-policy RL  ·  🔧 `$embodied-self-improver`
12. **Lecture 12 — Benchmarks & Evidence: Proving a System Actually Self-Improved** — PostTrainBench · Verifying the verifiers  ·  🔧 `$rsi-evidence-audit`
13. **Lecture 13 — Safety, Unlearning & Governance of Self-Improving Systems** — Tamper / fine-tuning robustness · Reward hacking · Machine unlearning · Bias amplification  ·  🔧 `$rsi-safety-case`

---

## Assessment & grading

| Component | Weight | Notes |
|---|---|---|
| Weekly paper-to-code labs (W1–W13) | 39% | 3% each × 13 |
| Two reading-response sets + lead one seminar | 16% | structured critiques w/ the five lenses |
| Mid-term: reproduce one workshop paper's core claim | 15% | + a failure-mode analysis |
| Capstone: `Agent0-Loop` self-improving system + safety case | 30% | held-out improvement evidence required |
| **Total** | **100%** | |

## Tooling & environment (June 2026)

- **Python 3.12**, **PyTorch 2.x**, **Hugging Face Transformers/Datasets/TRL**, **veRL / OpenRLHF**, **vLLM** (rollouts),
  **Ray** (distributed), **DSPy** (program optimization), **LangGraph** (agent loops), **Inspect AI / DeepEval** (evals),
  **Weights & Biases** (tracking). Small open models (**Qwen 3, Llama 4, DeepSeek-R1-distill**, Pythia) for affordable loops.
- Verifiable-reward tasks: **GSM8K, MATH, SWE-bench Verified, tau-bench**, plus workshop benchmarks (**PostTrainBench, TangramSR, ESDAE, TamperBench**).

---

## Week 1 — Foundations: The Five Lenses, Taxonomy & Theory of RSI

**Altitude:** Specialist · **Anchor:** scaffold `Agent0-Loop` as an empty improve→verify→distill loop.

### Learning goals
- Define RSI precisely and classify any paper by the five lenses.
- State the easy-to-hard / weak-to-strong improvement intuition and where the loop can *stall* or *collapse*.
- Distinguish genuine self-improvement from self-graded inflation.

### Concept map
- **The self-improvement loop.** *Formula (schematic):* `θ_{t+1} = U(θ_t, D_t)` where `D_t = G(θ_t)` is data the
  model generates for itself and `U` is an update (SFT/RL/context-edit). *Plain English:* the model writes its own
  homework and grades part of it. *Common mistake:* letting `G` and the grader be the same ungrounded model → drift.
- **Iterative computation as a unifying view** — growing vs looping depth (#12, #91).
- **A task-centric theory** of when easy-to-hard curricula provably help (#76).
- **Interestingness / novelty** as an inductive driver of open-ended progress (#23).

### Hands-on build
- Stand up `Agent0-Loop` skeleton: `generate_tasks → solve(tool-integrated) → verify → select → update`, all as stubs
  with logging. Run it as a no-op and confirm the evidence log records every stage.
- **Deliverable:** the loop skeleton + a one-page "five-lens classification" of 5 chosen workshop papers.

### Harness / reusable skill — `$rsi-classifier`
- **Purpose:** classify any RSI method by the five lenses + name its collapse risk.
- **Inputs:** a paper/system. **Outputs:** {change target, temporal regime, mechanism, context, evidence} + one failure mode.
- **Evidence artifact:** `evidence/w01-five-lens.md`.

### Common failure modes
- **Self-grading inflation** (no held-out evidence) · **definition creep** (calling any fine-tune "RSI") ·
  **loop with no driver** (nothing actually compounds). *Fixes:* require independent evidence; insist on a feedback path; name the driver.

### Dataset
- A 10-paper sample from the RSI workshop (titles provided in class) for classification; no training data yet.

### Code stub
```python
class RSILoop:
    def step(self, theta, env):
        tasks  = self.generate(theta, env)        # G: self-generated curriculum
        trajs  = [self.solve(theta, t) for t in tasks]
        scored = [(tr, self.verify(tr)) for tr in trajs]   # independent verifier!
        keep   = [tr for tr, ok in scored if ok]
        return self.update(theta, keep), self.metrics(scored)   # log held-out metric separately
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Lens fluency | classifies all 5 papers correctly | misapplies lenses |
| Loop hygiene | verifier independent of generator | self-graded loop |
| Evidence design | names a held-out measure | metric == training signal |

### Assessment weight
3%.

### Readings (ICLR 2026 RSI Workshop)
- "A Task-Centric Theory for Iterative Self-Improvement with Easy-to-Hard Curricula" (#76, Poster).
- "From Growing to Looping: A Unified View of Iterative Computation in LLMs" (#12, Spotlight).
- "Interestingness as an Inductive Heuristic for Future Compression Progress" (#23, Spotlight).
- Workshop summary (organizers, OpenReview 2026) — the five-lens framing.

---

## Week 2 — Self-Generated Data & Self-Play (and the Collapse Problem)

**Anchor:** add self-play task generation to `Agent0-Loop`; watch for model collapse.

### Learning goals
- Implement language self-play / asymmetric self-play to manufacture a curriculum without human data.
- Explain why naive self-training collapses and what verification/diversity fixes it.
- Connect self-play to adversarial imitation learning.

### Concept map
- **Self-play loop.** Plain English: a proposer invents tasks, a solver attempts them, both improve. *Common mistake:*
  proposer and solver collude → trivial tasks.
- **Model collapse** under synthetic data, and **synthetic-data verification** as the escape (#37).
- **Self-play ≈ adversarial imitation** — a lens that explains stability (#53).
- Asymmetric / guided / anchored variants (#24 GASP, #22 Anchored, #82 SAGE, #5 Language Self-Play, #86 Duel-Evolve).

### Hands-on build
- Implement a proposer/solver self-play loop on a small reasoning task; add a diversity/verification filter; plot quality
  with vs without the filter to demonstrate collapse.
- **Deliverable:** two runs (collapse vs verified) + a short note on what stabilized it.

### Harness / reusable skill — `$collapse-monitor`
- **Purpose:** detect self-training collapse early (diversity, verifier pass-rate, eval drift). **Evidence:** collapse dashboard.

### Common failure modes
- **Proposer/solver collusion** · **diversity collapse** · **verifier-free self-training**. *Fixes:* asymmetry, novelty bonus, independent verifier.

### Dataset
- GSM8K (openai/gsm8k, ~8.5k, MIT) as the seed task distribution; self-play generates the rest.

### Code stub
```python
def self_play_round(proposer, solver, verify, n=256, min_div=0.3):
    tasks = proposer.sample(n)
    tasks = dedup_by_embedding(tasks, min_div)      # anti-collapse: enforce diversity
    data  = [(t, sol) for t in tasks if verify(t, (sol := solver.solve(t)))]
    return data                                      # only verified pairs feed the update
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Stability | verified run avoids collapse, shown | collapse unaddressed |
| Analysis | links result to adversarial-imitation view | no mechanism story |

### Assessment weight
3%.

### Readings
- "Language Self-Play For Data-Free Training" (#5, Spotlight); "GASP: Guided Asymmetric Self-Play for Coding LLMs" (#24, Spotlight);
  "Your Self-Play Algorithm is Secretly an Adversarial Imitator" (#53, Poster);
  "Escaping Model Collapse via Synthetic Data Verification" (#37, Poster); "SAGE: Self-play Adversarial Games Enhance LLM Reasoning" (#82, Poster).

---

## Week 3 — Test-Time Self-Improvement & Inference-Time Scaling

**Anchor:** make `Agent0-Loop` improve *within a single episode* (no weight updates).

### Learning goals
- Distinguish train-time vs **test-time** adaptation (the temporal-regime lens).
- Implement test-time self-distillation and adaptive decoding/curricula.
- Turn extra inference compute into supervision.

### Concept map
- **Compute-as-teacher.** Plain English: spend more inference to produce a reference the model then learns from (#50).
- **Test-time self-distillation** (#20) and **adaptive decoding via test-time policy learning** (#77).
- **Reusable test-time computation** — caching reasoning (#84 Log-Augmented Generation, #55 Reasoning Cache).
- **Fast tree-search self-improvement** (#97) and many-shot test-time adaptation limits (#103).

### Hands-on build
- Add a test-time loop: sample-many → verify → self-distill the best trace into the model's context/short adapter; measure
  pass@1 lift on held-out items vs compute spent.
- **Deliverable:** an accuracy-vs-inference-compute curve + the reusable reasoning cache.

### Harness / reusable skill — `$test-time-improver`
- **Purpose:** wrap any model with verify-then-self-distill at inference; report held-out lift per compute unit. **Evidence:** the curve.

### Common failure modes
- **Compute with no verifier** (amplifies confident errors) · **train/test leakage via cache** · **cost ignored**. *Fixes:* independent verify, time-aware cache keys, plot the cost axis.

### Dataset
- MATH (hendrycks/competition_math, ~12.5k, MIT) and AIME-style items.

### Code stub
```python
def compute_as_teacher(model, x, k=16, verify=None):
    cands = [model.generate(x, temperature=0.8) for _ in range(k)]
    best  = max((c for c in cands if verify(x, c)), key=score, default=None)
    return best                                      # reference-free supervision for self-distillation
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Held-out lift | improves test pass@1, not just train | gains vanish on held-out |
| Compute honesty | plots accuracy vs compute | reports only best-of-k |

### Assessment weight
3%.

### Readings
- "Compute as Teacher: Turning Inference Compute Into Reference-Free Supervision" (#50, Poster);
  "Test-Time Self-Distillation" (#20, Spotlight); "Adaptive Decoding via Test-Time Policy Learning" (#77, Poster);
  "Log-Augmented Generation: Scaling Test-Time Reasoning with Reusable Computation" (#84, Poster);
  "Self-Improvement via Fast Tree-search" (#97, Poster).

---

## Week 4 — Agentic Memory & Lifelong/Continual Learning

**Anchor:** give `Agent0-Loop` a persistent memory that improves its own retrieval/use over time.

### Learning goals
- Design agent memory that is *learned and self-improving*, not just a vector store.
- Mitigate catastrophic forgetting during continual self-improvement.
- Treat "context" as an optimizable object (context engineering).

### Concept map
- **Meta-learned memory designs** (#3) and efficient lifelong memory (#6 SimpleMem).
- **Agentic context engineering** — the context itself evolves (#71); in-context adaptation (#94).
- **Continual learning without forgetting** — orthogonal gradient projection (#110), injecting RL skills for continual adaptation (#8).
- **Real-time procedural learning from experience** (#101) and curriculum curation for test-time learning (#60).

### Hands-on build
- Add a memory module that writes verified solution "skills," retrieves them, and periodically self-distills/compresses them;
  measure forward transfer and forgetting across a task sequence.
- **Deliverable:** transfer/forgetting curves + a memory-growth audit.

### Harness / reusable skill — `$memory-evolver`
- **Purpose:** manage a self-improving skill memory (write/retrieve/compress/forget) with a forgetting check. **Evidence:** the curves.

### Common failure modes
- **Unbounded memory growth** · **forgetting under updates** · **stale skills**. *Fixes:* compression, orthogonal-projection updates, recency/utility eviction.

### Dataset
- A constructed task stream (mix of GSM8K + tau-bench tools) for continual eval.

### Code stub
```python
class EvolvingMemory:
    def write(self, skill): self.store.add(embed(skill), skill)         # only verified skills
    def retrieve(self, q, k=5): return self.store.search(embed(q), k)
    def consolidate(self): self.store = distill(self.store)             # compress; combat bloat
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Forward transfer | new tasks solved faster | no transfer |
| Forgetting | bounded, measured | silent catastrophic forgetting |

### Assessment weight
3%.

### Readings
- "Learning to Continually Learn via Meta-learning Agentic Memory Designs" (#3, Oral); "SimpleMem: Efficient Lifelong Memory for LLM Agents" (#6, Spotlight);
  "Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models" (#71, Poster);
  "Orthogonal Gradient Projection for Continual LLM Unlearning" (#110, Short); "Real-Time Procedural Learning From Experience for AI Agents" (#101, Short).

---

## Week 5 — Verifiers, Rewards & the Reward-Hacking Problem

**Anchor:** replace `Agent0-Loop`'s placeholder verifier with a *trained, audited* one — and try to break it.

### Learning goals
- Build verifiers/judges that are reliable enough to drive self-improvement.
- Detect and prevent reward hacking and judge-gaming.
- Treat "verifying the verifier" as a first-class step.

### Concept map
- **Verifiers > solvers as a bottleneck** — "Beyond Solving: LLMs as Solution Verifiers" (#61).
- **Self-evolving, interpretable rubrics** as instance-level rewards (#21).
- **Reward hacking in self-improving code agents** (#58) and **verifying the verifiers** for agentic benchmarks (#99).
- **Self-improving VLM judges without human labels** (#85); safeguarded high-order objectives (#95 SAHOO).

### Hands-on build
- Train a small verifier; run the loop; then *red-team* it — find inputs where the agent inflates its own reward; add a
  cross-check (second verifier / execution grounding) and re-measure held-out gains.
- **Deliverable:** a reward-hacking incident report + the hardened verifier.

### Harness / reusable skill — `$verifier-auditor`
- **Purpose:** stress-test a reward/judge for gaming; report exploits + the held-out impact. **Evidence:** the incident report.

### Common failure modes
- **Single-verifier trust** · **goodhart on the proxy** · **judge trained on the agent's own outputs**. *Fixes:* execution grounding, verifier ensembles/independence, periodic human spot-checks.

### Dataset
- SWE-bench Verified (princeton-nlp/SWE-bench_Verified) for executable reward; a judged-QA set for the LLM-judge case.

### Code stub
```python
def verified_reward(traj, verifiers):                 # require agreement / execution grounding
    votes = [v(traj) for v in verifiers]
    return all(votes), votes                           # disagreement => quarantine, do NOT train on it
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Exploit finding | demonstrates a real hack + fix | claims "no hacks," untested |
| Held-out gain | improvement survives independent eval | gain was the hack |

### Assessment weight
3%.

### Readings
- "Beyond Solving: A Closer Look at LLMs as Solution Verifiers" (#61, Poster); "Self-Evolving Rubrics" (#21, Spotlight);
  "Reward Hacking in Self-Improving Code Agents" (#58, Poster); "Verifying the Verifiers: Failure Attribution for Agentic Benchmark Diagnostics" (#99, Poster);
  "SAHOO: Safeguarded Alignment for High-Order Optimization Objectives in Recursive Self-Improvement" (#95, Poster).

---

## Week 6 — Self-Evolving Coding Agents

**Anchor:** specialize `Agent0-Loop` into a code agent that writes its own tests and harnesses.

### Learning goals
- Build coding agents that improve via self-generated tests, harnesses, and preference optimization.
- Weigh code-evolution against strong simple baselines.
- Use repository context files and auto-synthesized harnesses.

### Concept map
- **Adversarial self-generated unit tests + preference optimization** (#15 ACE); **auto-synthesized code harnesses** (#68 AUTOHARNESS).
- **Repository context files (AGENTS.md)** — do they help? (#49) and structured iterative refinement (#74, #79).
- **Sobering baseline:** "Simple Baselines are Competitive with Code Evolution" (#40) — the anti-hype check.
- **Deep agentic reasoning systems** (#65 AlphaApollo); anchored self-play for code repair (#22).

### Hands-on build
- Code agent loop: generate feature → synthesize tests/harness → self-improve via pass/fail preference → evaluate on
  SWE-bench Verified; compare against a simple ReAct baseline (per #40) to keep yourself honest.
- **Deliverable:** SWE-bench Verified score curve + baseline comparison + a failure taxonomy.

### Harness / reusable skill — `$code-harness-synth`
- **Purpose:** auto-build a test/eval harness for a coding task so improvement is grounded in execution. **Evidence:** the harness + scores.

### Common failure modes
- **Test-gaming** (agent writes tests it trivially passes) · **beating no baseline** · **overfitting to one repo**. *Fixes:* held-out tests, mandatory simple baseline, multi-repo eval.

### Dataset
- SWE-bench Verified (500 tasks) + a small internal repo set.

### Code stub
```python
def code_self_improve(agent, task, rounds=3):
    harness = synth_harness(task)                      # AUTOHARNESS-style executable check
    best = None
    for _ in range(rounds):
        cand = agent.write(task, feedback=harness.report(best))
        if harness.run(cand).passed: best = cand        # execution-grounded preference
    return best
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Grounding | execution-verified gains | self-reported pass only |
| Honesty | beats a real baseline | no baseline / test-gamed |

### Assessment weight
3%.

### Readings
- "ACE: Self-Evolving LLM Coding Framework via Adversarial Unit Test Generation and Preference Optimization" (#15, Spotlight);
  "AUTOHARNESS: Improving LLM Agents by Automatically Synthesizing a Code Harness" (#68, Poster);
  "Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?" (#49, Poster);
  "Simple Baselines are Competitive with Code Evolution" (#40, Poster); "AlphaApollo: A System for Deep Agentic Reasoning" (#65, Poster).

---

## Week 7 — Automated AI Research & Scientific Discovery ("AI Scientists")

**Anchor:** point `Agent0-Loop` at an ML research micro-task (improve a small model's training).

### Learning goals
- Build agents that automate parts of ML research/post-training and judge whether they truly discover.
- Use execution-grounded research loops; recognize the discovery→application gap.
- Apply LLMs as evolutionary optimizers over algorithms/features.

### Concept map
- **Can agents automate post-training?** PostTrainBench (#4) and execution-grounded automated AI research (#7).
- **Discovery limits:** "Can Language Models Discover Scaling Laws?" (#9); "Can Current LMs Close the Discovery-to-Application Loop?" (#16).
- **Evolutionary optimization by LLMs** — OMEGA (#29), LLM-FE feature engineering (#38), CausalEvolve (#17), Reasoning-as-Gradient MLE agents (#47).
- Self-adapting agents for research coding workflows (#98).

### Hands-on build
- An agent that proposes + runs small training-config experiments, reads results, and iterates (execution-grounded); report
  whether it found a real improvement vs got lucky, with the discovery→application gap analysis.
- **Deliverable:** an automated-experiment log + an honest "did it discover?" writeup.

### Harness / reusable skill — `$research-loop`
- **Purpose:** run propose→execute→read→iterate research cycles with logged, reproducible evidence. **Evidence:** the experiment log.

### Common failure modes
- **Cherry-picked discovery** · **non-reproducible runs** · **discovery that doesn't transfer to application**. *Fixes:* pre-register the metric, seed/repeat, test transfer.

### Dataset
- PostTrainBench tasks (workshop) + a tiny Pythia/Qwen fine-tuning sandbox.

### Code stub
```python
def research_step(agent, sandbox):
    hypo = agent.propose(sandbox.history)              # e.g., "raise LR warmup"
    result = sandbox.run(hypo.config)                  # EXECUTION-grounded, seeded
    agent.observe(hypo, result)                        # update only on reproduced wins
    return result
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Reproducibility | seeded, repeated, logged | one-off lucky run |
| Discovery honesty | analyzes transfer gap | claims discovery naively |

### Assessment weight
3%.

### Readings
- "PostTrainBench: Can LLM Agents Automate LLM Post-Training?" (#4, Oral); "Towards Execution-Grounded Automated AI Research" (#7, Spotlight);
  "Can Language Models Discover Scaling Laws?" (#9, Spotlight); "Can Current Language Models Close the Discovery to Application Loop?" (#16, Spotlight);
  "OMEGA: Optimizing Machine learning by Evaluating Generated Algorithms" (#29, Poster).

---

## Week 8 — Open-Ended Discovery & Evolutionary Self-Improvement

**Anchor:** add an open-ended novelty driver to `Agent0-Loop` (interestingness-seeking).

### Learning goals
- Implement open-ended search where the objective itself evolves (relative-progress / interestingness).
- Optimize in language space via pairwise comparison (no gradients).
- Apply evolutionary RSI to scientific/engineering design.

### Concept map
- **Learning to evolve / relative-progress RL** for open-ended discovery (#73).
- **Feedback Descent** — open-ended text optimization via pairwise comparison (#88); TextBO Bayesian optimization in language space (#44).
- **Prompt optimization & translation across foundation models** (#36).
- Domain evolution: protein optimization (#75), circuit synthesis via RL (#89).

### Hands-on build
- An evolutionary loop over prompts/programs driven by pairwise "which is more interesting/better" feedback; track an
  open-ended novelty metric; show qualitative emergence.
- **Deliverable:** an evolution trajectory + novelty/quality plots.

### Harness / reusable skill — `$open-ended-evolver`
- **Purpose:** run population-based, novelty-driven optimization in language/program space. **Evidence:** the trajectory.

### Common failure modes
- **Novelty without quality** · **objective collapse** · **reward over-optimization**. *Fixes:* quality+novelty Pareto, archive-based diversity, early stop on goodhart.

### Dataset
- A program/prompt search task (e.g., GSM8K prompt evolution) + an optional protein/circuit toy benchmark.

### Code stub
```python
def evolve(pop, compare, mutate, gens=20):
    archive = list(pop)
    for _ in range(gens):
        a, b = sample_pair(pop)
        winner = a if compare(a, b) else b             # pairwise, gradient-free
        pop = select(pop + [mutate(winner)])           # keep novelty via archive distance
    return archive
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Open-endedness | sustained novelty + quality | converges/collapses early |
| Mechanism | clear driver named | "it just evolves" |

### Assessment weight
3%.

### Readings
- "Learning to Evolve: Scaling Open-Ended Discovery with Relative-Progress RL" (#73, Poster);
  "Feedback Descent: Open-Ended Text Optimization via Pairwise Comparison" (#88, Poster);
  "TextBO: Bayesian Optimization in Language Space for Eval-Efficient Self-Improving AI" (#44, Poster);
  "CausalEvolve: Towards Open-Ended Discovery with Causal Scratchpad" (#17, Spotlight);
  "A Framework for Prompt Optimization and Translation Across Foundation Models" (#36, Poster).

---

## Week 9 — Self-Improving Reasoning: Curricula at the Edge of Learnability

**Anchor:** add an automatic difficulty-curriculum to `Agent0-Loop`'s self-generated tasks.

### Learning goals
- Build curricula that target the model's zone of proximal development ("edge of learnability").
- Use process rewards and shared reasoning structure to improve reasoning.
- Tune the loop's own hyperparameters with RL controllers.

### Concept map
- **Teaching models to teach themselves** at the edge of learnability (#48) + easy-to-hard theory (#76).
- **Process rewards & multi-agent scaling** (#80 MAPPA); **Actor-Curator** policy-driven curricula (#57).
- **Shared decision pivots** in correct reasoning paths (#31); shape-of-thought distributional effects (#46).
- **GRPO-guided controllers for hyperparameter sweeps** (#100) — the loop optimizing its own knobs.

### Hands-on build
- Add a curriculum scheduler that estimates per-task learnability and samples near the frontier; compare learning speed vs
  random/curriculum-free; add a GRPO controller for one hyperparameter.
- **Deliverable:** learning-speed curves (frontier vs random) + the controller's chosen schedule.

### Harness / reusable skill — `$learnability-curriculum`
- **Purpose:** order self-generated tasks by estimated learnability and adapt online. **Evidence:** the curves.

### Common failure modes
- **Too-easy/too-hard sampling** · **curriculum overfitting** · **unstable controller**. *Fixes:* frontier targeting, held-out difficulty, conservative controller updates.

### Dataset
- MATH with difficulty labels + a synthetic graded task family.

### Code stub
```python
def frontier_sample(tasks, model, lo=0.3, hi=0.7):
    p = {t: est_pass_rate(model, t) for t in tasks}    # learnability ~ mid pass-rate
    return [t for t, r in p.items() if lo <= r <= hi]   # edge of learnability
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Sample efficiency | frontier beats random, shown | no speedup |
| Stability | controller converges | diverges/oscillates |

### Assessment weight
3%.

### Readings
- "Teaching Models to Teach Themselves: Reasoning at the Edge of Learnability" (#48, Poster);
  "Actor-Curator: Scalable Policy-driven Curriculum Learning for RL Post-Training" (#57, Poster);
  "MAPPA: Scaling Multiagent Systems with Process Rewards" (#80, Poster);
  "Correct Reasoning Paths Visit Shared Decision Pivots" (#31, Poster);
  "Just Enough Learning: GRPO-Guided Controllers for Hyperparameter Sweeps" (#100, Poster).

---

## Week 10 — Tiny Recursive Models & Iterative Architectures

**Anchor:** swap a tiny recursive model into `Agent0-Loop` to study recursion-as-architecture.

### Learning goals
- Distinguish recursion (reusing depth) from growing depth, and when each wins.
- Implement a tiny recursive/looped model and unrolled policy iteration.
- Diagnose the "curse of depth."

### Concept map
- **Tiny autoregressive recursive models** (#11) and unrolled policy iteration for them (#54).
- **Generative recursive reasoning models** (#90); emergent temporal abstractions enabling hierarchy (#91).
- **Depth vs recursion** trade-offs (#105); the **curse of depth** and depth-grown models (#63).

### Hands-on build
- Train a small looped/recursive model on an algorithmic task (e.g., jigsaw/sorting); compare to a same-parameter deep
  transformer; measure compute-matched accuracy.
- **Deliverable:** depth-vs-recursion comparison + a compute-matched plot.

### Harness / reusable skill — `$recursion-profiler`
- **Purpose:** compare looped vs deep models at matched compute/params on reasoning tasks. **Evidence:** the plot.

### Common failure modes
- **Unfair compute comparison** · **vanishing signal in deep stacks** · **overfitting tiny tasks**. *Fixes:* compute-match, residual/norm care, multiple task sizes.

### Dataset
- A synthetic algorithmic suite (jigsaw reconstruction per #105, sorting, parity).

### Code stub
```python
class TinyRecursive(nn.Module):
    def forward(self, x, steps=8):
        h = self.embed(x)
        for _ in range(steps):                          # reuse the SAME block (recursion)
            h = self.block(h)
        return self.head(h)
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Fair comparison | compute/param matched | apples-to-oranges |
| Insight | explains when recursion wins | reports numbers only |

### Assessment weight
3%.

### Readings
- "Tiny Autoregressive Recursive Models" (#11, Spotlight); "Unrolled Policy Iteration for Tiny Recursive Models" (#54, Poster);
  "Generative Recursive Reasoning Models" (#90, Poster); "Depth vs Recursion: Outperforming Transformers in Jigsaw Reconstruction" (#105, Short);
  "Do Depth-Grown Models Overcome the Curse of Depth?" (#63, Poster).

---

## Week 11 — Multimodal, World-Model & Embodied Self-Improvement

**Anchor:** extend the loop to a vision-language-action (VLA) setting with a self-improving world model.

### Learning goals
- Build self-improving world models and VLA policies that generate their own training data.
- Apply residual RL to fine-tune behavior-cloned policies.
- Connect embodied self-improvement to sim-to-real and safety.

### Concept map
- **Self-improving world models** via asymmetric forward-inverse consistency (#10); VLAW co-improvement of policy + world model (#19).
- **Self-improving VLA with data generation via residual RL** (#18); RFTF temporal feedback for VLA (#32); Agent0-VL (#28).
- **Residual off-policy RL** to finetune BC policies (#81); MimicAgent text-to-trajectory quadruped skills (#87); self-directed robot manipulation (#30).
- Multimodal reasoning in latent space (#66) and attention-guided image warping (#59).

### Hands-on build
- In a sim environment, run a loop where the policy generates trajectories, a learned world model scores/relabels them, and
  residual RL improves the policy; measure success-rate lift and check for unsafe behaviors.
- **Deliverable:** success-rate curve + a sim-to-real / safety caveat note.

### Harness / reusable skill — `$embodied-self-improver`
- **Purpose:** run a policy↔world-model co-improvement loop with safety logging. **Evidence:** the curve + caveat note.

### Common failure modes
- **World-model exploitation** (policy games an inaccurate model) · **sim-to-real gap denial** · **unsafe emergent behavior**. *Fixes:* ground with real rollouts, model-uncertainty gating, safety monitors.

### Dataset
- A MuJoCo/Gymnasium-Robotics or MetaDrive task; optional LIBERO-style VLA benchmark.

### Code stub
```python
def vla_self_improve(policy, world_model, env, rounds=5):
    for _ in range(rounds):
        trajs = collect(policy, env)
        relabeled = world_model.relabel(trajs)          # generate extra supervision
        policy = residual_rl_update(policy, relabeled)   # residual on top of BC
        world_model = world_model.fit(trajs)            # co-improve; watch for exploitation
    return policy
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Grounding | real rollouts check the world model | model-only gains |
| Safety | unsafe behaviors monitored | none considered |

### Assessment weight
3%.

### Readings
- "Self-Improving World Models via Asymmetric Forward-Inverse Consistency" (#10, Spotlight);
  "Self-Improving Vision-Language-Action Models with Data Generation via Residual RL" (#18, Spotlight);
  "VLAW: Iterative Co-Improvement of Vision-Language-Action Policy and World Model" (#19, Spotlight);
  "RFTF: Reinforcement Fine-tuning for VLA Models with Temporal Feedback" (#32, Poster);
  "Residual Off-Policy RL for Finetuning Behavior Cloning Policies" (#81, Poster).

---

## Week 12 — Benchmarks & Evidence: Proving a System Actually Self-Improved

**Anchor:** build the held-out evaluation harness that the whole course's claims must pass.

### Learning goals
- Design evaluations that isolate *genuine* recursive improvement from metric-gaming and data leakage.
- Use RSI-specific benchmarks and failure-attribution tooling.
- Generate trustworthy synthetic data for agent evaluation.

### Concept map
- **PostTrainBench** (#4) and **TangramSR** recursive geometric-reasoning benchmark (#34).
- **Verifying the verifiers** / failure attribution (#99); **ESDAE** evaluating synthetic data for agent evaluation (#56).
- The **evidence-of-improvement lens**: held-out tasks, time-separated splits, independent verifiers, ablating the loop.

### Hands-on build
- Build an evaluation harness with: a frozen held-out set, a leakage audit, an independent verifier, and a "loop-off"
  ablation; re-score your `Agent0-Loop` and report which earlier weekly gains survive.
- **Deliverable:** an RSI evidence report (which mechanisms truly helped, which were artifacts).

### Harness / reusable skill — `$rsi-evidence-audit`
- **Purpose:** certify a self-improvement claim against leakage, gaming, and ablation. **Evidence:** the evidence report.

### Common failure modes
- **Self-graded gains** · **train/eval leakage** · **no ablation** (can't attribute improvement). *Fixes:* frozen held-out, leakage audit, loop-off baseline.

### Dataset
- PostTrainBench + TangramSR + your frozen held-out splits from earlier weeks.

### Code stub
```python
def rsi_evidence(system, frozen_eval):
    on  = score(system.with_loop(),  frozen_eval)
    off = score(system.loop_off(),   frozen_eval)       # ablation = attribution
    leak = leakage_audit(system.train_data, frozen_eval)
    return {"delta": on - off, "leakage": leak}         # delta>0 AND leak==0 => real
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Attribution | loop-off ablation isolates the gain | no ablation |
| Integrity | leakage audited, held-out frozen | leaked/self-graded |

### Assessment weight
3%.

### Readings
- "PostTrainBench" (#4, Oral); "TangramSR: A Benchmark for Recursive Self-Improvement in Continuous Geometric Reasoning" (#34, Poster);
  "ESDAE: Evaluating Synthetic Data for Agent Evaluation" (#56, Poster); "Verifying the Verifiers" (#99, Poster).

---

## Week 13 — Safety, Unlearning & Governance of Self-Improving Systems

**Anchor:** wrap `Agent0-Loop` in a safety case before it is allowed to "ship."

### Learning goals
- Identify the distinctive risks of self-improving systems (reward hacking, tampering, takeoff dynamics, unlearning failures).
- Apply safeguarded optimization, tamper-resistance, and machine unlearning.
- Write a responsible-scaling-style safety case for an RSI system.

### Concept map
- **Tamper / fine-tuning robustness** — TamperBench (#108); **safeguarded high-order objectives** SAHOO (#95).
- **Reward hacking** in self-improving agents (#58) — the central RSI safety failure.
- **Machine unlearning** for RSI — key-deletion designs (#41), reference-guided unlearning (#102), continual unlearning via orthogonal projection (#110).
- **Bias amplification** under self-improvement (#62) and governance: EU AI Act phases, NIST AI RMF, responsible scaling, CoT monitoring (from Subject 14).

### Hands-on build
- Run a safety battery on your system: attempt a tamper/jailbreak (TamperBench-style), attempt reward-hacking, test an
  unlearning request; add mitigations; write a 2-page safety case with residual-risk statement.
- **Deliverable:** the safety case + a red-team→mitigation log.

### Harness / reusable skill — `$rsi-safety-case`
- **Purpose:** assemble a safety case for a self-improving system (threats, tests, mitigations, residual risk, kill-switch). **Evidence:** the safety case.

### Common failure modes
- **Capability-first, safety-bolted-on** · **no kill-switch / rollback** · **unlearning that doesn't actually forget**. *Fixes:* safety gates in the loop, audited rollback, verified unlearning.

### Dataset
- TamperBench (workshop) + a small unlearning request set + a bias probe set.

### Code stub
```python
def safety_gate(update, checks):                        # block the self-update unless it passes
    report = {name: chk(update) for name, chk in checks.items()}  # tamper, reward-hack, bias, unlearn
    return all(report.values()), report                  # fail-closed; log everything
```

### Grading rubric
| Criterion | Excellent | Failing |
|---|---|---|
| Threat coverage | tamper+hack+unlearn+bias tested | partial/none |
| Mitigation | fail-closed gate + kill-switch | no containment |
| Governance | maps to AI Act/NIST, residual risk stated | no governance frame |

### Assessment weight
3%.

### Readings
- "TamperBench: A Systematic Framework to Stress-Test LLM Safety Under Fine-Tuning and Tampering" (#108, Short);
  "SAHOO: Safeguarded Alignment for High-Order Optimization Objectives in RSI" (#95, Poster);
  "Reward Hacking in Self-Improving Code Agents" (#58, Poster);
  "Rethinking Machine Unlearning: Models Designed to Forget via Key Deletion" (#41, Poster);
  "Aligned but Stereotypical? Understanding and Mitigating Social Bias in LLM-Driven Text-to-Image Models" (#62, Poster).

---

## Capstone — `Agent0-Loop`: A Self-Improving System With a Safety Case (30%)

Integrate the term into one working self-improving system that **provably** improves on a held-out measure, with a safety case.

**Milestones**
1. **Proposal & lens map** — pick a context (coding / reasoning / research / embodied), state the change target, mechanism,
   and the held-out evidence plan. *(acceptance: five-lens spec + frozen eval defined)*
2. **Loop v1** — self-generation + independent verifier + update; show a non-trivial held-out delta. *(acceptance: loop-off ablation)*
3. **Mechanism deep-dive** — add one advanced driver (self-play / test-time distillation / curriculum / evolution / memory). *(acceptance: ablated contribution)*
4. **Evidence audit** — leakage audit + verifier-of-verifier + benchmark on an RSI benchmark. *(acceptance: `$rsi-evidence-audit` passes)*
5. **Safety case** — tamper/reward-hack/unlearning tests + fail-closed gate + kill-switch + governance mapping. *(acceptance: `$rsi-safety-case`)*
6. **Showcase** — demo + report where every improvement claim links to held-out evidence. *(acceptance: no self-graded claims)*

**Capstone rubric**
| Criterion | Excellent | Adequate | Failing |
|---|---|---|---|
| Genuine improvement | held-out delta, ablated & leakage-free | held-out delta, weak ablation | self-graded only |
| Mechanism depth | a real RSI driver, analyzed | a driver, shallow analysis | superficial loop |
| Safety case | threats+mitigations+kill-switch+governance | partial | none |
| Evidence discipline | every claim → artifact | most claims | score-only |

**Example tracks:** self-evolving coding agent (SWE-bench Verified) · self-improving math reasoner (GRPO/MATH) ·
automated post-training researcher (PostTrainBench) · self-improving VLA in sim · open-ended discovery agent.

---

## Skills produced (reused program-wide)
`$rsi-classifier` · `$collapse-monitor` · `$test-time-improver` · `$memory-evolver` · `$verifier-auditor` ·
`$code-harness-synth` · `$research-loop` · `$open-ended-evolver` · `$learnability-curriculum` · `$recursion-profiler` ·
`$embodied-self-improver` · `$rsi-evidence-audit` · `$rsi-safety-case`

## Source
Built on the **ICLR 2026 Workshop on AI with Recursive Self-Improvement** (Rio de Janeiro, Apr 26 2026; 110 accepted papers)
and its five-lens framing, plus prerequisites from Subjects 03/06/07/13/14 of this program.
- Workshop: https://recursive-workshop.github.io/ · Accepted papers: https://recursive-workshop.github.io/papers.html
- Summary: https://openreview.net/pdf?id=OsPQ6zTQXV
