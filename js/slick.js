jQuery(function($){
	$('.join-us__slider-list').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true
	});

	$('.target__slider-list').slick({
		responsive: [
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					arrows: false,
					dots: true
				}
			},
			{
			breakpoint: 2000,
				settings: 'unslick'
			}
		]
	});

	$('.scenario__slider-list').slick({
		responsive: [
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					arrows: false,
					dots: true
				}
			},
			{
			breakpoint: 2000,
				settings: 'unslick'
			}
		]
	});

	$('.result__slider-list').slick({
		responsive: [
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					arrows: false,
					dots: true
				}
			},
			{
			breakpoint: 2000,
				settings: 'unslick'
			}
		]
	});

	$('.price__slider-list').slick({
		responsive: [
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					arrows: false,
					dots: true
				}
			},
			{
			breakpoint: 2000,
				settings: 'unslick'
			}
		]
	});

	$('.news-slider__list').slick({
		infinite: true,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true
	});

	$('.immigration-slider__list').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		dots: true
	});
    
    if (screen.width < 768) {
    	$('.banners__list').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			slidesToShow: 3,
			slidesToScroll: 1,
	    });
	// вызов slick
    }

    if (screen.width >= 768) {
    	$('.banners__list').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 2000,
			arrows: false,
			slidesToShow: 5,
			slidesToScroll: 2
	    });
	// вызов slick
    }

});



