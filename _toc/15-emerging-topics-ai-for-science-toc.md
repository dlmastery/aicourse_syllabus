# Detailed Table of Contents — Subject 15 — Emerging Topics & AI for Science

_Source: `15-emerging-topics-ai-for-science.md` · **1 academic quarter · 3 lecture-hours/week · 13 weekly lectures (~39 contact hours)**_

### Lecture 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype
_3-hour block · 🔧 reusable skill: `$paper-triage`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Claim–evidence–gap |
| 00:30–01:00 | M2 | Reproducibility tiers |
| 01:00–01:30 | M3 | Benchmark contamination & gaming |
| 01:30–02:00 | M4 | The hype cycle |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run the $paper-triage skill on 3 candidate papers in your thread; pick one to reproduce; get its bas |

### Lecture 2 — Autonomous Research Agents: The "AI Scientist"
_3-hour block · 🔧 reusable skill: `$research-claim-audit`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | The research loop as an agent |
| 00:30–01:00 | M2 | Verification bottleneck |
| 01:00–01:30 | M3 | Novelty vs recombination |
| 01:30–02:00 | M4 | Automated reviewing & its biases |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run an AI-Scientist-style agent (or build a scoped one with the Claude Agent SDK) on a small ML task |

### Lecture 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL
_3-hour block · 🔧 reusable skill: `$scientific-repro`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Equivariance |
| 00:30–01:00 | M2 | MSA / evolutionary signal |
| 01:00–01:30 | M3 | Confidence (pLDDT/PAE) |
| 01:30–02:00 | M4 | Generalization limits |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run **ESMFold** (or OpenFold) on a handful of sequences; compare predicted structures to PDB ground  |

### Lecture 4 — AI for Science II: Molecules, Materials & Generative Design
_3-hour block · 🔧 reusable skill: `$discovery-validity-check`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Property prediction + screening |
| 00:30–01:00 | M2 | Generative proposal |
| 01:00–01:30 | M3 | Validation gap |
| 01:30–02:00 | M4 | Distribution shift / novelty |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run a property/stability screen on **Materials Project** (or a molecular generator like a junction-t |

### Lecture 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates
_3-hour block · 🔧 reusable skill: `$physics-validity`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Physics-informed loss |
| 00:30–01:00 | M2 | PINN vs neural operator |
| 01:00–01:30 | M3 | Training pathologies |
| 01:30–02:00 | M4 | Validation against the solver |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Implement a PINN for a 1D Burgers'/heat equation in PyTorch/deepxde; compare to a numerical solver;  |

### Lecture 6 — Emergence, Scaling & In-Context Learning
_3-hour block · 🔧 reusable skill: `$emergence-probe`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Scaling laws |
| 00:30–01:00 | M2 | Emergent abilities & the metric critique |
| 01:00–01:30 | M3 | In-context learning |
| 01:30–02:00 | M4 | Grokking |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Reproduce **grokking** on modular arithmetic (small transformer) *or* an emergence curve where you c |

### Lecture 7 — Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring
_3-hour block · 🔧 reusable skill: `$interp-evidence`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Superposition |
| 00:30–01:00 | M2 | Sparse autoencoders (SAEs) |
| 01:00–01:30 | M3 | Circuits & activation patching |
| 01:30–02:00 | M4 | CoT monitoring & faithfulness |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Use transformer-lens to find an induction head / a small circuit in a small model via activation pat |

### Lecture 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning
_3-hour block · 🔧 reusable skill: `$neurosymbolic-loop`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Why hybridize |
| 00:30–01:00 | M2 | LLM-as-program-generator + solver |
| 01:00–01:30 | M3 | Differentiable/relaxed logic |
| 01:30–02:00 | M4 | Verifiability |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Build an LLM+solver hybrid for a reasoning task (e.g., **ARC-AGI** subset via program search, or wor |

### Lecture 9 — World Models & Simulation for Reasoning and Control
_3-hour block · 🔧 reusable skill: `$sim-fidelity-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Planning in imagination |
| 00:30–01:00 | M2 | Model exploitation |
| 01:00–01:30 | M3 | Compounding error & horizon |
| 01:30–02:00 | M4 | Generative interactive environments (Genie) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run a Dreamer-style or tokenized world model on a control/Atari task; compare planning-in-imaginatio |

### Lecture 10 — Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier
_3-hour block · 🔧 reusable skill: `$frontier-tradeoff`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Synthetic data & self-improvement |
| 00:30–01:00 | M2 | Model collapse |
| 01:00–01:30 | M3 | State-space models (Mamba) |
| 01:30–02:00 | M4 | Hybrids |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | **Either** run a small **self-improvement** loop (generate→verify→filter→fine-tune) on a reasoning t |

### Lecture 11 — Theorem Proving, Autoformalization & the Societal-Impact Panel
_3-hour block · 🔧 reusable skill: `$verifiable-reasoning-eval`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Formal verification as ground truth |
| 00:30–01:00 | M2 | Autoformalization |
| 01:00–01:30 | M3 | LLM + search + RL (AlphaProof) |
| 01:30–02:00 | M4 | Governance frameworks |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | Run an LLM-driven proof search on a small Lean benchmark (**MiniF2F** via LeanDojo); report solve-ra |

### Lecture 12 — In-Class Hackathon: Build at the Frontier Under Pressure
_3-hour block · 🔧 reusable skill: `$frontier-sprint`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | A timed hackathon: ship a working frontier mini-build (e.g., an SAE feature steering demo, a flow-ma |

### Lecture 13 — Final Talks: Conference-Style Presentations & Defense
_3-hour block · 🔧 reusable skill: `$research-defense`_

| Time | Module | Content |
|------|--------|---------|
| 00:00–00:30 | M1 | Recap of prior lecture + this lecture's goals |
| 00:30–01:00 | M2 | Worked example on the anchor case |
| 01:00–01:30 | M3 | Guided discussion / Q&A |
| 01:30–02:00 | M4 | Critique & reflection (what would fail?) |
| 02:00–02:30 | Studio | Guided practice toward the lab; live debugging on the anchor case |
| 02:30–03:00 | Lab | **M4:** 12-minute conference talk + 8-minute defense; submit the short paper |

