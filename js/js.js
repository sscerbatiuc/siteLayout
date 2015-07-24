	$(document).ready(function(){
		var menu = $('.menu');
		var menuPosition = menu.position();
		console.log("menu position: "+menuPosition.top);
		$(window).scroll(function(){
			
			var windowPos = $(window).scrollTop()
			if(menuPosition.top < windowPos){
			menu.addClass('stick');
		} else {
			menu.removeClass('stick');
		}
		});
	});

	$()
	