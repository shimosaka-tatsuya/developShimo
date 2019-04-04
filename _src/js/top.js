$(window).load(function() {	
	$(".box-mainVisual").addClass("box-mainVisualFadeIn");
	
	setTimeout(function(){
		$(".btn-toProfile").addClass("btn-toProfileFadeIn");
	},3600);
	
	// スライドショーの挙動を制御するためのjs
	function slideloop() {
		function slideActive() {
			$(".box-mainVisualSlide").addClass("box-mainVisualSlideActive");
		}
		slideActive();
		
		setTimeout(function(){
	    	$(".box-mainVisualSlide").removeClass("box-mainVisualSlideActive");
			$(function(){
				setTimeout(function(){
					slideActive();
					slideloop();
				},100);
			});
	    },45000);	
	}
	slideloop();
	
	//スクロールした際の挙動
	$(window).scroll(function () {
		var scrollTop =  Math.floor($(window).scrollTop());
		var mainVisualHeight = $(".box-mainVisual").height();
		
		if (scrollTop > (mainVisualHeight-26)) {
			$('.btn-hamburgerMenu').removeClass("btn-hamburgerMenu--white");
			$('.txt-siteName').removeClass("txt-siteName--through");
		} else {
			$('.btn-hamburgerMenu').addClass("btn-hamburgerMenu--white");
			$('.txt-siteName').addClass("txt-siteName--through");
		}
	});
});