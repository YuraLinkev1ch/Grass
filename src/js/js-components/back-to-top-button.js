/*back-to-top-button-start*/

(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset +300;
      var coords = document.documentElement.clientHeight;
      
      if (scrolled > coords) {
        goTopBtn.classList.add('back-to-top-btn-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back-to-top-btn-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back-to-top-btn');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();

/*back-to-top-button-end*/