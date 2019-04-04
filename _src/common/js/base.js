// スクロールイベントの関数
function scrollAnimataion(data) {
	function scrollAnimataionBase(data) {
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		
		$("." + data.className).each(function(){
			var position = $(this).offset().top;
			var minusValue = windowHeight - data.triggerPoint ;
			
			$(this).attr("name", data.className);
	
			if (scroll > position - minusValue){
				$(this).addClass(data.className + "-active");
			} else if (position - windowHeight > scroll) {
				$(this).removeClass(data.className + "-active");
			} else if(scroll == 0) {
				$(this).removeClass(data.className + "-active");
			}
		});
	}
	scrollAnimataionBase(data);
	
	$(window).scroll( function () {
		scrollAnimataionBase(data);
	});	
}

// ページ上部のスクロールバーの関数
function scrollGauge() {
	function scrollGaugeBase() {
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var documentHeight = $(document).height();
		var maxScrollVlue = documentHeight - windowHeight;
		var valueScrollGauge = scroll / (maxScrollVlue) * 100;
		
		$(".box-scrollGauge").css({width: valueScrollGauge + "%"});	
	}
	
	scrollGaugeBase();
	
	$(window).scroll(function (){
		scrollGaugeBase();
	});	
}

// スムーススクロールの関数
function smoothScroll(speed) {
	$('a[href^=#]').click(function() {
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
}

// ハンバーガーメニューが開いたときにページのスクロールを禁止にする関数
function notScroll() {
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
}

// ページが読み込まれたら以下を実行
$(window).load(function() {
	$(".area-content").addClass("area-contentFadeIn");
	
	// ブラウザの戻るボタンを押してページ遷移してきた際の処理
	if($("#hamburgerMenuInput:checked").val()) {
		$('#hamburgerMenuInput').prop("checked",false);
	}
	
	scrollAnimataion({
		className: "box-ScrollAnimaton",
		triggerPoint: 96
	});
	
	scrollGauge();
	
	smoothScroll(400);
	
	notScroll();
});