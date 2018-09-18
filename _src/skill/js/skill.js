$(window).load(function() {	
	var windowWidth = $(window).width();
	var scrollTop =  Math.floor($(window).scrollTop());
	var mainVisualHeight = $(".img-skillOUtlineMain").height();
	var contentInrHeight = $(".area-content-skillInr").height();
	
	if (windowWidth > 780) {
		if (scrollTop > mainVisualHeight/16+80) {
			$('.txt-skillOUtlineNameSub').addClass("txt-skillOUtlineNameSub--small");
		} else {
			$('.txt-skillOUtlineNameSub').removeClass("txt-skillOUtlineNameSub--small");
		}
		
		if (scrollTop > contentInrHeight-164) {
			$('.box-skillOUtlineName').addClass("box-skillOUtlineName--inactive");
			$('.ttl-skillOUtline').addClass("ttl-skillOUtline--inactive");
		} else {
			$('.box-skillOUtlineName').removeClass("box-skillOUtlineName--inactive");
			$('.ttl-skillOUtline').removeClass("ttl-skillOUtline--inactive");
		}
	}
	
	//スクロールした際の挙動
	$(window).on('load scroll', function () {
		var windowWidth = $(window).width();
		var scrollTop =  Math.floor($(window).scrollTop());
		var mainVisualHeight = $(".img-skillOUtlineMain").height();
		var contentInrHeight = $(".area-content-skillInr").height();
		
		if (windowWidth > 780) {
			if (scrollTop > mainVisualHeight/16+80) {
				$('.txt-skillOUtlineNameSub').addClass("txt-skillOUtlineNameSub--small");
			} else {
				$('.txt-skillOUtlineNameSub').removeClass("txt-skillOUtlineNameSub--small");
			}
			
			if (scrollTop > contentInrHeight-164) {
				$('.box-skillOUtlineName').addClass("box-skillOUtlineName--inactive");
				$('.ttl-skillOUtline').addClass("ttl-skillOUtline--inactive");
			} else {
				$('.box-skillOUtlineName').removeClass("box-skillOUtlineName--inactive");
				$('.ttl-skillOUtline').removeClass("ttl-skillOUtline--inactive");
			}
		}	
	});
	
	//ウィンドウをリサイズしたときの挙動
	$(window).on('load resize', function(){
		var windowWidth = $(window).width();
		
		if (windowWidth > 780) {
			$('.box-skillOUtlineName').removeClass("box-skillOUtlineName--inactive");
			$('.ttl-skillOUtlineOtr').removeClass("ttl-skillOUtlineOtr--inactive");
		}
	});
});