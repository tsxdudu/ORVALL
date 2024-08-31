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