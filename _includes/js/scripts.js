// cv bibtex toggle

function toggleBibtex(id) {

	let bibtex = document.getElementById(id);

	if (bibtex.style.display === 'none') {
		bibtex.style.display = 'inline-block';
	} else {
		bibtex.style.display = 'none';
	}
	
}

// dissertation youtube video api

const tag = document.createElement('script');
tag.id = 'iframe-video';
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let iframeIds = [];
let iframes = document.querySelectorAll("iframe.video");
iframes.forEach(function(iframe) {
	iframeIds.push(iframe.id);
});

// create multiple players based on dissertation talk keys
let players = [];
function onYouTubeIframeAPIReady() {
	iframeIds.forEach(function(frameId) {
		player = new YT.Player(frameId, {
			events: {
				'onReady': onPlayerReady
			}
		});
		players.push(player)
	})

	// apply onclick events to each timestamp for each player
	for (let i = 0; i < players.length; i++) {
		let videoIdSelector = '.video-part-link-' + iframeIds[i].split('-')[iframeIds.length - 1]
		const videoLinks = document.querySelectorAll(videoIdSelector);
		Array.from(videoLinks).forEach((linkElement) => {
			linkElement.addEventListener('click', () => {
				const startSecond = linkElement.getAttribute('data-start');
				players[i].seekTo(startSecond);
				players[i].playVideo();
			});
		});	
	}

}

function onPlayerReady(event) {
	// player.mute()
}

// Fetch GitHub stars for code links
document.addEventListener('DOMContentLoaded', function() {
	const codeLinks = document.querySelectorAll('.code-link');
	codeLinks.forEach(function(link) {
		const repoUrl = link.getAttribute('data-repo');
		if (!repoUrl || !repoUrl.includes('github.com')) return;

		const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
		if (!match) return;

		const owner = match[1];
		const repo = match[2];

		fetch('https://api.github.com/repos/' + owner + '/' + repo)
			.then(function(res) { return res.json(); })
			.then(function(data) {
				if (data.stargazers_count && data.stargazers_count >= 50) {
					const starsSpan = link.querySelector('.github-stars');
					if (starsSpan) {
						starsSpan.textContent = '(\u2605' + data.stargazers_count.toLocaleString() + ')';
					}
				}
			})
			.catch(function() {});
	});
});
