var swiper = new Swiper(".slide-container", {
    slidesPerView: 2,
    spaceBetween: 20,
    sliderPerGroup: 2,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
        slidesPerView: 1,
    },
    520: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
    },
    1000: {
        slidesPerView: 2,
    },
    },
});