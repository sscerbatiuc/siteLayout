var pagetop, menu, yPos, logo;
	function yScroll(){
		pagetop = document.getElementById('pagetop');
		menu = document.getElementById('menu');
		logo = document.getElementById('logo');
		yPos = window.pageYOffset;
		if (yPos > 150) {
			pagetop.style.height = "100px";
			menu.style.height = "0px";
			menu.style.paddingBottom = "50px"
		} else {
			pagetop.style.height = "200px";
			menu.style.height = "50px";
		};
	}
	window.addEventListener("scroll", yScroll);

	var pagetop = $('#pagetop');