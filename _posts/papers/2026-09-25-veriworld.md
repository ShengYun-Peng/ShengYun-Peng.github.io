---
layout: paper
categories: papers
permalink: papers/veriworld
id: veriworld

# cover
feature-title: "VeriWorld: A Verifiable Visual SWE-Bench for Spatial Reasoning in 3D Environments"
feature-description: Yan Zheng, <b> ShengYun Peng </b>, Xuyao Liang, Xiaoyan Cong, Nuo Chen, Bangya Liu, Zihan Wang, Wenyan Cong, Zhiwen Fan, Zhangyang Wang
image: /images/featured/26_veriworld.png
featured: true
feature-order: 20260925
coming-soon: true
venue: NeurIPS Evaluations & Datasets Track
year: 2026
award: 
award-link: 
code: 

# content
title: "VeriWorld: A Verifiable Visual SWE-Bench for Spatial Reasoning in 3D Environments"
authors:
  - Yan Zheng
  - ShengYun Peng
  - Xuyao Liang
  - Xiaoyan Cong
  - Nuo Chen
  - Bangya Liu
  - Zihan Wang
  - Wenyan Cong
  - Zhiwen Fan
  - Zhangyang Wang
figure: /images/papers/26_veriworld.png
caption: "VeriWorld evaluation pipeline. Each task is defined by a Lean 4 specification (a correctness predicate and a solvability proof) and a Python instance generator that mirrors the same logic, mapping a random seed to instance parameters. These parameters drive scene setup in Unreal Engine 5, which provides causal grounding through physics and rendering, plus a game-runtime bridge for in-process code execution. A VLM agent then interacts in a closed step loop: each call receives a screenshot and action log, emits thoughts, actions, and updated knowledge, and executes the actions in UE5; the new screenshot and log feed back as input for up to T rounds."
selected: false
type: conference
doi: 
bibtex: |-

    @inproceedings{zheng2026veriworld,
      title={VeriWorld: A Verifiable Visual SWE-Bench for Spatial Reasoning in 3D Environments},
      author={Zheng, Yan and Peng, ShengYun and Liang, Xuyao and Cong, Xiaoyan and Chen, Nuo and Liu, Bangya and Wang, Zihan and Cong, Wenyan and Fan, Zhiwen and Wang, Zhangyang},
      booktitle={Advances in Neural Information Processing Systems (NeurIPS) Evaluations and Datasets Track},
      year={2026}
    }
---
Vision-language models (VLMs) are increasingly used for spatial tasks such as navigation and manipulation, where they must infer geometry and object relationships from visual input in order to act correctly. Existing benchmarks usually test perception and reasoning in isolation, making it hard to tell whether failures come from visual understanding, downstream reasoning, or the bridge between them. How can we evaluate whether a model can recover the right spatial structure from visual input and use it to make correct decisions? We introduce VeriWorld, a benchmark for spatial reasoning in interactive 3D environments with executable actions and deterministic verification. Each task is evaluated under three matched input settings -- visual-only, structured, and combined -- while the environment and objective remain fixed. This design isolates whether failures arise from perception, reasoning, or their interaction. VeriWorld brings together interactive 3D environments, code-based actions, deterministic verification, parameterized task generation, and controlled diagnostic evaluation in a single framework. Using this setup, we uncover two findings. First, models often succeed when given structured spatial information but fail when the same information must be inferred from visual input, revealing a recurring visual-to-structure gap. Second, action-space and harness design can change outcomes even under the same task and information condition, showing that interaction protocol is itself a confounding variable in spatial evaluation. VeriWorld is open-sourced to support reproducible and fine-grained evaluation of spatial reasoning in VLMs.
