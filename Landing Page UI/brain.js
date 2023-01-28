const burgerMenu = document.querySelector('.burger-lines');
const burgerLines = document.getElementsByClassName('.line');
const closeBtn = document.querySelector('.close-btn');
const sideNavbar = document.querySelector('.side-navbar');

burgerMenu.addEventListener('click', () => {
    burgerMenu.style.visibility = 'hidden';
    closeBtn.style.visibility = 'visible';
    sideNavbar.classList.remove('nonactive');
    sideNavbar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    closeBtn.style.visibility = 'hidden';
    burgerMenu.style.visibility = 'visible';
    sideNavbar.classList.remove('active');
    sideNavbar.classList.add('nonactive');
});