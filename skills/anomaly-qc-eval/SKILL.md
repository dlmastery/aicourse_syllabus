---
name: anomaly-qc-eval
description: Evaluate a rare-defect / anomaly-detection vision system against operational cost, not just AUROC. Use when shipping a manufacturing QC model and you must pick an operating point that trades false alarms against missed defects.
---

# Anomaly QC Eval

An evaluation harness for industrial anomaly detection. The judgment it encodes: in QC, the metric that matters is cost at the operating point — a high AUROC means nothing if the chosen threshold floods the line with false alarms or misses real defects.

## When to use
- Evaluating a vision QC / predictive-maintenance anomaly model.
- You must choose a threshold that balances false alarms vs missed defects.
- A stakeholder needs the cost trade-off, not just a metric.

## Inputs
- The anomaly model and a labeled test set (defect / no-defect).

## Workflow
1. Compute image-level and pixel-level AUROC.
2. Choose an operating threshold and report the false-alarm rate there.
3. Produce localization samples (where the model says the defect is).
4. Map the operating point to operational cost (inspection vs escape cost).
5. Recommend the threshold that minimizes total cost.

## Outputs & evidence artifact
- `qc-eval.md`: image- and pixel-level AUROC, false-alarm rate at the chosen threshold, localization samples, and the cost trade-off at that operating point.

## Acceptance checks
- [ ] Both image- and pixel-level AUROC are reported.
- [ ] False-alarm rate is given at a specific chosen threshold.
- [ ] A cost trade-off justifies the operating point.

## Worked example
`Use $anomaly-qc-eval on our PCB-defect model.` → Image AUROC 0.97, pixel AUROC 0.91, at the chosen threshold 3% false alarms / 0.4% misses, localization heatmaps, cost-minimizing threshold recommended.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — scoring/eval framework adaptable to threshold and cost analysis.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — pre-built evals demonstrating rigorous metric + slice reporting.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal recipes for building vision evaluation pipelines.

## Used in
- Subject 05 · Part A — Domain-Specific Applied AI · Week 9 — Manufacturing & Industry 4.0: Predictive Maintenance & Vision QC
