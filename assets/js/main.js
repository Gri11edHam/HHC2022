document.onreadystatechange = (ev) => {
	setup();
}

function setup() {
	document.querySelectorAll("spoiler").forEach((spoiler) => {
		spoiler.onclick = function() {
			spoiler.toggleAttribute("clicked", true);
		};
	});
}