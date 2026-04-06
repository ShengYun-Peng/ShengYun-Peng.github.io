---
layout: paper
categories: papers
permalink: papers/llm-safety-shaping
id: llm-safety-shaping
title: "Shape it Up! Restoring LLM Safety during Finetuning"
authors:
  - ShengYun Peng
  - Pin-Yu Chen
  - Jianfeng Chi
  - Seongmin Lee
  - Duen Horng Chau
venue: NeurIPS
year: 2025
url: llm-safety-shaping
pdf: https://arxiv.org/abs/2505.17196
figure: /images/papers/25_safety-shaping.png
caption: "<b>Dynamic safety signals reveal evolving risks within each training sample, motivating finer-grained mitigation of LLM finetuning risks.</b> In the finetuning-as-a-service setting, where users upload data and providers return finetuned LLMs, the safety context within a single training example can shift across tokens, mixing safe and unsafe content. Treating such examples as atomic and updating on the entire sequence is suboptimal. We propose the STAR score, a token-level safety signal computed using a guardrail model, that tracks evolving risk across each response, and introduce ★DSS, which uses it to suppress unsafe patterns while preserving model capability. The STAR score shown in the figure is computed using Llama Guard-3-8B."
feature-title: "Shape it Up! Restoring LLM Safety during Finetuning"
feature-description: <b> ShengYun Peng </b>, Pin-Yu Chen, Jianfeng Chi, Seongmin Lee, Duen Horng Chau
image: /images/featured/25_safety-shaping.png
featured: true
feature-order: 20250522
coming-soon: false
award: 
award-link: 
code: https://github.com/poloclub/star-dss
selected: true
type: conference
bibtex: |-

    @article{peng2025shape,
      title={Shape it Up! Restoring LLM Safety during Finetuning},
      author={Peng, ShengYun and Chen, Pin-Yu and Chi, Jianfeng and Lee, Seongmin and Chau, Duen Horng},
      journal={arXiv preprint arXiv:2505.17196},
      year={2025}
    }
---

Finetuning large language models (LLMs) enables user-specific customization but introduces critical safety risks: even a few harmful examples can compromise safety alignment. A common mitigation strategy is to update the model more strongly on examples deemed safe, while downweighting or excluding those flagged as unsafe. However, because safety context can shift within a single example, updating the model equally on both harmful and harmless parts of a response is suboptimal—a coarse treatment we term static safety shaping. In contrast, we propose dynamic safety shaping (DSS), a framework that uses fine-grained safety signals to reinforce learning from safe segments of a response while suppressing unsafe content. To enable such fine-grained control during finetuning, we introduce a key insight: guardrail models, traditionally used for filtering, can be repurposed to evaluate partial responses, tracking how safety risk evolves throughout the response, segment by segment. This leads to the Safety Trajectory Assessment of Response (STAR), a token-level signal that enables shaping to operate dynamically over the training sequence. Building on this, we present ★DSS, guided by STAR scores, that robustly mitigates finetuning risks and delivers substantial safety improvements across diverse threats, datasets, and model families—all without compromising capability on intended tasks. We encourage future safety research to build on dynamic shaping principles for stronger mitigation against evolving finetuning risks.

