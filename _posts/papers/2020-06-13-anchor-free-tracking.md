---
layout: paper
categories: papers
permalink: papers/anchor-free-tracking
id: anchor-free-tracking
title: "Accurate Anchor Free Tracking"
authors:
  - ShengYun Peng
  - Yunxuan Yu
  - Kun Wang
  - Lei He
venue: arXiv preprint
year: 2020
type: misc
featured: false
selected: false
pdf: https://arxiv.org/abs/2006.07560
figure: /images/papers/20_anchor-free-tracking.png
caption: "Figure 1. AFSN and SiamRPN tracking comparisons under similar-object interference, illumination changes, and unusual object aspect ratios."
bibtex: |-
  @article{peng2020accurate,
    title={Accurate Anchor Free Tracking},
    author={Peng, Shengyun and Yu, Yunxuan and Wang, Kun and He, Lei},
    journal={arXiv preprint arXiv:2006.07560},
    year={2020}
  }
---
Visual object tracking is an important application of computer vision. Recently, Siamese based trackers have achieved a good accuracy. However, most of Siamese based trackers are not efficient, as they exhaustively search potential object locations to define anchors and then classify each anchor (*i.e.*, a bounding box). This paper develops the first Anchor Free Siamese Network (AFSN). Specifically, a target object is defined by a bounding box center, tracking offset and object size. All three are regressed by Siamese network with no additional classification or regional proposal, and performed once for each frame. We also tune the stride and receptive field for Siamese network, and further perform ablation experiments to quantitatively illustrate the effectiveness of our AFSN. We evaluate AFSN using five most commonly used benchmarks and compare to the best anchor-based trackers with source codes available for each benchmark. AFSN is 3×–425× faster than these best anchor based trackers. AFSN is also 5.97% to 12.4% more accurate in terms of all metrics for benchmark sets OTB2015, VOT2015, VOT2016, VOT2018 and TrackingNet, except that SiamRPN++ is 4% better than AFSN in terms of Expected Average Overlap (EAO) on VOT2018 (but SiamRPN++ is 3.9× slower).
