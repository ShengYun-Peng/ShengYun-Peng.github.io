---
layout: paper
categories: papers
permalink: papers/robust-principles
id: robust-principles
title: "Robust Principles: Architectural Design Principles for Adversarially Robust CNNs"
authors:
  - ShengYun Peng
  - Weilin Xu
  - Cory Cornelius
  - Matthew Hull
  - Kevin Li
  - Rahul Duggal
  - Mansi Phute
  - Duen Horng Chau
  - Jason Martin
venue: BMVC
year: 2023
url: /papers/robust-principles
pdf: https://arxiv.org/abs/2308.16258
poster: /papers/posters/22_robarch.pdf
video: https://www.youtube.com/watch?v=S-N1iuA0hAY
figure: /images/papers/23_robust-principles.png
caption: "We synthesize a suite of generalizable architectural design principles to robustify CNNs, spanning a network’s macro and micro designs: (A) optimal range for depth and width configurations, (B) preferring convolutional over patchify stem stage, and (C) robust residual block design by adopting squeeze and excitation blocks, and non-parametric smooth activation functions. The principles consis- tently and markedly improve AutoAttack accuracy for CIFAR-10, CIFAR-100, and ImageNet over the wide spectrum of AT methods, model parameters, and network design spaces."
feature-title: "Robust Principles: Architectural Design Principles for Adversarially Robust CNNs"
feature-description: <b> ShengYun Peng </b>, Weilin Xu, Cory Cornelius, Matthew Hull, Kevin Li, Rahul Duggal, Mansi Phute, Duen Horng Chau, Jason Martin
image: /images/featured/23_robust-principles.png
featured: true
feature-order: 20230801
award: Best Poster Award
award-link: /papers/award/23_robust-principles.pdf
significance: "#1 on RobustBench CIFAR-10 Learderboard"
significance-link: https://robustbench.github.io/#div_cifar10_Linf_heading
code: https://github.com/poloclub/robust-principles
selected: false
type: conference
doi: 
bibtex: |-

    @article{peng2023robust,
        title={Robust Principles: Architectural Design Principles for Adversarially Robust CNNs},
        author={Peng, ShengYun and Xu, Weilin and Cornelius, Cory and Hull, Matthew and Li, Kevin and Duggal, Rahul and Phute, Mansi and Martin, Jason and Chau, Duen Horng},
        journal={arXiv preprint arXiv:2308.16258},
        year={2023}
    }
---

We aim to unify existing works' diverging opinions on how architectural components affect the adversarial robustness of CNNs. To accomplish our goal, we synthesize a suite of three generalizable robust architectural design principles: (a) optimal range for depth and width configurations, (b) preferring convolutional over patchify stem stage, and (c) robust residual block design through adopting squeeze and excitation blocks and non-parametric smooth activation functions. Through extensive experiments across a wide spectrum of dataset scales, adversarial training methods, model parameters, and network design spaces, our principles consistently and markedly improve AutoAttack accuracy: 1-3 percentage points (pp) on CIFAR-10 and CIFAR-100, and 4-9 pp on ImageNet.