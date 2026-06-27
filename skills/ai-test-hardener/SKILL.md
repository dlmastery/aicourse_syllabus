---
name: ai-test-hardener
description: Turn AI-generated tests into tests that actually constrain behavior — kill tautologies, add asserts, validate a property test via mutation. Use when an agent produced a test suite that's green but doesn't catch real bugs.
---

# AI Test Hardener

A hardening harness for AI-written tests. The judgment it encodes: AI loves to write tests that pass without testing anything — coverage is not constraint, so you prove constraint with mutation testing and at least one validated property.

## When to use
- An agent generated a test suite and you suspect it's tautological.
- Coverage is high but bugs still slip through.
- You want a property-based test to constrain a tricky function.

## Inputs
- The code under test and the AI-generated tests.

## Workflow
1. Run coverage and a mutation-testing pass to find surviving mutants.
2. Identify tautological tests (assert-true, no real expectation).
3. Add meaningful asserts to close the gaps the mutants exposed.
4. Write ≥1 property-based test and validate it kills a real mutant.
5. Remove or fix the tautological tests; re-run mutation testing.

## Outputs & evidence artifact
- `evidence/week07-tests/`: a coverage + mutation report, the added asserts, ≥1 validated property test, and the list of tautological tests removed/fixed.

## Acceptance checks
- [ ] A mutation-testing score is reported (not just coverage).
- [ ] At least one validated property test kills a real mutant.
- [ ] Tautological tests are identified and removed/fixed.

## Worked example
`Use $ai-test-hardener on the parser test suite.` → Coverage 95% but mutation 41%; added asserts and a property test over random inputs lift mutation to 79%; 6 tautological tests removed.

## Related skills in the wild
- [obra/superpowers](https://github.com/obra/superpowers) — test-driven-development and verification-before-completion methodology.
- [anthropics/claude-code](https://github.com/anthropics/claude-code) — agentic CLI for generating and then hardening tests in-loop.
- [karanb192/awesome-claude-skills](https://github.com/karanb192/awesome-claude-skills) — verified TDD/testing skills to model the hardening pass on.

## Used in
- Subject 03 · Part B — AI-First Software Development · Week 7 — AI-Generated Tests and Test Quality
