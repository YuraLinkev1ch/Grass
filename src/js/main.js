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