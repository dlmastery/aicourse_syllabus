# Subject 15 — Emerging Topics & AI for Science

**Track:** Frontier / Research · **Altitude:** Specialist · **Length:** 13 weeks (seminar: 3h seminar + 3h research-lab/wk)
**Format:** a **graduate research seminar**, not a lecture course. Each week pairs an instructor frame with **student-led paper presentations**, a live experiment or reproduction, and a critique. The deliverable spine is a term-long **research-reproduction or novel mini-project** plus a polished seminar presentation.
**Prerequisites:** Subjects 01–12 (foundations → LLMs → agents → multimodal/generative). You can read a 2025 ML paper, reproduce a result, run an eval, and write a critique. This course assumes you can *learn from primary sources*, not tutorials.
**Pedagogy:** the book's *concept → code → critique → reflection → rebuild* loop applied to **frontier papers** — the unit of work is "read the claim → reproduce or stress-test it → say what's real and what's hype." Evidence over vibes is doubly enforced because frontier work is the most over-claimed.

**Course anchor (carried all term):** in Week 1 each student chooses a **research thread** (e.g., autonomous research agents, AlphaFold-style structure prediction, PINNs, SAEs/interpretability, SSMs, theorem proving, synthetic data). All term you (a) present its key papers, (b) reproduce one core result or build a novel mini-extension, and (c) defend it as a conference-style talk + short paper in the final weeks.

**What you leave with:** a `frontier/` repo with a reproduction/mini-project, a stack of paper critiques, a benchmark or ablation you ran yourself, a conference-style talk, and a short paper (4–6 pages) — evidence you can operate at the frontier and tell signal from hype.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 13 lectures (~39 contact hrs). Full time-boxed lecture plan: [`_toc/15-emerging-topics-ai-for-science-toc.md`](_toc/15-emerging-topics-ai-for-science-toc.md)._

1. **Lecture 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype** — Claim–evidence–gap · Reproducibility tiers · Benchmark contamination & gaming · The hype cycle  ·  🔧 `$paper-triage`
2. **Lecture 2 — Autonomous Research Agents: The "AI Scientist"** — The research loop as an agent · Verification bottleneck · Novelty vs recombination · Automated reviewing & its biases  ·  🔧 `$research-claim-audit`
3. **Lecture 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL** — Equivariance · MSA / evolutionary signal · Confidence (pLDDT/PAE) · Generalization limits  ·  🔧 `$scientific-repro`
4. **Lecture 4 — AI for Science II: Molecules, Materials & Generative Design** — Property prediction + screening · Generative proposal · Validation gap · Distribution shift / novelty  ·  🔧 `$discovery-validity-check`
5. **Lecture 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates** — Physics-informed loss · PINN vs neural operator · Training pathologies · Validation against the solver  ·  🔧 `$physics-validity`
6. **Lecture 6 — Emergence, Scaling & In-Context Learning** — Scaling laws · Emergent abilities & the metric critique · In-context learning · Grokking  ·  🔧 `$emergence-probe`
7. **Lecture 7 — Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring** — Superposition · Sparse autoencoders (SAEs) · Circuits & activation patching · CoT monitoring & faithfulness  ·  🔧 `$interp-evidence`
8. **Lecture 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning** — Why hybridize · LLM-as-program-generator + solver · Differentiable/relaxed logic · Verifiability  ·  🔧 `$neurosymbolic-loop`
9. **Lecture 9 — World Models & Simulation for Reasoning and Control** — Planning in imagination · Model exploitation · Compounding error & horizon · Generative interactive environments (Genie)  ·  🔧 `$sim-fidelity-eval`
10. **Lecture 10 — Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier** — Synthetic data & self-improvement · Model collapse · State-space models (Mamba) · Hybrids  ·  🔧 `$frontier-tradeoff`
11. **Lecture 11 — Theorem Proving, Autoformalization & the Societal-Impact Panel** — Formal verification as ground truth · Autoformalization · LLM + search + RL (AlphaProof) · Governance frameworks  ·  🔧 `$verifiable-reasoning-eval`
12. **Lecture 12 — In-Class Hackathon: Build at the Frontier Under Pressure**  ·  🔧 `$frontier-sprint`
13. **Lecture 13 — Final Talks: Conference-Style Presentations & Defense**  ·  🔧 `$research-defense`

---

## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly paper critiques + presentations (W2–W11) | 30% | Reading frontier work critically; ~3% per graded week |
| Reproduction / experiment milestones (W3, W6, W9) | 18% | You can actually reproduce/stress-test a frontier result (6% each) |
| In-class hackathon (W12) | 7% | Build something at the frontier under time pressure |
| Final research mini-project: short paper (W13) | 25% | A reproduction or novel contribution, written up honestly |
| Final conference-style talk + defense (W13) | 12% | Communicate and defend frontier work |
| Societal-impact panel + seminar participation (ongoing) | 8% | Engagement, including the W11 panel |

Weekly critique/presentation weights (the 30%): W2–W11 ≈ 3% each.

## Tooling & environment (June 2026)

- **Core:** Python 3.12, PyTorch 2.5, `uv`, JAX 0.4 (for PINNs/scientific labs), Weights & Biases, Jupyter.
- **Reproduction:** Hugging Face `transformers`/`datasets`/`diffusers`, `mamba-ssm`, `transformer-lens` (mech interp), `sae-lens`, DeepChem / `e3nn` (geometric/scientific), `deepxde` (PINNs).
- **Agents / theorem proving:** Claude Agent SDK + MCP, LangGraph; **Lean 4** + `LeanDojo`/`mathlib`, optionally Isabelle; Inspect AI for agent evals.
- **AI-for-Science tooling:** OpenFold / ESM (proteins), Materials Project API, `ase`/`pymatgen` (materials), `torchdiffeq`.
- **Compute:** seminar reproductions are sized for one 24 GB GPU or a small Modal/Colab budget; "hero" runs use released checkpoints, not from-scratch training. Where a paper's full scale is infeasible, you reproduce the *trend* (a scaled-down ablation) and say so explicitly.
- **Scholarship hygiene:** every claim cites a primary source; every reproduction reports seed, hardware, and the delta from the paper's number; "we could not reproduce X" is a valid, valued result.

## Final research mini-project spec (Weeks 12–13)

Produce **either** a faithful reproduction (with an ablation that goes beyond the paper) **or** a novel mini-contribution on your thread. Milestones:
- **M1 (W3):** thread chosen, 3-paper literature map, a reproducible baseline running.
- **M2 (W6):** core result reproduced (or a documented failure-to-reproduce) with seeds/hardware.
- **M3 (W9):** novel ablation / extension / stress-test with a result table.
- **M4 (W13):** 4–6 page short paper (related work, method, experiments, honest limitations) + a 12-minute conference talk defended to a panel.

**Acceptance checklist:** a primary-source literature map; a reproduced number with its delta from the paper; an ablation *you* ran; an explicit limitations section; a claim about what is real vs over-hyped in your thread; reproducible code (seed + environment pinned).

---

## Week 1 — Operating at the Frontier: Reading Papers, Choosing a Thread, Signal vs Hype

### State of the Art (June 2026)
- Reproducibility crisis + benchmark contamination are first-order concerns; the AI Index 2025 gives landscape context.
- Papers With Code + released checkpoints define reproducibility tiers; the 1M-context/MoE frontier inflates ‘SOTA’ churn.
- LLM-as-judge leaderboards need contamination + bias scrutiny (TrustJudge).

**Altitude:** Specialist · **Format:** 3h seminar + 3h lab
**Anchor case:** take one over-hyped 2025–2026 result and a sober follow-up that tempered it; learn to hold both.

### Learning goals
- Read a frontier ML paper for its *claim, evidence, and the gap between them* in under an hour.
- Distinguish a reproducible result, a cherry-picked result, and an unfalsifiable claim.
- Choose a research thread and assemble a 3-paper literature map.
- State the norms of this seminar: present, reproduce, critique, defend.

### Concept map
- **Claim–evidence–gap.** Plain English: every paper claims more than it shows; your job is the delta. Where it matters: frontier work has the widest delta. Common mistake: taking the abstract as the result.
- **Reproducibility tiers.** Plain English: released code+weights+data > code only > "results available on request" > none. Common mistake: citing an irreproducible claim as fact.
- **Benchmark contamination & gaming.** Plain English: test sets leak into training; numbers inflate. Where it matters: every "SOTA." Common mistake: trusting a leaderboard without asking about contamination.
- **The hype cycle.** Plain English: a splashy result, a wave of follow-ons, then sober corrections; read the corrections. Common mistake: stopping at the splash.

### Hands-on build (the lab)
- Run the `$paper-triage` skill on 3 candidate papers in your thread; pick one to reproduce; get its baseline running (or its checkpoint loading) end-to-end.
- Write a one-page literature map: claim, evidence, gap, and what you'd test.
- **Deliverable:** `frontier/week01-thread.md` (thread + literature map + a running baseline). **Acceptance:** baseline runs/loads; the map names a falsifiable thing to test.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — triage 3 thread papers and turn the chosen one into a running baseline notebook.

### Harness / reusable skill — `$paper-triage`
- **Purpose:** rapidly assess a frontier paper's claim, evidence, reproducibility, and the one experiment that would confirm/refute it.
- **Inputs:** a paper. **Required outputs:** the central claim, the strongest and weakest evidence, reproducibility tier, contamination risk, and the cheapest disconfirming test. **Evidence artifact:** `triage/<paper>.md`.

### Common failure modes
- **Abstract-as-truth** → repeating claims you haven't checked. *Fix:* `$paper-triage`, find the gap.
- **Citation laundering** → citing irreproducible work as established. *Fix:* check the reproducibility tier.
- **Hype momentum** → ignoring the sober follow-up. *Fix:* read the corrections, not just the splash.
- **Thread too big** → "I'll reproduce AlphaFold." *Fix:* scope to a reproducible sub-result.

### Evidence artifact
`frontier/week01-thread.md` + 3 `$paper-triage` notes.

### Skill sink-in
Predict whether your chosen paper is fully reproducible from its repo. Try to run it. Record what was missing.

### Depth upgrade
- **Dataset / source:** arXiv + Papers With Code + the paper's own repo/checkpoints; the **AI Index Report 2025** (Stanford HAI) for landscape context (open access).
- **Code stub:**
```python
PAPER_TRIAGE = {
  "claim": "",                # one sentence: what they say they achieved
  "evidence_strongest": "",   # the single most convincing result
  "evidence_weakest": "",     # the result that doesn't support the claim
  "repro_tier": "",           # weights+code+data | code | on-request | none
  "contamination_risk": "",   # could the benchmark be in training data?
  "disconfirming_test": "",   # cheapest experiment that would refute the claim
}
def triage_complete(t): return all(v for v in t.values())   # gate before presenting
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Claim–gap | Names the precise delta | Vague | Repeats abstract |
| Reproducibility | Tier assessed + tested | Stated | Ignored |
| Scope | Reproducible sub-result | Too broad | Undefined |
| Disconfirming test | Concrete, cheap | Vague | None |

- **Assessment weight:** part of the 8% participation (W1 onboarding).
- **Readings:**
  - Stanford HAI, "The AI Index Report 2025."
  - Kapoor & Narayanan, "Leakage and the Reproducibility Crisis in ML-based Science," *Patterns*, 2023.
  - Pineau et al., "Improving Reproducibility in Machine Learning Research (NeurIPS Reproducibility Program)," *JMLR*, 2021.
  - Lipton & Steinhardt, "Troubling Trends in Machine Learning Scholarship," 2018.

---

## Week 2 — Autonomous Research Agents: The "AI Scientist"

### State of the Art (June 2026)
- AI-Scientist (Sakana), Coscientist, and FunSearch are the references; the verification bottleneck (not ideation) is the limit.
- Novelty-vs-recombination and automated-reviewer bias are active critiques (Si et al. human study).
- Execution-grounded research loops (Claude Agent SDK + MCP tools) are the 2026 build pattern.

**Altitude:** Specialist · **Anchor case:** an agent that proposes hypotheses, runs experiments, and writes them up — and the question of whether its "discoveries" are real.

### Learning goals
- Describe the AI-scientist loop: ideation → experiment design → execution (code/tools) → analysis → write-up → review.
- Run/inspect an autonomous-research-agent system on a bounded task and audit its outputs for validity.
- Critique autonomy claims: novelty, correctness, and the verification bottleneck.

### Concept map
- **The research loop as an agent.** Plain English: wrap ideation, coding, and analysis in a planner/critic agent with tools. Where it matters: it can parallelize drudgery. Common mistake: assuming generated "findings" are correct without verification.
- **Verification bottleneck.** Plain English: generating hypotheses is cheap; *verifying* them is the hard, expensive part. Where it matters: this is where AI scientists succeed or fail. Common mistake: equating fluent write-ups with valid science.
- **Novelty vs recombination.** Plain English: most agent "ideas" recombine known work; genuine novelty is rare and must be checked against the literature. Common mistake: novelty claims without a literature check.
- **Automated reviewing & its biases.** Plain English: LLM reviewers inherit biases and can be gamed. Where it matters: closing the loop responsibly.

### Hands-on build (the lab)
- Run an AI-Scientist-style agent (or build a scoped one with the Claude Agent SDK) on a small ML task (e.g., propose+test a regularizer on a tiny benchmark); **audit** every claimed result against your own re-run.
- **Deliverable:** `frontier/ai-scientist/` with the agent transcript, your independent verification, and a validity verdict. **Acceptance:** ≥1 agent claim independently checked; at least one over-claim or error found and documented.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce an AI-Scientist-style claim into a notebook and independently re-run it to find an over-claim.

### Harness / reusable skill — `$research-claim-audit`
- **Purpose:** independently verify a claim produced by an autonomous (or human) research process.
- **Inputs:** a claimed result + its code/log. **Required outputs:** a reproduction attempt, a validity verdict, and the specific gap (if any) between claim and evidence. **Evidence artifact:** `claim-audit.md`.

### Common failure modes
- **Fluent-but-wrong** → polished write-up of an invalid result. *Fix:* independent re-run.
- **Novelty inflation** → "novel" rediscovery. *Fix:* literature check before crediting novelty.
- **Verification skipped** → trusting the agent's own eval. *Fix:* external verifier, not self-report.
- **Cherry-picked seed** → result vanishes on reseed. *Fix:* multi-seed reproduction.

### Evidence artifact
`frontier/ai-scientist/claim-audit.md` + transcript.

### Skill sink-in
Predict whether the agent's headline result survives your independent re-run. Re-run it. Record whether it held.

### Depth upgrade
- **Dataset / source:** a tiny benchmark of your choice (e.g., CIFAR-10 subset, a `sklearn` task) for the agent to experiment on; reference: **The AI Scientist** repo (github.com/SakanaAI/AI-Scientist, Apache-2.0).
- **Code stub:**
```python
def audit_claim(claim: dict, rerun_fn, n_seeds=5):
    results = [rerun_fn(seed=s) for s in range(n_seeds)]
    import numpy as np
    mean, std = np.mean(results), np.std(results)
    claimed = claim["reported_metric"]
    holds = abs(mean - claimed) <= 2 * std            # within noise of the claim?
    return {"reproduced_mean": mean, "std": std, "claimed": claimed,
            "holds": bool(holds), "verdict": "supported" if holds else "over-claimed"}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Verification | Multi-seed independent re-run | Single re-run | Trusts agent |
| Novelty check | Literature-checked | Asserted | None |
| Verdict | Evidence-backed | Stated | Vibes |
| Critique | Names the bottleneck | Partial | None |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Lu et al., "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery," Sakana AI, 2024.
  - Boiko et al., "Autonomous chemical research with large language models (Coscientist)," *Nature*, 2023.
  - Si, Yang & Hashimoto, "Can LLMs Generate Novel Research Ideas? A Large-Scale Human Study," 2024.
  - Romera-Paredes et al., "Mathematical discoveries from program search with LLMs (FunSearch)," *Nature*, 2024.

---

## Week 3 — AI for Science I: Structure Prediction (AlphaFold-style) & Geometric DL

### State of the Art (June 2026)
- AlphaFold3 (biomolecular complexes) + ESMFold (MSA-free LM) are the references; pLDDT/PAE confidence calibration is the honesty check.
- e3nn / SE(3)-equivariance is the geometric-DL standard; failure regimes are dynamics and novel folds.
- PDB/CASP remain ground truth.

**Altitude:** Specialist · **Anchor case:** protein structure prediction as the field's proof that ML can solve a 50-year scientific problem — and what generalizes from it. **(Reproduction milestone M1 due.)**

### Learning goals
- Explain the AlphaFold2/3 recipe: evolutionary input (MSA) → pairwise representation → equivariant structure module → confidence (pLDDT).
- Run inference with a released structure model (ESMFold / OpenFold) and interpret confidence.
- Describe equivariance/geometric DL and why 3D symmetry matters for molecular ML.

### Concept map
- **Equivariance.** *Plain English:* if you rotate the input molecule, the predicted structure should rotate the same way; build this symmetry into the network (`e3nn`, SE(3)-equivariance). *Where it matters:* sample efficiency and physical validity. *Common mistake:* data-augmenting rotations instead of building equivariance in.
- **MSA / evolutionary signal.** Plain English: co-evolving residues hint at spatial contacts; AlphaFold exploits this. Where it matters: performance drops on orphan proteins without MSAs (ESMFold uses a language model instead). Common mistake: assuming it works without evolutionary context.
- **Confidence (pLDDT/PAE).** Plain English: the model reports per-residue confidence; low confidence flags unreliable regions. Where it matters: scientific honesty. Common mistake: trusting low-confidence regions.
- **Generalization limits.** Plain English: great on folding, weaker on dynamics/novel folds/complexes. Where it matters: don't over-extrapolate the success.

### Hands-on build (the lab)
- Run **ESMFold** (or OpenFold) on a handful of sequences; compare predicted structures to PDB ground truth (TM-score/RMSD); analyze pLDDT vs actual error.
- Get your thread's reproducible baseline running (**M1**).
- **Deliverable:** `frontier/structure/` with predictions, accuracy vs PDB, a confidence-vs-error analysis, and `frontier/M1-litmap.md`. **Acceptance:** structures predicted; confidence correlates (or not) with error, reported honestly; M1 baseline runs.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build an ESMFold inference notebook, compare to PDB (TM-score/RMSD), and analyze pLDDT-vs-error calibration.

### Harness / reusable skill — `$scientific-repro`
- **Purpose:** reproduce a scientific-ML result with full provenance and an honest delta.
- **Inputs:** a released model + a ground-truth set. **Required outputs:** the reproduced metric, the paper's number, the delta, seeds/hardware, and a "matches / does-not-match" verdict. **Evidence artifact:** `repro.md`.

### Common failure modes
- **Confidence ignored** → trusting low-pLDDT regions. *Fix:* gate by confidence, report the correlation.
- **Augmentation instead of equivariance** → data-hungry, less robust. *Fix:* use equivariant layers where appropriate.
- **Over-extrapolation** → "AlphaFold solved biology." *Fix:* name the failure regimes (dynamics, novel folds).
- **No ground-truth comparison** → unvalidated structures. *Fix:* TM-score/RMSD vs PDB.

### Evidence artifact
`frontier/structure/repro.md` + confidence-vs-error analysis + `M1-litmap.md`.

### Skill sink-in
Predict whether pLDDT confidence tracks true error on your sequences. Plot it. Record how well calibrated the confidence is.

### Depth upgrade
- **Dataset / source:** sequences + structures from the **PDB** (rcsb.org, public domain) and **CASP** targets; **ESMFold/ESM-2** via huggingface.co/facebook/esm2_t33_650M_UR50D (MIT). Optional: **OpenFold** (github.com, Apache-2.0).
- **Code stub:**
```python
import torch
from transformers import AutoTokenizer, EsmForProteinFolding
tok = AutoTokenizer.from_pretrained("facebook/esmfold_v1")
model = EsmForProteinFolding.from_pretrained("facebook/esmfold_v1").cuda()
def fold(seq):
    inp = tok([seq], return_tensors="pt", add_special_tokens=False)["input_ids"].cuda()
    with torch.no_grad():
        out = model(inp)
    return out["positions"][-1], out["plddt"]        # coords, per-residue confidence
# compare to PDB with TM-score / RMSD; analyze plddt vs |pred - true|
```
- **Graded rubric table (governs M1):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Reproduction | Metric + delta + provenance | Runs, no delta | Doesn't run |
| Confidence analysis | Calibration quantified | Shown | Ignored |
| Equivariance grasp | Explains + where it matters | Partial | Confused |
| Limits | Names failure regimes | Partial | Overclaims |

- **Assessment weight:** ~3% critique + the 6% M1 milestone.
- **Readings:**
  - Jumper et al., "Highly accurate protein structure prediction with AlphaFold," *Nature*, 2021.
  - Abramson et al., "Accurate structure prediction of biomolecular interactions with AlphaFold3," *Nature*, 2024.
  - Lin et al., "Evolutionary-scale prediction of atomic-level protein structure with a language model (ESMFold)," *Science*, 2023.
  - Geiger & Smidt, "e3nn: Euclidean Neural Networks," 2022.

---

## Week 4 — AI for Science II: Molecules, Materials & Generative Design

### State of the Art (June 2026)
- GNoME + MatterGen (Nature 2023/2025) are the generative-discovery references; the proposed-vs-validated gap is the headline critique (Cheetham/Seshadri).
- Validity funnels (RDKit / formation-energy) + applicability-domain/uncertainty gate OOD overconfidence.
- Materials Project API + QM9 are the open datasets.

**Altitude:** Specialist · **Anchor case:** generative design of molecules/materials (GNoME, MatterGen-style) and the gap between *proposed* and *validated* candidates.

### Learning goals
- Explain ML-driven materials/molecule discovery: property prediction + generative proposal + (in silico) validation.
- Run a generative or screening pipeline and assess validity, novelty, and synthesizability.
- Critique discovery-count claims ("millions of new materials") against experimental validation rates.

### Concept map
- **Property prediction + screening.** Plain English: predict stability/properties fast, screen a huge candidate pool. Where it matters: throughput. Common mistake: screening with a model outside its applicability domain.
- **Generative proposal.** Plain English: diffusion/flow/VAE over molecular/crystal structures proposes candidates; constrain to valid chemistry. Common mistake: invalid or unsynthesizable outputs.
- **Validation gap.** Plain English: "N new candidates" is not "N new materials" until validated (DFT, then lab). Where it matters: the honest headline. Common mistake: reporting proposals as discoveries.
- **Distribution shift / novelty.** Plain English: truly novel candidates are OOD for the property model; uncertainty matters. Common mistake: trusting confident OOD predictions.

### Hands-on build (the lab)
- Run a property/stability screen on **Materials Project** (or a molecular generator like a junction-tree/diffusion model on **QM9**); report validity, novelty, and an uncertainty/applicability-domain check.
- **Deliverable:** `frontier/materials/` with generated/screened candidates, validity+novelty stats, and a "proposed vs validated" honesty note. **Acceptance:** validity & novelty reported; the proposal-vs-discovery distinction made explicit.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce a generator/screen on QM9 / Materials Project as a validity-funnel notebook (generated→valid→novel→synthesizable).

### Harness / reusable skill — `$discovery-validity-check`
- **Purpose:** separate plausible proposals from validated discoveries.
- **Inputs:** generated candidates. **Required outputs:** chemical-validity rate, novelty vs training set, synthesizability/applicability flag, and the count that survives each filter. **Evidence artifact:** `validity-check.md`.

### Common failure modes
- **Proposals reported as discoveries** → inflated counts. *Fix:* the validation funnel; report survivors per stage.
- **Invalid chemistry** → unsynthesizable molecules. *Fix:* validity filters (RDKit / formation energy).
- **OOD overconfidence** → trusting predictions on novel structures. *Fix:* uncertainty + applicability domain.
- **No baseline** → random/enumeration baseline untried. *Fix:* compare hit-rate to a baseline.

### Evidence artifact
`frontier/materials/validity-check.md` + candidate funnel.

### Skill sink-in
Predict the fraction of generated candidates that pass all validity filters. Run the funnel. Record the survival rate.

### Depth upgrade
- **Dataset / source:** QM9 — quantum-machine.org / huggingface.co/datasets/n0w0f/qm9 (134k molecules, ~150 MB, CC0); **Materials Project** API (materialsproject.org, CC BY 4.0, free key). Reference: **GNoME / MatterGen** papers.
- **Code stub:**
```python
from rdkit import Chem
def validity_funnel(smiles_list, train_set):
    valid = [s for s in smiles_list if Chem.MolFromSmiles(s) is not None]
    novel = [s for s in valid if Chem.CanonSmiles(s) not in train_set]
    return {"generated": len(smiles_list), "valid": len(valid), "novel": len(novel),
            "validity_rate": len(valid)/len(smiles_list),
            "novelty_rate": len(novel)/max(1, len(valid))}   # report each stage
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Validity funnel | Per-stage survival reported | Validity only | None |
| Honesty | Proposed≠validated explicit | Implied | Conflated |
| Uncertainty/OOD | Applicability domain | Mentioned | Ignored |
| Baseline | Beats random/enumeration | Has baseline | None |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Merchant et al., "Scaling deep learning for materials discovery (GNoME)," *Nature*, 2023.
  - Zeni et al., "MatterGen: a generative model for inorganic materials design," *Nature*, 2025.
  - Ramakrishnan et al., "Quantum chemistry structures and properties of 134 kilo molecules (QM9)," *Scientific Data*, 2014.
  - Cheetham & Seshadri, "Artificial Intelligence Driving Materials Discovery? Perspective on the Article," *Chemistry of Materials*, 2024 (the skeptical counterpoint).

---

## Week 5 — Physics-Informed ML: PINNs, Neural Operators & Scientific Surrogates

### State of the Art (June 2026)
- PINNs vs Fourier Neural Operators (FNO) is the core contrast; neural operators win for families/surrogates.
- Training pathologies (spectral bias, loss imbalance) need Fourier features / curriculum / gradient weighting.
- DeepXDE + neuraloperator are the tooling; always validate against a numerical solver.

**Altitude:** Specialist · **Anchor case:** solving/【learning】a PDE with a physics-informed network vs a neural operator — and when each is the right tool.

### Learning goals
- Implement a PINN that embeds a PDE residual in the loss and solve a benchmark equation.
- Contrast PINNs (solve one PDE instance, mesh-free) with neural operators (learn a solution operator across instances).
- Diagnose PINN training pathologies (stiffness, spectral bias, loss balancing).

### Concept map
- **Physics-informed loss.** *Formula:* `L = L_data + λ·L_PDE`, where `L_PDE = ‖N[u_θ](x)‖²` is the PDE residual via autodiff. *Plain English:* penalize violating the governing equation, not just data error. *Code mapping:* use `torch.autograd.grad` for derivatives of the network. *Common mistake:* mis-weighting `λ` so one term dominates.
- **PINN vs neural operator.** Plain English: a PINN fits one solution; a Fourier Neural Operator learns a mapping from inputs (e.g., initial conditions) to solutions for a whole family. Where it matters: reuse and speed. Common mistake: using a PINN where you need a fast surrogate over many instances.
- **Training pathologies.** Plain English: PINNs struggle with stiff/multiscale/high-frequency solutions (spectral bias); gradient pathologies require loss balancing/curriculum. Common mistake: blaming the physics when it's an optimization problem.
- **Validation against the solver.** Plain English: always compare to a trusted numerical solution. Common mistake: a low loss that hides a wrong solution.

### Hands-on build (the lab)
- Implement a PINN for a 1D Burgers'/heat equation in PyTorch/`deepxde`; compare to a numerical solver; then train an **FNO** on a family of instances and compare accuracy + speed.
- **Deliverable:** `frontier/pinn/` with the PINN solution, solver comparison, the FNO surrogate, and a loss-balancing note. **Acceptance:** PINN matches the solver within tolerance (or the pathology is diagnosed); FNO generalizes across instances.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build a Burgers PINN + an FNO in one notebook, validate vs a solver, and compare generalization across instances.

### Harness / reusable skill — `$physics-validity`
- **Purpose:** validate a learned PDE solution against physics and a numerical reference.
- **Inputs:** a learned solution. **Required outputs:** PDE-residual magnitude, error vs the solver, a conservation/boundary check, and the failure regime. **Evidence artifact:** `physics-validity.md`.

### Common failure modes
- **Loss imbalance** → fits data, violates physics (or vice versa). *Fix:* balance/anneal `λ`, gradient-based weighting.
- **Spectral bias** → misses high-frequency structure. *Fix:* Fourier features / curriculum / domain decomposition.
- **No solver comparison** → confident wrong solution. *Fix:* always validate against a numerical reference.
- **PINN where an operator is needed** → re-solving per instance. *Fix:* neural operator for families.

### Evidence artifact
`frontier/pinn/physics-validity.md` + solver comparison + FNO results.

### Skill sink-in
Predict whether your PINN or the FNO is more accurate on a *new* initial condition. Test. Record which generalized and why.

### Depth upgrade
- **Dataset / source:** self-generated PDE data from a numerical solver; FNO benchmark data — github.com/neuraloperator (Burgers/Darcy/Navier-Stokes datasets, MIT). Tooling: **DeepXDE** (deepxde.readthedocs.io, LGPL).
- **Code stub:**
```python
import torch
def pde_residual(net, x, t, nu=0.01/3.1416):          # Burgers': u_t + u u_x - nu u_xx = 0
    x.requires_grad_(True); t.requires_grad_(True)
    u = net(torch.cat([x, t], 1))
    u_t = torch.autograd.grad(u, t, torch.ones_like(u), create_graph=True)[0]
    u_x = torch.autograd.grad(u, x, torch.ones_like(u), create_graph=True)[0]
    u_xx = torch.autograd.grad(u_x, x, torch.ones_like(u_x), create_graph=True)[0]
    return u_t + u * u_x - nu * u_xx                   # should be ~0
def loss(net, x_d, t_d, u_d, x_c, t_c, lam=1.0):
    data = ((net(torch.cat([x_d, t_d], 1)) - u_d) ** 2).mean()
    phys = (pde_residual(net, x_c, t_c) ** 2).mean()
    return data + lam * phys
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| PINN correctness | Matches solver / pathology diagnosed | Close | Wrong, undiagnosed |
| Operator comparison | FNO generalizes, timed | One method | None |
| Loss balancing | Justified weighting | Default | Ignored |
| Validation | Residual + solver + conservation | Partial | Loss only |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Raissi, Perdikaris & Karniadakis, "Physics-Informed Neural Networks," *Journal of Computational Physics*, 2019.
  - Li et al., "Fourier Neural Operator for Parametric PDEs," *ICLR* 2021.
  - Wang, Teng & Perdikaris, "Understanding and Mitigating Gradient Pathologies in PINNs," *SIAM J. Sci. Comput.*, 2021.
  - Krishnapriyan et al., "Characterizing Possible Failure Modes in Physics-Informed Neural Networks," *NeurIPS* 2021.

---

## Week 6 — Emergence, Scaling & In-Context Learning

### State of the Art (June 2026)
- Emergence-as-metric-artifact (Schaeffer 2023) vs Wei 2022 is the live debate; grokking is the clean small-scale lab.
- Chinchilla compute-optimal scaling still frames training; power-law over-extrapolation is the warning.
- Pythia suite + BIG-Bench enable cross-scale reproduction.

**Altitude:** Specialist · **Anchor case:** the "emergent abilities" debate — real phase transitions vs artifacts of discontinuous metrics. **(Reproduction milestone M2 due.)**

### Learning goals
- Explain scaling laws and the claim of emergent abilities, then the metric-artifact critique.
- Reproduce a small scaling/emergence trend and test whether "emergence" survives a smooth metric.
- Reason about in-context learning as an emergent capability and its proposed mechanisms.

### Concept map
- **Scaling laws.** *Formula:* loss `L(N,D) ≈ E + A/N^α + B/D^β` (params `N`, data `D`). *Plain English:* loss falls predictably with scale; compute-optimal balances `N` and `D` (Chinchilla). *Common mistake:* extrapolating a power law far past its fitted range.
- **Emergent abilities & the metric critique.** Plain English: some abilities appear to "switch on" at scale — but often because the metric is discontinuous (exact-match); smooth metrics show gradual improvement. Where it matters: don't mistake your ruler for the territory. Common mistake: reporting emergence under exact-match without checking a continuous metric.
- **In-context learning.** Plain English: models learn a task from prompt examples without weight updates; proposed mechanisms include implicit gradient descent / induction heads. Common mistake: treating ICL as magic rather than a studied phenomenon.
- **Grokking.** Plain English: delayed generalization long after fitting train — a real, reproducible emergence at small scale. Where it matters: a clean lab for studying emergence.

### Hands-on build (the lab)
- Reproduce **grokking** on modular arithmetic (small transformer) *or* an emergence curve where you compare an exact-match vs a continuous metric on the same task; show whether "emergence" persists.
- Submit **M2** (core thread result reproduced).
- **Deliverable:** `frontier/emergence/` with the curve(s), the metric-sensitivity analysis, and `frontier/M2-repro.md`. **Acceptance:** the metric-artifact effect demonstrated or refuted on your task; M2 reproduced with seeds/hardware.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce grokking on modular arithmetic and test whether ‘emergence’ survives a continuous metric.

### Harness / reusable skill — `$emergence-probe`
- **Purpose:** test whether a claimed emergent jump is real or a metric artifact.
- **Inputs:** a capability-vs-scale (or vs-step) result. **Required outputs:** the curve under a discontinuous and a continuous metric, and a verdict on whether emergence survives. **Evidence artifact:** `emergence-probe.md`.

### Common failure modes
- **Metric artifact mistaken for emergence** → false phase transition. *Fix:* re-measure with a smooth metric.
- **Power-law over-extrapolation** → predicting far past data. *Fix:* state the fitted range.
- **Single seed grokking** → noise. *Fix:* multi-seed.
- **ICL mysticism** → no mechanism. *Fix:* cite induction-head / implicit-GD evidence.

### Evidence artifact
`frontier/emergence/emergence-probe.md` + `M2-repro.md`.

### Skill sink-in
Predict whether your task's "emergence" survives a continuous metric. Measure both. Record the answer.

### Depth upgrade
- **Dataset / source:** synthetic modular-arithmetic data (you generate) for grokking; for emergence, a few **BIG-Bench** tasks (github.com/google/BIG-bench, Apache-2.0) across model sizes (Pythia suite, huggingface.co/EleutherAI, Apache-2.0).
- **Code stub:**
```python
# grokking: tiny transformer on (a+b) mod p; watch train vs val long after train fits
def make_modular(p=97):
    import itertools
    data = [((a, b), (a + b) % p) for a, b in itertools.product(range(p), range(p))]
    return data
# emergence-probe: same predictions, two metrics
def exact_match(pred, gold): return float(pred == gold)
def token_edit_sim(pred, gold):                     # continuous: smooth credit
    import difflib
    return difflib.SequenceMatcher(None, str(pred), str(gold)).ratio()
```
- **Graded rubric table (governs M2):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Reproduction | M2 result + delta + seeds | Runs | Fails |
| Metric analysis | Both metrics, clear verdict | One metric | None |
| Scaling grasp | Explains laws + limits | Partial | Confused |
| Multi-seed | Reported | Single | None |

- **Assessment weight:** ~3% critique + the 6% M2 milestone.
- **Readings:**
  - Kaplan et al., "Scaling Laws for Neural Language Models," 2020; Hoffmann et al., "Training Compute-Optimal LLMs (Chinchilla)," *NeurIPS* 2022.
  - Wei et al., "Emergent Abilities of Large Language Models," *TMLR*, 2022.
  - Schaeffer, Miranda & Koyejo, "Are Emergent Abilities of LLMs a Mirage?," *NeurIPS* 2023.
  - Power et al., "Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets," 2022.

---

## Week 7 — Mechanistic Interpretability: Circuits, SAEs & CoT Monitoring

### State of the Art (June 2026)
- SAEs for monosemantic features (Scaling Monosemanticity, Gemma Scope) + activation patching for causal circuits; a MIT 2026 mech-interp breakthrough accelerated the field.
- Induction heads remain the canonical circuit; causal patching beats correlational stories.
- TransformerLens + SAELens/Neuronpedia tooling.

**Altitude:** Specialist · **Anchor case:** reverse-engineering a small circuit and extracting interpretable features with a sparse autoencoder.

### Learning goals
- Explain mechanistic interpretability: features, circuits, superposition, and the role of sparse autoencoders.
- Train/inspect an SAE on model activations and interpret features; verify with activation patching.
- Critique interpretability claims and discuss CoT monitoring as a safety tool and its faithfulness limits.

### Concept map
- **Superposition.** *Plain English:* models pack more features than neurons by overlapping them; that's why single neurons are polysemantic. *Where it matters:* you need SAEs to disentangle. *Common mistake:* interpreting a neuron as one concept.
- **Sparse autoencoders (SAEs).** *Plain English:* learn an overcomplete, sparse dictionary of activation directions ("features") that are more monosemantic. *Code mapping:* encoder→sparse code→decoder, with an L1 penalty. *Common mistake:* dead features / no sparsity → uninterpretable.
- **Circuits & activation patching.** Plain English: trace how specific components implement a behavior; *patch* an activation from one run into another to test causal necessity. Common mistake: correlational stories without causal patching.
- **CoT monitoring & faithfulness.** Plain English: read the model's chain-of-thought to catch misbehavior — but CoT can be unfaithful (post-hoc rationalization). Where it matters: safety. Common mistake: trusting CoT as a true account of computation.

### Hands-on build (the lab)
- Use `transformer-lens` to find an induction head / a small circuit in a small model via activation patching; then train (or load via `sae-lens`) an SAE on a layer and interpret 5 features.
- **Deliverable:** `frontier/interp/` with the circuit (patching evidence), SAE feature interpretations, and a faithfulness note. **Acceptance:** ≥1 causal patching result; ≥5 interpreted features with evidence (max-activating examples).

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — reproduce an induction-head activation-patching result and interpret ≥5 SAE features in one notebook.

### Harness / reusable skill — `$interp-evidence`
- **Purpose:** hold interpretability claims to a causal standard.
- **Inputs:** a circuit/feature claim. **Required outputs:** max-activating examples, an activation-patching/ablation test of necessity, and a confidence-calibrated interpretation. **Evidence artifact:** `interp-evidence.md`.

### Common failure modes
- **Polysemantic over-interpretation** → "this neuron = X." *Fix:* SAEs; report superposition.
- **Correlational just-so stories** → no causal test. *Fix:* activation patching/ablation.
- **Dead SAE features** → no sparsity. *Fix:* tune L1/width, monitor feature density.
- **CoT taken as faithful** → trusting rationalizations. *Fix:* faithfulness tests; treat CoT as a signal, not ground truth.

### Evidence artifact
`frontier/interp/interp-evidence.md` + patching + SAE features.

### Skill sink-in
Predict whether ablating your identified circuit component actually breaks the behavior. Ablate it. Record the causal result.

### Depth upgrade
- **Dataset / source:** small models + tooling — **GPT-2 small** / **Pythia** via `transformer-lens` (github.com, MIT); pretrained SAEs via `sae-lens` (github.com, MIT) / Neuronpedia. Probing prompts you write.
- **Code stub:**
```python
from transformer_lens import HookedTransformer
import torch
model = HookedTransformer.from_pretrained("gpt2")
def patch_and_measure(clean, corrupt, layer, pos):
    _, clean_cache = model.run_with_cache(clean)
    def hook(act, hook):                              # patch clean activation into corrupt run
        act[:, pos, :] = clean_cache[hook.name][:, pos, :]; return act
    name = f"blocks.{layer}.hook_resid_post"
    logits = model.run_with_hooks(corrupt, fwd_hooks=[(name, hook)])
    return logits                                     # did patching restore the behavior?
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Causal evidence | Patching/ablation necessity | Correlational | None |
| SAE features | ≥5 interpreted w/ evidence | A few, weak | None |
| Superposition grasp | Explains + accounts for it | Partial | Neuron=concept |
| CoT faithfulness | Tests/caveats it | Mentions | Trusts blindly |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Elhage et al., "Toy Models of Superposition," Anthropic, 2022.
  - Bricken et al., "Towards Monosemanticity: Decomposing Language Models With Dictionary Learning (SAEs)," Anthropic, 2023; Templeton et al., "Scaling Monosemanticity," 2024.
  - Olsson et al., "In-context Learning and Induction Heads," Anthropic, 2022.
  - Lanham et al., "Measuring Faithfulness in Chain-of-Thought Reasoning," Anthropic, 2023.

---

## Week 8 — Neuro-Symbolic Methods: Combining Learning and Reasoning

### State of the Art (June 2026)
- LLM-as-program-generator + solver (PAL-style) with generate→execute→verify→repair is the reliable 2026 pattern; ARC-AGI-2 is the systematic-reasoning bar.
- Verifiability is the payoff — symbolic answers are checkable; differentiable logic (DeepProbLog) stays brittle/niche.
- Execution grounding beats ‘the LLM looked right’.

**Altitude:** Specialist · **Anchor case:** a task where pure neural nets fail at systematic reasoning and a neuro-symbolic hybrid succeeds (e.g., program synthesis / constraint solving / abstract reasoning).

### Learning goals
- Explain the neuro-symbolic spectrum: neural perception + symbolic reasoning, differentiable logic, program induction, LLM+solver.
- Build a hybrid where an LLM generates a symbolic program/constraints that a verifier/solver executes.
- Reason about when symbols buy you systematic generalization and verifiability.

### Concept map
- **Why hybridize.** Plain English: neural nets excel at perception/pattern but struggle with systematic, compositional, verifiable reasoning; symbols give exactness and generalization. Where it matters: math, planning, constraints. Common mistake: forcing one paradigm onto both jobs.
- **LLM-as-program-generator + solver.** *Plain English:* the LLM writes code/logic; a deterministic engine (Python, SAT/SMT, a CAS) executes and verifies. *Code mapping:* generate → execute → check → repair. *Common mistake:* trusting the LLM's "execution" instead of running it.
- **Differentiable/relaxed logic.** Plain English: relax logic to make it trainable end-to-end (e.g., DeepProbLog). Where it matters: learning with symbolic constraints. Common mistake: scalability and brittleness.
- **Verifiability.** Plain English: a symbolic answer can be *checked*; this is the safety/reliability payoff. Common mistake: discarding verification because the LLM "looked right."

### Hands-on build (the lab)
- Build an LLM+solver hybrid for a reasoning task (e.g., **ARC-AGI** subset via program search, or word problems via LLM→Python→verify) with a generate-execute-repair loop; compare to a pure-LLM baseline.
- **Deliverable:** `frontier/neurosymbolic/` with the hybrid, accuracy vs the pure-LLM baseline, and a generalization slice. **Acceptance:** hybrid beats the pure-neural baseline on a systematic-generalization slice, or the failure is analyzed.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build an LLM+solver generate-execute-repair loop on ARC/GSM8K and beat a pure-LLM baseline on a generalization slice.

### Harness / reusable skill — `$neurosymbolic-loop`
- **Purpose:** wrap any reasoning task in a generate→execute→verify→repair loop.
- **Inputs:** a task + a symbolic executor. **Required outputs:** the hybrid's accuracy, the verification pass-rate, the repair count, and a comparison to pure-neural. **Evidence artifact:** `neurosymbolic-eval.md`.

### Common failure modes
- **Simulated execution** → trusting the LLM to "run" code. *Fix:* actually execute, feed errors back.
- **No repair loop** → one-shot failures. *Fix:* execute→error→repair iterations.
- **In-distribution-only eval** → misses the generalization payoff. *Fix:* systematic-generalization slice.
- **Symbol overhead unjustified** → hybrid no better than neural. *Fix:* compare; keep symbols only where they help.

### Evidence artifact
`frontier/neurosymbolic/neurosymbolic-eval.md` + baseline comparison.

### Skill sink-in
Predict the accuracy gap between the hybrid and pure-LLM on the *hard generalization* slice. Measure. Record the gap.

### Depth upgrade
- **Dataset / source:** **ARC-AGI** — github.com/fchollet/ARC-AGI (1,000 abstract-reasoning tasks, Apache-2.0); or **GSM8K** (HF, MIT) for LLM→Python→verify.
- **Code stub:**
```python
def neurosymbolic_solve(problem, llm, max_repairs=3):
    code = llm.generate_program(problem)              # LLM writes a Python solution
    for _ in range(max_repairs):
        ok, result, err = execute_sandboxed(code)     # actually run it
        if ok and verify(result, problem):
            return {"answer": result, "verified": True}
        code = llm.repair(problem, code, err)         # feed the real error back
    return {"answer": None, "verified": False}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Hybrid design | Generate-execute-verify-repair | No repair | Simulated exec |
| Baseline | Beats pure-LLM, measured | Has baseline | None |
| Generalization | Systematic slice tested | In-dist only | None |
| Verifiability | Uses + reports verification | Partial | Ignored |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Chollet, "On the Measure of Intelligence (ARC)," 2019.
  - Mao et al., "The Neuro-Symbolic Concept Learner," *ICLR* 2019.
  - Manhaeve et al., "DeepProbLog: Neural Probabilistic Logic Programming," *NeurIPS* 2018.
  - Gao et al., "PAL: Program-aided Language Models," *ICML* 2023.

---

## Week 9 — World Models & Simulation for Reasoning and Control

### State of the Art (June 2026)
- DreamerV3 + IRIS remain references; Genie-style interactive environments and video-diffusion world models are the 2026 shift (DiT over spatiotemporal latents).
- Model exploitation + compounding error bound the trustworthy horizon; report the imagined-vs-real gap.
- World models double as embodied training simulators.

**Altitude:** Specialist · **Anchor case:** using a learned world model/simulator for planning or as a training environment — and the limits of imagined experience. **(Experiment milestone M3 due.)**

### Learning goals
- Explain world models as learned simulators for model-based RL, planning, and synthetic experience (link back to Subject 12 W10, now research-depth).
- Evaluate planning-in-imagination vs model-free, and reason about model exploitation and compounding error.
- Connect world models to "neural game engines" and embodied/robotics learning.

### Concept map
- **Planning in imagination.** Plain English: learn dynamics, then optimize actions by rolling out inside the model (Dreamer); cheaper than real interaction. Where it matters: sample efficiency. Common mistake: the policy exploits model errors.
- **Model exploitation.** Plain English: an agent finds and abuses inaccuracies in the learned model (free reward that doesn't transfer). Where it matters: a core failure mode. Common mistake: not penalizing/uncertainty-gating imagined returns.
- **Compounding error & horizon.** Plain English: errors accumulate over rollout; trust short horizons. Common mistake: long imagined rollouts as ground truth.
- **Generative interactive environments (Genie).** Plain English: action-conditioned world models become playable, learnable simulators — a path to scalable embodied training. Common mistake: conflating with passive video gen.

### Hands-on build (the lab)
- Run a Dreamer-style or tokenized world model on a control/Atari task; compare planning-in-imagination performance and sample efficiency to a model-free baseline; probe model exploitation.
- Submit **M3** (novel ablation/extension on your thread).
- **Deliverable:** `frontier/world-sim/` with the comparison, an exploitation probe, an error-vs-horizon curve, and `frontier/M3-ablation.md`. **Acceptance:** sample-efficiency comparison reported; model-exploitation behavior characterized; M3 ablation has a result table.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — run a Dreamer/IRIS-style world model and quantify the imagined-vs-real exploitation gap in a notebook.

### Harness / reusable skill — `$sim-fidelity-eval`
- **Purpose:** assess whether a learned simulator is good enough to plan/train inside.
- **Inputs:** a world model + a policy. **Required outputs:** rollout fidelity vs horizon, an exploitation check (imagined vs real return gap), and a trustworthy-horizon recommendation. **Evidence artifact:** `sim-fidelity.md`.

### Common failure modes
- **Model exploitation** → great imagined reward, fails for real. *Fix:* uncertainty penalty, real-env validation.
- **Long-horizon trust** → compounding error. *Fix:* short rollouts + error curve.
- **No model-free baseline** → can't judge the benefit. *Fix:* compare sample efficiency.
- **Imagined=real reporting** → dishonest. *Fix:* always report the imagined-vs-real return gap.

### Evidence artifact
`frontier/world-sim/sim-fidelity.md` + `M3-ablation.md`.

### Skill sink-in
Predict the gap between imagined and real returns for your agent. Measure both. Record the exploitation gap.

### Depth upgrade
- **Dataset / source:** **Atari 100k** / `gymnasium` (ale-py, research use) or **DeepMind Control Suite**; reference implementations DreamerV3 (github.com/danijar/dreamerv3, MIT), IRIS (github.com/eloialonso/iris, MIT).
- **Code stub:**
```python
def exploitation_gap(world, policy, real_env, n=20):
    imagined = [imagined_return(world, policy) for _ in range(n)]
    real = [real_return(real_env, policy) for _ in range(n)]
    import numpy as np
    return {"imagined": np.mean(imagined), "real": np.mean(real),
            "gap": np.mean(imagined) - np.mean(real)}   # large gap = model exploitation
```
- **Graded rubric table (governs M3):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Ablation (M3) | Result table + insight | Runs | None |
| Sample efficiency | vs model-free baseline | Reported alone | None |
| Exploitation | Imagined-vs-real gap | Mentioned | Ignored |
| Horizon honesty | Trustworthy horizon stated | Partial | Overclaims |

- **Assessment weight:** ~3% critique + the 6% M3 milestone.
- **Readings:**
  - Hafner et al., "Mastering Diverse Domains through World Models (DreamerV3)," 2023.
  - Micheli et al., "Transformers are Sample-Efficient World Models (IRIS)," *ICLR* 2023.
  - Bruce et al., "Genie: Generative Interactive Environments," *ICML* 2024.
  - Sutton, "Dyna, an Integrated Architecture for Learning, Planning, and Reacting," 1991 (the origin).

---

## Week 10 — Synthetic Data, Self-Improvement & the Efficiency/SSM Frontier

### State of the Art (June 2026)
- STaR-style verifier-filtered self-improvement is standard; model collapse (Shumailov, Nature 2024) bounds it.
- Mamba/SSMs + Transformer-SSM hybrids (Jamba) are the linear-time frontier; recall gaps vs attention are the tradeoff.
- Synthetic data is the default scaling fuel — verification gates error amplification.

**Altitude:** Specialist · **Anchor case:** training on model-generated data (self-improvement) and the architectures (Mamba/SSMs) that change the cost frontier.

### Learning goals
- Explain synthetic-data pipelines (distillation, self-instruct, RLVR-style self-improvement) and the model-collapse risk.
- Explain state-space models (Mamba) vs Transformers: linear-time sequence modeling and the quality/efficiency trade-off.
- Reproduce a small self-improvement loop *or* a Mamba-vs-Transformer efficiency comparison.

### Concept map
- **Synthetic data & self-improvement.** Plain English: use a model (or a verifier) to generate training data and bootstrap (STaR, self-instruct, RLVR). Where it matters: cheap scaling, reasoning gains. Common mistake: ignoring verification → amplifying errors.
- **Model collapse.** Plain English: training repeatedly on generated data degrades diversity/tails. Where it matters: data ecosystems. Common mistake: assuming synthetic data is free of cost.
- **State-space models (Mamba).** *Plain English:* a selective SSM models sequences in linear time with a recurrent scan, avoiding attention's quadratic cost; strong on long contexts. *Common mistake:* assuming it strictly dominates Transformers — it trades off recall/in-context behavior.
- **Hybrids.** Plain English: Transformer+SSM hybrids (e.g., Jamba) chase the best of both. Where it matters: the practical frontier.

### Hands-on build (the lab)
- **Either** run a small **self-improvement** loop (generate→verify→filter→fine-tune) on a reasoning task and measure gain + a diversity/collapse check, **or** benchmark a small **Mamba** vs a Transformer on a long-context task (throughput + accuracy).
- **Deliverable:** `frontier/efficiency/` with the loop or benchmark, a collapse/diversity or quality-vs-length analysis, and a frontier note. **Acceptance:** a measured trade-off curve; the failure mode (collapse or recall) addressed.

▶ **Practical project:** `VizuaraAILabs/DeepSeek-From-Scratch` — reproduce an SSM/efficiency comparison (or a verified self-improvement loop) as a trade-off-curve notebook.

### Harness / reusable skill — `$frontier-tradeoff`
- **Purpose:** characterize a quality–cost (or quality–diversity) trade-off rigorously.
- **Inputs:** two methods/configs. **Required outputs:** a trade-off curve (quality vs cost/length/iteration), the failure mode each hits, and a recommendation by regime. **Evidence artifact:** `frontier-tradeoff.md`.

### Common failure modes
- **Unverified self-improvement** → error amplification. *Fix:* verifier-filtered data only.
- **Ignoring collapse** → diversity loss over iterations. *Fix:* diversity/tail metrics across rounds.
- **SSM-as-strictly-better** → ignoring recall gaps. *Fix:* test in-context recall, not just throughput.
- **Single-length benchmark** → hides the long-context payoff. *Fix:* vary sequence length.

### Evidence artifact
`frontier/efficiency/frontier-tradeoff.md` + trade-off curve.

### Skill sink-in
Predict where Mamba overtakes the Transformer on throughput as length grows (or where self-improvement gains saturate). Measure. Record the crossover.

### Depth upgrade
- **Dataset / source:** GSM8K (HF, MIT) for self-improvement; long-context: a synthetic long-range task or **LongBench** (github.com/THUDM/LongBench, MIT). Models: **state-spaces/mamba-130m** (HF, Apache-2.0) vs a similar-size Transformer (Pythia).
- **Code stub:**
```python
# self-improvement (STaR-style): keep only verified generations
def self_improve_round(model, problems, verify):
    data = []
    for p in problems:
        sols = model.generate(p, n=4)                 # sample multiple solutions
        good = [s for s in sols if verify(s, p)]      # keep only verified-correct
        if good:
            data.append((p, good[0]))
    return finetune(model, data), len(data)           # track yield + diversity per round
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Trade-off curve | Quality vs cost/length/iter | Two points | Single number |
| Failure mode | Collapse/recall addressed | Mentioned | Ignored |
| Verification/recall | Properly handled | Partial | None |
| Recommendation | By regime, justified | Stated | None |

- **Assessment weight:** ~3% (weekly critique/presentation).
- **Readings:**
  - Gu & Dao, "Mamba: Linear-Time Sequence Modeling with Selective State Spaces," 2023.
  - Zelikman et al., "STaR: Bootstrapping Reasoning with Reasoning," *NeurIPS* 2022.
  - Shumailov et al., "The Curse of Recursion: Training on Generated Data Makes Models Forget (model collapse)," *Nature*, 2024.
  - Lieber et al., "Jamba: A Hybrid Transformer-Mamba Language Model," 2024.

---

## Week 11 — Theorem Proving, Autoformalization & the Societal-Impact Panel

### State of the Art (June 2026)
- AlphaProof (LLM + Lean + RL) is the reference for verifiable reasoning; a formal proof is a ground-truth reward (RLVR’s purest form).
- Autoformalization + LeanDojo/mathlib are the tooling; Lean 4 is standard.
- Verifiable reasoning ties directly to the governance panel on frontier stakes.

**Altitude:** Specialist · **Anchor case:** AlphaProof-style automated theorem proving (LLM + Lean + RL) — verifiable reasoning — paired with a panel on the societal stakes of frontier AI.

### Learning goals
- Explain autoformalization (natural-language math → formal Lean) and LLM+proof-assistant+search/RL proving.
- Run a small proof-search experiment in Lean (LeanDojo/an LLM prover) and reason about verifiability as the key property.
- Engage a structured societal-impact panel: governance (EU AI Act, NIST AI RMF), risks, and responsible scaling.

### Concept map
- **Formal verification as ground truth.** Plain English: a proof assistant (Lean) *checks* every step; if it compiles, it's correct — no hallucination survives. Where it matters: this is why math is a clean RL/verification domain. Common mistake: trusting an informal proof an LLM "believes."
- **Autoformalization.** Plain English: translate informal statements into formal ones (the bottleneck for using LLMs on real math). Common mistake: assuming translation is faithful without checking.
- **LLM + search + RL (AlphaProof).** Plain English: generate candidate proof steps, search the tactic tree, train on verified successes (RLVR). Where it matters: IMO-level results. Common mistake: ignoring the enormous search/compute behind the headline.
- **Governance frameworks.** Plain English: EU AI Act tiers, NIST AI RMF, responsible scaling policies structure how frontier risk is managed. Where it matters: the societal lens. Common mistake: treating capability and governance as separate conversations.

### Hands-on build (the lab)
- Run an LLM-driven proof search on a small Lean benchmark (**MiniF2F** via LeanDojo); report solve-rate and inspect verified vs failed proofs.
- Prepare and run the **societal-impact panel**: each student argues one position (capability optimism, safety caution, governance, access/equity) grounded in primary sources.
- **Deliverable:** `frontier/proving/` with proof-search results + the panel position memo. **Acceptance:** verified proofs reported (with solve-rate); a defensible, source-grounded panel position.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — build a Lean 4 + LeanDojo proof-search notebook on a small theorem set and report verified-rate.

### Harness / reusable skill — `$verifiable-reasoning-eval`
- **Purpose:** evaluate a reasoning system where correctness is formally checkable.
- **Inputs:** a prover + a formal benchmark. **Required outputs:** verified solve-rate, search budget, failure analysis, and a note on what verifiability does/doesn't guarantee (statement faithfulness). **Evidence artifact:** `proving-eval.md`.

### Common failure modes
- **Trusting informal proofs** → unverified claims. *Fix:* require the Lean check.
- **Autoformalization drift** → a proof of the *wrong* statement. *Fix:* verify the formal statement matches the informal one.
- **Hiding the search cost** → headline without compute. *Fix:* report the search budget.
- **Panel without sources** → opinion theater. *Fix:* ground every position in primary sources.

### Evidence artifact
`frontier/proving/proving-eval.md` + panel position memo.

### Skill sink-in
Predict your prover's solve-rate on MiniF2F before running it. Run it. Record the gap between your optimism and the verified rate.

### Depth upgrade
- **Dataset / source:** **MiniF2F** — github.com/openai/miniF2F (488 formal math problems, MIT); **LeanDojo** (leandojo.org, github.com/lean-dojo, MIT) + `mathlib`. Governance: EU AI Act, NIST AI RMF 1.0 (open).
- **Code stub:**
```python
from lean_dojo import LeanGitRepo, Dojo, Theorem
def attempt_proof(theorem: Theorem, llm, max_steps=50):
    with Dojo(theorem) as (dojo, state):
        for _ in range(max_steps):
            tactic = llm.suggest_tactic(state)         # LLM proposes a Lean tactic
            state = dojo.run_tac(state, tactic)
            if state.__class__.__name__ == "ProofFinished":
                return {"proved": True}                 # Lean verified every step
            if state.__class__.__name__ == "LeanError":
                continue
    return {"proved": False}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Proof search | Verified solve-rate + budget | Runs | Fails |
| Verifiability grasp | Statement-faithfulness checked | Partial | Trusts informal |
| Panel position | Source-grounded, defended | Stated | Opinion only |
| Governance | Maps a framework correctly | Named | Absent |

- **Assessment weight:** ~3% critique + part of the 8% panel/participation.
- **Readings:**
  - AlphaProof & AlphaGeometry teams (DeepMind), "AI achieves silver-medal standard solving IMO problems," 2024.
  - Yang et al., "LeanDojo: Theorem Proving with Retrieval-Augmented Language Models," *NeurIPS* 2023.
  - Zheng, Han & Polu, "MiniF2F: a cross-system benchmark for formal Olympiad-level mathematics," *ICLR* 2022.
  - Bengio et al., "Managing extreme AI risks amid rapid progress," *Science*, 2024.

---

## Week 12 — In-Class Hackathon: Build at the Frontier Under Pressure

### State of the Art (June 2026)
- Frontier sprints lean on released checkpoints + serverless GPU (Modal/RunPod, pay-per-second) and prompt caching for cost.
- Reproduce-the-trend (a scaled-down ablation) beats hero runs under time pressure.
- Inspect AI / DeepEval give fast, honest evals.

**Altitude:** Specialist · **Anchor case:** a one-day sprint extending your thread or combining two frontier ideas.

### Learning goals
- Scope and execute a frontier build in a fixed time budget.
- Make defensible engineering trade-offs under uncertainty and report honestly what works.
- Practice the reproduce→extend→evaluate loop at speed.

### Concept map (as a sprint checklist)
- Pick the smallest interesting extension → reuse a checkpoint/baseline → run one clean ablation → measure against a baseline → write a 1-page result with limitations. Speed comes from scoping, not from skipping evidence.

### Hands-on build (the lab)
- A timed hackathon: ship a working frontier mini-build (e.g., an SAE feature steering demo, a flow-matching speedup, an AI-scientist sub-loop, a PINN for a new PDE) with one measured result and a baseline.
- **Deliverable:** `frontier/hackathon/` with the build, one result table, and a 1-page writeup. **Acceptance:** runs end-to-end; one honest result vs a baseline; limitations stated.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — under time pressure, convert one frontier result into a runnable, ablated notebook with seeds pinned.

### Harness / reusable skill — `$frontier-sprint`
- **Purpose:** execute a time-boxed frontier build without dropping evidence discipline.
- **Inputs:** an idea + a time budget. **Required outputs:** the minimal scoped build, one result vs baseline, and a limitations note. **Evidence artifact:** `hackathon/result.md`.

### Common failure modes
- **Over-scoping** → nothing runs by the deadline. *Fix:* smallest interesting extension.
- **Demo without measurement** → no result. *Fix:* one metric vs a baseline is mandatory.
- **Skipping the baseline under time pressure** → unanchored. *Fix:* baseline first, fancy later.

### Evidence artifact
`frontier/hackathon/result.md` + the build.

### Skill sink-in
Before the sprint, predict what you'll get working. After, record the gap between plan and what shipped — and why.

### Depth upgrade
- **Dataset / source:** reuse any dataset/checkpoint from earlier weeks; the point is speed and evidence, not new data.
- **Code stub:**
```python
SPRINT = {
  "scope": "smallest interesting extension of <thread>",
  "baseline": "the number to beat",
  "result": None,                       # one metric, measured before the deadline
  "limitations": [],                    # at least one honest caveat
}
def sprint_ready(s): return s["result"] is not None and s["baseline"] and s["limitations"]
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Shipped | Runs end-to-end | Partial | Nothing |
| Result | Measured vs baseline | One number | None |
| Scope | Well-chosen | Too big/small | Undefined |
| Honesty | Limitations stated | Partial | Overclaims |

- **Assessment weight:** the 7% hackathon.
- **Readings:**
  - (Hackathon week — reuse your thread's primary sources.)
  - Norvig, "How to Write a Spelling Corrector," 2007 (a model of small, honest, reproducible work).
  - Henderson et al., "Deep Reinforcement Learning that Matters," *AAAI* 2018 (why rigor under time pressure matters).

---

## Week 13 — Final Talks: Conference-Style Presentations & Defense

### State of the Art (June 2026)
- Conference-grade reproduction = primary-source map + reproduced number with delta + your own ablation + honest limitations.
- Pinned environments (uv) and one-command repro are the reproducibility bar.
- The real-vs-hype claim is the deliverable, not the headline number.

**Altitude:** Specialist · **Anchor case:** present and defend your term project as a conference talk to a panel of peers + instructors.

### Learning goals
- Communicate a frontier reproduction/contribution clearly: claim, method, evidence, limitations.
- Defend the work under adversarial questioning (reproducibility, baselines, over-claiming).
- Submit a 4–6 page short paper that survives a peer review.

### Concept map (review)
- The seminar's spine: claim–evidence–gap; reproduce before extending; baselines and ablations; honest limitations; verifiability and governance where they apply.

### Hands-on build (the lab)
- **M4:** 12-minute conference talk + 8-minute defense; submit the short paper.
- Peer-review two classmates' papers using the `$paper-triage` standard.
- **Deliverable:** `frontier/final/` with the short paper, talk slides, and two peer reviews. **Acceptance:** the final mini-project checklist (top of file) is fully satisfied; the paper has an honest limitations section and a real ablation.

▶ **Practical project:** `VizuaraAI/paper-to-notebook` — package your reproduction as a clean, one-command notebook to accompany the short paper + talk.

### Harness / reusable skill — `$research-defense`
- **Purpose:** stress-test a research claim before (and during) presentation.
- **Inputs:** a paper/talk. **Required outputs:** the three hardest questions, the baseline/ablation gaps, and the over-claim most likely to be challenged — with prepared answers. **Evidence artifact:** `final/defense-prep.md`.

### Common failure modes
- **Over-claiming** → headline beyond the evidence. *Fix:* state limitations first; calibrate the claim.
- **Missing baseline/ablation** → unanchored contribution. *Fix:* both are required deliverables.
- **Irreproducible** → no seed/environment. *Fix:* pin everything; one-command repro.
- **Defense by deflection** → dodging the hard question. *Fix:* `$research-defense` rehearsal.

### Evidence artifact
`frontier/final/` (paper + slides + peer reviews + defense prep).

### Skill sink-in
Predict the single hardest question the panel will ask. After the defense, record whether you anticipated it and how the answer held.

### Depth upgrade
- **Dataset / source:** your project's artifacts; review template based on NeurIPS/ICLR reviewer guidelines (open).
- **Code stub:**
```python
FINAL_GATE = ["literature_map", "reproduced_metric_with_delta", "own_ablation",
              "limitations_section", "real_vs_hype_claim", "pinned_repro_env"]
def final_gate(project: dict): return {k: bool(project.get(k)) for k in FINAL_GATE}
```
- **Graded rubric table (governs the 25% paper + 12% talk):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Contribution | Reproduction + real ablation | Reproduction only | Neither |
| Rigor | Baselines + seeds + delta | Some | None |
| Limitations | Honest, specific | Generic | Absent |
| Defense | Survives hard questions | Partial | Folds |
| Communication | Clear claim→evidence arc | Uneven | Confused |

- **Assessment weight:** the 25% paper + 12% talk + remaining participation.
- **Readings:**
  - Whitesides, "Whitesides' Group: Writing a Paper," *Advanced Materials*, 2004.
  - Reviewer guidelines (NeurIPS/ICLR 2025) for the peer-review exercise.
  - Lipton & Steinhardt, "Troubling Trends in Machine Learning Scholarship," 2018 (revisited as a self-check).

---

## Course-level outcomes

By the end you can: read frontier AI papers for the claim–evidence gap; reproduce or stress-test a 2024–2026 result with full provenance; build at the frontier across autonomous research agents, AlphaFold-style structure prediction, materials/molecule generation, PINNs/neural operators, emergence/scaling, mechanistic interpretability/SAEs, neuro-symbolic reasoning, world models, synthetic data/SSMs, and theorem proving; tell signal from hype; and communicate and defend research honestly. You leave with a reusable harness — `$paper-triage`, `$research-claim-audit`, `$scientific-repro`, `$discovery-validity-check`, `$physics-validity`, `$emergence-probe`, `$interp-evidence`, `$neurosymbolic-loop`, `$sim-fidelity-eval`, `$frontier-tradeoff`, `$verifiable-reasoning-eval`, `$frontier-sprint`, `$research-defense` — plus a short paper and a talk.

## Skills produced (reused program-wide)
`$paper-triage` · `$research-claim-audit` · `$scientific-repro` · `$discovery-validity-check` · `$physics-validity` · `$emergence-probe` · `$interp-evidence` · `$neurosymbolic-loop` · `$sim-fidelity-eval` · `$frontier-tradeoff` · `$verifiable-reasoning-eval` · `$frontier-sprint` · `$research-defense`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/paper-to-notebook` — turn a PDF paper into a runnable notebook (the seminar's reproduce-from-primary-source workflow) — *Lectures 1–3*
- `VizuaraAILabs/DeepSeek-From-Scratch` — MLA / MoE / MTP built from scratch (grounds the efficiency / SSM-vs-Transformer frontier) — *Lecture 10*

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **Automated research mini-agent** — hypothesis → experiment → report → uncertainty statement, audited against your own re-run — *Lectures 2, 12–13*
- **Synthetic-data audit** — real+synthetic vs real-only; artifact / model-collapse check across rounds — *Lecture 10*

