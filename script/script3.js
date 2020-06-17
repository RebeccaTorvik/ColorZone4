
(function(){
	$(".flex-slide").each(function(){
		$(this).hover(function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(0deg)',
				top: '10%'
			});
			$(this).find('.flex-about').css({
				opacity: '1'
			});
		}, function(){
			$(this).find('.flex-title').css({
				transform: 'rotate(90deg)',
				top: '15%'
			});
			$(this).find('.flex-about').css({
				opacity: '0'
			});
		})
	});
	})();

$(window).scroll(function() {
	var theta = $(window).scrollTop() / 1500 % Math.PI;
	$('#leftgear').css({ transform: 'rotate(' + theta + 'rad)' });
	});