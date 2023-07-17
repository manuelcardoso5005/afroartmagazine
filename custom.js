jQuery(function($) {
	'use strict';
	
	/*  ROLAR PARA CIMA */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// ROLAR PARA BAIXO
	$('.scroll-to-top').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});