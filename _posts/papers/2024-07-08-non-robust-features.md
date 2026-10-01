---
layout: paper
categories: papers
permalink: papers/non-robust-features
id: non-robust-features
title: "Non-Robust Features are Not Always Useful in One-Class Classification"
authors:
  - Matthew Lau
  - Haoran Wang
  - Alec Helbling
  - Matthew Hull
  - ShengYun Peng
  - Martin Andreoni
  - Willian Lunardi
  - Wenke Lee
venue: arXiv preprint
year: 2024
type: misc
featured: false
selected: false
pdf: https://arxiv.org/abs/2407.06372
figure: /images/papers/24_non-robust-features.png
caption: "Figure 1. Framework for evaluating the usefulness of non-robust features, such as texture, in one-class classification, adapted from Ilyas et al. (2019)."
bibtex: |-
  @article{lau2024nonrobust,
    title={Non-Robust Features are Not Always Useful in One-Class Classification},
    author={Lau, Matthew and Wang, Haoran and Helbling, Alec and Hull, Matthew and Peng, ShengYun and Andreoni, Martin and Lunardi, Willian T. and Lee, Wenke},
    journal={arXiv preprint arXiv:2407.06372},
    year={2024}
  }
---
The robustness of machine learning models has been questioned by the existence of adversarial examples. We examine the threat of adversarial examples in practical applications that require lightweight models for one-class classification. Building on Ilyas et al. (2019), we investigate the vulnerability of lightweight one-class classifiers to adversarial attacks and possible reasons for it. Our results show that lightweight one-class classifiers learn features that are not robust (e.g. texture) under stronger attacks. However, unlike in multi-class classification (Ilyas et al., 2019), these non-robust features are not always useful for the one-class task, suggesting that learning these unpredictive and non-robust features is an unwanted consequence of training.
