const menuOpenBtn = document.querySelector('#menu-open-btn');
const menuCloseBtn = document.querySelector('#menu-close-btn');

menuOpenBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-mobile-menu');
})

menuCloseBtn.addEventListener('click', () => {
    menuOpenBtn.click();
})

const swiper = new Swiper('.swiper', {
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});