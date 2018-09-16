$(window).load(function() {	
	var scroll = $(window).scrollTop(); //スクロールの位置を取得
	var windowHeight = $(window).height(); //ウィンドウの高さを取得
	var documentHeight = $(document).height(); //ページの高さを取得
	var maxScrollVlue = documentHeight - windowHeight; //最大のスクロール値
	
	$(".box-ScrollAnimaton").each(function(){
		var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
		var minusValue = windowHeight - 96 ;

		if (scroll > position - minusValue){ //スクロール位置が要素の位置を過ぎたとき
			$(this).addClass('box-ScrollAnimaton-active'); //クラス「animationSlideInThumbnail-active」を与える
		} else if (position - windowHeight/2 > scroll) {
			$(this).removeClass('box-ScrollAnimaton-active'); //クラス「animationSlideInThumbnail-active」を削除
		} else if(scroll == 0) {
			$(this).removeClass('box-ScrollAnimaton-active'); //クラス「animationSlideInThumbnail-active」を削除
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

	$(window).scroll(function (){
		var scroll = $(window).scrollTop(); //スクロールの位置を取得
		var windowHeight = $(window).height(); //ウィンドウの高さを取得
		var documentHeight = $(document).height(); //ページの高さを取得
		var maxScrollVlue = documentHeight - windowHeight; //最大のスクロール値
		
		$(".box-ScrollAnimaton").each(function(){
			var position = $(this).offset().top; //ページの一番上から要素までの距離を取得
			var minusValue = windowHeight - 96 ;
	
			if (scroll > position - minusValue){ //スクロール位置が要素の位置を過ぎたとき
				$(this).addClass('box-ScrollAnimaton-active'); //クラス「animationSlideInThumbnail-active」を与える
			} else if (position - minusValue*4.5 > scroll) {
				$(this).removeClass('box-ScrollAnimaton-active'); //クラス「animationSlideInThumbnail-active」を削除
			} else if(scroll == 0) {
				$(this).removeClass('box-ScrollAnimaton-active'); //クラス「animationSlideInThumbnail-active」を削除
			}
		});
	});
});