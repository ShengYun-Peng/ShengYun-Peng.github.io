---
layout: paper
categories: papers
permalink: papers/lrm-safety
id: lrm-safety
title: "Large Reasoning Models Learn Better Alignment from Flawed Thinking"
authors:
  - ShengYun Peng
  - Eric Smith
  - Ivan Evtimov
  - Song Jiang
  - Pin-Yu Chen
  - Hongyuan Zhan
  - Haozhu Wang
  - Duen Horng Chau
  - Mahesh Pasupuleti
  - Jianfeng Chi
venue: In submission
year: 2025
url: lrm-safety
pdf: 
figure: /images/papers/25_lrm-safety.png
caption: "RECAP trains LRMs on a mixture of counter-aligned prefilled and standard prompts. Harmful prompts are prefilled with unsafe reasoning, and benign prompts with refusal reasoning, forcing the model to override flawed trajectories to achieve high rewards. This simple recipe teaches models to internalize safety values and remain robust under both clean and adversarial reasoning traces, with no extra cost beyond standard RLHF."
feature-title: "Large Reasoning Models Learn Better Alignment from Flawed Thinking"
feature-description: <b> ShengYun Peng </b>, Eric Smith, Ivan Evtimov, Song Jiang, Pin-Yu Chen, Hongyuan Zhan, Haozhu Wang, Duen Horng Chau, Mahesh Pasupuleti, Jianfeng Chi
image: /images/featured/25_lrm-safety.png
featured: true
feature-order: 20250926
coming-soon: true
award: 
award-link: 
code:
selected: true
type: conference
bibtex: |-

    @article{peng2025large,
      title={Large Reasoning Models Learn Better Alignment from Flawed Thinking},
      author={Peng, ShengYun and Chen, Pin-Yu and Hull, Matthew and Chau, Duen Horng},
      journal={arXiv preprint arXiv:2405.17374},
      year={2024}
    }
---

Large reasoning models (LRMs) "think" by generating structured chain-of-thought (CoT) before producing a final answer, yet they still lack the ability to reason critically about safety alignment and are easily biased when a flawed premise is injected into their thought process. We propose RECAP (Robust Safety Alignment via Counter-Aligned Prefilling), a principled reinforcement learning (RL) method for post-training that explicitly teaches models to override flawed reasoning trajectories and reroute to safe and helpful responses. RECAP trains on a mixture of synthetically generated counter-aligned CoT prefills and standard prompts, requires no additional training cost or modifications beyond vanilla reinforcement learning from human feedback (RLHF), and substantially improves safety and jailbreak robustness, reduces overrefusal, and preserves core reasoning capability — all while maintaining inference token budget. Extensive analysis shows that RECAP-trained models engage in self-reflection more frequently and remain robust under adaptive attacks, preserving safety even after repeated attempts to override their reasoning.