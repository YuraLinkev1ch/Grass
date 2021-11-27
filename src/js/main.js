let benefitsArrowBtn = document.querySelector('.benefits__arrow-btn');
let benefitsRightWrapper = document.querySelector('.benefits__right-wrapper');

benefitsArrowBtn.addEventListener('click', function() {
    benefitsRightWrapper.classList.toggle('benefits__right-wrapper_open');
    this.classList.toggle('benefits__arrow-btn_active');
});