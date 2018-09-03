$(window).load(function() {	
	// スライドショーの挙動を制御するためのjs
	$(".box-mainVisualSlide").addClass("box-mainVisualSlideActive");
	$(function(){
	    setInterval(function(){
	    	$(".box-mainVisualSlide").removeClass("box-mainVisualSlideActive");
			$(function(){
			setTimeout(function(){
				$(".box-mainVisualSlide").addClass("box-mainVisualSlideActive");
				},100);
			});
	    },45000);
	});
	
	// scrollボタンの表示
	$(function(){
		setTimeout(function(){
			$(".btn-toProfile").addClass("btn-toProfileFadeIn");
		},5300);
	});
});