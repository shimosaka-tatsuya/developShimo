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
			$('.area-content').addClass('area-content--inactive').css({'top': -scrollpos});
			state = true;
		} else {
			$('.area-content').removeClass('area-content--inactive').css({'top': 0});
			window.scrollTo( 0 , scrollpos );
			state = false;
		}
	});
});