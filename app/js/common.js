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
	   	$(".menu__link").click(function (event) {
		   	event.preventDefault();

		   	var id  = $(this).attr('href'),
		   	top = $(id).offset().top;

		  	$('body, html').animate({scrollTop: top}, 700);
	   	});
	});

	// Вызов модального окна
	$('.button').click(function(){
		var modalType = $(this).data('type');

		if(modalType)
		{
			$('html').addClass('overflow-hidden')
			$('body').css('overflow-y', 'scroll').append('<div class="modal-bg"></div>');

			$('.modal').removeClass('modal_visible').addClass('modal_hidden');
			$('.modal_type_' + modalType).removeClass('modal_hidden').addClass('modal_visible');
		}
	});

	// Скрытие модального окна
	$(document).on('click', '.modal-bg, .modal__close-button, .modal__button_type_ideas-done', function(){
		$('.modal-bg').remove();
		$('html').removeClass('overflow-hidden');
		$('body').css('overflow-y', 'initial')

		$('.modal').removeClass('modal_visible').addClass('modal_hidden');
	});

	$('form').submit(function (e) {
		e.preventDefault();

		console.log('submit');
	});

	$('.mobile-menu__icon').click(function (e) {
		e.preventDefault();

		$('.menu').toggleClass('menu-mobile-active');
	});

	$('.js-close-mobile-menu').click(function (e) {
		e.preventDefault();

		$('.menu').toggleClass('menu-mobile-active');
	});
});
