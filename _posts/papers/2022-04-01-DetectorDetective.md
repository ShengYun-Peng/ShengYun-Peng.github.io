---
layout: paper
categories: papers
permalink: papers/detector-detective
id: detector-detective

# cover
feature-title: "DetectorDetective: Investigating the Effects of Adversarial Examples on Object Detectors"
feature-description: "Interactive visualization tool for adversarial object detectors"
image: /images/featured/22_cvpr_detectordetective.png
featured: false
feature-order: 202204
venue: CVPR Demo
year: 2022

# content
title: "DetectorDetective: Investigating the Effects of Adversarial Examples on Object Detectors"
authors:
  - Sivapriya Vellaichamy
  - Matthew Hull
  - Zijie J. Wang
  - Nilaksh Das
  - ShengYun Peng
  - Haekyu Park
  - Duen Horng Chau
pdf: /papers/22_cvpr_detectordetective.pdf
figure: /images/papers/22_cvpr_detectordetective.png
selected: false
type: demo
doi: 
bibtex: |-

  @inproceedings{vellaichamy2022detectordetective,
    title={DetectorDetective: Investigating the Effects of Adversarial Examples on Object Detectors},
    author={Vellaichamy, Sivapriya and Hull, Matthew and Wang, Zijie J and Das, Nilaksh and Peng, ShengYun and Park, Haekyu and Chau, Duen Horng Polo},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={21484--21491},
    year={2022}
  }
---
With deep learning based systems performing exceedingly well in many vision-related tasks, a major concern with their widespread deployment especially in safety-critical applications is their susceptibility to adversarial attacks. We propose DetectorDetective, an interactive visual tool that aims to help users better understand the behaviors of a model as adversarial images journey through an object detector. DetectorDetective enables users to easily learn about how the three key modules of the Faster R-CNN object detector -- Feature Pyramidal Network, Region Proposal Network, and Region Of Interest Head--respond to a user-selected benign image and its adversarial version. Visualizations about the progressive changes in the intermediate features among such modules help users gain insights into the impact of adversarial attacks, and perform side-by-side comparisons between the benign and adversarial responses. Furthermore, DetectorDetective displays saliency maps for the input images to comparatively highlight image regions that contribute to attack success. DetectorDetective complements adversarial machine learning research on object detection by providing a user-friendly interactive tool for inspecting and understanding model responses. DetectorDetective is available at the following public demo link: <a href="https://poloclub.github.io/detector-detective">https://poloclub.github.io/detector-detective</a>. A video demo is available at <a href="https://youtu.be/5C3Klh87CZI">https://youtu.be/5C3Klh87CZI</a>.