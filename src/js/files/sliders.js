import Swiper, { Navigation, Pagination, EffectFade } from "swiper";
import "../../scss/base/swiper.scss";

function initSliders() {
    if (document.querySelector(".testi__swiper")) {
        new Swiper(".testi__swiper", {
            modules: [Navigation, Pagination, EffectFade],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: ".testi__navigation .testi__nav-item_next",
                prevEl: ".testi__navigation .testi__nav-item_prev",
            },
            autoHeight: false,
            watchOverflow: true,
            adaptiveHeight: true,

            pagination: {
                el: ".testi__pagination",
                type: "bullets",
                clickable: true,
            },
        });
    }
}

window.addEventListener("load", function (e) {
    initSliders();
});
