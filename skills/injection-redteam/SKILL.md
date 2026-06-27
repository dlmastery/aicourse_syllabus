---
name: injection-redteam
description: Systematically test a tool-using agent for direct and indirect prompt injection and data exfiltration across each channel, reporting attack success rate per channel with defenses mapped to the OWASP LLM Top-10. Use when hardening an agent that reads untrusted content or calls tools.
---

# Injection Redteam

A harness skill that treats an agent as an attack surface: it enumerates the channels through which untrusted text can reach the model, attacks each, measures injection and exfiltration success, and produces channel-specific defenses.

## When to use
- Your agent ingests web pages, emails, files, or tool outputs you don't control.
- The agent has tools that can leak data (send, write, fetch with a URL).
- You need an OWASP-LLM-aligned defense report before deployment.

## Inputs
- The target agent, its tool list, and every data channel it reads (RAG docs, tool returns, user input, files).
- A set of injection payloads (direct and indirect) and an exfiltration canary (a secret the agent should never emit/send).

## Workflow
1. Map channels: list each path untrusted text can enter the context.
2. Direct injection: attack the user-input channel; measure attack success rate (ASR).
3. Indirect injection: plant payloads in documents/tool outputs the agent will read; measure ASR per channel.
4. Exfiltration test: place a canary secret and check whether any attack causes the agent to leak it via a tool.
5. Map each successful attack to an OWASP LLM Top-10 category and recommend a defense (isolation, allow-listing, output filtering, human-in-loop).

## Outputs & evidence artifact
- `evidence/week04-injection/` — per-channel injection ASR, exfiltration results, transcripts, and OWASP-mapped defense recommendations.

## Acceptance checks
- [ ] Every reading channel is enumerated and attacked.
- [ ] Both direct and indirect injection are tested.
- [ ] An exfiltration canary test is included with pass/fail.
- [ ] Each finding maps to an OWASP LLM Top-10 item with a concrete defense.

## Worked example
`Use $injection-redteam on my email-triage agent` → indirect injection via email body ASR 40%, canary leaked through the send-tool in 2/10 trials; recommend tool-call confirmation + content isolation (OWASP LLM01/LLM06).

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — UK AISI eval framework for building agent red-team harnesses.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — 200+ evals including red-team/safety suites.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — agent and tool_use recipes; reference for safe tool design.

## Used in
- Subject 06 · Part A — AI Safety, Alignment & Governance · Week 4 — Adversarial Robustness II: Prompt Injection, Agent Hijacking & Weight Protection
