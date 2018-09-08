$(window).load(function() {	
	$(function(){
		var state = false;
		var scrollpos;
		
		$('.btn-hamburgerMenu').on('click', function(){
			if(state == false) {
			scrollpos = $(window).scrollTop();
			$('.area-content').addClass('area-content--inactive').css({'top': -scrollpos});
			state = true;
		} else {
			$('.area-content').removeClass('area-content--inactive').css({'top': 0});
				window.scrollTo( 0 , scrollpos );
				state = false;
			}
		});
	});
	
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