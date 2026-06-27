# Subject 12 — Multimodal & Generative AI

**Track:** Multimodal / Generative · **Altitude:** Builder → Engineer · **Length:** 12 weeks (3 lecture hrs + 3 lab hrs/wk)
**Prerequisites:** Subjects 01–03 (math/ML from scratch, deep learning, transformers/attention). You can write a training loop, implement attention, and read a loss curve. We assume PyTorch fluency and one GPU (24 GB or Colab/Modal).
**Pedagogy:** Vizuara-style *build-the-component-from-scratch* meets the book's *concept → code → critique → reflection → rebuild* loop. You implement a Vision Transformer, a CLIP-style contrastive loss, and a DDPM **from scratch** before touching pretrained giants — then you fine-tune and assemble the giants into a real app.

**Course anchor cases (carried all term):**
1. **A small diffusion model** trained from scratch on CIFAR-10 / CelebA — your evidence that you understand generation, not just call an API.
2. **A multimodal image+text assistant** — a VLM-backed app (caption/VQA/grounded answer) that you build, fine-tune, evaluate, and harden against hallucination. The capstone fuses both: a generation-and-understanding system with honest evals.

**What you leave with:** a `multimodal/` repo containing a from-scratch ViT, a contrastive image–text model, a working DDPM + latent-diffusion fine-tune, an audio pipeline, a multimodal-RAG agent, six reusable skills, and an evidence log — not a folder of API demos.

---

<!-- DETAILED-TOC v2 -->
## 📑 Detailed table of contents
_1 academic quarter · 3 lecture-hours/week · 12 lectures (~36 contact hrs). Full time-boxed lecture plan: [`_toc/12-multimodal-and-generative-ai-toc.md`](_toc/12-multimodal-and-generative-ai-toc.md)._

1. **Lecture 1 — Vision Transformers From Scratch: Images as Sequences of Patches** — Patch embedding · Self-attention recap · Inductive bias trade-off · Class token vs mean pooling  ·  🔧 `$from-scratch-verifier`
2. **Lecture 2 — Contrastive Learning & CLIP: Aligning Images and Text** — Contrastive (InfoNCE) loss · Zero-shot classification · Batch size as negatives · Modality gap  ·  🔧 `$contrastive-eval`
3. **Lecture 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning** — Connector / projector · Visual tokens in context · Instruction tuning for VLMs · VLM hallucination  ·  🔧 `$vlm-probe`
4. **Lecture 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)** — Forward process · Reverse process / objective · Time conditioning · Sampling steps  ·  🔧 `$generative-eval`
5. **Lecture 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image** — Latent diffusion · Cross-attention text conditioning · Classifier-free guidance (CFG) · CLIPScore vs FID for text-to-image  ·  🔧 `$t2i-eval`
6. **Lecture 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone** — Continuous-time view · Conditional flow matching loss · Rectified flow · DDIM bridge  ·  🔧 `$sampler-benchmark`
7. **Lecture 7 — Video Generation: Spatiotemporal Diffusion & World Consistency** — Temporal modeling · Latent video diffusion + DiT · Conditioning modes · Evaluation  ·  🔧 `$video-consistency-eval`
8. **Lecture 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations** — ASR & WER · Mel-spectrogram pipeline · Neural audio codecs · Robustness slices  ·  🔧 `$asr-robustness-eval`
9. **Lecture 9 — Any-to-Any & Unified Multimodal Models** — Unified token space · Early vs late fusion · Interleaved generation · The specialist-vs-generalist trade-off  ·  🔧 `$modality-router-eval`
10. **Lecture 10 — World Models: Learning Simulators (IRIS, Genie-style)** — Latent dynamics · Transformer/tokenized world models (IRIS) · Action-conditioned generation (Genie) · Compounding error / rollout horizon  ·  🔧 `$rollout-eval`
11. **Lecture 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems** — Multimodal retrieval · Grounded multimodal generation · Agentic tools for vision · Multimodal hallucination guardrail  ·  🔧 `$mm-grounding-eval`
12. **Lecture 12 — Capstone: A Multimodal App + a Small Diffusion Model**  ·  🔧 `$multimodal-capstone-packet`

---

## Course-level Assessment & grading (sums to 100%)

| Component | Weight | What it measures |
|-----------|-------:|------------------|
| Weekly labs (W1–W11 deliverables) | 55% | Per-week weights below; from-scratch builds + evals |
| Midterm: from-scratch DDPM report (W5) | 10% | You can train and evaluate a generative model |
| Capstone: multimodal app + small diffusion model (W12) | 30% | End-to-end generation + understanding, evaluated honestly |
| Paper-presentation / seminar participation | 5% | Reading frontier multimodal papers critically |

Per-week lab weights (the 55%): W1 5% · W2 5% · W3 5% · W4 5% · W5 5% · W6 5% · W7 5% · W8 5% · W9 5% · W10 5% · W11 5%. (= 55%)

## Tooling & environment (June 2026)

- **Core:** Python 3.12, PyTorch 2.5 (`torch.compile`, SDPA/FlashAttention-3 backend), `uv`, Weights & Biases, `einops`, `timm` 1.0.
- **Diffusion / generation:** Hugging Face `diffusers` 0.31, `accelerate`, xFormers; latent VAEs from `diffusers`.
- **VLMs:** `transformers` 4.46+, LLaVA-NeXT / Qwen2.5-VL / Llama-3.2-Vision checkpoints; `peft` (LoRA/QLoRA) for fine-tuning; `bitsandbytes` for 4-bit.
- **Audio:** `openai-whisper` / faster-whisper, `torchaudio`, a modern TTS (XTTS-v2 / Parler-TTS / Kokoro), `librosa`.
- **CLIP / retrieval:** `open_clip`, FAISS / Qdrant for multimodal vector search.
- **Eval:** `torchmetrics` (FID, CLIPScore), `clip-score`, COCO caption metrics (CIDEr/SPICE), Inspect AI / custom VLM judges, human eval sheets.
- **Serving:** vLLM (multimodal), FastAPI, Gradio for app demos, Modal for GPU jobs.
- **Compute note:** every from-scratch build is sized for one 24 GB GPU; diffusion uses 32×32/64×64 resolutions; VLM fine-tunes use LoRA + 4-bit. Larger runs are optional Modal jobs.

## Capstone spec (Week 12)

Ship **two coupled artifacts**:
- **(A) A small diffusion model** trained from scratch (or substantially fine-tuned) on CIFAR-10/CelebA, reported with **FID** + sample grid + a training-stability writeup.
- **(B) A multimodal image+text assistant**: a VLM app (VQA / grounded captioning / visual document QA) with a **hallucination-aware eval** (CLIPScore/judge + grounding check) and a guardrail for "I can't see that in the image."

**Milestones:** M1 (W5) DDPM trained + FID baseline; M2 (W9) VLM app working + eval harness; M3 (W11) multimodal-RAG/agent layer + hardening; M4 (W12) demo + report.
**Acceptance checklist:** FID reported with a sample grid and a baseline comparison; VLM eval reports a grounding/hallucination metric and ≥1 failure slice; every generated/answered claim is traceable; the report names a failure mode and a fix; no metric is reported without a baseline.

---

## Week 1 — Vision Transformers From Scratch: Images as Sequences of Patches

### State of the Art (June 2026)
- ViTs remain the multimodal backbone; **DINOv2 / DINOv3** self-supervised features and **SigLIP 2** encoders are the 2026 pretrained defaults feeding VLMs.
- **Register tokens** and the **FlashAttention-3/4 SDPA backend** are standard ViT training practice; patchification is still a `Conv2d`.
- Data-efficiency tricks (DeiT distillation, strong augmentation) still decide small-data ViT training.

**Altitude:** Builder · **Format:** 3h lecture + 3h lab
**Anchor case:** classify CIFAR-10 with a ViT you write yourself — patchify, embed, attend, pool, predict.

### Learning goals
- Implement a Vision Transformer end-to-end (patch embedding → positional embedding → transformer encoder → class head).
- Explain why attention over patches works and where ViTs need more data/regularization than CNNs.
- Read attention maps and connect them to what the model uses.

### Concept map
- **Patch embedding.** *Formula:* split `H×W×3` into `N=(H/P)(W/P)` patches of `P×P`, flatten, linear-project to `d`. *Shapes:* image `(3,32,32)` → patches `(N, P*P*3)` → tokens `(N, d)`. *Code mapping:* a `Conv2d(3, d, kernel=P, stride=P)` *is* patch embedding. *Common mistake:* forgetting the `[CLS]` token or positional embedding (then permutation-invariant nonsense).
- **Self-attention recap.** *Formula:* `Attn(Q,K,V)=softmax(QKᵀ/√d_k)V`. *Plain English:* each patch mixes information from every other patch, weighted by similarity. *Common mistake:* omitting the `√d_k` scale → saturated softmax.
- **Inductive bias trade-off.** Plain English: CNNs assume locality/translation; ViTs don't, so they need more data or strong augmentation/distillation. Where it matters: small-data training collapses without it.
- **Class token vs mean pooling.** Plain English: two ways to summarize the sequence into one vector for the classifier.

### Hands-on build (the lab)
- Implement `PatchEmbed`, multi-head attention, a transformer block, and a ViT classifier in pure PyTorch (no `timm` model); train on CIFAR-10 with augmentation; report top-1 accuracy.
- Compare against a `timm` ViT and a small ResNet baseline; visualize attention rollout for 5 images.
- **Deliverable:** `builds/vit/` with your ViT, accuracy vs baselines, and attention visualizations. **Acceptance:** from-scratch ViT trains and beats a linear baseline; attention maps rendered.

▶ **Practical project:** `VizuaraAI/Transformers-for-vision-BOOK` — implement the ViT (patch-embed → attention → class head) from scratch and verify it against a reference.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch timm einops`; clone the repo; load CIFAR-10.
2. **Build:** implement `PatchEmbed`, multi-head attention, a transformer block, the ViT classifier in pure PyTorch.
3. **Train:** train on CIFAR-10 with augmentation; report top-1 accuracy.
4. **Compare:** vs a `timm` ViT + a small ResNet; visualize attention rollout for 5 images.
5. **Verify:** shape checks + output-parity vs the reference + a param-count comparison.
- **Artifact:** `builds/vit/` with the ViT, accuracy table, attention images, `verify.md`.
- **Use `$from-scratch-verifier`:** prove the module matches a reference (shapes + parity).
- **Done when:** the from-scratch ViT beats a linear baseline and attention maps render.
- **Stretch:** ablate positional embeddings and add register tokens.

### Harness / reusable skill — `$from-scratch-verifier`
- **Purpose:** prove a from-scratch module matches a reference implementation.
- **Inputs:** your module + a reference (`timm`/`transformers`). **Required outputs:** shape checks at every stage, output-parity test on a fixed input, and a parameter-count comparison. **Evidence artifact:** `verify.md`.

### Common failure modes
- **Missing positional embedding** → bag-of-patches, no spatial sense. *Fix:* add (and ablate) pos-emb.
- **No augmentation on small data** → ViT overfits hard. *Fix:* RandAugment/mixup, or distill from a CNN.
- **Unscaled attention** → vanishing gradients. *Fix:* divide by `√d_k`; assert numerically.
- **Shape drift** → silent broadcasting bugs. *Fix:* `$from-scratch-verifier` shape asserts.

### Evidence artifact
`builds/vit/verify.md` + accuracy table + attention images.

### Skill sink-in
Predict whether your from-scratch ViT or the ResNet wins on CIFAR-10 at the same budget. Train both. Record the result and why ViTs are data-hungry.

### Depth upgrade
- **Dataset:** CIFAR-10 — cs.toronto.edu/~kriz/cifar.html / huggingface.co/datasets/uoft-cs/cifar10 (60k 32×32 images, 10 classes, ~170 MB, MIT-like research use).
- **Code stub:**
```python
import torch, torch.nn as nn
class PatchEmbed(nn.Module):
    def __init__(self, img=32, p=4, c=3, d=192):
        super().__init__(); self.proj = nn.Conv2d(c, d, kernel_size=p, stride=p)
        self.n = (img // p) ** 2
        self.cls = nn.Parameter(torch.zeros(1, 1, d))
        self.pos = nn.Parameter(torch.zeros(1, self.n + 1, d))
    def forward(self, x):                       # x: (B, 3, 32, 32)
        x = self.proj(x).flatten(2).transpose(1, 2)        # (B, N, d)
        cls = self.cls.expand(x.size(0), -1, -1)
        return torch.cat([cls, x], 1) + self.pos           # (B, N+1, d)
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Correctness | Parity vs reference, all shapes asserted | Trains, no parity check | Doesn't train |
| Performance | Beats CNN-baseline w/ aug | Beats linear only | Below linear |
| Analysis | Attention maps interpreted | Shown only | None |
| Ablation | Pos-emb/aug ablated | One ablation | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Dosovitskiy et al., "An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale (ViT)," *ICLR* 2021.
  - Touvron et al., "Training data-efficient image transformers & distillation (DeiT)," *ICML* 2021.
  - Vaswani et al., "Attention Is All You Need," *NeurIPS* 2017.
  - Steiner et al., "How to train your ViT? Data, Augmentation, and Regularization," *TMLR*, 2022.

---

## Week 2 — Contrastive Learning & CLIP: Aligning Images and Text

### State of the Art (June 2026)
- **SigLIP 2** (sigmoid loss) is the 2026 contrastive default; **ColPali / ColQwen3** extend late-interaction contrastive retrieval to document images.
- Multimodal embeddings (**voyage-multimodal-3, Qwen3-VL-Embedding, Cohere embed-v4**) productionize CLIP-style retrieval.
- The modality-gap and batch-size-as-negatives lessons still hold; large-batch / sigmoid loss mitigate them.

**Altitude:** Builder · **Anchor case:** train a small CLIP on a image–caption subset so "a photo of a dog" retrieves dog images.

### Learning goals
- Implement the symmetric InfoNCE contrastive loss and a dual image/text encoder.
- Explain zero-shot classification via text prompts and the role of the temperature and batch size.
- Evaluate cross-modal retrieval (image→text and text→image Recall@k) and zero-shot accuracy.

### Concept map
- **Contrastive (InfoNCE) loss.** *Formula:* for a batch of `N` pairs, maximize similarity of matched image–text and minimize mismatched; `L = ½(CE(logits, labels) + CE(logitsᵀ, labels))` with `logits = (I·Tᵀ)/τ`. *Symbols:* `I,T` are L2-normalized embeddings, `τ` temperature. *Plain English:* pull true pairs together, push the rest apart, using the other batch items as negatives. *Common mistake:* forgetting to normalize embeddings or learn `τ`.
- **Zero-shot classification.** Plain English: embed class names as text ("a photo of a {class}"), embed the image, pick the nearest text. Where it matters: no fine-tuning needed. Common mistake: poor prompt templates tank accuracy.
- **Batch size as negatives.** Plain English: more in-batch negatives = harder, better contrast. Where it matters: small batches underperform; gradient accumulation / large-batch tricks help.
- **Modality gap.** Plain English: image and text embeddings occupy slightly separated cones; retrieval still works but the gap is real.

### Hands-on build (the lab)
- Implement CLIP's symmetric loss; train a small dual-encoder (ViT image tower + a small text encoder) on a **Flickr30k / COCO captions** subset; report image↔text Recall@1/5/10.
- Run **zero-shot CIFAR-10** with `open_clip` pretrained weights and compare prompt templates.
- **Deliverable:** `builds/clip/` with the loss, retrieval metrics, and a zero-shot comparison. **Acceptance:** symmetric loss verified; retrieval Recall@k reported both directions.

▶ **Practical project:** `VizuaraAI/Transformers-for-vision-BOOK` — train a dual-encoder with the symmetric InfoNCE loss and measure both-direction retrieval.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch open_clip_torch`; clone the repo; load a Flickr30k/COCO subset.
2. **Loss:** implement the symmetric InfoNCE loss (normalized embeddings, learned τ).
3. **Train:** a small dual-encoder (ViT tower + text tower); report image↔text Recall@1/5/10.
4. **Zero-shot:** run zero-shot CIFAR-10 with `open_clip` weights; sweep 5 prompt templates.
5. **Report:** retrieval + zero-shot tables + a prompt-sensitivity note.
- **Artifact:** `builds/clip/clip-eval.md` + retrieval/zero-shot tables.
- **Use `$contrastive-eval`:** R@k both directions + zero-shot + prompt sensitivity.
- **Done when:** symmetric loss verified and Recall@k reported both directions.
- **Stretch:** swap in a SigLIP-2 sigmoid loss and compare.

### Harness / reusable skill — `$contrastive-eval`
- **Purpose:** evaluate any image–text model on retrieval and zero-shot, both directions.
- **Inputs:** image/text encoders + a paired set. **Required outputs:** R@1/5/10 (i→t and t→i), zero-shot accuracy, and a prompt-template sensitivity note. **Evidence artifact:** `clip-eval.md`.

### Common failure modes
- **Unnormalized embeddings** → degenerate similarities. *Fix:* L2-normalize both towers.
- **Tiny batch** → too few negatives, weak model. *Fix:* large batch / accumulation / memory bank.
- **Single prompt** → unstable zero-shot. *Fix:* prompt ensembling, report sensitivity.
- **One-direction eval** → hides asymmetry. *Fix:* report i→t and t→i.

### Evidence artifact
`builds/clip/clip-eval.md` + retrieval + zero-shot tables.

### Skill sink-in
Predict how much prompt template choice changes zero-shot accuracy. Sweep 5 templates. Record the spread — it is larger than you expect.

### Depth upgrade
- **Dataset:** Flickr30k — huggingface.co/datasets/nlphuji/flickr30k (31k images, 5 captions each, ~4 GB, research use) and/or MS-COCO Captions — cocodataset.org (~118k images, CC BY 4.0 annotations).
- **Code stub:**
```python
import torch, torch.nn.functional as F
def clip_loss(img_emb, txt_emb, logit_scale):
    img = F.normalize(img_emb, dim=-1); txt = F.normalize(txt_emb, dim=-1)
    logits = logit_scale.exp() * img @ txt.t()         # (B, B)
    labels = torch.arange(img.size(0), device=img.device)
    return 0.5 * (F.cross_entropy(logits, labels) + F.cross_entropy(logits.t(), labels))
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Loss correctness | Symmetric, learned τ, normalized | One issue | Broken |
| Retrieval | R@k both directions | One direction | None |
| Zero-shot | Prompt-ensemble + sensitivity | Single prompt | None |
| Insight | Discusses modality gap/batch | Partial | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Radford et al., "Learning Transferable Visual Models From Natural Language Supervision (CLIP)," *ICML* 2021.
  - Oord et al., "Representation Learning with Contrastive Predictive Coding (InfoNCE)," 2018.
  - Zhai et al., "Sigmoid Loss for Language Image Pre-Training (SigLIP)," *ICCV* 2023.
  - Liang et al., "Mind the Gap: Understanding the Modality Gap in Contrastive Representation Learning," *NeurIPS* 2022.

---

## Week 3 — Vision-Language Models: LLaVA, Qwen-VL, Llama-Vision & Fine-Tuning

### State of the Art (June 2026)
- 2026 open VLM leaders: **Qwen3-VL, Llama 4 (native-multimodal), InternVL 3, Molmo, Gemma 3 vision**; closed frontier: **Gemini 3.1 Pro, GPT-5.5, Claude Opus 4.8**.
- **AnyRes / high-res tiling** for documents; **LoRA/QLoRA + trl** fine-tuning; **object-hallucination evals (POPE / HALault)** are mandatory.
- Connector design (MLP vs resampler) plus the visual-token budget remain the core trade-offs.

**Altitude:** Builder → Engineer · **Anchor case:** stand up a VLM that answers questions about an image, then LoRA-fine-tune it on a target task.

### Learning goals
- Explain the VLM recipe: a vision encoder + a projector/connector + an LLM, and how visual tokens enter the language model.
- Run inference with an open VLM (LLaVA-NeXT / Qwen2.5-VL / Llama-3.2-Vision) for VQA and captioning.
- LoRA-fine-tune a VLM on a small instruction dataset and evaluate the lift.

### Concept map
- **Connector / projector.** *Plain English:* the vision encoder outputs patch features; an MLP (LLaVA) or resampler/cross-attention (Flamingo/Qwen) maps them into the LLM's token space. *Shapes:* `(N_patches, d_vision) → (N_visual_tokens, d_llm)`. *Common mistake:* freezing/unfreezing the wrong stage; LLaVA's two-stage recipe (align projector, then instruction-tune) matters.
- **Visual tokens in context.** Plain English: images become a sequence of tokens prepended to the text; long/high-res images cost many tokens. Where it matters: context budget, tiling for high-res (LLaVA-NeXT/AnyRes). Common mistake: ignoring resolution → unreadable text in documents.
- **Instruction tuning for VLMs.** Plain English: teach the model to follow image+text instructions with curated VQA/caption data. Common mistake: catastrophic forgetting of language ability; LoRA mitigates.
- **VLM hallucination.** Plain English: VLMs confidently describe objects not in the image (object hallucination). Where it matters: every eval. Common mistake: trusting fluent descriptions.

### Hands-on build (the lab)
- Run zero-shot VQA/captioning with an open VLM on **VQAv2 / TextVQA / DocVQA** samples; measure accuracy and inspect failures.
- **LoRA-fine-tune** the VLM on a small target instruction set; report before/after on a held-out slice.
- **Deliverable:** `builds/vlm/` with inference results, a LoRA fine-tune, and a before/after table. **Acceptance:** measurable lift on the target slice; ≥3 hallucination examples documented.

▶ **Practical project:** `VizuaraAI/infertutor-arena-capstone` — run/serve a Qwen-VL VLM for VQA and LoRA-fine-tune it on a target slice.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100/Modal; `pip install transformers peft bitsandbytes`; clone the repo; load Qwen2.5-VL / LLaVA-NeXT.
2. **Zero-shot:** run VQA/captioning on VQAv2/TextVQA/DocVQA samples; inspect failures.
3. **Probe:** per-capability accuracy (objects/counting/text-in-image/spatial) + a hallucination rate.
4. **LoRA:** fine-tune on a small target instruction set; report before/after on a held-out slice.
5. **Document:** ≥3 hallucination examples + a resolution-sensitivity note.
- **Artifact:** `builds/vlm/vlm-probe.md` + LoRA before/after table.
- **Use `$vlm-probe`:** per-capability accuracy + hallucination rate before deploying.
- **Done when:** measurable LoRA lift on the slice and ≥3 hallucinations documented.
- **Stretch:** add AnyRes high-res tiling and re-measure DocVQA.

### Harness / reusable skill — `$vlm-probe`
- **Purpose:** characterize a VLM's strengths/failures before deploying it.
- **Inputs:** a VLM + a probe set (objects, counting, text-in-image, spatial). **Required outputs:** per-capability accuracy, a hallucination rate, and a resolution-sensitivity note. **Evidence artifact:** `vlm-probe.md`.

### Common failure modes
- **Resolution starvation** → can't read document/UI text. *Fix:* high-res tiling (AnyRes), report resolution.
- **Object hallucination** → names absent objects. *Fix:* grounding/POPE-style eval, abstention prompt.
- **Catastrophic forgetting** in full fine-tune. *Fix:* LoRA, small LR, mixed data.
- **Eval on easy VQA only** → misses counting/spatial/text gaps. *Fix:* capability-sliced probe.

### Evidence artifact
`builds/vlm/vlm-probe.md` + LoRA before/after table.

### Skill sink-in
Predict which capability (objects / counting / reading text / spatial) your VLM is worst at. Probe all four. Record the weakest and a hypothesis.

### Depth upgrade
- **Dataset:** VQAv2 — visualqa.org / huggingface.co/datasets/HuggingFaceM4/VQAv2 (~1.1M QA pairs, CC BY 4.0); TextVQA — textvqa.org (45k questions, CC BY 4.0); models e.g. **llava-hf/llava-v1.6-mistral-7b-hf**, **Qwen/Qwen2.5-VL-7B-Instruct** (HF, Apache-2.0/Qwen license).
- **Code stub:**
```python
from transformers import AutoProcessor, LlavaNextForConditionalGeneration
import torch
proc = AutoProcessor.from_pretrained("llava-hf/llava-v1.6-mistral-7b-hf")
model = LlavaNextForConditionalGeneration.from_pretrained(
    "llava-hf/llava-v1.6-mistral-7b-hf", torch_dtype=torch.float16, device_map="auto")
def vqa(image, question):
    prompt = f"[INST] <image>\n{question} [/INST]"
    inp = proc(prompt, image, return_tensors="pt").to(model.device, torch.float16)
    out = model.generate(**inp, max_new_tokens=64)
    return proc.decode(out[0], skip_special_tokens=True)
# LoRA: wrap with peft.get_peft_model(model, LoraConfig(target_modules=["q_proj","v_proj"]))
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Architecture grasp | Explains connector+token flow | Partial | Black box |
| Fine-tune | LoRA lift on held-out slice | Trains, no eval | None |
| Hallucination | Rate measured + examples | Mentioned | Ignored |
| Capability slices | 4 capabilities probed | One | Aggregate only |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Liu et al., "Visual Instruction Tuning (LLaVA)," *NeurIPS* 2023; Liu et al., "Improved Baselines (LLaVA-1.5)," 2024.
  - Bai et al., "Qwen-VL / Qwen2-VL," 2023–2024.
  - Alayrac et al., "Flamingo: a Visual Language Model for Few-Shot Learning," *NeurIPS* 2022.
  - Li et al., "Evaluating Object Hallucination in Large Vision-Language Models (POPE)," *EMNLP* 2023.

---

## Week 4 — Diffusion From Scratch I: DDPM (the Forward & Reverse Process)

### State of the Art (June 2026)
- **DiT (Diffusion Transformer)** has displaced the U-Net as the scalable backbone; **ε/v-prediction + cosine/EDM schedules** are standard.
- **FID + a memorization / nearest-neighbor check** is the honest eval; **EDM2** training recipes are the reference.
- Foundations are still taught on CIFAR/CelebA at 32–64px on one GPU.

**Altitude:** Builder · **Anchor case:** train a denoising diffusion model on CIFAR-10/CelebA and sample images you generated yourself.

### Learning goals
- Derive and implement the DDPM forward (noising) and reverse (denoising) processes.
- Implement a noise-prediction U-Net with time conditioning and train the simplified ε-objective.
- Sample images and reason about the noise schedule and number of steps.

### Concept map
- **Forward process.** *Formula:* `q(x_t|x_0)=N(√(ᾱ_t) x_0, (1−ᾱ_t)I)` → closed form `x_t=√(ᾱ_t)x_0+√(1−ᾱ_t)ε`. *Symbols:* `ᾱ_t` cumulative product of `1−β_t`. *Plain English:* gradually add Gaussian noise until the image is pure noise. *Code mapping:* one line — sample `t`, sample `ε`, form `x_t`. *Common mistake:* mismatched schedule between train and sample.
- **Reverse process / objective.** *Formula (simplified):* `L = E[‖ε − ε_θ(x_t, t)‖²]`. *Plain English:* train a network to predict the noise added at step `t`; denoising = subtract predicted noise. *Common mistake:* predicting `x_0` vs `ε` vs `v` and mixing parameterizations.
- **Time conditioning.** Plain English: the U-Net must know which noise level it's at; inject a sinusoidal time embedding. Common mistake: omitting it → blurry mush.
- **Sampling steps.** Plain English: ancestral sampling over T steps (DDPM) is slow; DDIM (Week 6 preview) is the deterministic fast cousin.

### Hands-on build (the lab)
- Implement the DDPM schedule, a small time-conditioned U-Net, the ε-loss, and an ancestral sampler; train on CIFAR-10 (or 32×32 CelebA); generate a sample grid.
- Compute **FID** vs the training set; compare two noise schedules (linear vs cosine).
- **Deliverable:** `builds/ddpm/` with training code, sample grids, and FID. **Acceptance:** recognizable samples; FID reported; cosine vs linear compared.

▶ **Practical project:** `VizuaraAILabs/Principles-of-Diffusion-Models` — implement the DDPM forward/reverse + time-conditioned U-Net and report FID.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch torchvision diffusers`; clone the repo; load CIFAR-10/CelebA (32–64px).
2. **Schedule:** implement the DDPM β/ᾱ schedule + closed-form forward noising.
3. **U-Net:** build a small time-conditioned U-Net; train the ε-objective.
4. **Sample:** an ancestral sampler → a sample grid; compute FID vs the training set.
5. **Ablate:** compare linear vs cosine schedule; add a nearest-neighbor memorization check.
- **Artifact:** `builds/ddpm/gen-eval.md` + sample grids + FID + schedule comparison.
- **Use `$generative-eval`:** FID + a diversity/memorization check + a sample grid.
- **Done when:** recognizable samples, FID reported, cosine vs linear compared.
- **Stretch:** swap the U-Net for a small DiT backbone and compare FID.

### Harness / reusable skill — `$generative-eval`
- **Purpose:** evaluate a generator beyond eyeballing.
- **Inputs:** generated + real samples. **Required outputs:** FID (and/or CLIPScore for conditional), a diversity check (mode-coverage / nearest-neighbor to training set to catch memorization), and a sample grid. **Evidence artifact:** `gen-eval.md`.

### Common failure modes
- **Train/sample schedule mismatch** → noise. *Fix:* share the exact `β`/`ᾱ` arrays.
- **Missing time embedding** → blurry constant output. *Fix:* add sinusoidal `t`-embedding to every block.
- **FID on too few samples** → noisy/meaningless. *Fix:* ≥10k samples (or state the caveat).
- **Memorization mistaken for quality** → copies training images. *Fix:* nearest-neighbor check.

### Evidence artifact
`builds/ddpm/gen-eval.md` + sample grids + FID + schedule comparison. *(This is the W5 midterm input.)*

### Skill sink-in
Predict whether cosine or linear schedule gives lower FID at your budget. Train both. Record the winner and your explanation.

### Depth upgrade
- **Dataset:** CIFAR-10 (as W1) or CelebA — mmlab.ie.cuhk.edu.hk/projects/CelebA.html / huggingface.co/datasets/student/celebA (~200k face images, ~1.4 GB, **research-only license**). Use 32×32 or 64×64 crops.
- **Code stub:**
```python
import torch
T = 1000
betas = torch.linspace(1e-4, 0.02, T)
alphas = 1 - betas; abar = torch.cumprod(alphas, 0)
def q_sample(x0, t, eps):                          # forward noising, closed form
    return abar[t].sqrt()[:, None, None, None] * x0 + (1 - abar[t]).sqrt()[:, None, None, None] * eps
def loss_fn(model, x0):
    t = torch.randint(0, T, (x0.size(0),), device=x0.device)
    eps = torch.randn_like(x0)
    eps_pred = model(q_sample(x0, t, eps), t)      # U-Net predicts the noise
    return torch.mean((eps - eps_pred) ** 2)
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Implementation | Forward+reverse+time-cond correct | Trains, minor gaps | Broken |
| Sample quality | Recognizable + FID | Noisy but improving | Pure noise |
| Eval | FID + memorization check | FID only | Eyeball only |
| Ablation | Schedule comparison | One run | None |

- **Assessment weight:** 5% of course grade (feeds the 10% W5 midterm).
- **Readings:**
  - Ho, Jain & Abbeel, "Denoising Diffusion Probabilistic Models (DDPM)," *NeurIPS* 2020.
  - Nichol & Dhariwal, "Improved Denoising Diffusion Probabilistic Models," *ICML* 2021.
  - Sohl-Dickstein et al., "Deep Unsupervised Learning using Nonequilibrium Thermodynamics," *ICML* 2015.
  - Heusel et al., "GANs Trained by a Two Time-Scale Update Rule Converge to a Local Nash Equilibrium (FID)," *NeurIPS* 2017.

---

## Week 5 — Diffusion II: Latent Diffusion, Conditioning & Text-to-Image

### State of the Art (June 2026)
- **Rectified-flow latent transformers** (SD3.5, **FLUX.1** — the open-weights leader) replaced classic LDM; closed leaders: **Nano Banana Pro, GPT Image, Midjourney v7**.
- **LoRA / DreamBooth** is still the fine-tune path; eval = **CLIPScore (alignment) + FID/realism** with a CFG sweep.
- Text rendering and instruction-following are the 2026 quality frontier.

**Altitude:** Builder → Engineer · **Anchor case:** fine-tune Stable-Diffusion-style latent diffusion to generate from text prompts. **(Midterm DDPM report due.)**

### Learning goals
- Explain latent diffusion (diffuse in a VAE latent, not pixels) and why it makes high-res tractable.
- Implement classifier-free guidance and text conditioning via cross-attention.
- Fine-tune a pretrained latent-diffusion model (DreamBooth/LoRA) and evaluate text–image alignment.

### Concept map
- **Latent diffusion.** *Plain English:* encode the image to a small latent with a VAE, run diffusion there, decode at the end — 8× smaller spatially, far cheaper. *Where it matters:* makes 512×512 feasible on one GPU. *Common mistake:* fine-tuning the VAE and U-Net together and destabilizing.
- **Cross-attention text conditioning.** *Formula:* U-Net cross-attends to text embeddings (CLIP/T5); `Attn(Q_image, K_text, V_text)`. *Plain English:* the prompt steers denoising. *Common mistake:* unconditioned training then expecting prompt control.
- **Classifier-free guidance (CFG).** *Formula:* `ε̃ = ε_uncond + s·(ε_cond − ε_uncond)`. *Symbols:* `s` guidance scale. *Plain English:* exaggerate the difference between prompted and unprompted predictions to follow the text harder. *Common mistake:* `s` too high → oversaturated, artifacts.
- **CLIPScore vs FID for text-to-image.** Plain English: FID measures realism, CLIPScore measures prompt alignment; you need both.

### Hands-on build (the lab)
- Run `diffusers` Stable-Diffusion inference; sweep the CFG scale and document the quality/alignment trade-off.
- **LoRA / DreamBooth fine-tune** on a small concept set (10–20 images); evaluate with CLIPScore on held-out prompts + a sample grid.
- Submit the **W4 DDPM report** as the midterm.
- **Deliverable:** `builds/latent-diffusion/` + `midterm/ddpm-report.md`. **Acceptance:** fine-tune produces the target concept; CFG sweep documented; CLIPScore reported.

▶ **Practical project:** `VizuaraAILabs/Principles-of-Diffusion-Models` — extend to latent diffusion + CFG and LoRA/DreamBooth fine-tune with a CLIPScore eval.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100; `pip install diffusers transformers peft`; clone the repo; pull SD-2.1/SDXL or FLUX.1.
2. **CFG sweep:** run inference; sweep the classifier-free guidance scale; document the quality/alignment trade-off.
3. **Fine-tune:** LoRA/DreamBooth on a 10–20 image concept set (with prior preservation).
4. **Eval:** CLIPScore on held-out prompts (PartiPrompts) + a sample grid.
5. **Midterm:** submit the W4 DDPM report.
- **Artifact:** `builds/latent-diffusion/t2i-eval.md` + `midterm/ddpm-report.md`.
- **Use `$t2i-eval`:** realism + alignment (CLIPScore + a CFG-scale curve).
- **Done when:** the fine-tune produces the target concept, CFG sweep documented, CLIPScore reported.
- **Stretch:** compare a rectified-flow base (SD3.5/FLUX) on the same prompts.

### Harness / reusable skill — `$t2i-eval`
- **Purpose:** evaluate a text-to-image model on realism *and* alignment.
- **Inputs:** prompts + generations. **Required outputs:** FID-or-realism note, CLIPScore per prompt, a CFG-scale curve, and a failure-prompt set. **Evidence artifact:** `t2i-eval.md`.

### Common failure modes
- **CFG too high/low** → artifacts or weak prompt following. *Fix:* sweep `s`, pick from the trade-off curve.
- **Overfit DreamBooth** → only generates the training images. *Fix:* prior-preservation, fewer steps, LoRA.
- **Alignment ignored** → pretty but off-prompt. *Fix:* CLIPScore, not just FID.
- **VAE artifacts** → blurry decode. *Fix:* keep VAE frozen; check latent stats.

### Evidence artifact
`builds/latent-diffusion/t2i-eval.md` + `midterm/ddpm-report.md` (graded).

### Skill sink-in
Predict the CFG scale that best balances realism and prompt-alignment for your concept. Sweep. Record the chosen `s` and the trade-off you accepted.

### Depth upgrade
- **Dataset:** for fine-tuning, your own 10–20 image concept set; eval prompts from **PartiPrompts** — github.com/google-research/parti (1.6k prompts, Apache-2.0) or **DrawBench**. Base model: **stabilityai/stable-diffusion-2-1** or **stable-diffusion-xl** (HF, CreativeML OpenRAIL / SDXL license).
- **Code stub:**
```python
from diffusers import StableDiffusionPipeline
import torch
pipe = StableDiffusionPipeline.from_pretrained(
    "stabilityai/stable-diffusion-2-1", torch_dtype=torch.float16).to("cuda")
def gen(prompt, scale):                            # classifier-free guidance scale sweep
    return pipe(prompt, guidance_scale=scale, num_inference_steps=30).images[0]
# CLIPScore for alignment:
from torchmetrics.multimodal import CLIPScore
clip = CLIPScore(model_name_or_path="openai/clip-vit-base-patch16")
# clip.update(image_tensor_uint8, [prompt]); clip.compute()
```
- **Graded rubric table (governs midterm report):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| DDPM report | FID+grid+stability writeup | Partial | Missing |
| Fine-tune | Target concept, not overfit | Overfit but works | Fails |
| Alignment eval | CLIPScore + CFG curve | One metric | Eyeball |
| Trade-off reasoning | Justifies CFG choice | States it | None |

- **Assessment weight:** 5% lab + the 10% midterm.
- **Readings:**
  - Rombach et al., "High-Resolution Image Synthesis with Latent Diffusion Models (Stable Diffusion)," *CVPR* 2022.
  - Ho & Salimans, "Classifier-Free Diffusion Guidance," *NeurIPS Workshop* 2021.
  - Ruiz et al., "DreamBooth: Fine Tuning Text-to-Image Diffusion Models for Subject-Driven Generation," *CVPR* 2023.
  - Hessel et al., "CLIPScore: A Reference-free Evaluation Metric for Image Captioning," *EMNLP* 2021.

---

## Week 6 — Flow Matching & Rectified Flow: The Modern Generative Backbone

### State of the Art (June 2026)
- **Flow matching / rectified flow is the modern backbone** (SD3, FLUX, and most video models); **reflow + few-step distillation** give 1–4 step sampling.
- **Consistency models / distilled samplers** (LCM, consistency-FM) push toward real-time generation.
- The ODE-velocity-regression view (vs the diffusion SDE) is now the standard pedagogy.

**Altitude:** Engineer · **Anchor case:** retrain your small generator with a flow-matching objective and compare sample quality and steps against DDPM.

### Learning goals
- Explain flow matching / rectified flow as learning a velocity field that transports noise to data along straight-ish paths.
- Implement a conditional flow-matching loss and an ODE sampler; compare step counts to DDPM/DDIM.
- Situate why 2024–2026 SOTA (SD3, Flux) moved to rectified flow.

### Concept map
- **Continuous-time view.** *Plain English:* instead of discrete noising steps, define a continuous path from noise `x_0~N(0,I)` to data `x_1`; learn the velocity `v_θ(x_t,t)` that moves along it. *Common mistake:* conflating the diffusion SDE with the flow ODE — flow matching trains a simpler regression.
- **Conditional flow matching loss.** *Formula:* `L = E[‖v_θ(x_t,t) − (x_1 − x_0)‖²]` for the linear path `x_t=(1−t)x_0+t x_1`. *Plain English:* predict the straight-line velocity from noise to data. *Common mistake:* wrong time parameterization/path.
- **Rectified flow.** Plain English: straighten the paths so an ODE solver needs few steps (even 1–4) for good samples. Where it matters: fast, high-quality generation (Flux, SD3). Common mistake: expecting straight paths without the reflow procedure.
- **DDIM bridge.** Plain English: deterministic diffusion sampling is itself an ODE; flow matching generalizes and simplifies it.

### Hands-on build (the lab)
- Implement conditional flow matching on the same CIFAR/CelebA setup; sample with a fixed-step ODE solver (Euler/Heun); compare FID at 4 / 10 / 50 steps vs your DDPM and DDIM.
- **Deliverable:** `builds/flow-matching/` with the loss, a steps-vs-FID curve across methods, and a short writeup. **Acceptance:** flow matching matches/beats DDPM at far fewer steps, or the gap is explained.

▶ **Practical project:** `VizuaraAILabs/Principles-of-Diffusion-Models` — retrain with a conditional flow-matching objective and plot FID-vs-NFE against DDPM/DDIM.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch torchvision`; clone the repo; reuse the CIFAR/CelebA setup.
2. **FM loss:** implement conditional flow matching on the linear path (predict the velocity).
3. **Sample:** an Euler/Heun ODE sampler at 4/10/50 steps.
4. **Frontier:** plot FID-vs-NFE for flow matching vs your DDPM and DDIM.
5. **Pick:** recommend an operating point on the quality–compute frontier.
- **Artifact:** `builds/flow-matching/sampler-benchmark.md` + steps-vs-FID curve.
- **Use `$sampler-benchmark`:** FID vs NFE curve + the recommended operating point.
- **Done when:** flow matching matches/beats DDPM at far fewer steps (or the gap is explained).
- **Stretch:** add a reflow / few-step distillation pass and re-plot.

### Harness / reusable skill — `$sampler-benchmark`
- **Purpose:** compare generative samplers on the quality–compute frontier.
- **Inputs:** trained generators + samplers. **Required outputs:** FID (and CLIPScore if conditional) vs NFE (number of function evaluations) curve, and the recommended operating point. **Evidence artifact:** `sampler-benchmark.md`.

### Common failure modes
- **Wrong path/time** → unstable training. *Fix:* use the linear interpolation path, verify endpoints.
- **Too few ODE steps without reflow** → artifacts. *Fix:* reflow or more steps; report the curve.
- **Apples-to-oranges FID** → different sample counts/resolutions. *Fix:* fix protocol across methods.
- **Claiming SOTA from one number** → no frontier. *Fix:* plot quality vs NFE.

### Evidence artifact
`builds/flow-matching/sampler-benchmark.md` + steps-vs-FID curve.

### Skill sink-in
Predict how few steps flow matching needs to match your 50-step DDPM FID. Measure. Record the real step count.

### Depth upgrade
- **Dataset:** CIFAR-10 / CelebA (as W4) for direct comparability.
- **Code stub:**
```python
import torch
def fm_loss(model, x1):                            # x1: data batch
    x0 = torch.randn_like(x1)                      # noise endpoint
    t = torch.rand(x1.size(0), device=x1.device)
    xt = (1 - t)[:, None, None, None] * x0 + t[:, None, None, None] * x1   # linear path
    target = x1 - x0                               # constant velocity along the path
    return ((model(xt, t) - target) ** 2).mean()
@torch.no_grad()
def sample(model, shape, steps=8):                 # Euler ODE integration noise->data
    x = torch.randn(shape, device="cuda"); dt = 1.0 / steps
    for i in range(steps):
        t = torch.full((shape[0],), i * dt, device="cuda")
        x = x + model(x, t) * dt
    return x
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| FM implementation | Correct path + ODE sampler | Trains, minor gaps | Broken |
| Frontier analysis | FID-vs-NFE vs DDPM/DDIM | One comparison | Single number |
| Few-step quality | Strong at ≤10 steps | Needs many | Fails |
| Conceptual clarity | Explains flow vs diffusion | Partial | Confused |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Lipman et al., "Flow Matching for Generative Modeling," *ICLR* 2023.
  - Liu, Gong & Liu, "Rectified Flow: A Marginal Preserving Approach to Optimal Transport," *ICLR* 2023.
  - Esser et al., "Scaling Rectified Flow Transformers for High-Resolution Image Synthesis (SD3)," *ICML* 2024.
  - Song et al., "Denoising Diffusion Implicit Models (DDIM)," *ICLR* 2021.

---

## Week 7 — Video Generation: Spatiotemporal Diffusion & World Consistency

### State of the Art (June 2026)
- 2026 video models: **Sora 2, Veo 3.1, Kling 3.0, Seedance 2.0, Runway Gen-4.5, Wan 2.6** — native 4K, synchronized audio, multi-shot.
- The architecture to teach: **DiT over spatiotemporal latent patches**; eval = **VBench dimensions + FVD + temporal consistency**.
- Controllability (camera/motion, image-to-video) and physical consistency are the open problems.

**Altitude:** Engineer · **Anchor case:** generate short clips and reason about temporal consistency — why video is not "many independent images."

### Learning goals
- Explain how video diffusion adds temporal layers/attention and why naive per-frame generation flickers.
- Run an open text/image-to-video model and evaluate temporal consistency.
- Understand the compute reality (latent video diffusion, frame interpolation, the DiT backbone).

### Concept map
- **Temporal modeling.** *Plain English:* add temporal attention/3D convolutions so frames are coherent; a video is a latent tensor `(T,C,H,W)`. *Common mistake:* generating frames independently → flicker, identity drift.
- **Latent video diffusion + DiT.** Plain English: diffuse in a spatiotemporal latent with a diffusion transformer; this is the Sora/SVD/CogVideoX family. Where it matters: tractability and scaling.
- **Conditioning modes.** Plain English: text-to-video vs image-to-video (animate a still); motion/camera control. Common mistake: expecting long, controllable clips from short-context models.
- **Evaluation.** Plain English: per-frame quality (FVD), temporal consistency, and text alignment (VBench dimensions). Common mistake: a pretty thumbnail hiding a flickering clip.

### Hands-on build (the lab)
- Run an open model (**Stable Video Diffusion / CogVideoX**) for image- and text-to-video on a handful of prompts; measure a temporal-consistency proxy (frame-to-frame CLIP/feature similarity) and inspect flicker.
- **Deliverable:** `builds/video/` with generated clips, a consistency analysis, and a compute/limits note. **Acceptance:** consistency metric reported; ≥2 failure modes (flicker, morphing, physics violation) documented.

▶ **Practical project:** `VizuaraAI/vla-driving-simulation` — generate action-conditioned frames and measure a temporal-consistency proxy + flicker catalog.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab A100/Modal; `pip install diffusers transformers`; clone the repo; pull SVD/CogVideoX.
2. **Generate:** image- and text-to-video on a handful of prompts.
3. **Consistency:** measure a frame-to-frame CLIP/feature-similarity temporal proxy.
4. **Inspect:** catalog ≥2 failure modes (flicker, morphing, physics violation).
5. **Honesty:** document the resolution/length/latency reality.
- **Artifact:** `builds/video/video-eval.md` + clips + failure catalog.
- **Use `$video-consistency-eval`:** temporal coherence, not just single-frame quality.
- **Done when:** the consistency metric is reported and ≥2 failure modes documented.
- **Stretch:** score against VBench dimensions.

### Harness / reusable skill — `$video-consistency-eval`
- **Purpose:** evaluate generated video for temporal coherence, not just single-frame quality.
- **Inputs:** generated clips. **Required outputs:** frame-quality proxy, temporal-consistency score, text alignment, and a flicker/identity-drift catalog. **Evidence artifact:** `video-eval.md`.

### Common failure modes
- **Per-frame thinking** → flicker. *Fix:* temporal layers / use a real video model.
- **Cherry-picked thumbnail** → hides motion failures. *Fix:* watch the whole clip, measure consistency.
- **Ignoring compute** → unrealistic expectations. *Fix:* document the resolution/length/latency reality.
- **Physics violations unflagged** → objects morph. *Fix:* catalog failures explicitly.

### Evidence artifact
`builds/video/video-eval.md` + clips + failure catalog.

### Skill sink-in
Predict the dominant failure mode (flicker vs morphing vs physics) for your model. Generate and inspect. Record what actually broke.

### Depth upgrade
- **Dataset:** prompt set of your design + reference frames; benchmark dimensions from **VBench** — github.com/Vchitect/VBench (Apache-2.0). Model: **stabilityai/stable-video-diffusion-img2vid-xt** or **THUDM/CogVideoX-5b** (HF, respective licenses).
- **Code stub:**
```python
import torch, torch.nn.functional as F
def temporal_consistency(frame_feats):             # frame_feats: (T, D) e.g. CLIP image embeds
    f = F.normalize(frame_feats, dim=-1)
    sims = (f[1:] * f[:-1]).sum(-1)                # cosine sim between consecutive frames
    return sims.mean().item()                      # higher = smoother / more consistent
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Generation | Coherent multi-second clips | Short/flickery | Fails |
| Consistency eval | Temporal metric + alignment | Frame quality only | None |
| Failure analysis | ≥2 modes catalogued | One | None |
| Limits | Compute/length honesty | Partial | Overclaims |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Blattmann et al., "Stable Video Diffusion: Scaling Latent Video Diffusion Models to Large Datasets," 2023.
  - Ho et al., "Video Diffusion Models," *NeurIPS* 2022.
  - Peebles & Xie, "Scalable Diffusion Models with Transformers (DiT)," *ICCV* 2023.
  - Huang et al., "VBench: Comprehensive Benchmark Suite for Video Generative Models," *CVPR* 2024.

---

## Week 8 — Audio & Speech: ASR (Whisper), TTS & Audio Representations

### State of the Art (June 2026)
- **Whisper-v3 / large** remain WER baselines; **neural codecs (EnCodec, DAC, Mimi/Moshi)** tokenize audio for audio-LLMs.
- 2026 TTS/voice: **ElevenLabs Eleven v3, XTTS-v2, Parler, Kokoro**; full-duplex speech models (Moshi-style) are the frontier.
- Robustness slices (accent/noise/code-switch) + identical text normalization on both sides are the eval discipline.

**Altitude:** Builder → Engineer · **Anchor case:** a speech pipeline that transcribes audio (Whisper) and speaks responses (TTS) — the voice layer of a multimodal assistant.

### Learning goals
- Run and evaluate ASR with Whisper; compute Word Error Rate and reason about robustness (accents, noise, code-switching).
- Run modern TTS and evaluate intelligibility/naturalness; understand the mel-spectrogram + vocoder pipeline.
- Explain audio tokenization (neural codecs) enabling audio LLMs.

### Concept map
- **ASR & WER.** *Formula:* `WER=(S+D+I)/N` (substitutions+deletions+insertions over reference words). *Plain English:* edit distance between transcript and truth. *Common mistake:* comparing WER across datasets of different difficulty; normalize text first.
- **Mel-spectrogram pipeline.** Plain English: audio → mel-spectrogram (time-frequency image) → model; TTS goes text → mel → waveform via a vocoder. Common mistake: mismatched sample rates / mel configs.
- **Neural audio codecs.** Plain English: encode audio into discrete tokens (EnCodec/SoundStream) so transformers can model speech/music like text. Where it matters: audio LLMs and any-to-any (Week 9).
- **Robustness slices.** Plain English: WER explodes on accents, noise, domain terms. Where it matters: deployment honesty. Common mistake: reporting clean-speech WER only.

### Hands-on build (the lab)
- Transcribe a **LibriSpeech** subset with Whisper; compute WER overall and on a noisy/accented slice; compare model sizes.
- Run a modern **TTS** (XTTS-v2/Parler/Kokoro) on generated text; do a small MOS-style listening rubric.
- **Deliverable:** `builds/audio/` with WER tables (incl. a hard slice), TTS samples, and a robustness note. **Acceptance:** WER reported with a slice; TTS intelligibility rated.

▶ **Practical project:** `VizuaraAI/audio-llm` — build the Whisper ASR→WER + TTS pipeline and evaluate a noisy/accented slice.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install openai-whisper jiwer torchaudio`; clone the repo; load a LibriSpeech subset + MUSAN noise.
2. **ASR:** transcribe `test-clean`; compute WER with identical normalization on both sides.
3. **Slice:** add noise/accent; compute the WER gap; compare Whisper sizes.
4. **TTS:** run XTTS-v2/Kokoro on generated text; do a small MOS listening rubric.
5. **Report:** WER tables (incl. the hard slice) + TTS samples + a robustness note.
- **Artifact:** `builds/audio/asr-eval.md` + TTS samples + listening rubric.
- **Use `$asr-robustness-eval`:** overall + noise/accent-sliced WER + a normalization note.
- **Done when:** WER reported with a slice and TTS intelligibility rated.
- **Stretch:** add an EnCodec/Mimi audio-token round-trip and inspect quality.

### Harness / reusable skill — `$asr-robustness-eval`
- **Purpose:** evaluate a speech system beyond clean-set WER.
- **Inputs:** an ASR model + audio sets. **Required outputs:** overall WER, noise/accent-sliced WER, and a normalization note. **Evidence artifact:** `asr-eval.md`.

### Common failure modes
- **Clean-only WER** → false confidence. *Fix:* noisy/accented slices.
- **Text-normalization mismatch** → inflated WER. *Fix:* normalize both sides identically.
- **Sample-rate/mel mismatch** → garbage TTS/ASR. *Fix:* assert config (16 kHz etc.).
- **No human check on TTS** → metric-only naturalness. *Fix:* small listening rubric.

### Evidence artifact
`builds/audio/asr-eval.md` + TTS samples + listening rubric.

### Skill sink-in
Predict the WER gap between clean and noisy speech for your Whisper size. Measure both. Record the gap and which errors dominate (D/I/S).

### Depth upgrade
- **Dataset:** LibriSpeech — openslr.org/12 / huggingface.co/datasets/openslr/librispeech_asr (~1000 hrs, ~60 GB full; use `test-clean`/`test-other` ~5 GB, CC BY 4.0). Robustness: add noise from **MUSAN** (openslr.org/17, CC BY 4.0).
- **Code stub:**
```python
import whisper, jiwer
model = whisper.load_model("base")
def transcribe_wer(audio_path, reference):
    hyp = model.transcribe(audio_path)["text"]
    norm = jiwer.Compose([jiwer.ToLowerCase(), jiwer.RemovePunctuation(),
                          jiwer.RemoveMultipleSpaces(), jiwer.Strip()])
    return jiwer.wer(norm(reference), norm(hyp))    # normalize BOTH sides
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| ASR eval | WER + hard slice + normalization | WER only | Wrong norm |
| TTS | Intelligible + rated | Runs | Fails |
| Robustness | Noise/accent quantified | Mentioned | Ignored |
| Codec grasp | Explains audio tokens | Partial | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Radford et al., "Robust Speech Recognition via Large-Scale Weak Supervision (Whisper)," *ICML* 2023.
  - Défossez et al., "High Fidelity Neural Audio Compression (EnCodec)," *TMLR*, 2023.
  - Wang et al., "Neural Codec Language Models are Zero-Shot Text to Speech Synthesizers (VALL-E)," 2023.
  - Panayotov et al., "LibriSpeech: An ASR corpus based on public domain audiobooks," *ICASSP* 2015.

---

## Week 9 — Any-to-Any & Unified Multimodal Models

### State of the Art (June 2026)
- **Natively-multimodal frontier models** (Gemini 3.1 Pro, GPT-5.5, Qwen3-Omni) do any-to-any in one model; **early-fusion (Chameleon-style)** is the architecture lens.
- The 2026 question is **native generalist vs specialist pipeline** orchestrated by an agent SDK / **MCP** tools.
- Interleaved text+image generation and unified token spaces are the standard framing.

**Altitude:** Engineer · **Anchor case:** assemble (and probe) a model/system that takes mixed image+text+audio in and produces mixed outputs — the architecture behind native multimodal frontier models.

### Learning goals
- Explain unified tokenization strategies (discrete tokens vs continuous embeddings, early vs late fusion) for any-to-any models.
- Build an app that routes/combines modalities (image understanding + text reasoning + speech I/O) into one experience.
- Reason about the trade-offs of native any-to-any vs. a pipeline of specialists.

### Concept map
- **Unified token space.** *Plain English:* convert every modality to tokens (image patches, audio codec tokens, text tokens) so one transformer handles all; outputs decoded per modality. *Common mistake:* assuming one tokenizer fits all — quality varies by modality.
- **Early vs late fusion.** Plain English: mix modalities at the input (early, native) vs combine outputs of specialists (late, pipeline). Where it matters: latency, quality, controllability trade-offs. Common mistake: building a brittle pipeline when a native model is simpler (or vice versa).
- **Interleaved generation.** Plain English: produce text and images in one stream (e.g., illustrated answers). Common mistake: ignoring alignment between generated modalities.
- **The specialist-vs-generalist trade-off.** Plain English: native models are flexible but each modality may lag a dedicated specialist; pick per requirement.

### Hands-on build (the lab)
- Build an any-to-any **system** (not necessarily one model): speech-in (Whisper) → VLM reasoning over an image → text + optional image/speech out, orchestrated with the Claude Agent SDK / a router.
- Compare it against a single native multimodal model on the same tasks; document where each wins.
- **Deliverable:** `builds/any2any/` with the system, a head-to-head comparison, and a fusion-strategy note. **Acceptance:** working multimodal round-trip; pipeline-vs-native comparison with a recommendation.

▶ **Practical project:** `Shubhamsaboo/awesome-llm-apps` — assemble a speech→VLM→speech any-to-any pipeline and compare it head-to-head with a native multimodal model.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/Modal; `pip install openai-whisper transformers gradio`; clone the repo; pick a multimodal app.
2. **Pipeline:** speech-in (Whisper) → VLM reasoning over an image → text + optional speech out, via an agent SDK / router.
3. **Native:** compare against a single native model (Qwen2.5-Omni) on the same tasks.
4. **Measure:** per-modality quality, end-to-end latency, failures at modality boundaries.
5. **Recommend:** a native-vs-pipeline write-up.
- **Artifact:** `builds/any2any/any2any-eval.md` + head-to-head comparison.
- **Use `$modality-router-eval`:** routing/fusion quality + latency + a native-vs-pipeline recommendation.
- **Done when:** a working multimodal round-trip + a data-backed recommendation.
- **Stretch:** add interleaved text+image output and check cross-modal alignment.

### Harness / reusable skill — `$modality-router-eval`
- **Purpose:** evaluate a multimodal system's routing/fusion choices.
- **Inputs:** a multimodal system + task set. **Required outputs:** per-modality quality, end-to-end latency, failure cases at modality boundaries, and a native-vs-pipeline recommendation. **Evidence artifact:** `any2any-eval.md`.

### Common failure modes
- **Boundary errors** → information lost between stages. *Fix:* test the seams, not just components.
- **Latency blowup** → too many model hops. *Fix:* measure end-to-end, prune the chain.
- **Native-model dogma** → using a generalist where a specialist is far better. *Fix:* head-to-head per modality.
- **Unaligned interleaved outputs** → text and image disagree. *Fix:* cross-check generated modalities.

### Evidence artifact
`builds/any2any/any2any-eval.md` + head-to-head comparison.

### Skill sink-in
Predict whether the native model or your specialist-pipeline wins on image-grounded VQA. Test both. Record the winner and the cost you paid.

### Depth upgrade
- **Dataset:** a small custom multimodal task set (image+question+spoken query) you assemble; reuse COCO images + recorded prompts. Reference model: **Qwen2.5-Omni** / **AnyGPT**-style checkpoints (HF, respective licenses) for the native comparison.
- **Code stub:**
```python
# pipeline any-to-any: speech -> vision-language -> speech
def multimodal_turn(audio_path, image):
    question = whisper_model.transcribe(audio_path)["text"]   # audio -> text
    answer = vlm_answer(image, question)                      # image+text -> text
    speak(answer)                                             # text -> audio (TTS)
    return {"question": question, "answer": answer}
# native: one model.generate() over [audio_tokens, image_tokens, text_tokens]
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Round-trip | All modalities, robust seams | Works, brittle | Breaks |
| Comparison | Native vs pipeline w/ data | One system | None |
| Latency | Measured end-to-end | Component only | None |
| Recommendation | Justified by requirements | Stated | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Team Chameleon (Meta), "Chameleon: Mixed-Modal Early-Fusion Foundation Models," 2024.
  - Zhan et al., "AnyGPT: Unified Multimodal LLM with Discrete Sequence Modeling," *ACL* 2024.
  - Wu et al., "NExT-GPT: Any-to-Any Multimodal LLM," *ICML* 2024.
  - Xu et al., "Qwen2.5-Omni Technical Report," 2025.

---

## Week 10 — World Models: Learning Simulators (IRIS, Genie-style)

### State of the Art (June 2026)
- 2026 world models: **Genie 3** (real-time playable interactive worlds), **DreamerV3**, **IRIS/tokenized**, and **video-diffusion-as-world-model** (the dominant framing).
- Action-conditioned generation + **compounding-error / rollout-horizon** evaluation is the core discipline; ties to robotics/VLA (S13).
- "Neural game engines" and model-based RL inside learned simulators are the frontier.

**Altitude:** Engineer → Specialist · **Anchor case:** train/run a world model that predicts future frames/observations given actions — a learned simulator an agent can plan or train inside.

### Learning goals
- Explain world models: encode observations to latents, model dynamics over latents conditioned on actions, decode predictions.
- Train a small world model (or run IRIS/DreamerV3-style) in a simple environment and evaluate rollout fidelity.
- Connect world models to model-based RL, video generation, and "neural game engines" (Genie).

### Concept map
- **Latent dynamics.** *Plain English:* learn a compact latent of the world and a transition model `z_{t+1}=f(z_t,a_t)`; predict/imagine futures without the real simulator. *Common mistake:* modeling raw pixels directly (expensive, unstable) instead of latents.
- **Transformer/tokenized world models (IRIS).** Plain English: tokenize observations (discrete autoencoder) and model dynamics autoregressively like a language model over world-tokens. Where it matters: sample-efficient Atari. Common mistake: ignoring compounding error.
- **Action-conditioned generation (Genie).** Plain English: a controllable video model where a learned latent action drives the next frame — a generative, playable world. Common mistake: confusing uncontrolled video gen with an action-conditioned world model.
- **Compounding error / rollout horizon.** Plain English: small per-step errors accumulate; long imagined rollouts drift. Where it matters: planning horizon, evaluation.

### Hands-on build (the lab)
- Run a tokenized world model (IRIS or a DreamerV3 latent model) on an Atari/`gym` environment, or train a small action-conditioned next-frame predictor; measure rollout prediction error vs horizon.
- **Deliverable:** `builds/world-model/` with rollout predictions, an error-vs-horizon curve, and a planning/imagination demo. **Acceptance:** rollouts shown; compounding-error curve plotted; one use (planning or data-augmentation) demonstrated.

▶ **Practical project:** `VizuaraAI/vla-driving-simulation` — train/run an action-conditioned world model and plot rollout error vs horizon.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab GPU; `pip install torch gymnasium ale-py`; clone the repo; collect `(obs, action, next_obs)` trajectories.
2. **Train:** a tokenized/latent action-conditioned next-frame world model (IRIS/DreamerV3-style).
3. **Rollout:** imagine multi-step futures from a start latent.
4. **Error curve:** plot per-step + cumulative prediction error vs horizon; find the drift point.
5. **Use:** demo one use (planning or data augmentation).
- **Artifact:** `builds/world-model/rollout-eval.md` + error-vs-horizon curve + demo.
- **Use `$rollout-eval`:** per-step/cumulative error + a trustworthy-horizon estimate.
- **Done when:** rollouts shown, the compounding-error curve plotted, one use demonstrated.
- **Stretch:** compare a video-diffusion world-model framing.

### Harness / reusable skill — `$rollout-eval`
- **Purpose:** evaluate a world model's predictive fidelity over time.
- **Inputs:** a world model + real trajectories. **Required outputs:** per-step and cumulative prediction error, an error-vs-horizon curve, and a "trustworthy horizon" estimate. **Evidence artifact:** `rollout-eval.md`.

### Common failure modes
- **Pixel-space dynamics** → unstable, costly. *Fix:* latent/token dynamics.
- **Ignoring compounding error** → fantasy long rollouts. *Fix:* error-vs-horizon curve, cap the horizon.
- **No action conditioning** → it's just video gen. *Fix:* condition transitions on actions.
- **Overfit to one trajectory** → no generalization. *Fix:* held-out trajectories/seeds.

### Evidence artifact
`builds/world-model/rollout-eval.md` + error-vs-horizon curve + demo.

### Skill sink-in
Predict how many steps your world model stays accurate before drifting. Roll out and measure. Record the trustworthy horizon.

### Depth upgrade
- **Dataset:** environment rollouts from **Atari 100k** / `gymnasium` (Atari ROMs via `ale-py`, free for research) or **DMControl**; collect your own `(obs, action, next_obs)` trajectories.
- **Code stub:**
```python
import torch
@torch.no_grad()
def imagine(world, z0, actions):                   # latent rollout
    z, preds = z0, []
    for a in actions:
        z = world.dynamics(z, a)                   # z_{t+1} = f(z_t, a_t)
        preds.append(world.decode(z))
    return preds
def horizon_error(world, traj):                    # compounding error vs ground truth
    z = world.encode(traj.obs[0]); errs = []
    for t, a in enumerate(traj.actions):
        z = world.dynamics(z, a)
        errs.append(((world.decode(z) - traj.obs[t+1]) ** 2).mean().item())
    return errs                                    # plot to find drift point
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| World model | Latent dynamics + actions | Runs | Broken |
| Rollout eval | Error-vs-horizon curve | Single-step only | None |
| Use demo | Planning or data-aug shown | Mentioned | None |
| Honesty | States trustworthy horizon | Partial | Overclaims |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Micheli, Alonso & Fleuret, "Transformers are Sample-Efficient World Models (IRIS)," *ICLR* 2023.
  - Hafner et al., "Mastering Diverse Domains through World Models (DreamerV3)," 2023.
  - Bruce et al., "Genie: Generative Interactive Environments," *ICML* 2024.
  - Ha & Schmidhuber, "World Models," *NeurIPS* 2018.

---

## Week 11 — Multimodal RAG & Agents: Grounded, Tool-Using Multimodal Systems

### State of the Art (June 2026)
- **ColPali / ColQwen3 page-image retrieval** (no OCR) + **agentic RAG** (zoom/OCR/search tools via the Claude Agent SDK / MCP) is the 2026 stack.
- Rerankers (**Cohere Rerank 3.5, voyage-multimodal-3**) + grounded answering with **region/page citations**; abstention ("can't see it") is required.
- Multimodal hallucination evals (POPE-style / LLM-judge) gate deployment.

**Altitude:** Engineer · **Anchor case:** a visual document assistant that retrieves over images+text and answers with grounded, hallucination-checked responses — and can call tools (OCR, zoom, search).

### Learning goals
- Build multimodal retrieval (image+text embeddings, ColPali-style document retrieval) and grounded generation.
- Add tool-use/agentic behavior (OCR, crop/zoom, web/DB lookup) via the Claude Agent SDK / MCP.
- Evaluate grounding and hallucination for multimodal answers and add a "can't see it" guardrail.

### Concept map
- **Multimodal retrieval.** *Plain English:* embed images and queries in a shared space (CLIP) or retrieve document *pages as images* (ColPali/late-interaction) to skip lossy OCR. *Common mistake:* OCR-then-text RAG that drops layout/figures.
- **Grounded multimodal generation.** Plain English: the answer must cite the retrieved image region/page; "show me where" is the test. Common mistake: confident answers about un-retrieved content.
- **Agentic tools for vision.** Plain English: let the model zoom, OCR, or search when the image is ambiguous — multi-step instead of one glance. Where it matters: documents, charts, fine print.
- **Multimodal hallucination guardrail.** Plain English: detect and refuse when the requested content isn't in the image/retrieval. Common mistake: no abstention path.

### Hands-on build (the lab)
- Build a multimodal-RAG assistant over a document image set (**DocVQA / InfographicVQA**) with image-page retrieval + grounded answering; add an agentic zoom/OCR tool and an abstention guardrail.
- Evaluate with answer accuracy + a grounding/hallucination check (judge or POPE-style) and report the abstention behavior.
- **Deliverable:** `builds/mm-rag/` with the agent, a grounding eval, and a hallucination/abstention report. **Acceptance:** grounded citations to image regions/pages; hallucination rate measured; abstention works on out-of-document queries.

▶ **Practical project:** `NirDiamant/RAG_Techniques` — build multimodal/agentic RAG with ColPali-style retrieval + a grounding/abstention guardrail.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Colab/Modal; `pip install colpali-engine transformers qdrant-client`; clone the repo; load DocVQA/InfographicVQA.
2. **Retrieve:** ColPali-style page-image retrieval (no OCR) over the document set.
3. **Ground:** grounded answering with region/page citations.
4. **Agentic:** add a zoom/OCR tool + an abstention ("can't see it") guardrail.
5. **Eval:** answer accuracy + a grounding/hallucination check; report abstention on OOD queries.
- **Artifact:** `builds/mm-rag/mm-grounding.md` + abstention report.
- **Use `$mm-grounding-eval`:** grounding rate + hallucination rate + abstention correctness.
- **Done when:** grounded citations to pages, hallucination rate measured, abstention works on OOD.
- **Stretch:** add a reranker (voyage-multimodal-3) and re-measure grounding.

### Harness / reusable skill — `$mm-grounding-eval`
- **Purpose:** verify multimodal answers are grounded in retrieved visual evidence.
- **Inputs:** answers + retrieved images/regions. **Required outputs:** grounding rate, hallucination rate, abstention correctness, and the worst ungrounded case. **Evidence artifact:** `mm-grounding.md`.

### Common failure modes
- **OCR-only RAG** → loses figures/layout. *Fix:* image-page retrieval (ColPali).
- **Ungrounded answers** → invented chart values. *Fix:* region citations + `$mm-grounding-eval`.
- **No abstention** → answers about absent content. *Fix:* "can't see it" guardrail, tested with OOD queries.
- **Single-glance failure** → misses fine print. *Fix:* agentic zoom/OCR tool.

### Evidence artifact
`builds/mm-rag/mm-grounding.md` + abstention report.

### Skill sink-in
Predict your hallucination rate on out-of-document questions before adding the guardrail. Measure with and without. Record the improvement.

### Depth upgrade
- **Dataset:** DocVQA — docvqa.org / huggingface.co/datasets/lmms-lab/DocVQA (50k questions on document images, research license); InfographicVQA (same site). Retrieval model: **vidore/colpali** (HF, Gemma license) or CLIP for image embeddings.
- **Code stub:**
```python
# image-page retrieval + grounded answer + abstention
def mm_rag_answer(query, page_images, retriever, vlm, threshold=0.25):
    scores = retriever.score(query, page_images)         # late-interaction / CLIP sim
    top = max(range(len(scores)), key=lambda i: scores[i])
    if scores[top] < threshold:
        return {"answer": "I can't find that in the document.", "grounded": False}
    ans = vlm.answer(page_images[top], query)
    return {"answer": ans, "page": top, "grounded": True}
```
- **Graded rubric table:**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Retrieval | Image-page/late-interaction | OCR-text RAG | None |
| Grounding | Region/page citations | Answer only | Ungrounded |
| Hallucination | Rate + abstention works | Measured only | Ignored |
| Agentic tools | Zoom/OCR used effectively | Present | None |

- **Assessment weight:** 5% of course grade.
- **Readings:**
  - Faysse et al., "ColPali: Efficient Document Retrieval with Vision Language Models," *ICLR* 2025.
  - Lewis et al., "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks," *NeurIPS* 2020.
  - Mathew et al., "DocVQA: A Dataset for VQA on Document Images," *WACV* 2021.
  - Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," *ICLR* 2023.

---

## Week 12 — Capstone: A Multimodal App + a Small Diffusion Model

### State of the Art (June 2026)
- A coupled deliverable: a **from-scratch DiT / flow-matching generator (FID + memorization check)** + a **VLM assistant with grounding/hallucination eval and abstention**.
- Frontier reference points: **FLUX.1** (open image), **Qwen3-VL** (open VLM), **Gemini 3.1 Pro** (multimodal frontier).
- Every metric is reported against a baseline; an honest failure-mode catalog is the bar.

**Altitude:** Engineer · **Anchor case:** your two coupled artifacts, shipped and honestly evaluated.

### Learning goals
- Integrate generation (your diffusion/flow model) and understanding (your VLM assistant) into one demoed system.
- Report every result against a baseline with the right metric (FID/CLIPScore for generation; accuracy + grounding/hallucination for understanding).
- Defend the design and name the failure modes.

### Concept map (as a build checklist)
- Generation: trained model → sample grid → FID vs baseline → memorization check. Understanding: VLM app → capability slices → grounding/hallucination eval → abstention guardrail. Integration: one demo, one report, traceable claims.

### Hands-on build (the lab)
- Finish **M3** (multimodal-RAG/agent hardening) and **M4** (demo + report) coupling (A) the diffusion model and (B) the assistant.
- Build a single Gradio demo and a report where every number cites an artifact.
- **Deliverable:** `capstone/` with both artifacts, evals, demo, and report. **Acceptance:** the capstone checklist (top of file) is fully satisfied.

▶ **Practical project:** `VizuaraAI/infertutor-arena-capstone` — ship the coupled diffusion-model + served VLM app with honest evals as the capstone.

**Build it — step by step (AI-builder lab):**
1. **Setup:** Modal/Colab; full stack (`diffusers`, `transformers`, `gradio`); clone the capstone repo.
2. **Generation:** finish your from-scratch diffusion/flow model → sample grid → FID vs baseline → memorization check.
3. **Understanding:** the VLM app → capability slices → grounding/hallucination eval → abstention guardrail.
4. **Integrate:** one Gradio demo coupling both; every number cites an artifact.
5. **Report:** sample grids + FID/CLIPScore + capability/grounding tables + a failure catalog.
- **Artifact:** `capstone/` (both artifacts + evals + demo + `report.md`).
- **Use `$multimodal-capstone-packet`:** assemble generation + understanding evidence into one bundle.
- **Done when:** FID with a baseline + a grounding metric + ≥1 failure slice, every claim traceable.
- **Stretch:** serve the VLM on vLLM and report served latency.

### Harness / reusable skill — `$multimodal-capstone-packet`
- **Purpose:** assemble generation + understanding evidence into one reviewable bundle.
- **Inputs:** both artifacts + evals. **Required outputs:** sample grids + FID/CLIPScore, capability + grounding tables, failure catalog, and a demo. **Evidence artifact:** `capstone/report.md`.

### Common failure modes
- **API-demo masquerading as understanding** → no from-scratch evidence. *Fix:* the diffusion model must be trained/substantially fine-tuned by you.
- **Metric without baseline** → unanchored numbers. *Fix:* every metric gets a baseline.
- **Hidden hallucination** → fluent demo, no grounding eval. *Fix:* grounding/hallucination report is mandatory.

### Evidence artifact
`capstone/` (both artifacts + evals + demo + report).

### Skill sink-in
Write down the FID and the grounding rate you *expect* before the final eval. Run it. The gaps are the lesson — record them.

### Depth upgrade
- **Dataset:** CIFAR-10/CelebA (generation) + your chosen VQA/DocVQA slice (understanding).
- **Code stub:**
```python
ACCEPT = {
  "fid_reported": lambda r: r.get("fid") is not None and r.get("fid_baseline") is not None,
  "sample_grid":  lambda r: r.get("sample_grid_path") is not None,
  "grounding":    lambda r: r.get("grounding_rate") is not None,
  "failure_slice":lambda r: len(r.get("failure_slices", [])) >= 1,
}
def capstone_gate(report): return {k: f(report) for k, f in ACCEPT.items()}
```
- **Graded rubric table (part of the 30% capstone):**

| Criterion | Excellent (4) | Adequate (2) | Failing (0) |
|---|---|---|---|
| Generation | From-scratch, FID vs baseline | Fine-tuned only | API call |
| Understanding | Grounded + capability slices | Works, weak eval | Demo only |
| Integration | Coherent single system | Two disjoint demos | Pieces |
| Honesty | Failures + baselines throughout | Partial | Vibes |

- **Assessment weight:** the 30% capstone.
- **Readings:**
  - Bommasani et al., "On the Opportunities and Risks of Foundation Models," 2021 (multimodal sections).
  - Yin et al., "A Survey on Multimodal Large Language Models," 2024.
  - Mitchell et al., "Model Cards for Model Reporting," *FAccT* 2019.
  - Chip Huyen, "AI Engineering," 2025 (evaluation & deployment chapters).

---

## Course-level outcomes

By the end you can: implement a Vision Transformer, a CLIP contrastive loss, a DDPM, and a flow-matching generator **from scratch**; fine-tune and evaluate VLMs while catching object hallucination; build text-to-image, video, audio, any-to-any, world-model, and multimodal-RAG systems; and — most importantly — evaluate generative and multimodal systems *honestly* (FID/CLIPScore with baselines, grounding/hallucination checks, capability slices). You leave with a reusable harness — `$from-scratch-verifier`, `$contrastive-eval`, `$vlm-probe`, `$generative-eval`, `$t2i-eval`, `$sampler-benchmark`, `$video-consistency-eval`, `$asr-robustness-eval`, `$modality-router-eval`, `$rollout-eval`, `$mm-grounding-eval`, `$multimodal-capstone-packet` — plus two shipped artifacts.

## Skills produced (reused program-wide)
`$from-scratch-verifier` · `$contrastive-eval` · `$vlm-probe` · `$generative-eval` · `$t2i-eval` · `$sampler-benchmark` · `$video-consistency-eval` · `$asr-robustness-eval` · `$modality-router-eval` · `$rollout-eval` · `$mm-grounding-eval` · `$multimodal-capstone-packet`

---

## 🛠 Hands-on repositories & build studios (merged June 2026)

**Clone-and-run repos** (verified June 2026; full catalog in [`PROJECTS.md`](PROJECTS.md)):
- `VizuaraAI/Transformers-for-vision-BOOK` — vision-transformer internals from the ground up; the reference for your from-scratch ViT — Lecture 1.
- `VizuaraAILabs/Principles-of-Diffusion-Models` — diffusion from first principles; the DDPM/forward-reverse derivations you implement — Lectures 4–5.
- `VizuaraAI/audio-llm` — an audio-LLM walkthrough (codec tokens → speech modeling) for the ASR/TTS and any-to-any weeks — Lectures 8–9.
- `VizuaraAI/infertutor-arena-capstone` — Modal + vLLM + Qwen-VL served VLM; a worked multimodal serving reference — Lectures 3, 12.
- `VizuaraAI/vla-driving-simulation` — an action-conditioned VLA/world-model build to ground rollout/world-model evaluation — Lecture 10.

**Build studios** (specs in [`PROJECTS.md`](PROJECTS.md)):
- **VLA / world-model reading lab** — robotics-policy / world-model evaluation with a safety analysis — *Lectures 10–11*.
