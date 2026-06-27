---
name: domain-readiness
description: Turn a vertical problem into a structured six-lens readiness brief (data, decision, regulatory, model, eval, deployment) before modeling. Use when scoping an applied-AI project and you need to find the lens most likely to kill it.
---

# Domain Readiness

A harness for de-risking an applied-AI project before any modeling. It encodes the judgment that vertical projects fail on the lens you didn't examine — so you interrogate all six, flag the most dangerous one, and name the cheapest check that would de-risk it.

## When to use
- You are scoping a domain-specific AI build and want to avoid a doomed project.
- You have a one-line use case and need a structured brief before committing.
- You must justify model/eval/deployment choices to a stakeholder.

## Inputs
- A one-line use case (who, what decision, what data exists).

## Workflow
1. Data lens: what data exists, its quality, labels, and access constraints.
2. Decision lens: the actual decision the model informs and its stakes.
3. Regulatory lens: legal/compliance constraints on data and decisions.
4. Model lens: a candidate model class fit for the data and decision.
5. Eval lens: how you'd measure success in the decision's terms.
6. Deployment lens: top-3 deployment risks.
7. Flag the lens most likely to kill the project and name the cheapest de-risking check.
8. Commit `anchor/readiness-brief.md`.

## Outputs & evidence artifact
- `anchor/readiness-brief.md`: the six-lens brief, the kill-risk lens flagged, and the cheapest de-risking check.

## Acceptance checks
- [ ] All six lenses are addressed concretely (not generic).
- [ ] Exactly one lens is flagged as the most likely project-killer.
- [ ] A specific, cheap check is proposed to de-risk that lens.

## Worked example
`Use $domain-readiness for "predict ER no-shows"`. Good output: six lenses filled, regulatory flagged as kill-risk (PHI handling), and the cheapest check "confirm de-identified historical access before any modeling."

## Related skills in the wild
- [anthropics/skills](https://github.com/anthropics/skills) — SKILL.md format authority and example-skills patterns for structured briefs.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — recipes for scoping and evaluating applied use cases.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog spanning applied-domain skills.
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — runnable vertical apps to ground feasibility judgments.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 1 — What Makes a Domain Hard: The Six-Lens Method & Picking Your Anchor
