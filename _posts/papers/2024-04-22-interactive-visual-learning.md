---
layout: paper
categories: papers
permalink: papers/interactive-visual-learning
id: interactive-visual-learning
featured: false
selected: false
title: "Interactive Visual Learning for Stable Diffusion"
authors:
  - Seongmin Lee
  - Benjamin Hoover
  - Hendrik Strobelt
  - Zijie J. Wang
  - ShengYun Peng
  - Austin Wright
  - Kevin Li
  - Haekyu Park
  - Haoyang Yang
  - Duen Horng Chau
venue: IJCAI Demo
year: 2024
type: demo
doi: 10.24963/ijcai.2024/1017
figure: /images/papers/24_interactive-visual-learning.png
caption: "Figure 1. Diffusion Explainer connects the text prompt, text representation generator, image representation refiner, timestep controller, and final image in an interactive overview of Stable Diffusion."
pdf: https://arxiv.org/abs/2404.16069
code: https://github.com/poloclub/diffusion-explainer
demo: https://poloclub.github.io/diffusion-explainer/
video: https://youtu.be/MbkIADZjPnA
bibtex: |-
  @inproceedings{lee2024interactive,
    title={Interactive Visual Learning for Stable Diffusion},
    author={Lee, Seongmin and Hoover, Benjamin and Strobelt, Hendrik and Wang, Zijie J. and Peng, ShengYun and Wright, Austin and Li, Kevin and Park, Haekyu and Yang, Haoyang and Chau, Duen Horng},
    booktitle={Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence},
    pages={8721--8724},
    doi={10.24963/ijcai.2024/1017},
    year={2024}
  }
---
Diffusion-based generative models' impressive ability to create convincing images has garnered global attention. However, their complex internal structures and operations often pose challenges for non-experts to grasp. We introduce Diffusion Explainer, the first interactive visualization tool designed to elucidate how Stable Diffusion transforms text prompts into images. It tightly integrates a visual overview of Stable Diffusion’s complex components with detailed explanations of their underlying operations. This integration enables users to fluidly transition between multiple levels of abstraction through animations and interactive elements. Offering real-time hands-on experience, Diffusion Explainer allows users to adjust Stable Diffusion's hyperparameters and prompts without the need for installation or specialized hardware. Accessible via users' web browsers, Diffusion Explainer is making significant strides in democratizing AI education, fostering broader public access. More than 7,200 users spanning 113 countries have used our open-sourced tool at [https://poloclub.github.io/diffusion-explainer/](https://poloclub.github.io/diffusion-explainer/). A video demo is available at [https://youtu.be/MbkIADZjPnA](https://youtu.be/MbkIADZjPnA).
