$(window).load(function() {
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