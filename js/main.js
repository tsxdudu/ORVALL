document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const ul = document.querySelector('.ul');
    const body = document.querySelector('body');

    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            ul.classList.toggle('ativo');
            body.classList.toggle('no-scroll');
        });
    }
});



document.addEventListener("DOMContentLoaded", function() {

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  

    function checkFadeIn() {
      const fadeInElements = document.querySelectorAll('.fade-in');
      fadeInElements.forEach((el) => {
        if (isElementInViewport(el)) {
          el.classList.add('visible');
        }
      });
    }
  

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn();
  });
  