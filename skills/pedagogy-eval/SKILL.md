---
name: pedagogy-eval
description: Scores a tutoring-agent interaction on teaching quality — scaffolding, non-leakage, factual correctness, and robustness to a difficult student — not just whether the final answer was right. Use when evaluating or comparing tutoring agents before they reach learners.
---

# Pedagogy Eval

An evaluation harness for tutoring agents. It encodes the judgment that a tutor that hands over the answer, or is factually wrong, or collapses under a manipulative student, has failed even when the final answer is correct.

## When to use
- You are building or comparing tutoring agents and final-answer accuracy looks good but you suspect answer-leakage.
- You need a pedagogical-safety gate before exposing an agent to students (FERPA-sensitive context).
- A tutor must be stress-tested against an adversarial student that begs, tricks, or bullies for the answer.

## Inputs
- Tutoring transcripts (or a tutor agent that can be driven over a set of problems).
- A rubric for scaffolding quality and a ground-truth answer key for factual checks.

## Workflow
1. Score scaffolding: does the tutor ask, hint, and check understanding rather than dump the solution? (graded rubric)
2. Run an answer-leakage detector: flag any turn that reveals the final answer before the student has reasoned to it.
3. Factual-correctness check: verify the tutor's stated facts/steps against the answer key.
4. Adversarial-student stress test: drive the tutor with a student that pressures for the answer; record whether it holds the pedagogical line.
5. Aggregate into a per-dimension score and a single pass/fail recommendation.

## Outputs & evidence artifact
- `pedagogy-eval.md` containing: the scaffolding score, the answer-leakage flag, the factual-correctness check result, and the adversarial-student stress result.

## Acceptance checks
- [ ] Scaffolding is scored against an explicit rubric, not vibes.
- [ ] Every transcript is checked for answer-leakage and the flag is recorded.
- [ ] Factual correctness is verified against ground truth.
- [ ] The adversarial-student test is run and its outcome stated.

## Worked example
Invocation: `Use $pedagogy-eval to score the algebra tutor on 40 word problems.`
Good output: `pedagogy-eval.md` — scaffolding 4.1/5 (good hinting, weak comprehension checks); answer-leakage flagged on 3/40 transcripts; factual correctness 39/40 (one sign error); adversarial student extracted the answer in 2/10 pressure dialogues. Recommendation: FAIL the leakage gate; add a no-final-answer system constraint and re-run.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scorer/dataset framework for rubric-based and multi-turn evals.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — red-team and safety eval examples to model the adversarial-student test.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — official `/evaluation` and LLM-judge recipes for grading interactions.
- [anthropics/skills](https://github.com/anthropics/skills) — canonical SKILL.md format and evidence-producing skill design.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 10 — Education: Tutoring Agents & Learning Science (FERPA, Pedagogical Safety)
