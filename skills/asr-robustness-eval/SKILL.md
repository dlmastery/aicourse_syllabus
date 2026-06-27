---
name: asr-robustness-eval
description: Evaluate a speech system beyond clean-set WER — slice by noise and accent and pin down text normalization. Use when reporting ASR quality and a single clean WER number would hide real-world failure on noisy or accented audio.
---

# ASR Robustness Eval

An evaluation harness for speech recognition that refuses to trust a single clean-set number. The judgment it encodes: a headline WER is meaningless without sliced robustness and an explicit normalization scheme — most WER disputes are actually normalization disputes.

## When to use
- Reporting ASR quality (Whisper-style) for a real deployment.
- Audio includes noise, accents, or domain jargon.
- Two WER numbers disagree and you suspect normalization differences.

## Inputs
- The ASR model and audio test sets (clean + noise/accent slices).

## Workflow
1. Fix a text-normalization scheme and document it.
2. Compute overall WER on the clean set.
3. Slice WER by noise level and by accent group.
4. Inspect the worst slices for systematic errors.
5. Write the normalization note so the numbers are reproducible.

## Outputs & evidence artifact
- `asr-eval.md`: overall WER, noise/accent-sliced WER, and the normalization note.

## Acceptance checks
- [ ] WER is reported overall and sliced by noise and accent.
- [ ] A text-normalization scheme is documented.
- [ ] The worst slice is identified with example errors.

## Worked example
`Use $asr-robustness-eval on our Whisper deployment.` → Clean WER 6.1%, noisy WER 14.3%, accented WER 11.8%, normalization note (lowercase, strip punctuation, expand numbers), worst slice = far-field noise.

## Related skills in the wild
- [UKGovernmentBEIS/inspect_ai](https://github.com/UKGovernmentBEIS/inspect_ai) — eval framework with scorers and dataset slicing for robustness reporting.
- [UKGovernmentBEIS/inspect_evals](https://github.com/UKGovernmentBEIS/inspect_evals) — reference evals demonstrating sliced metric reporting.
- [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) — multimodal recipes covering audio/speech evaluation pipelines.

## Used in
- Subject 05 · Part B — Multimodal & Generative AI · Week 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations
