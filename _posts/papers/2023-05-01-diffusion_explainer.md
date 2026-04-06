---
layout: paper
categories: papers
permalink: papers/diffusion-explainer
id: diffusion-explainer
title: "Diffusion Explainer: Visual Explanation for Text-to-image Stable Diffusion"
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
venue: IEEE Visualization Conference (VIS)
year: 2023
url: /papers/diffusion-explainer
pdf: /papers/23_diffusion-explainer.pdf
type: poster
figure: /images/papers/23_diffusion-explainer.gif
caption: "With Diffusion Explainer, users can visually examine how (A) text prompt, e.g., “a cute and adorable bunny... pixar character”, is encoded by (B) the Text Representation Generator into vectors to guide (C) the Image Representation Refiner to iteratively refine the vector representation of the image being generated. (D) The Timestep Controller enables users to review the incremental improvements in image quality and adherence to the prompt over timesteps. (E) The final image representation is upscaled to a high-resolution image. Diffusion Explainer tightly integrates a visual overview of Stable Diffusion’s complex components with detailed explanations of their underlying operations, enabling users to fluidly transition between multiple levels of abstraction through animations and interactive elements."
feature-title: "Diffusion Explainer: Visual Explanation for Text-to-image Stable Diffusion"
feature-description: Seongmin Lee, Benjamin Hoover, Hendrik Strobelt, Zijie J. Wang, <b> ShengYun Peng </b>, Austin Wright, Kevin Li, Haekyu Park, Haoyang Yang, Duen Horng Chau
image: /images/featured/23_diffusion-explainer.png
featured: false
feature-order: 202305
code: https://github.com/poloclub/diffusion-explainer
code-stars: 460
demo: https://poloclub.github.io/diffusion-explainer/
video: https://www.youtube.com/watch?v=Zg4gxdIWDds
selected: false
doi: 
bibtex: |-

  @article{lee2023diffusion,
      title={Diffusion Explainer: Visual Explanation for Text-to-image Stable Diffusion},
      author={Lee, Seongmin and Hoover, Benjamin and Strobelt, Hendrik and Wang, Zijie J and Peng, ShengYun and Wright, Austin and Li, Kevin and Park, Haekyu and Yang, Haoyang and Chau, Duen Horng},
      journal={arXiv preprint arXiv:2305.03509},
      year={2023}
  }

---

Diffusion-based generative models’ impressive ability to create convincing images has captured global attention. However, their complex internal structures and operations often make them difficult for non-experts to understand. We present Diffusion Explainer, the first interactive visualization tool that explains how Stable Diffusion transforms text prompts into images. Diffusion Explainer tightly integrates a visual overview of Stable Diffusion’s complex components with detailed explanations of their underlying operations, enabling users to fluidly transition between multiple levels of abstraction through animations and interactive elements. By comparing the evolutions of image representations guided by two related text prompts over refinement timesteps, users can discover the impact of prompts on image generation. Diffusion Explainer runs locally in users’ web browsers without the need for installation or specialized hardware, broadening the public’s education access to modern AI techniques.