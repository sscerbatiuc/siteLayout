	$(window).scroll(function(){
		if($(this).scrollTop() > 75){
			$('#pagetop').css("height","120px");
			$('#menu').css("height","0px");
			$('#menu').css("padding-bottom","50px");
			// $('#logo').animate({width:'-=80px'},1000);
			$('#logo').css("height","70px");
			$('#logo').css("width","171px");
			$('#logo').css("background","url('img/logo_hor.png') no-repeat");
		} else {
			$('#pagetop').css("height","200px");
			$('#menu').css("height","50px");
			$('#logo').animate({height:'+=80px'},750);
			$('#logo').css("width","200px");
			// $('#logo').css("height","150px");
			$('#logo').css("background","url('img/logo.jpg') no-repeat");
		}
	});