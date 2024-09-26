---
layout: paper
categories: papers
permalink: papers/skelevision
id: skelevision
title: "SkeleVision: Towards Adversarial Resiliency of Person Tracking with Multi-Task Learning"
authors:
  - Nilaksh Das
  - ShengYun Peng
  - Duen Horng Chau
venue: ECCV AROW Workshop
year: 2022
url: /papers/skelevision
pdf: https://arxiv.org/abs/2204.00734
figure: /images/papers/22_skelevision.png
caption: "Example video frames and the corresponding adversarial IoU charts for the video from the OTB2015-Person dataset showing the constructed static adversarial patches for single-task learning (STL) (red) and multi-task learning (MTL) (orange) for an attack with &delta; = 0.1 and 10 steps. The dashed blue box shows the ground-truth target. The attack misleads the STL tracker early, but struggles to mislead the MTL tracker until much later. The unperturbed gray regions in the patch are locations which are never predicted by the tracker. Since SiamRPN is a short-term tracker, the tracker cannot be restored once it loses the target"
feature-title: "SkeleVision: Towards Adversarial Resiliency of Person Tracking with Multi-Task Learning"
feature-description: Nilaksh Das, <b> ShengYun Peng </b>, Duen Horng Chau
image: /images/featured/22-skelevision.png
featured: true
feature-order: 202208
selected: false
type: workshop
code: https://github.com/nilakshdas/SkeleVision
bibtex: |-

  @inproceedings{das2022skelevision,
      title={Skelevision: Towards adversarial resiliency of person tracking with multi-task learning},
      author={Das, Nilaksh and Peng, ShengYun and Chau, Duen Horng},
      booktitle={European Conference on Computer Vision},
      pages={449--466},
      year={2022},
      organization={Springer}
  }
---

Person tracking using computer vision techniques has wide
ranging applications such as autonomous driving, home security and
sports analytics. However, the growing threat of adversarial attacks raises
serious concerns regarding the security and reliability of such techniques.
In this work, we study the impact of multi-task learning (MTL) on
the adversarial robustness of the widely used SiamRPN tracker, in the
context of person tracking. Specifically, we investigate the effect of jointly
learning with semantically analogous tasks of person tracking and human
keypoint detection. We conduct extensive experiments with more powerful
adversarial attacks that can be physically realizable, demonstrating the
practical value of our approach. Our empirical study with simulated as
well as real-world datasets reveals that training with MTL consistently
makes it harder to attack the SiamRPN tracker, compared to typically
training only on the single task of person tracking.
