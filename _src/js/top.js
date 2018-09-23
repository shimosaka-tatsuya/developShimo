$(window).load(function() {	
	var scroll = $(window).scrollTop(); //スクロールの位置を取得
	var windowHeight = $(window).height(); //ウィンドウの高さを取得
	var documentHeight = $(document).height(); //ページの高さを取得
	var maxScrollVlue = documentHeight - windowHeight; //最大のスクロール値
	
	// メインビジュアルの表示の演出
	$(".box-mainVisual").addClass("box-mainVisualFadeIn");
	
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
		},4500);
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
	
	var audioObj = document.getElementById("myMusic");

	// オーディオのonとoffを設定
	$(".btn-audio-off").on('click', function(){
		audioObj.pause();
		$(".btn-audio-on").css({display: "block"});
		$(".btn-audio-off").css({display: "none"});
	});
	
	$(".btn-audio-on").on('click', function(){
		audioObj.play();
		$(".btn-audio-off").css({display: "block"});
		$(".btn-audio-on").css({display: "none"});
	});
	
	//スクロールした際の、ousdioの音量を計算
	$(window).scroll(function () {
		var scrollTopAudio =  Math.floor($(window).scrollTop());
		var mainVisualHeight = $(".box-mainVisual").height();
		var x = Math.round(10*scrollTopAudio/mainVisualHeight);
		var audioVolume = Math.floor( (10 - x)*0.1 * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
		
		if(0 <= audioVolume) {
			audioObj.volume = audioVolume;
		} else if(audioVolume < 0) {
			audioObj.volume = 0;
		}
	});
	
	// オーディオの音量の初期値
	$(function(){
		var scrollTopAudio =  Math.floor($(window).scrollTop());
		var mainVisualHeight = $(".box-mainVisual").height();
		var x = Math.round(10*scrollTopAudio/mainVisualHeight);
		var audioVolume = Math.floor( (10 - x)*0.1 * Math.pow( 10, 2 ) ) / Math.pow( 10, 2 );
		
		if(0 <= audioVolume) {
			audioObj.volume = audioVolume;
		} else if(audioVolume < 0) {
			audioObj.volume = 0;
		}
	});
});