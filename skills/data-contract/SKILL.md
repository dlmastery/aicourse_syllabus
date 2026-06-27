---
name: data-contract
description: Wrap a dataset in a schema + distribution contract that gates the pipeline and fails loudly on violation. Use when building a data pipeline and you need a validation suite plus a DAG gate that blocks bad data.
---

# Data Contract

A harness for putting a contract between raw data and the pipeline. It encodes the judgment that silent schema/distribution drift is the most common cause of model rot, so the pipeline should refuse to run on data that violates explicit expectations.

## When to use
- You are wiring a data pipeline (Airflow/DVC/feature store) and want a validation gate.
- You keep getting downstream failures traceable to upstream data changes.
- You need a documented, versioned definition of "valid input."

## Inputs
- A representative dataframe (the reference).
- Expectations: column schema, types, ranges, null rates, key distributions.

## Workflow
1. Profile the reference dataframe to draft schema and distribution expectations.
2. Encode them as a validation suite (types, ranges, null thresholds, distribution checks).
3. Wire the suite as a gate task in the DAG: pass → continue, fail → stop with a report.
4. Trigger a deliberate violation to capture a sample failure report.
5. Commit the suite, the gate task, and the failure sample under `evidence/week03-data-contract/`.

## Outputs & evidence artifact
- `evidence/week03-data-contract/validation-report.html`: the validation suite results, the DAG gate, and a sample failure report.

## Acceptance checks
- [ ] The suite checks schema, types, and at least one distribution property.
- [ ] The gate actually blocks the DAG on failure (demonstrated).
- [ ] A real failure report is captured, not just a passing run.

## Worked example
`Use $data-contract on this transactions table`. Good output: a suite asserting `amount ≥ 0` and `< 2% null merchant_id`, a DAG gate that halts on breach, and a failure report flagging a day with 11% null merchants.

## Related skills in the wild
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — data loaders/ingestion tooling where contracts guard inputs.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — observability/evaluation recipes for data quality gating.
- [modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) — Filesystem/Git reference servers for versioned data access.
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — breadth catalog including data-pipeline skills.

## Used in
- Subject 04 · Part A — Full-Stack AI: MLOps, LLMOps & AgentOps to Production · Week 3 — Data Pipelines & Versioning: Airflow, DVC, Feature Stores
