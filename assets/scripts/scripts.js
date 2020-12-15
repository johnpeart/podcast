window.onload = function() {
  checkJS();
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