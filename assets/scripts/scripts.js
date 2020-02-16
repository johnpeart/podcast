window.onload = function() {
  checkJS();
  popPodcastIcon();
};

function checkJS() {
	document.body.className = document.body.className.replace("no-js","js");
}

function toggleMenu() {
  var menu = document.getElementById("header-menu-links");
  menu.classList.toggle("open");
  
  var menu = document.getElementById("header-menu-toggle-image");
  menu.classList.toggle("open");
}

function popPodcastIcon() {
	var podcastsIcon = document.getElementById("podcasts-icon");
	
	if (podcastsIcon.classList.contains("start")) {
    podcastsIcon.classList.remove("start");
    podcastsIcon.classList.add("end");
	}

}