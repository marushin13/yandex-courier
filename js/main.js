$(document).ready(function () {
	// Fixed header
	var scrolled;
	window.onscroll = function () {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if (scrolled > 5) {
			$(".header").addClass("header-active")
		}
		if (5 > scrolled) {
			$(".header").removeClass("header-active")
		}
	}

	// Scroll to anchors
	$('a[href^="#"]').on('click', function (event) {

		event.preventDefault();

		var sectionAddress = $(this).attr("href"),
			sectionPosition = $(sectionAddress).offset().top;

		heightHeader = $('.header').innerHeight();

		$('html, body').animate({ scrollTop: sectionPosition - heightHeader }, 300);
	});

	// Accordion
	$('.block__title').click(function (event) {
		if ($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
