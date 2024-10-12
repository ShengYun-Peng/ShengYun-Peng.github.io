---
layout: home
title: Home
---

<div id="intro-wrapper" class="l-middle">
	<div id="intro-title-wrapper">
		<div id="intro-image-wrapper">
			<img id="intro-image" src="/images/2022-square.jpg"></div>
		<div id="intro-title-text-wrapper">
			<h1 id="intro-title">ShengYun (Anthony) Peng</h1>
			<div id="intro-subtitle">CS PhD at Georgia Tech</div>
			<div id="intro-title-socials">
				{% for link in site.data.social-links %}
					{% if link.on-homepage == true %}
						{% include social-link.html link=link %}
					{% endif %}
				{% endfor %}
			</div>
		</div>
	</div>
	<!-- <hr class="l-middle home-hr"> -->
	<div id="everything-else" class="l-middle">
		<a href="{{ site.url }}/cv"><div><i class="fa fa-portrait icon icon-right-space"></i>CV</div></a>
		<a href="{{ site.url }}/projects"><div><i class="fa fa-shapes icon icon-right-space"></i>Projects</div></a>
		<!-- <a href="{{ site.url }}/everything-else"><div><i class="fa fa-list-ul icon icon-right-space"></i>Everything Else</div></a> -->
	</div>
	<div>
		Hi, I'm Anthony, a CS PhD at <img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/gatech.svg"> Georgia Tech working with <a href="http://www.cc.gatech.edu/~dchau/">Polo Chau</a>. My research strengthens the generalization and robustness of machine learning, spanning vision models, LLMs, and VLMs. As steps towards this goal, I work on: 
	</div>
	<div style="height: 0.5rem"></div>
	<div>
		<b> &bull; Multimodal representation learning </b>: foundation models for table recognition (<a href="https://arxiv.org/abs/2403.04822">UniTable</a>, <a href="https://arxiv.org/abs/2311.05565">Table Transformer</a>, 
		<a href="https://arxiv.org/abs/2402.15578">Self-supervised Pretraining</a>), efficient text embedding models (coming soon!), 
		<!-- RGB-infrared fusion object tracking (<a href="https://www.sciencedirect.com/science/article/pii/S092359651930342X">DsiamMFT</a>, <a href="https://ieeexplore.ieee.org/abstract/document/8809774">SiamFT</a>),  -->
		and structural health monitoring (<a href="https://www.techno-press.org/content/?page=article&journal=sss&volume=27&num=5&ordernum=7">system identification</a>).
		<br>
		<b> &bull; Robust machine learning models </b>: LLM landscape (<a href="https://arxiv.org/abs/2405.17374">LLM safety basin</a>), robust CNN design principles (<a href="https://arxiv.org/abs/2308.16258">#1 on RobustBench CIFAR-10, BMVC Best Poster Award</a>), and multi-task person tracking (<a href="https://link.springer.com/chapter/10.1007/978-3-031-25056-9_29">SkeleVision</a>).
		 <!-- and defending LLM attacks (<a href="https://arxiv.org/abs/2308.07308">LLM Self Defense</a>) -->
	</div>
	<div style="height: 1rem"></div>
	<div>
		I am fortunate to have collaborated with researchers, developers, scientists, and engineers at 
        <img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/gatech.svg"> Georgia Tech, 
		<img class="intro-logo" style="width: 20px; padding-bottom: 3px;" src="/images/meta.png"> Meta, 
		<img class="intro-logo" style="width: 28px; padding-bottom: 3px;" src="/images/ibm.png"> IBM Research, 
        <img class="intro-logo" style="width: 33px; padding-bottom: 3px;" src="/images/intel.svg"> Intel Lab, 
		<img class="intro-logo" style="width: 34px; padding-bottom: 3px;" src="/images/adp.png"> ADP, 
        <img class="intro-logo" style="width: 24px; padding-bottom: 3px;" src="/images/ucla.svg"> UCLA. 
        <!-- <img class="intro-logo" style="width: 20px; padding-bottom: 3px;" src="/images/tongji.svg"> Tongji,
        <img class="intro-logo" style="width: 20px; padding-bottom: 3px;" src="/images/sjtu.png"> SJTU,
        and <img class="intro-logo" style="width: 20px; padding-bottom: 3px;" src="/images/fudan.svg"> Fudan. -->
	</div>
</div>


<hr class="l-middle home-hr">

<h2 class="feature-title l-middle"> Featured Publications </h2>
<div style="height: 1rem"></div>
<div class="cover-wrapper cover-wrapper-1-col l-page">
	{% assign sortedPublications = site.categories.papers | sort: 'feature-order' | reverse %}
	{% for feature in sortedPublications %}
		{% if feature.featured == true %}
			{% include feature.html feature=feature %}
		{% endif %}
	{% endfor %}
</div>

<div style="height: 4rem"></div>

<!-- <h2 class="feature-title l-middle">
	<a href="{{ site.url }}/everything-else" style="color: #303030">Everything Else</a>
</h2>
<div style="height: 1rem"></div>
<div id="everything-else" class="l-middle">
	<a href="{{ site.url }}/projects"><div>All Projects</div></a>
	<a href="{{ site.url }}/blog"><div>Blogs</div></a>
    <a href="{{ site.url }}/tools"><div>Tools</div></a>
</div> -->


[gt]: http://www.gatech.edu "Georgia Tech"
[cse]: http://cse.gatech.edu "Georgia Tech Computational Science and Engineering"
[coc]: http://www.cc.gatech.edu "Georgia Tech College of Computing"

[cv]: {{ site.url }}/cv
[polo]: http://www.cc.gatech.edu/~dchau/ "Polo Chau"
[poloclub]: http://poloclub.gatech.edu "Polo Club of Data Science"

<!-- <img class="intro-logo" style="width: 19px; padding-bottom: 5px;" src="/images/poloclub.png"> <a href="http://poloclub.gatech.edu">Polo Club of Data Science</a> -->

<!-- I have strong interests in building reliable algorithms and toolkits that understand, fortify and democratize AI security with an eye towards scalability and practicality in real-world settings.  -->

<!-- , with an emphasis on enhancing deep learning algorithm safety and explainability. I achieve this through methods of architecture modification, multi-task learning, and visualizing model behavior under adversarial attacks. My work also spans application domains such as multimodal systems, object detection, object tracking, table representation learning, and structural health monitoring. -->


<!-- In general, I have strong interests in creating scalable, efficient, and robust multimodal models.
scalable and practical AI security algorithms and toolkits. -->
