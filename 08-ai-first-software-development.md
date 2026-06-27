# Subject 08 — AI-First Software Development

**Track:** Engineering · **Altitude:** Builder → Engineer · **Length:** 12 weeks (3 lecture hrs + 4 lab hrs/wk)
**Prerequisites:** you can build and run a small web service (any language, JS/TS or Python preferred), use git,
and read a stack trace. No prior experience with AI coding tools required. Subject 07 (AI Agent Engineering)
helps but is not required — Weeks 3–5 re-derive the agent loop in a coding context.
**Pedagogy:** the program's `concept → code → critique → reflection → rebuild` loop, applied to the craft of
*building software with AI in the loop*. The throughline is the harness ladder `prompt → workflow → skill →
harness`: you start by *prompting* a coding model, then build *workflows* (PRD → plan → diff), then a reusable
*coding-agent skill*, then a full *delivery harness* (tests + review + security + deploy gates). The recurring
discipline: **AI writes more code faster, so your leverage moves from typing to specifying, reviewing, testing,
and gating.**

**Course anchor case (carried all 12 weeks):** *"Quill" — a small but real SaaS: a team note-taking app with
auth, a notes API, search, and a web UI.* It is a live codebase you extend feature-by-feature with AI coding
agents — realistic enough to hit context limits, security pitfalls, flaky tests, and deploy/rollback decisions,
small enough that one student owns the whole stack. A second throwaway case, *a CLI utility*, is used where a
self-contained example is clearer (e.g., building the coding agent in Week 3).

**What you leave with:** the **Quill** repo with a shipped, reviewed, tested, deployed feature; a from-scratch
coding agent; a hardened AI-IDE setup with project context-as-MCP-resources; an AI test + security + review
gate wired into CI; and a **reusable AI-SWE harness** of ten skills (`$spec-to-prd` … `$ai-incident-runbook`).

> **Provider-current note (June 2026).** Labs name **Claude Code** (CLI/agent), **Cursor** (AI IDE), **Warp**
> (AI terminal), **MCP** (GA in VS Code/Copilot/Claude), and **Semgrep** (SAST) as defaults because they are the
> current state of practice — but the *concepts* (context curation, autonomy gates, AI-generated tests, secure
> "vibe coding," review gates, post-deploy monitoring) are tool-neutral and the labs run against any modern
> coding model. When a lab calls a model, default to the latest capable Claude (Opus 4.x / Sonnet 4.x).

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 12 lectures (~36 contact hrs). Full time-boxed lecture plan: [`_toc/08-ai-first-software-development-toc.md`](_toc/08-ai-first-software-development-toc.md)._

1. **Lecture 1 — How Coding LLMs Actually Work (a usable mental model)** — Next-token prediction over code · Context window & code tokenization · Lost in the middle · Capability vs grounding · Determinism & temperature  ·  🔧 `$coding-model-profile`
2. **Lecture 2 — Prompt Engineering for Developers: Specs, Context, and PRDs** — Spec over wish · Acceptance tests in the prompt · Context curation & ordering · Few-shot from your repo · PRD as shared source of truth  ·  🔧 `$spec-to-prd`
3. **Lecture 3 — Building a Coding Agent From Scratch** — The coding-agent loop · Diff/patch edits vs full rewrites · Verification as the inner loop · Localization (find the right file) · Stop rule & budgets  ·  🔧 `$coding-agent-loop`
4. **Lecture 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources** — Repo indexing & retrieval · @-mentions & manual context · Rules / conventions files · PRDs/schemas as MCP resources · Context cost/quality trade-off  ·  🔧 `$project-context-pack`
5. **Lecture 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates** — Autonomy spectrum · Plan-approval checkpoint · Irreversible-action gates · Small reversible steps · Sandboxing & scoped permissions  ·  🔧 `$autonomy-gate-designer`
6. **Lecture 6 — The Modern AI Terminal and Sandboxing** — AI terminal · Why sandbox · Sandbox dimensions · Ephemeral sandboxes (E2B / cloud) · Allow-listed commands  ·  🔧 `$agent-sandbox-config`
7. **Lecture 7 — AI-Generated Tests and Test Quality** — Coverage ≠ quality · Mutation testing · Property-based testing · AI-assisted TDD · Test independence from the implementer  ·  🔧 `$ai-test-hardener`
8. **Lecture 8 — AI Security and Secure "Vibe Coding"** — Why AI code is insecure · SAST · Secret scanning · DAST · Dependency/supply-chain scanning  ·  🔧 `$secure-code-gate`
9. **Lecture 9 — AI Code Review Gates** — AI vs human review division of labor · Reviewer grounding · Signal vs noise · Review as a gate, not advice · Self-review prompt for the author  ·  🔧 `$ai-review-gate`
10. **Lecture 10 — Automated UI and App Building** — Generative UI · Reconciliation · Visual feedback loop · Component/E2E verification · Prototype vs keep  ·  🔧 `$ui-reconcile`
11. **Lecture 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation** — Observability for shipped features · SLOs & alerts · Feature flags + canary + rollback · AI-assisted incident response · SWE-bench-style self-evaluation  ·  🔧 `$ai-incident-runbook`
12. **Lecture 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent**  ·  🔧 `$ai-delivery-evidence-packet`

---

## Course-level Assessment & grading

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly labs (W1–W11, weighted below) | 75% | the AI-SWE skill ladder, one shippable artifact per week |
| Capstone (W12): a real feature shipped end-to-end | 25% | spec → agent → tests → review → security → deploy → monitor |

Weekly lab weights (sum to the 75%): W1 5 · W2 6 · W3 8 · W4 7 · W5 7 · W6 6 · W7 8 · W8 8 · W9 7 · W10 6 · W11 7.
Capstone 25. **Total = 100%.** Each week is graded on its rubric table. Labs are individual; the capstone may be
solo or paired (paired = higher acceptance bar). Every deliverable lands as a **PR on the Quill repo** with the
evidence artifact attached, so grading mirrors real code review.

## Tooling & environment (June 2026)

- **Coding agents / IDEs:** **Claude Code** (terminal agent + SDK), **Cursor** (AI IDE), GitHub **Copilot**
  (agent mode), plus one open option (**Aider** + an open-weight model via Ollama/vLLM) so no lab is vendor-locked.
- **Models:** Claude Opus 4.x / Sonnet 4.x (extended thinking) default; an open-weight code model (e.g., Qwen3-Coder
  / DeepSeek-V3) as the offline fallback.
- **Protocol:** **MCP** for exposing project context (PRDs, schemas, runbooks) as **resources** to the IDE/agent.
- **Terminal & sandboxing:** **Warp** (AI terminal); sandboxed execution via **Docker** dev containers / **E2B** /
  Claude Code's sandbox; ephemeral cloud sandboxes for agent-run code.
- **Testing:** `pytest` / `vitest`; **Hypothesis** (property-based); coverage via `coverage.py` / `c8`; mutation
  testing via `mutmut` / `Stryker`.
- **Security:** **Semgrep** (SAST), **Trivy**/**Grype** (deps/containers), **gitleaks** (secrets), OWASP
  **ZAP** (DAST), OWASP **Juice Shop** as a vulnerable target.
- **Review & CI:** GitHub Actions; AI review via **Claude Code review** / **CodeRabbit**; branch protection + gates.
- **UI building:** **v0**, **Lovable**, **Bolt.new** for generated UI, reconciled into the real codebase.
- **Eval:** **SWE-bench Verified** harness for measuring coding-agent capability; **Langfuse** for agent run traces.
- **Deploy/monitor:** Docker + a PaaS (Vercel/Fly/Render); **Sentry** + **OpenTelemetry** + a logs/metrics stack.

## Capstone spec (preview; full rubric in Week 12)

Ship one **non-trivial Quill feature** (e.g., shared notebooks with per-note permissions, or full-text search with
ranking) **end-to-end with an AI coding agent**: a written **PRD/spec** (exposed as an MCP resource), an
agent-built implementation with **human-in-the-loop gates**, **AI-generated + human-curated tests** (incl. one
property-based test) with coverage on changed lines, a passing **SAST/secret/deps** scan, an **AI + human code
review** gate, deployment behind a **canary/rollback**, and **post-deploy monitoring** with one practiced incident
drill. Acceptance = the feature is live behind a flag, all CI gates (tests/security/review) are green, and you can
roll it back in one command and explain the monitoring you'd watch.

---

## Week 1 — How Coding LLMs Actually Work (a usable mental model)

### State of the Art (June 2026)
- Coding frontier: **GPT-5.5** (~59% SWE-bench, strict-coding lead), **Claude Opus 4.8**, **Gemini 3.1 Pro**; 1M context standard.
- Open-weight code models **Qwen3-Coder** and **DeepSeek V4** run offline via vLLM/Ollama for vendor-free labs.
- **"Lost in the middle"** persists despite 1M windows — context curation is still decisive.
- The capability-vs-grounding gap is mostly a **context** problem, not a model problem.

**Altitude:** Builder · **Format:** 3h lecture + 4h lab
**Anchor case:** profile a coding model on Quill — where it shines (boilerplate, tests, glue) and where it confidently fails (your codebase's conventions, cross-file logic).

### Learning goals
- Explain how a code model produces code: next-token prediction over code+text, trained on public repos, conditioned on the **context you give it** — not a database lookup of "the right answer."
- Reason about **context window, tokenization of code, and "lost in the middle"** to predict when a model will fail.
- Distinguish **capability** (can it write this function?) from **grounding** (does it know *your* repo's types/conventions?).
- Build a personal "what to delegate vs what to write" map for AI-first development.

### Concept map
- **Next-token prediction over code.** *Plain English:* the model continues the most likely code given the prompt +
  context; it has no execution, no ground truth, no access to your private repo unless you put it in context. Where
  it matters: it explains both fluency and hallucination. *Common mistake:* treating output as verified fact rather
  than a *plausible draft to test*.
- **Context window & code tokenization.** *Formula (budget):* `usable ≈ window − (system + tools + history)`. *Plain
  English:* everything the model "knows" right now is what fits in the window; code is token-dense (identifiers,
  whitespace). *Tiny example:* a 200k-token window sounds huge until a monorepo's relevant files are 400k tokens.
  *Common mistake:* pasting the whole repo and assuming the model reads it all evenly.
- **Lost in the middle.** Plain English: models attend best to the start and end of long contexts; middle content
  gets neglected. Where it matters: ordering and *curating* context beats dumping it. *Common mistake:* burying the
  one critical constraint in the middle of a 50-file paste.
- **Capability vs grounding.** Plain English: a model can write a perfect generic auth handler (capability) and
  still violate your project's error-handling convention (grounding). Where it matters: most "AI got it wrong"
  moments are grounding failures fixable with better context (Week 4). *Common mistake:* blaming capability and
  switching models when the fix is context.
- **Determinism & temperature.** Plain English: the same prompt can yield different code run-to-run; pin temperature
  and seed where you need reproducibility (e.g., evals).

### Hands-on build (the lab)
- `experiments/code_profile/`: give a model 12 Quill tasks across a difficulty ladder (one-liner → cross-file
  refactor → bug fix needing repo conventions). Record pass/fail and *why* each failure happened (capability vs
  grounding vs context-overflow).
- Build a one-page **delegation map**: tasks to hand the agent fully, tasks to pair on, tasks to write yourself.
- **Deliverable:** the profile table + the delegation map. **Acceptance:** every failure is labeled with a cause
  (not just "wrong"), and the delegation map's claims are backed by your profile results.

▶ **Practical project:** `microsoft/generative-ai-for-beginners` — use its code-generation lessons to profile a model's capability-vs-grounding failure shape on Quill.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env (Python) or Node + your coding model SDK; skim `microsoft/generative-ai-for-beginners` code-gen lessons.
2. Build `experiments/code_profile/`: 12 Quill tasks on a ladder (one-liner → cross-file → convention-bound).
3. Run each with curated (not whole-repo) context; record pass/fail.
4. Label every failure: capability / grounding / context-overflow.
5. Pin temperature + seed; re-run to confirm reproducibility.
6. Write the one-page delegation map (delegate / pair / self).
- **Artifact:** `evidence/week01-profile.md` + delegation map committed.
- **Use `$coding-model-profile`:** learn the model's failure shape on THIS repo before trusting it.
- **Done when:** every failure is cause-labeled and the delegation map is backed by results.
- **Stretch:** repeat with an open-weight code model (Qwen3-Coder) and compare failure shapes.

### Harness / reusable skill — `$coding-model-profile`
- **Purpose:** before trusting a model on a codebase, learn its failure shape *here*.
- **Inputs:** a repo + a difficulty ladder of tasks. **Outputs:** a pass/fail table, a failure-cause label per task
  (capability/grounding/context), and a delegation map. **Evidence artifact:** `evidence/week01-profile.md`.

### Common failure modes
- **Output-as-truth** → shipping unverified generated code. *Fix:* treat every generation as a draft to test/review.
- **Context dumping** → "lost in the middle," wasted tokens. *Fix:* curate and order context (preview of Week 4).
- **Grounding/capability confusion** → switching models to fix a context problem. *Fix:* label the failure cause first.
- **Reproducibility blindness** → "it worked yesterday." *Fix:* pin temperature/seed for anything you measure.

### Evidence artifact
`evidence/week01-profile.md` (12-task table with failure causes) + `evidence/week01-delegation-map.md`.

### Skill sink-in
Before profiling, **predict** which 3 of the 12 tasks the model will fail and why. Run them. Record which failure
**surprised** you — usually a grounding failure you assumed was capability.

### Dataset / benchmark
**HumanEval** (`openai/human-eval`, MIT; 164 hand-written problems) and **MBPP** (`google-research/mbpp`,
~1k problems) to calibrate raw capability; **RepoBench** (`Leolty/repobench`, 2023) and **CrossCodeEval**
(`amazon-science/cceval`, 2023) for *repo-grounded* completion. Use small subsets — capability vs grounding is the point.

### Code stub
```python
# experiments/code_profile/run.py — profile capability vs grounding on YOUR repo
LADDER = [("oneliner", tasks_oneliner), ("crossfile", tasks_crossfile), ("convention", tasks_convention)]

def profile(model, repo):
    rows = []
    for tier, tasks in LADDER:
        for t in tasks:
            out = model.complete(prompt=t.prompt, context=curate(repo, t))  # curated, not whole-repo
            ok = run_tests(t, out)
            cause = None if ok else classify_failure(out, t)  # capability | grounding | context_overflow
            rows.append({"tier": tier, "task": t.id, "ok": ok, "cause": cause})
    return rows
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Profile rigor | 12 tasks across ladder, all run | partial | toy only |
| Failure labeling | Every failure → capability/grounding/context | some labeled | "wrong" |
| Delegation map | Backed by profile data | plausible | guess |
| Reproducibility | Temp/seed pinned, re-runnable | mostly | unpinned |

**Assessment weight:** 5%.

### Readings & sources (2025–2026)
- Chen et al., "Evaluating Large Language Models Trained on Code" (Codex/HumanEval), 2021.
- Liu et al., "Lost in the Middle: How Language Models Use Long Contexts," TACL 2024.
- Ding et al., "CrossCodeEval: A Diverse and Multilingual Benchmark for Cross-File Code Completion," NeurIPS 2023.
- CMU 11-711 "In-Context Learning & Prompting" lecture (Sean Welleck, 2025); Karpathy, "Software is changing (again)"/"vibe coding" talks (2025).

---

## Week 2 — Prompt Engineering for Developers: Specs, Context, and PRDs

### State of the Art (June 2026)
- **Spec-driven / context engineering** is the dominant practice; **PRDs-as-MCP-resources** keep one source of truth.
- **DSPy**-style compiled prompts and eval-graded specs beat hand-tuned wording.
- **SWE-bench Verified** issues are the corpus for "what a good vs underspecified issue looks like."
- **Prompt caching** rewards stable spec prefixes (up to 90% off repeated context).

**Altitude:** Builder · **Anchor case:** turn a vague Quill request ("let people share notes") into a precise spec + curated context the agent can execute without guessing.

### Learning goals
- Write developer prompts as **specifications**: goal, constraints, interfaces, acceptance tests, and non-goals.
- Curate context deliberately (relevant files, types, conventions, examples) and order it for the "lost in the middle" effect.
- Use **few-shot examples from your own codebase** to ground style/conventions.
- Convert a feature request into a **PRD** (Product Requirements Doc) the agent and humans share as the source of truth.

### Concept map
- **Spec over wish.** Plain English: "let people share notes" is a wish; a spec says *who* shares, *what
  permissions*, *which endpoints/types change*, and *how we'll know it's done*. Where it matters: the agent fills
  ambiguity with guesses; specs remove guesses. *Common mistake:* prompting the *wish* and debugging the model's guess.
- **Acceptance tests in the prompt.** *Plain English:* state the tests/behaviors the code must satisfy *before* the
  agent writes code; it can then self-check. *Code mapping:* include a `should:` list or literal test cases.
  *Common mistake:* no acceptance criteria → "done" is undefined.
- **Context curation & ordering.** *Formula (sketch):* `prompt = task ⊕ constraints ⊕ relevant_code ⊕ examples`,
  with the critical constraint at the *end*. *Plain English:* include exactly the files/types that matter, ordered
  so the key constraint isn't buried. *Common mistake:* whole-repo paste or, worse, the wrong files.
- **Few-shot from your repo.** Plain English: show 1–2 examples of *your* error handling / test style so the model
  matches conventions. Where it matters: grounding (Week 1). *Common mistake:* generic examples that teach generic style.
- **PRD as shared source of truth.** Plain English: a short doc (problem, users, requirements, acceptance,
  non-goals) both humans and agents read; later exposed as an MCP resource (Week 4). *Common mistake:* the spec
  living only in a throwaway chat prompt.

### Hands-on build
- `prd/share-notes.md`: a real PRD for Quill's sharing feature (problem, users, requirements, API/type changes,
  acceptance tests, non-goals, security notes).
- A/B test: run the same agent on the **wish prompt** vs the **PRD + curated context**; compare correctness, rework, and tokens.
- **Deliverable:** the PRD + the A/B result. **Acceptance:** the PRD version produces materially less rework
  (fewer iterations to passing acceptance criteria), measured, not asserted.

▶ **Practical project:** `VizuaraAI/modern-software-developer-bootcamp` — follow its spec→PRD→plan workflow to turn the Quill sharing request into an agent-ready PRD.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv`/Node + Claude Code or Cursor; skim `VizuaraAI/modern-software-developer-bootcamp` spec workflow.
2. Write `prd/share-notes.md`: problem, users, testable requirements, API/type changes, acceptance, non-goals, security.
3. Curate an ordered context bundle (critical constraint last) + 1–2 in-repo few-shot examples.
4. A/B: run the agent on the wish prompt vs the PRD + context.
5. Measure iterations-to-pass, rework, and tokens for both.
6. Commit the PRD as shared truth.
- **Artifact:** `prd/share-notes.md` + `evidence/week02-ab.md` committed.
- **Use `$spec-to-prd`:** convert any request into an agent-ready PRD + context manifest.
- **Done when:** the PRD version produces materially less rework, measured not asserted.
- **Stretch:** reverse-engineer two SWE-bench Verified issues into PRDs.

### Harness / reusable skill — `$spec-to-prd`
- **Purpose:** convert any feature request into an agent-ready PRD + curated context bundle.
- **Inputs:** a request + the repo. **Outputs:** a PRD (problem/users/requirements/acceptance/non-goals/security),
  a curated file list (ordered), and 1–2 in-repo few-shot examples. **Evidence artifact:** `prd/<feature>.md` + the context manifest.

### Common failure modes
- **Wish-prompting** → the agent guesses; you debug guesses. *Fix:* spec with acceptance criteria up front.
- **Context dumping/misordering** → buried constraints ignored. *Fix:* curate + put the critical constraint last.
- **Generic few-shot** → off-convention code. *Fix:* examples from your own repo.
- **Ephemeral spec** → no shared truth, drift. *Fix:* a committed PRD humans and agents both read.

### Evidence artifact
`prd/share-notes.md` + `evidence/week02-ab.md` (wish vs PRD: iterations-to-pass, rework, tokens).

### Skill sink-in
Predict how many agent iterations the wish prompt will need to pass acceptance vs the PRD. Run both. Record the
ratio — it quantifies why specifying beats prompting.

### Dataset / benchmark
Use **SWE-bench Verified** issue texts (`princeton-nlp/SWE-bench_Verified`, HF) as a corpus of real-world
specs/issues to study *what a good vs underspecified issue looks like*; reverse-engineer two into PRDs. No training;
this week is qualitative + your A/B numbers.

### Code stub
```markdown
<!-- prd/share-notes.md — the agent-and-human source of truth -->
# PRD: Shared Notebooks
## Problem & users
Teams need to share notes read/write or read-only with specific members.
## Requirements (testable)
- [ ] `POST /notebooks/:id/share {user_id, role: viewer|editor}` -> 200, persists a permission row
- [ ] viewers get 403 on PUT /notes; editors get 200
- [ ] sharing is idempotent; re-share updates role
## API/type changes
- new table `permissions(notebook_id, user_id, role)`; extend `authz.can(user, action, resource)`
## Acceptance tests
1. owner shares editor -> editor edits a note -> 200
2. owner shares viewer -> viewer edits -> 403
## Non-goals: public links, org-wide sharing.  ## Security: enforce authz server-side, never trust client role.
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Spec quality | Testable requirements + acceptance + non-goals + security | requirements only | a wish |
| Context curation | Right files, ordered, in-repo few-shot | some curation | dump/none |
| A/B rigor | Iterations/rework/tokens measured both ways | partial | asserted |
| Reusability | PRD committed as shared truth | committed | chat-only |

**Assessment weight:** 6%.

### Readings & sources
- White et al., "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT," 2023.
- Anthropic, "Prompt engineering" + "Claude Code best practices" docs (2024–2026); OpenAI "Prompting for code" guide (2025).
- Khattab et al., "DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines," ICLR 2024 (specs > hand-prompts).
- Jimenez et al., "SWE-bench: Can Language Models Resolve Real-World GitHub Issues?", ICLR 2024 (what real issues look like).

---

## Week 3 — Building a Coding Agent From Scratch

### State of the Art (June 2026)
- **SWE-bench Verified/Pro** is the capability benchmark; **SWE-agent** and **Aider** are the OSS references.
- **"Agentless"**-style localization remains competitive with complex agent scaffolds.
- **Claude Agent SDK** (`query()`, subagents, hooks) and **OpenAI Agents SDK** productionize the read→edit→test loop.
- **Verification-in-the-loop** (run tests, trust the exit code) is the core reliability lever.

**Altitude:** Builder → Engineer · **Anchor case:** build a minimal coding agent (read → edit → run → repeat) and use it to fix a real bug in the *CLI-utility* case, then on Quill.

### Learning goals
- Implement the **coding-agent loop**: read files → propose an edit (diff) → apply → run tests → read results → repeat, with a stop rule.
- Design the agent's **tools** (read_file, list_dir, apply_patch/edit, run_tests, grep) and why diff-based edits beat full-file rewrites.
- Add a **verification step** (tests/lint) so the agent self-corrects instead of declaring victory blindly.
- Compare your scratch agent to a production one (Claude Code / Aider) and explain the gap.

### Concept map
- **The coding-agent loop.** *Formula:* `state = repo ⊕ task ⊕ history`; `action ∈ {read, edit, run, search, done}`.
  *Plain English:* the same observe→act→observe loop as any agent, but actions are file ops and the "observation"
  is test/compiler output. *Code mapping:* a `while` loop dispatching file tools + a test runner. *Common mistake:*
  no test-run step → the agent "thinks" it fixed the bug and stops.
- **Diff/patch edits vs full rewrites.** Plain English: have the agent emit a *minimal patch*, not the whole file —
  cheaper, reviewable, less collateral damage. *Code mapping:* apply a unified diff / search-replace block. *Common
  mistake:* full-file rewrites that silently drop unrelated code.
- **Verification as the inner loop.** Plain English: run tests/lint after each edit and feed failures back as
  observations; the agent fixes its own mistakes. Where it matters: this single loop is most of what makes coding
  agents work. *Common mistake:* trusting the agent's self-report over the test exit code.
- **Localization (find the right file).** Plain English: most of the difficulty is *where* to edit, not *what* to
  type; grep/embeddings/stack-trace parsing localize. *Common mistake:* editing the first plausible file.
- **Stop rule & budgets.** Plain English: stop on green tests, step cap, or cost cap — never "until it feels done."

### Hands-on build
- `minicoder/`: a from-scratch coding agent with tools `read_file`, `grep`, `apply_patch`, `run_tests`; a loop that
  edits → runs tests → re-edits; stops on green or a step cap. No framework.
- Use it to fix 5 seeded bugs in the CLI case + 2 in Quill; log diffs and test transitions.
- **Deliverable:** the agent + a fix log (red→green per bug). **Acceptance:** ≥5/7 bugs fixed with the agent's own
  test-run verification (not your manual check), edits are minimal diffs, and the loop always terminates.

▶ **Practical project:** `Aider-AI/aider` — clone it and benchmark your from-scratch `minicoder` against this production agent on the same seeded bugs.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + your model SDK; `pip install aider-chat` (`Aider-AI/aider`) as the production comparison.
2. Build `minicoder/`: tools `read_file`, `grep`, `apply_patch`, `run_tests`; a read→patch→test→repeat loop.
3. Make verification in-loop: after a patch, run tests and feed the real exit code back (no self-report).
4. Add a stop rule (green / step-cap / cost-cap) and minimal-diff edits.
5. Fix 5 seeded CLI bugs + 2 Quill bugs; log red→green per bug.
6. Run Aider on the same 7 bugs; record the capability gap.
- **Artifact:** `minicoder/` + `evidence/week03-fixlog.md` committed.
- **Use `$coding-agent-loop`:** a minimal debuggable loop you understand end-to-end.
- **Done when:** ≥5/7 fixed via the agent's own verification, edits are minimal diffs, the loop always terminates.
- **Stretch:** run your agent on 5 SWE-bench Verified "lite" instances.

### Harness / reusable skill — `$coding-agent-loop`
- **Purpose:** a minimal, debuggable coding-agent loop you understand end-to-end (the thing IDEs hide).
- **Inputs:** a repo + a failing test or bug. **Outputs:** localized files, a minimal patch, the test red→green
  transition, and a stop reason. **Evidence artifact:** `evidence/week03-fixlog.md`.

### Common failure modes
- **No verification step** → false "fixed." *Fix:* tests run inside the loop; trust the exit code.
- **Full-file rewrites** → collateral damage. *Fix:* minimal diffs / search-replace edits.
- **Bad localization** → edits the wrong file. *Fix:* grep/stack-trace/embedding localization first.
- **No stop rule** → runs forever or burns budget. *Fix:* green-tests / step-cap / cost-cap stop.

### Evidence artifact
`evidence/week03-fixlog.md` (per bug: localization, diff, red→green, stop reason) + the `minicoder/` source.

### Skill sink-in
Predict how many of the 7 bugs your scratch agent fixes vs Claude Code/Aider on the same set. Run both. Record the
gap and the *one* capability (localization? verification? planning?) that explains most of it.

### Dataset / benchmark
**SWE-bench Verified** (`princeton-nlp/SWE-bench_Verified`, 500 human-validated real GitHub issues) — run your
agent on **5 "lite"/easy instances** as a reality check against the production frontier. Reference agents:
`princeton-nlp/SWE-agent` and `Aider-AI/aider` (OSS).

### Code stub
```python
# minicoder/loop.py — read -> patch -> test -> repeat, with verification inside the loop
TOOLS = {"read_file": read_file, "grep": grep, "apply_patch": apply_patch}

def fix(task, max_steps=12):
    history = [observe_failing_test(task)]            # start from the red test
    for step in range(max_steps):
        action = model_decide(task, history)          # {"tool":..., "args":...} | {"done": True}
        if action.get("done"):
            break
        result = TOOLS[action["tool"]](**action["args"])
        if action["tool"] == "apply_patch":
            result = run_tests(task)                   # VERIFY: feed real test output back, not self-report
        history.append({"action": action, "obs": result})
    return run_tests(task)                             # stop rule: green or budget exhausted
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Loop works | ≥5/7 bugs fixed, self-verified | 3–4 | <3 |
| Edit quality | Minimal diffs, no collateral | mostly | full rewrites |
| Verification | Tests run in-loop, exit code trusted | partial | self-report |
| Reflection | Names the capability gap vs prod agent | vague | none |

**Assessment weight:** 8%.

### Readings & sources
- Yang et al., "SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering," NeurIPS 2024.
- Xia et al., "Agentless: Demystifying LLM-based Software Engineering Agents," 2024 (localization > complex agents).
- Jimenez et al., "SWE-bench" (ICLR 2024) + OpenAI "Introducing SWE-bench Verified" (2024).
- Anthropic, "Claude Code" / "Building agents with the Claude Agent SDK" docs (2025–2026); Aider docs (2025).

---

## Week 4 — The AI IDE: Context, Embeddings, and PRDs as MCP Resources

### State of the Art (June 2026)
- **MCP resources** (Linux Foundation; new 2026-07-28 spec) expose PRDs/schemas to IDE + agent as live context.
- **Cursor, Claude Code, Copilot agent-mode** index repos with embeddings + rules files (`CLAUDE.md`, `.cursor/rules`).
- Repo-grounded evals: **CrossCodeEval, RepoBench** for cross-file completion.
- Context **curation/ordering** still beats dumping despite 1M-token windows.

**Altitude:** Engineer · **Anchor case:** configure Cursor/Claude Code for Quill so the agent *automatically* has the right context — repo index, types, conventions, and the PRD — without manual pasting.

### Learning goals
- Explain how AI IDEs build context: **repo indexing + embeddings + retrieval**, `@`-mentions, and rules/conventions files.
- Expose **project context as MCP resources** (PRDs, schemas, runbooks) so the IDE/agent pulls truth, not stale paste.
- Write project **rules/conventions** (e.g., `CLAUDE.md` / Cursor rules) that ground every generation.
- Measure how much good context configuration improves first-pass correctness.

### Concept map
- **Repo indexing & retrieval.** Plain English: the IDE embeds your files and retrieves the most relevant chunks
  per query, so you don't paste. Where it matters: scales context past the window (Week 1). *Common mistake:*
  assuming the index is fresh/complete — stale indexes feed stale code.
- **`@`-mentions & manual context.** Plain English: explicitly attach the file/symbol/doc that matters when
  retrieval might miss it. *Common mistake:* relying purely on auto-retrieval for a cross-cutting change.
- **Rules / conventions files.** *Plain English:* a committed file (`CLAUDE.md`, `.cursor/rules`) of project
  conventions, commands, and do/don'ts that's injected into every prompt — durable grounding. *Common mistake:*
  conventions living in people's heads, so every generation re-litigates style.
- **PRDs/schemas as MCP resources.** *Plain English:* expose the PRD, DB schema, and runbook as MCP **resources**
  the agent reads on demand — the Week-2 PRD becomes live, addressable context (`prd://share-notes`). Where it
  matters: one source of truth for humans and agents. *Common mistake:* copy-pasting the PRD into chat where it goes stale.
- **Context cost/quality trade-off.** Plain English: more retrieved context isn't always better (noise, cost,
  lost-in-the-middle); tune k and ordering. *Common mistake:* maxing retrieval and degrading quality.

### Hands-on build
- Configure Quill's IDE: a `CLAUDE.md`/rules file (conventions, commands, architecture), `@`-mention workflow, and
  an **MCP server exposing `prd://` and `schema://` resources** (reuse Subject 07 Week 3 if taken).
- A/B: implement a small change **with vs without** the rules file + MCP resources; measure first-pass acceptance and rework.
- **Deliverable:** the IDE config + MCP resource server + the A/B. **Acceptance:** the configured setup measurably
  raises first-pass correctness / lowers rework, and the agent demonstrably pulls the PRD from the MCP resource.

▶ **Practical project:** `modelcontextprotocol/servers` — follow its resource examples to expose Quill's PRDs and DB schema as `prd://` / `schema://` MCP resources to the IDE.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `mcp` SDK + Cursor/Claude Code; clone `modelcontextprotocol/servers` resource examples.
2. Write a `CLAUDE.md`/rules file (conventions, commands, architecture) for Quill.
3. Build `context_mcp/server.py` exposing `prd://{feature}` and `schema://db` resources.
4. Wire `@`-mentions + the MCP server into the IDE so the agent auto-pulls truth.
5. A/B a small change with vs without the rules file + MCP resources.
6. Measure first-pass acceptance + rework; confirm the agent reads the PRD resource.
- **Artifact:** `evidence/week04-context-pack/` (rules file + MCP server + A/B note) committed.
- **Use `$project-context-pack`:** make the repo AI-ready so agents are grounded by default.
- **Done when:** the configured setup raises first-pass correctness and the agent pulls the PRD from MCP.
- **Stretch:** add a runbook resource and a freshness check that re-indexes on change.

### Harness / reusable skill — `$project-context-pack`
- **Purpose:** make a repo "AI-ready" so agents are grounded by default.
- **Inputs:** a repo + its PRDs/schemas/runbooks. **Outputs:** a rules/conventions file, an MCP resource server for
  docs/schemas, and an `@`-mention cheat-sheet. **Evidence artifact:** `evidence/week04-context-pack/`.

### Common failure modes
- **Stale index** → agent codes against old structure. *Fix:* re-index on change; verify freshness.
- **Conventions-in-heads** → inconsistent style, repeated corrections. *Fix:* a committed rules file.
- **PRD drift** → chat-pasted spec rots. *Fix:* PRD as an MCP resource, single source of truth.
- **Over-retrieval** → noisy, costly context. *Fix:* tune k/ordering; `@`-mention the decisive file.

### Evidence artifact
`evidence/week04-context-pack/` — rules file, MCP resource server, A/B note (with/without context: first-pass acceptance, rework).

### Skill sink-in
Predict the first-pass acceptance lift from adding the rules file + PRD resource. Measure via the A/B. Record
whether grounding (context) or capability (model) was the bigger lever — it's almost always context.

### Dataset / benchmark
**SWE-bench Verified** instances reused as repo-grounded tasks to A/B context configurations; **CrossCodeEval** for
cross-file retrieval quality. IDE/MCP refs: Cursor docs, **Claude Code** docs, and `modelcontextprotocol/servers`
(resource examples).

### Code stub
```python
# context_mcp/server.py — expose project truth as MCP resources the IDE/agent reads on demand
from mcp.server.fastmcp import FastMCP
mcp = FastMCP("quill-context")

@mcp.resource("prd://{feature}")
def prd(feature: str) -> str:
    """Live PRD for a feature, e.g. prd://share-notes — single source of truth for humans + agents."""
    return read(f"prd/{feature}.md")

@mcp.resource("schema://db")
def schema() -> str:
    return read("db/schema.sql")        # agent grounds DB changes in the REAL schema, not a guess
```
```markdown
<!-- CLAUDE.md (excerpt) — durable, injected-every-prompt conventions -->
## Conventions
- Errors: return Result types, never throw across module boundaries. Tests: vitest, colocated *.test.ts.
- Authz: enforce in `authz.can()` server-side only. Run `pnpm verify` (lint+typecheck+test) before "done".
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Context config | Rules file + MCP resources + @-mention flow | rules file only | ad-hoc paste |
| Grounding proof | Agent pulls PRD/schema from MCP resource | partial | none |
| A/B rigor | First-pass + rework measured both ways | partial | asserted |
| Freshness | Index/resources stay current | mostly | stale |

**Assessment weight:** 7%.

### Readings & sources
- Cursor docs ("Codebase indexing", "Rules"), 2025–2026; Anthropic "Claude Code: memory & MCP" docs (2025–2026).
- MCP specification — **Resources** primitive (modelcontextprotocol.io, 2024–2026).
- Liu et al., "Lost in the Middle," TACL 2024 (why ordering/curation matters); Ding et al., "CrossCodeEval," NeurIPS 2023.
- Harvard AC215 "LLMs: LangChain/LlamaIndex/RAG" module (2025) — retrieval-as-context.

---

## Week 5 — Coding-Agent Autonomy Patterns and Human-in-the-Loop Gates

### State of the Art (June 2026)
- **Plan-mode + permission gates** are standard in Claude Code / Cursor / Copilot agent mode.
- **METR** long-horizon autonomy evals track where agents go wrong over many steps.
- **Small reversible steps + irreversible-action gates** are the production discipline.
- Orchestrator-led **subagents** (Claude Agent SDK) bound blast radius for multi-file work.

**Altitude:** Engineer · **Anchor case:** decide *how much* to let the agent do unattended on Quill — and where a human must approve — across a spectrum from autocomplete to multi-file autonomous PRs.

### Learning goals
- Place a task on the **autonomy spectrum** (autocomplete → chat-edit → supervised agent → autonomous agent) and pick the right level.
- Design **human-in-the-loop gates**: plan approval, diff review, and irreversible-action gates (migrations, deploys, deletes).
- Use **plan-then-execute** with a checkpoint so you approve the approach before the agent writes 600 lines.
- Bound autonomy with sandboxing, scoped permissions, and small reversible steps.

### Concept map
- **Autonomy spectrum.** Plain English: more autonomy = more leverage *and* more risk/nondeterminism; match the
  level to task reversibility and clarity. *Tiny example:* autocomplete for a one-liner; supervised agent for a
  feature; never fully-autonomous on a prod DB migration. *Common mistake:* max autonomy by default ("let it cook")
  on high-stakes, irreversible work.
- **Plan-approval checkpoint.** *Plain English:* the agent proposes a plan/diff outline; a human approves *before*
  implementation. Where it matters: catches wrong approaches cheaply (before 600 lines). *Common mistake:* reviewing
  only the final giant diff, when the approach was wrong at step 1.
- **Irreversible-action gates.** Plain English: deletes, migrations, deploys, external sends, money — always behind
  an explicit human approval, regardless of autonomy level. *Common mistake:* an autonomous agent with prod credentials.
- **Small reversible steps.** Plain English: prefer many small PRs/commits the agent can be steered between, over
  one mega-change. Where it matters: reviewability + rollback. *Common mistake:* a 2000-line agent PR no one can review.
- **Sandboxing & scoped permissions.** Plain English: run agent code in a sandbox with least-privilege creds (bridge to Week 6).

### Hands-on build
- Implement a **plan-gate workflow**: the agent must output a plan/diff outline; a human approves/edits; then it
  implements; then a diff-review gate; then an irreversible-action gate for any migration/deploy.
- Apply it to two Quill changes: one low-stakes (UI copy) fully delegated, one high-stakes (schema migration) gated at every step.
- **Deliverable:** the gated workflow + a decision log per change. **Acceptance:** the high-stakes change is blocked
  at the plan gate at least once (you caught a bad approach), and irreversible actions never run without approval.

▶ **Practical project:** `anthropics/anthropic-cookbook` — adapt its agent/plan-mode patterns to build the plan-gate → diff-gate → irreversible-action-gate workflow.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv`/Node + Claude Code (plan mode) or Cursor; skim `anthropics/anthropic-cookbook` agent patterns.
2. Build `workflow/gated_agent.py`: the agent emits a plan outline ONLY (no code yet).
3. Add a plan-approval gate, then a diff-review gate, then an irreversible-action gate (migrations/deploys/deletes).
4. Apply to two Quill changes: low-stakes UI copy (delegated) + high-stakes schema migration (gated each step).
5. Record where the plan gate caught a bad approach and lines of wasted impl avoided.
6. Write the autonomy-level + gate decision log.
- **Artifact:** `evidence/week05-autonomy.md` + decision logs committed.
- **Use `$autonomy-gate-designer`:** set autonomy level + gates + rollback path per task.
- **Done when:** the high-stakes change is blocked at the plan gate ≥once; no irreversible action runs unapproved.
- **Stretch:** add scoped sandbox creds (bridge to Week 6) to the gated runner.

### Harness / reusable skill — `$autonomy-gate-designer`
- **Purpose:** decide and enforce the right autonomy level + gates for a task.
- **Inputs:** a task + its reversibility/stakes. **Outputs:** the autonomy level, the gates (plan/diff/irreversible),
  the sandbox/permission scope, and the rollback path. **Evidence artifact:** `evidence/week05-autonomy.md`.

### Common failure modes
- **Default-max autonomy** → unreviewed risky changes. *Fix:* match level to reversibility/clarity.
- **Final-diff-only review** → wrong approach caught too late. *Fix:* a plan-approval checkpoint first.
- **Ungated irreversible actions** → prod incidents. *Fix:* hard human gate on migrations/deploys/deletes.
- **Mega-PRs** → unreviewable, unrollbackable. *Fix:* small reversible steps.

### Evidence artifact
`evidence/week05-autonomy.md` (autonomy levels + gates per change) + decision logs showing a plan-gate rejection.

### Skill sink-in
Predict, for your two changes, where the agent's plan will be wrong. Run the plan gate. Record whether the gate
caught it — and how many lines of wasted implementation you avoided.

### Dataset / benchmark
Qualitative, on Quill, but calibrate against **SWE-bench Verified** "trajectory" analyses (where autonomous agents
go wrong) and the **Claude Code "permissions / plan mode"** behavior. Reference: METR's autonomous-coding task
evaluations (2024–2025) on long-horizon agent reliability.

### Code stub
```python
# workflow/gated_agent.py — plan gate -> implement -> diff gate -> irreversible gate
def run_gated(task):
    plan = agent.plan(task)                              # outline ONLY, no code yet
    if not human_approve(plan): return "rejected at plan gate"   # cheap catch of wrong approach
    diff = agent.implement(plan)
    if not human_review(diff):  return "rejected at diff gate"
    for action in diff.actions:
        if irreversible(action):                         # migration/deploy/delete/external-send
            require_explicit_human_ok(action)            # hard gate regardless of autonomy level
        apply(action)                                    # in sandbox, scoped creds
    return "merged"
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Level matching | Autonomy matched to stakes for both changes | one | max-by-default |
| Plan gate | Catches a bad approach before implementation | present | final-diff only |
| Irreversible gates | All risky actions human-approved | most | ungated |
| Reversibility | Small steps + rollback path | mostly | mega-PR |

**Assessment weight:** 7%.

### Readings & sources
- Anthropic, "Building Effective Agents" (2024) + "Claude Code best practices: plan mode & permissions" (2025–2026).
- METR, "Evaluating frontier models for autonomous capabilities" / autonomous SWE task reports (2024–2025).
- Cognition, "Introducing Devin" + "Don't Build Multi-Agents" engineering posts (2024–2025) — autonomy trade-offs.
- Berkeley CS294 "Coding Agents & Vulnerability Detection" lecture (2025).

---

## Week 6 — The Modern AI Terminal and Sandboxing

### State of the Art (June 2026)
- Ephemeral sandboxes: **E2B, Modal, Daytona, Claude Code sandbox** — disposable per-task boxes.
- **Warp agent-mode** + dev containers for scoped, explained command execution.
- **AgentDojo** execution/exfiltration scenarios validate containment.
- Defaults: **least-privilege JIT creds, network-off-by-default, command allow-lists**.

**Altitude:** Engineer · **Anchor case:** run Quill's agent-generated code and commands safely — in a sandbox with scoped permissions — using an AI terminal (Warp) and dev containers.

### Learning goals
- Use an **AI terminal** (Warp) for agentic command workflows: natural-language commands, command explanation, and saved workflows.
- Explain **why agent-run code must be sandboxed** (untrusted generation + tool execution = arbitrary code risk).
- Configure sandboxes: **Docker dev containers**, ephemeral **E2B**/cloud sandboxes, and Claude Code's sandbox; scope filesystem/network/credentials.
- Build a safe "agent executes shell" loop with allow-lists and no host-credential exposure.

### Concept map
- **AI terminal.** Plain English: a terminal that turns intent into commands, explains scary ones, and saves
  reusable workflows — reducing copy-paste error. Where it matters: agentic ops without leaving the shell. *Common
  mistake:* running an AI-suggested `rm -rf`/`curl | sh` without reading the explanation.
- **Why sandbox.** *Plain English:* the agent both *writes* and *runs* code from an untrusted distribution; a bug or
  injection (Week 8) could read secrets, hit the network, or trash the host. *Code mapping:* run in a container with
  no host creds and no network unless needed. *Common mistake:* agents running with your full shell + cloud creds.
- **Sandbox dimensions.** Plain English: scope **filesystem** (only the repo), **network** (off by default),
  **credentials** (none/minted-just-in-time), **time/CPU** (limits). Where it matters: containment. *Common
  mistake:* a "sandbox" that still mounts `~/.aws`.
- **Ephemeral sandboxes (E2B / cloud).** Plain English: spin a fresh disposable box per agent task; destroy after.
  Where it matters: no persistent blast radius. *Common mistake:* reusing one long-lived box that accumulates state/risk.
- **Allow-listed commands.** Plain English: the agent may run only an approved command set unattended; everything
  else needs approval. Bridge to Weeks 5/8.

### Hands-on build
- Configure a **Docker dev container** for Quill with the repo mounted, network off by default, and *no* host
  credentials. Run `minicoder`/Claude Code inside it.
- Add a command **allow-list** for unattended agent shell (test/build/lint) and an approval prompt for anything else;
  demonstrate a blocked dangerous command.
- Build 2 **Warp** saved workflows for Quill (e.g., "set up env + run tests", "build + deploy preview").
- **Deliverable:** the sandbox config + allow-list + Warp workflows + a demo of a blocked dangerous command.
  **Acceptance:** agent-run code has no access to host credentials/network-by-default, and a `curl|sh`/`rm -rf`-style
  command is blocked or requires explicit approval.

▶ **Practical project:** `krishnaik06/Dockers` — use it to build the repo-scoped, no-host-creds, network-off dev container the agent executes inside.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Docker + Warp (AI terminal); use `krishnaik06/Dockers` as the dev-container reference.
2. Write `.devcontainer/devcontainer.json`: repo-only mount, `--network=none`, `--cap-drop=ALL`, no host creds.
3. Add `safe_exec.py`: an allow-list for unattended commands (test/build/lint); everything else needs approval.
4. Run `minicoder`/Claude Code inside the container; demonstrate a blocked `rm -rf`/`curl|sh`.
5. Build 2 Warp saved workflows (env+test, build+preview).
6. Log the blocked dangerous command + the containment proof.
- **Artifact:** `evidence/week06-sandbox/` (devcontainer + allow-list + Warp workflows + block log) committed.
- **Use `$agent-sandbox-config`:** scope fs/network/creds/time + the approval path for the rest.
- **Done when:** agent code has no host creds / no default network, and a destructive command is blocked.
- **Stretch:** swap the container for an ephemeral E2B sandbox and verify AgentDojo exfil scenarios fail.

### Harness / reusable skill — `$agent-sandbox-config`
- **Purpose:** make it safe for an agent to *execute* code and commands.
- **Inputs:** a repo + the commands the agent needs. **Outputs:** a container/sandbox spec (fs/network/cred/time
  scopes), a command allow-list, and the approval path for the rest. **Evidence artifact:** `evidence/week06-sandbox/`.

### Common failure modes
- **Host-cred exposure** → agent reads `~/.aws`/env secrets. *Fix:* no host creds; mint scoped creds just-in-time.
- **Network-on by default** → exfiltration/SSRF surface. *Fix:* network off unless the task needs it, then allow-list hosts.
- **Persistent sandbox** → accumulating blast radius. *Fix:* ephemeral, disposable per task.
- **Blind command execution** → destructive commands run. *Fix:* allow-list + read the AI terminal's explanation.

### Evidence artifact
`evidence/week06-sandbox/` — devcontainer/E2B config, command allow-list, Warp workflows, and a log of a blocked dangerous command.

### Skill sink-in
Predict what an injected "run this to set up" instruction *could* do to an un-sandboxed agent (secrets? network?).
Then run it in your sandbox and confirm containment. Record the gap between unsandboxed risk and sandboxed reality.

### Dataset / benchmark
No labeled dataset; the test is containment. References/targets: **E2B** (`e2b-dev/E2B`, sandboxes), Docker
dev-container spec, and the **AgentDojo** (2024) execution-attack scenarios to verify your sandbox blocks exfiltration.

### Code stub
```jsonc
// .devcontainer/devcontainer.json — repo-scoped, no host creds, network off by default
{
  "image": "node:22",
  "mounts": ["source=${localWorkspaceFolder},target=/repo,type=bind"],   // only the repo
  "runArgs": ["--network=none", "--cap-drop=ALL", "--read-only"],         // no net, least privilege
  "containerEnv": { "HOME": "/repo/.home" },                              // no host ~/.aws, ~/.ssh
  "postCreateCommand": "pnpm install --frozen-lockfile"
}
```
```python
# safe_exec.py — allow-listed unattended commands; everything else needs approval
ALLOW = {"pnpm test", "pnpm build", "pnpm lint", "pytest -q"}
def agent_run(cmd):
    if cmd not in ALLOW and not human_ok(cmd):   # blocks rm -rf, curl|sh, etc.
        return "BLOCKED: command not on allow-list"
    return run_in_sandbox(cmd)
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Credential isolation | No host creds; JIT-scoped only | partial | full host creds |
| Network scope | Off by default, allow-listed | restricted | open |
| Command safety | Allow-list + approval; dangerous cmd blocked | allow-list only | blind exec |
| Ephemerality | Disposable per-task sandbox | reused but clean | persistent + risky |

**Assessment weight:** 6%.

### Readings & sources
- Warp docs ("Agent Mode", "Workflows"), 2025–2026; Docker "Development Containers" spec (2025).
- E2B, "Code Interpreting / Sandboxes for AI agents" docs (2025); Anthropic "Claude Code sandboxing" notes (2025–2026).
- Debenedetti et al., "AgentDojo," NeurIPS 2024 (execution/exfiltration attack scenarios).
- OWASP, "LLM Top 10: Excessive Agency & Insecure Plugin/Tool Design" (2025).

---

## Week 7 — AI-Generated Tests and Test Quality

### State of the Art (June 2026)
- **Mutation testing** (mutmut / Stryker) is the real bar over coverage %.
- **Property-based testing** (Hypothesis) for invariants the model proposes and a human validates.
- **EvalPlus / HumanEval+** for test-based correctness; **Defects4J / BugsInPy** as real-bug corpora.
- **Reward-hacking audits** for self-tested coding agents — don't let the agent grade its own bugs.

**Altitude:** Engineer · **Anchor case:** get Quill's new feature to *real* coverage — AI-generated tests that catch bugs, not tests that merely pass.

### Learning goals
- Generate unit/integration tests with AI **and** judge their quality (do they actually constrain behavior?).
- Use **property-based testing** (Hypothesis) for invariants AI is good at proposing but humans must validate.
- Detect **weak/tautological AI tests** with coverage *and* mutation testing.
- Adopt **AI-assisted TDD**: write the test/spec first, let the agent satisfy it.

### Concept map
- **Coverage ≠ quality.** Plain English: a test can execute a line without asserting anything meaningful; high
  coverage with weak asserts is false confidence. Where it matters: AI loves to generate passing, low-value tests.
  *Common mistake:* shipping on coverage % alone.
- **Mutation testing.** *Formula (score):* `mutation_score = killed_mutants / total_mutants`. *Plain English:*
  inject bugs; good tests *fail* (kill them). *Tiny example:* flip `>=` to `>`; a real test catches it. *Code
  mapping:* `mutmut`/`Stryker`. *Common mistake:* trusting coverage while mutants survive.
- **Property-based testing.** *Plain English:* assert invariants over *generated* inputs (`reverse(reverse(x))==x`,
  "sharing is idempotent") instead of a few examples. Where it matters: finds edge cases examples miss; AI proposes
  properties well. *Common mistake:* accepting an AI-proposed property that's subtly wrong — validate it.
- **AI-assisted TDD.** Plain English: human writes the failing test/spec; the agent implements until green (ties to
  Week 3's verification loop). Where it matters: the test is the spec the agent can't game. *Common mistake:*
  letting the agent write *both* the code and the tests with no human-authored constraint → it tests its own bugs.
- **Test independence from the implementer.** Plain English: tests written/curated by a human (or a different
  context) catch what the implementer's blind spots miss.

### Hands-on build
- For Quill's sharing feature: have the agent generate a test suite; then **harden it** — add asserts, add ≥1
  property-based test (Hypothesis), and run **mutation testing**; iterate until the mutation score crosses a threshold.
- Compare AI-only tests vs hardened tests by mutation score and bugs caught (seed 3 bugs).
- **Deliverable:** the test suite + coverage + mutation report. **Acceptance:** mutation score meets the threshold
  (e.g., ≥70% on changed code), the property test catches a seeded bug examples missed, and weak AI tests are documented + fixed.

▶ **Practical project:** `evalplus/evalplus` — run its augmented test suites to expose weak AI tests, then harden Quill's suite to a mutation-score bar.

**Build it — step by step (AI-builder lab):**
1. **Setup:** `uv` env + `pytest` + `hypothesis` + `mutmut`; use `evalplus/evalplus` to expose weak tests.
2. Have the agent generate a test suite for Quill's sharing feature.
3. Harden it: add real asserts + ≥1 validated property-based test (e.g. sharing is idempotent).
4. Run mutation testing; iterate until the mutation score crosses the bar (≥70% on changed code).
5. Seed 3 bugs; compare AI-only vs hardened tests by mutants killed + bugs caught.
6. Document the tautological tests you removed/fixed.
- **Artifact:** `evidence/week07-tests/` (suite + coverage + mutation before/after) committed.
- **Use `$ai-test-hardener`:** turn AI tests into tests that actually constrain behavior.
- **Done when:** mutation score meets the bar, the property test catches a missed bug, weak tests are fixed.
- **Stretch:** measure catch rate on a Defects4J/BugsInPy bug.

### Harness / reusable skill — `$ai-test-hardener`
- **Purpose:** turn AI-generated tests into tests that actually constrain behavior.
- **Inputs:** code + AI-generated tests. **Outputs:** a coverage + mutation report, added asserts, ≥1 validated
  property test, and a list of tautological tests removed/fixed. **Evidence artifact:** `evidence/week07-tests/`.

### Common failure modes
- **Coverage theater** → high coverage, weak asserts. *Fix:* mutation testing as the real bar.
- **Tautological AI tests** → assert what the code does, not what it should. *Fix:* human-authored asserts/spec.
- **Self-tested code** → agent writes code and its tests. *Fix:* human-written failing test first (TDD).
- **Unvalidated properties** → a wrong invariant passes vacuously. *Fix:* check the property fails on a known bug.

### Evidence artifact
`evidence/week07-tests/` — suite, coverage report, mutation report (before/after hardening), and the property test + the seeded bug it caught.

### Skill sink-in
Predict the mutation score of the AI's first-draft tests before running `mutmut`. Run it. Record the gap between
coverage % and mutation score — it's the lesson on why coverage lies.

### Dataset / benchmark
**Defects4J** (`rjust/defects4j`, 800+ real Java bugs) or **BugsInPy** (`soarsmu/BugsInPy`, Python) as a bug corpus
to measure whether your tests *catch real bugs*; **HumanEval+/EvalPlus** (`evalplus/evalplus`, 2023) for stronger
test-based correctness. Mutation tooling: `mutmut` (Python) / `Stryker` (JS/TS).

### Code stub
```python
# tests/test_sharing.py — property-based + a real assertion (not tautology)
from hypothesis import given, strategies as st

@given(role=st.sampled_from(["viewer", "editor"]))
def test_share_is_idempotent(role):                      # AI proposed this property; we VALIDATED it
    nb = make_notebook(); share(nb, USER, role); share(nb, USER, role)  # twice
    assert permission(nb, USER) == role                  # idempotent, single row
    assert count_permissions(nb, USER) == 1

def test_viewer_cannot_edit():                           # human-authored constraint = the spec
    nb = make_notebook(); share(nb, USER, "viewer")
    assert edit_note(nb, USER, "x").status == 403        # mutation testing: flipping authz must fail this
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Mutation score | ≥70% on changed code | 50–70% | coverage-only |
| Property test | ≥1 validated, catches a missed bug | present | none/invalid |
| Test independence | Human-authored asserts/spec | mixed | self-tested |
| Honesty | Tautological tests documented + fixed | some | unexamined |

**Assessment weight:** 8%.

### Readings & sources
- Claessen & Hughes, "QuickCheck: A Lightweight Tool for Random Testing of Haskell Programs," ICFP 2000 (property testing origin); Hypothesis docs (2025).
- Just et al., "Defects4J: A Database of Existing Faults...," ISSTA 2014; Liu et al., "Is Your Code Generated by ChatGPT Really Correct? (EvalPlus)," NeurIPS 2023.
- Schäfer et al., "An Empirical Evaluation of Using LLMs for Automated Unit Test Generation," IEEE TSE 2024.
- "Mutation Testing" (Jia & Harman survey, 2011) + `mutmut`/`Stryker` docs (2025).

---

## Week 8 — AI Security and Secure "Vibe Coding"

### State of the Art (June 2026)
- **Slopsquatting / package hallucination** (USENIX Security 2025) is a named supply-chain risk in agent-suggested deps.
- The layered gate: **SAST (Semgrep), secrets (gitleaks), deps (Trivy), DAST (OWASP ZAP)**.
- Checklists: **OWASP LLM Top 10 (2025)** + **OWASP Top 10 (2021)**.
- Studies still show AI-assisted devs ship **more insecure code while feeling more confident**.

**Altitude:** Engineer · **Anchor case:** AI-generated Quill code introduces a subtle SQL-injection + a leaked secret; catch them with SAST/DAST/secret scanning before they ship.

### Learning goals
- Explain **why AI-generated code is disproportionately insecure** (trained on flawed public code; produces plausible-but-vulnerable patterns) and what "secure vibe coding" requires.
- Run **SAST** (Semgrep), **secret scanning** (gitleaks), **dependency/container scanning** (Trivy), and **DAST** (OWASP ZAP) in CI.
- Recognize the top AI-introduced vulns (injection, broken authz, hardcoded secrets, insecure deserialization, vulnerable deps) and fix them.
- Add an AI-assisted **threat-model + security review** to the PR flow.

### Concept map
- **Why AI code is insecure.** Plain English: models learned from public code full of vulnerabilities and produce
  the *common* pattern, not the *secure* one; studies show developers with AI assistants write *more* insecure code
  while feeling *more* confident. Where it matters: "it works" ≠ "it's safe." *Common mistake:* shipping AI code
  because tests pass — tests rarely test security.
- **SAST.** *Plain English:* static analysis scans source for vulnerable patterns (taint from input → sink). *Code
  mapping:* `semgrep --config auto`. *Common mistake:* ignoring findings as "false positives" without triage.
- **Secret scanning.** Plain English: AI loves to inline API keys/connection strings; scan diffs for secrets and
  block. *Code mapping:* `gitleaks protect`. *Common mistake:* secrets in code "temporarily" that reach git history.
- **DAST.** Plain English: run the *running* app and attack it (ZAP) to catch what static analysis misses (authz,
  runtime injection). Where it matters: complements SAST. *Common mistake:* SAST-only, missing logic/authz flaws.
- **Dependency/supply-chain scanning.** Plain English: AI-suggested packages may be vulnerable, outdated, or
  **hallucinated/typosquatted** ("slopsquatting"). *Code mapping:* `trivy fs` + lockfile pinning. *Common mistake:*
  installing an agent-suggested package without checking it exists and is safe.

### Hands-on build
- Add a **security gate** to Quill CI: `semgrep` (SAST), `gitleaks` (secrets), `trivy` (deps/container); add an
  **OWASP ZAP** baseline scan against the running app.
- Plant 3 realistic AI-style vulns (a string-built SQL query, a hardcoded key, a vulnerable dep); confirm each is caught and fix it.
- Add an AI-assisted PR **security review** prompt that flags authz/injection/secret risks.
- **Deliverable:** the CI security gate + a before/after vuln report. **Acceptance:** all 3 planted vulns are caught
  by the gate (not by luck), the build fails on a secret/critical finding, and each fix is verified.

▶ **Practical project:** `juice-shop/juice-shop` — point your SAST/secret/deps/DAST gate at this deliberately-vulnerable app to prove it catches real vulns.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GitHub Actions + `semgrep` + `gitleaks` + `trivy` + OWASP ZAP; target `juice-shop/juice-shop`.
2. Add a blocking `security.yml`: SAST + secret scan + deps scan + a ZAP baseline against the running app.
3. Plant 3 realistic AI-style vulns in Quill (string-built SQL, hardcoded key, vulnerable dep).
4. Confirm each is caught; make the build fail on a secret/critical finding.
5. Add an AI security-review prompt flagging authz/injection/secret risks on PRs.
6. Fix each vuln + write the triage note (justified suppressions).
- **Artifact:** `evidence/week08-security/` (CI gate + planted vulns + scan output + fixes) committed.
- **Use `$secure-code-gate`:** stop insecure AI code from shipping with a layered gate.
- **Done when:** all 3 planted vulns are caught (not by luck) and the build fails on a critical/secret.
- **Stretch:** add dependency provenance + a slopsquatting check on agent-suggested packages.

### Harness / reusable skill — `$secure-code-gate`
- **Purpose:** stop insecure AI code from shipping.
- **Inputs:** a repo + its CI. **Outputs:** SAST/secret/deps/DAST jobs wired as a blocking gate, a triage note for
  findings, and an AI security-review prompt for PRs. **Evidence artifact:** `evidence/week08-security/`.

### Common failure modes
- **Tests-pass = secure fallacy** → vulns ship green. *Fix:* a dedicated security gate, separate from tests.
- **SAST-only** → misses authz/runtime flaws. *Fix:* add DAST against the running app.
- **False-positive dismissal** → real findings ignored. *Fix:* triage every finding, suppress with justification.
- **Hallucinated/typosquatted deps** → supply-chain compromise. *Fix:* verify package existence + scan + pin lockfiles.
- **Secrets in history** → permanent leak. *Fix:* pre-commit + CI secret scanning; rotate on hit.

### Evidence artifact
`evidence/week08-security/` — CI gate config, the 3 planted vulns + scan output catching them, fixes, and the triage note.

### Skill sink-in
Predict which of the 3 planted vulns your gate will miss. Run the scans. Record the miss (usually the authz/logic
flaw that needs DAST or human review) — that's the lesson on layered security.

### Dataset / benchmark
**OWASP Juice Shop** (`juice-shop/juice-shop`, MIT — deliberately vulnerable app) and **OWASP Benchmark** as DAST/SAST
targets; the **OWASP Top 10 (2021)** + **OWASP LLM Top 10 (2025)** as the checklist. Tools: **Semgrep**
(`semgrep/semgrep`, LGPL), **gitleaks**, **Trivy**, **OWASP ZAP**.

### Code stub
```yaml
# .github/workflows/security.yml — blocking security gate for AI-written code
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pipx run semgrep ci --config auto            # SAST: taint -> sink patterns
      - run: gitleaks dir . --redact --exit-code 1        # secrets: fail build on any hit
      - run: trivy fs --severity HIGH,CRITICAL --exit-code 1 .   # vulnerable/typosquatted deps
      - run: |                                            # DAST: attack the RUNNING app
          docker compose up -d && sleep 10
          docker run --network host owasp/zap2docker-stable zap-baseline.py -t http://localhost:3000 -I
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Coverage | SAST + secrets + deps + DAST all wired | 2–3 | one |
| Catch rate | All 3 planted vulns caught + fixed | 2/3 | <2 |
| Gating | Build fails on critical/secret findings | warns only | non-blocking |
| Triage | Findings triaged, suppressions justified | partial | dismissed |

**Assessment weight:** 8%.

### Readings & sources
- Perry et al., "Do Users Write More Insecure Code with AI Assistants?", ACM CCS 2023.
- Pearce et al., "Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions," IEEE S&P 2022.
- OWASP, "Top 10 for LLM Applications (2025)" + OWASP "Top 10 (2021)"; Semgrep / Trivy / ZAP docs (2025–2026).
- Spracklen et al., "We Have a Package for You! (package hallucination / slopsquatting in LLM code)," USENIX Security 2025.

---

## Week 9 — AI Code Review Gates

### State of the Art (June 2026)
- **Claude Code review, CodeRabbit, Copilot code review** productionize grounded AI review as a gate.
- The consensus split: **AI for mechanical/local issues, humans for design and intent**.
- **Signal/noise tuning** is decisive — false positives mute reviewers.
- **LLM-judge biases** (TrustJudge) inform reviewer calibration and thresholds.

**Altitude:** Engineer · **Anchor case:** every Quill PR passes an **AI reviewer + a human reviewer**, with the AI catching the mechanical issues so the human focuses on design and intent.

### Learning goals
- Design a **two-tier review gate**: AI review (style, bugs, security, convention) + human review (design, correctness of intent, trade-offs).
- Configure an AI reviewer (Claude Code review / CodeRabbit) with project conventions and a focused checklist.
- Calibrate the reviewer to **minimize noise** (false positives erode trust) and surface only high-confidence issues.
- Measure review effectiveness (issues caught pre-merge, false-positive rate, time-to-merge).

### Concept map
- **AI vs human review division of labor.** Plain English: AI excels at mechanical, local, checklist issues
  (null checks, missed error handling, convention, obvious security); humans own design, intent, and "should this
  exist." Where it matters: don't make humans do what AI can, or trust AI for what it can't. *Common mistake:*
  treating AI review as a merge rubber-stamp.
- **Reviewer grounding.** Plain English: feed the reviewer the project conventions (the Week-4 rules file) and the
  PR's PRD so it reviews against *your* standards, not generic ones. *Common mistake:* a generic reviewer that
  nitpicks style you don't follow.
- **Signal vs noise.** *Formula (trust):* `usefulness ≈ true_issues / total_comments`. *Plain English:* a reviewer
  that flags 20 trivia for 1 real bug gets muted. Where it matters: tune to high-confidence findings. *Common
  mistake:* maxing verbosity → reviewers ignored.
- **Review as a gate, not advice.** Plain English: wire it into branch protection so unresolved high-severity
  findings block merge. *Common mistake:* AI comments that everyone scrolls past.
- **Self-review prompt for the author.** Plain English: the agent reviews its *own* diff before opening the PR,
  catching the easy stuff first.

### Hands-on build
- Configure an **AI reviewer** on Quill PRs grounded in the rules file + PRD, with a focused checklist (bugs, error
  handling, security, convention); wire it as a branch-protection gate for high-severity findings.
- Run it on 5 PRs (3 real, 2 with planted bugs); measure caught/missed and false-positive rate; tune the prompt to cut noise.
- **Deliverable:** the review gate config + a review-effectiveness report. **Acceptance:** both planted bugs are
  caught, false-positive rate is brought below a stated threshold via tuning, and high-severity findings block merge.

▶ **Practical project:** `openai/openai-cookbook` — adapt its evaluation/review recipes to build the grounded AI PR reviewer wired as a branch-protection gate.

**Build it — step by step (AI-builder lab):**
1. **Setup:** GitHub Actions + Claude Code review / CodeRabbit; skim `openai/openai-cookbook` eval/review recipes.
2. Configure an AI reviewer grounded in the rules file + PRD with a focused checklist (bugs, error-handling, security, convention).
3. Wire it as a branch-protection gate that blocks unresolved high-severity findings.
4. Run on 5 PRs (3 real, 2 with planted bugs); record caught/missed + false-positive rate.
5. Tune the prompt to cut noise below a stated FP threshold.
6. Write the review-effectiveness report.
- **Artifact:** `evidence/week09-review/` (reviewer config + 5-PR report + branch rule) committed.
- **Use `$ai-review-gate`:** a calibrated AI gate that complements human review.
- **Done when:** both planted bugs caught, FP rate brought below threshold, high-severity blocks merge.
- **Stretch:** add a self-review prompt the author runs before opening the PR.

### Harness / reusable skill — `$ai-review-gate`
- **Purpose:** a calibrated AI review gate that complements (not replaces) human review.
- **Inputs:** a repo + conventions + PR. **Outputs:** a grounded reviewer config, a checklist, a severity→gate
  mapping, and an effectiveness report (caught/missed/FP). **Evidence artifact:** `evidence/week09-review/`.

### Common failure modes
- **Rubber-stamp reliance** → AI review replaces human judgment on design. *Fix:* two-tier; humans own intent.
- **Noise overload** → false positives get the reviewer muted. *Fix:* tune to high-confidence; measure FP rate.
- **Ungrounded reviewer** → nitpicks non-conventions. *Fix:* feed it the rules file + PRD.
- **Advice-not-gate** → comments ignored. *Fix:* block merge on unresolved high-severity findings.

### Evidence artifact
`evidence/week09-review/` — reviewer config, the 5-PR effectiveness report (caught/missed/FP, before/after tuning), and the branch-protection rule.

### Skill sink-in
Predict the false-positive rate of the out-of-the-box AI reviewer before tuning. Measure on the 5 PRs. Record how
much grounding (rules file + PRD) cut the noise.

### Dataset / benchmark
**SWE-bench Verified** PRs and **CodeReviewer** dataset (`microsoft/CodeReviewer` / "Automating Code Review
Activities" data, 2022) as a corpus of real review comments to calibrate usefulness; plant bugs from the
**Defects4J/BugsInPy** sets (Week 7) into PRs to measure catch rate.

### Code stub
```yaml
# .github/workflows/ai-review.yml — grounded AI review as a branch-protection gate
jobs:
  ai-review:
    steps:
      - uses: actions/checkout@v4
      - run: |
          claude -p "Review this PR diff against CLAUDE.md conventions and prd/${{ github.head_ref }}.md.
            Report ONLY high-confidence bugs, missing error handling, authz/security, convention breaks.
            Output JSON: [{severity, file, line, issue, fix}]. Skip style nits." \
            --diff origin/main...HEAD > review.json
      - run: python ci/gate.py review.json   # exit 1 if any severity==HIGH unresolved -> blocks merge
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Two-tier design | AI + human roles clearly split | implied | AI rubber-stamp |
| Catch rate | Both planted bugs caught | one | none |
| Noise control | FP rate below threshold via tuning, measured | improved | noisy |
| Gating | High-severity blocks merge | warns | advisory |

**Assessment weight:** 7%.

### Readings & sources
- Tufano et al., "Towards Automating Code Review Activities," ICSE 2021; Li et al., "CodeReviewer: Pre-Training for Automating Code Review," FSE 2022.
- CodeRabbit / Claude Code "PR review" docs (2025–2026); GitHub "Copilot code review" docs (2025).
- Krish Naik, "AI GitHub PR Code Reviewer" project (LangGraph + Langfuse, krishnaik.in, 2025–2026).
- Anthropic, "Claude Code in CI / headless mode" docs (2025–2026).

---

## Week 10 — Automated UI and App Building

### State of the Art (June 2026)
- Prompt-to-UI: **v0, Lovable, Bolt.new**; **shadcn/ui + Tailwind** the reconcile target.
- Multimodal models (**Gemini 3.1, GPT-5.5**) drive **screenshot→critique→revise** visual loops.
- **Design2Code**-style benchmarks track front-end automation progress.
- **Reconciliation** (real API/types/states) is the actual engineering now, not the generation.

**Altitude:** Builder → Engineer · **Anchor case:** build Quill's sharing UI with a generative UI tool (v0/Lovable/Bolt), then reconcile the generated code into the real, tested, convention-following codebase.

### Learning goals
- Use generative UI tools (**v0**, **Lovable**, **Bolt.new**) to go from prompt/screenshot to working UI fast.
- **Reconcile** generated UI into a real codebase: match conventions, wire to the real API, remove throwaway scaffolding.
- Iterate UI with **visual feedback loops** (screenshot → critique → revise), and verify with component/E2E tests.
- Judge when generated UI is a **prototype to learn from** vs **production code to keep**.

### Concept map
- **Generative UI.** Plain English: describe (or screenshot) a UI and get working React/Tailwind components; great
  for speed and exploration. Where it matters: the first 80% of UI is now minutes. *Common mistake:* pasting
  generated code wholesale, inheriting its conventions, mock data, and security gaps.
- **Reconciliation.** *Plain English:* generated UI is a *draft* — rewire it to your real API/types, your component
  library, your auth, your conventions. Where it matters: this is the actual engineering work now. *Common mistake:*
  "it looks right" so it ships with mocked endpoints and no error states.
- **Visual feedback loop.** Plain English: screenshot the running UI, have the model critique against the design
  intent, revise — a perception→action loop for front-end (ties to Subject 07 browser agents). *Common mistake:*
  iterating on code without ever *looking* at the rendered result.
- **Component/E2E verification.** Plain English: generated UI still needs tests (component + a Playwright E2E for the
  happy path + an error path). *Common mistake:* no tests because "it's just UI."
- **Prototype vs keep.** Plain English: sometimes the right move is to *learn* from the generated UI and rebuild it
  clean; sometimes it's keepable after reconciliation. Decide deliberately.

### Hands-on build
- Generate Quill's sharing UI (share dialog, permissions list, role selector) with **v0/Lovable/Bolt**; then
  **reconcile**: wire to the real `POST /notebooks/:id/share` API, apply the component library + conventions, add
  loading/error/empty states.
- Add a **Playwright E2E** (share → appears in list → viewer blocked from edit) and a component test; run a visual
  feedback loop to fix two design issues.
- **Deliverable:** the reconciled UI PR + E2E test + a before/after screenshot. **Acceptance:** the UI uses the real
  API (no mocks), follows conventions, has error/empty states, and the E2E happy+error path passes.

▶ **Practical project:** `shadcn-ui/ui` — reconcile generated Quill UI into its component conventions, wired to the real share API with error/empty states.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Node + Vercel `v0` (or Lovable/Bolt) + `shadcn-ui/ui` + Playwright.
2. Generate Quill's sharing UI (share dialog, permissions list, role selector).
3. Reconcile: rewire to the real `POST /notebooks/:id/share` API, apply shadcn conventions, drop mock data.
4. Add loading/error/empty states; run a screenshot→critique→revise visual loop for two issues.
5. Add a Playwright E2E (share → appears → viewer blocked) + a component test.
6. Record the kept-vs-rewritten line fraction.
- **Artifact:** `evidence/week10-ui/` (reconciled PR + E2E + before/after screenshots) committed.
- **Use `$ui-reconcile`:** turn generated UI into production code that fits the codebase.
- **Done when:** UI uses the real API (no mocks), has error/empty states, E2E happy+error passes.
- **Stretch:** run a Lighthouse/axe accessibility audit and fix the top finding.

### Harness / reusable skill — `$ui-reconcile`
- **Purpose:** turn generated UI into production code that fits the codebase.
- **Inputs:** generated UI + the real API/conventions. **Outputs:** rewired components (real API/types), added
  states (loading/error/empty), a component + E2E test, and a "kept vs rebuilt" decision note. **Evidence artifact:**
  `evidence/week10-ui/`.

### Common failure modes
- **Wholesale paste** → inherits mocks, conventions, and gaps. *Fix:* reconcile to real API/types/conventions.
- **No error/empty states** → demos break on real data. *Fix:* add loading/error/empty deliberately.
- **Code-only iteration** → never looks at the render. *Fix:* a screenshot→critique→revise visual loop.
- **Untested UI** → regressions. *Fix:* component + E2E (happy + error) tests.

### Evidence artifact
`evidence/week10-ui/` — the reconciled PR, E2E + component tests, before/after screenshots, and the kept-vs-rebuilt note.

### Skill sink-in
Predict how much of the generated UI survives reconciliation (lines kept vs rewritten). Reconcile. Record the
fraction kept — it calibrates "generative UI as prototype vs production."

### Dataset / benchmark
**WebArena/VisualWebArena** (Week-equivalent of Subject 07) or a **Lighthouse**/axe accessibility audit as an
objective UI-quality check; **shadcn/ui** + Tailwind as the target component conventions. Generative tools: **v0**
(Vercel), **Lovable**, **Bolt.new**. No labeled dataset — acceptance is the passing E2E + a11y audit.

### Code stub
```ts
// e2e/share.spec.ts — verify the reconciled UI against the REAL flow (not the demo mock)
import { test, expect } from "@playwright/test";

test("owner shares editor; viewer blocked from editing", async ({ page }) => {
  await loginAs(page, OWNER);
  await page.goto("/notebooks/nb1");
  await page.getByRole("button", { name: "Share" }).click();
  await page.getByLabel("User").fill("alice@quill.dev");
  await page.getByRole("combobox", { name: "Role" }).selectOption("viewer");
  await page.getByRole("button", { name: "Add" }).click();
  await expect(page.getByText("alice@quill.dev — viewer")).toBeVisible();   // real API persisted it
  await loginAs(page, "alice@quill.dev");
  await expect(page.getByRole("button", { name: "Edit" })).toBeDisabled();  // authz error state shown
});
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Reconciliation | Real API/types/conventions, no mocks | mostly | wholesale paste |
| States | Loading/error/empty handled | some | happy-path only |
| Tests | Component + E2E (happy+error) pass | happy-path E2E | none |
| Judgment | Kept-vs-rebuilt decided + justified | stated | unconsidered |

**Assessment weight:** 6%.

### Readings & sources
- Vercel **v0**, **Lovable**, **Bolt.new** docs (2025–2026); **shadcn/ui** + Tailwind docs (2025).
- Playwright "Component & E2E testing" docs (2025); axe-core / Lighthouse accessibility docs (2025).
- Si et al., "Design2Code: How Far Are We From Automating Front-End Engineering?", 2024.
- Frontend-design best-practices (program skill: `frontend-design`) — intentional visual design over templated defaults.

---

## Week 11 — Agents Post-Deployment: Monitoring, Incident Response, and SWE-bench-Style Evaluation

### State of the Art (June 2026)
- **SWE-bench Verified/Pro/Multimodal/Live** are the moving capability benchmarks.
- **Sentry + OpenTelemetry GenAI semantic conventions** for shipped-feature telemetry.
- **Feature flags + canary** (OpenFeature/LaunchDarkly) + **one-command rollback** are standard.
- **AI-assisted incident response** (RCA draft, telemetry correlation) with human-gated prod changes.

**Altitude:** Engineer · **Anchor case:** Quill's feature is live — now operate it: monitor it, catch a regression, run an incident drill, and benchmark your *agentic SWE workflow* on SWE-bench Verified.

### Learning goals
- Instrument a shipped feature with **monitoring** (errors, latency, key user flows) and **alerts**; define SLOs.
- Run an **incident-response drill**: detect → triage → mitigate (flag-off/rollback) → fix → postmortem, with an AI agent assisting.
- Use **feature flags + canary/rollback** so a bad deploy is contained and reversible in one command.
- **Evaluate your coding-agent workflow** on **SWE-bench Verified** to quantify capability and track it over time.

### Concept map
- **Observability for shipped features.** Plain English: logs + metrics + traces (Sentry/OpenTelemetry) so you *see*
  errors, latency, and broken flows in production. Where it matters: you can't fix what you can't see. *Common
  mistake:* shipping with no instrumentation, learning of bugs from users.
- **SLOs & alerts.** *Formula:* `error_budget = (1 − SLO) × requests`. *Plain English:* a target (e.g., 99.5%
  success) and an alert when you burn the budget too fast. *Common mistake:* alerting on everything → alert fatigue.
- **Feature flags + canary + rollback.** Plain English: ship dark, ramp to a canary %, watch metrics, roll forward
  or **flag-off/rollback** instantly. Where it matters: contains blast radius. *Common mistake:* big-bang deploy with
  no kill switch.
- **AI-assisted incident response.** Plain English: an agent triages logs, correlates the deploy, proposes a
  mitigation and a fix PR — *with a human approving irreversible steps* (Week 5). *Common mistake:* an autonomous
  agent making prod changes during an incident.
- **SWE-bench-style self-evaluation.** Plain English: run your agent workflow on real GitHub issues
  (**SWE-bench Verified**) under the official harness to get a resolve-rate you can track and improve. Where it
  matters: turns "the agent feels good" into a number. *Common mistake:* trusting public leaderboard numbers for
  *your* workflow without running it yourself.

### Hands-on build
- Instrument Quill's feature with **Sentry + OpenTelemetry**: error tracking, p95 latency, a key-flow success metric;
  set an SLO + alert; deploy behind a **feature flag** with a canary + one-command rollback.
- Run an **incident drill**: inject a regression behind the flag, detect via the alert, have an AI agent triage and
  propose a mitigation + fix PR, roll back, and write a short postmortem.
- Run your **coding-agent workflow on a SWE-bench Verified subset** (e.g., 20 instances) under the official harness; report resolve rate.
- **Deliverable:** monitoring + flag/rollback config, an incident postmortem, and a SWE-bench resolve-rate report.
  **Acceptance:** the alert fires on the injected regression, you roll back in one command, the postmortem has a
  root cause + prevention, and the SWE-bench run is reproducible with a reported number.

▶ **Practical project:** `krishnaik06/mlproject` — reuse its CI/deploy template as the monitored-deploy base for the shipped feature and the incident drill.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Sentry + OpenTelemetry + a flag tool (OpenFeature/LaunchDarkly); base the deploy on `krishnaik06/mlproject` CI.
2. Instrument Quill's feature: error tracking, p95 latency, a key-flow success metric; set an SLO + alert.
3. Deploy behind a feature flag with a canary + one-command rollback.
4. Inject a regression behind the flag; detect via the alert.
5. Have an AI agent triage logs, correlate the deploy, propose a mitigation + fix PR (human-gated).
6. Roll back; write a blameless postmortem; run your workflow on a 20-instance SWE-bench Verified subset.
- **Artifact:** `evidence/week11-ops/` (monitoring/flag config + postmortem) + `week11-swebench.md` committed.
- **Use `$ai-incident-runbook`:** operate the feature with a practiced incident loop.
- **Done when:** the alert fires, you roll back in one command, the postmortem has root cause + prevention, SWE-bench is reproducible.
- **Stretch:** add an automated SLO-burn alert that pages only on fast burn.

### Harness / reusable skill — `$ai-incident-runbook`
- **Purpose:** operate an AI-built feature in production with a practiced incident loop.
- **Inputs:** a deployed feature. **Outputs:** monitoring + SLO + alert config, a flag/canary/rollback setup, an
  AI-assisted triage prompt, and a postmortem template. **Evidence artifact:** `evidence/week11-ops/`.

### Common failure modes
- **No instrumentation** → blind in prod. *Fix:* errors/latency/key-flow metrics + traces before launch.
- **No kill switch** → a bad deploy can't be undone fast. *Fix:* feature flag + one-command rollback.
- **Autonomous incident agent** → makes things worse. *Fix:* AI triages/proposes; human approves prod changes.
- **No postmortem** → repeat incidents. *Fix:* blameless postmortem with root cause + prevention.
- **Leaderboard trust** → assuming public SWE-bench numbers apply to you. *Fix:* run the harness on *your* workflow.

### Evidence artifact
`evidence/week11-ops/` — monitoring/flag/rollback config, the incident postmortem, and `evidence/week11-swebench.md` (resolve rate + harness command).

### Skill sink-in
Predict your agent workflow's SWE-bench Verified resolve rate on the 20-instance subset before running it. Run the
harness. Record the gap between your guess (often inflated by demos) and the measured number.

### Dataset / benchmark
**SWE-bench Verified** (`princeton-nlp/SWE-bench_Verified`, 500 human-validated instances; run a 20–50 subset under
the official `swebench` harness) for capability; **Sentry** + **OpenTelemetry** for production telemetry. Optionally
**SWE-bench Multimodal** / **SWE-bench Live** for currency.

### Code stub
```python
# ops/swebench_eval.py — run YOUR agent workflow on SWE-bench Verified, reproducibly
from datasets import load_dataset
ds = load_dataset("princeton-nlp/SWE-bench_Verified", split="test").select(range(20))

def evaluate(agent):
    preds = []
    for inst in ds:
        patch = agent.solve(repo=inst["repo"], base=inst["base_commit"], issue=inst["problem_statement"])
        preds.append({"instance_id": inst["instance_id"], "model_patch": patch})
    # score with the official harness: applies patch, runs FAIL_TO_PASS + PASS_TO_PASS tests
    return run_swebench_harness(preds)   # -> {"resolved": n, "total": 20, "resolve_rate": ...}
```

### Graded rubric table
| Criterion | Excellent | Adequate | Failing |
|-----------|-----------|----------|---------|
| Monitoring | Errors+latency+key-flow+SLO+alert | partial | none |
| Containment | Flag + canary + one-cmd rollback | flag only | big-bang |
| Incident drill | Detect→mitigate→fix→postmortem, human-gated | partial | no drill |
| SWE-bench eval | Reproducible resolve rate reported | runs | not attempted |

**Assessment weight:** 7%.

### Readings & sources
- Jimenez et al., "SWE-bench" (ICLR 2024) + OpenAI "SWE-bench Verified" (2024); "SWE-bench Multimodal" (2024).
- Google SRE, "Site Reliability Engineering" — SLOs, error budgets, postmortems (chapters, 2016/2018).
- Sentry + OpenTelemetry instrumentation docs (2025); feature-flag/canary practices (LaunchDarkly/OpenFeature docs, 2025).
- Harvard AC215 "Advanced inference: deployment & monitoring" (2025); Krish Naik LLMOps monitoring projects (2025–2026).

---

## Week 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent

### State of the Art (June 2026)
- The 2026 delivery bar: **spec → agent → AI+human review → mutation-tested tests → SAST/DAST → flag/canary/rollback → monitor**.
- Frontier coding models **GPT-5.5 / Opus 4.8 / Gemini 3.1**, with open-weight **Qwen3-Coder** fallback.
- **MCP resources + Agent SDKs** are the grounding + runtime substrate.
- **EU AI Act** (Aug 2, 2026) makes the evidence packet a compliance artifact, not just hygiene.

**Altitude:** Engineer (graduating to Specialist) · **Anchor case:** take one **Quill** feature from spec to production using everything in the course.

### Learning goals
- Run the full AI-first delivery loop: **spec/PRD → grounded agent build → AI+human review → tests → security → deploy → monitor**.
- Produce an **evidence packet** proving the feature is correct, tested, secure, reviewed, and operable — not just "it works on my machine."
- Defend the autonomy, testing, and gating choices with data from your own runs.

### Concept map (review as a delivery checklist)
- Mental model (W1) → spec/PRD (W2) → coding-agent loop (W3) → grounded IDE/MCP context (W4) → autonomy gates (W5)
  → sandboxed execution (W6) → hardened tests (W7) → security gate (W8) → review gate (W9) → reconciled UI (W10) →
  monitoring + rollback + SWE-bench-style eval (W11).

### Hands-on build
- Ship one **non-trivial Quill feature** end-to-end: a committed **PRD (as an MCP resource)**; an agent-built
  implementation behind **autonomy gates**; **AI-generated + human-curated tests** (incl. a property test) meeting
  the mutation/coverage bar; a green **security gate** (SAST/secrets/deps/DAST); an **AI + human review** gate; a
  reconciled UI with E2E tests; deployment behind a **flag + canary + one-command rollback**; and **monitoring +
  one incident drill**.
- **Deliverable:** the merged, deployed feature + a `capstone/` evidence packet + a 15-min demo + a 3-page delivery memo.
  **Acceptance:** the feature is live behind a flag; tests/security/review gates are all green; you roll it back in
  one command on demand; and every claim in the memo links to a PR, test, scan, or trace in the packet.

▶ **Practical project:** `krishnaik06/Deployment-flask` — package and deploy the capstone Quill feature behind a real endpoint with flag/canary/rollback.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Claude Code/Cursor + the full CI (tests/security/review) + a PaaS; use `krishnaik06/Deployment-flask` for the deploy path.
2. Commit the PRD as an MCP resource; build the feature behind autonomy gates.
3. Add AI-generated + human-curated tests (incl. a property test) meeting the mutation/coverage bar.
4. Pass the security gate (SAST/secrets/deps/DAST) + the AI + human review gate.
5. Reconcile the UI with E2E tests; deploy behind a flag + canary + one-command rollback.
6. Add monitoring + run one incident drill; assemble the evidence packet + 3-page memo.
- **Artifact:** merged, deployed feature + `capstone/` evidence packet + 15-min demo committed.
- **Use `$ai-delivery-evidence-packet`:** bundle PRD + trajectory + tests + scan + review + deploy/rollback + monitoring.
- **Done when:** feature is live behind a flag, all gates green, one-command rollback works on demand.
- **Stretch:** add a SWE-bench-style self-eval of the agent workflow to the packet.

### Harness / reusable skill — `$ai-delivery-evidence-packet`
- **Purpose:** assemble PRD + agent trajectory + test/mutation report + security scan + review record + deploy/rollback
  proof + monitoring dashboard into one reviewable bundle. **Evidence artifact:** the packet itself (this *is* the deliverable).

### Common failure modes
- **Demo-ware** → works once, untested/unmonitored. *Fix:* the gates (tests/security/review) are the acceptance bar.
- **Unverified agent output** → ships the agent's guesses. *Fix:* every change behind tests + review + security gates.
- **No rollback** → can't undo a bad ship. *Fix:* flag + one-command rollback, demonstrated.
- **Unjustified choices** → autonomy/testing decisions by vibe. *Fix:* defend with your own A/B and eval numbers.

### Evidence artifact
`capstone/` — the PRD (MCP resource), agent trajectory/decision log, test + mutation report, security scan output,
AI+human review record, deploy/rollback proof, monitoring dashboard, and the 3-page delivery memo.

### Skill sink-in
Before the final ship, write down the production success rate and rollback time you expect. Ship behind the canary,
measure both, and record the gap — the difference between expectation and the gated reality is the capstone's lesson.

### Dataset / benchmark
Your **Quill** repo is the live target; the **SWE-bench Verified** subset (Week 11) is the capability benchmark for
your workflow; the **security gate** (Week 8) and **test mutation bar** (Week 7) are the quality benchmarks. All
gates green = pass.

### Code stub
```python
# capstone/ship_gate.py — one command decides "ship or not"
def ship_gate():
    assert tests_pass() and mutation_score() >= 0.70,    "test gate failed"
    assert security_scan_clean(),                        "security gate failed (SAST/secrets/deps/DAST)"
    assert ai_review_high_severity() == 0 and human_approved(), "review gate failed"
    assert e2e_pass(),                                   "UI E2E failed"
    deploy(canary=0.1)                                   # ship dark to 10%
    if not slo_healthy(window="10m"):
        rollback()                                       # one-command rollback on SLO burn
        return "ROLLED BACK"
    return "SHIPPED (canary healthy)"
```

### Graded rubric table
| Criterion | Excellent (A) | Adequate (B/C) | Failing |
|-----------|---------------|----------------|---------|
| End-to-end delivery | Spec→agent→tests→security→review→deploy→monitor all real | most, some manual | a demo |
| Quality gates | Tests(+mutation)+security+review all green & gating | some gating | green-by-skipping |
| Operability | Flag + canary + one-cmd rollback + monitoring + drill | partial | none |
| Evidence + defense | Every memo claim links to PR/test/scan/trace; choices defended with data | mostly | assertions |

**Assessment weight:** 25% (course capstone).

### Readings & sources
- Anthropic "Claude Code best practices" + "Building Effective Agents" (2024–2026); OpenAI/Cursor agentic-coding guides (2025–2026).
- Jimenez et al., "SWE-bench" (ICLR 2024) + "SWE-bench Verified" (OpenAI, 2024).
- Google SRE book — release engineering, canarying, postmortems (2016/2018).
- Harvard AC215 full-stack ML capstone rubric (5 milestones, 2025); Krish Naik end-to-end deployable-project structure (2025–2026).

---

## Course-level outcomes

By the end you can: reason about what coding LLMs can and can't do and *why*; turn vague requests into agent-ready
**specs/PRDs**; build a **coding agent** from scratch and wield production ones; ground an **AI IDE** with
context-as-MCP-resources; choose **autonomy levels and human-in-the-loop gates**; run agent code safely in
**sandboxes**; generate **tests that actually catch bugs** (mutation-tested, property-based); stop insecure
"**vibe-coded**" code with **SAST/DAST/secret/dep** gates; run **AI + human code-review gates**; build and reconcile
**generated UI**; and **operate** shipped features with monitoring, rollback, incident response, and
**SWE-bench-style evaluation**. You carry a **reusable AI-SWE delivery harness** into professional practice.

## Skills produced (reused program-wide)
`$coding-model-profile` · `$spec-to-prd` · `$coding-agent-loop` · `$project-context-pack` · `$autonomy-gate-designer` ·
`$agent-sandbox-config` · `$ai-test-hardener` · `$secure-code-gate` · `$ai-review-gate` · `$ui-reconcile` ·
`$ai-incident-runbook` · `$ai-delivery-evidence-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/modern-software-developer-bootcamp` — an AI-first software-development bootcamp (specs, agents, review, delivery) that mirrors this subject's arc — Lectures 1–3
- `anthropics/anthropic-cookbook` — runnable recipes for tool use, agents, structured outputs, and evaluations to ground the coding-agent and test labs — Lectures 2, 3, 7
- `microsoft/generative-ai-for-beginners` — foundational gen-AI building blocks (prompting, context, app scaffolding) for the mental-model weeks — Lectures 1, 2

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **AI PR reviewer** — static / security / architecture / style reviewers with a human merge gate — *Lectures 8–9*
- **Coding-agent self-repair** — unit-test generation + hidden tests + a reward-hacking audit — *Lectures 3, 7*
- **AI SRE incident bot** — RCA draft, telemetry correlation, and human-approved rollback — *Lecture 11*
