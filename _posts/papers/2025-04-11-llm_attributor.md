---
layout: paper
categories: papers
permalink: papers/llm-attributor
id: llm-attributor
title: "LLM Attributor: Interactive Visual Attribution for LLM Generation"
authors:
  - Seongmin Lee
  - Zijie J. Wang
  - Aishwarya Chakravarthy
  - Alec Helbling
  - ShengYun Peng
  - Mansi Phute
  - Duen Horng Polo Chau
  - Minsuk Kahng
venue: AAAI Demo
year: 2025
url: /papers/llm-attributor
pdf: https://ojs.aaai.org/index.php/AAAI/article/view/35357
type: demo
figure: /images/papers/25_llm-attributor.png
caption: "LLM ATTRIBUTOR enables LLM developers to visualize the training data attribution of their models in computational notebooks. In this example, our user Megan is surprised that an LLM fine-tuned on a disaster dataset occasionally generates dry weather as the cause of the 2023 Hawaii wildfires, while often yielding directed-energy weapons as in a conspiracy theory. (A) Tokens being attributed, which are interactively selected by Megan, are displayed side-by-side for visual comparison. (B) Training data points with the highest attribution scores are presented as a list by default, and can be interactively expanded to the full source text, revealing that the data point most responsible for generating directed-energy weapons is an X post that spreads the conspiracy theory. (C) Keyword Summary shows important words in the displayed training data. (D) Score Distribution over the entire training data is visualized as a histogram, enabling both high-level comparison over the entire data and low-level analysis focusing on individual data points. Below, the training data points with the lowest attribution scores are visualized in the same way."
feature-title: 
feature-description: 
image: 
featured: false
feature-order: 20250411
code: https://github.com/poloclub/LLM-Attributor
code-stars: 78
video: https://www.youtube.com/watch?v=mIG2MDQKQxM
selected: false
doi: 
bibtex: |-

  @inproceedings{lee2025llm,
    title={Llm attributor: Interactive visual attribution for llm generation},
    author={Lee, Seongmin and Wang, Zijie J and Chakravarthy, Aishwarya and Helbling, Alec and Peng, ShengYun and Phute, Mansi and Chau, Duen Horng Polo and Kahng, Minsuk},
    booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
    volume={39},
    number={28},
    pages={29655--29657},
    year={2025}
  }
---

While large language models (LLMs) have shown remarkable capability to generate convincing text across diverse domains, concerns around its potential risks have highlighted the importance of understanding the rationale behind text generation. We present LLM ATTRIBUTOR, a Python library that provides interactive visualizations for training data attribution of an LLM’s text generation. Our library offers a new way to quickly attribute an LLM’s text generation to training data points to inspect model behaviors, enhance its trustworthiness, and compare model-generated text with user-provided text. We describe the visual and interactive design of our tool and high- light usage scenarios for LLaMA2 models finetuned with two different datasets: online articles about recent disasters and finance-related question-answer pairs. Thanks to LLM ATTRIBUTOR’s broad support for computational notebooks, users can easily integrate it into their workflow to interactively visualize attributions of their models. 