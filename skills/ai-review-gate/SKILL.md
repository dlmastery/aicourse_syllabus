---
name: ai-review-gate
description: Build a calibrated AI code-review gate that complements, not replaces, human review — grounded reviewer config, severity→gate mapping, effectiveness report. Use when adding AI review to a PR pipeline without creating false-positive fatigue.
---

# AI Review Gate

A calibration harness for an AI reviewer in a PR pipeline. The judgment it encodes: an AI reviewer is only useful if it's grounded in your conventions and measured for caught/missed/false-positive — an uncalibrated gate trains people to ignore it.

## When to use
- Adding AI review to a pull-request workflow.
- An existing AI reviewer is noisy and being ignored.
- You need to decide which findings block a merge vs comment only.

## Inputs
- The repo, its coding conventions, and a sample PR set.

## Workflow
1. Ground the reviewer in repo conventions and a review checklist.
2. Map finding severity to a gate action (block / warn / comment).
3. Run it on the PR sample; record caught, missed, and false positives.
4. Tune the prompt/threshold to cut false positives without missing real issues.
5. Wire the gate into CI with the severity mapping.

## Outputs & evidence artifact
- `evidence/week09-review/`: the grounded reviewer config, the checklist, the severity→gate mapping, and an effectiveness report (caught/missed/FP).

## Acceptance checks
- [ ] The reviewer is grounded in actual repo conventions.
- [ ] An effectiveness report quantifies caught/missed/false-positive.
- [ ] Severity→gate mapping decides blocking vs non-blocking findings.

## Worked example
`Use $ai-review-gate to add AI review to our backend repo.` → Reviewer grounded in the style guide, severity map (security→block, style→comment), effectiveness 14 caught / 2 missed / 3 FP after tuning, wired into CI.

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI with hooks/slash-commands for PR review automation.
- [obra/superpowers](https://github.com/obra/superpowers) — requesting/receiving-code-review skills modeling a human+AI review loop.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified skills for code review, debugging, and git workflows.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 9 — AI Code Review Gates
