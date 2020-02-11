import "./styles/style.scss"

(function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.header-navigation.navigation');
    const background = document.querySelector('.header__background.background');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        nav.classList.toggle('navigation_open');
        background.classList.toggle('d-block');
    });
}());