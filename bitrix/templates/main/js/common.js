$(document).ready(function() {

//init slick slider

	$('.slider-init').slick({
		dots: true,
		arrows: true,
		prevArrow: '<button type="button" class="slider_arrow slider_arrow-pre"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15 27" enable-background="new 0 0 15 27" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z"/></svg></button>',
		nextArrow: '<button type="button" class="slider_arrow slider_arrow-next"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15 27" enable-background="new 0 0 15 27" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z"/></svg></button>',
		responsive: [
			{
			    breakpoint: 720,
			    settings: {
			    	slidesToShow: 1,
			    	slidesToScroll: 1
				}
			}
		]		
	});

//init slick double slider

	$('.slider-init-2_1').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		asNavFor: '.slider-init-2_2',
		prevArrow: '<button type="button" class="slider_arrow slider_arrow-pre"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15 27" enable-background="new 0 0 15 27" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.8,0L15,1.1L2.7,13.6L15,25.7L13.7,27L0,13.7L13.8,0z"/></svg></button>',
		nextArrow: '<button type="button" class="slider_arrow slider_arrow-next"><svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15 27" enable-background="new 0 0 15 27" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M15,13.7L1.3,27L0,25.7l12.3-12.1L0,1.1L1.2,0L15,13.7z"/></svg></button>'
	});
	$('.slider-init-2_2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.slider-init-2_1',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		fade: true
	});

//script init draggable sliderUI

	$(".js_ui_slider").draggable();

//script init sliderUi

	initSlidersUi();

//script init selectUi

	initSelectUi();

//script swich tabs

	$('.js_tab').on('click', function(e) {
		var clickTab = $(this).data('tab');
		$('.js_tab').each(function() {
			if( $(this).data('tab') == clickTab ){
				$(this).addClass('btn-white');
				$(this).removeClass('btn-white_white-border');
			}
			else {
				$(this).removeClass('btn-white');
				$(this).addClass('btn-white_white-border');
			}
		});
		$('.tabs-content_filters').find('.js_tab_item').each(function() {
			if( $(this).data('tab-container') != clickTab ){
				$(this).addClass('hidden');
			}
			else {
				$(this).removeClass('hidden');
			}
		});
	});


//srcript open/close menu

	$('#menu').on('click', function() {
		$('.js_menu_mobile_open').toggleClass('menu_mobile-close');
		$('body').toggleClass('overflow-hidden');
	});

	$('.js_form_order').on('click', function() {
		$('.js_modal_mobile_open').toggleClass('menu_mobile-close');
		$('body').toggleClass('overflow-hidden');
	});

//scripts open/close dropdown text

	$('#transport').on('click', function() {
		dropLinks('#transport-open', 'read-other__open')
	});
	$('#auto').on('click', function() {
		dropLinks('#auto-open', 'read-other__open')
	});
	$('#work_list').on('click', function() {
		dropLinks('#work_list-open', 'read-other__open')
	});

//init map

	// ymaps.ready(initYandexMap);
});

	function dropLinks(click, toggleClass)  {
		$(click).toggleClass(toggleClass);
	}

//init map function

	function initYandexMap(){     
	    var myMap;
	    myMap = new ymaps.Map("map", {
	        center: [55.76, 37.64],
	        zoom: 7
	    });
	}

//init sliderUi function

	function initSlidersUi() {
		$('.js_ui_slider').each(function () {
			var __parent = $(this.parentNode.parentNode).find('.filter-text_secondary')[0];
			var slider = $(this).find('.js_ui_slider_main');
			var sliderSetting = {};
			sliderSetting.max = $(this).data("max");
			sliderSetting.min = $(this).data("min");
			sliderSetting.step = $(this).data("step");
			sliderSetting.defaultValueTo = $(this).data("default-value-to");
			sliderSetting.defaultValueFrom = $(this).data("default-value-from");
			sliderSetting.labelTo = $(this).find('.js_ui_slider_label');
			sliderSetting.inputHidden = $(this).find('.js_ui_slider_input');
			$(sliderSetting.inputHidden).val( sliderSetting.defaultValueTo + " - " + sliderSetting.defaultValueFrom );
			slider.slider({
				range: true,
				min: sliderSetting.min,
				max: sliderSetting.max,
				step: sliderSetting.step,
				values: [ sliderSetting.defaultValueTo, sliderSetting.defaultValueFrom ],
				slide: function( event, ui ) {
					$(sliderSetting.inputHidden).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
				}
			});
				
		   });
	}

//init selectUi function

	function initSelectUi() {
		$('.selectUi').each(function () {
			$(this).selectmenu();
		});
	}



			