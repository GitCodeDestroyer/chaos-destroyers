function addTrash() {
	$('.code .tab').filter(function () {
		return $('.fa.fa-trash', this).length === 0;
	})
	.append('<span class="fa fa-trash"></span>');
}

addTrash();

$('.code').on('click', '.fa.fa-trash', function () {
	$(this).parent().remove();
	addTrash();
}).sortable({
	helper: "clone",
	opacity: 1,
	distance: 10,
	placeholder: 'ui-state-highlight'
});

$('.tabs .tab').draggable({
	connectToSortable: '.code',
	helper: 'clone'
});
$(document).ready(function () {

	var one = 0,
		two = 0,
		three = 0,
		four = 0,
		five = 0;

	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	$('.car-link').click(function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			// target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 500);
				return false;
			}
		}
	});

	$("html").niceScroll({
		mousescrollstep: 10,
		cursorcolor: "#fff",
		cursorwidth: "10px",
		cursorborderradius: "10px",
		cursorborder: "none"
	});


	$(window).scroll(function () {
		checkSection();
	});

	function checkSection() {
		$('.section').each(function () {
			var $this = $(this),
				topEdge = $this.offset().top - 50,
				bottomEdge = topEdge + $this.height(),
				wScroll = $(window).scrollTop();

			if (topEdge < wScroll && bottomEdge > wScroll) {
				var currentId = $this.data('section'),
					reqLink = $('.header-link').filter('[href="#section-' + currentId + '"]');
				reqLink.closest('.header-link').addClass('active');
				reqLink.siblings().removeClass('active');
				if (currentId == "one") {
					$('#section-' + currentId + ' .line').addClass('canRightAnimate');
					$('#section-' + currentId + ' .big-text').addClass('opacity-text');
					$('#section-' + currentId + ' .content').addClass('canContentAnimate');
					if (one == 0) {
						$('.section .car').removeClass('canDriveCar');
						$('#section-' + currentId + ' .car').addClass('canDriveCar');
						one = 1;
						$('.car-link').attr('href', '#section-' + currentId);
					}
				}
				if (currentId == "two") {
					$('#section-' + currentId + ' .line').addClass('canRightAnimate');
					$('#section-' + currentId + ' .big-text').addClass('opacity-text');
					$('#section-' + currentId + ' .content').addClass('canContentAnimate');
					if (two == 0 && one == 1) {
						$('.section .car').removeClass('canDriveCar');
						$('#section-' + currentId + ' .car').addClass('canDriveCar');
						two = 1;
						$('.car-link').attr('href', '#section-' + currentId);
					} else if (two == 0) {
						$('.car-link').css({
							'animation': 'scaleButton 1s ease alternate infinite'
						});
					}
				}


				if (currentId == "three") {
					$('#section-' + currentId + ' .line').addClass('canLeftAnimate');
					$('#section-' + currentId + ' .big-text').addClass('opacity-text');
					$('#section-' + currentId + ' .content').addClass('canContentAnimate');
					if (three == 0 && two == 1 && one == 1) {
						$('.section .car').removeClass('canDriveCar');
						$('#section-' + currentId + ' .car').addClass('canDriveCar');
						three = 1;
						$('.car-link').attr('href', '#section-' + currentId);
					} else if (three == 0) {
						$('.car-link').css({
							'animation': 'scaleButton 1s ease alternate infinite'
						});
					}
				}


				if (currentId == "four") {
					$('#section-' + currentId + ' .line').addClass('canRightAnimate');
					$('#section-' + currentId + ' .big-text').addClass('opacity-text');
					$('#section-' + currentId + ' .content').addClass('canContentAnimate');
					if (four == 0 && three == 1 && two == 1 && one == 1) {
						$('.section .car').removeClass('canDriveCar');
						$('#section-' + currentId + ' .car').addClass('canDriveCar');
						four = 1;
						$('.car-link').attr('href', '#section-' + currentId);
					} else if (four == 0) {
						$('.car-link').css({
							'animation': 'scaleButton 1s ease alternate infinite'
						});
					}
				}


				if (currentId == "five") {
					$('#section-' + currentId + ' .line').addClass('canLeftAnimate');
					$('#section-' + currentId + ' .big-text').addClass('opacity-text');
					$('#section-' + currentId + ' .content').addClass('canContentAnimate');
					if (five == 0 && four == 1 && three == 1 && two == 1 && one == 1) {
						$('.section .car').removeClass('canDriveCar');
						$('#section-' + currentId + ' .car').addClass('canDriveCar');
						five = 1;
						$('.car-link').attr('href', '#section-' + currentId);
					} else if (five == 0) {
						$('.car-link').css({
							'animation': 'scaleButton 1s ease alternate infinite'
						});
					}
				}


				if (currentId == "six") {
					$('#section-' + currentId + ' .line').addClass('canRightAnimate');
					$('#section-' + currentId + ' .big-text').addClass('opacity-text');
					if (five == 1 && four == 1 && three == 1 && two == 1 && one == 1) {
						$('.section .car').removeClass('canDriveCar');
						$('#section-' + currentId + ' .car').addClass('canDriveCar');
						$('.car-link').css({
							'animation': 'none'
						});
						six = 1;
						$('.car-link').attr('href', '#section-' + currentId);
					} else if (six == 0) {
						$('.car-link').css({
							'animation': 'scaleButton 1s ease alternate infinite'
						});
					}
				}
			}
		});
	}
});