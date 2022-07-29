const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('active')
    navBtn.classList.toggle('close')
});