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
  



  
function checkLoginStatus() {
  const loginButton = document.getElementById('login-button');
  const loginLink = document.getElementById('login-link');

  
  const userLoggedIn = localStorage.getItem('userLoggedIn');

  if (userLoggedIn) {
      
      loginButton.textContent = 'Logout';
      loginLink.setAttribute('href', 'index.html'); 

      
      loginButton.addEventListener('click', function() {
          localStorage.removeItem('userLoggedIn');
          window.location.href = 'index.html';
      });
  } else {
      
      loginButton.textContent = 'Login';
      loginLink.setAttribute('href', 'login.html');
  }
}


document.addEventListener('DOMContentLoaded', checkLoginStatus);
