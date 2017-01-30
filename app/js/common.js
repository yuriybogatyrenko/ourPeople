$(function(){
	// Основной слайдер
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true
	});

	// Слайдер для фото комнат
	var sliderParams = {
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: true,
		dots: false
	};

	$('.glr-1').slick(sliderParams);
	$('.glr-2').slick(sliderParams);
	$('.glr-3').slick(sliderParams);
	$('.glr-4').slick(sliderParams);
	$('.glr-5').slick(sliderParams);
	$('.glr-6').slick(sliderParams);
	$('.glr-7').slick(sliderParams);
	$('.glr-8').slick(sliderParams);
	$('.glr-9').slick(sliderParams);

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
		console.log(modalType);

		if(modalType)
		{
			$('body').addClass('overflow-hidden').append('<div class="modal-bg"></div>');

			$('.modal').removeClass('modal_visible').addClass('modal_hidden');
			$('.modal_type_' + modalType).removeClass('modal_hidden').addClass('modal_visible');
		}
	});

	// Скрытие модального окна
	$(document).on('click', '.modal-bg, .modal__close-button, .modal__button_type_ideas-done', function(){
		$('.modal-bg').remove();
		$('body').removeClass('overflow-hidden');

		$('.modal').removeClass('modal_visible').addClass('modal_hidden');
	});
});
