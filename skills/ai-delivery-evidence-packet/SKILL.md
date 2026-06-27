---
name: ai-delivery-evidence-packet
description: Assemble PRD, agent trajectory, test/mutation report, security scan, review record, and deploy/rollback proof into one bundle. Use at an AI-first SWE capstone to prove a feature was shipped end-to-end with a coding agent.
---

# AI Delivery Evidence Packet

A capstone assembly harness for a feature shipped with a coding agent. The judgment it encodes: "the agent built it" is not evidence — the bundle must trace from requirements through the agent's trajectory to tests, security, review, and a deploy/rollback proof.

## When to use
- Closing an AI-first software-development capstone.
- A reviewer needs to verify the agent's work, not just the final diff.
- You must show tests, security, and rollback were all handled.

## Inputs
- The PRD, the coding agent's run trajectory, and all delivery artifacts.

## Workflow
1. Attach the PRD and the agent's trajectory (the steps it took).
2. Include the test report plus a mutation-testing score.
3. Add the security scan results.
4. Include the human review record (what was caught/changed).
5. Attach deploy + rollback proof and the monitoring dashboard.

## Outputs & evidence artifact
- The packet itself: PRD + agent trajectory + test/mutation report + security scan + review record + deploy/rollback proof + monitoring dashboard.

## Acceptance checks
- [ ] The agent's trajectory is included and links to the PRD.
- [ ] Test, mutation, and security results are all present.
- [ ] A deploy and a rollback proof are both attached.

## Worked example
`Use $ai-delivery-evidence-packet to close our feature capstone.` → A bundle: PRD, agent trajectory, 92% coverage / 78% mutation score, clean SAST scan, review record with 3 fixes, canary deploy + rollback proof, dashboard.

## Related skills in the wild
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — the coding agent whose trajectory and hooks generate the delivery artifacts.
- [obra/superpowers](https://github.com/obra/superpowers) — methodology (writing-plans → TDD → review) that structures the delivery workflow.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — agent and evaluation recipes for documenting trajectories and tests.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 12 — Capstone: Ship a Real Feature End-to-End with a Coding Agent
