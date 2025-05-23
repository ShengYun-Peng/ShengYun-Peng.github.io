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
venue: In Submission
year: 2025
url: llm-safety-shaping
pdf: 
figure: /images/papers/25_safety-shaping.png
caption: "<b>Dynamic safety signals reveal evolving risks within each training sample, motivating finer-grained mitigation of LLM finetuning risks.</b> In the finetuning-as-a-service setting, where users upload data and providers return finetuned LLMs, the safety context within a single training example can shift across tokens, mixing safe and unsafe content. Treating such examples as atomic and updating on the entire sequence is suboptimal. We propose the STAR score, a token-level safety signal computed using a guardrail model, that tracks evolving risk across each response, and introduce ★DSS, which uses it to suppress unsafe patterns while preserving model capability. The STAR score shown in the figure is computed using Llama Guard-3-8B."
feature-title: "Shape it Up! Restoring LLM Safety during Finetuning"
feature-description: <b> ShengYun Peng </b>, Pin-Yu Chen, Jianfeng Chi, Seongmin Lee, Duen Horng Chau
image: /images/featured/25_safety-shaping.png
featured: true
feature-order: 20250522
coming-soon: true
award: 
award-link: 
code:
selected: true
type: conference
bibtex: |-

    @article{peng2024navigating,
      title={Navigating the Safety Landscape: Measuring Risks in Finetuning Large Language Models},
      author={Peng, ShengYun and Chen, Pin-Yu and Hull, Matthew and Chau, Duen Horng},
      journal={arXiv preprint arXiv:2405.17374},
      year={2024}
    }
---

Safety alignment is the key to guide the behaviors of large language models ( LLMs) are in line with human preferences and restrict harmful behaviors at inference time, but recent studies show that it can be easily compromised by finetuning with only a few adversarially designed training examples. We aim to measure the risks in finetuning LLMs through navigating the LLM safety landscape. We discover a new phenomenon observed universally in the model parameter space of popular open-source LLMs, termed as “safety basin”: randomly perturbing model weights maintains the safety level of the original aligned model in its local neighborhood. Our discovery inspires us to propose the new VISAGE safety metric that measures the safety in LLM finetuning by probing its safety landscape. Visualizing the safety landscape of the aligned model enables us to understand how finetuning compromises safety by dragging the model away from the safety basin. LLM safety landscape also highlights the system prompt’s critical role in protecting a model, and that such protection transfers to its perturbed variants within the safety basin. These observations from our safety landscape research provide new insights for future work on LLM safety community.