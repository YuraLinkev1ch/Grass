let benefitsArrowBtn = document.querySelector('.benefits__arrow-btn');
let benefitsRightWrapper = document.querySelector('.benefits__right-wrapper');

benefitsArrowBtn.addEventListener('click', function() {
    benefitsRightWrapper.classList.toggle('benefits__right-wrapper_open');
    this.classList.toggle('benefits__arrow-btn_active');
    console.log('benefitsArrowBtn clicked!')
});

let portfolioArrowBtn = document.querySelector('.portfolio__arrow-btn');
let portfolioMobileGallery = document.querySelector('.portfolio__mobile-gallery');

portfolioArrowBtn.addEventListener('click', function() {
    portfolioMobileGallery.classList.toggle('portfolio__mobile-gallery_open');
    this.classList.toggle('portfolio__arrow-btn_active');
    console.log('portfolioArrowBtn clicked!')
});

/* yandex-maps-config-start */

let center = [53.944802, 27.351446];

function init() {
	let map = new ymaps.Map('contacts-map', {
		center: center,
		zoom: 16
	});

    let myIcon = ymaps.templateLayoutFactory.createClass('<div class="yandex-map__text">' + 
        '{{ properties.iconCaption }}' + '</div>  <img class="yandex-map__image" src="../img/marker.svg">');

    let placemark = new ymaps.Placemark(center, {
        iconCaption: 'Садовая улица, 23',
    }, {
        iconLayout: myIcon,
	});

	map.controls.remove('geolocationControl'); 
    map.controls.remove('searchControl'); 
    map.controls.remove('trafficControl'); 
    map.controls.remove('typeSelector'); 
    map.controls.remove('fullscreenControl'); 
    map.controls.remove('zoomControl'); 
    map.controls.remove('rulerControl'); 
    map.behaviors.disable(['scrollZoom']); 
    map.geoObjects.add(placemark);
}

ymaps.ready(init);

/* yandex-maps-config-end */