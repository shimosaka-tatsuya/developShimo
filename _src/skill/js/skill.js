$(window).load(function() {	
	//スクロールした際の挙動
	$(window).scroll(function () {
		var windowWidth = $(window).width();
		var scrollTop =  Math.floor($(window).scrollTop());
		var mainVisualHeight = $(".img-skillOUtlineMain").height();
		
		if (windowWidth > 780) {
			if (scrollTop > mainVisualHeight/16+80) {
				$('.txt-skillOUtlineNameSub').addClass("txt-skillOUtlineNameSub--small");
			} else {
				$('.txt-skillOUtlineNameSub').removeClass("txt-skillOUtlineNameSub--small");
			}
		}		
	});
});