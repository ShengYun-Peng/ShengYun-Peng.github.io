---
layout: paper
categories: papers
permalink: papers/tsr-convstem
id: tsr-convstem
title: "High-Performance Transformers for Table Structure Recognition Need Early Convolutions"
authors:
  - ShengYun Peng
  - Seongmin Lee
  - Xiaojing Wang
  - Raji Balasubramaniyan
  - Duen Horng Chau
venue: NeurIPS TRL Workshop
year: 2023
url: tsr-convstem
pdf: https://openreview.net/pdf?id=gs6yfSvwue
figure: /images/papers/23_tsr-convstem.png
caption: "Using convolutional stem (ConvStem in a visual encoder for table structure recognition (TSR) achieves performance comparable to that of a CNN backbone while significantly reducing model complexity. The CNN backbone is performant with large RF but exhibits high model complexity. Linear projection is the simplest but suffers in terms of performance due to limited RF and sequence length. In contrast, ConvStem strikes an optimal balance between two crucial factors for high-performance TSR: a higher receptive field (RF) ratio and a longer sequence length. We illustrate each visual encoder option’s RF (zoomed in) and compute its RF ratio. Using the image features extracted from the visual encoder, a textual decoder then generates tokens representing the table."
feature-title: "High-Performance Transformers for Table Structure Recognition Need Early Convolutions"
feature-description: <b> ShengYun Peng </b>, Seongmin Lee, Xiaojing Wang, Raji Balasubramaniyan, Duen Horng Chau
image: /images/featured/23_tsr-convstem.png
featured: true
feature-order: 20230930
coming-soon: false
award: Oral
award-link: https://table-representation-learning.github.io/#accepted-papers
code: https://github.com/poloclub/tsr-convstem
selected: false
type: workshop
bibtex: |-

    @article{peng2023high,
        title={High-Performance Transformers for Table Structure Recognition Need Early Convolutions},
        author={ShengYun Peng, Seongmin Lee, Xiaojing Wang, Raji Balasubramaniyan, Duen Horng Chau},
        year={2023}
    }
---

Table structure recognition (TSR) aims to convert tabular images into a machine-readable format, where a visual encoder extracts image features and a textual decoder generates table-representing tokens. Existing approaches use classic convolutional neural network (CNN) backbones for the visual encoder and transformers for the textual decoder. However, this hybrid CNN-Transformer architecture introduces a complex visual encoder that accounts for nearly half of the total model parameters, markedly reduces both training and inference speed, and hinders the potential for self-supervised learning in TSR. In this work, we design a lightweight visual encoder for TSR without sacrificing expressive power. We discover that a convolutional stem can match classic CNN backbone performance, with a much simpler model. The convolutional stem strikes an optimal balance between two crucial factors for high-performance TSR: a higher receptive field (RF) ratio and a longer sequence length. This allows it to "see" an appropriate portion of the table and "store" the complex table structure within sufficient context length for the subsequent transformer. We conducted reproducible ablation studies and open-sourced our code to enhance transparency, inspire innovations, and facilitate fair comparisons in our domain as tables are a promising modality for representation learning.