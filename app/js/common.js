$(function(){
	// Основной слайдер
	$('.slider').owlCarousel({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		items: 1
	});

	// Слайдер для фото комнат
	var sliderParams = {
		autoplay: false,
		autoplaySpeed: 3000,
		nav: true,
		dots: false,
		items: 1
	};

	$('.glr-1, .glr-2, .glr-3, .glr-4, .glr-5, .glr-6, .glr-7, .glr-8, .glr-9').owlCarousel(sliderParams);

	// Переключение типов комнат
	$('.rooms__type').click(function(){
		var index = $(this).index();

		$('.rooms__type').removeClass('rooms__type_active');
		$(this).addClass('rooms__type_active');

		$('.rooms__item').removeClass('rooms__item_active');
		$('.rooms__item').eq(index).addClass('rooms__item_active');
	});

	// Скроллинг при навигации
	$(document).ready(function(){
	   	$("[data-scroll-to]").click(function (event) {
		   	event.preventDefault();

		   	var id  = $(this).attr('href'),
		   	top = $(id).offset().top;

		  	$('body, html').animate({scrollTop: top}, 700);
			if($('.menu-mobile-active').length > 0) {
				$('.menu-mobile-active').removeClass('menu-mobile-active');
			}
	   	});
	});

	// Вызов модального окна
	$('.button').click(function(){
		var modalType = $(this).data('type');

		if(modalType)
		{
			$('html').addClass('overflow-hidden modal-open');
			$('body').css('overflow-y', 'scroll');

			$('.modal').removeClass('modal_visible').addClass('modal_hidden');
			$('.modal_type_' + modalType).removeClass('modal_hidden').addClass('modal_visible');
		}
	});

	// Скрытие модального окна
	$(document).on('click', '.modal-bg, .modal__close-button, .modal__button_type_ideas-done', function(){
		$('html').removeClass('overflow-hidden modal-open');
		$('body').css('overflow-y', 'initial');

		$('.modal').removeClass('modal_visible').addClass('modal_hidden');
	});

	$('form').each(function () {
        var $form = $(this);
        var $buttons = $form.find('button');

        $buttons.attr('disabled', true);

        $form.find('input:checkbox').on('change', function (e) {
            if($(this).is(':checked')) {
                $buttons.attr('disabled', false);
            } else {
                $buttons.attr('disabled', true);
            }
        })
    });

	$('form').submit(function (e) {
		e.preventDefault();

		var form = $(this),
			action = form.attr('action'),
			formData = form.serialize();

		$.post(action, formData).done(function (data) {
			var response = $.parseJSON(data);
			if(response.done == true) {
				$('html').addClass('overflow-hidden modal-open')
				$('body').css('overflow-y', 'scroll');

				$('.modal').removeClass('modal_visible').addClass('modal_hidden');
				$('.modal_type_'+response.modal).removeClass('modal_hidden').addClass('modal_visible');

                yaCounter44768188.reachGoal('send_order');
			}
		});
	});

	$('.mobile-menu__icon').click(function (e) {
		e.preventDefault();

		$('.menu').toggleClass('menu-mobile-active');
	});

	$('.js-close-mobile-menu').click(function (e) {
		e.preventDefault();

		$('.menu').toggleClass('menu-mobile-active');
	});

	$('input[name="phone"]').mask('+7 (999) 999-99-99');
});
