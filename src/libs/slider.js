import 'swiper/swiper-bundle.css';
import { Swiper, Navigation, Pagination, Scrollbar } from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]);

/**
 * スライダーのセットアップを行う
 */
export default function setupSlider() {
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.c-slider__pagination',
      bulletElement: 'button',
      bulletClass: 'c-slider__dot',
      bulletActiveClass: 'c-slider__dot--active'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.c-slider__nextBtn',
      prevEl: '.c-slider__prevBtn',
    },
  });
}