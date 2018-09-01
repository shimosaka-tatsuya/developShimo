$(window).load(function() {
	$(".box-mainVisual").addClass("box-mainVisualActive");
	$(function(){
	    setInterval(function(){
	    	$(".box-mainVisual").removeClass("box-mainVisualActive");
			$(function(){
			setTimeout(function(){
				$(".box-mainVisual").addClass("box-mainVisualActive");
				},100);
			});
	    },45000);
	});	
});