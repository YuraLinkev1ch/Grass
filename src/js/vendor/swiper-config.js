/* swiper-config-start */

import Swiper, { Navigation, Pagination, Thumbs, FreeMode} from 'swiper';

/* services-swipers-start */

/* greening-start */

let swiperGreeningThumbs = new Swiper('.swiper-greeningThumbs', {
    modules: [Pagination, FreeMode],
    slideClass: 'swiper-greeningThumbs__slide',
    slidesPerView: 3,
    watchSlidesProgress: true,
});

let swiperGreening = new Swiper('.swiper-greening', {
    modules: [Navigation, Pagination, Thumbs],
    slideClass: 'swiper-greening__slide',
    pagination: {
        el: '.swiper-greening-pagination',
        type: "fraction",
        renderFraction(currentClass, totalClass) {
            return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
        },
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next_greening',
        prevEl: '.swiper-button-prev_greening',
    },
    thumbs: {
        swiper: swiperGreeningThumbs,
    },
})

/* greening-end */

/* phytodesign-start */

let swiperPhytodesignThumbs = new Swiper('.swiper-phytodesignThumbs', {
    modules: [Pagination, FreeMode],
    slideClass: 'swiper-phytodesignThumbs__slide',
    slidesPerView: 3,
    watchSlidesProgress: true,
});

let swiperPhytodesign = new Swiper('.swiper-phytodesign', {
    modules: [Navigation, Pagination, Thumbs],
    slideClass: 'swiper-phytodesign__slide',
    pagination: {
        el: '.swiper-phytodesign-pagination',
        type: "fraction",
        renderFraction(currentClass, totalClass) {
            return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
        },
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next_phytodesign',
        prevEl: '.swiper-button-prev_phytodesign',
    },
    thumbs: {
        swiper: swiperPhytodesignThumbs,
    },
})

/* phytodesign-end */

/* planting-start */

let swiperPlantingThumbs = new Swiper('.swiper-plantingThumbs', {
    modules: [Pagination, FreeMode],
    slideClass: 'swiper-plantingThumbs__slide',
    slidesPerView: 3,
    watchSlidesProgress: true,
});

let swiperPlanting = new Swiper('.swiper-planting', {
    modules: [Navigation, Pagination, Thumbs],
    slideClass: 'swiper-planting__slide',
    pagination: {
        el: '.swiper-planting-pagination',
        type: "fraction",
        renderFraction(currentClass, totalClass) {
            return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
        },
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next_planting',
        prevEl: '.swiper-button-prev_planting',
    },
    thumbs: {
        swiper: swiperPlantingThumbs,
    },
})

/* planting-end */

/* mobile-swiper-start */

let mobileSwiperServices = new Swiper('.services__mobile-swiper', {
    modules: [Pagination],
    slideClass: 'services__mobile-swiper-slide',
    slideActiveClass: 'services__mobile-swiper-slide_active',
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
        el: '.services__mobile-swiper-pagination',
        type: 'bullets',
        bulletClass: 'services__mobile-swiper-bullet',
        bulletActiveClass: 'services__mobile-swiper-bullet_active',
        clickable: true,
    },
})

/* mobile-swiper-end */

/* services-swipers-end */



/* portfolio-swipers-start */

let swiperPortfolio = new Swiper('.portfolio__swiper', {
    modules: [Navigation, Pagination],
    /* autoHeight: 'true',  */
    slideClass: 'portfolio__swiper-slide',
    pagination: {
        el: '.portfolio__swiper-pagination',
        type: "fraction",
        renderFraction(currentClass, totalClass) {
            return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
        },
        clickable: true,
    },
    navigation: {
        nextEl: '.portfolio__swiper-button-next',
        prevEl: '.portfolio__swiper-button-prev',
    },
})

/* portfolio-swipers-end */

/* reviews-swipers-start */

const breakpoint = window.matchMedia( '(max-width: 376px)' );
    const breakpointChecker = function() {
        if ( breakpoint.matches === true ) {
            return initReviewsSwiper(breakpoint.matches);
                } else if ( breakpoint.matches === false ) {
            return initReviewsSwiper(breakpoint.matches);
        }
};

var settings = {
    // когда ширина окна меньше < 376px
    modules: [Navigation, Pagination],
    loop: 'true',
    slidesPerView: 'auto',
    slideClass: 'reviews__swiper-slide',
    centeredSlides: true,

    a11y: true,
    keyboardControl: true,
    grabCursor: true,

    pagination: {
        el: '.reviews__swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.reviews__swiper-button-next',
        prevEl: '.reviews__swiper-button-prev',
    },
        breakpoints: {
            // когда ширина окна больше или равна > 376px
            376: {
                centeredSlides: false,
                pagination: {
                    el: '.reviews__swiper-pagination',
                    type: "fraction",
                    renderFraction(currentClass, totalClass) {
                        return `<span class="${currentClass}"></span>/<span class="${totalClass}"></span>`;
                    },
                    clickable: true,
                },
            },
        },
}

var reviewsSwiper = new Swiper('.reviews__swiper', settings);

const initReviewsSwiper = function(e) {
    if ( e === true ) {
        reviewsSwiper.destroy();
        reviewsSwiper = new Swiper('.reviews__swiper', settings);
    } else {
        reviewsSwiper.destroy();
        reviewsSwiper = new Swiper('.reviews__swiper', settings);
    }
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();

/* reviews-swipers-end *



/* swiper-config-end */