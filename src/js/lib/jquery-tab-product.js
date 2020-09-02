import $ from './jquery.js';

let product = function() {
    $('.preview-list-item').hover(function() {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $('.swiper-slide').eq(index).addClass('swiper-slide-visible swiper-slide-active').siblings().removeClass('swiper-slide-visible swiper-slide-active');
    });
}


export { product };