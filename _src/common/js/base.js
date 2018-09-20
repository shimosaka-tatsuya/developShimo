$(window).load(function() {
	var scroll = $(window).scrollTop(); //スクロールの位置を取得
	var windowHeight = $(window).height(); //ウィンドウの高さを取得
	var documentHeight = $(document).height(); //ページの高さを取得
	var maxScrollVlue = documentHeight - windowHeight; //最大のスクロール値
	var valueScrollGauge = scroll / (maxScrollVlue) * 100; //スクロール値の百分率
	
	// ヘッダーのスクロールゲージの初期値
	$(".box-scrollGauge").css({width: valueScrollGauge + "%"});
	
	// ブラウザの戻るボタンを押してページ遷移してきた際の処理
	if($("#hamburgerMenuInput:checked").val()) {
		$('#hamburgerMenuInput').prop("checked",false);
	}
	
	$(window).scroll(function (){
		var scroll = $(window).scrollTop(); //スクロールの位置を取得
		var windowHeight = $(window).height(); //ウィンドウの高さを取得
		var documentHeight = $(document).height(); //ページの高さを取得
		var maxScrollVlue = documentHeight - windowHeight; //最大のスクロール値
		var valueScrollGauge = scroll / (maxScrollVlue) * 102; //スクロール値の百分率
		
		$(".box-scrollGauge").css({width: valueScrollGauge + "%"});
	});
	
	// スクロール
	$(function(){
	   $('a[href^=#]').click(function() {
	      var speed = 400;
	      var href= $(this).attr("href");
	      var target = $(href == "#" || href == "" ? 'html' : href);
	      var position = target.offset().top;
	      $('body,html').animate({scrollTop:position}, speed, 'swing');
	      return false;
	   });
	});
	
	// ハンバーガーメニューを開いたときにページのスクロールを禁止に
	$(function(){
		var state = false;
		var scrollpos;
		
		$('.btn-hamburgerMenu').on('click', function(){
			if(state == false) {
				scrollpos = $(window).scrollTop();
				$('body').addClass('contentScroll-inactive').css({'top': -scrollpos});
				state = true;
			} else {
				$('body').removeClass('contentScroll-inactive').css({'top': 0});
				window.scrollTo( 0 , scrollpos );
				state = false;
			}
		});
	});

});