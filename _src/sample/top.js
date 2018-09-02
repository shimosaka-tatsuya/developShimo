$(window).load(function() {
	// メインビジュアルのスクロールの選出
	var headerHeight = $(".box-mainVisual").height();
	$(window).scroll(function () {
		//スクロールした際の、opacity、position、blurの値の計算
		var scrollTop =  Math.floor($(window).scrollTop());
		var opacityValue = 1.2 - (scrollTop/headerHeight);
		var opacityValueSub = 1.2 - 3*(scrollTop/headerHeight);
		var positionValue = Math.round((scrollTop/headerHeight)*100,2);
		var blurValue = Math.round((scrollTop/headerHeight)*7,2);
		
		//スクロールした際の挙動
		if (scrollTop < headerHeight) {
			$(".box-mainVisual").css({opacity: opacityValue, filter: 'blur('+blurValue+'px)'});
			$('.txt-siteNameSub, .txt-myName').css({opacity: opacityValueSub});
			$('.txt-siteNameCharacter-s').css({top: -positionValue+"px"});
			$('.txt-siteNameCharacter-h').css({top: positionValue*1.4+"px"});
			$('.txt-siteNameCharacter-i').css({top: -positionValue*1.5+"px"});
			$('.txt-siteNameCharacter-m').css({top: positionValue*.9+"px"});
			$('.txt-siteNameCharacter-o').css({top: -positionValue*1.3+"px"});
			
		}
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
});