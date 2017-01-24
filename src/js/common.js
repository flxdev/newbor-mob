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

	// $(".js_ui_slider").draggable();

//script init sliderUi

	initSlidersUi();

//script init selectUi

	initSelectUi();

//script swich tabs

	$('.js_tab').on('click', function(e) {
		var clickTab = $(this).data('tab');
		$('.js_tab').each(function() {
			var switchClass1 = $(this).data('add'),
				switchClass2 = $(this).data('remove');
				console.log()
			if( $(this).data('tab') == clickTab ){
				$(this).addClass(switchClass1);
				$(this).removeClass(switchClass2);
			}
			else {
				$(this).removeClass(switchClass1);
				$(this).addClass(switchClass2);
			}
		});
		$('.js-tabs-content').find('.js_tab_item').each(function() {
			if( $(this).data('tab-container') != clickTab ){
				$(this).addClass('hidden');
			}
			else {
				$(this).removeClass('hidden');
			}
		});
	});


//srcript open/close menu

	$('.js-menu-open').on('click', function() {
		$('.js_menu_mobile_open').toggleClass('menu_mobile-close');
		$('body').toggleClass('overflow-hidden');
		dropLinks('#header__menu', 'header__menu-white');
	});

	$('.js_form_order').on('click', function() {
		$('.js_modal_mobile_open').toggleClass('menu_mobile-close');
		$('body').toggleClass('overflow-hidden');
	});

//srcript open modal advantages 

	$('.js-modal_advantages').on('click', function() {
		var clickModal = $(this).data('modal-advantages');
		$('.js-modal-advantages-content').find('.js_modal-advantages_open').each(function() {
			if( $(this).data('modal-advantages-content') == clickModal ){
				$(this).toggleClass('menu_mobile-close');
				$('body').toggleClass('overflow-hidden');
			}
		});
		

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
	$('#js-title-kedr-menu ').on('click', function() {
		dropLinks('#js-title-kedr-content', 'links_quarter-drop-open');
	});

//init map
	if ($('#map').length > 0) ymaps.ready(initYandexMap);

});

	function dropLinks(click, toggleClass)  {
		$(click).toggleClass(toggleClass);
		console.log(click,toggleClass);
	}

//init map function

	function initYandexMap(){   
		var mapSetting = {};
		mapSetting.centerX = $('#map').data("center-x");
		mapSetting.centerY = $('#map').data("center-y");
		mapSetting.zoom = $('#map').data("zoom");
		mapSetting.markerX = $('#map').data("marker-x");
		mapSetting.markerY = $('#map').data("marker-y");

	    var myMap;
	    myMap = new ymaps.Map("map", {
	        center: [mapSetting.centerX,mapSetting.centerY],
	        zoom: mapSetting.zoom
	    });
	    myPlacemark0 = new ymaps.Placemark([mapSetting.markerX,mapSetting.markerY], {
        balloonContent: '' 
			}, {
			iconImageHref: 'img/map-marker.png', 
			iconImageSize: [27, 35], 
			iconImageOffset: [0, 0], 
			balloonContentSize: [27, 35], 
			balloonLayout: "default#imageWithContent", 
			balloonImageHref: 'img/ballon1.png', 
			balloonImageOffset: [0, 0], 
			balloonImageSize: [27, 35], 
			balloonShadow: false
		}); 
		myMap.geoObjects
			.add(myPlacemark0);
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
			sliderSetting.inputHiddenTop = $(this).find('.js_ui_slider_value_top');
			sliderSetting.inputHiddenBottom = $(this).find('.js_ui_slider_value_bottom');
			$(sliderSetting.inputHidden).val( sliderSetting.defaultValueTo + " - " + sliderSetting.defaultValueFrom );
			$(sliderSetting.inputHiddenTop).val(sliderSetting.defaultValueFrom);
			$(sliderSetting.inputHiddenBottom).val(sliderSetting.defaultValueTo);
			slider.slider({
				range: true,
				min: sliderSetting.min,
				max: sliderSetting.max,
				step: sliderSetting.step,
				values: [ sliderSetting.defaultValueTo, sliderSetting.defaultValueFrom ],
				slide: function( event, ui ) {
					$(sliderSetting.inputHidden).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
					$(sliderSetting.inputHiddenTop).val(ui.values[ 1 ]);
					$(sliderSetting.inputHiddenBottom).val(ui.values[ 0 ]);
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



			