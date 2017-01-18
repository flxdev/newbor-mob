$(document).ready(function() {

	//init map
	ymaps.ready(initYandexMap);

	//init slider
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


	$('#menu').on('click', function() {
		$('.menu_mobile').toggleClass('menu_mobile-close');
		$('body').toggleClass('overflow-hidden');
	});

	$('#transport').on('click', function() {
		dropLinks('#transport-open', 'read-other__open')
	});
	$('#auto').on('click', function() {
		dropLinks('#auto-open', 'read-other__open')
	});
	$('#work_list').on('click', function() {
		dropLinks('#work_list-open', 'read-other__open')
	});

});

function dropLinks(click, toggleClass)  {
	$(click).toggleClass(toggleClass);
}

function initYandexMap(){     
    var myMap;
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });
}




			