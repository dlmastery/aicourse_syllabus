# Teaching Rubric — How Every Course File in This Folder Is Written

> This file codifies the pedagogy borrowed from *Harnessing LLM Skills to Master Machine Learning*
> (the `machine-learning-full-course-by-ai` book) and applied to every updated course in
> `latest_june_2026/`. Every chapter/week chunk below follows this template so the program reads
> as one coherent, hands-on, harness-engineering-first curriculum.

## Core philosophy (inherited from the book)

1. **Harness engineering is part of the curriculum, not a productivity trick.**
   The ladder is `prompt → workflow → skill → harness`. Students do not just learn models and tools;
   they build reusable skills, evaluation loops, project memory, and critique systems.
2. **Learning loop:** `concept → code → critique → reflection → rebuild`.
3. **Evidence over vibes.** Every unit must leave behind an inspectable artifact (a memo, a log,
   a metric table, a runnable script, a review sheet) — not just "I watched a lecture."
4. **Baselines and failure modes first.** Complexity must be *earned*. Name what fails before celebrating what works.
5. **Plain English + exact statement + code mapping** for every technical idea. No symbol panic, no hand-waving.
6. **Case-study spine.** Each course carries 1–3 recurring anchor cases so abstract ideas stay grounded.

## Per-chapter (per-week / per-module) template

Each "chunk" in a course file MUST contain these sections, in order:

```
## Week/Module N — <Title>

**Altitude:** (Learner | Builder | Engineer | Specialist)   **Format:** lecture + lab hours
**Anchor case:** <the concrete scenario used to teach this unit>

### Learning goals
- 3–6 specific, testable outcomes ("be able to ...")

### Concept map
- The 4–8 core ideas, each with: plain-English meaning → where it matters → one common mistake.
- For any equation/algorithm use the book's micro-template:
  **Formula → Symbols → Shapes → Plain English → Tiny concrete example → Code mapping → Common mistake.**

### Hands-on build (the lab)
- A concrete thing students build/run this week (repo, notebook, agent, pipeline, eval).
- Tools/frameworks named explicitly (current as of June 2026).
- Deliverable + acceptance criteria (what "done and correct" looks like).

### Harness / reusable skill
- The reusable skill this week produces (e.g., `$eval-review`, `$agent-debugger`), with its
  Purpose / Inputs / Required outputs / Minimal workflow / Evidence artifact.

### Common failure modes
- 3–5 named failure modes + the fix for each (the trap, then the discipline that avoids it).

### Evidence artifact
- The exact file(s) the student commits this week as proof of judgment.

### Skill sink-in
- One prediction-before / result-after / what-changed reflection prompt.

### Readings & sources (2025–2026)
- Current papers, course pages, docs, and project references.
```

## DEPTH UPGRADE (required for subjects 02–16)

Every per-week chunk MUST additionally include:

1. **Dataset(s) named explicitly** — the concrete dataset/corpus/benchmark used that week (with a URL or
   `huggingface.co/...` / `kaggle.com/...` handle where applicable), plus its size and license note.
2. **Code stub** — a short fenced code block (Python/PyTorch/CLI) showing the skeleton the student fills in
   (function signatures, key API calls, expected shapes). 8–25 lines. Must be runnable-shaped, not pseudocode.
3. **Graded rubric table** — a small markdown table scoring the week's deliverable on 3–5 criteria
   (e.g., Correctness / Evidence / Reasoning / Reproducibility) with what "excellent vs failing" looks like.
4. **Assessment weight** — the % this week's deliverable contributes to the course grade. Each course's weeks
   must sum to 100% (lectures/quizzes/labs/project split stated in a course-level **Assessment** section).
5. **Reading list with paper titles** — 2–5 specific named papers/docs per week (title + authors/venue + year),
   not just course links. Prefer 2024–2026 primary sources; include the seminal paper where relevant.

Also add, once per course:
- A course-level **Assessment & grading** section (weights sum to 100%).
- A course-level **Tooling & environment** section (exact versions/frameworks as of June 2026).
- A **capstone/project spec** with milestones and an acceptance checklist.

Course 01 is the *baseline* format; subjects 02–16 must match its structure AND add the five items above.

## Altitude ladder (applied across the whole program)

| Stage | Focus | Harness goal | Main danger |
|-------|-------|--------------|-------------|
| Learner | concepts, baselines, intuition | use a small personal study harness consistently | trusting AI output without independent understanding |
| Builder | projects, evaluation, debugging | adapt and compose existing skills | many artifacts, no reusable process |
| Engineer | pipelines, monitoring, deployment, review | design reliable eval/debug/delivery harnesses | tuning the model while the system stays brittle |
| Specialist / Harness Designer | abstraction, system & workflow design | create new skills, protocols, benchmarks | treating harnesses as bureaucracy, not leverage |

## Sourcing rule

Every course is reconciled against four inputs (June 2026):
1. The prior program syllabus (`Syllabus.pdf` — 2025 baseline).
2. Latest university courses: Stanford, MIT, Princeton, Cornell, Harvard, CMU, UC Berkeley (2025–2026 offerings).
3. Industry/practitioner curricula: Krish Naik (krishnaik.in projects + Gen/Agentic AI), Vizuara (from-scratch series).
4. Frontier-tool reality as of mid-2026 (models, agent protocols, RAG, evals, safety, serving).
