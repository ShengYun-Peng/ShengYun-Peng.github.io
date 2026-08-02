---
layout: paper
categories: papers
permalink: papers/Anti-Occlusion
id: Anti-Occlusion

# cover
feature-title: "Anti-occlusion object tracking based on correlation filter"
feature-description: Jun Liu, Gang Xiao, Xingchen Zhang, Ping Ye, Xingzhong Xiong, <b> ShengYun Peng </b>
image: /images/featured/19_anti-occlusion.png
featured: false
feature-order: 201911
venue: Signal, Image and Video Processing
year: 2019

# content
title: "Anti-occlusion object tracking based on correlation filter"
authors:
  - Jun Liu
  - Gang Xiao
  - Xingchen Zhang
  - Ping Ye
  - Xingzhong Xiong
  - ShengYun Peng
pdf: /papers/19_Anti-Occlusion.pdf
figure: /images/papers/19_Anti-Occlusion.png
selected: false
type: journal
doi: "10.1007/s11760-019-01601-6"
bibtex: |-

  @article{liu2019anti,
    title={Anti-occlusion object tracking based on correlation filter},
    author={Liu, Jun and Xiao, Gang and Zhang, Xingchen and Ye, Ping and Xiong, Xingzhong and Peng, Shengyun},
    journal={Signal, Image and Video Processing},
    year={2019},
    volume={14},
    pages={753-761},
    doi={10.1007/s11760-019-01601-6}
  }
---
Despite remarkable progress, visual object tracking is still a challenging task as objects usually suffer from significant
appearance changes, fast motion, and serious occlusion. In this paper, we propose an anti-occlusion correlation filter-based
tracking method (AO-CF) for robust visual tracking. We first propose an occlusion criterion based on continuous response
values. Based on the criterion, objects are divided into four categories to adaptively identify the occlusion of objects. Then
we propose a new detection condition for detecting proposals. When the occlusion criterion is triggered, the re-detection
mechanism is executed and the tracker is commanded to stop, and then the re-detector selects the most reliable proposal to
reinitialize the tracker. Experimental results show that our method outperforms other state-of-the-art trackers in terms of both
precision rate and success rate on the widely used object tracking benchmark dataset. In addition, AO-CF is able to achieve
real-time tracking speed.